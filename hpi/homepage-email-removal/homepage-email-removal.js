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
            @media (max-width: 370px) {\
                .vrm-wrapper .input--vrm {\
                    font-size: 22px;\
                }\
            }\
        ',
        vars: {
        },
        isValid: function(value)
        {
            var formattedVal = value.replace(/\s/g, "").toUpperCase();
            var re = (/^([0-9]{3,5}|[0-9]{1,4}[A-Z]{1,3}|[A-Z]{1,3}[0-9]{1,4}|[A-Z]{2}[0-9]{6}|[A-Z][0-9]{5,6}|[A-Z]{3}[0-9]{1,3}[A-Z]|[A-Z][0-9]{1,3}[A-Z]{3}|[0-9]{3}[A-Z][0-9]{3}|[A-Z]{2}[0-9]{2}[A-Z]{3})$/);
            return re.test(formattedVal);
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
                /**
                 * We need to trigger the focusout event on the input in order for the 
                 * current test to do its formatting. So we trigger it 
                 * on submit (as well as other events as below)
                 */
                $('.input--vrm').trigger('focusout');

                /**
                 * If we check for the error messages display as we did previously then the focusout handler
                 * does not have time to finish formatting the display and remove the error message.
                 * In which case the form does not submit, despite what is now a valid input.
                 * 
                 * To rectify this we instead perform validation manually using code taken from the sites code base.
                 * This means we are not relying on other handlers or DOM changes to decide whether or not to allow submission.
                 * The validation results should be identical.
                 */
                if(!AWA.isValid($('.input--vrm').val())) {
                    event.preventDefault();
                }
                /*
                if($(".vrm .error-message--cta").css("display") == "block" || $('.input--vrm').val() == false) {
                    event.preventDefault();
                }
                */
            });
            $('.input--vrm').on("change keydown paste", function(event)
            {
                $(this).trigger('focusout');
            });
        }
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
