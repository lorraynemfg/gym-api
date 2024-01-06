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


{
  nome: 'Arroz com legumes de micro-ondas',
  imagem: 'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=1259&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)',
  tempo_preparo: '15 minutos',, errors: 0 (0.00%)
  rendimento: '5 porçoes', (@ 0.36 pages/second)
  gramas_por_porcao: '173 g',3% memory
  ingradientes: [
    '2,0 xícaras (chádeÁgua',br/receitas/1260-batata-recheada-no-micro-ondas
    'Sal refinado gosto',com.br/receitas/1259-arroz-com-legumes-de-micro-ondas
    'Pimenta-do-reino em pgosto',
    '1,0 xícara (chádeArroz integral cru',
    '100,0 gramas deQueijo Muçarela Light',
    '0,5 latas deSeleta de legumes Qualit'
  ],
  preparo: '* Em um recipiente próprio para micro-ondas, coloque o arroz, a água, sal e pimenta do reino a gosto.* Logo após leve ao micro-ondas em potência alta por 9 minutos.* Retire o recipiente e adicione a seleta de legumes e a mussarela cortada em cubos pequenos.*Retorne ao micro-ondas por mais 3 minutos.*Sirva em seguida.',
  informacoes_nutricionais: [
    'Calorias 200,94 kcal',
    'Carboidratos 31,49 g',
    'Proteínas 8,77 g',
    'Gorduras Totais 4,30 g',
    'Gord. Saturadas 1,68 g',
    'Gord. Trans 0,00 g',
    'Fibras 2,38 g',
    'Sódio 242,92 mg'
  ]
}
