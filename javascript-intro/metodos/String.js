let str = "Hello";

// metodos:

// obter o caracter no indice passado como argumento

let char = str.charAt(1);
console.log(char);

// concatenar duas ou mais strings

let str2 = "World";
let str3 = str.concat(" ", str2);
console.log(str3);

// obter a posicao da primeira ocorrencia de uma substring dentro de uma string - retorna -1 se nao for encontrada

let ocor = str3.indexOf("World")
console.log(ocor);

// obter uma substring dos caracteres de uma string comecando em um indice e terminando em outro 

let subS = str3.substring(6, 11);
console.log(subS);

// igual ao substring(), porem admite negativos como argumento, que representam quantos dos ultimos caracteres serao usados
// para montar a substring

// os ultimos cinco caracteres da str3
let subS2 = str3.slice(-5);
console.log(subS2);

// converter string em minusculo ou maiusculo

let minusc = str3.toLowerCase();
console.log(minusc);

let maiusc = str3.toUpperCase();
console.log(maiusc);

// remover espacos em branco no inicio e final da string

let str4 = "   Hello   ";
let semEsp = str4.trim();
console.log(semEsp);

// verificar se uma substring ocorre no inicio ou final de uma string

let str5 = "Hello World";
let subsIni = str5.startsWith("Hello");
console.log(subsIni);

let subsFin = str5.endsWith("World");
console.log(subsFin);

// verificar se uma substring esta contida em uma string

let subsCont = str5.includes("llo");
console.log(subsCont);

// obter um array de substrings vindas de uma string separadas por um separador passado como argumento

let substrings = str5.split(" ");
console.log(substrings);

// substituir a primeira ocorrencia de um substring por outra

let substituida = str5.replace("World", "Universe");
console.log(substituida);

// para substituir todas as ocorrencias de uma substring por outra

let str6 = "banana banana";
let substituidaG = str6.replace(/banana/g, "maça");
console.log(substituidaG);

// uma expressao regular pode ser usada para capturar ocorrencias no replace()

// verificar padroes em strings usando expressoes regulares - regex

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
// "[À-ÿ]" - qualquer letra acentuada
// "{}" - numero determinado de ocorrencias seguidas
// "+" - indica que deve haver uma ou mais ocorrencia do termo anterior
// (?=.*...) - positive lookahead - usado para verificar se um padrao pode ser encontrado em algum lugar da string
// (?!.*...) - negative lookahead - usado para verificar se um padrao nao esta em nenhum lugar da string

let padrao = /^\(\d{3}\) \d{3}-\d{4}$/;

// string com o formato a ser verificado

let telefone = "(123) 456-7890";

// test() - usado para testar se uma string corresponde a um padrão

if (padrao.test(telefone)) {
    console.log("O número de telefone é válido.");
} else {
    console.log("O número de telefone é inválido.");
}