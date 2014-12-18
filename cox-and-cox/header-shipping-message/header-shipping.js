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
exp.condition = $('.header-details-box');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'shipping_message': 'Order by <strong>Midnight on Monday 22nd December</strong> <br/> and you\'ll still receive your order before the big day.*'
};

// Styles
// String containing the CSS for the experiment
exp.css = '.logo { \
    width: 500px; \
} \
.header-details-box { \
    margin-top: 24px; \
} \
.header-details-box--shipping { \
    margin-top: 1em; \
    text-align: right; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Some example DOM manipulation...

    $('.header-details-box--opening').after(
        $('<p>', { 'class': 'header-details-box--shipping', 'html': exp.vars.shipping_message })
    );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);