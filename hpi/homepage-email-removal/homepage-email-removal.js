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
            @media (min-width: 480px) {\
                .col-mn-offset-2half {\
                    margin-left: 12.666667%;\
                }\
            }\
            @media (min-width: 768px) {\
                .col-mn-offset-2half {\
                    margin-left: 21%;\
                }\
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
            $('.col-sm-5', $form).addClass('col-sm-7 col-mn-offset-2half col-mn-9 col-sm-offset-2half').removeClass('col-sm-5 col-mn-offset-2 col-sm-offset-0 col-mn-8');
            $('.input--vrm').addClass('input--button-join').after($button[0]);
            $('.input--email').parents('.col-mn-8').remove();
        },

        bind: function()
        {
            $('.vrm-entry-form').on("submit", function(event)
            {
                if($(".vrm .error-message--cta").css("display") == "block" || $('.input--vrm').val() == false) {
                    event.preventDefault();
                }
            });
        },
    };

    /**
     * Run the experiment
     */

    /* Log it */
    AWA.log('Removing Email Field');
    AWA.unbind();
    AWA.manipulate();
    AWA.bind();

    /* Append CSS */
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

})(jQuery); // vwo_$ || optimizely.$
