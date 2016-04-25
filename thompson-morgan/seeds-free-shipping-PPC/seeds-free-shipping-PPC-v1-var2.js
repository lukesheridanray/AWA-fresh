//function() {
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
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
	exp.log('Seeds Free Shipping PPC - v1 - var2');



	// The Search page naturally does not expose cart information so we can't run this script there
	// if ($("#LIKEfacetResults").length) {
	//     exp.log('Checkout Signposting failed a condition');
	//     return;
	// }
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		banner: 	"<div id='AWA-seed-banner'>\
						<h1><span class='AWA-red'>FREE</span> Delivery</h1>\
						<p>when you spend £10 or more on seeds</p>\
					</div>",
		addedToCartDiv: 	"<div id='AWA-atc-div'>\
								<p>Spend only £<span id='AWA-seed-amount'></span> more on seeds to get</p>\
								<p id='AWA-fd'><span class='AWA-red'>FREE</span> Delivery</p>\
							</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#AWA-seed-banner {\
		text-align: center;\
		padding-top: 15px;\
	}\
	#AWA-seed-banner h1 {\
		font-size: 30px;\
	}\
	#AWA-seed-banner p {\
		margin-top: 12px;\
		font-size: 14px;\
		margin-bottom: 10px;\
	}\
	.AWA-red {\
		color: #B60718;\
	}\
	#AWA-atc-div {\
		margin-top: 20px;\
		margin-bottom: 20px;\
		background-color: rgba(128, 128, 128, 0.06);\
   		padding: 5px 0;\
	}\
	#AWA-fd {\
		font-size: 16px;\
		font-weight: bold;\
	}\
	';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Append stylesheet to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');


		// Calculate money needed to get free delivery
		if (universal_variable.basket) {
			var containsNonSeeds = false;
			var items = universal_variable.basket.line_items;
			for (var i = 0; i < items.length; i++) {
				exp.log(items[i].product.category);
				if (items[i].product.category.toLowerCase().indexOf("seeds") === -1 && items[i].product.category.toLowerCase().indexOf("cacti") === -1 && items[i].product.category.toLowerCase().indexOf("grasses") === -1)  {
					containsNonSeeds = true;
					exp.log("Basket contains non seeds items");
					//break;
				}
			}

			// Modify "Added to Cart" box if there are no non seed items
			if (!containsNonSeeds) {

				var basketValue = universal_variable.basket.subtotal;
				var amountToSpend = (10 - basketValue).toFixed(2);

				exp.log(amountToSpend);

				if (amountToSpend >= 0.01) {
					$(".continueButtonPopUp ").first().parent().before(exp.vars.addedToCartDiv);
					$("#AWA-seed-amount").text(amountToSpend);

					// Hide country warning
					$("#addBasketSuccessDIV").find(".popUpMiddle").find("strong:contains('Important Delivery Notice')").hide();
					$("#addBasketSuccessDIV").find(".popUpMiddle").find("strong:contains('Important Delivery Notice')").next("p").hide();
					$("#basketWarning").hide();
				}
			}

		}

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}