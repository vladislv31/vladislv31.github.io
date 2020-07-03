$(document).ready(function() {

	$('.dropdown-link').hover(function() {
		$(this).children('.dropdown-block').css('display', 'block');
	}, function() {
		$(this).children('.dropdown-block').css('display', 'none');
	});

	$('.price-title').click(function() {
		$('.price-title.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.price-title-1').click(function() {
		$('.price-text-1').css('display', 'block');
		$('.price-text-2').css('display', 'none');
	});

	$('.price-title-2').click(function() {
		$('.price-text-2').css('display', 'block');
		$('.price-text-1').css('display', 'none');
	});

	ymaps.ready(init);
	var myMap;

	function init(){     
		myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 7
		});
	}

	$('.menu-button-link').click(function() {
		$('.menu-mobile').animate({
			left: 0
		}, 500);
	});

	$('.menu-mobile-exit').click(function() {
		$('.menu-mobile').animate({
			left: '-300px'
		}, 500);
	});

});