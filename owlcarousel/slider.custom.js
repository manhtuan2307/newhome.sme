$(document).ready(function() {
    var owl = $("#owl-gallery");
	owl.owlCarousel({
		  autoPlay: 2000,
		  items : 2, //10 items above 1000px browser width
		  itemsDesktop : [1000,2], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0;
		  itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
          pagination:false
      });
      $(".ga-next").click(function(){
          owl.trigger('owl.next');
      })
      $(".ga-prev").click(function(){
          owl.trigger('owl.prev');
      })
});
$(document).ready(function() {
	  var owl = $("#owl-project");
	  owl.owlCarousel({
		  autoPlay: 1500,
		  items : 3, //10 items above 1000px browser width
		  itemsDesktop : [1000,3], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0;
		  itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
          pagination:false,
          nav:true
      });
     // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
});
$(document).ready(function() {
    var owl = $("#owl-happy");
	owl.owlCarousel({
		  autoPlay: 2000,
		  items : 3, //10 items above 1000px browser width
		  itemsDesktop : [1000,3], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0;
		  itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
          pagination:false
      });
      $(".happy-next").click(function(){
          owl.trigger('owl.next');
      })
      $(".happy-prev").click(function(){
          owl.trigger('owl.prev');
      })
});
$(document).ready(function() {
	  var owl = $("#owl-customer");
	  owl.owlCarousel({
		  autoPlay: 1500,
		  items : 4, //10 items above 1000px browser width
		  itemsDesktop : [1000,4], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
		  itemsTablet: [600,2], //2 items between 600 and 0;
		  itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
		  pagination: false
      });
      $(".biz-next").click(function(){
          owl.trigger('owl.next');
      })
      $(".biz-prev").click(function(){
          owl.trigger('owl.prev');
      })
});

$(document).ready(function() {
	  var owl = $("#owl-partner");
	  owl.owlCarousel({
		  autoPlay: 1500,
		  items : 6, //10 items above 1000px browser width
		  itemsDesktop : [1000,5], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
		  itemsTablet: [600,2], //2 items between 600 and 0;
		  itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
		  pagination: true
      });
      $(".partner-next").click(function(){
          owl.trigger('owl.next');
      })
      $(".partner-prev").click(function(){
          owl.trigger('owl.prev');
      })
});