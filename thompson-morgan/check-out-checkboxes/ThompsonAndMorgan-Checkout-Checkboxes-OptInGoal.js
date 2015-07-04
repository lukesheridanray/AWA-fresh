if ($("h1:contains('4. We would like to keep you up to date')").text() == "4. We would like to keep you up to date") {
	// Normal TM offers checkbox section
	var tmOffersTemp = $("label:contains('Please tick the box if you are happy to receive special email offers from us')");
	var tmOffers = $(tmOffersTemp).prev().prev();
	var tmOffersInput = $(tmOffersTemp).prev();

	// Normal partner offers checkbox section
	var partnerOffers = $("label:contains('You have arrived on our')").prev().prev();
	var partnerOffersInput = $("label:contains('You have arrived on our')").prev();

	// Redundant TM offers checkbox section
	var tmOffersTemp2 = $("span:contains('Please tick the box if you are you happy to receive special email offers from Thompson & Morgan')")[1];
	var tmOffers2 = $(tmOffersTemp2).prev().prev();
	var tmOffersInput2 = $(tmOffersTemp2).prev();

	window.universal_variable.events = window.universal_variable.events || [];
	$('#submitOrder').click(function(){
		if (tmOffersInput2.attr('checked') == true || tmOffersInput.attr('checked') == true) {
			window.universal_variable.events.push({"category":"conversion_goals","action":"checkout_opt_in_TM"});
		}
		if (partnerOffersInput.attr('checked') == false) {
			window.universal_variable.events.push({"category":"conversion_goals","action":"checkout_opt_in_Partner"});
		}
	});

}

