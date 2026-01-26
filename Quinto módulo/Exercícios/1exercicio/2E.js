const {gets, print} = require('./1E');

const sorteio = [];

for (let i = 0; i < 5; i++) {
    sorteio.push(gets());
}

let maiorValor = 0;

for (let i = 0; i < sorteio.length; i++) {
    const numero = sorteio[i];
    if (numero>maiorValor) {
        maiorValor = numero;
    }
}

print(maiorValor)


/*Forma simplificada

const {gets, print} = require('./1E');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const sorteio = gets();
    if (sorteio>maiorValor) {
        maiorValor = sorteio;
    }
}

print(maiorValor)

*/



/*Explicação do código
    Vai ser dificil explicar mas bora lá.
    linha 1: serve só para importar as coisas do 1E;
    linha 3: só cria uma lista com o nome de "sorteio";
    linha 5-7: cria um loop onde adiciona à lista "sorteio" números vindos do gets (no 1E);
    linha 9: cria uma variável chamada "maiorValor" inicial com 0;
    linha 11-16: cria outro loop com o intuito de descobrir qual o maior número da lista "sorteio";
    linha 12: cria uma const que separa os números da lista "sorteio"
    linha 13: compara o valor obtido na linha 12 com o valor da variável "maiorValor" (linha 9)
    linha 14: se a comparação da linha 13 estiver correta faz com que o valor do "maiorValor" mude para o número obtido
*/