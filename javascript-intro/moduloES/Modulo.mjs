// modulos - arquivo com funcionalidades usadas em outro arquivo ou o que usa funcionalidades de outro arquivo - nomear com .mjs

// export
// usado em variaveis, funcoes ou classe para permitir que sejam usadas em outro arquivo

// exportar funcionalidades - adiciona export antes da funcionalidade

export function soma(a, b) {
    return a + b;
}

export const PI = 3.141592;

var nome = "maria";

// exportar por padrao - uma unica funcionalidade poder ser exportada por padrao
// nao e necessario o uso de {} no import no outro arquivo - o nome da funcionalidade pode ser qualquer um

export default nome;