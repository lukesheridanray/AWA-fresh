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
	exp.log('Mobile Product Page v1');

	
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	exp.condition = $('#32485735');

	// Check for a condition and return false if it has not been met
	if(exp.condition && !exp.condition.length) {
	    exp.log('Mobile Product Page failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		desc: 	"<div class='AWA-description'>\
					<img class='AWA-tab-arrow' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/91a9ea262978dd855f46fb7ecabe239a_75_125.png'>\
					<h3>Product Description</h3>\
					<div class='AWA-mobile-box'></div>\
				</div>",
		reviews: 	"<div class='AWA-reviews'>\
						<img class='AWA-tab-arrow' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/91a9ea262978dd855f46fb7ecabe239a_75_125.png'>\
						<h3>Reviews</h3>\
						<div class='AWA-mobile-box'></div>\
					</div>",
		delivery: 	"<div class='AWA-delivery'>\
						<img class='AWA-tab-arrow' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/91a9ea262978dd855f46fb7ecabe239a_75_125.png'>\
						<h3>Delivery</h3>\
						<div class='AWA-mobile-box'>\
							<div class='AWA-despatch'></div>\
							<div class='AWA-delivery-main'></div>\
						</div>\
					</div>",
		howToGrow: "<div class='AWA-grow'>\
						<img class='AWA-tab-arrow' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/91a9ea262978dd855f46fb7ecabe239a_75_125.png'>\
						<h3>How to Grow</h3>\
						<div class='AWA-mobile-box'>\
							<div class='AWA-grow-holder'></div>\
							<div class='AWA-grow-main'></div>\
						</div>\
					</div>",
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.t011 {\
		float: none;\
		text-align: center;\
	}\
	.t011 .main {\
		width: inherit;\
	}\
	.AWA-title, .AWA-subtitle {\
		text-align: center;\
	}\
	.AWA-subtitle {\
		margin-bottom: 12px;\
	}\
	#prodFeatures {\
		width: 50%;\
		margin: 0 auto;\
		padding-left: 10%;\
	}\
	.stockInfo {\
		width: 50%;\
		margin: 0 auto;\
		padding-left: 2%;\
		background-color: rgba(227, 255, 253, 0.9);\
	}\
	.stockInfo li {\
		width: 100%;\
		padding-right: 15px;\
	}\
	.stockInfo li.size {\
		width: 100%;\
		font-size: 1.2em;\
	}\
	.stockInfo li.price {\
		float: right;\
	}\
	.stockInfo li.promo {\
		margin-top: 5px;\
	}\
	.stockInfo strike {\
		display: inline;\
		margin-left: 18%;\
	}\
	#AWA-add {\
		background-color: rgb(182, 7, 24);\
		color: white;\
		font-weight: bold;\
		width: 100px;\
		text-align: center;\
		padding: 5px;\
		margin: 0 auto;\
		margin-top: 15px;\
	}\
	.AWA-radio-div {\
		width: 20px;\
	}\
	input.AWA-radio {\
		width: inherit;\
		float: left;\
		margin-right: 10px;\
	}\
	.AWA-description, .AWA-reviews, .AWA-delivery, .AWA-grow {\
		border: solid 1px black;\
		width: 50%;\
		margin: 0 auto;\
		margin-top: 15px !important;\
		padding: 1%;\
	}\
	.AWA-description h3, .AWA-reviews h3, .AWA-delivery h3, .AWA-grow h3 {\
		display: inline;\
		margin-left: 8px;\
	}\
	.AWA-tab-arrow {\
		width: 10px;\
		margin-left: 15px;\
	}\
	.AWA-description-blurb {\
		margin-top: 15px;\
	}\
	.AWA-mobile-box a {\
		text-decoration: underline;\
	}\
	.AWA-star {\
		width: 115px;\
	}\
	.border-bottom-grey {\
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

	    // If Product Page Data Experiment is Running, get the description from that
	    var prodText = "No description"
	    if ($('#AWA-desc-panel').length) {
	    	prodText = $('#AWA-desc-panel').text();
	    }


	    // Get product description
	 //    var classification = $('.facetValueClass').html();
		// var y = classification.length;
		// var prodText = $('#productCont').html();
		// var n = prodText.indexOf(classification);
		// var yn = y + n + 1;
	 //    if (classification.substring(0, 3) == "<DL") {
	 //    	exp.log('IE is messing with tags');
	 //    	prodText = prodText.substring(yn, prodText.indexOf('<DIV id=prodFeatures'));
	 //    } else {
	 //    	exp.log('Normal HTML');
		// 	prodText = prodText.substring(yn, prodText.indexOf('<div id="prodFeatures"')); 
	 //    }
		// prodText = prodText.substring(6);

		// // Replace original main text without product description
		// var productContHTML = $('#productCont').html();
		// var newProductContHTML = productContHTML.replace(prodText,'');



	    // Remove country warning
	    $('#countryWarning').remove();

	    // Remove breadcrumb
	    $('.breadcrumb-portlet').remove();

	    // Remove image slider controls and thumbnails
	    $('.thumbs').remove();
	    $('.control').remove();

	    // Center main product image
	    var mainImage = $('.main').find('img');

	    // Move product title to top
	    var title = $('.productClass').parent();
	    var subtitle = $('.latinClass').parent();
	    title.addClass("AWA-title");
	    subtitle.addClass("AWA-subtitle");
	    mainImage.parent().parent().before(title, subtitle);

	    // Move product features underneath main image
	    mainImage.parent().parent().after($('#prodFeatures'));

	    /* --- BUYING OPTIONS --- */
	    // Move buying options underneath product features
	    $('#prodFeatures').after($('.stockInfo'));

	    // Manipulate buying options
	    $('.quantity').hide();
	    $('.wishListLinkContainer').remove()
	    //$('.prodPageDes').remove();
	    $('.basket').hide();


	    //$('.promo').after($('strike'));
	    $('.productPromo').each(function() {
	    	var strike = $(this).next().find('strike');
	    	$(this).find('.promo').after(strike);
	    });


	    // Insert radio buttons
	    $('.size').prepend("<div class='AWA-radio-div'><input type='radio' class='AWA-radio'></div>");

	    // Indication which items are out of stock
	    $('.stockInfo').each(function() {
	    	if ($(this).find('.emailMe').length) {
	    		var productText = $(this).find('.size').text();
	    		$(this).find('.size').text(productText + " - Sold out");
	    	}
	    });

	    
	    // Insert artifical "Add to bakset" button
	    $('.stockInfo').last().after("<a href='#' id='AWA-add-link'><div id='AWA-add'>Add to Basket</div></a>");

	    // Initially set artifical basket button to the first option's form
	    var productToAdd = $('.stockInfo').first().find('form');

	    // Make buying options link to radio buttons
	    $('.stockInfo').click(function() {
	    	$('.AWA-radio').attr('checked', false);
	    	$(this).find('.AWA-radio').attr('checked', true);

	    	// Save form of selected buy option so that it can be trigger later
	    	productToAdd = $(this).find('form');

	    });

	    // Event handler for artificial basket button
	    $('#AWA-add-link').click(function(e) {
	    	e.preventDefault();
	    	productToAdd.submit(); // Submit the selected form
	    	//NOT WORKING
	    	setTimeout(function() {
	    		window.location = "http://www.thompson-morgan.com/basket";
	    	}, 1200);
	    });

	    

	    /* --- DESCRIPTION TAB --- */
	    // Add product description box
	    $('#AWA-add-link').after(exp.vars.desc);

	    // Place product description in Description tab
		$('.AWA-description .AWA-mobile-box').html(prodText);

		// Remove extras
		$('.AWA-description .AWA-mobile-box').find('img').remove();
		$('.AWA-description .AWA-mobile-box').find('b:contains("Customer Rating")').remove();
		if ($('.AWA-description .AWA-mobile-box').find('.prodDesc').text() == "") {
			$('.AWA-description .AWA-mobile-box').find('.prodDesc').remove();
		}
		$('.productBullet').remove();

		// Remove "Useful links" portion of the text if it exists
		var fullDescriptionText = $('.AWA-description .AWA-mobile-box').text();
		if (fullDescriptionText.indexOf("Useful links") != -1) {
			fullDescriptionText = fullDescriptionText.substring(0, fullDescriptionText.indexOf("Useful links"));
		}
		if (fullDescriptionText.indexOf("Culinary note:") != -1) {
			fullDescriptionText = fullDescriptionText.substring(0, fullDescriptionText.indexOf("Culinary note:"));
		}




	    // Add 'Read More' link and first sentence of description
		var newDescriptionText = $('.AWA-description .AWA-mobile-box').text();
		var firstSentence = $.trim(newDescriptionText.substring(0, newDescriptionText.indexOf('. ')));
		firstSentence += ".";
		var descriptionLink = "<p class='AWA-description-blurb'>" + firstSentence + " <a id='read-more-desc' href='#additional-links'>...Read more ></a></p>";
		$('.AWA-description .AWA-mobile-box').html(descriptionLink);
		$('#read-more-desc').click(function(e) {
			e.preventDefault();
			$('.AWA-description .AWA-mobile-box').html("<p class='AWA-description-blurb'>" + $.trim(fullDescriptionText) + "</p>");
		});



	    /* --- REVIEWS TAB --- */
	    // Add reviews box
	    $('.AWA-description').after(exp.vars.reviews);

	    // Get number of reviews
		var numReviews = $('.reviews li .rating').length;

		// Change number of reviews in title
		if (numReviews == 0) {
			// Do nothing
		} else if (numReviews == 1) {
			$('.AWA-reviews h3').text("1 Review");
		} else if (numReviews > 1) {
			$('.AWA-reviews h3').text(numReviews + " Reviews");
		}
		
		// Place reviews in Reviews tab
		$('.AWA-reviews .AWA-mobile-box').html($('.reviews'));

	    // Load in more reviews if they exists
	    if ($('.AWA-reviews .AWA-mobile-box a:contains("Read all reviews")').length) {
    		$.ajax({
    			async: false,
			    type: "GET",
			    url: $('.AWA-reviews .AWA-mobile-box a:contains("Read all reviews")').attr('href'),
			    success: function(data) {
			    	var response = $(data);
					// Edit review count
			    	var newNumReviews = response.find('.reviews').length;
			    	$('.AWA-reviews h3').text(response.find('.reviews li .rating').length + " Reviews");

			    	// Enter in new reviews
			    	$('.AWA-reviews .AWA-mobile-box').html(response.find('.reviews'));
			    }
			});
	    }

	    // Preload star ratings
		var star1 = "<img class='AWA-star' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/56dc22964fd7f54fa460447918cfa3dd_336_67.png'>";
		var star2 = "<img class='AWA-star' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/9c6f2741448bc34998fab7c689e9f84a_336_67.png'>";
		var star3 = "<img class='AWA-star' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/e9699063cdd83ed9332c14eb2a29b24c_336_67.png'>";
		var star4 = "<img class='AWA-star' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/8151e22465496d47d0f5e9b243bf4675_336_67.png'>";
		var star5 = "<img class='AWA-star' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/6d8d527ee86cfe428363ff4898dd7ad2_336_67.png'>";


		// Determine star rating to use
		$('.current').each(function() {
			var currentRating = $(this).find('a').attr('class');
			console.log(currentRating)

			switch(currentRating) {
			    case "star-1":
			    	$(this).parent().parent().parent().prepend(star1);
			        break;
			    case "star-2":
			    	$(this).parent().parent().parent().prepend(star2);
			        break;
			    case "star-3":
			    	$(this).parent().parent().parent().prepend(star3);
			        break;
			    case "star-4":
			    	$(this).parent().parent().parent().prepend(star4);
			        break;
			    case "star-5":
			    	$(this).parent().parent().parent().prepend(star5);
			        break;
			}
		});

		// Remove leftover messy reviews
		$('.rating').remove();

		// Initially hide the loaded reviews
		$('.AWA-reviews .AWA-mobile-box .reviews').hide();

		// Add "Read more" link and first sentence of first review
		var firstReview = $('.by').first().next().text();
		var firstReviewSentence = $.trim(firstReview.substring(0, firstReview.indexOf('.')));
		firstReviewSentence += ".";
		console.log(firstReviewSentence);
		var reviewsLink = "<p class='AWA-review-blurb'>" + firstReviewSentence + " <a id='read-more-reviews' href='#'>...Read more ></a></p>";
		$('.AWA-reviews .AWA-mobile-box').prepend("<div id='AWA-reviws-placeholder'>" + reviewsLink + "</div>");

		$('#read-more-reviews').click(function(e) {
			e.preventDefault();
			$('#AWA-reviws-placeholder').hide();
			$('.AWA-reviews .AWA-mobile-box .reviews').show();
		});

		// If there are no reviews, hide Reviews tab entirely
		if ($('.AWA-reviews h3').text() == "Reviews") {
			$('.AWA-reviews').hide();
		}



	    /* --- DELIVERY TAB --- */
	    // Add delivery box
	    $('.AWA-reviews').after(exp.vars.delivery);
		$('.AWA-delivery .AWA-mobile-box .AWA-delivery-main').html($('#tabbed-panel-3').html());

		$('.AWA-despatch').html($('.despatch:contains("By ")').first().text());
		$('.AWA-despatch').append(" <a id='read-more-delivery' href='#'>...Read more ></a>");

		// Initially hide main delivery information
		$('.AWA-delivery-main').hide();
		$('#read-more-delivery').click(function(e) {
			e.preventDefault();
			$('#read-more-delivery').hide();
			$('.AWA-delivery-main').show();
		});


		// Remove Despatch date from stockInfo
		$('.stockInfo .prodPageDes').remove();




	    /* --- HOW TO GROW TAB --- */
	    // Add How to Grow box
	    $('.AWA-delivery').after(exp.vars.howToGrow);

	    // Enter in initial How to Grow Text
	    $('.AWA-grow .AWA-mobile-box .AWA-grow-main').html($.trim($('#tabbed-panel-1').text()));

	    // Initially hide initial How to Grow Text
	    $('.AWA-grow-main').hide();
		
		//Add "Read more" link and first sentence of first review
		var growText = $.trim($('#tabbed-panel-1').text());
		var growTextSentence = $.trim(growText.substring(0, growText.indexOf('.')));
		growTextSentence += ".";
		var reviewsLink = "<p class='AWA-grow-blurb'>" + growTextSentence + " <a id='read-more-grow' href='#'>...Read more ></a></p>";
		$('.AWA-grow-holder').html(reviewsLink);
		$('#read-more-grow').click(function(e) {
			e.preventDefault();
			$('.AWA-grow-main').show();
			$('.AWA-grow-holder').hide();
		});



		/* --- FINAL STUFF --- */
		// Remove the rest of the product page, excluding the footer
		$('#productCont').remove();
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

