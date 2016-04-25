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
	exp.log('Category Page v2 - var2');

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
		mainSection: 	"<div id='AWA-main-section'>\
							<a id='AWA-section-bedroom' href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture'><img src='//cdn.optimizely.com/img/3719724514/4abbe52ccdff46678f0304daea216991.jpg'><h1>Bedroom</h1></a>\
							<a id='AWA-section-living-room' href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture'><img src='//cdn.optimizely.com/img/3719724514/2aca5bf0c6bd466cbc97e58f6af4aa72.jpg'><h1>Living Room</h1></a>\
							<a id='AWA-section-sofas' href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs'><img src='//cdn.optimizely.com/img/3719724514/e77f3e19eefa48d082d11586fb89017f.jpg'><h1>Sofas & Chairs</h1></a>\
							<a id='AWA-section-dining-room' href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture'><img src='//cdn.optimizely.com/img/3719724514/8d99abd5024d41e5b0c843aaac3cdc03.jpg'><h1>Dining Room</h1></a>\
							<a id='AWA-section-beds' href='http://www.dunelm.com/category/home-and-furniture/furniture/beds--bedsteads-and-mattresses'><img src='//cdn.optimizely.com/img/3719724514/e4126103268249d394f9dbbd59fefaee.jpg'><h1>Beds, Bedsteads & Mattresses</h1></a>\
							<a id='AWA-section-office' href='http://www.dunelm.com/category/home-and-furniture/furniture/office-furniture'><img src='//cdn.optimizely.com/img/3719724514/0fa1a40a50ab42f9a41c9781202c9424.jpg'><h1>Office</h1></a>\
							<a id='AWA-section-storage' href='http://www.dunelm.com/category/home-and-furniture/furniture/storage-furniture'><img src='//cdn.optimizely.com/img/3719724514/8b6794a86564411c8cc8b9c862a09317.jpg'><h1>Storage</h1></a>\
						</div>",
		banner: "<a id='AWA-save-banner' href='/category/offers/furniture-offers'><img src='//cdn.optimizely.com/img/3719724514/e59ce1dc3caa427a88bae46a1bbe7ff9.jpg'></a>"
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-hide-main {\
		display: none;\
	}\
	#AWA-main-section a {\
		display: block;\
		width: 49.8%;\
		position: relative;\
	}\
	#AWA-main-section h1 {\
		position: absolute;\
		top: 15px;\
		left: 15px;\
		font-size: 1.75em;\
		font-weight: 700;\
		line-height: 1.5;\
		color: black;\
		padding: 6px 20px;\
		background-color: rgba(255,255,255,.7);\
	}\
	#AWA-main-section h1:hover {\
		color: #3f9c35;\
	}\
	#AWA-section-bedroom {\
		float: left;\
	}\
	#AWA-section-living-room, #AWA-section-sofas {\
		float: right;\
	}\
	#AWA-section-living-room {\
		margin-bottom: 5px;\
	}\
	#AWA-section-sofas {\
		margin-bottom: 5px;\
	}\
	#AWA-section-dining-room {\
		clear: both;\
		float: left;\
	}\
	#AWA-section-beds {\
		float: right;\
		margin-bottom: 5px;\
	}\
	#AWA-section-office {\
		clear: both;\
		float: left;\
	}\
	#AWA-section-storage {\
		float: right;\
		margin-bottom: 20px;\
	}\
	#AWA-save-banner {\
		clear: both;\
		display: block;\
		background-color: #ED008C;\
	}\
	#AWA-save-banner img {\
		display: block;\
		margin: 0 auto;\
	}\
    @media all and (max-width: 650px) {\
        #AWA-main-section h1 {\
            font-size: 1em;\
            padding: 3px 10px;\
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
		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Add custom class to main wrapper so it can be hidden via CSS
		$(".category__main__wrap").addClass("AWA-hide-main");

		// Add main section
		$(".category__main__wrap").after(exp.vars.mainSection);

		// Insert banner
		$("#AWA-main-section").after(exp.vars.banner);

		// Reinsert Christmas banner
		$("#AWA-main-section").before($("#espot_catpg_01_10646"));

		// When "Recently view items" loads it shows the whole main content of the page again. Weed need to check for the presence of this and reapply the hidden class
		exp.func.waitFor(function(){ return $(".rr__recently-viewed--wrap").is(":visible") }, function() { $(".category__main__wrap").attr('style', 'display: none !important;'); }, 1000);

	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $("#espot_catpg_flexible_10651").length }, exp.init, 1000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
