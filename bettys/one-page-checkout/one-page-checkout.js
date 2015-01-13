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

// Define safe console log function
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Bettys vertical checkout - 0.19');


// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'variation': 1,
    'windowHeight': $(window).height(),
    'isLoggedIn': ( $('.links .last a').text().indexOf('Log Out') !== -1 ) ? true : false,
    'loginWidget': $('.onestepcheckout-login-link'),
    'NCcontentRImage': '//cdn.optimizely.com/img/14847832/b5ad0505be384613b7faa794bc1717bf.png',
    'vanIcon': '//cdn.optimizely.com/img/14847832/310371129b3a437b96c450252efd4f12.png',
    'awaTick': '//cdn.optimizely.com/img/14847832/f2f9b8bda86c404a81ea8252d09baa56.png',
    'step1Heading': '<h3>1. Billing Address</h3> \
                     <p>Please enter your details. Required information is indicated with a <span class="required">*</span></p>',
    'step2Heading': '<h3>2. Delivery Address</h3>',
    'step3Heading': '<h3>3. Delivery Options</h3>',
    'step4Heading': '<h3>4. Secure Payment</h3>',
    'loginTitle': '<h3>ALREADY HAVE AN ACCOUNT?</h3>',
    'orderButtonTitle': 'PLACE ORDER',
    'step1Fields': $('#billing_address'),
    'step2DelMethodOptions': ' \
                          <div id="deliveryAddress" class="exp-del-method-options-wrap"><span class="exp-del-method-options"> \
                          <input class="radiobutton" name="" id="billingOptionUse" value="1" type="checkbox"> \
                          <label for="billingOptionUse">Deliver to my billing address</label></span> \
                          <span class="exp-del-method-options"> \
                          <input class="radiobutton" name="" id="billingOptionDiff" value="1" type="checkbox"> \
                          <label for="billingOptionDiff">Deliver to a different address</label></span></div> \
                          <div class="validation-advice" id="expShipOptionValidation">You must specify a shipping address.</div>',
    'step2ShipAddress': ( $('#shipping-address-select').length ) ? $('#shipping_address .form-alt') : $('#shipping_address_list'),
    'step3DelMethod': $('.onestepcheckout-shipping-method'),
    'step3GiftMessages': $('.onestepcheckout-giftmessages'),
    'step3Comments': $('.onestepcheckout-comments'),
    'step4PaymentMethods': $('.payment-methods'),
    'step4OrderButton': $('.onestepcheckout-place-order-wrapper'),
    'step4Terms': $('.onestepcheckout-place-order-message'),
    'step4Summary': $('div.onestepcheckout-summary'),
    'step4SecureLogo': $('.bettys-footer-secure'),
    'perfectPopup': '<div class="perfect_popup"> \
                      <div class="perfect_popup_in"><a class="perfect_close" href="#">X</a> \
                      <h4>PERFECTION GUARANTEE</h4> \
                      <p>Your Bettys parcel is carefully packed by hand here in Yorkshire, to ensure \
                      it stays perfect. In the unlikely event that your goods are not fresh and perfect \
                      on arrival, we GUARANTEE to replace or refund at your convenience.</p> \
                      </div></div>',
    'rememberLabel': 'Remember my card details so I can check out more quickly next time',
    'deliveryInitial': $('<div class="exp-delmsg exp-delmsg--initial">Please complete steps 1 &amp; 2 above, dates, prices and gift options will \
                       then be shown here. Thank you.<br><br>(As always your order will be \
                       beautifully packaged and delivered with our <a class="change_style" href="#">Perfection Guarantee</a>)')

};


