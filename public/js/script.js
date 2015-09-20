// CUSTOM JS
$(document).ready(function () {

    /* Make AboutUs members' pics perfect circle */
    var $elem = $(".img-holder > img");
    var maxSize = Math.max($elem.width(), $elem.height());
    $elem.width(maxSize).height(maxSize);


    /* Scroll to Top button */
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 100 ? scrollButton.fadeIn() : scrollButton.fadeOut();
    });
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 550);
    });


    /* parallax homepage header */
    var pContainerHeight = $('.cd-main-header').height();
    $(window).scroll(function () {

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
    });

});

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

$(document).ready(function () {
    "use strict";
    $('#mainNav').affix({ offset: { top: 250 } })

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});

