"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classeempregado_1 = __importDefault(require("./classeempregado"));
var emp1 = new classeempregado_1.default('José', 7.89, 40);
console.log(emp1);
console.log(emp1.calculaSalario());
emp1.imprimeDados();
