/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
    
    Dados de entrada:
    5
    50
    10
    98
    23

    Saida:
    98
*/


const entradas = [5, 50, 10, 98, 23]
let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}



/*Explicação do código 
    Simbora, esse deve ser mais facil.
    linha 17: cria uma lista com 5 números com o nome "entradas"
    linha 18: rastreia qual elemento do array entradas deve ser retornado.
    linha 21: cria uma função com o nome "gets"
    linha 22: buscar qual número está na posição i do array
        Ex linha 22: Se i = 0: "valor" recebe entradas[0] = 5

    linha 23: i = i + 1 
    linha 27-29: um atalho para não ter que digitar console.log() toda vez
    linha 31: exporta as 2 funções
*/