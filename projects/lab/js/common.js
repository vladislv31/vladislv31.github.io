$(document).ready(function() {

	$('.menu-button').click(function() {

		if ($('.menu-button .hamburger').hasClass('is-active')) {
			$('.menu-button .hamburger').removeClass('is-active');
			$('.menu-button').css('position', 'absolute');
			$('.menu-content').fadeOut();
			$('body').css("overflow", "auto");
			$('body').css("overflow-x", "hidden");
		} else {
			$('.menu-button .hamburger').addClass('is-active');
			$('.menu-button').css('position', 'fixed');
			$('.menu-content').fadeIn();
			$('body').css("overflow", "hidden");
		}

	});

	$('.slider-blocks').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0:{
				nav: true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			},
			768: {
				nav: false
			}
		}
	});

	$('.top-line_create_progect_button a.button').click(function() {
		$('.popap-start_progect').fadeIn();
	});

	$('.popap-window .exit-popap').click(function() {
		$('.popap-start_progect').fadeOut();
	});

	$('#name_m').keyup(function() {
		var name_m_val = $('#name_m').val();
		if (name_m_val.length >= 5) {
			$('.menu-content').fadeOut();
			$('.popap-start_progect').fadeIn();
			$('#name').val(name_m_val);
			$('#name').focus();
			$('#name_m').val('');
			$('.menu-button .hamburger').removeClass('is-active');
		}
	});

});