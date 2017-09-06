$(document).ready(function(){
  $('#gallery-thumbs').owlCarousel({
  	items: 4,
  	loop: true,
  	center: true,
  	responsive : {
    // breakpoint from 480 up
    680 : {
        items: 2,
    },
    // breakpoint from 768 up
    800 : {
        items: 3,
    }
},
  });
});