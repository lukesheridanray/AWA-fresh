function() {
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
	exp.log('Catalogue v7');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#header-portlet");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Catalogue failed a condition');
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		instructions: 	"<ul id='AWA-catalogue-instructions'>\
							<li style='text-decoration: underline;'>How to use the catalogue:<li>\
							<li>Click on the single arrow to turn one page.</li>\
							<li>To zoom in, double click on the product description text. To zoom back out, double click in the same place.</li>\
							<li>To view a product on our website, or to buy that product, click on the product image. It will open in a new browser tab.</li>\
							<li><p class='AWA-ins'>Click on the </p><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/12bc9d8e886702aed425ea9f72a5dd3b_28_28.png'> <p class='AWA-ins'>button to see thumbnails of all pages. Click on any thumbnail to advance to that page.</p></li>\
						</ul>",
		catalogueLink: "<div id='AWA-catalogue'><a id='AWA-catalogue-link' href='http://www.thompson-morgan.com/ecatalogue'>View our catalogue</a></div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-catalogue-instructions {\
		margin-bottom: 15px;\
	}\
	#AWA-catalogue {\
		clear: both;\
		float: left;\
		width: 300px;\
		margin-top: 20px;\
		padding-left: 13px;\
	}\
	#AWA-catalogue a {\
		text-decoration: underline;\
	}\
	#AWA-catalogue-instructions li:last-child {\
		margin-top: 5px;\
	}\
	.AWA-ins {\
		display: inline-block;\
		float: left;\
	}\
	#AWA-catalogue-instructions img {\
		display: block;\
		float: left;\
		margin: 6px;\
		margin-top: -4px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>')

		// Insert catalogue link
		$("#headerNav").after(exp.vars.catalogueLink);


		// Insert catalogue on ecatalogue page
		if (window.location.pathname == "/ecatalogue") {
			// Insert catalogue
			$("#12250136").after('<iframe style="width:960px; height:675px" src="http://online.pubhtml5.com/xljx/ctuo/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>');

			// Remove heading text and ">"
			$("h1:contains('Welcome to the new')").hide();
			$("#breadcrumbs").hide();

			// Hide current "Instructions for use"
			$("h1:contains('Welcome to the new')").next().hide();

			// Hide current "Instructions for use"
			$("h1:contains('Welcome to the new')").next().after(exp.vars.instructions);

			// Hide black spacing div
			$("#18539692").hide();


		}

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
}

