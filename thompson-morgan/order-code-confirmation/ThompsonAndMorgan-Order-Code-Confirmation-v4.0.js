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
		exp.log('Order Code Confirmation - 4.0');

		/*
		// Condition
		// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
		exp.condition = $('.unique-selector');
		*/
		exp.condition = $('.basket-portlet');

		// Check for a condition and return false if it has not been met
		/*if(exp.condition && !exp.condition.length) {
		    exp.log('Experiment failed a condition');
		    return false;
		}*/
		if (exp.condition && !exp.condition.length) {
		    exp.log('Order Code Confirmation failed a condition');
		    return false;
		}

		// Variables
		// Object containing variables, generally these would be strings or jQuery objects
		exp.vars = {
		};

		// Styles
		// String containing the CSS for the experiment
		exp.css = '\
		.loading {\
		    display: none; vertical-align: bottom; padding-bottom: 6px;\
		}\
		.modal-bg {\
			display: none; position: fixed; font-family: Arial, Helvetica, sans-serif; top: 0; right: 0; bottom: 0; left: 0; z-index: 99999; -webkit-transition: opacity 400ms ease-in; -moz-transition: opacity 400ms ease-in; transition: opacity 400ms ease-in;\
		}\
		#order-confirmation {\
		    left: 0; margin-left: 30%; position: fixed; top: 5%; width: 500px; z-index: 200; padding: 20px; background: white; border: solid 1px black;\
		}\
		#order-confirmation h2 {\
		    margin-bottom: 28px;\
		}\
		#keep {\
		    border: solid 1px black; width: 145px; background: #dddddd; text-align: center; padding: 2px; float: left; margin-left: 26px;\
		}\
		#replace {\
		   border: solid 1px black; width: 145px; background: #274e13; text-align: center; padding: 2px; color: white; float: right; margin-right: 26px;\
		}\
		.red-savings {\
		    color: red;\
		}\
		#new-offers-list, #old-offers-list {\
		   margin-top: 15px;\
		}\
		#new-offers-list li, #old-offers-list li {\
		   margin-bottom: 12px; color: #515151;\
		}\
		.new-bullet {\
		   margin-right: 7px;\
		}\
		#break-line {\
		   margin: 0 auto; width: 225px; border-bottom: solid 1px gray; margin-bottom: 12px;\
		}\
		#keep-loading {\
			display: none; margin-top: 4px;\
		}\
		.indent {\
		   margin-left: 13px;\
		}';


		// Functions
		// Object containing functions, some helpful functions are included
		exp.func = {};

		// Init function
		// Called to run the actual experiment, DOM manipulation, event listeners, etc
		exp.init = function() {
		    // Append style to head
		    $('head').append('<style type="text/css">'+this.css+'</style>');


		    // Make HTML for new modal
			var orderCodeConfirmation = "<div class='modal-bg'>\
				<div id='order-confirmation'>\
					<h2>You are about to replace your offers</h2>\
					<p><strong>Your basket contains these special offers from order code <span id='existing-oc'></span>:</strong></p>\
					<div id='old-offers'>\
					</div>\
					<div id='break-line'></div>\
					<p><strong>If you use code <span id='new-oc'></span> you can choose from the offers below but the offers above will revert to their normal price:</strong></p>\
					<div id='new-offers'>\
					</div>\
					<p><strong>You can only use one order code per order. You can choose to:</strong></p>\
					<br>\
					<div id='decision'>\
						<a href='#'><div id='keep'>\
							KEEP<br>\
							your existing offers\
						</div></a>\
						<a href='#'><div id='replace'>\
							REPLACE<br>\
							your existing offers\
						</div></a>\
					</div>\
				</div>\
			</div>";

			// Get existing list of products in cart that are from an offercode
			var offerCodeData = [];
			$('.basketPromotions .details').each(function() {
				var topLine = $(this).find('p.textBold').text();
				if (topLine.length > 0) {
					// Remove "You have received ";
					var productTitleLine = topLine.slice(18);

					var i = productTitleLine.indexOf(' for '); // Accounts for "for £" and "for JUST"
					var productTitle = productTitleLine.substring(0, i);

					var productInfo = {};
					productInfo.title = productTitle;

					productInfo.discountPrice = $.trim(productTitleLine).substring(productTitleLine.indexOf(' for ') + 5);

					var j = productInfo.discountPrice.indexOf("JUST ");
					if (j != -1) {
						productInfo.discountPrice = productInfo.discountPrice.replace('JUST ','');
					}

					productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);

					if (productInfo.discountPrice[productInfo.discountPrice.length-1] === ".") {
						productInfo.discountPrice = productInfo.discountPrice.slice(0,-1);
					}
					if (productInfo.normalPrice[productInfo.normalPrice.length-1] === ".") {
						productInfo.normalPrice = productInfo.normalPrice.slice(0,-1);
					}

					productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1)).toFixed(2);

					if (productInfo.title.length > 0) {
						offerCodeData.push(productInfo);
					}
				}
			});

			exp.log(offerCodeData);
			var bullet = "<img class='new-bullet' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/8358b0c0be696375f820a5d65adfefd9_10_10.png'  width='6' height='6'>";

			var currentOfferProducts = "<ul id='old-offers-list'>";
			for (var i = 0; i < offerCodeData.length; i++) {
				currentOfferProducts += "<li>" + bullet + offerCodeData[i].title + ", You pay only  " + offerCodeData[i].discountPrice + ".<br><span class='indent'>- Normal price " + offerCodeData[i].normalPrice + ".<span class='red-savings'> You have saved " + offerCodeData[i].savings + ".</span></span></li>";
			}
			currentOfferProducts += "</ul>"

			$('.ordercode').after(orderCodeConfirmation);
			$('#old-offers').html(currentOfferProducts);

			var cookieCode = getCookie("PROMO_MEDIA_COOKIE");
			exp.log("cookieCode: " + cookieCode);
			var existingCode = cookieCode || $('.full').val();
			$('#existing-oc').text(existingCode);

			// Insert "KEEP" loading gif
			var keepLoading = "<img id='keep-loading' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/d775a9570d4a50bb4069190b4ae5c60f_35_35.gif'>";
			$('#keep').after(keepLoading);

			// Remove modal and do nothing if user keeps existing offers
			var $newModal = $('.modal-bg');
			$('#keep').click(function(e) {
				e.preventDefault();
				$('#keep-loading').show();

				// Use an AJAX call to reset the staged cookie from the first AJAX request
				$.ajax({
				    type: "POST",
				    url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
				    data: {promotionCode: existingCode},
				    success: function(data) {
				    	exp.log('Old order code sent: ' + this.data);
				    	$newModal.hide();
						$('.ordercode').hide();
						$('#keep-loading').hide();
				    }
				});
			});

			// Submit the form if user wants to replace offers
			$('#replace').click(function(e) {
				e.preventDefault();
				$('#gift-code-form').submit();
			});

			var loading = "<img class='loading' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/d775a9570d4a50bb4069190b4ae5c60f_35_35.gif' width='20' height='20'>"
			$('.useOrderCode').after(loading);

			// Populate new offers
			var bullet = "<img class='new-bullet' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/8358b0c0be696375f820a5d65adfefd9_10_10.png'  width='6' height='6'>";

			// Prevent user from using enter key to submit
			$("#gift-code-form").bind("keypress", function (e) {
			    if (e.keyCode == 13) {
			        return false;
			    }
			});

			$('.useOrderCode').click(function(e) {
				var enteredCode = $('.full').val();
				$('#new-oc').text(enteredCode);
				if (enteredCode == cookieCode) {
					exp.log('using same code');
					return;
				}
				if (offerCodeData.length < 1) {
					exp.log('no offers to be replaced');
					return;
				}

				e.preventDefault();
				$('.loading').show();


				$.ajax({
				    type: "POST",
				    url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
				    data: $('#gift-code-form').serialize(),
				    success: function(data) {
				    	var response = $(data);

				    	$('.loading').hide();

				    	var errorMessageList = [];
				    	response.find('.error').each(function() {
							var errorMessage = $.trim($(this).text());
							errorMessageList.push(errorMessage);
						});
						for (var i = 0; i < errorMessageList.length; i++) {
							if (errorMessageList[i].substring(0, 39) == "Your order code has not been recognised") {
								exp.log('NOT recognised');
								$('#gift-code-form').submit();
								return;
							}
						}

						// Generate list of new potential offers from the AJAX call
				    	var offerCodeData2 = [];
				    	response.find('.basketPromotions .details').each(function() {
							var productText = $(this).find('p:nth-child(2)').text();
							var productTitle = productText.slice(8);
							var i = productTitle.indexOf(' with your order');
							productTitle = productTitle.substring(0, i);

							var productInfo = {};
							productInfo.title = productTitle;

							productInfo.discountPrice = $.trim($(this).find('strong').text()).slice(4);
							if (productInfo.discountPrice[productInfo.discountPrice.length-1] === ".") {
								productInfo.discountPrice = productInfo.discountPrice.slice(0,-1);
							}

							// Special case to not include "British Fuchsia Society membership"
							if (productInfo.discountPrice == " membership") {
								return;
							}

							productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
							if (productInfo.normalPrice[productInfo.normalPrice.length-1] === ".") {
								productInfo.normalPrice = productInfo.normalPrice.slice(0,-1);
							}

							productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1)).toFixed(2);

							// If the proposed new offer product is already in the cart then reset the productInfo object and still obtain the data
							if (productInfo.title.length < 1) {
								productInfo = {};
								var topLine = $(this).find('p.textBold').text();
								if (topLine.length > 0) {
									var productTitleLine = topLine.slice(18);
									var i = productTitleLine.indexOf(' for £');
									var productTitle = productTitleLine.substring(0, i);

									productInfo.title = productTitle;
									productInfo.discountPrice = $.trim(productTitleLine).substring(productTitleLine.indexOf('for £') + 4);
									if (productInfo.discountPrice[productInfo.discountPrice.length-1] === ".") {
										productInfo.discountPrice = productInfo.discountPrice.slice(0,-1);
									}

									productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
									if (productInfo.normalPrice[productInfo.normalPrice.length-1] === ".") {
										productInfo.normalPrice = productInfo.normalPrice.slice(0,-1);
									}

									productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1)).toFixed(2);

								}
							}
							if (productInfo.title.length > 0) {
								offerCodeData2.push(productInfo);
							}
						});
						exp.log(offerCodeData2);

						var newOfferProducts = "<ul id='new-offers-list'>";
						for (var i = 0; i < offerCodeData2.length; i++) {
							newOfferProducts += "<li>" + bullet + offerCodeData2[i].title + ", normal price " + offerCodeData2[i].normalPrice + ".<br><span class='indent'>- You pay only " + offerCodeData2[i].discountPrice + ".<span class='red-savings'> Save " + offerCodeData2[i].savings + ".</span></span></li>";
						}
						newOfferProducts += "</ul>"

						$('#new-offers').html(newOfferProducts);


						$newModal.show();

				    }
				});
			});


			function getCookie(name) {
			    var value = "; " + document.cookie;
			    var parts = value.split("; " + name + "=");
			    if (parts.length == 2) return parts.pop().split(";").shift();
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