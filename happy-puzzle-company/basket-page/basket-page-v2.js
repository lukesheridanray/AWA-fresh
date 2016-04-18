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
console.log('Basket page v2 -  0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'basketImages': $('.basket_image'),
    'continueButton': $('.basket_continue').clone(),
    'continueButtonURL': '//cdn.optimizely.com/img/174847139/4e96e837604e43f9835c29c656f7c1c4.png',
    'continueButtonHoverURL': '//cdn.optimizely.com/img/174847139/c9d3f902e4f34b2287267cf422ab8edc.png',
    'padlockURL': '//cdn.optimizely.com/img/174847139/8001a60f2a7f4307aa38a9ae0bce0bbd.png',
    'basketMessage': $('#ctl00_cphInnerMaster_dvFreePostage'),
    'oldDeliveryOpts': $('.basket_delivery_options_desc tr'),
    'spendMoreAmount': $('#ctl00_cphInnerMaster_lblSpendAnother'),
    'couponModal': ' \
        <div id="coupon-modal-content" class="coupon-modal-content--hidden">'+
             $('.basket_promotional_code').html() +
        '</div>',
    'benefitsMarkup': ' \
       <div class="benefits-boxes"> \
          <div class="benefits-box benefits-box--secure"> \
             <h2>SECURE ORDERING</h2> \
             <p>Your details are safe and fully protected.</p> \
          </div> \
          <div class="benefits-box benefits-box--delivery"> \
             <h2>FREE DELIVERY UK mainland</h2> \
             <p>When you spend £40 or more.</p> \
          </div> \
          <div class="benefits-box benefits-box--guarantee"> \
             <h2>MONEY BACK GUARANTEE</h2> \
             <p>If you\'re not completely satisfied,<br />we\'ll give you your money back.</p> \
          </div> \
       </div> '
};
    
// Styles
// String containing the CSS for the experiment
exp.css = ' \
#coupon-modal-content .use_code { margin-left:0 !important;position: relative;top:6px; } \
#coupon-modal-content .basket_code_entry { width: 275px; } \
#coupon-modal-content--hidden { display: none; } \
\
.basket_table { margin-bottom: 30px !important; } \
.basket_table td { padding-top: 30px !important; } \
.basket_table tr:last-child td { padding-top: 4px !important; } \
.basket_thumbnail { position: relative !important; top: -30px !important; } \
\
a.default_btn_basket_large { background-image: url('+exp.vars.continueButtonURL+'); } \
a.default_btn_basket_large:hover { background-image: url('+exp.vars.continueButtonHoverURL+'); } \
\
.basket_promotional_code, .basket_delivery_options, .basket_basket_summary { border: 0 !important; } \
.basket_promotional_code .basket_title, .basket_delivery_options .basket_title, .basket_basket_summary .basket_title { display: none; } \
.basket_promotional_code .use_code { position: relative; top: 6px; } \
\
.basket_payment_steps { padding-top: 10px; padding-bottom: 10px !important; } \
.basket_table .basket_thumbnail img { width: 140px; height: 140px; max-width: 140px; } \
\
.basket_voucher_message { width: 938px !important; position: relative; top: -10px; background: #ddd; font-weight: normal; } \
\
.underline-link { text-decoration: underline; } \
.basket_info_summary_table td:first-child { text-align: left; } \
.basket_info .basket_info_summary_table { font-size: 14px; } \
.basket_info .basket_info_summary_table .basket_summary_value_col { font-weight: bold; } \
#tblDelivery { margin-top: 10px; } \
#tblDelivery select { position: relative; left: 50px; } \
.basket_delivery_options_desc { margin-top: 10px; position: relative; left: 50px; } \
\
.benefits-boxes { padding: 20px 0 20px 0; overflow: auto; clear: both; } \
.benefits-box { width: 311px; height: 60px; padding: 20px 0 10px 0; float: left; border: 1px solid #ccc; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; text-align: center; } \
.benefits-box + .benefits-box { margin-left: 10px; } \
.benefits-box h2 { color: #333; font-size: 16px !important; padding-bottom: 5px; } \
.benefits-box--secure { background: url('+exp.vars.padlockURL+') 65px 20px no-repeat transparent; } \
.benefits-box--secure h2 { padding-left: 10px; } \
\
#ctl00_cphInnerMaster_divBasketItems { clear: both; } \
#dvSuggestions { display: none !important; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};
    
