// para usar uma classe, funcoes e propriedades, e necessario importa-las
// para importar, basta colocar 
// import {funcoes, propriedades} from "caminho para o arquivo de origem"

// para importar uma funcionalidade que foi exportada por padrao, basta colocar 
// import nomeQualquer from "caminho para o arquivo de origem"
import Pessoa from "./Pessoa.mjs";

// heranca - forma de uma classe herdar outra - pode acessar e sobrescrever os metodos da classe pai
// para extender uma classe - class classe extends classePai 

class Funcionario extends Pessoa {
    // para chamar um metodo da classe pai - super.metodo()
    // para chamar o construtor da classe pai - super();

    constructor(nome, idade, cargo) {
        super(nome, idade); 
        this._cargo = cargo;
    }

    saudacao() {
        return super.saudacao().concat(" Eu sou um ", this._cargo);
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(novoCargo) {
        this._cargo = novoCargo;
    }
}

export default Funcionario;