const axios = require('axios');
const {q_lista_bodyParts} = require('../config/api_exercicios');
const muscle = require("../services/service")
const muscles = async (req, res) => {
 
    try {
        const responsePartesDoCorpo = await axios.request(q_lista_bodyParts);
        return res.json({
            parte_do_corpo: {
                qnt: responsePartesDoCorpo.data.length,
                partes:responsePartesDoCorpo.data
            },
            musculos: {
                qnt: muscle.length,
                nomes: muscle
            }
        })
        
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

module.exports = muscles;
