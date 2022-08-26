$(document).ready(function () {
   $('.intro_slider').slick({
      vertical: true,
      verticalSwiping: true,
      nextArrow: '<button type = "button" class = "slick-next"><img src="img/intro/next.svg" alt=""></ button>',
      prevArrow:'<button type = "button" class = "slick-prev"><img src="img/intro/prev.svg" alt=""></ button>',
      dots: true,
      responsive: [
         {
            breakpoint: 376,
            settings: {
               vertical: false,
               verticalSwiping:false,
            }
         }
      ]
   });

  
   $('.products_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      verticalSwiping: true,
      arrows: false,
      fade: true,
      asNavFor: '.products_names__slider'
    });
   $('.products_names__slider').slick({
      vertical: true,
      verticalSwiping: true,
      nextArrow: '<button type = "button" class = "slick-next"><img src="img/products/next.svg" alt=""></ button>',
      prevArrow:'<button type = "button" class = "slick-prev"><img src="img/products/prev.svg" alt=""></ button>',
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.products_slider',
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 770,
            settings: {
               vertical: false,
               slidesToShow: 1,
               verticalSwiping: false,
            }
         }
      ]
    });
});



document.addEventListener('click', showMenu);
function showMenu(event) {
   const burger = document.querySelector('.burger');
   const menu = document.querySelector('.menu');
   const body = document.querySelector('body');
   let divs = [burger, menu, body];
   if (event.target.closest('.burger')) {
      divs.forEach(x => x.classList.toggle('active'));
   }
   if (!(event.target.closest('.header_menu'))) {
      divs.forEach(x => x.classList.remove('active'));
   }
}

document.addEventListener('scroll', head);
function head() {
   const header = document.querySelector('.header_inner');
   if (window.scrollY > 50) {
      header.classList.add('scroll');
   }else header.classList.remove('scroll');
}