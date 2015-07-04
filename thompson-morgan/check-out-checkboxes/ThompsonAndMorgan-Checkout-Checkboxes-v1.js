function () {
	//
	// CGIT Optimizely Boilerplate - version 0.1.4
	//

	// JSHint flags
	// jshint multistr: true
	// jshint jquery: true
	// 
	'use strict';
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
		exp.log('Checkout Checkboxes - 1.0');

		/*
		// Condition
		// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
		exp.condition = $('.unique-selector');
		*/
		// Removing condition because IE logs that it failed a condition for unknown reasons
		//exp.condition = $('.PORTLET-FRAGMENT .checkbox');

		// Check for a condition and return false if it has not been met
		/*if(exp.condition && !exp.condition.length) {
		    exp.log('Experiment failed a condition');
		    return false;
		}*/
		// if (exp.condition && !exp.condition.length) {
		//     exp.log('Checkout Checkboxes failed a condition');
		//     return false;
		// }

		// Variables
		// Object containing variables, generally these would be strings or jQuery objects
		exp.vars = {
		};

		// Styles
		// String containing the CSS for the experiment
		exp.css = '\
		.loading {\
		    display: none; vertical-align: bottom; padding-bottom: 6px;\
		}';


		// Functions
		// Object containing functions, some helpful functions are included
		exp.func = {};

		// Init function
		// Called to run the actual experiment, DOM manipulation, event listeners, etc
		exp.init = function() {
		    // Append style to head
		    $('head').append('<style type="text/css">'+this.css+'</style>');

		    exp.log('Wants TM Offers: ' + sessionStorage.getItem('wantsTMOffers'));
		    exp.log('Wants Partner Offers: ' + sessionStorage.getItem('wantsPartnerOffers'));	

		    // Checkout Page & Create An Account Page (Step 1)
			if ($("h2:contains('Checkout without creating an account')").text() == 'Checkout without creating an account' || $("h2:contains('Create an account')").text() == 'Create an account') {
				$("p:contains('* = required fields')").remove();
				$("label:contains('Mobile number')").text('Mobile number (optional)');
				$("label:contains('Mobile number')").attr('style', 'margin-left: -41px; width: 155px;');
				var numberInput = $("label:contains('Mobile number')").next();
				numberInput.after('&nbsp;(only used for delivery queries)');


				var tmOffers = $('.checkbox')[0];
				$(tmOffers).attr('style', 'background-position: 0px 0px');
				var tmOffersInput = $(tmOffers).next();
				$(tmOffersInput).attr('checked', false);


				var partnerOffers = $('.checkbox')[1];
				$(partnerOffers).attr('style', 'background-position: 0px 0px');
				var partnerOffersInput = $(partnerOffers).next();
				$(partnerOffersInput).attr('checked', false);

				$('#registration_submit').click(function(e) {
					setCheckBoxValues(tmOffersInput, partnerOffersInput);
				});
			}

			// Checkout Page (Step 2)
			if ($("h1:contains('4. We would like to keep you up to date')").text() == "4. We would like to keep you up to date") {
				// Normal TM offers checkbox section
				var tmOffersTemp = $("label:contains('Please tick the box if you are happy to receive special email offers from us')");
				var tmOffers = $(tmOffersTemp).prev().prev();
				var tmOffersInput = $(tmOffersTemp).prev();

				// Normal partner offers checkbox section
				var partnerOffers = $("label:contains('You have arrived on our')").prev().prev();
				var partnerOffersInput = $("label:contains('You have arrived on our')").prev();

				// Redundant TM offers checkbox section
				var tmOffersTemp2 = $("span:contains('Please tick the box if you are you happy to receive special email offers from Thompson & Morgan')")[1];
				var tmOffers2 = $(tmOffersTemp2).prev().prev();
				var tmOffersInput2 = $(tmOffersTemp2).prev();


				// Uncheck TM offers as a default
				$(tmOffers).attr('style', 'background-position: 0px 0px');
				$(tmOffersInput).attr('checked', false);
				$(tmOffers2).attr('style', 'background-position: 0px 0px');
				$(tmOffersInput2).attr('checked', false);

				// Check NO partner offers by default
				$(partnerOffers).attr('style', 'background-position: 0px -57px');
				$(partnerOffersInput).attr('checked', 'checked');

				// Check an offer if it was checked previously and apply
				if (sessionStorage.getItem('wantsTMOffers') == 'true') {
					tick(tmOffers, tmOffersInput);
					tick(tmOffers2, tmOffersInput2); // Tick if this exists
				}
				if (sessionStorage.getItem('wantsPartnerOffers') == 'true') { // This should be unchecked because of the wording
					$(partnerOffers).attr('style', 'background-position: 0px 0px');
					$(partnerOffersInput).attr('checked', false);
				}
			}

			// Create An Account (Step 2)
			if ($("h2:contains('My Details and Preferences')").text() == "My Details and Preferences") {
				$("span:contains('Please tick the box if you are you happy to receive special email offers from Thompson & Morgan.')")
				
				var tmOffers = $("span:contains('Please tick the box if you are you happy to receive special email offers from Thompson & Morgan.')").prev().prev();
				var tmOffersInput = $("span:contains('Please tick the box if you are you happy to receive special email offers from Thompson & Morgan.')").prev();

				var partnerOffers = $("span:contains('Please tick the box if you are happy to receive mailings from other carefully selected organisations')").prev().prev();
				var partnerOffersInput = $("span:contains('Please tick the box if you are happy to receive mailings from other carefully selected organisations')").prev();

				// Uncheck offers as a default
				$(tmOffers).attr('style', 'background-position: 0px 0px');
				$(tmOffersInput).attr('checked', false);
				$(partnerOffers).attr('style', 'background-position: 0px 0px');
				$(partnerOffersInput).attr('checked', false);

				// Check an offer if it was checked previously and apply
				if (sessionStorage.getItem('wantsTMOffers') == 'true') {
					tick(tmOffers, tmOffersInput);
				}
				if (sessionStorage.getItem('wantsPartnerOffers') == 'true') {
					tick(partnerOffers, partnerOffersInput);
				}
			}

			// Check a checkbox
			function tick(box, boxInput) {
				$(box).attr('style', 'background-position: 0px -57px');
				$(boxInput).attr('checked', 'checked');
			}

			// Remember user choice of offers and put into session storage
			function setCheckBoxValues(boxInput1, boxInput2) {
				if ($(boxInput1).attr('checked')) {
					sessionStorage.setItem('wantsTMOffers', 'true');
				} else {
					sessionStorage.setItem('wantsTMOffers', 'false');
				}

				if ($(boxInput2).attr('checked')) {
					sessionStorage.setItem('wantsPartnerOffers', 'true');
				} else {
					sessionStorage.setItem('wantsPartnerOffers', 'false');
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
}