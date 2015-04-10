//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var awa_okadirect_productpage_apr2015 = (function($) {

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
exp.log('OKA Direct: Product page experiment: 0.6');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('body#product-details');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'current_variation': 1,
    'variation_changes': {
        1: { 'reduced_delivery_information': false },
        2: { 'reduced_delivery_information': true  }
    },
    'elements': {
        'rating_stars_container': $('#product-info p .rating'),
        'stock_text': $('#stock'),
        'wishlist_link': $('#ctl00_MainContentArea_ctl00_ctrlBuyModuleSKUOKANew_UpdatePanel1 .pull-left:first'),
        'about_accordian_headings': $('.about .bliss'), /* Iterate through these to find the delivery one, then get the next 'div' and move them to the top */
        'product_body_rows_selector': '#product-images > .span8 > .row', /* Iterate through these to find the 'Recently viewed' row, and move it to be the first row */
    },

    'text': {
        'instock': 'Item is in stock.',
        'lt10_instock': 'Buy now. Only {QTY} in stock.',
        'info_button_html': 'Info',
        'add_to_cart_button_html': 'Add to Basket',
        'click_and_collect_html': 'Free delivery to our UK shops. <a href="/customer-service/click-and-collect/" target="_blank">Click for details</a>',
        'delivery_only_heading_text': 'Delivery <i class="icon-chevron-right pull-right muted"></i><i class="icon-chevron-down pull-right"></i>',
        'returns_only_heading_text': 'Returns'
    },

    // Map pathnames to review text
    'reviews': {
        '/Sorano-China-Dinner-Plate-Off-White.aspx'           : 'Excellent service from a man who assured me the packaging was good, which it was, so no breakages, and the plates are in fact "gorgeous". I love them!',
        '/narrow-jet-side-table-rubbed-black.aspx'            : 'Exactly what I needed: smart but simple with perfect dimensions for a long and narrow space in a small, modern apartment. And excellent value for money.',
        '/plain-velvet-cushion-cover-jewel-colours.aspx'      : 'The quality is outstanding, far better than expected. The colour is rich and warm, adds a touch of luxury to our room.',
        '/soft-faux-fur-throw.aspx'                           : 'So cosy - especially in this current cold weather. The quality is good - it feels really luxurious and looks great.',
        '/handpainted-han-chinese-cabinet.aspx'               : 'The cabinet is perfect and just what we wanted. It looks really good and we think it is excellent value for money',
        '/faux-mohair-throw.aspx'                             : 'Lovely and soft. Good value for money',
        '/pompidou-console-table-metal-glass.aspx'            : 'Love it. Sturdy, stylish, good quality.',
        '/kyoto-narrow-console-table-wood.aspx'               : 'Simple, elegant design, good quality.',
        '/petworth-extending-dining-table-french-walnut.aspx' : 'Beautiful table. Really impressive and a good price.',
        '/bird-paintings-set-of-12.aspx'                      : 'Beautiful set of pictures, great quality.',
        '/santerno-table-lamp.aspx'                           : 'This is a beautifully made lamp, real quality at a reasonable price',
        '/pompidou-metal-glass-coffee-table-small.aspx'       : 'My coffee table looks fabulous in my sitting room. I am very very happy',
        '/karlstad-dining-table-round.aspx'                   : 'Another beautiful piece of furniture from Oka. Extremely good quality and value for money. Looks stunning.',
        '/plain-velvet-cushion-cover-jewel-colours.aspx'      : 'Very beautifully made cushion covers. Definitely worth paying the extra money to get the quality.',
        '/scrolling-flourish-fireguard-wrought-iron.aspx'     : 'The fireguard is beautiful. Very well made and looks good quality. I have had lots of lovely comments about it.',
        '/camargue-weathered-oak-dining-chair-.aspx'          : 'Excellent.Greatly admired by family and friends for its quality and unique design.',
        '/versailles-mirror-large.aspx'                       : 'Lovely mirror, very good pricing',
        '/triomphe-side-table.aspx'                           : 'Very nice quality',
        '/town-table-bay-wood.aspx'                           : 'Great size, shape and overall look. Very good quality.',
        '/rattan-mattaban-pet-bed-large.aspx'                 : 'Looks great and Ginny ( Border Collie ) loves it!',
        '/ashmolean-classic-wooden-bookshelves-tall.aspx'     : 'I\'m absolutely delighted with this.This is very well made and looks so good',
        '/linen-weathered-oak-portman-ottoman.aspx'           : 'excellent, solid piece of furniture - very pleased with purchase',
        '/rattan-mattaban-pet-bed-medium.aspx'                : 'The rattan medium bed is just what I expected.....good quality, the right size for a field spaniel and very stylish.',
        '/guilloche-cushion-cover-large.aspx'                 : 'Product looked like the image, good colour matches. good quality product',
        '/sash-window-wall-mirror.aspx'                       : 'Lovely mirror. Excellent quality.',
        '/esme-espresso-cups-set-of-4.aspx'                   : 'Lovely design. Great quality.',
        '/santerno-table-lamp.aspx'                           : 'This is a beautifully made lamp, real quality at a reasonable price',
        '/florya-mugs-set-of-4.aspx'                          : 'Lovely and unusual mugs. Just what I\'d been looking for.',
        '/marrakech-decorative-serving-plate.aspx'            : 'Well made beautifull colours very pleased',
        '/classic-stork-bedside-lamp.aspx'                    : 'very elegant lovely finish',
        '/hurlingham-small-2-seater-sofa.aspx'                : 'Great sofa - very comfy and good colour',
        '/kyoto-wood-side-table-dark-brown.aspx'              : 'Excellent quality. Will keep looking at OKA for other things!',
        '/desert-fox-faux-fur-throw-130x180cm-grey-1.aspx'    : 'I love this throw. Really soft, looks really smart, gorgeous to curl up in or on!',
        '/monticello-metal-glass-coffee-table.aspx'           : 'Excellent quality & finish',
        '/fortuna-metal-floor-lamp.aspx'                      : 'Lovely finish, colour and quality.'
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = '\
.awa-product-info-button, \
.awa-product-add-to-cart-button { \
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; \
    font-size: 14px; \
    font-weight: 400; \
    line-height: 20px; \
    color: #fff; \
    background: #666; \
    text-shadow: none; \
    border: 0; \
    border-radius: 0; \
    font-family: Bliss2ExtraLight; \
    padding: 5px 10px; \
    outline: none; \
    display: inline-block; \
    padding: 4px 12px; \
    margin-bottom: 0; \
    font-size: 12px; \
    line-height: 20px; \
    text-align: center; \
    vertical-align: middle; \
    cursor: pointer; \
} \
.awa-product-info-button { \
    color: #666; \
    background: #fff; \
    border: 1px solid #ccc; \
    padding: 5px 20px 5px 7px; \
    margin-left: 30px; \
    background: url(data:image/gif;base64,R0lGODlhCgANALMLAMjIyPX19bS0tMfHx/7+/ri4uPPz87q6usrKyvr6+qqqqv///wAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY3RDY3RjhBNTgyMTFFMzg0NkRFMjVBQjU0MzQ1QTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY3RDY3RjlBNTgyMTFFMzg0NkRFMjVBQjU0MzQ1QTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjdENjdGNkE1ODIxMUUzODQ2REUyNUFCNTQzNDVBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjdENjdGN0E1ODIxMUUzODQ2REUyNUFCNTQzNDVBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAsALAAAAAAKAA0AAAQucMlJJTqpLqQUrkDnZVMyiF95dqmUCCJCcV0RTLRSGIQl7j1JSMejmICaRJESAQA7) no-repeat 40px 8px; \
    text-transform: uppercase; \
} \
.awa-product-info-button:hover { \
    color: #fff; \
    border: 1px solid #ccc; \
    background: #ccc url(//resources1.okadirect.com/assets/img/icons/arrow.png) no-repeat 40px 5px; \
    -webkit-transition: none; \
    transition: none; \
} \
.awa-product-add-to-cart-button { \
    color: #fff; \
    background-color: #12a6a4; \
    padding-right: 15px; \
    text-transform: uppercase; \
    background-image: url(//resources1.okadirect.com/assets/img/icons/arrow.png); \
    background-position: right 5px; \
    background-repeat: no-repeat; \
    border-right: 8px solid #12a6a4!important; \
    height: 32px; \
} \
.awa-product-add-to-cart-button:hover { \
    border-right: 8px solid #15bcba!important; \
    background-color: #15bcba; \
    color: #fff; \
} \
.awa-product-review-container { \
    text-transform: none; \
    text-decoration: none; \
} \
.awa-product-review-container:before { \
    content: "“"; \
} \
.awa-product-review-container:after { \
    content: "”"; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a condition returns true
exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition()) {
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

// This function allows you to always round a number 'up', 'down', or normally,
// returns a string
exp.func.roundNum = function(number, decimals, direction) {
    decimals = decimals || 0;
    var factor = Math.pow(10,decimals);
    var base;
    if( direction === 'up') {
        base = Math.ceil(number*factor);
    } else if( direction === 'down') {
        base = Math.floor(number*factor);
    }
    return direction ? (base/factor).toFixed(decimals) : number.toFixed(decimals);
};

// Add a product to the cart
exp.func.productAdd = function(entity_id, cb) {
    $.ajax({
        url: "/ajaxcallhandlers.aspx",
        data: {
          inp: "AddToBag",
          entryid: entity_id,
          qty: 1 // Quantity
        },
        success: cb,
        error: cb
    });
};


// Add CTA to product thumbnails in "recommended for you" and "recently viewed"
// items
exp.func.addProductCTA = function($product) {
    var product_href = $product.find('a').attr('href'),
        entity_id;

    // Add height to the title/price row, so the CTA buttons are all on the same line
    $product.find('section > .row:first').css('height', '120px');

    // Create CTA buttons
    var $info_button = $('<a>', {
            'href': product_href,
            'class': 'awa-product-info-button',
            'html': exp.vars.text.info_button_html
        }),
        $add_to_cart_button = $('<button>', {
            'class': 'awa-product-add-to-cart-button pull-right',
            'text': 'Loading...',
            'disabled': 'disabled'
        }),
        $container_row = $('<div>', { 'class': 'row' });

    // On add to cart click, we need to do magic to actually add to cart
    $add_to_cart_button.on('click', exp.func.onProductCTAAddToCartClick);

    // Add buttons to DOM
    $container_row.append($info_button, $add_to_cart_button);
    $product.find('.row').after($container_row);

    // Scrape the product page to get an entity ID.
    $.get(product_href, function(data){
        var $data = $(data);
        if( $data.find('input.variant-id').length ) {
          entity_id = $data.find('input.variant-id').val().toLowerCase();
        } else {
          entity_id = $data.find('[itemprop="identifier"]').text().toLowerCase();
        }
        if( $data.find('#colour-container-swatches .radio').length > 1 ) {
          entity_id = $data.find('#colour-container-swatches .radio.active input')
                           .attr('name').replace('colour_','').replace('value=','');
        }

        if (entity_id) {
            $product.data('entity_id', entity_id);
            $add_to_cart_button.html(exp.vars.text.add_to_cart_button_html).prop('disabled', false);
        }
    });
};

exp.func.onProductCTAAddToCartClick =  function(e){
    // Dear Default:  I don't like you.
    e.preventDefault();
    var $this = $(this),
        entity_id = $this.parents('li').data('entity_id'),
        product_title = $this.parents('li').find('a strong').text().trim();

    if (!entity_id) {
        exp.log("No entity ID for this product, cannot add to basket.");
    }
    else {
        $this.prop('disabled', 'disabled').html('Loading...');
        exp.func.productAdd(entity_id, function(data, response) {
            $this.prop('disabled', false).html(exp.vars.text.add_to_cart_button_html);
            if (response == 'success') {
                $("#mini-basket-control > div").html(data);
                ShowOverlayContentBasket("#basket-modal", "shop");
                $this.prop('disabled', 'disabled').html('Added to basket');
            }
            else {
                exp.log("Warning: Unable to add product to basket");
            }
        });
    }
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Show a review at the top of the page
    if (Object.keys(exp.vars.reviews).indexOf(window.location.pathname.toLowerCase()) === -1) {
        exp.log("Warning: No review found for this page");
    }
    else {
        var review = exp.vars.reviews[window.location.pathname.toLowerCase()],
            $review_container = $('<p>', { 'class': 'awa-product-review-container', 'text': review }),
            $read_all_reviews_link = $('<a>', {
                'class': 'awa-product-read-all-reviews',
                'text': 'Read more customer reviews',
                'href': exp.vars.elements.rating_stars_container.attr('href'),
                'data-toggle': 'modal'
            });
        exp.vars.elements.rating_stars_container.after($review_container, $read_all_reviews_link);
    }

    // Replace stock text with urgent stock text TODO: Should this be on all the
    // pages, or is there something to check if there are less than 10 instock
    if (!exp.vars.elements.stock_text) {
        exp.log("Warning: Could not identify in-stock text.");
    }
    else {

        if (exp.vars.elements.stock_text.text().trim().match(/ONLY [0-9]+? REMAINING/)) {
            var stock_remaining = exp.vars.elements.stock_text.text().trim().match(/ONLY ([0-9]+?) REMAINING/)[1];
            exp.vars.elements.stock_text.text(
                exp.vars.text.lt10_instock.replace('{QTY}', stock_remaining)
            );
        }
        else if (exp.vars.elements.stock_text.text().trim()) {
            exp.vars.elements.stock_text.text(
                exp.vars.text.instock
            );
        }
    }

    // Hide wishlist link
    if (!exp.vars.elements.wishlist_link) {
        exp.log("Warning: Could not identify wishlist link");
    }
    else {
        exp.vars.elements.wishlist_link.hide();
    }

    // Get delivery and about sections
    var $delivery_heading,
        $delivery_body,
        $about_heading,
        $about_body;

    if (!exp.vars.elements.about_accordian_headings) {
        exp.log("Warning: Could not identify accordian headings");
    }
    else {
        exp.vars.elements.about_accordian_headings.each(function(){
            var $heading = $(this);

            switch ($heading.text().trim()) {
                case 'Delivery & returns':
                    $delivery_heading = $heading;
                    $delivery_body = $heading.next('div');
                    break;

                case 'About':
                    $about_heading = $heading;
                    $about_body = $heading.next('div');
                    break;
            }
        });
    }

    if (!$delivery_heading) {
        exp.log("Warning: Could not identify delivery information");
    }
    else if (!$about_heading) {
        exp.log("Warning: Could not identify about information");
    }
    else {
        var $click_and_collect_row,
            $free_returns_row,
            $horizontal_liney_thing;

        // Find the click & collect and free-returns rows
        $delivery_body.find('table > tbody > tr').each(function(){
            var $row = $(this);

            switch ($row.find('strong:first').text().trim()) {
                case 'Click and Collect - Free':
                    $click_and_collect_row = $row;
                    break;

                case 'Free Returns':
                    $free_returns_row = $row;
                    $horizontal_liney_thing = $row.prev();
                    break;
            }
        });

        if ($click_and_collect_row) {
            // Modify click-and-collect text
            $click_and_collect_row.find('small').html(exp.vars.text.click_and_collect_html);
        }

        // Move header and body to top, but catch if it tries to move the
        // heading before itself - cause that just deletes it (thx jake weary)
        var $toppest_heading = $about_body.nextAll('h4:first');
        if ($toppest_heading[0] != $delivery_heading[0]) {
            $about_body.nextAll('h4:first').before($delivery_heading);
        }
        $delivery_heading.after($delivery_body);

        // Move free returns row to the top of delivery section
        $delivery_body.find('table > tbody').prepend($free_returns_row, $horizontal_liney_thing);

        // We're moving delivery info underneath the product info, but are we
        // moving the whole lot or just an little bit?
        if (exp.vars.variation_changes[exp.vars.current_variation].reduced_delivery_information) {
            // Show the free returns info, keep the rest hidden under "Delivery & returns" dropdown

            // Make a new table to hold the returns row
            var $new_fancy_table_with_blackjack_and_classy_ladies = $(
                '<h4 class="bliss upper">'+ exp.vars.text.returns_only_heading_text + '</h4>' +
                '<div>' +
                    '<table cellpadding="2" width="100%"><tbody>' +
                '</div>');

            // Add to page, after description
            $new_fancy_table_with_blackjack_and_classy_ladies.find('tbody').append($free_returns_row, $horizontal_liney_thing);
            $about_body.nextAll('h4:first').before($new_fancy_table_with_blackjack_and_classy_ladies);
            $horizontal_liney_thing.hide();

            // Change delivery heading to remove mention of returns
            $delivery_heading.html(exp.vars.text.delivery_only_heading_text);
        }
        else {
            // Expand 'delivery' content
            $delivery_heading.trigger('click');
        }
    }

    // Recommended row loads over ajax, wait for it
    exp.func.waitFor(function() { return $('#product-images .nosto_element h4').length > 0; }, function() {

        // Get recommended / recently viewed rows
        var $recommended_row,
            $recently_viewed_row;

        if (!$(exp.vars.elements.product_body_rows_selector)) {
            exp.log("Warning: Could not identify product body rows");
        }
        else {
            $(exp.vars.elements.product_body_rows_selector).each(function(){
                var $row = $(this),
                    $heading = $row.find('h4');

                switch ($heading.text().trim()) {
                    case 'Recommended For You':
                        $recommended_row = $row;
                        break;
                    case 'Recently viewed':
                        $recently_viewed_row = $row;
                        break;
                }
            });
        }

        if (!$recommended_row) {
            exp.log("Warning: Could not identify recommended row");
        }
        else if (!$recently_viewed_row) {
            exp.log("Warning: Could not identify recently viewed row");
        }
        else {
            // Move recently viewed row before rec'd row.
            $recommended_row.before($recently_viewed_row);

            // Add CTAs to recently viewed and recommendations
            $recommended_row.add($recently_viewed_row).find('.products li').each(function(){
                exp.func.addProductCTA($(this));
            });
        }
    });
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);