(function($){
  $(document).ready(function(){

    // Fluid font face for the hero screen
    $("#responsive-headline1").fitText(1.5, { minFontSize: '40px', maxFontSize: '90px' });
    $("#responsive-headline2").fitText(2, { minFontSize: '25px', maxFontSize: '50px' });


    // arrows - smooth scrolling
    $('.screen-arrow a').on('click',function (e) {
	    e.preventDefault();
      var target = this.hash;
	    var $target = $(target);
      $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000);
	});

  // zum shop open/close
  $('#zum-open').on('click', function(e){
    e.preventDefault();
    $('#zum-shop').show();
  });

  $('#zum-close').on('click', function(e){
    e.preventDefault();
    console.log("clicky clicky");
    $('#zum-shop').hide();
  });

  // This button will increment the value
    // $('.qtyplus').click(function(e){
    //     // Stop acting like a button
    //     e.preventDefault();
    //     // Get the field name
    //     fieldName = $(this).attr('field');
    //     // Get its current value
    //     var currentVal = parseInt($('input[name='+fieldName+']').val());
    //     // If is not undefined
    //     if (!isNaN(currentVal)) {
    //         // Increment
    //         $('input[name='+fieldName+']').val(currentVal + 1);
    //     } else {
    //         // Otherwise put a 0 there
    //         $('input[name='+fieldName+']').val(0);
    //     }
    // });
    // // This button will decrement the value till 0
    // $(".qtyminus").click(function(e) {
    //     // Stop acting like a button
    //     e.preventDefault();
    //     // Get the field name
    //     fieldName = $(this).attr('field');
    //     // Get its current value
    //     var currentVal = parseInt($('input[name='+fieldName+']').val());
    //     // If it isn't undefined or its greater than 0
    //     if (!isNaN(currentVal) && currentVal > 0) {
    //         // Decrement one
    //         $('input[name='+fieldName+']').val(currentVal - 1);
    //     } else {
    //         // Otherwise put a 0 there
    //         $('input[name='+fieldName+']').val(0);
    //     }
    // });

    // $('.qtyplus').each(function(index){
    //   $(this).click(function(e){
    //       e.preventDefault();
    //       fieldName = $(this).attr('field');
    //       var currentVal = parseInt($('input[name='+fieldName+']').val());
    //       if (!isNaN(currentVal)) {
    //           $('input[name='+fieldName+']').val(currentVal + 1);
    //       } else {
    //           $('input[name='+fieldName+']').val(0);
    //       }
    //   });
    // });
    //
    // $(".qtyminus").each(function(index){
    //   $(this).click(function(e) {
    //     e.preventDefault();
    //     fieldName = $(this).attr('field');
    //     var currentVal = parseInt($('input[name='+fieldName+']').val());
    //     if (!isNaN(currentVal) && currentVal > 0) {
    //         $('input[name='+fieldName+']').val(currentVal - 1);
    //     } else {
    //         $('input[name='+fieldName+']').val(0);
    //     }
    //   });
    // });

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
