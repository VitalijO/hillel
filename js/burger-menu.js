const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.header__menu-icon');

const body = document.body;

if (menu && menuBtn){
    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    })
}