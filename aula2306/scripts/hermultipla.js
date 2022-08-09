"use strict";
class Bicho {
    constructor() {
        this.raca = '';
        this.especie = '';
        this.quantidadeMamas = '';
    }
    getQTdeLeite() {
        return 10;
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
    display() {
        console.log(`Raca: ${this.raca}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`Nº Mamas ${this.quantidadeMamas}`);
    }
}
let bicho;
bicho = new Bicho();
bicho.barulho('pocotó');
bicho.display;
