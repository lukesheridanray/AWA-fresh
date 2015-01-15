// Horizontal ribbon on product recs

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
exp.log('Price per book, including category pages and search results - category page - ribbon - 0.2');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    angled: true,

    is_grid_view: $('.grid-view.hProduct').length > 0,
    products: $('.product-list .hProduct'),

    recommendations_selector: '.respCarousel.rich-recs .hproduct',
    recommendation_processed_class: 'exp-price-per-book-recommendation--processed',

    rec_ribbon_img_left: ' <img src="//cdn.optimizely.com/img/579743489/2e22d47b725543329541840e5fc48457.png" class="exp-price-per-book-recommendation--ribbon-end-left" />',
    rec_ribbon_img_right: '<img src="//cdn.optimizely.com/img/579743489/17de1d94df5f43c4b6f1e35432606d84.png" class="exp-price-per-book-recommendation--ribbon-end-right" />',
    product_ribbon_img_left: ' <img src="//cdn.optimizely.com/img/579743489/2e22d47b725543329541840e5fc48457.png" class="exp-price-per-book-product--ribbon-end-left" />',
    product_ribbon_img_right: '<img src="//cdn.optimizely.com/img/579743489/17de1d94df5f43c4b6f1e35432606d84.png" class="exp-price-per-book-product--ribbon-end-right" />'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.productImage, \
.baselineImage { \
    position: relative; \
} \
.rich-recs.respCarousel .es-slides>li { \
    height: 285px !important; \
} \
/* Circle outline */ \
.exp-price-per-book-recommendation--red-circle { \
    width: 64px; \
    height: 64px; \
    left: 20px; \
    bottom: 25px; \
    border-radius: 105px; \
    position: absolute; \
    padding: 0; \
    border: 1px solid #780400; \
    background: #CD0001; \
    color: #fff; \
    text-align: center; \
    font-size: 1.2em; \
    box-sizing: border-box; \
    padding-top: 10px; \
} \
.exp-price-per-book--bookCount { \
    display: block; \
    font-size: 1.5em; \
} \
@media screen and (max-width: 1199px) { \
} \
/* Ribbon */ \
.exp-price-per-book-recommendation--ribbon { \
    padding-top: 20px; \
} \
.exp-price-per-book-recommendation--ribbon-main { \
    position: absolute; \
    bottom: 7px; \
    left: 18px; \
    right: 18px; \
    padding: 2px; \
    background: #cf0d00; \
    color: #fff; \
    border: 1px solid #780400; \
    font-weight: bold; \
    font-size: 1em; \
    text-align: center; \
} \
.exp-price-per-book-recommendation--ribbon-main .ppb-pence { \
    font-size: 1.3em; \
} \
.exp-price-per-book-recommendation--ribbon-main .ppb-pounds { \
    font-size: 1.25em; \
} \
.exp-price-per-book-recommendation--ribbon-end-left { \
    width: 34px !important; \
    height: 28px !important; \
    position: absolute; \
    bottom: 0px; \
    left: 3px; \
} \
.exp-price-per-book-recommendation--ribbon-end-right { \
    width: 34px !important; \
    height: 28px !important; \
    position: absolute; \
    bottom: 0px; \
    right: 3px; \
} \
 \
@media (max-width: 767px) { \
    .rich-recs.everslider .es-slides img.exp-price-per-book-recommendation--ribbon-end-left { \
        width: initial !important; \
        height: initial !important; \
    } \
    .rich-recs.everslider .es-slides img.exp-price-per-book-recommendation--ribbon-end-right { \
        width: initial !important; \
        height: initial !important; \
    } \
} \
@media screen and (max-width: 1199px) { \
    .respCarousel.rich-recs div.baselineImage { \
    } \
    .exp-price-per-book-recommendation--ribbon-main { \
        left: 15px; \
        right: 15px; \
    } \
    .exp-price-per-book-recommendation--ribbon-end-left { \
        left: 0px; \
    } \
    .exp-price-per-book-recommendation--ribbon-end-right { \
        right: 0px; \
    } \
}';

