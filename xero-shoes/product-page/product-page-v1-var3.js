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
    exp.log('Product Page - v1 - var3');

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
        cold: "<div id='AWA-cold'>\
                    <div id='AWA-cold-left'>\
                        <a href='http://xeroshoes.com/shop/facebook/toesox/' target='_blank'><img src='http://xeroshoes.com/wp-content/uploads/2013/01/ToeSox-120x120.png'></a>\
                        <span id='AWA-ts-price'>$15.00</span>\
                    </div>\
                    <div id='AWA-cold-right'>\
                        <h1>Cold outside? Stay warm with your Xero shoes.</h1>\
                        <p>Enjoy the barefoot sensation even when it's chilly outside</p>\
                        <ul>\
                            <li>non-slip grip bottoms</li>\
                            <li>a \"barely there\" fit</li>\
                            <li>machine washable</li>\
                        </ul>\
                        <a href='http://xeroshoes.com/shop/facebook/toesox/' target='_blank'>more info</a>\
                    </div>\
                </div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
	#AWA-cold {\
	    background-color: #eeeeee;\
        padding: 10px;\
        overflow: auto;\
    }\
    #AWA-cold-left {\
        float: left;\
        width: 33%;\
    }\
    #AWA-cold img {\
        border: solid 1px black;\
    }\
    #AWA-cold span {\
        display: block;\
        font-weight: bold;\
        text-align: center;\
        margin-top: 5px;\
    }\
    #AWA-cold-right {\
        float: right;\
        width: 60%;\
    }\
    #AWA-cold h1 {\
        font-size: 13px;\
        font-weight: bold;\
        margin-bottom: 15px;\
    }\
    #AWA-cold a {\
        display: block;\
        text-align: center;\
        text-decoration: underline;\
        font-weight: bold;\
    }\
    #AWA-cold a:hover {\
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
            // Insert toesocks box
            vwo_$(".divider").first().after(exp.vars.cold);

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