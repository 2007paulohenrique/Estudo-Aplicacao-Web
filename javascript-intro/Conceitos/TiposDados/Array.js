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