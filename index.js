// Lazy loading the background video
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');

    // Function to detect if the user is on a mobile device
    const isMobileDevice = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(userAgent);
    };

    // Function to load the correct video based on device type and screen width
    const lazyLoadVideo = () => {
        let videoSource = '';

        // If it's a mobile device and the screen is smaller than 768px, load the mobile video
        if (isMobileDevice() && window.innerWidth <= 768) {
            videoSource = 'images/dimazzano_updated.mp4';   // Mobile video
        } else {
            videoSource = 'images/233749_small.mp4';  // Desktop video
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


// Select the text element
const comingSoonText = document.getElementById('coming-soon-text');

// Define the text options
const originalText = "Coming Soon";
const newText = "In Arrivo";

function startTextFadeSequence() {
    // Step 1: Fade out the original text
    comingSoonText.classList.add('fade-out');
    
    setTimeout(() => {
        // Step 2: Change to new text and fade in
        comingSoonText.textContent = newText;
        comingSoonText.classList.remove('fade-out');
        comingSoonText.classList.add('fade-in');
    }, 1000); // 1-second delay to match the fade-out effect

    setTimeout(() => {
        // Step 3: Fade out the new text
        comingSoonText.classList.remove('fade-in');
        comingSoonText.classList.add('fade-out');
    }, 3000); // 2 seconds after showing new text

    setTimeout(() => {
        // Step 4: Change back to the original text and fade in
        comingSoonText.textContent = originalText;
        comingSoonText.classList.remove('fade-out');
        comingSoonText.classList.add('fade-in');
    }, 4000); // 1 second after fading out the new text
}

// Run the text fade sequence in a loop every 6 seconds
setInterval(startTextFadeSequence, 6000);

window.addEventListener("load", function () {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'none';
});

