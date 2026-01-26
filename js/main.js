import Typewriter from '/js/typewriter.js';

document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('#hero-title-text');

    if (titleElement) {
        new Typewriter(titleElement, {
            codeText: 'new SoftwareEngineer ("Rajiv Philip");', 
            finalText: 'RAJIV PHILIP',
            typeSpeed: 80,
            deleteSpeed: 40,
            pauseDuration: 1200
        });
    }
});