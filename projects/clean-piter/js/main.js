$(document).ready(function() {
    
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div type="button" class="slick-prev slider-arrow slider-left"></div>',
        nextArrow: '<div type="button" class="slick-next slider-arrow slider-right"></div>',
    });



    $('.faq-list li').click(function() {
        $(this).toggleClass('active');
    });



    $('.mobile-menu-btn').click(function() {
        $('.mobile-menu').toggleClass('opened');
    });



    $('#portfolio').magnificPopup({
        type:'image',
        delegate: '.portfolio-popup-link',
        gallery: {
            enabled: true
        }
    });


    var marks = $('#reviews-page .review-item');
    for (let i = 0; i < marks.length; i++) {
        var element = marks[i];
        var mark = $(element).find('.item-mark').attr('data-mark');
        for (let i = 0; i < mark; i++) {
            $(element).find('.item-mark').append('<img src="img/star.svg" alt="">');
        }
    }

});