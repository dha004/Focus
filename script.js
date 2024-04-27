document.getElementById("started").addEventListener("click", function () {
    document.querySelector('h1').textContent = "Let's Get Started!";
    document.querySelector('p').textContent = "Here are some steps to begin your learning journey:";
});

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-timer');
    const timerDisplay = document.getElementById('timer');
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks-list');
    const addButton = document.getElementById('add-task');

    let timerDuration = 25; // timer duration in minutes
    let isRunning = false;
    let timer;

    // Function to start the focus timer
    function startTimer(duration) {
        let time = duration * 60; // convert duration to seconds
        timer = setInterval(() => {
            let minutes = parseInt(time / 60, 10);
            let seconds = parseInt(time % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = `${minutes}:${seconds}`;

            if (--time < 0) {
                timerDisplay.textContent = "Time's up!";
                clearInterval(timer);
                isRunning = false;
            }
        }, 1000);
    }

    // Event listener for the start timer button
    startButton.addEventListener('click', function () {
        if (!isRunning) {
            startTimer(timerDuration);
            isRunning = true;
            startButton.textContent = 'Stop Timer';
        } else {
            clearInterval(timer);
            isRunning = false;
            timerDisplay.textContent = "25:00";
            startButton.textContent = 'Start Timer';
        }
    });

    // Function to add tasks to the list
    function addTask(task) {
        if (task) {
            const taskElement = document.createElement('li');
            taskElement.textContent = task;
            tasksList.appendChild(taskElement);
            taskInput.value = ''; // clear input after adding
        }
    }

    // Event listener for the add task button
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    // Allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});

