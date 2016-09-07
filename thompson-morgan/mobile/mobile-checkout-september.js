function() {

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
	exp.log('Mobile Experience v20');


	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	exp.condition = $('#32485735');

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Mobile Product Page failed a condition');
	//     return false;
	// }

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		row1: 	"<div id='AWA-row1'>\
					<div id='AWA-logo'>\
						<a href='http://www.thompson-morgan.com/'><img style='display: block; margin-left: auto;' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/2427400f7c068a59c6cd8297383a4f91_768_282.jpeg'></a>\
					</div>\
				",
		row4: 	"",
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	body, body * {\
	    max-height: 1000000px;\
	}\
	#AWA-co-text {\
		display: none;\
    	margin-top: 40px;\
	}\
	#AWA-co-text a {\
		font-size: 2.8em;\
    	text-decoration: underline;\
	}\
	#AWA-row1 {\
		background-color: white;\
		overflow: auto;\
		width: 100%;\
	}\
	#AWA-logo {\
		float: left;\
		width: 60%;\
	}\
	#AWA-logo img {\
		width: 80%;\
		padding-top: 2%;\
  		padding-left: 42%;\
	}\
	#AWA-m-cart {\
		float: right;\
		width: 35%;\
	}\
	#AWA-m-cart img {\
		float: right;\
		width: 27%;\
		padding-right: 6%;\
		padding-top: 1.5%;\
		margin-top: 1.5%;\
	}\
	#AWA-item-num {\
		border-radius: 22px;\
		float: right;\
		margin-right: 2%;\
		margin-top: 8%;\
		font-size: 2.2em;\
		padding: 5%;\
	}\
	#AWA-row2 {\
		background-color: #00562C;\
		overflow: auto;\
		padding-top: 2%;\
		padding-bottom: 2%;\
		margin-bottom: 1%;\
	}\
	#AWA-menu-row img {\
		float: left;\
		width: 13%;\
		max-width: 74px;\
		padding-top: 2%;\
		padding-left: 1%;\
		padding-bottom: 2%;\
	}\
	#AWA-menu-text {\
		float: left;\
		font-size: 266%;\
		margin-left: 2%;\
		margin-top: 3%;\
		color: white;\
	}\
	#AWA-m-search {\
		float: right;\
		width: 30%;\
	}\
	#AWA-m-search img {\
		float: right;\
		width: 30%;\
		margin-top: 5%;\
	}\
	#AWA-search-text {\
		float: right;\
		font-size: 266%;\
		margin-left: 2%;\
		margin-top: 12%;\
		padding-right: 6%;\
		color: white;\
	}\
	#AWA-row3 {\
		text-align: center;\
		overflow: auto;\
		background-color: white;\
		padding: 1%;\
	}\
	#siteSearch {\
		width: 100%;\
		clear: both;\
		margin-right: 0;\
		margin-top: 0;\
	}\
	#sli_search_1 {\
		height: 88px;\
		width: 90%;\
		background: none !important;\
		border: solid 1px black;\
		font-size: 2em;\
	}\
	.autocomplete {\
		display: none !important;\
	}\
	#AWA-row4 ul {\
		list-style-type: none;\
		border: solid 1px black;\
	}\
	#AWA-row4 li {\
		border-bottom: solid 1px black;\
		padding: 3.7%;\
		padding-left: 9%;\
		background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/f07889a894369950c2093a76b9f8adc0_64_78.png) #CAC8C8;\
		background-size: 13px;\
		background-repeat: no-repeat;\
		background-position: 95%;\
	}\
	#AWA-row4 li.AWA-heading {\
		padding-left: 5%;\
		background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/8a2ee596b2d19ea790fd2f4d3739eadd_171_89.png) lightgray;\
		background-size: 25px;\
		background-repeat: no-repeat;\
		background-position: 95%;\
	}\
	#AWA-row4 li a {\
		font-size: 42px;\
	}\
	.AWA-heading a {\
		text-transform: uppercase;\
	}\
	#AWA-empty {\
		float: right;\
		font-size: 2.1em;\
		line-height: 1em;\
		margin-top: 9%;\
		text-align: center;\
	}\
	#AWA-my-account {\
		float: right;\
		margin-top: 40px;\
		margin-right: 20%;\
	}\
	#AWA-my-account a {\
		font-size: 2.8em;\
		text-decoration: underline;\
	}\
	#AWA-yellow-tt {\
		background-image: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/1b8458c4056389213bfe0631cf39f455_242_107.png);\
		width: 206px;\
		position: absolute;\
		margin-left: 48px;\
		font-size: 2em;\
		padding: .75em;\
		z-index: 10;\
		line-height: 1.2em;\
		padding-top: 29px;\
		display: none;\
	}\
	#AWA-homepage {\
		margin-bottom: 35px;\
	}\
	#AWA-h-hero img {\
		width: 100%;\
	}\
	#AWA-homepage-menu a {\
		border-bottom: solid 1px black;\
		padding: 3.7%;\
		padding-left: 9%;\
		background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/f07889a894369950c2093a76b9f8adc0_64_78.png) #CAC8C8;\
		background-size: 13px;\
		background-repeat: no-repeat;\
		background-position: 95%;\
		display: block;\
		font-weight: bold;\
		font-size: 250%;\
	}';

	exp.css2 = '\
	#productCont {\
		width: 100%;\
	}\
	.t011 {\
		float: none;\
		text-align: center;\
	}\
	.t011 .main {\
		width: inherit;\
	}\
	.AWA-title, .AWA-subtitle {\
		text-align: center;\
		margin-top: 1%;\
		margin-bottom: 1%;\
	}\
	h1 .productClass {\
		font-size: 50px;\
		line-height: 1em;\
	}\
	.AWA-subtitle {\
		margin-bottom: 12px;\
		margin-top: 1%;\
	}\
	#prodFeatures {\
		width: 92%;\
		margin: 0 auto;\
		padding-right: 5%;\
		font-size: 35px;\
		line-height: 120%;\
	}\
	#prodFeatures dd {\
		margin-left: 50px;\
	}\
	.stockInfo {\
		width: 95%;\
		margin: 0 auto;\
		padding-left: 2%;\
		background-color: #AEC115;\
		padding-top: 2%;\
		padding-bottom: 3%;\
	}\
	.stockInfo li {\
		width: 100%;\
		padding-right: 15px;\
	}\
	.stockInfo li.size {\
		width: 100%;\
		font-size: 40px;\
		line-height: 120%;\
	}\
	.stockInfo li.price {\
		float: right;\
		margin-right: 7%;\
		font-size: 36px;\
		margin-top: .5%;\
	}\
	.stockInfo li.promo {\
		margin-top: 1%;\
		font-size: 36px;\
		width: 30%;\
		line-height: 36px;\
	}\
	#AWA-add {\
		background-color: rgb(182, 7, 24);\
		color: white;\
		font-weight: bold;\
		width: 40%;\
		text-align: center;\
		padding: 45px;\
		margin: 0 auto;\
		margin-top: 15px;\
		font-size: 3.5em;\
	}\
	.AWA-radio-div {\
		width: 20px;\
	}\
	input.AWA-radio {\
		width: inherit;\
		float: left;\
		margin-right: 19px;\
		height: 55px;\
		width: 55px;\
	}\
	.AWA-description, .AWA-reviews, .AWA-delivery, .AWA-grow {\
		font-size: 40px;\
		border: solid 1px black;\
		width: 95%;\
		margin: 0 auto;\
		margin-top: 5% !important;\
		padding: 1%;\
		line-height: 1.7em;\
	}\
	.AWA-description h3, .AWA-reviews h3, .AWA-delivery h3, .AWA-grow h3 {\
		display: inline;\
		margin-left: 8px;\
		font-size: 40px;\
	}\
	.AWA-tab-arrow {\
		width: 10px;\
		margin-left: 15px;\
	}\
	.AWA-description-blurb {\
	}\
	.AWA-mobile-box a {\
		text-decoration: underline;\
		font-size: 40px;\
	}\
	.AWA-star {\
		width: 115px;\
	}\
	.border-bottom-grey {\
		margin-bottom: 20px;\
	}\
	.AWA-feature {\
		color: #00572D !important; font-weight: bold;\
	}\
	.AWA-newList li {\
		padding-bottom: 1%;\
	}\
	#AWA-add-link {\
		margin: 4%;\
	}\
	#AWA-new-delivery-tab table {\
		margin-top: 10px;\
		border: solid 1px black;\
	}\
	#AWA-new-delivery-tab table tr > td {\
		border: solid 1px black;\
		padding: 5px;\
	}\
	td.AWA-first-col {\
		width: 48%;\
	}\
	#AWA-new-delivery-tab td:not(.AWA-first-col) {\
		text-align: center;\
	}\
	.AWA-bold {\
		font-weight: bold;\
	}\
	#AWA-new-delivery-tab th {\
		text-align: left;\
		padding: 5px;\
	}\
	.AWA-mobile-box {\
		padding-top: 1%;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');
			$('head').append('<meta name="viewport" content="width=320, initial-scale=1">');

	/* --- MOBILE NAVIATION --- */
	/*-- This is to fix the navigation on mobile pages.--*/


	//Append the basket line to be on top of catologue.
	$('#AWA-catalogue').before($('#headerBasket'));

    //Make window open at top of pages
    $('html,body').scrollTop(0);

    // hide the sub navigation
    $('#headerNav').hide();



		/* --- ROW 1 --- */
		// Prepend logo and cart to the body

	$('#header-portlet').prepend(exp.vars.row1);

		//hide other logo
		jQuery('#header-portlet > a').hide();

	// 	// Get # of items in cart
	// 	var basketText = $.trim($('.mini-basket.mini-basket.floatRight').text());
	// basketText = basketText.substring(9, basketText.indexOf("item(s)"));
	// var itemsInCart = $.trim(basketText);

	// Fallback to account for Header experiment
	// if (isNaN(basketText)) {
	// 	var basketText = $.trim($('.mini-basket.mini-basket.floatRight').text());
	// 	itemsInCart = basketText.substring(0, basketText.indexOf(" item(s)"));
	// }
	//
	// $('#AWA-item-num').text(itemsInCart);




	// Remove extra lable if available
	$('#siteSearch').find('label').remove();

	/* --- ROW 4 (Menu) --- */
	$('#header-portlet').after(exp.vars.row4);

	// Event handler for select menu li
	// $('#AWA-row4 li:not(".AWA-heading")').click(function() {
	// 	var newLocation = $(this).find('a').attr('href');
	// 	$(location).attr('href', newLocation);
	// });

	// Initially hide menu
	$('#AWA-row4').hide();

	// Toggle Menu
	$('#AWA-menu-row img, #AWA-menu-text').click(function() {
		$('#AWA-row4').toggle();
		// When burger menu is pressed hide tooltip
		$("#AWA-yellow-tt").hide();
	});

	// Initially hide submenus
	$('.AWA-sub').hide();

	// Event handler for menu drop downs
	$('.AWA-heading a').click(function(e) {
		e.preventDefault();
	});
	$('.AWA-heading').click(function(e) {
		e.preventDefault();
		$(this).next('.AWA-sub').toggle();
		if ($(this).next('.AWA-sub').is(":visible")) {
			$(this).attr('style', 'background: none; background-color: lightgray;');
		} else {
			$(this).attr('style', 'background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/8a2ee596b2d19ea790fd2f4d3739eadd_171_89.png); background-size: 25px; background-repeat: no-repeat; background-position: 95%; background-color: lightgray;');
		}

	});


	/* --- FINAL STUFF --- */
	// Hide original header


	//change text for guest checkout

