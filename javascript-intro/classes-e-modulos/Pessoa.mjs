// classes sao uma forma de definir e criar objetos que compartilham um conjunto comum de propriedades e metodos

class Pessoa {
    // metodo construtor - chamado quando e criado uma nova instancia da classe
    // os argumentos do construtor terao que ser passados quando uma nova instancia e criada
    // os argumentos do construtor serao as propriedades da instancia

    // propriedades da classe - static
    // nao pertencem as instancias
    static _totalPessoas = 0;

    // this - usado para definir que uma variavel pertence ao objeto que esta sendo criado

    // propriedade privada/interna - _propriedade
    // assim, ela pode ser acessada e manipulada com seguranca pelos getters e setters

    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
        Pessoa.totalPessoas++
    }

    // metodo dos objetos da classe
    // podem ser usados somente pelas instancias da classe


    saudacao() {
        return "Olá, meu nome é ".concat(this._nome, " e tenho ", this._idade, " anos.");
    }

    // metodos estaticos - static
    // pertencem a classe e nao ao objeto
    // nao e necessario criar uma instancia para usa-lo
    
    static pensar(){
        return "Pensando";
    }

    // getters - permitem acessar uma propriedade privada
    get nome() {
        return this._nome;
    }
    
    get idade() {
        return this._idade;
    }

    static get totalPessoas() {
        return this._totalPessoas;
    }

    // setter - permite alterar o valor de uma propriedade privada e executar uma validacao de dados 
    // antes de atribuir o novo valor
    set nome(novoNome) {
        this._nome = novoNome;
    }

    set idade(novaIdade) {
        if (novaIdade > 0) {
            this._idade = novaIdade;
        } else {
            console.log('Idade deve ser positiva.');
        }
    }

    static set totalPessoas(valor) {
        this._totalPessoas = valor;
    }
}

// para usar uma classe em outro arquivo, e necessario exportar-la, assim como importa-la no arquivo em que for usa-la
// funcoes e propriedades podem ser exportados individualmente

// uma classe, funcao ou variavel pode ser exportada por padrao, assim, na hora de importa-la, nao e necessario o uso de {}
// somente uma funcionalidade pode ser exportada por padrao 
// no import, seu nome pode ser alterado 
export default Pessoa;