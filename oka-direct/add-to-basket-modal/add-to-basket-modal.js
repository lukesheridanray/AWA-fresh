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
exp.condition = $('.unique-selector');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'myCustomTagLine': 'This split test is the best!',
    'productDesc': $('.description').length ? $('.description').text() : 'default description',
    'productSku': $('.sku-code span'),
    'productSavings': $('.product-price').text() - $('.rrp-price').text()
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    #someSelector { color: #f00; } \
    #header .tag-line { color: #f00; } ';

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

// This function allows you to always round a number 'up', 'down', or normally, returns a string
exp.func.roundNum = function(number, decimals, direction) {
    decimals = decimals || 0;
    var factor = Math.pow(10,decimals);
    var base;
    if( direction === 'up') {
        base = Math.ceil(number*factor);
    } else if( direction === 'down') {
        base = Math.floor(number*factor);
    }
    return direction ? (base/factor).toFixed(decimals) : number.toFixed(decimals);
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Some example DOM manipulation...

    $('.header').append(this.vars.productDesc);

    if(this.vars.productSku) {
        $('#tagLine').html(this.vars.productSku);
    }

    $('.pricing').append(
        'Your savings are: £' + this.func.roundNum(this.vars.productSavings, 2, 'down')
    );

    this.func.waitFor(
        function condition() {
            return $.isFunction(openModal);
        },
        function callback() {
            openModal('modal content');
        }
    );

    this.func.waitFor(
        function condition() {
            return $('.reviews-widget').length;
        },
        function callback() {
            $('.reviews-widget').append('Appending some content to the widget');
        }
    );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);