import { Cluster } from "puppeteer-cluster";
import AlimentosNutricionais from '../../../database/querys/querys'
import schemaPrepare from './scrapPrepareSchema'

(async ()=>{
    
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: 4,
        monitor:true
    });    
    
    async function LinksScrapPage({ page, data: url }:any){
                
        await page.goto(url);

        // BUSCAR A ULTMA PAGINA 
        const lastPage = await page.$$eval("#Wrapper > div.pagenav.pagenav-full > div > a",(el:string[])=>{
            if(el){
                const pages = el.map((index:any) => {
                    if(index.textContent!.trim() !== ''){
                        return Number(index.textContent)
                    }                     
                })                
                return pages[pages.length -1]
            }
        })

        
        let todasReceitar:string[] = []

        // PERCORRER TODAS AS PAGINAS E PEGAR OS LINKS
        if (lastPage !== undefined) {
            for (let i = 1; i < lastPage; i++) {
                
                const regexLink = /\?p=\d+/
                const links = url.replace(regexLink, `?p=${i}`); // parcear por todos links

                await page.goto(links);

                //scrap dos liks das paginas
                const todosLinks = await page.$$eval("#section-listas > div > div > ul > li > div > a",(element:string[])=>{
                    if(element){
                        const ingra = element.map((xxx:any)=> {
                            return 'https://vitat.com.br' + xxx.getAttribute('href')
                        })
                        return ingra
                    }
                })

                if(todosLinks != undefined){
                    todasReceitar = [...todasReceitar, ...todosLinks]
                }else {
                    console.log('todos os Links é indefinido. Não é possível iterar.');
                    await page.closeBrowser()
                }
            }
        } else {
            console.log('lastPage é indefinido. Não é possível iterar.');
            await page.closeBrowser()
        }      

        // REALIZA O SCRAP DAS PAGINAS
        Object.values(todasReceitar).forEach(scrapPge =>{
            cluster.queue(scrapPge, PageScrap)
        })
            
        };    
    
    async function PageScrap({ page, data: url }:any){
        let resultadoPage1 = {}
        await page.goto(url);        
        
        const receita = await page.evaluate(()=>{
            const scrapReceita:any = {}
            
            //nome ok
            const nomeReceita = document.querySelector('.heading')
            scrapReceita['nome'] = nomeReceita!.textContent
    
            // CATEGORIA
            const categoria = document.querySelector('#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-8 > div:nth-child(1) > div > a:nth-child(3)')
            scrapReceita['categoria'] = categoria?.textContent
    
            //imagem OK
            const imagem = 'https://vitat.com.br' + document.querySelector("#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-4 > img")?.getAttribute('src')
            scrapReceita['imagem'] = imagem
    
            //tempo de preparo OK
            const tempo_de_preparo = document.querySelector(".detail__info .heading")
            scrapReceita['tempo_preparo'] = tempo_de_preparo?.textContent
            
            const rendimento = document.querySelector("#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-8 > div:nth-child(2) > div > div > div:nth-child(2) > div > span")?.textContent
            scrapReceita['rendimento'] = rendimento
    
    
            //porções  OK
            const porcoes = document.querySelector("#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-8 > div:nth-child(2) > div > div > div:nth-child(3) > div > span")?.textContent
            scrapReceita['gramas_por_porcao']= porcoes                               
            
            return scrapReceita
        })
    
        // OK
        const ingradientes = await page.$$eval('.detail__group',(nutri:string[])=>{
            if(nutri){
                const ingra = nutri.map((ingr:any)=> {
                    const regexNutri = /\W\s/gi
                    return ingr.textContent?.replace(regexNutri,'').trim()
                })
                return ingra
            }
        })
        receita['ingradientes']=ingradientes
        
        //OK
        const preparo = await page.$eval('#Content > div > div:nth-child(1) > div.col-lg-8 > div:nth-child(2) > p',(nutri:any)=>{
            if(nutri){
                const prep = nutri.textContent?.trim()
                return prep
            }
        })
        receita['preparo']=preparo
    
        // OK
        const informacoes_nutricionais = await page.$$eval('.informacoes-nutricionais  > ul > li',(nutri:string[])=>{
            if(nutri){
                const getNutri = nutri.map((mexeu:any)=> mexeu.textContent?.trim())
                return getNutri
            }
        })
        receita['informacoes_nutricionais']=informacoes_nutricionais
       
        resultadoPage1 = {...resultadoPage1, ...receita} // junta todos dados da pagina
        
        const refazer_json = schemaPrepare(resultadoPage1)

        AlimentosNutricionais.create(refazer_json)  // salva no Bd
    }
    
    async function mainScrap(){
    const categorias = {
        acompanhamentos:'https://vitat.com.br/receitas/categoria/2-acompanhamentos?p=1',
        saladas:'https://vitat.com.br/receitas/categoria/16-saladas?p=1',
        bolos: 'https://vitat.com.br/receitas/categoria/7-bolos?p=1',
        carnes: 'https://vitat.com.br/receitas/categoria/8-carnes?p=1',
        sobremesas:'https://vitat.com.br/receitas/categoria/19-sobremesas?p=1',
        doces: 'https://vitat.com.br/receitas/categoria/9-doces?p=1',
        pratos_principais: 'https://vitat.com.br/receitas/categoria/15-pratos-principais?p=1',
        paes:'https://vitat.com.br/receitas/categoria/13-paes?p=1'
    }

    // BUSCA TODOS OS LINKS DAS PAGINAS
    Object.values(categorias).forEach(linkFinal =>{
        cluster.queue(linkFinal, LinksScrapPage)
    })    
   }

   //start
   mainScrap()
   
})()

// documentação cluster
//  https://github.com/thomasdondorf/puppeteer-cluster/blob/master/examples/function-queuing-complex.js

