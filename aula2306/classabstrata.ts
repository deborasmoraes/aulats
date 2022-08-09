abstract class Computador {
    memoria: number = 4
    abstract getCapacidadeProcessamento(): number

    display(): void {
        console.log(this.memoria)
    }
}
class Noteboook extends Computador {
    getCapacidadeProcessamento(): number {
        return 500
    }
}

class Tablet extends Computador{
    getCapacidadeProcessamento(): number{
        return 200
    }
}

let cp1: Computador
cp1 = new Noteboook()
console.log(cp1)

let cp2: Computador
cp1 = new Tablet()