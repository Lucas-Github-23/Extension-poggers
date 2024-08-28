document.getElementById('writeButton').addEventListener('click', () => {
    const textArea = document.getElementById('textInput');
    const textToType = textArea.value;  // Captura o texto do campo de entrada

    // Defina um atraso antes de começar a digitação (em milissegundos)
    const delayBeforeStart = 3000;

    // Começar a digitação após um atraso
    setTimeout(() => {
        typeText(textToType, 100);  // 100ms entre cada letra
    }, delayBeforeStart);
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
