$(document).ready(function(e) {   

	// Add to Cart 
    $('#SideProductAddToCart').click(function(e) {
        window._vis_opt_queue = window._vis_opt_queue || [];
        window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(204);});
        //console.log('GOAL: Added to Cart');
    });

    // Compare Checkbox
    var inputChecked = false;
    $('.AWA-filter input[type=checkbox]').click(function(){
    	if (inputChecked == false) {
			window._vis_opt_queue = window._vis_opt_queue || [];
			window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(206);});
			//console.log('GOAL: Compare Checkbox');
    	}
        inputChecked = true;
    });

    // Product Views
    if ($('#MobileGallery').length > 0) {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(205);});
		//console.log('GOAL: Product Views');
    }
    
    // Reached Payment Page
    $('#bottom_payment_button').click(function(){
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(207);});
		//console.log('GOAL: Reached Payment Page');
    });	

});
