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
	exp.log('Voucher Incentive Popup (Landing Pages) - v1 - var');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#12250136');

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Voucher Incentive Popup (Landing Pages) failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		popup: 	"<div id='AWA-popup-V'>\
					<div id='AWA-popup-V-inner'>\
						<img id='AWA-close-V' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/d1eeafce66e725cee1b2bfcb8a3d12a3_137_137.png'>\
						<h1>FREE &pound;5 VOUCHER</h1>\
						<p>if you order anything<br>online within the next</p>\
						<div id='AWA-clock-box'>\
							<img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/c011559091d44f1de14d50d17391c9ea_183_183.png'>\
							<div id='AWA-clock'>23:59:59</div>\
						</div>\
						<p id='AWA-to-be-used'>\
							*to be used against your next purchase\
						</p>\
					</div>\
				</div>"
	}

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-popup-V {\
		display: none;\
		position: fixed;\
		width: 500px;\
		top: 25%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		background-color: #345E2E;\
		padding: 15px;\
		color: white;\
	}\
	#AWA-popup-V-inner {\
		border: dashed 3px white;\
	}\
	#AWA-popup-V img {\
	    width: 25px;\
	    float: right;\
	    padding: 8px;\
	}\
	#AWA-close-V {\
		cursor: pointer;\
	}\
	#AWA-popup-V h1 {\
		font-size: 37px;\
		clear: both;\
		text-align: center;\
		color: white;\
	}\
	#AWA-popup-V p {\
		color: white !important;\
		text-align: center;\
		font-size: 26px;\
		line-height: 37px;\
		margin-top: 37px;\
		font-weight: bold;\
	}\
	#AWA-clock-box {\
	    border: solid 1px white;\
	    width: 50%;\
	    margin: 0 auto;\
	    height: 50px;\
	    margin-top: 37px;\
	    border-radius: 7px;\
	}\
	#AWA-clock-box img {\
		float: left;\
		margin-top: 5px;\
		margin-left: 38px;\
	}\
	#AWA-popup-V #AWA-to-be-used {\
		font-size: 23px;\
		margin-bottom: 26px;\
		font-weight: normal;\
	}\
	#AWA-clock {\
		font-size: 29px;\
		padding: 17px 0 17px 0;\
		margin-right: 40px;\
		text-align: center\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

		// Attach popup and show/hide functionality
		$('<div id="__msg_overlay-V">').css({
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
		$('#__msg_overlay-V').hide();

		$('#AWA-close-V').click(function(e) {
			e.preventDefault();
			$('#AWA-popup-V').hide();
			$('#__msg_overlay-V').hide();
		});

		// Find out what time it is in London
		function getLocalTime(city, offset) {
		    var d = new Date();
		    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		    var nd = new Date(utc + (3600000*offset));
		    //exp.log("The local time in " + city + " is " + nd.toLocaleString());
		    return nd;
		}
		var londonTime = getLocalTime("London", 0);


		function calculateHMSleft() {
			//calculate
			var now = getLocalTime("London", 0);
			var hoursleft = 23-now.getHours();
			var minutesleft = 59-now.getMinutes();
			var secondsleft = 59-now.getSeconds();

			//format 0 prefixes
			if(minutesleft<10) minutesleft = "0"+minutesleft;
			if(secondsleft<10) secondsleft = "0"+secondsleft;
			if(hoursleft<10) hoursleft = "0"+hoursleft;

			//display
			$('#AWA-clock').text(hoursleft+":"+minutesleft+":"+secondsleft);
		}
		calculateHMSleft();
		setInterval(calculateHMSleft, 1000);




		var lHours = londonTime.getHours();
		var lMinutes = londonTime.getMinutes();

		// Only show popup if time is between the hours of 10h00 and 23h50
		if (lHours >= 10) {
			if (lHours < 23) {
				$('#__msg_overlay-V').show();
				$("#AWA-popup-V").show();
				exp.log('London hours are between 10h00 and 23h50');
				localStorage.setItem("seenVoucher", "true");
			} else if (lHours == 23 && lMinutes <= 50) {
				$('#__msg_overlay-V').show();
				$("#AWA-popup-V").show();
				exp.log('London hours are between 10h00 and 23h50');
				localStorage.setItem("seenVoucher", "true");
			}
		}

	};

	// Only run on non-search pages
	if (window.location.href.indexOf("search") == -1) {
		// Open popup if URL does not contain "dispatcher"
		if (window.location.href.indexOf("dispatcher") == -1) {
			// Only run the experiment if user hasn't seen the voucher before
			if (localStorage.getItem("seenVoucher") != "true") {
				// Run the experiment
				exp.init();
			} else {
			  exp.log('Vouvher was already shown');
			}
		}
	}

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

