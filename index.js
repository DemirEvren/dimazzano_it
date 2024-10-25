// Lazy loading the background video
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');

    // Function to load the correct video based on screen size
    const lazyLoadVideo = () => {
        const screenWidth = window.innerWidth;
        let videoSource = '';

        // Set the video source based on screen width
        if (screenWidth >= 769) {
            videoSource = 'images/233749_small.mp4';  // Load desktop version
        } else {
            videoSource = 'images/dimazzano.mp4';   // Load mobile version
        }

        video.setAttribute('autoplay', true);
        video.src = videoSource; // Set the video source dynamically
        video.load(); // Ensure the video starts playing once the source is set
        video.play();
    };

    // Check if IntersectionObserver is supported (for lazy loading)
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lazyLoadVideo(); // Load video when it becomes visible
                    observer.disconnect(); // Stop observing once the video is loaded
                }
            });
        });

        observer.observe(video); // Observe the video element
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyLoadVideo(); // Just load the video immediately
    }
});

// Placeholder for form submission
document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('You have successfully subscribed!');
});
