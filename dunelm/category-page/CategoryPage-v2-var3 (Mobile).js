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
	exp.log('Category Page v2 - var3 (Mobile)');

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
		mobileContainer: 	"<div id='AWA-mobile-container' class='AWA-m'>\
								<img id='AWA-mobile-hero' src='http://images.dunelm.com/i/dm/furniture_08_bedroom_furn_wk22.jpg?qlt=70'>\
								<ul id='AWA-mobile-categories'>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture'>Bedroom Furniture</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture'>Living Room Furniture</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs'>Sofas & Chairs</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture'>Dining Room Furniture</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/beds--bedsteads-and-mattresses'>Beds, Bedsteads and Mattresses</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/office-furniture'>Office Furniture</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/storage-furniture'>Storage Furniture</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/shop-by-finish'>Shop by Finish</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/garden-and-conservatory-furniture-34276--1'>Garden and Conservatory Furniture</a></li>\
									<li><a href='http://www.dunelm.com/category/home-and-furniture/furniture/furniture-offers-43509--1'>Furniture Offers</a></li>\
								</ul>\
							</div>",
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-mobile-hero {\
		width: 100%;\
	}\
	#AWA-mobile-categories {\
		margin-top: 15px;\
	}\
	#AWA-mobile-categories li {\
		display: block;\
		width: 100%;\
		font-size: 16px;\
		font-weight: 700;\
		background: #f6f6f6;\
    	border: 1px solid #cfcfcf;\
    	margin-bottom: 5px;\
	}\
	#AWA-mobile-categories li a {\
		display: block;\
		padding: .950em;\
	}\
	#AWA-mobile-categories li a:after {\
		font-family: icomoon;\
		speak: none;\
		font-weight: 400;\
		font-variant: normal;\
		text-transform: none;\
		line-height: 1;\
		-webkit-font-smoothing: antialiased;\
		transform: scaleX(-1);\
		position: absolute;\
		content: \'\\E00B\';\
		color: #3f9c35;\
		right: 1.625em;\
	}\
    @media all and (max-width: 650px) {\
        .AWA-m-hidden {\
            display: none;\
        }\
    }\
    @media all and (min-width: 651px) {\
        .AWA-m {\
            display: none;\
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
		$('head').append('<style type="text/css">'+exp.css+'</style>');
		
		// Add custom class to main wrapper so it can be hidden via CSS
		$(".category__main__wrap").addClass("AWA-m-hidden");

		// Add mobile container
		$(".category__main__wrap").after(exp.vars.mobileContainer);

		// When "Recently view items" loads it shows the whole main content of the page again. Weed need to check for the presence of this and reapply the hidden class
		exp.func.waitFor(function(){ return $(".rr__recently-viewed--wrap").is(":visible") }, function() { $(".category__content").addClass("AWA-m-hidden"); $(".rr__recently-viewed--wrap").attr('style', 'display: none !important;'); }, 1000);

	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $("#espot_catpg_flexible_10651").length }, exp.init, 1000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
