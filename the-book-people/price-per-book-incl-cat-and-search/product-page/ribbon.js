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
exp.log('Price per book, including category pages and search results - product page - ribbon - 0.4');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    angled: true,
    mainRibbon: true, // Set to false to use control for main image.

    isCollection: ( $('#format-label').text().indexOf('Collection') !== -1 ) ? true : false,
    iseBook: ( $('#format-label').text().indexOf('eBook') !== -1 ) ? true : false,
    totalPrice: $('.priceWrapper #price .price.price-string').text().trim(),
    bookCount: $('#product-description-title').text().match(/([0-9]+)( Books)/i),

    recommendations_selector: 'li.hproduct',
    recommendation_processed_class: 'exp-price-per-book-recommendation--processed',

    ribbon_img_left: ' <img src="//cdn.optimizely.com/img/579743489/2e22d47b725543329541840e5fc48457.png" class="exp-price-per-book--ribbon-end-left" />',
    ribbon_img_right: '<img src="//cdn.optimizely.com/img/579743489/17de1d94df5f43c4b6f1e35432606d84.png" class="exp-price-per-book--ribbon-end-right" />',
    tiny_ribbon_img_left: ' <img src="//cdn.optimizely.com/img/579743489/2e22d47b725543329541840e5fc48457.png" class="exp-price-per-book--ribbon-end-left exp-price-per-book--tiny" />',
    tiny_ribbon_img_right: '<img src="//cdn.optimizely.com/img/579743489/17de1d94df5f43c4b6f1e35432606d84.png" class="exp-price-per-book--ribbon-end-right exp-price-per-book--tiny" />'
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
.priceWrapper .addToBasketForm { \
    clear: both; \
} \
.priceWrapper #saving { \
    float: left; \
} \
.priceWrapper #saving, \
.priceWrapper #rrp { \
    margin: 5px 0 5px 0; \
} \
.exp-savings-label { \
    display: block; \
    float: left; \
} \
.productImage { \
    position: relative; \
} \
.exp-price-per-book.productImage.hidden-phone { \
    height: 302px; \
} \
/* Circle outline */ \
.exp-price-per-book--red-circle-exp2 { \
    width: 110px; \
    border-radius: 105px; \
    position: absolute; \
    bottom: 29px; \
    left: 8px; \
    padding: 0; \
    height: 110px; \
    border: 1px solid #780400; \
    background: #CD0001; \
    color: #fff; \
    text-align: center; \
    font-size: 2em; \
    box-sizing: border-box; \
    padding-top: 20px; \
    line-height: 30px; \
} \
.exp-price-per-book--bookCount { \
    display: block; \
    font-size: 1.5em; \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-book--red-circle-exp2 { \
        left: 7px; \
        bottom: 30px; \
        width: 90px; \
        height: 85px; \
        font-size: 1.5em; \
        padding-top: 15px; \
        line-height: 25px; \
    } \
} \
/* Ribbon */ \
.exp-price-per-book--ribbon-main { \
    position: absolute; \
    bottom: 7px; \
    left: 50px; \
    right: 50px; \
    \
    padding: 4px; \
    \
    background: #cf0d00; \
    color: #fff; \
    border: 1px solid #780400; \
    \
    font-weight: bold; \
    font-size: 1.25em; \
    text-align: center; \
} \
.exp-price-per-book--ribbon-main .ppb-pence { \
    font-size: 1.3em; \
} \
.exp-price-per-book--ribbon-main .ppb-pounds { \
    font-size: 1.25em; \
} \
.exp-price-per-book--ribbon-end-left { \
    position: absolute; \
    bottom: 0px; \
    left: 35px; \
} \
.exp-price-per-book--ribbon-end-right { \
    position: absolute; \
    bottom: 0px; \
    right: 35px; \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-book.productImage.hidden-phone { \
        height: 249px; \
    } \
    .exp-price-per-book--ribbon-main { \
        left: 25px; \
        right: 25px; \
    } \
    .exp-price-per-book--ribbon-end-left { \
        left: 5px; \
    } \
    .exp-price-per-book--ribbon-end-right { \
        right: 5px; \
    } \
} \
/* Tiny ribbon */ \
.rich-recs.verticalList a.photo { \
    vertical-align: top; \
} \
.exp-price-per-book--tiny.exp-price-per-book--ribbon-main { \
    left: 15px; \
    right: 15px; \
    font-size: .75em; \
    padding: 0; \
    bottom: 12px; \
} \
.exp-price-per-book--tiny.exp-price-per-book--ribbon-end-left { \
    left: 0px; \
    bottom: 5px; \
} \
.exp-price-per-book--tiny.exp-price-per-book--ribbon-end-right { \
    right: 0px; \
    bottom: 5px; \
} \
.exp-price-per-book--tiny.exp-price-per-book--red-circle-exp2 { \
    width: 44px; \
    border-radius: 46px; \
    bottom: 29px; \
    left: 4px; \
    height: 44px; \
    font-size: .75em; \
    padding-top: 6px; \
    line-height: 14px; \
} \
.exp-price-per-book--tiny-container { \
    height: 140px; \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-book--tiny.exp-price-per-book--red-circle-exp2 { \
        width: 32px; \
        border-radius: 32px; \
        bottom: 53px; \
        left: 2px; \
        height: 32px; \
        font-size: .7em; \
        padding-top: 1px; \
    } \
    .exp-price-per-book--tiny.exp-price-per-book--ribbon-end-left { \
        bottom: 30px; \
        height: 22px; \
    } \
    .exp-price-per-book--tiny.exp-price-per-book--ribbon-end-right { \
        bottom: 30px; \
        height: 22px; \
    } \
    .exp-price-per-book--tiny.exp-price-per-book--ribbon-main { \
        bottom: 34px; \
        font-size: 0.6em; \
        left: 10px; \
        right: 10px; \
    } \
    .exp-price-per-book--tiny-container { \
        height: 134px; \
    } \
} \
.exp-price-per-book--red-circle { \
    background: #CD0001; \
    width: 106px; \
    border-radius: 106px; \
    position: absolute; \
    bottom: 31px; \
    left: 11px; \
    color: #fff; \
    font-weight: bold; \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-book--red-circle { \
        left: 8px; \
        bottom: 29px; \
        width: 86px; \
        padding-left: 2px !important; \
        font-size: 1em !important; \
    } \
} \
.exp-price-per-book--red-circle { \
    font-size: 1.25em; \
    padding: 0; \
    height: 106px; \
    line-height: 1.3em; \
} \
.exp-price-per-book--red-circle strong { \
    display: block; \
    padding-bottom: 11px; \
    padding: 10px 0 6px 0; \
    line-height: 1.1em; \
} \
.exp-price-per-book--red-circle strong em { \
    font-style: normal; \
    font-size: 1.25em; \
} \
.exp-price-per-book--red-circle .ppb-pence { \
    font-size: 1.3em; \
} \
.exp-price-per-book--red-circle .ppb-pounds { \
    font-size: 1.25em; \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-book--red-circle { \
        height: 88px; \
    } \
}';

