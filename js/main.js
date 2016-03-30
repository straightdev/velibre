(function($){
  $(document).ready(function(){

    // Fluid font face for the hero screen
    $('h1').fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });
    $('h4').fitText(1.5, { minFontSize: '18px', maxFontSize: '24px' });
    $('h3').fitText(1.5, { minFontSize: '25px', maxFontSize: '35px' });
    $("#responsive-headline1").fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });
    $("#responsive-headline2").fitText(2, { minFontSize: '25px', maxFontSize: '50px' });
    $(".screen-title").fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });

    // arrows - smooth scrolling
    $('.screen-arr').on('click',function (e) {
	    e.preventDefault();
      var location = this.hash;
      window.location.hash = location;
      $('html, body').stop().animate({
      'scrollTop': $(this).offset().top
    }, 1000);
	});

  $('#screen-top').on('click',function (e) {
    e.preventDefault();
    // var target = this.hash;
    // var $target = $(target);
    $('html, body').stop().animate({
    'scrollTop': $('#screen1').offset().top
  }, 1000);
});



  // zum shop open/close
  $('#zum-toggle').on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass('zum-hidden')){
      $(this).removeClass('zum-hidden').addClass('zum-showed');
      $('#zum-toggle2').removeClass('zum-hidden').addClass('zum-showed');
      $('#zum-shop').fadeIn();
    } else {
      $(this).removeClass('zum-showed').addClass('zum-hidden');
      $('#zum-toggle2').removeClass('zum-showed').addClass('zum-hidden');
      $('#zum-shop').fadeOut();
    }

  });

  $('#zum-toggle2').on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass('zum-hidden')){
      console.log("hidden");
      $(this).removeClass('zum-hidden').addClass('zum-showed');
      $('#zum-toggle').removeClass('zum-hidden').addClass('zum-showed');
      $('#zum-shop').fadeIn();
      window.scrollTo(0, 0);
      $(window).stop().animate({
      'scrollTop': window.offset().top
    }, 1000);
    } else {
      $(this).removeClass('zum-showed').addClass('zum-hidden');
      $('#zum-toggle').removeClass('zum-showed').addClass('zum-hidden');
      $('#zum-shop').fadeOut();
    }

  });


    $('.qtyplus').each(function(index) {
      $(this).click(function(e) {
        console.log("Pluuus!");
        e.preventDefault();
        var current = $(this).siblings(".qty").val();
        var currentVal = parseInt($(this).siblings(".qty").val());
        if (!isNaN(currentVal)) {
          $(this).siblings(".qty").val(currentVal + 1);
        } else {
          $(this).siblings(".qty").val(0);
          console.log("Failed!")
        }
      });
    });

    // Decrement value in quantity input

    $(".qtyminus").each(function(index) {
      $(this).click(function(e) {
        e.preventDefault();
        var currentVal = parseInt($(this).siblings(".qty").val());
        if (!isNaN(currentVal) && currentVal > 1) {
          $(this).siblings(".qty").val(currentVal - 1);
        } else {
          $(this).siblings(".qty").val(0);
        }
      });
    });

  });
})(jQuery);
