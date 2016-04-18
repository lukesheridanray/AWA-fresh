//function() {
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
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
	exp.log('PLP Condensed - v3 - var2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#268917436");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('PLP Condensed failed a condition');
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		facets: 	"<div class='AWA-facets'>\
						<div class='AWA-narrow'>Showing <span id='AWA-num-found'></span> items. To find more relevant items, please use the filters below.</div>\
						<ul id='AWA-facets-list'>\
							<li class='AWA-facets-list-item' id='AWA-fc'><a class='AWA-facets-list-item-link' href='#'>Flower Colour</a></li>\
							<li class='AWA-facets-list-item' id='AWA-hi'><a class='AWA-facets-list-item-link' href='#'>Hardiness</a></li>\
							<li class='AWA-facets-list-item' id='AWA-p'><a class='AWA-facets-list-item-link' href='#'>Position</a></li>\
							<li class='AWA-facets-list-item' id='AWA-st'><a class='AWA-facets-list-item-link' href='#'>Soil Type</a></li>\
							<li class='AWA-facets-list-item' id='AWA-gi'><a class='AWA-facets-list-item-link' href='#'>Grow In</a></li>\
							<li class='AWA-facets-list-item' id='AWA-he'><a class='AWA-facets-list-item-link' href='#'>Height</a></li>\
						</ul>\
					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#facetResults {\
			width: inherit;\
		}\
		#results {\
			width: 100%;\
		}\
		#results .resultSet {\
			float: left;\
		}\
		.resultSet .floatLeft img {\
			width: 230px;\
			height: 230px;\
			margin-right: 50px;\
		}\
		.AWA-facets ul#AWA-facets-list {\
			text-align: justify;\
		}\
		.AWA-facets ul#AWA-facets-list li.AWA-facets-list-item {\
			display: inline-block;\
		}\
		.AWA-facets ul#AWA-facets-list:after {\
			content: \'\';\
			width: 100%;\
			display: inline-block;\
			box-sizing: content-box !important;\
			-webkit-box-sizing: content-box !important;\
		}\
		.season .AWA-facets ul#AWA-facets-list li.AWA-facets-list-item a.AWA-facets-list-item-link {\
		    text-decoration: none !important;\
		    background-color: #dddddd;\
		    padding: 5px 10px;\
		    color: black !important;\
		    border: solid 1px black;\
		    font-weight: normal;\
		}\
		.season .AWA-facets ul#AWA-facets-list li.AWA-facets-list-item a.AWA-facets-list-item-link:hover {\
		    background-color: white;\
		}\
		.AWA-narrow {\
			font-weight: bold;\
			margin-bottom: 15px;\
		}\
		.AWA-filter-dropdown {\
			display: none;\
			border: solid 1px black;\
			position: absolute;\
			z-index: 3;\
			background-color: whitesmoke;\
			padding: 15px;\
			margin-top: 2px;\
		}\
		.AWA-filter {\
			margin-bottom: 3px;\
		}\
		.AWA-filter a {\
			text-decoration: none !important;\
			color: black !important;\
		}\
		';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

    $.getJSON('https://d1m54pdnjzjnhe.cloudfront.net/thompsonmorgan/awa/imagedataFeb2016_01.json.gz', function(data){
    	if (data) {
    		imageData2 = data;
    		applyExp();
    	}
    });

    function applyExp() {
		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Remove side filters and email signup
		$("#268917436, #1356185448").hide();

		// Swap out images
		$(".resultSet .floatLeft a").each(function() {
			var url = $(this).attr('href');
			var n = url.lastIndexOf('/');
		  	var urlCode = url.substring(n + 1);
		  	$(this).find("img").attr('src', imageData2[urlCode]);
		});

		// Add margin next to stars
		$("img[src$='-star.jpg']").attr('style', 'margin-right: 8px');

		// Trim product descriptions
		$(".resultSet").each(function() {

			$(this).find('.season').contents().filter(function() {
			    return this.nodeType === 3;
			}).each(function() {
			    this.nodeValue = $.trim(this.nodeValue);
			}).wrap('<p class="AWA-unwrapped"></p>');

			$(".AWA-unwrapped").hide();


			// If bulleted list exists
			if ($(this).find('.season').find('.productBullet').length) {
				$(this).find('.season').find('.productBullet').first().nextAll().hide();
			} else if ($(this).find('.season').find('b').length) {
				$(this).find('.season').find('b').first().nextAll().hide();
			} else {
				$(this).find('.season').children().hide();
			}

			// Exception for Annual Best Value Bumper Collection which has a very large bulleted list
			if ($(this).find('.floatLeft').find("a").first().attr('href') === "/flowers/flower-plants/annual-plants/annual-best-value-collection/t47471TM") {
				$(this).find('.season').children().hide();
			}

		});

		// Toggle product descriptions
		$(".moreInfo").click(function(e) {
			e.preventDefault();
			$(this).closest('.floatRight.facetDescription').find('.season').children().show();
			$(this).closest('.floatRight.facetDescription').find('.season').find("b:contains('Customer Rating')").prev('.AWA-unwrapped').hide();
			$(".producticon").hide();
			$(this).attr('style', 'visibility: hidden;');
		});



		// Capture filters available on page
		var filters = {};

		// FLOWER COLOUR
		var flowerFilter = [];
		if ($(".flowercolour-to-hide").length) {
			$(".flowercolour-to-hide li:not('.simulateMargin')").each(function() {
				flowerFilter.push($.trim($(this).html()));
			});
			filters.flowerFilter = flowerFilter;
		}

		// HARDINESS
		var hardinessFilter = [];
		if ($(".hardiness-to-hide").length) {
			$(".hardiness-to-hide li:not('.simulateMargin')").each(function() {
				hardinessFilter.push($.trim($(this).html()));
			});
			filters.hardinessFilter = hardinessFilter;
		}

		// POSITION
		var positionFilter = [];
		if ($(".position-to-hide").length) {
			$(".position-to-hide li:not('.simulateMargin')").each(function() {
				positionFilter.push($.trim($(this).html()));
			});
			filters.positionFilter = positionFilter;
		}

		// SOIL TYPE
		var soilTypeFilter = [];
		if ($(".soiltype-to-hide").length) {
			$(".soiltype-to-hide li:not('.simulateMargin')").each(function() {
				soilTypeFilter.push($.trim($(this).html()));
			});
			filters.soilTypeFilter = soilTypeFilter;
		}

		// GROW IN
		var growInFilter = [];
		if ($(".growin-to-hide").length) {
			$(".growin-to-hide li:not('.simulateMargin')").each(function() {
				growInFilter.push($.trim($(this).html()));
			});
			filters.growInFilter = growInFilter;
		}

		// HEIGHT
		var heightFilter = [];
		if ($(".height-to-hide").length) {
			$(".height-to-hide li:not('.simulateMargin')").each(function() {
				heightFilter.push($.trim($(this).html()));
			});
			filters.heightFilter = heightFilter;
		}

		// Hide intro paragraph
		$(".category-portlet .season").first().find("p").hide();

		function appendFilters(array, el) {
			var ul = "<ul class='AWA-filter-dropdown'>";
			for (var i = 0; i < array.length; i++) {
				ul += "<li class='AWA-filter'>" + array[i] + "</li>";
			}
			$(el).append(ul);
		}


		// If there are filters, then add the facets at the top
		if (!$.isEmptyObject(filters)) {

			// Exception for Anemones page (http://www.thompson-morgan.com/flowers/flower-bulbs/anemones)
			if (window.location.href.indexOf("anemones") > -1) {
				$("#facetResults").find('h1').after("<br><span class='season'>" + exp.vars.facets + "</span>");

			} else {
				$(".category-portlet .season").first().find("p").last().after(exp.vars.facets);
			}


			// Insert number of products found
			$("#AWA-num-found").text($(".searchResults").find("b").text());

			// Hide unavailable filters
			if (!filters.flowerFilter) {
				$("#AWA-fc").hide();
			} else {
				appendFilters(filters.flowerFilter, "#AWA-fc");
			}

			if (!filters.hardinessFilter) {
				$("#AWA-hi").hide();
			} else {
				appendFilters(filters.hardinessFilter, "#AWA-hi");
			}

			if (!filters.positionFilter) {
				$("#AWA-p").hide();
			} else {
				appendFilters(filters.positionFilter, "#AWA-p");
			}

			if (!filters.soilTypeFilter) {
				$("#AWA-st").hide();
			} else {
				appendFilters(filters.soilTypeFilter, "#AWA-st");
			}

			if (!filters.growInFilter) {
				$("#AWA-gi").hide();
			} else {
				appendFilters(filters.growInFilter, "#AWA-gi");
			}

			if (!filters.heightFilter) {
				$("#AWA-he").hide();
			} else {
				appendFilters(filters.heightFilter, "#AWA-he");
			}

			// Hide "View All" links
			$(".AWA-filter a:contains('View All')").parent().hide();
		}
		
		// Click event handler for filters
		$(".AWA-facets-list-item-link").click(function(e) {
			e.preventDefault();
			$(this).next(".AWA-filter-dropdown").slideToggle();
		});

		// If any filter is applied then show the open list but hide the rest of the filters in the same category since they can't be applied at the same time
		$(".AWA-filter-dropdown li").each(function() {
			// Search for the "x" image
			if ($(this).find('img').length) {
				$(this).siblings().hide();
				$(this).parent().show();
			}
		});



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

