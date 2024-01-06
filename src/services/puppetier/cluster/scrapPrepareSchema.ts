function schemaPrepare<T>(data:T){

  const newObject:any = {}
  const oldObject = Object.entries(data as {})
  
  oldObject.forEach(([key, value ])=> {

    if(key == 'nome'){
      newObject['name']= value
    }

    if(key == 'ingradientes'){
      if(Array.isArray(value)){
        const separador = value.join(' || ')
        newObject[key]= separador
        return
      }
    }

    if(key == 'informacoes_nutricionais'){        
        const orderSchema = ['calorias', 'carboidratos', 'proteinas', 'gorduras_totais', 'gorduras_saturadas', 'gorduras_trans',
            'fibras',
            'sodio'
        ]

        if(Array.isArray(value)){
          value.forEach((info, index) =>{
            const regex = /(\w).* (\d+,.*\b)/g
            const valores = info.replace(regex, '$2')
            newObject[orderSchema[index]]= valores
        })
        return
      }}
      newObject[key]= value
  })
  return newObject
}
export default schemaPrepare