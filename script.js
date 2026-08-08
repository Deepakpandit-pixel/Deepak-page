// Track JOIN NOW click
const button = document.querySelector(".join-btn");

if (button) {
    button.addEventListener("click", () => {
        fbq('track', 'Lead');
    });
}

// Smooth page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
