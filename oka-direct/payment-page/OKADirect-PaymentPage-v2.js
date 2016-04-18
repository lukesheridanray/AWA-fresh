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
	exp.log('Payment Page v1.0');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('.stepFive');

	// Check for a condition and return false if it has not been met
	if(exp.condition && !exp.condition.length) {
	    exp.log('Payment Page Experiment failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.span12:nth-child(1) {\
		width: 366px;\
	}\
	.button-group {\
		margin-top: 0px;\
	}\
	@media only screen and (max-width: 410px) {\
		.button-group-checkout2 {\
			margin-top: 0px;\
		}\
	}\
	@media (max-width: 767px) {\
		.span12:nth-child(1) {\
			width: 100%;\
		}\
		.span12:nth-child(1) button,  .span12:nth-child(1) button:hover {\
			padding: 10px 15px !important;\
		}\
	}\
	@media (max-width: 979px) and (min-width: 768px) {\
		.span12:nth-child(1) {\
			width: 333px;\
		}\
	}\
	@media (min-width: 1200px) {\
		.span12:nth-child(1) {\
		    width: 428px;\
		}\
	}\
	.span12:nth-child(1) button, .span12:nth-child(1) button:hover {\
		background-color: white;\
		border: solid 1px #ccc !important;\
		color: #666;\
	}\
	.span12:nth-child(1) button:hover {\
		background-color: #ccc !important;\
		color: white;\
	}\
	.span12:nth-child(1) button:hover .icon-white {\
		background-position: -432px -72px;\
		background-image: url(https://resources1.okadirect.com/assets/css/img/glyphicons-halflings-white.png)\
	}\
	.span12:nth-child(1) button .icon-white {\
		background-position: 0px 0px;\
		background-image: url(https://resources1.okadirect.com/assets/img/icons/arrow-back-grey.png);\
	}\
	#AWA-edit {\
		border-top: solid 1px black;\
		font-weight: normal;\
		padding-top: 10px;\
	}\
	#ctl00_MainContentArea_CheckoutCartViewModuleNew_updPanel tfoot.custom tr.t-sub th, #ctl00_MainContentArea_CheckoutCartViewModuleNew_updPanel tfoot.custom tr.t-sub td {\
		padding-top: 0;\
		border-top: 0;\
	}\
	#ctl00_MainContentArea_CheckoutDeliveryOptionModule_CheckoutCartViewModuleNew_updPanel tfoot.custom tr.t-sub th, #ctl00_MainContentArea_CheckoutDeliveryOptionModule_CheckoutCartViewModuleNew_updPanel tfoot.custom tr.t-sub td {\
		padding-top: 0;\
		border-top: 0;\
	}\
	.muted.pull-right.card-js {\
		margin-top: 20px;\
	}\
	#checkout-payment .promotion {\
		border-bottom: 0;\
	}\
	@media (min-width: 1200px) {\
		.controls label.checkbox {\
			width: 341px;\
		}\
	}\
	#checkout-payment .promotion {\
		margin-bottom: 10px;\
		padding-bottom: 0px;\
	}';


	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Remove Product ID, delivery blurb, and Remove link for each product in Order Summary
	    function summarize() {
		    $('.t-description .block').remove();
		    $('.t-quantity .block').remove();

		    // Remove product images
		    $('.t-product').find('a').remove();

		    // Remove quantity inputs but keep original value
		    $('.t-quantity').find('select').each(function() {
		    	var originalValue = $(this).val();
		    	$(this).replaceWith(originalValue);
		    });

		    // Shorten product titles
		    $('td.t-description').each(function() {
		    	var productTitle = $.trim($(this).text());
		    	if (productTitle.indexOf(' - ') >= 0) {
				    productTitle = productTitle.substring(0, productTitle.indexOf(' - '));
				}
		    	$(this).text(productTitle);
		    });

		    // Change Price column header to "Total"
		    $('th.t-price').text('Total');

		    // Add "Edit" link under summary
		    if ($('.stepFive span').css('color') != "rgb(18, 166, 164)") {
			    if ($('#AWA-edit').length < 1) { // Conditional needed to prevent repeat insertion
					$('tfoot.custom').prepend('<tr><th id="AWA-edit" colspan="4"><a href="http://www.okadirect.com/en-GB/page/my-cart/">Edit</a></th></tr>');
			    }
			}
		}

		summarize();

		var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (screenWidth > 767) {
			console.log('greater than 767')
			var leftCol = $('.span6.col');
			var buttonRow = $('.row').last();
			leftCol.append(buttonRow);
		}
		$('.table').first().attr('style', 'margin-bottom: 0');

		$(window).resize(function() {
		  	// Move back and continue buttons up on payment page
			if ($('.stepFour span').css('color') == "rgb(18, 166, 164)") {
				var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				if (screenWidth > 767) {
					var leftCol = $('.span6.col');
					var buttonRow = $('.row').last();
					leftCol.append(buttonRow);
				} else {
					var buttonRow = $('.row').last();
					var leftCol = $('.span6').last();
					leftCol.after(buttonRow);
				}
			}
		});

		// Align mailings blurb to the left if it exisits
		if ($('#ctl00_MainContentArea_signupsection').length) {
			$('#ctl00_MainContentArea_signupsection').attr('style', 'margin-left: 0;');
		}

		// Move location of promo code section - Based on whether or not there are billing details from the Delivery Options Page
		var promoCode = $('.control-group.promotion');
		if ($('.control-group:contains("Billing Details")').length >= 1) {
			var billingDetails = $('.control-group:contains("Billing Details")');
			$(billingDetails).after(promoCode);
		} else {
			var securityCode = $('.control-group:contains("Security Code")');
			$(securityCode).after(promoCode);
		}

		var promoLink = $('.form-horizontal').find('p:contains("Do you have a promotion code?")');
		$(promoCode).before(promoLink);

		$(promoLink).html("<a href='#' id='AWA-promo-link'>Do you have a promotion code?</a>");
		var promoCodeText = $('label.control-label:contains("Promotion Code")');
		$(promoCodeText).attr('style', 'display: none');
		var promoCodeInput = $('.control-group.promotion .controls.promo-controls-div');
		$(promoCodeInput).attr('style', 'display: none');

		// Show/hide promo code input
		$('#card-payment').on('click', '#AWA-promo-link', function(e) {
			e.preventDefault();
			if ($(promoCodeText).is(":visible")) {
				$(promoCodeText).slideUp();
				$(promoCodeInput).slideUp();
			} else {
				$(promoCodeText).slideDown();
				$(promoCodeInput).slideDown();
			}
		});

		// Move terms and conditions link above the Place Order button
		var terms = $('.muted.pull-right.card-js');
		$('.button-group.button-group-checkout-payment.span12').append(terms);


		// Reapply summarize function when delivery method changes
		if ($('.stepThree span').css('color') == "rgb(18, 166, 164)") {

			// Move Continue and Back buttons up a bit
			$('.button-group-checkout2').addClass('step3-buttons');
			var options = $('.span5').find('input[type=radio]').length;

			// Since we're using negative margins, don't move it up if there are more than 2 delivery options or collection from a shop just to be safe
			if (options <= 1 && $('span .pull-left:contains("Collect from")').length >= 1) {

			}  else if (options <= 1 && $('span .pull-left:contains("Collect from")').length == 0) {
				$('body').append("<style type='text/css'>@media (min-width: 767px) { .step3-buttons {margin-top: -136px;} }</style>");
			} else if (options > 1) {
				$('body').append("<style type='text/css'>@media (min-width: 767px) { .step3-buttons {margin-top: -58px;} }</style>");
			}

			exp.log('Checking for delivery method change');

			$('#ctl00_MainContentArea_CheckoutDeliveryOptionModule_CheckoutCartViewModuleNew_lblShippingCharge').attr('data-initialval', 'true');

			setInterval(function() {
			    if ($('#ctl00_MainContentArea_CheckoutDeliveryOptionModule_CheckoutCartViewModuleNew_lblShippingCharge').data('initialval') != true) {
			        summarize();
			    } 
			}, 100);
		}

		// Summary table headings disappear by default. Add them back in on step 3 and 4
		if ($('.stepThree span').css('color') == "rgb(18, 166, 164)" || $('.stepFour span').css('color') == "rgb(18, 166, 164)" || $('.stepFive span').css('color') == "rgb(18, 166, 164)") {
			var tableHeadings = '\
			<tr>\
				<th class="t-product" id="t-product" scope="col"></th>\
				<th class="t-description" id="t-description" scope="col">Description</th>\
				<th class="t-quantity" id="t-quantity" scope="col">Quantity</th>\
				<th class="t-price" id="t-price" scope="col">Price</th>\
			</tr>';

			$('table.border.table.table-striped tr').first().after(tableHeadings);
		}

		//Remove span12 class on Confirmation page so it doesn't move buttom buttons
		if ($('.stepFive span').css('color') == "rgb(18, 166, 164)") {
			$('.span12:nth-child(1)').removeClass('span12');
		}
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

