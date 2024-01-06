import  { Router } from "express";
import alimento from './alimentos_router'
import  exercicio from './exercicio_router'
import  calculo from './calculo_router'
import alimentosNutri from './alimentos_nutri'


const routes = Router();

routes.use(alimento)
routes.use(exercicio)
routes.use(calculo)
routes.use(alimentosNutri)


export default routes;
