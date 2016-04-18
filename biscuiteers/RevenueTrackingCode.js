var page = window.location.href.toLowerCase();

if (page.indexOf("/shop/checkout/onepage/success/") > -1) {
		window._vis_opt_queue = window._vis_opt_queue || []; 
		window._vis_opt_queue.push(
		function() {
		  _vis_opt_register_conversion(1, 3, order_details.order_total);
		});
}

if (page.indexOf("/shop/checkout/multishipping/success/") > -1) {
		window._vis_opt_queue = window._vis_opt_queue || []; 
		window._vis_opt_queue.push(
		function() {
		  _vis_opt_register_conversion(2, 3, order_details.order_total);
		});
}