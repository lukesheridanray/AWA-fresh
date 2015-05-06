//function () {
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
		exp.log('Mega Menus - 1.0 (var 1)');

		/*
		// Condition
		// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
		exp.condition = $('.unique-selector');
		*/
		exp.condition = $('.mega-menu');

		// Check for a condition and return false if it has not been met
		if(exp.condition && !exp.condition.length) {
		    exp.log('Mega Menus Experiment failed a condition');
		    return false;
		}

		// Variables
		// Object containing variables, generally these would be strings or jQuery objects
		exp.vars = {
		};

		// Styles
		// String containing the CSS for the experiment
		// exp.css = '\
		// .newD {\
		//     color: #00572D !important; font-weight: bold\
		// }\
		// .newList {\
		//     margin-left: 19px; margin-top: 10px; margin-bottom: 10px;\
		// }\
		// .stockInfo {\
		//     float: left; margin-left: 95px;\
		// }\
		// .facetDescription {\
		//     width: 462px\
		// }';

		// Functions
		// Object containing functions, some helpful functions are included
		exp.func = {};

		// Init function
		// Called to run the actual experiment, DOM manipulation, event listeners, etc
		exp.init = function() {
		    // Append style to head
		    //$('head').append('<style type="text/css">'+this.css+'</style>');

		    // Remove submenus
		    $('.dropdown-menu').remove();

		    // Remove arrows
		    $('.mobile-icon-hide').remove();
		};

		// Run the experiment
		exp.init();

		// Return the experiment object so we can access it later if required
		return exp;

		// Close the IIFE, passing in jQuery and any other global variables as required
		// if jQuery is not already used on the site use optimizely.$ instead
	})(jQuery);
//}