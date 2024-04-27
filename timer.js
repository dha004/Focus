let timerDuration = 25; // timer duration in minutes
let isRunning = false;
let timer;

function startTimer(duration) {
    let time = duration * 60; // convert duration to seconds
    timer = setInterval(() => {
        let minutes = parseInt(time / 60, 10);
        let seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').textContent = `${minutes}:${seconds}`;

        if (--time < 0) {
            document.getElementById('timer').textContent = "Time's up!";
            clearInterval(timer);
            isRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('timer').textContent = "25:00";
}

// Attaching functions to window object to ensure global availability
window.startTimer = startTimer;
window.stopTimer = stopTimer;

document.getElementById('start-timer').addEventListener('click', function() {
    if (!isRunning) {
        startTimer(timerDuration);
        isRunning = true;
        document.getElementById('start-timer').textContent = 'Stop Timer';
    } else {
        stopTimer();
    }
});
