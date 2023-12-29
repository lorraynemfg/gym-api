module.exports = {
    validAlimentos : ( req, res, next )=>{
        const { alimento } =  req.body

        if(alimento.trim() ===''){
            res.status(401).json( { error:true, mensagem: "Deve-se enviar o alimento." } )
        }

        next()
    }
}