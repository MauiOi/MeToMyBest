let startTime;
let timeout;

const container = document.getElementById("reaction-container");
const message = document.getElementById("message");
const result = document.getElementById("result");
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

container.addEventListener("click", handleClick);

function startGame() {
    message.textContent = "Wait for green...";
    container.className = "waiting";
    result.textContent = "";

    let delay = Math.floor(Math.random() * 3000) + 2000;
    timeout = setTimeout(() => {
        startTime = Date.now();
        container.className = "ready";
        message.textContent = "CLICK NOW!";
    }, delay);
}

function handleClick() {
    if (container.classList.contains("waiting")) {
        clearTimeout(timeout);
        container.className = "too-soon";
        message.textContent = "Too soon! Click to try again.";
    } else if (container.classList.contains("ready")) {
        let reactionTime = Date.now() - startTime;
        result.textContent = `Your reaction time: ${reactionTime} ms`;
        container.className = "waiting";
        message.textContent = "Click to try again.";
    }
    startGame();
}

startGame();
