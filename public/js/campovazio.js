const mostra = document.getElementById('mostrar')
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')


function teste() {
    if (nome.value == "") {
        mostra.innerHTML = 'Campo nome vazio'
    }
}