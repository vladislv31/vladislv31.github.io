$(document).ready(() => {
    initSlider()
    searchButton()
})

function initSlider() {
    const delay = 300

    const slider = $('.hero-slider')
    const container = $('.hero-slider-container', slider)

    const prev = $('.hero-slider-nav__prev-arrow', slider)
    const next = $('.hero-slider-nav__next-arrow', slider)

    const count = $('.hero-slider__slide', slider).length
    const line = $('.hero-slider-nav__slider-line', slider)

    const slideNum = $('.hero-slider-nav__slide-num span', slider)

    const slideHeights = []

    for (const slide of $('.hero-slider__slide', slider)) {
        $(slide).height(Math.ceil($(slide).height()))
    }

    for (const slide of $('.hero-slider__slide', slider)) {
        slideHeights.push($(slide).height())
    }

    const firstSlide = $($('.hero-slider__slide', slider)[0])

    let current = 1

    line.css('height', 100.0 / count + '%')
    container.css('max-height', firstSlide.height())

    next.click(() => {
        if (current == count) {
            current = 1
        } else {
            current++
        }

        updateSlider()
    })

    prev.click(() => {
        if (current == 1) {
            current = count
        } else {
            current--
        }

        updateSlider()
    })

    function updateSlider() {
        const slideHeight = $($('.hero-slider__slide', slider)[current - 1]).height()

        container.animate({
            'maxHeight': slideHeight
        }, {
            'duration': delay,
            'queue': false
        })

        let scrollTop = 0
        for (let i = 0; i < current - 1; i++) {
            scrollTop += slideHeights[i];
        }

        console.log(slideHeights);
        console.log(scrollTop);

        container.animate({
            scrollTop: scrollTop,
        }, {
            'duration': delay,
            'queue': false
        })

        line.animate({
            top: 100.0 / count * (current - 1) + '%',
        }, {
            'duration': delay,
            'queue': false
        })

        slideNum.text(current)
    }

}

function searchButton() {
    const searchButton = $('.header__search')
    const searchExitButton = $('.header__search-menu .header__search-menu__form-exit')
    const header = $('.header')

    searchButton.click(() => {
        header.addClass('header--search-menu')
    })

    searchExitButton.click(() => {
        header.removeClass('header--search-menu')
    })
}