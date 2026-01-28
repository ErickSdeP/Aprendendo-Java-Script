/*Exercicio 
    2) Faça um programa que receba N (quantidade de números) e seus respectivos valores
    Imprima o maior número pаr е о mепor número impar.
    
        Exemplo:
            Entrada:
                5
                3
                4
                1
                10
                5
        
            Saida:
                Maior número par: 10
                Menor numero impar: 1
*/

const { gets, print } = require('./2auxiliar')

const N = gets();

let maiorPar = null
let menorImpar = null

for (let i = 0; i < N; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}


print(maiorPar)
print(menorImpar)