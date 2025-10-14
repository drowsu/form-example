function processarFormulario(){

    const inputNome = document.getElementById('nome');

    const elementoResposta = document.getElementById('resposta');

    const nomeDigitado = inputNome.value.trim();

    if (nomeDigitado){
        const mensagem= `Olá, ${nomeDigitado}! Seu nome foi capturado via onclick`

    elementoResposta.textContent = mensagem
    }

    else{
        elementoResposta.textContent = "Por favor digite seu nome"
    }
}