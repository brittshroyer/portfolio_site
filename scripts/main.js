$(document).ready(function(){



  setTimeout(function(){
    $('#title').addClass('flipInX animated');
  }, 100);

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

// $('.blurbBox').bind('inview', typeWriter);
  // $(function (){
  //     $(".blurbBox").typed({
  //       strings: ["Hi, I'm Britt. Thanks for visiting my site!","Those that know me describe me as easy-going, venturesome, and independent.", "There are a few things that I enjoy more than Chipotle...", "The important ones include: traveling, music, snowboarding, camping, and coding.", "I have a great appreciation for originality and an affinity for problem solving...", "Which is why I find programming immensely rewarding and empowering.", "" ],
  //       typeSpeed: 50,
  //       showCursor: true,
  //       cursorChar: "|",
  //       backDelay: 1600
  //     });
  // });

  $('.btn').on('mouseover', function(){
    $(this).css('background-color', 'rgba(0,0,0,1)');
  });

  $('.btn').on('mouseout', function(){
    $(this).css('background-color', 'rgba(0,0,0,.7)');
  });

//   var i=0;
//   while(i<1){
//     $(window).scroll(function() {
//       if ($(window).scrollTop()  > $(window).height() / 2) {
//         $(".blurbBox").typed({
//           strings: ["Hi, I'm Britt. Thanks for visiting my site!","Those that know me describe me as easy-going, venturesome, and independent.", "There are a few things that I enjoy more than Chipotle...", "The important ones include: traveling, music, snowboarding, camping, and coding.", "I have a great appreciation for originality and an affinity for problem solving...", "Which is why I find programming immensely rewarding and empowering.", "" ],
//           typeSpeed: 50,
//           showCursor: true,
//           cursorChar: "|",
//           backDelay: 1600
//         })
//       }
//       i++;
//   });
// }
var i=0;

  $(window).scroll(function() {
    if (($(window).scrollTop()  > $(window).height() / 2) && i<1) {
      $(".blurbBox").typed({
        strings: ["Hi, I'm Britt. Thanks for visiting my site!","Those that know me describe me as easy-going, venturesome, and independent.", "There are just a few things that I enjoy more than Chipotle...", "The important ones include: traveling, music, snowboarding, camping, and coding.", "I have much appreciation for originality and an affinity for problem solving.", "Which is why I've found programming to be so rewarding and empowering.", "If you'd like to hear more, please feel free to contact me at the number or email below.", ": )"],
        typeSpeed: 48,
        showCursor: true,
        cursorChar: "|",
        backDelay: 1800
      })
      i++;
    }
});































});
