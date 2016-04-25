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
	exp.log('Hide Login v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#main_middle_container'); // Very inclusive

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
		exp.log('Test1 failed a condition');
		return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-category p {\
		width: 700px;\
		margin: 0 auto;\
		font-size: 14px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    /* --- DESKTOP --- */
	    // Hide login link at the top
	    jQuery(".no-auth.is-not-login").hide();
	    jQuery(".no-auth.divider").hide();

	    // Hide My Account in footer (includes "log in" and "my orders")
	    jQuery(".nav-footer--links").last().hide();


	    /* --- MOBILE --- */
	    // Hide main sign in
	    jQuery(".menu-info .no-auth").hide();

	    // Hide my account at the bottom
	    jQuery("#ui-accordion-accordion-mobile-header-2").hide();
	    jQuery("#ui-accordion-accordion-mobile-panel-2").hide();

	};

	// Run the experiment
	exp.init();


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);