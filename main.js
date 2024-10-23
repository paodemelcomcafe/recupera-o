// Função que exibe um alerta quando o poema é clicado
function mostrarAlerta() {
    alert("Você clicou no poema da liberdade!");
}

// Adiciona um evento de clique à seção do poema
document.addEventListener("DOMContentLoaded", function() {
    const poema = document.querySelector('.poem');
    poema.addEventListener('click', mostrarAlerta);
});