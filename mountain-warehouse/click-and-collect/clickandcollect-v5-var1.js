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
	exp.log('Click and Collect - v5 - var1');

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
						<li class='AWA-line'>|</li>\
						<li class='AWA-2'>FREE NEXT DAY DELIVERY over &pound;80</li>\
						<li class='AWA-line'>|</li>\
						<li class='AWA-3'>CLICK & COLLECT<span class='AWA-to-stores'> to 186 stores nationwide</span></li>\
					</ul>\
					<ul id='AWA-banner2'>\
						<li class='AWA-1'><a href='#'>FREE DELIVERY<br>over &pound;50</a></li>\
						<li class='AWA-line'>|</li>\
						<li class='AWA-2'>FREE NEXT DAY<br>DELIVERY over &pound;80</li>\
						<li class='AWA-line'>|</li>\
						<li class='AWA-3'>CLICK &<br>COLLECT<span class='AWA-to-stores'> to 186 stores nationwide</span></li>\
					</ul>",
		sotreLocator: 	"<li class='level1 AWA-sl'><a href='http://www.mountainwarehouse.com/stores/'>Store Locator</a></li>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-banner {\
		text-align: justify;\
		margin: 0 23px;\
		height: 29px;\
	}\
	#AWA-banner li {\
		display: inline-block;\
	}\
	#AWA-banner:after {\
		content: \'\';\
		width: 100%;\
		display: inline-block;\
		box-sizing: content-box !important;\
		-webkit-box-sizing: content-box !important;\
	}\
	#AWA-banner2 {\
		display: none;\
	}\
	#menuBanner {\
		font-size: .90em;\
		font-weight: 300;\
		text-transform: none;\
	}\
	.AWA-sl {\
		float: right !important;\
	}\
	@media (max-width: 669px) {\
		#AWA-banner2 {\
			margin: 1px 19px;\
		}\
	}\
	@media (min-width: 519px) {\
		.red-strip {\
			margin-bottom: 5px;\
		}\
	}\
	@media (max-width: 1099px) {\
		#AWA-banner {\
			margin: 0 6px;\
		}\
	}\
	@media (max-width: 977px) {\
		.AWA-to-stores {\
			display: none !important;\
		}\
		#AWA-banner {\
			height: 22px;\
			margin: 0 30px;\
		}\
	}\
	@media (max-width: 840px) {\
		#AWA-banner {\
			margin: 0 15px;\
		}\
	}\
	@media (max-width: 669px) {\
		.AWA-line {\
			display: none !important;\
		}\
		#AWA-banner {\
			display: none;\
		}\
		#AWA-banner2 {\
			display: block;\
			height: 35px;\
			text-align: justify;\
		}\
		#AWA-banner2 li {\
			display: inline-block;\
		}\
		#AWA-banner2:after {\
			content: \'\';\
			width: 100%;\
			display: inline-block;\
			box-sizing: inherit;\
		}\
		.AWA-1, .AWA-2, .AWA-3 {\
			text-align: center;\
		}\
	}\
	@media (min-width: 649px) {\
		#AWA-banner2 {\
			height: 47px;\
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