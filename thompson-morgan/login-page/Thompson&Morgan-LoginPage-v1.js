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
	exp.log('Login Page - v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#new-customer");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Login Page failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		email: "<div id='AWA-email'>\
					<label>Your email address:</label>\
					<input id='AWA-email-text' type='text'>\
					<span id='AWA-tip'>used for order confirmation</span>\
					<button id='AWA-continue'>Continue</button>\
				</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.login-portlet h2 {\
		text-align: center;\
	}\
	#new-customer h2 {\
		text-align: center;\
	}\
	#AWA-tip {\
		display: block;\
		font-size: .9em;\
	}\
	.registration-portlet {\
		position: relative;\
	}\
	#AWA-or {\
		font-size: 2.5em;\
		color: #00572D;\
		text-align: center;\
		font-weight: 700;\
		width: 33px;\
		padding: 11px;\
		padding-top: 5px;\
		background-color: white;\
		left: 503px;\
		top: 60px;\
		position: absolute;\
	}\
	#AWA-continue {\
		border: none;\
		background-color: #B70819;\
		color: white;\
		padding: 5px;\
		width: 131px;\
		margin-left: 125px;\
		margin-top: 20px;\
	}\
	#AWA-manual {\
		margin-left: 124px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    /* --- LOGIN SIDE --- */
	    // Hide "Welcome back." and "*= required fields"
	    $("#login-customer p").hide();

	    // Remove existing "Forgot Your Password?" Text
	    if ($('.text.clearFloat').first().contents().eq(1).text() == "Forgot Your Password?") {
	    	// Needed for IE
	    	$('.text.clearFloat').first().contents().eq(1).replaceWith("");
	    } else {
	    	$('.text.clearFloat').first().contents().eq(2).replaceWith("");
	    }

	    // Change password reset link text
	    $(".quickLinks").text("Forgot Your Password?");

	    // Remove info help box
	    $(".login-helpsection").remove();


	    /* --- Border "OR" --- */
	    $("#new-customer").before("<div id='AWA-or'>or</div>");


	    /* --- FOOTER --- */
	    // Hide footer
	    $("#footer").find('ul').hide();


	    /* --- CHECKOUT SIDE --- */
	    // Change top text
	    $("#new-customer p:contains('To checkout')").attr('style', 'margin: 9px 0 0 53px;').text("You will have the option to create an account later.");
	    $("#new-customer p:contains('* =')").text("");



	    // Plug in email value
	    if (sessionStorage.getItem('AWA-email')) {
			$("#email").val(sessionStorage.getItem('AWA-email'));
	    }

	    // Uncheck subscriptions
		var tmOffers = $('.checkbox')[0];
		$(tmOffers).attr('style', 'background-position: 0px 0px');
		var tmOffersInput = $(tmOffers).next();
		$(tmOffersInput).attr('checked', false);

		var partnerOffers = $('.checkbox')[1];
		$(partnerOffers).attr('style', 'background-position: 0px 0px');
		var partnerOffersInput = $(partnerOffers).next();
		$(partnerOffersInput).attr('checked', false);
		
	    var middleForm = $(".userDetails").find('a[name=ADDRESS_FIELDS]').nextUntil('actions');
	    var subscriptions = $(".subscriptionTable");
	    var emailPhone = $("#country").parent().nextUntil(".actions");

	    // Main function control
	    var step = sessionStorage.getItem('step');
	    exp.log(step);
		switch (step) {
		    case null:
		        step1();
		        break;
		    case "2":
		        step2();
		        break;
		    case "3":
		        step3();
		        break;
		    case "4":
		        step4();
		        break;
		}


	    // Step 1 - Email Box
	    function step1() {
	    	exp.log('Running step 1');

	    	// Insert email box
		    $("#mainform").hide();
		    $("#mainform").before(exp.vars.email);

		   	// Event handler for Continue button
			$("#AWA-continue").click(function(e) {
				e.preventDefault();
				sessionStorage.setItem('AWA-email', $("#AWA-email-text").val());
				$("#mainform").show();
				$("#AWA-email").hide();

				sessionStorage.setItem('step', '2');
				step2();
			});
	    }

	    // Step 2 - 
	    function step2() {
	    	exp.log('Running step 2');

	    	middleForm.hide();
	    	subscriptions.hide();

	    	// Insert manual address entry link
	    	$(".userDetails").find('a[name=ADDRESS_FIELDS]').before("<div id='AWA-manual'><a id='AWA-manual-link' href='#'>Click here to enter address manually</a></div>");

	    	$("#AWA-manual-link").click(function(e) {
	    		e.preventDefault();
	    		$("#AWA-manual").hide();
	    		middleForm.show();
	    		emailPhone.hide();
	    	});

	    	$("#QASearch").click(function() {
	    		sessionStorage.setItem('step', '3');
	    	});

	    	$("#mainform").submit(function() {
	    		if ($("#postalCode").val().length) {
	    			sessionStorage.setItem('step', '3');
	    		}
	    	});



	    }

	    function step3() {
	    	exp.log('Running step 3');

	    	// Hide subscriptions
	    	subscriptions.hide();
	    	// Hide email and phone
	    	emailPhone.hide();

	    	$(".addressResult").click(function() {
	    		sessionStorage.setItem('step', '4');
	    	});

	    	$("#mainform").submit(function() {
	    		sessionStorage.setItem('step', '4');
	    	});

	    	$("#manualEntry").parent().html("Can't find your address? Enter manually here:");
	    }

	    function step4() {
	    	exp.log('Running step 4')
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

