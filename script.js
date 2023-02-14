

$(document).ready(function() {
    // Retrieve the current view count from localStorage, or set it to 0 if it doesn't exist
    let viewCount = localStorage.getItem('viewCount') || 0;
    // Increment the view count by 1
    viewCount++;
    // Update the view count in localStorage
    localStorage.setItem('viewCount', viewCount);
    // Display the view count on the page
    document.getElementById('view-count').textContent = `Viewed ${viewCount} times`;

    // Get all the rating icons
    const ratingIcons = document.querySelectorAll('.rating .fa-batarang');

    // Add a click event listener to each rating icon
    ratingIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Update the appearance of the rating icons
        for (let i = 0; i < ratingIcons.length; i++) {
        if (i <= index) {
            ratingIcons[i].classList.add('checked');
        } else {
            ratingIcons[i].classList.remove('checked');
        }
        }
        // Send the user's rating to the server
        const rating = index + 1;
        // Code to send the rating to the server using AJAX
    });
    });
});