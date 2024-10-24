// Lazy loading the background video
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');

    const lazyLoadVideo = () => {
        video.setAttribute('autoplay', true);
        video.src = 'images/233749_small.mp4'; // Set the video source when the page is fully loaded
        video.load(); // Ensures the video starts playing once the source is set
    };

    // Check if IntersectionObserver is supported (modern browsers)
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lazyLoadVideo();
                    observer.disconnect(); // No need to observe once the video is loaded
                }
            });
        });
        observer.observe(video);
    } else {
        // Fallback for older browsers
        lazyLoadVideo();
    }
});

// Placeholder for form submission
document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('You have successfully subscribed!');
});
