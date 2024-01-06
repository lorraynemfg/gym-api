import axios from 'axios';
import  { q, translate } from '../config/api_alimentos'
import {Request, Response} from 'express'

const alimentos =  {
    buscarAlimento: async (req:Request, res:Response) => {
        const {alimento, qnt_min, qnt_max}= req.body
      try {
        const response = await axios.request(q(alimento));
        const onlyRecipes = response.data.hits;
    
        const onlyProtein = onlyRecipes.filter((i:any) => {
          return i.recipe.totalNutrients.PROCNT.quantity <= Number(qnt_max) && i.recipe.totalNutrients.PROCNT.quantity >= Number(qnt_min)-5 ;
        });
    
     const onlyRecipeNames = await Promise.all(
        onlyProtein.map(async (i:any) => {
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

export default alimentos