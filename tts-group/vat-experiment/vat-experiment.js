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
console.log('VAT experiment - dev 0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'allPrices': $('.rr-price a, #product_price, .product_table h2'),
    'allVatPrices': $('#product_price_inc_vat, .was_price_height'),
    'basketPrices': $('.main_basket td.price,.main_basket td.total'),
    'basketWidget': $('.header_basket')
};

// Styles
// String containing the CSS for the experiment
exp.css = '.main_basket .product_pricing .price,.main_basket .product_pricing .total { width: 90px; }';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Function to amend price from ex to inc VAT and vice versa
// el = jQuery Object
exp.func.modPrices = function( el, vat ) {
    var percentage;
    var replaceOld;
    var replaceNew;
    if (vat === 'ex') {
       percentage = 1.2;
       replaceOld = 'ex';
       replaceNew = 'inc';
    } else if (vat === 'inc') {
       percentage = 0.8;
       replaceOld = 'inc';
       replaceNew = 'ex';
    } else {
        return false;
    }
    el.each(function(){
        var self = $(this);
        var parts = self.html().match(/(.*)(£)(.*)(<span)(.*)/);
        var priceBase = Math.round( parseFloat(parts[3]) * 100) / 100;
        var priceResult = (priceBase * percentage).toFixed(2);
        self.html( parts[1] + parts[2] + priceResult + parts[4] + parts[5].replace(replaceOld, replaceNew) );
    });
};

// Function to amend basket prices from ex to inc VAT and vice versa
// el = jQuery Object
exp.func.modBasketPrices = function( el ) {
    var percentage = 1.2;
    el.each(function(){
        var self = $(this);
        var parts = self.html().match(/(£)(.*)/);
        var priceBase = Math.round( parseFloat(parts[2]) * 100) / 100;
        var priceResult = (priceBase * percentage).toFixed(2);
        self.html( parts[1] + priceResult );
    });
};

// Function to amend basket widget from ex to inc VAT and vice versa
// el = jQuery Object
exp.func.modBasketWidget = function( el ) {
    var percentage = 1.2;
    var replaceOld = 'ex';
    var replaceNew = 'inc';
    var parts = el.html().match(/(.*)(£)(.*)(ex)(.*)/);
    var priceBase = Math.round( parseFloat(parts[3]) * 100) / 100;
    var priceResult = (priceBase * percentage).toFixed(2);
    console.log(priceResult);
    el.html( parts[1] + parts[2] + priceResult + ' ' + parts[4].replace(replaceOld, replaceNew) + parts[5] );
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
    
    if( this.vars.allVatPrices.length ) {
        // modify the inc VAT prices to ex VAT
        exp.func.modPrices( this.vars.allVatPrices, 'inc' );
    }
    
    if( this.vars.basketWidget.length ) {
        // modify the basket widget to inc VAT
        exp.func.modBasketWidget( this.vars.basketWidget );
    }
    
    if( this.vars.basketPrices.length ) {
        // modify the basket prices to inc VAT
        exp.func.modBasketPrices( this.vars.basketPrices );
        // if were on the basket page make a few copy changes so it is more clear
        $('.main_basket th.price,.main_basket th.total').append(' inc VAT');
        $('.basket_subtotal th').append(' (Exc.VAT)');
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);