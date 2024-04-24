var numero = 9.898;

// elevar um numero ao expoente - base ** expoente

// metodos de numeros:

// numero em notacao exponencial - 9.898e+0 = 9.898 * 10 ** 0

console.log(numero.toExponential());

// arredonda o numero com o numero de casas decimais passado como argumento

console.log(numero.toFixed(1));

// mostra o numero com a quantidade de numeros significativos passado como argumento

console.log(numero.toPrecision(2));

// converte para string

console.log(numero.toString());

// retorna o numero sem as casas decimais

console.log(parseInt(numero));

// metodos Math:

// raiz quadrada

console.log(Math.sqrt(16));

// numero absoluto

console.log(Math.abs(-5));

// retorna o maior numero inteiro menor que o numero passado como argumento

console.log(Math.floor(4.9));
console.log(Math.floor(-4.9));

// retorna o menor numero inteiro maior que o numero passado como argumento 

console.log(Math.ceil(4.1));
console.log(Math.ceil(-4.1));

// arredonda o numero para o inteiro mais proximo

console.log(Math.round(4.4));
console.log(Math.round(4.5));

// menor valor entre numeros

let numeros = [5, 10, 3, 8, 2];

// ... e usado para passar os elementos de um array individualmente

console.log(Math.min(10, 5, 8));
console.log(Math.min(...numeros));

// maior valor entre numeros

console.log(Math.max(10, 5, 8));   
console.log(Math.max(...numeros));   

// gerar numeros pseudoaleatorios entre:

// 0 e 1

console.log(Math.random());

// entre 0 e um outro numero

console.log(Math.random() * 20);

// entre um valor minimo e um maximo - Math.random() * (max - min) + min;

console.log((Math.random() * (10 - 5)) + 5);

// gerar numero inteiro aleatorio - Math.random() * (max - min + 1) + min;
// o "+1" e adicionado para equalizar as chances de todos os numeros possivies de serem gerados

console.log(Math.floor(Math.random() * (10 - 5 + 1)) + 5);