// SECTIONS SLIDE ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {

        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// NAV SCROLLBAR LOGIC
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const menu = document.querySelector ('.menu');
    const scrolled = window.scrollY;
  
    if (scrolled > 0) {
        nav.classList.add('scrolled');
        menu.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        menu.classList.remove('scrolled');
    }
});

// SKILLS SLIDESHOW OVERFLOW

const leftScroll = document.querySelector('#left-btn');
const rightScroll = document.querySelector('#right-btn');
const toScroll = document.querySelector('#skills-box');

let scrollInterval;

leftScroll.onclick = () => {
    toScroll.scrollTo({
        left: toScroll.scrollLeft - 320,
        behavior: 'smooth'
    });
    console.log(toScroll.scrollWidth > toScroll.offsetWidth);
};

rightScroll.onclick = () => {
    toScroll.scrollTo({
        left: toScroll.scrollLeft + 320,
        behavior: 'smooth'
    });
};
