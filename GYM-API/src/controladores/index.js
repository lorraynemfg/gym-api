const axios = require('axios');

const q = (params)=>{
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2',
      params: {
        type: 'public',
        'q':params,
        beta: 'true',
        random: 'true',
        'cuisineType[0]': 'American',
        'imageSize[0]': 'LARGE',
        'mealType[0]': 'Breakfast',
        'health[0]': 'alcohol-cocktail',
        'diet[0]': 'balanced',
        'dishType[0]': 'Biscuits and cookies'
      },
      headers: {
        'Accept-Language': 'en',
        'X-RapidAPI-Key': '410be8b805msh476a068974e87eep116143jsna243c6311965',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
    return options
}
const translate = async (word)=>{
    const encodedParams = new URLSearchParams();
    encodedParams.set('from', 'auto');
    encodedParams.set('to', 'pt');
    encodedParams.set('text', word);

    const response = {
        method: 'POST',
        url: `https://google-translate113.p.rapidapi.com/api/v1/translator/text`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '410be8b805msh476a068974e87eep116143jsna243c6311965',
          'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        data: encodedParams,
      };
      const translated = await axios.request(response);
      return translated.data.trans
}

const test = async (req, res) => {
    const {params}= req.body

  try {
    const response = await axios.request(q(params));
    const onlyRecipes = response.data.hits;

    const onlyProtein = onlyRecipes.filter((i) => {
      return i.recipe.totalNutrients.PROCNT.quantity <= 25;
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

  return res.json(onlyRecipeNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = test;
