const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/*remover classe show*/

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}

/*adicionar a sombra abaixo do menu quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function (){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
})

/*swiper js*/
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/*scrollreveal*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links    
    `,
    { interval: 100}
)

/*botão topo*/

const buttonTop = document.querySelector('.button-up')
window.addEventListener('scroll', function () {
    if(window.scrollY >= 500){
        buttonTop.classList.add('show')
    }else{
        buttonTop.classList.remove('show')
    }
})
