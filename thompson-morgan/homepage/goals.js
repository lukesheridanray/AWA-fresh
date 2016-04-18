window.universal_variable.events = window.universal_variable.events || [];


$("#AWA-plantfinder").live('click', function(e){ 
	window.universal_variable.events.push({"category":"conversion_goals","action":"find_your_plant"});
});
$(".carousel-portlet").live('click', function(e){ 
	window.universal_variable.events.push({"category":"conversion_goals","action":"category_carousel"});
});


$("#AWA-newsletter-button, a[href='https://www.thompson-morgan.com/mailinglist']").live('click', function(e){ 
	window.universal_variable.events.push({"category":"conversion_goals","action":"newsletter"});
});





