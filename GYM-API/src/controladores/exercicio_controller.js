const axios = require('axios');
const {q_exercicio_body} = require('../config/api_exercicios');
const muscle = require("../services/service")
const exercicios = async (req, res) => {
    
    try {
        const responsePartesDoCorpo = await axios.request(q_exercicio_body(req.params.parte_do_corpo));

        if (!req.body.alvo) {
            return res.json(responsePartesDoCorpo.data)
        }
        
        const filtro=responsePartesDoCorpo.data.filter((i) => {
            return i.target===req.body.alvo || i.secondaryMuscles.some((muscle)=> muscle=== req.body.alvo)
        })
        
        return res.json(filtro)
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

module.exports = exercicios;
