// If session storage does not already exist set it to an empty array
if (!localStorage.products) {
	var initialProductsArray = [];
	initialProductsArray = JSON.stringify(initialProductsArray);
	localStorage.products = initialProductsArray;
}

var productsArray = JSON.parse(localStorage.products);


$("#ctl00_MainContentArea_ctl00_ctrlBuyModuleSKUOKANew_PurchaseButton").click(function(e){
	// Get product ID
	var prodID = $('[itemprop="identifier"]').text();

	// If the White Glove Delivery icon exists then add the product to the JSON
	if ($('a[href="#heavy-item-info-modal"]').length) {
		if (productsArray.indexOf(prodID) === -1) {
			productsArray.push(prodID);
			localStorage.products = JSON.stringify(productsArray);
		}
	}

});



//**************** Need handler for single view/mobile buttons
$(".btnaddtobasket:not('.qty-btn-single-view')").click(function() {
	var url = "http://www.okadirect.com/" + $(this).closest(".row").prev().attr('onclick').substring(16).slice(0, -2);
	console.log(url);

	$.ajax({
	type: "GET",
	url: url,
	success: function(data) {
		var response = $(data);
		console.log(response.find('[itemprop="identifier"]').text());
		console.log(response.find('a[href="#heavy-item-info-modal"]'));

		}
	});
});