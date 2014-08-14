// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var checkout_login_page = (function($) {

    // Initialise the experiment object, this will be returned by the IIFE
    var exp = {};

    // Log the experiment, useful when multiple experiments are running
    console.log('Checkout Login Page - v1.6.0');

    // Condition
    // If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
    exp.condition = $('ol#checkoutSteps');

    // check for a condition and check it has been met
    if(exp.condition && !exp.condition.length) {
        console.log('Experiment failed a condition');
        return false;
    }

    // Variables
    // Object containing variables for use in the experiment, generally these would be strings or jQuery objects
    exp.vars = {
        'password_field': $('#register-customer-password'),
        'register_account_checkbox_html': '<li class="fields">\
            <div class="field">\
                <div class="input-box">\
                    <label for="OPTIMZELY_LOGIN_FORM_EXP_register_account" style="width:100%;"><strong>Register account? (Optional)</strong></label>\
                </div>\
            </div>\
            <div class="field">\
                <label>&nbsp;</label>\
                <div class="input-box">\
                    <input type="checkbox" name="OPTIMZELY_LOGIN_FORM_EXP_register_account" value="1" title="Register account" id="OPTIMZELY_LOGIN_FORM_EXP_register_account" style="margin-right: 0.5em;">\
                    <label for="OPTIMZELY_LOGIN_FORM_EXP_register_account" style="width:80%;float:none;">\
                        Create an account for faster checkout next time\
                    </label>\
                </div>\
            </div>\
        </li>'
    };

    exp.vars.guest_container = {
        'container'              : $('div#checkout-step-login > .col2-set > .col-1'),
        'title'                  : $('div#checkout-step-login > .col2-set > .col-1 > .register > h3'),
        'continue_button'        : $('div#checkout-step-login > .col2-set > .col-1 > div.buttons-set > button'),
        'lonely_pees'            : $('div#checkout-step-login > .col2-set > .col-1 > p'),
        'guest_or_register_form' : $('div#checkout-step-login > .col2-set > .col-1 > ul.form-list'),

        'title_text'         : "Guest Checkout",
        'supplementary_text' : "(You will have the option to create an account)"
    };

    exp.vars.login_container = {
        'container'       : $('div#checkout-step-login > .col2-set > .col-2'),
        'title'           : $('div#checkout-step-login > .col2-set > .col-2 > .login > h3'),
        'sign_in_to'      : $('div#checkout-step-login > .col2-set > .col-2 > .login-content .sign-in-to'),
        'sign_in_content' : $('div#checkout-step-login > .col2-set > .col-2 > .login-content .sign-in-content'),

        'email_label'         : $('div#checkout-step-login > .col2-set > .col-2 > .login-content label[for="login-email"]'),
        'email_label_text'    : "Email: *",
        'password_label'      : $('div#checkout-step-login > .col2-set > .col-2 > .login-content label[for="login-password"]'),
        'password_label_text' : "Password: *",

        'forgotten_password_link' : $('div#checkout-step-login > .col2-set > .col-2 > .login-content #forgot-password'),
        'forgotten_password_text' : "Forgot Password?",
        'login_button'            : $('div#checkout-step-login > .col2-set > .col-2 > .login-content button'),
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = ' \
        #checkout-step-login > .col2-set > .col-2 { height: 170px; } \
        #checkout-step-login > .col2-set > .col-1 { height: 170px; } \
        \
        #checkout-step-login > .col2-set > .col-2 > .login > h3 { text-align: center; width: 100%; } \
        #checkout-step-login > .col2-set > .col-2 > .login-content label { \
            text-align: right; padding-right: 1em; } \
        \
        #opc-login .col-2 fieldset, #opc-login .col-2 .login-content .form-list { width: 100% } \
        #opc-login .col-2 .form-list label { width: 150px; } \
        #opc-login .col-2 .input-text      { width: 200px; } \
        \
        #checkout-step-login.step div.buttons-set a#forgot-password { \
            width: 160px; margin: 0; text-decoration: underline; \
            text-align: right; padding-right: 1em; line-height: 40px; } \
        #checkout-step-login.step div.buttons-set { text-align: left } \
        #checkout-step-login.step div.buttons-set button.button { width: 207px; float: none; \
            margin-left: 0 } \
        #checkout-step-login.step div.buttons-set button.button span {} \
        #checkout-step-login.step div.buttons-set button.button span span { width: 170px; text-align: center; } \
        \
        #checkout-step-login > .col2-set > .col-1 > .register > h3 { text-align: center; width: 100%; } \
        #checkout-step-login > .col2-set > .col-1 > div.buttons-set { text-align: center; padding-top: 0; } \
        #checkout-step-login > .col2-set > .col-1 > div.buttons-set > button { margin-top: 0; } \
        #checkout-step-login > .col2-set > .col-1 #guest_container_supplementary_text { margin-top: 3em; } \
        \
        .opc #checkout-step-billing #co-billing-form #billing-new-address-form { height: auto; } \
        .opc { height: auto; min-height: 800px; } \
        ';

    // Functions
    // Object containing functions for use in the experiment
    // Some helpful functions are included below
    exp.func = exp.func || {};

    // This function waits till a DOM element is available, then runs a callback
    exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
            maxAttempts = timeout / intervalTime,
            attempts = 0,
            interval = setInterval(function() {
                if ($(selector).length) {
                    if (!keepAlive) {
                        clearInterval(interval);
                    }
                    callback();
                } else if (attempts > maxAttempts) {
                    clearInterval(interval);
                }
                attempts ++;
            }, intervalTime);
    };

    // This function waits till a function is available, then runs a callback
    exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
            timeout = timeout || 20000;
            keepAlive = keepAlive || false;
        var intervalTime = 50,
            maxAttempts = timeout / intervalTime,
            attempts = 0,
            interval = setInterval(function() {
                if ($.isFunction(func)) {
                    if (!keepAlive) {
                        clearInterval(interval);
                    }
                    callback();
                } else if (attempts > maxAttempts) {
                    clearInterval(interval);
                }
                attempts ++;
            }, intervalTime);
    };

    // Init function
    // Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
    exp.init = function() {
            
        // append styles to head
        $('head').append('<style type="text/css">'+this.css+'</style>');

        // DOM manipulation...

        // --------------------------------------------------------------------
        // Tweak the login form
        // --------------------------------------------------------------------

        // Remove unneeded content
        this.vars.login_container.sign_in_to.remove();
        this.vars.login_container.sign_in_content.remove();

        // Tweak form labels
        this.vars.login_container.email_label.text(
            this.vars.login_container.email_label_text
        );
        this.vars.login_container.password_label.text(
            this.vars.login_container.password_label_text
        );

        // Move forgotten password link
        this.vars.login_container.forgotten_password_link.text(
            this.vars.login_container.forgotten_password_text
        );
        this.vars.login_container.login_button.before(
            this.vars.login_container.forgotten_password_link
        );

        // --------------------------------------------------------------------
        // Tweak the "Checkout as a Guest or Register" form
        // --------------------------------------------------------------------

        // Tweak title
        exp.vars.guest_container.title.text(
            exp.vars.guest_container.title_text
        );

        // Remove unneeded content
        exp.vars.guest_container.lonely_pees.remove();
        exp.vars.guest_container.guest_or_register_form.hide(); // Note: Still need this form to exist to POST.

        // Add supplementary text
        exp.vars.guest_container.continue_button.after(
            $('<p>', {
                id: 'guest_container_supplementary_text',
                text: exp.vars.guest_container.supplementary_text
            })
        );

        // Tick guest by default
        exp.vars.guest_container.guest_or_register_form.find('input#login\\:guest').prop("checked", true);

        // --------------------------------------------------------------------
        // Add "Register?" checkbox on billing page.
        // --------------------------------------------------------------------

        // Create jQuery object from HTML
        var $register_account_checkbox = $(
            exp.vars.register_account_checkbox_html
        );

        // Add register checkbox above password field
        exp.vars.password_field.before($register_account_checkbox);

        // Attach event listeners to checkbox; on tick: show password field, set checkout method to 'register'
        // on untick: hide password field, set checkout method to 'guest'
        $register_account_checkbox.find('input[type=checkbox]').change(function(e){
            var checked = $(this).is(':checked');

            if (checked) {
                // Show password field, set checkout method to 'register'
                // Element.show('register-customer-password');
                exp.vars.guest_container.guest_or_register_form.find('#login\\:register').prop("checked", true);
                checkout.setMethod();
            }
            else {
                // Hide password field, set checkout method to 'guest'
                // Element.hide('register-customer-password');
                exp.vars.guest_container.guest_or_register_form.find('#login\\:guest').prop("checked", true);
                checkout.setMethod();
            }
        });

        // --------------------------------------------------------------------
        // Add an artificial delay to billing.save and shipping.save
        // --------------------------------------------------------------------

        // Recreated original code, but with an artificial delay
        billing.save = function(){
            setTimeout(function(){
                if (checkout.loadWaiting!=false) return;

                var validator = new Validation(billing.form);
                if (validator.validate()) {
                    checkout.setLoadWaiting('billing');
                    var request = new Ajax.Request(
                        billing.saveUrl,
                        {
                            method: 'post',
                            onComplete: billing.onComplete,
                            onSuccess: billing.onSave,
                            onFailure: checkout.ajaxFailure.bind(checkout),
                            parameters: Form.serialize(billing.form)
                        }
                    );
                }
            }, 1000);
        };

        shipping.save = function (){
            setTimeout(function(){
                if (checkout.loadWaiting!=false) return;
                var validator = new Validation(shipping.form);
                if (validator.validate()) {
                    checkout.setLoadWaiting('shipping');
                    var request = new Ajax.Request(
                        shipping.saveUrl,
                        {
                            method:'post',
                            onComplete: shipping.onComplete,
                            onSuccess: shipping.onSave,
                            onFailure: checkout.ajaxFailure.bind(checkout),
                            parameters: Form.serialize(shipping.form)
                        }
                    );
                }
            }, 1000);
        };
    };

    // Return the experiment object so we can access it later
    return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
checkout_login_page.init();