exp.css += ' \
/* Circle outline */ \
.exp-price-per-book-product--red-circle { \
    width: 64px; \
    border-radius: 105px; \
    position: absolute; \
    bottom: 35px; \
    left: 9px; \
    padding: 0; \
    height: 64px; \
    border: 1px solid #780400; \
    background: #CD0001; \
    color: #fff; \
    text-align: center; \
    font-size: 1.2em; \
    box-sizing: border-box; \
    padding-top: 9px; \
    line-height: 20px; \
} \
.exp-price-per-book--bookCount { \
    display: block; \
    font-size: 1.5em; \
} \
@media screen and (max-width: 1199px) { \
} \
.exp-price-per-book-product--ribbon { \
    line-height: 20px; \
    padding-top: 20px; \
} \
.exp-price-per-book-product--ribbon-main { \
    position: absolute; \
    bottom: 14px; \
    left: 20px; \
    right: 20px; \
    padding: 2px; \
    background: #cf0d00; \
    color: #fff; \
    border: 1px solid #780400; \
    font-weight: bold; \
    font-size: .75em; \
    text-align: center; \
} \
.exp-price-per-book-product--ribbon-main .ppb-pence { \
    font-size: 1.3em; \
} \
.exp-price-per-book-product--ribbon-main .ppb-pounds { \
    font-size: 1.25em; \
} \
.listItem .productImage img.exp-price-per-book-product--ribbon-end-left, \
.grid-view .product-image img.exp-price-per-book-product--ribbon-end-left { \
    width: initial !important; \
    height: initial !important; \
    padding-top: 0; \
    padding-bottom: 0; \
    position: absolute; \
    bottom: 7px; \
    left: 5px; \
} \
.listItem .productImage img.exp-price-per-book-product--ribbon-end-right, \
.grid-view .product-image img.exp-price-per-book-product--ribbon-end-right { \
    width: initial !important; \
    height: initial !important; \
    padding-top: 0; \
    padding-bottom: 0; \
    position: absolute; \
    bottom: 7px; \
    right: 5px; \
} \
\
.grid-view .product-image { \
    height: 230px; \
}\
.exp-price-per-product--grid-view.exp-price-per-book-product--red-circle { \
    bottom: 42px; \
    left: 15px; \
} \
.exp-price-per-product--grid-view .exp-price-per-book-product--ribbon-main { \
    padding: 4px; \
    font-size: 1em; \
    bottom: 20px; \
} \
.grid-view .product-image .exp-price-per-product--grid-view img.exp-price-per-book-product--ribbon-end-left { \
    bottom: 13px; \
 \
} \
.grid-view .product-image .exp-price-per-product--grid-view img.exp-price-per-book-product--ribbon-end-right { \
    bottom: 13px; \
 \
} \
@media screen and (max-width: 1199px) { \
    .exp-price-per-product--grid-view.exp-price-per-book-product--red-circle { \
        left: 26px; \
    } \
}';

exp.angled_css = '.exp-price-per-book-product--ribbon, \
.exp-price-per-book-recommendation--ribbon, \
.exp-price-per-book-product--red-circle, \
.exp-price-per-book-recommendation--red-circle { \
    -ms-transform: rotate(-5deg); /* IE 9 */ \
    -webkit-transform: rotate(-5deg); /* Chrome, Safari, Opera */ \
    transform: rotate(-5deg); \
} \
.exp-price-per-book-product--ribbon { \
    padding-top: 15px; \
} \
.exp-price-per-book-product--red-circle { \
    bottom: 31px; \
} \
.exp-price-per-product--grid-view.exp-price-per-book-product--ribbon { \
    padding-top: 10px; \
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

