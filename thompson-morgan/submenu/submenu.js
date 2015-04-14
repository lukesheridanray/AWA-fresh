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
exp.log('Submenu experiment - 1.2');

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
    searchUrl: 'http://search.thompson-morgan.com/search?w=*&ts=plantfinder&af=tab:products plant_type:flowers ',
    plantFinderUrl: 'http://search.thompson-morgan.com/gardenplantfinder',
    newRow: ''
};

exp.vars.newRow = ' \
            <ul style="height: 175px;" class="floatLeft awa-catbox"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        <a class="awa-no-hover subCategory">Grow In</a> \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'growin:baskets">Baskets</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'growin:beds">Beds</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'growin:borders">Borders</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'growin:patioclimber">Patio Climbers</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'growin:wallsfences">Walls and Fences</a> \
                </li> \
                <li class="normal awa-more-options"> \
                    <a href="' + exp.vars.plantFinderUrl + '">See more options...</a> \
                </li> \
            </ul> \
            <ul style="height: 175px;" class="floatLeft awa-catbox"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        <a class="awa-no-hover subCategory">Ideal For</a> \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'idealfor:cottagegardens">Cottage Garden</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'idealfor:groundcover">Groundcover</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'idealfor:lowmaintenancegarden">Low Maintenance Garden</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'idealfor:wildlifegardens">Wildlife Garden</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'otherfeatures:rhsperfectforpollinators">RHS Perfect for Pollinators</a> \
                </li> \
                <li class="normal awa-more-options"> \
                    <a href="' + exp.vars.plantFinderUrl + '">See more options...</a> \
                </li> \
            </ul> \
            <ul style="height: 175px;" class="floatLeft awa-catbox"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        <a class="awa-no-hover subCategory">Position</a> \
                    </div> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'position:shade">Shade</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'position:dappledshade">Dappled Shade</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'position:sunorsemishade">Sun or Semi Shade</a> \
                </li> \
                <li class="normal"> \
                    <a href="' + exp.vars.searchUrl + 'position:fullsun">Full Sun</a> \
                </li> \
            </ul> \
            <ul style="height: 175px;" class="floatLeft awa-catbox"> \
                <li class="main"> \
                    <div class="menuHeader2Class"> \
                        <a class="awa-no-hover subCategory">Flower Colour</a> \
                    </div> \
                </li> \
                <li class="normal awa-no-arrow"> \
                    <a href="' + exp.vars.searchUrl + 'flowercolour:blue"><span class="awa-colour awa-blue"></span> Blue</a> \
                </li> \
                <li class="normal awa-no-arrow"> \
                    <a href="' + exp.vars.searchUrl + 'flowercolour:yellow"><span class="awa-colour awa-yellow"></span> Yellow</a> \
                </li> \
                <li class="normal awa-no-arrow"> \
                    <a href="' + exp.vars.searchUrl + 'flowercolour:red"><span class="awa-colour awa-red"></span> Red</a> \
                </li> \
                <li class="normal awa-no-arrow"> \
                    <a href="' + exp.vars.searchUrl + 'flowercolour:white"><span class="awa-colour awa-white"></span> White</a> \
                </li> \
                <li class="normal awa-more-options"> \
                    <a href="' + exp.vars.plantFinderUrl + '">See more options...</a> \
                </li> \
            </ul> \
            <div class="clearFloat"> \
            <div class="awa-az-wrap"> \
            <div class="awa-az"> \
                <div class="awa-az-row"> \
                    <div class="awa-az-title"><strong>Find by Plant Name:</strong></div> \
                    <a href="http://search.thompson-morgan.com/alpha/A"><em>A</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/B"><em>B</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/C"><em>C</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/D"><em>D</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/E"><em>E</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/F"><em>F</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/G"><em>G</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/H"><em>H</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/I"><em>I</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/J"><em>J</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/K"><em>K</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/L"><em>L</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/M"><em>M</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/N"><em>N</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/O"><em>O</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/P"><em>P</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/Q"><em>Q</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/R"><em>R</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/S"><em>S</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/T"><em>T</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/U"><em>U</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/V"><em>V</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/W"><em>W</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/X"><em>X</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/Y"><em>Y</em></a> \
                    <a href="http://search.thompson-morgan.com/alpha/Z"><em>Z</em></a> \
                </div> \
            </div> \
            </div>';

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.awa-more-options { \
    font-style: italic;\
} \
.awa-az-wrap { \
    border-top: 1px solid #DBD3CB; \
    padding: 10px 10px 10px 3px;\
} \
.awa-az { \
    display: table; \
    width: 100%; \
    table-layout: fixed; \
    height: 25px; \
} \
.awa-az-row { \
    display: table-row; \
} \
.awa-az-title { \
    width: 20%; \
    text-align: center; \
    display: table-cell; \
} \
.awa-az-title strong { \
    color: #fff; \
    background: #00572D; \
    margin: 0 10px 0 5px; \
    display: block; \
    line-height: 25px; \
    height: 25px; \
    font-weight: bold; \
} \
.awa-az-row a { \
    display: table-cell; \
    padding: 0 1px; \
    height: 25px; \
} \
.awa-az-row a em { \
    color: #00572d; \
    font-size: 15px; \
    font-style: normal; \
    font-weight: bold; \
    background-image: url("/thompsonandmorgan/bg-alphabet.gif"); \
    background-position: top center; \
    height: 25px; \
    display: block; \
    line-height: 25px; \
    text-align: center; \
    width: 100%; \
    border-left: 1px solid #DBD3CB; \
    border-right: 1px solid #DBD3CB; \
    -webkit-box-sizing: border-box; \
    -moz-box-sizing: border-box; \
    box-sizing: border-box; \
} \
ul#mainNav .sub ul li a.awa-no-hover:hover { \
    color: #fff !important; \
} \
.awa-no-arrow { \
    background: none !important; \
    vertical-align: middle; \
} \
.awa-no-arrow a { \
    padding-left: 0 !important; \
} \
.awa-colour { \
    top: -1px; \
    vertical-align: middle; \
    display: inline-block; \
    border: 1px solid #000; \
    border-radius: 2px; \
    height: 18px; \
    width: 18px; \
    margin-right: 5px; \
    margin-left: 5px; \
} \
.navigation-portlet a:hover span.awa-colour { \
    background-image: none !important; \
    opacity: .8; \
} \
.awa-red { background: #E42F2E; } \
.awa-yellow { background: #ECD71C; } \
.awa-blue { background: #1181C8; } \
.awa-white { background: #fff; } \
.awa-catbox { \
    border-top: 1px solid #DBD3CB; \
    padding-top: 9px !important; \
} \
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

    // Monkey-patch site's functions that mess with the submenu item heights
    // because sub2 now has two rows of items; need special logic to handle sub2.
    var original_functions = {
        'setColumnHeight': setColumnHeight
    };

    setColumnHeight = function setColumnHeight(subNumber){
        if (subNumber == 2) {
            $("#sub"+subNumber).find(".floatLeft").css("height", ''); // No height pls senor
        }
        else {
            // Call original function
            original_functions.setColumnHeight(subNumber);
        }
    };
    // Re-do height and shadows for our 'flowers' column (sub number 2)
    setColumnHeight(2);
    setShadows(2);
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);