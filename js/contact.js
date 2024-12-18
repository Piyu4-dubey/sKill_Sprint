document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.rating .star'); // Select stars in the feedback section
    const ratingValue = document.getElementById('rating-value'); // Select the rating display element
    let currentRating = 0;

    // Function to highlight stars
    function highlightStars(value) {
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.add('selected'); // Add selected style
            } else {
                star.classList.remove('selected'); // Remove selected style
            }
        });
    }

    // Event listeners for each star
    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => highlightStars(index + 1)); // Highlight on hover

        star.addEventListener('mouseout', () => highlightStars(currentRating)); // Reset to selected rating on mouseout

        star.addEventListener('click', () => {
            currentRating = index + 1; // Set the current rating
            highlightStars(currentRating);
            ratingValue.textContent = `Rating: ${currentRating}/5`; // Update text display
        });
    });

    // Remove unnecessary stars created in the footer
    const extraStars = document.querySelectorAll('#star-rating, #rating-value');
    extraStars.forEach((element) => element.remove());
});
