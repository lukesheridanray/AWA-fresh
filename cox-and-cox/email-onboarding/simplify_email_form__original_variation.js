//
// Original variation.  No DOM changes, just functionality required for home page popup to work.
//
//

/* Snippet to extend jQuery to parse the page's GET params */
(function($){
    $.urlParam = function(name){
        var results = new RegExp('([\?&]' + name + ')(=([^&#]*))?').exec(window.location.href);
        if (results === null){
           return false;
        }
        else{
           return results[3] || true || 0;
        }
    };
})(jQuery);

// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var simplify_email_form_orig = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Simplify email form ORIG - fucntionality for home page popup to work only. 0.0.3');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('body.cms-page-view.cms-email-sign-up');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
};

exp.vars.email_form = {
    email_row: $('.compform table > tbody > tr:nth-of-type(4)'),
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Functions
// Object containing functions for use in the experiment
// Some helpful functions are included below
exp.func = exp.func || {};

// Init function
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {

    // If there's an e-mail GET parameter, populate the email input with that value.
    if ($.urlParam('email') !== false && $.urlParam !== true) {
        console.log('Prepopulating email field with ' + $.urlParam('email'));
        this.vars.email_form.email_row.find('input').val(
            decodeURIComponent($.urlParam('email'))
        );
    }

};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
simplify_email_form_orig.init();