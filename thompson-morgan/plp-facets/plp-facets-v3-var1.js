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
	exp.log('PLP Facets v3 - var 1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#1831072192");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('PLP Facets failed a condition');
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		fuchsiaFacets: 	"<div class='AWA-facets'>\
							<div class='AWA-narrow'>Narrow your selection:</div>\
							<ul>\
								<li><a id='AWA-trailing' href='http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants?filters=categories:fuchsia-plants;habit:trailing&lastSelectedFacets=habit:trailing'>Trailing</a></li>\
								<li><a id='AWA-climbing' href='http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants?filters=categories:fuchsia-plants;habit:climbing&lastSelectedFacets=habit:climbing'>Climbing</a></li>\
								<li><a id='AWA-hardy-bush' href='http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants?filters=categories:fuchsia-plants;hardiness:hardy;longevity:shrub&lastSelectedFacets=longevity:shrub'>Hardy Bush</a></li>\
								<li><a id='AWA-half-hardy' href='http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants?filters=categories:fuchsia-plants;hardiness:half-hardy&lastSelectedFacets=hardiness:half-hardy'>Half Hardy</a></li>\
								<li><a id='AWA-double-flowered' href='http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants?filters=categories:fuchsia-plants;otherfeatures:Double+Flowered&lastSelectedFacets=otherfeatures:Double+Flowered'>Double Flowered</a></li>\
								<li><a id='AWA-giant-flowered' href='http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants?filters=categories:fuchsia-plants;otherfeatures:Giant+Flowered&lastSelectedFacets=otherfeatures:Giant+Flowered'>Giant Flowered</a></li>\
							</ul>\
						</div>",
		begoniaFacets: 	"<div class='AWA-facets'>\
							<div class='AWA-narrow'>Narrow your selection:</div>\
							<ul>\
								<li><a id='AWA-trailing' href='http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants?filters=categories:begonia-plants;habit:trailing&lastSelectedFacets=habit:trailing'>Trailing</a></li>\
								<li><a id='AWA-upright' href='http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants?filters=categories:begonia-plants;habit:upright&lastSelectedFacets=habit:upright'>Upright</a></li>\
								<li><a id='AWA-perennial' href='http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants?filters=categories:begonia-plants;longevity:perennial&lastSelectedFacets=longevity:perennial'>Perennial</a></li>\
								<li><a id='AWA-scented' href='http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants?filters=categories:begonia-plants;scentedflower:strong&lastSelectedFacets=scentedflower:strong'>Scented</a></li>\
								<li><a id='AWA-tuber' href='http://www.thompson-morgan.com/flowers/flower-bulbs/begonia-tubers'>Tuber</a></li>\
								<li><a id='AWA-longevity' href='http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants?filters=categories:begonia-plants;longevity:annual&lastSelectedFacets=longevity:annual'>Annual</a></li>\
								<li><a id='AWA-spreading' href='http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants?filters=categories:begonia-plants;habit:spreading&lastSelectedFacets=habit:spreading'>Spreading</a></li>\
							</ul>\
						</div>",
		lillyFacets: 	"<div class='AWA-facets'>\
							<div class='AWA-narrow'>Narrow your selection:</div>\
							<ul>\
								<li><a id='AWA-trailing' href='http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs?filters=categories:lily-bulbs;otherfeatures:Asiatic+Lily&lastSelectedFacets=otherfeatures:Asiatic+Lily'>Trailing</a></li>\
								<li><a id='AWA-oriental' href='http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs?filters=categories:lily-bulbs;otherfeatures:Oriental+Lily&lastSelectedFacets=otherfeatures:Oriental+Lily'>Oriential</a></li>\
								<li><a id='AWA-tree' href='http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs?filters=categories:lily-bulbs;otherfeatures:Tree+Lily&lastSelectedFacets=otherfeatures:Tree+Lily'>Tree</a></li>\
								<li><a id='AWA-double' href='http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs?filters=categories:lily-bulbs;otherfeatures:Double+Flowered&lastSelectedFacets=otherfeatures:Double+Flowered'>Double</a></li>\
								<li><a id='AWA-calla' href='http://www.thompson-morgan.com/flowers/flower-plants/perennial-and-biennial-plants?filters=categories:perennial-and-biennial-plants;otherfeatures:Calla+Lily&lastSelectedFacets=otherfeatures:Calla+Lily'>Calla</a></li>\
								<li><a id='AWA-scented' href='http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs?filters=categories:lily-bulbs;otherfeatures:Scented&lastSelectedFacets=otherfeatures:Scented'>Scented</a></li>\
							</ul>\
						</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-facets ul {\
		text-align: justify;\
	}\
	.AWA-facets ul li {\
		display: inline-block;\
	}\
	.AWA-facets ul:after {\
		content: \'\';\
		width: 100%;\
		display: inline-block;\
		box-sizing: content-box !important;\
		-webkit-box-sizing: content-box !important;\
	}\
	.season .AWA-facets ul li a {\
	    text-decoration: none !important;\
	    background-color: #dddddd;\
	    padding: 5px 10px;\
	    color: black !important;\
	    border: solid 1px black;\
	    font-weight: normal;\
	}\
	.season .AWA-facets ul li a:hover {\
	    background-color: white;\
	}\
	.AWA-narrow {\
		font-weight: bold;\
		margin-bottom: 15px;\
	}\
	.season .AWA-facets ul li a.AWA-selected {\
		background-color: #345E2E;\
		color: white !important;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>')

		// Hide intro paragraph
		$(".category-portlet .season").first().find("p").hide();


		// Track fucshia filters
		function fuchsiaTracker() {
			if ($(".habit-to-hide li:contains('trailing')").find('img').length) {
				$("#AWA-trailing").addClass("AWA-selected");
			}
			if ($(".habit-to-hide li:contains('climbing')").find('img').length) {
				$("#AWA-climbing").addClass("AWA-selected");
			}
			if ($(".longevity-to-hide li:contains('shrub')").find('img').length) {
				$("#AWA-hardy-bush").addClass("AWA-selected");
			}
			if ($(".hardiness-to-hide li:contains('half-hardy')").find('img').length) {
				$("#AWA-half-hardy").addClass("AWA-selected");
			}
			if ($(".otherfeatures-to-hide li:contains('Double Flowered')").find('img').length) {
				$("#AWA-double-flowered").addClass("AWA-selected");
			}
			if ($(".otherfeatures-to-hide li:contains('Giant Flowered')").find('img').length) {
				$("#AWA-giant-flowered").addClass("AWA-selected");
			}

			// Make "deslection" link back to original category page
			$(".AWA-selected").attr('href', 'http://www.thompson-morgan.com/flowers/flower-plants/fuchsia-plants');
		}

		// Track begonia filters
		function begoniaTracker() {
			if ($(".habit-to-hide li:contains('trailing')").find('img').length) {
				$("#AWA-trailing").addClass("AWA-selected");
			}
			if ($(".habit-to-hide li:contains('upright')").find('img').length) {
				$("#AWA-upright").addClass("AWA-selected");
			}
			if ($(".longevity-to-hide li:contains('perennial')").find('img').length) {
				$("#AWA-perennial").addClass("AWA-selected");
			}
			if ($(".scentedflower-to-hide li:contains('strong')").find('img').length) {
				$("#AWA-scented").addClass("AWA-selected");
			}
			// Tuber selection not needed since this is running on a different URL
			// if (universal_variable.page.breadcrumb_l3 === "begonia tubers") {
			// 	$("#AWA-tuber").addClass("AWA-selected");
			// }
			if ($(".longevity-to-hide li:contains('annual')").find('img').length) {
				$("#AWA-longevity").addClass("AWA-selected");
			}
			if ($(".habit-to-hide li:contains('spreading')").find('img').length) {
				$("#AWA-spreading").addClass("AWA-selected");
			}

			// Make "deslection" link back to original category page
			$(".AWA-selected").attr('href', 'http://www.thompson-morgan.com/flowers/flower-plants/begonia-plants');
		}


		// Track lily bulb filters
		function lilyTracker() {
			if ($(".otherfeatures-to-hide li:contains('Asiatic Lily')").find('img').length) {
				$("#AWA-trailing").addClass("AWA-selected");
			}
			if ($(".otherfeatures-to-hide li:contains('Oriental Lily')").find('img').length) {
				$("#AWA-oriental").addClass("AWA-selected");
			}
			if ($(".otherfeatures-to-hide li:contains('Tree Lily')").find('img').length) {
				$("#AWA-tree").addClass("AWA-selected");
			}
			if ($(".otherfeatures-to-hide li:contains('Double Flowered')").find('img').length) {
				$("#AWA-double").addClass("AWA-selected");
			}
			// Calla selection not needed since this is running on a different URL
			// if ($(".otherfeatures-to-hide li:contains('Call Lily')").find('img').length) {
			// 	$("#AWA-calla").addClass("AWA-selected");
			// }
			if ($(".otherfeatures-to-hide li:contains('Scented')").find('img').length) {
				$("#AWA-scented").addClass("AWA-selected");
			}

			// Make "deslection" link back to original category page
			$(".AWA-selected").attr('href', 'http://www.thompson-morgan.com/flowers/flower-bulbs/lily-bulbs');
		}


		// Insert facets
		switch (universal_variable.page.breadcrumb_l3) {
		    case "fuchsia plants":
		        $(".category-portlet .season").first().find("p").after(exp.vars.fuchsiaFacets);
		        fuchsiaTracker();
		        break;
		    case "begonia plants":
		        $(".category-portlet .season").first().find("p").after(exp.vars.begoniaFacets);
		        begoniaTracker();
		        break;
		    case "lily bulbs":
		        $(".category-portlet .season").first().find("p").after(exp.vars.lillyFacets);
		        lilyTracker();
		        break;
		}

		// Remove extra line break after facets
		$(".AWA-facets").parent().next("br").remove();


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

