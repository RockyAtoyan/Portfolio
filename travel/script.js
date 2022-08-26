const header = document.querySelector('.header');
document.addEventListener('scroll',head);
function head(){
    if(window.scrollY>0){
        header.classList.add('scroll');
    }else header.classList.remove('scroll');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('click',showMenu);

function showMenu(event){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    let divs = [burger,menu,body];
    if(event.target.closest('.burger')){
        divs.forEach(n => n.classList.toggle('active'));
    }
    if(!(event.target.closest('.header_menu'))){
        divs.forEach(n => n.classList.remove('active'));
    }
}