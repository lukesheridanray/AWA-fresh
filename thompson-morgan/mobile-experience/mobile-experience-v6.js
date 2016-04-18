$.getJSON('https://raw.githubusercontent.com/doctafaustus/awa/master/imagedata.json', function(data){
	if(data) {
		imageData = data;




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
	exp.log('Mobile Experience v6');

	
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	exp.condition = $('#32485735');

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Mobile Product Page failed a condition');
	//     return false;
	// }

	// if ($('.no-background-image').text() != "Flowers" && $('.no-background-image').text() != "Vegetables" && $('.no-background-image').text() != "Fruit" && $('.no-background-image').text() != "Large plants" && $('.no-background-image').text() != "Garden Supplies"){
	// 	exp.log('Exp not running on Fruit, Large Plants, Vegetables, or Garden supplies, exiting');
	// 	return false;
	// }
	
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
		plantsDelivery: 	"<div id='AWA-new-delivery-tab'>\
								<p>\
									Your plants will be delivered at the time stated above, which is the perfect time for planting. As soon as they are despatched, we will send you an email to let you know.\
								</p>\
								<p>\
									Please note that each variety of plant is packed separately, so if you order several plant varieties or products, they could arrive on different days. However, you will only be charged once for delivery.\
								</p>\
								<table>\
									<tr>\
										<th colspan='3'>UK MAINLAND DELIVERY CHARGES<br>(except postcodes below)</th>\
									</tr>\
									<tr class='AWA-bold'>\
										<td class='AWA-first-col'>Product</td>\
										<td>Orders &pound;60 or more</td>\
										<td>Order under &pound;60 (regardless of quantity)</td>\
									</tr>\
									<tr>\
										<td class='AWA-first-col'>Seeds</td>\
										<td>FREE</td>\
										<td>&pound;1.95</td>\
									</tr>\
									<tr>\
										<td class='AWA-first-col'>All other products apart from seeds</td>\
										<td>FREE</td>\
										<td>&pound;4.95</td>\
									</tr>\
									<tr>\
										<td class='AWA-first-col'>Combined seeds and other products</td>\
										<td>FREE</td>\
										<td>&pound;6.90</td>\
									</tr>\
									<tr>\
										<th colspan='3'>UK DELIVERY CHARGES to postcodes <br> BT, GY, HS, IM, JE, ZE, TR21, TR22, TR23, TR24, TR25, KW, IV, PA20-38, PA41-49, PA60-78, AB31-38, AB40-56, PH4-44, PH49-50</th>\
									</tr>\
									<tr class='AWA-bold'>\
										<td class='AWA-first-col'>Product</td>\
										<td>Order &pound;60 or more</td>\
										<td>Orders under &pound;60</td>\
									</tr>\
									<tr>\
										<td class='AWA-first-col'>Seeds</td>\
										<td>Free</td>\
										<td>&pound;1.95</td>\
									</tr>\
									<tr>\
										<td class='AWA-first-col'>Potatoes, fruit, bulbs, fertiliser and selected plants, vegetables and garden supplies</td>\
										<td>&pound;9.99</td>\
										<td>&pound;9.99</td>\
									</tr>\
								</table>\
							</div>",
		seedsDelivery: 	"<div id='AWA-new-delivery-tab'>\
							<p>\
								Your seeds will be despatched at the time stated above. As soon as they are sent, we will send you an email to let you know.\
							</p>\
							<p>\
								If you are also ordering plants, please note that they are only despatched when they are ready for planting, so could arrive on different days. However, you will only be charged once for delivery.\
							</p>\
							<table>\
								<tr>\
									<th colspan='3'>UK MAINLAND DELIVERY CHARGES<br>(except postcodes below)</th>\
								</tr>\
								<tr class='AWA-bold'>\
									<td class='AWA-first-col'>Product</td>\
									<td>Orders &pound;60 or more</td>\
									<td>Order under &pound;60 (regardless of quantity)</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Seeds</td>\
									<td>FREE</td>\
									<td>&pound;1.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Plants or garden supplies</td>\
									<td>FREE</td>\
									<td>&pound;4.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Combined seeds and other products</td>\
									<td>FREE</td>\
									<td>&pound;6.90</td>\
								</tr>\
								<tr>\
									<th colspan='3'>UK DELIVERY CHARGES to postcodes <br> BT, GY, HS, IM, JE, ZE, TR21, TR22, TR23, TR24, TR25, KW, IV, PA20-38, PA41-49, PA60-78, AB31-38, AB40-56, PH4-44, PH49-50</th>\
								</tr>\
								<tr class='AWA-bold'>\
									<td class='AWA-first-col'>Product</td>\
									<td>Order &pound;60 or more</td>\
									<td>Orders under &pound;60</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Seeds</td>\
									<td>Free</td>\
									<td>&pound;1.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Potatoes, fruit, bulbs, fertiliser and selected plants, vegetables and garden supplies</td>\
									<td>&pound;9.99</td>\
									<td>&pound;9.99</td>\
								</tr>\
							</table>\
						</div>",
		suppliesDelivery: 	"<div id='AWA-new-delivery-tab'>\
							<p>\
								Your goods will be despatched at the time stated above. As soon as they are sent, we will send you an email to let you know.\
							</p>\
							<p>\
								If you are also ordering plants, please note that they are only despatched when they are ready for planting, so could arrive on different days. However, you will only be charged once for delivery.\
							</p>\
							<table>\
								<tr>\
									<th colspan='3'>UK MAINLAND DELIVERY CHARGES<br>(except postcodes below)</th>\
								</tr>\
								<tr class='AWA-bold'>\
									<td class='AWA-first-col'>Product</td>\
									<td>Orders &pound;60 or more</td>\
									<td>Order under &pound;60 (regardless of quantity)</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Garden Supplies</td>\
									<td>FREE</td>\
									<td>&pound;4.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Seeds</td>\
									<td>FREE</td>\
									<td>&pound;1.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Plants</td>\
									<td>FREE</td>\
									<td>&pound;4.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Combined seeds and other products</td>\
									<td>FREE</td>\
									<td>&pound;6.90</td>\
								</tr>\
								<tr>\
									<th colspan='3'>UK DELIVERY CHARGES to postcodes <br> BT, GY, HS, IM, JE, ZE, TR21, TR22, TR23, TR24, TR25, KW, IV, PA20-38, PA41-49, PA60-78, AB31-38, AB40-56, PH4-44, PH49-50</th>\
								</tr>\
								<tr class='AWA-bold'>\
									<td class='AWA-first-col'>Product</td>\
									<td>Order &pound;60 or more</td>\
									<td>Orders under &pound;60</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Seeds</td>\
									<td>Free</td>\
									<td>&pound;1.95</td>\
								</tr>\
								<tr>\
									<td class='AWA-first-col'>Potatoes, fruit, bulbs, fertiliser and selected plants, vegetables and garden supplies</td>\
									<td>&pound;9.99</td>\
									<td>&pound;9.99</td>\
								</tr>\
							</table>\
						</div>",
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
				<div style='clear: both'></div><div id='AWA-yellow-tt'>Navigate the site with this button</div></div>",
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
		emptyBasket: "<div id='AWA-empty'>Your basket <br>is empty</div>",
		homepage: 	"<div id='AWA-homepage'>\
						<div id='AWA-h-hero'><a href='http://www.thompson-morgan.com/christmas-gifts-sale'><img src='/static-images/tandm/homepage/banners/christmas-sale-hp.jpg'></a></div>\
						<ul id='AWA-homepage-menu'>\
							<a href='http://www.thompson-morgan.com/special-offers'><li class='AWA-heading'>Special Offers</li></a>\
							<a href='http://www.thompson-morgan.com/flowers'><li class='AWA-heading'>Flowers</li></a>\
							<a href='http://www.thompson-morgan.com/vegetables'><li class='AWA-heading'>Vegetables</li></a>\
							<a href='http://www.thompson-morgan.com/fruit'><li class='AWA-heading'>Fruit</li></a>\
							<a href='http://www.thompson-morgan.com/garden-supplies'><li class='AWA-heading'>Garden Supplies</li></a>\
							<a href='http://www.thompson-morgan.com/product-finder'><li class='AWA-heading'>Plant Finder</li></a>\
							<a href='http://www.thompson-morgan.com/gardening-information'><li class='AWA-heading'>Gardening Information</li></a>\
							<a href='http://www.thompson-morgan.com/gifts-for-christmas'><li class='AWA-heading'>Christmas Gifts</li></a>\
						</ul>\
					</div>"
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
		font-size: 166%;\
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
		margin-top: 7%;\
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
		font-size: 2em;\
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
		font-size: 1.6em;\
		line-height: 36px;\
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
		font-size: 36px;\
		line-height: 36px;\
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
		font-size: 1.7em;\
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
		font-size: 103%;\
	}\
	.AWA-tab-arrow {\
		width: 10px;\
		margin-left: 15px;\
	}\
	.AWA-description-blurb {\
	}\
	.AWA-mobile-box a {\
		text-decoration: underline;\
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


		// Flag new users and trigger yellow tool tip
		if (!localStorage.newUser) {
			$("#AWA-yellow-tt").show();
			setTimeout(function() {
				$("#AWA-yellow-tt").fadeOut();
			}, 5000);
			localStorage.newUser = "true";
		}



		/* --- HOME PAGE --- */
		if (window.location.pathname == "/")  {
			$("#UIPortalApplication").hide();
			$("#UIPortalApplication").before(exp.vars.homepage);

		}


		/* --- LISTING PAGE --- */
		if ($('#268917436').length) {
			this.listingCSS = '\
				#AWA-listing-page {\
					font-size: 170%;\
					padding-bottom: 35px;\
					line-height: 1.2em;\
					background-color: white;\
				}\
				.resultSet p {\
					font-size: 100%;\
					line-height: 1.2em;\
				}\
				.filterHeading ul {\
					background: none;\
				}\
				#facetedNav {\
					width: 100%;\
					margin-left: 25px;\
				}\
				#facetedNav a {\
					font-size: 115%;\
				}\
				.filterHeading ul li {\
					margin-bottom: 10px;\
				}\
				#AWA-l-top {\
					background-color: white;\
					padding: 25px;\
					border-bottom: solid 1px gray;\
					margin-bottom: 20px;\
				}\
				#AWA-l-num-products {\
					margin-top: 25px;\
					float: left;\
					font-size: 2em;\
				}\
				#AWA-refine {\
					font-size: 120%;\
					background-color: #00562C;\
					padding: 15px;\
					color: white !important;\
					float: right;\
				}\
				#results {\
					width: 100%;\
				}\
				#results .resultSet {\
					padding: 20px 40px;\
				}\
				.resultSet .floatLeft {\
					float: none !important;\
					text-align: center;\
				}\
				.resultSet .floatRight {\
					float: none;\
					width: 100%;\
					padding: 20px;\
				}\
				.AWA-l-stock {\
					border: solid 1px black;\
					margin-top: 20px;\
					text-align: center;\
					padding: 15px;\
					margin-bottom: 20px;\
				}\
				.AWA-l-title {\
					color: black;\
					font-size: 150%;\
					line-height: 1.1em;\
				}\
				.AWA-l-despatch {\
					margin-top: 15px;\
				}\
				.AWA-l-stock select {\
					width: 80%;\
					height: 70px;\
					font-size: 170%;\
				}\
				.stockInfo li.price {\
					margin-top: 10px;\
					font-size: 200%;\
				}\
				.productInfoLeft {\
					width: 33%;\
				}\
				.AWA-q-marker {\
					width: 33%;\
				}\
				.stockInfo li.quantity {\
					padding: 0;\
					margin-left: 25%;\
				}\
				.stockInfo li.quantity input[type=\'text\'] {\
					height: 50px;\
					width: 50px;\
					font-size: 150%;\
    			}\
    			.stockInfo li.basket {\
					padding: 0;\
					float: right;\
					width: 33%;\
    			}\
    			#addBasketSuccessDIV {\
    				left: 0 !important;\
    			}\
    			.pagination-links {\
    				float: none !important;\
    				width: 100%;\
    				text-align: center;\
    				margin-top: 20px;\
    			}\
    			.current {\
    				font-size: 1.5em;\
    			}\
    			.pagination-links a {\
    				font-size: 150%;\
    				padding: 1%;\
    			}\
    			.resultSet .floatLeft img {\
    				width: 500px;\
    				height: 500px;\
    			}';

			$('head').append('<style type="text/css">'+this.listingCSS+'</style>');

			$("#AWA-row4").after("<div id='AWA-listing-page'></div>");

			$("#AWA-listing-page").append("<div id='AWA-l-top'></div>");

			$("#facetResults").find("h1").attr('style', 'font-size: 170%;');
			$("#AWA-l-top").append($("#facetResults").find("h1"));
			var numProducts = $(".searchResults.floatLeft").text().match(/\d+/);
			$("#AWA-l-top").append("<div id='AWA-l-num-products'>" + numProducts + " Products</div>");
			$("#AWA-l-top").append("<a id='AWA-refine' href='#'>Refine Results</a><div style='clear:both;'></div>");
			$("#facetedNav").find('h4:contains("Refine Results")').hide();


			$("#AWA-listing-page").append($("#facetedNav"));

			// Hide filters at first
			$("#facetedNav").hide();
			$("#AWA-refine").click(function(e) {
				e.preventDefault();
				$("#facetedNav").toggle();
			});

			// Add products list
			$("#AWA-listing-page").append($("#results"));

			// Hide "More info" or "Quick View" link
			var linkToHide;
			if ($(".resultSet").find("a:contains('More info')").length) {
				linkToHide = $(".resultSet").find("a:contains('More info')");
			} else if ($(".resultSet").find("a:contains('Quick View')")) {
				linkToHide = $(".resultSet").find("a:contains('Quick View')");
			}
			linkToHide.hide();

			linkToHide.after("<div class='AWA-l-stock'></div>");
			$(".AWA-l-stock").after("<div id='AWA-price-info'></div>");

			$(".resultSet").each(function() {
				var element = $(this);
				var title = element.find(".stockInfo").first().find(".size").text();
				var despatch = element.find(".stockInfo").first().find(".despatch").text();
				$(".price").find('strike').remove()
				var price = element.find(".stockInfo").first().find(".price").text();

				var select = "<select>";
				element.find(".stockInfo").each(function() {
					select += "<option value='" + $(this).find(".size").text() + "'>" + $(this).find(".size").text() + "</option>";
				});
				select += "</select>";
				element.find(".AWA-l-stock").append(select);

				element.find('.AWA-l-stock').append("<div class='AWA-l-title'>" + title + "</div>" );
				element.find('.AWA-l-stock').append("<div class='AWA-l-despatch'>" + despatch + "</div>" );
			});


			// Dropdown handler
			$(".AWA-l-stock select").change(function() {
				var selectedSKU = $(this).val();

				$(this).parent().parent().find(".stockInfo").hide();
				$(this).parent().parent().find(".stockInfo:contains('" + selectedSKU + "')").show();

				var despatchText = $(this).parent().parent().find(".stockInfo:contains('" + selectedSKU + "')").find('.despatch').text();
				$(this).find(".AWA-l-despatch").text(despatchText);
			});


			$("p:contains('Culinary note:')").hide();
			$(".size").hide();
			$(".despatch").hide();
			$(".promo ").hide();
			$(".stockInfo label").hide();

			// Move Add to basket button outside of quantity input li
			$(".basket").each(function() {
				$(this).closest("ul").parent().after($(this));
			});

			// Mark a class on the quantity li for styling
			$(".productInfoLeft").next().addClass("AWA-q-marker");
			$(".addToBasket").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 100%; height: 120px !important; font-size: 200%;');

			// Hide all SKUs at first
			//$(".stockInfo").hide();

			$(".resultSet").each(function() {
				var element = $(this);
				// If this listing has only one SKU then hide the select box
				if (element.find('.stockInfo').length == 1) {
					element.find('select').hide();
				} else { // Otherwise show only the first SKU
					element.find(".AWA-l-title").hide();
					element.find(".stockInfo").each(function(index) {
						if (index !== 0) {
							$(this).hide();
						}
					});
				}
			});

			

			// Add pagination
			$("#AWA-listing-page").append($(".pagination-links").first());

			// Hide the rest of the page
			$(".Default").hide();


			// Swap out images
			$(".resultSet .floatLeft a").each(function() {
				var url = $(this).attr('href');
				var n = url.lastIndexOf('/');
			  	var urlCode = url.substring(n + 1);
			  	$(this).find("img").attr('src', imageData[urlCode]);
			});
		} 




		/* -- MOBILE PRODUCT PAGE -- */

		if ($('#32485735').length) { // Ensures we're on a product page
			exp.log('Mobile Product Page running');
				// Run only on Flower, Vegetable, or Fruit categories
			if ($('.no-background-image').text() == "Flowers" || $('.no-background-image').text() == "Vegetables" || $('.no-background-image').text() == "Fruit" || $('.no-background-image').text() == "Large plants") {
				exp.log('Exp running on plant category');

				$('head').append('<style type="text/css">'+this.css2+'</style>');

				// Find category (Used for delivery tab)
				var cat = $('.no-background-image').next().text();

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

			    




			    var prodText = $('#AWA-desc-panel').text();

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

			    var mainImage = $('#productDetailsImage').find('img').last();
			    mainImage.attr('style', 'width: 100%;');
			    //$('#product-portlet').prepend(mainImage);
			    $('.AWA-subtitle').after(mainImage);
			    mainImage.wrap("<div style='text-align: center;'></div>");



			    // Remove large image if it exists
			    $('.t011').hide();
			    $('#product-media').hide();



			    addTabs();




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
				$('.AWA-grow').click(function(e) {
					e.preventDefault();
					if ($('.AWA-grow-main').is(":visible")) {
						$('.AWA-grow-main').hide();
						$('.AWA-grow-holder').show();
					} else {
						$('.AWA-grow-main').show();
						$('.AWA-grow-holder').hide();
					}

				});



				/* --- FINAL STUFF --- */
				// Remove the rest of the product page, excluding the footer
				$('.product-additional-info').remove();

				// Remove any additional junk text after main title
				$('.AWA-subtitle').next().nextUntil('#prodFeatures').remove();

				// Increase font size of main content
				$('#productCont').attr('style', 'font-size: 1.5em');
				$('#productCont h3').attr('style', 'font-size: 1.3em');
				$('.AWA-description a, .AWA-reviews a, .AWA-delivery a, .AWA-grow a').attr('style', 'font-size: 1em');

				dec18();

				// Select first SKU
				$(".AWA-radio").first().trigger('click');

			} else if (window.location.pathname.substring(0, 16) == "/garden-supplies") {
				exp.log('Exp running on garden supplies');
				$('head').append('<style type="text/css">'+this.css2+'</style>');

				var productDescription;
				if (!$('.prodDesc').text().length) { // If no product description
					productDescription = $('#productCont').find('p').first().nextUntil('#prodFeatures', 'p').text();
				} else {
					productDescription = $('.prodDesc').text();
				}
				if (productDescription.length < 1) {
					productDescription = $('#productCont').clone().children().remove().end().text();
				}
				if ($.trim(productDescription) == "Customer Rating") {
					productDescription = $('#productCont').find('p').first().nextUntil('#prodFeatures', 'p').text();
				}


				// Replace main product description with truncated one
				//$('#productCont').html(productDescription);

				// Remove country warning
			    $('#countryWarning').remove();

			    // Remove breadcrumb
			    $('.breadcrumb-portlet').remove();

			    // Remove image slider controls and thumbnails
			    $('.thumbs').remove();
			    $('.control').remove();

			    // Move product title to top
			    var title = $('.productClass').parent();
			    title.addClass("AWA-title");

			    // Move title to the very top
			    $('#productCont').before($('.AWA-title'));


			    // Move main image after the title
			    var mainImage = $('#productDetailsImage').find('img').last();
			    $('.AWA-title').after(mainImage)
			    mainImage.attr('style', 'width: 100%;');
			   	mainImage.wrap("<div id='#AWA-main-image' style='text-align: center;'></div>");

			    // Remove large image if it exists
			    $('.t011').hide();
			    $('#product-media').hide();

			    // Move stock info after 
			    $('.AWA-title').next().after($('.stockInfo'));



			    var supplies = true;


			    addTabs(supplies, productDescription);

			    $('.AWA-delivery .AWA-mobile-box .AWA-delivery-main').html(exp.vars.suppliesDelivery);

			    $('.AWA-description, .AWA-reviews, .AWA-delivery, .AWA-grow').attr('style', 'font-size: 250%;');
			    $('.AWA-description a, .AWA-reviews a, .AWA-delivery a, .AWA-grow a').attr('style', 'font-size: 100%;');

				// If there are no reviews, hide Reviews tab entirely - Need to run a second time
				if ($('.AWA-reviews h3').text() == "Reviews") {
					$('.AWA-reviews').hide();
				}

				// Hide remaining productCont
				$('#productCont').hide();

				dec18();

			}

			function dec18() {
				$("[class^='vm023']").hide();
				// Hide footer
				$("#UIContainer-498232521").hide();
				$("#QLCoreContainer").attr('style', 'background: white;');
			}

			function addTabs(supplies) {
					    /* --- BUYING OPTIONS --- */
			    // Move buying options underneath product features
			    if (!supplies) {
			   		$('#prodFeatures').after($('.stockInfo'));
			   	}

			    // Manipulate buying options
			    $('.quantity').hide();
			    $('.wishListLinkContainer').remove();
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

			    	// Find whatever product is select so the delivery options can be changed
			    	if (!supplies) {
				    	var productTitle = $(this).find('.size').text().toLowerCase();
				    	if (productTitle.indexOf("seed") == -1 ) {
				    		$('.AWA-delivery .AWA-mobile-box .AWA-delivery-main').html(exp.vars.plantsDelivery);
					    } else {
					    	$('.AWA-delivery .AWA-mobile-box .AWA-delivery-main').html(exp.vars.seedsDelivery);
					    }
					    $('.AWA-delivery-main').hide();	
			    	}
			    });

			    // Event handler for artificial basket button
			    $('#AWA-add-link').click(function(e) {
			    	e.preventDefault();
			    	productToAdd.submit(); // Submit the selected form
			    	//NOT WORKING
			    	setTimeout(function() {
			    		window.location = "http://www.thompson-morgan.com/basket";
			    	}, 600);
			    });


			    /* --- DESCRIPTION TAB --- */
			    // Add product description box
			    $('#AWA-add-link').after(exp.vars.desc);

			    // Place product description in Description tab
			    if (productDescription) {
			    	$('.AWA-description .AWA-mobile-box').html(productDescription);
			    } else {
			    	$('.AWA-description .AWA-mobile-box').html(prodText);
			    }
				

				// Remove everything left over between stock info and the main image
				$('.prodDesc').nextUntil('.stockInfo').andSelf().hide();



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
				var firstSentence = $.trim(newDescriptionText.substring(0, newDescriptionText.indexOf('.')));
				firstSentence += ".";
				var descriptionLink = "<p class='AWA-description-blurb'>" + firstSentence + " <a id='read-more-desc' href='#additional-links'>...Read more ></a></p>";
				$('.AWA-description .AWA-mobile-box').html(descriptionLink);

				$('.AWA-description-blurb').after("<div id='AWA-main-description'>" + $.trim(fullDescriptionText) + "</div>");
				// Hide main description initially
				$('#AWA-main-description').hide();

				$('.AWA-description').click(function(e) {
					e.preventDefault();
					if ($('#AWA-main-description').is(":visible")) {
						$('.AWA-description-blurb').show();
						$('#AWA-main-description').hide();
					} else {
						$('.AWA-description-blurb').hide();
						$('#AWA-main-description').show();
					}

					//$('.AWA-description .AWA-mobile-box').html("<p class='AWA-description-blurb'>" + $.trim(fullDescriptionText) + "</p>");
				});

				// $('.AWA-description').click(function(e) {
				// 	e.preventDefault();
				// 	if ($('.AWA-reviews .AWA-mobile-box .reviews').is(":visible")) {
				// 		$('#AWA-reviws-placeholder').show();
				// 		$('.AWA-reviews .AWA-mobile-box .reviews').hide();
				// 	} else {
				// 		$('#AWA-reviws-placeholder').hide();
				// 		$('.AWA-reviews .AWA-mobile-box .reviews').show();
				// 	}
				// });



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
				if (firstReviewSentence == ".") {
					firstReviewSentence = firstReview;
				}

				var reviewsLink = "<p class='AWA-review-blurb'>" + firstReviewSentence + " <a id='read-more-reviews' href='#'>...Read more ></a></p>";
				$('.AWA-reviews .AWA-mobile-box').prepend("<div id='AWA-reviws-placeholder'>" + reviewsLink + "</div>");

				$('.AWA-reviews').click(function(e) {
					e.preventDefault();
					if ($('.AWA-reviews .AWA-mobile-box .reviews').is(":visible")) {
						$('#AWA-reviws-placeholder').show();
						$('.AWA-reviews .AWA-mobile-box .reviews').hide();
					} else {
						$('#AWA-reviws-placeholder').hide();
						$('.AWA-reviews .AWA-mobile-box .reviews').show();
					}
				});

				// If there are no reviews, hide Reviews tab entirely
				if ($('.AWA-reviews h3').text() == "Reviews") {
					$('.AWA-reviews').hide();
				}

				// If there is only 1 review then display stars
				if ($('.AWA-reviews h3').text() == "1 Review") {
					var firstStarRating = $('.AWA-star').first().clone().attr('style', "margin-left: 10px; width: 124px;");
					$('.AWA-reviews h3').after(firstStarRating);
				}






			    /* --- DELIVERY TAB --- */
			    // Add delivery box
			    $('.AWA-reviews').after(exp.vars.delivery);

			    // Load in correct table based on category
			    if (!supplies) {
				    if (cat.indexOf("Seeds") == -1 ) {
				    	$('.AWA-delivery .AWA-mobile-box .AWA-delivery-main').html(exp.vars.plantsDelivery);
				    } else {
				    	$('.AWA-delivery .AWA-mobile-box .AWA-delivery-main').html(exp.vars.seedsDelivery);
				    }
			    }


				
			    var despatchText = $('.despatch:contains("By ")').first().text() || $('.despatch:contains("Within ")').first().text();
				$('.AWA-despatch').html(despatchText);
				$('.AWA-despatch').append(" <a id='read-more-delivery' href='#'>...Read more ></a>");

				// Initially hide main delivery information
				$('.AWA-delivery-main').hide();
				$('.AWA-delivery').click(function(e) {
					e.preventDefault();
					if ($('.AWA-delivery-main').is(":visible")) {
						$('#read-more-delivery').show();
						$('.AWA-delivery-main').hide();
					} else {
						$('#read-more-delivery').hide();
						$('.AWA-delivery-main').show();
					}

				});


				// Remove Despatch date from stockInfo
				$('.stockInfo .prodPageDes').remove();

				// Remove Strike - Too difficult to position
				$('.stockInfo strike').hide();

				// Hide subtitle
				$('.AWA-subtitle').hide();

				// Remove product icon (if it hasn't been removed already)
				$('.producticon').hide();
				$('.facetValueClass').hide();

				// Select first SKU
				$(".AWA-radio").first().trigger('click');
			}
		}



		/* --- BASKET PAGE --- */
		if ($(".heading-basket").length) {
			this.basketCSS = '\
    			#AWA-m-basket {\
    				background-color white;\
    				padding-bottom: 35px;\
    				padding: 20px;\
    				font-size: 150%;\
    			}\
    			#removeTable a {\
    				font-size: 280% !important;\
    			}\
    			#AWA-m-basket a {\
    				font-size: 150%;\
    				line-height: 100%;\
    			}\
				#removeTable {\
					width: 100%;\
				}\
				#AWA-sb-title {\
					margin-bottom: 15px;\
					font-size: 200%;\
				}\
				.basket-items .quantity {\
					width: 32%;\
					text-align: center;\
				}\
				.basket-items .total {\
					width: 32%;\
					text-align: right;\
					font-size: 300%;\
				}\
				.basket-items .AWA-m-d-td {\
					padding: 15px 0 30px !important;\
				}\
				.dropDownMenu {\
					height: 40px;\
					font-size: 100%;\
					margin-bottom: 5px;\
				}\
				.basketPromotions {\
					width: 100%;\
				}\
				.AWA-so-image-row {\
					text-align: center;\
				}\
				.AWA-so-details-row {\
					text-align: center;\
					font-size: 106.04%;\
					line-height: 150%;\
				}\
				.AWA-so-details-row p {\
					margin-bottom: 15px;\
				}\
				.basket-items .promotionPriceSection {\
					marign: 0;\
					width: 33%;\
				}\
				.basketPromotions {\
					background-color: rgba(237, 232, 226, 0);\
					margin-bottom: 50px;\
				}\
				.basketPromotions td {\
					border: none !important;\
				}\
				.promotionPriceSection .colorBlack {\
					text-align: left;\
				}\
				.basketPromotions .promotionButton {\
					width: 33%;\
					padding: 0 !important;\
					text-align: center;\
				}\
				.promotionButton .addToBasket {\
					float: right;\
				}\
				.promotionButton input[type=\'text\'] {\
					height: 40px;\
					font-size: 100%;\
					text-align: center;\
				}\
				.AWA-so-image-row td {\
					padding-top: 40px !important;\
				}\
				.basket-items tr {\
					border: none;\
				}\
				#codesAndVouchersCont {\
					margin-bottom: 20px;\
				}\
				.quantity .dropDownMenu {\
					height: 90px;\
					width: 60px;\
					font-size: 220%;\
				}\
				.quantity a {\
					font-size: 300% !important;\
				}\
				.pageTitleContent {\
					font-size: 200%;\
				}\
				.basket-items .promotionPriceSection {\
					font-size: 200%;\
				}\
				.promotionButton input[type=\'text\'] {\
					height: 90px;\
					width: 60px;\
					font-size: 200%;\
				}\
				input[type=submit].addToBasket {\
					background-color: #B60718 !important;\
					background-image: none !important;\
					text-indent: 0px !important;\
					color: white !important;\
					width: 75% !important;\
					height: 120px !important;\
					font-size: 200% !important;\
				}\
				.button.imageButton.dynamicButton.continueButton {\
					background-color: #B60718 !important;\
					background-image: none !important;\
					text-indent: 0px !important;\
					color: white !important;\
					width: 278px!important;\
					padding: 20px;\
					font-size: 120% !important;\
					margin-right: 9%;\
				}\
				#codesAndVouchersCont {\
					float: none;\
					clear: both;\
					width: 100% !important;\
					margin: 0;\
					padding: 20px;\
					margin-bottom: 15px;\
				}\
				#codesAndVouchersHints {\
					float: none;\
				}\
				#codesAndVouchersHints li:first-child {\
				    font-size: 192%;\
				    line-height: 110%;\
				    text-align: center;\
				}\
				#codesAndVouchersHints li {\
				    font-size: 70%;\
				    text-align: center;\
				    background: none;\
				}\
				#codesAndVouchersLinks li a {\
				    background-position: 0 20px;\
				    width: 20% !important;\
				    background: #00572D;\
				    background-image: none !important;\
				    margin: 0 auto;\
				    display: block;\
				    margin-bottom: 20px;\
				    color: white !important;\
				    padding: 30px;\
				    text-align: center;\
				}\
				#basket-total {\
					width: 80%;\
					float: right;\
					font-size: 150%;\
				}\
				#basket-total .totalPrice {\
					font-size: 100%;\
				}\
				#basket-total dl {\
					float: right;\
				}\
				.button.dynamicBigButton.checkoutButton.floatRight {\
					background-color: #B60718 !important;\
					background-image: none !important;\
					text-indent: 0px !important;\
					color: white !important;\
					width: 300px !important;\
					padding: 30px;\
					height: auto;\
					font-size: 200% !important;\
					text-align: center;\
					line-height: 0;\
				}\
				.ordercode, .voucher {\
					position: static;\
					left: 0;\
					top: 0;\
					width: 100%;\
					margin: 0;\
				}\
				.ordercode .popUpMiddle, .voucher .popUpMiddle {\
					background: none !important;\
				}\
				#ordercodeContent p, #vouchercodeContent p, #promovoucherContainer p {\
				    font-size: 100%;\
				    line-height: 100%;\
				}\
				#gift-code-form input, .voucherCode input {\
					width: 50%;\
					height: 50px;\
					font-size: 150%;\
				}\
				#gift-code-form input.button.useOrderCode {\
					background-image: none !important;\
					background-color: #B60718 !important;\
					text-indent: 0px !important;\
					color: white !important;\
					width: 300px !important;\
					padding: 30px;\
					height: auto;\
					font-size: 200% !important;\
					text-align: center;\
					line-height: 0;\
				}\
				.voucherhelp a {\
					font-size: 100% !important;\
					background-image: none !important;\
				}\
				.voucherImage {\
					float: right;\
				}\
				.voucherField {\
					width: 60%;\
				}\
				#promovoucherContainer {\
					font-size: 130%;\
				}\
				.voucherField {\
					font-size: 200%;\
				}\
				.voucherField p {\
					font-size: 250%;\
					line-height: 100%;\
				}\
				.button.btns_use {\
					background-image: none !important;\
					background-color: #B60718 !important;\
					text-indent: 0px !important;\
					color: white !important;\
					width: 118px !important;\
					padding: 30px;\
					height: auto;\
					font-size: 75% !important;\
					text-align: center;\
					line-height: 0;\
					display: block;\
					float: left;\
				}\
				#vouchercodeContent  .btns_use {\
					font-size: 100% !important;\
				}\
				.voucherField input[type="text"] {\
					float: left;\
				}\
				.voucherhelp {\
					clear: both;\
				}\
				.voucher h3 {\
					font-size: 85%;\
					margin: 10px 0;\
				}\
				';

			$('head').append('<style type="text/css">'+this.basketCSS+'</style>');

			$("#AWA-row4").after("<div id='AWA-m-basket'><h1 id='AWA-sb-title'>Secure Basket</h1></div>");

			$("#AWA-m-basket").append($(".basket-items"));


			$(".basket-items table").first().find("tr").first().hide();

			$(".dispatch").remove();
			$("td.price").remove();
			$(".promo").remove()
			$("#removeTable td.details").hide();
			$("#removeTable tr:gt(0)").each(function() {
				$(this).find("td").first().attr('style', 'width: 32%;');
				$(this).after("<tr class='AWA-m-d'></tr>");
			});

			$(".AWA-m-d").each(function() {
				$(this).append($(this).parent().find(".details").html());
				$(this).find('a').wrap("<td colspan='3' class='AWA-m-d-td'></td>");
			});

			$("a:contains('Remove')").attr('style', 'font-size: 75%;');

			// Special Offers
			$(".pageTitleContent:contains('offers')").text("You qualify for special offers:");

			$(".basketPromotions tr:not('.AWA-so-image-row')").each(function() {
				$(this).find(".promotionImage").find("a").wrap("<tr class='AWA-so-image-row'><td colspan='5'></td></tr>");

				$(this).find(".details").wrapInner("<tr class='AWA-so-details-row'><td colspan='5'></td></tr>");
			});

			$(".promotionImage").parent().each(function() {
				$(this).before($(this).find(".AWA-so-image-row"));
			});

			$(".basketPromotions .details").parent().each(function() {
				$(this).before($(this).find(".AWA-so-details-row"));
			});

			$(".basketPromotions .details").remove();
			$(".basketPromotions .promotionImage").remove();

			$(".basketPromotions .promotionPriceSection").attr('colspan', '2');
			$(".basketPromotions .promotionButton").attr('colspan', '2');

			$("label:contains(Quantity)").hide();

			// Hide Footer
			$("#UIPortalApplication").hide();


			// Increase image sizes
			$("#removeTable td a img").each(function() {
				var url = $(this).closest("a").attr('href');
				var n = url.lastIndexOf('/');
			  	var urlCode = url.substring(n + 1);
			  	$(this).attr('src', imageData[urlCode]).attr('style', 'height: 150px; width: 150px;');
			});
			$(".basketPromotions td a img").each(function() {
				var url = $(this).closest("a").attr('href');
				var n = url.lastIndexOf('/');
			  	var urlCode = url.substring(n + 1);
			  	$(this).attr('src', imageData[urlCode]).attr('style', 'height: 350px; width: 350px;');
			});

			// Insert text in continue span since we're not using a bg image
			$(".button.imageButton.dynamicButton.continueButton").html("Continue Shopping");

			// Make the voucher code div its own row
			$(".basketPromotions").after($("#codesAndVouchersCont"));

			// Insert Use order code text on button
			$("#showOrderCode").text("Use order code");
			$("#showVoucherCode").text("Use voucher");

			$(".button.dynamicBigButton.checkoutButton.floatRight").text("Checkout");

			// Move order code box to bottom of page, unfixed
			$("#codesAndVouchersCont").after($(".ordercode"));
			$(".ordercode .popUpTop").remove();
			
			$(".ordercode").after($(".voucher"));
			$(".voucher .popUpTop").remove();

			$(".button.btns_use").attr('value', 'Use');
			
			$(".voucherField .voucherhelp").first().attr('style', 'font-size: 80%')
		}

		/* --- LOGIN PAGE --- */
		if ($("h2:contains('Login to your account')").length) {
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
				}';

			$('head').append('<style type="text/css">'+this.loginCSS+'</style>');

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

			$(".subscriptionTable").hide();

			$("#mainform").before("<a href='#' id='AWA-m-guest-checkout' class='AWA-m-new-button'>Guest Checkout</a>");
			$(".userDetails").hide();
			$("#registration_submit").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; -webkit-appearance: none;').attr('value', 'Continue Checkout');
			$("#registration_submit").hide();
			$("#AWA-m-guest-checkout").click(function(e) {
				e.preventDefault();
				$(".userDetails").show();
				$(this).hide();
			});

			$("#reEnterEmail").closest("div").after("<a href='#' id='AWA-m-continue1' class='AWA-m-new-button'>Continue</a>");
			$("#AWA-m-continue1").click(function(e) {
				e.preventDefault();
				$(".AWA-m-new-hidden").show();
				$(this).hide();
				$("#registration_submit").show();
			});

			//$("#QASearch").hide();

			$("#postalCode").closest("div").addClass('AWA-m-new-hidden');
			$("#flatName").closest("div").addClass('AWA-m-new-hidden');
			$("#streetName").closest("div").addClass('AWA-m-new-hidden');
			$("#district").closest("div").addClass('AWA-m-new-hidden');
			$("#town").closest("div").addClass('AWA-m-new-hidden');
			$("#country").closest("div").addClass('AWA-m-new-hidden');
			$("#phone").closest("div").addClass('AWA-m-new-hidden');
			$("#cellphone").closest("div").addClass('AWA-m-new-hidden');


			$(".login-portlet").before("<div id='AWA-border'><h1>OR</h1></div>");

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


			// Hide footer
			$("#UIPortalApplication").hide();
		}


		/* --- PAYMENT PAGE --- */
		if ($("h1:contains('1. Billing address details')").length) {
			this.paymentCSS = '\
				.order-summary h5 {\
					font-size: 200%;\
					margin-top: 20px;\
				}\
				.order-summary {\
					float: none;\
					padding: 0;\
					margin: 0 auto;\
					background-color: none;\
				}\
				.checkout-portlet {\
					clear: both;\
					margin-top: 40px;\
				}\
				.basket-items, .order-summary {\
					width: 95%;\
					font-size: 140%;\
					line-height: 150%;\
				}\
				.cell, .order-summary .price {\
					width: 50% !important;\
				}\
				#basket-total-payment {\
					overflow: auto;\
					font-size: 200%;\
					line-height: 130%;\
				}\
				select {\
					height: 50px;\
					font-size: 100%;\
				}\
				.dynamicButton, .placeOrderButton {\
					background-image: none !important;\
					background-color: #B60718 !important;\
					text-indent: 0px !important;\
					color: white !important;\
					width: 218px !important;\
					padding: 30px;\
					height: auto;\
					font-size: 100% !important;\
					text-align: center;\
					line-height: 0;\
					display: block;\
				}\
				input[type=text], .product-additional-info input, .product-additional-info textarea, .tellafriend-portlet textarea {\
					width: 47%;\
					height: 30px;\
					font-size: 100%;\
				}\
				.checkout-info {\
					width: 100%;\
				}\
				.address2 {\
					float: right !important;\
				}';

			$('head').append('<style type="text/css">'+this.paymentCSS+'</style>');

			// Move order summary immediately after mobile menu
			$("#AWA-row4").after($(".order-summary"));

			// Move main checkout section after order summary
			$("#basket-total-payment").after($(".checkout-portlet"));

			// Change value/text of "Place your Order" button
			$(".placeOrderButton").attr('value', 'Place your Order');

			// Hide footer
			$("#UIPortalApplication").hide();

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


	}
});