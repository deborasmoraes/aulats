"use strict";
class Produto {
    constructor(descricao, valorunit, qtdeEstoque) {
        this.descricao = descricao;
        this.valorunit = valorunit;
        this.qtdeEstoque = qtdeEstoque;
    }
    getEstoque() {
        return console.log(`Em estoque há ${this.qtdeEstoque}`);
    }
    precocomdesconto(taxa) {
        let preco = (taxa * this.valorunit);
        return (preco);
    }
    precocomacrescimo(taxa) {
        let preco = (taxa * this.valorunit);
        return (preco);
    }
}
