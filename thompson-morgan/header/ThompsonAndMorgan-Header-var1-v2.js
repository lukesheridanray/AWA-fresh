function () {
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
		exp.log('Header - 2.0 - var1');

		/*
		// Condition
		// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
		exp.condition = $('.unique-selector');
		*/
		exp.condition = $('.myBasket');

		// Check for a condition and return false if it has not been met
		/*if(exp.condition && !exp.condition.length) {
		    exp.log('Experiment failed a condition');
		    return false;
		}*/
		if (exp.condition && !exp.condition.length) {
		    exp.log('Header failed a condition');
		    return false;
		}

		// Variables
		// Object containing variables, generally these would be strings or jQuery objects
		exp.vars = {
		};

		// Styles
		// String containing the CSS for the experiment
		exp.css = '\
		#siteSearch input[type="submit"]:hover {\
		    background-color: #00562c !important;\
		}\
		#headerBasket li:first-child {\
			background-image: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/d5d754bda8cfc551fa859d244f857b68_23_22.png") !important; border: solid 1px #666666; background-position: 13px 6px; padding-top: 0; margin-left: 0; height: 35px;\
		}\
		.headerLinks #basket {\
			margin-top: 8px; padding-right: 5px;\
		}\
		#headerBasket #basket span {\
			padding-left: 5px;\
		}\
		#headerBasket .myBasket {\
			padding-left: 5px;\
		}\
		a.myBasket {\
			margin-left: 8px; padding-right: 5px;\
		}\
		#headerBasket {\
			width: 246px; margin-top: 39px;\
		}\
		#cart-content {\
			right: 0; top: 0;\
		}\
		.mini-top-section {\
			height: 2px;\
		}\
		.mini-basket .mini-basket {\
			background-image: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/d5d754bda8cfc551fa859d244f857b68_23_22.png") !important; margin-top: -14px !important; background-position: 9px 19px !important; padding-right: 6px !important;\
		}\
		.search-portlet .text-input {\
			line-height: 29px; height: 29px; background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/75d27af5a1bd4ac59e83dc3a88a89150_15_15.png"); background-repeat: no-repeat; background-position: 270px; background-size: 19px 19px; width: 291px;\
		}\
		.search-portlet .text-input::-ms-clear {\
		    width: 0; height: 0;\
		}\
		#siteSearch .button.search {\
			border: solid 1px black !important; border-left: 0; background-color: #b60718; height: 35px; width: 67px; margin-left: -6px; text-indent: 0; color: white; font-size: 14px; background-image: none !important;\
		}\
		.autocomplete {\
			margin-top: -26px; margin-left: 23px;\
		}\
		#siteSearch {\
			width: 368px; float: right; margin-right: 253px; margin-top: -40px;\
		}';

		// Functions
		// Object containing functions, some helpful functions are included
		exp.func = {};

		// Init function
		// Called to run the actual experiment, DOM manipulation, event listeners, etc
		exp.init = function() {
		    // Append style to head
		    $('head').append('<style type="text/css">'+this.css+'</style>');

			// Change basket bar text
			$('a.myBasket').text('Checkout');

			// Move Checkout after Price for both hover and normal boxes
			var price1 = $('#basket').find('span')[0];
			var price2 = $('#basket').find('span')[1];

			var myBasketLink1 = $('a.myBasket')[0];
			var myBasketLink2 = $('a.myBasket')[1];

			$(price1).after($(myBasketLink1));
			$(price2).after($(myBasketLink2));


			// Remove "Popular Searches" link
			$('#siteSearch .popularSearches').remove();

			// Remove "Search" label
			$('#siteSearch').find('label').remove();

			// Change serach bar text
			$('#siteSearch .button.search').attr('value', 'Search');

			// Workaround to move repeat on view basket button (it has in-line styles)
			$('.dynamicButton.viewBasketButton').attr('style', 'width: 166px; vertical-align: top; background-image: url(http://media.thompson-morgan.com/medias/sys_tandm/8796117139486.gif);');

			// Remove magnifying glass on focus since IE is inserting a clearing X
			$('.search-portlet .text-input').focus(function() {
				$(this).attr('style', 'background: none;');
			});
			$('.search-portlet .text-input').focusout(function() {
				$(this).attr('style', 'background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/75d27af5a1bd4ac59e83dc3a88a89150_15_15.png"); background-repeat: no-repeat; background-position: 270px; background-size: 19px 19px;');
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
