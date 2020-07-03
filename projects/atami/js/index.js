$(document).ready(function(){
	$('.what-is__slider-container').slick({
		prevArrow: $ ('.what-is__slider-nav .slider-nav__prev'),
		nextArrow: $ ('.what-is__slider-nav .slider-nav__next')
	});

	$('.effects__slider-container').slick({
		prevArrow: $ ('.effects__slider-nav .slider-nav__prev'),
		nextArrow: $ ('.effects__slider-nav .slider-nav__next'),
		dots: true
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() != 0) {
			$('.header-nav').addClass('header-nav--fixed');
			$('.logo__link img').attr('src', 'img/logo-color.png');
			$('.nav-menu-mobile__button img').attr('src', 'img/menu-button-black.png');
		} else {
			$('.header-nav').removeClass('header-nav--fixed');
			$('.logo__link img').attr('src', 'img/logo.png');
			$('.nav-menu-mobile__button img').attr('src', 'img/menu-button.png');
		}
	});

	$('.header-nav a').click(function(e) {
		e.preventDefault();
		var elem = $(this).attr('href');
		var top = $(elem).offset().top - 90 + 'px';
		$('html, body').animate({
			scrollTop: top
		}, 1000);
	});

	$('.mobile-menu__link').click(function(e) {
		$('.mobile-menu').fadeOut();
		e.preventDefault();
		var elem = $(this).attr('href');
		var top = $(elem).offset().top - $('.header-nav').height() + 'px';
		$('html, body').animate({
			scrollTop: top
		}, 1000);
	});

	$('#celebrities .celebrities__img').height($('#celebrities .celebrities__img').width());
	$('#comparison .comparison__img').css('height', $('#comparison .comparison__img').width() * 0.6748 + 'px');
	$('#discount .discount__content').css('height', $('#discount .discount__content').width() * 0.7282 + 'px');

	$(window).resize(function() {
		$('#celebrities .celebrities__img').height($('#celebrities .celebrities__img').width());
		$('#comparison .comparison__img').css('height', $('#comparison .comparison__img').width() * 0.6748 + 'px');
		$('#discount .discount__content').css('height', $('#discount .discount__content').width() * 0.7282 + 'px');
	});

	$('.nav-menu-mobile__button').click(function() {
		$('.mobile-menu').fadeIn();
	});

	$('.mobile-menu__close').click(function() {
		$('.mobile-menu').fadeOut();
	});

	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	$('.take-discount__form').submit(function(e) {
		e.preventDefault();

		$('.take-discount__form input').removeClass('input-error');

		var name = $(this).find('input[name=name]');
		var surname = $(this).find('input[name=surname]');
		var phone = $(this).find('input[name=phone]');

		var error = false;

		if (name.val() == '') {
			name.addClass('input-error');
			error = true;
		}

		if (surname.val() == '') {
			surname.addClass('input-error');
			error = true;
		}

		if (phone.val().length < 8) {
			phone.addClass('input-error');
			error = true;
		}

		if (error) {
			return false;
		}

		$(this)[0].reset();
		swal("Успех", "Заявка успешно отправлена!", "success");
	});

	$('.take-dispatch__form').submit(function(e) {
		e.preventDefault();

		$('.take-dispatch__form input').removeClass('input-error');
		$('.take-dispatch__form button').removeClass('input-error');

		var email = $(this).find('input[name=email]');
		var btn = $(this).find('button');

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.val();
		if(reg.test(address) == false) {
			email.addClass('input-error');
			btn.addClass('input-error');
			return false;
		}

		$(this)[0].reset();
		swal("Успех", "Заявка успешно отправлена!", "success");
	});
});