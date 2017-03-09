$(function() {

    var capsules = [
        {
            el: $('.js-capsule-1'),
            position: $('.js-capsule-1').position().top
        },
        {
            el: $('.js-capsule-2'),
            position: $('.js-capsule-2').position().top
        },
        {
            el: $('.js-capsule-3'),
            position: $('.js-capsule-3').position().top
        },
        {
            el: $('.js-capsule-4'),
            position: $('.js-capsule-4').position().top
        }
    ]

    var i = 1;

    $(window).bind('scroll',function(e) {
        var containerPosition =  $('.js-section-capsules').offset().top;
        var windowPosition = $(window).scrollTop();
        var scrolled = windowPosition - containerPosition;
        i++;

        capsules.map(function(item, index) {
            var $el = item.el;
            var k = (index + 1) / 100 * 40;

            $el.css({
                top: item.position - (scrolled * k ),
                transform: 'rotate(' + i + 'deg)'
            });
        });
    });

});
