$(document).ready(function() {

	$('.popular-shops_container').owlCarousel({
		items: 1,
		loop: true,
		responsive: {
			992: {
				items: 4
			},
			650: {
				items: 3
			}
			,
			420: {
				items: 2
			}
		}
	});

	$('.popular-shops_dots .dot-next').click(function() {
	    $('.popular-shops_container').trigger('next.owl.carousel');
	});
	$('.popular-shops_dots .dot-prev').click(function() {
	    $('.popular-shops_container').trigger('prev.owl.carousel');
	});

});