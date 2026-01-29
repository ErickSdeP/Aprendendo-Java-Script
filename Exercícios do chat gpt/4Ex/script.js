const texto = document.getElementById("texto");
const botao = document.getElementById("btn");

botao.addEventListener("click", function() {
  texto.textContent = "Texto alterado!";
});
