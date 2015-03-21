//
// CGIT Optimizely Boilerplate - version 0.1.4
//

/*

1. In the Flowers submenu, add two new rows.
2. The second row contains 4 columns with facets from the plantfinder from the following filters: Grow In, Ideal For, Position and Flower Colour.
It behaves in the same way as the plantfinder, i.e. point to search results.
NB: Apply the Planttype: flowers filter by default with all facets in this row.
3. The third row behaves like the menu on this page: http://search.thompson-morgan.com/genus/

Apply Planttype: flower facet default with all selections

RPV
Conversion Rate
Progression to Plantfinder results

50/50

According to QuBit, you can fire GA events for the experiment. Will you please investigate, but warn me if it will take too much time.

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
exp.log('Submenu experiment - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.superCategory[href*="flowers"]');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    $menu: $('.superCategory[href*="flowers"]'),
    newRow: ' \
            <ul style="height: 324px;" class="floatLeft"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        Grow In \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="#">Baskets</a> \
                </li> \
            </ul> \
            <ul style="height: 324px;" class="floatLeft"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        Grow In \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="#">Baskets</a> \
                </li> \
            </ul> \
            <ul style="height: 324px;" class="floatLeft"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        Grow In \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="#">Baskets</a> \
                </li> \
            </ul> \
            <ul style="height: 324px;" class="floatLeft"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        Grow In \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="#">Baskets</a> \
                </li> \
            </ul> \
            <div class="clearFloat">'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.awa-superDuperCat {}';

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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    this.vars.$menu.parents('.toplevel')
        .addClass('awa-superDuperCat')
        .find('#sub2').append( this.vars.newRow );
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);