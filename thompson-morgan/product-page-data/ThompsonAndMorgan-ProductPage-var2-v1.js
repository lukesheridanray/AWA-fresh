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
	exp.log('Product Page v1.0 - var2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#32485735');

	// Check for a condition and return false if it has not been met
	if(exp.condition && !exp.condition.length) {
	    exp.log('Product Page Experiment failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-show-reviews {\
		margin-left: 5px;\
		text-decoration: underline;\
	}\
	.AWA-unit-price {\
		margin-left: 152px;\
	}\
	.AWA-feature {\
		color: #00572D !important; font-weight: bold;\
	}\
	.AWA-ideal-label {\
		display: inline-block;\
		width: 61px;\
	}\
	.AWA-ideal-data {\
		width: 361px;\
		display: inline-block;\
		vertical-align: top;\
	}\
	.AWA-harvest-label {\
		display: inline-block;\
		width: 103px;\
	}\
	.AWA-harvest-data {\
	    display: inline-block;\
	    width: 327px;\
	    vertical-align: top;\
	}\
	.AWA-flowering-label {\
		display: inline-block;\
		width: 115px;\
	}\
	.AWA-flowering-data {\
		display: inline-block;\
    	vertical-align: top;\
    	width: 309px;\
	}\
	.AWA-sowing-label {\
		display: inline-block;\
  		width: 103px;\
	}\
	.AWA-sowing-data {\
		display: inline-block;\
		vertical-align: top;\
		width: 316px;\
	}\
	#prodFeatures {\
		font-size: 13px;\
	}\
	#read-more {\
		font-size: bold;\
		text-decoration: underline;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Run only on Flower, Vegetable, or Fruit categories
		if ($('.no-background-image').text() == "Flowers" || $('.no-background-image').text() == "Vegetables" || $('.no-background-image').text() == "Fruit") {
			exp.log('Exp running on correct category')
		} else {
			exp.log('Exp not running of flower, vegetable, or fruit page - exiting.');
			return false;
		}

	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    // Change "Customer Rating" to reviews link
	    var reviewStars = $('img[src*="reviews"]');
	    var reviewStarsLength = reviewStars.length;
	    var customerRatingText = $(reviewStars).next();
	    var numReviews = $('.rating').length;

	    // Only change this if there are reviews
	    if (reviewStarsLength > 0) {
	    	$(customerRatingText).html("<a id='AWA-show-reviews' href='#tab-4'>" + numReviews + " Customer Reviews</a>");
	    	$(customerRatingText).attr('style', 'text-decoration: underline');
	    }


		// Check for extras to keep
		if ($('#productCont .productBullet').length) {
			var bulletList = $('#productCont .productBullet').get(0).outerHTML;;
		}
		if ($('img[src*="reviews"]').length) {
			var reviews = $('img[src*="reviews"]').get(0).outerHTML;
			var reviewLink = $('#AWA-show-reviews').get(0).outerHTML;
		}
		if ($('.producticon').length) {
			var icons = $('.producticon').get(0).outerHTML;
		}

	    // Get product description
	    var classification = $('.facetValueClass').html();
		var y = classification.length;
		var prodText = $('#productCont').html();
		var n = prodText.indexOf(classification);
		var yn = y + n + 1;
	    if (classification.substring(0, 3) == "<DL") {
	    	exp.log('IE is messing with tags');
	    	prodText = prodText.substring(yn, prodText.indexOf('<DIV id=prodFeatures'));
	    } else {
	    	exp.log('Normal HTML');
			prodText = prodText.substring(yn, prodText.indexOf('<div id="prodFeatures"')); 
	    }
		prodText = prodText.substring(6);

		// Replace original main text without product description
		var productContHTML = $('#productCont').html();
		var newProductContHTML = productContHTML.replace(prodText,'');
		
		$('#productCont').html(newProductContHTML);

	    // Add Description Tab
	    var tab2Clone = $('#tab-2').clone();
	    $(tab2Clone).attr('id', 'AWA-descr');
	    $(tab2Clone).removeAttr('onclick');
	    $('.new-tabs-small').append(tab2Clone);

	    // Add Description Panel
	    var descPanel = $('#tabbed-panel-1').clone();
		$(descPanel).attr('id', 'AWA-desc-panel');
		$('.product-additional-info-middle').append(descPanel);
		$('#AWA-desc-panel').text('No description.'); // Placeholder
		$('#AWA-descr').find('span').text('Description');

	    $('#AWA-descr').click(function() {
	    	$('.product-additional-info #AWA-desc-panel').show();
	    	$(this).addClass('active');

	    	$('.product-additional-info #tabbed-panel-1').hide();
	    	$('.product-additional-info #tabbed-panel-2').hide();
	    	$('.product-additional-info #tabbed-panel-3').hide();
	    	$('.product-additional-info #tabbed-panel-4').hide();
	    	
	    	$('#tab-1').removeClass('active');
	    	$('#tab-2').removeClass('active');
	    	$('#tab-3').removeClass('active');
	    	$('#tab-4').removeClass('active');
	    });

	    $('#tab-1').click(function() {
	    	$('#AWA-desc-panel').hide();
	    	$('#AWA-descr').removeClass('active');
	    	$('.product-additional-info #tabbed-panel-1').show();
	    });
	    $('#tab-2').click(function() {
	    	$('#AWA-desc-panel').hide();
	    	$('#AWA-descr').removeClass('active');
	    	$('.product-additional-info #tabbed-panel-2').show();
	    });
	    $('#tab-3').click(function() {
	    	$('#AWA-desc-panel').hide();
	    	$('#AWA-descr').removeClass('active');
	    	$('.product-additional-info #tabbed-panel-3').show();
	    });
	    $('#tab-4').click(function() {
	    	$('#tab-4').addClass('active');
	    	$('#AWA-desc-panel').hide();
	    	$('#AWA-descr').removeClass('active');
	    	$('.product-additional-info #tabbed-panel-4').show();
	    });

	    // Place product description in Description tab
		$('#AWA-desc-panel').html(prodText);

		// Remove extras from product description panel
		$('#AWA-desc-panel .producticon').remove();
		$('#AWA-desc-panel img[src*="reviews"]').remove();
		$('#AWA-desc-panel b:contains("Customer Reviews")').remove();
		$('#AWA-desc-panel b:contains("Customer Rating")').remove();
		$('#AWA-desc-panel .productBullet').remove();
		$('#AWA-desc-panel').hide();

		// Add extras back into main content
		if (bulletList) {
			$('.facetValueClass').after(bulletList);
		}
		if (reviews) {
			$('.facetValueClass').after(reviewLink);
			$('.facetValueClass').after(reviews);
			$('#AWA-show-reviews').attr('style', 'font-weight: bold;');
		}
		if (icons) {
			$('.facetValueClass').after(icons);
			$('.producticon').attr('style', 'margin-top: 10px;');
		}

	    $('#AWA-show-reviews').click(function() {
	    	$('#tab-4').trigger("click");
	    });


	    // Add 'Read More' link and first sentence of description
		var newDescriptionText = $('#AWA-desc-panel').text();
		var firstSentence = $.trim(newDescriptionText.substring(0, newDescriptionText.indexOf('. ')));
		firstSentence += ".";
		var descriptionLink = "<p>" + firstSentence + " <a id='read-more' href='#additional-links'>Read more</a></p>";
		$('#prodFeatures').before(descriptionLink);

		$('#read-more').click(function(e) {
	    	$('#AWA-descr').trigger("click");
	    });


	    // Calculate Unit Price
	    $('.stockInfo').each(function() {
	    	var quantityText = $(this).find('.size').text();
	    	var quantity = quantityText.substring(0, quantityText.indexOf(' '));
	    	var price = $(this).find('.price').clone().children().remove().end().text();
	    	price = $.trim(price).substring(1);
	    	var unitPrice = (price / quantity).toFixed(2);

	    	// This Petunia cannot have its unit price calculated normally
	    	if ($('.productClass').text() == "Petunia 'Frills & Spills'™ Mixed' (Garden Ready)") {
	    		$(this).find('.wishListLinkContainer').append("<span class='AWA-unit-price'>(£14.99 each)</span>");
	    	} else if (quantity != 1) {
	    		$(this).find('.wishListLinkContainer').append("<span class='AWA-unit-price'>(£" + unitPrice + " each)</span>");
	    	}
	    });

	    
	    // Find product code
	    var code = $('#additional-links .additional-links input[name="productCode"]').val();

	    // Sometimes the code found has the first letter capitalized so it won't be found in the JSON!
	    code = code.substr(0, 1).toLowerCase() + code.substr(1);

	    // WaitFor JSON hander
	  	function waitFor(condition, callback, timeout, keepAlive) {
		    timeout = timeout || 20000;
		    keepAlive = keepAlive || false;
		    var intervalTime = 50,
		        maxAttempts = timeout / intervalTime,
		        attempts = 0,
		        interval = setInterval(function() {
		            if (condition()) {
		                if (!keepAlive) {
		                    clearInterval(interval);
		                }
		                callback();
		            } else if (attempts > maxAttempts) {
		                clearInterval(interval);
		            }
		            attempts ++;
		        }, intervalTime);
	  	}


	  	// Grab productData JSON when it loads
	  	var conditionProductData = function() {
		    productData = productData || undefined;
		    if (productData != undefined) {
		      return productData;
		    }
	  	};

	  	// Get new product data and add it to the page
	   	var productDataCallback = function() {
			var newData = {};
			if (productData[code]) {
				exp.log('Found product');
				newData.sunShade = productData[code]["sun_shade"].split(',').join(', ');
				newData.soil = productData[code]["soil_type"].split(',').join(', ');
				newData.idealFor = productData[code]["ideal_for"].split(',').join(', ');
				newData.floweringMonths = productData[code]["flowering_months"].split(',').join(', ');
				newData.hardiness = productData[code]["hardiness"];
				newData.sowingMonths = productData[code]["sowing_months"].split(',').join(', ');
				newData.harvestMonths = productData[code]["harvest_period"].split(',').join(', ');
				newData.height = productData[code]["height"];
				newData.spread = productData[code]["spread"];
				
		    	var newList = "<ul class='AWA-newList'>";

		    	if (newData.sunShade) {
		    		newList += "<li><span class='AWA-feature'>Position:</span> <span class='AWA-data-item'>" + newData.sunShade + "</span></li>";
		    	}
		    	if (newData.soil) {
		    		newList += "<li><span class='AWA-feature'>Soil:</span> <span class='AWA-data-item'>" + newData.soil + "</span></li>";
		    	}
		    	if (newData.idealFor) {
		    		newList += "<li><span class='AWA-feature AWA-ideal-label'>Ideal For:</span> <span class='AWA-data-item AWA-ideal-data'>" + newData.idealFor + "</span></li>";
		    	}
		    	if (newData.floweringMonths) {
		    		newList += "<li><span class='AWA-feature AWA-flowering-label'>Flowering Period:</span> <span class='AWA-data-item AWA-flowering-data'>" + newData.floweringMonths + "</span></li>";
		    	}
		    	if (newData.hardiness) {
		    		newList += "<li><span class='AWA-feature'>Hardiness:</span> <span class='AWA-data-item'>" + newData.hardiness + "</span></li>";
		    	}
		    	if (newData.sowingMonths) {
		    		newList += "<li><span class='AWA-feature AWA-sowing-label'>Sowing Months:</span> <span class='AWA-data-item AWA-sowing-data'>" + newData.sowingMonths + "</span></li>";
		    	}
		    	if (newData.harvestMonths) {
		    		newList += "<li><span class='AWA-feature AWA-harvest-label'>Harvest Months:</span> <span class='AWA-data-item AWA-harvest-data'>" + newData.harvestMonths + "</span></li>";
		    	}
		    	if (newData.height) {
					newList += "<li><span class='AWA-feature'>Height:</span> <span class='AWA-data-item'>" + newData.height + "</span></li>";
		    	}
		    	if (newData.spread) {
					newList += "<li><span class='AWA-feature'>Spread:</span> <span class='AWA-data-item'>" + newData.spread + "</span></li>";
		    	}

				newList += "</ul>";

				$('#prodFeatures').html(newList);
			} else {
				exp.log('Product not found in spreadsheet');
			}
	   	};

		waitFor(conditionProductData, productDataCallback);
		
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
}
