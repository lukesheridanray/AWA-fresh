// Product Views
if (vwo_$('.prod-name-and-slideshow').length) {
	window._vis_opt_queue = window._vis_opt_queue || [];
	window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);});
}


/* --- Add to Cart --- */
// Listing page "Buy now"
vwo_$("a:contains('Buy now')").on('click', function(e) {
	window._vis_opt_queue = window._vis_opt_queue || [];
	window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(201);});
});

// Prouct page "buy now!"
vwo_$("a:contains('buy now!')").on('click', function(e) {
	window._vis_opt_queue = window._vis_opt_queue || [];
	window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(201);});
});

// Listing page "Personalise now" takes you directly to the product page so it's not a true "add to cart"

// Product page "buy now!" (loads dynamically)
vwo_$("body").on('click', 'input[value="buy now!"]', function(e) {
	window._vis_opt_queue = window._vis_opt_queue || [];
	window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(201);});
});


