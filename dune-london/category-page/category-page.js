// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var cat_page_exp = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Category page experiment - 1.1.0');

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

    'banner_description': $(".banner-row .column p"),         // The text from which we'll be extracting links.  We'll be removing this once done.
    'banner_description_links': $(".banner-row .column p a"), // Links from the banner
    'new_banner_links_container': $("<div class=\"cgit_new_link_container\">")                  // Container for the links to be moved inW
};

exp.styles = 'ul#facet_brand { display: none; }\
.banner-row .cgit_new_link_container { \
    width: 50%; \
    margin: 1em auto 0; \
} \
.banner-row .cgit_new_link_container a { \
    text-align: center; \
    width: 33%; \
    display: inline-block; \
}';

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

    // Move all banner desc links to after the desc.
    this.vars.banner_description_links.each(function(i, elem){
        exp.vars.new_banner_links_container.append($(elem));
    });

    this.vars.banner_description.after(this.vars.new_banner_links_container);


    // Delete the banner desc.
    this.vars.banner_description.remove();
};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
cat_page_exp.init();