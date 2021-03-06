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
		exp.log('List Page Images & Product Data - 1.0');

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
		if (window.location.pathname.substring(0, 9) == "/flowers/" || window.location.pathname.substring(0, 12) == "/plug-plants") {
        	exp.log('List Page Images & Product Data Experiment passed: running on flowers category');
		} else {
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
			    imageData = imageData || undefined;
			    if (imageData != undefined) {
			      return imageData;
			    }
		  	};

		  	// Find each image and replace with larger one
		  	var imageDataCallback = function() {
		  		$('.resultSet .floatLeft').each(function() {
			  		var $link = $(this).find('a').attr('href');
			  		var urlCode = /[^/]*$/.exec($link)[0];
			  
			  		var img = $(this).find('img');
			  		img.attr('style', 'height: 230px; width: 230px');

			      var imageDataLength = imageData.length;
			    	for (var i = 0; i < imageDataLength; i++) {
			    		if (/[^/]*$/.exec(imageData[i]["Product URL"])[0] == urlCode) {
			    			var newImage = (imageData[i]["Image URL 230px X 230px jpgs"]);
			    			img.attr('src', newImage);
			    			return;
			    		}
			    	}
		  		});
		  	};

		  waitFor(conditionImage, imageDataCallback);
		  

			/* --------------------------- Replace Product Info --------------------------- */
			// Grab productInfo JSON when it loads
			var conditionProductInfo = function() {
			    productInfo = productInfo || undefined;
			    if (productInfo != undefined) {
			      return productInfo;
			    }
			};
		  
		  	// Remove existing description text (but keeping subheadings and/or stars) and find each product and replace with new product info
		  	var productInfoCallback = function() {

		    	getNewData(productInfo);

		    	function getNewData(productInfo) {
		    		$('.floatRight.facetDescription .season').each(function() {
			    		var $listing = $(this);
			    
			    		var $description = $(this).parent();
			    		var $link = $($description).find('a:nth-child(2)').attr('href');
			    		var urlCode = /[^/]*$/.exec($link)[0];
			    
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
			    			findAndApply($listing, productInfo, urlCode);
			    		} else if (containsProductBullet == false && containsRating == false) {
			    			removeDescriptionText($listing);
			    			findAndApply($listing, productInfo, urlCode);
			    		} else if (containsProductBullet == false && containsRating == true) {
			    			removeDescriptionText($listing);
			    			findAndApply($listing, productInfo, urlCode);
			    		}
			    	});
		    	}
		    
			    function findAndApply($listing, productInfo, urlCode) {
			    	var productInfoLength = productInfo.length;
			    	for (var i = 0; i < productInfoLength; i++) {
			    		if (/[^/]*$/.exec(productInfo[i]["deeplink_url"])[0] == urlCode) {
			    			var newData = {};
			    			newData.idealFor = productInfo[i]["ideal_for"].split(',').join(', ');;
			    			newData.hardiness = productInfo[i]["hardiness"];
			    			newData.sunShade = productInfo[i]["sun_shade"];
			    			newData.height = productInfo[i]["height"];
			    			newData.spread = productInfo[i]["spread"];
			    			newData.floweringMonths = productInfo[i]["flowering_months"].split(',').join(', ');
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