$(document).ready(function(){



  setTimeout(function(){
    $('#title').addClass('flipInX animated');
  }, 200);

  $('#titanic').on('mouseover', function(){
    $(this).css('background-color', 'rgba(0,127,84,1)');
  });
  $('#titanic').on('mouseout', function(){
    $(this).css('background-color', 'rgba(0,127,84,.6)');
  });

  $('#care4Kids').on('mouseover', function(){
    $(this).css('background-color', 'rgba(150,0,0,1)');
  });
  $('#care4Kids').on('mouseout', function(){
    $(this).css('background-color', 'rgba(150,0,0,.6)');
  });



// $('#title').mouseover(function(){
//   $(this).addClass('flipInX animated');
// });








  // $('.icon').on('mouseover', function(event){
  //   $(this).addClass()
  //
  //
  //   $(this).animate({
  //     height: '80px',
  //     width: '80px'
  //   }, 100);
  // });








});
