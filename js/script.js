const tela = document.getElementById('tela')

function exibirNaTela(valor) {
    
    // Evitar que o 0 apareça no primeiro algarismo do número; A condição que usa o typeof serve para evitar que um operador(+,-,...) apareça no início da expressão
    if (tela.innerHTML == 0 && typeof(valor) === 'number') {
        tela.innerHTML = null
    }

    
    tela.innerHTML += valor
}