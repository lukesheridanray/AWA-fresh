//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

var cnt = 0; // product counter

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
exp.log('Example experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('body');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = '.resultSet + .resultSet {\
    border-left: solid 1px #ccebcb;\
}\
\
.resultSet {\
    vertical-align: top;\
    padding: 0 !important;\
    border-bottom: solid 1px #ccebcb !important;\
}\
\
.product {\
    display: inline-block;\
    width: 230px;\
    height: 480px;\
    margin: 6px;\
}\
\
.product h3 {\
    font-size: 1em;\
    padding-bottom: 0;\
}\
\
.product h4 {\
    font-size: 1em;\
    font-weight: normal;\
    font-style: italic;\
    color: black;\
}\
\
.buying-option-listing {\
    display: block;\
    font-weight: bold;\
}\
\
.buying-option-name {\
    float: left;\
    clear: left;\
}\
\
.buying-option-oldprice {\
    float: right;\
    font-size: 1em !important;\
    margin-right: 1em;\
}\
\
.buying-option-price {\
    float: right;\
    clear: right;\
}\
.product-features-listing {\
    margin-bottom: 10px;    \
    width: 228px; \
}\
\
.product-features-listing dd {\
    color: #00572d;\
    display: block;\
    clear: right;\
}\
\
.product-features-listing dt {\
    color: #00572d;\
    float: left;\
    display: block;\
    margin-right: 5px;\
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

var async_queue = [];

exp.wordLimit = function (word, limit) {
    var i;

    limit = limit || 40;

    if (word.length > limit) {
        for (i = limit - 3; i > 0; i -= 1) {
            if (word.substring(i, i + 1) === ' ') {
                return word.substring(0, i + 1) + '&hellip;'
            }
        }
    }

    return word;
};

exp.generateHTML = function (product) {
    // display product
    var i,
        buying_options_len = product.buying_options.length,
        option, // tmp var
        productHTML;

    productHTML = '<div class="product" id="product-' + product.id + '">\
        <a href="' + product.url + '">\
        <img src="' + product.smallimg + '" class="product-image" width="230" height="230" />\
        <h3>' + exp.wordLimit(product.title) + '</h3>\
        <h4>' + product.latin + '</h4>\
        <dl class="product-features-listing" style="display:none;">';

    productHTML += '</dl> \
        <ul class="buying-options-listing">'
    
    for (i = 0; i < buying_options_len; i += 1) {
        option = product.buying_options[i];
        productHTML += '<li class="buying-option-listing"> \
                        <span class="buying-option-name">' + option.name + '</span> \
                        <span class="buying-option-price">' + option.price + '</span> \
                        <strike class="buying-option-oldprice">' + option.oldprice + '</strike> \
                    </li>';
    }

    productHTML += '</ul> \
    </a>\
        </div>';

    return productHTML;
};

exp.productReady = function (product) {

    return function () {

        // display product
        var i,
            bullets_len = product.bullets.length,
            productDom,
            dom = $("#product-" + product.id);

        productDom = '';

        for (i = 0; i < bullets_len; i += 1) {
            productDom += '<dt>' + product.bullets[i].title + '</dt>'
            + '<dd>' + product.bullets[i].value + '</dd>';   
        }

        if (bullets_len) {
            dom.find('.product-features-listing').html(productDom);
            dom.find('.product-features-listing').slideDown();
        }
    };
};

exp.ajaxCallback = function (product) {

    return function (data) {
        var features, hardiness_match,
            dom = $(data);

        // DEBUG
        //console.log(data.match(/<span class="productClass">(.*?)<\/span>/)[1], product.title);

        product.image = dom.find('#myZoom img').attr('src'); // 252 x 252 image
        hardiness_match = dom.find('#productCont .facetValueClass dd').text().split(/\s/);

        product.bullets = [];

        if (hardiness_match && hardiness_match[0].trim()) {
            product.bullets.push({
                title: 'Hardiness:',
                value: hardiness_match[0]
            });
        }

        dom.find('#prodFeatures dl').each(function () {
            var el = $(this),
                i,
                tmp,
                bullet = {
                title: el.find('dt').text(),
                value: el.find('dd').text()
            };

            if (bullet.title !== '') {
                if (bullet.title === 'Flowering Period:') {
                    tmp = bullet.value.split(" ");
                    for (i = 0; i < tmp.length; i += 1) {
                        tmp[i] = tmp[i].substring(0, 3);
                    }

                    bullet.value = tmp.join(", ");
                }

                product.bullets.push(bullet);
            }
        });

        if (product.image) {
            var img = new Image();
            img.src = product.image;
            img.onload = exp.updateImage(product);
        }
        
        product.ready();
    }
};

exp.updateImage = function (product) {

    return function () {
        $('#product-' + product.id + ' .product-image').attr('src', product.image);
    };

};

exp.loadNextPage = function () {


};

var curpage = 1;
var running = true;
var products = [];
exp.processPage = function (resultsDom, pagenum) {
    var productsDom = resultsDom.find('tr td.resultSet'),
        i,
        elem;

    // Rearrange td's
    resultsDom.find('tr:nth-child(3n-2)').each(function () {
        var tr = $(this),
            next_tr = tr.next(),
            nextnext_tr = tr.next().next(),
            cnt_start = cnt;

        tr.append(next_tr.children('td'));
        next_tr.remove();
        tr.append(nextnext_tr.children('td'));
        nextnext_tr.remove();
    });

    console.log('unpaired page was called');

    productsDom.each(function () {
        var prodDom = $(this),
            product,
            ajax_callback;

        // Construct product object, fill in straightforward fields
        product = {
            id:    cnt++,
            title: prodDom.find('h3').text().trim(),
            latin: prodDom.find('.latin').text().trim(),
            buying_options: [], // to populate
            url: prodDom.find('a.moreInfo').attr('href'),
            smallimg: prodDom.find('.floatLeft a img').attr('src'),
            // populate async
            image: null,
            hardiness: null,
            bullets: null
        };

        // callback when all details are fetched
        product.ready = exp.productReady(product);

        // Populate buying options
        prodDom.find('.productInfoLeft').each(function () {
            var optDom = $(this);

            product.buying_options.push({
                name:     optDom.find('.size').text().trim(),
                oldprice: optDom.find('.price strike').text(),
                price:    optDom.find('.price').contents()[2].textContent.trim()
            });
        });

        // Replace HTML
        prodDom.html(exp.generateHTML(product));
        
        // set ajax callback for when additional details are loaded
        product.callback = exp.ajaxCallback(product);

        products.push(product);
            
        // Render incomplete product
    });

    $("#displaying").text(products.length);

    // Fill in the gaps
    var getNext = function (i) {
        var prod = products[i];
        console.log(products.length);

        if (prod === undefined) {
            running = false;
            return;
        }
        console.log(prod);
        $.get(prod.url, function (data) {
            prod.callback(data);
            getNext(i + 1);
        });
    };

    // Get next page, if page no is odd
    if (pagenum % 2 === 1) {
        exp.getPage(pagenum + 1, function () {
            getNext((pagenum - 1) * 12);
        });
    }
    else {
        if (running === false) {
            running = true;
            getNext((pagenum - 1) * 12);
        }
    }
}

exp.getPage = function (pagenum, callback) {
    $.get('http://www.thompson-morgan.com/flowers/flower-plants/perennial-and-biennial-plants?sortBy=bestsellers&lastSelectedFacet=&page=' + pagenum,
        function (data) {
            var resultsTable = $(data).find('#results');
            $('#results').append(resultsTable.contents().wrap('<tbody></tbody>'));
            $('#results tbody:nth-child(' + pagenum + ')').addClass('listing-page-' + pagenum);
            console.log('hello', pagenum);
            $('#results tbody:nth-child(' + pagenum + ')')

            exp.processPage($('#results > .listing-page-' + pagenum), pagenum);


            curpage = pagenum;
        

            if (callback) {
                callback();
            }
        });
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    var displaying = $('#facetResults .searchResults');

    displaying.html('Displaying <strong id="displaying">24</strong> of '
        + displaying.children('b').text()
        + ' products.');

    $('.pagination-links').hide();

    $('#results').after('<button class="load-more">Load More</button>');

    $(".load-more").click(function () {
        exp.getPage(curpage + 1);
    });

    // Some example DOM manipulation...
    // 
    $('#results > tbody').addClass('listing-page-1');
    // 
    exp.processPage($('#results > .listing-page-1'), 1);
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);