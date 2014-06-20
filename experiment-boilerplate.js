// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var exp = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Example experiment - dev 0.0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.unique-selector');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
    'myCustomTagLine': 'This split test is the best!',
    'productDesc': $('.description').length ? $('.description').text() : 'default description',
    'productSku': $('.sku-code span')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    #someSelector { color: #f00; } \
    #header .tag-line { color: #f00; } ';

// Functions
// Object containing functions for use in the experiment
// Some helpful functions are included below
exp.func = exp.func || {};

// This function waits till a DOM element is available, then runs a callback
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

// This function waits till a function is available, then runs a callback
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
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // DOM manipulation...

    $('.header').append(this.vars.productDesc);

    if(this.vars.productSku) {
        $('#tagLine').html(this.vars.productSku);
    }

    this.func.waitForFunction( openModal, function myCallback() {
        openModal('modal content');
    });

    this.func.waitForElement( '.reviews-widget', function anotherCallback() {
        $('.reviews-widget').append('Appending some content to the widget');
    });

};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
exp.init();