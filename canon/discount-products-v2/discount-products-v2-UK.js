//
// CGIT Optimizely Boilerplate - version 0.1.4
//

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

exp.vars = {
    'saveBanner': $('.product-detail-media .badge-4:contains(Save)'),
    'bannerText': '. Instant cashback applied at checkout',
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    .awa-hidden { \
        display: none; \
    } \
    .awa-saving-band { \
        background: #7d0063; \
        text-transform: none; \
        display: inline-block; \
        min-height: 30px; \
        line-height: 15px; \
        margin: 0; \
        padding: 6px 12px; \
        color: #fff; \
        font-size: 12px; \
        font-weight: 700; \
    } \
    .product-detail-media .awa-saving-band { \
        position: absolute; \
        z-index: 9999; \
    } \
    @media screen and (min-width: 768px) { \
        .product-detail-media .awa-saving-band { \
            width: 700px; \
            text-align: center; \
        } \
    } \
    @media screen and (min-width: 992px) { \
        .product-detail-media .awa-saving-band { \
            width: 450px; \
        } \
    } \
    @media screen and (min-width: 1200px) { \
        .product-detail-media .awa-saving-band { \
            width: 550px; \
        } \
    }';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // a single saving displayed?
    if( exp.vars.saveBanner.length === 1) {

        // Log the experiment, useful when multiple experiments are running
        exp.log('AWA - Discount products - v2');

        // append styles to head
        $('head').append('<style type="text/css">'+this.css+'</style>');

        // create new banner text
        exp.vars.bannerText = exp.vars.saveBanner.text() + exp.vars.bannerText;
        
        // hide old banner
        exp.vars.saveBanner.addClass('awa-hidden');

        // add new banner after price
        $('.product-detail-core .pricing').after(
            '<div class="awa-saving-band">'+exp.vars.bannerText+'</div>'
        );

        // add new banner over media
        $('.product-detail-media').prepend(
            '<div class="awa-saving-band">'+exp.vars.bannerText+'</div>'
        );

    }
    

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);