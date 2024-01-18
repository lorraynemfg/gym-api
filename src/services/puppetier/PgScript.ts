import { Page } from 'puppeteer'


export default class JavaDom{

    constructor(private readonly page:Page){
    }
    
    async insertJavaScript( callback: ()=> void){
        this.evalueteDom(callback)  
    }        

    private async evalueteDom( callback: ()=> void):Promise<boolean>{
        try{
            const sc = await this.page.evaluate(callback)      
            return true
        }catch(err){
            console.log(`evalueteDom() error: ${err}`)
            return false
        }
    }   
}