exp.func.submitCoupon = function() {
    $('#ctl00_cphInnerMaster_txtPromoCode').val( $('#coupon-modal-content .basket_code_entry_field').val() );
    $('#ctl00_cphInnerMaster_imgbtnPromotion').trigger('click');
};
    
// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
    
    // Increase the size of the product images
    if(this.vars.basketImages.length) {
        this.vars.basketImages.each(function(){
            var self = $(this);
            var src = self.attr('src').replace('&width=80','&width=140');
            self.attr('src',src);
            self.attr('width','140');
            self.attr('height','140');
        });
    }
    
    // Alter text of continue buttons
    $('.basket_continue a').text('Continue to checkout');
    
    // Append benefits markup to DOM
    $('.main_internal_full_box').append( this.vars.benefitsMarkup );
    
    // Change content of basket message box
    if( this.vars.spendMoreAmount.length ) {
        this.vars.basketMessage.html( 'Spend just '+this.vars.spendMoreAmount.html()+'  more to qualify for <strong>FREE DELIVERY</strong>' );
    }
    
    // add coupon modal content to DOM
    
    $('#aspnetForm').append( this.vars.couponModal );
    
    $('#coupon-modal-content .use_code').attr('onclick', '').attr('id', '');
    $('#coupon-modal-content .basket_code_entry_field').attr('id', '');
    $('#coupon-modal-content .use_code').bind('click',function(e){
        e.preventDefault();
        exp.func.submitCoupon();
        e.keyCode == 13;
    });
    $('#coupon-modal-content input').bind('keydown',function(e){
        if(e.keyCode == 13) {
           e.preventDefault();
           exp.func.submitCoupon();
        }
    });
    
    // Text and layout changes to summary and delivery boxes
    
    $('.basket_info_summary tr:last-child').remove();
    
    $('.basket_info_summary').prepend( '<p><a href="#" class="underline-link js-coupon-info">Got a coupon?</a></p>' );
    
    $('.basket_info_summary td').filter(function(){ return $(this).html() === 'Delivery:'; }).parent('tr').remove();
    
    $('.basket_info_summary td:first-child').filter(function(){ return $(this).html() === 'Subtotal <small>(inc.VAT)</small>:'; }).html('Subtotal before Delivery Charges');
    
    $('.basket_info_summary_table td').filter(function(){ return $(this).text() === 'Grand Total:'; }).text('Total costs');
    
    $('.basket_info_summary tr:first-child').after( $('.basket_delivery_options .basket_info tr:eq(0)') );
    
    $('#tblDelivery tr:first-child td.first-child').after( $('#tblDelivery tr:first-child td.last-child') );
    
    // Add event listener to coupon link
    
    $('.js-coupon-info').bind('click', function(e){
        e.preventDefault();
        $('#coupon-modal-content').removeClass('coupon-modal-content--hidden');
        $.fancybox({
            'autoScale': true,
            'speedIn': 500,
            'speedOut': 300,
            'width': 440,
            'height': 186,
            'autoDimensions': true,
            'centerOnScroll': true,
            'href': '#coupon-modal-content',
        });
    });
    
    // Make delvery option spans labels instead
    if(exp.vars.oldDeliveryOpts.length) {
        exp.vars.oldDeliveryOpts.each(function() {
            var self = $(this);
            var span = self.find('span:eq(0)');
            var spanId = span.attr('id');
            var spanText = span.html();
            var labelFor = self.find('input').attr('id');
            var newLabel = '<label for="'+labelFor+'" id="'+spanId+'">'+spanText+'</label>';
            span.replaceWith( newLabel );
        });
    };

    // Hide promotional code cell if no code added
    $('.basket_table tr:last-child').filter(function(){ var textToCheck = $(this).find('td:first-child').text(); return (textToCheck === 'Promotional code applied:  - ' || textToCheck === 'Promotional code applied:  -' || textToCheck === 'Promotional code applied: - ' || textToCheck === 'Promotional code applied: -'); }).hide(0);
    
    // Set checkout link in header to submit to next stage instead of same page
    $('#ctl00_ucHeader_aCheckout').attr('href', $('#ctl00_cphInnerMaster_imgBtnCheckOut:eq(0)').attr('href') );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);