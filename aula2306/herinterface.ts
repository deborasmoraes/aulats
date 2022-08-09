interface ICRUD{
    salvar():boolean
    update(id:number):boolean
    delete(id:number):boolean
    consultar(id?:number):string
}

class Produto{
    descricao:string=''
    preco: number = 0
}

class ProdutoFinal extends Produto implements ICRUD{
    consultar(id?: number): string {
        return `Consultando por ${id}`    
    }
    salvar(): boolean {
        throw new Error("Method not implemented.")
    }
    update(id:number): boolean{
        throw new Error ("Method not implemented")
    }
    delete(id:number): boolean {
        throw new Error ("Method not implemented")
    }
}
let p1 = new ProdutoFinal()
p1.descricao = 'Feijão'
p1.preco = 10
console.log(p1.consultar())

let p2 = new ProdutoFinal()
console.log(p2.consultar(10))