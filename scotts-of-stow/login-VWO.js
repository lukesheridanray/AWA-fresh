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


var exp = (function(vwo_$) {

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
	exp.log('Login v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = vwo_$("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		popup: 	"<div id='AWA-popup'>\
					<a id='AWA-close' href='#'>Close</a>\
					<div class='AWA-error-first'>\
						Sorry - we can't find your details\
					</div>\
					<div class='AWA-error-details'>\
						<div class='AWA-error-title'>\
							Email address\
						</div>\
						<p>\
							Is your email address correct? The email address you need to enter is the one you used when you first shopped with Scotts. If you have changed your email address since then, you need to type in your old one. If you would like to go back and try a different email address then <a id='AWA-text-close' href='#'>Click here</a>\
						<p>\
						<p id='AWA-dont-worry'>\
							Don't worry we'll still continue to use your most recent email address to contact you.\
						</p>\
					</div>\
					<div class='AWA-error-details'>\
						<div class='AWA-error-title'>\
							Password\
						</div>\
						<p>\
							Is your password correct? If you can't remember it, then don't worry. It's easy to reset and choose a new one. Just <a href='http://www.scottsofstow.co.uk/webapp/wcs/stores/servlet/ResetPasswordGuestErrorView?state=forgetpassword&catalogId=22051&langId=-1&storeId=10551'>Click here</a>\
						</p>\
					</div>\
					<div class='AWA-error-details'>\
						<div class='AWA-error-title'>\
							Still now working?\
						</div>\
						<p>\
							If you have tried these buy we still can't find your details then please get in touch and we'll help you. You can call us on 0344 482 4500 or to email us, <a href='http://www.scottsofstow.co.uk/webapp/wcs/stores/servlet/Info_22051_contact-us_-1_10551#sectionemail'>Click here</a> and select 'Website/Logging In Issues'.\
						</p>\
					</div>\
				</div>"
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-popup {\
		display: none;\
		border: solid 1px black;\
		position: fixed;\
		width: 540px;\
		top: 25%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		background-color: white;\
		padding: 25px;\
	}\
	#AWA-popup a {\
		text-decoration: underline;\
	}\
	#AWA-close {\
		display: block;\
		float: right;\
	}\
	.AWA-error-first {\
		font-size: 1.5em;\
		margin: 20px 0 20px 0;\
	}\
	.AWA-error-details {\
		clear: both;\
		margin-bottom: 32px;\
	}\
	.AWA-error-title {\
		font-weight: bold;\
		font-size: 1.14em;\
	}\
	#AWA-dont-worry {\
		font-weight: bold;\
		margin-top: 13px;\
	}\
	#AWA-first a.btn_apply:hover {\
	    text-decoration: none;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    vwo_$('head').append('<style type="text/css">'+this.css+'</style>');

		// Attach popup and show/hide functionality
		vwo_$('<div id="__msg_overlay">').css({
		      "width" : "100%"
		    , "height" : "100%"
		    , "background" : "#000"
		    , "position" : "fixed"
		    , "top" : "0"
		    , "left" : "0"
		    , "zIndex" : "150"
		    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
		    , "filter" : "alpha(opacity=60)"
		    , "MozOpacity" : 0.6
		    , "KhtmlOpacity" : 0.6
		    , "opacity" : 0.6
		}).appendTo(document.body);
		vwo_$('body').append(exp.vars.popup);
		vwo_$('#__msg_overlay').hide();
		vwo_$('#AWA-close, #AWA-text-close').click(function(e) {
			e.preventDefault();
			vwo_$('#AWA-popup').hide();
			vwo_$('#__msg_overlay').hide();
		});




	    vwo_$("#footer #footer_brands #security_proposition").attr('style', 'width: 126px !important; margin-top: 42px; padding-left: 10px;');
	    vwo_$("#security_proposition img").attr('style', 'margin-top: 6px; height: auto; width: 50px;');
	    vwo_$("#pay_using img").attr('style', 'height: auto; width: 50px;');
	    vwo_$("#pay_using").attr('style', 'margin-top: 42px;');
	    vwo_$("#footer #footer_brands").attr('style', 'overflow: auto; width: 414px !important;');

	    vwo_$("#WC_AccountDisplay_div_4").html('Shopped with us before?<div class="note_welcome_secure">Please fill in the email address you used when you first shopped with us. (If you now have a new email address, then please still use your old one here).</div>');
	    vwo_$('label:contains("Username:")').hide();
	    vwo_$(".sign_in_registration .head_sign_section").attr('style', 'padding-bottom: 7px;');

	    vwo_$('.sign_in_registration .align_sign .clear_fields label:contains("Password:")').attr('style', 'float: none;');

	    vwo_$(".clear_fields:contains('Password')").after('<div class="AWA-pass-link">Forgotten your password? <a href="http://www.scottsofstow.co.uk/webapp/wcs/stores/servlet/ResetPasswordGuestErrorView?state=forgetpassword&catalogId=22051&langId=-1&storeId=10551">Click here</a></div>');

	    vwo_$(".clear_fields:contains('Password')").attr('style', 'margin-top: 8px;');
	    vwo_$(".AWA-pass-link").attr('style', 'padding-right: 16px; margin-bottom: 20px; padding-top: 5px; clear: both;');

	    vwo_$(".forgot_please_note").hide();
	    vwo_$("p:contains('Forgotten Your Password?')").hide();
	    vwo_$(".clear_fields_continue").first().attr('style', 'margin-left: 100px;');


		vwo_$("#WC_AccountDisplay_div_19").append("<div id='AWA-first'><p>Your first online shop with Scotts?</p><div id='AWA-continue'><a class='btn_apply' href='#'>Continue</a></div></div>");
		vwo_$("#AWA-first p").attr('style', 'color: #666; font-size: 14px; font-weight: bold; margin-bottom: 15px; text-align: right;');
		vwo_$("#AWA-continue").attr('style', 'color: #666; font-size: 14px; font-weight: bold; margin-bottom: 15px; float: right; margin-right: 63px;');

		vwo_$("#WC_AccountDisplay_div_3").attr('style', 'width: 420px;');
		vwo_$("#WC_AccountDisplay_div_19").attr('style', 'width: 329px; padding-left: 20px; float: right;');

		// Add dividing line
		vwo_$("#WC_AccountDisplay_div_3").after("<div style='border-right: solid 2px darkgray; height: 199px; float: left;'></div>");

		// Hide existing right side
		vwo_$("#WC_AccountDisplay_div_20").hide();
		vwo_$("#WC_AccountDisplay_div_22").hide();

		// Hide footer
		vwo_$("#WC_ContentAreaESpot_div_1_37608").hide();

		// Add grouped payment logos image
		vwo_$("#footer_brands").after("<div id='AWA-payment' style='text-align: center; padding-right: 16px;'><img src='//useruploads.visualwebsiteoptimizer.com/useruploads/79546/images/e84e00bc2a29b42f8643f995f7471f78_paymentlogos.jpg'></div>");

		// Hide old payment divs which are too difficult to align for all devices
		vwo_$("#footer_brands").hide()


		// Show old right side when new Continue button is clicked
		vwo_$("#AWA-continue").click(function(e) {
			e.preventDefault();
			vwo_$("#AWA-first").fadeOut(function() {
				vwo_$("#WC_AccountDisplay_div_20").fadeIn(200);
				vwo_$("#WC_AccountDisplay_div_22").fadeIn(200);	
			});
		});

		// Detect error message and show modal
		if (vwo_$("#logonErrorMessage").length) {
			// Hide old error message
			vwo_$("#logonErrorMessage").hide();
			vwo_$(".divErrorPage").hide();

			// Show new error modal
			vwo_$('#AWA-popup').show();
			vwo_$('#__msg_overlay').show();
		}
	};

	// Run the experiment
	vwo_$(document).ready(function() {
		var checkExist = setInterval(function() {
		 	if (vwo_$("p:contains('Forgotten Your Password?')").length) {
		 		exp.init();
		 		clearInterval(checkExist);
			}
		}, 100); 
	});


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(vwo_$);
