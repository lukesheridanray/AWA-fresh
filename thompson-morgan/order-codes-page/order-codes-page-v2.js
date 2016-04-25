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
	var exp = {
	};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Order Codes Page - v2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	// exp.condition = $("#268917436");

	// // Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('PLP Condensed failed a condition');
	// }
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		top: 	"<div id='AWA-oc-top'>\
					<h2>Your current order code</h2>\
					<p id='AWA-current-oc'></p>\
					<div id='AWA-ud'>\
						<a href='#' id='AWA-use-different'>use different order code</a>\
					</div>\
					<div id='AWA-new-oc-container'>\
						<input id='AWA-new-oc'><a href='#' id='AWA-new-oc-submit'>Submit</a>\
					</div>\
					<h2>unlocks the following special offers:</h2>\
					<p id='AWA-oc-error'>Your order code has not been recognised. Please try again or use a different code.</p>\
					<div id='AWA-load-temp'>\
						Loading: &nbsp;\
						<img src='https://github.com/doctafaustus/awa/blob/master/Loading.gif?raw=true'>\
					</div>\
					<div id='AWA-unlocked'></div>\
					<div id='AWA-vc-info'>\
						<h2>Do you have a voucher code?</h2>\
						<p class='AWA-vc-p'>\
							A promotional voucher code is a voucher code that you may have received with a catalogue or as part of your order confirmation email.\
						</p>\
						<p class='AWA-vc-p'>\
							Only one promotional voucher code can be redeemed per order. They cannot be used in conjunction with any other promotional offer.\
						</p>\
						<h1 id='AWA-vc-how'>How to redeem a voucher code</h1>\
						<p class='AWA-vc-step'>\
							1. Once you have completed your order, go to your shopping basket\
						</p>\
						<p class='AWA-vc-step'>\
							2. Click on the green \'Use voucher\' button\
						</p>\
						<div id='AWA-vc-image-container'>\
							<img id='AWA-vc-image' src='http://www.thompson-morgan.com/static-images/tandm/voucher-functionality/use-order-code-button-example.jpg'>\
						</div>\
					</div>\
				</div>",
		noBasket: 	"<div id='AWA-no-basket'>\
						<h1>Please add an item to your basket to see your available offers</h1>\
					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#UIContainer-579247791 {\
			width: 100%;\
		}\
		#AWA-no-basket {\
			margin: 50px 0;\
			text-align: center;\
		}\
		#AWA-oc-top {\
			width: 100%;\
		}\
		#AWA-oc-top h2 {\
			text-align: center;\
			color: black !important;\
		}\
		#AWA-current-oc {\
			color: #B60718 !important;\
			text-align: center;\
			margin-top: 30px;\
			font-weight: bold;\
			font-size: 18px;\
		}\
		#AWA-ud {\
			text-align: center;\
			margin-top: 15px;\
			margin-bottom: 30px;\
		}\
		#AWA-use-different {\
			text-decoration: underline;\
		}\
		#AWA-use-different:hover {\
			text-decoration: none;\
		}\
		#AWA-new-oc-container {\
			display: none;\
			text-align: center;\
			margin-bottom: 30px;\
		}\
		#AWA-new-oc-submit {\
		    background-color: #B60718;\
		    color: white !important;\
		    padding: 3px 8px;\
		    font-weight: bold;\
		    margin-left: 5px;\
		}\
		#AWA-load-temp {\
			text-align: center;\
			margin-top: 20px;\
			margin-bottom: 50px;\
		}\
		#AWA-unlocked {\
			margin-top: 50px;\
		}\
		#AWA-offers {\
			margin-top: 30px;\
			overflow: auto;\
			margin-bottom: 50px;\
		}\
		.AWA-offer {\
			float: left;\
			float: left;\
		    width: 21.2%;\
		    margin: 0 6px 40px 6px;\
		    padding: 0 10px;\
		}\
		.AWA-offer-inner {\
			height: 250px;\
			margin-bottom: 15px;\
		}\
		.AWA-oc-image {\
			text-align: center;\
			margin-bottom: 10px;\
		}\
		.AWA-oc-promotion-message, .AWA-oc-worth {\
			margin-bottom: 12px;\
		}\
		#AWA-offers input[type=\"text\"] {\
			display: none;\
		}\
		.AWA-oc-description {\
			font-weight: bold;\
		}\
		#AWA-offers .addToBasket {\
			margin: 0 auto !important;\
		}\
		#AWA-vc-info {\
			clear: both;\
			width: 475px;\
			margin: 0 auto;\
			margin-bottom: 50px;\
		}\
		#AWA-vc-info h2 {\
			margin-bottom: 30px;\
		}\
		#AWA-vc-info h1 {\
			color: black !important;\
			margin-bottom: 20px;\
			margin-top: 40px;\
		}\
		.AWA-vc-p {\
			margin-bottom: 15px;\
		}\
		.AWA-vc-step {\
			margin-bottom: 8px;\
		}\
		#AWA-vc-image-container {\
			text-align: center;\
		}\
		#AWA-oc-error {\
			display: none;\
			text-align: center;\
			margin-top: 20px;\
			font-size: 16px;\
			color: #B60718 !important;\
		}\
	';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		var cartEmpty = false;

		// Make sure the changes aren't already there first (needed for search pages)
		if ($("#nav-6:contains('Order Codes')").length) {
			return;
		}

		// Replace the current "Gardening Information" tab on the main menu with "Order Codes & Vouchers"
		$("#nav-6").text("Order Codes & Vouchers");
		// Remove current dropdown for "Gardening Information"
		$("#sub7").remove();
		$("#nav-6").parent().parent().find(".sub").remove()


		/* IMPORTANT -- CHANGE THIS */
		// Ensure we're on the correct page to execute main order code code
		if (window.location.pathname != "/gardening-information") {
			return;
		}

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// If customer has nothing in their basket then show placeholder text
		if (!universal_variable.basket) {
			cartEmpty = true;
		}
		$("#1732679178").html(exp.vars.top);

		function getCookie(name) {
		    var value = "; " + document.cookie;
		    var parts = value.split("; " + name + "=");
		    if (parts.length == 2) return parts.pop().split(";").shift();
		}

		var currentOC = getCookie("PROMO_MEDIA_COOKIE").toLowerCase();
		if (!currentOC) {
			currentOC = "tmwebdf";
		}

		exp.log("Current Order Code: " + currentOC);

		// Show current order code
		$("#AWA-current-oc").text(currentOC);




		function populateOffers(data, dummy) {
			if (dummy) {
				var promotions = dummy;
			} else {
				var response = $(data);
				if (!response.find(".basketPromotions td").length) {
					return false;
				}
				var promotions = response.find(".basketPromotions");
			}

			// Populate current order code products
			$("#AWA-unlocked").html(promotions);

			// Hide loading gif
			$("#AWA-load-temp").hide();

			// Fix for invalid HTML returned by T&M
			$(".basketPromotions .addToBasket").each(function() {
			    var firstOfferForm = $(this).parent().prev().prev();
			    var quantityInput = $(this).parents('tr').find('input[name="quantity"]');
			    firstOfferForm.append(quantityInput);
			});

			// Transfer offers into column layout
			var offers = "<div id='AWA-offers'>";
			$(".basketPromotions tr").each(function() {
				var listItem = "<div class='AWA-offer'><div class='AWA-offer-inner'>";

				listItem += "<div class='AWA-oc-image'>" + $(this).find(".promotionImage").html() + "</div>";
				if ($(this).find(".promotionMessage").length) {
					listItem += "<div class='AWA-oc-promotion-message'>" + $(this).find(".promotionMessage").html() + "</div>";
				} else {
					listItem += "<div class='AWA-oc-promotion-message'></div>";
				}
				listItem += "<div class='AWA-oc-worth'>" + $(this).find(".promotionPriceSection").html() + "</div>";
				listItem += "<div class='AWA-oc-description'>" + $(this).find("p:not('.promotionMessage')").html() + "</div>";
				listItem += "<div class='AWA-oc-form'>" + $(this).find('form').wrap('<p/>').parent().html() + "</div>";
				listItem += "</div>";
				listItem += "<div class='AWA-oc-addToBasket'>" + $(this).find("input[type='submit']").parent().html() + "</div>";
				listItem += "</div>";

				offers += listItem;
			});

			offers += "</div>";
			$("#AWA-unlocked").html(offers);

			// Submit form on "Add to Basket" click
			$("#AWA-offers .addToBasket").click(function(e) {
				e.preventDefault();
				$(this).parent().prev().find('form').submit();
			});


			// Add middle borders
			$(".AWA-offer").attr('style', 'border-right: solid 1px #C1C1C1;');
			$(".AWA-offer").last().attr('style', 'border: 0');
			if ($(".AWA-offer").length === 1) {
				$(".AWA-offer").attr('style', 'border: 0');
			} else if ($(".AWA-offer").length >= 4) {
				$(".AWA-offer").eq(3).attr('style', 'border: 0');
			} else if ($(".AWA-offer").length >= 7) {
				$(".AWA-offer").eq(3).attr('style', 'border: 0')
				$(".AWA-offer").eq(7).attr('style', 'border: 0');
			}
		}

		if (cartEmpty) {
			var url = "https://spreadsheets.google.com/feeds/list/1pyfV-mNUEnaV-A2KjPx_HIih7CqmOE6OyBYPYbLv42A/od6/public/values?alt=json";

			var table = "<table class='basketPromotions'>";

			$.getJSON(url, function(data) {
				var holder = [];
				for (var i = 0; i < data.feed.entry.length; i++) {
					if (data.feed.entry[i].gsx$offercode.$t.toLowerCase() == currentOC) {
						table += data.feed.entry[i].gsx$offerhtml.$t;
						holder.push(data.feed.entry[i].gsx$offerhtml.$t);
					}
				}
				table += "</table>";


				$.ajax({
					type: "POST",
					url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
					data: {promotionCode: currentOC},
					success: function(data) {
						populateOffers(data, table);
						if (holder.length === 0) {
							exp.log("Not found");
							$("#AWA-oc-error").slideDown();
							$("#AWA-load-temp").hide();
						}
					}
				});

			});



		} else {
			$.ajax({
				type: "POST",
				url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
				data: {promotionCode: currentOC},
				success: function(data) {
					populateOffers(data);
				}
			});
		}

		// "use different order code" toggle
		$("#AWA-use-different").click(function(e) {
			e.preventDefault();
			$("#AWA-new-oc-container").slideToggle();
		});

		// Submit new order code
		$("#AWA-new-oc-submit").click(function(e) {
			e.preventDefault();
			var newOC = $("#AWA-new-oc").val();

			// Hide any preexisting error message
			$("#AWA-oc-error").slideUp();

			// Show loading gif
			$("#AWA-load-temp").show();

			// Hide current offers
			$("#AWA-unlocked").html("");


			if (cartEmpty) {
				var url = "https://spreadsheets.google.com/feeds/list/1pyfV-mNUEnaV-A2KjPx_HIih7CqmOE6OyBYPYbLv42A/od6/public/values?alt=json";

				var table = "<table class='basketPromotions'>";

				$.getJSON(url, function(data) {
					var holder = [];
					for (var i = 0; i < data.feed.entry.length; i++) {
						if (data.feed.entry[i].gsx$offercode.$t.toLowerCase() == newOC.toLowerCase()) {
							table += data.feed.entry[i].gsx$offerhtml.$t;
							holder.push(data.feed.entry[i].gsx$offerhtml.$t);
						}
					}
					table += "</table>";

					$.ajax({
						type: "POST",
						url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
						data: {promotionCode: newOC.toLowerCase()},
						success: function(data) {
							var offersAvailable = populateOffers(data, table);
							if (holder.length === 0) {
								exp.log("Not found");
								$("#AWA-oc-error").slideDown();
								$("#AWA-load-temp").hide();
							} else {
								$("#AWA-current-oc").text(newOC);
							}
						}
					});

				});

			} else {
				$.ajax({
					type: "POST",
					url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
					data: {promotionCode: newOC},
					success: function(data) {
						var offersAvailable = populateOffers(data);
						if (offersAvailable === false) {
							$("#AWA-oc-error").slideDown();
							$("#AWA-load-temp").hide();
						} else {
							$("#AWA-current-oc").text(newOC);
						}
					}
				});
			}

		});

		





	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

