document.getElementById("started").addEventListener("click", function () {
    document.querySelector('h1').textContent = "Let's Get Started!";
    document.querySelector('p').textContent = "Choose an option to begin your focused learning session:";
    document.getElementById('function-options').classList.toggle('hidden');
});

document.getElementById("start-timer").addEventListener("click", function() {
    document.querySelector('h1').textContent = "Timer Function Activated!";
    document.querySelector('p').textContent = "Use this timer to manage your study sessions effectively.";
    startTimer();
    // Code to start the timer function
});

document.getElementById("start-eye-tracker").addEventListener("click", function() {
    document.querySelector('h1').textContent = "Eye Tracker Activated!";
    document.querySelector('p').textContent = "Please calibrate the eye tracker by following the on-screen instructions.";
    startEyeTracker();  // Ensure this function is accessible from eyeTracker.js
});
