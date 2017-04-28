// LETTERING
$(document).ready(function() {
  $(".land-page-logo").lettering();
  $(".land-page-logo2").lettering();
});

// BREYTILEGUR HEADER
$(window).scroll(function() {
  if ($(document).scrollTop() > 600) {
    $('nav').addClass('shrink');
  } 
  else if($(document).scrollTop() < 300){
    $('nav').removeClass('shrink');
  }
  if ($(document).scrollTop() > 600) {
    $('header').addClass('hvitur-header');
  } 
  else if($(document).scrollTop() < 300){
    $('header').removeClass('hvitur-header');
  }
  if ($(document).scrollTop() > 2000) {
    $('header').removeClass('hvitur-header');
  }
});

// SMOOTH SCROLL LINKAR
smoothScroll.init();

// FADE IN
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom-300 < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(1800,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

// SMOOTH SCROLL MÚS
$(function(){
  var $window = $(window);
	var scrollTime = 2;
	var scrollDistance = 700; // Hversu marga pixla músin skrollar
	if($(window).height() > 800) {
		scrollDistance = 900;
	}
	$window.on("mousewheel DOMMouseScroll", function(event){
		event.preventDefault();
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
			ease: Power1.easeInOut,
			overwrite: 5
		});
	});
  $("#next-or").click(function(event){
    event.preventDefault();
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(-scrollDistance);
    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
      ease: Power1.easeInOut,
      overwrite: 5
    });
  });
});