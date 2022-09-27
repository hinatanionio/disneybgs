

$(function($) {
  $('.more-button').on('click', function(){
    if ($('.open-box').is(':hidden')) {
      $('.open-box').slideDown();
      $(this).text('CLOSE');
      $(this).css('background-color', '#808080');
    }else{
      $('.open-box').slideUp(); 
      $(this).text('MENU');
      $(this).css('background-color', '#2E4056');
    }
  });

  $(".modal-button").modaal();

});