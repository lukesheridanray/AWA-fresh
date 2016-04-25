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
	exp.log('Special Offers - v3 - var2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#12250136");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Special Offers failed a condition');
	    return false;
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		banner: 	"<img id='AWA-banner' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/6b637d77109311115bf9399c345b0b38_941_79.jpeg'>",
		plantSpecialOffers: 	"<div id='AWA-plant-special-offers'>\
									<h1 id='plantoffers' class='AWA-offer-heading'>Plant special offers</h1>\
									<div class='AWA-offer-box'>\
										<h3 class='AWA-offer-subheading'>This week's best selling offers</h3>\
									</div>\
								</div>",
		autumnPlanting: "<div id='AWA-autumn-planting'>\
							<div class='AWA-offer-box'>\
								<h3 class='AWA-offer-subheading'>Autumn Planting bulbs - buy 3, get one FREE</h3>\
							</div>\
						</div>",
		seedSpecialOffers: 	"<div id='AWA-seed-special-offers'>\
								<h1 id='seedoffers' class='AWA-offer-heading'>Seed special offers</h1>\
								<div class='AWA-offer-box'>\
									<h3 class='AWA-offer-subheading'>Over 250 seed varieties from 69p to 99p</h3>\
								</div>\
							</div>",
		seedPackets: 	"<div id='AWA-seed-packets'>\
							<div class='AWA-offer-box'>\
								<h3 class='AWA-offer-subheading'>Get every 5th packet of seed FREE, however many you order - choose from our full range</h3>\
								<div class='AWA-seed-category'>\
									<a href='http://www.thompson-morgan.com/vegetables/vegetable-seeds'><img class='AWA-category-image' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/bf331941bc096800fdcce30845ef86ce_300_263.jpeg'></a>\
									<p><a href='http://www.thompson-morgan.com/vegetables/vegetable-seeds'>View vegetable seeds</a></p>\
								</div>\
								<div class='AWA-seed-category'>\
									<a href='http://www.thompson-morgan.com/flowers/flower-seeds'><img class='AWA-category-image' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/20803049715af97d3850faf145116039_300_263.jpeg'></a>\
									<p><a href='http://www.thompson-morgan.com/flowers/flower-seeds'>View flower seeds</a></p>\
								</div>\
								<div class='AWA-seed-category'>\
									<a href='http://www.thompson-morgan.com/fruit/fruit-seeds/all-fruit-seeds'><img class='AWA-category-image' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/d51152238346516a8e80729f0f718436_300_263.jpeg'></a>\
									<p><a href='http://www.thompson-morgan.com/fruit/fruit-seeds/all-fruit-seeds'>View fruit seeds</a></p>\
								</div>\
								<div id='AWA-seed-message'>\
									All seeds are <b>dispatched within 24 hours</b>\
								</div>\
							</div>\
						</div>",
		jazzyPotatoes: 	"<div id='AWA-potato'>\
							<h2>Our customers love Jazzy Potatoes</h2>\
							<p>First time of growing potatoes and the yield was just over 14lbs and they taste really good. The potatoes look really good as well and need very little cleaning.</p>\
							<p class='AWA-author'>Gillian Morton, 26 July 2015</p>\
							<p>This year I decided to try Jazzy and was delighted with the results - I didn't count them, but I had lots, and it felt like there were more than I had last year with Charlotte. And the best bit was they tasted even better!</p>\
							<p class='AWA-author'>Philip Rigg, 16 August 2015</p>\
						</div>"
	}

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-offer-heading {\
		color: black !important;\
		font-size: 24px;\
		margin-bottom: 0;\
		margin-top: 18px;\
		text-decoration: none !important;\
	}\
	.AWA-offer-box {\
		border: solid 1px #D2D0D0;\
		height: 248px;\
		margin-top: 18px;\
		margin-bottom: 20px;\
		position: relative;\
		-webkit-user-select: none;\
		-moz-user-select: none;\
		-ms-user-select: none;\
	}\
	.AWA-offer-subheading {\
		padding-left: 10px;\
	}\
	.AWA-product {\
		margin-right: 5px;\
		float: left;\
		width: 182px;\
		text-align: center;\
	}\
	.AWA-product-name {\
		font-weight: bold;\
		margin-bottom: 5px;\
	}\
	a.AWA-url {\
		color: black !important;\
		text-decoration: none !important;\
	}\
	a.AWA-url:hover {\
		color: black !important;\
		text-decoration: underline !important;\
	}\
	.AWA-from {\
		margin-bottom: 5px;\
	}\
	.AWA-save {\
		color: #D61229;\
		font-weight: bold;\
	}\
	.AWA-hidden {\
		display: none;\
	}\
	.AWA-hidden2 {\
		display: none;\
	}\
	.AWA-left {\
		position: absolute;\
		z-index: 10;\
		margin-top: 35px;\
		margin-left: 3px;\
		width: 22px;\
		height: 31px;\
		background-image: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/42c4aca8a0ba86e8887d8c2cde01fdd8_22_63.png);\
		background-position-y: 31px;\
	}\
	.AWA-right {\
		position: absolute;\
		right: 3px;\
		z-index: 15;\
		margin-top: 35px;\
		margin-left: 66px;\
		width: 22px;\
		height: 31px;\
		background-image: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/5f965b033343268d70328d3589fadd59_22_63.png);\
		background-position-y: -1px;\
	}\
	.AWA-left:hover {\
		background-position-y: -1px;\
		cursor: pointer;\
	}\
	.AWA-right:hover {\
		background-position-y: 31px;\
		cursor: pointer;\
	}\
	.AWA-view-all {\
		float: right;\
		margin-top: 8px;\
		margin-right: 8px;\
	}\
	.AWA-view-all .AWA-view-all-link {\
		font-size: 14px;\
		color: #9A9A9A !important;\
	}\
	.AWA-view-all .AWA-view-all-link:hover {\
		font-size: 14px;\
		color: #335F2C !important;\
		text-decoration: none !important;\
	}\
	.AWA-item-count {\
		margin-right: 25px;\
	}\
	.AWA-seed-category {\
		float: left;\
	    margin-left: 30px;\
	    margin-right: 30px;\
	    text-align: center;\
	}\
	.AWA-category-image {\
		margin-top: 4px;\
		width: 172px;\
	}\
	.AWA-seed-category a {\
	    color: black !important;\
	    font-size: 13px;\
	    text-decoration: none !important;\
	}\
	.AWA-seed-category a:hover {\
		text-decoration: underline !important;\
	}\
	#AWA-seed-message {\
	    width: 194px;\
	    float: left;\
	    font-size: 20px;\
	    margin-top: 41px;\
	    margin-left: 8px;\
	    text-align: center;\
	    line-height: 26px;\
	}\
	#AWA-potato {\
	    width: 397px;\
	    margin-left: 53px;\
	    float: left;\
	}\
	#AWA-potato h2 {\
		font-size: 19px;\
		color: black;\
		text-align: center;\
	}\
	#AWA-potato p {\
		font-weight: bold;\
		font-style: italic;\
	}\
	#AWA-potato .AWA-author {\
		font-style: normal;\
		margin-bottom: 20px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {


		// Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Insert banner
	    $(".templateOneColumn").first().find('p').first().after(exp.vars.banner);

	    // Attach Plant Special Offers after banner
	    $("#AWA-banner").after(exp.vars.plantSpecialOffers);

	    // Attach Autumn Planting Bulbs box after Plant Sepcial Offers
	    $("#AWA-plant-special-offers").after(exp.vars.autumnPlanting);

	    // Attach Seed Special Offers to proper location
	    $("h5:contains('Seed special offers')").after(exp.vars.seedSpecialOffers);

	    // Hide existing Seed Special Offers heading and content
	    $("h5:contains('Seed special offers')").hide();
	    $("a[title='Value seed varieties']").parent().parent().hide();

	    // Attach Seed Packet Offers after Seed Special Offers
	    $("#AWA-seed-special-offers").after(exp.vars.seedPackets);

	    // Reformat "Fruit Special Offers"
	    $("h5:contains('Fruit special offers')").html("Fruit special offers");
	    $("h5:contains('Fruit special offers')").attr('id', 'fruitoffers').addClass('AWA-offer-heading');

	    // Reformat "Potato & Other Vegetable Special Offers"
		$("h5:contains('Potato & other vegetable special offers')").html("Potato & vegetable special offers");
	    $("h5:contains('Potato & vegetable special offers')").attr('id', 'potatooffers').addClass('AWA-offer-heading');

	    // Attach Jazzy Potato Message
	    $(".arrowbutton:contains('View Potato')").parent().parent().append(exp.vars.jazzyPotatoes);

	    // Reformat "Garden Supplies Special Offers"
		$("h5:contains('Garden Supplies special offers')").html("Garden Supplies special offers");
	    $("h5:contains('Garden Supplies special offers')").attr('id', 'gardensuppliesoffers').addClass('AWA-offer-heading');


	    function getOfferData(url, callback, id) {
	    	var productArray = [];
	    	var id = id;

			$.ajax({
			    type: "GET",
			    url: url,
			    async: false,
			    success: function(data) {
			    	var response = $(data);
			    	var $products = response.find("#results tr");

			    	var productArray = [];

			    	// Build an object with product data for each product
			    	$products.each(function() {
			    		var obj = {};
			    		obj.image = $(this).find('.resultSet').find('.floatLeft').find('a').find('img').attr('src');
			    		obj.name = $.trim($(this).find('.resultSet').find('.facetDescription').find('h3').first().text());
			    		obj.url =  $(this).find('.resultSet').find('.floatLeft').find('a').first().attr('href');
			    		obj.from = $.trim($(this).find('.price').first().contents().filter(function() {return this.nodeType == 3;}).text());
			    		// If product has a "SAVE" promo then set the save property
			    		if ($(this).find(".promo:contains('SAVE')").length) {
			    			obj.save = $.trim($(this).find(".promo:contains('SAVE')").last().text().substring(5));
			    		}

			    		productArray.push(obj);
			    	});

			    	// Get number of items in target offers page
			    	var itemCount = {};
			    	itemCount.num = response.find(".searchResults").find('b').text();
			    	itemCount.url = response.find(".pagination-links").first().find('.current.highlight').attr('href');

			    	// Execute callback
					callback(productArray, itemCount, id);

			    }
			});
		}

		var bestSellerCallback = function(productArray, itemCount, id) {
		    // Populate Best Selling offers
		    var list = "";

		    // Show 10 products in slider or if there's less than 10, show that amount
		    var productsToShow = 10;
		    if (productArray.length < 10) {
		    	productsToShow = productArray.length;
		    }
		    for (var i = 0; i < 10; i++) {
		    	if (productArray[i].save) {
		    		list = list + "<div class='AWA-product'><a class='AWA-url' href='" + productArray[i].url + "'><img class='AWA-image' src='" + productArray[i].image + "'></a><a class='AWA-url' href='" + productArray[i].url + "'><div class='AWA-product-name'>" + productArray[i].name + "</div></a><div class='AWA-from'>From " + productArray[i].from + "</div><div class='AWA-save'>SAVE up to " + productArray[i].save + "</div></div>";
		    	} else {
		    		list = list + "<div class='AWA-product'><a class='AWA-url' href='" + productArray[i].url + "'><img class='AWA-image' src='" + productArray[i].image + "'></a><a class='AWA-url' href='" + productArray[i].url + "'><div class='AWA-product-name'>" + productArray[i].name + "</div></a><div class='AWA-from'>From " + productArray[i].from + "</div></div>";
		    	}
		    }
		    $(id + " .AWA-offer-subheading").after(list);

		    var counter = 1;
		    $(id + ' .AWA-product').each(function() {
		    	if (counter > 5) {
		    		$(this).addClass('AWA-hidden');
		    	}
		    	counter++;
		    });

		    // Mark last product
		    $(id + " .AWA-product").last().addClass("AWA-last");

		    // Insert "View All" link
		    $(id + " .AWA-offer-box").prepend("<div class='AWA-view-all'><span class='AWA-item-count'>Showing " + productsToShow + " of " + itemCount.num + " items</span><a class='AWA-view-all-link' href='" + itemCount.url + "'>view all</a></div>");

			$(id + " .AWA-offer-box").find('h3').after("<div class='AWA-right' id='forwards'></div>");
			$(id + " .AWA-offer-box").find('h3').after("<div class='AWA-left' id='backwards'></div>");

			// Hide left arrow by default
			$(id + " #backwards").hide();

			$(id + " #forwards").click(function(e) {
				e.preventDefault();
				if (!$(id + " .AWA-last:visible").length) {
					$(id + " .AWA-product:visible:first").addClass("AWA-hidden");
					$(id + " .AWA-product:visible").last().next('.AWA-hidden').removeClass('AWA-hidden');
				}

				if ($(id + " .AWA-last:visible").length) {
					$(id + " #forwards").hide();
				}

				if ($(id + " .AWA-product:visible:first").prev('.AWA-hidden').length) {
					$(id + " #backwards").show();
				}
			});
			$(id + " #backwards").click(function(e) {
				e.preventDefault();
				if ($(id + " .AWA-product:visible:first").prev('.AWA-hidden').length) {
					$(id + " .AWA-product:visible:first").prev('.AWA-hidden').removeClass('AWA-hidden');

					$(id + " .AWA-product:visible:last").addClass("AWA-hidden");
				}

				if (!$(id + " .AWA-last:visible").length) {
					$(id + " #forwards").show();
				}

				if (!$(id + ' .AWA-product:visible:first').prev('.AWA-hidden').length) {
					$(id + " #backwards").hide();
				}
			});
		};

		// Generate sliders for each offer page requested
		getOfferData("http://www.thompson-morgan.com/flower-bulb-sale", bestSellerCallback, "#AWA-plant-special-offers");
		getOfferData("http://www.thompson-morgan.com/Buy-4-packs-of-bulbs-get-the-cheapest-free", bestSellerCallback, "#AWA-autumn-planting");
		getOfferData("http://www.thompson-morgan.com/value-seed-varieties", bestSellerCallback, "#AWA-seed-special-offers");


		// Hide "This week's best selling offers", "4 for 3 on autumn planting bulbs", and "FREE £5 voucher with every order"
		$("img[src$='/static-images/tandm/offer-of-the-week/best-selling-offers-special.jpg']").parent().parent().hide();
		$("img[src$='/static-images/tandm/offer-of-the-week/autumn-bulbs-special-offer.jpg']").parent().parent().hide();
		$("img[src$='/static-images/tandm/offer-of-the-week/free-5-voucher-special-offer.jpg']").parent().hide();

		// Move "Autumn Sale Now On!" to top left (next to "4 for 3 on autumn planting bulbs")
		var $autumnSale = $("img[src$='/static-images/tandm/offer-of-the-week/autumn-sale-2015.jpg']").parent().parent();
		var $4for4 = $("img[src$='/static-images/tandm/offer-of-the-week/4for3-large-plants-special-offer-2.jpg']").parent().parent();
		$4for4.before($autumnSale);

		// Move "Buy any 2 pre-planted" pots and baskets next to "BUY 2 PACKS"
		var $buy2Packs = $("img[src$='/static-images/tandm/offer-of-the-week/garden-ready-autumn.jpg']").parent().parent();
		var $buyAny2 = $("img[src$='/static-images/tandm/offer-of-the-week/pre-planted-winter.jpg']").parent().parent();
		$buyAny2.before($buy2Packs);

		// Remove weird underline on offer headings in (showing up in IE)
		$('[name="fruitoffers"]').attr('style', 'text-decoration: none !important');
		$('[name="seedoffers"]').attr('style', 'text-decoration: none !important');
		$('[name="potatooffers"]').attr('style', 'text-decoration: none !important');
		$('[name="gardensuppliesoffers"]').attr('style', 'text-decoration: none !important');


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

