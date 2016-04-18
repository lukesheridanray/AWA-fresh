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
var exp = (function(vwo_$) {

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
    exp.log('Product Page - v1 - var2');

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
        durability: "<div id='AWA-durability'>\
	                    <h1>Durability warranty</h1>\
	                    <p>Your shoes come with a <strong>5000 mile warranty</strong>. We expect you won't need it, but it's there for extra peace of mind. <a href='http://xeroshoes.com/warranty/' target='_blank'>more info</a>\
	                    </p>\
	                </div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
	#AWA-durability {\
	    background-color: #eeeeee;\
        padding: 10px;\
    }\
    #AWA-durability h1 {\
        font-size: 13px;\
        font-weight: bold;\
        margin-bottom: 15px;\
    }\
    #AWA-durability a {\
        color: #2d6eaa;\
        text-decoration: underline;\
        font-weight: bold;\
    }\
    #AWA-durability a:hover {\
        color: midnightblue;\
    }';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		vwo_$('head').append('<style type="text/css">'+exp.css+'</style>');

        // The Norton Box area and much of the page has a loading delay
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

        // Hide Norton box
        var callback = function() {
            // Insert durability box
            vwo_$(".divider").first().after(exp.vars.durability);

            // Hide Norton box
            vwo_$(".buysafe-kicker").hide();
        };

        var condition = function() {
            return vwo_$(".divider").length;
        };

        // Call polling functions
        waitFor(condition, callback);

	};


	// Run the experiment
    exp.init();



	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(vwo_$);