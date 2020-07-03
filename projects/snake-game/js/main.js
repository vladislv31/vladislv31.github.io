$(document).ready(function() {

    footerToBottom();

});

function footerToBottom() {
    var hh = $('.header').outerHeight();
    var fh = $('.footer').outerHeight();
    var dh = $(window).outerHeight();

    $('.main').css('min-height', (dh - (hh + fh)) + 'px')
}