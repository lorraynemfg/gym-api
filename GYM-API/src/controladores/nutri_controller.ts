import {Request, Response} from 'express'
import prisma from '../database/connection'

const alimentosNutrientes = {
    all:async (req:Request, res:Response)=>{
        
        try{
            const buscaTodos = await prisma.alimento.findMany({
                include:{
                    Ingradientes:true,
                    Informacoes_nutricionais:true
                }
            })
           
            if(buscaTodos){
                res.status(201).json(buscaTodos)
                return
            }
            res.status(400).json(buscaTodos)

        }catch(err){
            res.status(500).json({msg: 'Server Error'})
        }
    },

    searchAlimento:async (req:Request, res:Response)=>{
        const {alimento} =  req.params

        if(!alimento) return res.status(400).json({msg:'Parametro alimento não encontrado'})
        
        try{

            const result = await prisma.alimento.findMany({
                where: {
                    Ingradientes: {
                      some: {
                        ingradientes: {contains:alimento}   // Substitua 'NomeDoIngrediente' pelo ingrediente que você deseja procurar
                      }
                    }                   
                },
                include:{
                    Ingradientes:true,
                    Informacoes_nutricionais:true
                }                
            })

            if(result){
                res.status(201).json(result)
                return
            }
            res.status(400).json({msg:'não encontrado'})

        }catch(err){
            res.status(500).json({msg: 'Server Error'})
        }
    },

    searchCategoria:async (req:Request, res:Response)=>{
        // categorias [ CARNES, BOLOS, SALADAS, DOCES, ACOMPANHAMENTOS, PATOS PRINCIPAIS, SOBREMESAS        ]
        const {categoria} =  req.params

        try{
            const buscaTodos = await prisma.alimento.findMany({
                where:{
                    categoria:{contains: categoria}
                },
                include:{
                    Ingradientes:true,
                    Informacoes_nutricionais:true
                }
            })
           
            if(buscaTodos){
                res.status(201).json(buscaTodos)
                return
            }
            res.status(400).json(buscaTodos)

        }catch(err){
            res.status(500).json({msg: 'Server Error'})
        }
    },

    searchKalorias:(req:Request, res:Response)=>{
        
    },

    // all:(req:Request, res:Response)=>{
        
    // },

}

export default alimentosNutrientes

// buscar todos
// procurar que contenha
// buscar por kalorias
// buscar por categorias