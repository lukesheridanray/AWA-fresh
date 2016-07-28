function (options) {
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
	exp.log('Mobile Experience v20');


	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	exp.condition = $('#32485735');

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Mobile Product Page failed a condition');
	//     return false;
	// }

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		row1: 	"<div id='AWA-row1'>\
					<div id='AWA-logo'>\
						<a href='http://www.thompson-morgan.com/'><img style='display: block; margin-left: auto;' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/2427400f7c068a59c6cd8297383a4f91_768_282.jpeg'></a>\
					</div>\
				",
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
						<li class='menuHeader2Class'><a href='/garden-supplies/garden-furniture' class='subCategory'>Garden Furniture</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/garden-machinery' class='subCategory'>Garden Machinery</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/greenhouses-equipment' class='subCategory'>Greenhouses & Equipment</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/grow-your-own' class='subCategory'>Grow Your Own</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/landscaping-and-planters' class='subCategory'>Landscaping & Planters</a></li>\
						<li class='menuHeader2Class'><a href='/garden-supplies/outdoor-living' class='subCategory'>Outdoor Living</a></li>\
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
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	body, body * {\
	    max-height: 1000000px;\
	}\
	#AWA-co-text {\
		display: none;\
    	margin-top: 40px;\
	}\
	#AWA-co-text a {\
		font-size: 2.8em;\
    	text-decoration: underline;\
	}\
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
		margin-top: 8%;\
		font-size: 2.2em;\
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
		font-size: 42px;\
	}\
	.AWA-heading a {\
		text-transform: uppercase;\
	}\
	#AWA-empty {\
		float: right;\
		font-size: 2.1em;\
		line-height: 1em;\
		margin-top: 9%;\
		text-align: center;\
	}\
	#AWA-my-account {\
		float: right;\
		margin-top: 40px;\
		margin-right: 20%;\
	}\
	#AWA-my-account a {\
		font-size: 2.8em;\
		text-decoration: underline;\
	}\
	#AWA-yellow-tt {\
		background-image: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/1b8458c4056389213bfe0631cf39f455_242_107.png);\
		width: 206px;\
		position: absolute;\
		margin-left: 48px;\
		font-size: 2em;\
		padding: .75em;\
		z-index: 10;\
		line-height: 1.2em;\
		padding-top: 29px;\
		display: none;\
	}\
	#AWA-homepage {\
		margin-bottom: 35px;\
	}\
	#AWA-h-hero img {\
		width: 100%;\
	}\
	#AWA-homepage-menu a {\
		border-bottom: solid 1px black;\
		padding: 3.7%;\
		padding-left: 9%;\
		background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/f07889a894369950c2093a76b9f8adc0_64_78.png) #CAC8C8;\
		background-size: 13px;\
		background-repeat: no-repeat;\
		background-position: 95%;\
		display: block;\
		font-weight: bold;\
		font-size: 250%;\
	}';

	exp.css2 = '\
	#productCont {\
		width: 100%;\
	}\
	.t011 {\
		float: none;\
		text-align: center;\
	}\
	.t011 .main {\
		width: inherit;\
	}\
	.AWA-title, .AWA-subtitle {\
		text-align: center;\
		margin-top: 1%;\
		margin-bottom: 1%;\
	}\
	h1 .productClass {\
		font-size: 50px;\
		line-height: 1em;\
	}\
	.AWA-subtitle {\
		margin-bottom: 12px;\
		margin-top: 1%;\
	}\
	#prodFeatures {\
		width: 92%;\
		margin: 0 auto;\
		padding-right: 5%;\
		font-size: 35px;\
		line-height: 120%;\
	}\
	#prodFeatures dd {\
		margin-left: 50px;\
	}\
	.stockInfo {\
		width: 95%;\
		margin: 0 auto;\
		padding-left: 2%;\
		background-color: #AEC115;\
		padding-top: 2%;\
		padding-bottom: 3%;\
	}\
	.stockInfo li {\
		width: 100%;\
		padding-right: 15px;\
	}\
	.stockInfo li.size {\
		width: 100%;\
		font-size: 40px;\
		line-height: 120%;\
	}\
	.stockInfo li.price {\
		float: right;\
		margin-right: 7%;\
		font-size: 36px;\
		margin-top: .5%;\
	}\
	.stockInfo li.promo {\
		margin-top: 1%;\
		font-size: 36px;\
		width: 30%;\
		line-height: 36px;\
	}\
	#AWA-add {\
		background-color: rgb(182, 7, 24);\
		color: white;\
		font-weight: bold;\
		width: 40%;\
		text-align: center;\
		padding: 45px;\
		margin: 0 auto;\
		margin-top: 15px;\
		font-size: 3.5em;\
	}\
	.AWA-radio-div {\
		width: 20px;\
	}\
	input.AWA-radio {\
		width: inherit;\
		float: left;\
		margin-right: 19px;\
		height: 55px;\
		width: 55px;\
	}\
	.AWA-description, .AWA-reviews, .AWA-delivery, .AWA-grow {\
		font-size: 40px;\
		border: solid 1px black;\
		width: 95%;\
		margin: 0 auto;\
		margin-top: 5% !important;\
		padding: 1%;\
		line-height: 1.7em;\
	}\
	.AWA-description h3, .AWA-reviews h3, .AWA-delivery h3, .AWA-grow h3 {\
		display: inline;\
		margin-left: 8px;\
		font-size: 40px;\
	}\
	.AWA-tab-arrow {\
		width: 10px;\
		margin-left: 15px;\
	}\
	.AWA-description-blurb {\
	}\
	.AWA-mobile-box a {\
		text-decoration: underline;\
		font-size: 40px;\
	}\
	.AWA-star {\
		width: 115px;\
	}\
	.border-bottom-grey {\
		margin-bottom: 20px;\
	}\
	.AWA-feature {\
		color: #00572D !important; font-weight: bold;\
	}\
	.AWA-newList li {\
		padding-bottom: 1%;\
	}\
	#AWA-add-link {\
		margin: 4%;\
	}\
	#AWA-new-delivery-tab table {\
		margin-top: 10px;\
		border: solid 1px black;\
	}\
	#AWA-new-delivery-tab table tr > td {\
		border: solid 1px black;\
		padding: 5px;\
	}\
	td.AWA-first-col {\
		width: 48%;\
	}\
	#AWA-new-delivery-tab td:not(.AWA-first-col) {\
		text-align: center;\
	}\
	.AWA-bold {\
		font-weight: bold;\
	}\
	#AWA-new-delivery-tab th {\
		text-align: left;\
		padding: 5px;\
	}\
	.AWA-mobile-box {\
		padding-top: 1%;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');



	/* --- MOBILE NAVIATION --- */




		/* --- ROW 1 --- */
		// Prepend logo and cart to the body

	$('#header-portlet').prepend(exp.vars.row1);

		//hide other logo
		jQuery('#header-portlet > a').hide();

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




	// Remove extra lable if available
	$('#siteSearch').find('label').remove();

	/* --- ROW 4 (Menu) --- */
	$('#header-portlet').after(exp.vars.row4);

	// Event handler for select menu li
	// $('#AWA-row4 li:not(".AWA-heading")').click(function() {
	// 	var newLocation = $(this).find('a').attr('href');
	// 	$(location).attr('href', newLocation);
	// });

	// Initially hide menu
	$('#AWA-row4').hide();

	// Toggle Menu
	$('#AWA-menu-row img, #AWA-menu-text').click(function() {
		$('#AWA-row4').toggle();
		// When burger menu is pressed hide tooltip
		$("#AWA-yellow-tt").hide();
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


	//change text for guest checkout

	jQuery('#new-customer > h2').html('<h2>Guest Checkout</h2>');


	// Hide original navigation
	$('.navigation-portlet').hide();
	jQuery('#901239901 > div > div').hide();

	// Add empty basket text
	if ($('#AWA-item-num').text() == 0) {
		$('#AWA-item-num').after(exp.vars.emptyBasket);
		$('#AWA-item-num').text("");
	}




		/* --- LOGIN PAGE --- */
		if ($("h2:contains('Login to your account')").length) {
			console.log("I am on the checkout page!");
			this.loginCSS = '\
				#new-customer {\
					margin: 0 auto;\
					margin-top: 15px;\
					text-align: center;\
					width: 80%;\
				}\
				.registration-portlet {\
					margin: 0;\
					padding: 0;\
					float: none;\
					width: 100%;\
				}\
				#new-customer label, #login-customer label {\
					width: 30%;\
					font-size: 150%;\
				}\
				input[type=text], .product-additional-info input, .product-additional-info textarea, .tellafriend-portlet textarea, input[type=password], input[type=email], input[type=tel] {\
					font-size: 150%;\
					width: 65%;\
				}\
				.dropDownField {\
					width: 65% !important;\
					height: 34px;\
					font-size: 150%;\
				}\
				#postalCode {\
					margin-left: 11px;\
				}\
				.userDetails {\
					margin-left: 0;\
					margin-right: 63px;\
				}\
				.subscriptiontable {\
					margin: 0 auto;\
					margin-top: 25px;\
				}\
				.login-portlet {\
					float: none;\
					clear: both;\
					width: 100%;\
				}\
				#login-customer h2 {\
					text-align: center;\
				}\
				.login-portlet input[type=text], .login-portlet input[type=password], .login-portlet input[type=email], .login-portlet input[type=tel] {\
					width: 50%;\
				}\
				.AWA-m-new-button {\
					display: block;\
					margin: 0 auto;\
					margin-bottom: 15px;\
					background-color: #B80518;\
					color: white !important;\
					padding: 12px;\
					font-size: 150%;\
					width: 19%;\
				}\
				.AWA-m-new-hidden {\
					display: none;\
				}\
				#AWA-m-continue1 {\
					margin-top: 25px;\
				}\
				#AWA-border {\
					margin: 0 auto;\
					margin-top: 50px;\
					width: 30%;\
					border-top: solid 3px #103E1C;\
					margin-bottom: 50px;\
				}\
				#AWA-border h1 {\
					width: 25%;\
					margin: 0 auto;\
					text-align: center;\
					background-color: #F2F2F2;\
					position: relative;\
					top: -10px;\
					font-size: 164%;\
				}\
				#QASearch {\
					font-size: 200%;\
				}\
				.searchPostCodeLink {\
					width: 170px !important;\
				}\
				.qas {\
					font-size: 200%;\
					margin-bottom: 15px;\
				}\
				.QAS_Table {\
					margin: 0 auto;\
				}\
				.QAS_Table a {\
					font-size: 200%;\
					display: block;\
					margin-bottom: 15px;\
					line-height: 120%;\
				}\
				#manualEntry {\
					font-size: 100%;\
				}\
				.error_message {\
					font-size: 150%;\
					display: block;\
					margin: 10px;\
					width: 100%;\
				}\
				.login-portlet .error_message {\
					width: 100%;\
				}\
				.registration-portlet {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
}\
.login-portlet {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
}\
';

			$('head').append('<style type="text/css">'+this.loginCSS+'</style>');

			var error = false;
			if ($(".error_message").is(':visible')) {
				error = true;
			}

			$("#AWA-row4").after("<div id='AWA-m-login'></div>");

			$("#AWA-m-login").append($("#1815133327"));

			$("#new-customer").find("p").hide();
			$(".orderConfirmationEmail").hide();
			$(".userDetails div:contains('We do not deliver outside')").html('<label>Country * <span title="required"></span></label><input id="country" type="text" value="United Kingdom" readonly="readonly">');

			// Move email address
			var email = $("#email").closest('div');
			$("#postalCode").closest('div').before(email);

			var emailConfirm = $("#reEnterEmail").closest('div');
			$("#postalCode").closest('div').before(emailConfirm);



			$("#mainform").before("<a href='#' id='AWA-m-guest-checkout' class='AWA-m-new-button'>Checkout Here</a>");
			$(".userDetails").hide();
			$("#registration_submit").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; -webkit-appearance: none;').attr('value', 'Continue Checkout');
			$("#registration_submit").hide();
			$("#AWA-m-guest-checkout").click(function(e) {
				e.preventDefault();
				$(".userDetails").show();
				$(this).hide();
				$("#registration_submit").show();
			});

			// $("#reEnterEmail").closest("div").after("<a href='#' id='AWA-m-continue1' class='AWA-m-new-button'>Continue</a>");
			// $("#AWA-m-continue1").click(function(e) {
			// 	e.preventDefault();
			// 	$(".AWA-m-new-hidden").show();
			// 	$(this).hide();
			//$("#registration_submit").show();
			// });

			//$("#QASearch").hide();

			// $("#postalCode").closest("div").addClass('AWA-m-new-hidden');
			// $("#flatName").closest("div").addClass('AWA-m-new-hidden');
			// $("#streetName").closest("div").addClass('AWA-m-new-hidden');
			// $("#district").closest("div").addClass('AWA-m-new-hidden');
			// $("#town").closest("div").addClass('AWA-m-new-hidden');
			// $("#country").closest("div").addClass('AWA-m-new-hidden');
			// $("#phone").closest("div").addClass('AWA-m-new-hidden');
			// $("#cellphone").closest("div").addClass('AWA-m-new-hidden');

			//$("registration_submit").click(function() {
				$("#fakeSubmit").remove();
			//});


			$(".registration-portlet").append("<div id='AWA-border'><h1>OR</h1></div>");

			// LOGIN
			$("p:contains('Welcome back')").hide();
			$("p:contains('required fields')").hide();
			$(".login-helpsection").hide();

			$("#login_submit").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; margin-right: 0; -webkit-appearance: none;').attr('value', 'Login');
			$(".actions_login").find('div').first().attr('style', 'text-align: center;');
			$(".actions_login").find('div').find('label').first().remove();

			$("div.text:contains('Forgot Your Password')").attr('style', 'font-size: 150%; margin-top: 40px;');
			$("div.text:contains('Forgot Your Password')").find('a').first().attr('style', 'font-size: 100%;');

			// Make email inputs use an email type
			$("#email").remove();
			$(".double:contains('Email *')").after('<input id="email" name="email" type="email" value="" maxlength="200" size="200" tabindex="11">');
			$("#reEnterEmail").remove();
			$(".double:contains('Confirm email *')").after('<input id="reEnterEmail" name="reEnterEmail" type="email" value="" maxlength="200" size="200" tabindex="12">');
			$("#loginForm\\:username").remove();
			$("label:contains('Your email address')").after('<input id="loginForm:username" name="loginForm:username" type="email" value="" tabindex="26">');

			// Make phone inputs
			$("#phone").remove();
			$("label:contains('Telephone number * ')").after('<input id="phone" name="phone" type="tel" value="" maxlength="20" size="20" tabindex="13">');
			$("#cellphone").remove();
			$("label:contains('Mobile number')").after('<input id="cellphone" name="cellphone" type="tel" value="" maxlength="20" size="20" title="Please enter your best contact number. We will only use this to contact you with queries about your order." tabindex="14">');

			$("b:contains('find your address?')").attr('style', 'font-size: 200%; margin-top: 20px; margin-bottom: 30px; display: block;');

			// If address lookup was used then show the appropriate section
			if ($("b:contains('find your address?')").length) {
				$("#AWA-m-guest-checkout")[0].click();
			}

			// If Country input has a value (from address lookup) then show the appropriate section
			if ($("#postalCode").val().length) {
				$("#AWA-m-guest-checkout")[0].click();
				$("#AWA-m-continue1")[0].click();
			}

			// If error message exists, show whole form
			if (error === true) {
				jQuery('#AWA-m-guest-checkout')[0].click();
			}

			// Hide footer




			// Styles
			// String containing the CSS for the experiment
			exp.css = '\
			#AWA-row1 {\
				background-color: white;\
				overflow: auto;\
				width: 100%;\
			}\
			#AWA-logo {\
					width: 60%;\
					display: block;\
					margin-left: auto;\
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
			}\
			.headerLinks.floatRight {\
				display: block;\
				margin-right: 15%;\
		}\
		.login-portlet {\
				width: 350px;\
				display: block;\
				margin-left: auto;\
				margin-right: auto;\
		}\
		div#new-customer {\
				display: block;\
				margin-left: auto;\
				margin-right: auto;\
		}\
		.registration-portlet {\
				border-right: none;\
				border-top: 1px solid #4d896c;\
				width: 95%;\
		}\
		table.subscriptionTable {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
    padding-left: 60px;\
		}\
		';

			// Functions
			// Object containing functions, some helpful functions are included


			// Init function
			// Called to run the actual experiment, DOM manipulation, event listeners, etc

					// Append style to head
					$('head').append('<style type="text/css">'+this.css+'</style>');


					/* --- ROW 1 --- */
					// Prepend logo and cart to the body


					//hide other logo
					// jQuery('#header-portlet > a').hide();

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




				// Remove extra lable if available
				$('#siteSearch').find('label').remove();




				/* --- FINAL STUFF --- */
				// Hide original header


				//change text for guest checkout

				jQuery('#new-customer > h2').html('<h2>Guest Checkout</h2>');


				// Hide original navigation
				$('.navigation-portlet').hide();
				jQuery('#901239901 > div > div').hide();

				// Add empty basket text
				if ($('#AWA-item-num').text() == 0) {
					$('#AWA-item-num').after(exp.vars.emptyBasket);
					$('#AWA-item-num').text("");
				}

				// make the disclosure
				//Append Log in to your account
						jQuery('.registration-portlet').before(jQuery('.login-portlet'));


						$('#QASearch').hide();

						jQuery('#postalCode').after('<input id="QASearch" name="QASearch" type="submit" value="Find Address" \
						onclick="if(typeof window.clearFormHiddenParams_mainform!="undefined"){clearFormHiddenParams_mainform("mainform");}"\
						class="searchPostCodeLink priceColour textUnderline floatLeft findButton" tabindex="5">');


						// Remove FloatLeft Class from what needs it
						$( "#1815133327 > div > div > div.login-portlet" ).removeClass( "floatLeft" );
						$( "#1815133327 > div > div > div.registration-portlet" ).removeClass( "floatLeft" );

						//Hide what needs to be hid for progressive disclosuce.
						jQuery('#1815133327 > div > div > .login-portlet').hide();

						jQuery('.registration-portlet').after('<div class="login-portlet">\
						<div id="login-customer">\
		<div class="login-AWA">\
		<h2 style="margin-left: 6px; margin-bottom: 25px;">Login to your account</h2>\
				<p style="margin-left: 137px;">Welcome back.</p>\
				<p style="margin-left: 130px;">* = required fields</p></div>\
				<br>\
		<form id="loginForm" name="loginForm" method="post" action="/public/QLOnline/secure/checkoutRegistration?portal:componentId=1815133327&amp;portal:type=action&amp;portal:isSecure=true&amp;org.apache.myfaces.portlet.MyFacesGenericPortlet.VIEW_ID=%2Fcheckout%2FcheckoutRegistration.jsp" enctype="application/x-www-form-urlencoded" target="">\
		 <ul>\
			<li>\
			<label style="font-size: 11px;"> Your email address  *</label><input id="loginForm:username" name="loginForm:username" type="text" value="" tabindex="26"> <br>  </li>  <li> <label style="font-size: 11px;"> Password *</label><input type="password" id="loginForm:password" name="loginForm:password" tabindex="27"><br>\
		 </li>\
		 </ul>\
			<div class="actions_login">\
				<div>\
				<label> </label>\
			<input id="login_submit" name="login_submit" type="submit" value="login" onclick="if(typeof window.clearFormHiddenParams_loginForm!="undefined"){clearFormHiddenParams_loginForm("loginForm");}" style="background-image: url(/medias/sys_tandm/8796108095518.gif);" class="button dynamicButton submitButton floatRight" tabindex="28">\
		</div>\
			<input type="hidden" name="loginForm_SUBMIT" value="1"><input type="hidden" name="loginForm:_idcl" value=""><input type="hidden" name="loginForm:_link_hidden_" value=""><input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAN0AAE3cHQAIi9jaGVja291dC9jaGVja291dFJlZ2lzdHJhdGlvbi5qc3A=">\
			<form id="forgottenPasswordForm" name="forgottenPasswordForm" method="post" action="/public/QLOnline/secure/checkoutRegistration?portal:componentId=1815133327&amp;portal:type=action&amp;portal:isSecure=true&amp;org.apache.myfaces.portlet.MyFacesGenericPortlet.VIEW_ID=%2Fcheckout%2FcheckoutRegistration.jsp" enctype="application/x-www-form-urlencoded" target="">\
			<div class="text clearFloat"> <label> </label>Forgot Your Password? <a href="#" onclick="return oamSubmitForm("forgottenPasswordForm","forgottenPasswordForm:checkoutForgottenPassword");" id="forgottenPasswordForm:checkoutForgottenPassword" tabindex="29" class="quickLinks">Click here</a></div><input type="hidden" name="forgottenPasswordForm_SUBMIT" value="1"><input type="hidden" name="forgottenPasswordForm:_idcl" value=""><input type="hidden" name="forgottenPasswordForm:_link_hidden_" value=""><input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAN0AAE3cHQAIi9jaGVja291dC9jaGVja291dFJlZ2lzdHJhdGlvbi5qc3A="></form> </div></form>\
		<br>\
		<div class="login-helpsection">\
		<a id="helpLoggingIn" href="javascript:void(0)" onclick="$("#helpText").toggle();">Trouble logging in to your account? </a>\
		<div id="helpText" class="login-helptext">\
			<p>\
			</p><div>\
				<div>\
					<ul>\
						<li>Our Account Login function has only been available to visitors to this website since 20th September 2010.</li>\
						<li>If you have ordered with us online before this date you will need to create a new account.</li>\
						<li>If you have previously only ordered with us by post or telephone then you will need to create a new account.</li>\
						<li>If you receive our email newsletters you will still need to create an account if you have not created an account on our website before.</li>\
						<li>Please check that you have entered your email address and password correctly.</li>\
						<li>Your password is case sensitive so try entering it again with or without capitals.</li>\
						<li>If you are still not able to access your account please contact us at&nbsp;ccare@thompson-morgan.com</li>\
					</ul>\
				</div>\
			</div>\
			<p></p>\
		</div>\
		</div>\
		</div>\
		</div>\
		');





















						jQuery("#mainform > div.userDetails > div:nth-child(5),\
						#mainform > div.userDetails > div:nth-child(4),\
						#mainform > div.userDetails > div:nth-child(3),\
						#mainform > div.userDetails > div:nth-child(6),\
						#mainform > div.userDetails > div:nth-child(7),\
						#mainform > div.userDetails > div:nth-child(11),\
						#mainform > div.userDetails > div:nth-child(12),\
						#mainform > div.userDetails > div:nth-child(13),\
						#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2),\
						#mainform > div.userDetails > div:nth-child(14),\
						#mainform > div.userDetails > div:nth-child(15),\
						#mainform > div.userDetails > div:nth-child(16) > div.clearFloat,\
						#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3),\
						#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4),\
						#mainform > div.userDetails > div:nth-child(16) > div:nth-child(5),\
						.subscriptionTable,\
						#mainform > div.actions").hide();




						$('#mainform > div.userDetails > div:nth-child(2)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(3)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(2)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(3)").show();
						// });


						$('#mainform > div.userDetails > div:nth-child(3)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(4)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(3)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(4)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(4)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(5)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(4)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(5)").show();
						// });

						$('#mainform > div.userDetails > div:nth-child(5)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(6)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(5)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(6)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(6)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(7)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(6)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(7)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(7)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(11)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(7)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(11)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(11)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(12)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(11)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(12)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(12)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(13)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(12)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(13)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(13)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(14)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(13)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(14)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(14)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(15)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(14)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(15)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(15)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(15)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div.clearFloat,').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div.clearFloat').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(5)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(5)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').click(function(e) {
							 $("#mainform > div.actions").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').find('input').focus(function(e) {
						// 	 $("#mainform > div.actions").show();
						// });
						jQuery('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').click(function(e) {
							 jQuery("#mainform > table").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').find('input').focus(function(e) {
						// 	 $(".subscriptionTable").show();
						// });

						$('#mainform > div.userDetails > div.clearFloat').append('<p>Used for order confirmation</p>');
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').append("<p>Please provide phone numbers<br> where we can contact you<br> regarding your delivery</p>");
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').append("<p>Don't worry, we will not use your <br> number for marketing purposes</p>");
						$('#UIContainer-1822378714').hide();
						jQuery('#UIContainer-27850604').after('<div id="callandcopy">\
		<h3>Call us on 0844 573 1818</h3>\
<p>Copyright © Thompson &amp; Morgan, 2004-2016. All rights reserved.</p>\
	</div>\
	');

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
