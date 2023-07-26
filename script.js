const questions = [
    {
        question: "26 + 5 = ?",
        answer: [
            { text: "31", correct: true },
            { text: "30", correct: false },
            { text: "265", correct: false },
            { text: "32", correct: false },
        ],
    },
];

let shuffledQuestions, currentQuestionIndex;

// DOM elements
const startBtn = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startBtn.addEventListener("click", startGame);

function startGame() {
    console.log("Game started");

    // hide the start button
    startBtn.classList.add("hide");
    // reveal the question & buttons container
    questionContainerElement.classList.remove("hide");

    // shuffle the questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    // set the current question index to 0
    currentQuestionIndex = 0;

    // reveal the next question
    setNextQuestion();
}

function showQuestion(question) {
    // set the question text
    questionElement.innerText = question.question;
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function selectAnswer() {}
