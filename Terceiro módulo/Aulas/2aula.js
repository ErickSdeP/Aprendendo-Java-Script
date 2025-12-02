class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`)
    }
}

const Erick = new Pessoa();
Erick.nome = 'Erick Santos';
Erick.idade = 17 ;

const Arthur = new Pessoa();
Arthur.nome = 'Arthur Santos';
Arthur.idade = 9 ;

Erick.descrever();
Arthur.descrever();
