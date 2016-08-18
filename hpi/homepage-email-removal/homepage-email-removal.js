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
            .col-mn-offset-2half {\
                margin-left: 21%;\
            }\
        ',

        vars: {
        },

        unbind: function ()
        {
            $('.vrm-entry-form').unbind();
            $('.input--email').unbind();
            $(".vrm .error-message--cta").css("visibility","visible");
        },

        manipulate: function ()
        {
            var $form = $('.js-vrm-entry-form');
            var $button = $('button', $form).clone();
            $('.col-sm-5', $form).addClass('col-sm-7 col-mn-offset-2half').removeClass('col-sm-5 .col-mn-offset-2');
            $('.input--vrm').addClass('input--button-join').after($button[0]);;
            $('.input--email').parents('.col-mn-8').remove();
        },

        bind: function()
        {
            $('.input--vrm').on("change keyup", function (value)
            {
                var formattedVal = value.replace(/\s/g, "").toUpperCase();
                var re = (/^([0-9]{3,5}|[0-9]{1,4}[A-Z]{1,3}|[A-Z]{1,3}[0-9]{1,4}|[A-Z]{2}[0-9]{6}|[A-Z][0-9]{5,6}|[A-Z]{3}[0-9]{1,3}[A-Z]|[A-Z][0-9]{1,3}[A-Z]{3}|[0-9]{3}[A-Z][0-9]{3}|[A-Z]{2}[0-9]{2}[A-Z]{3})$/);
                return re.test(formattedVal);
            })
        },
    };

    /**
     * Run the experiment
     */

    // Log it
    AWA.log('Removing Email Field');
    AWA.unbind();
    AWA.manipulate();
    AWA.bind();

    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

})(jQuery); // vwo_$ || optimizely.$
