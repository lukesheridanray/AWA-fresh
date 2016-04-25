var data = {
	storeId:10151,
	langId:-1,
	catalogId:10002,
	quantity:1,
	catEntryId:337772,
	orderId:".",
	calculationUsage:"-1,-2,-5,-6,-7",
	inventoryValidation:true,
	errorViewName:"AjaxActionErrorResponse",
	miniBasketTotal:true,
	//cmCategoryId:34062
}
$.ajax({
	type: "POST",
	url: "/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd",
	data: data,
	success: function(data) {
		window.location.href = $("#miniBasketHeader").find("a").attr('href');
	}
});




var y;
$.ajax({
	type: "GET",
	url: "http://www.dunelm.com/product/fogarty-pair-of-anti-allergy-pillows-1000038562?cmCategoryId=34062",
	success: function(data) {
		var response = $(data);
		console.log(response.find(".pdp-availability").data("sku"));
	// 	var pData = response.find('script:contains("productData")').html();
	// 	var x = pData.substring(28);
	// 	console.log(x);
	// 	str = x.replace(/;\s*$/, "");
	// 	y = JSON.parse(str);
	 }
});


$('.l-search-results__result').each(function() {
	$(this).append("<button class='AWA'>ADD TO CART</button");
});

$(".AWA").click(function(e) {
	e.preventDefault();
	var pID = ""
	var url = $(this).parent().find('a').first().attr('href');
	console.log(url)


	$.ajax({
		type: "GET",
		url: url,
		success: function(data) {
			var response = $(data);
			console.info(response.find(".pdp-availability").data("sku"));
			var sku = response.find(".pdp-availability").data("sku");
			var data = {
				storeId:10151,
				langId:-1,
				catalogId:10002,
				quantity:1,
				catEntryId:sku,
				orderId:".",
				calculationUsage:"-1,-2,-5,-6,-7",
				inventoryValidation:true,
				errorViewName:"AjaxActionErrorResponse",
				miniBasketTotal:true,
				//cmCategoryId:34062
			}


			$.ajax({
				type: "POST",
				url: "/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd",
				data: data,
				success: function(data) {
					window.location.href = $("#miniBasketHeader").find("a").attr('href');
				}
			});

		}
	});

});





// USE THIS
$('.l-search-results__result').each(function() {
	$(this).append("<button class='AWA'>ADD TO CART</button");
});

$(".AWA").click(function(e) {
	e.preventDefault();
	var pID = ""
	var url = $(this).parent().find('a').first().attr('href');
	console.log(url);

	// Set colorOptions initially to false
	var colorOptions = false;
	// If there are color options, then set the flag
	if ($(this).parent().find(".swatch-heading").length) {
		colorOptions = true;

		// Determine if a swatch has been selected already
		var swatch = $(this).parent().find(".swatch-container").find('input[type="radio"]:checked');

		// If no swatch has been selected then select the first one
		if (!swatch.length) {
			swatch = $(this).parent().find(".swatch-container").find('input[type="radio"]').first();
		}

		// Get part number
		var partNum = swatch.attr('partnumber');

	}

	$.ajax({
		type: "GET",
		url: url,
		success: function(data) {
			var response = $(data);
			var pData = response.find('script:contains("productData")').html();
			eval(pData); // This evaluates "var productData = ..." in the script so productData is now an accessible object
			console.info(productData);

			// If there are no color options then use the first sku
			var sku = false;
			if (!colorOptions) {
				sku = productData.skus[0].id;
			} else {
				var result = $.grep(productData.skus, function(e){ return e.partNumber == partNum; }); // Find the array position by the searching for the value of the partNumber
				console.log(result);
				sku = result[0].id;
			}

			var data = {
				storeId:10151,
				langId:-1,
				catalogId:10002,
				quantity:1,
				catEntryId:sku,
				orderId:".",
				calculationUsage:"-1,-2,-5,-6,-7",
				inventoryValidation:true,
				errorViewName:"AjaxActionErrorResponse",
				miniBasketTotal:true,
				//cmCategoryId:34062
			}


			$.ajax({
				type: "POST",
				url: "/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd",
				data: data,
				success: function(data) {
					window.location.href = $("#miniBasketHeader").find("a").attr('href');
				}
			});

		}
	});

});


// $.ajax({
// 	type: "GET",
// 	url: "http://www.dunelm.com/product/square-charger-plate-1000068485",
// 	success: function(data) {
// 		var response = $(data);
// 		var pData = response.find('script:contains("productData")').html();
// 		console.log(pData);
// 		eval(pData); // This evaluates "var productData = ..." in the script so productData is now an accessible object
// 		console.info(productData);
// 		var sku = productData
// 	 }
// });
