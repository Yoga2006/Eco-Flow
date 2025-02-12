// Add animations for the feature cards and reviews
document.addEventListener("DOMContentLoaded", function() {
    const featureCards = document.querySelectorAll(".feature-card");
    const reviewCards = document.querySelectorAll(".review-card");

    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 300);
    });

    reviewCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 300);
    });
});
