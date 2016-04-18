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
exp.log('OKA Direct: Signup/login tweaks 0.2');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('body#checkout-welcome');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'pwLabelExisting': 'Do you have a password?',
    'pwLabelNew': 'Have you shopped with us before?',
    'paymentImgUrl': 'https://resources1.okadirect.com/assets/en/new/site/cards.jpg'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.form-horizontal .control-label { width: 130px; } \
.button-group-checkout { margin-top: 0; } \
.loginbtn1 input, .loginbtn2 input { \
    float: none; \
    margin-left: 140px !important; \
    margin-top: 10px; \
} \
#ctl00_MainContentArea_LoginArea_LoginForm_lnkBtnPasswordRecovery { \
    font-size: 12px; \
    text-decoration: underline; \
}';

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

    // Change the heading
    $('.container h1.hidden-phone').text('OKA Secure Checkout');

    // Change the label text
    $('.form-horizontal .control-label').each(function(){
        if ($(this).text() == exp.vars.pwLabelExisting) {
            $(this).text(exp.vars.pwLabelNew);
        }
    });

    // Remove the card image
    $('.controls img').each(function(){
        if ($(this).attr('src') == exp.vars.paymentImgUrl) {
           $(this).closest('.controls.image').remove();
        }
    });

    // Move the login button
    var loginBtn = $('.button-group-checkout');
    $('.form-horizontal .control-group').last().after(loginBtn);

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);