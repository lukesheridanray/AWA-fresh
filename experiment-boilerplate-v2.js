// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    /**
     * Experiment set up
     */

    var AWA = {

        /**
         * Safely log to console when console is not defined
         * @param {*} value - The value to log
         * @param {bool} table - Flag to use console.table if available
         */
        log: function(value, table) {
            table = table || false;
            if(typeof console === 'undefined') {
                return;
            }
            if(table && typeof console.table === 'function') {
                console.table(value);
            } else {
                console.log(value);
            }
        },

        css: '\
        ',

        vars: {
        }

    };

    /**
     * Run the experiment
     */

    // Log it
    AWA.log('Example experiment');

    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

})(jQuery); // vwo_$ || optimizely.$