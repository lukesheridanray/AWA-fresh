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
	exp.log('Course Selection v13');

	
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	//exp.condition = $('.unique-selector');
	//exp.condition = $('.row.homepage-hero');

	// Check for a condition and return false if it has not been met
	// if(exp.condition && !exp.condition.length) {
	//     exp.log('Course Selection failed a condition');
	//     return false;
	// }

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		heading: 	"<h1>Food Hygiene Level 1, 2 or 3 - Start Learning Now</h1>\
					<h2 class='AWA-heading-text'>High quality certification can be used to show compliance with training requirements</h2>\
					<h2 class='AWA-heading-text'>FREE UK delivery and FREE instant download</h2>\
					<h2 class='AWA-heading-text'>Team discounts and easy staff management - <a href='#' id='AWA-learn-more'>Learn more</a>.</h2>\
					<h2 class='AWA-heading-text' id='AWA-start-online'>Start online now and complete at your own pace</h2>\
					",
		bullets: 	"<li><i class='icon-li icon-ok-sign'></i>All courses help you to meet UK & EU legal requirements</li>\
					<li><i class='icon-li icon-ok-sign'></i>All Food Hygiene certificates are accepted by your local authority</li>\
					<li><i class='icon-li icon-ok-sign'></i>Environmental Health Officers have independently reviewed the course content and online learning style</li>\
					<li><i class='icon-li icon-ok-sign'></i>Complete your training in approximately 2 hours or at your own pace</li>",
		level2: 	"<div class='product-price'>\
						£20 +VAT\
                    </div>\
                    <p>\
						This course is right for you if... you work in the food industry, in a setting where food is cooked, prepared or handled.\
					</p>\
					<p>\
						Take this course and meet your legal training requirements.\
					</p>\
					<p>\
						This course is sometimes referred to as the Basic Food Hygiene Certificate.\
					</p>\
					<p>\
						Level 2 Food Hygiene Safety courses are available for:\
					</p>\
 					<ul>\
 						<li><a href='#' class='AWA-mini-link' id='AWA-catering'>Catering</a></li>\
 						<li><a href='#' class='AWA-mini-link' id='AWA-retail'>Retail</a></li>\
 						<li><a href='#' class='AWA-mini-link' id='AWA-manufacturing'>Manufacturing</a></li>\
 					</ul>\
 					<p>\
 						After you click 'Find out more' below you can choose the Level 2 certificate you need.\
 					</p>",
 		level3: 	"<div class='product-price'>\
						£125 +VAT\
                    </div>\
                    <p>\
						This course is right for you if... you work in the food industry and you are a supervisor, manager or if you are responsible for developing and controlling food safety management systems.\
					</p>\
					<p>\
						Take this course and meet your legal training requirements.\
					</p>\
					<p>\
						This course is sometimes referred to as the Intermediate Food Hygiene Certificate.\
					</p>",
		level1: 	"<div class='product-price'>\
						£15 +VAT\
                    </div>\
                    <p>\
						This course is right for you if... you work in the food industry, but are not directly involved in the preparation or handling of high-risk food, or who only handle wrapped or pre-packaged food. E.g:\
					</p>\
					<p>\
						Front of house, Checkout, Bar, Kitchen and anywhere food is served\
					</p>",
	learnMoreModal: 	"<div id='AWA-learn-more-modal'>\
							<img id='AWA-close' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/de7c8c3a5770353ebc6658f47326fee0_x.jpg'>\
							<img id='AWA-close-dark' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/53006a2e5d1ec95dd250eeb5e1f8cb2c_x-dark.jpg'>\
							<h2 style='clear: both;'>Discounts for bulk/team orders</h2>\
							<ul class='AWA-lm-list icons-ul'>\
								<li><i class='icon-li icon-ok-sign'></i>Easy team management</li>\
								<li><i class='icon-li icon-ok-sign'></i>Monitor team progress</li>\
								<li><i class='icon-li icon-ok-sign'></i>No time limit for using courses</li>\
								<li><i class='icon-li icon-ok-sign'></i>Take advantage of our bulk-buy discounts:</li>\
							</ul>\
							<p>Discounts applied AUTOMATICALLY at checkout</p>\
							<h2>Prefer invoice payment?</h2>\
							<ul class='AWA-lm-list icons-ul'>\
								<li><i class='icon-li icon-ok-sign'></i>Invoice payments are available in checkout when you order 5 or more courses.</li>\
							</ul>\
							<p>Call us on 0333 043 3461 to discuss bulk orders, invoice options or to order by phone</p>\
         				</div>",
        level2Modal: 	"<div id='AWA-level2'>\
        					<img id='AWA-close-l2' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/de7c8c3a5770353ebc6658f47326fee0_x.jpg'>\
        					<div class='AWA-level-row' style='clear: both;'>\
	        					<div class='AWA-level-box'>\
	        						<h2>Level 2 Food Safety & Hygiene for Catering</h2>\
	        						<p>\
	        							Most people in the food industry fall under this category. This is for you if you are a food handler who prepares and serves food directly to the consumer.\
	        						</p>\
	        					</div>\
	        					<div class='AWA-level-button'>\
	        						<a class='btn btn-large btn-green' href='#' id='AWA-catering-link'>Buy Now »</a>\
	        					</div>\
	        				</div>\
        					<div class='AWA-level-row'>\
	        					<div class='AWA-level-box'>\
	        						<h2>Level 2 Food Safety & Hygiene for Retail</h2>\
	        						<p>\
	        							This is for you if you are a food handler who sells food that is not necessarily consumed straight away.\
	        						</p>\
	        					</div>\
	        					<div class='AWA-level-button'>\
	        						<a class='btn btn-large btn-green' href='#' id='AWA-retail-link'>Buy Now »</a>\
	        					</div>\
	        				</div>\
        					<div class='AWA-level-row'>\
	        					<div class='AWA-level-box'>\
	        						<h2>Level 2 Food Safety & Hygiene for Manufacturing</h2>\
	        						<p>\
	        							This is for you if you are a food handler who works in food assembly, processing, packing and storage.\
	        						</p>\
	        					</div>\
	        					<div class='AWA-level-button'>\
	        						<a class='btn btn-large btn-green' href='#' id='AWA-manufacturing-link'>Buy Now »</a>\
	        					</div>\
	        				</div>\
        				</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css =  '\
		.AWA-heading-text {\
			margin-top: 0 !important;\
			padding: 0 !important;\
		}\
		.food-hygiene-reasons .icons-ul {\
			margin-left: 0;\
		}\
		.col-highlighted .product-desc {\
			font-size: 14px;\
		}\
		#AWA-level2, #AWA-level3, #AWA-learn-more-modal {\
			display: none;\
			position: fixed;\
			width: 560px;\
			margin-left: auto;\
			margin-right: auto;\
			z-index: 200;\
			padding: 15px 25px;\
			background-color: white;\
			padding-bottom: 35px;\
			top: 50%;\
			left: 50%;\
			transform: translate(-50%, -50%);\
			-webkit-transform: translate(-50%, -50%);\
			-ms-transform: translate(-50%, -50%);\
			padding-bottom: 15px;\
		}\
		#AWA-close, #AWA-close-dark, #AWA-close-l2, #AWA-close-l3 {\
			display: block;\
			float: right;\
			cursor: pointer;\
		}\
		#AWA-close-dark {\
			display: none;\
		}\
		.AWA-level-box h2 {\
			margin-top: 15px;\
		}\
		.hero-header {\
			margin-top: 0;\
		}\
		#AWA-start-online {\
			padding-bottom: 15px !important;\
		}\
		.col-highlighted-side .product-desc {\
    		line-height: 1.4em;\
		}\
		.AWA-l2 .product-price {\
			font-size: 2em;\
		}\
		.AWA-l2.product-desc {\
			font-size: 15px;\
		}\
		.AWA-l2 ul {\
			margin-bottom: 25px;\
		}\
		.AWA-lm-list {\
			padding-left: 0px;\
		}\
	';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// This function waits till a condition returns true
	exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
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

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+exp.css+'</style>');

	    // Add class to Level 2 for styling ease
	    $(".product-desc").first().addClass("AWA-l2");

	    $(".hero-header").html(exp.vars.heading);
	    $(".row.food-hygiene-reasons.no-margin ul").html(exp.vars.bullets);
	    $(".product-title:contains('Level 2')").parent().find(".product-desc").html(exp.vars.level2);
	    $(".product-title:contains('Level 3')").parent().find(".product-desc").html(exp.vars.level3);
	    $(".product-title:contains('Level 1')").parent().find(".product-desc").html(exp.vars.level1);

	    // Insert learn more modal
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
		$('body').append(exp.vars.learnMoreModal);
		$('body').append(exp.vars.level2Modal);
		//$('body').append(exp.vars.level3Modal);
		//$('body').append(exp.vars.certificate);
		$('#__msg_overlay').hide();
		$(".AWA-level-row").hide();


		$("#AWA-learn-more, .AWA-bulk, .training a[href='../training-teams/']").click(function(e) {
			e.preventDefault();
			$('#AWA-learn-more-modal').show();
			$('#__msg_overlay').show();
		});
		$("#AWA-close").click(function(e) {
			e.preventDefault();
			$('#AWA-learn-more-modal').hide();
			$('#__msg_overlay').hide();
		});

		// Level 2 Buy Now event handler
		$("#AWA-catering").click(function(e) {
			e.preventDefault();
			$('#AWA-level2').show();
			$(".AWA-level-row").eq(0).show();
			$('#__msg_overlay').show();
		});
		$("#AWA-retail").click(function(e) {
			e.preventDefault();
			$('#AWA-level2').show();
			$(".AWA-level-row").eq(1).show();
			$('#__msg_overlay').show();
		});
		$("#AWA-manufacturing").click(function(e) {
			e.preventDefault();
			$('#AWA-level2').show();
			$(".AWA-level-row").eq(2).show();
			$('#__msg_overlay').show();
		});
		$("#AWA-close-l2").click(function(e) {
			e.preventDefault();
			$('#AWA-level2').hide();
			$(".AWA-level-row").hide();
			$('#__msg_overlay').hide();
		});


		// "Buy Now" click event handlers
		$("#AWA-catering-link").click(function(e) {
			e.preventDefault();
			$("#ContentPlaceHolder1_btn_l2_catering_btn_buynow")[0].click();
		});
		$("#AWA-retail-link").click(function(e) {
			e.preventDefault();
			$("#ContentPlaceHolder1_btn_l2_retail_btn_buynow")[0].click();
		});
		$("#AWA-manufacturing-link").click(function(e) {
			e.preventDefault();
			$("#ContentPlaceHolder1_btn_l2_manufacturing_btn_buynow")[0].click();
		});

	};

	// Run the experiment
	exp.func.waitFor(function(){return $("#A6").length;}, exp.init);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

