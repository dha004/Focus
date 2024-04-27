// Function to initialize and start the eye tracker
function startEyeTracker() {
    // Setting up WebGazer
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data === null) {
            return; // No data received
        }
        var x = data.x; // x coordinate of gaze
        var y = data.y; // y coordinate of gaze

        // Update some display element with the current gaze position
        document.getElementById('gazeData').textContent = `Gaze Position: X=${x.toFixed(2)}, Y=${y.toFixed(2)}`;
        
        // Optionally, handle off-screen gaze detection
        if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
            console.log('Gaze is off-screen');
        }
    }).begin();

    // These settings are optional and can be adjusted based on your needs
    webgazer.showVideoPreview(true) // Show video preview of the user
           .showPredictionPoints(true) // Show where the model predicts you are looking
           .applyKalmanFilter(true); // Use Kalman Filter to smooth the predictions

    // Ensure the eye tracker is ready and calibrated
    webgazer.ensureWebcamAccess().then(function() {
        console.log("Webcam access allowed");
    });

    // Calibration is usually needed for accurate tracking
    setupCalibrationPoints();
}

// Function to set up calibration points on the screen
function setupCalibrationPoints() {
    const points = document.querySelectorAll('.calibration-point');
    points.forEach(point => {
        point.addEventListener('click', function(e) {
            // Add calibration point at the click location
            webgazer.addCalibrationPoint(e.clientX, e.clientY);
            console.log(`Calibration point added at (${e.clientX}, ${e.clientY})`);
        });
    });
}

// Make the start function accessible globally
window.startEyeTracker = startEyeTracker;

// If you want to start eye tracking automatically when the page loads, you can uncomment this line
// document.addEventListener('DOMContentLoaded', startEyeTracker);
