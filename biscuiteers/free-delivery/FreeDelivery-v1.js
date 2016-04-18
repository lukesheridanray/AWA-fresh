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
	exp.log('Free Delivery v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("body");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		freeUKDelivery: 	"<li id='AWA-free-UK-delivery'>\
								<img class='alignnone size-full wp-image-5646' alt='icon-delivery' width='85' height='92' src='/wp-content/uploads/2014/01/85x92xicon-delivery.png.pagespeed.ic.qhc08fV3Uy.png'>\
								<div class='AWA-delivery-ins'>on orders over &pound;50<br>Use code ICING in the basket.</div>\
								<div class='AWA-pink'>FREE UK DELIVERY</div>\
							</li>",
		mobileFreeUKDelivery: 	"<div id='AWA-mobile-free-UK-delivery'>\
									<div class='AWA-mobile-pink'>FREE UK DELIVERY</div>\
									<div class='AWA-mobile-delivery-ins'>on orders over &pound;50<br>Use code ICING in the basket.</div>\
								</div>",
		cartFreeUKDelivery: "<li id='AWA-free-UK-delivery' class='AWA-cart-free-UK-delivery'>\
								<img class='alignnone size-full wp-image-5646 AWA-mobile-bird-cart' alt='icon-delivery' width='85' height='92' src='/wp-content/uploads/2014/01/85x92xicon-delivery.png.pagespeed.ic.qhc08fV3Uy.png'>\
								<div class='AWA-delivery-ins'>on orders over &pound;50<br>Enter code ICING as a coupon code below.</div>\
								<div class='AWA-pink'>FREE UK DELIVERY</div>\
							</li>",
		cartBottomDelivery: "<tr id='AWA-bottom-delivery'>\
								<td><span id='AWA-cart-pink'>FREE UK DELIVERY</span><span id='AWA-on-orders'> on orders over &pound;50.</span></td>\
							</tr>\
							<tr>\
								<td id='AWA-enter'>Enter coupon code ICING over on the left</td>\
							</tr>"
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-search {\
		position: relative;\
		width: 213px;\
		margin-right: 5px;\
	}\
	.AWA-search .fa {\
	    position: absolute;\
	    top: 7px;\
	    right: 6px;\
	    color: #eb93b7;\
	}\
	.AWA-search input::-webkit-input-placeholder {\
	    color: #eb93b7;\
	    font-size: 13px;\
	    line-height: 16px\
	}\
	.AWA-search :-moz-placeholder {\
	    color: #eb93b7;\
	    font-size: 13px;\
	    line-height: 16px\
	}\
	.AWA-search ::-moz-placeholder {\
	    color: #eb93b7;\
	    font-size: 13px;\
	    line-height: 16px\
	}\
	.AWA-search :-ms-input-placeholder {\
	    color: #eb93b7;\
	    font-size: 13px;\
	    line-height: 16px\
	}\
	.no-auth.is-not-login, #cart-mini, .divider {\
		padding-top: 3px;\
	}\
	.site-header--features .bg-bird {\
		float: right;\
	}\
	#AWA-free-UK-delivery {\
		padding: 0;\
		width: 420px;\
	}\
	#AWA-free-UK-delivery img {\
		position: absolute;\
		top: 12px;\
	}\
	#AWA-free-UK-delivery img:hover {\
		opacity: 0.8\
	}\
	.AWA-delivery-ins {\
		float: right;\
		padding-left: 5px;\
		line-height: 20px;\
		font-size: .9em;\
	}\
	.AWA-pink {\
		color: #eb93b7;\
		font-size: 1.2em;\
		float: right;\
		margin-top: 8px;\
		margin-right: 10px;\
	}\
	#AWA-mobile-free-UK-delivery {\
		padding: 0 13px 5px 13px;\
		text-align: center;\
		background-image: url(//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/9515062e5e522875acc65b0e6966f422_bird-right.png), url(//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/a09518b32dd838d5dab4583e88a9e7ad_bird-left.png);\
		background-repeat: no-repeat no-repeat;\
		background-size: 52px 56px, 52px 56px;\
		background-position: 13px 0px, top right 13px;\
	}\
	.AWA-mobile-pink {\
		color: #eb93b7;\
		font-size: 1.2em;\
	}\
	@media screen and (max-width: 403px) {\
		#AWA-mobile-free-UK-delivery {\
			background-size: 38px 41px, 38px 41px;\
		}\
	}\
	@media screen and (min-width: 768px) {\
		#AWA-mobile-free-UK-delivery {\
			display: none;\
		}\
	}\
	#AWA-free-UK-delivery .AWA-mobile-bird-cart {\
		top: -6px;\
	}\
	.AWA-cart-free-UK-delivery {\
		width: 478px !important;\
	}\
	.AWA-cart-free-UK-delivery .AWA-pink {\
		margin-right: 5px;\
	}\
	#AWA-cart-pink {\
	    font-size: 1.4em;\
	    text-transform: uppercase;\
	    color: #eb93b7;\
	}\
	#AWA-enter {\
		text-transform: none !important;\
		padding-bottom: 11px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

	    /* --- HOMEPAGE --- */
	    if (window.location.pathname == "/") {
	    		// If user is not logged in
		    if (jQuery(".is-not-login").length) {
			    // Append style to head
			    $('head').append('<style type="text/css">'+this.css+'</style>');

			    // Move search next to Login and Basket links
			    var $search = $(".third");
			    var $loginBaset = $(".inline-list.nav-secondary");
			    $loginBaset.prepend($search);
			    $search.addClass("AWA-search");

			    // Hide "we deliver worldwide!" image
			    $(".bg-delivery").hide();
			    
			    // Insert FREE UK Delivery div
			    $(".bg-bird").before(exp.vars.freeUKDelivery);

			    // Add mobile FREE UK Delivery div
			    $(".home-box--thumbs").first().prepend(exp.vars.mobileFreeUKDelivery);
	    	} else {
	    		$('head').append('<style type="text/css">'+this.css+'</style>');
	    		var $search = $(".third");
	    		$('#cart-mini').parent().after($search);
	    		$search.addClass("AWA-search");
	    		$search.attr('style', 'position: absolute; top: 43px; right: 0;');


			    // Hide "we deliver worldwide!" image
			    $(".bg-delivery").hide();
			    
			    // Insert FREE UK Delivery div
			    $(".bg-bird").before(exp.vars.freeUKDelivery);

			    // Add mobile FREE UK Delivery div
			    $(".home-box--thumbs").first().prepend(exp.vars.mobileFreeUKDelivery);
	    	}
	    }

	    /* --- MOBILE --- */
	    if (window.location.pathname == "/shop/checkout/cart/") {
		    // Append style to head
		    $('head').append('<style type="text/css">'+this.css+'</style>');

		    // Move search next to Login and Basket links
		    var $search = $(".third");
		    var $loginBaset = $(".inline-list.nav-secondary");
		    $loginBaset.prepend($search);
		    $search.addClass("AWA-search");

		    // Hide "we deliver worldwide!" image
		    $(".bg-delivery").hide();

		    // Insert FREE UK Delivery div
		    $(".bg-bird").before(exp.vars.cartFreeUKDelivery);

		    // Change 'discount codes' to 'discount or free delivery codes'
		    $(".discount").find('h2').text("discount or free delivery codes");

		    $("#shopping-cart-totals-table tr").first().after(exp.vars.cartBottomDelivery);

		    // Add mobile FREE UK Delivery div
		    $("#main").prepend(exp.vars.mobileFreeUKDelivery);
		    // Change text on mobile FREE UK Delivery div
		    $(".AWA-mobile-delivery-ins").text("Enter ICING as a coupon code below.");
		    $(".AWA-mobile-delivery-ins").attr('style', 'font-size: .86em;');
		    $("#AWA-mobile-free-UK-delivery").attr('style', 'height: 56px;');
	    }

	   
	};

	// Run the experiment
	$(document).ready(function() {
		// var checkExist = setInterval(function() {
		// 	if ($('h3:contains("Best-Sellers")').length) {
				exp.init();
		// 		clearInterval(checkExist);
		// 	}
		// }, 100); 
	});


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
