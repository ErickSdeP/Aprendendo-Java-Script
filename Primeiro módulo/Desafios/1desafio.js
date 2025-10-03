const combustivel = 5.79;
const KmPorLitro = 10;
const distancia = 100;

const gasolinaGasta = distancia/KmPorLitro;
const valorTotal = gasolinaGasta*combustivel;

console.log(valorTotal.toFixed(2));