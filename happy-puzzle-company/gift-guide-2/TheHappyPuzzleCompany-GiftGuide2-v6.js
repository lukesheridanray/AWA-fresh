
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
	exp.log('Gift Guide 2 v6');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#dropdown_menu');

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		valueProp: "<div id='AWA-value-prop'>\
						<img src='//cdn.optimizely.com/img/174847139/a88b66696e4f4608a25e9cdfbef7dd11.png'>\
					</div>",
		reviews: 	"<div id='AWA-reviews'>\
						<h2>Customers love us - here's why:</h2>\
						<div class='AWA-review'>\
							<img src='//cdn.optimizely.com/img/174847139/fa4ae60247724c0caca57fa493c4e397.jpg'>\
							<br>\
							<span class='AWA-review-title'>Great company with unusual products</span>\
							<p>\
								Quicky despatch and great, quality. Products help children to develop constuction techniques in a fun away.\
							</p>\
							<span>-Enid Heron</span>\
						</div>\
						<div class='AWA-review'>\
							<img src='//cdn.optimizely.com/img/174847139/fa4ae60247724c0caca57fa493c4e397.jpg'>\
							<br>\
							<span class='AWA-review-title'>Unique & educational!</span>\
							<p>\
								Professional, prompt, & personal service. I love that this is a family run business & they personally reply to emails, such a rarity these days. To top it off their products are unique educational & top quality & I've ear marked loads of other presents...birthdays and Christmas' are no longer a minefield.\
							</p>\
							<span>-Nicola Sankar</span>\
						</div>\
						<div class='AWA-trust-pilot'>\
							<a href='https://uk.trustpilot.com/review/www.happypuzzle.co.uk'>Click here to read more customer reviews on <img src='//images-static.trustpilot.com/community/shared/logo_retina.png' width='100'></a>\
						</div>\
					</div><div style='clear: both'></div>",
		new_gift_guide: $('<div class="AWA_HPC_gift_guide"><div class="AWA_HPC_gift_guide_title"><img src="//cdn.optimizely.com/img/174847139/f8a3234c304343abbda84e56d20e9802.png" alt="Santa hat"><h2>Find a gift for a child aged</h2></div><div class="AWA_HPC_gift_guide_content"><div class="AWA_HPC_gift_guide_row"><div class="AWA_HPC_gift_guide_col"><label for="ctl00_cphMaster_chkAgeAR51"><input id="ctl00_cphMaster_chkAgeAR51" type="checkbox" name="ctl00$cphMaster$chkAgeAR51">0-2 yrs</label><label for="ctl00_cphMaster_chkAgeAR52"><input id="ctl00_cphMaster_chkAgeAR52" type="checkbox" name="ctl00$cphMaster$chkAgeAR52">3-5 yrs</label><label for="ctl00_cphMaster_chkAgeAR53"><input id="ctl00_cphMaster_chkAgeAR53" type="checkbox" name="ctl00$cphMaster$chkAgeAR53">6-7 yrs</label><label for="ctl00_cphMaster_chkAgeAR54"><input id="ctl00_cphMaster_chkAgeAR54" type="checkbox" name="ctl00$cphMaster$chkAgeAR54">8-11 yrs</label><label for="ctl00_cphMaster_chkAgeAR55"><input id="ctl00_cphMaster_chkAgeAR55" type="checkbox" name="ctl00$cphMaster$chkAgeAR55">12-14 yrs</label><label for="ctl00_cphMaster_chkAgeAR56"><input id="ctl00_cphMaster_chkAgeAR56" type="checkbox" name="ctl00$cphMaster$chkAgeAR56">15-Adult</label></div><div class="AWA_HPC_gift_guide_col"><label>Skills/interests</label><label for="AWA_HPC_gift_guide_skill_1"><input id="AWA_HPC_gift_guide_skill_1" type="radio" name="ctl00$cphMaster$ddlSkills" value="0" checked="checked">All</label><label for="AWA_HPC_gift_guide_skill_2"><input id="AWA_HPC_gift_guide_skill_2" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK05">Creativity</label><label for="AWA_HPC_gift_guide_skill_3"><input id="AWA_HPC_gift_guide_skill_3" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK16">Maths</label><label for="AWA_HPC_gift_guide_skill_4"><input id="AWA_HPC_gift_guide_skill_4" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK07">General Knowledge</label><label for="AWA_HPC_gift_guide_skill_5"><input id="AWA_HPC_gift_guide_skill_5" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK10">Hand-Eye coordination</label></div></div><div id="AWA-sub"><a id="AWA_HPC_gift_guide_submit" class="AWA_HPC_gift_guide_submit" href="javascript:__doPostBack(\'ctl00$cphMaster$lnkbtnSearch\',\'\')">Find the perfect gift</a></div></div></div>')
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.gift-finder {\
		float: none;\
		width: 977px;\
		height: 97px;\
		margin-bottom: 5px;\
	}\
	.gift-finder ul {\
		margin-top: 0;\
		margin-right: 0;\
		padding-left: 0;\
	}\
	.gift-finder ul li.checkboxes {\
		margin-top: 0;\
		padding-top: 17px;\
		margin: 0 auto;\
		width: inherit;\
	}\
	.gift-finder .checkbox {\
		width: inherit;\
		float: left;\
		margin-left: 62px;\
		font-size: 18px;\
	}\
	.gift-finder ul li.gift-search {\
		width: 186px;\
		margin: 0 auto;\
		margin-top: 12px;\
	}\
	#AWA-header {\
		background: #A04D8D;\
		height: 40px;\
		width: 979px;\
	}\
	#AWA-header h1 {\
		color: white;\
		font-size: 25px;\
		padding-left: 30px;\
		padding-top: 5px;\
	}\
	#ctl00_cphMaster_lnkbtnSearch {\
		width: 205px !important;\
		text-align: center;\
		font-size: 14px;\
		padding-left: 0;\
	}\
	#slideshowmain {\
		margin-left: 129px;\
		margin-bottom: 44px;\
	}\
	.primary-wrapper {\
		overflow: visible;\
	}\
	#AWA-value-prop {\
		border: solid 1px #D1AAC7;\
		width: 571px;\
		height: 315px;\
  		font-size: 14px;\
  		margin-bottom: 5px;\
  		float: left;\
	}\
	#AWA-value-prop img {\
		margin: 0 auto;\
		display: block;\
		width: 458px;\
	}\
	#AWA-reviews {\
		border: solid 1px #D1AAC7;\
		float: right;\
		width: 367px;\
		font-size: 12px;\
		padding: 15px;\
		padding-top: 10px;\
		height: 290px;\
	}\
	#AWA-reviews h2 {\
		font-size: 16px;\
		padding-bottom: 5px;\
	}\
	.AWA-review {\
		margin-bottom: 12px;\
	}\
	.AWA-review-title {\
		font-weight: bold;\
	}\
	.AWA-trust-pilot img {\
		background-color: black;\
		padding: 1px;\
	}';

	// CSS for second gift guide
	exp.css2 = '\
	.AWA_HPC_gift_guide {\
		float: none;\
		width: 956px;\
		height: 137px;\
		margin-bottom: 5px;\
		background: #FEEBF9;\
		border-right: 1px solid #d1aac7;\
		border-bottom: 1px solid #d1aac7;\
		border-left: 1px solid #d1aac7;\
	}\
	.AWA_HPC_gift_guide_title {\
		background: #A04D8D;\
		height: 40px;\
		width: 957px;\
	}\
	.AWA_HPC_gift_guide_title h2 {\
		color: white;\
		font-size: 25px;\
		padding-left: 30px;\
		padding-top: 5px;\
	}\
	.AWA_HPC_gift_guide label {\
		font-size: 18px;\
		margin-left: 62px;\
	}\
	.AWA_HPC_gift_guide_col {\
		padding-top: 17px;\
	}\
	#AWA-sub {\
		width: 186px;\
		margin: 0 auto;\
		margin-top: 20px;\
	}\
	#AWA_HPC_gift_guide_submit {\
		background: #AA28F5;\
		color: white;\
		font-family: Verdana, Geneva, sans-serif;\
		padding: 10px;\
		font-weight: bold;\
		width: 205px;\
		text-align: center;\
		font-size: 14px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    
	    $('head').append('<style type="text/css">'+this.css2+'</style>');

		// This function waits till a function is available, then runs a callback function
		exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
		    timeout = timeout || 20000;
		    keepAlive = keepAlive || false;
		    var intervalTime = 50,
		        maxAttempts = timeout / intervalTime,
		        attempts = 0,
		        interval = setInterval(function() {
		            if ($.isFunction(func)) {
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

		function mobileHomeGiftFinder() {
			// Change header
    		$("#ctl00_dvMobileGiftFinderHeader").text("Find a gift for a child aged");
    		$(".mobile-gift-finder-header").attr('style', 'background: #922C83; font-size: 1.5em');
    		$("#ctl00_dvMobileGiftFinder").find(".block").last().hide();

    		// Format checkboxes
    		$("#ctl00_dvMobileGiftFinder").find('strong').hide();
    		$("#ctl00_dvMobileGiftFinder").find(".block").first().attr("style", "width: 100%");
    		$(".mobile-gift-finder .checkbox").attr("style", "width: 163px");
    		$(".mobile-gift-finder label").attr("style", "font-size: 17px; font-weight: bold;");

    		// Style button
    		$(".mobile-gift-finder-button a").attr('style', 'background: #AA28F5; font-size: 14px; width: 168px;');
    		$(".mobile-gift-finder-button").attr('style', 'margin-top: 0;');

    		// Style container
    		$(".mobile-gift-finder .container").attr("style", "height: 66px; margin-top: 0");
    		$(".mobile-gift-finder").attr("style", "height: 118px;");

			// Add value proposition
			$(".mobile-gift-finder").after(exp.vars.valueProp);

			// Add reviews
			$('#AWA-value-prop').after(exp.vars.reviews);

			// Remove slider image
			$('#slideshowmain').hide();
			$("#ctl00_cphMaster_dvMobilePanel").hide();

			// Move shipping & payment banners up to the top
			$(".header").after($('#ctl00_cphMaster_vsNewsLetterSignUp'), $("#ctl00_cphMaster_imgBanner1"), $("#ctl00_cphMaster_imgBanner2"));
		}

	    // Move gift guide under naviation menu
	    if (window.location.pathname == "/") {

	    	// Mobile Gift Finder found
	    	if ($("#ctl00_dvMobileGiftFinder").length) {
	    		exp.log("Site using mobile gift finder");
	    		mobileHomeGiftFinder();
	    		$('head').append('<style type="text/css">'+this.css+'</style>');
	    	} 
	    	// Site loaded on mobile but didn't insert mobile gift finder
	    	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	    		exp.log("Site loaded on mobile but didn't insert mobile gift finder - exiting");
	    		return;
	    	}
	    	// Desktop home
	    	else {
	    		exp.log("Using homepage gift finder");
		    	// Append style here since it could after the existing gift finder in the search
		    	$('head').append('<style type="text/css">'+this.css+'</style>');

		    	// Use existing gift guide
		    	$('.primary-wrapper').prepend($('.gift-finder'));

			    // Remove old gift guide header
			    $('.gift-finder-header').remove();

			    // Remove unused inputs
				$('.gift-finder li:nth-child(1), .gift-finder li:nth-child(2), .gift-finder li:nth-child(4), .gift-finder li:nth-child(5), .gift-finder li:nth-child(6), .gift-finder li:nth-child(7)').remove()
				
				// Format search button
				$('.gift-finder').find('.submit-button').text("Find the perfect gift");
				$('.gift-finder').find('.submit-button').attr('style', 'background: #AA28F5; width: 137px;');

				// Add new header to gift guide
				$('.gift-finder').before("<div id='AWA-header'><h1>Find a gift for a child aged</h1></div>");

				// Add value proposition
				$('.gift-finder').after(exp.vars.valueProp);

				// Add reviews
				$('#AWA-value-prop').after(exp.vars.reviews);

				// Remove slider image
				$('#slideshowmain').remove();
	    	}
	    } else {
	    	// Use CG gift guide since using AJAX to pull in the existing will cause the forms to not submit properly
			
			// Sometimes .main_internal_full_box wouldn't be present but .main_internal_full_box would be. Use whatever is present
			if ($('.main_internal_box').length) {
				$('.main_internal_box').prepend(exp.vars.new_gift_guide);
			} else if ($('.main_internal_full_box').length) {
				$('.main_internal_full_box').prepend(exp.vars.new_gift_guide);
			}
			
			// Hide skill row
			$('.AWA_HPC_gift_guide_col').last().hide()
			// Remove santa hat
			$('.AWA_HPC_gift_guide_title').find('img').remove();

		    /* ---- BORROWED FROM CG ---- */
			// When the gift guide button is pressed, we need to change the form's target
			// before submitting it. Turns out this isn't simple because ASP.Net reasons.
			// First thing to do is to get a bunch of data from the home page, and set up
			// a custom form submit function which changes the form data before submitting.
		    $.get('/default.aspx', function(home_page_data){
		        var gg_viewstate          = /<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.+?)" \/>/.exec(home_page_data)[1],
		            gg_viewstategenerator = /<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="(.+?)" \/>/.exec(home_page_data)[1],
		            gg_eventvalidation    = /<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.+?)" \/>/.exec(home_page_data)[1];

		        theForm.submitGiftGuide = function(){
		            theForm.action = '/default.aspx';
		            theForm.__VIEWSTATE.value          = gg_viewstate;
		            theForm.__VIEWSTATEGENERATOR.value = gg_viewstategenerator;
		            theForm.__EVENTVALIDATION.value    = gg_eventvalidation;
		            theForm.__EVENTTARGET.value        = 'ctl00$cphMaster$lnkbtnSearch';
		            theForm.__EVENTARGUMENT.value      = '';
		            theForm.submit();
		        };
		    });

		    // When the gift guide button is pressed, submit the form's custom submit
		    // function - to make the POST actually work.
		    $('#AWA_HPC_gift_guide_submit').on('click', function(e){
		        e.preventDefault();
		        exp.func.waitForFunction(theForm.submitGiftGuide, function(){
		            theForm.submitGiftGuide();
		        });
		    });
	    }

	};

	// Run the experiment
	setTimeout(function() {
		exp.init();
	}, 1000)


	

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
