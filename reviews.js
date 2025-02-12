// Handling form submission and dynamic review rendering
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value;
    const reviewText = document.getElementById("review-text").value;
    const stars = document.getElementById("stars").value;

    // Create a new review card dynamically
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    const reviewHeader = document.createElement("div");
    reviewHeader.classList.add("review-header");
    reviewHeader.innerHTML = `
        <span class="reviewer-name">${name}</span>
        <span class="review-stars">${"⭐".repeat(stars)}</span>
    `;

    const reviewContent = document.createElement("p");
    reviewContent.classList.add("review-text");
    reviewContent.textContent = `"${reviewText}"`;

    reviewCard.appendChild(reviewHeader);
    reviewCard.appendChild(reviewContent);

    // Append the new review card to the reviews section
    document.querySelector(".review-cards").appendChild(reviewCard);

    // Reset the form fields
    document.getElementById("review-form").reset();
});
