//! Questions
const questions = [
    {
        question: "26 + 5 = ?",
        answer: [
            { text: "31", correct: true },
            { text: "30", correct: false },
            { text: "32", correct: false },
        ],
    },
    {
        question: "Who am I?",
        answer: [
            { text: "Dat Phan", correct: true },
            { text: "Dunno", correct: false },
        ],
    },
];

let shuffledQuestions, currentQuestionIndex;

// DOM elements
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
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

    // populate the answers
    question.answer.forEach((answer) => {
        // create a button for each answer
        const button = document.createElement("button");

        // set the text of the button to the answer text
        button.innerText = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        // append the button to the answer buttons container
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);

    nextBtn.classList.add("hide");

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function setNextQuestion() {
    resetState();

    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function setStatusClass(element, correct) {
    clearStatusClass(element);

    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;

    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);

    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    // if there are more questions, reveal the next button
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide");
    }
    // else, reveal the restart button
    else {
        startBtn.innerText = "Restart";

        startBtn.classList.remove("hide");
    }
}
