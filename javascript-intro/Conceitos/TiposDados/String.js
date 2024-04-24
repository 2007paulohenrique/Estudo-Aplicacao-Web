// metodos de strings:

let str = "Hello";

// retorna o caracter no indice passado como argumento

console.log(str.charAt(0));

// concatena 2 ou mais strings

let str2 = "World";
let str3 = str.concat(" ", str2)
console.log(str3);

// retorna a posicao da primeira ocorrência de uma substring dentro da string, ou -1 se nao for encontrada

console.log(str3.indexOf("World"));

// retorna uma substring comecando em um indice e terminando em outro (sem inclui-lo)

console.log(str3.substring(6, 11));

// retorna uma substring - porem admite indices negativos onde -1 e o ultimo caracter, -2 o penultimo...

console.log(str3.slice(-5));

// toda a string em minusculo

console.log(str3.toLowerCase()); 

// toda a string em maiusculo

console.log(str3.toUpperCase());

// remove espacos em branco no inicio e final da string

let str4 = "   Hello   ";
console.log(str4.trim());

// verifica se uma string comeca com uma outra string - true false

let str5 = "Hello World";
console.log(str5.startsWith("Hello"));

// verifica se uma string termina com uma outra string - true false

console.log(str5.endsWith("World"));

// verifica se uma string contem uma outra string - true false

console.log(str5.includes("World"));

// retorna um array de substring vindas de uma string separadas por um separador passado como argumento

console.log(str5.split(" "));

// substitui a primeira ocorrecnia de um substring por outra

console.log(str5.replace("World", "Universe"));

// para substituir todas as ocorrencias de uma subsstring por outra

let str6 = "banana banana";
console.log(str6.replace(/banana/g, "maçã"));

// verificar padroes em strings usando expressoes regulares - regex

// definir padrao
// "//" - inicio e fim do regex
// "^$" - marca o inicio e fim de uma string
// "\d" - digitos - 0-9
// "\w" - alfanumericos - a-z A-Z 0-9 _
// "." - qualquer caractere, exceto quebras de linha - "\." para um ponto final
// "\s" - espaco em branco
// "\n" - quebra de linha
// "[a-z]" - qualquer letra minusculas
// "[A-Z]" - qualquer letra maiuculas
// "[a-zA-Z]" - qualquer letra maiuscula ou minuscula
// "{}" - numero de ocorrencias seguidas

let padrao = /^\(\d{3}\) \d{3}-\d{4}$/;

// string com o formato a ser verificado

let telefone = "(123) 456-7890";

// test() - usado para testar se uma string corresponde a um padrão
// padrao.test(string) - true false

if (padrao.test(telefone)) {
    console.log("O número de telefone é válido.");
} else {
    console.log("O número de telefone é inválido.");
}