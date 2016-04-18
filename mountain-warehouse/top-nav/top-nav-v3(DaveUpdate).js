/* CUSTOM CODE */
//
// CGIT Optimizely Boilerplate - version 0.1.4
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
	exp.log('Top Nav - v2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#menuBanner"); // Very inclusive

	// Check for a condition and return false if it has not been met
	/*
	if (exp.condition && !exp.condition.length) {
		exp.log('Promo Banner failed a condition');
		return false;
	}
	*/

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		footwear: 	'<li class="level1 AWA-nav">\
						<a class="level1" id="AWA-footwear" href="#">Footwear</a>\
						<ul class="columns m_level2 col-12" style="display: none;">\
						    <li class="col col-links">\
						        <ul class="section m_level2">\
						            <li class="sect col-12 col-2-lg">\
						                <h3 class="level2"><a href="http://www.mountainwarehouse.com/mens/footwear/">Mens</a></h3>\
						                <ul class="links">\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/hiking-boots/mens-walking-boots/">Walking Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/ski/snow-boots/mens-snow-boots/">Snow Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/wellies-wellingtons/mens/">Wellies</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/mens/accessories/socks/">Socks</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-shoes/mens-hiking-shoes/">Walking Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/mens/footwear/casual-shoes/">Casual Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/sandals-flip-flops/mens/">Sandals & Flip Flops</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/aqua-shoes/mens/">Aqua Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/running-shoes/mens/">Running Shoes</a>\
						                    </li>\
						                </ul>\
						            </li>\
						            <li class="sect col-12 col-2-lg">\
						                <h3 class="level2"><a href="http://www.mountainwarehouse.com/womens/footwear/">Womens</a></h3>\
						                <ul class="links">\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/hiking-boots/womens-walking-boots/">Walking Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/ski/snow-boots/womens-snow-boots/">Snow Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/wellies-wellingtons/womens/">Wellies</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/womens/accessories/socks/">Socks</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-shoes/womens-hiking-shoes/">Walking Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/womens/footwear/casual-shoes/">Casual Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/sandals-flip-flops/womens/">Sandals & Flip Flops</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/aqua-shoes/womens/">Aqua Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/running-shoes/womens/">Running Shoes</a>\
						                    </li>\
						                </ul>\
						            </li>\
						            <li class="sect col-12 col-2-lg">\
						                <h3 class="level2"><a href="http://www.mountainwarehouse.com/kids/footwear/">Kids</a></h3>\
						                <ul class="links">\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/hiking-boots/kids-walking-boots/">Walking Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/ski/snow-boots/kids-snow-boots/">Snow Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/wellies-wellingtons/kids/">Wellies</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/kids/accessories/socks/">Socks</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-shoes/kids-hiking-shoes/">Walking Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/kids/footwear/casual-shoes/">Casual Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/sandals-flip-flops/kids/">Sandals & Flip Flops</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/aqua-shoes/kids/">Aqua Shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/running-shoes/kids/">Running Shoes</a>\
						                    </li>\
						                </ul>\
						            </li>\
						        </ul>\
						    </li>\
						</ul>\
					</li>',
		walking: 	'<li class="level1 AWA-nav">\
						<a class="level1" id="AWA-walking" href="http://www.mountainwarehouse.com/outdoor/">Walking</a>\
						<ul class="columns m_level2 col-12" style="display: none;">\
						    <li class="col col-links">\
						        <ul class="section m_level2">\
						            <li class="sect col-12 col-2-lg">\
						                <h3 class="level2"><a href="#">Clothing</a></h3>\
						                <ul class="links">\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/clothing/waterproof-jackets/">Waterproof Jackets</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/clothing/3-in-1-jackets/">3 in 1 jackets</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/clothing/softshell-jackets/">Softshell Jackets</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/clothing/waterproof-trousers/">Waterproof Trousers</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/clothing/trousers-shorts/">Walking Trousers</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-socks/">Walking Socks</a>\
						                    </li>\
						                </ul>\
						            </li>\
						            <li class="sect col-12 col-2-lg">\
						                <h3 class="level2"><a href="#">Footwear</a></h3>\
						                <ul class="links">\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-boots/">Walking Boots</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-shoes/">Walking shoes</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/walking-socks/">Walking Socks</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/shoes-accessories/walking-gaiters/">Walking Gaitors</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/shoes-accessories/spare-laces/">Spare Laces</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/shoes-accessories/insoles/">Insoles</a>\
						                    </li>\
						                </ul>\
						            </li>\
						            <li class="sect col-12 col-2-lg">\
						                <h3 class="level2"><a href="#">Equipment</a></h3>\
						                <ul class="links">\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/equipment/walking-poles/">Walking Poles</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/footwear/shoes-accessories/waterproofer/">Waterproofer & Cleaner</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/equipment/compasses/">Compasses</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/equipment/carabiners/">Carabiners</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/camping/lighting/torches/">Torches</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/equipment/binoculars/">Binoculars</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/equipment/multi-tools/">Multi-tools</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/equipment/survival-safety/">Survival & safety</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/first-aid/">First Aid Kits</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/outdoor/outdoor-equipment/waterproof-pouches/">Waterproof Pouches</a>\
						                    </li>\
						                    <li class="m_level3">\
						                        <a class="level3" href="http://www.mountainwarehouse.com/running-cycling/running-accessories/hydration-packs/">Hydration Packs</a>\
						                    </li>\
						                </ul>\
						            </li>\
						        </ul>\
						    </li>\
						</ul>\
					</li>',
		rucksacks: 	'<li class="level1 AWA-nav">\
					    <a class="level1" id="AWA-rucksacks" href="http://www.mountainwarehouse.com/travel/backpacks/">Rucksacks</a>\
					    <ul class="columns m_level2 col-12" style="display: none;">\
					        <li class="col col-links">\
					            <ul class="section m_level2">\
					                <li class="sect col-12 col-2-lg">\
					                    <h3 class="level2"><a href="#">Rucksacks & Backpacks</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/backpacks/daypacks/">Daypacks</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/backpacks/medium-backpacks/">Medium Backpacks</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/backpacks/large-backpacks/">Large Backpacks</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/running-cycling/running-accessories/hydration-packs/">Hydration Packs</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/backpacks/laptop-backpacks/">Laptop Backpacks</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					                <li class="sect col-12 col-2-lg AWA-ruck">\
					                    <h3 class="level2"><a href="#">Luggage & Accessories</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/travel-bags/">Travel Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/duffle-bags/">Duffle Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/padlock-luggage-straps/">Padlocks & Luggage Straps</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/footwear/shoes-accessories/walking-gaiters/">Rucksack Liners</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/bag-covers/">Rucksack Covers</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					            </ul>\
					        </li>\
					    </ul>\
					</li>',
		sports: 	'<li class="level1 AWA-nav" id="AWA-sports-special">\
					    <a class="level1" id="AWA-sports" href="#">Sports</a>\
					 </li>',
		camping: 	'<li class="level1 AWA-nav">\
					    <a class="level1" id="AWA-camping" href="http://www.mountainwarehouse.com/camping/">Camping</a>\
					    <ul class="columns m_level2 col-12" style="display: none;">\
					        <li class="col col-links">\
					            <ul class="section m_level2">\
									<li class="sect col-12 col-2-lg">\
					                	<h3 class="level2"><a href="http://www.mountainwarehouse.com/camping/sleeping-bags/">Sleeping Bags</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/sleeping-bags/1-2-season-sleeping-bags/">1 & 2 Season Sleeping Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/sleeping-bags/2-3-season-sleeping-bags/">2 & 3 Season Sleeping Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/sleeping-bags/3-4-season-sleeping-bags/">3 & 4 Season Sleeping Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/sleeping-bags/kids-sleeping-bags/">Kids Sleeping Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/sleeping-bags/sleeping-bag-liners/">Sleeping Bag Liners</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					                <li class="sect col-12 col-2-lg">\
					                    <h3 class="level2"><a href="#">Beds</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/camping-furniture/sleeping-mats/">Sleeping Mats</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/camping-furniture/air-beds/">Air Mats</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/sleeping-bags/pillows-blankets/">Camping Pillows & Blankets</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					                <li class="sect col-12 col-2-lg">\
					                    <h3 class="level2"><a href="http://www.mountainwarehouse.com/camping/lighting/">Camping Lights</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/lighting/head-torches/">Head Torches</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/lighting/torches/">Torches</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/lighting/camping-lanterns/">Camping Lanterns</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					                <li class="sect col-12 col-2-lg">\
					                    <h3 class="level2"><a href="http://www.mountainwarehouse.com/camping/eating-outdoors/">Eating Outdoors</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/eating-outdoors/camping-stoves/">Camping Stoves</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/eating-outdoors/pots-pans/">Camping Pots & Pans</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/eating-outdoors/utensils-crockery/">Utensils & Crockery</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/eating-outdoors/flasks/">Flasks</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/eating-outdoors/bottles/">Water Bottles</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/eating-outdoors/picnic-blankets/">Picnic Blankets</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/camping/caravanning/water-carriers/">Water Carriers</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					            </ul>\
					        </li>\
					    </ul>\
					</li>',
		travel: 	'<li class="level1 AWA-nav">\
					    <a class="level1" id="AWA-travel" href="http://www.mountainwarehouse.com/travel/">Travel & Holiday</a>\
					    <ul class="columns m_level2 col-12" style="display: none;">\
					        <li class="col col-links">\
					            <ul class="section m_level2">\
					                <li class="sect col-12 col-2-lg">\
					                    <h3 class="level2"><a href="http://www.mountainwarehouse.com/swimwear-beachwear/">Swimwear & Beachwear</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/board-shorts/">Board Shorts</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/rash-vests/">Rash Vests</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/wetsuits/">Wetsuits</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/aqua-shoes/">Aqua Shoes</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/swimsuits/">Swimsuits</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/beach-toys-games/">Beach Toys & Games</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/swimwear-beachwear/beach-tents/">Beach Tents</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					                <li class="sect col-12 col-2-lg AWA-travel">\
					                    <h3 class="level2"><a href="http://www.mountainwarehouse.com/travel/">Travel</a></h3>\
					                    <ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/travel-towels/">Travel Towels</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/wheeled-bags/">Travel Wheeled Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/clothing/anti-mosquito/">Mosquito Repellent Clothing</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/duffle-bags/">Duffle Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/travel-bags/">Travel Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/mosquito-nets/">Mosquito Nets & Insect Repellent</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/wash-gear/">Wash Gear</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/money-belts-document-wallets/">Money Belts & Document Wallets</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					                <li class="sect col-12 col-2-lg AWA-travel2">\
					                	<ul class="links">\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/padlock-luggage-straps/">Travel Padlocks & Luggage Straps</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/travel-essentials/">Travel Essentials</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/travel-pillows/">Travel Pillows</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/tablet-laptop-cases/">Tablet & Laptop Cases</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/foldable-bags/">Foldable Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/luggage-accessories/compression-bags/">Compression Bags</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/clothing/lightweight-waterproof/">Lightweight Waterproofs</a>\
					                        </li>\
					                        <li class="m_level3">\
					                            <a class="level3" href="http://www.mountainwarehouse.com/travel/accessories/insect-repellent/">Insect Repellent</a>\
					                        </li>\
					                    </ul>\
					                </li>\
					            </ul>\
					        </li>\
					    </ul>\
					</li>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-ruck, .AWA-travel {\
		padding-left: 27px !important;\
		width: 25%;\
	}\
	.AWA-travel2 {\
		width: 25%;\
		margin-top: 27px;\
	}\
	@media (min-width: 979px) {\
		.nav-bar>li>a {\
    		padding-left: .93em;\
    		padding-right: .93em;\
		}\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// This function waits till a condition returns true
	exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
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
	};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    /* --- FOOTWEAR --- */
	    // Insert Footwear category
	    $("a.level1[href='http://www.mountainwarehouse.com/kids/']").parent().after(exp.vars.footwear);

	    // Ensure Footwear isn't clickable
	    $("#AWA-footwear").click(function(e) {
	    	e.preventDefault();
	    });


	    /* --- SKI --- */
	    // Move Ski category after footwear
	    $("#AWA-footwear").parent().after($("a.level1[href='http://www.mountainwarehouse.com/ski/']").parent());


	    /* --- WALKING --- */
	   	// Insert Walking category after Ski
		$("a.level1[href='http://www.mountainwarehouse.com/ski/']").parent().after(exp.vars.walking);


	    /* --- Rucksacks --- */
	   	// Insert Rucksacks category after Walking
		$("a.level1[href='http://www.mountainwarehouse.com/outdoor/']").parent().after(exp.vars.rucksacks);


		/* --- Sports --- */
	   	// Insert Sports category after Rucksacks
		$("a#AWA-rucksacks").parent().after(exp.vars.sports);

		// Get By Activity menu and insert it into Sports category
		var $sportsMenu = $("a.level1:contains('By Activity')").next().clone();
		$("#AWA-sports").after($sportsMenu.get(0).outerHTML);

		// Remove Walking, Tavel, and Camping subcategories
		$("#AWA-sports-special").find("h3:contains('Walking')").closest("li").hide();
		$("#AWA-sports-special").find("h3:contains('Travel')").closest("li").hide();
		$("#AWA-sports-special").find("h3:contains('Camping')").closest("li").hide();

	    // Ensure Sports isn't clickable
	    $("#AWA-sports").click(function(e) {
	    	e.preventDefault();
	    });


		/* --- CAMPING --- */
	   	// Insert Camping category after Sports
		$("a#AWA-sports").parent().after(exp.vars.camping);


		/* --- TRAVEL & HOLIDAY --- */
	   	// Insert Travel & Holiday category after Camping
		$("a#AWA-camping").parent().after(exp.vars.travel);


		/* --- CLEARANCE --- */
		$("a.level1[href='http://www.mountainwarehouse.com/clearance/']").text($("a.level1[href='http://www.mountainwarehouse.com/clearance/']").text().toUpperCase());


	    // Hover-over for new links
	    $(".AWA-nav").mouseenter(function(e) {
	    	$(this).find(".columns").fadeIn(250);
	    }).mouseleave(function() {
	    	$(this).find(".columns").hide();
	    });

	};

	// Run the experiment
	$(document).ready(function() {
		exp.init();
	});


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//<li class="sect col-12 col-2-lg">\
//<h3 class="level2"><a href="http://www.mountainwarehouse.com/camping/tents/">Tents</a></h3>\
//<ul class="links">\
// <li class="m_level3">\
//  <a class="level3" href="http://www.mountainwarehouse.com/camping/tents/1-2-man-tents/">2 Man Tents</a>\
//  </li>\
// <li class="m_level3">\
//    <a class="level3" href="http://www.mountainwarehouse.com/camping/tents/3-4-man-tents/">3 & 4 Man Tents</a>\
//  </li>\
//  <li class="m_level3">\
//     <a class="level3" href="http://www.mountainwarehouse.com/camping/tents/family-tents/">Family Tents</a>\
//  </li>\
// <li class="m_level3">\
//     <a class="level3" href="http://www.mountainwarehouse.com/camping/tents/pop-up-tents/">Pop-up Tents</a>\
// </li>\
// <li class="m_level3">\
//     <a class="level3" href="http://www.mountainwarehouse.com/camping/tents/festival-tents/">Festival Tents</a>\
// </li>\
// <li class="m_level3">\
//     <a class="level3" href="http://www.mountainwarehouse.com/camping/tents/tent-pegs/">Tent Accessories</a>\
//  </li>\
//</ul>\
//</li>\
