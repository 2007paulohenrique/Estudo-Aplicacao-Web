// loops:
// comandos executados uma certa quantidade de vezes

// for - quantidade de loops determinada

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...in - itera sobre as propriedades enumerais de um objeto

let carro = {marca: "Toyota", modelo: "Corolla", ano: 2022};

for (let propriedade in carro) {
    console.log(propriedade);
}

// for...of - itera sobre os valores de um objeto iteravel, como array

let lista2 = [1, 2, 3, 4, 5];

for (let valor of lista2) {
    console.log(valor);
}

// forEach - itera sobre os elementos de um array
// uma funcao de callback e passada como parametro, onde seu parametro e o valor atual do array que esta sendo processado
// dentro do bloco do foreach e executado os comandos para cada valor do array
 
lista2.forEach(function(elemento) {
    console.log(elemento);
});


// funcoes:
// com ou sem retorno - sem retorno = procedimento

// funcao declarativa/nomeada
// possui nome e pode ser usada em qualquer lugar no escopo em que foi declarada

function soma1(a, b) {
    return a + b;
}

console.log(soma1(10, 20));

// expressao de funcao/funcao anonima
// funcoes atribuidas a uma variavel, sem nome e usada como valor - devem ser definidas antes de serem usadas

const soma2 = function(a, b) {
    return a + b;
};

console.log(soma2(10, 20));

// funcao de flecha
// util para funcoes curtas de uma linha
// formato - (parametros) => retorno;

const soma3 = (a, b) => a + b;

console.log(soma3(10, 20));

// funcao IIFE (Immediately Invoked Function Expressions)
// executadas imediatamente apos sua definicao, usadas para criar um escopo isolado

(function() {
    console.log("Função IIFE");
})();

// metodos de objetos
// funcoes que sao propriedades de objetos - usam this. para acessar propriedades do objeto

const carro3 = {
    marca: "Toyota",
    modelo: "Corolla",
    exibirDetalhes: function() {
        return this.marca + " " + this.modelo;
    }
};

console.log(carro3.exibirDetalhes());

// funcao de ordem superior 
// admite uma funcao como parametro e/ou retornam uma 

// funcao callback
// funcao que e passada como argumento de outra funcao

// operacao - callback
// aplicarOperacao - funcao de ordem superior 

function aplicarOperacao(num, operacao) {
    return operacao(num);
}

function dobro(x) {
    return x * 2;
}

let dobro2 = aplicarOperacao(10, dobro)
console.log(dobro2);

// closures - funcao interna que tem acesso as variaveis de uma funcao exterior, mesmo 
// depois que a funcao exterior terminou de ser executada

function contador() {
    let contagem = 0;
    return function() {
        contagem++;
        console.log(contagem);
    };
}

// incrementarContador e uma closure
const incrementarContador = contador(); 
incrementarContador(); 
incrementarContador(); 