// Styles
// String containing the CSS for the experiment
exp.css = ' \
.onestepcheckout-description, \
.onestepcheckout-numbers, \
.onestepcheckout-threecolumns, \
#expShipOptionValidation, \
.input-fax, \
.awatick, .onestepcheckout-giftmessages, .exp-del-instructions, \
.onestepcheckout-enable-newsletter, .id_create_account-wrap { \
    display: none; \
} \
.exp-column-left { \
    width: 400px; \
    float: left; \
    padding-bottom: 25px \
} \
.exp-step1 .exp-column-left { \
    padding-bottom: 0; \
} \
.exp-column-right { \
    float: right; \
    width: 300px; \
    padding: 10px 0 0 30px; \
    position: relative; \
    top: -10px; \
    background: url('+exp.vars.NCcontentRImage+') top left no-repeat transparent; \
} \
.exp-column-full { \
    width: 100%; \
    clear: both; \
    padding: 10px 0 10px 200px; \
    border-top: 1px solid #D8D2C7; \
    position: relative; \
} \
.exp-column-heading { \
    width: 200px; \
    position: absolute; \
    top: 0; \
    left: 0; \
} \
.exp-column-heading .required { \
    color: #98002E; \
    font-weight: bold; \
} \
.exp-column-heading h3 { \
    font-size: 1em; \
    margin: 10px 0; \
} \
.signin-button { \
    background-image: none; \
    padding-left: 50px; \
    font-size: 16px; \
    padding-right: 50px; \
} \
.input-box label, \
.payment-method label { \
    margin: 16px 0 0 0; \
} \
.remember-label { \
  margin: 2px 0 0 -20px !important; \
} \
select.validate-cc-exp { \
    width: 160px; \
    margin-right: 15px; \
} \
select.year.required-entry { \
    width: 90px; \
} \
.input-telephone, .input-postcode, .input-company { \
    width: 175px; \
} \
.input-country { \
    width: 240px; \
} \
.validate-ccsgpdp-cvn { \
    width: 102px !important; \
} \
div.onestepcheckout-summary-wrap { \
    width: 330px; \
    position: absolute; \
    bottom: 94px; \
    right: 0px; \
    padding: 0 80px 0 20px; \
} \
div.onestepcheckout-summary { \
    width: 320px; \
    padding: 0 80px 0 10px; \
    background: #fff; \
} \
.onestepcheckout-summary-inner-wrap td { \
    vertical-align: bottom; \
} \
.onestepcheckout-totals { \
    position: relative; \
    top: 0px; \
} \
.bettys-footer-secure-exp { \
    position: absolute; \
    bottom: 0; \
    right: 70px; \
} \
.button span span { \
    background-image: none; \
    padding-right: 10px; \
} \
.onestepcheckout-login-link .button { \
    width: 237px; \
} \
.onestepcheckout-place-order-wrapper { \
   float: left; \
   margin: -10px 0 30px 0 !important; \
} \
.onestepcheckout-place-order-message { \
    clear: both; \
    padding: 15px 0 0 0; \
} \
.exp-delmsg--initial { \
    display: block; \
} \
.exp-delmsg--loaded { \
    display: none; \
} \
.perfect_close { \
    width: 20px; \
    height: 20px; \
    position: absolute; \
    background: #98002e; \
    top: -10px; \
    right: -10px; \
    border-radius: 10px; \
    -moz-border-radius: 10px; \
    -webkit-border-radius: 10px; \
    color: #fff; \
    line-height: 20px; \
    text-align: center; \
    font-size: 11px; \
    text-indent: 1px; \
    font-family: verdana, sans-serif; \
} \
.perfect_popup { \
    border: 2px solid #98002e; \
    border-radius: 5px; \
    background: #fff; \
    position: fixed; \
    z-index: 999; \
    top: 40%; \
    left: 35%; \
    margin-left: -12px; \
    width: 30%; \
    padding: 15px; \
    text-align: center; \
    font-size: 18px; \
    display: none; \
} \
.popup { \
    overflow: auto !important; \
    max-height: '+exp.vars.windowHeight+'px !important; \
}  \
.input-company, .input-address, .input-city, .input-region { \
    display: block; \
} \
#billing_address_list .input-company, \
#billing_address_list .input-fax, \
#billing_address_list .input-address, \
#billing_address_list .input-city, \
#billing_address_list .input-region { \
    display: none; \
} \
.input-firstname { \
    margin-right: 16px; \
} \
.input-firstname, .input-lastname { \
    width: 175px; \
    float: left; \
} \
.input-country select { \
    width: 365px; \
} \
.input-different-shipping { \
    display: none; \
} \
[type="checkbox"] { \
    margin-bottom: 5px; \
    margin-right: 5px; \
    position: relative; \
    top: 1px; \
} \
#onestepcheckout-form #allow-gift-message-container .group-select { \
    padding-left: 0 !important; \
} \
#allow-gift-message-container label { \
    display: none; \
} \
.onestepcheckout-comments { \
    display: none; \
} \
.shipping-address-wrapper { \
    display: none; \
    padding-bottom: 10px; \
} \
.exp-delmsg .message #join_pop { \
    width: 320px; \
    margin: 15px 0 15px 0; \
    background-image: url("'+exp.vars.vanIcon+'"); \
    background-repeat: no-repeat; \
    background-position: 12px 4px; \
} \
.exp-delmsg .message #join_pop:hover { \
    background-position: 12px -52px; \
} \
.exp-delmsg .message #join_pop span span { \
    padding-right: 0px; \
    background: none; \
} \
.exp-delmsg .message #join_pop:hover span { \
    color: #98002E; \
    border-top-color: #fff; \
    border-bottom-color: #fff; \
} \
.exp-delmsg .message, \
.exp-delmsg .message strong { \
    color: #98002E; \
} \
.exp-delmsg .message { \
    margin-top: 6px; \
} \
.exp-delmsg .input-checkbox { \
    margin-top: 5px; \
} \
.payment-methods { \
    margin-top: 5px; \
} \
.exp-del-method-options { \
    display: block; \
    padding: 5px 0 2px 0; \
} \
.exp-delmsg--initial { \
    font-size: 0.95em; \
    position: relative; \
    top: -14px; \
} \
.onestepcheckout-shipping-method-block p { \
    border: 3px solid #e5e5e5; \
    padding: 10px; \
} \
.bettys-footer-cards { \
    margin-bottom: -20px; \
} \
.awatick { \
    padding: 0px 0px 17px 30px; \
    font-size: 13px; \
    background-image: url("'+exp.vars.awaTick+'"); \
    background-repeat: no-repeat; \
    line-height: 25px; \
} \
.exp-del-instructions { \
    margin-top: 20px !important; \
} \
.exp-del-method-options-wrap.error { \
    border: 1px solid #f00; \
    width: 362px; \
    padding: 5px; \
} \
.onestepcheckout-giftmessages label, \
.exp-del-instructions label { \
    margin-left: 9px; \
} \
.exp-thin-column { \
    padding-right: 400px !important; \
} \
.show-del-price { \
    color: #98002E; \
} \
.exp-dummy-select { \
    width: auto !important; \
    max-width: 470px !important; \
    padding: 0 0 4px 8px !important; \
    margin: 0 0 20px 0 !important; \
    cursor: pointer; \
/*    border: 1px solid #DDDDDD !important; \
    width: auto !important; \
    max-width: 470px; \
    padding: 6px 16px 6px 8px !important; \
    color: #5e5e5e !important; \
    font: italic normal 0.9em Georgia,Times,"Times New Roman",serif !important; \
    text-transform: none !important; \
    margin: 10px 0 20px 0 !important; \
    background: #fff !important; \
    position: relative; \
*/ \
} \
.exp-dummy-select:hover,\
.exp-dummy-select:focus { \
    border: 1px solid #DDDDDD !important; \
} \
.exp-dummy-select strong { \
    position: absolute; \
    top: 11px; \
    right: 8px; \
    display: block; \
    width: 17px; \
    height: 9px; \
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJBAMAAAAmxto/AAAAA3NCSVQICAjb4U/gAAAAFVBMVEX///8zMzMzMzMzMzMzMzMzMzMzMzOZaqduAAAAB3RSTlMAEYiZu8z/X3YIJQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMi8xMC8xNGb+Kj8AAAAYdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3Jrc0+zH04AAAA0SURBVAiZY1BxgQAFBtE0MEgVYGAMA7MCGRgggkAhBoggSAgsCBYCC0KEgIJQIaCgIYgEAFhHDtFKiaEUAAAAAElFTkSuQmCC") 0 0 no-repeat #fff !important; \
} \
.empty-li-fix { \
  padding: 3px 0 0 0 !important; \
} \
@media screen and (max-width: 990px) { \
    .exp-column-heading { \
        position: relative !important; \
    } \
    .exp-column-full { \
        padding: 0 0 15px 0 !important; \
    } \
} \
@media screen and (max-width: 790px) { \
    .onestepcheckout-summary-wrap { \
        position: static !important; \
        padding: 0 !important; \
    } \
    .onestepcheckout-place-order-wrapper { \
       margin: 10px 0 10px 0 !important; \
    } \
    .bettys-footer-secure-exp { \
        position: static !important; \
        float: left !important; \
    } \
    .exp-column-right { \
        width: auto !important; \
        padding: 0 !important; \
        top: 0 !important; \
        background: none !important; \
    } \
    .exp-column-right h3 { \
        display: none !important; \
    } \
    .exp-column-right .button { \
        width: auto !important; \
    } \
    .exp-column-right .button span span { \
        padding: 0 !important; \
        font-size: 1.1em !important; \
    } \
} \
@media screen and (max-width: 590px) { \
    .exp-column-right { \
        position: absolute !important; \
        top: 0 !important; \
        right: 0 !important; \
    } \
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

