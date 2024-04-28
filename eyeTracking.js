document.addEventListener('DOMContentLoaded', function() {
    let userOutOfFrame = false;

    function playMusic(){
        let audio = new Audio("beeping.mp3");
        audio.play()
    }

    function alertUser() {
        if (!userOutOfFrame) {  // Only show alert if user was previously in frame
            alert("You are out of frame!");
            userOutOfFrame = true;  // Set flag to true as user is out of frame
        }
    }

    function startEyeTracker() {
        webgazer.setGazeListener(function(data, elapsedTime) {
            console.log("Received gaze data:", data);  // Log all data received

            if (!data || data.x === undefined || data.y === undefined) {  // Check for undefined data
                console.log("Data is undefined, user may be out of frame.");  // Specific log for undefined data
                if (!userOutOfFrame) {
                    alert("You are out of frame!");
                    userOutOfFrame = true;
                }
            } else {
                if (userOutOfFrame) {
                    userOutOfFrame = false;
                    console.log("User is back in frame.");  // Log when the user returns to frame
                }
                document.getElementById('gazeData').textContent = `Gaze Position: X=${data.x.toFixed(2)}, Y=${data.y.toFixed(2)}`;
            }
        }).begin();
    }

        // Show buttons for calibration actions
        document.getElementById('start-calibration').classList.remove('hidden');
        document.getElementById('clear-calibration-dots').classList.remove('hidden');
        document.getElementById('reset-calibration').classList.remove('hidden');
        
    function setupCalibrationPoints() {
        const calibrationArea = document.getElementById('calibration-area');
        calibrationArea.classList.remove('hidden');
        // Ensure event listeners are set up only once
        if (!calibrationArea.dataset.listenersAdded) {
            document.querySelectorAll('.calibration-point').forEach(point => {
                point.addEventListener('click', function(e) {
                    webgazer.addCalibrationPoint(e.clientX, e.clientY);
                    console.log(`Calibration point added at (${e.clientX}, ${e.clientY})`);
                });
            });
            calibrationArea.dataset.listenersAdded = 'true';
        }
    }

    function clearCalibrationDots() {
        const calibrationArea = document.getElementById('calibration-area');
        calibrationArea.classList.add('hidden');
        webgazer.clearData();
        console.log('Calibration dots cleared');
    }

    function resetCalibration() {
        const calibrationArea = document.getElementById('calibration-area');
        webgazer.clearData();
        calibrationArea.classList.remove('hidden');
        console.log('Calibration reset');
        // Re-enable clicking on calibration points after reset
        calibrationArea.dataset.listenersAdded = 'false';
        setupCalibrationPoints();
    }

    document.getElementById('start-calibration').addEventListener('click', setupCalibrationPoints);
    document.getElementById('clear-calibration-dots').addEventListener('click', clearCalibrationDots);
    document.getElementById('reset-calibration').addEventListener('click', resetCalibration);

    document.getElementById('start-eye-tracker').addEventListener('click', startEyeTracker);
});
