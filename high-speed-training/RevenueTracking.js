if (window.location.href.indexOf("ShowSPOrderDetails.aspx") > -1) {
	window._vis_opt_queue = window._vis_opt_queue || []; 
	window._vis_opt_queue.push(
	function() {
	  _vis_opt_register_conversion(206, 9, '<%# OrderTotal.ToString("0.00") %>');
	});
}

if (window.location.href.indexOf("showpporderdetails.aspx") > -1) {
	window._vis_opt_queue = window._vis_opt_queue || []; 
	window._vis_opt_queue.push(
	function() {
	  _vis_opt_register_conversion(207, 9, '<%# OrderTotal.ToString("0.00") %>');
	});
}





var page = window.location.href.toLowerCase();
if (page.indexOf("showsporderdetails.aspx") > -1) {
	setTimeout(function() {
		window._vis_opt_queue = window._vis_opt_queue || []; 
		window._vis_opt_queue.push(
		function() {
		  _vis_opt_register_conversion(1, 9, '<%= OrderTotal.ToString("0.00") %>');
		});
	}, 3500);
}

if (page.indexOf("showpporderdetails.aspx") > -1) {
	setTimeout(function() {
		window._vis_opt_queue = window._vis_opt_queue || []; 
		window._vis_opt_queue.push(
		function() {
		  _vis_opt_register_conversion(2, 9, '<%= OrderTotal.ToString("0.00") %>');
		});
	}, 3500);
}



