
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
	exp.log('Mobile Navigation v3');

	
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	exp.condition = $('.logoLink');

	// Check for a condition and return false if it has not been met
	if(exp.condition && !exp.condition.length) {
	    exp.log('Mobile Navigation failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		row1: 	"<div id='AWA-row1'>\
					<div id='AWA-logo'>\
						<a href='http://www.thompson-morgan.com/'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/2427400f7c068a59c6cd8297383a4f91_768_282.jpeg'></a>\
					</div>\
					<div id='AWA-m-cart'>\
						<a href='/basket'><img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/fdec7060c73eee251991c25b2b485d0e_185_165.png'></a>\
						<div id='AWA-item-num'></div>\
					</div>\
				<div style='clear: both'></div></div>",
		row2: 	"<div id='AWA-row2'>\
					<div id='AWA-menu-row'>\
						<img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/0f56c35c56235a92bdc41852e225bc85_185_115.png' >\
						<div id='AWA-menu-text'>Shop</div>\
					</div>\
					<div id='AWA-m-search'>\
						<div id='AWA-search-text'>Search</div>\
						<img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/23c729a2e629c483b6e6acb9e8e4138c_185_115.png'>\
					</div>\
				<div style='clear: both'></div></div>",
		row3: 	"<div id='AWA-row3'></div>",
		row4: 	"<div id='AWA-row4'>\
					<ul>\
					<li class='AWA-heading'><a href='#'>Flower Plants</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/flower-plants-special-offers'>Special Offers</a></li>\
						<li><a href='/flowers/flower-plants/annual-plants'>Annual Plants</a></li>\
						<li><a href='/flowers/flower-plants/perennial-and-biennial-plants'>Perennial &amp; Biennial Plants</a></li>\
						<li><a href='/flowers/flower-plants/begonia-plants'>Begonia Plants</a></li>\
						<li><a href='/flowers/flower-plants/busy-lizzie-plants'>Busy Lizzie Plants</a></li>\
						<li><a href='/flowers/flower-plants/dianthus-plants'>Dianthus Plants</a></li>\
						<li><a href='/flowers/flower-plants/fuchsia-plants'>Fuchsia Plants</a></li>\
						<li><a href='/flowers/flower-plants/geranium-and-pelargonium-plants'>Geranium &amp; Pelargonium Plants</a></li>\
						<li><a href='/flowers/flower-plants/pansy-plants'>Pansy Plants</a></li>\
						<li><a href='/flowers/flower-plants/petunia-plants'>Petunia Plants</a></li>\
						<li><a href='/flowers/flower-plants/sweet-pea-plants'>Sweet Pea Plants</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Flower Bulbs</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/flower-bulbs-special-offers'>Special Offers</a></li>\
						<li><a href='/flowers/flower-bulbs/allium-bulbs'>Allium Bulbs</a></li>\
						<li><a href='/flowers/flower-bulbs/anemones'>Anemones</a></li>\
						<li><a href='/flowers/flower-bulbs/begonia-tubers'>Begonia Tubers</a></li>\
						<li><a href='/flowers/flower-bulbs/crocus-bulbs'>Crocus Bulbs</a></li>\
						<li><a href='/flowers/flower-bulbs/daffodil-bulbs'>Daffodil Bulbs</a></li>\
						<li><a href='/flowers/flower-bulbs/dahlia-tubers'>Dahlia Tubers</a></li>\
						<li><a href='/flowers/flower-bulbs/hyacinth-bulbs'>Hyacinth Bulbs</a></li>\
						<li><a href='/flowers/flower-bulbs/lily-bulbs'>Lily Bulbs</a></li>\
						<li><a href='/flowers/flower-bulbs/tulip-bulbs'>Tulip Bulbs</a></li>\
						<li><a href='/flowers/flower-bulbs/other-flower-bulbs-and-tubers'>Other Flower Bulbs &amp; Tubers</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Flower Seeds</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/flower-seeds-special-offers'>Special Offers</a></li>\
						<li><a href='/flowers/flower-seeds/half-hardy-annual-seeds'>Half-hardy Annual Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/hardy-annual-seeds'>Hardy Annual Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/perennial-and-biennial-seeds'>Perennial &amp; Biennial Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/cosmos-seeds'>Cosmos Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/marigold-seeds'>Marigold Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/nasturtium-seeds'>Nasturtium Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/petunia-seeds'>Petunia Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/poppy-seeds'>Poppy Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/sunflower-seeds'>Sunflower Seeds</a></li>\
						<li><a href='/flowers/flower-seeds/sweet-pea-seeds'>Sweet Pea Seeds</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>All Other Seeds and Plants</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/all-other-seeds-and-plants-special-offers'>Special Offers</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/bamboo-and-grasses'>Grasses</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/cacti'>Cacti</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/clematis-plants'>Clematis Plants</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/climbing-seeds-and-plants'>Climbing Seeds &amp; Plants</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/foliage-seeds-and-plants'>Foliage Seeds &amp; Plants</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/shrubs-and-roses'>Shrubs &amp; Roses</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/trees'>Trees</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/new-spring-plants-and-bulbs-range'>NEW Spring Plants</a></li>\
						<li><a href='/flowers/all-other-seeds-and-plants/new-autumn-plants-bulbs-shrubs-range'>NEW Autumn Bulbs &amp; Shrubs</a></li>\
						<li><a href='/plug-plants'>Plug Plants</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Vegetable Seeds</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/vegetable-seeds-special-offers'>Special Offers</a></li>\
						<li><a href='/vegetables/vegetable-seeds/beetroot-and-chard-seeds'>Beetroot &amp; Chard Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/brassica-and-leafy-green-seeds'>Brassica &amp; Leafy Green Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/carrot-and-parsnip-seeds'>Carrot &amp; Parsnip Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/onion-and-leek-seeds'>Onion &amp; Leek Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/pea-and-bean-seeds'>Pea &amp; Bean Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/pepper-sweet-and-chilli-seeds'>Pepper (Sweet) &amp; Chilli Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/pumpkin-squash-and-courgette-seeds'>Pumpkin, Squash &amp; Courgette Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/salad-seeds'>Salad Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/tomato-seeds'>Tomato Seeds</a></li>\
						<li><a href='/vegetables/vegetable-seeds/all-other-vegetable-seeds'>All Other Vegetable Seeds</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Potatoes</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/potatoes-special-offers'>Special Offers</a></li>\
						<li><a href='/vegetables/potatoes/first-early'>First Early</a></li>\
						<li><a href='/vegetables/potatoes/second-early'>Second Early</a></li>\
						<li><a href='/vegetables/potatoes/maincrop'>Maincrop</a></li>\
						<li><a href='/vegetables/potatoes/second-cropping'>Second Cropping (Christmas)</a></li>\
						<li><a href='/vegetables/potatoes/sweet-potatoes'>Sweet Potatoes</a></li>\
						<li><a href='/potato-selector-guide'>Potato Selector Guide</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Vegetable Plants</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/vegetable-plants-special-offers'>Special Offers</a></li>\
						<li><a href='/vegetables/vegetable-plants/all-vegetable-plants'>All Vegetable Plants</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>All Other Vegetables</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/all-other-vegetables-special-offers'>Special Offers</a></li>\
						<li><a href='/vegetables/all-other-vegetables/artichokes'>Artichokes</a></li>\
						<li><a href='/vegetables/all-other-vegetables/asparagus'>Asparagus</a></li>\
						<li><a href='/vegetables/all-other-vegetables/herbs'>Herbs</a></li>\
						<li><a href='/vegetables/all-other-vegetables/mushrooms'>Mushrooms</a></li>\
						<li><a href='/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets'>Onion, Shallot &amp; Garlic Sets</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Seasonal Planting Vegetables</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/vegetables/spring-planting-vegetables'>All Spring Planting Vegetables</a></li>\
						<li><a href='/vegetables/autumn-planting-vegetables'>All Autumn Planting Vegetables</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Fruit Plants</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/fruit-plants-special-offers'>Special Offers</a></li>\
						<li><a href='/fruit/fruit-plants/blueberry-plants'>Blueberry Plants</a></li>\
						<li><a href='/fruit/fruit-plants/currant-plants'>Currant Plants</a></li>\
						<li><a href='/fruit/fruit-plants/raspberry-plants'>Raspberry Plants</a></li>\
						<li><a href='/fruit/fruit-plants/strawberry-plants'>Strawberry Plants</a></li>\
						<li><a href='/fruit/fruit-plants/rhubarb-crowns'>Rhubarb Plants</a></li>\
						<li><a href='/fruit/fruit-plants/vines-climbing-fruit'>Vines &amp; Climbing Fruit</a></li>\
						<li><a href='/fruit/fruit-plants/other-berry-plants'>Other Berry Plants</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Fruit Trees</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/fruit-trees-special-offers'>Special Offers</a></li>\
						<li><a href='/fruit/fruit-trees/apple-pear-trees'>Apple Trees &amp; Pear Trees</a></li>\
						<li><a href='/fruit/fruit-trees/citrus-trees'>Citrus Trees</a></li>\
						<li><a href='/fruit/fruit-trees/exotic-fruit-trees'>Exotic Fruit Trees</a></li>\
						<li><a href='/fruit/fruit-trees/fig-trees'>Fig Trees</a></li>\
						<li><a href='/fruit/fruit-trees/nut-trees'>Nut Trees</a></li>\
						<li><a href='/fruit/fruit-trees/stone-fruit-trees'>Stone Fruit Trees</a></li>\
						<li><a href='/fruit-rootstock-guide'>Fruit Rootstock Guide</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Fruit Seeds</a></li>\
					<ul class='AWA-sub'>\
						<li><a href='/fruit-seed-special-offers'>Special Offers</a></li>\
						<li><a href='/fruit/fruit-seeds/all-fruit-seeds'>All Fruit Seeds</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Garden Supplies</a></li>\
					<ul class='AWA-sub'>\
						<li class='menuHeader2Class'><a href='/garden-supplies-special-offers' class='subCategory'>Special Offers</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/baskets-containers' class='subCategory'>Baskets &amp; Containers</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/books-and-dvds' class='subCategory'>Books &amp; DVDs</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/cropping-storing-harvesting' class='subCategory'>Cropping, Storing &amp; Harvesting</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/fertilisers' class='subCategory'>Fertilisers</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/garden-machinery' class='subCategory'>Garden Machinery</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/greenhouses-equipment' class='subCategory'>Greenhouses &amp; Equipment</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/outdoor-living' class='subCategory'>Outdoor Living</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/pest-and-disease-control' class='subCategory'>Pest &amp; Disease Control</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/plant-protection-support' class='subCategory'>Plant Protection &amp; Support</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/seed-sowing-and-propagation' class='subCategory'>Seed Sowing &amp; Propagation</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/tools' class='subCategory'>Tools</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/watering-irrigation' class='subCategory'>Watering &amp; Irrigation</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/other' class='subCategory'>Other</a></li>\
					</ul>\
					<li class='AWA-heading'><a href='#'>Gardening Information</a></li>\
					<ul class='AWA-sub'>\
						<li class='menuHeader2Class'><a href='/atoz' class='subCategory'>A-Z Plant Finder</a></li>\
						<li class='menuHeader2Class'><a href='/garden-plant-finder' class='subCategory'>Garden Plant Finder</a></li>\
						<li class='menuHeader2Class'><a href='/in-the-garden-this-month' class='subCategory'>What To Do In The Garden This Month</a></li>\
						<li class='menuHeader2Class'><a href='/gardening-for-beginners' class='subCategory'>Gardening For Beginners</a></li>\
						<li class='menuHeader2Class'><a href='/gardening-guides' class='subCategory'>Gardening Guides</a></li>\
						<li class='menuHeader2Class'><a href='/gardening-questions-and-answers' class='subCategory'>Gardening Q&amp;A</a></li>\
						<li class='menuHeader2Class'><a href='/social-community' class='subCategory'>Social Community</a></li>\
						<li class='menuHeader2Class'><a href='/video-library' class='subCategory'>Video Library</a></li>\
						<li class='menuHeader2Class'><a href='/gardening-blog' class='subCategory'>Gardening Blog</a></li>\
						<li class='menuHeader2Class'><a href='/competitions' class='subCategory'>Competitions</a></li>\
					</ul>\
				</div>",
		emptyBasket: "<div id='AWA-empty'>Your basket <br>is empty</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-row1 {\
		background-color: white;\
		overflow: auto;\
		width: 100%;\
	}\
	#AWA-logo {\
		float: left;\
		width: 60%;\
	}\
	#AWA-logo img {\
		width: 40%;\
		padding-top: 2%;\
  		padding-left: 2%;\
	}\
	#AWA-m-cart {\
		float: right;\
		width: 35%;\
	}\
	#AWA-m-cart img {\
		float: right;\
		width: 27%;\
		padding-right: 6%;\
		padding-top: 1.5%;\
		margin-top: 1.5%;\
	}\
	#AWA-item-num {\
		border-radius: 22px;\
		float: right;\
		margin-right: 2%;\
		margin-top: 11%;\
		font-size: 2em;\
		padding: 5%;\
	}\
	#AWA-row2 {\
		background-color: #00562C;\
		overflow: auto;\
		padding-top: 2%;\
		padding-bottom: 2%;\
		margin-bottom: 1%;\
	}\
	#AWA-menu-row img {\
		float: left;\
		width: 13%;\
		max-width: 74px;\
		padding-top: 2%;\
		padding-left: 1%;\
		padding-bottom: 2%;\
	}\
	#AWA-menu-text {\
		float: left;\
		font-size: 266%;\
		margin-left: 2%;\
		margin-top: 3%;\
		color: white;\
	}\
	#AWA-m-search {\
		float: right;\
		width: 30%;\
	}\
	#AWA-m-search img {\
		float: right;\
		width: 30%;\
		margin-top: 5%;\
	}\
	#AWA-search-text {\
		float: right;\
		font-size: 266%;\
		margin-left: 2%;\
		margin-top: 12%;\
		padding-right: 6%;\
		color: white;\
	}\
	#AWA-row3 {\
		text-align: center;\
		overflow: auto;\
		background-color: white;\
		padding: 1%;\
	}\
	#siteSearch {\
		width: 100%;\
		clear: both;\
		margin-right: 0;\
		margin-top: 0;\
	}\
	#sli_search_1 {\
		height: 88px;\
		width: 90%;\
		background: none !important;\
		border: solid 1px black;\
		font-size: 2em;\
	}\
	.autocomplete {\
		display: none !important;\
	}\
	#AWA-row4 ul {\
		list-style-type: none;\
		border: solid 1px black;\
	}\
	#AWA-row4 li {\
		border-bottom: solid 1px black;\
		padding: 3.7%;\
		padding-left: 9%;\
		background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/f07889a894369950c2093a76b9f8adc0_64_78.png) #CAC8C8;\
		background-size: 13px;\
		background-repeat: no-repeat;\
		background-position: 95%;\
	}\
	#AWA-row4 li.AWA-heading {\
		padding-left: 5%;\
		background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/8a2ee596b2d19ea790fd2f4d3739eadd_171_89.png) lightgray;\
		background-size: 25px;\
		background-repeat: no-repeat;\
		background-position: 95%;\
	}\
	#AWA-row4 li a {\
		font-size: 166%;\
	}\
	.AWA-heading a {\
		text-transform: uppercase;\
	}\
	#AWA-empty {\
		float: right;\
		font-size: 1.7em;\
		margin-top: 9%;\
		text-align: center;\
	}\
	#AWA-my-account {\
		float: right;\
		margin-top: 5%;\
		margin-right: 30%;\
	}\
	#AWA-my-account a {\
		font-size: 208%;\
		text-decoration: underline;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    /* --- ROW 1 --- */
	    // Prepend logo and cart to the body
	    $('body').prepend(exp.vars.row1);

	    // Get # of items in cart
	    var basketText = $.trim($('.mini-basket.mini-basket.floatRight').text());
		basketText = basketText.substring(9, basketText.indexOf("item(s)"));
		var itemsInCart = $.trim(basketText);
		
		// Fallback to account for Header experiment
		if (isNaN(basketText)) {
			var basketText = $.trim($('.mini-basket.mini-basket.floatRight').text());
			itemsInCart = basketText.substring(0, basketText.indexOf(" item(s)"));
		}

		$('#AWA-item-num').text(itemsInCart);



		/* --- ROW 2 --- */
		$('#AWA-row1').after(exp.vars.row2);


		/* --- ROW 3 (Search) --- */
		$('#AWA-row2').after(exp.vars.row3);
		var search = $('#search');
		$('#AWA-row3').append(search);

		// Hide search button and use placeholder text instead
		$('#search input[type=submit]').hide();
		$('#sli_search_1').attr('placeholder', 'Search');

		// Initially hide search row
		$('#AWA-row3').hide();

		// Hide Popular Searches
		$('.popularSearches').remove();

		// Toggle Search
		$('#AWA-m-search').click(function() {
			$('#AWA-row3').toggle();
		});

		// If search is not available then hide it
		if ($('#search').length < 1) {
			$('#AWA-m-search').hide();
		}

		// Remove extra lable if available
		$('#siteSearch').find('label').remove();


		/* --- ROW 4 (Menu) --- */
		$('#AWA-row3').after(exp.vars.row4);

		// Event handler for select menu li
		$('#AWA-row4 li:not(".AWA-heading")').click(function() {
			var newLocation = $(this).find('a').attr('href');
			$(location).attr('href', newLocation);
		});

		// Initially hide menu
		$('#AWA-row4').hide();

		// Toggle Menu
		$('#AWA-menu-row img, #AWA-menu-text').click(function() {
			$('#AWA-row4').toggle();
		});

		// Initially hide submenus
		$('.AWA-sub').hide();

		// Event handler for menu drop downs
		$('.AWA-heading a').click(function(e) {
			e.preventDefault();
		});
		$('.AWA-heading').click(function(e) {
			e.preventDefault();
			$(this).next('.AWA-sub').toggle();
			if ($(this).next('.AWA-sub').is(":visible")) {
				$(this).attr('style', 'background: none; background-color: lightgray;');
			} else {
				$(this).attr('style', 'background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/8a2ee596b2d19ea790fd2f4d3739eadd_171_89.png); background-size: 25px; background-repeat: no-repeat; background-position: 95%; background-color: lightgray;');
			}
			
		});



		/* --- FINAL STUFF --- */
		// Hide original header
		$('#header-portlet').hide();

		// Hide original navigation
		$('.navigation-portlet').hide();

		// Add empty basket text
		if ($('#AWA-item-num').text() == 0) {
			$('#AWA-item-num').after(exp.vars.emptyBasket);
			$('#AWA-item-num').text("");
		}

		// Include "My Account" link at the top
		var myAccount = "<div id='AWA-my-account'><a href='/myaccount'>My Account</a></div>";
		$('#AWA-logo').prepend(myAccount);


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
