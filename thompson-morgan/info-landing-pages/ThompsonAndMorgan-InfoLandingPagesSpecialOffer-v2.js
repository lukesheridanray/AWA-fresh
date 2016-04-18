function() {
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
	exp.log('Info Landing Pages Special Offer v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#12250136');

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Info Landing Pages Special Offer failed a condition');
	    return false;
	}

	// Run only if URL contains "how-to" or "top-10" (QuBit's visitor segmentation wasn't reliable)
	if (window.location.href.indexOf("how-to") < 0 && window.location.href.indexOf("top-10") < 0 && window.location.href.indexOf("plants-for-") < 0) {
		exp.log('Page is not a how-to, plants-for, or top-10 list. Exiting.');
		return false;
	}
	

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		banner: "<a id='AWA-banner' href='#'>\
					<img src='http://dd6zx4ibq538k.cloudfront.net/static/images/2841/ade16864e5575c52e140ca1bf31f5855_941_79.png'>\
					</a>",
		popup: "<div class='AWA-offer-popup'>\
					<img id='AWA-close' src='http://dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='16' height='16px' style='float: right'>\
					<h6 class='AWA-why-buy'>Why buy from Thompson & Morgan?</h6>\
					<ul class='AWA-reasons'>\
						<li>Choose from <strong>more than 5,907 plants</strong> and seeds. You won't find this range anywhere else.</li>\
						<li>The plants you buy from us are <strong>selected to give the best performance in your garden</strong>.</li>\
						<li><strong>Since 1855</strong>, we have been delivering millions of seeds and plants to every corner of the UK.</li>\
					</ul>\
					<h6 class='AWA-find-someting'>Find something for your garden</h6>\
					<ul class='AWA-banner-categories'>\
						<li><a href='http://www.thompson-morgan.com/flowers'>Flowers</a></li>\
						<li><a href='http://www.thompson-morgan.com/vegetables'>Vegetables</a></li>\
						<li><a href='http://www.thompson-morgan.com/fruit'>Fruit</a></li>\
						<li><a href='http://www.thompson-morgan.com/special-offers'>Special Offers</a></li>\
					</ul>\
					<div style='clear: both'></div>\
					<p class='AWA-banner-value'>\
						For a limited time, you <strong>get a FREE £5 voucher</strong> towards your next purchase when you buy anything online.\
					</p>\
				</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-unit-price {\
		float: right;\
	}\
	.AWA-offer-popup {\
		display: none;\
		border: solid 1px black;\
		position: fixed;\
		width: 440px;\
		top: 25%;\
		left: 37%;\
		padding: 10px;\
		z-index: 100;\
		background-color: white;\
	}\
	.AWA-offer-popup h6.AWA-why-buy {\
		text-align: center;\
		padding-top: 15px;\
	}\
	.AWA-offer-popup ul.AWA-reasons {\
		list-style-type: disc;\
		margin: 0 auto;\
		font-size: 13px;\
		margin-top: 25px;\
		width: 375px;\
	}\
	.AWA-offer-popup ul.AWA-reasons li {\
		margin-top: 15px;\
	}\
	.AWA-offer-popup h6.AWA-find-someting {\
		text-align: center;\
		margin-top: 30px;\
	}\
	.AWA-offer-popup ul.AWA-banner-categories {\
		margin-top: 15px;\
	}\
	.AWA-offer-popup ul.AWA-banner-categories li {\
		display: inline-block;\
		float: left;\
		padding: 0 29px 0 29px;\
	}\
	.AWA-offer-popup ul.AWA-banner-categories li a {\
		text-decoration: underline;\
		color: #00572d !important;\
	}\
	.AWA-offer-popup p.AWA-banner-value {\
		margin-top: 30px;\
	  	padding: 0 10px 15px 10px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Replace banner image with promo banner
	    if (window.location.href.indexOf("plants-for-") >= 0) {
	    	$('.templateOneColumn').find('img').first().remove();
			$('.templateOneColumn').first().prepend(exp.vars.banner);
	    } else {
			$('#staticWrapper').find('img').first().remove();
			$('#staticWrapper').first().prepend(exp.vars.banner);
	    }


		$('<div id="__msg_overlay">').css({
		      "width" : "100%"
		    , "height" : "100%"
		    , "background" : "#000"
		    , "position" : "fixed"
		    , "top" : "0"
		    , "left" : "0"
		    , "zIndex" : "50"
		    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
		    , "filter" : "alpha(opacity=60)"
		    , "MozOpacity" : 0.6
		    , "KhtmlOpacity" : 0.6
		    , "opacity" : 0.6
		}).appendTo(document.body);

		// Attach popup on top of overlay
		$('body').append(exp.vars.popup);

		$('#__msg_overlay').hide();


		$('#AWA-banner').click(function(e) {
			e.preventDefault();
			$('.AWA-offer-popup').show();
			$('#__msg_overlay').show();
		});

		$('#AWA-close').click(function(e) {
			$('.AWA-offer-popup').hide();
			$('#__msg_overlay').hide();
		});
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
}

