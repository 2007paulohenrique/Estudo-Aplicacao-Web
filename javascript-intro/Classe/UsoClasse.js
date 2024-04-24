// importando classe com CommonJS module - nao moderno
// const classe = require('./arquivo')

const Carro = require('./Carro.js');

const carro1 = new Carro("azul", "ferrari", "spider");
const carro2 = new Carro("vermelho", "lamborghini", "aventador");

// chamada da variavel de classe

console.log(Carro.totalCarros);

// chamada de variavel de instancia

console.log(carro1.marca);

// chamada de metodo da classe

console.log(Carro.soma(1, 2));

// chamada de metodo da instancia

console.log(carro2.descricao());
