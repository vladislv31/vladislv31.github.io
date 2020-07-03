$(document).ready(function() {

	$('.mobile-menu_button').click(function() {
		$('.mobile-menu').toggleClass('active');
	});



	$('.select-menu').click(function() {
		$(this).toggleClass('active');
	});

	$('.menu-list li').click(function() {
		var val = $(this).html();
		var menu = $(this).closest('.select-menu');
		var selected = menu.children('.selected');

		selected.html(val);
	});


	$('.checkbox').click(function() {
		$(this).toggleClass('active');
	});

	$('.add-button').click(function() {
		var parent = $(this).closest('.add-box');
		var form = parent.children('.add-form');

		$(this).toggleClass('active');
		$(form).toggleClass('active');
	});

	$('.add-form button').click(function() {
		var parent = $(this).closest('.add-box');
		var form = parent.children('.add-form');
		var button = parent.children('.add-button');

		$(button).removeClass('active');
		$(form).removeClass('active');
		form.children('input').val('');
	});



	bodyPadding();
	sideBarHeight();

	$(window).resize(function() {
		bodyPadding();
		sideBarHeight();
	});



	$('.input-file input').on('change', function(e) {
		var parent = $(this).closest('.input-file');
		var label = parent.children('label');

		var files = $(this)[0].files;

		if (files.length === 1) {
			var filename = e.target.value.split('\\').pop();

			label.html(filename);
		} else {
			label.html(files.length + ' файлов готово к загрузке');
		}
	});

	$('.sidebar li.li-dropdown').click(function() {
		$(this).toggleClass('dropdown-active');
	});

});

function bodyPadding() {
	$('body').css('padding-bottom', $('.footer').height() + 'px');
}

function sideBarHeight() {
	$('.sidebar').css('height', $(document).height() - $('.top-line').height() - $('.menu').height() - $('.progress-info').height() - $('.footer').height() + 'px');
}