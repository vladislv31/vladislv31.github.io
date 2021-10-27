$(document).ready(function() {

    inputMasks();
    questionsToggles();
    mobileMenu();

});

function inputMasks() {
    $('.phone-mask-js').inputmask('9 (999) 999-99-99');

    $('.email-mask-js').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
            casing: "lower"
            }
        }
    });
}

function questionsToggles() {
    $('.questions__item-title').click(function() {
        const th = $(this);
        const parent = th.parent('.questions__item');
        const text = parent.find('.questions__item-text');

        parent.toggleClass('questions__item--opened');
        text.slideToggle();
    });
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
    
    $('.mobile-menu__close').click(function() {
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