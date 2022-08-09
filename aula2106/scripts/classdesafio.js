"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, fone, email, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }
    salvar() {
        return console.log(this.id, this.nome, this.fone, this.email);
    }
    validardados() {
        if (this.id, this.nome, this.fone, this.email, this.peso, this.altura) {
            console.log(`Os dados estão corretos, redirecionando..`);
        }
        else {
            console.log(`Insira os dados necessários!`);
        }
    }
    imprimir() {
        console.log(`Seu IMC é de:${this.calculaimc}`);
    }
    calculaimc() {
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        return parseFloat(imc);
    }
}
exports.default = Pessoa;
