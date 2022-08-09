"use strict";
class Computador {
    constructor() {
        this.memoria = 4;
    }
    display() {
        console.log(this.memoria);
    }
}
class Noteboook extends Computador {
    getCapacidadeProcessamento() {
        return 500;
    }
}
class Tablet extends Computador {
    getCapacidadeProcessamento() {
        return 200;
    }
}
let cp1;
cp1 = new Noteboook();
console.log(cp1);
let cp2;
cp1 = new Tablet();
