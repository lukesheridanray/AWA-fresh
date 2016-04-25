//
// CGIT Optimizely Boilerplate - version 0.1.4
//
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {

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
	exp.log('Great Value Modal - v1 - var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#menuBanner"); // Very inclusive

	// Check for a condition and return false if it has not been met
	/*
	if (exp.condition && !exp.condition.length) {
		exp.log('Promo Banner failed a condition');
		return false;
	}
	*/

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		modal: '<div class="modal-wrap j-regional-modal" id="AWA-great-value-modal">\
		    <div class="modal-darkness modal_close"></div>\
		    <div class="modal" style="width: 650px">\
		        <div class="modal--header row">\
		            <p id="AWA-how-you-get">How you get great value</p>\
		            <a id="AWA-modal-close" class="AWA-close-new-modal" href="#">Close</a>\
		        </div>\
		        <div class="modal-content c-regional-modal is-centered">\
		            <div class="vert-margin-lg">\
		                <p>Mountain warehouse products are made by us to our own high specifications from advanced materials. So why the low prices?</p>\
		                <ul>\
		                	<li>We make our own products - so there is no middleman to pay</li>\
		                	<li>We grow through word of mouth - not by expensive advertising</li>\
		                	<li>We pass the savings on to you</li>\
		                </ul>\
		                <p id="AWA-adds-up">\
		                	It all adds up to a great quality, at a great price. But don\'t take our word for it:\
		                </p>\
		                <div id="AWA-quote">\
			                <blockquote>\
			                	As they don\'t have to share proceeds or invest in the pioneering research undertaken by other brands, they can create workable outdoor gear, and charge less for it.\
			                </blockquote>\
		                </div>\
		                <p id="AWA-country-walking">\
		                	<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/8fb627d17403e0e8b070505d33623675_countrywalking.jpg">\
		                </p>\
		            </div>\
		            <div class="row">\
		                <hr class="vert-margin-lg">\
		            </div>\
		                <a id="AWA-continue-shopping" class="button checkout--button AWA-close-new-modal" href=#">Continue Shopping</a>\
		        </div>\
		    </div>\
		</div>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-great-value-modal {\
			display: none;\
		}\
		#AWA-great-value-modal .modal--header.row {\
			padding: 0 15px;\
		}\
		#AWA-how-you-get {\
			float: left;\
			display: inline-block;\
			font-weight: bold;\
			color: #214232;\
		}\
		#AWA-modal-close {\
			float: right;\
			margin-top: 10px;\
			color: gray;\
		}\
		#AWA-modal-close:hover {\
			color: black;\
		}\
		#AWA-great-value-modal .c-regional-modal {\
			padding-top: 0;\
			padding-bottom: 1em;\
		}\
		#AWA-great-value-modal p {\
			text-align: left;\
		}\
		#AWA-great-value-modal ul {\
			list-style-type: disc;\
			text-align: left;\
			margin-left: 15px;\
			margin-bottom: 30px;\
		}\
		#AWA-great-value-modal ul li {\
			list-style: inherit;\
		}\
		#AWA-quote {\
			background-image: url(//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/d19d92e7fde895f96bf4ee62b6094833_quoteleft.jpg), url(//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/6c6735912d3d3d0f5df901e27f862cb5_quoteright.jpg);\
			background-repeat: no-repeat, no-repeat;\
			background-position: left top, right top;\
		}\
		#AWA-quote blockquote {\
			margin: 0 54px;\
			font-style: italic;\
			font-size: 16px;\
		}\
		#AWA-country-walking {\
			margin-top: 5px;\
			text-align: right !important;\
			margin-bottom: 0;\
		}\
		#AWA-country-walking img {\
			width: 95px;\
		}\
		#AWA-great-value-modal .checkout--button {\
			background-image: none;\
			max-width: 60%;\
		}\
		#AWA-great-value-modal div.vert-margin-lg {\
			margin-bottom: 0;\
		}\
		#AWA-great-value-modal hr.vert-margin-lg {\
			margin-top: 0;\
		}\
		#AWA-modal-link {\
		    font-size: 14px;\
		    font-weight: normal;\
		    bottom: 0;\
		    position: absolute;\
		    text-decoration: underline;\
		    right: 0;\
		}\
		#nowprice, .now {\
			position: relative;\
		}\
		@media (max-width: 474px) {\
			#AWA-quote blockquote {\
				margin: 0 24px;\
			}\
			#AWA-great-value-modal .checkout--button {\
				max-width: 100%;\
			}\
		}\
		@media (min-width: 631px) and (max-width: 815px) {\
			#AWA-modal-link {\
				display: block;\
				position: relative;\
				margin-bottom: 5px;\
			}\
		}\
		@media (max-width: 414px) {\
			#AWA-modal-link {\
				display: block;\
				position: relative;\
				margin-bottom: 5px;\
			}\
		}\
	';

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
		// Append stylesheet to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Add modal link to page
		if ($("#nowprice").find('span[itemprop="price"]').length) {
			$("#nowprice").find('span[itemprop="price"]').first().after("<span id='AWA-modal-link'><a href='#'>How you get great value</a></span>")
		} else {
			$(".now").first().find('span[itemprop="price"]').first().after("<span id='AWA-modal-link'><a href='#'>How you get great value</a></span>")
		}


		// Append modal to body
		$("body").append(exp.vars.modal);

		// Modal open event handler
		$("#AWA-modal-link a").click(function(e) {
			e.preventDefault();
			$("#AWA-great-value-modal").show();
		});

		// Modal close event handler
		$(".AWA-close-new-modal").click(function(e) {
			e.preventDefault();
			$("#AWA-great-value-modal").hide();
		});

	};

	// Run the experiment
	exp.func.waitFor(function() { return $("#NestedMaster_MWStoreFooter1_GlobalMenuBar_hypClearance").length}, exp.init);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
};

var waitForjQuery = function(time) {
	time = time || 50;
	var $ = window.jQuery;
	if ($) {
    	exp(jQuery);
	} else {
  		setTimeout(function () {
    		waitForjQuery(time * 2);
  		}, time);
	}
};

waitForjQuery(1000);