$(document).ready(function(){

  // setTimeout(function(){
  //   $('#title').addClass('flipInX animated');
  // }, 10);

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

  $('.resume-section').on('click', function(){
    console.log("resume buttton working");
  });

var i=0;

  $(window).scroll(function() {
    if (($(window).scrollTop()  > $(window).height() / 2) && i<1) {
      $('.skill').removeClass('short');
      $('.skill1').css('animation', 'skill1 2s');
      $('.skill2').css('animation', 'skill2 2s');
      $('.skill3').css('animation', 'skill3 2s');
      $('.skill4').css('animation', 'skill4 2s');
      $('.skill5').css('animation', 'skill5 2s');
      $('.skill6').css('animation', 'skill6 2s');
      $('.skill7').css('animation', 'skill7 2s');
      $('.skill8').css('animation', 'skill8 2s');
      $(".typebox").typed({
        strings: ["Hello, I'm Britt, a front-end developer currently in Austin, TX.","Those that know me describe me as easy-going, venturesome, quick-witted, and independent.", "There are only a few things that I enjoy more than Chipotle...", "That list includes: traveling, music, snowboarding, coding, and my bulldog, Hugo.", "I really value originality, and I've always pushed myself to take risks.", "Which is why I've found web development to be so rewarding and empowering.", ": )"],
        typeSpeed: 25,
        showCursor: true,
        cursorChar: "|",
        backDelay: 1500
      })
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
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - $('.footerTitle').height()
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $('.project').on('mouseover', function(){
      $(this).addClass('rubberBand animated');
    });
    $('.project').on('mouseout', function(){
      $(this).removeClass('rubberBand animated');
    });

  });

});
