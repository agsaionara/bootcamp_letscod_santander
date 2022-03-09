class Pessoas{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoas("Carlos", 20);
pessoa1.idade =21;
console.log(pessoa1);

const pessoa2 = new Pessoas("Laura",36);
console.log(pessoa2);
