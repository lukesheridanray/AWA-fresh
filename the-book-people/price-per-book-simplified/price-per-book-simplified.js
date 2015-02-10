// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

exp.log('Price per book - category page - simplified - 0.1');

exp.vars = {
    variation: 1,
    is_grid_view: $('.grid-view.hProduct').length > 0,
    products: $('.product-list .hProduct'),
};

exp.css = '';

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

exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Add ribbons to categories
    $.each(this.vars.products, function(i, product) {
        var $product = $(product),
            totalPriceStr = $product.find('.formattedPrice .price').first().text().trim(),
            totalPrice = totalPriceStr.substr(0, 1) == "£" ? totalPriceStr.substr(1) : totalPriceStr,
            bookCountMatches = $product.find('.productTitles .url, h2 .url').length ? $product.find('.productTitles .url, h2 .url').text().match(/([0-9]+)( Books)/i) : false,
            bookCount = bookCountMatches ? bookCountMatches[1] : false,
            pricePerBook = exp.func.getPricePerBook(totalPrice, bookCount),
            priceString = exp.func.getPriceString(pricePerBook, 'exp-price-per-book-product--just');

        if (bookCount !== false) {

            if(this.vars.variation === 1 ) {
                // price on right
            } else if(this.vars.variation === 2 ) {
                // price on left
            } else if(this.vars.variation === 3 ) {
                // price on left if £1 or less
            }

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
};

exp.init();

return exp;

})(jQuery);