$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top').fadeIn(400);
    } else {
      $('#back-to-top').fadeOut(400);
    }
  });

  $('#back-to-top').on('click', function() {
    $('html, body').animate({scrollTop : 0}, 900);
  });

  $('#go-to-about').on('click', function() {
    $('html, body').animate({scrollTop : $($.attr(this, 'href')).offset().top}, 900);
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    $.post($(e.target).attr('action'), $(e.target).serialize())
      .done(function() {
        var $popup = $('<div class="popup">').append('<p>Message envoyé.</p>')
        $('body').append($popup, $('<div class="black-overlay">'));

        function remove_popup() {
          $popup.fadeOut(400, function() {
            $(".popup, .black-overlay").remove();
          });
        }
        setTimeout(remove_popup, 2000);
      });
  });
});
