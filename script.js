let n = document.getElementsByClassName('botao')

for (let pos in n) {
    n[pos].addEventListener('click',numeros)
}

function numeros() {
    window.alert('funciona')
}