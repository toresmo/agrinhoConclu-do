document.getElementById('submit').addEventListener('click', function() {
    var score = 0;
    var totalQuestions = 5;

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value === 'a') {
        score++;
    }

    if (q2 && q2.value === 'a') {
        score++;
    }

    if (q3 && q3.value === 'c') {
        score++;
    }

    if (q4 && q4.value === 'a') {
        score++;
    }

    if (q5 && q5.value === 'a') {
        score++;
    }

    var result = document.getElementById('result');
    result.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;

    if (score === totalQuestions) {
        document.getElementById('quiz').classList.add('hidden');
        document.getElementById('congrats-message').classList.remove('hidden');
    }
});
