//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var hp_search_page_exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Happy Puzzle Search Results Experiment - control page - 0.2');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.search_tab_container');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {};

// Styles
// String containing the CSS for the experiment
exp.css = '#ctl00_cphInnerMaster_spanAgeRange, \
.left_nav_list_ul:nth-of-type(2) { \
    display: none; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

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
