document.addEventListener("DOMContentLoaded", function() {
    const texts = ["a web developer", "a Frontend developer"];
    let currentTextIndex = 0; 
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseBetween = 1500;
    const typewriterElement = document.getElementById("typewriter-text");

    function type() {
        const currentText = texts[currentTextIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentText.slice(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typewriterElement.textContent = currentText.slice(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseBetween);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();
});

 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills-container .education-container', { origin: 'bottom' });
ScrollReveal().reveal('.about-content, .work-container .projects-container', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .home-content p', { origin: 'right' });