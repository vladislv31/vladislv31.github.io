$(document).ready(function() {
    
    tabs();
    menu();
    
});

// tabs
function tabs() {
    // init
    const url_id = window.location.hash.substr(1);
    switchTab(url_id);
    showTab(url_id);

    // event listener
    $('.tabs__item').click(function(e) {
        e.preventDefault();

        const th = $(this);
        const tabs = th.closest('.tabs');

        $('.tabs__item', tabs).removeClass('tabs__item--active');
        th.addClass('tabs__item--active');

        const tab_id = th.attr('href').slice(1);
        showTab(tab_id);
    });
}

function switchTab(tab_id) {
    const tab = $('.tabs__item[href="#' + tab_id + '"]');
    const tabs = tab.closest('.tabs');

    $('.tabs__item', tabs).removeClass('tabs__item--active');
    tab.addClass('tabs__item--active');
}

function showTab(tab_id) {
    const tab_content = $('.tabs-content__item[id="' + tab_id + '"]');
    const tabs_content = tab_content.closest('.tabs-content');

    $('.tabs-content__item', tabs_content).removeClass('tabs-content__item--active');
    tab_content.addClass('tabs-content__item--active');
}

function menu() {
    $('.menu-button, .menu__logo-link img, .menu-overlay').click(function() {
        if ($('.menu').hasClass('menu--opened')) {
            $('.menu').animate({
                'left': '-350px'
            }, 300);
            $('.menu-overlay').fadeOut();
        } else {
            $('.menu').animate({
                'left': '0px'
            }, 300);
            $('.menu-overlay').fadeIn();
        }

        $('.menu').toggleClass('menu--opened');
    });

    $('.main__sidebar').mouseenter(function() {
        $('.menu').animate({
            'left': '0px'
        }, 300);

        $('.main__sidebar').animate({
            'left': '-95px'
        }, 300);

        $('.main__sidebar').addClass('main__sidebar--menu');
    });

    $('.main__content').mouseenter(function() {
        if ($('.main__sidebar').hasClass('main__sidebar--menu')) {
            $('.menu').animate({
                'left': '-350px'
            }, 300);
    
            $('.main__sidebar').animate({
                'left': '0px'
            }, 300);

            $('.main__sidebar').removeClass('main__sidebar--menu');
        }
    });

    $('.menu__logo-text').click(function() {
        $('.menu').toggleClass('menu--dropdown');
    });

    // $('.main__sidebar-button').click(function() {
    //     if ($('.main__sidebar').hasClass('main__sidebar--menu')) {
    //         $('.menu').animate({
    //             'left': '-350px'
    //         }, 300);
    //     } else {
    //         $('.menu').animate({
    //             'left': '0px'
    //         }, 300);
    //     }

    //     $('.main__sidebar').toggleClass('main__sidebar--menu');
    // });
}