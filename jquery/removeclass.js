$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
            $('div').remove()
    }
    else if (viewportWidth < 600) {
      $('div').addClass('div')
      setTimeout(function(){
        window.location.reload(0);
      }, 0);
    }
});
