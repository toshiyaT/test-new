
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
