const sorteioDiv = document.querySelector('div.numerosArr')
const celulas = document.getElementsByClassName('celulas')
const botao = document.querySelector('input.sorteioBtn')
const titulo = document.querySelector('div.container-titulo')

const timer = (segundos) =>  {                                                      //função criada para setar um tempo, pois  a unidade de medida de setTimeout é em milisegundos
    let time = segundos * 1000
    return new Promise(res => setTimeout(res, time))                                //retorna uma promessa que se resolve após esses milisegundos
}

const jindividual = () => {                                                         //função principal, que chama outras funções
    let arrNumeros = []                                                             //declarando lista vazia que será preenchida com os 6 números
    for (j = 0; j < 6; j++) {                                                       //loop de repetição que cria 6 números aleatórios
        let numSorteado = Math.floor(Math.random() * 60 + 1)                            //Math.floor arredonda o número para baixo, função Math.random traz um número maior ou igual a 0 e menor que 1 e multiplicamos por 60 + 1
        for (i = 0; i < arrNumeros.length; i++) {                                       //outro loop for que analisa se o número sorteado é igual ao número anterior sorteado
            if (numSorteado === arrNumeros[i]) {
                numSorteado = Math.floor(Math.random() * 60 + 1); i = -1;               //se for, diminui 1
            }
        }
        arrNumeros[i] = numSorteado;
    }

    arrNumeros = arrNumeros.sort(function (a, b) { return a - b })                      //colocando os números sorteados em ordem crescente

    while (sorteioDiv.hasChildNodes()) {                                                //renderizando o código no HTML
        sorteioDiv.removeChild(sorteioDiv.firstChild);
    }
    async function mostrarNum() {
        for (let i = 0; i < arrNumeros.length; i++) {
            sorteioDiv.innerHTML += `
        <div class="celulas">${arrNumeros[i]}</div>`
            await timer(1.5)
        }
    }
    console.log(arrNumeros)
    mostrarNum()
}
botao.addEventListener('click', jindividual)
