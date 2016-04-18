//function () {
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
		exp.log('Order Code Confirmation - 1.0');

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
		    exp.log('Flowers Submenu Experiment failed a condition');
		    return false;
		}

		if ($('.normal').find('a').attr('href') == "http://www.thompson-morgan.com/flower-plants-top-20-best-sellers") {
			exp.log('Flowers Submenu Experiment failed a condition - experiment already running');
			return false;
		}
		// Variables
		// Object containing variables, generally these would be strings or jQuery objects
		exp.vars = {
		};

		// Styles
		// String containing the CSS for the experiment
		exp.css = '\
		.red-link a {\
		    color: red !important;\
		}';

		// Functions
		// Object containing functions, some helpful functions are included
		exp.func = {};

		// Init function
		// Called to run the actual experiment, DOM manipulation, event listeners, etc
		exp.init = function() {
		    // Append style to head
		    $('head').append('<style type="text/css">'+this.css+'</style>');

			var orderCodeConfirmation = "<div class='modal-bg'>\
				<div id='order-confirmation'>\
					<h2>You are about to replace your offers</h2>\
					<p><strong>Your basket contains these special offers from offer code <span id='existing-oc'></span>:</strong></p>\
					<div id='old-offers'>\
					</div>\
					<p><strong>If you use code <span id='new-oc'></span> you will gain the offers below but the offers above will revert to their usual price:</strong></p>\
					<div id='new-offers'>\
					</div>\
					<p><strong>You can only use one order code per order. Please make your choice:</strong></p>\
					<br>\
					<div id='decision'>\
						<a href='#'><div id='keep'>\
							KEEP<br>\
							my existing offers\
						</div></a>\
						<a href='#'><div id='replace'>\
							REPLACE<br>\
							my existing offers\
						</div></a>\
					</div>\
				</div>\
			</div>";

			var offerCodeData = [];
			$('.basketPromotions .details').each(function() {
				var topLine = $(this).find('p.textBold').text();
				if (topLine.length > 0) {
					var productTitleLine = topLine.slice(18);
					var i = productTitleLine.indexOf(' for £');
					var productTitle = productTitleLine.substring(0, i);

					var productInfo = {};
					productInfo.title = productTitle;
					productInfo.discountPrice = $.trim(productTitleLine).substring(productTitleLine.indexOf('for £') + 4);
					productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
					productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1)).toFixed(2);
					if (productInfo.title.length > 0) {
						offerCodeData.push(productInfo);
					}
				}
			});
			console.warn(offerCodeData);
			var bullet = "<img class='new-bullet' src='http://i.imgur.com/XgJDPfO.png'>";

			var currentOfferProducts = "<ul id='old-offers-list'>";
			for (var i = 0; i < offerCodeData.length; i++) {
				currentOfferProducts += "<li>" + bullet + offerCodeData[i].title + ", normal price " + offerCodeData[i].normalPrice + "<br><span class='indent'>- You pay only " + offerCodeData[i].discountPrice + "<span class='red-savings'> Save " + offerCodeData[i].savings + "</span></span></li>";
			}
			currentOfferProducts += "</ul>"

			$('.ordercode').after(orderCodeConfirmation);
			$('#old-offers').html(currentOfferProducts);

			$('.modal-bg').attr('style', 'display: none; background:rgba(0, 0, 0, 0.33); position:fixed; top:0; left:0; width:100%; height:100%; z-index:10; ');

			$('#order-confirmation').attr('style', 'left: 0; margin-left: 30%; position: fixed; top: 5%; width: 500px; z-index: 200; padding: 20px; background: white; border: solid 1px black');

			$('#order-confirmation h2').attr('style', 'margin-bottom: 28px;');

			$('#keep').attr('style', 'border: solid 1px black; width: 145px; background: #dddddd; text-align: center; padding: 2px; float: left; margin-left: 26px;');
			$('#replace').attr('style', 'border: solid 1px black; width: 145px; background: #274e13; text-align: center; padding: 2px; color: white; float: right; margin-right: 26px;');


			var cookieCode = getCookie("PROMO_MEDIA_COOKIE");
			console.log("cookieCode: " + cookieCode);
			$('#existing-oc').text(cookieCode);

			$('#keep').click(function(e) {
				e.preventDefault();
			    if ($newModal.is(":visible")) {
					$newModal.hide();
				}
			});

			$('#replace').click(function(e) {
				e.preventDefault();
				$('#gift-code-form').submit();
			});



			var loading = "<img class='loading' src='http://i.imgur.com/YnhX7Ey.gif' width='20' height='20'>"
			$('.useOrderCode').after(loading);
			$('.loading').attr('style', 'display: none; vertical-align: bottom; padding-bottom: 6px;');

			// Populate new offers
			var bullet = "<img class='new-bullet' src='http://i.imgur.com/XgJDPfO.png'>";

			var $newModal = $('.modal-bg');


			$('.useOrderCode').click(function(e) {
				var enteredCode = $('.full').val();
				$('#new-oc').text(enteredCode);
				if (enteredCode == cookieCode) {
					console.info('using same code');
					return;
				}
				if (offerCodeData.length < 1) {
					console.info('no offers to be replaced');
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
								console.log('NOT recognised');
								$('#gift-code-form').submit();
								return;
							}
						}
						
				    	var offerCodeData2 = [];
				    	response.find('.basketPromotions .details').each(function() {
				    	//$('.basketPromotions .details').each(function() {
							var productText = $(this).find('p:nth-child(2)').text();
							var productTitle = productText.slice(8);
							var i = productTitle.indexOf(' with your order');
							productTitle = productTitle.substring(0, i);

							var productInfo = {};
							productInfo.title = productTitle;
							productInfo.discountPrice = $.trim($(this).find('strong').text()).slice(4);
							productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
							productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1)).toFixed(2);

							if (productInfo.title.length < 1) {
								productInfo = {};
								var topLine = $(this).find('p.textBold').text();
								if (topLine.length > 0) {
									var productTitleLine = topLine.slice(18);
									var i = productTitleLine.indexOf(' for £');
									var productTitle = productTitleLine.substring(0, i);

									productInfo.title = productTitle;
									productInfo.discountPrice = $.trim(productTitleLine).substring(productTitleLine.indexOf('for £') + 4);
									productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
									productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1)).toFixed(2);

								}
							}
							if (productInfo.title.length > 0) {
								offerCodeData2.push(productInfo);
							}
						});
						console.log(offerCodeData2);

						var newOfferProducts = "<ul id='new-offers-list'>";
						for (var i = 0; i < offerCodeData2.length; i++) {
							newOfferProducts += "<li>" + bullet + offerCodeData2[i].title + ", normal price " + offerCodeData2[i].normalPrice + "<br><span class='indent'>- You pay only " + offerCodeData2[i].discountPrice + "<span class='red-savings'> Save " + offerCodeData2[i].savings + "</span></span></li>";
						}
						newOfferProducts += "</ul>"

						$('#new-offers').html(newOfferProducts);

						if ($newModal.is(":visible")) {
							$newModal.hide();
						} else {
							$('.ordercode').hide();
							$newModal.show();
						}

						$('.red-savings').attr('style', 'color: red;');
						$('#new-offers-list').attr('style', 'margin-top: 15px;');
						$('#new-offers-list li').attr('style', 'margin-bottom: 12px; color: #515151;');
						$('.new-bullet').attr('style', 'margin-right: 3px;');
						$('.indent').attr('style', 'margin-left: 13px;');
				    }
				});
			});


			$('.red-savings').attr('style', 'color: red;');
			$('#old-offers-list').attr('style', 'margin-top: 15px;');
			$('#old-offers-list li').attr('style', 'margin-bottom: 12px; color: #515151;');
			$('.new-bullet').attr('style', 'margin-right: 3px;');
			$('.indent').attr('style', 'margin-left: 13px;');


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
//}