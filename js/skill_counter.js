jQuery(document).ready(function($){
    //skillCounterWayPoint();
   // skillContentWayPoint();
   // skillCounter();
   // sliderMain();
   var element_position = $('#colorlib-counter').offset().top;
   var screen_height = $(window).height();
   var activation_offset = 0.8;//determines how far up the the page the element needs to be before triggering the function
   var activation_point = element_position - (screen_height * activation_offset);
   var max_scroll_height = $('body').height() - screen_height;

   $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if(element_in_view || has_reached_bottom_of_page) {
        counter();
    }
});

});

var counter = function() {

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
    
  
  });

};