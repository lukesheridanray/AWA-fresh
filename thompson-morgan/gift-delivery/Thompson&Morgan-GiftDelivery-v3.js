function() {
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
	exp.log('Gift Delivery v3');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $('#gifting-list');

	// Check for a condition and return false if it has not been met
	if (!$('#gifting-list').length && !$('.giftSku').length) {
	    exp.log('Gift Delivery failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		universalMesage: "<div class='AWA-universal-message'>\
							<img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/510a53ff11fef5aaca61794f1c7ddde7_97_97.png'>\
							<p>\
								The following items may be delivered separately as gifts\
								<br>\
								Please add a delivery address and personal message\
							<p>\
						</div><div style='clear: both'></div>",
		dummyAddAddress: 	"<a id='AWA-dummy-link' href='#'><div class='AWA-dummy'>\
								Add Address\
							</div></a>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-universal-message img {\
		width: 17px;\
		float: left;\
		margin-right: 7px;\
		margin-top: 6px;\
	}\
	.AWA-universal-message p {\
		float: left;\
		width: 500px;\
		font-weight: bold;\
		color: #00552B !important;\
		font-size: 14px;\
		padding: 5px;\
	}\
	.add-new-address {\
		margin-right: 64px;\
	}\
	.AWA-or {\
		text-align: center;\
		margin-top: 22px;\
		margin-bottom: 22px;\
		font-weight: bold;\
	}\
	.AWA-address-form {\
		display: none;\
		border: solid 1px black;\
		position: fixed;\
		width: 489px;\
		top: 25%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		background-color: white;\
		padding: 15px;\
	}\
	#new-customer h2 {\
		font-size: 18px;\
		width: 333px;\
		float: left;\
		margin-bottom: 15px;\
	}\
	#AWA-close {\
		float: right;\
	}\
	#AWA-close-link {\
		text-decoration: underline;\
	}\
	#AWA-close-link:hover {\
		text-decoration: none;\
	}\
	#createAddress {\
		background-color: #C51D1E !important;\
		border: 2px solid #FFFFFF !important;\
		color: #FFFFFF !important;\
		font-family: arial !important;\
		font-size: 14px !important;\
		font-weight: bold !important;\
		margin-left: 40px !important;\
		margin-top: 10px !important;\
		padding: 4px 6px !important;\
		text-align: center !important;\
		width: 120px !important;\
	}\
	#new-customer.new-customer-address {\
		margin-top: 0;\
	}\
	.AWA-dummy {\
		padding: 4px;\
		background-color: #C51D1E;\
		width: 79px;\
		color: white;\
		text-align: center;\
		font-weight: bold;\
		margin-top: 15px;\
		margin-left: 80px;\
	}\
	.AWA-preloaded-address {\
		top: 20% !important;\
		overflow-x: hidden;\
		height: 550px;\
		overflow-y: scroll;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		/* NOTE: Reworked experimend to only run in gift checkout flow */

	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    // Insert universal message
	    $('.gift-page-header').replaceWith(exp.vars.universalMesage);

	    // Modify row text based on the text in the delivery address column to determine if customer is in final step
	    $('#gifting-list li').each(function() {
		    if ($.trim($(this).find('.giftDelDateMsg').text()) != "Please select delivery date") {
		    	return;
		    } else {
			    // Modify "successfully added" message and ticks
			    $(this).find('.message-ok.ib.txtSml').attr('style', 'display: table-cell; vertical-align: middle; background: none');
			    $(this).find('.message-ok.ib.txtSml').html('<a class="AWA-fake-edit" href="/dispatcher?checkout=true">Add Address</a>');

			    // Modify "Please select delivery date" message
			    $(this).find('.giftDelDateMsg .txtSml').attr('style', 'display: table-cell; vertical-align: middle;');
			    $(this).find('.giftDelDateMsg .txtSml').html('<a class="AWA-fake-edit" href="/dispatcher?checkout=true">Select Date</a>');

			    // Modify "Please add your message" text
			    $(this).find('.giftMessLabelTxt .txtSml').attr('style', 'display: table-cell; vertical-align: middle;');
			    $(this).find('.giftMessLabelTxt .txtSml').html('<a class="AWA-fake-edit" href="/dispatcher?checkout=true">Add Message</a>');

			    // Make text changes link to edit step
			    var editButton = $(this).find('.update-gift-details.button');
			    $('.AWA-fake-edit').click(function(e){
			    	e.preventDefault();
			    	editButton.trigger('click');
			    });
		    }
	    });

	    // Replace "Add new recipient" button with "Add new address"
	    $('.add-new-address').val('Add new address');

	    // Insert "OR" div
	    $('.add-new-address').before("<div class='AWA-or'>OR</div>");

	    // Remove info button and tooltip in address section
	    $('.dateHint').first().remove();

	    // Remove "Create an account and we will store..."
	    //$('.gift-panel-margin-top').last().remove();

	    // Hide Save button until an address, delivery, and message are selected
	    $('.dateRadio').find('input').attr('checked');
	    var messagePresent = $('.no-personal-message').attr('checked') || $('.personal-message-line').val() != "";


	    // Show save button only when address, delivery date, and message are filled out
	    var save = $('.all-gift-data-process');
	    save.hide();
	    if ($('.giftAddressPersonalize').length) {
	    	setInterval(function() {
	    		var messagePresent = $('.no-personal-message').attr('checked') || $('.personal-message-line').val() != "";
	    		if ($('.dateRadio').find('input').attr('checked') && $('.payment_address_select').val() != "" &&  messagePresent) {
	    			save.show();
	    		} else {
	    			save.hide();
	    		}
	    	}, 500);

	    }

	  	
	    /* --- Address form changes --- */
	    if ($('#new-customer').length && $.trim($('#new-customer').find('h3').text()) == "Please complete your new delivery address below") {
		    // Make address save form a lightbox
			$('<div id="__msg_overlay">').css({
			      "width" : "100%"
			    , "height" : "100%"
			    , "background" : "#000"
			    , "position" : "fixed"
			    , "top" : "0"
			    , "left" : "0"
			    , "zIndex" : "150"
			    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
			    , "filter" : "alpha(opacity=60)"
			    , "MozOpacity" : 0.6
			    , "KhtmlOpacity" : 0.6
			    , "opacity" : 0.6
			}).appendTo(document.body);

			// Move new address form to top of overlay
			var addressForm = $("[id$=\\:checkoutForm2]"); // Select form with an id that ends in ":checkoutForm2" (Needed because these forms dynamically generate with each gift listing)
			addressForm.addClass('AWA-address-form');
			$('body').append(addressForm);
			addressForm.show();

			// Change address form header text and add close button
			$('#new-customer').find('h3').replaceWith("<div id='AWA-address-toper'><h2>Add a new delivery address below</h2><div id='AWA-close'><a id='AWA-close-link' href='#'>(X Close)</a></div></div><div style='clear: both'></div>");

			// Address form lightbox close link
			$('#AWA-close-link').click(function(e) {
				e.preventDefault();
				addressForm.hide();
				$('#__msg_overlay').hide();
			});

			// Add dummy "Add address" button so the modal can show up again
			$('h3:contains("Select a delivery address")').parent().find('form').after(exp.vars.dummyAddAddress);
			$('#AWA-dummy-link').click(function() {
				addressForm.show();
				$('#__msg_overlay').show();
			});


			// Modify Country input helper text
			$('.add-address').find('div').last().prev().get(0).lastChild.nodeValue = " (UK deliveries only)";

		    // Rename "Submit" on save address form
		    $('#createAddress').val("Save Address");

		    /*--- Address Name field changes (only shown if logged in) --- */
		    // Move "Address name" field to bottom
		    if ($('.add-address').find('label:contains("Address name")').length) {
		    	var addressName = $('.add-address').find('label:contains("Address name")').parent();
		    	var country = $('.add-address').find('label:contains("Country")').parent();
		    	country.after(addressName);

		    	// Add side text
		    	$('#remarks').after(' (Helps you find it next time)');

		    	// Pipe in first & last name default to Address name field
		    	$('#firstName, #lastName').keyup(function() {
					$('#remarks').val($('#firstName').val() + " " + $('#lastName').val());
				});
			}

			// Make address popup scrollable only if preloaded addresses are entered
			if ($('h5:contains("Please select your address from the list below")').length) {
				$('.AWA-address-form').addClass('AWA-preloaded-address');

				// Add padding to close link
				$('#AWA-close').attr('style', 'padding-right: 12px;');
			}
	    }
	    
	    // If Delivery & Payment page contains both a gift item and regular item, edit Deliver address details text
	    if ($('.giftSku-with-address').length) { // This class only shows up when tere is both a regular item in gift item waiting to be checked out
	    	$('.DeliveryAddress .textBold').text("Delivery Address (non-gift items)");
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

