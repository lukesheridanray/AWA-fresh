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
	exp.log('Course Selection v4');

	
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
		headerMiddle: 	"<div id='AWA-header-middle'>\
							<p>Legally Recognised Certificate</p>\
							<p>FREE UK delivery and FREE instant download</p>\
							<p>Team discounts and easy staff management - <a id='AWA-learn-more' href='#'>Learn more.</a></p>\
						</div>",
		headerBottom: 	"<h2 id='AWA-header-bottom'>Start online right now. No time limit - complete at your own pace</h2>",
		logoRow: 	"<div id='AWA-logos'>\
						<div id='AWA-logos-left'>\
							<p class='AWA-logo-text'>\
								As used by these top firms to train their teams:\
							</p>\
							<img id='AWA-logo-image' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/10232786c7ae98275370bbf0c8026f92_logos.jpg'>\
						</div>\
						<div id='AWA-logos-right'>\
							<p class='AWA-logo-text'>\
								Approved by Local Authorities and EHO\
							</p>\
							<a href='../food-safety/eho-approved-training.aspx'><img id='AWA-approval-image' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/f7e8e91e03ff1136137550697149e33e_approval.jpg'></a>\
						</div>\
				</div>",
		choose: "<div id='AWA-choose' class='row'>\
					<div class='col-md-12'>\
						<h2>Choose your course below</h2>\
					</div>\
				</div>",
		courses: 	"<div id='AWA-courses' class='row'>\
						<div class='col-md-12'>\
							<div class='col-md-4 AWA-course'>\
								<div class='AWA-product-title'>\
									Level 1 Food Safety\
								</div>\
								<div class='AWA-product-desc'>\
									<p>\
										<span class='AWA-underline'>This course is right for you if...</span> you work in the food industry, but are not directly involved in the preparation or handling of high-risk food, or who only handle wrapped or pre-packaed food. E.g: \
									</p>\
									<ul>\
										<li>Front of house</li>\
										<li>Checkout</li>\
										<li>Bar</li>\
										<li>Kitchen</li>\
										<li>Anywhere food is served</li>\
									</ul>\
									<p class='AWA-course-note'>\
										This is the only Level 1 Food Safety Awareness Course for you to choose.\
									</p>\
								</div>\
								<div class='AWA-m-button-section'>\
									<a href='#' class='AWA-bulk'>Bulk / team Discounts</a>\
									<p class='AWA-price'>&pound;15 + VAT</p>\
									<a class='btn btn-large btn-green AWA-buy-button' href='#'>Buy Now »</a>\
									<p class='AWA-or'>OR</p>\
									<a class='btn btn-large btn-orange AWA-find-out-more' href='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-1.aspx'>Find out more »</a>\
									</div>\
							</div>\
							<div class='col-md-4 AWA-course'>\
								<div class='AWA-product-title'>\
									Level 2 Food Hygiene & Safety\
								</div>\
								<div class='AWA-product-desc'>\
									<p>\
										<span class='AWA-underline'>This course is right for you if...</span> you work in the food industry, in a setting where food is cooked, prepared or handled.\
									</p>\
									<p>\
										You will fully meet all your legal requirements when you take this course.\
									</p>\
									<p>\
										This course is sometimes referred to as the <strong>Basic Food Hygiene Certificate</strong>.\
									</p>\
									<p class='AWA-course-note AWA-short'>\
										Level 2 Food Hygiene Safety courses are available for:\
									</p>\
									<ul class='AWA-no-bullet'>\
										<li><a href='#'>Catering</a></li>\
										<li><a href='#'>Retail</a></li>\
										<li><a href='#'>Manufacture</a></li>\
									</ul>\
									<p class='AWA-course-note'>\
										After you click \'Buy Now\' below you can choose the Level 2 certificate you need.\
									</p>\
								</div>\
								<div class='AWA-m-button-section'>\
									<a href='#' class='AWA-bulk'>Bulk / team Discounts</a>\
									<p class='AWA-price'>&pound;20 + VAT</p>\
									<a class='btn btn-large btn-green AWA-buy-button AWA-trigger-l2' href='#'>Buy Now »</a>\
									<p class='AWA-or'>OR</p>\
									<p class='AWA-extra'>\
										You can choose Catering, Retail, or Manufacturing after you click on Buy Now\
									</p>\
									<a class='btn btn-large btn-orange AWA-find-out-more' href='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-2-version.aspx'>Find out more »</a>\
								</div>\
							</div>\
							<div class='col-md-4 AWA-course'>\
								<div class='AWA-product-title'>\
									Level 3 Supervising\
								</div>\
								<div class='AWA-product-desc'>\
									<p>\
										<span class='AWA-underline'>This course is right for you if...</span> you work in the food industry and you are a supervisor, manager or if you are responsible for developing and controlling food safety management systems.\
									</p>\
									<p>\
										You will fully meet all your legal requirements when you take this course.\
									</p>\
									<p>\
										This course is sometimes referred to as the <strong>Intermediate Food Hygiene Certificate</strong>.\
									</p>\
									<p class='AWA-course-note AWA-short'>\
										Level 3 Food Hygiene Safety courses are available for:\
									</p>\
									<ul class='AWA-no-bullet'>\
										<li><a href='#'>Catering</a></li>\
										<li><a href='#'>Retail</a></li>\
										<li><a href='#'>Manufacture</a></li>\
									</ul>\
									<p class='AWA-course-note'>\
										After you click \'Buy Now\' below you can choose the Level 3 certificate you need.\
									</p>\
								</div>\
								<div class='AWA-m-button-section'>\
									<a href='#' class='AWA-bulk'>Bulk / team Discounts</a>\
									<p class='AWA-price'>&pound;125 + VAT</p>\
									<a class='btn btn-large btn-green AWA-buy-button AWA-trigger-l3' href='#'>Buy Now »</a>\
									<p class='AWA-or'>OR</p>\
									<p class='AWA-extra'>\
										You can choose Catering, Retail, or Manufacturing after you click on Buy Now\
									</p>\
									<a class='btn btn-large btn-orange AWA-find-out-more' href='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-3-version.aspx'>Find out more »</a>\
								</div>\
							</div>\
						</div>\
					</div>",
		divider: 	"<div id='AWA-divider'>\
						FREE UK delivery and FREE instant download of your legally recognised certificate. <a id='AWA-sample' href='#'>See a sample certificate</a>\
					</div>",
		buttonSection: 	"<div id='AWA-button-section' class='row'>\
							<div class='col-md-12'>\
								<div class='col-md-4 AWA-button-col'>\
									<a href='#' class='AWA-bulk'>Bulk / team Discounts</a>\
									<p class='AWA-price'>&pound;15 + VAT</p>\
									<a class='btn btn-large btn-green AWA-buy-button' href='#'>Buy Now »</a>\
									<p class='AWA-or'>OR</p>\
									<a class='btn btn-large btn-orange AWA-find-out-more' href='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-1.aspx'>Find out more »</a>\
								</div>\
								<div class='col-md-4 AWA-button-col'>\
									<a href='#' class='AWA-bulk'>Bulk / team Discounts</a>\
									<p class='AWA-price'>&pound;20 + VAT</p>\
									<a class='btn btn-large btn-green AWA-buy-button AWA-trigger-l2' href='#'>Buy Now »</a>\
									<p class='AWA-or'>OR</p>\
									<p class='AWA-extra'>\
										You can choose Catering, Retail, or Manufacturing after you click on Buy Now\
									</p>\
									<a class='btn btn-large btn-orange AWA-find-out-more' href='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-2-version.aspx'>Find out more »</a>\
								</div>\
								<div class='col-md-4 AWA-button-col'>\
									<a href='#' class='AWA-bulk'>Bulk / team Discounts</a>\
									<p class='AWA-price'>&pound;125 + VAT</p>\
									<a class='btn btn-large btn-green AWA-buy-button AWA-trigger-l3' href='#'>Buy Now »</a>\
									<p class='AWA-or'>OR</p>\
									<p class='AWA-extra'>\
										You can choose Catering, Retail, or Manufacturing after you click on Buy Now\
									</p>\
									<a class='btn btn-large btn-orange AWA-find-out-more' href='http://www.highspeedtraining.co.uk/food-hygiene/choose-level-3-version.aspx'>Find out more »</a>\
								</div>\
							</div>\
						</div>",
		tickMarks: 	"<div id='AWA-tick-marks' class='row'>\
						<div class='col-md-12'>\
							<ul class='icons-ul'>\
								<li><i class='icon-li icon-ok-sign'></i>Certificates for each course meet all UK & EU legal requirements</li>\
								<li><i class='icon-li icon-ok-sign'></i>All Food Hygiene certificates are recognised by your local authority</li>\
								<li><i class='icon-li icon-ok-sign'></i>The Environmental Health Agency has audited and approved course content and online learning style</li>\
								<li><i class='icon-li icon-ok-sign'></i>2015 compliance and standards checked by qualified Environmental Health Officers</li>\
								<li><i class='icon-li icon-ok-sign'></i>Be qualified in 2 hours or complete at your own pace</li>\
							</ul>\
						</div>\
					</div>",
		learnMoreModal: 	"<div id='AWA-learn-more-modal'>\
								<img id='AWA-close' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/de7c8c3a5770353ebc6658f47326fee0_x.jpg'>\
								<img id='AWA-close-dark' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/53006a2e5d1ec95dd250eeb5e1f8cb2c_x-dark.jpg'>\
								<h2 style='clear: both;'>Discounts for bulk/team orders</h2>\
								<ul class='AWA-lm-list icons-ul'>\
									<li><i class='icon-li icon-ok-sign'></i>Easy team management</li>\
									<li><i class='icon-li icon-ok-sign'></i>Monitor team progress</li>\
									<li><i class='icon-li icon-ok-sign'></i>No time limits</li>\
									<li><i class='icon-li icon-ok-sign'></i>Take advantage of our bulk-buy discounts:</li>\
								</ul>\
								<p>Discounts applied AUTOMATICALLY at checkout</p>\
								<h2>Prefer invoice payment?</h2>\
								<ul class='AWA-lm-list icons-ul'>\
									<li><i class='icon-li icon-ok-sign'></i>Invoice payments are available in checkout when you order 5 or more courses.</li>\
								</ul>\
								<p>Call us on 0333 006 7000 to discuss bulk orders, invoice options or to order by phone</p>\
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
	        						<a class='btn btn-large btn-green' href='#'>Buy Now »</a>\
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
	        						<a class='btn btn-large btn-green' href='#'>Buy Now »</a>\
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
	        						<a class='btn btn-large btn-green' href='#'>Buy Now »</a>\
	        					</div>\
	        				</div>\
        				</div>",
       	level3Modal: 	"<div id='AWA-level3'>\
        					<img id='AWA-close-l3' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/de7c8c3a5770353ebc6658f47326fee0_x.jpg'>\
        					<div class='AWA-level-row' style='clear: both;'>\
	        					<div class='AWA-level-box'>\
	        						<h2>Level 3 Supervising Food Safety for Catering</h2>\
	        						<p>\
	        							This is for you if you are a supervisor and/or manager in a food business where food is prepared and served directly to the consumer.\
	        						</p>\
	        					</div>\
	        					<div class='AWA-level-button'>\
	        						<a class='btn btn-large btn-green' href='#'>Buy Now »</a>\
	        					</div>\
	        				</div>\
        					<div class='AWA-level-row'>\
	        					<div class='AWA-level-box'>\
	        						<h2>Level 3 Food Safety Supervision for Retail</h2>\
	        						<p>\
	        							This is for you if you are a supervisor and/or manager in a food business where packaged food is sold that is not usually consumed straight away.\
	        						</p>\
	        					</div>\
	        					<div class='AWA-level-button'>\
	        						<a class='btn btn-large btn-green' href='#'>Buy Now »</a>\
	        					</div>\
	        				</div>\
        					<div class='AWA-level-row'>\
	        					<div class='AWA-level-box'>\
	        						<h2>Level 3 Food Safety Supervision for Manufacturing</h2>\
	        						<p>\
	        							This is for you if you are a supervisor and/or manager in a food business that deals with food assembly, processing, packing, and storage.\
	        						</p>\
	        					</div>\
	        					<div class='AWA-level-button'>\
	        						<a class='btn btn-large btn-green' href='#'>Buy Now »</a>\
	        					</div>\
	        				</div>\
       					</div>",
       	certificate: 	"<div id='AWA-certificate'>\
       						<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/c179f27eaeb2251bf6144059c019ac3a_level-3-food-catering4-800.jpg'>\
       					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-header-middle {\
			color: #fff;\
			background-color: rgba(0,0,0,.5);\
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";\
			padding: .9em;\
			margin-top: 15px;\
		}\
		#AWA-header-middle p {\
			margin: 0;\
			color: white;\
			padding: .9em;\
			font-size: 1.2em;\
			padding: 0;\
		}\
		#AWA-header-bottom {\
			font-weight: normal;\
		}\
		#AWA-logos-left {\
			width: 65%;\
			float: left;\
			display: block;\
		}\
		#AWA-logo-image {\
			width: 100%;\
		}\
		#AWA-logos-right {\
			float: right;\
			width: 26%;\
		}\
		#AWA-approval-image {\
			width: 80%;\
			float: right;\
		}\
		.AWA-logo-text {\
			text-align: center;\
			font-weight: bold;\
		}\
		#AWA-choose {\
    		text-align: center;\
    		margin-top: 16px;\
    		margin-bottom: 16px\
		}\
		.AWA-course {\
			color: #777;\
			border: 1px solid #d3d3d3;\
			background: #f2f2f2;\
			padding: 2em;\
		}\
		.AWA-product-title {\
			font-weight: 700;\
			font-size: 1.4em;\
			text-align: center;\
		}\
		.AWA-underline {\
			font-weight: bold;\
			text-decoration: underline;\
		}\
		.AWA-course-note {\
			font-size: .85em;\
			font-weight: bold;\
		}\
		.AWA-no-bullet {\
			margin: 0;\
			list-style-type: none;\
			padding: 0;\
			font-size: .85em;\
		}\
		.AWA-short {\
			margin-bottom: 4px;\
		}\
		#AWA-divider {\
			background-color: #F6971C;\
			color: white;\
			text-align: center;\
			padding: 10px;\
		}\
		#AWA-divider a {\
			color: black;\
			text-decoration: underline;\
		}\
		#AWA-divider a:hover {\
			text-decoration: none;\
		}\
		.AWA-button-col {\
			color: #777;\
			border: 1px solid #d3d3d3;\
			background: #f2f2f2;\
			padding: 1em 2em;\
		}\
		.AWA-bulk {\
			display: block;\
			text-align: center;\
		}\
		.AWA-price {\
			margin: 10px;\
			text-align: center;\
			font-weight: bold;\
		}\
		.AWA-buy-button {\
			margin: 0;\
			display: block;\
		}\
		.AWA-or {\
			margin-top: 30px;\
			text-align: center;\
			font-size: .9em;\
			font-weight: bold;\
		}\
		.AWA-find-out-more {\
			display: block;\
			font-size: 14px;\
			margin: 0 auto;\
			padding: 10px 10px;\
		}\
		.AWA-extra {\
			margin: 0 0 10px 0;\
			font-size: .85em;\
			font-weight: bold;\
			text-align: center;\
		}\
		.icon-ok-sign {\
			color: #5cb85c;\
		}\
		#AWA-tick-marks .icons-ul {\
			margin-left: 0;\
			padding: 0;\
		}\
		#AWA-tick-marks .icons-ul li {\
			text-align: center;\
		}\
		#AWA-tick-marks .icons-ul .icon-li {\
			position: static;\
			margin-right: 8px;\
		}\
		#AWA-learn-more-modal {\
			display: none;\
			position: fixed;\
			width: 500px;\
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
		#AWA-level2, #AWA-level3 {\
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
		.AWA-level-box {\
			width: 65%;\
			float: left;\
		}\
		.AWA-level-button {\
			width: 30%;\
			float: right;\
		}\
		.AWA-level-button .btn-green {\
			float: right;\
		}\
		#AWA-close-l2, #AWA-close-l3 {\
			margin-bottom: 14px;\
		}\
		@media (min-width: 992px) {\
			.AWA-course {\
				min-height: 531px;\
			}\
			.AWA-find-out-more {\
				width: 150px;\
			}\
			.AWA-button-col {\
				min-height: 293px;\
			}\
			.AWA-m-button-section {\
				display: none;\
			}\
		}\
		@media (max-width: 991px) {\
			.AWA-button-col {\
				display: none;\
			}\
		}\
		@media (min-width: 1200px) {\
			.AWA-course {\
				min-height: 436px;\
			}\
		}\
		@media (max-width: 550px) {\
			#AWA-learn-more-modal, #AWA-level2, #AWA-level3 {\
				width: 90%;\
			}\
			#AWA-learn-more-modal .AWA-lm-list {\
				margin-left: 0;\
			}\
			#AWA-level2, #AWA-level3 {\
				max-height: 385px;\
			    overflow-y: scroll;\
			    overflow-x: hidden;\
			}\
			.AWA-level-button {\
				float: none;\
				width: 100%;\
			}\
			.AWA-level-button .btn-green {\
				float: none;\
				width: 100%;\
				margin-bottom: 30px;\
			}\
			.AWA-level-box {\
				width: 100%;\
				float: none;\
			}\
		}\
		#AWA-certificate {\
			margin: 0 auto;\
			display: none;\
			position: fixed;\
			z-index: 200;\
			top: 50%;\
			left: 50%;\
			transform: translate(-50%, -50%);\
			-webkit-transform: translate(-50%, -50%);\
			-ms-transform: translate(-50%, -50%);\
			width: 90%;\
		}\
		#AWA-certificate img {\
			width: 100%;\
		}\
		@media (min-width: 768px) {\
			#AWA-certificate {\
				width: 750px;\
			}\
		}		@media (min-width: 992px) {\
			#AWA-certificate {\
				width: 970px;\
			}\
		}\
		@media (min-width: 1200px) {\
			#AWA-certificate {\
				width: 1170px;\
			}\
		}';

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

	    // Change main header text
	    $(".hero-header h1").text("FOOD HYGIENE Level 1, 2 or 3 - Get Qualified Now");
	    $(".hero-header h2").hide();
	    $(".hero-header h1").after(exp.vars.headerMiddle);
	    $(".col-lg-12.txt-ctr").hide();
	    $(".col-sm-12.help").hide();
	    $("#AWA-header-middle").after(exp.vars.headerBottom);

	    // Insert logos row
	    $(".row.food-hygiene-reasons.no-margin").before(exp.vars.logoRow);
		$(".row.food-hygiene-reasons").hide();
	    $("#AWA-logos").closest('.row').after(exp.vars.choose);

	    // Insert 3 column grid
	    $("#AWA-choose").after(exp.vars.courses);

	    // Insert divider
	    $("#AWA-courses").after(exp.vars.divider);

	    // Insert buttons section
	    $("#AWA-divider").after(exp.vars.buttonSection);

	    // Insert tick marks
	    $("#AWA-button-section").after(exp.vars.tickMarks);

	    // Hide rest of page, excluding footer
	    $("#AWA-tick-marks").nextUntil($(".clearfix").last()).hide();

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
		$('body').append(exp.vars.level3Modal);
		$('body').append(exp.vars.certificate);
		$('#__msg_overlay').hide();

		$("#AWA-learn-more").click(function(e) {
			e.preventDefault();
			$('#AWA-learn-more-modal').show();
			$('#__msg_overlay').show();
		});
		$("#AWA-close").click(function(e) {
			e.preventDefault();
			$('#AWA-learn-more-modal').hide();
			$('#__msg_overlay').hide();
		});
		// Click offscreen close
		$(document).mouseup(function (e) {
    		var container = $("#AWA-learn-more-modal, #AWA-level2, #AWA-level3");
    		if (!container.is(e.target) // if the target of the click isn't the container...
        		&& container.has(e.target).length === 0) // ... nor a descendant of the container
    		{
				$("#AWA-learn-more-modal").hide();
				$("#AWA-level2").hide();
				$("#AWA-level3").hide();
				$("#AWA-certificate").hide();
				$('#__msg_overlay').hide();
    		}
		});

		// Level 2 Buy Now event handler
		$(".AWA-trigger-l2").click(function(e) {
			e.preventDefault();
			$('#AWA-level2').show();
			$('#__msg_overlay').show();
		});
		$("#AWA-close-l2").click(function(e) {
			e.preventDefault();
			$('#AWA-level2').hide();
			$('#__msg_overlay').hide();
		});

		// Level 3 Buy Now event handler
		$(".AWA-trigger-l3").click(function(e) {
			e.preventDefault();
			$('#AWA-level3').show();
			$('#__msg_overlay').show();
		});
		$("#AWA-close-l3").click(function(e) {
			e.preventDefault();
			$('#AWA-level3').hide();
			$('#__msg_overlay').hide();
		});

		// Learn More/Certificate event handler
		$("#AWA-sample").click(function(e) {
			e.preventDefault();
			$('#AWA-certificate').show();
			$('#__msg_overlay').show();
		});

	};

	// Run the experiment
	exp.func.waitFor(function(){return $("#A6").length;}, exp.init);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

