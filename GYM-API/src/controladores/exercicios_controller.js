const axios = require('axios');
const { q_exercicio, q_lista } = require('../config/api_calculo');

const exercicios = async (req, res) => {
    const { name } = req.params
    
    try {
        if (name === 'exercicios') {
            const response_name = await axios.request(q_lista);
            return res.json(response_name.data)
        }

        const response = await axios.request(q_exercicio(name));
        response.data.forEach((i) => {
            delete i.id;
        });

	    res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: 'Nomes de parametros válidos: abductors, abs, adductors, biceps, calves, cardiovascular system, delts, forearms, glutes, hamstrings, lats, levator scapulae, pectorals, quads, serratus anterior, spine, traps, triceps e upper back' });
    }
}

module.exports = exercicios