// TODO: For dev only. Optimizely loads its own jQuery
// if (!jQuery) {
//     var jq = document.createElement('script');
//     jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
//     document.getElementsByTagName('head')[0].appendChild(jq);
// }


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
exp.log('Easy Ink Landing Page - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.primary-breadcrumb li.active');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {

    // Additional condition: Check breadcrumb starts with 'Easy Ink Delivery'
    if (exp.condition.text().indexOf('Easy Ink Delivery') !== 0) {
        exp.log('Experiment failed a condition');
        return false;
    }
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    elems: {
        page_h1: $('h1.header-1'),
        xl_inks_products_section: undefined,
    },
    text: {
        new_title: 'Ink for your __PRODUCT__ Printer',
        genuine_canon_text: 'Genuine Canon inks bring out the best in your Canon printer, so you are always assured of exceptional results.',
        xl_colour_text: 'XL versions provide up to 2.2 times more prints than regular sized cartridges',
        xl_black_text: 'XL versions provide up to 3.3 times more prints than regular sized cartridges',
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.btn.product-tile--add-to-basket-btn, .btn.product-tile--add-to-basket-btn:hover {\
    background: #6a963b;\
    color: #fff; \
\
    padding: 5px 0px; \
    width: 100%; \
    line-height: 100%; \
    text-align: left; \
    margin-bottom: 5px; \
    border: none; \
}\
.btn.product-tile--add-to-basket-btn .add-to-basket--submit, .btn.product-tile--add-to-basket-btn:hover .add-to-basket--submit {\
    color: #fff; \
} \
.product-tile .btn.product-tile--add-to-basket-btn, .product-tile .btn.product-tile--add-to-basket-btn:hover {\
    margin: 10px 5px 10px 0;\
    padding: 5px 10px;\
}\
label[for="add-to-wishlist"] {\
    margin: 10px 5px 10px 0;\
    padding: 5px 10px; \
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

// This function allows you to always round a number 'up', 'down', or normally, returns a string
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // 1. Changing the header to “Ink for your PIXMA MG3550 Printer” and for all headers included the relevant printer
    exp.vars.product_title = exp.vars.elems.page_h1.text().replace(' - Compatible inks', '');
    exp.vars.elems.page_h1.text(
        exp.vars.text.new_title.replace('__PRODUCT__', exp.vars.product_title)
    );

    // 2. Including text about genuine Canon products.
    exp.vars.elems.page_h1.after(
        '<p class="p-2">' + exp.vars.text.genuine_canon_text + '</p>'
    );
    
    // 3. Putting in wording about XL inks having 3.3 times the volume for black and 2.2 times for colour
    // Find XL inks section
    $('.block-margin-btm-2').each(function(){

        // Skip checking once found
        if (exp.vars.elems.xl_inks_products_section !== undefined) {
            return;
        }

        var $block_margin_btm = $(this);
        if ($block_margin_btm.text() == 'XL Inks') {
            $block_margin_btm.nextUntil('.block-margin-btm', '.container').each(function(){

                // Skip checking once found
                if (exp.vars.elems.xl_inks_products_section !== undefined) {
                    return;
                }

                var $container = $(this);
                if ($container.find('.gallery-product-tile').length > 0) {
                    exp.vars.elems.xl_inks_products_section = $container;
                };
            });
        }

        if (exp.vars.elems.xl_inks_products_section !== undefined) {
            exp.vars.elems.xl_inks_products_section.find('.layout-item-container').each(function(){
                var $product = $(this);

                $product.find('p.description').after(
                    '<p>'+ ($product.find('.product-tile--header').text().indexOf('Black') !== -1 ? exp.vars.text.xl_black_text : exp.vars.text.xl_colour_text) +'</p>'
                ); 
            });
        }
    });
    
    // 4. Turning text links in to buttons
        // Done via CSS
    
    // 5. Making the free shipping message explicit
        // TODO: I don't know what this means.
    
    // 6. Moving paper further up the page
        // TODO: To where exactly?

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);