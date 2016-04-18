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
	exp.log('Navigation v1');

	
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	//exp.condition = $('.row.homepage-hero');

	// Check for a condition and return false if it has not been met
	// if(exp.condition && !exp.condition.length) {
	//     exp.log('Course Selection failed a condition');
	//     return false;
	// }

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.navbar-toggle {\
		background-color: #e27004;\
		padding-bottom: 4px;\
	}\
	.navbar-toggle .icon-bar {\
		width: 31px;\
	}\
	#AWA-burger {\
		color: white;\
		font-size: .85em;\
	}\
	@media (max-width: 7689px) and (min-width: 990px) {\
		.navbar-nav {\
	    	width: 870px;\
	    	margin: 0 auto;\
	    }\
		.navbar-nav>li {\
		    font-size: 14px !important;\
		}\
	}\
	@media (min-width: 768px) {\
		.navbar-nav>li {\
		    float: none;\
		    font-size: 12px;\
		    display: inline-block;\
		}\
		.navbar.navbar-default {\
			text-align: center;\
		}\
		.collapse {\
			display: block;\
		}\
		.navbar-toggle {\
			display: none;\
		}\
		.basket.visible-xs {\
			display: none !important;\
		}\
		#basket {\
			display: block !important;\
		}\
	}\
	';

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

	    // Remove Home and Hub links
	    $("#nav_home, #nav_hub").parent().hide();

	    // Change "Support" title in footer to "About"
	    $(".footer h2:contains('Support')").text("About");

	    // Hide "About Us" and "Reviews" and move to footer
	    $("#nav_reviews, #nav_about").parent().hide();
	    $(".footer h2:contains('About')").after("<a href='https://www.highspeedtraining.co.uk/reviews/' title='Reviews'>Reviews</a>").after("<a href='https://www.highspeedtraining.co.uk/about-us/' title='About High Speed Training'>About Us</a>");

	    // Change "Training Teams" text and make bold
	    $("#nav_training").text("Team Training");

	    // Add "Menu" to burger menu icon
	    $(".nav-band .icon-bar").last().after("<span id='AWA-burger'>Menu</span>");

	    // Add "View all Hub articles" link in footer
	    $(".footer h2:contains('Latest Hub Articles')").after('<a href="http://www.highspeedtraining.co.uk/hub/">View all Hub articles');



	};

	// Run the experiment
	exp.func.waitFor(function(){return $("#nav_about").length;}, exp.init);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

