const { Router } = require("express");
const exercicios = require('../controladores/exercicio_controller')
const exercicio = Router();

exercicio.get("/gym/exercicio/:parte_do_corpo", exercicios);

module.exports = exercicio;