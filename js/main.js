(function($){
  $(document).ready(function(){

    // Fluid font face for the hero screen
    // $('h1').fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });
    // $('h2').fitText(2.5, { minFontSize: '25px', maxFontSize: '35px' });
    $('h3').fitText(2.5, { minFontSize: '25px', maxFontSize: '35px' });
    $('h4').fitText(1.5, { minFontSize: '18px', maxFontSize: '24px' });
    $(".screen-title").fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });

    // arrows - smooth scrolling
    $('.screen-arr').on('click',function (e) {
	    e.preventDefault();
      $('html, body').stop().animate({
      'scrollTop': $(this).offset().top
    }, 1000);
	});

    $('#screen-top').on('click',function (e) {
      e.preventDefault();
      $('html, body').stop().animate({
      'scrollTop': $('#screen1').offset().top
    }, 1000);
  });

    $('.screen-anchor').on('click',function (e) {
      e.preventDefault();
      var location = this.hash;
      var $location = $(location);
      $('html, body').stop().animate({
      'scrollTop': $($location).offset().top
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

    // Snap pages

if ($('body').hasClass('home')){
  var screenOK = window.innerWidth >= 1200;
  function sectionScoll (OK) {
    if(!OK){
      $('.snap').each(function() {
        $(this).off('mousewheel DOMMouseScroll');
      });
    } else {
      var snapPositions = [];
      $('.snap').each(function() {
      snapPositions.push(parseInt($(this).offset().top));
      $(this).on({
          'mousewheel DOMMouseScroll': function(e) {

            // disable the scrolling event inside this element
            e.preventDefault();
            e.stopPropagation();

            // snap to previous or to next element
            var thisPosition = parseInt($(this).offset().top);
            var snapPosition = 0;
            var delta = 0;

            if (e.type == 'mousewheel') {
              delta = e.originalEvent.wheelDelta;
            } else if (e.type == 'DOMMouseScroll') {
              delta = e.originalEvent.detail;
            }
            if (delta >= 0) {
              snapPosition = snapPositions[snapPositions.indexOf(thisPosition)-1];
            }
            else {
              snapPosition = snapPositions[snapPositions.indexOf(thisPosition)+1];
            }
            snapPosition = snapPosition - 115; // decrease number to include top arrow
            if (snapPosition !== "undefined")  {
              $('html, body').stop().animate({
                'scrollTop': snapPosition
              }, 100);
            }
          }
      });

    });
  }
} //end of scroll function

    sectionScoll(screenOK);

  $(window).resize(function() {
    if (window.innerWidth < 1200) {
      screenOK = false;
      sectionScoll(screenOK);
  } else if (window.innerWidth >= 1200) {
    screenOK = true;
    sectionScoll(screenOK);
  }
});

}








  });
})(jQuery);
