// script.js

// Effet de grossissement sur les boutons du header lorsqu'ils sont survolés
const navButtons = document.querySelectorAll('nav a');
navButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
