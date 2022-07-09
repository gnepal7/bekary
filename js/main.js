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
      $( '.menu_ul' ).toggleClass( 'on_mobile' );  
      $(this).toggleClass( 'close' );   
    });

    if ($(window).width()<767) {
      $(".drop").click(function(){
        $(this).toggleClass('with-drop')
        $(this).children(".sbmnu").toggleClass("show");          
      });
    }
    else {
      $(".drop").hover(function(){
        $(this).toggleClass('with-drop')
        // $(".sbmnu").toggleClass("show"); 
        $(this).children(".sbmnu").toggleClass("show");
      });      
    }
    //search
    $('.search_show').click(function(){
      $(this).hide();
      $('.search_form').css('display','flex');
      $('.search_close').show();
    });
    $('.search_close').click(function(){
      $(this).hide();
      $('.search_form').css('display','none');
      $('.search_show').show();
    });

    $('.side-content').slice(1).hide();
      $('.side-menu li').eq(0).addClass('active');
      $('.side-menu li a').click(function(e) {
        e.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.side-content').hide();
    });    

    $(".feature_slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 20,
      items: 4,
      nav: true,
      dots: false,
      autoplayTimeout: 2500,
      lazyLoad:true,
      autoHeight:true,
      navText: [
        "<i class='cf cf-angle-left'></i>",
        "<i class='cf cf-angle-right'></i>",
      ],
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:2,
            nav:true
        },
        767:{
            items:3,
            nav:true,
            loop:false
        },
        992:{
            items:4,
            nav:true,
            loop:false
        }
      }         
    });


});