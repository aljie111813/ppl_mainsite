// CUSTOM JS
$(document).ready(function () {
    jQuery(window).bind('scroll', function () {
        if (jQuery(window).scrollTop() > 20) {

            jQuery('.navbar-default').css({
                '-webkit-transform': 'translate3d(0, 0, 0)',
                '-moz-transform': 'translate3d(0, 0, 0)',
                '-o-transform': 'translate3d(0, 0, 0)',
                'transform': 'translate3d(0, 0, 0)'
            });

        } else {

            jQuery('.navbar-default').css({
                '-webkit-transform': 'translate3d(0, -100%, 0)',
                '-moz-transform': 'translate3d(0, -100%, 0)',
                '-o-transform': 'translate3d(0, -100%, 0)',
                'transform': 'translate3d(0, -100%, 0)'
            });
        }
    });


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

    //Scroll Top

    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 100 ? scrollButton.fadeIn() : scrollButton.fadeOut();
    });
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 550);
    });




    
});

var pContainerHeight = $('.cd-main-header').height();

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {

        $('#h1').css({
            'transform': 'translate(0px, ' + wScroll / 0.7 + '%)'
        });

        $('#img').css({
            'transform': 'translate(0px, ' + wScroll / 1.5 + '%)'
        });

        $('#btn').css({
            'transform': 'translate(0px, ' + wScroll / 20 + '%)'
        });

        $('#head-img').css({
            'transform': 'translate(' + wScroll / 20 + '%, 0px)'
        });


    }
});