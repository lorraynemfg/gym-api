const xl = require('excel4node');
const fs = require('fs')
import arrayExcelPrepare from './dbPrepareExcel'


export default class Excel{
    private nameFile = 'tableNutri.xlsx'
    private wb
    private table

    constructor(){
        // if(fs.existsSync(`${__dirname}/${this.nameFile}`)){
        //     fs.unlinkSync(`./${this.nameFile}`)
        // }

        this.wb = new xl.Workbook();
        this.table = this.wb.addWorksheet('Sheet 1');
    }

    private insertRows(database){
        const dbData = arrayExcelPrepare(database)
        const nameTabe= Object.keys(dbData[0])
        
        // INSERT VALUES
        let countValue = 0
        for(let x=2; x < dbData.length; x++){            
            for(let y=1; y < nameTabe.length+1; y++){  
                const valoresArray = Object.values(dbData[countValue]) 
                
                if(valoresArray.length === nameTabe.length){
                    const inserindoHeaders = this.table.cell(x,y).string(valoresArray[countValue])
                    //console.log(x,y, countValue)
                    //console.log(valoresArray[countValue])                        
                }                    
                countValue < nameTabe.length-1? countValue++: countValue=0                
            }
        }   
    }
    
    private headers(database){
        const dbData = database
                
        if(!Array.isArray(dbData)){
            console.log('[{ key : value },{ key : value },{ key : value }]')
            throw Error('dbData deve ser um [ARRAY]')
        }        
        
        const nameTabe= Object.keys(dbData[0])        

        let count = 0
        //  INSERT HEADERS
        for(let i=1; i < nameTabe.length+1; i++){
            for(let j=1; j < nameTabe.length+1; j++){
                
    //         inserindo os Headers
                if(count < nameTabe.length){
                    const inserindoHeaders = this.table.cell(i,j).string(nameTabe[count])
                    count++
                }       
            }
        }

    }

    async excelExport(database){
        const dbData = arrayExcelPrepare(database)
        this.headers(dbData)
        this.insertRows(database)
        //this.save()
    }

    private save(){
        this.wb.write(this.nameFile)
    }
} 