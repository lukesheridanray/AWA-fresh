//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var oka_navigation_test = (function($) {

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
exp.log('Example experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#cat-nav');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'furniture_desired_order': {
        'sofas and chairs': [
            'sofas',
            'armchairs',
            'loose covers',
            'ottomans and footstools',
            'desk chairs',
            'dining chairs and benches',
            'outdoor seating'
        ],
        'tables': [
            'side tables',
            'coffee tables',
            'console tables',
            'dining tables',
            'bedside tables',
            'dressing tables',
            'desks',
            'outdoor tables'
        ],
        'storage and shelving': [
            'bookcases',
            'cabinets',
            'tv cabinets',
            'sideboards',
            'trunks and chests',
            'wardrobes and armoires',
            'chests of drawers'
        ]
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = '.header .tier1 li.awa-catalogue-req-nav-item { \
    padding-left: 5px; \
} \
\
/* Main navigations style tweaks, to best fill whitespace (else it looks unpleasant) */ \
ul#cat-nav li ul.sub li.main ul > li { \
    width: 140px; \
} \
ul#cat-nav li ul.sub li.main, \
#cat-nav li.custom li.middle { \
    float: none; \
    margin: 0 auto; \
} \
@media only screen and (max-width: 1200px) and (min-width: 979px) { \
    ul#cat-nav li ul.sub li.main { \
        padding-left: 150px; \
    } \
    #cat-nav li.custom li.middle { \
        padding-left: 50px; \
    } \
} \
@media (min-width: 1200px) { \
    ul#cat-nav li ul.sub li.main { \
        padding-left: 250px; \
    } \
    #cat-nav li.custom li.middle { \
        padding-left: 150px; \
    } \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Identify the relevant nav items required
    var $blog_nav_item,
        $online_exclusives_nav_item,
        $shops_nav_item,
        $catalogue_req_nav_item,
        $new_season_nav_item,
        $furniture_nav_item,
        $accessories_nav_item,
        $inspirations_nav_item,
        $gifts_nav_item;

    $('nav.tier1 li').each(function(){
        var $this = $(this);

        switch ($.trim($this.find('> a').text().toLowerCase())) {
            case 'shops':
                $shops_nav_item = $this;
                break;

            case 'catalogue request':
                $catalogue_req_nav_item = $this;
                break;
        }
    });


    $('#cat-nav li').each(function(){
        var $this = $(this);

        switch ($.trim($this.find('> a').text().toLowerCase())) {
            case 'blog':
                $blog_nav_item = $this;
                break;

            case 'online exclusives':
                $online_exclusives_nav_item = $this;
                break;

            case 'new season':
                $new_season_nav_item = $this;
                break;

            case 'furniture':
                $furniture_nav_item = $this;
                break;

            case 'accessories':
                $accessories_nav_item = $this;
                break;

            case 'inspirations':
                $inspirations_nav_item = $this;
                break;

            case 'gifts':
                $gifts_nav_item = $this;
                break;
        }
    });

    // Please remove the links to Online Exclusives and blog from the main navigation.
    // Blog should move to the top navigation (top RHS of the screen), and should move into the position held by Shops. Shops should move to the last item on the LHS of this menu.
    $online_exclusives_nav_item.remove();
    $blog_nav_item.insertAfter($shops_nav_item);
    $shops_nav_item.insertBefore($catalogue_req_nav_item);

    $shops_nav_item.addClass('first-child');
    $catalogue_req_nav_item.removeClass('first-child').addClass('awa-catalogue-req-nav-item');
    $blog_nav_item.removeClass('last-child top container hidden-tablet-potrait1');
    $new_season_nav_item.addClass('last-child');

    // Under furniture, please remove "Shop by room".
    $furniture_nav_item.find('.main > ul:first-child > li:first-child').remove();

    // Please remove all of the promotional banners (i.e. image with text) from the menus on Furniture, Accessories and Gifts.
    $furniture_nav_item.find('.main > ul.images').remove();
    $furniture_nav_item.find('.main').next().remove();
    $accessories_nav_item.find('ul.sub > li:last-child').remove();
    $gifts_nav_item.find('.main > ul.images').remove();
    $gifts_nav_item.find('.main').next().remove();

    // Please bold all of the sub-categories so that they are more distinct (see wireframe for examples)

    // RJ: They are already bold.  Nothing to do? TODO: Flag up with Brendan

    // The order of the items in Furniture have been changed:
    // Sofas and Chairs
    // Sofas, Armchairs,Loose Covers, Ottomans and Footstools, Desk Chairs, Dining Chairs and Benches, and Outdoor Seating
    // Tables
    // Side Tables, Coffee Tables, Console Tables, Dining Tables, Bedside Tables, Dressing Tables, Desks, Outdoor Tables
    // Storage and Shelving
    // Bookcases, Cabinets, TV cabinets, Sideboards, Trunks & Chests, Wardrobes and Armoires, Chests of drawers

    // Go through the first-level items
    $furniture_nav_item.find('.main > ul > li').map(function(){
        var $subcategory = $(this),
            subcategory_name = $.trim($subcategory.find('> a').text()).toLowerCase(),
            items_names_map = {};

            $subcategory.find('ul > li').each(function(){
                var $item = $(this),
                    name = $.trim($item.text()).toLowerCase();
                    items_names_map[name] = $item;
            });


            // Change to our desired order
            if (Object.keys(exp.vars.furniture_desired_order).indexOf(subcategory_name) !== -1) {
                var desired_order = $.map(exp.vars.furniture_desired_order[subcategory_name], function(elem){
                    return items_names_map[elem];
                });
                $subcategory.find('ul').append(desired_order);
            }
    });

    // -------------------------------------------------------------------------
    // Mobile nav changes
    // -------------------------------------------------------------------------

    // Make a new nav that will be always shown, before the existing nav
    var $extra_mobile_nav = $('<ul>', { 'class': 'mobile-nav awa-mobile-nav' }),
        $existing_mobile_nav = $('#header-div .mobile-nav');

    // Move 'furniture' and 'accessories' to extra nav so they are always shown
    $extra_mobile_nav.append($existing_mobile_nav.find('li:contains("Furniture"), li:contains("Accessories")'));

    $extra_mobile_nav.insertBefore($existing_mobile_nav);

    // Re-write 'menu' button event handler to only toggle visiblity of the original site nav
    $("a.navigation").off('click').on('click', function() {
        $("#mobile-nav .mobile-nav:not(.awa-mobile-nav)").slideToggle();
    });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);