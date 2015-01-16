(function ($) {
	
	"use strict";
  
	$(document).ready(function () {

		// Offcanvas
			
		function off_canvas_open() {
			$('body').addClass('offcanvas-open');
		}
		function off_canvas_close() {
			$('body').removeClass('offcanvas-open');
			$('.offcanvas-sidebar').delay(400).animate({scrollTop : 0}, 50);
		}
		$('.offcanvas-navicon').click(function () {
			if (!$('body').hasClass('offcanvas-open')) {
				off_canvas_open();
			} else {
				off_canvas_close();
			}
		});
		$('.offcanvas-overlay').click(function () {
			off_canvas_close();
		});
		$(window).resize(function () {
			off_canvas_close();
		});
		
	});

}(jQuery));
