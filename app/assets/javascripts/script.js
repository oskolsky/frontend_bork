$(function() {

    // Mask input
    $('.js-data-phone').mask('+7 (999) 999-9999');

    // Boutiques video init
    $('.js-boutiques-video').vide({
        mp4: '/assets/video/boutiques',
        webm: '/assets/video/boutiques'
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        resizing: true
    });

    // Carausel init
    $('.js-owl-carousel-specifications').owlCarousel({
        items: 1,
        center: false,
        loop: false,
        dots: true,
        margin: 40,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
                touchDrag: true,
                pullDrag: true
            },
            639: {
                items: 4,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    });

    $('.js-owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        dots: false,
        margin: 150,
        nav: true,
        navText: ['', '']
    });

})
