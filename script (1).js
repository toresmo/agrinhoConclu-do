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
    {
        question: "Qual setor oferece mais oportunidades de emprego na cidade?",
        answers: [
            "Agricultura",
            "Tecnologia e serviços",
            "Mineração",
            "Pesca"
        ],
        correct: 1
    },
    {
        question: "Qual atividade econômica é mais comum no campo?",
        answers: [
            "Comércio",
            "Agricultura",
            "Tecnologia da informação",
            "Indústria automotiva"
        ],
        correct: 1
    },
    {
        question: "Qual das seguintes é uma oportunidade de empreendedorismo no campo?",
        answers: [
            "Desenvolvimento de aplicativos",
            "Cultivo de orgânicos",
            "Consultoria empresarial",
            "Desenvolvimento de software"
        ],
        correct: 1
    },
    {
        question: "Qual é um desafio comum para empresas nas áreas rurais?",
        answers: [
            "Falta de espaço físico",
            "Alta concorrência",
            "Acesso limitado à internet de alta velocidade",
            "Alto custo de aluguel"
        ],
        correct: 2
    },
    {
        question: "Qual é uma oportunidade de negócio comum nas cidades?",
        answers: [
            "Plantação de grandes culturas",
            "Agricultura de precisão",
            "Abrir uma startup de tecnologia",
            "Pesca em larga escala"
        ],
        correct: 2
    },
    {
        question: "Qual é uma vantagem de ter um negócio no campo?",
        answers: [
            "Grande mercado consumidor",
            "Facilidade de transporte e logística",
            "Menores custos operacionais",
            "Acesso fácil a matérias-primas importadas"
        ],
        correct: 2
    },
    {
        question: "Qual é uma oportunidade de carreira crescente nas cidades?",
        answers: [
            "Tecnologia verde",
            "Agricultura tradicional",
            "Mineração",
            "Carpintaria"
        ],
        correct: 0
    },
    {
        question: "Qual é um benefício de trabalhar em uma cidade grande?",
        answers: [
            "Mais opções de lazer e entretenimento",
            "Menos poluição sonora",
            "Menos estresse",
            "Mais proximidade com a natureza"
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.btn');
    questionElement.innerText = question.question;

    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.classList.remove('correct', 'incorrect');
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
    document.getElementById('quiz-container').innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Sua pontuação final é ${score} de ${questions.length}</p>
        <button class="btn" onclick="restartQuiz()">Reiniciar Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
}

startQuiz();
