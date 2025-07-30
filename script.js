// Simple animation on page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero").style.opacity = "1";
    document.querySelector(".hero").style.transition = "opacity 1.5s ease-in-out";
});