exp.func.getPriceString = function(pricePerBook, klass) {
    klass = klass || 'exp-price-per-book-recommendation-just';
    return '<span class="'+ klass +'">Just</span> ' + ( (pricePerBook.indexOf('p') !== -1) ? '<span class="ppb-pence">'+pricePerBook+'</span>' : '<span class="ppb-pounds">'+pricePerBook+'</span>' ) + ' per book!';
};

exp.func.addRecommendationsPricePerBookRibbons = function(){
    var recommendations = $(exp.vars.recommendations_selector);
    $.each(recommendations, function(i, recommendation){
        var $recommendation = $(recommendation),
            totalPriceStr = $recommendation.find('.priceDetails .price').text().trim(),
            totalPrice = totalPriceStr.substr(0, 1) == "£" ? totalPriceStr.substr(1) : totalPriceStr,
            bookCountMatches = $recommendation.find('a.photo img').length ? $recommendation.find('a.photo img').prop('alt').match(/([0-9]+)( Books)/i) : false,
            bookCount = bookCountMatches ? bookCountMatches[1] : false,
            pricePerBook = exp.func.getPricePerBook(totalPrice, bookCount),
            priceString = exp.func.getPriceString(pricePerBook);

        if (bookCount !== false) {

            // Construct ribbon
            var $ribbon = $('<div class="exp-price-per-book-recommendation--ribbon">');
            $ribbon.append(
                exp.vars.rec_ribbon_img_left,
                exp.vars.rec_ribbon_img_right,
                '<div class="exp-price-per-book-recommendation--ribbon-main">' +
                priceString +
                '</div>'
            );

            // Don't add this ribbon if it has already been added
            if (! $recommendation.hasClass(exp.vars.recommendation_processed_class)) {
                // Add ribbon and border for "X Books circle"
                $recommendation.find('.baselineImage').append(
                    '<div class="exp-price-per-book-recommendation--red-circle"><span class="exp-price-per-book--bookCount">' + bookCount + '</span> Books</div>',
                    $ribbon
                );
                $recommendation.addClass(exp.vars.recommendation_processed_class);
            }
        }
    });
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

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    if (this.vars.angled) {
        $('head').append('<style type="text/css">'+this.angled_css+'</style>');
    }

    // Add ribbons to categories
    $.each(this.vars.products, function(i, product) {
        var $product = $(product),
            totalPriceStr = $product.find('.formattedPrice .price').text().trim(),
            totalPrice = totalPriceStr.substr(0, 1) == "£" ? totalPriceStr.substr(1) : totalPriceStr,
            bookCountMatches = $product.find('.productTitles .url, h2 .url').length ? $product.find('.productTitles .url, h2 .url').text().match(/([0-9]+)( Books)/i) : false,
            bookCount = bookCountMatches ? bookCountMatches[1] : false,
            pricePerBook = exp.func.getPricePerBook(totalPrice, bookCount),
            priceString = exp.func.getPriceString(pricePerBook, 'exp-price-per-book-product--just');

        if (bookCount !== false) {

            // Construct ribbon
            var $ribbon = $('<div class="exp-price-per-book-product--ribbon">');
            $ribbon.append(
                exp.vars.product_ribbon_img_left,
                exp.vars.product_ribbon_img_right,
                '<div class="exp-price-per-book-product--ribbon-main">' +
                priceString +
                '</div>'
            );

            if (exp.vars.is_grid_view) {
                $ribbon.addClass('exp-price-per-product--grid-view');
            }

            // Add ribbon and border for "X Books circle"
            $product.find('.productImage, .product-image').append(
                '<div class="exp-price-per-book-product--red-circle '+ (exp.vars.is_grid_view ? 'exp-price-per-product--grid-view' : '') +'"><span class="exp-price-per-book--bookCount">' + bookCount + '</span> Books</div>',
                $ribbon
            );
        }
    });


    // Override showRecs function, so we can call our function after recs are added to the page.
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