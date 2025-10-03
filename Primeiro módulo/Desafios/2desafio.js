const etanol = 5.79;
const gasolina = 6.66;
const KmPorLitro = 10;
const distancia = 100;
const combustivel = /**/'Etanol'/*'Gasolina'*/;

const gasolinaGasta = distancia / KmPorLitro;

let valorTotal;

if (combustivel === 'Etanol') {
    valorTotal = gasolinaGasta * etanol;
} else {
    valorTotal = gasolinaGasta * gasolina;
}


console.log(valorTotal.toFixed(2));