// comentario

/*
bloco de comentario
*/

// JavaScript - usado em conjunto com HTML e css para o desenvolvimento de aplicacoes web, adicionando interatividade
// entre a pagina e o usuario

// letiaveis:
// tipagem dinamica - o tipo da letiavel e definido pelo valor a que esta atribuida no momento, podendo ser alterado 

// var - escopo de funcao - pode ser acessada globalmente caso seja declarada fora de uma funcao, caso contrario, 
// podera ser acessada somente dentro da funcao que foi declarada - pode ser redeclarada, diferente dos outros tipos

// let - escopo de bloco - so pode ser acessada dentro do bloco {} em que foi declarada

// const - escopo de bloco - acesso igual a let, porem seu valor nao pode ser atualizado apos sua declaracao, 
// mas objetos e arrays podem ter suas propriedades ou elementos alterados

// preferencia a let e const

let nome = "Joao";
let idade = 30;
const PI = 3.14;
let dado;

// tipos de dados:

// number
let inteiro = 10;
let decimal = 2.234;

// string
let texto = "Olá, mundo!";

// boolean
let booleano = true;
let booleano2 = false;

// array - pode ter dados de diferentes tipos - objeto iteravel
let lista = ["1", 2, 3, 4, true];

// para acessar os valores do array - indice
let valor1 = lista[0];

// ha varias formas de inserir e deletar valores de um array, 

// objetos

// pares chave-valor - propriedades
// pode ser atribuido um valor ou uma funcao com retorno

let pessoa = {
    nome: "Maria",
    idade: 25,
    saudacao: function() {
        return "Ola, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    }
}; 

// para acessar os valores das chaves de um objeto
let chave = pessoa.idade;
let chave2 = pessoa["idade"];

// para adicionar uma propriedade
pessoa["cidade"] = "São Paulo";

// deletar propriedade
delete pessoa["cidade"];
