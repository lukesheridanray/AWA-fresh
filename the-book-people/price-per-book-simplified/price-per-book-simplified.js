// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

exp.log('Price per book - category page - simplified - 0.3');

exp.vars = {
    variation: 3,
    is_grid_view: $('.grid-view.hProduct').length > 0,
    products: $('.product-list .hProduct'),
};

exp.css = '.awa-saving-under-photo { font-size: 14px; font-weight: 600; position: relative; top: -10px; } \
.awa-ppb-var-1 .grid-view.hProduct .prices { height: 65px !important; } \
.awa-ppb-var-1 .grid-view.hProduct { height: 470px !important; } \
.awa-ppb-var-1 .grid-view .review-stars-contaianer { position: relative; top: -20px; } \
.awa-ppb-var-1 .grid-view.awa-has-ppb .review-stars-contaianer { top: 0px; } \
.awa-ppb-var-2 .grid-view .product-image,.awa-ppb-var-3 .grid-view .product-image { padding-bottom: 10px; } \
.awa-ppb-var-2 .grid-view .awa-saving-under-photo,.awa-ppb-var-3 .grid-view .awa-saving-under-photo { position: absolute; left: 0; top: 200px; width: 100%; line-height: 20px; text-align: center;';

exp.func = {};

exp.func.roundUp = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.ceil(number*factor) / factor).toFixed(2);
};

exp.func.getPricePerBook = function(totalPrice, bookCount, unformatted) {
    unformatted = unformatted || false;
    var total = parseFloat( totalPrice );
    var books = parseFloat( bookCount );
    var priceString;
    var pricePerBook = exp.func.roundUp( (total / books), 2 );
    if( pricePerBook > 9.99) {
        return false;
    }
    if( parseFloat( pricePerBook ) < 1 && !unformatted ) {
        pricePerBook = pricePerBook.match(/([0-9]*)(.)([0-9]*)/)[3] + 'p';
    } else if(!unformatted ) {
        pricePerBook = ( '£' + pricePerBook ).replace('.00', '');
    } else {
        pricePerBook = parseFloat( pricePerBook );
    }
    return pricePerBook;
};

exp.func.getPriceString = function(pricePerBook, klass) {
    klass = klass || 'exp-price-per-book-recommendation-just';
    return 'Just ' + pricePerBook + ' per book';
};

exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    $('body').addClass('awa-ppb-var-'+exp.vars.variation);

    // Add ribbons to categories
    $.each(exp.vars.products, function(i, product) {
        var $product = $(product),
            totalPriceStr = $product.find('.formattedPrice .price').first().text().trim(),
            totalPrice = totalPriceStr.substr(0, 1) == "£" ? totalPriceStr.substr(1) : totalPriceStr,
            bookCountMatches = $product.find('.productTitles .url, h2 .url').length ? $product.find('.productTitles .url, h2 .url').text().match(/([0-9]+)( Books)/i) : false,
            bookCount = bookCountMatches ? bookCountMatches[1] : false,
            pricePerBook = exp.func.getPricePerBook(totalPrice, bookCount),
            pricePerBookUnFormatted = exp.func.getPricePerBook(totalPrice, bookCount, true),
            priceString = exp.func.getPriceString(pricePerBook, 'exp-price-per-book-product--just');

        if (bookCount !== false) {
            
            $product.addClass('awa-has-ppb');

            if(exp.vars.variation === 1 ) {

                $product.find('.prices .saving.text-success').addClass('awa-saving-under-price')
                .append(
                    '<br />' + priceString
                );

            } else if(
                exp.vars.variation === 2 ||
                (exp.vars.variation === 3 && pricePerBookUnFormatted <= 1)
            ) {
                if( !exp.vars.is_grid_view ) {
                    $product.find('.productImage').append(
                        '<div class="saving awa-saving-under-photo">' + priceString + '!</div>'
                    );
                } else {
                    $product.find('.product-image').append(
                        '<div class="saving awa-saving-under-photo">' + priceString + '!</div>'
                    );
                }

            }

        }
    });
};

exp.init();

return exp;

})(jQuery);