//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

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
exp.log('Example experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.home-slider');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'div': '<div class="featured-in-media"> \
 \
    <h3 class="as-seen-heading">As Seen In The Media</h3> \
 \
    <ul class="magazines-list"> \
        <li class="magazine"><img src="//cdn.optimizely.com/img/174847139/03aa1a1b771c4e4587ba29d884d6eac8.jpg" alt="Featured in 25 Beautiful Homes" /></li> \
        <li class="magazine"><img src="//cdn.optimizely.com/img/174847139/7b10d8dafbf9456e89c059945a7a5188.jpg" alt="Featured in Ideal Home" /></li> \
        <li class="magazine"><img src="//cdn.optimizely.com/img/174847139/31ee169c6fa841a78a9fceedee93d80a.jpg" alt="Featured in House &amp; Garden" /></li> \
        <li class="magazine"><img src="//cdn.optimizely.com/img/174847139/6e0610996dd14ed287b1c70cbe42f944.jpg" alt="Featured in Country Living" /></li> \
        <li class="magazine"><img src="//cdn.optimizely.com/img/174847139/1dc8aa18240e44029fca6bad54bfcc80.jpg" alt="Featured in Red" /></li> \
        <li class="magazine"><img src="//cdn.optimizely.com/img/174847139/34ef7a5a9a9a451394bd3773e8a8859b.jpg" alt="Featured in Livingetc" /></li> \
    </ul> \
 \
    <p class="featured-link-container"><a class="featured-link" href="http://www.coxandcox.co.uk/home/decorative-home/as-seen-in-the-press">View all products featured in media &raquo;</a></p> \
 \
</div>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    .as-seen-heading { \
        font-size: 2em; \
        text-transform: uppercase; \
        margin: 0 0 1.3em 0; \
        text-align: center; \
        font-weight: normal; \
    } \
    .magazines-list { \
        text-align: center; \
    } \
    .magazine { \
        display: inline-block; \
        margin-right: 21px; \
    } \
    .magazine:nth-child(6) { \
        display: inline-block; \
        margin-right: 0; \
    } \
    .featured-link-container { \
        float: right; \
        margin: 2em 3em 0 0; \
    } \
    .featured-link-container:after { \
        content: ""; \
        clear: both; \
    } \
    .featured-link { \
        text-decoration: underline; \
        font-size: 1.2em; \
    } \
    ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Some example DOM manipulation...

    $('.home-slider').html(exp.vars.div);

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);