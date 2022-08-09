class Pessoa{
    nome:string = ''
    protected identificador:number = 0

    setIdentificador(id:number):void{
        this.identificador = id
    }
    
}
let pessoa: Pessoa
pessoa = new Pessoa()
pessoa.nome = 'Jose'
pessoa.setIdentificador(1000)
console.log(pessoa)