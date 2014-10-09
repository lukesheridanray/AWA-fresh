//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*

100% (50/50)
4
Crazy Egg
"Revenue Per Visitor
Number of Transactions
Add to Basket"


*/

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('As seen in - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.catalog-product-view .downloads-links-block .head h4:contains("As Seen In:")');

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
exp.css = ' \
.product-shop .downloads-links-block { position: relative; } \
.product-shop .downloads-links-block h4 { border-bottom: 1px solid #DFDFDF; } \
.product-shop .downloads-links-block .download-holder { border-top: 0; position: absolute; top: 40px; left: 0; background: #fff; width: 60px; overflow: hidden; } \
.product-shop .downloads-links-block .download-holder:hover { width: 260px; } \
.whishlist_wrap ul.add-to-links li a.link-wishlist { font-weight: normal; position: relative; top: -5px; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    $('.catalog-product-view .downloads-links-block .head h4:contains("As Seen In:")').closest('.downloads-links-block').appendTo( $('.product-shop') );

    $('.whishlist_wrap, #social').appendTo( $('.product-img-box') );

    $('.product-shop .downloads-links-block .download-holder:eq(0)').css({ 'left': '0', 'z-index': '3' });
    $('.product-shop .downloads-links-block .download-holder:eq(1)').css({ 'left': '150px', 'z-index': '2' });
    $('.product-shop .downloads-links-block .download-holder:eq(2)').css({ 'left': '300px', 'z-index': '1' });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);