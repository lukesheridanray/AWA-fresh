/* --- OLD (working) --- */

window.universal_variable.events=window.universal_variable.events||[];

$('.navigation-portlet').click(function(e){
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"menu_clicked"
		}
	);
});



/* --- NEW --- */
window.universal_variable.events=window.universal_variable.events||[];

// Item Click
$(".AWA-rec-link, .AWA-image-element").live('click', function(e) {
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"element_clicked"
		}
	);
});

// Add to Basket
$(".AWA-rec .addToBasket").live('click', function(e) {
	window.universal_variable.events.push(
		{
			"category":"conversion_goals","action":"add_to_basket"
		}
	);
});






