import  { Router } from "express";
import alimento from './alimentos_router'
import  exercicio from './exercicio_router'
import  calculo from './calculo_router'
import alimentosNutri from './alimentos_nutri'
import exelFile from './db_excel_file'


const routes = Router();

routes.use(alimento)
routes.use(exercicio)
routes.use(calculo)
routes.use(alimentosNutri)
routes.use(exelFile)


export default routes;
