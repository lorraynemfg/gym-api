const { Router } = require("express");
const alimentos = require('../controladores/alimentos_controller')
const md_alimento = require('../middleaware/alimentos_middleware')

const alimento = Router();

alimento.post("/gym/alimentos",md_alimento.validAlimentos, alimentos.buscarAlimento); //  GET apenas para TESTE - mudar para POST

module.exports = alimento;
