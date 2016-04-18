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

console.log("test -- 1");
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.


// Initialise the experiment object
var exp = {};

// Wrapper for console.log, to prevent the exp breaking on browsers which don't
// (always) have 'console' set (e.g. IE9)
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

console.log("test -- 2");

// Log the experiment, useful when multiple experiments are running
exp.log('Product Recommendation Engine v1 - var2');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
	newPRE: "<div style='clear: both;'></div><div id='AWA-PRE'></div>",
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

console.log("test -- 3");

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
	if (!jQuery(".pdp-rr.pdp-right-col .rr-3 .rr__item:not('.slick-cloned')").length) {
		exp.log('Also Viewed and Went On not present - returning');
		return;
	}

console.log("test -- 4");
	// Append style to head
	jQuery('head').append('<style type="text/css">'+exp.css+'</style>');

	var jQueryalsoViewed = jQuery(".pdp-rr.pdp-right-col .rr-3");
	var jQuerywentOn = jQuery(".pdp-rr.pdp-right-col .rr-1");

	jQueryalsoViewed.hide();
	jQuerywentOn.hide();

	jQuery("#content").find('.wrap').first().append(exp.vars.newPRE);


	// Format "Customers also viewed"
	if (jQueryalsoViewed.length) {
		// Insert "Customers also viewed" before reviews
		jQuery("#AWA-PRE").append(exp.vars.alsoViewed);
		
		// Push products into an array
		var alsoViewedArray = [];
		jQuery(".pdp-rr.pdp-right-col .rr-3 .rr__item:not('.slick-cloned')").each(function() {
			alsoViewedArray.push(jQuery(this).clone());
		});

		// Populate "Customers also viewed" products
		for (var i = 0; i < alsoViewedArray.length; i++) {
			jQuery(alsoViewedArray[i]);
			jQuery("#AWA-also-viewed").append(alsoViewedArray[i]);
		}
	}

	// Format "Customers went on to buy"
	if (jQuerywentOn.length) {
		// Insert "Customers also viewed" before reviews
		jQuery("#AWA-also-viewed").after(exp.vars.wentOn);
		
		// Push products into an array
		var wentOnArray = [];
		jQuery(".pdp-rr.pdp-right-col .rr-1 .rr__item:not('.slick-cloned')").each(function() {
			wentOnArray.push(jQuery(this).clone());
		});

		// Populate "Customers also viewed" products
		for (var i = 0; i < wentOnArray.length; i++) {
			jQuery(wentOnArray[i]);
			jQuery("#AWA-went-on").append(wentOnArray[i]);
		}
	}

	// Insert dividing line
	if (jQueryalsoViewed.length && jQuerywentOn.length) {
		jQuery("#AWA-also-viewed").after("<div id='AWA-PRE-divider'></div>");
	}

};


// Run the experiment
jQuery(document).ready(function() {
	exp.func.waitFor(function(){ return jQuery(".pdp-rr.pdp-right-col .rr-1 .rr__item:not('.slick-cloned')").length }, exp.init, 10000);
});




