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
	exp.log('Guest Checkout v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#ctl00_cphMasterOrder_imgbtnCreateAccount');

	// Check for a condition and return false if it has not been met

	// if (exp.condition && !exp.condition.length) {
	// 	exp.log('Guest Checkout failed a condition');
	// 	return false;
	// }


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		subheader: "<tr><td id='AWA-gc-text'>(Use our guest checkout)</td></tr>",
		topBoxes: 	"<div id='AWA-top-boxes'>\
						<div id='AWA-secure-payment'>\
							<img id='AWA-lock' src='//useruploads.visualwebsiteoptimizer.com/useruploads/170831/images/6ad69f3eef13b9725ced926c72224c36_locked_1.png'>\
							<p id='AWA-sp-p'>Secure Payment. Your details are safe and fully protected.</p>\
						</div>\
						<div id='AWA-trust-pilot'>\
							<p>Our customers rate us 9.1/10 on </p>\
							<img id='AWA-tp' src='//useruploads.visualwebsiteoptimizer.com/useruploads/170831/images/73d3257da45ea5ef6e6d997d5296d3f3_trustpilot-logo-design.png'>\
						</div><div style='clear: both;'></div>\
					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.basket_sign_in, .basket_sign_up {\
		height: 285px;\
	}\
	#AWA-gc-text {\
		position: relative;\
		top: -20px;\
	}\
	#AWA-top-boxes {\
		font-weight: bold;\
		font-size: 1.1em;\
		margin-bottom: 10px;\
	}\
	#AWA-lock {\
		width: 24px;\
		float: left;\
	}\
	#AWA-sp-p {\
		float: left;\
		margin-top: 10px;\
    	margin-left: 15px;\
	}\
	#AWA-secure-payment {\
		float: left;\
	}\
	#AWA-trust-pilot {\
		float: right;\
	}\
	#AWA-tp {\
		width: 133px;\
		position: relative;\
		top: -5px;\
	}\
	#AWA-trust-pilot p {\
		float: left;\
		margin: 10px 0 0 8px;\
	}\
	#AWA-secure-payment, #AWA-trust-pilot {\
		border: solid 1px #ccc;\
		width: 46.8%;\
		padding: 10px;\
		height: 35px;\
	}\
	.phone_number {\
		position: static;\
		clear: both;\
		padding-top: 10px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // 1) Moving the "Forgotten password?" to underneath the signin block
		$("a[href='/reset-password2.aspx']").attr('style', 'clear: both; float: right;');

		// 2) Adding in a subheader under the "New to the Happy puzzle Company" that reads "(Use our guest checkout)"
		$(".basket_signin_table").last().find('tr').first().after(exp.vars.subheader);

		// 3) Adding in messaging at the top of the page:
		$(".main_internal_box").before(exp.vars.topBoxes);

		// 4) The telephone details have been moved to the bottom of the page under the Continue button.
		var $phone = $(".phone_number")
		$(".main_action_detail_container").after($phone);

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
		return $("#ctl00_cphMasterOrder_imgbtnCreateAccount").length;
	}

	var callback = function() {
		// Run the experiment
		exp.init();
	}

	exp.waitFor(condition, callback, 10000);




	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);