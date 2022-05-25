$(document).ready(function() {

    placesShowMore()
    worksSlider()
    questionsSlides()
    blogSlider()
    inputRangesInit()
    mobileMenu()

});

function placesShowMore() {
    $('.places__show-more__link').click(function() {
        const places = $(this).closest('.places')
        const show_more = $(this).closest('.places__show-more')
        
        $('.places__items--more', places).removeClass('places__items--hidden')
        show_more.remove()
    })
}

function worksSlider() {
    $('.works__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: false,
    })

    $('.works__slider-buttons__left').click(function() {
        const works = $(this).closest('.works')
        const slider = $('.works__slider', works)

        slider.slick('slickPrev')
    })

    $('.works__slider-buttons__right').click(function() {
        const works = $(this).closest('.works')
        const slider = $('.works__slider', works)

        slider.slick('slickNext')
    })
}

function questionsSlides() {
    $('.questions__item-title').click(function() {
        const question = $(this).closest('.questions__item')
        const text = $('.questions__item-text', question)

        question.toggleClass('questions__item--showed')
        text.slideToggle()
    })
}

function blogSlider() {
    $('.blog__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: false
    })

    $('.blog__slider-buttons__left').click(function() {
        const blog = $(this).closest('.blog')
        const slider = $('.blog__slider', blog)

        slider.slick('slickPrev')
    })

    $('.blog__slider-buttons__right').click(function() {
        const blog = $(this).closest('.blog')
        const slider = $('.blog__slider', blog)

        slider.slick('slickNext')
    })
}

function inputRangesInit() {
    const ranges = $('.calculator__form-range__input')

    for (const range of ranges) {
        inputRangeInit($(range))
    }

    $('.calculator__form-range__input').on('input', function() {
        const input = $(this)
        inputRangeInit(input)
    })
}

function inputRangeInit(input) {
    const div = input.closest('.calculator__form-range')
    const id = input.attr('id')
    const line = $('.calculator__form-range__line', div)

    const val = Number(input.val())
    const min = Number(input.attr('min'))
    const max = Number(input.attr('max'))

    const width = 100 * (val - min) / (max - min)

    line.css('width', width + '%')
    $(`.calculator__form-range_label[data-range-id="${id}"] .calculator__form-range_label__val`).text(val)
}

function mobileMenu() {
    $('.header__mobile-button').click(function() {
        $('.mobile-menu').css('display', 'block');
        $('body').css('position', 'fixed');

        $('.mobile-menu__overlay').fadeIn(100);
        $('.mobile-menu__container').animate({
            right: '0px'
        }, 150);
    });
    
    $('.mobile-menu__close, .mobile-menu__overlay').click(function() {
        $('.mobile-menu__container').animate({
            right: '-320px'
        }, 150);
        
        $('.mobile-menu__overlay').fadeOut(100);
        $('body').css('position', 'static');
        
        setTimeout(function() {
            $('.mobile-menu').css('display', 'none');
        }, 150);
    });
}