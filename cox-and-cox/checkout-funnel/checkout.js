//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

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
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

        
    // append styles to head

    // Some example DOM manipulation...

    $ = jQuery;
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Step 1

    var messages = $(".messages").detach();


    var progress = '<div class="progress-bar"><div class="steps-line"></div><div class="step-link active">Login</div><div class="step-link">Billing information</div><div class="step-link">Delivery</div><div class="step-link">Payment</div></div>';

    var html = '<fieldset style="padding: 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);" class="co-box"><legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;">Your Email Address</legend><form id="login-form" action="https://www.coxandcox.co.uk/customer/account/loginPost/" method="post"><ul class="form-list">  <li>    <label style="display: block; text-align: right; width: 150px;" for="login-email">Enter your Email Address:</label>    <div style="width: auto; margin-right: 20px;" class="input-box">      <input value="" name="login[username]" id="login-email" class="input-text required-entry validate-email" type="text">      <br>      <span style="float: right;">(for order confirmation)</span>   </div>  </li>  <li class="control">    <label style="display: inline-block; text-align: right; width: 150px;">Do you have a password?</label>   <div style="display: inline-block; float: right; width: 280px; top: 2px; position: relative;">    <input class="radio" value="guest" id="login:login" name="checkout_method" type="radio"><label style="margin-right: 1.5em;" for="login:login">Yes</label> <input class="radio" value="guest" id="login:guest" name="checkout_method" checked="checked" type="radio"><label for="login:guest">No</label>  </div>  </li>  <li class="password-container" style="display:none">    <label style="display: block; text-align: right; width: 150px;" for="login-password">Password</label>       <div style="margin-right: 20px; width: auto;" class="input-box">        <input class="input-text required-entry" id="login-password" name="login[password]" type="password">        <br>        <span><a href="/customer/account/forgotpassword/" target="_blank">Forgot Password?</a></span>      </div>  </li>  <li style="margin-top:2em;"><button class="button" type="button" id="onepage-first-goon" style="display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);">Continue</button></li></ul></form></fieldset>';

    $(".col-1, .col-2").remove();
    $(".checkout-seperator-top2, .checkout-seperator-bottom, .checkout-seperator-top1").remove();
    $(".step-title").hide();

    // Insert HTML
    $(".col2-set").append(html);

    $('#login\\:guest').click(function() {
        $(".password-container").hide();
    });

    $('#login\\:login').click(function() {
        $(".password-container").show();
    });

    $("#onepage-first-goon").click(function() {

        if ($('#login\\:guest').is(':checked')) {
            checkout.setMethod();
        }
        else {
            alert("login");
            //$("#login-form").submit();
            //_gaq.push('send', 'event', 'customerlogevent', 'clicklogin');
        }
    });

    //TODO: save email in first step
    var email = 'daniel@caslegate.co';

    // Step 2

    $("#co-billing-form > fieldset:nth-child(1)").attr('style', 'padding: 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);');

    $("#co-billing-form > fieldset").prepend('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;"">Your Billing Information</legend>');

    $("#co-billing-form > fieldset:nth-child(1) ul").append('<li class="control"><div class="input-box" style="width: 260px;"><input name="billing[use_for_shipping]" id="billing:use_for_shipping_yes" value="1" checked="checked" title="Deliver to this address" onclick="$(\'shipping:same_as_billing\').checked = true;" class="radio validation-passed" type="checkbox"><label for="billing:use_for_shipping_yes">Deliver to this address</label></div></li>');

    $("#billing\\:email").val(email);
    $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(2)").hide();
    $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(10)").hide();
    $("li.control:nth-child(13)").hide();
    $(".invisible").hide();
    $("li.control:gt(0)").remove();
    $("#co-billing-form > fieldset:nth-child(1) ul").append('<li><p class="required">* Required Fields</p></li><li style="margin-top:2em;" id="continue-container"></li>');

    // Continue button
    //<button class="button" type="button" id="onepage-first-goon" style="display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);">Continue</button>
    var continueButton = $("#continue-btn").detach();
    $("#continue-container").append(continueButton);
    $("#continue-btn span").remove();
    $("#continue-btn").text('Continue');
    $("#continue-btn").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

    var findaddressText = $("#meanbee\\:billing_address_find").text();
    $("#meanbee\\:billing_address_find span").remove();
    $("#meanbee\\:billing_address_find").text(findaddressText);

    $("#meanbee\\:billing_address_find").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

    $(".step").prepend(progress);

    $("#billing-buttons-container").remove();
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);