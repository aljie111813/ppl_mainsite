// CUSTOM JS
$(window).ready(function () {

    /* Show/hide navbar on scroll action*/
    var $navbarBrandImage = $('.navbar-brand img');
    $navbarBrandImage.hide();
    jQuery(window).bind('scroll', function () {
        if (jQuery(window).scrollTop() > 20) {

            jQuery('.navbar-default').css({
                '-webkit-transform': 'translate3d(0, 0, 0)',
                '-moz-transform': 'translate3d(0, 0, 0)',
                '-o-transform': 'translate3d(0, 0, 0)',
                'transform': 'translate3d(0, 0, 0)',
                'background-color': 'white',
                'border-bottom': 'rgba(0,0,0,0.1) solid 1px',
                'box-shadow': '0px 0px 5px 0px rgba(0,0,0,0.3)'
            });

            $navbarBrandImage.show();

        } else {

            jQuery('.navbar-default').css({
                'background-color': 'transparent',
                'border-bottom': 'transparent',
                'box-shadow': 'transparent 0px 0px 0px 0px',
            });
            $navbarBrandImage.hide();
        }


        var pContainerHeight = $('.cd-main-header').height();

        //$(window).scroll(function () {

            var wScroll = $(this).scrollTop();

            if (wScroll <= pContainerHeight) {

                $('#img, #h1, #btn').css({
                    'transform': '-webkit-translate(-' + wScroll / 10 + '%, 0px)',
                    'transform': '-moz-translate(-' + wScroll / 10 + '%, 0px)',
                    'transform': '-o-translate(-' + wScroll / 10 + '%, 0px)',
                    'transform': 'translate(-' + wScroll / 10 + '%, 0px)'
                });

                $('#head-img').css({
                    'transform': '-webkit-translate(' + wScroll / 10 + '%, 0px)',
                    'transform': '-moz-translate(' + wScroll / 10 + '%, 0px)',
                    'transform': '-o-translate(' + wScroll / 10 + '%, 0px)',
                    'transform': 'translate(' + wScroll / 10 + '%, 0px)'
                });


            }
        //});
    });


    /* Make AboutUs members' pics perfect circle */
    var $elem = $(".img-holder > img");
    var maxSize = Math.max($elem.width(), $elem.height());
    $elem.width(maxSize).height(maxSize);


    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }
        });
    });


    /* Scroll to Top button */

    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 100 ? scrollButton.fadeIn() : scrollButton.fadeOut();
    });
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 550);
    });



   

});

$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
  });
});