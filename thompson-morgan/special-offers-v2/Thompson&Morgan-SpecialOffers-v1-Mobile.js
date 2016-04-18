//function() {
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
	exp.log('Special Offers - v1 - Mobile');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#12250136");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Special Offers Mobile failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		banner: 	"<img id='AWA-offer-banner' src='http://www.thompson-morgan.com/static-images/tandm/offer-of-the-week/best-selling-offers-special.jpg'>",
		mobileWrapper: 	"<div id='AWA-mobile-wrapper'>\
							<img id='AWA-offer-banner' src='http://www.thompson-morgan.com/static-images/tandm/offer-of-the-week/best-selling-offers-special.jpg'>\
							<ul id='AWA-offers-list'>\
								<li><a href='http://www.thompson-morgan.com/flower-bulb-sale'>This week's best selling offers</a></li>\
								<li><a href='http://www.thompson-morgan.com/instant-gardening-range'>Instant Gardening Range - Buy 4, Pay for 3</a></li>\
								<li><a href='http://www.thompson-morgan.com/garden-ready-plants'>Buy 2 Packs of Garden Ready Plants for just &pound;25</a></li>\
								<li><a href='http://www.thompson-morgan.com/pre-planted-pots-and-baskets-winter'>Buy any 2 pre-planted pots and baskets for just &pound;24.99</a></li>\
								<li><a href='http://www.thompson-morgan.com/sale-plant-offers'>Autumn Sale now on!</a></li>\
								<li><a href='http://www.thompson-morgan.com/autumn-planting-bulbs-inspiration'>4 for 3 on Autumn planting bulbs</a></li>\
								<li><a href='http://www.thompson-morgan.com/value-seed-varieties'>Great value seeds - Over 240 seed varieties 99p or under</a></li>\
								<li><a href='http://www.thompson-morgan.com/5for4-seed-offer'>Buy 4 packets of seed get the 5th free!</a></li>\
								<li><a href='http://www.thompson-morgan.com/fruit/fruit-plants/raspberry-plants/raspberry-full-season-collection/cww3211TM'>Raspberry 'Full Season' Collection - Save up to &pound;19.98</a></li>\
								<li><a href='http://www.thompson-morgan.com/fruit/fruit-plants/blueberry-plants/blueberry-full-season-collection/cww3308TM'>Blueberry 'Full Season' Collection - Save up to &pound;33.98</a></li>\
								<li><a href='http://www.thompson-morgan.com/fruit/fruit-plants/strawberry-plants/strawberry-extend-the-season-collection/cww3188TM'>Blueberry 'Full Season' Collection - Save up to &pound;9.98</a></li>\
								<li><a href='http://www.thompson-morgan.com/vegetables/potatoes/second-early/potato-jazzy/t56501TM'>Potato 'Jazzy' Collection - Just &pound;12.99</a></li>\
								<li><a href='http://www.thompson-morgan.com/chempak-fertiliser-offer'>Chempak Fertiliser - 3 for 2</a></li>\
								<li><a href='http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-incredibloom/t47963TM'>Incredibloom - From just &pound;4.99</a></li>\
								<li><a href='http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/easy-fill-basket/t47549TM'>Easy Fill Hanging Baskets - From just &pound;14.99</a></li>\
							</ul>\
						</div>"
	}

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-offer-banner {\
		width: 100%;\
	}\
	#AWA-offers-list li {\
		width: 100%;\
		border: solid 1px gray;\
	}\
	#AWA-offers-list li a {\
	    font-size: 3.2em !important;\
	    line-height: 1.5em;\
	    padding: 3%;\
	    display: block;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

		$("#12250136").hide();

		$("#12250136").before(exp.vars.mobileWrapper);


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

