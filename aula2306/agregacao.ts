class Product{
    id:number
    descricao:string
    preco:number
    constructor(id:number, descricao:string, preco:number){
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

let pr1 = new Product(1, 'Feijão', 7.89)
let pr2 = new Product(2, 'Orelha de Porco', 2.65)

class ItemVenda{
    id:number
    produto: Product
    qtde: number
    constructor(id: number, produto: Product, qtde:number){
    this.id = id
    this.produto = produto
    this.qtde = qtde
}
}

let it1 = new ItemVenda(1,pr1,10)
let it2 = new ItemVenda(2, pr2, 15)

console.log(it1)