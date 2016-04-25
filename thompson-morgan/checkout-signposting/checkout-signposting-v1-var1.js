//function() {
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
	var exp = {
	};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Checkout Signposting - v1 - var1');



	// The Search page naturally does not expose cart information so we can't run this script there
	if ($("#LIKEfacetResults").length) {
	    exp.log('Checkout Signposting failed a condition');
	    return;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		numItems: $("#basket").text().match(/\d+/)[0],
		cartValue: $("#basket").find('span').first().text()
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-csp-info {\
			float: right;\
		}\
		#headerBasket li {\
		    background-position: 192px 20px;\
		}\
		#AWA-csp-checkout {\
			background-color: #B60718;\
			color: white !important;\
			display: block;\
			padding: 6px 29px;\
			float: right;\
			margin-top: 5px;\
			font-size: 14px;\
			position: absolute;\
		}\
		#AWA-csp-checkout:hover {\
			text-decoration: none;\
			background-color: #345E2E;\
			border-bottom: 0 !important;\
		}\
	';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Remove cart hover-over
		$("#cart-content").remove();

		// Add in new basket lines
		$("#headerBasket").find("li").append("<div id='AWA-csp-info'></div>");
		$("#AWA-csp-info").append("<div id='AWA-csp-line-1'><span id='AWA-csp-num-products'>" + exp.vars.numItems + "</span> items in your basket</div>");
		$("#AWA-csp-info").append("<div id='AWA-csp-line-2'><span id='AWA-csp-cart-value'>" + exp.vars.cartValue + "</span></div>");

		// Hide existing basket info
		$("#basket").hide();

		// Add in Checkout button
		$("#AWA-csp-info").append("<a id='AWA-csp-checkout' href='http://www.thompson-morgan.com/basket'>Checkout</a>");

		// Hide checkout button if there's nothing in the basket
		if (!universal_variable.basket) {
			$("#AWA-csp-checkout").hide();
		}

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

