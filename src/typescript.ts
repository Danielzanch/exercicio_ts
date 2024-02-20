const multiplicacao = (valor1: number, valor2: number): number => valor1 * valor2

function resultado (): number {
    return 5 * 3
} 

const resultadoDaConta = resultado()

console.log(resultadoDaConta)



//--------------------------------------------------------------------------------



class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOi(): string {
        return `${this.nome} Olá`;
    }
};
