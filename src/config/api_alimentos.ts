import axios from 'axios';

export const q = (params:string)=>{
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

export const translate = async (word:string)=>{
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