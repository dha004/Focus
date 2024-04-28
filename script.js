console.log("Executing script.js:");

document.getElementById("start-timer").addEventListener("click", function () {
    document.querySelector('h1').textContent = "Timer Function Activated!";
    document.querySelector('p').textContent = "Use this timer to manage your study sessions effectively.";
    startTimer();
    document.getElementById('gazeData').classList.add('hidden'); // Hide gaze data when timer starts
});

document.getElementById("start-eye-tracker").addEventListener("click", function () {
    console.log("Eye Tracker Activated!");
    document.querySelector('h1').textContent = "Eye Tracker Activated!";
    document.querySelector('p').textContent = "Please calibrate the eye tracker by following the on-screen instructions.";
    startEyeTracker();
    document.getElementById('gazeData').classList.remove('hidden'); // Show gaze data when eye tracker starts
});
