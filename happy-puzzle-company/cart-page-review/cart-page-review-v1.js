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
	exp.log('Cart Page Review v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $('#ctl00_cphMasterOrder_imgbtnCreateAccount');

	// Check for a condition and return false if it has not been met

	// if (exp.condition && !exp.condition.length) {
	// 	exp.log('Guest Checkout failed a condition');
	// 	return false;
	// }


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		review: 	"<div id='AWA-review'>\
						<div id='AWA-review-heading'>Great company with unusual products</div>\
						<div><img id='AWA-review-stars' src='//useruploads.visualwebsiteoptimizer.com/useruploads/170831/images/f1046d7ee78543712d090f021dfbc6f8_stars.jpg'></div>\
						<div id='AWA-review-text'>Quickly despatched and great quality. Products help children to develop construction techniques in a fun way.</div>\
						<div id='AWA-review-author'>-Enid Heron</div>\
					</div>",
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-review {\
			float: left;\
			width: 36%;\
			padding: 8px 5px;\
		}\
		#AWA-review-heading {\
			font-weight: bold;\
			margin-bottom: 3px;\
		}\
		#AWA-review-stars {\
			width: 85px;\
		}\
		#AWA-review-text {\
			margin-top: 2px;\
		}\
		#AWA-review-author {\
			margin-top: 2px;\
		}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    /* IMPORT WINNING CHANGES FROM cart-page-MVT (combination 7) */
	    // Make checkout button link to the same postback as the "Go to secure checkout" button 
		$("#ctl00_ucHeader_aCheckout").attr('href', "javascript:__doPostBack('ctl00$cphInnerMaster$imgBtnCheckOut','')");
		// Make images 80px x 80px
	    $("img.basket_image").attr('style', 'width: 80px; height: 80px; max-width: 80px;');


	    // Insert review
	    $('#ctl00_cphInnerMaster_dvFreePostage').parent().before(exp.vars.review);

	};

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

	var condition = function() {
		return $("img.basket_image").length;
	};

	var callback = function() {
		// Run the experiment
		exp.init();
	};

	exp.waitFor(condition, callback, 10000);




	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);