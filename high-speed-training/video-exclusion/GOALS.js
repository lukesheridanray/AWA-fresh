$(document).ready(function() {

	// Navigation on Homepage
	$('.nav.navbar-nav a').click(function() {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);});
	});

	// Choose a Course
	$('.homepage-hero .col-sm-7 a').click(function() {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(201);});
	});	

	// Product Views
	if ($('.quantity-input').length) {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(202);});
	}

	// Intra-Copy In-Line Links
	$('.homepage-hero .col-md-6').last().find('a').click(function() {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(203);});
	});

	// Find Out More Links
	$('.col-md-8.col-sm-9').find('a').click(function() {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(204);});
	});

	// Read More Reviews
	$('#ctl00_ContentPlaceHolder1_A2').click(function() {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(205);});
	});

});


