"use strict";
class Employe {
    constructor(code, name, matricula) {
        this.empcode = 0;
        this.empName = '';
        this.empMatricula = '';
        this.empcode = code;
        this.empName = name;
        // this.empMatricula = matricula
        this.setMatricula(matricula);
    }
    setMatricula(matricula) {
        if (matricula.length < 5) {
            console.log('numero de matricula deve ter no minimo 5 digitos');
        }
        else {
            this.empMatricula = matricula;
        }
    }
}
let emp1;
emp1 = new Employe(10, 'Jose da Silva', '123');
// emp1.empcode = 10
// emp1.empName = 'Jose da Silva'
// emp1.setMatricula('123')
console.log(emp1);
