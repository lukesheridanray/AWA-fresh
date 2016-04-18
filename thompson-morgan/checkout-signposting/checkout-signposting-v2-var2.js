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
	exp.log('Checkout Signposting - v2 - var2');



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
		#AWA-csp-info, #AWA-mini-content {\
			float: right;\
			text-align: left;\
		}\
		 #AWA-mini-content {\
		 	margin: 2px 0 0 0;\
		 }\
		#AWA-csp-info {\
			border: solid 1px black;\
			width: 180px;\
			margin-right: -10px;\
			background-image: url(http://dd6zx4ibq538k.cloudfront.net/static/images/2841/d5d754bda8cfc551fa859d244f857b68_23_22.png);\
			background-repeat: no-repeat;\
			background-position: 9px;\
		}\
		.AWA-csp-line-1, .AWA-csp-line-2 {\
		    width: 138px;\
		    float: right;\
		}\
		.AWA-csp-co {\
			margin-left: 23px;\
		}\
		.AWA-csp-co a {\
			text-decoration: underline;\
		}\
		.AWA-csp-co a:hover {\
			border: 0 !important;\
			text-decoration: none;\
		}\
		#cart-content .mini-basket {\
			background-image: url(http://dd6zx4ibq538k.cloudfront.net/static/images/2841/d5d754bda8cfc551fa859d244f857b68_23_22.png) !important;\
			background-repeat: no-repeat;\
			background-position: 8px 10px;\
			padding-top: 0;\
			width: 179px;\
			height: 38px;\
			padding-right: 0;\
		}\
		#cart-content {\
			top: 25px;\
			right: -10px;\
		}\
		.mini-top-section {\
			background-image: none !important;\
			height: 5px;\
		}\
		#cart-content {\
			width: 180px;\
			border: solid 1px black;\
			background-color: white;\
		}\
		.mini-middle-section {\
			background-image: none !important;\
		}\
		.mini-middle-section-gradient {\
			background-image: none !important;\
			width: 168px;\
			padding-left: 5px;\
			padding-right: 5px;\
			margin-left: 0;\
			margin-right: 0;\
		}\
		.mini-bottom-section {\
			background-image: none !important;\
		}\
		.mini-middle-section .miniBasketEntry img {\
			width: 40px;\
		}\
		.miniBasketEntry {\
			width: inherit;\
			padding-bottom: 0;\
		}\
		.miniBasketDescription {\
			width: 121px;\
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

		// Remove cart image
		$("#headerBasket").find("li").attr("style", "background-image: none;");

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
		$("#AWA-csp-info").append("<div class='AWA-csp-line-2'><span class='AWA-csp-cart-value'>" + exp.vars.cartValue + "</span><span class='AWA-csp-co'><a href='http://www.thompson-morgan.com/basket'>checkout</a></span></div>");

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


		// Hide checkout button if there's nothing in the basket
		if (!universal_variable.basket) {
			$(".AWA-csp-co").hide();
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

