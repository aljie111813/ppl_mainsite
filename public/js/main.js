require.config({
    preserveLicenseComments: false,
    paths: {
        'angular': '../../bower_components/angular/angular',
        'ngAnimate': '../../bower_components/angular-animate/angular-animate',
        'ngRoute': '../../bower_components/angular-route/angular-route',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
        'fox.scrollReveal': '../../bower_components/fox-angular-scrollReveal/fox-angular-scrollReveal',
        'jquery': '../../bower_components/jquery/dist/jquery',        
        'ScrollReveal': 'scrollReveal',
        'app': 'app',
        'AboutFactory': 'mainsite/about/AboutFactory',
        'AboutController': 'mainsite/about/AboutController',
        'mainsite': 'mainsite/mainsite'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        ngRoute: {
            deps: ['angular']
        },
        ngAnimate: {
            deps:['angular']
        },
        'fox.scrollReavel': {
            deps: ['angular', 'ScrollReveal']
        },

        angular: {
            exports: 'angular'
        }
    },
    baseUrl: 'public/js'
});

require(['app', 'jquery', 'bootstrap'], function (app, script, jquery, bootstrap) {

    //End Loading Screen 
    $(document).ready(function () {

        //$(window).load(function () {
        //Show The Scroll            
        $(".loading-overlay .spinner").fadeOut(250, function () {            
            $(this).parent().fadeOut(1200, function () {
                $(this).remove();
            });
        });
        //});

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

        $('#mainNav').affix({ offset: { top: 250 } })

        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });

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


    //script();

    app.init();

});