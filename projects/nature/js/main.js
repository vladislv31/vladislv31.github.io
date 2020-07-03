$(window).scroll(function() {
	$('.navbar').toggleClass('scrolled', $(window).scrollTop() > $('.navbar').height());
});