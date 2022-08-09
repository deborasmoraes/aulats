"use strict";
class Product {
    constructor(id, descricao, preco) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
    }
}
let pr1 = new Product(1, 'Feijão', 7.89);
let pr2 = new Product(2, 'Orelha de Porco', 2.65);
class ItemVenda {
    constructor(id, produto, qtde) {
        this.id = id;
        this.produto = produto;
        this.qtde = qtde;
    }
}
let it1 = new ItemVenda(1, pr1, 10);
let it2 = new ItemVenda(2, pr2, 15);
console.log(it1);