// 	jQuery('#new-customer > h2').html('<h2>Checkout without creating an account</h2>');


	// Hide original navigation
	$('.navigation-portlet').hide();
	jQuery('#901239901 > div > div').hide();

	// Add empty basket text
	if ($('#AWA-item-num').text() == 0) {
		$('#AWA-item-num').after(exp.vars.emptyBasket);
		$('#AWA-item-num').text("");
	}




		/* --- LOGIN PAGE --- */
		if ($("h2:contains('Login to your account')").length) {
			console.log("I am on the checkout page!");
			this.loginCSS = '\
				#new-customer {\
					margin: 0 auto;\
					margin-top: 15px;\
					text-align: center;\
					width: 80%;\
				}\
				.registration-portlet {\
					margin: 0;\
					padding: 0;\
					float: none;\
					width: 100%;\
				}\
				#new-customer label, #login-customer label {\
					width: 30%;\
					font-size: 150%;\
				}\
				input[type=text], .product-additional-info input, .product-additional-info textarea, .tellafriend-portlet textarea, input[type=password], input[type=email], input[type=tel] {\
					font-size: 150%;\
					width: 65%;\
				}\
				.dropDownField {\
					width: 65% !important;\
					height: 34px;\
					font-size: 150%;\
				}\
				#postalCode {\
					margin-left: 11px;\
				}\
				.userDetails {\
					margin-left: 0;\
					margin-right: 63px;\
				}\
				.subscriptiontable {\
					margin: 0 auto;\
					margin-top: 25px;\
				}\
				.login-portlet {\
					float: none;\
					clear: both;\
					width: 100%;\
					margin-top: 65px;\
				}\
				#login-customer h2 {\
					text-align: center;\
				}\
				.login-portlet input[type=text], .login-portlet input[type=password], .login-portlet input[type=email], .login-portlet input[type=tel] {\
					width: 50%;\
				}\
				.text.clearFloat {\
    			text-align: center;\
				}\
				.AWA-m-new-button {\
			    display: block;\
			    margin: 0 auto;\
			    margin-bottom: 15px;\
			    height: 56px;\
			    width: 224px;\
			    background-color: #103e1c;\
			    color: white !important;\
			    padding-top: 34px;\
			    font-size: 44px;\
				}\
				.AWA-m-new-hidden {\
					display: none;\
				}\
				#AWA-m-continue1 {\
					margin-top: 25px;\
				}\
				#AWA-border {\
					margin: 0 auto;\
					margin-top: 50px;\
					border-top: solid 3px #103E1C;\
					margin-bottom: 50px;\
				}\
				#AWA-border h1 {\
					width: 25%;\
					margin: 0 auto;\
					text-align: center;\
					background-color: #FFF;\
					position: relative;\
					top: -10px;\
					font-size: 164%;\
				}\
				#QASearch {\
					font-size: 200%;\
				}\
				.searchPostCodeLink {\
					width: 170px !important;\
				}\
				.qas {\
					font-size: 200%;\
					margin-bottom: 15px;\
				}\
				.QAS_Table {\
					margin: 0 auto;\
				}\
				.QAS_Table a {\
					font-size: 200%;\
					display: block;\
					margin-bottom: 15px;\
					line-height: 120%;\
				}\
				#manualEntry {\
					font-size: 100%;\
				}\
				.error_message {\
					font-size: 150%;\
					display: block;\
					margin: 10px;\
					width: 100%;\
				}\
				.login-portlet .error_message {\
					width: 100%;\
				}\
				.registration-portlet {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
		    padding-top: 41px;\
			}\
