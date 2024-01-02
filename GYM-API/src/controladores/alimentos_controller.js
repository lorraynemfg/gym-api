const axios = require('axios');
const { q, translate } = require('../config/api_alimentos')


module.exports = {
    buscarAlimento: async (req, res) => {
        const {alimento, qnt_min, qnt_max}= req.body
      try {
        const response = await axios.request(q(alimento));
        const onlyRecipes = response.data.hits;
    
        const onlyProtein = onlyRecipes.filter((i) => {
          return i.recipe.totalNutrients.PROCNT.quantity <= Number(qnt_max) && i.recipe.totalNutrients.PROCNT.quantity >= Number(qnt_min)-5 ;
        });
    
     const onlyRecipeNames = await Promise.all(
        onlyProtein.map(async (i) => {
          const title = await translate(i.recipe.label);
          const ingre = await translate(i.recipe.ingredientLines);
    
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
        })
      );
        onlyRecipeNames.unshift(onlyRecipeNames.length)
        
      return res.json(onlyRecipeNames);
      } catch (error) {
      
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
}