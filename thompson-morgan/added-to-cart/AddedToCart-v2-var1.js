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
	exp.log('Added to Cart - v2 - var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('body');

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Added to Cart failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		popup: 	"<div id='AWA-popup-A'>\
					<img id='AWA-close-A' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/23bba644572e57b9011eabd4a40d1ddd_478_477.png'>\
					<span id='AWA-atc-close-link'>CLOSE</span>\
					<h2 id='AWA-added-product'></h2>\
					<h2>was added to your basket</h2>\
					<a href='#' id='AWA-continue-shopping'>Continue Shopping</a>\
					<a href='http://www.thompson-morgan.com/basket' id='AWA-checkout-link'>Checkout</a>\
					<div id='AWA-divider'></div>\
					<h3>Spend only &pound;<span id='AWA-difference'></span> more to qualify for FREE P&P</h3>\
					<p>You may be interested in this special offer:</p>\
					<div id='AWA-load'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/71a4b89dfcd68f7d377eec0fb16aa585_200_200.gif'></div>\
					<div id='AWA-so'></div>\
					<div id='AWA-so-link'><a href='http://www.thompson-morgan.com/special-offers'>View all special offers</a></div>\
				</div>"
	}

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-atc-close-link {\
	    display: block;\
	    width: 41px;\
	    float: right;\
	    margin-top: 11px;\
	    text-decoration: underline;\
	    cursor: pointer;\
	}\
	#AWA-popup-A {\
		display: none;\
		position: fixed;\
		width: 575px;\
		top: 25%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		padding: 15px;\
		background-color: white;\
		padding-bottom: 35px;\
	}\
	#AWA-popup-A img {\
	    width: 25px;\
	    float: right;\
	    padding: 8px;\
	}\
	#AWA-close-A {\
		cursor: pointer;\
	}\
	#AWA-popup-A #AWA-load img {\
		width: 100px;\
		float: none;\
		padding: 0;\
		margin: 0 auto;\
		display: block;\
	}\
	#AWA-added-product, #AWA-popup-A h2 {\
		font-size: 22px;\
		padding-top: 7px;\
		clear: both;\
		text-align: center;\
		margin-bottom: 10px;\
	}\
	#AWA-continue-shopping {\
		background-color: #00562C;\
		color: white !important;\
		display: block;\
		padding: 8px 20px;\
		margin: 0 auto;\
		margin-bottom: 12px;\
		margin-top: 22px;\
		width: 108px;\
		text-align: center;\
	}\
	#AWA-continue-shopping:hover {\
		background-color: #B60718;\
	}\
	#AWA-checkout-link {\
		text-decoration: underline;\
		text-align: center;\
		display: block;\
	}\
	#AWA-checkout-link:hover {\
		text-decoration: none;\
	}\
	#AWA-divider {\
		border-bottom: solid 2px #ADACAC;\
		width: 90%;\
		margin: 0 auto;\
		margin-top: 20px;\
	}\
	#AWA-popup-A h3 {\
		text-align: center;\
		margin-top: 20px;\
	}\
	#AWA-popup-A p {\
		text-align: center;\
		font-size: 15px;\
	}\
	.AWA-so-image {\
		width: 100px !important;\
		float: left !important;\
		margin-top: 30px;\
		margin-left: 67px;\
	}\
	.AWA-so-product {\
		width: 61%;\
		float: right;\
	}\
	#AWA-so .AWA-so-product h2 {\
		text-align: left;\
		font-size: 14px;\
		color: black !important;\
		font-weight: normal;\
		margin-top: 25px;\
	}\
	#AWA-so .promo {\
		padding-top: 0;\
	}\
	#AWA-so .basket {\
		margin: 10px 0 0 0;\
	}\
	#AWA-so-link {\
		text-align: center;\
		padding-top: 15px;\
		clear: both;\
	}\
	#AWA-so-link a {\
		text-decoration: underline;\
	}\
	#AWA-so-link a:hover {\
		text-decoration: none;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

		// Attach popup and show/hide functionality
		$('<div id="__msg_overlay-A">').css({
		      "width" : "100%"
		    , "height" : "100%"
		    , "background" : "#000"
		    , "position" : "fixed"
		    , "top" : "0"
		    , "left" : "0"
		    , "zIndex" : "150"
		    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
		    , "filter" : "alpha(opacity=60)"
		    , "MozOpacity" : 0.6
		    , "KhtmlOpacity" : 0.6
		    , "opacity" : 0.6
		}).appendTo(document.body);
		$('body').append(exp.vars.popup);
		$('#__msg_overlay-A').hide();

		// Close popup
		$('#AWA-close-A, #AWA-continue-shopping, #AWA-atc-close-link').click(function(e) {
			e.preventDefault();
			$('#AWA-popup-A').hide();
			$('#__msg_overlay-A').hide();
		});

		// Calculate difference until $60.00
		var cartValue = $.trim($("#cart-content").find('span').text()).substring(1);
		exp.log("Cart Value: " + cartValue);
		var difference = 60.00 - cartValue;
		difference = Number(difference);
		difference = difference.toFixed(2);
		exp.log('Difference: ' + difference);

		// If there is at least 49 in the cart
		if (cartValue >= 49) {
			// If the difference is under 60.00 show the popup
			if (difference > 0 && difference < 60.00) {
				if ($("#addBasketSuccessDIV").is(':visible')) {
					$("#addBasketSuccessDIV").hide();
					openPopup();
				}
			}
		} else {
			exp.log('Cart value less than 49');
		}



		function openPopup() {
			$('#AWA-popup-A').show();
			$('#__msg_overlay-A').show();
			$("#AWA-added-product").text($(".pageTitleContent").text());
			$("#AWA-difference").text(difference);

			// Get a recommended product
			$.ajax({
			    type: "GET",
			    url: "http://www.thompson-morgan.com/flower-bulb-sale?sortBy=bestsellers&lastSelectedFacet=&page=all",
			    success: function(data) {
			    	var response = $(data);
			    	var $products = response.find("#results tr");

			    	$("#AWA-load").hide();

			    	var productArray = [];

			    	$products.each(function() {
			    		var scope = this;
			    		// obj.image = $(this).find('.resultSet').find('.floatLeft').find('a').find('img').attr('src');
			    		var name = $.trim($(this).find('.resultSet').find('.facetDescription').find('h3').first().text());
			    		// obj.prices = [];

			    		// Place all item prices in the obj.price array for the current product
			    		$(this).find('.stockInfo').each(function() {
			    			var obj = {};
			    			obj.name= name;
			    			var price = $.trim($(this).find('.price').first().contents().filter(function() {return this.nodeType == 3;}).text());
			    			price = price.substring(1);
			    			obj.price = Number(price);
			    			productArray.push(obj);
			    		});
			    		
			    	});


		    		exp.log(productArray);
					function closest(arr, difference){
					    var highPrice = Math.max.apply(Math,arr.map(function(o){return o.price;})); // Get the highest number in arr in case it match nothing.
					    exp.log("difference: " + difference);
					    exp.log("highest price: " + highPrice);
					    for (var i = 0; i < arr.length; i++) {
					        if (arr[i].price >= difference && arr[i].price < highPrice) {
					        	highPrice = arr[i].price; // Check if it's higher than your number, but lower than your closest value
					        	exp.log("highPrice: " + highPrice)
					        }
					    }
					    return highPrice; // return the value
					}
					var targetPrice = closest(productArray, difference);
					exp.log(targetPrice);
	

			    	// Find the target product
			    	var recommendedProduct = {};
			    	$products.each(function() {
			    		var product = this;
			    		$(product).find('.stockInfo').each(function() {
			    			var price = $.trim($(this).find('.price').first().contents().filter(function() {return this.nodeType == 3;}).text());
			    			price = price.substring(1);
			    			if (price == targetPrice) {
			    				recommendedProduct.html = $(this).html();
			    				recommendedProduct.image = $(this).closest('.resultSet').find('a').find('img').first().attr('src');
			    				recommendedProduct.name =  $.trim($(this).closest('.resultSet').find('h3').first().text());
			    				recommendedProduct.url = $(this).closest('.facetDescription').find('h3').closest('a').attr('href')
			    			}
			    		});
			    	});

			    	// Plug in the recommended product
			    	exp.log(recommendedProduct);

			    	$("#AWA-so").html(recommendedProduct.html);
			    	$("#AWA-so").prepend("<img class='AWA-so-image' src='" + recommendedProduct.image + "'>");
			    	$("#AWA-so").find('div').first().addClass('AWA-so-product');
			    	$(".AWA-so-product").prepend("<h2><a href='" + recommendedProduct.url + "'>" + recommendedProduct.name + "</a></h2>");

			    	// Hide Despatch date
			    	$("#AWA-so .despatch").hide();
			    	$("#AWA-so .quantity").hide();

			    	// Hide .size ul since it has a strange height property
			    	$("#AWA-so .size").closest('.productInfoLeft').find('ul').first().hide();

			    	/* Price formatting */
			    	var newPrice = $.trim($("#AWA-so").find('.price').first().contents().filter(function() {return this.nodeType == 3;}).text());
			    	// If there's a strikethrough price...
			    	if ($("#AWA-so .price").find('strike').text().length) {
			    		$("#AWA-so .basket").before("<div id='AWA-so-strike'><strike>" + $("#AWA-so .price").find('strike').text() + "</strike>&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-weight: bold;'>You pay only: " + newPrice + "</span></div>");
			    	} else {
			    		$("#AWA-so .basket").before("<div id='AWA-so-strike'><span style='font-weight: bold;'>You pay only: " + newPrice + "</span></div>");
			    	}
			    	// Hide old price div
					$("#AWA-so .price").hide();

			    }
			});

		}

	};

	// Only run on non-search pages
	if (window.location.href.indexOf("search") == -1) {
		exp.init();
	}

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

