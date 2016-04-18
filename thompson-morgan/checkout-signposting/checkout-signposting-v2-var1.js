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
	exp.log('Checkout Signposting - v2 -var1!');



	// The Search page naturally does not expose cart information so we can't run this script there
	if ($("#LIKEfacetResults").length) {
	    exp.log('Checkout Signposting failed a condition');
	    return;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		numItems: $("#basket").text().match(/\d+/)[0],
		cartValue: $("#basket").find('span').first().text(),
		newBasket: 	"<div class=''>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-csp-info, #AWA-mini-content {\
			float: right;\
			width: 126px;\
			text-align: left;\
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
			clear: both;\
		}\
		#AWA-csp-checkout:hover {\
			text-decoration: none;\
			background-color: #345E2E;\
			border-bottom: 0 !important;\
		}\
		#cart-content .mini-basket {\
			background-position: 62px bottom;\
			height: 38px;\
		}\
	';

	// This function waits till a condition returns true
	exp.waitFor = function(condition, callback, timeout, keepAlive) {
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

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		var oneItem = false;
		if (exp.vars.numItems === "1") {
			oneItem = true;
		}

		// Add in new basket lines
		$("#headerBasket").find("li").append("<div id='AWA-csp-info'></div>");
		if (oneItem) {
			$("#AWA-csp-info").append("<div class='AWA-csp-line-1'><span class='AWA-csp-num-products'>" + exp.vars.numItems + "</span> item in your basket</div>");
		} else {
		$("#AWA-csp-info").append("<div class='AWA-csp-line-1'><span class='AWA-csp-num-products'>" + exp.vars.numItems + "</span> items in your basket</div>");
		}
		$("#AWA-csp-info").append("<div class='AWA-csp-line-2'><span class='AWA-csp-cart-value'>" + exp.vars.cartValue + "</span></div>");

		// Copy new basket for mini cart
		var newBasketClone = $("#AWA-csp-info").clone();

		// Hide unwrapped items
		$('#basket').contents().filter(function() {
		    return this.nodeType === 3;
		}).each(function() {
		    this.nodeValue = $.trim(this.nodeValue);
		}).wrap('<p class="AWA-basket-unwrapped"></p>');
		$("#basket").find(".AWA-basket-unwrapped").first().nextUntil("#cart-content").hide();

		// Move new basket to the top
		$("#basket").prepend($("#AWA-csp-info"));

		// Build new mini cart
		$(".mini-basket.mini-basket.floatRight").last().html("<div id='AWA-mini-content'>" + newBasketClone.html() + "</div>");

		// Add in Checkout button
		$("#headerBasket").find("li").append("<a id='AWA-csp-checkout' href='http://www.thompson-morgan.com/basket'>Checkout</a>");

		// Hide checkout button if there's nothing in the basket
		if (!universal_variable.basket) {
			$("#AWA-csp-checkout").hide();
		} else { // Move search autocomplete down
			$('head').append('<style type="text/css">.autocomplete {top: 158px !important;}</style>');
		}

	};

	// Run the experiment
	exp.waitFor(function() { return $(".mini-bottom-section").length}, exp.init);

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

