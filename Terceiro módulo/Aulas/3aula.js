class Pessoa {
    nome;
    idade;
    anoNascimento;
    anoAtual = 2026;

    constructor(nome, idade) { 
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = this.anoAtual - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`)
    }
}

const Erick = new Pessoa('Erick Santos', 17);
delete Erick.anoAtual

Erick.descrever();
console.log(Erick);