//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 

// Global var
var shippingChangeCallback;

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Checkout funnel experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('#checkoutSteps');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'myCustomTagLine': 'This split test is the best!',
    'productDesc': $('.description').length ? $('.description').text() : 'default description',
    'productSku': $('.sku-code span')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.step-link { \
    display: inline-block; \
    width: 150px; \
    font-size: 0.9em; \
    text-align: center; \
} \
 \
.step-link.active:before { \
    background: black; \
} \
 \
.step-link:before { \
    content: ""; \
    display:block; \
    width: 14px; \
    height: 14px; \
    background: #ccc; \
    position: relative; \
    left: 70px; \
    top: -15px; \
    border-radius: 7px; \
} \
 \
.steps-line { \
    border-bottom: 3px solid #ccc; \
    position: relative; \
    top: -7px; \
    left: 78px; \
    width: 456px; \
} \
.progress-bar { \
    margin: 0 auto 3em auto; \
    width: 600px; \
} \
.opc li.section { \
    display: block; \
    position: relative; \
    top: -90px; \
} \
#opc-billing #checkout-step-billing, #opc-shipping #checkout-step-shipping, \
#opc-shipping_method #checkout-step-shipping_method, \
#opc-payment #checkout-step-payment, #opc-review #checkout-step-review { \
    background: white; \
} \
.opc #checkout-step-billing #co-billing-form #billing-new-address-form { \
    height: auto; \
} \
.opc .form-list li fieldset { \
    margin-bottom: 0; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

        
    // append styles to head

    // Some example DOM manipulation...

    $ = jQuery;
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Global
    // Progress bar
    var progress = '<div class="progress-bar"><div class="steps-line"></div><div class="step-link login active">Login</div><div class="step-link billing">Billing information</div><div class="step-link delivery">Delivery</div><div class="step-link payment">Payment</div></div>';

    // Secure CO
    $('#main > div > div.page-title > h1').text('Secure Checkout');
    $('#main > div > div.page-title > h1').attr('style', 'background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALRJREFUeNpiYKAxYCRGEQs7uzyQCgBiAajQByDe8Ofnz4cUuwBoeD8Q/8eB+yk1fD4ew2F4PrmG2yMZ8h6I45Hk/IH4PpK8PTkWrMdnACheoBaD5NeTYwHM8P1EBOF7XGqYiLDrAB65B1BagBILKAI0t4AFLUz5gVQBmhoHoDgu/Q5IeuuhzAnADPgRa06GppYDFDraAWjBweETB6MWjFowagFaWQQEF4C4gUIzLzDQEwAEGACVRDpCn2OzmAAAAABJRU5ErkJggg==); \
        background-repeat: no-repeat; \
        padding-left: 32px; \
        background-position-y: 0px; \
        }');

    // Remove nav
    $('.nav-container').remove();
    $('.header-search-bar').remove();
    $('#footer').remove();

    // Hide old progress indicator
    $(".step-title").hide();

    // Insert out progress bar
    $(".step").prepend(progress);

    // Remove "required fields" text from everywhere - that's going to be the default behaviour
    $("p.required").remove();

    // Remove red stars
    $("label > em").remove();

    // Colon after labels
    $("label:not(.radio)").each(function() {
        var text = $(this).text();
        if (text.length > 5) {
            $(this).text(text + ':');
        }
    });

    $("label").css('text-align', 'right');

    // Back button
    checkout.back = function (){
        if (this.loadWaiting) return;
        this.accordion.openPrevSection(true);
    };

    checkout.gotoSection = function(section)
    {
        var sectionElement = jQuery('#opc-'+section);
        sectionElement.addClass('allow');
        this.accordion.openSection('opc-'+section);
        this.reloadProgressBlock(section);
        if (section == 'payment') {
            shippingChangeCallback(jQuery);
        }
    }

    var heightSetCount = 0;
    // Set height
    var heightSetter = setInterval(function () {
        if (heightSetCount++ < 20) {
            $('#checkoutSteps').css('height','800px');
        }
        else {
            clearInterval(heightSetter);
        }
    }, 500);

    // Is logged in? If not, we don't need the first step
    if ( ! $('.account-logout').length)
    {
        // Step 1 - Guest checkout or login
        var messages = $(".messages").detach();

        // Remove what we don't need on this screen
        
        $("#checkout-step-login > div.col2-set > div.col-2 > div.login").remove();
        $("#login-form > fieldset > h4").remove();
        $("#login-form > fieldset > div.sign-in-to").remove();
        $("#login-form > fieldset > div.sign-in-content").remove();
        $("#login-form > fieldset > p").remove();
        $("#forgot-password").remove(); // We'll re-create it later

        // Introduce choice
        $('#login-form > fieldset > ul > li:nth-child(1)').after('<li class="control"><label>Do you have a password?</label>   <div style="display: inline-block; float: right; width: 280px;">    <input class="radio" value="guest" id="login:login" name="checkout_method" type="radio"><label style="margin-right: 1.5em;" for="login:login">Yes</label> <input class="radio" value="guest" id="login:guest" name="checkout_method" checked="checked" type="radio"><label for="login:guest">No</label>  </div>  </li>');

        // Restyle fields and labels
        $("#login-form > label").attr('style', 'display: block; text-align: right; width: 150px;');
        $("#login-form .input-box").attr('style', 'width: auto; margin-right: 20px;')

        // Remove 2 col layout, introduce fieldset with legend
        $(".col-1").remove();
        var toplevel = $(".col-2");
        toplevel.removeClass('col-2');
        toplevel.wrap('<fieldset style="padding: 2.5em 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);" class="co-box" />');
        $(".checkout-seperator-top2, .checkout-seperator-bottom, .checkout-seperator-top1").remove();
        $(".co-box").prepend('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;">Your Email Address</legend>');

        // Insert error messages
        $("#checkout-step-login > div.col2-set > fieldset > legend").after(messages);

        // Create forgot password & email note
        $("#login-email").after('<br /><span style="float: right;">(for order confirmation)</span>');
        $("#login-password").after('<br /><span><a href="/customer/account/forgotpassword/" target="_blank">Forgot Password?</a></span>');

        // Change wording
        $("#login-form label[for='login-email']").text('Enter your Email Address:');

        // Change button
        $("#checkout-step-login button span").remove();
        $("#checkout-step-login button").text('Continue');
        $("#checkout-step-login button").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

        $(".buttons-set").attr('style', 'margin-top: 2em');
        $(".buttons-set").removeClass('buttons-set');

        // Hiding of password
        $("#login-form > fieldset > ul > li:nth-child(3)").addClass("password-container");
        $(".password-container").hide();

        // Switching between login and guest checkout
        $('#login\\:guest').click(function() {
            $(".password-container").hide();
        });

        $('#login\\:login').click(function() {
            $(".password-container").show();
        });
        /*
        // Register
        $('#register-customer-password').before('<li class="control" style="margin-top:1em;"><div class="input-box" style="width: 260px;"><input name="register" id="create-account" value="1" title="Create account" class="radio validation-passed" type="checkbox"><label for="create-account">Create an account</label></div></li>');

        $('#create-account').change(function() {
            if ( ! jQuery(this).is(':checked')) { 
                jQuery(this).parents('li').siblings("li.remainhidden").hide();
            }
            else {
                jQuery(this).parents('li').next().show();
            }
        });
        */
        
        // Remove registration (other experiment)
        setTimeout(function() {
            $('label[for="OPTIMZELY_LOGIN_FORM_EXP_register_account"]').parents('.fields').remove();
            }, 1000);

        var email;

        // Continue button event handler
        $("#checkout-step-login > div.col2-set > fieldset > div > div > div > button")[0].onclick = function() {

            if ($('#login\\:guest').is(':checked')) {
                if(loginForm.validator && loginForm.validator.validate()){
                    // Fill in billing
                    email = $('#login-email').val();
                    $("#billing\\:email").val(email);
                    checkout.setMethod();
                }

                exp.func.waitForElement("#checkout-step-shipping:visible",
                function() {
                    $(".step-link.login").removeClass('active');
                    $(".step-link.billing").addClass('active');
                });
            }
            else {
                // Fill in billing
                email = $('#login-email').val();
                $("#billing\\:email").val(email);
                onepageLogin($(this)[0]);
                $(".step-link.login").removeClass('active');
                $(".step-link.billing").addClass('active');
            }
        };
    }
    else {
        // Progress the progress bar
        $('.step-link.login').removeClass('active');
        $('.step-link.billing').addClass('active');
    }

    // Step 2 - Billing
    // 
    // Remove radio buttons
    $("li.control:nth-child(3)").remove();
    $("#co-billing-form > fieldset:nth-child(1) > ul:nth-child(1) > li:nth-child(2)").remove();

    // Style container
    $("#co-billing-form > fieldset:nth-child(1)").attr('style', 'padding: 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);');
    $("#co-billing-form > fieldset").prepend('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;"">Your Billing Information</legend>');

    // Prepopulate email and never show field
    $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(2)").hide();
    $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(10)").hide();
    $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(2)").addClass('remainhidden');

    // Hide password field
    $("#register-customer-password").addClass('remainhidden');
    $("li.control:nth-child(13)").hide();
    $(".invisible").hide();
    //$("li.control:gt(0)").remove();
    
    // Modal for telephone
    $("#billing\\:telephone").after('<br /><span style="float: right;text-decoration: underline;"><a href="#" id="why-ask-phone" style="font-size: .9em;">why ask this?</a></span>');

    // Modal window
    var modal = '<div class="tool-tip" id="telephone-tool-tip" style="display:none;width:400px;"> \
        <div class="btn-close"><a href="#" id="telephone-tool-tip-close" title="Close">Close</a></div> \
        <div class="tool-tip-content">We may need to phone you to clarify delivery details related to this order. Your phone number will never be used for any other purpose.</div> \
    </div>';
    $(modal).prependTo('body');

    $("#why-ask-phone").click(function(e) {
        $('#telephone-tool-tip').css('top', (e.pageY-20)+'px');
        $('#telephone-tool-tip').css('left', (e.pageX-400)+'px');

        $('#telephone-tool-tip').show();

        $('#telephone-tool-tip-close').click(function() {
            $('#telephone-tool-tip').hide();
            return false;
        });

        return false;
    });

    // Continue button
    //<button class="button" type="button" id="onepage-first-goon" style="display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);">Continue</button>
    
    // Sort out continue button
    var continueButton = $("#continue-btn").detach();
    $("#co-billing-form > fieldset:nth-child(1) ul").append('<li style="margin-top:2em;" id="billing-buttons-container"></li>');
    $("#billing-buttons-container").remove();
    $("#billing-buttons-container").append(continueButton);
    $("#continue-btn span").remove();
    $("#continue-btn").text('Continue');
    $("#continue-btn").attr('style','font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

    $("#billing-buttons-container").css('text-align', 'center');
    $('#billing-buttons-container').addClass('invisible');

    // Find address button
    var findaddressText = $("#meanbee\\:billing_address_find").text();
    $("#meanbee\\:billing_address_find span").remove();
    $("#meanbee\\:billing_address_find").text(findaddressText);

    $("#meanbee\\:billing_address_find").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

    // Underline link
    $('#meanbee\\:billing_input_address_manually').css('text-decoration', 'underline');

    // Unhide fields, except the ones we don't want shown on clicking find address or manual entry
    $("#meanbee\\:billing_input_address_manually").click(function() {
        $(".fields:not(.remainhidden)").css('display', 'block');
        $('.invisible').removeClass('invisible');
    });
    $("#meanbee\\:billing_address_find").click(function() {
        $(".fields:not(.remainhidden)").css('display', 'block');

        // Change "Select Address" button when available
        exp.func.waitForElement("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1) span", function () {
            var btnText = $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1)").text();
            $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1) span").remove();
            $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1)").text(btnText);
            $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1)").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

            $('.invisible').removeClass('invisible');

            // Don't submit the form yet - the customer still needs to enter their phone number
            $("#meanbee\\:billing_address_selector button")[0].onclick = function() { meanbee_postcode_billing.fillFields($F('meanbee:billing_address_selector_select'), 'billing'); };

            // Sort out layout
            $('#meanbee\\:billing_address_selector').css('margin-left','110px');
            $('#meanbee\\:billing_address_selector').css('width','260px');

        },10000,50);
    });

    // Insert tick box - delivery address same as billing
    $("ul.form-list:nth-child(2) > li:nth-child(2)").before('<li class="control invisible" style="margin-top:1em;"><div class="input-box" style="width: 260px;"><input name="billing[use_for_shipping]" id="billing:use_for_shipping_yes" value="1" checked="checked" title="Deliver to this address" onclick="" class="radio validation-passed" type="checkbox"><label for="billing:use_for_shipping_yes">Deliver to this address</label></div></li>');

    // Form size fix
    $('#co-billing-form .field').css('width', '440px');
    $('#co-billing-form .fields').css('width', '440px');
    $('#co-billing-form .wide').css('width','440px');
    $("#co-billing-form .input-box").css('width', '260px');
    $("#co-billing-form .input-box").css('margin-right','70px');
    $("#co-billing-form label.required").css('width', '90px');

    // Spacing under manual entry link
    $('#meanbee\\:billing_address_selector').css('margin-top','1em');

    // County not required - need to remove again because it will be put back
    $('#billing\\:region').removeClass('required-entry');

    // Handle next click
    // Problems with continue button
    setTimeout(function() {
        $("#continue-btn").off()
        $("#continue-btn").click(function(e){        
            e.preventDefault();
            $('#billing\\:region').removeClass('required-entry');

            billing.save();

            $("#billing\\:email").parents("li").show();
            exp.func.waitForElement("#checkout-step-shipping_method:visible",
                function() {
                $(".step-link.billing").removeClass('active');
                $(".step-link.delivery").addClass('active');
                });
        });
    }, 500);

    // Step 2.5 - Delivery Address
    //
    // Rearrange two columns into one, wrap it with our usual fieldset, add legend
    var ShippingMain = $("#co-shipping-form > div.shipping-form-left");
    var shippingRight = $("#co-shipping-form > div.shipping-form-right").detach();
    ShippingMain.append(shippingRight);
    shippingRight.removeClass("shipping-form-right");

    ShippingMain.wrap('<fieldset style="padding: 2.5em 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);" class="co-box2" />');
    $(".co-box2").prepend('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;">Your Delivery Address</legend>');

    ShippingMain.removeClass("shipping-form-left");

    // Underline link
    $('#meanbee\\:shipping_input_address_manually').css('text-decoration', 'underline');

    // Fix label, it's not class radio therefore it gets colons
    var label = $("label[for='shipping:same_as_billing']").text();
    $("label[for='shipping:same_as_billing']").text(label.substring(0, label.length - 1));

    // Sort out buttons
    var shippingButtons = $("#shipping-buttons-container").detach();
    $('#co-shipping-form > fieldset').append(shippingButtons);
    $("#shipping-buttons-container .back-link").remove();

    $("#continue-btn-shipping span").remove();
    $("#continue-btn-shipping").text('Continue');
    $("#continue-btn-shipping").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

    // The same stuff as for billing
    // Find address button
    findaddressText = $("#meanbee\\:shipping_address_find").text();
    $("#meanbee\\:shipping_address_find span").remove();
    $("#meanbee\\:shipping_address_find").text(findaddressText);

    $("#meanbee\\:shipping_address_find").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

    $("#meanbee\\:shipping_address_find").click(function() {
        $(".fields:not(.remainhidden)").css('display', 'block');

        // Change "Select Address" button when available
        exp.func.waitForElement("#meanbee\\:shipping_address_selector > div:nth-child(2) > button:nth-child(1) span", function () {
            var btnText = $("#meanbee\\:shipping_address_selector > div:nth-child(2) > button:nth-child(1)").text();
            $("#meanbee\\:shipping_address_selector > div:nth-child(2) > button:nth-child(1) span").remove();
            $("#meanbee\\:shipping_address_selector > div:nth-child(2) > button:nth-child(1)").text(btnText);
            $("#meanbee\\:shipping_address_selector > div:nth-child(2) > button:nth-child(1)").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

            // Don't submit the form yet - the customer still needs to enter their phone number
            $("#meanbee\\:shipping_address_selector button")[0].onclick = function() { meanbee_postcode_billing.fillFields($F('meanbee:billing_address_selector_select'), 'billing'); };

        },10000,50);
    });

    $(".opc #checkout-step-billing #co-billing-form #billing-new-address-form, .opc #checkout-step-shipping #co-shipping-form #shipping-new-address-form").css('height','auto');

    $("#co-shipping-form > fieldset > div:nth-child(2) > ul > li.control").css('margin-left', '130px');

    $('label[for="gift_message"]').attr('style','text-align: left;font-weight: normal;');

    $('<a href="#" id="add-gift" style="text-decoration: underline;">Add gift message?</a>').insertBefore('#amorderattr');
    $('#amorderattr').hide();

    $('#add-gift').click(function() {
        $(this).hide();
        $('#amorderattr').show();
        return false;
    });

    $("#continue-btn-shipping").off().click(function(e){             
            e.preventDefault();
            // County not required
            $('#shipping\\:region').removeClass('required-entry');
            shipping.save(); 
        });

    // Form size fix
    $('#co-shipping-form .field').css('width', '440px');
    $('#co-shipping-form .fields').css('width', '440px');
    $('#co-shipping-form .wide').css('width','440px');
    $("#co-shipping-form .input-box").css('width', '260px');
    $("#co-shipping-form .input-box").css('margin-right','70px');
    $("#co-shipping-form label.required").css('width', '90px');
    $("#co-shipping-form label[for='shipping:company']").css('width', '90px');
    $("#co-shipping-form > fieldset > div:nth-child(2) > ul > li.control").css('margin-left', '90px');
    $("#co-shipping-form > fieldset > div:nth-child(2) > ul > li.control").css('width', '260px');
    $("#meanbee\\:shipping_address_selector").css('width', '260px');
    $("#meanbee\\:shipping_address_selector").css('margin-left', '110px');

    // Spacing under manual entry link
    $('#meanbee\\:shipping_address_selector').css('margin-top','1em');

    // County not required - need to do it before submission too
    $('#shipping\\:region').removeClass('required-entry');

    // Step 3 - Delivery Method
    // 
    // Create a dropdown from radio buttons and rejig delivery method form
    var deliveryMap = {
        'productmatrix_Next_Working_Day_Delivery__for_Mainland_UK_(excludes_Highlands___Islands)_orders_placed_on_weekdays_before_1PM': 'Order before 1PM on weekdays',
        'productmatrix_Next_Working_Day_Delivery_before_12pm_for_Mainland_UK__(excludes_Highlands___Islands)_orders_placed_on_weekdays_before_1pm.': 'Order before 1PM on weekdays',
        'productmatrix_Saturday_Delivery__for_Mainland_UK_(excludes_Highlands___Islands)_for_orders_placed_before_Friday_1pm': 'Order before 1PM on Friday'
    };

    var createDropdownRejigForm = function () {
        var options = [];
        $("#checkout-shipping-method-load li").each(function() {
            if ($(this).find("label").length) {
                var val = $(this).find("input").val();
                options.push({
                    'value': val,
                    'label': $(this).find("label").text().replace(/\s\(.*(?=\s£)/,''),
                    'smallprint': (deliveryMap.hasOwnProperty(val) ? deliveryMap[val] : '')
                });
            }
        });

        var deliveryOptions = '<select name="shipping_method">';
        for (var i = 0; i < options.length; i++) {
            option = options[i];
            deliveryOptions += '<option value="' + option.value + '" data-smallprint="' + option.smallprint + '">' + option.label + '</option>';
        }
        deliveryOptions += '</select><span id="del-small-print" style="text-align: right;margin-right: 50px;display: block;font-size: 0.9em;">'
            + (options.length ? options[0].smallprint : '') + '</span>';

        $("#checkout-shipping-method-load dd").html(deliveryOptions);
        $('#checkout-shipping-method-load dd').attr('style', 'margin: 7px 0 12px 18px;');

        $('select[name="shipping_method"]').change(function() {
            $('#del-small-print').text($(this).find('option:selected').data('smallprint'));
        });

        if ( ! $(".display-address").length) { // in case this function is called more than once
            // Rejig form
            //$('#checkout-shipping-method-load > dl > dt').attr('style', 'margin: .5em 0 !important;');

            $('#checkout-shipping-method-load > dl > dt').text('Delivery Method:');
            $('#co-shipping-method-form > div.delivery-note > div > div.delivery-text > label')
                .text('Delivery Note (optional):');

            // Move note before delivery method
            var note = $('#co-shipping-method-form > div.delivery-note').detach();
            $('#co-shipping-method-form').prepend(note);

            // Delivery note
            $('#co-shipping-method-form > div.delivery-note input').val('maximum 35 characters');
            $('#co-shipping-method-form > div.delivery-note input').css('color', '#ccc');
            $('#co-shipping-method-form > div.delivery-note input').focus(function() {
                if ($('#co-shipping-method-form > div.delivery-note input').val() == 'maximum 35 characters') {
                    $('#co-shipping-method-form > div.delivery-note input').val('');
                    $('#co-shipping-method-form > div.delivery-note input').css('color', 'black');
                }
            });

            // Modal for delivery note
            $("#co-shipping-method-form > div.delivery-note input").after('<br /><span style="text-align:right;text-decoration:underline;display:inline-block;width:300px;"><a href="#" id="what-is-note" style="font-size: .9em;font-weight:normal;">what is this?</a></span>');

            // Modal window
            var other_modal = '<div class="tool-tip" id="note-tool-tip" style="display:none;width:400px;"> \
                <div class="btn-close"><a href="#" id="note-tool-tip-close" title="Close">Close</a></div> \
                <div class="tool-tip-content">Provide any special delivery instructions. Unfortunately the courier waybill is limited to 35 characters.</div> \
            </div>';
            $(other_modal).prependTo('body');

            $("#what-is-note").click(function(e) {
                $('#note-tool-tip').css('top', (e.pageY-20)+'px');
                $('#note-tool-tip').css('left', (e.pageX-400)+'px');

                $('#note-tool-tip').show();

                $('#note-tool-tip-close').click(function() {
                    $('#note-tool-tip').hide();
                    return false;
                });

                return false;
            });

            // Is there a separate delivery address? if not, we'll use the billing address
            var sepShipping = false;
            if ($("#shipping\\:street1").val()) {
                sepShipping = true;
            }

            // Constructing address display
            var address = ( sepShipping
                    ? $("#shipping\\:street1").val()
                    : $("#billing\\:street1").val()) + '<br />'
                + ( sepShipping
                    ? $("#shipping\\:street2").val()
                    : $("#billing\\:street2").val() ) + '<br />'
                + ( sepShipping
                    ? $("#shipping\\:city").val()
                    : $("#billing\\:city").val() ) + '<br />'
                + ( sepShipping
                    ? $("#shipping\\:postcode").val()
                    : $("#billing\\:postcode").val() ) + '<br />'
                + ( sepShipping
                    ? $("#shipping\\:country_id option:selected").text()
                    : $("#billing\\:country_id option:selected").text())  + '<br /><br />'
                + '<a href="#" onclick="checkout.back(); return false;" id="diff-delivery-addr" style="text-decoration:underline;">Deliver to different address</a>';

            $("#co-shipping-method-form")
                        .prepend('<div class="field display-address" style="margin-top:2em;margin-left: 18px;">' +  address + '</div>');

            $("#checkout-shipping-method-load").css('margin-top', '3em');
            $("#co-shipping-method-form > div.delivery-note").css('margin-top', '3em');

            // Override validation function to accept the select box which always has a default value selected
            ShippingMethod.prototype.validate = function () {
                var methods = document.getElementsByName('shipping_method');
                if (methods.length==0) {
                    alert(Translator.translate('Your order cannot be completed at this time as there is no shipping methods available for it. Please make necessary changes in your shipping address.').stripTags());
                    return false;
                }

                if(!this.validator.validate()) {
                    return false;
                }

                return true;
            };
        }
    };

    // Remove back link 
    $("#shipping-method-buttons-container > p").remove();

    // If the continue button is clicked in previous steps (billing/shipping addr)- do trigger the rejigging of the screen
    // Delay action due to changes earlier in Step 2 at 500ms
    setTimeout(function() {
        $("#continue-btn, #continue-btn-shipping").click(function() {
            setTimeout(function() {
                exp.func.waitForElement('#checkout-shipping-method-load label', createDropdownRejigForm, 10000,50);
            },500);
        });
    }, 1500);

    // Wrap the whole screen in a fieldset
    $("#co-shipping-method-form").wrap('<fieldset style="padding: 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);" class="co-box"></fieldset>');
    $('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;">Your Delivery Information</legend>')
        .prependTo('#checkout-step-shipping_method > fieldset');

    // Style buttons
    $("#shipping-method-buttons-container").css('border',0);
    $("#shipping-method-buttons-container > button span").remove();
    $("#shipping-method-buttons-container > button").text('Continue');
    $("#shipping-method-buttons-container > button")
        .attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);float: none;');
    $("#shipping-method-buttons-container").css('margin-top', '3em');

    // Handle next click
    $("#shipping-method-buttons-container > button")[0].onclick = function() {
        setTimeout(function() {
            $(".step-link.delivery").removeClass('active');
            $(".step-link.payment").addClass('active');
        },
        1000);
        shippingMethod.save();
    };

    // Step 4 - Payment

    // Move payment form, restyle
    shippingChangeCallback = function($$) {

        // Move payment form, restyle
        $$("#payment_form_sagepaydirectpro label").attr('style','text-align: right;');
        $$("#payment-buttons-container").css('margin-top', '2em');

        $$("#checkout-payment-method-load > dt:nth-child(1) > label").css('background-image','none');
        $$("#checkout-payment-method-load > dt:nth-child(1) > label").css('padding-left',0);
        $$("#checkout-payment-method-load > dt:nth-child(1) > label").css('font-weight','normal');
        $$("#checkout-payment-method-load > dt:nth-child(3) > label").html("Pay with Paypal");
        $$("#checkout-payment-method-load > dt:nth-child(3) > label").css('font-weight','normal');

        $$('#co-payment-form > fieldset').attr('style','width: 445px;margin: 0 auto;');
        $$('#payment-buttons-container > p.required').remove();

        // Redraw button
        $$("#payment-buttons-container > button span").remove();
        $$("#payment-buttons-container > button").text('Secure Payment');
        $$("#payment-buttons-container > button").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 20px 0.75em 36px; margin: 0px auto; \
            border: 1px solid rgb(0, 0, 0); \
            background: rgb(241, 194, 0) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGNJREFUeNpiYKAFYGFn9wfi+0D8H4pBbH9iNdsjaTwPxPuR+PbEGHAeqjgezUVgA4kxAKtCmEvQxZlwmPOB2PBiombI5yMFFiGcj80FAiTYJ0A1L4wagGrABxL0faBa+gEIMADz0iKXhglKDAAAAABJRU5ErkJggg==) \
            no-repeat 15px 12px;float: none;');

        // Wrap with fieldset
        $$("#payment-buttons-container").wrap('<fieldset style="padding: 1em; width: 445px; margin: 1em auto; border: 1px solid rgb(204, 204, 204);" class="co-box"></fieldset>');

        $$('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.2em;">Pay by Credit or Debit Card</legend>').prependTo('#checkout-step-payment > fieldset:eq(0)');

        $$('<p style="width: 20em;font-size:.9em;margin: .5em auto;">Credit and debit cards are not charged until the item is shipped from our warehouse</p>').insertAfter('#checkout-step-payment > fieldset:eq(0)');

        payment.switchMethod('sagepaydirectpro');

        $$("#p_method_sagepaydirectpro").prop('checked', true);

        $$('<h2 style="font-size:1.5em;font-weight:bold;width: 445px;margin: 0 auto;">Secure Payment Information</h2>').prependTo("#co-payment-form");


        $$("#payment_form_sagepaydirectpro").css('width', 'auto');
        $$("#payment_form_sagepaydirectpro .input-box").css('width', '150px');

        $$("#co-payment-form > fieldset").attr('style', 'width: 250px; margin: 0 auto 2em auto;');

        var buttons = $$('#checkout-step-payment > .co-box').detach();
        $$("#co-payment-form").append(buttons);

        var paypalText = '';

        $$('#p_method_paypal_express').click(function() {
            $$("#checkout-step-payment > fieldset > legend").text("Pay by PayPal");
            

                if ( ! paypalText.length) {
                    paypalText = $$('#payment_form_paypal_express > li').text();
                    $$('#payment_form_paypal_express > li').remove();
                }

                $$('<p style="width: 20em;font-size: .9em;margin: .5em auto;" id="paypal_text">' + paypalText + '</p>')
                    .insertBefore('#payment-buttons-container');

            
        });

        $$('#p_method_sagepaydirectpro').click(function() {
            $$("#paypal_text").remove();
            $$("#checkout-step-payment > fieldset > legend").text("Pay by Credit or Debit Card");
        });

        $$('#payment_form_sagepaydirectpro select').css('width','auto');
        var year = $$('#sagepaydirectpro_expiration_yr').detach();
        $$('#sagepaydirectpro_expiration').after(year);

        $$('#sagepaydirectpro_cc_type_exp_div > div > div:nth-child(1)')
            .css('width','260px');

        $$('#sagepaydirectpro_expiration')
            .css('margin-right','1em');

        $$('#sagepaydirectpro_cc_cid').css('width', '50px');

        $$('.cvv-what-is-this').attr('style', 'position: relative;top: 3px;');

        // Remove red stars
        $$("label > em").remove();

        $$('#checkout-payment-method-load label').addClass('radio');

        // Colon after labels
        $$("#checkout-step-payment label:not(.radio)").each(function() {
            var text = $$(this).text();
            if (text.length > 5) {
                $$(this).text(text + ':');
            }
        });

        var cardForm = $$("#payment_form_sagepaydirectpro");
        $$("#co-payment-form > fieldset.co-box > legend").after(cardForm);

        $$("#payment-buttons-container > p").remove();

        setTimeout(function() { $$("#payment-buttons-container > button").prop('disabled', false); },
            1000);
    };

    // Step 5 - review
    $('#opc-review .step').css('border-top', 'none');

    // Add back link
    $('#checkout-review-load').before('<p class="back-link"><a href="#" onclick="checkout.back(); return false;"><small>« </small>Back</a></p>');
    $('#checkout-review-load').after('<p class="back-link"><a href="#" onclick="checkout.back(); return false;"><small>« </small>Back</a></p>');
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);