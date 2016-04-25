//function() {
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

	// Initialise the experiment object
	var exp = {
	};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Search Box - v1 -var2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	// exp.condition = $("#268917436");

	// // Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('PLP Condensed failed a condition');
	// }
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#siteSearch input[type="submit"]:hover {\
		    background-color: #00562c !important;\
		}\
		.search-portlet .text-input {\
			height: 29px;\
			background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/75d27af5a1bd4ac59e83dc3a88a89150_15_15.png");\
			background-repeat: no-repeat;\
			background-position: 470px;\
			background-size: 19px 19px;\
			width: 491px;\
		}\
		#siteSearch .button.search {\
			border: solid 1px black !important; background-color: #b60718; height: 35px; width: 67px; margin-left: -4px; text-indent: 0; color: white; font-size: 14px; background-image: none !important;\
		}\
		.autocomplete {\
			top: 149px !important;\
			width: 495px !important;\
		}\
	';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Check to see if changes have been applied (needed for search pages)
		if (!$('#siteSearch').find('label').length) {
			return;
		}

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Remove "Search" label
		$('#siteSearch').find('label').remove();

		// Adjust autocomplete width - the left value changes with every window resize
		var currentLeftValue = parseInt($(".autocomplete").last().css("left"), 10);
		$(".autocomplete").attr('style', 'left: ' + (currentLeftValue - 168) +'px !important;');


					
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

