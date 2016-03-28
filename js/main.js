(function($){
  $(document).ready(function(){

    // Fluid font face for the hero screen
    $("#responsive-headline1").fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });
    $("#responsive-headline2").fitText(2, { minFontSize: '25px', maxFontSize: '50px' });

    $('.screen-arrow a').on('click',function (e) {
	    e.preventDefault();
      var target = this.hash;
	    var $target = $(target);
      $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000);

	});


  });
})(jQuery);
