class Produto {
    descricao: string
    valorunit: number
    qtdeEstoque: number

    constructor(descricao:string, valorunit: number, qtdeEstoque: number){
    this.descricao = descricao
    this.valorunit = valorunit
    this.qtdeEstoque = qtdeEstoque
    }
    getEstoque(): void {
        return console.log (`Em estoque há ${this.qtdeEstoque}`)
    }
    precocomdesconto(taxa:number): number {
    let preco: number = (this.valorunit * taxa /100)
    return (preco)
    }
   precocomacrescimo(taxa:number): number {
    let preco: number = (this.valorunit * taxa /100)
    return (preco)
   }
}
export default Produto

