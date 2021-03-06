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
//console.log('Basket page v6');

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
    'recommendedModal': ' \
        <div id="recommended-modal-content"></div>',
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
       </div> ',
       'recommendedProduct1': $('#ctl00_divCustomersAlsoBought .product-wrapper:eq(0)'),
       'recommendedProduct2': $('#ctl00_divCustomersAlsoBought .product-wrapper:eq(1)'),
       'recommendedProduct3': $('#ctl00_divCustomersAlsoBought .product-wrapper:eq(2)'),
       'recommendedProduct4': $('#ctl00_divCustomersAlsoBought .product-wrapper:eq(3)'),
};
    
// Styles
// String containing the CSS for the experiment
exp.css = ' \
#dvSuggestions { height: 355px !important; } \
#dvSuggestions h2 { font-size: 1.3em; padding-top: 15px; } \
\
#recommended-modal-content { display: none; width: 980px; height: 300px; overflow: hidden; } \
#recommended-modal-content .product-wrapper { margin: 5px 10px 0 0 !important; position: relative; left: 5px; } \
.recommended-modal-title { font-size: 24px; text-align: center; font-weight: bold; margin: 0 0 10px 0; } \
\
#dvSuggestions .product_tabs { display: none; } \
\
.basket_step2, .basket_step3 { position: relative; } \
.basket_step2:before, .basket_step3:before { \
    content: ""; position: absolute; top: 6px; left: 99px; \
    width: 13px; height: 17px; \
    background: url('+exp.vars.padlockURL+') 0 0 no-repeat transparent; \
} \
.basket_voucher_message a { color: #333; } \
\
#coupon-modal-content .use_code { margin-left:0 !important;position: relative;top:6px; } \
#coupon-modal-content .basket_code_entry { width: 275px; } \
#coupon-modal-content--hidden,.coupon-modal-content--hidden { display: none; } \
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
.basket_promotional_code .basket_title, .basket_promotional_code .basket_info, .basket_delivery_options .basket_title, .basket_basket_summary .basket_title { display: none; } \
.basket_promotional_code .use_code { position: relative; top: 6px; } \
\
.basket_payment_steps { padding-top: 10px; padding-bottom: 10px !important; } \
.basket_table .basket_thumbnail img { width: 140px; height: 140px; max-width: 140px; } \
\
.basket_voucher_message { width: 938px !important; position: relative; top: -10px; background: #ddd; font-weight: normal; } \
\
.underline-link { text-decoration: underline !important; } \
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
#ctl00_cphInnerMaster_divBasketItems { clear: both; } ';

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
    
    // Copy checkout button and add to top of table
    $('#ctl00_cphInnerMaster_divBasketItems').before( this.vars.continueButton );
    
    // Alter text of continue buttons
    $('.basket_continue a').text('Continue to checkout');
    
    // Alter text of suggestions title
    $('#dvSuggestions h2').text('People who bought this also bought these items');
    
    // Change content of basket message box
    if( this.vars.spendMoreAmount.length ) {
        this.vars.basketMessage.html( '<a href="#dvSuggestions">Click to see suggestions of our most popular related products</a>' );
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
    
    $('.basket_promotional_code').append( '<p><a href="#" class="underline-link js-coupon-info">Got a coupon?</a></p>' );

    $('.basket_info_summary td').filter(function(){ return $(this).html() === 'Delivery:'; }).parent('tr').remove();
    
    $('.basket_info_summary td:first-child').filter(function(){ return $(this).html() === 'Subtotal <small>(inc.VAT)</small>:'; }).html('Subtotal (inc VAT)');
    
    $('.basket_info_summary_table td').filter(function(){ return $(this).text() === 'Grand Total:'; }).text('Total costs');
    
    $('.basket_info_summary tr:first-child').after( $('.basket_delivery_options .basket_info tr:eq(0)') );
    
    $('#tblDelivery tr:first-child td.first-child').after( $('#tblDelivery tr:first-child td.last-child') );

if (this.vars.recommendedProduct1.length) {

    // add recommended modal content to DOM
    
    $('#aspnetForm').append( this.vars.recommendedModal );

    $('#recommended-modal-content').html(
        '<p class="recommended-modal-title">Customers who bought this item also bought</p>' + 
        '<div class="product-wrapper">' + (this.vars.recommendedProduct1.length ? this.vars.recommendedProduct1.html() : '') + '</div>' +
        '<div class="product-wrapper">' + (this.vars.recommendedProduct2.length ? this.vars.recommendedProduct2.html() : '') + '</div>' +
        '<div class="product-wrapper">' + (this.vars.recommendedProduct3.length ? this.vars.recommendedProduct3.html() : '') + '</div>' +
        '<div class="product-wrapper">' + (this.vars.recommendedProduct4.length ? this.vars.recommendedProduct4.html() : '') + '</div>'
    );

    // Add event listener to recommended products link
    
    $('a[href="#dvSuggestions"]').bind('click', function(e){
        e.preventDefault();
        $.fancybox({
            'autoScale': true,
            'speedIn': 500,
            'speedOut': 300,
            'width': 660,
            'height': 386,
            'autoDimensions': true,
            'centerOnScroll': true,
            'href': '#recommended-modal-content',
        });
    });


} else {

    $('#ctl00_cphInnerMaster_spSuggestions').remove();

}
    
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
    }

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