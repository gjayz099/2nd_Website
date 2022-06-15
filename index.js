$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      items:1,
      lazyLoad: true,
      nav:true,
      navText: false,
      center: true,
      items:2,
      loop:true,
      margin:10,
      autoplay: true,
      responsive:{
          1400:{
            items:4
          },
          100:{
            items:3
          },
          600:{
            items:2
          },
          300:{
            items:1
          }
      }
    });

    $(".mobile-menu").on("click", function() {
        $("ul").toggleClass("active_bar")
      })
})