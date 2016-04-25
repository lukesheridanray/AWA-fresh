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
	exp.log('Special Offers - v2- var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#12250136");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Special Offers failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		specialOffersLink: 	"<div id='AWA-newspaper'>\
								<img width='20' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/2d3e1dba8d9de4908f8af924f05fc569_122_84.png'>\
								<a href='#' id='AWA-newspaper-link'>Looking for an offer seen in a newspaper or magazine?</a>\
							</div>",
		popup: 	"<div id='AWA-popup'>\
					<img id='AWA-close' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/23bba644572e57b9011eabd4a40d1ddd_478_477.png'>\
					<div id='AWA-close-text'>Close</div>\
					<h1>Looking for an offer seen in a newspaper or magazine?</h1>\
					<div id='AWA-dont-have'>\
						<p><img id='AWA-info' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/d4c6de0ed96941f8cd1179455b1e63fc_97_97.png'>Don't have an offer?</p>\
						<p id='AWA-special'><a href='http://www.thompson-morgan.com/web-special-offers'>Here's something</a><br>special for you!</p>\
					</div>\
					<div id='AWA-offer-step1'>\
						<img id='AWA-1' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/395983ec383c77fe9d810e25ec82f3ef_69_69.png'>\
						<p id='AWA-find'>Find the order code at the bottom of the advertisement,<br>as in the example below</p>\
					</div>\
					<img id='AWA-offer-image' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/b87da0ef2e05b2c2e68d5673d586f95b_1086_220.png'>\
					<div id='AWA-offer-step2'>\
						<img id='AWA-2' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/deb5122c38ea11bea8e99aa2f3604ebb_69_69.png'>\
						<p id='AWA-enter'>Enter the code in this box:<br>(TM123 in the example)</p>\
						<input type='text' id='AWA-code-input'>\
						<button id='AWA-show-offer'>Show Offer</button>\
				</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-popup {\
		display: none;\
		border: solid 1px black;\
		position: fixed;\
		width: 1086px;\
		top: 25%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		background-color: white;\
		padding: 15px;\
	}\
	#AWA-close {\
		width: 23px;\
		float: right;\
		cursor: pointer;\
	}\
	#AWA-close-text {\
	    width: 46px;\
	    font-size: 1.2em;\
	    float: right;\
	    margin-top: 3px;\
	}\
	#AWA-newspaper {\
		margin-bottom: 16px;\
		margin-top: 24px;\
	}\
	#AWA-newspaper-link {\
		font-size: 17px;\
		color: black !important;\
		text-decoration: none !important;\
		margin-left: 10px;\
	}\
	#AWA-popup h1 {\
		font-size: 32px;\
		text-align: center;\
		margin-top: 18px;\
	}\
	#AWA-dont-have {\
		width: 173px;\
		margin-top: 24px;\
		margin-right: 5px;\
		float: right;\
		font-size: 1.2em;\
		font-weight: 600;\
		padding: 12px;\
		background-color: #AEC115;\
	}\
	#AWA-dont-have a {\
		font-size: 1em;\
		color: white !important;\
	}\
	#AWA-dont-have p {\
		color: white !important;\
	}\
	#AWA-info {\
		vertical-align: middle;\
		width: 18px;\
		margin-right: 9px;\
	}\
	#AWA-special {\
		margin: 5px 0 0 35px;\
	}\
	#AWA-offer-step1 {\
		margin-top: 69px;\
		font-size: 16px;\
		width: 475px;\
		height: 70px;\
		margin-left: 176px;\
	}\
	#AWA-1, #AWA-2 {\
		float: left;\
		width: 40px;\
		margin-right: 20px;\
	}\
	#AWA-find, #AWA-enter {\
		float: left;\
		margin-top: 2px;\
	}\
	#AWA-offer-step2 {\
		clear: both;\
		font-size: 16px;\
		width: 693px;\
		height: 70px;\
		margin-left: 176px;\
		margin-top: -10px;\
	}\
	#AWA-code-input {\
		margin-left: 29px;\
		font-size: 20px;\
		width: 200px;\
		margin-top: 6px;\
		border: solid 1px black;\
		float: left;\
	}\
	#AWA-show-offer {\
		float: left;\
		display: block;\
		color: white;\
		border: 0;\
		padding: 7px;\
		margin-top: 5px;\
		font-size: 16px;\
		background-color: #345E2E;\
		margin-left: 10px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Insert popup link after submenu
	    $(".templateOneColumn").first().find('p').first().after(exp.vars.specialOffersLink);

		// Attach popup and show/hide functionality
		$('<div id="__msg_overlay">').css({
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
		$('body').append(exp.vars.popup);
		$('#__msg_overlay').hide();
		$('#AWA-newspaper-link').click(function(e) {
			e.preventDefault();
			$('#AWA-popup').show();
			$('#__msg_overlay').show();
		});
		$('#AWA-close').click(function(e) {
			e.preventDefault();
			$('#AWA-popup').hide();
			$('#__msg_overlay').hide();
		});

		// Event handler for Show Offer button
		$("#AWA-show-offer").click(function() {
			var defaultTarget = "http://www.thompson-morgan.com/";
			var input = $("#AWA-code-input").val();
			var newTarget = defaultTarget + input;
			window.location.href = newTarget;
		});
		// Trigger same event if enter is pressed in text box
		$("#AWA-code-input").keyup(function(e) {
        	if (e.keyCode === 13) {
            	$("#AWA-show-offer").trigger('click');
            }
		});
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

