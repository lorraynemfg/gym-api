const q_exercicio = (params) => {
    const options ={
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/target/${params}`,
      headers: {
        'X-RapidAPI-Key': '410be8b805msh476a068974e87eep116143jsna243c6311965',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    return options
}

const q_lista = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
    headers: {
        'X-RapidAPI-Key': '410be8b805msh476a068974e87eep116143jsna243c6311965',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
   


module.exports = {q_exercicio, q_lista}
