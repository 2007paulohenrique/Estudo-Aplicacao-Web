// manipulacao do DOM - Document Object Model - representacao da estrutura de um documento HTML
// manipulacao do DOM usando javascript para criar interatividade nas paginas web

// selecionar um elemento no documento html pelo id
const formLogin = document.getElementById("form-login");

// selecionar valor de um eleemnto - elemento.value;
// mudar valor de um elemento - email.textContent = "";

const criarConta = document.getElementById("criar-conta-login");

// adicionar evento caso "submit" seja acionado.
formLogin.addEventListener("submit", function(event){
    // previne que o formulario faca o evento padrao (recarrega a pagina)
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const alerta = document.getElementById("alerta");

    // verificar se os elemento foram preenchidos

    if (nome.value.trim() === '' || email.value.trim() === '' || senha.value.trim() === '') {
        // para remover classe de um elemento - mesmo formato para adicionar classe
        alerta.classList.remove("oculto");
    } else {
        // acao feita caso os campos estiverem preenchidos
        
        // redirecionar para outra pagina
        window.location.href = 'conta-criada.html';
    }
});