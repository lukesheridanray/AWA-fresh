//* NOTE - Add href to Umara Z-Trail More Information Link
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('Checkout Crosspromo - v1');

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
    	level2Summary: 	"<div class='row'>\
    						<div id='AWA-fbt'>\
    							<h2>Frequently bought together:</h2>\
    						</div>\
    						<div class='col-sm-6'>\
    							<div class='AWA-course-summary'>\
    								<h3>Level 2 HACCP course</h3>\
    								<p>\
    									Designed to give workers knowledge of the processes needed to maintain food safety in the workplace, enabling organisations to comply with the European Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs.\
    								</p>\
    								<div class='AWA-course-summary-bottom'>\
    									<div class='AWA-course-summary-price'>\
    										&pound;30+ VAT\
    										<br>\
    										<a href='#' id='AWA-l2-more-info'>More info</a>\
    									</div>\
    									<div class='AWA-course-summary-add'>\
    										<label>Quantity:</label>\
											<input class='AWA-input' name='' type='test' value='1' size='3' id=''>\
											<a id='' class='btn btn-green' href='#'>Add to basket »</a>\
    									</div>\
    								</div>\
    							</div>\
    						</div>\
    						<div class='col-sm-6'>\
    							<div class='AWA-course-summary'>\
    								<h3>Level 3 Supervising Food Safety course</h3>\
    								<p id='AWA-p2'>\
    									Designed for managers and supervisors in the catering industry who have responsibility for developing a food safety management (HACCP) plan in their business.\
    								</p>\
    								<div class='AWA-course-summary-bottom'>\
    									<div class='AWA-course-summary-price'>\
    										&pound;125+ VAT\
    										<br>\
    										<a href='#' id='AWA-l3-more-info'>More info</a>\
    									</div>\
    									<div class='AWA-course-summary-add'>\
    										<label>Quantity:</label>\
											<input class='AWA-input' name='' type='test' value='1' size='3' id=''>\
											<a id='' class='btn btn-green' href='#'>Add to basket »</a>\
    									</div>\
    								</div>\
    							</div>\
    						</div>\
    					</div>",
    	modal: 	"<div id='AWA-modal-popup'>\
    				<img id='AWA-close' src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/de7c8c3a5770353ebc6658f47326fee0_x.jpg'>\
    				<div id='AWA-modal-inner'></div>\
    			</div>",
    	level2: "<div>\
    				<h3>Level 2 HACCP course</h3>\
    				<p class='AWA-mp'>\
    					This online Level 2 HACCP training has been designed to give workers in the food industry knowledge of the processes needed to maintain food safety in the workplace, enabling organisations to comply with the European Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs.\
    				</p>\
	   				<p class='AWA-mp'>\
	   					The course outlines each stage of the HACCP food safety management system, raises awareness of food safety hazards and explains the necessary controls needed to prevent contamination of food.\
	    			</p>\
	    			<ul>\
	    				<li>Developed by Health & Safety Professionals</li>\
	    				<li>Accredited by CPD and RoSPA</li>\
						<li>Fully online course and assessment with no time limits</li>\
						<li>Full audio voiceover</li>\
						<li>Approximate duration: 3 hours</li>\
						<li>On completion, certificate is posted the next working day</li>\
	    			</ul>\
	    			<p class='AWA-mp AWA-who-should'>\
	    				Who should take this course\
	    			</p>\
	    			<p class='AWA-mp'>\
	    				This HACCP training provides suitable information for all levels of employees who work in the food industry.\
	    			</p>\
	    			<p class='AWA-mp'>\
	    				Hazard Analysis and Critical Control Point (HACCP) is a formal and systematic, science-based food safety system that is used for managing risks in the food industry. By law, food businesses in the EU are required to implement a food safety management system based on the Codex HACCP principles.\
	    			</p>\
	    			<p class='AWA-certification-approval'>\
	    				LOGOS\
	    			</p>\
    			</div>",
    	level3: "<div>\
    				<h3>Level 3 Food Hygiene & Safety in Catering Training</h3>\
    				<p class='AWA-mp'>\
    					This Level 3 Supervising Food Safety in Catering course is designed for managers and supervisors in the catering industry who have responsibility for developing a food safety management (HACCP) plan in their business.\
    				</p>\
	   				<p class='AWA-mp'>\
	   					The course offers knowledge of basic food hygiene and provides further detail on the controls that can be implemented to ensure that the food handling process is as safe and hygienic as possible.\
	    			</p>\
	    			<ul>\
	    				<li>Matches RSPH and CIEH syllabus</li>\
	    				<li>Meets UK and EU legal requirements for food handlers</li>\
						<li>Accredited by CPD and RoSPA</li>\
						<li>Fully online course and assessment with no time limits</li>\
						<li>Full audio voiceover</li>\
						<li>Approximate duration: 10 hours</li>\
						<li>On completion, certificate is posted the next working day</li>\
	    			</ul>\
	    			<p class='AWA-mp AWA-who-should'>\
	    				Who should take this course\
	    			</p>\
	    			<p class='AWA-mp'>\
						The Level 3 Supervising Food Safety Course is designed for supervisors and food managers who require a broader understanding of food safety control in the catering sector. The course is recommended for anyone responsible for managing people in a food business. It is designed to proved detailed knowledge of food safety principles and practices, through identifying potential hazards to food safety. In providing this knowledge, supervisors and food managers will be able to develop and implement food safety systems appropriate to their workplace.\
	    			</p>\
	    			<p class='AWA-certification-approval'>\
	    				LOGOS\
	    			</p>\
    			</div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
    	#AWA-fbt {\
    		padding: 15px;\
    	}\
    	.AWA-course-summary {\
    		border: solid 1px #D3D3D3;\
    		padding: 10px;\
    		overflow: auto;\
    		margin-bottom: 15px;\
    	}\
    	.AWA-course-summary-price {\
    		width: 35%;\
    		float: left;\
    	}\
    	.AWA-course-summary-add {\
    		width: 65%;\
    		text-align: right;\
    		float: right;\
    	}\
    	.AWA-input {\
    		width: 30px;\
    		height: 30px;\
    		text-align: center;\
    	}\
    	#AWA-modal-popup {\
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
    	#AWA-close {\
    		cursor: pointer;\
    		float: right;\
    	}\
    	.AWA-who-should {\
    		font--weight: bold;\
    	}\
		@media (min-width: 767px) {\
			.AWA-course-summary {\
				height: 257px;\
			}\
			#AWA-p2 {\
				margin-bottom: 34px;\
			}\
		}\
		@media (min-width: 992px) {\
			.AWA-course-summary {\
				height: 205px;\
			}\
			#AWA-p2 {\
				margin-bottom: 34px;\
			}\
		}\
		@media (max-width: 550px) {\
			#AWA-modal-popup {\
				width: 90%;\
				height: 450px;\
				overflow-y: scroll;\
			}\
		}\
    ';


	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
        // Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Remove first column of basket
		$("#removeColumn").hide();
		$(".basket-table").find("tr").find("td:first-child").hide();


		// Insert crosspromo summary boxes
		$("#paymentPanel").closest(".row").after(exp.vars.level2Summary);


		// Change "Continue Shopping" to "Browse More Courses"
		$(".btn-orange:contains('Continue Shopping')").text("Browse more courses");

	    // Insert learn more modal
		$('<div id="__msg_overlay2">').css({
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
		$('body').append(exp.vars.modal);
		$("#__msg_overlay2").hide();


		// Open modals on link click
		$("#AWA-l2-more-info, #AWA-l3-more-info").click(function(e) {
			e.preventDefault();
			$("#__msg_overlay2").show();
			$("#AWA-modal-popup").show();

			var id = $(this).attr("id");

			if (id === "AWA-l2-more-info") {
				$('#AWA-modal-inner').html(exp.vars.level2);
			}

			if (id === "AWA-l3-more-info") {
				$('#AWA-modal-inner').html(exp.vars.level3);
			}
		});

		// Modal close
		$("#AWA-close").click(function(e) {
			e.preventDefault();
			$("#AWA-modal-popup").hide();
			$('#__msg_overlay2').hide();
		});

		// Click offscreen close
		$(document).mouseup(function (e) {
    		var container = $("#AWA-modal-popup");
    		if (!container.is(e.target) // if the target of the click isn't the container...
        		&& container.has(e.target).length === 0) // ... nor a descendant of the container
    		{
				$("#AWA-modal-popup").hide();
				$('#__msg_overlay2').hide();
    		}
		});

	};




    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
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


    exp.waitFor(function() { return $("#lb_UpdateBasket").length }, exp.init, 10000);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
};
var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function () {
            waitForjQuery(time * 2);
        }, time);
    }
};
waitForjQuery(1000);
