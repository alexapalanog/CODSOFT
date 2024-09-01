/* ==== show menu === */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/* ==== menu show === */
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');  
    })
}

/* ==== menu hidden === */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/* ==== Remove menu mobile === */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== shadow header === */
const shadowHeader = () =>{
    const header= document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
    }
window.addEventListener('scroll', shadowHeader)
            
/* ==== swiper === */
let swiperProjects = new Swiper(".project_container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: { // Laptops and desktops
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: { // Tablets
            slidesPerView: 2,
            spaceBetween: 16,
        },
        480: { // Phones
            slidesPerView: 1,
            spaceBetween: 8,
        },
    },
    mousewheel: true,
    keyboard: true,
});



/* ==== email js === */



/* ==== show scroll up === */


/* ==== scroll sections active link === */

/* ==== scroll reveal animation=== */
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
})

sr.reveal('.home')
sr.reveal('.about .section_title-1', { delay: 150, origin: 'top' });
sr.reveal('.about_me', { delay: 250, origin: 'left' });
sr.reveal('.about_info', { delay: 350, origin: 'right' });
sr.reveal('.about_button', { delay: 350, origin: 'right' });

sr.reveal('.skills .section_title-2', { delay: 300, distance: '20px', scale: 1});
sr.reveal('.skills_container', { delay: 300, distance: '20px', scale: 1});

sr.reveal('.projects .section_title-3', {delay: 300,distance: '20px', scale: 1,origin: 'top'});
sr.reveal('.project_container', {delay: 300,distance: '20px',scale: 1,origin: 'top'});

