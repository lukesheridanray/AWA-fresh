//
// CGIT Optimizely Boilerplate - version 0.1.4
//

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
exp.log('Thompson & Morgan - Advanced search links - 0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    alreadyRunChecks: {
        variation1: $('.exp-advanced-search'),
        variation2: $('.exp-plant-finder')
    },
    variation: 1,
    browseEntire: {
        element: $('#siteSearch .popularSearches'),
        title: 'Or <strong>browse</strong> the entire <strong class="exp-green">A-Z Plant Index</strong>',
        url: 'http://search.thompson-morgan.com/genus/'
    },
    advancedSearch: {
        element: $('#siteSearch'),
        title: 'advanced search',
        url: 'http://search.thompson-morgan.com/gardenplantfinder'
    },
    banner: {
        element: $('#mainNav').parent('.navigation-portlet'),
        html: '<div class="exp-plant-finder"> \
                   <a href="http://search.thompson-morgan.com/gardenplantfinder" class="exp-plant-finder--text-link">Find plants by colour, hardiness, position, flowering month and more</a> \
                   <a href="http://search.thompson-morgan.com/gardenplantfinder" class="exp-plant-finder--button">Find Plants</a> \
               </div>'
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#siteSearch { \
    text-align: left !important; \
    position: relative; \
    left: 264px; \
} \
.exp-green { \
    color: #345E2E; \
} \
.exp-advanced-search { \
    display: block; \
    padding: 2px 0 0 0; \
    position: relative; \
    left: 184px; \
    color: #666 !important; \
    text-decoration: underline; \
    font-size: 0.95em; \
    width: 90px; \
} \
.exp-advanced-search:hover, \
.exp-advanced-search:focus { \
    text-decoration: none; \
} \
.exp-plant-finder { \
    clear: both; \
    width: 972px; \
    background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/c824b2aca37fc5e932ab58eed6ea5fc9_31_31.png") 145px 4px no-repeat #99B547; \
    position: relative; \
    top: 12px; \
    left: -10px; \
    padding: 10px 0; \
    margin: 0 0 10px 0; \
    font-size: 1.4em; \
    color: #333; \
    position: relative; \
    text-align: center; \
} \
.exp-plant-finder--text-link { \
    font-size: 1.2em !important; \
    color: #333 !important; \
} \
.exp-plant-finder--button { \
    position: absolute; \
    top: 7px; \
    right: 10px; \
    display: block; \
    color: #fff !important; \
    font-size: 0.9em; \
    background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/01a78d82e2d7d99dfec2e3fa9683d26d_9_14.png") right no-repeat #345E2E; \
    border-right: 5px solid #345E2E; \
    padding: 3px 15px 3px 10px; \
} \
.exp-plant-finder--button:hover, \
.exp-plant-finder--button:focus { \
    color: #345E2E !important; \
    border-right: 5px solid #fff; \
    background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/c86d95977b0b4a7326724699ecf910e4_9_14.png") right no-repeat #fff !important; \
}';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    if( this.vars.variation === 1 && !this.vars.alreadyRunChecks.variation1.length ) {

        if( this.vars.browseEntire.element.length ) {

            this.vars.browseEntire.element
            .html( this.vars.browseEntire.title )
            .attr('href', this.vars.browseEntire.url );

            this.vars.advancedSearch.element.append(
                '<a href="'+this.vars.advancedSearch.url+'" class="exp-advanced-search">'+
                this.vars.advancedSearch.title+
                '</a>'
            );

        }

    } else if( this.vars.variation === 2 && !this.vars.alreadyRunChecks.variation2.length )  {

        if( this.vars.banner.element.length ) {
            this.vars.banner.element.after( this.vars.banner.html );
        }

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);