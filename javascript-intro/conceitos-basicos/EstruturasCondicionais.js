// operadores:

let x = 5;
let y = "5";

// === usado para conferir se dois valores sao do mesmo tipo e valor
// == usado para conferir se dois valores sao iguais, nao levando em conta o tipo de dado

let igualdade = x === y; 
console.log(igualdade);

let igualdade2 = x == y; 
console.log(igualdade2);

// && - usado para verificar se duas expressoes ou mais sao verdadeiras
// || - usado para verificar se alguma expressao de duas expressoes ou mais e verdadeira
// ! - inverte o valor de um booleano

let condicao = x === y || x == y; 
console.log(condicao);

let condicao2 = x === y && x == y; 
console.log(condicao2);

let condicao3 = !(x === y && x == y); 
console.log(condicao3);


// estruturas condicionais
// verificam se uma expressao retorna true ou false - se retornar true, os comandos dentro do if sao executados
// if - condicao inicial
// else if - condicao ou condicoes apos a primeira
// else - comandos executados caso nenhuma expressao de if e else if retornar true

let idade2 = 18;

if (idade2 > 18) {
    console.log("Você é maior de idade.");
} else if (idade2 === 18){
    console.log("voce tem 18 anos");
} else {    
    console.log("Você é menor de idade.");
}

// while - comandos sao executados ate que a condicao do while retorne false, normalmente tendo um contador dentro do bloco

let j = 0;

while (j < 5) {
    console.log(j);
    j++;
}

// switch case - usado para executar diferentes comandos dependendo do valor de uma variavel/expressao que pode possuir poucos valores
// case: - verifica se a variavel possui um determinado valor, caso possuir, um comando e executado
// break - interrompe o switch
// default - comando executado caso nenhum dos cases corresponder ao valor da expressao

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
        nomeDia = "Terca-feira";
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
        nomeDia = "Sabado";
        break;
    default:
        nomeDia = "Dia invalido";
}

console.log(nomeDia);
