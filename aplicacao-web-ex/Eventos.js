const dados = {
    // tornando as propriedades que guardam os valores dos inputs em getters, 
    // ha a garantia de que esses valores serao sempre atualizados quando forem acessados
    
    get nome() {
        return document.getElementById("nome").value.trim().replace(/\s{2,}/g, ' ');
    },
    get email() {
        return document.getElementById("email").value.trim();
    },
    get senha() {
        return document.getElementById("senha").value.trim();
    },
    alertaNome: document.getElementById("alerta-nome"),
    alertaEmail: document.getElementById("alerta-email"),
    alertaSenha: document.getElementById("alerta-senha"),
};

document.getElementById("registro").addEventListener("submit", function(evento) {
    evento.preventDefault();

    validarFormato();

    const alertaNomeV = dados.alertaNome.style.visibility === 'visible';
    const alertaEmailV = dados.alertaEmail.style.visibility === 'visible';
    const alertaSenhaV = dados.alertaSenha.style.visibility === 'visible';

    const camposVazios = dados.nome === "" || dados.email === "" || dados.senha === "";

    const aviso = document.getElementById("aviso");

    // selecionar propriedades CSS dos elementos 
    aviso.style.color = "black";

    if (camposVazios) {
        aviso.style.color = "red";
    }

    if (!(alertaNomeV || alertaEmailV || alertaSenhaV || camposVazios)) {
        alert("Registrado com sucesso = )");
    }
});

function validarFormato() {
    const regexNome = /^[A-Za-zÀ-ÿçÇ ]{8,20}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\[\]{};:'",.<>?/\|\\`~])[A-Za-z\d!@#$%^&*()_+=\[\]{};:'",.<>?/\|\\`~]{5,20}$/;

    if (!regexNome.test(dados.nome) && dados.nome !== "") {
        dados.alertaNome.style.visibility = 'visible';
    } else {
        dados.alertaNome.style.visibility = 'hidden';
    }

    if (!regexEmail.test(dados.email) && dados.email !== "") {
        dados.alertaEmail.style.visibility = 'visible';
    } else {
        dados.alertaEmail.style.visibility = 'hidden';
    }

    if (!regexSenha.test(dados.senha) && dados.senha !== "") {
        dados.alertaSenha.style.visibility = 'visible';
    } else {
        dados.alertaSenha.style.visibility = 'hidden';
    }
}

window.addEventListener("load", function() {
    if (navigator.onLine) {
        document.getElementById("registro").style.setProperty("display", "flex");
        document.getElementById("aviso-offline").style.setProperty("display", "none");
    } else {
        document.getElementById("registro").style.setProperty("display", "none");
        document.getElementById("aviso-offline").style.setProperty("display", "inline");
    }
});

window.addEventListener("offline", function() {
    document.getElementById("registro").style.setProperty("display", "none");
    document.getElementById("aviso-offline").style.setProperty("display", "inline");
});

window.addEventListener("online", function() {
    document.getElementById("registro").style.setProperty("display", "flex");
    document.getElementById("aviso-offline").style.setProperty("display", "none");
    
    // funcao usada para atrasar a execucao em milisegundos de uma callback
    // nesse caso, usada para que o alerta apareca depois que as alteracoes na interface sejam feitas
    setTimeout(function() {
        alert("Conexão recuperada  =)");
    }, 100);
});