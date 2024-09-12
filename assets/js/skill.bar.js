(function ($) {
    "use strict";

    /*==========================
        Skills Area Animation
    ============================*/
    $(window).on('scroll', function () {
        var offsetTop = $('#skills').offset().top; // Ensure the offset is inside the scroll event handler
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop + windowHeight > offsetTop) {
            $('.skillbar').each(function () {
                var skillBar = $(this).find('.skillbar-bar');
                if (!skillBar.hasClass('animated')) { // To prevent re-triggering animation
                    skillBar.animate({
                        width: $(this).attr('data-percent')
                    }, 1000).addClass('animated'); // Adding a class to prevent duplicate animations
                }
            });
        }
    });

}(jQuery));
