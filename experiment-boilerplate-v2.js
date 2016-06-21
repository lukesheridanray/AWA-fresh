// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {};

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.log('Example experiment');

    // Variables

    AWA.var = {};

    // Functions

    AWA.func = {};

    // CSS

    AWA.css = ' \
    ';

    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Main experiment code

})(jQuery); // vwo_$ || optimizely.$