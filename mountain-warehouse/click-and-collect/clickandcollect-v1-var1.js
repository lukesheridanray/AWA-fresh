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
	exp.log('Click and Collect - v1 - var1');

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
	// IE does not play nice with this conditioning in VWO, removing it for now

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		bannerText: "<ul id='AWA-banner'>\
						<li class='AWA-1'><a href='#'>FREE DELIVERY over &pound;50</a></li>\
						<li class='AWA-bar1'>|</li>\
						<li class='AWA-2'>FREE NEXT DAY DELIVERY over &pound;50</li>\
						<li class='AWA-bar2'>|</li>\
						<li class='AWA-3'>CLICK & COLLECT to 186 stores nationwide</li>\
					</ul>",
		sotreLocator: 	"<li class='level1 AWA-sl'><a href='http://www.mountainwarehouse.com/stores/'>Store Locator</a></li>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-bold {\
		font-weight: bold;\
	}\
	#AWA-special-text {\
		text-align: left;\
	}\
	#menuBanner {\
		font-size: .95em;\
		font-weight: 300;\
		text-transform: none;\
	}\
	#AWA-banner {\
		display: table;\
		width: 100%;\
		list-style: none;\
		margin: 0;\
	}\
	#AWA-banner li {\
		display: table-cell;\
		text-align: center;\
	}\
	.AWA-sl {\
		float: right !important;\
	}\
	@media (max-width: 830px) {\
		.AWA-3, .AWA-bar1, .AWA-bar2 {\
			display: none !important;\
		}\
	}\
	@media (max-width: 453px) {\
		.AWA-1, .AWA-2 {\
			display: list-item !important;\
			text-align: center !important;\
		}\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Change banner text
	    $("#menuBanner").find('div').html(exp.vars.bannerText);

	    // Add store locator link
	    $("li.level1.clearance-menu").after(exp.vars.sotreLocator);

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