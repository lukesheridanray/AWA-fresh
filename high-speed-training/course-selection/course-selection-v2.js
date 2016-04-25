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
	exp.log('Course Selection v2');

	
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	//exp.condition = $('.row.homepage-hero');

	// Check for a condition and return false if it has not been met
	// if(exp.condition && !exp.condition.length) {
	//     exp.log('Course Selection failed a condition');
	//     return false;
	// }

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-iframe {\
			width: 100%;\
			height: 60px;\
			border: 0;\
			overflow: hidden;\
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
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    if (window.location.protocol === "https:") {
	    	$('.food-hygiene-hero').after("<iframe id='AWA-iframe' src='https://www.highspeedtraining.co.uk/food-hygiene/choose-level-1.aspx' scrolling='no'></iframe>");
	    } else {
	    	$('.food-hygiene-hero').after("<iframe id='AWA-iframe' src='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-1.aspx' scrolling='no'></iframe>");
	    }

		function redirect() {
			window.location.href = "https://www.highspeedtraining.co.uk/checkout.aspx";
		}

	    // Run element check until this has been found
	    function hide() {
	    	// Add the "base" tag so that links click will open in the parent window
	    	//$("#AWA-iframe").contents().find("head").append("<base target='_parent' />");

		    // $("#AWA-iframe").contents().find("#btn_buynow").click(function(e) {
		    // 		e.preventDefault();
		    // 		alert();
		    // });

			// Hide everything inside the iframe
			$("#AWA-iframe").contents().find("div:not('#btn_buynow')").hide();
			// Surface "Buy Now" button
			$("#AWA-iframe").contents().find("form").prepend($("#AWA-iframe").contents().find("#btn_buynow"));



			// Check for presence of "Checkout" headline within iframe on the click event to set a redirect to the cart page in the parent window
			$("#AWA-iframe").contents().find("#btn_buynow").click(function(e) {
				exp.func.waitFor( function() { return $("#AWA-iframe").contents().find("h1:contains('Checkout')").length }, redirect, 1000);
			});

	    }

		exp.func.waitFor(function(){ return $("#AWA-iframe").contents().find("#btn_buynow").length }, hide, 1000);


		
		$('.food-hygiene-hero').after("<iframe id='AWA-iframe2' src='https://www.highspeedtraining.co.uk/food-hygiene/choose-level-2-version.aspx' scrolling='no'></iframe>");

		function hide2() {
			//$("#AWA-iframe2").contents().find("head").append("<base target='_parent' />");

			$("#AWA-iframe2").contents().find("div:not('#btn_buynow')").hide();

			$("#AWA-iframe2").contents().find("form").prepend($("#AWA-iframe2").contents().find("#btn_buynow"));

			// Check for presence of "Checkout" headline within iframe on the click event to set a redirect to the cart page in the parent window
			$("#AWA-iframe2").contents().find("#btn_buynow").click(function(e) {
				exp.func.waitFor( function() { return $("#AWA-iframe2").contents().find("h1:contains('Checkout')").length }, redirect, 1000);
			});

		}

		exp.func.waitFor(function(){ return $("#AWA-iframe2").contents().find("#btn_buynow").length }, hide2, 1000);
		



	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

