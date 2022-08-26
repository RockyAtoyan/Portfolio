const header = document.querySelector('header');
document.addEventListener('scroll',Head);

function Head(){
    const intro = document.querySelector('.intro');
    console.log(intro.clientHeight);
    if(window.scrollY>(intro.clientHeight-200)){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

const main = document.documentElement;
main.addEventListener('click',showMenu);

function showMenu(event){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
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

console.log(main.clientWidth);
if(main.clientWidth<=320){
    const btn = document.querySelector('.intro_link');
    btn.innerHTML = 'МЕНЮ';
    
}

const slider = document.querySelector('.reviews_slider');
const sliderLine = document.querySelector('.reviews_slider_line');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let offleft = 0;
next.addEventListener('click',nextR);
prev.addEventListener('click',prevR);


function nextR(){
    const sliderHeigth = slider.clientWidth;
    if(offleft<(sliderHeigth * (sliderLine.childElementCount - 1))){
        offleft += sliderHeigth;
        sliderLine.style.left = -offleft + 'px';
    }else{
        offleft = 0;
        sliderLine.style.left = -offleft + 'px';
    }
}

function prevR(){
    const sliderHeigth = slider.clientWidth;
    if(offleft>0){
        offleft = offleft - sliderHeigth;
        sliderLine.style.left = -offleft + 'px';
    }
    else{
        offleft = sliderHeigth * (sliderLine.childElementCount - 1);
        sliderLine.style.left = -offleft + 'px';
    }
}
