const { Router } = require("express");
const alimento = require('./alimentos_router')
const exercicio = require('./exercicio_router')
const calculo = require('./calculo_router')


const routes = Router();

routes.use(alimento)
routes.use(exercicio)
routes.use(calculo)




module.exports = routes;
