// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var subcat_page_exp = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Subcategory page experiment - 1.2.0');

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
    'topLevelCategoriesTitle': $('h2 a'),
    'topLevelCategoriesTitle_text': 'Narrow By',

    'first_box_title': $('<span>', {
        text: 'STYLE',
        style: 'color: #000; text-transform: uppercase; padding: 5px 0;display: block;font-size: 14px;'
        }
    ),
    'first_box': $('.leftNAVIGATION > ul:nth-of-type(2)'),
    'first_box_links_to_drop': ['Bags', 'Accessories', 'Trend']
};

exp.styles = 'ul#facet_brand { display: none; }';

// Init function
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
    // DOM manipulation...

    // append styles to head
    $('head').append('<style type="text/css">'+this.styles+'</style>');

    // Change top level category to "Narrow By"
    this.vars.topLevelCategoriesTitle.text(this.vars.topLevelCategoriesTitle_text);

    // Add title before first box
    this.vars.topLevelCategoriesTitle.parent().after(this.vars.first_box_title);

    // Hide certain links in first box.
    this.vars.first_box.find('li').each(function(i, elem){
        if (exp.vars.first_box_links_to_drop.indexOf($(elem).text()) > -1)
        {
            $(elem).hide();
        }
    });
};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
subcat_page_exp.init();