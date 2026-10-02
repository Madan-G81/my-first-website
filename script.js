// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the button by id="startButton", with fallback to existing id="alertBtn"
    const startButton = document.getElementById('startButton') || document.getElementById('alertBtn');

    // Find the main hero heading inside the hero section
    const heroHeading = document.querySelector('.hero h1');

    // Add a click event listener to change the heading text
    if (startButton && heroHeading) {
        startButton.addEventListener('click', () => {
            heroHeading.textContent = "Let's Build Something Amazing";
        });
    }
});
