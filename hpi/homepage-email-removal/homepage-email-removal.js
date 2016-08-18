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
    AWA.log('Removing Email Field');

    $('.vrm-entry-form').unbind();
    $('.input--email').unbind();

    var $form = $('.js-vrm-entry-form');
    var $button = $('button', $form).clone();

    function reconfigure()
    {
        $(this).append($button[0]);
        $('.input--email', this).parents('.col-mn-8').remove();
    }

    $('.input--vrm').on("change keyup", function (value)
        {
            var formattedVal = value.replace(/\s/g, "").toUpperCase();
            var re = (/^([0-9]{3,5}|[0-9]{1,4}[A-Z]{1,3}|[A-Z]{1,3}[0-9]{1,4}|[A-Z]{2}[0-9]{6}|[A-Z][0-9]{5,6}|[A-Z]{3}[0-9]{1,3}[A-Z]|[A-Z][0-9]{1,3}[A-Z]{3}|[0-9]{3}[A-Z][0-9]{3}|[A-Z]{2}[0-9]{2}[A-Z]{3})$/);
            return re.test(formattedVal);
        }
    );

    $form.each(reconfigure);

    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

})(jQuery); // vwo_$ || optimizely.$
