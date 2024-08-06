const questions = [
    // ... (perguntas e respostas continuam as mesmas)
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('confetti').style.display = 'none';
    document.getElementById('clapping').style.display = 'none';
    document.getElementById('score').innerText = `Pontuação: ${score}/${questions.length}`;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.btn');
    questionElement.innerText = question.question;

    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });

    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.btn');

    if (index === question.correct) {
        score++;
        answerButtons[index].classList.add('correct');
    } else {
        answerButtons[index].classList.add('incorrect');
        answerButtons[question.correct].classList.add('correct');
    }

    answerButtons.forEach(button => button.disabled = true);

    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('score').innerText = `Pontuação: ${score}/${questions.length}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Sua pontuação final é ${score} de ${questions.length}</p>
        <button class="btn" onclick="restartQuiz()">Reiniciar Quiz</button>
    `;

    if (score >= 9) {
        document.getElementById('confetti').style.display = 'block';
    } else if (score >= 7) {
        document.getElementById('clapping').style.display = 'block';
    } else {
        const message = document.createElement('p');
        message.innerText = "Pode melhorar!";
        quizContainer.appendChild(message);
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('confetti').style.display = 'none';
    document.getElementById('clapping').style.display = 'none';
    startQuiz();
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);

startQuiz();

