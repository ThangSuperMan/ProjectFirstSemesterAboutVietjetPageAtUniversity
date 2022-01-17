const backToTop = document.querySelector('.backToTop');

window.addEventListener('scroll', () => {
    // Add class active when the scrollY > 500 if true add class active otherwise remove class active
    backToTop.classList.toggle('active', window.scrollY > 500);
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

backToTop.addEventListener('click', scrollToTop);