// This function waits till a function is available, then runs a callback function
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

// Function to fill in the gift message
exp.func.giftMessage = function() {
    var giftmsg = '';
    $('.checkout-line').each(function(){
        if ($(this).val() == '') {
            giftmsg = giftmsg + $(this).val();
        } else {
            giftmsg = giftmsg + $(this).val() + '\n';
        }
    });
    $('#gift-message-whole-message').val(giftmsg);
};

exp.func.checkBillingFields = function() {
    var isComplete = true;
    if( !$('#billing-address-select').length || ( $('#billing-address-select').length && $('#billing-address-select').val() === '' ) ) {
        var requiredFields = $('[name="billing[postcode]"], [name="billing[street][]"]:eq(0), \
                                [name="billing[city]"], [name="billing[country_id]"]');
        requiredFields.each(function(){
            if( $(this).val() === '' ) {
                isComplete = false;
            }
        });
    }
    if( isComplete && $('#billingOptionUse').is(':checked') ) {
        $('.exp-delmsg--loaded').show();
        $('.exp-delmsg--initial').hide();
    } else if( $('#billingOptionUse').is(':checked') ) {
        $('.exp-delmsg--loaded').hide();
        $('.exp-delmsg--initial').show();
    }
};

exp.func.checkShippingFields = function() {
    var isComplete = true;
    if( !$('#shipping-address-select').length || ($('#shipping-address-select').length && $('#shipping-address-select').val() === '') ) {
        var requiredFields = $('[name="shipping[postcode]"], [name="shipping[street][]"]:eq(0), \
                                [name="shipping[city]"], [name="shipping[country_id]"]');
        requiredFields.each(function(){
            if( $(this).val() === '' ) {
                isComplete = false;
            }
        });
    }
    if( isComplete ) {
        $('.exp-delmsg--loaded').show();
        $('.exp-delmsg--initial').hide();
    } else {
        $('.exp-delmsg--loaded').hide();
        $('.exp-delmsg--initial').show();
    }
};

