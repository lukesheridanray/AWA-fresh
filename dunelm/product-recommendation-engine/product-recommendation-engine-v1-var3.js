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
	exp.log('Product Recommendation Engine v1 - var3');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		newPRE: "<div style='clear: both;'></div><div id='AWA-PRE' class='wrap'></div>",
		alsoViewed: "<div id='AWA-also-viewed'>\
						<h4 class='rr__heading'>Customers also viewed</h4>\
					</div>",
		wentOn: "<div id='AWA-went-on'>\
					<h4 class='rr__heading'>Customers went on to buy</h4>\
				</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-PRE {\
			position: relative;\
			margin-bottom: 30px;\
		}\
		#AWA-PRE .rr__heading {\
			margin-bottom: 20px;\
			padding-left: 3.5%;\
		}\
		#AWA-PRE .rr__pricing {\
			padding-left: 16%;\
		}\
		#AWA-PRE .rr__item a>img {\
			margin: 0 auto;\
		}\
		#AWA-also-viewed .slick-slide, #AWA-went-on .slick-slide {\
			display: block;\
		}\
		#AWA-also-viewed {\
			margin-top: 40px;\
			float: left;\
			overflow: auto;\
			width: 48%;\
		}\
		#AWA-went-on {\
			margin-top: 40px;\
			float: right;\
			overflow: auto;\
			width: 48%;\
		}\
		#AWA-also-viewed .rr__item, #AWA-went-on .rr__item {\
			width: 25% !important;\
		}\
		#AWA-PRE-divider {\
			position: absolute;\
			left: 50%;\
			border-left: 2px solid #CCCCCD;\
			height: 239px;\
			margin-top: 33px;\
		}\
		@media (max-width: 947px) {\
			#AWA-also-viewed, #AWA-went-on {\
				float: none;\
				width: 100%;\
			}\
			#AWA-PRE-divider {\
				display: none;\
			}\
		}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// This function waits till a condition returns true
	exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
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

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		if (!$(".pdp-rr.pdp-right-col .rr-3 .rr__item:not('.slick-cloned')").length) {
			exp.log('Also Viewed and Went On not present - returning');
			return;
		}

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		var $alsoViewed = $(".pdp-rr.pdp-right-col .rr-3");
		var $wentOn = $(".pdp-rr.pdp-right-col .rr-1");

		$alsoViewed.hide();
		$wentOn.hide();

		$("#content").find('.pdp-reviews').last().after(exp.vars.newPRE);


		// Format "Customers also viewed"
		if ($alsoViewed.length) {
			// Insert "Customers also viewed" before reviews
			$("#AWA-PRE").append(exp.vars.alsoViewed);
			
			// Push products into an array
			var alsoViewedArray = [];
			$(".pdp-rr.pdp-right-col .rr-3 .rr__item:not('.slick-cloned')").each(function() {
				alsoViewedArray.push($(this).clone());
			});

			// Populate "Customers also viewed" products
			for (var i = 0; i < alsoViewedArray.length; i++) {
				$(alsoViewedArray[i]);
				$("#AWA-also-viewed").append(alsoViewedArray[i]);
			}
		}

		// Format "Customers went on to buy"
		if ($wentOn.length) {
			// Insert "Customers also viewed" before reviews
			$("#AWA-also-viewed").after(exp.vars.wentOn);
			
			// Push products into an array
			var wentOnArray = [];
			$(".pdp-rr.pdp-right-col .rr-1 .rr__item:not('.slick-cloned')").each(function() {
				wentOnArray.push($(this).clone());
			});

			// Populate "Customers also viewed" products
			for (var i = 0; i < wentOnArray.length; i++) {
				$(wentOnArray[i]);
				$("#AWA-went-on").append(wentOnArray[i]);
			}
		}

		// Insert dividing line
		if ($alsoViewed.length && $wentOn.length) {
			$("#AWA-also-viewed").after("<div id='AWA-PRE-divider'></div>");
		}

	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $(".pdp-rr.pdp-right-col .rr-1 .rr__item:not('.slick-cloned')").length }, exp.init, 10000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
