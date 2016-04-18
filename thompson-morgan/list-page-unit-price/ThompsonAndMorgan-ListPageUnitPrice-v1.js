function() {
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
'use strict';
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
	exp.log('List Page Unit Price v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#268917436');

	// Check for a condition and return false if it has not been met
	if(exp.condition && !exp.condition.length) {
	    exp.log('List Page Unit Price failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-unit-price {\
		float: right;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Calculate Unit Price
	    $('.stockInfo').each(function() {
	    	var quantityText = $(this).find('.size').text();
	    	var quantity = quantityText.substring(0, quantityText.indexOf(' '));
	    	var price = $(this).find('.price').clone().children().remove().end().text();
	    	price = $.trim(price).substring(1);
	    	var unitPrice = (price / quantity).toFixed(2);

	    	// Only display unit price is there is more than 1 quantity
			if (quantity != 1) {
	    		$(this).find('.productInfoLeft').append("<br><span class='AWA-unit-price'>(£" + unitPrice + " each)</span>");
	    	}
	    });
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
}
