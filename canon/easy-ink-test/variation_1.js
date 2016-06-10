// TODO: For dev only. Optimizely loads its own jQuery
// if (jQuery === undefined) {
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
exp.log('Easy Ink Landing Page - dev 0.4');

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
        heading_suffix: ' for your __PRODUCT__ Printer',
        genuine_canon_text: 'Genuine Canon inks bring out the best in your Canon printer, so you are always assured of exceptional results.',
        xl_colour_text: 'XL versions provide up to 2.2 times more prints than regular sized cartridges',
        xl_black_text: 'XL versions provide up to 3.3 times more prints than regular sized cartridges',
    }
};

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
    exp.func.rename_header();
    exp.func.add_genuine_canon_text();
    exp.func.xl_inks_wording();
    exp.func.turn_links_into_buttons();
    exp.func.make_free_shipping_explicit();
    exp.func.move_paper();
    exp.func.suffix_all_headers();
};

// 1. Changing the header to “Ink for your PIXMA MG3550 Printer” and for all headers included the relevant printer
exp.func.rename_header = function(){
    exp.vars.product_title = exp.vars.elems.page_h1.text().replace(' - Compatible inks', '');
    exp.vars.elems.page_h1.text(
        exp.vars.text.new_title.replace('__PRODUCT__', exp.vars.product_title)
    );
};

// 2. Including text about genuine Canon products.
exp.func.add_genuine_canon_text = function(){
    var text_css = '.awa-genuine-canon-text { \
        padding-left: 10px;\
     }';
    $('head').append('<style type="text/css">' + text_css + '</style>');

    exp.vars.elems.page_h1.after(
        '<p class="p-2 awa-genuine-canon-text">' + exp.vars.text.genuine_canon_text + '</p>'
    );
};

// 3. Putting in wording about XL inks having 3.3 times the volume for black and 2.2 times for colour
// Find XL inks section
exp.func.xl_inks_wording = function(){
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
                    '<p class="p-3 product-tile-desc--para">'+ ($product.find('.product-tile--header').text().indexOf('Black') !== -1 ? exp.vars.text.xl_black_text : exp.vars.text.xl_colour_text) +'</p>'
                );
            });
        }
    });
};

// 4. Turning text links in to buttons
exp.func.turn_links_into_buttons = function(){
    var buttons_css = ' \
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
    $('head').append('<style type="text/css">' + buttons_css + '</style>');
};

// 5. Making the free shipping message explicit
exp.func.make_free_shipping_explicit = function(){
    var free_shipping_css = ' \
        .awa-free-shipping-label { \
            font-size: 14px; \
        }';
    $('head').append('<style type="text/css">' + free_shipping_css + '</style>');

    var $add_to_basket_buttons = $('.product-tile--add-to-basket-btn');
    $add_to_basket_buttons.before(
        '<label class="awa-free-shipping-label">\
            Free shipping\
            <i class="icon-checkmark"></i>\
        </label>'
    );
};

// 6. Moving paper further up the page
exp.func.move_paper = function(){

    // Sort the page into content blocks. Pages appear to follow the following layout:
    // .page
    //      .container          | Breadcrumb
    //      .block-margin-btm-2 | Page title
    //
    //      .block-margin-btm-2 | Value packs: Title
    //      .container          | Value packs: Description
    //      .container          | Value packs: Products
    //
    //      .block-margin-btm-2 | XL inks: Title
    //      .container          | XL inks: Description
    //      .container          | XL inks: Products
    //
    //      .block-margin-btm-2 | Standard inks: Title
    //      .container          | Standard inks: Description
    //      .container          | Standard inks: Products
    //
    //      .container          | Photo paper
    //      .container          | Paper

    // Can target the packs / inks blocks with .page > .block-margin-btm-2 + .container + .container
    // and get the paper blocks by getting all containers except those directly
    // after and after+1 a .block-margin-btm-2: .page > .container:not(.block-margin-btm-2 + .container, .block-margin-btm-2 + .container + .container)
    // This will also give the breadcrumb, but we're only interested in the paper block, so we can filter that down easily.

    // Each inks listing box
    var $product_sections = $('.page > .block-margin-btm-2 + .container + .container');

    // "Paper" section
    var $paper_section = $('.page > .container:not(.block-margin-btm-2 + .container, .block-margin-btm-2 + .container + .container)').filter(function(){
        return $(this).find('.layout-header').length
            && $(this).find('.layout-header').text()
                      .toLowerCase()
                      .trim()
                     .toLowerCase() == 'paper';
    });

    // If we haven't found a normal paper section, run awaaaaaaaay!
    if ($paper_section.length !== 1) {
        return;
    }

    // If there are no product sections, freak out!
    if ($product_sections.length === 0) {
        return;
    }

    // Move paper section to be the third section overall, or last - if there's only 1 section.
    if ($product_sections.length > 1) {
        exp.log("Moving paper section to 3rd product slot");
        $product_sections.eq(1).after($paper_section);
    }
    else {
        exp.log("Moving paper section to last product slot");
        $product_sections.last().after($paper_section);
    }
};

// Suffix all headers with "For your dsfjsdfojsdfj printer"
exp.func.suffix_all_headers = function(){
    $('h2.layout--header').each(function(){

        var $this = $(this),
            current_text = $this.text().trim();

        // We shorten "Multipacks and Value Packs" to just "Value packs"
        if (current_text == 'Multipacks and Value Packs') {
            $this.text(
                'Value Packs'
                + exp.vars.text.heading_suffix.replace('__PRODUCT__', exp.vars.product_title)
            );
            return;
        }

        $this.text(
            $this.text()
            + exp.vars.text.heading_suffix.replace('__PRODUCT__', exp.vars.product_title)
        );
    });
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})($);