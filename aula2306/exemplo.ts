class Vertebrados {
    anfibios: string = ''
    aves: string = ''
    mamiferos: string = ''
    peixes: string = ''
    repteis: string = ''
    constructor(anfibios: string, aves: string, mamiferos: string, peixes: string, repteis: string = '') {
        this.anfibios = anfibios
        this.aves = aves
        this.mamiferos = mamiferos
        this.peixes = peixes
        this.repteis = repteis
    }
}

class Invertebrados extends Vertebrados {
    anelideos: string = ''
    artropodes: string = ''
    cnidarios: string = ''
    constructor(anelideos: string, artropodes: string, cnidarios: string) {
        super('anfibios', 'aves', 'mamiferos', 'peixes', 'repteis')
        this.anelideos = anelideos
        this.artropodes = artropodes
        this.cnidarios = cnidarios
    }
}
let animais: Vertebrados
animais = new Vertebrados('sapo', 'galinha', 'cachorro', 'pirarucu', 'cobra')
animais.anfibios = 'sapo'
animais.aves = 'galinha'
animais.mamiferos = 'cachorro'
animais.peixes = 'pirarucu'
animais.repteis = 'cobra'
console.log(animais)


let animais2: Invertebrados
animais2 = new Invertebrados('minhoca', 'aranha', 'agua-viva')
animais2.anelideos = 'minhoca'
animais2.artropodes = 'aranha'
animais2.cnidarios = 'agua-viva'
console.log(animais2)