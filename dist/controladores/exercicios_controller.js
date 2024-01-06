"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api_calculo_1 = require("../config/api_calculo");
const exercicios = async (req, res) => {
    const { name } = req.params;
    try {
        if (name === 'exercicios') {
            const response_name = await axios_1.default.request(api_calculo_1.q_lista);
            return res.json(response_name.data);
        }
        const response = await axios_1.default.request((0, api_calculo_1.q_exercicio)(name));
        response.data.forEach((i) => {
            delete i.id;
        });
        res.json(response.data);
    }
    catch (error) {
        return res.status(500).json({ error: 'Nomes de parametros válidos: abductors, abs, adductors, biceps, calves, cardiovascular system, delts, forearms, glutes, hamstrings, lats, levator scapulae, pectorals, quads, serratus anterior, spine, traps, triceps e upper back' });
    }
};
exports.default = exercicios;
