// teste automatico

// import do modulo assert

import { strictEqual } from 'assert';

// funcao para testar

function soma(a, b) {
    return a + b;
}

// funcao de teste para a funcao soma
// caso a funcao passe no teste, nada sera exibido no terminal, porem se ela falhar, o erro sera exibido

function testarSoma() {
    // o primeiro argumento do strictEqual e a funcao a ser testada com valores em seus argumentos
    // o segundo argumento e o retorno esperado e correto

    strictEqual(soma(1, 2), 4);

    // outras testes com outros valores de argumento na funcao a ser testada...
}

testarSoma();
