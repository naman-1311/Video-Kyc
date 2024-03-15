document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const captureBtn = document.getElementById('capture-btn');
    const cameraContainer = document.getElementById('camera-container');
    const video = document.getElementById('video');
    const takePhotoBtn = document.getElementById('take-photo-btn');
    const canvas = document.getElementById('canvas');

    // Event listener for file input change
    fileInput.addEventListener('change', function () {
        // Handle file upload
    });

    // Event listener for capture button click
    captureBtn.addEventListener('click', function () {
        cameraContainer.style.display = 'block';
        startCamera();
    });

    // Event listener for take photo button click
    takePhotoBtn.addEventListener('click', function () {
        takePhoto();
    });

    // Function to start the camera
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err) {
                console.error('Error accessing the camera: ', err);
            });
    }

    // Function to capture photo from camera
    function takePhoto() {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // You can upload the canvas image data or convert it to a file
        // Example: const imageData = canvas.toDataURL('image/png');
    }
});