.login-portlet {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
}\
';

			$('head').append('<style type="text/css">'+this.loginCSS+'</style>');

			var error = false;
			if ($(".error_message").is(':visible')) {
				error = true;
			}

			$("#AWA-row4").after("<div id='AWA-m-login'></div>");

			$("#AWA-m-login").append($("#1815133327"));

			$("#new-customer").find("p").hide();
			$(".orderConfirmationEmail").hide();
			$(".userDetails div:contains('We do not deliver outside')").html('<label>Country * <span title="required"></span></label><input id="country" type="text" value="United Kingdom" readonly="readonly">');

			// Move email address
			var email = $("#email").closest('div');
			$("#postalCode").closest('div').before(email);

			var emailConfirm = $("#reEnterEmail").closest('div');
			$("#postalCode").closest('div').before(emailConfirm);

      $('.subscriptionTable').hide();

			$("#mainform").before("<a href='#' id='AWA-m-guest-checkout' class='AWA-m-new-button'>I'm New</a>");
			$(".userDetails").hide();
			$("#registration_submit").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; -webkit-appearance: none;').attr('value', 'Continue Checkout');
			$("#registration_submit").hide();
			$("#AWA-m-guest-checkout").click(function(e) {
				e.preventDefault();
				$(".userDetails").show();
				$(this).hide();
				$("#registration_submit").show();
        $('.subscriptionTable').show();
			});


				$("#fakeSubmit").remove();
			//});


		// 	$(".registration-portlet").append("<div id='AWA-border'><h1>OR</h1></div>");

			// LOGIN
			$("p:contains('Welcome back')").hide();
			$("p:contains('required fields')").hide();
			$(".login-helpsection").hide();

			$("#login_submit").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; margin-right: 0; -webkit-appearance: none;').attr('value', 'Login');
			$(".actions_login").find('div').first().attr('style', 'text-align: center;');
			$(".actions_login").find('div').find('label').first().remove();

			$("div.text:contains('Forgot Your Password')").attr('style', 'font-size: 150%; margin-top: 40px;');
			$("div.text:contains('Forgot Your Password')").find('a').first().attr('style', 'font-size: 100%;');

			// Make email inputs use an email type
			$("#email").remove();
			$(".double:contains('Email *')").after('<input id="email" name="email" type="email" value="" maxlength="200" size="200" tabindex="11">');
			$("#reEnterEmail").remove();
			$(".double:contains('Confirm email *')").after('<input id="reEnterEmail" name="reEnterEmail" type="email" value="" maxlength="200" size="200" tabindex="12">');
			$("#loginForm\\:username").remove();
			$("label:contains('Your email address')").after('<input id="loginForm:username" name="loginForm:username" type="email" value="" tabindex="26">');

			// Make phone inputs
			$("#phone").remove();
			$("label:contains('Telephone number * ')").after('<input id="phone" name="phone" type="tel" value="" maxlength="20" size="20" tabindex="13">');
			$("#cellphone").remove();
			$("label:contains('Mobile number')").after('<input id="cellphone" name="cellphone" type="tel" value="" maxlength="20" size="20" title="Please enter your best contact number. We will only use this to contact you with queries about your order." tabindex="14">');

			$("b:contains('find your address?')").attr('style', 'font-size: 200%; margin-top: 20px; margin-bottom: 30px; display: block;');

			// If address lookup was used then show the appropriate section
			if ($("b:contains('find your address?')").length) {
				$("#AWA-m-guest-checkout")[0].click();
			}

			// If Country input has a value (from address lookup) then show the appropriate section
			if ($("#postalCode").val().length) {
				$("#AWA-m-guest-checkout")[0].click();
				// $("#AWA-m-continue1")[0].click();
			}

			// If error message exists, show whole form
			if (error === true) {
				jQuery('#AWA-m-guest-checkout')[0].click();
			}

			// Hide footer




			// Styles
			// String containing the CSS for the experiment
			exp.css = '\
			#AWA-row1 {\
				background-color: white;\
				overflow: auto;\
				width: 100%;\
			}\
			#AWA-logo {\
					width: 60%;\
					display: block;\
					margin-left: auto;\
			}\
			#AWA-logo img {\
				width: 80%;\
				padding-top: 2%;\
					padding-left: 43%;\
			}\
			div#QLCoreContainer {\
    		width: 100%;\
			}\
			#AWA-m-cart {\
				float: right;\
				width: 35%;\
			}\
			#AWA-m-cart img {\
				float: right;\
				width: 27%;\
				padding-right: 6%;\
				padding-top: 1.5%;\
				margin-top: 1.5%;\
			}\
			#AWA-item-num {\
				border-radius: 22px;\
				float: right;\
				margin-right: 2%;\
				margin-top: 11%;\
				font-size: 2em;\
				padding: 5%;\
			}\
			#AWA-row2 {\
				background-color: #00562C;\
				overflow: auto;\
				padding-top: 2%;\
				padding-bottom: 2%;\
				margin-bottom: 1%;\
			}\
			#AWA-menu-row img {\
				float: left;\
				width: 13%;\
				max-width: 74px;\
				padding-top: 2%;\
				padding-left: 1%;\
				padding-bottom: 2%;\
			}\
			#AWA-menu-text {\
				float: left;\
				font-size: 266%;\
				margin-left: 2%;\
				margin-top: 3%;\
				color: white;\
			}\
			#AWA-m-search {\
				float: right;\
				width: 30%;\
			}\
			#AWA-m-search img {\
				float: right;\
				width: 30%;\
				margin-top: 5%;\
			}\
			#AWA-search-text {\
				float: right;\
				font-size: 266%;\
				margin-left: 2%;\
				margin-top: 12%;\
				padding-right: 6%;\
				color: white;\
			}\
			#AWA-row3 {\
				text-align: center;\
				overflow: auto;\
				background-color: white;\
				padding: 1%;\
			}\
			#siteSearch {\
				width: 100%;\
				clear: both;\
				margin-right: 0;\
				margin-top: 0;\
			}\
			#sli_search_1 {\
				height: 88px;\
				width: 90%;\
				background: none !important;\
				border: solid 1px black;\
				font-size: 2em;\
			}\
			.autocomplete {\
				display: none !important;\
			}\
			#AWA-row4 ul {\
				list-style-type: none;\
				border: solid 1px black;\
			}\
			#AWA-row4 li {\
				border-bottom: solid 1px black;\
				padding: 3.7%;\
				padding-left: 9%;\
				background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/f07889a894369950c2093a76b9f8adc0_64_78.png) #CAC8C8;\
				background-size: 13px;\
				background-repeat: no-repeat;\
				background-position: 95%;\
			}\
			#AWA-row4 li.AWA-heading {\
				padding-left: 5%;\
				background: url(//dd6zx4ibq538k.cloudfront.net/static/images/2841/8a2ee596b2d19ea790fd2f4d3739eadd_171_89.png) lightgray;\
				background-size: 25px;\
				background-repeat: no-repeat;\
				background-position: 95%;\
			}\
			#AWA-row4 li a {\
				font-size: 166%;\
			}\
			.AWA-heading a {\
				text-transform: uppercase;\
			}\
			#AWA-empty {\
				float: right;\
				font-size: 1.7em;\
				margin-top: 9%;\
				text-align: center;\
			}\
			#AWA-my-account {\
				float: right;\
				margin-top: 5%;\
				margin-right: 30%;\
			}\
			#AWA-my-account a {\
				font-size: 208%;\
				text-decoration: underline;\
			}\
			.headerLinks.floatRight {\
				display: block;\
				width: 100%;\
		}\
		.login-portlet {\
				display: block;\
				margin-left: auto;\
				margin-right: auto;\
		}\
		div#new-customer {\
				display: block;\
				margin-left: auto;\
				margin-right: auto;\
		}\
		.registration-portlet {\
				border-right: none;\
				border-top: 1px solid #4d896c;\
				width: 95%;\
		}\
		table.subscriptionTable {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
    padding-left: 60px;\
		}\
		#headerNav li.telephone {\
    background: url("/thompsonandmorgan/site-theme/images/icon_telephone_tandm.png") no-repeat scroll 0 3px rgba(0, 0, 0, 0);\
    font-size: 12px;\
    margin-left: 8px;\
	}\
	a#AWA-catalogue-link {\
    text-align: center;\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
    padding-right: 48px;\
    margin-top: -20px;\
	}\
	#headerBasket {\
    position: relative;\
    z-index: 10;\
		margin-right: 10%;\
    float: left;\
    width: 300px;\
	}\
	#headerBasket li {\
		background-image: none !important;\
		margin-right: 118px;\
		margin-top: 142px;\
	}\
	.login-helpsection{\
	  float: right;\
	}\
	.login-helpsection a {\
		margin-left: 0px;\
    padding-top: 7px;\
    height: 30px;\
    font-size: 11px;\
}\
	.dropDownField {\
    width: 30% !important;\
		margin-right: 86px;\
		}\
		#new-customer label, #login-customer label {\
    width: 23%;\
    font-size: 15px;\
    white-space: nowrap;\
		text-align: left;\
		}\
		input {\
    font-size: 18px !important;\
		width: 100% !important;\
		height: 33px !important;\
		}\
		input#postalCode {\
			height: 21px !important;\
			margin-left: 35px;\
			float: left;\
			margin-bottom: 18px;\
		}\
		#QASearch {\
			border: 1px solid #000;\
			background-color: #b6071B;\
			color: #fff;\
		}\
		.userDetails {\
    margin-left: 0px;\
    margin-right: 0px;\
		}\
		#new-customer .checkboxLabel {\
    margin: 0 0 10px 0 !important;\
    text-align: left;\
    width: 260px !important;\
    height: auto;\
    white-space: pre-wrap;\
		}\
		table.subscriptionTable {\
    display: block;\
    margin-left: auto;\
    margin-right: auto;\
    position: relative;\
    right: 32px;\
		}\
		div#login-customer {\
    height: 352px;\
    }\
		#headerBasket .myBasket {\
	    color: grey !important;\
	    text-decoration: underline;\
		}\
		.myBasket{\
			color: #888892 !important;\
			font-size: 16px;\
		}\
		div#basket {\
    	color: grey;\
		}\
		a#AWA-m-Login {\
	    display: block;\
	    text-align: center;\
			font-size: 22px;\
			padding-top: 11px;\
	    color: #888892 !important;\
	    text-decoration: underline;\
		}\
		h2.login-header-awa {\
      font-size: 21px;\
      margin-bottom: 10px !important;\
      color: black;\
    }\
		div {\
    	border-top: none !important;\
		}\
		';

			// Functions
			// Object containing functions, some helpful functions are included


			// Init function
			// Called to run the actual experiment, DOM manipulation, event listeners, etc

					// Append style to head
					$('head').append('<style type="text/css">'+this.css+'</style>');



					/* --- ROW 1 --- */
					// Prepend logo and cart to the body


					//hide other logo
					// jQuery('#header-portlet > a').hide();

					// Get # of items in cart
				// 	var basketText = $.trim($('.mini-basket.mini-basket.floatRight').text());
				// basketText = basketText.substring(9, basketText.indexOf("item(s)"));
				// var itemsInCart = $.trim(basketText);

				// Fallback to account for Header experiment
				// if (isNaN(basketText)) {
				// 	var basketText = $.trim($('.mini-basket.mini-basket.floatRight').text());
				// 	itemsInCart = basketText.substring(0, basketText.indexOf(" item(s)"));
				// }

				// $('#AWA-item-num').text(itemsInCart);




				// Remove extra lable if available
				$('#siteSearch').find('label').remove();




				/*-- This is to fix the navigation on mobile pages.--*/


				//Append the basket line to be on top of catologue.
				$('#AWA-catalogue').before($('#headerBasket'));




				/* --- FINAL STUFF --- */
				// change button login style


				//change text for guest checkout

				// jQuery('#new-customer > h2').html('<h2>Checkout without creating an account</h2>');


				// Hide original navigation
				$('.navigation-portlet').hide();
				jQuery('#901239901 > div > div').hide();

				// Add empty basket text
				if ($('#AWA-item-num').text() == 0) {
					$('#AWA-item-num').after(exp.vars.emptyBasket);
					$('#AWA-item-num').text("");
				}

				// make the disclosure
				//Append Log in to your account
						jQuery('.registration-portlet').before(jQuery('.login-portlet'));


						$('#QASearch').hide();

						jQuery('#postalCode').after('<input id="QASearch" name="QASearch" type="submit" value="Find Address" \
						onclick="if(typeof window.clearFormHiddenParams_mainform!="undefined"){clearFormHiddenParams_mainform("mainform");}"\
						class="searchPostCodeLink priceColour textUnderline floatLeft findButton" tabindex="5">');


						// Remove FloatLeft Class from what needs it
						$( "#1815133327 > div > div > div.login-portlet" ).removeClass( "floatLeft" );
						$( "#1815133327 > div > div > div.registration-portlet" ).removeClass( "floatLeft" );

						//Hide what needs to be hid for progressive disclosuce.
						jQuery('#1815133327 > div > div > .login-portlet').hide();

						jQuery('.registration-portlet').after('<div class="login-portlet">\
						<div id="login-customer">\
		<div class="login-AWA">\
		<h2 style="margin-left: 6px; margin-bottom: 25px;">Shopped with us before?</h2>\
				<p style="margin-left: 40%;">Welcome back.</p>\
				<p style="margin-left: 35%;">* = required fields</p></div>\
				<br>\
		<form id="loginForm" name="loginForm" method="post" action="/public/QLOnline/secure/checkoutRegistration?portal:componentId=1815133327&amp;portal:type=action&amp;portal:isSecure=true&amp;org.apache.myfaces.portlet.MyFacesGenericPortlet.VIEW_ID=%2Fcheckout%2FcheckoutRegistration.jsp" enctype="application/x-www-form-urlencoded" target="">\
		 <ul>\
			<li>\
			<label style="font-size: 15px; margin-left: 0px;"> Your email address  *</label><input id="loginForm:username" name="loginForm:username" type="text" value="" tabindex="26"> <br>  </li>  <li> <label style="font-size: 15px; margin-left: 0px"> Password *</label><input type="password" id="loginForm:password" name="loginForm:password" tabindex="27"><br>\
		 </li>\
		 </ul>\
			<div class="actions_login">\
				<div>\
				<label> </label>\
			<input id="login_submit" name="login_submit" type="submit" value="login" onclick="if(typeof window.clearFormHiddenParams_loginForm!="undefined"){clearFormHiddenParams_loginForm("loginForm");}" style="background-image: url(/medias/sys_tandm/8796108095518.gif);" class="button dynamicButton submitButton floatRight" tabindex="28">\
		</div>\
			<input type="hidden" name="loginForm_SUBMIT" value="1"><input type="hidden" name="loginForm:_idcl" value=""><input type="hidden" name="loginForm:_link_hidden_" value=""><input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAN0AAE3cHQAIi9jaGVja291dC9jaGVja291dFJlZ2lzdHJhdGlvbi5qc3A=">\
			<form id="forgottenPasswordForm" name="forgottenPasswordForm" method="post" action="/public/QLOnline/secure/checkoutRegistration?portal:componentId=1815133327&amp;portal:type=action&amp;portal:isSecure=true&amp;org.apache.myfaces.portlet.MyFacesGenericPortlet.VIEW_ID=%2Fcheckout%2FcheckoutRegistration.jsp" enctype="application/x-www-form-urlencoded" target="">\
			<div class="text clearFloat"> <label> </label>Forgot Your Password? <a href="#" onclick="return oamSubmitForm("forgottenPasswordForm","forgottenPasswordForm:checkoutForgottenPassword");" id="forgottenPasswordForm:checkoutForgottenPassword" tabindex="29" class="quickLinks">Click here</a></div><input type="hidden" name="forgottenPasswordForm_SUBMIT" value="1"><input type="hidden" name="forgottenPasswordForm:_idcl" value=""><input type="hidden" name="forgottenPasswordForm:_link_hidden_" value=""><input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAN0AAE3cHQAIi9jaGVja291dC9jaGVja291dFJlZ2lzdHJhdGlvbi5qc3A="></form> </div></form>\
		<br>\
		<div class="login-helpsection">\
		<a id="helpLoggingIn" href="javascript:void(0)" onclick="$("#helpText").toggle();">Trouble logging in to your account? </a>\
		<div id="helpText" class="login-helptext">\
			<p>\
			</p><div>\
				<div>\
					<ul>\
						<li>Our Account Login function has only been available to visitors to this website since 20th September 2010.</li>\
						<li>If you have ordered with us online before this date you will need to create a new account.</li>\
						<li>If you have previously only ordered with us by post or telephone then you will need to create a new account.</li>\
						<li>If you receive our email newsletters you will still need to create an account if you have not created an account on our website before.</li>\
						<li>Please check that you have entered your email address and password correctly.</li>\
						<li>Your password is case sensitive so try entering it again with or without capitals.</li>\
						<li>If you are still not able to access your account please contact us at&nbsp;ccare@thompson-morgan.com</li>\
					</ul>\
				</div>\
			</div>\
			<p></p>\
		</div>\
		</div>\
		</div>\
		</div>\
		');

		$('#login-customer > div.login-AWA > p:nth-child(2)').hide();
		$('#login-customer > div.login-AWA > p:nth-child(3)').hide();



		// button center. and other things center.

		$("input#login_submit").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; margin-right: auto; -webkit-appearance: none; display: block; margin-left: auto;').attr('value', 'Login');
		$("#loginForm > div > div.text.clearFloat").attr('style', 'padding-left: 21px;')
		// center forgot password

		$('#loginForm > div > div.text.clearFloat > label').remove();


		// Find address button.

		// $("input#QASearch").attr('style', 'background-color: #B60718; background-image: none; text-indent: 0px; color: white; width: 199px; height: 35px !important; font-size: 150%; margin-top: 10px; float: none !important; margin-right: auto; -webkit-appearance: none; display: block; margin-left: auto;').attr('value', 'Login');

		jQuery('#loginForm').attr('style', 'margin-left: 36px;');




						$('#mainform > div.userDetails > div:nth-child(2)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(3)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(2)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(3)").show();
						// });


						$('#mainform > div.userDetails > div:nth-child(3)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(4)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(3)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(4)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(4)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(5)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(4)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(5)").show();
						// });

						$('#mainform > div.userDetails > div:nth-child(5)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(6)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(5)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(6)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(6)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(7)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(6)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(7)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(7)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(11)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(7)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(11)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(11)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(12)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(11)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(12)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(12)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(13)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(12)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(13)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(13)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(14)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(13)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(14)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(14)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(15)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(14)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(15)").show();
						// });
						// $('#mainform > div.userDetails > div:nth-child(15)').click(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)").show();
						// });
						// $('#mainform > div.userDetails > div:nth-child(15)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(15)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div.clearFloat').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)').click(function(e) {
							 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(5)").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(4)').find('input').focus(function(e) {
						// 	 $("#mainform > div.userDetails > div:nth-child(16) > div:nth-child(5)").show();
						// });
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').click(function(e) {
							 $("#mainform > div.actions").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').find('input').focus(function(e) {
						// 	 $("#mainform > div.actions").show();
						// });
						jQuery('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').click(function(e) {
							 jQuery("#mainform > table").show();
						});
						// $('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').find('input').focus(function(e) {
						// 	 $(".subscriptionTable").show();
						// });

						//Hide Mobile Number
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').hide();


						$('#mainform > div.userDetails > div.clearFloat').append('<p style=" float: left; text-decoration: underline;">Used for order confirmation</p>');
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(2)').append("<p>Please provide phone numbers where we can contact you regarding your delivery</p>");
						$('#mainform > div.userDetails > div:nth-child(16) > div:nth-child(3)').append("<p>Don't worry, we will not use your <br> number for marketing purposes</p>");
						$('#UIContainer-1822378714').hide();
						jQuery('#UIContainer-27850604').after('<div id="callandcopy">\
		<h3>Call us on 0844 573 1818</h3>\
<p>Copyright © Thompson &amp; Morgan, 2004-2016. All rights reserved.</p>\
	</div>\
	');

}

	 /*************-------------------------------------------------************/
	 								     //September Test checkout
	 /*************-------------------------------------------------************/
	 	//I am breaking this particular test down into parts for readibility

		/***
		step one: Move the my basket div to bottom left corner of page/////////
		***/
	 function moveHeader(){
				$('.actions_login').after($('#headerBasket'));
				$('.myBasket').text('< My Basket');
				$('#headerBasket > li').hide();
				$('.login-helpsection').before('<a class="myBasket" href="/basket">&lt; My Basket</a>');
				console.log('am I working?');
				return this;
		}
		moveHeader();

		//Hide Login Help section
			$('.login-helpsection').hide();

			/***
		step two: make a login button.
		***/

		//give the form a button
		$("form#loginForm").before("<a href='#' id='AWA-m-Login' class='AWA-m-login-reveal'>Log in</a>");

	 // Hide the Ul and the button
	     // THIS IS THE UL
	     function ulOfLogin(){
	    $('form#loginForm').find('ul').addClass('user-return');
			$('#loginForm > ul:nth-child(1)').hide();
			$('#login-customer > br:nth-child(2)').hide();
	    return this;
	     }
	     ulOfLogin();
	   // THIS IS THE button
	   function ulOfButton(){
	    $('.actions_login').hide();
	    return this;
	     }
	     ulOfButton();



		//Make click function for login.
		$("a#AWA-m-Login").click(function(e) {
				e.preventDefault();
				$("#loginForm > ul:nth-child(1)").show();
				$('#loginForm > div').show();
				$(this).hide();
				console.log('i am working');
				// $("#registration_submit").show();
    //     $('.subscriptionTable').show();
			});

			//STYLE THE HEADER
			$('.login-AWA').find('h2:first').addClass('login-header-awa');

	/***
		Step:3 style to top button "im New"
	***/

		//remove HEADER
			$('#new-customer > h2').hide();
		//remove blank space at top
			$('#callandcopy').hide();




	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);


}
