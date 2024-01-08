import {Request, Response} from 'express'
import prisma from '../database/connection'
import Excel from '../services/excel/excelTranformDb'
import { teste } from './teste'


const excelFileController = {
    execute:async (req:Request, res:Response)=>{
        try{
            const buscaTodos = await prisma.alimento.findMany({
                include:{
                    Ingradientes:true,
                    Informacoes_nutricionais:true
                }
            })
            const excel = new Excel()
            const ex = excel.excelExport(buscaTodos) 
            
            if(buscaTodos){
                //res.status(201).json(buscaTodos)
                res.status(201).json({msg:'Ainda em desenvolvimento essa função'})
                return
            }
            res.status(201).json({msg:'nem um resultado'})

        }catch(err){
            res.status(500).json({msg: 'Server Error'})
        }
    }
}

export default excelFileController