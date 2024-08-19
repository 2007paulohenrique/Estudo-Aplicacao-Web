const array = [1, 2, 3]; 

// metodos:

// adicionar elemento ao final do array

array.push(4);
console.log(array);

// remover ultimo elemento

array.pop();
console.log(array);

// remover primeiro elemento

array.shift();
console.log(array);

// remover elementos em uma posicao especifica
// a quantidade de elementos a serem removidos pode ser passada como segundo argumento 

array.splice(1, 1);
console.log(array);

// acessar um elemento num array

console.log(array[0]);

// substituir um elemento num array

array[0] = 10;
console.log(array);

// concatenar arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

// extrair os elementos de um array comecando em um indice e indo ate outro

const parteArray = array3.slice(1, 3);
console.log(parteArray);

// obter o indice da primeira ocorrencia de um elemento em um array - retorna -1 se nao estiver presente

console.log(array3.indexOf(3));

// verificar se um valor existe em um array

console.log(array3.includes(3));

// criar novo array com os elementos de outro array que obedecem uma condicao

const novoArray = array3.filter(function(elemento) {
    return elemento > 2;
});

console.log(novoArray);