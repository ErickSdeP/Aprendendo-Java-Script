/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Km.
    Crie um método que dado a quantidade de quilometros e o preco do combustivel nos dê o valor gasto em reais para realizar este percurso
*/

class carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca,cor,gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = 1/gastoPorKm;
    }

     
    valorViagem(distancia, precoGas) {
        return distancia * this.gastoPorKm * precoGas

    }
}
const uno = new carro('Fiat', 'Prata', 12);
console.log(uno.valorViagem(70, 5));

const palio = new carro('Fiat', 'Preto', 10)
console.log(palio.valorViagem(70, 5));
