$(document).ready(function(e) {   

	// Add to Cart 
    $('.AddCartButton input[type=image]').click(function(e) {
        window._vis_opt_queue = window._vis_opt_queue || [];
        window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(200);});
       // console.log('GOAL: Added to Cart');
    });

    // Compare Checkbox
    var inputChecked = false;
    $('.Content').on("click", ".AWA-filter input[type=checkbox]", function() {
        if (inputChecked == false) {
            window._vis_opt_queue = window._vis_opt_queue || [];
            window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(201);});
            console.log('GOAL: Compare Checkbox');
        }
        inputChecked = true;
    });

    // Product Views
    if ($('.ProductMain').length) {
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(202);});
		//console.log('GOAL: Product Views');
    }
    
    // Reached Payment Page
    $('#top_payment_button, #bottom_payment_button').click(function(){
		window._vis_opt_queue = window._vis_opt_queue || [];
		window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(203);});
		//console.log('GOAL: Reached Payment Page');
    });	

});
