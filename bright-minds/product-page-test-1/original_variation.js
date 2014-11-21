//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Define safe console log function
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Bright Minds: Product Page Test 1 - original page - v0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#product');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
    if ( $('#product').length > 0 ) {
        // Select existing elements
        var message     = $('#summary').find('.message');

        // If the product is out of stock track clicks on Add To Basket with a custom event
        if (message.html().toLowerCase().indexOf('back in stock soon') !== -1 ||
            message.html().toLowerCase().indexOf('available for christmas') !== -1)
        {
            $('#addtobasket #action_button').click(function(){
                optimizely.push(["trackEvent", "AddToBasketOutOfStock"]);
                return true;
            });
        }

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(optimizely.$);
