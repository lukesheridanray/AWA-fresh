//
// CGIT Optimizely Boilerplate - version 0.1.3
//

/*
https://www.happypuzzle.co.uk/order-login.aspx?Flag=basket
http://www.happypuzzle.co.uk/order-register.aspx
http://www.happypuzzle.co.uk/success.aspx

100% 50/50

GA slot 3

"revenue per user
reached sales confirmation page
emails captured"

I have essentially created a guest checkout:
1) I have changed the wording and the title on the signin page.
2) I have removed the title, mobile and password fields from the address page.
3) I have added in wording on the details page about the money back guarantee, to offset worries about quality.
4) I have added an opportunity to ""Save your details"" on the post purchase screen.

Shopped with us before?
New to the Happy Puzzle Company?
Next
SECURE PAYMENT
Your details are safe and fully protected.
FREE DELIVERY 
When you spend £40 or more. (UK mainland)
MONEY BACK GUARANTEE
If you're not completely satisfied, we'll give you your money back.
HOORAY! Your order is placed - thank you. 
 
We're now beavering away to get your goods to you as quickly as possible. An email confirming all the details will be winging its way to your inbox very soon. 
 
Here's your shiny new reference number, just for this order: HP234093489. If you have any queries, just call us on 0844 848 2822 or email info@happypuzzle.co.uk 
Now save your details and get 10% OFF your next order
Saving your details makes shopping at www.happypuzzle.co.uk quicker and easier next time 
Choose a password:
SAVE - and get 10% off your next order
Plus you'll also receive exclusive web-only offers and news occasionally but NO SPAM (and we never share your email address).

*/

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Guest checkout - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.unique-selector');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

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

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);