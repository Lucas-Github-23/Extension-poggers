document.getElementById('startTyping').addEventListener('click', function() {
    const startButton = document.getElementById('startTyping');
    const userText = document.getElementById('userText').value;
    const timerDisplay = document.getElementById('timer');

    // Bloqueia múltiplos cliques
    startButton.disabled = true;
    startButton.innerText = 'Aguardando...';

    let countdown = 4; // 4 segundos
    timerDisplay.innerText = `Começando em: ${countdown}s`;

    const countdownInterval = setInterval(function() {
        countdown -= 1;
        timerDisplay.innerText = `Começando em: ${countdown}s`;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            timerDisplay.innerText = '';
            startTyping(userText);
        }
    }, 1000);
});

function startTyping(text) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        chrome.tabs.sendMessage(currentTab.id, {
            action: 'emulateTyping',
            text: text,
            delayedStart: false,
        }, function(response) {
            document.getElementById('startTyping').innerText = 'Concluído';
        });
    });
}