exp.func.checkSummaryHeight = function() {
    var maxHeight = $('.exp-column-wrapper').height() - 300;
    var summaryHeight = $('.onestepcheckout-summary').height();
    var step4Height = $('.exp-step4').height() - 100;
    var step3Height = $('.exp-step3').height() + step4Height;
    if( summaryHeight > step4Height) {
        $('.exp-step3').addClass('exp-thin-column');
    }
    if( summaryHeight > maxHeight) {
        $('.onestepcheckout-summary-inner-wrap').css({'height': 'auto'});
        $('.onestepcheckout-summary-wrap').css({'position':'relative','float':'right','bottom':step4Height-200+'px'});
        $('.exp-step3').removeClass('exp-thin-column');
    }
};

exp.func.doubleCheckPriceInMessage = function( shippingCell ) {
    var msgElement = $('.show-del-price');
    var shownPrice;
    var realPrice;
    if( msgElement.length && shippingCell.length ) {
        shownPrice = msgElement.text().trim().replace('(','').replace(')','');
        realPrice = shippingCell.next('.value').text().trim();
        if( shownPrice !== realPrice ) {
            msgElement.text('(' + realPrice + ')');
        }
    }
};

exp.func.updateDeliveryMessage = function() {
    var shippingCell = $('.onestepcheckout-totals .title').filter(
        function(){ return $(this).text().trim() === 'Shipping'; }
    );
    var popupCloseButton = $('a#close');
    var shippingTotal;
    var date;
    var delMessage = $('.full-atp');
    var delPrice = delMessage.find('.show-del-price');
    var regmatch;

    exp.func.doubleCheckPriceInMessage( shippingCell );

    if( shippingCell.length && delMessage.length && !delPrice.length ) {

        if(exp.vars.variation === 1) {

            shippingTotal = shippingCell.next('.value').text().trim();
            date = delMessage.find('.message strong').text();
            delMessage.find('.message').html(
                delMessage.find('.message').html().toString()
                .replace('We can deliver your order by', 'Your order will be delivered by')
                .replace('Your order will be delivered on', 'Your order will be delivered by')
                .replace('via ', 'via <strong>')
            );
            delMessage.find('#join_pop').before( '</strong> <span class="show-del-price">(' + shippingTotal + ')</span>' );
      
        } else if(exp.vars.variation === 2) {

            if( !$('.exp-dummy-select').length ) {

                shippingTotal = shippingCell.next('.value').text().trim();
                regmatch = delMessage.find('.message').html().toString().match(/(.*)(<strong>)(.*)(<\/strong>)(.*)(via )(.*)(\.<a)/);
                
                delMessage.find('.message #join_pop').hide();
                delMessage.find('.message').html(
                    delMessage.find('.message').html().toString().replace(/(.*)(<a )(.*)/,function(match,p1,p2,p3){
                        var str = '<select class="exp-dummy-select" onmousedown="this.blur();window.focus();document.location.hash = \'#join_form\';return false;"> \
                                <option>' + regmatch[3] + ' - ' + regmatch[7] + ' - ' + shippingTotal + ' &nbsp;&nbsp;&nbsp;</option> \
                                </select>' + p2 + p3;
                        return str;
                    })
                );
            }
        }

    }
    if( delMessage.length ) {
        $('.awatick, .onestepcheckout-giftmessages, .exp-del-instructions').show();
    } else {
        $('.awatick, .onestepcheckout-giftmessages, .exp-del-instructions').hide();
    }
    if( popupCloseButton.length ) {
        popupCloseButton.attr('href', '#join-form');
    }
    exp.func.checkSummaryHeight();
    if( !$('div.onestepcheckout-summary h4').length ) {
        $('div.onestepcheckout-summary').prepend( '<h4>Order summary</h4>' );
    }
    if( $('.input-different-shipping input').is(':checked') ) {
        $('#billingOptionUse').trigger('click');
    }
};

