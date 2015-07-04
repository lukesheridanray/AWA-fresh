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
		exp.log('Header - 2.0 - var 2');

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
		}\
		#order-code-link {\
			margin-top: -14px; margin-right: 256px; margin-bottom: 3px; float: right; text-decoration: underline; color: #90939f;\
		}\
		#order-code-box {\
			width: 360px; border: solid 1px black; padding: 5px 5px 15px 10px; margin-top: 10px; margin-left: auto; margin-right: auto; display: none;\
		}\
		#oc-bold {\
			float: left; font-weight: bold; margin-top: 3px;\
		}\
		#gift-code-form2 {\
			float: left;\
		}\
		#gift-code-form2 input[type="text"] {\
			height: 17px;\
		}\
		#use-order-code {\
			border: solid 1px black; width: 112px; background-color: rgb(52, 94, 46); color: white; padding: 5px 0 5px 0; margin-left: 9px;\
		}\
		#use-order-code:hover {\
			background-color: #b60718;\
		}\
		#learn-mode-link {\
			text-decoration: underline;\
		}\
		#AWA-staging-area {\
			border: solid 1px black;\
			padding-bottom: 20px;\
			margin-top: 10px;\
			display: none;\
		}\
		.AWA-offers {\
			width: 898px;\
		}\
		.AWA-columns {\
			padding-left: 95px !important;\
		}\
		#AWA-staging-area #staging-area-text {\
			padding-left: 25px;\
			padding-top: 15px;\
			padding-right: 15px;\
		}\
		#AWA-staging-area p {\
			margin-top: 5px;\
		}\
		#oc-heading-bold {\
			font-weight: 700;\
			font-size: 18px;\
		}\
		.AWA-loading {\
			display: none;\
			padding-left: 4px;\
  			vertical-align: middle;\
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


			/* --------------------- Offer Pull  --------------------- */

			var orderCodeLink = "<a id='order-code-link' href='#'>have order code?</a>";
			$('.search-portlet').after(orderCodeLink);

			var orderCodeBox = "<div id='order-code-box'>\
				<a id='oc-close' href='#'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='16' height='16px' style='float: right'></a>\
				<br>\
				<br>\
				<span id='oc-bold'>Enter your order code:&nbsp;&nbsp;</span>\
				<form id='gift-code-form2' name='promotionForm'>\
					<input size='7' class='full' name='promotionCode' type='text' value=''>\
					<input id='use-order-code' type='submit' value='Use Order Code'>\
				</form>\
				<div style='clear: both'></div>\
				<br>\
				<p>\
				An order code activates unique offers. If you have an order code, enter it in the box above to see the offers associated with that code. <a id='learn-mode-link' href='http://www.thompson-morgan.com/help-with-order-codes' target='_blank'>Learn more</a>&nbsp;>\
				</p>\
			</div>\
			<div id='AWA-staging-area'>\
			</div>";

			var viewContainer = $('.VIEW-CONTAINER.centerContainer')[1];
			$(viewContainer).prepend(orderCodeBox);

			// Insert loading gif
			var loading = "<img class='AWA-loading' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/d775a9570d4a50bb4069190b4ae5c60f_35_35.gif' width='20' height='20'>";
			$('#use-order-code').after(loading);

			var ocBox = $('#order-code-box');

			$('#order-code-link').click(function(e) {
				e.preventDefault();
			    $(ocBox).slideDown();
			});

			$('#oc-close').click(function(e) {
				e.preventDefault();
			    $(ocBox).slideUp();
			});

			//$('input[name="promotionCode"]').val("DM306");

			$('#gift-code-form2').submit(function(e) {
				e.preventDefault();
				$('.AWA-loading').show();

				$.ajax({
				    type: "POST",
				    url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
				    data: $('#gift-code-form2').serialize(),
				    success: function(data) {
				    	$('.AWA-loading').hide();
				    	$('#order-code-box').hide();
				    	$('#AWA-staging-area').show();

				    	var response = $(data);
				    	var promotions = response.find("#UIContainer-185576316");
				    	$('#AWA-staging-area').html(promotions);

				    	// Don't attempt HTML fix in product tables since IE does not need it
				    	if (!detectIE()) {
							$('#AWA-staging-area #1407945131 .addToBasket').each(function() {
								$(this).click(function(e){
									e.preventDefault();
									var offerForm = $(this).parent().prev().prev();
									var quantityInput = $(this).parents('tr').find('input[name="quantity"]').clone();
									$(offerForm).append(quantityInput);
									$(offerForm).submit();
								});
							});
				    	}

						// Remove extra HTML from pulled offer
						$('#AWA-staging-area #1407945131 #removeDIV').hide();
						$('#AWA-staging-area #1407945131 .basket-options').hide();
						$('#AWA-staging-area #1407945131 .pageTitleContent').hide();
						$('#AWA-staging-area #1407945131 .basket-items').children('h3').hide();
						$('#AWA-staging-area #1407945131 .basketPromotions').siblings().hide();

						// Add class to the basket promotions so we don't affect the CSS of the real basket page
						$('#AWA-staging-area #1407945131 .basketPromotions').addClass("AWA-offers");
						// Do the same for some of the columns
						$('#AWA-staging-area #1407945131 .basketPromotions .promotionButton').addClass('AWA-columns');

						// Enter top text for staging area
						var stagingAreaText = "\
						<div id='staging-area-text'>\
							<a id='result-close' href='#'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='17' height='17px' style='float: right'></a>\
							<div id='oc-heading-bold'>\
								Your order code: <span id='old-oc'></span>\
							</div>\
							<p id='AWA-error'>\
								This code unlocks the exclusive special offers below:</p>\
						</div>";
						$('#AWA-staging-area').prepend(stagingAreaText);

						// Show invalid order code message
						if ($('.voucherActionMessage:contains("Your order code has not been recognised")').length > 0) {
							$('#AWA-staging-area #AWA-error').html('<span class="error">Your order code has not been recognised. Please <a href="/help-with-order-codes">click here</a> for more details.</span>');
						} else if ($('.voucherActionMessage:contains("The promotion code has now expired")').length > 0) {
							$('#AWA-staging-area #AWA-error').html('<span class="error">The promotion code has now expired.</span>');
						}

						// Insert old offer code into staging area
						var oldOfferCode = $("input[name=promotionCode]").val();
						$('#old-oc').text(oldOfferCode);

						$('#result-close').click(function(e) {
							e.preventDefault();
						    $('#AWA-staging-area').slideUp();
						});
				    }
				});
			});

			function detectIE() {
			    var ua = window.navigator.userAgent;

			    var msie = ua.indexOf('MSIE ');
			    if (msie > 0) {
			        // IE 10 or older => return version number
			        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
			    }

			    var trident = ua.indexOf('Trident/');
			    if (trident > 0) {
			        // IE 11 => return version number
			        var rv = ua.indexOf('rv:');
			        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
			    }

			    var edge = ua.indexOf('Edge/');
			    if (edge > 0) {
			       // IE 12 => return version number
			       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
			    }

			    // other browser
			    return false;
			}
		};

		// Run the experiment
		exp.init();

		// Return the experiment object so we can access it later if required
		return exp;

		// Close the IIFE, passing in jQuery and any other global variables as required
		// if jQuery is not already used on the site use optimizely.$ instead
	})(jQuery);
}
