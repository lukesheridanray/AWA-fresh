/*

When user enters a postcode OR changes their country to be anything other than UK, address section expands



*/

//Need to factor in countries that can't be delivered too - produces a sorry message in delivery section
//Need to factor in "What's this?" message popup
//Sign in link doesn't work at the moment
//When cllosing poopup, sometimes window auto scrolls down a bit
//Summary title and styling can disappear or title can be applie twice...
//If already logged in, sign in button should be hidden if $(".links .last a").text() contains "Log Out"
//REload page after a break, on a country with no delivery - delivery optyions doesn;t expand - prtobably fix by adding that loop earlier too...
//2nd Perfection guarantee link doesn't work
//include something for really massive baskets
//Changing the date just didn't work!!
//cover lower right margin just after compression - perhaps put an extra blank div there or something?
// on pad make fields higher so they're easier to click on
// on pad it's slightly to wide - only just 
// Pressing enter on gift message form triggers the login link!


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
exp.log('Bettys vertical checkout - dev 0.1');


// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'loginWidget': $('.onestepcheckout-login-link'),
    'NCcontentRImage': '//cdn.optimizely.com/img/14847832/b5ad0505be384613b7faa794bc1717bf.png',
    'step1Heading': '<h3>1. Billing Address</h3> \
                     <p>Please enter your details. Required information is indicated with a <span class="required">*</span></p>',
    'step2Heading': '<h3>2. Delivery Address</h3>',
    'step3Heading': '<h3>3. Delivery Options</h3>',
    'step4Heading': '<h3>4. Secure Payment</h3>',
    'loginTitle': '<h3>ALREADY HAVE AN ACCOUNT?</h3>',
    'orderButtonTitle': 'PLACE ORDER',
    'step1Fields': $('#billing_address'),
    'step2DelMethodOptions': ' \
                          <input class="radiobutton" name="" id="billingOptionUse" value="1" type="checkbox"> \
                          <label for="billingOptionUse">Deliver to my billing address</label> \
                          <input class="radiobutton" name="" id="billingOptionDiff" value="1" type="checkbox"> \
                          <label for="billingOptionDiff">Deliver to a different address</label>',
    'step2ShipAddress': $('#shipping_address_list'),
    'step3DelMethod': $('.onestepcheckout-shipping-method'),
    'step3GiftMessages': $('.onestepcheckout-giftmessages'),
    'step3Comments': $('.onestepcheckout-comments'),
    'step4PaymentMethods': $('.payment-methods'),
    'step4OrderButton': $('.onestepcheckout-place-order-wrapper'),
    'step4Terms': $('.onestepcheckout-place-order-message'),
    'step4Summary': $('.onestepcheckout-summary'),
    'step4SecureLogo': $('.bettys-footer-secure'),
    'perfectPopup': '<div class="perfect_popup"> \
                      <div class="perfect_popup_in"><a class="perfect_close" href="#">X</a> \
                      <h4>PERFECTION GUARANTEE</h4> \
                      <p>Your Bettys parcel is carefully packed by hand here in Yorkshire, to ensure \
                      it stays perfect. In the unlikely event that your goods are not fresh and perfect \
                      on arrival, we GUARANTEE to replace or refund at your convenience.</p> \
                      </div></div>',
    'rememberLabel': '"Remember my card details so I can check out more quickly next time',
    'deliveryInitial': $('<div class="exp-delmsg exp-delmsg--initial">Please complete steps 1 &amp; 2 above, dates, prices and gift options will \
                       then be shown here. Thank you.<br><br>(As always your order will be \
                       beautifully packaged and delivered with our <a class="change_style" href="#">Perfection Guarantee</a>)')

};

