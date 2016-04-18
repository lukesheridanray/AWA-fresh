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
	exp.log('Search Product Data - v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $(".sli_grid_result");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Search Product Data failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		dataTemplate: 	"<div class='AWA-data-template'>\
							<p class='AWA-product-description'>\
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan tristique lacus id iaculis. Phasellus varius lacus eu dictum porttitor. Aliquam vulputate, ligula id consequat rhoncus, arcu elit commodo nisi, non rhoncus mi tellus eu nunc. Nunc leo lorem, semper nec purus a, tincidunt aliquet turpis. Pellentesque blandit quis nisi ornare pharetra. Nullam porta porttitor ipsum ut lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.\
							</p>\
							<br>\
							<ul>\
								<li><strong>Ideal For:</strong> <span class='AWA-ideal-for'></span</li>\
								<li><strong>Hardiness:</strong> <span class='AWA-hardiness'></span</li>\
								<li><strong>Position:</strong> <span class='AWA-sun-shade'></span</li>\
								<li><strong>Height:</strong> <span class='AWA-height'></span</li>\
								<li><strong>Spread:</strong> <span class='AWA-spread'></span</li>\
								<li><strong>Flowering Period:</strong> <span class='AWA-flowering-months'></span</li>\
								<li><strong>Sowing Months:</strong> <span class='AWA-sowing-months'></span</li>\
								<li><strong>Harvest Months:</strong> <span class='AWA-harvest-period'></span</li>\
							<ul>\
						</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-search-result {\
		clear: both;\
		border: solid 1px #cccccc;\
		margin-bottom: 5px;\
		overflow: auto;\
	}\
	.sli_grid_result {\
		height: inherit;\
		width: 25%;\
		padding-left: 8px;\
		float: left;\
	}\
	.sli_grid_image {\
		float: left;\
	}\
	.sli_review_rating {\
		clear: both;\
	}\
	.sli_prod_title {\
		clear: both;\
	}\
	.sli_prod_title {\
		width: 178px;\
		padding-top: 5px;\
	}\
	.AWA-data-template {\
		width: 506px;\
		margin-left: 14px;\
		margin-top: 8px;\
		padding-bottom: 5px;\
		float: left;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Wrap each search result in it's own div so that extra information can be floated properly
	    $(".sli_grid_result").wrap("<div class='AWA-search-result'></div>");

	    // Insert product data template for each search result
	    $(".AWA-search-result").append(exp.vars.dataTemplate);

	    // Activate modal on product image click
  //       $(".sli_grid_result").find("a").click(function(e) {
  //           e.preventDefault();

  //           // Get product code
		// 	var link = $(this).attr('href');
		// 	var piece = link.lastIndexOf("%2f");
		// 	var secondHalf = link.substring(piece + 3);
		// 	var productCode = secondHalf.substring(0, secondHalf.indexOf("&"));
		// 	var productUrl = $(this).attr('href');
		// 	console.log(productCode);
		// 	console.log(productUrl);
		// });

        // Insert test data
        $(".AWA-ideal-for, .AWA-hardiness, .AWA-sun-shade, .AWA-height, .AWA-spread, .AWA-flowering-months, .AWA-sowing-months, .AWA-harvest-period").text("test data");

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

