// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the button by its ID
    const alertBtn = document.getElementById('alertBtn');

    // Add a click event listener to the button
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            alert('Welcome to my first website! Thanks for clicking.');
        });
    }
});
