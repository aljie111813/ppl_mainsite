// CUSTOM JS
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