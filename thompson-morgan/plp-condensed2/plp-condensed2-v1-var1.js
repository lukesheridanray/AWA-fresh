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
	exp.log('PLP Condensed2 - v1 - var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#orderResults");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('PLP Condensed failed a condition');
	    return;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#facetResults {\
			width: inherit;\
		}\
		#results {\
			width: 100%;\
		}\
		#results .resultSet {\
			float: left;\
		}\
		.resultSet .floatLeft img {\
			width: 230px;\
			height: 230px;\
			margin-right: 50px;\
		}\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

    $.getJSON('https://d1m54pdnjzjnhe.cloudfront.net/thompsonmorgan/awa/imagedataFeb2016_01.json.gz', function(data){
    	if (data) {
    		imageData = data;
    		applyExp();
    	}
    });

    function applyExp() {
		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Remove side filters and email signup
		$("#268917436, #1356185448").hide();

		// Swap out images
		$(".resultSet .floatLeft a").each(function() {
			var url = $(this).attr('href');
			var n = url.lastIndexOf('/');
		  	var urlCode = url.substring(n + 1);
		  	$(this).find("img").attr('src', imageData[urlCode]);
		});

		// // Add margin next to stars
		// $("img[src$='-star.jpg']").attr('style', 'margin-right: 8px');

		// // Trim product descriptions
		// $(".resultSet").each(function() {

		// 	$(this).find('.season').contents().filter(function() {
		// 	    return this.nodeType === 3;
		// 	}).each(function() {
		// 	    this.nodeValue = $.trim(this.nodeValue);
		// 	}).wrap('<p class="AWA-unwrapped"></p>');

		// 	$(".AWA-unwrapped").hide();


		// 	// If bulleted list exists
		// 	if ($(this).find('.season').find('.productBullet').length) {
		// 		$(this).find('.season').find('.productBullet').first().nextAll().hide();
		// 	} else if ($(this).find('.season').find('b').length) {
		// 		$(this).find('.season').find('b').first().nextAll().hide();
		// 	} else {
		// 		$(this).find('.season').children().hide();
		// 	}

		// 	// Exception for Annual Best Value Bumper Collection which has a very large bulleted list
		// 	if ($(this).find('.floatLeft').find("a").first().attr('href') === "/flowers/flower-plants/annual-plants/annual-best-value-collection/t47471TM") {
		// 		$(this).find('.season').children().hide();
		// 	}

		// });

		// // Toggle product descriptions
		// $(".moreInfo").click(function(e) {
		// 	e.preventDefault();
		// 	$(this).closest('.floatRight.facetDescription').find('.season').children().show();
		// 	$(this).closest('.floatRight.facetDescription').find('.season').find("b:contains('Customer Rating')").prev('.AWA-unwrapped').hide();
		// 	$(".producticon").hide();
		// 	$(this).attr('style', 'visibility: hidden;');
		// });
	}


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

