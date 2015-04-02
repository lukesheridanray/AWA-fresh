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
exp.log('OKA Direct: Product page experiment: 0.01');

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
    'elements': {
        'rating_stars_container': $('#product-info p .rating'),
        'stock_text': $('#stock'),
        'wishlist_link': $('#ctl00_MainContentArea_ctl00_ctrlBuyModuleSKUOKANew_UpdatePanel1 .pull-left:first'),
        'about_accordian_headings': $('.about .bliss'), /* Iterate through these to find the delivery one, then get the next 'div' and move them to the top */
        'product_body_rows': $('#product-images > .span8 > .row'), /* Iterate through these to find the 'Recently viewed' row, and move it to be the first row */
    },

    'text': {
        'lt10_instock': 'Buy now! Less than 10 in stock.',
        'info_button_html': 'Info <i class="icon-chevron-right pull-right muted"></i>',
        'add_to_cart_button_html': 'Add to Cart <i class="icon-chevron-right icon-white pull-right"></i>'
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
exp.css = '.awa-product-info-button { \
    display: block; \
    width: 44px; \
    padding: 0.25em; \
    border: 1px solid #aaa; \
    font-family: Bliss2ExtraLight; \
    font-size: 14px; \
    font-weight: 400; \
    text-transform: uppercase; \
    float: left; \
    margin-left: 30px; \
} \
.awa-product-info-button i { \
    margin-top: 0.20em; \
} \
.awa-product-add-to-cart-button { \
    display: block; \
    width: 110; \
    padding: 0.25em; \
    border: 1px solid #aaa; \
    font-family: Bliss2ExtraLight; \
    font-size: 14px; \
    font-weight: 400; \
    text-transform: uppercase; \
    float: right; \
    color: #fff; \
    background-color: #12a6a4; \
} \
.awa-product-add-to-cart-button i { \
    margin-top: 0.20em; \
} \
.awa-product-add-to-cart-button:disabled { \
    background-color: #666; \
    border-color: #666; \
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

    // Create CTA buttons
    var $info_button = $('<a>', {
            'href': product_href,
            'class': 'awa-product-info-button',
            'html': exp.vars.text.info_button_html
        }),
        $add_to_cart_button = $('<button>', {
            'class': 'awa-product-add-to-cart-button',
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
        exp.log("No entity ID for this product, cannot add to cart.");
    }
    else {
        $this.prop('disabled', 'disabled').html('Loading...');
        exp.func.productAdd(entity_id, function(data, response) {
            $this.prop('disabled', false).html(exp.vars.text.add_to_cart_button_html);
            if (response == 'success') {
                $("#mini-basket-control").html(data);
                ShowOverlayContentBasket("#basket-modal", "shop");
                $this.prop('disabled', 'disabled').html('Added to cart');
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
        exp.vars.elements.stock_text.text(
            exp.vars.text.lt10_instock
        );
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
        // Expand 'delivery' content
        $delivery_heading.removeClass('toggle-link').off('click');
        $delivery_body.removeClass('toggle-content');
        $delivery_body.show();

        // Remove chevron icons
        $delivery_heading.find('i').remove();

        // Move header and body to top
        $about_body.nextAll('h4:first').before($delivery_heading);
        $delivery_heading.after($delivery_body);
    }

    // Get recommended / recently viewed rows
    var $recommended_row,
        $recently_viewed_row;

    if (!exp.vars.elements.product_body_rows) {
        exp.log("Warning: Could not identify product body rows");
    }
    else {
        exp.vars.elements.product_body_rows.each(function(){
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
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);