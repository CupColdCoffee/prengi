$(document).ready(function(){
    $('.promo__inner').slick({
        dots: true,
        dotsClass: "my-dots",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png"></button>',
        // adaptiveHeight: true
    });
  });