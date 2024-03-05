
import { Router } from "express";
import alimentosNutrientes from "../controladores/nutri_controller";
//import  md_alimento from '../middleaware/alimentos_middleware'

const alimentosNutri = Router();

alimentosNutri.get("/gym/nutri/all",alimentosNutrientes.all); //  GET apenas para TESTE - mudar para POST
alimentosNutri.get("/gym/nutri/alimento/:alimento",alimentosNutrientes.searchAlimento); //  GET apenas para TESTE - mudar para POST
alimentosNutri.get("/gym/nutri/categoria/:categoria",alimentosNutrientes.searchCategoria); //  GET apenas para TESTE - mudar para POST

export default alimentosNutri; 