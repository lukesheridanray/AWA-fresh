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
        }

    };

    /**
     * Run the experiment
     */

    // Log it
    AWA.log('Canon TOAD Sign-posting: 1.0 (global)');

    function onToadPage() {
        var match = window.location.pathname.match('canon-eos-5d-mark-iv');
        return match !== null;
    }

    if (onToadPage()) {
        AWA.log("On toad page; toading...");
        $('.button-wrapper').addClass('canon-toad-preorder-button');
    }

})(optimizely.$); // vwo_$ ||