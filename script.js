let numeroAleatorio = Math.floor(Math.random() * 200) + 1;
let tentativas = 0;
const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
const resetButton = document.getElementById('resetGame');
const numeroDisplay = document.getElementById('numero');

    document.getElementById('submitGuess').addEventListener('click', function() {
        const palpite = parseInt(document.getElementById('guessInput').value);
        tentativas++;
        attempts.textContent = `Tentativas: ${tentativas}`;
        
        if (palpite === numeroAleatorio) {
            feedback.textContent = 'Parabéns! Você acertou!';
            feedback.style.color = 'green';
            numeroDisplay.textContent = numeroAleatorio;
            resetButton.style.display = 'block';
        } else if (palpite > numeroAleatorio) {
            feedback.textContent = 'Muito alto! Tente novamente.';
            feedback.style.color = 'red';
        } else if (palpite < numeroAleatorio) {
            feedback.textContent = 'Muito baixo! Tente novamente.';
            feedback.style.color = 'red';
            }
        });

    resetButton.addEventListener('click', function() {
        numeroAleatorio = Math.floor(Math.random() * 200) + 1;
        tentativas = 0;
        feedback.textContent = '';
        attempts.textContent = 'Tentativas: 0';
        numeroDisplay.textContent = '?';
        resetButton.style.display = 'none';
    });