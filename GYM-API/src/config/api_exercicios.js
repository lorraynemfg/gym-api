const q_exercicio_body = (params) => {
  
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${params}`,
    params: {
    limit: '100'
    },
    headers: {
      'X-RapidAPI-Key': '410be8b805msh476a068974e87eep116143jsna243c6311965',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  return options
}

const q_lista_bodyParts = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '410be8b805msh476a068974e87eep116143jsna243c6311965',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


module.exports = { q_exercicio_body, q_lista_bodyParts }
