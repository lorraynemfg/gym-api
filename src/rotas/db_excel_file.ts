
import { Router } from "express";
import excelFileController from "../controladores/excel_file";

const exelFile = Router();

exelFile.get("/gym/nutri/excel",excelFileController.execute); 

export default exelFile;


