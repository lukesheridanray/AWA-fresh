//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Wrapper for console.log, to prevent the exp breaking on browsers which don't
// (always) have 'console' set (e.g. IE9)
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Gift address page - 0.2');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    headingText: 'The following items are eligible for gift delivery. Please add a personal message and delivery address.',
    headingElem: $('.gift-page-header'),
    step1Elem: $('.giftAddressPersonalize .left-panel'),
    step1Heading: 'Where should this gift be delivered?',
    step2Elem: $('.giftAddressPersonalize .middle-panel'),
    step2Heading: 'Delivery date',
    step3Elem: $('.giftAddressPersonalize .right-panel'),
    step3Heading: 'Add a personal message',
    giftMessageElems: $('.personal-message-line').add( $('.personal-message-line .message-line-4').next('.txtDarkGrey') ),
    giftMessageRadioInput: $('.no-personal-message'),
    giftMessageRadioLabel: $('.no-personal-message').next('.txtDarkGrey')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.giftAddressPersonalize .panels { \
    background: transparent; \
} \
.giftAddressPersonalize .left-panel { \
    width: 870px; \
    height: auto !important; \
    padding-bottom: 20px; \
} \
.giftAddressPersonalize .middle-panel { \
    float: right; \
} \
.giftAddressPersonalize .middle-panel h3 { \
    background-position: 0px -40px; \
} \
.giftAddressPersonalize .right-panel h3 { \
    background-position: 0px -20px; \
} \
.giftAddressPersonalize .middle-panel, \
.giftAddressPersonalize .right-panel { \
    width: 420px; \
    margin-left: 0; \
} \
.exp-address-dropdown, \
.giftAddressPersonalize .middle-panel { \
    width: 380px; \
} \
.textRight .dateHint { display: none; } \
.gift-panel-margin-top p { display: none; } \
.exp-gift-message--no-message { \
} \
#add-personal-message { \
    margin-left: 15px; \
} \
.exp-address-dropdown { \
    float: right; \
} \
.searchPostCodeLink { \
    background: transparent; \
} \
#new-customer { \
    margin-top: 0 !important; \
    background: transparent !important; \
    width: 420px !important; \
    padding: 15px 0 0 0 !important; \
    float: left; \
} \
.right-panel-error .floatRight { \
    float: left !important; \
} \
.right-panel-error .floatRight form { \
    position: relative; \
    left: -25px; \
    top: 10px; \
} \
.exp-green-button { \
    background: #00552B !important; \
    color: #fff !important; \
    border: 0 !important; \
    padding: 3px 6px !important; \
} \
.exp-address-addnew { \
    float: left; \
    width: 420px; \
    text-align: left; \
} \
.exp-or-divider { \
    float: left; \
    font-size: 1.3em !important; \
    position: relative; \
} \
.exp-sub-heading { \
    margin-left: 8px; \
} \
.exp-sub-heading, .exp-or-divider { \
    color: #00552B !important; \
    font-weight: bold; \
    font-size: 1.1em; \
} \
.payment_address_select { \
    margin: 10px 0 10px 9px !important; \
} \
.exp-address-dropdown--note { \
    width: 223px; \
    margin-left: 8px; \
} \
.add-new-address.exp-green-button { \
    margin-top: 10px; \
} \
.panels h3 { \
    margin-bottom: 20px !important; \
} \
#new-customer h3 { \
    display: none !important; \
} \
#postalCode { \
    width: 60px; \
}';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    /*
        General
    */

    if( this.vars.headingElem.length ) {
        this.vars.headingElem.html( this.vars.headingText );
    }

    this.vars.step1Elem.find('h3').text( this.vars.step1Heading );
    this.vars.step2Elem.find('h3').text( this.vars.step2Heading );
    this.vars.step3Elem.find('h3').text( this.vars.step3Heading );

    /*
        Addresses
    */
    this.vars.step1Elem.find('form:eq(0)').addClass('exp-address-dropdown');
    $('.exp-address-dropdown')
    .prepend( '<p class="exp-sub-heading">Select a delivery address</p>' )
    .append( '<p class="exp-address-dropdown--note">If you have an account and are logged in, you can choose from your address list</p>' );

    this.vars.step1Elem.find('.textRight form:eq(0)').addClass('exp-address-addnew');
    
    if( !$('.exp-address-addnew').length ) {
        $('.exp-address-dropdown').before( '<div class="exp-address-addnew" />' );
    }

    $('.exp-address-addnew')
    .prepend( '<p class="exp-sub-heading">Add a new delivery address</p>' )
    .after( '<p class="exp-or-divider">OR</p>' );

    if( $('#new-customer').length ) {
        $('#new-customer').parent('form').appendTo('.exp-address-addnew');
        $('.add-address label:contains("Country")').parent('div').html(
                $('.add-address label:contains("Country")').parent('div').html().replace('(We do not deliver outside the UK)', '')
        );
    }

    $('input[value="Add new recipient"]').attr('value','Add a new address').addClass('exp-green-button');

    $('#createAddress').attr('value','Add address').addClass('exp-green-button');

    /*
        Gift Message
    */

    this.vars.giftMessageElems.wrapAll( '<div class="exp-gift-message" />');

    this.vars.giftMessageRadioInput.attr('id', 'no-personal-message');
    this.vars.giftMessageRadioLabel.attr('for', 'no-personal-message');
    this.vars.giftMessageRadioInput.add( this.vars.giftMessageRadioLabel ).wrapAll( '<div class="exp-gift-message--no-message" />');

    $('.right-panel-error input[value="Save"]').attr('value','Update').addClass('exp-green-button');
    $('.exp-gift-message--no-message').append( $('.right-panel-error') );

    $('.exp-gift-message input').bind('focus',function(){
        $('input.no-personal-message').attr('checked',false);
    });

    $('.exp-gift-message input').bind('blur',function(){
        var validate = '';
        $('.exp-gift-message input').each(function(){
            if( $(this).val() !== '' ) {
                validate += $(this).val().trim();
            }
        });
        if( validate === '') {
            $('input.no-personal-message').attr('checked',true);
        }
    });

    /*
    $('.exp-gift-message--no-message').after(
        '<div class="exp-gift-message--add-message"> \
            <input id="add-personal-message" name="add-personal-message" class="add-personal-message" type="radio"> \
            <label for="add-personal-message" class="txtSml txtDarkGrey">Add a personal message</label> \
        </div> '
    );
    $('#no-personal-message, #add-personal-message').bind('click',function(){
        $('#no-personal-message, #add-personal-message').attr('checked', false);
        $(this).attr('checked', true);
        if( $('#add-personal-message').is(':checked') ) {
            $('.exp-gift-message').show();
        } else {
            $('.exp-gift-message').hide();
        }
    });
*/
    /*
        Delivery Date
    */

    this.vars.step2Elem.find('.dateRadio:eq(0) input').trigger('click');

    /*
        Hide / show main continue button
    */

    if( $('.exp-gift-message input').length && !$('.no-personal-message').is(':checked') ) {
        var validate = '';
        $('.exp-gift-message input').each(function(){
            if( $(this).val() !== '' ) {
                validate += $(this).val().trim();
            }
        });
        if( validate === '') {
            $('#go-to-checkout').hide();
        }
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);