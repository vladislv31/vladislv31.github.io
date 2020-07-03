$(document).ready(function() {

	$('#contact').submit(function(event) {
		$('#contact *').removeClass('not-valid');

		var name = $('#contact input[name="name"]');
		var mail = $('#contact input[name="mail"]');

		if (name.val() == '') {
			name.addClass('not-valid');
			event.preventDefault();
		}

		if (mail.val() == '' || mail.val().indexOf('@') + 1 == 0 || mail.val().indexOf('.') + 1 == 0) {
			mail.addClass('not-valid');
			event.preventDefault();
		}

	});

});