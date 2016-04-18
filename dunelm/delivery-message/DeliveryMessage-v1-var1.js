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


		function trackProduct() {
			if (localStorage.myProducts) {
				var myProducts = JSON.parse(localStorage.myProducts);
			} else {
				var myProducts = [];
				exp.log('creating new array');
			}

			var product = {};
			product.name = universal_variable.product.name;
			product.heavy = false;
			if ($("[id^='standardDeliveryTxt-'").find("strong:contains('£9.95')").length) {
				product.heavy = true;
			}
			myProducts.push(product);
			myProducts.sort( function( a, b){ return a.name - b.name; } );
			// delete all duplicates from the array
			for( var i=0; i<myProducts.length-1; i++ ) {
				if ( myProducts[i].name == myProducts[i+1].name ) {
					delete myProducts[i];
				}
			}
			myProducts = myProducts.filter( function( el ){ return (typeof el !== "undefined"); } );

			localStorage.myProducts = JSON.stringify(myProducts);

			exp.log(localStorage.myProducts);

		}

		$("#add2CartBtn").on('click', function(e) {
			trackProduct();
			alert();
		});


		$(document).on('click', ".l-checkout-basket__item__remove", function(e) {
			if (localStorage.myProducts) {
				var myProducts = JSON.parse(localStorage.myProducts);
			} else {
				var myProducts = [];
			}

			var productToRemove = $.trim($(this).parent().find("a").first().text());
			console.info(productToRemove);
			var myProducts = $.grep(data, function(e){ 
     			return e.name != productToRemove; 
			});
			localStorage.myProducts = JSON.stringify(myProducts);

			exp.log(localStorage.myProducts);


			alert();
		});




		if (universal_variable.basket) {
			var subtotal = universal_variable.basket.subtotal;
			if (subtotal > 48.99) {
				$("[id^='standardDeliveryTxt-'").find("strong:contains('£3.95')").text("FREE");
			}
		}


	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $("#add2CartBtn:enabled").length }, exp.init, 1000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
