$(document).ready(function() {

	$('.reg-button').click(function() {
		$('#reg').removeClass('hide-elem');
		$('#auth').addClass('hide-elem');
	});

	$('.login-button').click(function() {
		$('#reg').addClass('hide-elem');
		$('#auth').removeClass('hide-elem');
	});

	$('.password-button').click(function() {
		$('.recollect-password').css('display', 'flex');
		$('.recollect-password').fadeIn(250);
		$('body').css('overflow-y', 'hidden');
	});

	$('.recollect-password_overlay').click(function() {
		$('.recollect-password').fadeOut(250);
		$('.recollect-password').css('display', 'none');
		$('body').css('overflow-y', 'scroll');
	});

	$('.recollect-password_exit').click(function() {
		$('.recollect-password').fadeOut(250);
		$('.recollect-password').css('display', 'none');
		$('body').css('overflow-y', 'scroll');
	});

	$.validator.addMethod(
		"regex",
		function(value, element, regexp) {
		    var re = new RegExp(regexp);
		    return this.optional(element) || re.test(value);
		},
		"Please check your input."
	);

	$('#auth-form').validate({
		rules: {
			login: {
				required: true
			},
			pass: {
				required: true
			}
		},
		messages: {
			login: {
				required: 'Логин введен не верно!',
			},
			pass: {
				required: 'Пароль введен не верно!'
			}
		}
	});

	$('#reg-form').validate({
		rules: {
			login: {
				required: true,
				minlength: 3,
				regex: '^[a-zA-Z0-9]+$'
			},
			pass: {
				required: true,
				minlength: 6,
				regex: '^[a-zA-Z0-9]+$'
			},
			repass: {
				required: true,
				equalTo: '#pass'
			}
		},
		messages: {
			login: {
				required: 'Поле логина не заполнено!',
				minlength: 'Логин минимум 3 символа!',
				regex: 'В логин только латинские буквы и цифры!'
			},
			pass: {
				required: 'Поле пароля не заполнено!',
				minlength: 'Пароль минимум 6 символов!',
				regex: 'В пароле только латинские буквы и цифры!'
			},
			repass: {
				required: 'Повторный пароль введен не верно!',
				equalTo: 'Повторный пароль введен не верно!'
			}
		}
	});

	$('#password-recoll').validate({
		errorPlacement: function(error, element) {
			$('.recollect-password_message label.error').remove();
			error.insertBefore('.recollect-password_message p');
		},
		rules: {
			login: {
				required: true
			}
		},
		messages: {
			login: {
				required: 'Поле логина обязательно для заполнения!'
			}
		}
	});

});