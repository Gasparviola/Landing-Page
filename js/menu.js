const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
})

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})