exp.angled_css = '.exp-price-per-book--red-circle-exp2, \
.exp-price-per-book--ribbon { \
    -ms-transform: rotate(-5deg); /* IE 9 */ \
    -webkit-transform: rotate(-5deg); /* Chrome, Safari, Opera */ \
    transform: rotate(-5deg); \
} \
.exp-price-per-book--tiny.exp-price-per-book--red-circle-exp2, \
.exp-price-per-book--tiny.exp-price-per-book--ribbon { \
    -ms-transform: none; \
    -webkit-transform: none; \
    transform: none; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

exp.func.roundUp = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.ceil(number*factor) / factor).toFixed(2);
};

exp.func.getPricePerBook = function(totalPrice, bookCount) {
    var total = parseFloat( totalPrice );
    var books = parseFloat( bookCount );
    var priceString;
    var pricePerBook = exp.func.roundUp( (total / books), 2 );

    if( pricePerBook > 9.99) {
        return false;
    }

    if( parseFloat( pricePerBook ) < 1 ) {

        pricePerBook = pricePerBook.match(/([0-9]*)(.)([0-9]*)/)[3] + 'p';

    } else {

        pricePerBook = ( '£' + pricePerBook ).replace('.00', '');

    }

    return pricePerBook;

};

exp.func.getPriceString = function(pricePerBook, tiny) {
    tiny = tiny || false;
    return (tiny ? '' : 'Just ') + ( (pricePerBook.indexOf('p') !== -1) ? '<span class="ppb-pence">'+pricePerBook+'</span>' : '<span class="ppb-pounds">'+pricePerBook+'</span>' ) + ' per book!';
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

exp.func.addRecommendationsPricePerBookRibbons = function(){
    var recommendations = $(exp.vars.recommendations_selector);
    $.each(recommendations, function(i, recommendation){
        var $recommendation = $(recommendation),
            totalPriceStr = $recommendation.find('.priceDetails .price').text().trim(),
            totalPrice = totalPriceStr.substr(0, 1) == "£" ? totalPriceStr.substr(1) : totalPriceStr,
            bookCountMatches = $recommendation.find('a.title-clip').length ? $recommendation.find('a.title-clip').prop('title').match(/([0-9]+)( Books)/i) : false,
            bookCount = bookCountMatches ? bookCountMatches[1] : false,
            pricePerBook = exp.func.getPricePerBook(totalPrice, bookCount),
            priceString = exp.func.getPriceString(pricePerBook, true);

        if (bookCount !== false) {

            // Increase height of product image container
            $recommendation.find('.productImage').addClass('exp-price-per-book--tiny-container');

            // Construct ribbon
            var $ribbon = $('<div class="exp-price-per-book--ribbon exp-price-per-book--tiny">');
            $ribbon.append(
                exp.vars.tiny_ribbon_img_left,
                exp.vars.tiny_ribbon_img_right,
                '<div class="exp-price-per-book--ribbon-main exp-price-per-book--tiny">' +
                priceString +
                '</div>'
            );

            // Don't add this ribbon if it has already been added
            if (! $recommendation.hasClass(exp.vars.recommendation_processed_class)) {
                // Add ribbon and border for "X Books circle"
                $recommendation.find('.productImage').append(
                    '<div class="exp-price-per-book--tiny exp-price-per-book--red-circle-exp2"><span class="exp-price-per-book--bookCount">' + bookCount + '</span> Books</div>',
                    $ribbon
                );
                $recommendation.addClass(exp.vars.recommendation_processed_class);
            }
        }
    });
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

    if (this.vars.angled) {
        $('head').append('<style type="text/css">'+this.angled_css+'</style>');
    }

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

    if( this.vars.isCollection) {

        // Add class to productImage so we target the right ones
        $('.productImage').addClass('exp-price-per-book');

        if (this.vars.mainRibbon) {

            var pricePerBook = this.func.getPricePerBook(exp.vars.totalPrice, exp.vars.bookCount[1]),
                priceString = this.func.getPriceString(pricePerBook),
                $ribbon = $('<div class="exp-price-per-book--ribbon">');

                $ribbon.append(
                    this.vars.ribbon_img_left,
                    this.vars.ribbon_img_right,
                    '<div class="exp-price-per-book--ribbon-main">' +
                    priceString +
                    '</div>'
                );

            $('.span3 .productImage:eq(0)').append(
                '<div class="exp-price-per-book--red-circle-exp2"><span class="exp-price-per-book--bookCount">' + this.vars.bookCount[1] + '</span> Books</div>',
                $ribbon
            );
        }
        else {
            // Control circle, no ribbon
            var total = parseFloat( exp.vars.totalPrice );
            var books = parseFloat( exp.vars.bookCount[1] );
            var priceString;
            var pricePerBook = exp.func.roundUp( (total / books), 2 );

            if( pricePerBook > 9.99) {
                return false;
            }

            if( parseFloat( pricePerBook ) < 1 ) {

                pricePerBook = pricePerBook.match(/([0-9]*)(.)([0-9]*)/)[3] + 'p';

            } else {

                pricePerBook = ( '£' + pricePerBook ).replace('.00', '');

            }


            priceString = '<strong><em>' + books + '</em><br />books</strong>Just ' + ( (pricePerBook.indexOf('p') !== -1) ? '<span class="ppb-pence">'+pricePerBook+'</span>' : '<span class="ppb-pounds">'+pricePerBook+'</span>' ) + '<br />per book!';

            $('.span3 .productImage:eq(0)').append(
                '<div class="exp-price-per-book--red-circle">' +
                priceString +
                '</div>'
            );
        }
    }

    // // Override showRecs function, so we can call our function after recs are added to the page.
    var originalRecs = showRecs;
    showRecs = function (placement) {
      originalRecs(placement);
      exp.func.addRecommendationsPricePerBookRibbons();
    };

    rr_flush();
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
