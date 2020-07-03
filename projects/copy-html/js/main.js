$('.result_slider').bxSlider({
	mode: 'fade',
	adaptiveHeight: true
});
$(function() {
	
	//alert($(window).width());
	$('.qa_itm_title').click(function() {
		if($(this).next().is(':hidden')) {
			$('.qa_itm_title').removeClass("tit_active");
			$('.qa_itm_title').children('.tit_plus').css("display", "block");
			$('.qa_itm_txt').slideUp("slow");
			$(this).next().slideDown("slow");
			$(this).children('.tit_plus').css("display", "none");
			$(this).addClass("tit_active");
		}
		else {
			$(this).next().slideUp("slow");
			$(this).removeClass("tit_active");
			$('.tit_plus').css("display", "block");
			$(this).children('.tit_plus').css("display", "block");
			$('.tit_plus').css("display", "block");
		}   
	}); 
});
$('.popup').magnificPopup({
	type: 'inline',
	removalDelay: 500,
	closeOnContentClick: false,
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		},
		elementParse: function(item) { 
			//CallbackKiller.initKiller(); 
		}
	},
	midClick: true
});
$("a.scrollto").mPageScroll2id();

// $('form').on("submit", function(e){
// 	e.preventDefault();
// //	yaCounter37194385.reachGoal('order');
// 		$.ajax({
// 			type	: "POST",
//     context: this,
// 			cache	: false,
// 			url		: "mail.php",
// 			data		: $(this).serializeArray(),
// 			success: function(data) {
// 					$(this).trigger('reset');
// 					$(".mfp-close").trigger('click');
	
// 					setTimeout(function() { $("#thank-you-link").trigger('click'); }, 500)


				
// 			}
// 		});
	
// 	console.info('+');
// 	return false;
// });

$(".phone").mask("+7(999)999-99-99");