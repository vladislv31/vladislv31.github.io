var currentHeroSlideID = 1;
var heroSliderIntervalPeriod = 8000;
var heroSliderInterval = setInterval(heroSliderIntervalFunc, heroSliderIntervalPeriod);

$(document).ready(function() {
    
    $('.hero__dot').click(function() {
        currentHeroSlideID = $(this).attr('data-id');

        setActiveHeroSlide(currentHeroSlideID);
    });

    $('.reviews__slider-nav a').click(function(e) {
        e.preventDefault();
    });

    $('.reviews__items').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: $('.reviews__slider-nav a.prev-slide'),
        nextArrow: $('.reviews__slider-nav a.next-slide')
    });

    $('.mobile-button').click(showMobileMenu);
    $('.mobile-close, .mobile-menu__overlay').click(hideMobileMenu);

});

function setActiveHeroSlide(id) {

    $('.hero-bg').removeClass('active');
    $('.hero-bg-' + id).addClass('active');

    $('.hero-text').removeClass('active');
    $('.hero-text-' + id).addClass('active');

    $('.hero__dot').removeClass('active');
    $('.hero__dot.dot-' + id).addClass('active');

    clearInterval(heroSliderInterval);

    heroSliderInterval = setInterval(heroSliderIntervalFunc, heroSliderIntervalPeriod);

}

function heroSliderIntervalFunc() {
    if (currentHeroSlideID == 3) {
        currentHeroSlideID = 1;
    } else {
        currentHeroSlideID++;
    }
    
    setActiveHeroSlide(currentHeroSlideID);
}

function showMobileMenu() {
    $('.mobile-menu').css('display', 'block');
    $('.mobile-menu__overlay').fadeIn();
    $('.mobile-menu__container').animate({
        left: 0
    }, 500);
}

function hideMobileMenu() {
    $('.mobile-menu__container').animate({
        left: '-320px'
    }, 500);
    $('.mobile-menu__overlay').fadeOut();
    setTimeout(function() {
        $('.mobile-menu').css('display', 'none');
    }, 500);
}