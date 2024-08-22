// propriedades/metodos de window - objeto global no contexto de um navegador 
// seus metodos podem ser chamados sem a necessidade do prefixo "window" - chamada direta

// console.log() - registra conteudo de log no console do navegador

function exibirAlerta(){
    // exibir um alerta
    alert("Esse é um alerta");
}

function exibirConfirmacao() {
    // exibir uma caixa de confirmacao - caso haja a confirmacao, retorna true, caso nao, retorna false
    let c = confirm("Confirmar?");

    if (c) {
        console.log("confirmado");
    } else {
        console.log("Cancelado");
    }
}

function exibirDialogo() {
    // exibe uma caixa para a insercao de dados simples, retornando o valor inserido como uma string, 
    // ou null caso nao houver nenhum valor
    let nome = prompt("Nome?");

    if (nome) {
        console.log("Nome: " + nome);
    } else {
        console.log("Sem nome");
    }
}

function ObterTamanhoViewport() {
    // obter tamanho em pixels do viewport
    console.log(innerHeight);
    console.log(innerWidth);
}

function fecharJanela() {
    close();
}

// document - representa o documento html carregado na aba do navegador

function obterURL() {
    // obter a url completa do documento html
    console.log(document.URL);
}

function obterTitulo() {
    // obter o titulo da pagina
    console.log(document.title);
}

function escrever() {
    // escrever um texto no documento, substituindo todo o conteudo da pagina - pratica desatualizada
    // ha melhores alternativas para escrever no documento 

    document.write("Texto qualquer - Atualize a página para voltar");
}

// navigator - representa o navegador de internet em uso

function obterLinguagem() {
    // obter o idioma do navegador
    console.log(navigator.language);
}

function obterLocalizacao() {
    // obter um objeto de geolocalizacao do local em que o navegador esta sendo usado
    // api que permite que paginas web acessem a localizacao geografica do usuario

    // getCurrentPosition - obter posicao atual
    navigator.geolocation.getCurrentPosition(
        // callback chamada quando a posicao foi obtida com sucesso
        function(pos) {
            console.log("Latitude: " + pos.coords.latitude);
            console.log("Longitude: " + pos.coords.longitude);
        },
        // callback em caso de erro - executada quando o usuario nao permite o acesso a sua localizacao
        function(err) {
            console.error("Erro: ", err);
        }
    );
}

function ObterPlataforma() {
    // obter a plataforma em que o navegador esta sendo usado - descontinuada por poder prejudicar a privacidade do usuario
    // nao recomendada
    console.log(navigator.platform)
}