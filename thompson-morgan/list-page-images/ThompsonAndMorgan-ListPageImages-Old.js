
/*
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
exp.log('Despatching Now - 0.1');

/*
// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.unique-selector');
*/
exp.condition = $('.toplevel');

// Check for a condition and return false if it has not been met
/*if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}*/
if (exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = '\
.search-portlet a {\
    color: #636363 !important; text-decoration: underline;\
}\
#findPlant {\
    color: #636363 !important; text-decoration: underline; margin-left: 38px;\
}\
#newSearchOptions {\
    margin-top: 9px;\
}\
#nav-5 {\
    float: left;\
    margin-left: 15px;\
    background-position: 55px 19px !important;\
}\
#clock {\
    text-align: right;\
    height: 22px;\
    width: 22px;\
    float: right;\
    margin-top: 4px;\
    margin-right: 7px;\
}\
#clock2 {\
    text-align: right;\
    height: 22px;\
    width: 22px;\
    float: right;\
    margin-top: 4px;\
    margin-right: 7px;\
    display: none;\
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
    /* --------------------------- Change search section --------------------------- */
    // Append style to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Remove "Popular Searches" text
    $('.popularSearches').remove();

    // Create and insert new search links
    var advancedSearch = "<div id='newSearchOptions'><a id='advancedSearch' href='/garden-plant-finder'>Advanced Search</a><a id='findPlant' href='/atoz'>Find Plant By Name</a></div>";
    $('.search-portlet').append(advancedSearch);


    /* --------------------------- Change nav bar --------------------------- */
    // Rearrange nav order
    var plantFinderBox = $('.toplevel:eq(5)');
    var specialOffersBox = $('.toplevel:eq(0)');
    plantFinderBox.insertAfter(specialOffersBox);

    // Remove dropdown content
    $('#sub6').remove();
    plantFinderBox.find('.sub').remove();

    // Rename nav button and insert clock
	var $nav5 = $('#nav-5'),
	    $clock = $("<img id='clock' src='https://dd6zx4ibq538k.cloudfront.net/static/images/2841/85904ada6ff25d4604f89e4249689fde_22_22.png'>"),
	    $clock2 = $("<img id='clock2' src='https://dd6zx4ibq538k.cloudfront.net/static/images/2841/bc12ba9afd22d379d20d25eaa267aff6_22_22.png'>");

	// Rename nav button and insert clock
	$nav5.html('Despatching <br> Now');
	$nav5.after($clock, $clock2);

    // Change link href
    var despatchingNowLink = plantFinderBox.find('a')[0];
    $(despatchingNowLink).attr('href', '/despatch');

    // Swap clock images on hover
	var despatchingNowButton = $('.toplevel')[1];
	$(despatchingNowButton).hover(function() {
	    if ($clock.is(":visible")) {
	        $clock.hide();
	        $clock2.show();
	    } else {
	        $clock.show();
	        $clock2.hide();
	    }
	});

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

}






// var urlCodeCollection = [];
// function replaceImage() {
// 	$(".facetDescription").each(function() {
// 		var $description = $(this);
// 	 	var $link = $($description).find('a:nth-child(2)').attr('href');
// 		var urlCode = /[^/]*$/.exec($link)[0];

// 		urlCodeCollection.push(urlCode);
// 	});
// 	console.log(urlCodeCollection);
// }

$.ajax({
    type: "GET",
    url: "https://dl.dropboxusercontent.com/u/7987115/T%26MImages.js",
    success: function(data) {
    	var response = JSON.parse(data);

		$('.resultSet .floatLeft').each(function() {
			var $link = $(this).find('a').attr('href');
			var urlCode = /[^/]*$/.exec($link)[0];

			var img = $(this).find('img');
			console.log(img);
			img.attr('style', 'height: 230px; width: 230px');

    		var responseLength = response.length;
	    	for (var i = 0; i < responseLength; i++) {
	    		if (/[^/]*$/.exec(response[i]["Product URL"])[0] == urlCode) {
	    			console.log(response[i]["Image URL 230px X 230px jpgs"]);
	    			var newImage = (response[i]["Image URL 230px X 230px jpgs"]);
	    			img.attr('src', newImage);
	    			return;
	    		}
	    	}

		});
		console.log('done')
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Status: " + textStatus); alert("Error: " + errorThrown); 
    } 
});

$('.facetDescription').attr('style', 'width: 462px');




$.ajax({
    type: "GET",
    url: "https://dl.dropboxusercontent.com/u/7987115/T%26MData.js",
    success: function(data) {
    	var response = JSON.parse(data);
    	getNewData(response);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Status: " + textStatus); alert("Error: " + errorThrown); 
    } 
});


function getNewData(response) {
	$('.floatRight.facetDescription .season').each(function() {
		var $listing = $(this);

		var $description = $(this).parent();
		var $link = $($description).find('a:nth-child(2)').attr('href');
		var urlCode = /[^/]*$/.exec($link)[0];

		$('.moreInfo').text("View Full Information");

		var containsProductBullet = false;

		var $productBullet = $(this).find('.productBullet');
		if ($productBullet.length != 0) {
			//console.log($productBullet);
			containsProductBullet = true;
			$productBullet.nextUntil("div").remove();
		}

		var $customerRatingText = $(this).find("b");
		console.warn($customerRatingText.html())
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

		//console.info('Contains Product Bullet: ' + containsProductBullet + ", Contains Rating: " + containsRating);
			
		if (containsProductBullet == true && (containsRating == true || containsRating == false)) {
			removeSpanTextOnly($listing)
			findAndApply($listing, response, urlCode);
		} else if (containsProductBullet == false && containsRating == false) {
			removeDescriptionText($listing);
			findAndApply($listing, response, urlCode);
		} else if (containsProductBullet == false && containsRating == true) {
			removeDescriptionText($listing);
			findAndApply($listing, response, urlCode);
		}
	});
	$("<style type='text/css'> .newD{ color:#00572D !important; font-weight: bold} .newList {margin-left: 19px; margin-top: 10px; margin-bottom: 10px;</style>").appendTo("head");
}

function findAndApply($listing, response, urlCode) {
	var responseLength = response.length;
	for (var i = 0; i < responseLength; i++) {
		if (/[^/]*$/.exec(response[i]["deeplink_url"])[0] == urlCode) {
			var newData = {};
			newData.idealFor = response[i]["ideal_for"].split(',').join(', ');;
			newData.hardiness = response[i]["hardiness"];
			newData.sunShade = response[i]["sun_shade"];
			newData.height = response[i]["height"];
			newData.spread = response[i]["spread"];
			newData.floweringMonths = response[i]["flowering_months"].split(',').join(', ');
			//console.error(newData);
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
			console.log(this.nodeValue)
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
			console.log(this.nodeValue)
			this.nodeValue = "";
		}
	});
}


$('.stockInfo').each(function() {
	$(this).parent().after($(this));
});
$('.stockInfo').attr('style', 'float: left; margin-left: 95px;');