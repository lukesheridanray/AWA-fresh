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
	exp.log('Basket Message v2 - all');

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
	
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-spend-more {\
		margin-bottom: 15px;\
	}\
	#AWA-spend-more #AWA-del {\
		position: static;\
		color: black;\
		font-size: 1em;\
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

		
		if (universal_variable.basket) {

			$(".page-heading:contains('Your basket')").after("<div id='AWA-spend-more' class='alert is-success'><span data-icon='''></span>Spend only £<span id='AWA-del'></span> more to get FREE home delivery (excluding furniture)</div>");
			
			function checkSubtotal() {
				$("#AWA-spend-more").hide();
				var subtotal = $("td[data-pricing='totalBeforeDeductions']").text().substring(1);
				subtotal = Number(subtotal);
				exp.log(subtotal);

				if (subtotal >= 49) {
					exp.log('Subtotal is greater than 49');
					return;
				} else if ($(".delivery-radio:contains('Furniture delivery')").length) {
					exp.log('Order contains furniture delivery');
					return;
				} else if ($(".delivery-radio:contains('9.95')").length) {
					exp.log('Order contains furniture delivery - 9.95');
					return;
				} else if ($(".icon.method.standard.unavailable").length) {
					exp.log('Not available for Home Delivery present');
					return;
				}


				var difference = 49 - subtotal;
				difference = difference.toFixed(2);
				exp.log(difference);

				$("#AWA-spend-more").show();
				$(".page-heading:contains('Your basket')").after($("#AWA-spend-more"));
				$("#AWA-del").text(difference);
			}

			checkSubtotal();

			$( document ).ajaxSuccess(function( event, request, settings ) {
				exp.log('ajaxSuccess');
				checkSubtotal();
			});

		}
	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $(".l-checkout-basket__item__content ").length }, exp.init, 1000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
