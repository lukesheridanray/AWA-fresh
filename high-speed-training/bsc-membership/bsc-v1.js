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
	exp.log('BSC v1');

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

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		bsc: 	"<div class='row'>\
					<div id='AWA-bsc' class='col-md-12'>\
						<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/b1e37bd12191c7e5f4eb55b23c889a60_bsc-large.jpg'>\
					</div>\
				</div>",
		bscProduct: 	"<hr>\
						<h2>We are a member of the British Safety Council</h2>\
						<div class='row' id='AWA-bsc-product'>\
							<div class='col-xs-8 col-sm-6 col-md-6'>\
								<p>\
									The British Safety Council is dedicated to making sure no-one is injured or made ill through work. They are a not-for-profit organisation here solely to help achieve the highest health, safety and environmental standards, protecting staff and businesses.\
								</p>\
								<p>\
									They provide education, guidance and support to companies and individuals. They learn from their global network of health, safety and environmental professionals.\
								</p>\
							</div>\
							<div class='col-xs-4 col-sm-6 col-md-6'>\
								<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/a7b965cb12778954daf9fae73c567fb2_bsc.jpg'>\
							</div>\
						</div>"
	};

    // Styles
    // String containing the CSS for the experiment
	exp.css =  '\
		#AWA-bsc {\
			margin: 100px 0 40px 0;\
		}\
		#AWA-bsc img {\
			width: 100%;\
		}\
		#AWA-bsc-product img {\
			width: 100%;\
			padding-top: 15px;\
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

	    // On Health & Safety page replace button buttons with BSC image
	    if (window.location.pathname == "/health-and-safety/") {
	    	// Hide "Why Train with Us?"
	    	$(".hs-whytrain").first().hide();

	    	// Insert BSC image
	    	$("#improved").html(exp.vars.bsc);

	    	return;
	    }

	    // Add BSC on Health & Safety product pages
	    // Add in BSC div after Certifcation div
	    $("img[src='../assets/images/CPD-logo.gif']").closest(".row").after(exp.vars.bscProduct);

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


	exp.waitFor(function() { return $(".footer").length; }, exp.init, 10000);

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