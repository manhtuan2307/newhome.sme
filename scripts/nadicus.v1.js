var app = {
  // Application Constructor
  init: function() {
    this.showminicart();
    this.showSupport();
    this.menuDropdown();
    this.showpopupcondition();
    this.showpopupfunc();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  showminicart: function() {
    $("#showminicart").click(function() {
      $("#minicart").toggleClass("show");
    });
  },
  showpopupcondition: function() {
    $("#boxcondition").click(function() {
      $('.boxcondition').toggleClass("show");
    });
  },
  showpopupfunc: function() {
    $(".boxfunc").click(function() {
      $(this).toggleClass("show");
    });    
  },
  showSupport: function() {
     $('.show-arrow').click(function(){
        $(this).closest('.has-child').toggleClass('show');
        $(this).closest('.d-menu').toggleClass('shadow');
        $(this).toggleClass('show');
     });
    $("#itemAll").click(function() {
        $("input[type=checkbox]").prop("checked", $(this).prop("checked"));
    });        
    $("input[type=checkbox]").click(function() {
        if (!$(this).prop("checked")) {
            $("#itemAll").prop("checked", false);
        }
    });
    $(document).ready(function(){    	
    	$(window).scroll(function(){
    		if ($(this).scrollTop() > 50){
    			$('.loadTop').addClass('show');
    		}else{
    			$('.loadTop').removeClass('show');
    		}
    	});
    });
    $('#loadTop').click(function(){
		$("html, body").animate({ scrollTop: "0" }); 
	});
    $("#mmenuBar").click(function() {
      $(this).closest('.sideLBar').toggleClass("show");
      $(this).toggleClass('show');
    });
  },
  menuDropdown: function() {
    $(".dropdown-menu i.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }
};