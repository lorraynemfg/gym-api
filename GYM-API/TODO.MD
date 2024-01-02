site 
    https://vitat.com.br/receitas/189-bolo-de-maca


const nomeReceita = document.querySelector(".heading").innerText

const ingradientes = document.querySelectorAll(".detail__group").forEach(tt => console.log(tt.innerText))

const tempo_de_preparo = document.querySelector(".detail__info .heading").innerText

const porcoes = document.querySelector("#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-8 > 
div:nth-child(2) > div > div > div:nth-child(2) > div > span").innerText

const gramas_por_porcao = document.querySelector("#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-8 > div:nth-child(2) > div > div > div:nth-child(3) > div > span").innerText

const imagem = https://vitat.com.br + document.querySelector("#Content > div > div:nth-child(1) > div.col-lg-12 > div > div.col-lg-4 > img").getAttribute('src')

const informacoes_nutricionais =  document.querySelectorAll(".informacoes-nutricionais  > ul > li").forEach((mexeu)=> console.log(mexeu.innerText))


{
    nome: "bolo de laranja",
    imagem: "imagem produto",
    tempo_preparo: '50 minutos'
    rendimento: "12 porçoes",
    gramas_por_porcao: "119 g"
    ingradientes:[
        "1,5 xícaras (chá) de Açúcar refinado Fit União",
        "1,0 colher (chá) de Canela em pó",
        "3,0 xícaras (chá) de Farinha de trigo comum"
    ]
    preparo: "
        Na batedeira, bata os ovos, o creme vegetal e o açúcar até formar um creme esbranquiçado.
        "
    info_nutricionais: {
        proteina: "99,00"
        carboidrato: "99,00"
        gorduras_totais: "99,00"
        fibras: "99,00"
        gordura_trans: "99,00"
        calorias: "99,00"
        gordura_saturada: "99,00"
        sodio: "99,00"
    }
}
