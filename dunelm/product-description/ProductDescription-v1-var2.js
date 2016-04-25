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
	exp.log('Product Description - var2');

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
	exp.vars = {};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-rm2 {\
		text-decoration: none;\
		margin-bottom: 20px;\
		display: block;\
	}\
	.AWA-rm2:hover {\
		text-decoration: underline;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Wait for the site's main.min.js file to populate the page features
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
			// Only run on pages with one description block
			if ($("a[data-test='productPageDescriptionToggle']").length === 1) {
				activate();
			}

			function activate() {
				// Var 2: "Read more" link with product description, Features tab open by default
				var firstPar = $(".pdp-description").find('p').first().text().slice(0, -3);
				$(".pdp-description").find('p').first().html(firstPar + "<br><a class='AWA-rm' href='#'>Read more</a>");
				$('.AWA-rm').click(function(e) {
					e.preventDefault();
					$("a[data-test='productPageDescriptionToggle']").trigger("click");
				});
				$("a[data-test='productPageDescriptionToggle']").click(function() {
					var $description = $('[itemprop="description"]');
					if ($description.is(":visible")) {
						$(".AWA-rm").show();
					} else {
						$(".AWA-rm").hide();
					}
				});

				// Open features tab
				$("a[data-test='productPageFeaturesAndBenefitsToggle']").trigger("click");

				// - Can you show only the first two content items in the Features tab (Size & Colours), then have a "read more" link as with the Description tab?

				// Insert "Read more" link after second dd
				$("dl.pdp-features dd").eq(1).after("<a class='AWA-rm2' href='#'>Read more</a>");

				function formatFeatures() {
					// Hide everything after Read more link
					$(".AWA-rm2").nextAll().addClass('AWA-hide-feature').hide();
					$(".AWA-hide-feature").hide();
				}
				formatFeatures();

				$('.AWA-rm2').click(function(e) {
					e.preventDefault();
					$(".AWA-hide-feature").slideDown();
					$(".AWA-rm2").hide();
				});
				$("a[data-test='productPageFeaturesAndBenefitsToggle']").click(function() {
					if ($(".AWA-hide-feature").is(":visible")) {
						$(".AWA-rm2").hide();
					} else {
						$(".AWA-rm2").show();
						formatFeatures();
					}
				});

			}
		};
		var condition = function() {
		    return $('.accordion-content.is-truncated').length;
		};
		waitFor(condition, callback, 10000);


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
