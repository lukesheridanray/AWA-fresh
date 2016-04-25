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
	exp.log('Checkout Signposting - v1 - var2');



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
		#AWA-csp-info {\
			border: solid 1px black;\
			width: 180px;\
			margin-right: -10px;\
			background-image: url(http://dd6zx4ibq538k.cloudfront.net/static/images/2841/d5d754bda8cfc551fa859d244f857b68_23_22.png);\
			background-repeat: no-repeat;\
			background-position: 9px;\
		}\
		#AWA-csp-line-1, #AWA-csp-line-2 {\
			margin-left: 46px;\
		}\
		#AWA-csp-co {\
			margin-left: 23px;\
		}\
		#AWA-csp-co a {\
			text-decoration: underline;\
		}\
		#AWA-csp-co a:hover {\
			border: 0 !important;\
			text-decoration: none;\
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

		// Remove cart image
		$("#headerBasket").find("li").attr("style", "background-image: none;");



		// Add in new basket lines
		$("#headerBasket").find("li").append("<div id='AWA-csp-info'></div>");
		$("#AWA-csp-info").append("<div id='AWA-csp-line-1'><span id='AWA-csp-num-products'>" + exp.vars.numItems + "</span> items in your basket</div>");
		$("#AWA-csp-info").append("<div id='AWA-csp-line-2'><span id='AWA-csp-cart-value'>" + exp.vars.cartValue + "</span><span id='AWA-csp-co'><a href='http://www.thompson-morgan.com/basket'>checkout</a></span></div>");

		// Hide existing basket info
		$("#basket").hide();

		// Hide checkout button if there's nothing in the basket
		if (!universal_variable.basket) {
			$("#AWA-csp-co").hide();
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

