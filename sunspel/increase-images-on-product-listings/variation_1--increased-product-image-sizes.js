// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {
        log: function(str) {
            if(typeof window.console !== 'undefined') {
                console.log(str);
            }
        },

        // Variables
        var: {},

        // Functions
        func: {}
    };

    // Make do
    AWA.log('Sunspel: Product image sizes test');

    // Sanity check: Don't run any more code if this condition fails
    if (0 === $('ul.listing.listing--grid li.item[itemtype="http://schema.org/Product"]').length) {
        AWA.log('Terminating experiment: No product listing found.');
        return;
    }

    // Custom CSS: Slap it at the end of the body (the site's own CSS is loaded
    // at the start of the body; the <head> isn't being properly respected.)
    $('body').append('\
        <style type="text/css">\
            @media only screen and (min-width: 900px) {\
                .listing--grid .item { \
                    width: 33%; \
                }\
                .listing--grid .item:nth-of-type(3n+1) {\
                    clear: left;\
                }\
            }\
            \
            @media only screen and (min-width: 1500px) {\
                .listing--grid .item {\
                    width: 25%;\
                }\
                .listing--grid .item:nth-of-type(3n+1) {\
                    clear: none;\
                }\
                .listing--grid .item:nth-of-type(4n+1) {\
                    clear: left;\
                }\
            }\
            \
            @media only screen and (max-width: 1499px) and (min-width: 900px) {\
                .desk-clear {\
                    clear: none;\
                }\
            }\
            \
            @media only screen and (min-width: 1500px) {\
                .listing--grid .item.wide-clear {\
                    clear: none;\
                }\
            }\
        </style>\
    ');

})(jQuery); // vwo_$ || optimizely.$