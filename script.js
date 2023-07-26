const startBtn = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

startBtn.addEventListener("click", startGame);

function startGame() {
    console.log("Game started");

    // hide the start button
    startBtn.classList.add("hide");
    // reveal the question & buttons container
    questionContainerElement.classList.remove("hide");
}

function setNextQuestion() {}

function selectAnswer() {}
