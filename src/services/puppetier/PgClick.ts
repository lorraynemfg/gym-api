import { Page } from 'puppeteer'
import PgUltils from './PgUltils'

export default class PgClick extends PgUltils{

    constructor(private readonly page:Page){
        super(page)
        //this.#page = page        
    }
    
    async selectClick( seletor:string ){
        const typeSelect = this.typeSelect(seletor)
        
        if(typeSelect === 'NULL'){
            console.log(`click Error: Select invalido ! ${seletor}`)
        }

        switch(typeSelect){
            case "ID" :
                await this.clickID(seletor)
                break

            case "CLASS" :
                await this.clickCLASS(seletor)
                break

            case "PATH" :
                await this.clickPATH(seletor)
                break

            default :
                console.log(`click Error: Select invalido ! ${seletor}`)
        }   
    }

    private async clickID(select:string):Promise<boolean>{
        try{
            await this.page.waitForSelector(select, {visible:true})
            await this.page.click(select)
            return true
        }catch(err){
            console.log(`clickID error: ${err}`)
            return false
        }
    }

    private async clickCLASS(select:string):Promise<boolean>{
        try{
            await this.page.waitForSelector(select, {visible:true})
            await this.page.click(select)
            return true
        }catch(err){
            console.log(`clickCLASS error: ${err}`)
            return false
        }
    }
    
    private async clickPATH(select:string):Promise<boolean>{        
        try{
            await this.page.waitForXPath(select, {visible:true})
            await this.page.click(select)
            return true
            
        }catch(err){
            console.log(`clickPATH error: ${err}`)
            return false
        }
    }
}