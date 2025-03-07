document.addEventListener("DOMContentLoaded", () => {
    const reactionBox = document.getElementById("reaction-box");
    const startButton = document.getElementById("start-reaction-test");
    const reactionTimeDisplay = document.getElementById("reaction-time");
    let startTime, timeoutId;

    if (startButton) {
        startButton.addEventListener("click", () => {
            reactionBox.textContent = "Wait for green...";
            reactionBox.style.backgroundColor = "white";
            reactionTimeDisplay.textContent = "";
            
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
            timeoutId = setTimeout(() => {
                reactionBox.style.backgroundColor = "green";
                reactionBox.textContent = "CLICK!";
                startTime = Date.now();
            }, randomDelay);
        });

        reactionBox.addEventListener("click", () => {
            if (reactionBox.style.backgroundColor === "green") {
                const reactionTime = Date.now() - startTime;
                reactionTimeDisplay.textContent = `Your reaction time: ${reactionTime} ms`;
                reactionBox.textContent = "Wait for green...";
                reactionBox.style.backgroundColor = "white";
            } else {
                clearTimeout(timeoutId);
                reactionBox.textContent = "Too soon! Try again.";
                reactionBox.style.backgroundColor = "red";
            }
        });
    }
});
