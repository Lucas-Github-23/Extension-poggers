document.getElementById('writeButton').addEventListener('click', () => {
    const textArea = document.getElementById('textInput');
    const textToType = textArea.value;  // Captura o texto do campo de entrada
    const writeButton = document.getElementById('writeButton');
    const timerElement = document.getElementById('timer');

    // Defina o atraso antes de começar a digitação (em segundos)
    const delayBeforeStart = 3;

    // Desabilitar o botão para impedir cliques múltiplos
    writeButton.disabled = true;
    let countdown = delayBeforeStart;

    // Atualizar o temporizador na interface do usuário
    timerElement.textContent = `Começando em ${countdown} segundos...`;
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            timerElement.textContent = `Começando em ${countdown} segundos...`;
        } else {
            clearInterval(countdownInterval);
            timerElement.textContent = '';  // Limpar o temporizador
            typeText(textToType, 100);  // Iniciar a digitação após o temporizador zerar
            writeButton.disabled = false;  // Reativar o botão após a digitação
        }
    }, 1000);  // Atualiza a cada segundo
});

function typeText(text, delay) {
    let index = 0;

    function typeNextLetter() {
        if (index < text.length) {
            document.activeElement.value += text[index];  // Adiciona letra ao elemento ativo
            index++;
            setTimeout(typeNextLetter, delay);  // Atraso entre cada letra
        }
    }

    typeNextLetter();
}
