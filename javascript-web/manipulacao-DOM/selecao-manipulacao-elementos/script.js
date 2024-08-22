// DOM (Document Object Model) - interface de programacao para documentos HTML e XML
// representa a estrutura do documento como uma arvore de nos 
// cada no corresponde a um componente do documento

// DOM - permite o acesso, modificacao, remocao e adicao de elementos e atributos da pgina usando
// tambem lida com eventos que sao capturados quando um usuario interage com a pagina

// document - parte do DOM - representa toda a pagina html
// fornece metodos que permitem interagir e manipular o conteudo da pagina
// outros metodos alem de title, URL e write()

// selecionar elementos

function obterElementoPorId() {
    // retorna uma referencia ao elemento com o id especificado
    let elemento1 = document.getElementById("elemento1");
    console.log(elemento1);
}

function obterElementosPorClasse() {
    // retorna uma lista de elemento com a classe especificada
    let elementos1 = document.getElementsByClassName("classe1");
    console.log(elementos1);
}

function obterElementosPorTag() {
    // retorna uma lista de elemento com a tag especificada
    let elementos2 = document.getElementsByTagName("h4");
    console.log(elementos2);
}

function obterElementosPorSeletor() {
    // retorna uma lista de elemento que correspondem ao seletor especificado
    let elementos2 = document.querySelectorAll("h4#seletor");
    console.log(elementos2);
}

// modificar conteudo

function modificarTexto() {
    // obter elemento
    let elemento2 = document.getElementById("elemento2");

    // modifica o texto de um elemento, mas tambem pode ser usado para obter esse texto
    elemento2.textContent = "Texto modificado"; 
    console.log(elemento2.textContent);
}

function modificarHTML() {
    let elemento3 = document.getElementById("elemento3");

    // modifica o html interno de um elemento, incluindo tags, textos e outros elemento filhos
    elemento3.innerHTML = "<ul><li>Item1</li><li>Item2</li><li>Item3</li></ul>"; 
    console.log(elemento3.innerHTML);
}

// modificar classe e atributo

function modificarAtributo() {
    let elemento4 = document.getElementById("elemento4");

    // modifica ou adiciona um valor ao atributo de um elemento - os argumentos sao o nome do atributo e seu valor
    elemento4.setAttribute("style", "color: green;") 
}

function removerAtributo() {
    let elemento4 = document.getElementById("elemento4");

    // remove o atributo de um elemento
    elemento4.removeAttribute("style"); 
}

function modificarClasse() {
    let elemento5 = document.getElementById("elemento5");

    // adiciona uma classe a um elemento
    elemento5.classList.add("classe") 
}

function removerClasse() {
    let elemento5 = document.getElementById("elemento5");

    // remove a classe de um elemento
    elemento5.classList.remove("classe");
}

function alternarPresencaClasse() {
    let elemento5 = document.getElementById("elemento5");

    // alterna a presenca da classe em um elemento
    elemento5.classList.toggle("classe");
}



// obter valor de atributo

function ObterValorAtributo() {
    let elemento6 = document.getElementById("elemento6");

    // retorna o valor de um atributo de um elemento
    let valor = elemento6.getAttribute("class");
    console.log(valor);
}

// manipular estrutura

function criarElemento() {
    // elemento pai
    let elemento7 = document.getElementById("elemento7");

    // cria um novo elemento
    let elementoNovo = document.createElement("u");
    elementoNovo.classList = "classe2";

    // adiciona um texto no elemento
    elementoNovo.textContent = " Novo elemento";

    // adiciona um elemento filho dentro de um pai
    elemento7.appendChild(elementoNovo);
}

function removerElemento() {
    // elemento pai
    let elemento7 = document.getElementById("elemento7");

    // elementos filhos
    let elementos8 = document.querySelectorAll("h4#elemento7 u");

    // converte uma colecao em um array
    let array = Array.from(elementos8)

    for (const e of array) {
        // remove um elemento filho dentro de um pai
        elemento7.removeChild(e);
    }
}

function substituirElemento() {
    // elemento pai
    let elemento7 = document.getElementById("elemento7");

    // elementos filhos
    let elementos8 = document.querySelectorAll("h4#elemento7 u");

    let array = Array.from(elementos8)
    
    for (const e of array) {
        // elemento substituto
        let elementoNovo = document.createElement("i");
        elementoNovo.textContent = " Elemento substituto"
        
        // substitui um elemento filho por outro
        elemento7.replaceChild(elementoNovo, e);
    }
}

function adicionarTexto() {
    // elemento pai
    let elemento9 = document.getElementById("elemento9");

    // cria o texto a ser adicionado no elemento pai, sem substituir os textos ja pertencentes ao elemento
    let texto = document.createTextNode(" - Texto adicionado")

    // adiciona o texto ao conteudo do elemento pai
    elemento9.appendChild(texto);
}