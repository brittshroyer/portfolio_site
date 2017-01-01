$(document).ready(function(){



  setTimeout(function(){
    $('#title').addClass('flipInX animated');
  }, 100);

  $('#titanic').on('mouseover', function(){
    $(this).css('background-color', 'rgba(0,127,84,1)');
  });
  $('#titanic').on('mouseout', function(){
    $(this).css('background-color', 'rgba(0,127,84,.6)');
  });

  $('#care4Kids').on('mouseover', function(){
    $(this).css('background-color', 'rgba(100,35,35,1)');
  });
  $('#care4Kids').on('mouseout', function(){
    $(this).css('background-color', 'rgba(100,35,35,.6)');
  });

  $(function(){
      $(".blurbBox").typed({
        strings: ["Hi, I'm Britt. Thanks for visiting my site! Those that know me describe me as easy-going, venturesome, and spontaneous.","There are a few things that I enjoy more than Chipotle...The important ones include: traveling, music, snowboarding, camping, and coding.", "As someone with an appreciation for originality and an affinity for problem solving, I find programming immensely rewarding and empowering." ],
        typeSpeed: 45,
        showCursor: false,
        cursorChar: "|",
        backDelay: 2000
      });
  });


























});
