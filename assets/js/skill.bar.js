(function ($) {
    "use strict";

    /*==========================
        About Area
    ============================*/


    <script>
    // Trigger animation when the skill bars are in view
    window.addEventListener('scroll', function () {
        var skillBars = document.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(function (bar) {
            var barPosition = bar.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.3;

            if (barPosition < screenPosition) {
                bar.style.width = bar.getAttribute('data-percentage');
            }
        });
    });
</script>

    var offsetTop = $('#skills').offset().top;
    $(window).on('scroll', function () {
        var height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            jQuery('.skillbar').each(function () {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 1000);
            });
        }
    });

}(jQuery));
