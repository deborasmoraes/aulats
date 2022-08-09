"use strict";
class Vertebrados {
    constructor(anfibios, aves, mamiferos, peixes, repteis = '') {
        this.anfibios = '';
        this.aves = '';
        this.mamiferos = '';
        this.peixes = '';
        this.repteis = '';
        this.anfibios = anfibios;
        this.aves = aves;
        this.mamiferos = mamiferos;
        this.peixes = peixes;
        this.repteis = repteis;
    }
}
class Invertebrados extends Vertebrados {
    constructor(anelideos, artropodes, cnidarios) {
        super('anfibios', 'aves', 'mamiferos', 'peixes', 'repteis');
        this.anelideos = '';
        this.artropodes = '';
        this.cnidarios = '';
        this.anelideos = anelideos;
        this.artropodes = artropodes;
        this.cnidarios = cnidarios;
    }
}
let animais;
animais = new Vertebrados('sapo', 'galinha', 'cachorro', 'pirarucu', 'cobra');
animais.anfibios = 'sapo';
animais.aves = 'galinha';
animais.mamiferos = 'cachorro';
animais.peixes = 'pirarucu';
animais.repteis = 'cobra';
console.log(animais);
let animais2;
animais2 = new Invertebrados('minhoca', 'aranha', 'agua-viva');
animais2.anelideos = 'minhoca';
animais2.artropodes = 'aranha';
animais2.cnidarios = 'agua-viva';
console.log(animais2);
