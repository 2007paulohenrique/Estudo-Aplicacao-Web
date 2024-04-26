// comentario

/*
bloco de comentario
*/

// variaveis:

// var para variáveis que precisam de escopo global ou de função
// let para variáveis que precisam de escopo de bloco e podem ser atualizadas
// const para declarar constantes cujos valores não devem ser alterados após a atribuição e que têm escopo de bloco

var nome = "João";
let idade = 30;
const PI = 3.14;

// para declarar uma variavel:
// tipoDaVariavel nomeDaVariavel;
// ou
// tipoDaVariavel nomeDaVariavel = dado;
// nao precisa colocar o tipo do dado

// tipos de dados:

var numero = 10;
var decimal = 2.234;
var texto = "Olá, mundo!";
var booleano = true;
var lista = [1, 2, 3, 4, 5];

// objetos

// objeto criado diretamente
// propriedades - chaves com valores relacionados
// pode ser atribuido um valor ou uma funcao com retorno

var pessoa = {
    nome: "Maria",
    idade: 25,
    saudacao: function() {
        return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    }
}; 

console.log(pessoa.saudacao());

// operadores:
// && - and, || - or, ! - not
// === é usado para conferir se 2 valores são do mesmo tipo e valor
// == é usado para conferir se 2 valores são iguais, nao levando em conta o tipo de dado

var x = 5;
var y = "5";
var igualdade = (x === y); // falso
var igualdade = (x == y); // verdadeiro

// estrutura condicional - if, else if, else

var idade2 = 18;

if (idade2 > 18) {
    console.log("Você é maior de idade.");
} else if (idade2 === 18){
    console.log("voce tem 18 anos");
} else {    
    console.log("Você é menor de idade.");
}

// loops:

// for - quantidade de loops determinada

for (var i = 0; i < 5; i++) {
    console.log(i);
}

// for...in - percorre todas as propriedades enumeráveis de um objeto pai

var carro = {marca: "Toyota", modelo: "Corolla", ano: 2022};

for (var propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
}

// for...of - percorre os valores de uma variavel em vez das chaves

var lista = [1, 2, 3, 4, 5];

for (var valor of lista) {
    console.log(valor);
}

// forEach - itera sobre os elementos de um array
// forEach(function(elemento) {});
 
lista.forEach(function(elemento) {
    console.log(elemento);
});

// while

var j = 0;

while (j < 5) {
    console.log(j);
    j++;
}

// switch - usado quando precisasse fazer operacoes com uma variavel que possui poucos valores admitidos

let diaDaSemana = 3;
let nomeDia;

switch (diaDaSemana) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log("O dia da semana é: " + nomeDia);

// funcoes:
// com ou sem retorno
// sem retorno - procedimento]
// function nomeDaFuncao(parametros){}

function soma(a, b) {
    return a + b;
}

var resultado = soma(3, 5);

function mostrarMensagem() {
    console.log("Esta é uma mensagem de exemplo.");
}

mostrarMensagem();