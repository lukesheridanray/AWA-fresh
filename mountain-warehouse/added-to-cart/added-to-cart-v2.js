//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
  //'use strict';
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
	exp.log('Add to Cart - v2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#menuBanner"); // Very inclusive

	// Check for a condition and return false if it has not been met
	/*
	if (exp.condition && !exp.condition.length) {
		exp.log('Promo Banner failed a condition');
		return false;
	}
	*/

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		greenTicks: "<div class='row'>\
						<div class='col-3 col-pad'></div>\
						<div class='col-8 col-pad'>\
							<ul id='AWA-green-ticks'>\
								<li id='AWA-you-saved'>You saved &pound;<span id='AWA-save-amount'></span> &nbsp;&nbsp;<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/04093ff5c08067f0f0690307c8942c80_image_copy.png'></li>\
								<li id='AWA-standard-delivery'>FREE Standard Delivery &nbsp;&nbsp;<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/04093ff5c08067f0f0690307c8942c80_image_copy.png'></li>\
								<li id='AWA-exchanges'>FREE Exchanges & No Hassle Returns &nbsp;&nbsp;<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/04093ff5c08067f0f0690307c8942c80_image_copy.png'></li>\
							</ul>\
						</div>\
					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#basketModal .modal {\
		width: 440px !important;\
	}\
	#basketModal .basket-popup-buttons {\
		margin-top: 0;\
	}\
	#AWA-green-ticks {\
		margin-top: 0;\
		color: #5b5b5b;\
		padding-bottom: 2px;\
	}\
	#AWA-green-ticks li {\
		margin-bottom: 7px;\
	}\
	#AWA-green-ticks img {\
		padding-bottom: 3px;\
	}\
	@media (max-width: 371px) {\
		.AWA-add {\
			padding: .4em 20% !important;\
		}\
	}\
	@media (max-width: 348px) {\
		#AWA-green-ticks {\
			margin-top: 10px;\
		}\
	}\
	@media (max-width: 474px) {\
		#AWA-green-ticks img {\
			display: none;\
		}\
		#basketModal .basket-popup-buttons {\
			margin-top: 0px;\
		}\
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

	    // Add green ticks to modal (so they don't constant add on add to cart click)
	    $("#basketModal .basket-popup-buttons").before(exp.vars.greenTicks);

	    // Reformat buttons
	    $("#basketModal .button-secondary:contains('Keep')").html("Keep<br>Shopping").attr('style', 'line-height: 1em; font-weight: 400;');
	    $("#basketModal .button:contains('Checkout')").attr('style', 'padding: .4em 27%; font-size: 1.4em; font-weight: 400;').addClass('AWA-add');

	    // Event handler for Add to Cart button
	    $("#AddToBasketButton").click(function(e) {
	    	// If there's a selection error visble then return function
	    	if ($("div[id^='error']").is(":visible")) {
	    		exp.log('selection error - returning');
	    		return;
	    	}
	    	// Wait for basket modal to populate before applying changes
	    	exp.func.waitFor(function() { return $.trim($("#basketModal h3").text()).length }, changeModal, 10000);
	    });

	    // Main modal change function
	    function changeModal() {
	    	// Header
	    	$("h2:contains('Added To Cart')").html("Added to your cart &nbsp;&nbsp;<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/04093ff5c08067f0f0690307c8942c80_image_copy.png'>");
	    	$("#basketModal .modal--header a.modal_close:contains('Close')").attr('style', 'color: #9a9a9a; font-size: 1.05em; padding-top: .6em;');

	    	// Hide "This item has been added to your cart"
	    	$("#basketModal p:contains('This item has been added to your cart.')").hide();

	    	// Title case colour
	    	$("#basketModal .basket-popup-colour").text(toTitleCase($("#basketModal .basket-popup-colour").text()));

	    	/* --- Populate or hide "You saved" line --- */
	    	// Get "Was" price
	    	if ($.trim($(".wassavebox").first().find(".was").text()).length) {
	   			var was = $(".wassavebox").first().find(".was").text().match(/[\$\£\€](\d+(?:\.\d{1,2})?)/)[1];
	  
	   			var currentPrice = $("#nowprice").find('span[itemprop="price"]').text().match(/[\$\£\€](\d+(?:\.\d{1,2})?)/)[1];

	   			var youSaved = (was - currentPrice).toFixed(2);
	   			// Remove trailing double zeros if they exist
	   			youSaved = youSaved.replace(/\.00$/,'');

	   			$("#AWA-save-amount").text(youSaved);

	    	} else {
	    		$("#AWA-you-saved").hide();
	    	}

	    	/* --- Change delivery type based on basket value --- */
	    	var basketValue = 50; // CHANGE THIS!

	    	if (basketValue < 50) {
	    		$("#AWA-standard-delivery").hide();
	    	} else if (basketValue >= 80) {
	    		$("#AWA-standard-delivery").html("FREE Next Day Delivery &nbsp;&nbsp;<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/04093ff5c08067f0f0690307c8942c80_image_copy.png'>");
	    	}


	    }




	    function toTitleCase(str) {
			return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}

	};

	// Run the experiment
	$(document).ready(function() {
		exp.init();
	});




	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);