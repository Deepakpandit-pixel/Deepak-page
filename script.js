// Button animation
const button = document.querySelector(".join-btn");

button.addEventListener("click", () => {
    fbq('track', 'Lead');
});

// Smooth page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
