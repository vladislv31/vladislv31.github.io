$(document).ready(function() {

    // slider

    $('.operations__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<button class="operations__slider-prev_button"><img src="./img/slider-arrow.png"></button>',
        nextArrow: '<button class="operations__slider-next_button"><img src="./img/slider-arrow.png"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // questions

    $('.questions__item-title').click(function() {
        const parent = $(this).parent('.questions__item');
        const text = parent.find('.questions__item-text');

        text.slideToggle();
    });

    // timer

    function timer_init() {
        const endDateData = $('.offers__table-timer_clock').attr('data-date').split('-');

        const day = Number(endDateData[0]);
        const month = Number(endDateData[1]);
        const year = Number(endDateData[2]);

        const endDate = new Date();

        endDate.setDate(day);
        endDate.setMonth(month - 1);
        endDate.setFullYear(year);
        endDate.setHours(0);
        endDate.setMinutes(0);
        endDate.setSeconds(0);

        let diffDate = endDate - (new Date());

        setInterval(function() {
            diffDate -= 1000;

            let tmp = diffDate / 1000;

            const days = Math.floor(tmp / 3600 / 24);
            tmp = Math.floor(tmp % (3600 * 24));

            const hours = Math.floor(tmp / 3600);
            tmp = Math.floor(tmp % (3600));

            const minutes = Math.floor(tmp / 60);
            tmp = Math.floor(tmp % (60));

            const seconds = Math.floor(tmp);

            $('.offers__table-timer_days').text(formatForDate(days));
            $('.offers__table-timer_hours').text(formatForDate(hours));
            $('.offers__table-timer_minutes').text(formatForDate(minutes));
            $('.offers__table-timer_seconds').text(formatForDate(seconds));
            
        }, 1000);
    }

    timer_init();

    function formatForDate(num) {
        if (num > 9) return num;
        return `0${num}`
    }

    // menu

    $('.menu__mobile-button').click(function() {
        $('.mobile-menu').fadeIn();
        $('.mobile-menu').addClass('mobile-menu--opened');
    });

    $('.mobile-menu__close, .mobile-menu__item').click(function() {
        $('.mobile-menu').fadeOut();
        $('.mobile-menu').removeClass('mobile-menu--opened');
    });

});

$(window).on('load', function() {
    setTimeout(function() {
        $('.preloader').fadeOut();
    }, 100);
});