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
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Landing Page Seeds Offer Popup - v1 -var2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	// exp.condition = $("#268917436");

	// // Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('PLP Condensed failed a condition');
	// }
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		popup: 	"<div id='AWA-popup-LP'>\
					<div id='AWA-close-LP'>\
						CLOSE <img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/23bba644572e57b9011eabd4a40d1ddd_478_477.png'>\
					</div>\
					<h1>Limited offer - selling fast</h1>\
					<p id='AWA-LP-red'>\
						400+ vegetable and flower seed varieties <span id='AWA-underline'>under &pound;1</span>\
					</p>\
					<div id='AWA-limited-offers'>\
						<div class='AWA-LP-offer'>\
							<a href='http://www.thompson-morgan.com/value-vegetable-seeds'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/e52add4855f33fb609ab0c29668284e4_300_263.jpeg'></a>\
							<p class='AWA-LP-title'>\
								<a href='http://www.thompson-morgan.com/value-vegetable-seeds'>Vegetable Seeds</a>\
							</p>\
							<p class='AWA-LP-line1'>\
								<span id='AWA-LP-vegetable-num'>...</span>\
							</p>\
						</div>\
						<div class='AWA-LP-offer'>\
							<a href='http://www.thompson-morgan.com/value-annual-flower-seeds'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/0ed438c5f2c4bd67421207b92ae67542_300_263.jpeg'></a>\
							<p class='AWA-LP-title'>\
								<a href='http://www.thompson-morgan.com/value-annual-flower-seeds'>Annual Flower Seeds</a>\
							</p>\
							<p class='AWA-LP-line1'>\
								<span id='AWA-LP-flower-num'>...</span>\
							</p>\
						</div>\
						<div class='AWA-LP-offer'>\
							<a href='http://www.thompson-morgan.com/value-perennial-and-biennial-flower-seeds'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/9d8a3771f2e7078e25281aa7897e3f9b_300_263.jpeg'></a>\
							<p class='AWA-LP-title'>\
								<a href='http://www.thompson-morgan.com/value-perennial-and-biennial-flower-seeds'>Perennial & Biennial Seeds</a>\
							</p>\
							<p class='AWA-LP-line1'>\
								<span id='AWA-LP-pb-num'>...</span>\
							</p>\
						</div>\
					</div>\
					<div id='AWA-LP-ships'>\
						Despatched within 1 day\
					</div>\
				</div>"

	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-close-LP {\
			float: right;\
			cursor: pointer;\
		}\
		#AWA-close-LP img {\
			width: 20px;\
			vertical-align: middle;\
			padding-left: 5px;\
		}\
		#AWA-popup-LP {\
			display: none;\
			position: fixed;\
			width: 650px;\
			top: 25%;\
			left: 0;\
			right: 0;\
			margin-left: auto;\
			margin-right: auto;\
			padding: 10px;\
			z-index: 200;\
			padding: 15px;\
			background-color: white;\
		}\
		#AWA-popup-LP h1 {\
			clear: both;\
			color: black;\
			font-size: 30px;\
			text-align: center;\
			margin-top: 50px;\
		}\
		#AWA-LP-red {\
			color: #B60718 !important;\
			font-size: 20px;\
			text-align: center;\
			margin: 40px 0;\
		}\
		#AWA-underline {\
			border-bottom: solid 1px black;\
		}\
		#AWA-limited-offers {\
			overflow: auto;\
		}\
		.AWA-LP-offer {\
			float: left;\
			width: 33%;\
			text-align: center;\
		}\
		.AWA-LP-offer img {\
			width: 115px;\
		}\
		.AWA-LP-title {\
			font-weight: bold;\
		}\
		#AWA-LP-ships {\
			font-weight: bold;\
		}\
		#AWA-LP-ships {\
			font-size: 15px;\
			text-align: center;\
			margin: 30px 0 10px 0;\
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

		// Attach popup and show/hide functionality
		$('<div id="__msg_overlay-LP">').css({
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
		$('#__msg_overlay-LP').hide();

		$('#AWA-close-LP').click(function(e) {
			e.preventDefault();
			$('#AWA-popup-LP').hide();
			$('#__msg_overlay-LP').hide();
		});


		$.ajax({
			type: "GET",
			url: "http://www.thompson-morgan.com/value-vegetable-seeds",
			success: function(data) {
				var response = $(data);
				var results = response.find(".searchResults").first().html();
				var numResults = results.match(/\d+/)[0];
				$("#AWA-LP-vegetable-num").text(numResults + " products");

				$.ajax({
					type: "GET",
					url: "http://www.thompson-morgan.com/value-annual-flower-seeds",
					success: function(data) {
						var response = $(data);
						var results = response.find(".searchResults").first().html();
						var numResults = results.match(/\d+/)[0];
						$("#AWA-LP-flower-num").text(numResults + " products");

						$.ajax({
							type: "GET",
							url: "http://www.thompson-morgan.com/value-perennial-and-biennial-flower-seeds",
							success: function(data) {
								var response = $(data);
								var results = response.find(".searchResults").first().html();
								var numResults = results.match(/\d+/)[0];
								$("#AWA-LP-pb-num").text(numResults + " products");
							}
						});
					}
				});
			}
		});


		window.onbeforeunload = function() {
			if (sessionStorage.seenLP !== "true") {
				$("#AWA-popup-LP").show();
				$("#__msg_overlay-LP").show();
				sessionStorage.seenLP = "true";
				return "Limited offer - selling fast";
			} else {
				exp.log("Seen LP");
			}
		};

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

