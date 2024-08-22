// eventos - addEventListener - metodo para lidar com eventos em elementos HTML
// permite definir funcoes que serao executadas quando um evento especifico ocorrer em um elemento

// seus argumentos obrigatorios sao o tipo de evento e a callback que sera executada quando o evento ocorrer
// um elemento pode ter mais de um addEventListener para o mesmo tipo de evento

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");
const botao6 = document.getElementById("botao6");
const botao7 = document.getElementById("botao7");
const botao8 = document.getElementById("botao8");

// principais tipos de eventos

// eventos de mouse

// evento - click
botao1.addEventListener("click", function() {
    botao1.classList.toggle("classe");
});
// outra funcao para o mesmo evento no mesmo elemento
botao1.addEventListener("click", function() {
    botao1.textContent = "apertado"
});

// evento - click duplo
botao2.addEventListener("dblclick", function() {
    botao2.classList.toggle("classe");
});

// evento - mouse movimentando sobre um elemento 
botao3.addEventListener("mousemove", function() {
    botao3.classList.toggle("classe");
});

// evento - ponteiro do mouse sai na area de um elemento
botao4.addEventListener("mouseout", function() {
    botao4.classList.toggle("classe");
});

// evento - ponteiro do mouse entra na area de um elemento
botao5.addEventListener("mouseover", function() {
    botao5.classList.toggle("classe");
});

// evento - ponteiro do mouse entra na area de um elemento
botao6.addEventListener("contextmenu", function() {
    botao6.classList.toggle("classe");
});

// eventos de teclado

// .key - tecla pressionada
// .ctrlKey - indica se o control estava pressionado - funciona com shift, alt...
// .preventDeafault() - previne que o evento padrao seja lancado - funciona para outros tipos de evento

// evento - tecla ou teclas pressionadas
document.addEventListener("keydown", function(evento) {
    if ((evento.ctrlKey && evento.key) === "z" || evento.key === "z") {
        evento.preventDefault();
    
        botao7.classList.toggle("classe");
    }
});

// evento - tecla ou teclas liberadas
document.addEventListener("keyup", function(evento) {
    if ((evento.ctrlKey && evento.key) === "q" || evento.key === "q") {
        evento.preventDefault();
    
        botao8.classList.toggle("classe");
    }
});

// evento - perca da conexao com a internet
// util para salvar dados localmente ou desativar funcionalidades online
window.addEventListener('offline', function() {
    alert("Perca da conexão com a internet");
});

// evento - ganho da conexao com a internet
// util para sincronizar dados e reativar funcionalidades online
window.addEventListener('online', function() {
    alert("Online novamente");
});

// evento - pagina carregada
// util para eventos que precisam ser acionadas quando a pagina e carregada, como verificar a conexao
window.addEventListener('load', function() {
    alert("Página carregada");
});

// ha tambem os eventos de formulario, que estao todos listados no diretorio "html-estudo" no arquivo "formularios.html"
// tambem podem ser usados no addEventListener()
