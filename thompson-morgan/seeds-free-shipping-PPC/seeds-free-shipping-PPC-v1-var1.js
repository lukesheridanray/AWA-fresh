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
	exp.log('Seeds Free Shipping PPC - v1 - var1');



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


		// Hide country warning
		$("#countryWarning").hide();

		// Add Seed Banner
		if ($("#1831072192").length) {
			$("#1831072192").first().prepend(exp.vars.banner); // PLP
		} else if ($("#913735574").length) {
			$("#913735574").first().prepend(exp.vars.banner); // PDP
		} else if ($("#714551549").length) {
			$("#714551549").first().prepend(exp.vars.banner); // Category Page
		} else if ($("#138616415").length) { // Landing Page
			$("#138616415").first().prepend(exp.vars.banner);
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

