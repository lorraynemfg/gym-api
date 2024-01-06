import {Page} from 'puppeteer'

enum SelectType{
    ID='ID',
    CLASS='CLASS',
    PATH='PATH',
    NULL = 'NULL'
}

export default class PgUltils{
    #page
    
    constructor(page:Page){
        this.#page = page        
    }    
    
    typeSelect(select:string):SelectType{
        this.#page.once('load',()=>{
            console.log('Pagina carregada')
        })
        
        if((/^#.+/.test(select))){
            return SelectType.ID
        }
        else if((/^\/\/.+/.test(select))){
            return SelectType.PATH
        }
        else if((/^\..+/.test(select))){
            SelectType.CLASS
        }
        return SelectType.NULL
    }    

    private async waitFunction():Promise<boolean>{
        // função para esperar algum elemento ser exibido no DOM, quando presente retorna TRUE
        
        try{
            const username = '#title > h1 > yt-formatted-string';  
            
            const ok = await this.#page.waitForFunction(
                (username) => {
                return document.querySelector(username);
            },
            { polling:'mutation',timeout: 30000 },
            username
            );
            console.log('encontrado essa porcaria')

            return true
        }catch(err){
            console.log(`evalueteDom() error: ${err}`)
            return false
        }
    }
}