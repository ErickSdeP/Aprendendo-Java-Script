/*function identidade(nome, idade) {
    if (idade >= 18) {
        console.log('Meu nome é ' + nome)
        console.log(nome + ' tem ' + idade + ' e' + ' é maior de idade.')
    } else {
        console.log('Meu nome é ' + nome)
        console.log(nome + ' tem ' + idade + ' e' + ' é menor de idade')
    }
}
identidade('Erick', 17);
identidade('Noel', 107);
*/
function desconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}
function juros(valor, juros) {
    return (valor + (valor * (juros/100)));
}

const preco = 100;
const FormadPagamento = 4;

    if (FormadPagamento === 1) {
    console.log(desconto(preco, 10));
    } else if (FormadPagamento ===2) {
        console.log(desconto(preco, 15));
    } else if (FormadPagamento ===3) {
        console.log(desconto(preco, 0));
    } else if (FormadPagamento ===4) {
        console.log(juros(preco, 10));
    } else {
        console.log('Não identificado')
    }