exp.func.interveneLogin = function() {
    setTimeout( function() {
        if ( $('#onestepcheckout-login-error').length && $('#onestepcheckout-login-error').css('display') === 'none' ) {
            setTimeout( function() {
                if ( $('#onestepcheckout-login-error').length && $('#onestepcheckout-login-error').css('display') === 'none' ) {
                    setTimeout( function() {
                        if ( $('#onestepcheckout-login-error').length && $('#onestepcheckout-login-error').css('display') === 'none' ) {
                            location.reload();
                        }
                    }, 3000);
                }
            }, 3000);
        }
    }, 1000);
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // Unhide the form
    $('#onestepcheckout-form').show();

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // add columns
    $('.onestepcheckout-threecolumns').before( ' \
    <div class="exp-column-wrapper"> \
      <div class="exp-column-full exp-step1"> \
          <div class="exp-column-left"> \
              <div class="exp-column-heading"> \
              </div> \
          </div> \
          <div class="exp-column-right"> \
          </div> \
      </div> \
      <div class="exp-column-full exp-step2"> \
          <div class="exp-column-left"> \
                <div class="exp-column-heading"> \
                </div> \
          </div> \
      </div> \
      <div class="exp-column-full exp-step3"> \
          <div class="exp-column-heading"> \
          </div> \
      </div> \
      <div class="exp-column-full exp-step4"> \
          <div class="exp-column-heading"> \
          </div> \
      </div> \
    </div> '
    );

    // append content to columns

    $('.exp-step1')
    .find('.exp-column-left').append( this.vars.step1Fields )
    .find('.exp-column-heading').append( this.vars.step1Heading );

    if( !this.vars.isLoggedIn ) {
        $('.exp-step1 .exp-column-right').append( this.vars.loginWidget );
    }

    $('.exp-step2')
    .find('.exp-column-left').append( $('.input-different-shipping').add( this.vars.step2ShipAddress ) )
    .find('.exp-column-heading').append( this.vars.step2Heading );

    $('.exp-step3')
    .append(
      this.vars.deliveryInitial.add(
        this.vars.step3DelMethod.add( this.vars.step3GiftMessages ).add( this.vars.step3Comments )
      )
    )
    .find('.exp-column-heading').append( this.vars.step3Heading );

    $('.exp-step4')
    .append( this.vars.step4PaymentMethods.add( this.vars.step4OrderButton ).add( this.vars.step4Terms ).add( this.vars.step4Summary ).add( this.vars.step4SecureLogo ) )
    .find('.exp-column-heading').append( this.vars.step4Heading );


    // DOM changes

    $('[name="shipping[telephone]"]').next('small').css({'display':'block','padding-top':'5px','width':'370px'}).text('This is the number we use for delivery queries and notifications. If you are sending a gift as a suprise, you may wish to enter your own number here.');

    $('.onestepcheckout-place-order-message').html(
        $('.onestepcheckout-place-order-message').html().toString().replace('and <a', 'and<br /><a')
    );

    $('body').append( this.vars.perfectPopup );

    this.vars.loginWidget
    .prepend( this.vars.loginTitle )
    .find('a').addClass('button').html( '<span><span class="signin-button">SIGN IN HERE</span></span></button>' );
  
    this.vars.step1Fields.find( '.onestepcheckout-numbers' ).next( 'small' ).remove();

    $('.field.dob').parent('li').remove();

    $('#onestepcheckout-place-order span span').html( this.vars.orderButtonTitle );

    $('div.onestepcheckout-summary').wrap( '<table class="onestepcheckout-summary-inner-wrap"><tr><td>' );
    $('.onestepcheckout-summary-inner-wrap').wrap( '<div class="onestepcheckout-summary-wrap" />' );
    $('div.onestepcheckout-summary').prepend( '<h4>Order summary</h4>' );

    this.vars.step4SecureLogo.addClass('bettys-footer-secure-exp').removeClass('bettys-footer-secure');

    $('.remember-label').html( this.vars.rememberLabel );

    $('.input-different-shipping input,.input-different-shipping label').wrapAll( '<div class="initialBillingCheckbox" />' );
    $('.input-different-shipping').after( this.vars.step2DelMethodOptions );

    $('.onestepcheckout-shipping-method-block,.onestepcheckout-giftmessages,.onestepcheckout-comments').wrapAll('<div class="exp-delmsg exp-delmsg--loaded" />');

    this.vars.step2ShipAddress.wrap('<ul class="shipping-address-wrapper" />');

    $('.onestepcheckout-comments').before( ' \
        <div class="input-checkbox exp-del-instructions"> \
            <input name="" id="openCloseComments" value="1" type="checkbox"> \
            <label for="openCloseComments">Add extra delivery instructions for the courier.</label> \
        </div> ');
    $('.onestepcheckout-comments .small').prepend('e.g. "If not in leave with neighbour."<br />');
    $('.onestepcheckout-comments').html( $('.onestepcheckout-comments textarea').add( $('.onestepcheckout-comments .small') ) );

    $('#allow-gift-message-container .no-padding').html(
        $('#allow-gift-message-container .input-box').filter( function(){ return !$(this).find('input').hasClass('validation-passed'); } ).add( $('#allow-gift-message-container .small') ).add( $('#allow-gift-message-container #gift-message-whole-message') )
    );

    $('#myModal').appendTo('body');

    $('.onestepcheckout-giftmessages').before(
        '<div class="awatick">Beautifully packaged</div> \
        <div class="awatick">Delivered with our <a href="#" class="change_style">Perfection Guarantee</a></div>'
    );

    $('#id_create_account').parent('div').addClass('id_create_account-wrap');

    $('#billing_address_list .input-company, #billing_address_list .input-address, #billing_address_list .input-city, #billing_address_list .input-region, .onestepcheckout-enable-newsletter, .id_create_account-wrap')
    .parent('li').addClass('empty-li-fix');   
    
    // Behaviour

    this.func.checkSummaryHeight();

    // Initially check to see if we should open the delivery options

    if( $('.input-different-shipping input').is(':checked') ) {
        $('#billingOptionUse').prop('checked', true);
        exp.func.checkBillingFields();
    } else if( $('#billingOptionDiff').is(':checked') ) {
        $('.shipping-address-wrapper').show();
        exp.func.checkShippingFields();
    }

    // Open perfect popup

    $('.change_style').click(function(e){
        e.preventDefault();
        $('.perfect_popup').show();
    });
    $('.perfect_close').click(function(e){
        e.preventDefault();
        $('.perfect_popup').hide();
    });

    // Show extra billing fields

    (function(){
        var pCode = $('.validate-zip-international');
        var country = $('[name="billing[country_id]"]');
        function showFields() {
            $('#billing_address_list .input-company, #billing_address_list .input-address, #billing_address_list .input-city, #billing_address_list .input-region, .onestepcheckout-enable-newsletter, .id_create_account-wrap')
            .show()
            .parent('li').removeClass('empty-li-fix');
        }
        if( pCode.val() !== '' || country.val() !== 'GB' ) {
            showFields();
        }
        pCode.bind('keyup', function() {
            if( $(this).val() !== '' ) {
                showFields();
            }
        });
        country.bind('change', function() {
            if( $(this).val() !== 'GB' ) {
                showFields();
            }
        });
    })();

    // Show delivery message

    $('#billingOptionUse,#billingOptionDiff').bind('click',function(){
        var _this = $(this);
        $('#billingOptionUse,#billingOptionDiff').prop('checked', false);
        _this.prop('checked', true);
        if( $('#billingOptionDiff').is(':checked') ) {
            if( $('.input-different-shipping input').is(':checked') ) {
                $('.input-different-shipping input').trigger('click');
            }
            $('.shipping-address-wrapper').show();
            exp.func.checkShippingFields();
        } else {
            exp.func.checkBillingFields();
            if( !$('.input-different-shipping input').is(':checked') ) {
                $('.input-different-shipping input').trigger('click');
            }
            $('.shipping-address-wrapper').hide();
        }
    });

    // Check something has been entered into billing address
    $('#billing_address_list input').bind('keyup', function() { setTimeout(exp.func.checkBillingFields,500); } );
    $('#billing_address_list input').bind('paste', exp.func.checkBillingFields );
    $('#billing_address_list select, #billing_address_list input').bind('change', exp.func.checkBillingFields );

    // Check something has been entered into shipping address
    $('#shipping_address_list input').bind('keyup', function() { setTimeout(exp.func.checkShippingFields,500); } );
    $('#shipping_address_list input').bind('paste', exp.func.checkShippingFields );
    $('#shipping_address_list select, #shipping_address_list input').bind('change', exp.func.checkShippingFields );
    
    $('.pcaautocomplete').bind('click', function() {
        setTimeout( function(){
            exp.func.checkBillingFields();
            exp.func.checkShippingFields();
        }, 500);
        
    } );

    // Open / close comments

    $('#openCloseComments').bind('click',function(){
        if( $(this).is(':checked') ) {
            $('.onestepcheckout-comments').show();
        } else {
            $('.onestepcheckout-comments').hide();
        }
    });

    // Shipping address option validation

    $('#onestepcheckout-place-order').bind('click',function(){
        var use = $('#billingOptionUse');
        var diff = $('#billingOptionDiff');
        var errMsg = $('#expShipOptionValidation');
        if( !use.is(':checked') && !diff.is(':checked') ) {
            errMsg.show();
            $('.exp-del-method-options-wrap').addClass('error');
            location.hash = '#deliveryAddress';
            return false;
        } else {
            $('.exp-del-method-options-wrap').removeClass('error');
            errMsg.hide();
            return;
        }
    });

    // Fill out gift message
    $('.checkout-line').bind('blur', exp.func.giftMessage );

    // Keep checking to see if we need to do anything with the delivery message
    expInterval = setInterval(exp.func.updateDeliveryMessage, 1000);

    // From Daves original code
    //NEW INTERVENE IF LOGIN TAKES A LONG TIME - REFRESH PAGE
    $("#onestepcheckout-login-button").click(exp.func.interveneLogin);
    $('#onestepcheckout-login-form input').bind('keydown',function(e) {
        if( e.keyCode == 13 ) {
            exp.func.interveneLogin();
        }
    });

    // Listen for changes to saved address list and check fields if new selected
    $('#billing-address-select').bind('change',function(){
        if( $(this).val() === '' ) {
            exp.func.checkBillingFields();
        }
    });

    // Listen for changes to saved address list and check fields if new selected
    $('#shipping-address-select').bind('change',function(){
        if( $(this).val() === '' ) {
            exp.func.checkShippingFields();
        }
    });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);