document.addEventListener('DOMContentLoaded', function() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data === null) {
            return;
        }
        var x = data.x;
        var y = data.y;

        // Update gaze data display
        document.getElementById('gazeData').textContent = `Gaze Position: X=${x}, Y=${y}`;

        // Additional functionality to check if the gaze is off-screen
        if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
            console.log('Gaze is off-screen');
        }
    }).begin();

    // Set up additional WebGazer parameters if needed
    webgazer.showVideoPreview(true).showPredictionPoints(true);

    // Add event listeners to calibration points
    document.querySelectorAll('.calibration-point').forEach(point => {
        point.addEventListener('click', function(e) {
            webgazer.addCalibrationPoint(e.clientX, e.clientY);
        });
    });
});
