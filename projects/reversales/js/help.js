$(document).ready(function() {

	$.validator.addMethod(
		"regex",
		function(value, element, regexp) {
		    var re = new RegExp(regexp);
		    return this.optional(element) || re.test(value);
		},
		"Please check your input."
	);

	$('#help').validate({
		rules: {
			subject: {
				required: true
			},
			name: {
				required: true
			},
			mail: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 100
			}
		},
		messages: {
			subject: {
				required: 'Поле с темой сообщения обязательно!'
			},
			name: {
				required: 'Поле с именем обязательно!'
			},
			mail: {
				required: 'Поле с почтой обязательно!',
				email: 'Почта введена не верно!'
			},
			message: {
				required: 'Поле с сообщением обязательно!',
				minlength: 'Поле с сообщением не менее 100 символов!'
			}
		}
	});
	

});