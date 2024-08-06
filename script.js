const questions = [
    {
        question: "Qual é uma das principais vantagens de viver no campo?",
        answers: [
            "Acesso rápido a grandes centros comerciais",
            "Menor custo de vida",
            "Maior variedade de empregos",
            "Melhor conexão de internet"
        ],
        correct: 1
    },
    {
        question: "Qual é uma vantagem de viver na cidade?",
        answers: [
            "Menos poluição",
            "Maior proximidade à natureza",
            "Melhor acesso a serviços de saúde e educação",
            "Menor trânsito"
        ],
        correct: 2
    },
    // Adicione mais perguntas aqui
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResults();
        }
    });

    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').innerText = `Pontuação: ${score}/${questions.length}`;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    questionElement.innerText = question.question;

    answerButtons.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index));
        answerButtons.appendChild(button);
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

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Sua pontuação final é ${score} de ${questions.length}</p>
        <button class="btn" onclick="startQuiz()">Reiniciar Quiz</button>
    `;
    triggerConfettiAndPalms();
}

function triggerConfettiAndPalms() {
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Trigger palms
    for (let i = 0; i < 10; i++) {
        const palm = document.createElement('i');
        palm.className = 'fas fa-hands-clapping palma';
        palm.style.left = Math.random() * 100 + 'vw';
        palm.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(palm);

        palm.addEventListener('animationend', () => {
            palm.remove();
        });
    }
}