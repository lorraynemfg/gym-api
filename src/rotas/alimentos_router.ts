import { Router } from "express";
import alimentos from '../controladores/alimentos_controller'
import  md_alimento from '../middleaware/alimentos_middleware'

const alimento = Router();

alimento.post("/gym/alimentos",md_alimento.validAlimentos, alimentos.buscarAlimento); //  GET apenas para TESTE - mudar para POST

export default alimento;
