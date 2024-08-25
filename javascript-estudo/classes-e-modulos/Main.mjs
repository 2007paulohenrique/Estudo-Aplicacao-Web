import Funcionario from "./Funcionario.mjs";
import Pessoa from "./Pessoa.mjs";


// modulos ES (ECMAScript) - maneira moderna de organizar e reutilizar codigo javascript em arquivos separados

// modulos
// blocos de codigo independentes que encapsulam funcionalidades especificas e 
// podem ser reutilizados em diferentes partes de um programa

// um modulo e um arquivo que contem codigo (funcoes, classes, variaveis) que pode ser importado e usado em outro arquivo

// a extensao .mjs e usada para identificar arquivos JavaScript que devem ser tratados como 
// modulos ES6 (ECMAScript Modules) no Node.js

// para instanciar uma classe - new construtor()
const funcionario = new Funcionario("Paulo", 17, "Gerente");
const funcionario2 = new Funcionario("Regina", 17, "Gerente");

// acessar valores das propriedades da instancia
console.log(funcionario.nome);
console.log(funcionario.idade);
console.log(funcionario.cargo);

// acessar valores das propriedade da classe
console.log(Pessoa.totalPessoas);

// alterar valores das propriedades da instancia
funcionario.idade = 20;
console.log(funcionario.idade);

// usar metodos da instancia
console.log(funcionario.saudacao());