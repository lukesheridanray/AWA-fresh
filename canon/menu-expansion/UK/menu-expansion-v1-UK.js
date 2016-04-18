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
    exp.log("Menu Expansion - v1 - UK");

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
        menu:   "<li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/cameras/'>Cameras</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/lenses/'>Lenses</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/camcorders/'>Camcorders</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/printers-faxes/'>Printers & Faxes</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/accessories/'>Accessories</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/binoculars/'>Binoculars</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/scanners/'>Scanners</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/calculators/'>Calculators</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/photo-storage/'>Photo Storage</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/presenter/'>Presenters</a></li>\
                <li class='AWA-menu-item'><a class='catagory-stamp--anchor header-4 ellipsis' href='https://store.canon.co.uk/ink-paper/'>Ink, Toner, & Paper</a></li>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
        .AWA-menu-item {\
            display: none;\
        }\
        .AWA-menu-item:last-child {\
        	margin-right: 0;\
        }\
        @media (min-width: 992px) {\
            .primary-navigation--list {\
                margin-top: 50px;\
                margin-bottom: 10px;\
                margin-left: 0;\
            }\
            .primary-navigation-item {\
                display: none;\
            }\
            .AWA-menu-item {\
                display: inline-block;\
                margin-right: 5px;\
            }\
            .AWA-menu-item .catagory-stamp--anchor {\
                font-size: 12px;\
            }\
        }\
        @media (min-width: 1200px) {\
            .AWA-menu-item {\
                margin-right: 10px;\
            }\
            .AWA-menu-item .catagory-stamp--anchor {\
                font-size: 14px;\
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

        $(".primary-navigation--list").append(exp.vars.menu);
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


    exp.waitFor(function() { return $(".primary-navigation--list").length }, exp.init, 10000);


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
