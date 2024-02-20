"use strict";
const multiplicacao = (valor1, valor2) => valor1 * valor2;
function resultado() {
    return 5 * 3;
}
const resultadoDaConta = resultado();
console.log(resultadoDaConta);
//--------------------------------------------------------------------------------
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOi() {
        return `${this.nome} Olá`;
    }
}
;
