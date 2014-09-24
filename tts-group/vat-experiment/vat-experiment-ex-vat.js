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
console.log('VAT experiment - ex VAT 0.3');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'allPrices': $('.rr-price a, #product_price, .product_table h2, .product_range_holder h3'),
    'allVatPrices': $('#product_price_inc_vat, .was_price_height'),
    'basketPrices': $('.main_basket td.price,.main_basket td.total'),
    'basketWidget': $('.header_basket'),
    'wasPrices': $('.was_price')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.product_range_holder { height: 496px; } \
.product_range_holder .buy_button { top: 55px; } \
.product_range_holder h4 { padding-left: 10px; clear: left; } \
.product_range_holder h4.was_price { top: 320px; left: 0; } \
.product_table h2 .small_label { display: block; padding-left: 0; } \
.product_table h3.alt_head { padding-top: 20px; } \
.product_table h2 .small_label { position: relative; top: -8px; } \
.product_table h2#product_price .small_label { top: 0; } \
.plus-x-vat { color: #666; font-size: 0.9em; font-weight: normal; } \
.main_basket .product_pricing .total { width: 150px; } \
.main_basket .product_pricing .price { width: 150px; }';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Function to amend price from ex to inc VAT and vice versa
// el = jQuery Object
exp.func.modPrices = function( el, vat ) {
    var percentage = 0.2;
    el.each(function(){
        var self = $(this);
        var parts;
        var priceBase;
        var priceResult;
        if ( self.parents('.product_range_holder').length ) {
            parts = self.html().match(/(.*)(£)(.*)/i);
            priceBase = Math.round( parseFloat(parts[3]) * 100) / 100;
            priceResult = (priceBase * percentage).toFixed(2);
            self.next('h4').html( 'plus &pound;' + priceResult + ' VAT' );
        } else {
            parts = self.html().match(/(.*)(£)(.*)(<span)(.*)/i);
            priceBase = Math.round( parseFloat(parts[3]) * 100) / 100;
            priceResult = (priceBase * percentage).toFixed(2);
            self.html( parts[1] + parts[2] + parts[3] + parts[4] + parts[5].replace('ex VAT', 'plus &pound;' + priceResult + ' VAT' ) );
        }
    });
};

// Function to amend basket prices from ex to inc VAT and vice versa
// el = jQuery Object
exp.func.modBasketPrices = function( el ) {
    var percentage = 0.2;
    el.each(function(){
        var self = $(this);
        var parts = self.html().match(/(£)(.*)/);
        var priceBase = Math.round( parseFloat(parts[2]) * 100) / 100;
        var priceResult = (priceBase * percentage).toFixed(2);
        self.html( parts[1] + parts[2] + ' <span class="plus-x-vat">plus &pound;' + priceResult +  ' VAT</span>' );
    });
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // end the experiment if no prices are found
    if( !this.vars.basketWidget.length && !this.vars.basketPrices.length ) {
        return false;
    }

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    if( this.vars.allPrices.length ) {
        // modify the ex VAT prices to inc VAT
        exp.func.modPrices( this.vars.allPrices, 'ex' );
    }
    
    if( this.vars.wasPrices.length ) {
        // add ex vat to was prices to be absolutely clear
        this.vars.wasPrices.each(function(){
            var self = $(this);
            if( self.html().indexOf('£') !== -1 ) {
                self.append( ' ex VAT' );      
            }
        });
    }

    if( this.vars.allVatPrices.length ) {
        // modify the inc VAT prices to ex VAT
    //    exp.func.modPrices( this.vars.allVatPrices, 'inc' );
        exp.vars.allVatPrices.remove();
    }

    if( this.vars.basketPrices.length ) {
        // modify the basket prices to inc VAT
        exp.func.modBasketPrices( this.vars.basketPrices );
        // if were on the basket page make a few copy changes so it is more clear
    //    $('.main_basket th.price,.main_basket th.total').append(' inc VAT');
    //    $('.basket_subtotal th').append(' (Exc.VAT)');
        //$('.basket_subtotal th').append(' (Exc.VAT)');
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);