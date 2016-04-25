if (window.location.pathname == "/dispatcher") {
	if ($("h1:contains('1. Billing address details')").length) {
		window.universal_variable.events=window.universal_variable.events||[];
		window.universal_variable.events.push({"category":"conversion_goals","action":"reached_delivery&payment_page"});
	}
}