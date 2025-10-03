/*
FORMAS DE PAGAMENTO:
1 - Débito (10% de desconto)
2- Pix / Dinheiro (15% de desconto)
3 - 2x sem juros
4- Acima de 2x (10% de juros)
*/

const preco = 100;
const FormadPagamento = 1;


if (FormadPagamento === 1) {
    const debito = preco - (preco * (10/100));
    console.log(debito)
} else if (FormadPagamento ===2) {
    const pix =  preco - (preco * (15/100));
    console.log(pix)
} else if (FormadPagamento ===3) {
    const sJuros = preco;
    console.log(sJuros)
} else if (FormadPagamento ===4) {
    const cJuros = preco + (preco * (10/100));
    console.log(cJuros)
}



