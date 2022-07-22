$(document).ready(function(){
  $(".block1").owlCarousel({
    items:4,
    margin:30,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            loop:true,
            center: true,
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
  });
});

$('.clients-carousel').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 450,
  margin: 30,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2
      },
      991: {
          items: 2
      },
      1200: {
          items: 3
      },
      1920: {
          items: 3
      }
  }
});

$(".block11").owlCarousel({
  items:1,
  loop:true,
})
