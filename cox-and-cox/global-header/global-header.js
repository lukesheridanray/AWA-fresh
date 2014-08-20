//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Global header - dev 0.1');

exp.variation = 2;

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = '';

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'searchBox': $('.search-social'),
    'headerDetails': '<div class="header-details-box"> \
                          <p class="header-details-box--num">0844 858 0744</p> \
                          <p class="header-details-box--opening">Mon to Sat 8am - 10pm, Sun 9am - 10pm</p> \
                      </div>',
    'popularSearches': '<div class="header-search-popular"> \
                          <p>Popular searches:</p> \
                          <ul> \
                          <li><a href="http://www.coxandcox.co.uk/catalogsearch/result/?q=mirror">Mirror</a></li> \
                          <li><a href="http://www.coxandcox.co.uk/catalogsearch/result/?q=stool">Stool</a></li> \
                          <li><a href="http://www.coxandcox.co.uk/catalogsearch/result/?q=vase">Vase</a></li> \
                          <li><a href="http://www.coxandcox.co.uk/catalogsearch/result/?q=frame">Frame</a></li> \
                          <li><a href="http://www.coxandcox.co.uk/catalogsearch/result/?q=rug">Rug</a></li> \
                          </ul> \
                      </div>',
    'magnifyGraphic': '//cdn.optimizely.com/img/174847139/bf64e2537a74428db2afc04c0fabce6b.png',
    'requestCatLink': '<a class="header--request-link" href="http://www.coxandcox.co.uk/catalogue-request"> \
                        <img src="//www.coxandcox.co.uk/media/wysiwyg/2014/cac140807-footer_catalogue_request.png" alt=""></a>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.form-search { width: 721px !important; padding-top: 10px !important; height: 30px !important; border: 2px solid #647289; } \
.form-search .input-text { width: 658px; } \
.header-search-popular { width: 225px; } \
.header-search-popular p { font-weight: bold; margin: 3px 0 4px 0; } \
.header-search-popular li { float: left; margin: 0 15px 0 0; } \
.header-search-popular a { text-decoration: underline; } \
.header-search-popular a:hover { text-decoration: none; } \
h1.logo { margin-bottom: 18px; } \
.header-details-box { float: right; text-align: center; font-size: 1.5em; padding: 43px 0 0 0; } \
.header-details-box--num { font-size: 1.6em; padding-bottom: 12px; } \
.header-details-box--opening { font-style: italic; } \
.header-search-bar { height: 55px; } \
#header .search-social { float: left; position: relative; top: 63px; } \
.header-search-popular { float: right; } \
.header--request-link { float: left; } \
.header--request-link img { width: 180px; height: 86px; margin: 16px 123px 0 -10px; }';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    $('#header .newsletter-sign-up').remove();

    $('#header').prepend( this.vars.headerDetails );

    $('#header').append('<div class="header-search-bar" />');

    $('.header-search-bar').append( this.vars.searchBox );

    $('.header-search-bar').append( this.vars.popularSearches );

    $('.form-search .button img').attr('src',this.vars.magnifyGraphic);

    if(this.variation === 2) {
        $('#header').prepend( this.vars.requestCatLink );
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);