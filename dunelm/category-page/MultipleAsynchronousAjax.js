function getProductCount(data) {
	bedroomProductCount.push($(data).find("#productCount").text());
	console.log(bedroomProductCount);
}


var bedroomProductCount = [];
$.when(
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/bedroom-furniture-collections", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/bedside-tables", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/chest-of-drawers", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/dressing-tables", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/wardrobes", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/beds-bedsteads-and-mattresses", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/childrens-furniture-collections", function(data) {
		getProductCount(data);
	}),
	$.get("http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/nursery-furniture-collections", function(data) {
		getProductCount(data);
	})
).then(function() {
	console.info(bedroomProductCount);
});















