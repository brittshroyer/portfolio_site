$(document).ready(function(){

  setTimeout(function(){
    $('#title').addClass('flipInX animated');
  }, 10);

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

  $('.btn').on('mouseover', function(){
    $(this).css('background-color', 'rgba(0,0,0,1)');
  });

  $('.btn').on('mouseout', function(){
    $(this).css('background-color', 'rgba(0,0,0,.7)');
  });

  $('.resume-section').on('click', function(){
    console.log("resume buttton working");
  });

var i=0;

  $(window).scroll(function() {
    if (($(window).scrollTop()  > $(window).height() / 2) && i<1) {
      $(".typebox").typed({
        strings: ["Hi, I'm Britt. Thanks for visiting my site!","Those that know me describe me as easy-going, venturesome, and independent.", "There are only a few things that I enjoy more than Chipotle or my bulldog...", "The important ones include: traveling, music, snowboarding, camping, and coding.", "I have much appreciation for originality and creativity.", "Which is why I've found programming to be so rewarding and empowering.", "Please feel free to contact me at the number or email below.", ": )"],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: "|",
        backDelay: 1800
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
                scrollTop: $($anchor.attr('href')).offset().top - $('.skill').height()
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
