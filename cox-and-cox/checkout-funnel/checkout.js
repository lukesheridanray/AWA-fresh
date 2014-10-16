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
        $("li.control:nth-child(3)").remove();
        $("#co-billing-form > fieldset:nth-child(1) > ul:nth-child(1) > li:nth-child(2)").remove();

        $("#co-billing-form > fieldset:nth-child(1)").attr('style', 'padding: 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);');

        $("#co-billing-form > fieldset").prepend('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;"">Your Billing Information</legend>');

        $("#billing\\:email").val(email);
        $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(2)").hide();
        $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(10)").hide();
        $("#billing-new-address-form > fieldset:nth-child(1) > ul:nth-child(2) > li:nth-child(2)").addClass('remainhidden');
        $("#register-customer-password").addClass('remainhidden');
        $("li.control:nth-child(13)").hide();
        $(".invisible").hide();
        //$("li.control:gt(0)").remove();

        // Continue button
        //<button class="button" type="button" id="onepage-first-goon" style="display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);">Continue</button>
        var continueButton = $("#continue-btn").detach();

        $("#co-billing-form > fieldset:nth-child(1) ul").append('<li style="margin-top:2em;" id="billing-buttons-container"></li>');
        $("#billing-buttons-container").remove();
        $("#billing-buttons-container").append(continueButton);
        $("#continue-btn span").remove();
        $("#continue-btn").text('Continue');
        $("#continue-btn").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

        var findaddressText = $("#meanbee\\:billing_address_find").text();
        $("#meanbee\\:billing_address_find span").remove();
        $("#meanbee\\:billing_address_find").text(findaddressText);

        $("#meanbee\\:billing_address_find").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');

        $(".step").prepend(progress);

        $("#meanbee\\:billing_input_address_manually").click(function() {
            $(".fields:not(.remainhidden)").css('display', 'block');
        });

        $("#meanbee\\:billing_address_find").click(function() {
            $(".fields:not(.remainhidden)").css('display', 'block');

            exp.func.waitForElement("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1) span", function () {
                var btnText = $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1)").text();
                $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1) span").remove();
                $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1)").text(btnText);
                $("#meanbee\\:billing_address_selector > div:nth-child(2) > button:nth-child(1)").attr('style', 'display: block; font-size: 1em; font-weight: bold; padding: 0.25em .75em; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);');
            },10000,50);
        });

        $("#co-billing-form > fieldset:nth-child(1) > div:nth-child(3) > p.required").remove();

        // Tick box
        $("ul.form-list:nth-child(2) > li:nth-child(2)").before('<li class="control" style="margin-top:1em;"><div class="input-box" style="width: 260px;"><input name="billing[use_for_shipping]" id="billing:use_for_shipping_yes" value="1" checked="checked" title="Deliver to this address" onclick="" class="radio validation-passed" type="checkbox"><label for="billing:use_for_shipping_yes">Deliver to this address</label></div></li>');

        $("ul.form-list:nth-child(2) > li:nth-child(2)").addClass('fields');
        $("ul.form-list:nth-child(2) > li:nth-child(2)").css('display', 'none');
        $("ul.form-list:nth-child(2) > li:nth-child(3)").addClass('fields');
        $("ul.form-list:nth-child(2) > li:nth-child(3)").css('display', 'none');

        // Step 3 - Delivery
        // Create a dropdown
        var createDropdownRejigForm = function () {
            var options = [];
            $("#checkout-shipping-method-load li").each(function() {
                if ($(this).find("label").length) {
                    options.push({
                        'value': $(this).find("input").val(),
                        'label': $(this).find("label").text().replace(/\s\(.*(?=\s£)/,'')
                    });
                }
            });

            var deliveryOptions = '<select name="shipping_method">';
            while (option = options.pop()) {
                deliveryOptions += '<option value="' + option.value + '" >' + option.label + '</option>';
            }
            deliveryOptions += '</select>';

            $("#checkout-shipping-method-load dd").html(deliveryOptions);
            $('#checkout-shipping-method-load dd').attr('style', 'margin: 7px 0 12px 18px;');

            if ( ! $(".display-address").length) { // will need to be removed before reinserted
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

                var sepShipping = false;
                if ($("#shipping\\:street1").val()) {
                    sepShipping = true;
                }

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
                    + '<a href="#" id="diff-delivery-addr" style="text-decoration:underline;">Deliver to different address</a>';

                $("#co-shipping-method-form")
                            .prepend('<div class="field display-address" style="margin-top:2em;margin-left: 18px;">' +  address + '</div>');

                $("#checkout-shipping-method-load").css('margin-top', '3em');
                $("#co-shipping-method-form > div.delivery-note").css('margin-top', '3em');

                // Override
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

        $("#continue-btn").click(function() {
            exp.func.waitForElement('#checkout-shipping-method-load label', createDropdownRejigForm,10000,50);
        });

        $("#co-shipping-method-form").wrap('<fieldset style="padding: 1em; width: 445px; margin: 0px auto; border: 1px solid rgb(204, 204, 204);" class="co-box"></fieldset>');

        $('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.5em;">Your Delivery Information</legend>').prependTo('#checkout-step-shipping_method > fieldset');

        $("#shipping-method-buttons-container").css('border',0);

        $("#shipping-method-buttons-container > button span").remove();
        $("#shipping-method-buttons-container > button").text('Continue');
        $("#shipping-method-buttons-container > button").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);float: none;');

        $("#shipping-method-buttons-container").css('margin-top', '3em');

        // Step 4 - Payment
        
        $('#co-payment-form > fieldset').attr('style','width: 445px;margin: 0 auto;');
        $('#payment-buttons-container > p.required').remove();

        $("#payment-buttons-container > button span").remove();
        $("#payment-buttons-container > button").text('Secure Payment');
        $("#payment-buttons-container > button").attr('style','display: block; font-size: 1.5em; font-weight: bold; padding: 0.75em 2em; margin: 0px auto; border: 1px solid rgb(0, 0, 0); background: none repeat scroll 0% 0% rgb(241, 194, 0);float: none;');

        $("#payment-buttons-container").wrap('<fieldset style="padding: 1em; width: 445px; margin: 1em auto; border: 1px solid rgb(204, 204, 204);" class="co-box"></fieldset>');
        $('<legend style="display: block; padding: 0px 1em; font-weight: bold; font-size: 1.2em;">Pay by Credit or Debit Card</legend>').prependTo('#checkout-step-payment > fieldset:eq(0)');

        $('<p style="width: 20em;font-size:.9em;margin: .5em auto;">Credit and debit cards are not charged until the item is shipped from our warehouse</p>').insertAfter('#checkout-step-payment > fieldset:eq(0)');

        $("#shipping-method-buttons-container > button").click(function() {
            exp.func.waitForElement('#checkout-payment-method-load label', function() {

                setTimeout(function() {

                    payment.switchMethod('sagepaydirectpro');

                    $("#p_method_sagepaydirectpro").prop('checked', true);

                    $('<h2 style="font-size:1.5em;font-weight:bold;width: 445px;margin: 0 auto;">Secure Payment Information</h2>').prependTo("#co-payment-form");

                    var paymentform = $("#payment_form_sagepaydirectpro").detach();

                    $("#checkout-step-payment > fieldset").prepend(paymentform);

                    $("#payment_form_sagepaydirectpro").css('width', 'auto');
                    $("#payment_form_sagepaydirectpro .input-box").css('width', '150px');
                    $("label > em").remove();
                    $("#payment_form_sagepaydirectpro label").each(function() {
                        $(this).text($(this).text() + ':');
                    });
                    $("#payment_form_sagepaydirectpro label").attr('style','text-align: right;');
                    $("#payment-buttons-container").css('margin-top', '2em');
                    $("#checkout-payment-method-load > dt:nth-child(1) > label").css('background-image','none');
                    $("#checkout-payment-method-load > dt:nth-child(1) > label").css('padding-left',0);
                    $("#checkout-payment-method-load > dt:nth-child(1) > label").css('font-weight','normal');
                    $("#checkout-payment-method-load > dt:nth-child(3) > label").html("Pay with Paypal");
                    $("#checkout-payment-method-load > dt:nth-child(3) > label").css('font-weight','normal');

                    $("#co-payment-form > fieldset").attr('style', 'width: 250px; margin: 0 auto 2em auto;');

                    var paypalText = '';

                    $('#p_method_paypal_express').click(function() {
                        $("#checkout-step-payment > fieldset > legend").text("Pay by PayPal");
                        setTimeout(function() {

                            if ( ! paypalText.length) {
                                paypalText = $('#payment_form_paypal_express > li').text();
                                $('#payment_form_paypal_express > li').remove();
                            }

                            $('<p style="width: 20em;font-size: .9em;margin: .5em auto;" id="paypal_text">' + paypalText + '</p>')
                                .insertBefore('#payment-buttons-container');

                        }, 100)
                    });

                    $('#p_method_sagepaydirectpro').click(function() {
                        $("#paypal_text").remove();
                        $("#checkout-step-payment > fieldset > legend").text("Pay by Credit or Debit Card");
                    });

                    $('#payment_form_sagepaydirectpro select').css('width','auto');
                    var year = $('#sagepaydirectpro_expiration_yr').detach();
                    $('#sagepaydirectpro_expiration').after(year);

                    $('#sagepaydirectpro_cc_type_exp_div > div > div:nth-child(1)')
                        .css('width','260px');

                    $('#sagepaydirectpro_expiration')
                        .css('margin-right','1em');

                    $('#sagepaydirectpro_cc_cid').css('width', '50px');

                    $('.cvv-what-is-this').attr('style', 'position: relative;top: 3px;');

                }, 500);
            });
        });
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    })(jQuery);