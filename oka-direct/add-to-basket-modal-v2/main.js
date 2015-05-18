//
// CGIT Optimizely Boilerplate - version 0.1.4
//

/*
Goals
    sales confirmation
    revenue
    proceed to checkout page

*/

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
exp.log('Add to basket modal - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#basket-nav');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    page: ( $('.btnaddtobasket,#product-info').length !== 0 ) ? 'product' : 'other',
    $closeButton: $('<a class="awa-modal-close" onclick="jQuery(\'#basket-modal\').modal(\'hide\');return false;" href="#">X</a>'),
    $continueLink: $('<a class="awa-modal-text-link" onclick="jQuery(\'#basket-modal\').modal(\'hide\');return false;" href="#">&lt; Continue shopping</a>'),
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#basket-modal .button-group .btn { \
    display: none; \
} \
#basket-modal .button-group .btn.btn-primary { \
    display: inline-block; \
    width: 410px; \
    position: relative; \
    left: -10px; \
    font-weight: bold; \
    font-size: 1.2em; \
} \
.awa-modal-close { \
    position: absolute; \
    top: 0px; \
    right: 0px; \
    border-top-right-radius: 4px; \
    color: #333; \
    text-align: center; \
    width: 22px; \
    height: 22px; \
    line-height: 22px; \
    font-size: 1.1em; \
    background: #12A6A4; \
    color: #fff; \
} \
.awa-modal-close:hover { \
    background: #15BCBA; \
    text-decoration: none; \
    color: #fff; \
} \
.awa-modal-text-link { \
    padding: 10px 0 0 0; \
    color: #858787; \
} \
.awa-modal-text-link:hover { \
    text-decoration: none; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Add buttons to modal
    $('#basket-modal .modal-body')
        .prepend( exp.vars.$closeButton )
        .append( exp.vars.$continueLink );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);