
class Pessoa {
    id: number
    nome: string
    fone: string
    email: string
    peso: number
    altura: number


    constructor(id: number, nome: string, fone: string, email: string, peso: number, altura: number) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    salvar(): void {
        return console.log(this.id, this.nome, this.fone, this.email)
    }

    validardados(): void {
        if (this.id, this.nome, this.fone, this.email, this.peso, this.altura){
            console.log(`Os dados estão corretos, redirecionando..`)
        }
        else{
            console.log(`Insira os dados necessários!`)
        }
    }

    imprimir(): void {
        console.log(`Seu IMC é de:${this.calculaimc}`)

    }

    calculaimc(): number{
         let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
         return parseFloat(imc)
    }
}
export default Pessoa
