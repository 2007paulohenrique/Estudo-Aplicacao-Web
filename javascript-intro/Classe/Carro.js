const Veiculo = require('./Veiculo.js');

// classe
// pode ter heranca - extends classe mae
// herda propriedades e metodos da classe mae 
// e necessario o export da classe mae e import da classe filha 

class Carro extends Veiculo {
    // propriedades - variaveis pertencente a classe e/ou suas instancias

    // variavies de classe - static - nao pertencem as instancias
    
    static totalCarros = 0;
    static numeroRodas = 4;

    // construtor - como deve ser criada uma instancia - onde sao declaradas as variaveis de instancia da classe
    // constructor(propriedadesDoCarro(parametros)){}

    constructor(cor, marca, modelo) {
        super(cor);
        this.marca = marca;
        this.modelo = modelo;
        Carro.totalCarros++;
    }

    // metodos sao diferentes de funcoes
    // metodos sao chamados em relacao a um objeto

    // metodos que pertencem as instancias - instanciaDaClasse.metodo();

    descricao() {
        return "Este é um " + this.marca + " " + this.modelo + ".";
    }

    // metodos que pertencem a classe - nao dependem das instancias - classe.metodo();

    static soma(a, b){
        return a + b;
    }
}

// exportando classe com CommonJS module - permite sua importacao em outras classes

module.exports = Carro;