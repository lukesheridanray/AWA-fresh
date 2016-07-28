//
// CGIT Optimizely Boilerplate - version 0.1.4
//
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
    exp.log('AWA - Landing page v1');

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = "\
        section.hero.phase2.Dark {\
        height: 100%;\
          }\
        a.cta-button.btn.pull-left {\
      width:100%;\
        border: 0;\
        border-radius: 0;\
        height: auto !important; \
        padding: 0.5em 2em;\
        background: #909;\
        border: 2px solid #c633c6;\
        margin-top: 10px;\
        font-size: 1.3em;\
        margin-bottom: 0.5em;\
    }\
  a.cta-button.btn.pull-left:hover {\
        background: #c633c6;\
    }\
    .hero.phase2 .price {\
    color: #fff;\
    font-size: 1.313rem;\
    margin: 0;\
    line-height: 140%;\
}\
    .hero.phase2 p {\
      color: #fff;\
      padding: 0;\
      margin-top: 10px;\
      margin-bottom: 5px;\
    }\
    .button-area {\
      display: inline-block;\
    }\
  ";

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');

        $('.nav-menu').find('li').first().remove();

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


    exp.waitFor(function() { return $(".yellow-bottom").length; }, exp.init, 10000);

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
