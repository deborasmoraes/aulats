"use strict";
class Person {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
}
class Empregado extends Person {
    constructor(name, matricula) {
        super(name);
        this.matricula = '';
        this.matricula = matricula;
    }
}
let emp;
emp = new Empregado('jose', '123');
emp.matricula = '123';
emp.name = 'Jose';
console.log(emp);
