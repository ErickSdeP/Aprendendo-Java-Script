/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoe teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu INC (INC = peso/ (altura * altura));
    Instancie uma pessce chanade José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu INC
*/

class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorIMC(){
        return this.peso/(this.altura * this.altura)
    }

    classIMC(){
        const imc = this.valorIMC()
        if (imc < 18.5) {
            return('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return('Obeso');
        } else {
            return('Obesidade grave');
        }
    }
}

const cesar = new pessoa('César', 83, 1.75);
console.log(cesar.valorIMC())
console.log(cesar.classIMC())
const ozaki = new pessoa('Ozaki', 85, 1.89);
console.log(ozaki.valorIMC())
console.log(ozaki.classIMC())
