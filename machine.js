const startButton = document.getElementById("start-button");
const machineButton = document.getElementById("machine-button");
const message = document.getElementById("machine-message");
const scoreDisplay = document.getElementById("score");

let score = 0;
let timer;
let playing = false;

function startRound() {
    playing = true;

    startButton.disabled = true;
    machineButton.disabled = false;
    machineButton.textContent = "ON — click me!";

    message.textContent = "Quick! Switch it off!";

    // 随机等待 500 到 1499 毫秒
    const delay = 500 + Math.floor(Math.random() * 1000);

    timer = setTimeout(machineWins, delay);
}

function playerWins() {
    if (!playing) {
        return;
    }

    clearTimeout(timer);
    score = score + 1;
    scoreDisplay.textContent = score;

    endRound("You win! One point for you.");
}

function machineWins() {
    endRound("Too slow! The machine switched itself off.");
}

function endRound(result) {
    playing = false;

    machineButton.disabled = true;
    machineButton.textContent = "OFF";
    startButton.disabled = false;

    message.textContent = result;
}

startButton.addEventListener("click", startRound);
machineButton.addEventListener("click", playerWins);