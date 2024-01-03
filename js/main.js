document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
})


ScrollReveal().reveal('.cabecera');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});