/*
// Styles
// String containing the CSS for the experiment
exp.css = ' \
/*.NC-row { \
    width: 100%; \
    position: relative; \
    min-width: 700px \
} \
.NC-row-5 { \
    overflow: visible; \
} \
.NC-heading, .topheading { \
    color: #98002E; \
    font-size: 16px; \
    width: 200px; \
    padding-right: 10px; \
    float: left; \
    padding-bottom: 20px \
} \
.NC-content { \
    width: 400px; \
    float: left; \
    margin-right: 300px; \
    padding-bottom: 25px \
} \
.NC-content-L { \
    float: left \
} \
.NC-content-R { \
    position: absolute; \
    right: 0px; \
    width: 300px \
} \
.NC-sumadjust { \
    position: relative; \
    padding-bottom: 15px \
} \
.newSummary { \
    right: -470px; \
    width: 450px; \
    bottom: 10px; \
    border-left: 50px white solid; \
    border-right: solid white 170px; \
    background-color: white \
} \
.NC-row-1 .NC-content-R { \
    top: 0px; \
    padding-top: 20px; \
    padding-left: 35px; \
    background-image: url('+exp.vars.NCcontentRImage+'); \
    background-repeat: no-repeat; \
    height: 212px; \
} \
.newOptions { \
    width: 700px; \
    font-size: 14px; \
    margin-right: 0px; \
    line-height: 20px; \
    padding-bottom: 0; \
} \
.onestepcheckout-threecolumns { \
    visibility: hidden; \
    position: absolute; \
    top: 0; \
} \
#shipping_address { \
    display: none; \
} \
#shipping_address_list .name-prefix { \
    padding-bottom: 0; \
} \
#shipping_address_list .input-box { \
    padding-bottom: 7px; \
} \
.perfect_close, .perfect_close2 { \
    width: 20px; \
    height: 20px; \
    position: absolute; \
    background: #98002e; \
    top: -10px; \
    right: -10px; \
    border-radius:10px; \
    -moz-border-radius:10px; \
    -webkit-border-radius:10px; \
    color: #fff; \
    line-height: 20px; \
    text-align: center; \
    font-size: 11px; \
    text-indent: 3px; \
} \
.perfect_popup, .perfect_popup2 { \
    border: 2px solid #98002e; \
    border-radius: 5px; \
    background: #fff; \
    position: fixed; \
    z-index: 999; \
    top: 40%; \
    left: 35%; \
    margin-left: -12px; \
    width: 30%; \
    padding:15px; \
    text-align:center; \
    font-size:18px \
} \
.newButton { \
  width: 700px; \
  margin-right: 0; \
} \
.newButton button { \
  float: left; \
  margin-right: 200px; \
} \
.onestepcheckout-place-order-message { \
  width: 400px; \
  float: left; \
} \
.bettys-footer-secure { \
  margin-left: 220px; \
  margin-top: 55px; \
  float: left; \
  position: static; \
  overflow: visible; \
} \
#shipping_address_list .name-prefix { \
  padding-bottom: 0; \
} \
#shipping_address_list .input-box { \
  padding-bottom: 7px; \
} \
.onestepcheckout-comments { \
    display: none; \
} ';
*/

