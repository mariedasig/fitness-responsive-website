const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    
    if(window.scrollY > 30) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }

})