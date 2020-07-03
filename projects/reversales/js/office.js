$(document).ready(function() {
	if ($('#sex-select ul li').hasClass('selected')) {
		$('#sex-select .select-input').text($('#sex-select ul li.selected').text());
	}
	$('#sex-select').click(function() {
		$('#sex-select .select-options').toggleClass('visible');
	});
	$('#sex-select .select-options li').click(function() {
		$('#sex-select .selected').removeClass('selected');
		$(this).addClass('selected');
		$('#sex-select .select-input').text($(this).text());
	});

	if ($('#pick-way ul li').hasClass('selected')) {
		$('#pick-way .select-input').text($('#pick-way ul li.selected').text());
	}
	$('#pick-way').click(function() {
		$('#pick-way .select-options').toggleClass('visible');
	});
	$('#pick-way .select-options li').click(function() {
		$('#pick-way .selected').removeClass('selected');
		$(this).addClass('selected');
		$('#pick-way .select-input').text($(this).text());
	});

	if ($('#date-select-day ul li').hasClass('selected')) {
		$('#date-select-day .select-input').text($('#date-select-day ul li.selected').text());
	}
	$('#date-select-day').click(function() {
		$('#date-select-day .select-options').toggleClass('visible');
	});
	$('#date-select-day .select-options li').click(function() {
		$('#date-select-day .selected').removeClass('selected');
		$(this).addClass('selected');
		$('#date-select-day .select-input').text($(this).text());
	});

	if ($('#date-select-month ul li').hasClass('selected')) {
		$('#date-select-month .select-input').text($('#date-select-month ul li.selected').text());
	}
	$('#date-select-month').click(function() {
		$('#date-select-month .select-options').toggleClass('visible');
	});
	$('#date-select-month .select-options li').click(function() {
		$('#date-select-month .selected').removeClass('selected');
		$(this).addClass('selected');
		$('#date-select-month .select-input').text($(this).text());
	});

	if ($('#date-select-year ul li').hasClass('selected')) {
		$('#date-select-year .select-input').text($('#date-select-year ul li.selected').text());
	}
	$('#date-select-year').click(function() {
		$('#date-select-year .select-options').toggleClass('visible');
	});
	$('#date-select-year .select-options li').click(function() {
		$('#date-select-year .selected').removeClass('selected');
		$(this).addClass('selected');
		$('#date-select-year .select-input').text($(this).text());
	});

	$('.payment-form .form-select .select-options li').click(function() {
		$('.payment-form form').addClass('hide-elem');
		if ($('.payment-form .form-select .select-options li.selected').text() == 'WebMoney') {
			$('.payment-form form#payment-webmoney').removeClass('hide-elem');
		} else if ($('.payment-form .form-select .select-options li.selected').text() == 'Qiwi') {
			$('.payment-form form#payment-qiwi').removeClass('hide-elem');
		} else if ($('.payment-form .form-select .select-options li.selected').text() == 'PayPal') {
			$('.payment-form form#payment-paypal').removeClass('hide-elem');
		} else if ($('.payment-form .form-select .select-options li.selected').text() == 'Visa/Mastercard') {
			$('.payment-form form#payment-visa').removeClass('hide-elem');
		}
	});

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
		phone_number = phone_number.replace(/\s+/g, "");
		return this.optional(element) || phone_number.length > 9 && 
		phone_number.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
	}, "<br />Please specify a valid phone number");

	$('#form-user-contact').validate({
		errorPlacement: function(error, element) {
			$('#form-user-contact label.error').remove();
			error.insertBefore('#form-user-contact button.btn');
		},
		rules: {
			phone: {
				phoneno: true
			},
			mail: {
				email: true
			}
		},
		messages: {
			phone: {
				phoneno: 'Телефон введен не коректно!'
			},
			mail: {
				email: 'Почта введена не коректно!'
			}
		}
	});

});