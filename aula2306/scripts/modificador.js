"use strict";
class Pessoa {
    constructor() {
        this.nome = '';
        this.identificador = 0;
    }
    setIdentificador(id) {
        this.identificador = id;
    }
}
let pessoa;
pessoa = new Pessoa();
pessoa.nome = 'Jose';
pessoa.setIdentificador(1000);
console.log(pessoa);
