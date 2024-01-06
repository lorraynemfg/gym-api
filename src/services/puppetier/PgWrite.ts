import { Page } from 'puppeteer'
import PgUltils from './PgUltils'

export default class PgWrite extends PgUltils{
    
    constructor(private readonly page:Page){
        super(page)
    }

    async selectWrite(seletor:string, text:string){        

        const typeSelect = this.typeSelect(seletor)
        
        if(typeSelect === 'NULL'){
            console.log(`write Error: Select invalido ! ${seletor}`)
        }

        switch(typeSelect){
            case "ID" :
                await this.writeID(seletor, text)
                break

            case "CLASS" :
                await this.writeCLASS(seletor, text)
                break

            case "PATH" :
                await this.writePATH(seletor, text)
                break

            default :
                console.log(`click Error: Select invalido ! ${seletor}`)
        }           
    }    

    private async writeID(select:string, text:string):Promise<boolean>{        
        try{
            await this.page.waitForSelector(select,{visible:true})
            await this.page.type(select,text)
            return true
            
        }catch(err){
            console.log(`writeID error: ${err}`)
            return false
        }
    }

    private async writeCLASS(select:string, text:string):Promise<boolean>{
        try{
            await this.page.waitForSelector(select,{visible:true})
            await this.page.type(select,text)
            return true
            
        }catch(err){
            console.log(`writeCLASS error: ${err}`)
            return false
        }
    }
    
    private async writePATH(select:string, text:string):Promise<boolean>{
        try{
            await this.page.waitForXPath(select, {visible:true})
            await this.page.type(select,text)
            return true
            
        }catch(err){
            console.log(`writePATH error: ${err}`)
            return false
        }
    }
}