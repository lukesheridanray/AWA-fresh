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

// Clicks on mobile special offer
$(".AWA-mobile-offer").live('click', function(e) {
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"mobile_offer"
		}
	);
});