
const burger = document.querySelector('.burger');
burger.addEventListener('click' , toggleBurger);

function toggleBurger () {
    burger.classList.toggle('active');
    const menu = document.querySelector('.side_menu');
    menu.classList.toggle('active');
}