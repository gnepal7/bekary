$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 75) {
        $(".header").addClass("fixed-header");
    } else {
        $(".header").removeClass("fixed-header");
    }
});

$( document ).ready(function() {

    $( '.menu_toggler' ).click(function() {
      $( 'body' ).toggleClass( 'over' );
      $( '.menu' ).toggleClass( 'on_mobile' );  
      $(this).toggleClass( 'close' );   
    });        

    $(".tasty_slider").owlCarousel({
      //loop: true,
      autoplay: false,
      margin: 20,
      items: 3,
      nav: true,
      dots: false,
      autoplayTimeout: 2500,
      lazyLoad:true,
      autoHeight:true,
      // navText: [
      //   "<i class='i i-chevron-left'></i>",
      //   "<i class='i i-chevron-right'></i>",
      // ]
      navText: [
        "<",
        ">",
      ]           
    });


});