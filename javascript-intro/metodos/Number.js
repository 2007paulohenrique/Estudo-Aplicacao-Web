let num = 10;

// potencia
let potencia = num ** 2; // 10²
console.log(potencia);

// incrementar e decrementar
let num2 = num++; // num = 11
let num3 = num--; // num = 10

console.log(++num); // incrementa e depois retorna o valor - num = 11
console.log(num++); // retorna o valor e depois incrementa - num = 12
console.log(num);

// metodos:

// obter uma string do numero em notacao exponencial
// seu parametro e o numero de casas decimais que o numero em notacao exponencial tera

let notacaoE = num.toExponential(1);
console.log(notacaoE);

// obter uma string do numero com o numero de casas decimais passado como argumento

let numDec = num.toFixed(2);
console.log(numDec);

// obter uma string do numero com a quantidade de digitos significativos passado como argumento

let numPre = num.toPrecision(3);
console.log(numPre);

// converter para string

let numStr = num.toString();
console.log(numStr);

// converter uma string em um inteiro ou em um decimal

let inteiro = parseInt(numStr);
let decimal = parseFloat(numStr);
console.log(inteiro);
console.log(decimal);

// metodos Math:

// obter raiz quadrada

let raiz = Math.sqrt(16);
console.log(raiz);

// obter numero absoluto

let absoluto = Math.abs(-10);
console.log(absoluto);

// arredondar para o inteiro menor

let menorInt = Math.floor(4.9);
console.log(menorInt);

// arredondar para o inteiro maior

let maiorInt = Math.ceil(4.1)
console.log(maiorInt);

// arredondar para o inteiro mais proximo

let intProx = Math.round(4.4);
console.log(intProx);

// obter menor ou maior valor entre numeros

let menor = Math.min(10, 20, 5);
let maior = Math.max(10, 20, 5);
console.log(menor, maior);

// gerar numeros aleatorios entre 0 e 1

let aleat = Math.random();
console.log(aleat);
