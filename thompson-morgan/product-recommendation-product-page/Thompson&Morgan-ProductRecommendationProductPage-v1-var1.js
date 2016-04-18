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
	exp.log('Product Recommendation Product Page - v1-var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('body');

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Product Recommendation failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-pp-recently-viewed {\
		clear: both;\
		border: solid 1px #00572D;\
		overflow: auto;\
		padding: 15px;\
		width: 221px;\
		margin: 0 auto;\
		margin-top: 20px;\
	}\
	#AWA-pp-recently-viewed h1 {\
		font-size: 19px;\
		margin-bottom: 15px;\
	}\
	.AWA-pp-rec {\
		border: solid 0px black;\
		width: 125px;\
		text-align: center;\
		margin: 0 auto;\
		margin-top: 18px;\
	}\
	.AWA-pp-price {\
		font-weight: bold;\
	}\
	.AWA-pp-rec-link:hover {\
		text-decoration: underline;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

		// Save currently viewed product to recentlyViewed array
		var recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed6")) || [];


		// Extract recently viewed data
		if (recentlyViewed.length) {
			$("#productCont").prev().append("<div id='AWA-pp-recently-viewed'><h1>You Recently Viewed:</h1><div id='AWA-pp-viewed-entries'></div></div>");
			for (var i = 0; i < recentlyViewed.length; i++) {
				$("#AWA-pp-viewed-entries").prepend("<div class='AWA-pp-rec'><a class='AWA-pp-image-element' href='" + recentlyViewed[i].url + "'><img width='100' src='" + recentlyViewed[i].image + "'></a><br><a class='AWA-pp-rec-link' href='" + recentlyViewed[i].url + "'><span id='AWA-pp-rec-name" + i + "'></span></a><br><span class='AWA-pp-price'>" + recentlyViewed[i].price + "</span></div>");

				// Get rid of invalid HTML symbol codes in product name
				var productName = recentlyViewed[i].name;
				productName = productName.replace("&amp;trade;", "");
				productName = productName.replace("&amp;reg;", "");

				$("#AWA-pp-rec-name" + i).html(productName);
			}
		}

		// If the UV variable on current page contains a product, check to see if it already exists
		if (window.universal_variable.product) {

			var image = $(".t011").find('.main').find('img').attr('src');
			if (image == undefined) {
				image = $("#productDetailsImage").find('img').first().attr('src')
			}
			window.universal_variable.product.image = image;

			// First, get price of first item
			var price = $.trim($('.price').first().contents().filter(function() {return this.nodeType == 3;}).text());	
			// Then, if there are multiple items, get the last price and make the price variable a range
			if ($(".price").length > 1) {
				price += " - " + $.trim($('.price').last().contents().filter(function() {return this.nodeType == 3;}).text());
			}
			window.universal_variable.product.price = price;

			var form = $("#addToBasket")[0].outerHTML; // There mmay be multiple forms on each product page with the same #addToBasket id. This should grab the first.
			window.universal_variable.product.form = form;

			for (var i = 0; i < recentlyViewed.length; i++) {
				if (recentlyViewed[i].name == window.universal_variable.product.name) {
					var indexToRemove = recentlyViewed.indexOf(recentlyViewed[i]);
					if (indexToRemove > -1) {
					    recentlyViewed.splice(indexToRemove, 1);
					}
				}
			}

			recentlyViewed.push(window.universal_variable.product);
			// Keep only 4 recently viewed products
			if (recentlyViewed.length > 4) {
				recentlyViewed.shift();
			}

			localStorage.setItem("recentlyViewed6", JSON.stringify(recentlyViewed));
		} else {
			exp.log("not found");
		}




		// Format Add to basket form
		$("#AWA-pp-recently-viewed li").attr('style', 'display: block;');
		$("#AWA-pp-recently-viewed form").children().hide();
		$("#AWA-pp-recently-viewed .productInfoLeft").next().show();
		$("#AWA-pp-recently-viewed .quantity").hide();
		$("#AWA-pp-recently-viewed .addToBasket").attr('style', 'text-align: center; background-image: url(http://media.thompson-morgan.com/medias/sys_tandm/8796108685342.gif); margin: 0 auto; margin-bottom: 5px;');



	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

