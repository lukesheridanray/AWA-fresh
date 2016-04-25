var page = window.location.href.toLowerCase();

function checkOrder(goalID) {
	if (order_details) {
		if (order_details.order_total) {
			window._vis_opt_queue = window._vis_opt_queue || []; 
			window._vis_opt_queue.push(
			function() {
			  _vis_opt_register_conversion(goalID, 3, order_details.order_total);
			});
			return;
		}
	}
	setTimeout(checkOrder, 1000);
}

if (page.indexOf("/shop/checkout/onepage/success") > -1) {
	checkOrder(1);
}

if (page.indexOf("/shop/checkout/multishipping/success") > -1) {
	checkOrder(2);
}

// 16,476
// 16,575