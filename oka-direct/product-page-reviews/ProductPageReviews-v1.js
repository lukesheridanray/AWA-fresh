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
	exp.log('Product Page Reviews - v1 - var1');

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
		categories: ["styleReviews", "costReviews"],
		styleReviews: [
			"\"Received great comments from family and friends - very elegant and lovely finish.\"",
			"\"Truly beautiful quality item.\"",
			"\"Did not disappoint. Neat and unobtrusive, and up to the usual quality & stylishness expected from OKA.\"",
			"\"I researched a lot of websites and OKA had the best selection and the most beautiful selection.\"",
			"\"The quality is good and the classic design is both pleasingly fresh and subtle.\"",
			"\"They look very classy and worth the money, as are all your products.\"",
			"\"Love the style and they look great.\"",
			"\"Great unique style.\"",
			"\"Excellent style.\""
		],
		costReviews: [
			"\"Wonderful quality as always, very happy.\"",
			"\"Not cheap but very good quality and the colours didn't disappoint.\"",
			"\"Beautiful and it is even better than the picture, first class quality, well made, solid looks excellent.\"",
			"\"Very classy and excellent quality.\"",
			"\"We expected good quality. We got it!\"",
			"\"Well made and looks better than the cost would suggest.\"",
			"\"Beautiful product I can always rely on OKA to have the best.\"",
			"\"Excellent quality at a good price.\"",
			"\"Can't fault it so worth the relatively high price tag.\""
		]
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-read-more-reviews {\
		color: #999;\
		text-decoration: underline;\
		display: block;\
		margin-bottom: 10px;\
	}\
	#AWA-read-more-reviews:hover {\
		text-decoration: none;\
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
	            if (condition) {
	                if (!keepAlive) {
	                    clearInterval(interval);
	                }
	                callback();
	            } else if (attempts > maxAttempts) {
	                clearInterval(interval);
	                exp.log('Product Page Reviews should only run on product pages');
	            }
	            attempts ++;
	        }, intervalTime);
	};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Get a random review from a random category
		var category = exp.vars.categories[Math.floor(Math.random() * exp.vars.categories.length)];
		var review = exp.vars[category][Math.floor(Math.random() * exp.vars[category].length)];

		// Insert review (if reviews exist)
		if ($.trim($(".prod-detail-rating").text()) != "") {
			$(".prod-detail-rating").first().after("<p id='AWA-random-review'>" + review + "</p>");
			$("#AWA-random-review").after("<a href='#' id='AWA-read-more-reviews'>Read more customer reviews</a>");
		}

		// Open reviews on link click
		$("#AWA-read-more-reviews").on('click', function(e) {
			e.preventDefault();
			$(".rating.upper.muted").trigger('click');
		});

	   
	};


	// Run the experiment
	$(document).ready(function() {
		// This exp should only run on product pages, however this is nothing unique in the URL that would indicate a product page so we'll employ the waitFor function to check for a product page element.
		exp.func.waitFor($(".prod-carousal-img-count-for-zoom.prod-carousal-small-img.cursor-pointer").length, exp.init);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
