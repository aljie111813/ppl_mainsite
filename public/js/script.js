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

    $('.aboutus-members').ready(function () {
        setTimeout(function () {
            var canvas = document.getElementById('animatedCanvas');
            console.log(canvas);
            var ctx = canvas.getContext("2d");
            var requestAnimationFrame = (function (callback) {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
            })();

            var W = window.innerWidth;
            var H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;

            var mp = 100; //max particles
            var particles = [];
            for(var i = 0; i < mp; i++)
            {
                particles.push({
                    x: Math.random()*W, //x-coordinate
                    y: Math.random()*H, //y-coordinate
                    r: Math.random()*4+1, //radius
                    d: Math.random()*mp //density
                })
            }
	
            //Lets draw the flakes
            function draw()
            {
                ctx.clearRect(0, 0, W, H);
		
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.beginPath();
                for(var i = 0; i < mp; i++)
                {
                    var p = particles[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
                }
                ctx.fill();
                update();
            }
	
            //Function to move the snowflakes
            //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
            var angle = 0;
            function update()
            {
                angle += 0.01;
                for(var i = 0; i < mp; i++)
                {
                    var p = particles[i];
                    //Updating X and Y coordinates
                    //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                    //Every particle has its own density which can be used to make the downward movement different for each flake
                    //Lets make it more random by adding in the radius
                    p.y += Math.cos(angle+p.d) + 1 + p.r/2;
                    p.x += Math.sin(angle) * 2;
			
                    //Sending flakes back from the top when it exits
                    //Lets make it a bit more organic and let flakes enter from the left and right also.
                    if(p.x > W+5 || p.x < -5 || p.y > H)
                    {
                        if(i%3 > 0) //66.67% of the flakes
                        {
                            particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                        }
                        else
                        {
                            //If the flake is exitting from the right
                            if(Math.sin(angle) > 0)
                            {
                                //Enter from the left
                                particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                            }
                            else
                            {
                                //Enter from the right
                                particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                            }
                        }
                    }
                }
            }

            //animation loop
            setInterval(draw, 33);



        }, 2000);
    });
});

