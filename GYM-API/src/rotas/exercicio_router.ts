import { Router } from "express";
import exercicios from "../controladores/exercicios_controller"

const exercicio = Router();

exercicio.get("/gym/exercicio/:name", exercicios)

export default exercicio;
