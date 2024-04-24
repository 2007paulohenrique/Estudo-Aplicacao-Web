// teste automatico

// import do modulo assert

import { strictEqual } from 'assert';

// funcao para testar

function soma(a, b) {
    return a + b;
}

// funcao de teste para a funcao soma
// caso a funcao passe no teste, nada sera exibido no terminal, porem se ela falhar, o erro sera exibido nele

function testarSoma() {
    strictEqual(soma(1, 2), 3); //strictEqual(funcao(argumentos), valor de retorno esperado);

    // outras testes...
}

testarSoma();
