"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let idade = getArray([50, 35, 22]);
let nome = getArray(["Maria", 'Jose', 'Lucas']);
idade.push(42);
nome.push("Pedro");
console.log(idade);
console.log(nome);
function base(n1, n2) {
    console.log(`${n1}, ${n2}`);
}
let boletim = base('José', 7);
let func1 = base('João', true);
let func2 = base('Pedro', false);
