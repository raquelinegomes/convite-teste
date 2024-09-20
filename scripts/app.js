document.getElementById("yesBtn").addEventListener("click", function() {
    const message = document.getElementById("responseMessage");
    message.innerHTML = "Hmm, certo, ótima decisão, inteligente, te espero a partir das 19h!";
    const card = document.getElementById("responseCard");
    card.className = "response-card valid";
    card.classList.remove("hidden"); 
});

document.getElementById("noBtn").addEventListener("click", function() {
    const message = document.getElementById("responseMessage");
    message.innerHTML = "Opção inválida! Ta apertando não por quê????";
    const card = document.getElementById("responseCard");
    card.className = "response-card invalid"; 
    card.classList.remove("hidden"); 
});
