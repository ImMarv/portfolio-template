// This file contains the frontend JavaScript code for handling interactivity and dynamic behavior on the client side.

// Example of a simple function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission logic here
            alert('Form submitted!');
        });
    }

    // Example function to fetch and display videos from the JSON file
    fetch('/data/videos.json')
        .then(response => response.json())
        .then(data => {
            const videoContainer = document.getElementById('video-container');
            data.videos.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.innerHTML = `<h3>${video.title}</h3><video src="${video.url}" controls></video>`;
                videoContainer.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
});