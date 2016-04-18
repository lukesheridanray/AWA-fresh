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
	exp.log('Delivery Message v1 - var1');

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
	exp.css = '';

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

		// If the basket is empty set the heavyItems flag to false
		function initFlag() {
			if (!universal_variable.basket) {
				localStorage.heavyItems = false;
			}
		}
		initFlag();

		// When an item is added to the cart check to see if it is heavy - if so, set the heavyItem flag to true
		$("#add2CartBtn").on('click', function(e) {
			initFlag();
			if ($("[id^='standardDeliveryTxt-'").find("strong:contains('£9.95')").length) {
				localStorage.heavyItems = true;
			}
		});


		checkDelivery();
		$( document ).ajaxSuccess(function( event, request, settings ) {
			checkDelivery();
		});

		function checkDelivery() {
			if (universal_variable.basket) {
				var subtotal = universal_variable.basket.subtotal;
				if (subtotal > 48.99) {
					var heavy = (localStorage.heavyItems == "true");
					exp.warn(heavy);
					if (heavy) {
						exp.log('Heavy item in cart - not changing delivery');
					} else {
						$("[id^='standardDeliveryTxt-'").find("strong:contains('£3.95')").text("FREE");
						exp.log('Changing £3.95 to FREE');
					}
				} else {
					exp.log('Cart total not over 49');
				}
			}
		}


	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $("#add2CartBtn:enabled").length }, exp.init, 2000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);


var originalStandardDelivery = $("[id^='standardDeliveryTxt-']").html();


var range = false;
var price = $.trim($(".pdp-price .price").text()).substring(1);
// If the price includes a dash then it's a range
if (price.indexOf("-") > -1) {
	range = true;
}

price = Number(price);

if (range == true) {
	$("[id^='standardDeliveryTxt-']").html(originalStandardDelivery);
} else if (price >= 49) {
	$("[id^='standardDeliveryTxt-']").find("strong:contains('£3.95')").text("FREE");
	
}
