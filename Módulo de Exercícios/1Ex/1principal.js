/*Exercício
    1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 < 7 Imprima "Recuperacão"
    Caso a média seja >= 7 imprima "Aprovado"

        Exemplo:
            Entrada:
                5.5
            Saidar
                Recuperação
*/


const { gets, print } = require('./2auxiliar')

const media = gets()

if (media < 5) {
    print('Reprovado')
} else if (media >= 5 && media < 7) {
    print('Recuperação')
} else {
    print('Aprovado')
}