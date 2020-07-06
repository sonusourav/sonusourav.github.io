jQuery(document).ready(function ($) {

  $('#toggle-box-checkbox').on('change', function () {
    if (this.checked) {
      $('body').addClass('night');
      $('blog-entry .text .heading a:hover').addClass('night');
      $('blog-entry .text .heading a:focus').addClass('night');
      $('blog-entry .text .heading a:active').addClass('night');
      $('blog-entry .text .heading.a').addClass('night');
      $(".turn-white").addClass("white_n");
      $(".turn-white").removeClass("night_n");
      // $('a.nav-link span').addClass('night');
      $('p').addClass('night');
      $('h1').addClass('night');
      $('h2').addClass('night');
      $('h3').addClass('night');
      $('h4').addClass('night');
      $('h5').addClass('night');
      $('h6').addClass('night');
      $('.progress-bar span').addClass('night');
      $('span.subheading').addClass('night');
    } else {
      $('body').removeClass('night');
      $('blog-entry .text .heading a:hover').removeClass('night');
      $('blog-entry .text .heading a:focus').removeClass('night');
      $('blog-entry .text .heading a:active').removeClass('night');
      $('blog-entry .text .heading.a').removeClass('night');
      // $('a.nav-link span').removeClass('night');
      $(".turn-white").removeClass("white_n");
      $(".turn-white").addClass("night_n");
      $('p').removeClass('night');
      $('h1').removeClass('night');
      $('h2').removeClass('night');
      $('h3').removeClass('night');
      $('h4').removeClass('night');
      $('h5').removeClass('night');
      $('h6').removeClass('night');
      $('.progress-bar span').removeClass('night');
      $('span.subheading').removeClass('night');
    }
  });

  // run demo if in searchresult preview
  function demo() {
    setInterval(function () {
      $("#toggle-box-checkbox").trigger('click');
    }, 1000);
  }
  if (document.location.pathname.indexOf('fullcpgrid') > -1) {
    demo();
  }


});


$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".turn-white").addClass("night_nav");
        $(".turn-white").removeClass("night");
    }
    else if(scroll==0){
      if ($("#toggle-box-checkbox").is(':checked')) {
        $(".turn-white").addClass("white_n");
        $(".turn-white").removeClass("night_nav");
    }
    else{
      $(".turn-white").removeClass("night_nav")
    }

  }
});
});