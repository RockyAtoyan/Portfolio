window.addEventListener('scroll',Menu);
function Menu(){
    const header = document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

const main = document.documentElement;
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
main.addEventListener('click',showMenu);
main.addEventListener('keyup',closeMenu);

function showMenu(event){
    if(event.target.closest('.burger')){
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    }
    if(!(event.target.closest('.header_menu'))){
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('active');
    }
}

function closeMenu(event){
    if(event.code == 'Escape'){
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('active');
    }
}