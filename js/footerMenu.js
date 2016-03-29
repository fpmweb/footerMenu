(function( $ ){
	$.fn.footerMenu = function() {
		$(window).scroll(function() {
	    	if ($(document).scrollTop() > 100) {
	      		$('#footerMenu').addClass("show");
	    	} else {
	      		$('#footerMenu').removeClass("show");
	    	}
	  	});
	};
})( jQuery );