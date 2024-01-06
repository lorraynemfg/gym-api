"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api_alimentos_1 = require("../config/api_alimentos");
const alimentos = {
    buscarAlimento: async (req, res) => {
        const { alimento, qnt_min, qnt_max } = req.body;
        try {
            const response = await axios_1.default.request((0, api_alimentos_1.q)(alimento));
            const onlyRecipes = response.data.hits;
            const onlyProtein = onlyRecipes.filter((i) => {
                return i.recipe.totalNutrients.PROCNT.quantity <= Number(qnt_max) && i.recipe.totalNutrients.PROCNT.quantity >= Number(qnt_min) - 5;
            });
            const onlyRecipeNames = await Promise.all(onlyProtein.map(async (i) => {
                const title = await (0, api_alimentos_1.translate)(i.recipe.label);
                const ingre = await (0, api_alimentos_1.translate)(i.recipe.ingredientLines);
                return {
                    title,
                    ingredientLines: ingre.split(','),
                    MACRO_NUTRIENTS: {
                        PROCNT: i.recipe.totalNutrients.PROCNT.quantity,
                        CHOCDF: i.recipe.totalNutrients.CHOCDF.quantity,
                        FAT: i.recipe.totalNutrients.FAT.quantity,
                        ENERC_KCAL: i.recipe.totalNutrients.ENERC_KCAL.quantity,
                    },
                    more_informations: i.recipe.shareAs
                };
            }));
            onlyRecipeNames.unshift(onlyRecipeNames.length);
            return res.json(onlyRecipeNames);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
exports.default = alimentos;
