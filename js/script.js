const tela = document.getElementById('tela')

let identificadorDeExpressão = []


function apagarCaractere(txt) {
    let resultado = ""
    for (let c = 0;c< txt.length-1;c++) {
        resultado += txt.charAt(c)
    } //Rescreve todo o texto recebido com exceção do último caractere

    return resultado
}

function funcionamentoCalculadora(valor) { //RESOLVER PROBLEMA DAS DUAS VÍRGULAS NUM MESMO NÚMERO
    function exibirNaTela(valor) {
        
        if (tela.innerHTML == 0 && typeof(valor) === 'number') {
            tela.innerHTML = null
            tela.innerHTML += valor
            // Evitar que o 0 apareça no primeiro algarismo do número exibido; A condição que usa o typeof serve para evitar que um operador(+,-,...) apareça no início da expressão
        } else if(valor === 'clear'){
            tela.innerHTML = 0
            //zerar a expressão exibida
        } else if(valor === 'apagarUltimoCaractere') {
            tela.innerHTML = apagarCaractere(tela.innerHTML)
            //apagar último caractere
        } else {
            tela.innerHTML += valor
        }

    }

    function operação() {
        //Fazer as operações
    }

    exibirNaTela(valor)
    
    identificadorDeExpressão.push(valor)

    
}



