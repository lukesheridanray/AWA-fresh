/* --- NEW --- */
window.universal_variable.events=window.universal_variable.events||[];

// Clicks on "Don't have an offer?"
$("#AWA-special").find("a").live('click', function(e) {
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"no_offer"
		}
	);
});

// Clicks on "Show offer" (since hitting Enter in the field triggers a click event, we only need to track goals on the click event)
$("#AWA-show-offer").live('click', function(e) {
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"show_offer"
		}
	);
});



/* --- MOBILE --- */
window.universal_variable.events=window.universal_variable.events||[];

// USE INDIVIDUAL LINK CLICKS INSTEAD (BELOW) - THEY SHOULD ACCOUNT FOR BOTH VARIATION AND CONTROL
// Clicks on mobile special offer
// $(".AWA-mobile-offer").live('click', function(e) {
// 	window.universal_variable.events.push(
// 		{
// 			"category":"conversion_goals","action":"mobile_offer"
// 		}
// 	);
// });

// Clicks on regular special offer
$('a[href$="/christmas-gifts/chocolates-cakes-biscuits-christmas-gifts"]').click(trackClick);
$('a[href$="/flower-bulb-sale"]').click(trackClick);
$('a[href$="/instant-gardening-range"]').click(trackClick);
$('a[href$="/garden-ready-plants"]').click(trackClick);
$('a[href$="/christmas-gift-special-offers"]').click(trackClick);
$('a[href$="/autumn-planting-bulbs-inspiration"]').click(trackClick);
$('a[href$="/sale-plant-offers"]').click(trackClick);
$('a[href$="/pre-planted-pots-and-baskets-winter"]').click(trackClick);
$('a[href$="/value-seed-varieties"]').click(trackClick);
$('a[href$="/5for4-seed-offer"]').click(trackClick);
$('a[href$="/fruit/fruit-plants/raspberry-plants/raspberry-full-season-collection/cww3211TM"]').click(trackClick);
$('a[href$="/fruit/fruit-plants/blueberry-plants/blueberry-full-season-collection/cww3308TM"]').click(trackClick);
$('a[href$="/fruit/fruit-plants/strawberry-plants/strawberry-extend-the-season-collection/cww3188TM"]').click(trackClick);
$('a[href$="/vegetables/potatoes/second-early/potato-jazzy/t56501TM"]').click(trackClick);
$('a[href$="/vegetables/all-other-vegetables/onion-shallot-and-garlic-sets/onion-mixed-red-white-and-brown-autumn-planting/aww4059TM"]').click(trackClick);
$('a[href$="/chempak-fertiliser-offer"]').click(trackClick);
$('a[href$="/garden-supplies/fertilisers/chempak-incredibloom/t47963TM"]').click(trackClick);
$('a[href$="/garden-supplies/baskets-and-containers/easy-fill-basket/t47549TM"]').click(trackClick);

function trackClick(e) {
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"mobile_offer"
		}
	);
}