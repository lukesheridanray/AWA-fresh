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
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Product Count v2 - var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		innerProductDivs: 	"<div id='AWA-num-products'></div><div id='AWA-products-found'>products found</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#productCount {\
		padding: 10px;\
		border-bottom: solid 1px #cfcfcf;\
		display: block !important;\
	}\
	#AWA-num-products {\
		font-weight: bold;\
		font-size: 32px;\
		margin-bottom: 8px;\
	}\
	.is-hidden #productCount {\
		display: none !important;\
	}\
	#AWA-products-found {\
		font-size: .875em;\
		line-height: 1.2;\
		font-weight: bold;\
		color: rgb(51, 51, 51);\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// This function waits till a condition returns true
	exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
	    timeout = timeout || 20000;
	    keepAlive = keepAlive || false;
	    var intervalTime = 50,
	        maxAttempts = timeout / intervalTime,
	        attempts = 0,
	        interval = setInterval(function() {
	            if (condition()) {
	                if (!keepAlive) {
	                    clearInterval(interval);
	                }
	                callback();
	            } else if (attempts > maxAttempts) {
	                clearInterval(interval);
	            }
	            attempts ++;
	        }, intervalTime);
	};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Get number of products
		numProducts = $("#productCount").text();

		// Remove current product count and insert new inner divs
		$("#productCount").html(exp.vars.innerProductDivs);

		// Insert numProducts
		$("#AWA-num-products").text(numProducts);


		function getProductCount() {
			exp.log("Ajax request");
			$("#AWA-num-products").text(numProducts);

			// If entire page has been reset
			if (!$("#AWA-num-products").length) {
				$('head').append('<style type="text/css">'+exp.css+'</style>');
				numProducts = $("#productCount").text();
				$("#productCount").html(exp.vars.innerProductDivs);
				$("#AWA-num-products").text(numProducts);
			}

		}

	    $(document).ajaxSuccess(function(event, xhr, settings ) {
			getProductCount();
		});

	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $(".l-search-results__result").length }, exp.init, 1000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);