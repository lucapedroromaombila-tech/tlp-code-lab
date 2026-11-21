const abrir = document.getElementById("abrir");
const fechar = document.getElementById("fechar");
const janela = document.getElementById("janela");
const enviar = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const conversa = document.getElementById("conversa");

// Abrir chat
abrir.addEventListener("click", function () {
    janela.style.display = "block";
    
});

// Fechar chat
fechar.addEventListener("click", function () {
    janela.style.display = "none";
});

// Enviar mensagem
enviar.addEventListener("click", function () {

    const texto = mensagem.value.trim();

    if (texto === "") {
        return;
    }

    conversa.innerHTML += `<p><strong>Tu:</strong> ${texto}</p>`;

    mensagem.value = "";

    // A tua lógica de resposta começa aqui
    if(texto =='ola'){
        conversa.innerHTML += ` <p>oi tudo bem duran</p>`;
    }

});
