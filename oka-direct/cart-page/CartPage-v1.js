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
	exp.log('Cart Page - var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		modal: 	"<div id='AWA-modal' class='modal-backdrop fade in'></div>",
		popup: 	"<div id='AWA-popup' class='AWA-new-popup'>\
					<button type='button' id='AWA-popup1-close' class='close pull-right' data-dismiss='modal'>×</button>\
					<h1>WHITE GLOVE DELIVERY & FREE RETURNS</h1>\
					<ol>\
						<li>Our specialist 2-man delivery service is carried out by courteous professionals with the experience and equipment to handle valuable and important items.</li>\
						<li>On arrival they carefully unpack your furniture and place it wherever you wish, ready to use. There's no mess and the team takes away all the packaging materials.</li>\
						<li>If you find the item is not to your liking, for any reason, simply tell your White Glove team who will repack your item and return it for you, free of charge.</li>\
					</ol>\
				</div>",
		popupCC: 	"<div id='AWA-popupCC' class='AWA-new-popup'>\
						<button type='button' id='AWA-popup2-close' class='close pull-right' data-dismiss='modal'>×</button>\
						<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/923a0758844e935d3ecb5e4a697b5c78_cc.jpg'>\
						<p id='AWA-cc-p'><a target='_blank' href='http://www.okadirect.com/customer-service/click-and-collect/'>FIND YOUR LOCAL CLICK & COLLECT STORE ></a></p>\
					</div>"
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-modal {\
			position: fixed;\
		}\
		#AWA-popup, #AWA-popupCC {\
			position: fixed;\
			z-index: 2000;\
			background-color: white;\
			top: 15%;\
			border: 10px solid #12a6a4;\
			padding: 15px 20px;\
			left: 0;\
			right: 0;\
			margin-left: auto;\
			margin-right: auto;\
			width: 560px;\
		}\
		#AWA-popup h1 {\
			width: 80%;\
			text-align: center;\
			margin: 0 auto;\
			display: block;\
			margin-bottom: 25px;\
			margin-top: 10px;\
		}\
		#AWA-popup ol {\
			width: 82%;\
			margin: 0 auto;\
		}\
		#AWA-popup li {\
			margin-bottom: 17px;\
		}\
		#AWA-cc-p {\
		    text-align: center;\
		    margin-top: 20px;\
		}\
		#AWA-cc-p a {\
		    color: #747577;\
		}\
		#AWA-popupCC img {\
			margin: 0 auto;\
			display: block;\
		}\
		#AWA-wg-trigger-desktop, #AWA-wg-trigger-mobile, #AWA-cc-trigger-desktop, #AWA-cc-trigger-mobile {\
			font-weight: normal;\
			font-size: .9em;\
		}\
		#AWA-wg-trigger-desktop, #AWA-cc-trigger-desktop {\
			display: none;\
		}\
		.AWA-continue-style {\
			border: solid 1px #ccc !important;\
		}\
		@media all and (min-width: 767px) {\
			#AWA-wg-trigger-desktop, #AWA-cc-trigger-desktop {\
				display: block;\
			}\
			#AWA-wg-trigger-mobile, #AWA-cc-trigger-mobile {\
				display: none;\
			}\
			.AWA-continue-style {\
				padding: 5px 15px 5px 23px !important;\
				background-image: url("//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/ae7f9d6143d489e284871572c685250c_download_copy.png") !important;\
				background-position: 5px 7px !important;\
				border-right: solid 1px #ccc !important;\
			}\
			#ctl00_MainContentArea_CartViewModuleNew_ContinueButton:hover {\
				border-right: 1px solid #ccc !important;\
				background-image: url(//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/81d4e019b3e483712cae1dad823eaef4_download_copy_copy.png) !important;\
			}\
		}\
		@media all and (max-width: 767px) {\
			#AWA-popup, #AWA-popupCC {\
				width: 80%;\
				padding: 5px 10px;\
			}\
		}\
		@media all and (min-width: 1200px) {\
			.t-product img {\
				width: 75% !important;\
				max-width: 75%;\
			}\
		}';



	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// 1. Removing the cross promo (dynamically loaded)
		var waitFor = function(condition, callback, timeout, keepAlive) {
		    timeout = timeout || 20000;
		    keepAlive = keepAlive || false;
		    var intervalTime = 50,
		        maxAttempts = timeout / intervalTime,
		        attempts = 0,
		        interval = setInterval(function() {
		            if (condition()) {
		                if (!keepAlive) {
		                    clearInterval(interval);
		                }
		                callback();
		            } else if (attempts > maxAttempts) {
		                clearInterval(interval);
		            }
		            attempts ++;
		        }, intervalTime);
		};
		var callback = function() {
		    $("#cartpage-nosto-1").hide();
		};
		var condition = function() {
		    return $("#cartpage-nosto-1").length;
		};
		waitFor(condition, callback, 10000);

		// 2. Changing the wording from "Delivery charge" to "White glove delivery"  "Delivery: (free click and collect available) and providing a modal pop-up linked from "What’s this?" or "click and collect" to explain in more detail.
		function determineDeliveryType() {
			// Remove any existing modal links
			$("#AWA-wg-trigger-mobile, #AWA-wg-trigger-desktop, #AWA-cc-trigger-mobile, #AWA-cc-trigger-desktop").remove();

			var deliveryType = "cc";
			var deliveryCharge = parseFloat($(".t-delivery").find(".t-total").text().substring(1));
			// If delivery charge is equal to 30 pounds AND there is only one product in the cart then use the white glove delivery modal (as per Brendan via Skye call on 11/24/15)
			if (deliveryCharge === 30.00 && $("span:contains('Product ID')").length === 1) {
				deliveryType = "wg"
			}
			if (deliveryType === "wg") {
				$("span:contains('Delivery Charge')").text("White Glove Delivery:");
				$("span:contains('White Glove Delivery:')").first().after("<a href='#' id='AWA-wg-trigger-mobile'>What's this?</a>");
				$("span:contains('White Glove Delivery:')").last().after("<a href='#' id='AWA-wg-trigger-desktop'>What's this?</a>");
			} else {
				$("span:contains('Delivery Charge')").text("Delivery:").addClass("AWA-cc-target");
				$(".AWA-cc-target").first().after("<a href='#' id='AWA-cc-trigger-mobile'>(Free click and collect available)</a>");
				$(".AWA-cc-target").last().after("<a href='#' id='AWA-cc-trigger-desktop'>(Free click and collect available)</a>");
			}
		}
		determineDeliveryType();

		// 3. De-prioritising the continue shopping message 
		function formatContinue() {
			$("#ctl00_MainContentArea_CartViewModuleNew_ContinueButton").removeClass("pull-right").addClass("pull-left").addClass("infobtnprodlist").addClass('AWA-continue-style');
		}
		formatContinue();


		// 4. Increasing the product image size (in stylesheet)
	   
		// 5. Removing the catalogue number
		function hideProductID() {
			$("span:contains('Product ID:')").hide();
		}
		hideProductID();

		// 6. Changing the delivery wording "from up to" to "within"
		function changeDeliveryWording() {
			$("span:contains('Delivery: up to')").each(function() {
				var currentText = $(this).html();
				$(this).html(currentText.replace(/up to/, "within"));
			});
		}
		changeDeliveryWording();


		// 7. Removing the mini-cart (the costs don’t match up directly with the prices) 
		$("#ctl00_HeaderModuleNewArea_udpminiBasket").hide();

		// 8. Removing the single item pricing from under the product details and putting it under the subtotal (if there is more than one product)
		function removeSingleItemPricing() {
			if ($(".t-product").length > 2) {
				$("span:contains('Delivery:')").each(function() {
					var currentText = $(this).html();
					$(this).html(currentText.replace(/Price Each(.|\n)*/, ""));
				});
			}
		}
		removeSingleItemPricing();

		// 9. Making the wording more specific around white glove and click and collect.
		$("body").append(exp.vars.modal);
		$("body").append(exp.vars.popup);
		$("body").append(exp.vars.popupCC);
		$("#AWA-popup").hide();
		$("#AWA-popupCC").hide();
		$("#AWA-modal").hide();

		/* MODAL EVENT HANDLERS */
		// White glove delivery
		$(document).on('click', "#AWA-wg-trigger-desktop, #AWA-wg-trigger-mobile", function(e) {
			e.preventDefault();
			$("#AWA-popup").show();
			$("#AWA-modal").show();
		});
		$("#AWA-popup1-close").click(function() {
			$("#AWA-popup").hide();
			$("#AWA-modal").hide();
		});

		// Click and collect
		$(document).on('click', "#AWA-cc-trigger-desktop, #AWA-cc-trigger-mobile", function(e) {
			e.preventDefault();
			$("#AWA-popupCC").show();
			$("#AWA-modal").show();
		});
		$("#AWA-popup2-close").click(function() {
			$("#AWA-popupCC").hide();
			$("#AWA-modal").hide();
		});

		// Click offscreen close
		$(document).mouseup(function (e) {
    		var container = $(".AWA-new-popup");
    		if (!container.is(e.target) // if the target of the click isn't the container...
        		&& container.has(e.target).length === 0) // ... nor a descendant of the container
    		{
				$(".AWA-new-popup").hide();
				$("#AWA-modal").hide();
    		}
		});


		// Rerun functions when an item is removed
		var flag = false;
		$(document).on('click', "[id$='RemoveItem']", function() {
			flag = true;
		});
		$("#ctl00_MainContentArea_CartViewModuleNew_updPanelBasket").bind("DOMSubtreeModified", function() {
			if (flag) {
				setTimeout(function() {
					exp.log("Rechecking delivery amount...");
					determineDeliveryType();
					hideProductID();
					changeDeliveryWording();
					removeSingleItemPricing();
					formatContinue();
				}, 150);
			}
			flag = false;
		});

	};


	// Run the experiment
	$(document).ready(function() {
		exp.init();
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
