function() {
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
	exp.log('List Page Quickview v3 - var2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#142032466");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Product Listing Page Quickview failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		popup: 	"<div id='AWA-data-template'>\
					<div id='AWA-quick'><span id='AWA-quick-view'>QUICK VIEW</span>&nbsp;&nbsp;<a class='AWA-extra-view-all' href='#'>view full product details</a></div>\
					<img id='AWA-listing-close' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/23bba644572e57b9011eabd4a40d1ddd_478_477.png'>\
					<span id='AWA-listing-close-link'>CLOSE</span>\
					<h1 id='AWA-dt-title'><a href='#' id='AWA-dt-source'></a></h1>\
					<div id='AWA-image-holder'>\
						<img id='AWA-large-image' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/f5139756aa153d9a71536c7b141c39d0_420_420.jpeg'>\
					</div>\
					<ul id='AWA-dt-list'>\
						<li><strong>Ideal For:</strong> <span class='AWA-ideal-for'></span></li>\
						<li><strong>Hardiness:</strong> <span class='AWA-hardiness'></span></li>\
						<li><strong>Position:</strong> <span class='AWA-sun-shade'></span></li>\
						<li><strong>Height:</strong> <span class='AWA-height'></span></li>\
						<li><strong>Spread:</strong> <span class='AWA-spread'></span></li>\
						<li><strong>Flowering Period:</strong> <span class='AWA-flowering-months'></span></li>\
						<li><strong>Sowing Months:</strong> <span class='AWA-sowing-months'></span></li>\
						<li><strong>Harvest Months:</strong> <span class='AWA-harvest-period'></span></li>\
					</ul>\
					<p class='AWA-product-description'></p>\
					<div id='AWA-dt-add'></div>\
					<a class='AWA-extra-view-all' id='AWA-view-all2' href='#'>view full product details</a>\
				</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-image-holder {\
		background-color: white;\
		width: 420px;\
		height: 420px;\
		float: left;\
	}\
	#AWA-quick {\
		float: left;\
		padding-top: 8px;\
	}\
	.AWA-extra-view-all {\
		text-decoration: underline !important;\
	}\
	#AWA-view-all2 {\
		display: block;\
		clear: both;\
		text-align: center;\
		margin-top: 10px;\
	}\
	#AWA-listing-close-link {\
	    display: block;\
	    width: 41px;\
	    float: right;\
	    margin-top: 11px;\
	    text-decoration: underline;\
	    cursor: pointer;\
	}\
	#AWA-listing-close {\
	    width: 25px;\
	    float: right;\
	    padding: 8px;\
	    cursor: pointer;\
	}\
	#AWA-data-template {\
		display: none;\
		position: fixed;\
		width: 765px;\
		top: 19%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		padding: 15px 25px;\
		background-color: white;\
		padding-bottom: 35px;\
		top: 50%;\
		left: 50%;\
		transform: translate(-50%, -50%);\
		-webkit-transform: translate(-50%, -50%);\
		-ms-transform: translate(-50%, -50%);\
		padding-bottom: 15px;\
		max-height: 760px;\
		overflow: scroll;\
		overflow-x: hidden;\
	}\
	#AWA-dt-title {\
		clear: both;\
		margin-bottom: 25px;\
		text-align: center;\
	}\
	#AWA-dt-source {\
		color: #00572d !important;\
		font-size: 20px;\
		font-weight: bold;\
		line-height: 16px;\
	}\
	#AWA-large-image {\
		display: block;\
		float: left;\
		width: 420px;\
	}\
	#AWA-dt-list {\
		width: 267px;\
		float: left;\
		margin-top: 50px;\
		margin-left: 30px;\
	}\
	.AWA-product-description {\
		clear: both;\
		padding-top: 20px;\
	}\
	#AWA-data-template .quantity {\
		display: none;\
	}\
	#AWA-data-template .stockInfo li.basket {\
		padding: 1px 0 0 15px;\
	}\
	#AWA-data-template .addToBasket {\
		background-image: url(http://media.thompson-morgan.com/medias/sys_tandm/8796108685342.gif);\
		margin: 0 auto;\
		margin-top: 25px;\
	}\
	#AWA-data-template li {\
		margin-right: 28px;\
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
		$('<div id="__msg_overlay-B">').css({
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
		$('#__msg_overlay-B').hide();


		// Click handler for images - removed in var 2
		// $(".floatLeft").find('a').find('img').closest('a').click(function(e) {
		// 	e.preventDefault();
		// 	initializePopup(this);
		// });

		// Click handler for "More info" link
		$(".moreInfo").click(function(e) {
			e.preventDefault();
			initializePopup(this);
		});

		// Change "More info" to "Quick View"
		$(".moreInfo").text('Quick View');

		function initializePopup(target) {
			$('#AWA-data-template').show();
			$('#__msg_overlay-B').show();

			// Insert product title
			$("#AWA-dt-source").text($.trim($(target).closest(".resultSet").find('h3').first().text()));
			// Link to product
			$("#AWA-dt-source").attr('href', $(target).attr('href'));
			$(".AWA-extra-view-all").attr('href', $(target).attr('href'));

			// Insert product description
			$(".AWA-product-description").html($(target).closest(".resultSet").find('.season').first().html());
			// Hide product icons
			$("a[href='/product-icon-key']").hide();

			// Get basket button
			var $addToBasket = $(target).closest(".resultSet").find('.stockInfo').first().parent();
			$("#AWA-dt-add").html($addToBasket.html());
			// Hide duplicate product information pulled from the .stockInfo parent
			$("#AWA-dt-add").children(":not('.stockInfo')").hide();


			// Get product code
            var productCode = $(target).attr("href");
            productCode = productCode.substr(productCode.lastIndexOf('/') + 1);
            exp.log(productCode);

            if (productJSON) {
            	if (productJSON[productCode]) {
            		if (productJSON[productCode]["ideal_for"]) {
            			$(".AWA-ideal-for").text(productJSON[productCode]["ideal_for"].split(',').join(', '));
            		} else {
            			$(".AWA-ideal-for").closest("li").hide();
            		}
            		if (productJSON[productCode]["hardiness"]) {
            			$(".AWA-hardiness").text(productJSON[productCode]["hardiness"]);
            		} else {
            			$(".AWA-hardiness").closest("li").hide();
            		}
            		if (productJSON[productCode]["sun_shade"]) {
            			$(".AWA-sun-shade").text(productJSON[productCode]["sun_shade"]);
            		} else {
            			$(".AWA-sun-shade").closest("li").hide();
            		}
            		if (productJSON[productCode]["height"]) {
            			$(".AWA-height").text(productJSON[productCode]["height"]);
            		} else {
            			$(".AWA-height").closest("li").hide();
            		}
           			if (productJSON[productCode]["spread"]) {
            			$(".AWA-spread").text(productJSON[productCode]["spread"]);
            		} else {
            			$(".AWA-spread").closest("li").hide();
            		}
           			if (productJSON[productCode]["flowering_months"]) {
            			$(".AWA-flowering-months").text(productJSON[productCode]["flowering_months"].split(',').join(', '));
            		} else {
            			$(".AWA-flowering-months").closest("li").hide();
            		}
           			if (productJSON[productCode]["sowing_months"]) {
            			$(".AWA-sowing-months").text(productJSON[productCode]["sowing_months"].split(',').join(', '));
            		} else {
            			$(".AWA-sowing-months").closest("li").hide();
            		}
           			if (productJSON[productCode]["harvest_period"]) {
            			$(".AWA-harvest-period").text(productJSON[productCode]["harvest_period"].split(',').join(', '));
            		} else {
            			$(".AWA-harvest-period").closest("li").hide();
            		}
           			if (productJSON[productCode]["image_h_1000"]) {
            			$("#AWA-large-image").attr('src', productJSON[productCode]["image_h_1000"]);
            		} else {
            			$("#AWA-large-image").attr('src', 'http://www.tandmpics.com/e404/180.jpg');
            		}
            	} else {
            		$("AWA-dt-list").hide();
            		exp.log("product not found in productJSON");
            	}
            } else {
            	$("AWA-dt-list").hide();
            	exp.log("productJSON not found!");
            }
		}


		// Close popup
		$('#AWA-listing-close, #AWA-listing-close-link').click(function(e) {
			e.preventDefault();
			$('#AWA-data-template').hide();
			$('#__msg_overlay-B').hide();
			$("#AWA-large-image").attr('src', '//dd6zx4ibq538k.cloudfront.net/static/images/2841/f5139756aa153d9a71536c7b141c39d0_420_420.jpeg');
		});

		// $(document).mouseup(function (e) {
  //   		var container = $("#AWA-data-template");
  //   		if (!container.is(e.target) // if the target of the click isn't the container...
  //       		&& container.has(e.target).length === 0) // ... nor a descendant of the container
  //   		{
		// 		$('#AWA-data-template').hide();
		// 		$('#__msg_overlay-B').hide();
		// 		$("#AWA-large-image").attr('src', '');
  //   		}
		// });

		// Resize modal screen if screen height is below 900
		var sHeight = $(window).height(); 
		if (sHeight < 900) {
			$("#AWA-data-template").attr('style', 'max-height: 525px');
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

