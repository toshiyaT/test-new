
// form用のコード
jQuery( '#file-test' ).change( function() {
  jQuery( '#file-test-name' ).show();
  jQuery( '#file-test-name' ).val( jQuery( this ).val() );
  jQuery( this ).val( '' );
});
// form用のコード end

// header-nav
$(function(){
  $('.zdo_drawer_button').click(function () {
    $(this).toggleClass('active');
    $('.zdo_drawer_bg').fadeToggle();
    $('nav').toggleClass('open');
  })
  $('.zdo_drawer_bg').click(function () {
    $(this).fadeOut();
    $('.zdo_drawer_button').removeClass('active');
    $('nav').removeClass('open');
  });

});
// header-nav

// button-to-top
jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.button-to-top').show();
  } else {
    jQuery('.button-to-top').hide();
  }
});

jQuery('.button-to-top').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
// button-to-top end

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// スムーススクロール end
