$(function() {

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
    })

    $('.js-owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true
        // margin: '8,3%'
    })

})
