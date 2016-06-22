$(document).ready(function() {

    $(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('#backToTop').fadeIn(300);
		} else {
			$('#backToTop').fadeOut(300);
		}
	});

	$('#backToTop').on('click', function() {
		$('html, body').animate({scrollTop : 0}, 1000);
	});
});
