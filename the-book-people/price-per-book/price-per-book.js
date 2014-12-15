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
exp.log('Product page: price per book, savings and reviews - 0.5');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    variation: 3,
    isCollection: ( $('#format-label').text().indexOf('Collection') !== -1 ) ? true : false,
    iseBook: ( $('#format-label').text().indexOf('eBook') !== -1 ) ? true : false,
    totalPrice: $('.priceWrapper #price .price.price-string').text().trim(),
    books: $('#product-description-title').text().match(/([0-9]*)( Books)/i)
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
/* Global */ \
#average-review-stars { \
    font-size: 1.3em; \
    cursor: pointer; \
} \
.priceWrapper { \
    position: relative; \
} \
#saving { \
    font-size: 1.1em; \
    margin: 5px 0 -5px 0; \
    font-weight: bold; \
} \
.exp-savings-value { \
    font-size: 1.2em; \
} \
/* Variation 1 and 2 */ \
.exp-variation-1 .priceWrapper .addToBasketForm, \
.exp-variation-2 .priceWrapper .addToBasketForm { \
    clear: both; \
} \
.exp-variation-1 .priceWrapper #saving, \
.exp-variation-2 .priceWrapper #saving { \
    float: left; \
} \
.exp-variation-1 .priceWrapper #saving, \
.exp-variation-1 .priceWrapper #rrp, \
.exp-variation-2 .priceWrapper #saving, \
.exp-variation-2 .priceWrapper #rrp { \
    margin: 5px 0 5px 0; \
} \
.exp-variation-1 .exp-savings-label, \
.exp-variation-2 .exp-savings-label { \
    display: block; \
    float: left; \
} \
.productImage { \
    position: relative; \
} \
.exp-price-per-book--red-circle { \
    background: #CD0001; \
    width: 106px; \
    border-radius: 106px; \
    position: absolute; \
    bottom: 21px; \
    left: 11px; \
    color: #fff; \
    font-weight: bold; \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-book--red-circle { \
        left: 8px; \
        bottom: 19px; \
        width: 86px; \
        padding-left: 2px !important; \
        font-size: 1em !important; \
    } \
} \
/* Variation 1 */ \
.exp-variation-1 .exp-price-per-book--red-circle { \
    font-size: 1.4em; \
    padding: 32px 0 0 0; \
    height: 74px; \
} \
.exp-variation-1 .exp-price-per-book--red-circle .ppb-pence { \
    font-size: 1.3em; \
} \
.exp-variation-1 .exp-price-per-book--red-circle .ppb-pounds { \
    font-size: 1.25em; \
} \
@media screen and (max-width: 1199px) { \
    .exp-variation-1 .exp-price-per-book--red-circle { \
        padding: 24px 0 0 0; \
        height: 64px; \
    } \
} \
/* Variation 2 */ \
.exp-variation-2 .exp-price-per-book--red-circle { \
    font-size: 1.25em; \
    padding: 0; \
    height: 106px; \
    line-height: 1.3em; \
} \
.exp-variation-2 .exp-price-per-book--red-circle strong { \
    display: block; \
    padding-bottom: 11px; \
    padding: 10px 0 6px 0; \
    line-height: 1.1em; \
} \
.exp-variation-2 .exp-price-per-book--red-circle strong em { \
    font-style: normal; \
    font-size: 1.25em; \
} \
.exp-variation-2 .exp-price-per-book--red-circle .ppb-pence { \
    font-size: 1.3em; \
} \
.exp-variation-2 .exp-price-per-book--red-circle .ppb-pounds { \
    font-size: 1.25em; \
} \
@media screen and (max-width: 1199px) { \
    .exp-variation-2 .exp-price-per-book--red-circle { \
        height: 88px; \
    } \
} \
/* Variation 3 */ \
.exp-variation-3 #rrp { \
    position: absolute; \
    top: 1px; \
    right: -5px; \
} \
.exp-price-per-book--price-box { \
    margin: 4px 0 2px 0; \
} \
@media screen and (max-width: 1199px) { \
    .exp-variation-3 #rrp { \
        top: 20px; \
        left: 0; \
    } \
    #saving { \
        padding-top: 22px !important; \
    } \
} ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

exp.func.roundUp = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.ceil(number*factor) / factor).toFixed(2);
};

exp.func.getPricePerBook = function(variation) {
    variation = variation || false;
    var total = parseFloat( exp.vars.totalPrice );
    var books = parseFloat( exp.vars.books[1] );
    var priceString;
    var pricePerBook = exp.func.roundUp( (total / books), 2 );

    if( variation === false || pricePerBook > 9.99) {
        return false;
    }

    if( parseFloat( pricePerBook ) < 1 ) {

        pricePerBook = pricePerBook.match(/([0-9]*)(.)([0-9]*)/)[3] + 'p';

    } else {

        pricePerBook = ( '£' + pricePerBook ).replace('.00', '');

    }

    if( variation === 1 ) {

        priceString = 'Just ' + ( (pricePerBook.indexOf('p') !== -1) ? '<span class="ppb-pence">'+pricePerBook+'</span>' : '<span class="ppb-pounds">'+pricePerBook+'</span>' ) + '<br />per book!';
    
    } else if( variation === 2 ) {
       
        priceString = '<strong><em>' + books + '</em><br />books</strong>Just ' + ( (pricePerBook.indexOf('p') !== -1) ? '<span class="ppb-pence">'+pricePerBook+'</span>' : '<span class="ppb-pounds">'+pricePerBook+'</span>' ) + '<br />per book!';
    
    }

    if( variation === 1 || variation === 2 ) {
        $('.span3 .productImage:eq(0)').append(
            '<div class="exp-price-per-book--red-circle">' +
            priceString +
            '</div>'
        );
    } else if( variation === 3 ) {
        priceString = 'ONLY ' + pricePerBook + ' per book';
        $('.exp-savings-label').before(
            '<div class="exp-price-per-book--price-box">' +
                priceString +
            '</div>'
        );
    }

};

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

    // Check we are not an eBook

    if( this.vars.iseBook ) {
        return false;
    }

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    /*
      Global changes
    */

    // Add variation class to body
    $('body').addClass('exp-variation-' + this.vars.variation );

    // Click handler for review stars scrollto
    $('#average-review-stars').bind('click', function(){
        var $target = $('#review-section');
        $('html,body').animate({
          scrollTop: ( $target.offset().top ) - 30
        }, 800);
    });

    // Add brackets to RRP
    $('.priceWrapper #rrp').prepend( '(' ).append( ')' );

    // Add strong tag to saving price
    $('.priceWrapper #saving').html(
        $('.priceWrapper #saving').html().toString().replace(/(Save )(.*)/,function(match,p1,p2){
            return '<span class="exp-savings-label">You save</span> <strong class="exp-savings-value">' + p2 + '</strong>';
        })
    );

    /*
      Variation 1 / 2 specific
    */

    // Price box adjustments
    $('.priceWrapper #rrp').before( $('.priceWrapper #saving') );
    $('.exp-savings-label').css( {
        'width': ( $('.priceWrapper #price .ourPrice').width() + 11 ) + 'px'
    });

    /*
      Collections
    */

    if( this.vars.isCollection ) {

        this.func.getPricePerBook( this.vars.variation );

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);