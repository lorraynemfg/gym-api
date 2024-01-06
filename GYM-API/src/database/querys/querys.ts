import prisma from "../connection";

interface CreateInterface<T> {
    name:string
    categoria:string
    gramas_por_porcao:string
    imagem:string
    rendimento:string 
    tempo_preparo:string
    ingradientes:string
    preparo:string
    calorias:string
    carboidratos:string
    proteinas:string
    gorduras_totais:string
    gorduras_saturadas:string
    gorduras_trans:string
    fibras:string
    sodio:string
}

class  AlimentosNutricionais {
    private prisma

    constructor(){
        this.prisma = prisma
    }
    //  https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries
    async create<T>(data:CreateInterface<T>){
        const {
            name, 
            categoria,
            gramas_por_porcao, 
            imagem, 
            rendimento, 
            tempo_preparo,
            ingradientes,
            preparo,
            calorias,
            carboidratos,
            proteinas,
            gorduras_totais,
            gorduras_saturadas,
            gorduras_trans,
            fibras,
            sodio
        } = data

        try{
            await this.prisma.alimento.create({
                data:{
                    name,
                    categoria,
                    gramas_por_porcao,
                    imagem,
                    rendimento,
                    tempo_preparo,
                    
                    Ingradientes:{
                        create:{
                            ingradientes,
                            preparo
                        }
                    },
    
                    Informacoes_nutricionais:{
                        create:{
                            calorias,
                            carboidratos,
                            proteinas,
                            gorduras_totais,
                            gorduras_saturadas,
                            gorduras_trans,
                            fibras,
                            sodio
                        }
                    }    
                }
            })
            
        }catch(err){
            console.log(err)
        }
    }
}

export default new AlimentosNutricionais()