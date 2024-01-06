import {Request, Response, NextFunction} from 'express'


const validation = {
    validAlimentos : ( req:Request, res:Response, next:NextFunction )=>{
        const {alimento, qnt_min, qnt_max}= req.body

        if(alimento.trim() ===''){
            res.status(401).json( { error:true, mensagem: "Deve-se enviar o alimento." } )
        }
         if(!qnt_min || !qnt_max){
            res.status(401).json( { error:true, mensagem: "Deve-se enviar a quantidade mínima e máxima de proteina." } )
        }

        return next()
    }
}

export default validation