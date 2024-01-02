const { Router } = require("express");
const exercicios = require("../controladores/exercicios_controller")

const exercicio = Router();

exercicio.get("/gym/exercicio/:name", exercicios)

module.exports = exercicio;
