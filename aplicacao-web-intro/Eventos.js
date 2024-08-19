document.getElementById("registro").addEventListener("submit", function(evento) {
    let nome = document.getElementById("nome").value.trim().replace(/\s{2,}/g, ' ');
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    validarFormato();

    let alertaNome = document.getElementById("alerta-nome");
    let alertaEmail = document.getElementById("alerta-email");
    let alertaSenha = document.getElementById("alerta-senha");

    const alertaNomeV = alertaNome.style.visibility === 'visible';
    const alertaEmailV = alertaEmail.style.visibility === 'visible';
    const alertaSenhaV = alertaSenha.style.visibility === 'visible';

    const camposVazios = nome === "" || email === "" || senha === "";

    if (alertaNomeV || alertaEmailV || alertaSenhaV || camposVazios) {
        evento.preventDefault();
    } else {
        document.write("Validação completa")
    }
});

function validarFormato() {
    let nome = document.getElementById("nome").value.trim().replace(/\s{2,}/g, ' ');
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    let alertaNome = document.getElementById("alerta-nome");
    let alertaEmail = document.getElementById("alerta-email");
    let alertaSenha = document.getElementById("alerta-senha");

    let regexNome = /^[A-Za-zÀ-ÿçÇ ]{8,20}$/;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\[\]{};:'",.<>?/\|\\`~])[A-Za-z\d!@#$%^&*()_+=\[\]{};:'",.<>?/\|\\`~]{5,20}$/;

    if (!regexNome.test(nome) && nome !== "") {
        alertaNome.style.visibility = 'visible';
    } else {
        alertaNome.style.visibility = 'hidden';
    }

    if (!regexEmail.test(email) && email !== "") {
        alertaEmail.style.visibility = 'visible';
    } else {
        alertaEmail.style.visibility = 'hidden';
    }

    if (!regexSenha.test(senha) && senha !== "") {
        alertaSenha.style.visibility = 'visible';
    } else {
        alertaSenha.style.visibility = 'hidden';
    }
}
