// menu section
let menuIcon = document.querySelector('#menu_icon');
let arrows = document.querySelectorAll('#menu_icon span')
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x-lg');
    arrows.forEach((arrow)=>{
        arrow.classList.toggle('cross')
    })
    navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset &&  top <offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            });
        };
    });

   
    // let  header = document.querySelector('header');
    // header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle and navbar

    menuIcon.classList.remove('bi-x-lg');
    navbar.classList.remove('active');
};


// scroll reaveal
ScrollReveal({
    //  reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home_img,.service_container,.portfolio_box,.contact form', { origin:'buttom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });


// typed js
const typed = new Typed ('.multi_text',{
    strings:['Community Manager','Ghost Writer','Content Writer','Ambassardorship','Defi Analyst','Collaboration Manager'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// javascript functions

// Named function.
// Anonymous function.
// Immediately invoked function expression. It runs as soon as the browser finds it.



