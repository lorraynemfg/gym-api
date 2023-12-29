const { Router } = require("express");
const alimentos = require('../controladores/alimentos_controller')


const alimento = Router();

alimento.post("/gym/alimentos", alimentos.buscarAlimento); //  GET apenas para TESTE - mudar para POST

module.exports = alimento;
