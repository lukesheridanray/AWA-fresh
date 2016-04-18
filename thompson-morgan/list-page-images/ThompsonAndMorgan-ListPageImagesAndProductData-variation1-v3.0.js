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
		exp.log('List Page Images & Product Data - 3.0 var 1');

		/*
		// Condition
		// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
		exp.condition = $('.unique-selector');
		*/
		exp.condition = $('.stockInfo');

		// Check for a condition and return false if it has not been met
		/*if(exp.condition && !exp.condition.length) {
		    exp.log('Experiment failed a condition');
		    return false;
		}*/
		if (exp.condition && !exp.condition.length) {
		    exp.log('List Page Images & Product Data Experiment failed a condition');
		    return false;
		}
		
		// Run only if not on a garden supplies page
		switch(window.location.pathname.substring()) {
		    case "/flowers/flower-plants/annual-plants":
		        break;
		    case "/flowers/flower-plants/perennial-and-biennial-plants":
		        break;
		    case "/flowers/flower-plants/begonia-plants":
		        break;
		    case "/flowers/flower-plants/busy-lizzie-plants":
		        break;
		    case "/flowers/flower-plants/dianthus-plants":
		        break;
		    case "/flowers/flower-plants/fuchsia-plants":
		        break;
		    case "/flowers/flower-plants/geranium-and-pelargonium-plants":
		        break;
		    case "/flowers/flower-plants/pansy-plants":
		        break;
		    case "/flowers/flower-plants/petunia-plants":
		        break;
		    case "/flowers/flower-plants/sweet-pea-plants":
		        break;
		    case "/flowers/flower-bulbs/allium-bulbs":
		        break;
		    case "/flowers/flower-bulbs/anemones":
		        break;
		    case "/flowers/flower-bulbs/begonia-tubers":
		        break;
		    case "/flowers/flower-bulbs/crocus-bulbs":
		        break;
		    case "/flowers/flower-bulbs/daffodil-bulbs":
		        break;
		    case "/flowers/flower-bulbs/dahlia-tubers":
		        break;
		    case "/flowers/flower-bulbs/hyacinth-bulbs":
		        break;
		    case "/flowers/flower-bulbs/lily-bulbs":
		        break;
		    case "/flowers/flower-bulbs/tulip-bulbs":
		        break;
		    case "/flowers/flower-bulbs/other-flower-bulbs-and-tubers":
		    	break;
		    case "/flowers/flower-seeds/hardy-annual-seeds":
		        break;
		    case "/flowers/flower-seeds/perennial-and-biennial-seeds":
		        break;
		    case "/flowers/flower-seeds/cosmos-seeds":
		    	break;
		    case "/flowers/flower-seeds/marigold-seeds":
		        break;
		    case "/flowers/flower-seeds/nasturtium-seeds":
		        break;
		    case "/flowers/flower-seeds/petunia-seeds":
		    	break;
		    case "/flowers/flower-seeds/poppy-seeds":
		        break;
		    case "/flowers/flower-seeds/sunflower-seeds":
		        break;
		    case "/flowers/flower-seeds/sweet-pea-seeds":
		    	break;
		    case "/flowers/all-other-seeds-and-plants/bamboo-and-grasses":
		        break;
		    case "/flowers/all-other-seeds-and-plants/cacti":
		        break;
		    case "/flowers/all-other-seeds-and-plants/clematis-plants":
		    	break;
		    case "/flowers/all-other-seeds-and-plants/climbing-seeds-and-plants":
		        break;
		    case "/flowers/all-other-seeds-and-plants/foliage-seeds-and-plants":
		        break;
		    case "/flowers/all-other-seeds-and-plants/shrubs-and-roses":
		    	break;
		    case "/flowers/all-other-seeds-and-plants/trees":
		        break;
		    case "/flowers/all-other-seeds-and-plants/new-spring-plants-and-bulbs-range":
		        break;
		    case "/flowers/all-other-seeds-and-plants/new-autumn-plants-bulbs-shrubs-range":
		    	break;
		    case "/plug-plants":
		        break;
		    case "/flower-plants-top-20-best-sellers":
		    	break;
		    case "/flower-bulbs-top-20-best-sellers":
		        break;
		    case "/flower-seeds-top-20-best-sellers":
		    	break;
		    default:
		    	exp.log('List Page Images & Product Data Experiment failed a condition: should only run on flowers categories');
		        return false;
		}

		// Variables
		// Object containing variables, generally these would be strings or jQuery objects
		exp.vars = {
		};

		// Styles
		// String containing the CSS for the experiment
		exp.css = '\
		.newD {\
		    color: #00572D !important; font-weight: bold\
		}\
		.newList {\
		    margin-left: 19px; margin-top: 10px; margin-bottom: 10px;\
		}\
		.stockInfo {\
		    float: left; margin-left: 95px;\
		}\
		.facetDescription {\
		    width: 462px\
		}';

		// Functions
		// Object containing functions, some helpful functions are included
		exp.func = {};

		// Init function
		// Called to run the actual experiment, DOM manipulation, event listeners, etc
		exp.init = function() {
		    // Append style to head
		    $('head').append('<style type="text/css">'+this.css+'</style>');

		    /* --------------------------- Replace Images --------------------------- */
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

		  	// Grab imageData JSON when it loads
		  	var conditionImage = function() {
			    imageData3 = imageData3 || undefined;
			    if (imageData3 != undefined) {
			      return imageData3;
			    }
		  	};

		  	// Find each image and replace with larger one
		  	var imageDataCallback = function() {
		  		$('.resultSet .floatLeft').each(function() {
			  		var $link = $(this).find('a').attr('href');
			  		var n = $link.lastIndexOf('/');
			  		var urlCode = $link.substring(n + 1);
			  		
			  		var img = $(this).find('img');
			  		img.attr('style', 'height: 230px; width: 230px');
            
		            if (imageData3[urlCode]) {
		            	var newImage = imageData3[urlCode];
					   	img.attr('src', newImage);
		            }

			    	return;
		  		});
		  	};

		  waitFor(conditionImage, imageDataCallback);

			/* --------------------------- Replace Product Info --------------------------- */
			// Grab productInfo JSON when it loads
			var conditionProductInfo = function() {
			    productInfo3 = productInfo3 || undefined;
			    if (productInfo3 != undefined) {
			      return productInfo3;
			    }
			};
		  
		  	// Remove existing description text (but keeping subheadings and/or stars) and find each product and replace with new product info
		  	var productInfoCallback = function() {

		    	getNewData(productInfo3);

		    	function getNewData(productInfo3) {
		    		$('.floatRight.facetDescription .season').each(function() {
			    		var $listing = $(this);
			    
			    		var $description = $(this).parent();
			    		var $link = $($description).find('a:nth-child(2)').attr('href');
			  	  	var n = $link.lastIndexOf('/');
			  	  	var urlCode = $link.substring(n + 1);
			    
			    		$('.moreInfo').text("View Full Information");
			    
			    		var containsProductBullet = false;
			    
			    		var $productBullet = $(this).find('.productBullet');
			    		if ($productBullet.length != 0) {
			    			containsProductBullet = true;
			    			$productBullet.nextUntil("div").remove();
			    		}
			    
			    		var $customerRatingText = $(this).find("b");
			    		if ($customerRatingText != null) {
			    			$customerRatingText.attr('style', 'margin-left: 3px;');
			    		}
			    
			    		var starsImage5 = $(this).find("img[src$='5-star.jpg']");
			    		var starsImage4 = $(this).find("img[src$='4-star.jpg']");
			    		var starsImage3 = $(this).find("img[src$='3-star.jpg']");
			    		var starsImage2 = $(this).find("img[src$='2-star.jpg']");
			    		var starsImage1 = $(this).find("img[src$='1-star.jpg']");
			    
			    		var containsRating = false;
			    
			    		if (starsImage5.length != 0) {
			    			containsRating = true;
			    		} else if (starsImage4.length != 0) {
			    			containsRating = true;
			    		} else if (starsImage3.length != 0) {
			    			containsRating = true;
			    		} else if (starsImage2.length != 0) {
			    			containsRating = true;
			    		} else if (starsImage1.length != 0) {
			    			containsRating = true;
			    		}
			    			
			    		if (containsProductBullet == true && (containsRating == true || containsRating == false)) {
			    			removeSpanTextOnly($listing)
			    			findAndApply($listing, productInfo3, urlCode);
			    		} else if (containsProductBullet == false && containsRating == false) {
			    			removeDescriptionText($listing);
			    			findAndApply($listing, productInfo3, urlCode);
			    		} else if (containsProductBullet == false && containsRating == true) {
			    			removeDescriptionText($listing);
			    			findAndApply($listing, productInfo3, urlCode);
			    		}
			    	});
		    	}
		    
			    function findAndApply($listing, productInfo3, urlCode) {
	    			var newData = {};
	    			if (productInfo3[urlCode]) {
		    			newData.idealFor = productInfo3[urlCode]["ideal_for"].split(',').join(', ');;
	  	    			newData.hardiness = productInfo3[urlCode]["hardiness"];
	  	    			newData.sunShade = productInfo3[urlCode]["sun_shade"];
	  	    			newData.height = productInfo3[urlCode]["height"];
	  	    			newData.spread = productInfo3[urlCode]["spread"];
	  	    			newData.floweringMonths = productInfo3[urlCode]["flowering_months"].split(',').join(', ');
	  	    	    	var newList = "<ul class='newList'>" + 
	  	    	    		"<li><span class='newD'>Position:</span> " + newData.sunShade + "</li>" +
	  	    	    		"<li><span class='newD'>Hardiness:</span> " + newData.hardiness + "</li>" +
	  	    	    		"<li><span class='newD'>Flowering Period:</span> " + newData.floweringMonths + "</li>" + 
	  	    	    		"<li><span class='newD'>Ideal For:</span> " + newData.idealFor + "</li>" + 
	  	    	    		"<li><span class='newD'>Height:</span> " + newData.height + "</li>" +
	  	    	    		"<li><span class='newD'>Spread:</span> " + newData.spread + "</li>" +
	  	    	    		"</ul>";
	  	    			$listing.after(newList);
	  	    		  	return;
	    			}
			    }
		    
			    function removeSpanTextOnly($listing) {
			    	var text = $listing.contents().filter(function(){ 
			    		if (this.nodeType == 3) {
			    			this.nodeValue = "";
			    		}
			    	});
			    }
		    
			    function removeDescriptionText($listing) {
			    	var $desc = $listing.find('p');
			    	if ($desc.length != 0) {
			    		$desc.nextUntil(".stockInfo").andSelf().remove();
			    	}
			    	var $extraList = $listing.find('ul');
			    	if ($extraList.length != 0) {
			    		$extraList.nextUntil(".stockInfo").andSelf().remove();
			    	}
			    	var text = $listing.contents().filter(function(){ 
			    		if (this.nodeType == 3) {
			    			this.nodeValue = "";
			    		}
			    	});
			    }
		    
			    $('.stockInfo').each(function() {
			    	$(this).parent().after($(this));
			    });
		  	};

		  	waitFor(conditionProductInfo, productInfoCallback); 
		};

		// Run the experiment
		exp.init();

		// Return the experiment object so we can access it later if required
		return exp;

		// Close the IIFE, passing in jQuery and any other global variables as required
		// if jQuery is not already used on the site use optimizely.$ instead
	})(jQuery);
}