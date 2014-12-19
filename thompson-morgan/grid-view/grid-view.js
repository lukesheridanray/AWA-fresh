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
exp.log('Grid View - v0.1');

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
    height: 515px;\
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
}\
.load-more { \
    display: block; \
    width: 113px; \
    border: 0 !important; \
    text-align: center; \
    margin: 1em auto 0 auto; \
    background-color: #345e2e;\
    background-image: none !important;\
    text-indent: 0;\
    color: white;\
    font-size: 1.1em;\
    height: 30px !important;\
    line-height: 30px !important;\
    padding: 0 !important;\
    font-weight: bold;\
    cursor: pointer;\
}\
.load-more:hover { \
    opacity: .9;\
}\
.icon-loading-more {\
    display: none;\
    margin: 1em auto 0 auto; \
    height: 36px;\
    width: 36px;\
    background-repeat: no-repeat;\
    background-image: url("data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQACgABACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQACgACACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkEAAoAAwAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkEAAoABAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAAKAAUALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAAKAAYALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQACgAHACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAAKAAgALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAAKAAkALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQACgAKACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkEAAoACwAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA=="); \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

var cnt = 0; // product counter

var async_queue = [];
var processingQueue = false;
var elementsProcessed = 0;
var noMoreProducts = false;

exp.processQueue = function () {

    if (elementsProcessed >= 25) {
        // Pause queue
        processingQueue = false;
        return;
    }

    processingQueue = true;

    var action = async_queue.shift();

    if (action) {
        action(function () {
            if (!async_queue.length) {
                //console.log('processing ends here');
                processingQueue = false;
                return;
            }
            //console.log('processing goes on', async_queue.length, async_queue);
            elementsProcessed += 1;

            exp.processQueue();
        });
    }
};

exp.resumeQueue = function() {
    elementsProcessed = 0;
};

// Process queue if processing has stopped
setInterval(function() {
    //console.log(processingQueue);
    if (!processingQueue && async_queue.length) {
        exp.processQueue();
        //console.log('processing');
    }
}, 1000);

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

exp.buildProductHTML = function (product) {
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

exp.addDetails = function (product) {

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

exp.updateImage = function (product) {

    return function () {
        $('#product-' + product.id + ' .product-image').attr('src', product.image);
    };
};

exp.fetchDetails = function (product) {

    return function (callback) {

        $.get(product.url, function (data) {
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

            callback();
        });
    };
};

exp.processPage = function (resultsDom, pagenum) {
    var productsDom = resultsDom.find('tr td.resultSet'),
        i,
        elem,
        product_callbacks = [];

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

    // Process each product
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
        product.ready = exp.addDetails(product);

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
        prodDom.html(exp.buildProductHTML(product));
        
        product_callbacks.push(exp.fetchDetails(product));
            
        // Render incomplete product
    });

    // Hide 'load more' if we ran out of products
    if (product_callbacks.length === 0) {
        noMoreProducts = true;
        return;
    }

    if (pagenum % 2 === 1) {
        // If page was loaded organically, prioritise products
        for (i = product_callbacks.length - 1; i >= 0; i -= 1) {
            async_queue.unshift(product_callbacks[i]);
        }

        // Load the next page too, so we have 24 elements!
        exp.queueGetPage(pagenum + 1);
    }
    else {
        // If page was loaded automatically, put after the twelwth element
        // to load after the first 12
        Array.prototype.splice.apply(async_queue, [11, 0].concat(product_callbacks));
    }

    $("#displaying").text(cnt);
};

exp.queueGetPage = function (pagenum) {

    // Closure to protect pagenum
    return (function (pagenum) {
        async_queue.unshift(function (callback) {

            // Hide button, show loading icon
            $(".load-more").hide();
            $(".icon-loading-more").show();

            $.get('http://www.thompson-morgan.com/flowers/flower-plants/perennial-and-biennial-plants?sortBy=bestsellers&lastSelectedFacet=&page=' + pagenum,
                function (data) {
                    var resultsTable = $(data).find('#results');
                    var o = resultsTable.contents().wrap('<tbody></tbody>');
                    o.addClass('listing-page-' + pagenum);
                    $('#results').append(o);

                    exp.processPage($('#results > .listing-page-' + pagenum), pagenum);

                    // Ok, we can load more now
                    $(".icon-loading-more").hide();
                    if (noMoreProducts === false) {
                        $(".load-more").show();
                    }

                    callback();
                });
        });

        //console.log(async_queue);
    }(pagenum));
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
    var curpage = 1,
        scrollLoadLock  = false,
        scrollDeltaLock = false;
        lastScrollPosition = 0;

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Updated wording for "displaying x of y products"
    var displaying = $('#facetResults .searchResults');
    displaying.html('Displaying <strong id="displaying">24</strong> of '
        + displaying.children('b').text()
        + ' products.');

    // No need for pagination
    $('.pagination-links').hide();

    // Load more (continous scrolling)
    $('#results').after('<input type="button" class="load-more" value="Load More" />');
    $('#results').after('<div class="icon-loading-more"></div>');
    $(".load-more").click(function () {
        exp.queueGetPage((curpage += 2));
    });

    $(window).scroll(function() {
        //console.log($(window).scrollTop(), $('#results').height());
        if (scrollLoadLock === false && $(window).scrollTop() // Coordinates at the top
            >= $('#results').height() - $(window).height() / 2
                // when the bottom of #results is approx in the middle of the viewport
                // (the header pushes it down by about 350px, but it works well)
            ) {
            exp.queueGetPage((curpage += 2));
            scrollLoadLock = true;
            setTimeout(function () { scrollLoadLock = false; }, 1000);
        }

        // Calculate scroll delta to resume queue
        if (scrollDeltaLock === false && Math.abs(lastScrollPosition - $(window).scrollTop()) > 1000) {
            scrollDeltaLock = true;
            lastScrollPosition = $(window).scrollTop();
            exp.resumeQueue();
            setTimeout(function () { scrollDeltaLock = false; }, 1000);
        }
    });

    // Process first page
    $('#results > tbody').addClass('listing-page-1');
    exp.processPage($('#results > .listing-page-1'), 1);

    // Open product
    $('#results').delegate('.product > a', 'click', function (e) {
        var href = $(this).attr('href');

        e.preventDefault();

        if (2 === e.which || e.metaKey || e.ctrlKey) {
            // Ctrl/Cmd - click
            // pause queue
            elementsProcessed = 25; // Ensure no more queued elements are processed
            window.open(href); // Popup blocker kicks in if we delay it
        }
        else {
            // Normal click
            elementsProcessed = 0; // Ensure this one will get processed
            async_queue = [function(callback) { // Clear queue, do this
                    window.location.href = href;
            }];
        }
    });

    // Right click, stop queue
    $('#results').delegate('.product > a', 'contextmenu', function (e) {
        // pause queue
        elementsProcessed = 25; // Ensure no more queued elements are processed
    });

    exp.processQueue();
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);