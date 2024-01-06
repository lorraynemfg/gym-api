
import puppeteer, {Page, Browser} from  'puppeteer';
import PgClick from './PgClick';
import PgWrite from './PgWrite';
import JavaDom from './PgScript';



const configLaunch = ()=>{
    return {
        headless:false,              // mostrar navegador
        waitForInitialPage:true     // esperar a pagina iniciar
    }
}

export default class Navegador{
    readonly browser:Browser;
    readonly page:Page;

    private click:PgClick;
    private write:PgWrite
    private script:JavaDom;

    constructor(browser:Browser, page:Page){
        this.browser = browser
        this.page = page
        this.click = new PgClick(page)
        this.write = new PgWrite(page)  
        this.script = new JavaDom(page)  
    }

    static async execute(){
        const browser = await puppeteer.launch(configLaunch());
        const page = await browser.newPage();    
        const puppet = new Navegador(browser, page)
        return puppet;
    }

    async goTo( site:string ){
        const regexSite = /^https?:\/\/.+/gi
        const checkedSite = regexSite.test(site)
        
        if(checkedSite){
            await this.page.goto( site )
            return
        }
        await this.closeBrowser()
    }
    
    async closeBrowser(){
        await this.browser.close()
    }   

    async closePage(){
        await this.page.close()
    }  

    async clickElement(select:string){
        await this.click.selectClick(select)
    }

    async writeElement(select:string, text:string){
        await this.write.selectWrite(select, text)
    }

    async scriptDom(callback: ()=> void){
        await this.script.insertJavaScript(callback)
    }   
}