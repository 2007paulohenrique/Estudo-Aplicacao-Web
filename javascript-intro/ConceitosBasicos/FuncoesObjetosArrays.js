// funcoes:

// anonima - nao precisa definir nome da funcao - normalmente atribuida a variavel ou passada como parametro em outra funcao
// function(parametros){}

const soma = function(a, b) {
    return a + b;
};

console.log(soma(3, 4))

// funções de setas (arrow functions) - especialmente uteis para funcoes de uma unica linha
// (parametros) => corpo da funcao;

const quadrado = (x) => x * x;
console.log(quadrado(2)) 

// funcoes de ordem superior - admite uma funcao como parametro e/ou retornam uma 

function aplicarOperacao(num, operacao) {
    return operacao(num);
}

function dobro(x) {
    return x * 2;
}

console.log(aplicarOperacao(5, dobro));

// closures - funcao interna que tem acesso as variaveis de uma funcao exterior, mesmo depois que a funcao exterior terminou de ser executada

function contador() {
    let contagem = 0;
    return function() {
        contagem++;
        console.log(contagem);
    };
}

const incrementarContador = contador();
incrementarContador();
incrementarContador();

// arrays

const array = [1, 2, 3]; 

// adicionar elemento

array.push(4);

// remover ultimo elemento

array.pop();

// remover primeiro elemento

array.shift();

// remover elementos em uma posicao especifica
// (posicao, numero de elementos a serem removidos);

array.splice(1, 1);

// acessar um elemento num array

console.log(array[0]);

// substituir um elemento num array

array[0] = 10;

// concatenar arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

// extrair parte de um array

const parteArray = array3.slice(1, 3); // extrai os elementos de indice 1 ao 3, sem incluir o 3
console.log(parteArray);

// iterar sobre os elemento de um array

array3.forEach(function(elemento) {
    console.log(elemento);
});

// verificar o indice de um valor numa string
// indexOf retorna o indice do primeiro valor num array que seja igual ao valor passado como argumento - retorna -1 caso nao tenha o valor

console.log(array3.indexOf(3));

// verificar se um valor existe num array
// include - retorna true ou false caso o valor esteja ou nao no array

console.log(array3.includes(3));

// criar novo array filtarndo elementos de outro array

const novoArray = array3.filter(function(elemento) {
    return elemento > 2;
});

console.log(novoArray);

// objetos

// adicionar propriedade

const objeto = {nome: "Maria"};
objeto.idade = 30;
console.log(objeto);

// acessar valor de propriedades - 2 maneiras

console.log(objeto.nome);
console.log(objeto["idade"]);

// remover propriedade

delete objeto.idade;
console.log(objeto);

// mudar valor de uma propriedade

objeto.nome = "João";
console.log(objeto);

// tornar um objeto imodificavel - caso haja uma tentiva, ocorrera um erro ou a instrucao sera ignorada

Object.freeze(objeto);

// iterar sobre as propriedades de um objeto

for (var propriedade in objeto) {
    console.log(propriedade + ": " + objeto[propriedade]);
}