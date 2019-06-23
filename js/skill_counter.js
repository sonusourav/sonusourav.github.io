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
/*
var skillCounter = function() {
    $('js-counter').countTo({
         formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    });
};


var skillCounterWayPoint = function() {
    if ($('#colorlib-counter').length > 0 ) {
        $('#colorlib-counter').waypoint( function( direction ) {
                                    
            if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                setTimeout( counter , 400);					
                $(this.element).addClass('animated');
            }
        } , { offset: '90%' } );
    }
};

// Animations
var skillContentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            
            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated');
                        } else {
                            el.addClass('fadeInUp animated');
                        }

                        el.removeClass('item-animate');
                    },  k * 200, 'easeInOutExpo' );
                });
                
            }, 100);
            
        }

    } , { offset: '85%' } );
};

var sliderMain = function() {
		
    $('#colorlib-hero .flexslider').flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function(){
          setTimeout(function(){
              $('.slider-text').removeClass('animated fadeInUp');
              $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
          }, 500);
      },
      before: function(){
          setTimeout(function(){
              $('.slider-text').removeClass('animated fadeInUp');
              $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
          }, 500);
      }

    });

};
*/

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