exp.css = ' \
.onestepcheckout-description, \
.onestepcheckout-numbers, \
.onestepcheckout-threecolumns { \
    display: none; \
} \
.exp-column-left { \
    width: 400px; \
    float: left; \
    padding-bottom: 25px \
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
.input-box label { \
    margin: 16px 0 0 0; \
} \
select.validate-cc-exp { \
    width: 160px; \
} \
select.year.required-entry { \
    width: 90px; \
} \
.validate-ccsgpdp-cvn { \
    width: 102px !important; \
} \
.onestepcheckout-summary-wrap { \
    width: 230px; \
    position: absolute; \
    bottom: 94px; \
    right: 80px; \
} \
.bettys-footer-secure-exp { \
    position: absolute; \
    bottom: 0; \
    right: 80px; \
} \
.button span span { \
    background-image: none; \
    padding-right: 10px; \
} \
.onestepcheckout-login-link button { \
    width: 237px; \
} \
.onestepcheckout-place-order-wrapper { \
   float: left; \
} \
.onestepcheckout-place-order-message { \
    clear: both; \
    padding: 15px 0 0 0;  \
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
    text-indent: 3px; \
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
.input-company, .input-fax, .input-address, .input-city, .input-region { \
    display: block; \
} \
.input-different-shipping { \
    display: none; \
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
#shipping_address_list { \
    display: none; \
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // add columns
    this.vars.loginWidget.after( ' \
      <div class="exp-column-full exp-step1"> \
          <div class="exp-column-left"> \
              <div class="exp-column-heading"> \
              </div> \
          </div> \
          <div class="exp-column-right"> \
          </div> \
      </div> \
      <div class="exp-column-full exp-step2"> \
          <div class="exp-column-heading"> \
          </div> \
      </div> \
      <div class="exp-column-full exp-step3"> \
          <div class="exp-column-heading"> \
          </div> \
      </div> \
      <div class="exp-column-full exp-step4"> \
          <div class="exp-column-heading"> \
          </div> \
      </div> '
    );

    // append content to columns

    $('.exp-step1')
    .find('.exp-column-left').append( this.vars.step1Fields )
    .find('.exp-column-heading').append( this.vars.step1Heading )
    .parents('.exp-column-full').find('.exp-column-right').append( this.vars.loginWidget );

    $('.exp-step2')
    .append( $('.input-different-shipping').add( this.vars.step2ShipAddress ) )
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

    // Add popup

    $('body').append( this.vars.perfectPopup );

    $('.change_style').click(function(e){
        e.preventDefault();
        $('.perfect_popup').show();
    });
    $('.perfect_close').click(function(e){
        e.preventDefault();
        $('.perfect_popup').hide();
    });

    // DOM changes

    this.vars.loginWidget
    .prepend( this.vars.loginTitle )
    .find('a').html( '<button style="margin-top: 15px;" class="button"><span><span class="signin-button">SIGN IN HERE</span></span></button>' );
  
    this.vars.step1Fields.find( '.onestepcheckout-numbers' ).next( 'small' ).remove();

    $('.field.dob').parent('li').remove();

    $('#onestepcheckout-place-order span span').html( this.vars.orderButtonTitle );

    $('.onestepcheckout-summary').wrapAll( '<div class="onestepcheckout-summary-wrap" />' );
    $('div.onestepcheckout-summary').before( $('table.onestepcheckout-summary') );
    $('.onestepcheckout-summary-wrap').prepend( '<h4>Order summary</h4>' );

    this.vars.step4SecureLogo.addClass('bettys-footer-secure-exp').removeClass('bettys-footer-secure');

    $('.remember-label').html( this.vars.rememberLabel );

    $('.input-different-shipping input,.input-different-shipping label').wrapAll( '<div class="initialBillingCheckbox" />' );
    $('.input-different-shipping').after( this.vars.step2DelMethodOptions );

    $('.onestepcheckout-shipping-method-block,.onestepcheckout-giftmessages,.onestepcheckout-comments').wrapAll('<div class="exp-delmsg exp-delmsg--loaded" />')

    $('.onestepcheckout-comments').before( ' \
        <div class="input-checkbox"> \
            <input name="" id="openCloseComments" value="1" type="checkbox"> \
            <label for="openCloseComments">Add extra delivery instructions for the courier.</label> \
        </div> ');
    $('.onestepcheckout-comments .small').prepend('e.g. "If not in leave with neighbour."<br />');
    $('.onestepcheckout-comments').html( $('.onestepcheckout-comments textarea').add( $('.onestepcheckout-comments .small') ) );

    $('#allow-gift-message-container .no-padding').html( $('#allow-gift-message-container .input-box').add( $('#allow-gift-message-container .small') ).add( $('#allow-gift-message-container #gift-message-whole-message') ) );

    // Behaviour

    // Show extra billing fields

    (function(){
        var pCode = $('.validate-zip-international');
        var country = $('[name="billing[country_id]"]');
        function showFields() {
            $('.input-company, .input-fax, .input-address, .input-city, .input-region').show();
        }
        if( pCode.val() !== '' || country.val() !== 'GB' ) {
            showFields();
        }
        pCode.bind('keyup', function() {
            if( $(this).val() !== '' ) {
                exp.log('can show fields');
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
            exp.vars.step2ShipAddress.show();
        } else {
            $('.exp-delmsg--loaded').show();
            $('.exp-delmsg--initial').hide();
            if( !$('.input-different-shipping input').is(':checked') ) {
                $('.input-different-shipping input').trigger('click');
            }
            exp.vars.step2ShipAddress.hide();
        }
    });

    // we need an event listener on the shipping address fields to check that the required fields have been completed
    // we would then...

    function() {
      // successfull
        $('.exp-delmsg--loaded').show();
        $('.exp-delmsg--initial').hide();
    }

    // Open / close comments

    $('#openCloseComments').bind('click',function(){
      if( $(this).is(':checked') ) {
          $('.onestepcheckout-comments').show();
      } else {
          $('.onestepcheckout-comments').hide();
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