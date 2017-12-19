// Offcanvas (jQuery plugin)
// Version 3
// =========================

(function($) {

  "use strict";

  $(document).ready(function() {

    // Setup

    $('body').prepend('<div id="offcanvas-navicon"><span></span></div>');
    $('#offcanvas-sidebar ul ul').parent().append('<span class="offcanvas-child-link">&raquo;</span>');
    $('#offcanvas-sidebar ul ul').prepend('<span class="offcanvas-child-back-link">&laquo; Back</span>');

    // Offcanvas open/close functions

    function offcanvas_open() {
      $('body').addClass('offcanvas-open');
    }
    function offcanvas_close() {
      $('body').removeClass('offcanvas-open');
      $('#offcanvas-sidebar ul ul').removeClass('offcanvas-child-visible');
      $('#offcanvas-sidebar').delay(400).animate({
        scrollTop: 0
      }, 50);
    }

    // Offcanvas navicon

    function offcanvas_navicon(e) {
      if (!$('body').hasClass('offcanvas-open')) {
        offcanvas_open();
      } else {
        offcanvas_close();
      }
      e.preventDefault();
    }
    $('#offcanvas-navicon').on('click', offcanvas_navicon);
    $('#offcanvas-navicon').on('touchstart', offcanvas_navicon);

    // Offcanvas child menu reveal

    function offcanvas_child_open() {
      $('#offcanvas-sidebar').addClass('offcanvas-child-open');
    }
    function offcanvas_child_close() {
      $('#offcanvas-sidebar').removeClass('offcanvas-child-open');
    }

		// Offcanvas child link

		function offcanvas_child_link(e) {
			$(e.currentTarget).siblings('ul').addClass('offcanvas-child-visible');
      offcanvas_child_open();
			e.preventDefault();
		}
		$('.offcanvas-child-link').on('click', offcanvas_child_link);
		$('.offcanvas-child-link').on('touchstart', offcanvas_child_link);

		// Offcanvas child back-link

		function offcanvas_child_back_link(e) {
			$(e.currentTarget).parents('ul').removeClass('offcanvas-child-visible');
      offcanvas_child_close();
			e.preventDefault();
		}
		$('.offcanvas-child-back-link').on('click', offcanvas_child_back_link);
		$('.offcanvas-child-back-link').on('touchstart', offcanvas_child_back_link);

		// Dismiss Offcanvas

		function offcanvas_dismiss(e) {
      if ($('body').hasClass('offcanvas-open')) {
        offcanvas_close();
        offcanvas_child_close();
  			e.preventDefault();
      }
		}

    $('#page-wrap').on('click', offcanvas_dismiss);
		$('#page-wrap').on('touchstart', offcanvas_dismiss);
    $(window).on('resize', offcanvas_dismiss);

  });

}(jQuery));
