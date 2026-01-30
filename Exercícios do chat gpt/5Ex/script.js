const numero = document.getElementById("numero")
const botao = document.getElementById("botao")

let valor = 0

botao.addEventListener("click", function() {
    valor++;
    numero.textContent = valor;
})