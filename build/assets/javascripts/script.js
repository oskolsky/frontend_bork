$(function() {

    // Mask input
    $('.js-data-phone').mask('+7 (999) 999-9999');

    // Carausel init
    $('.js-owl-carousel-specifications').owlCarousel({
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

    $('.js-owl-carousel-coffee').owlCarousel({
        items: 1,
        center: false,
        loop: false,
        dots: true,
        margin: 40,
    });

    $('.js-owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        dots: false,
        nav: true,
        navText: ['', ''],
        autoplay: true,
        autoplayTimeout: 3000,
        mergeFit: true,
        responsive: {
            0: {
                margin: 50
            },
            640: {
                margin: 130
            },
            940: {
                margin: 150
            },
            1281: {
                margin: 400
            }
        }
    });

    // Scroll animation
    $('.js-section').each(function() {
        var _this = this
        var waypoint = new Waypoint({
            element: $(_this),
            offset: '50%',
            handler: function() {
                $(_this).addClass('animation-start');
            }
        })
    })

    // You tube video play
    $('.js-video-play').on('click', function() {
        $('.js-video-dialog').show();
        $('#js-video').attr({ src: 'https://www.youtube.com/embed/WrJ6px1dBzQ?autoplay=1'});
        return false;
    });

    $('.js-video-dialog-close').on('click', function() {
        $('.js-video-dialog').hide();
        $('#js-video').attr({ src: '' });
        return false;
    });

    $(document).keyup(function(event) {
        if (event.keyCode === 27) {
            $('.js-video-dialog').hide();
        }
    });
})
