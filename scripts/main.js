$(document).ready(function(){

  $(".typebox").typed({
    strings: ["Hey, I'm Britt, a front-end developer in Austin, TX."],
    typeSpeed: 25,
    showCursor: false
  });

  $('#titanic').on('mouseover', function(){
    $(this).css('background-color', 'rgba(0,140,84,1)');
  });
  $('#titanic').on('mouseout', function(){
    $(this).css('background-color', 'rgba(0,127,84,1)');
  });

  $('#care4Kids').on('mouseover', function(){
    $(this).css('background-color', 'rgba(140,49,49,1)');
  });
  $('#care4Kids').on('mouseout', function(){
    $(this).css('background-color', 'rgba(100,35,35,1)');
  });






  $('.cover').on('mouseover', function(){
    $(this).css('cursor', 'pointer');
  });



  // $('.cover').on('mouseover', function(){
  //   $('.cover').fadeIn( "fast", "linear" );
  //   $(this).css('cursor', 'pointer');
  // });

  $('.ttt').on('click', function(){
    window.location = "https://brittshroyer.github.io/ttt";
  });



});

var i=0;

  $(window).scroll(function() {
    if (($(window).scrollTop()  > $(window).height() / 3) && i<1) {
      $('.skill').removeClass('short');
      $('.skill1').css('animation', 'skill1 2s');
      $('.skill2').css('animation', 'skill2 2s');
      $('.skill3').css('animation', 'skill3 2s');
      $('.skill4').css('animation', 'skill4 2s');
      $('.skill5').css('animation', 'skill5 2s');
      $('.skill6').css('animation', 'skill6 2s');
      $('.skill7').css('animation', 'skill7 2s');
      $('.skill8').css('animation', 'skill8 2s');
      $('.blurb').css('color', 'rgba(211,211,211,.75)');

      i++;
    }
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            console.log("collapse feature working!");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    // page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - $('.footerTitle').height()
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });




  // });

});
