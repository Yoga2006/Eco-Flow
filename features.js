// Add animations for feature items on page load
document.addEventListener("DOMContentLoaded", function() {
    const featureItems = document.querySelectorAll(".feature-item");

    featureItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = "translateY(0)";
            item.style.opacity = 1;
        }, index * 300);
    });
});
