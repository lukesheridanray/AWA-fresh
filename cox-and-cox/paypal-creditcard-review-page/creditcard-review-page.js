//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var paypal_creditcard_review_page = (function($) {

// Initialise the experiment object
var exp = {};

exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Paypal/Credit Card Review Page experiment PAGE: CC - 0.3');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#checkout-step-review');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'review_table_styling': {           // Adding this via CSS doesn't seem to
        "border": "2px solid #bebcb7",  // work, so let's add it via JS
        "border-collapse": "separate"
    },

    'billing_address_block_selector'  : '#checkout-review-submit .review_billing',
    'shipping_address_block_selector' : '#checkout-review-submit .review_shipping',
    'terms_block_selector'            : '#checkout-review-submit #checkout-agreements',
    'product_name_cell_selector'      : '#checkout-review-table thead tr th:first-of-type',
    'edit_shopping_cart_html'         : 'Items In Your Shopping Cart <a href="http://www.coxandcox.co.uk/checkout/cart/"> \
                                         edit shopping cart</a>',
    'edit_shopping_cart_class'       : 'AWA_EditShoppingCartCell',
    'forgot_item_p_selector'         : '#review-buttons-container .f-left',
    'top_place_order_button_selector': '#checkout-review-submit .buttons-set:first-of-type',

    'page_title'                     : $('.page-title'),
    'new_page_title_html'            : '<h1> \
                                            <img src="//cdn.optimizely.com/img/174847139/d9318f7641174e0391002bddf33f7386.png" alt="" /> \
                                            Review and Confirm Your Order \
                                        </h1>',
    'checkout_nav_buttons'           : $('.step-title'),
    'seperators'                     : $('.checkout-seperator-top1, .checkout-seperator-top2'),
    'review_table_row_selector'      : '#checkout-review-table tbody tr',
    'mini_products'                  : $('.mini-products-list li'),
    'review_table_tft_1stcell_selector' : '#checkout-review-table > tfoot > tr > td:first-of-type',

    'item_total_cell_selector' : '#checkout-review-table > tfoot > tr.first > td.a-right:first-of-type',
    'item_total_new_label'     : 'Cart Total',
    'total_cell_selector'      : '#checkout-review-table > tfoot > tr.last > td.a-right:first-of-type',
    'total_new_label'          : 'Grand Total',

    'summary_prices_selector'  : '#checkout-review-table > tfoot > tr> td.a-right:nth-of-type(2)',

    'checkout_steps'           : $('.opc#checkoutSteps'),
    'review_step_selector'     : '#checkout-step-review',

    'place_order_button_selector' : '.button.btn-checkout:nth-child(2)',
    'padlock_image': '<img src="//cdn.optimizely.com/img/174847139/97a250a00240473fb3eaeb11303abe38.png" alt="" />',

    'header': $(' \
        #header .logo-num-wrapper, \
        #header .nav-container, \
        #header .header-holder, \
        .header-top'),
    'footer': $('#footer,.bottom')
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Reset styling on review page
exp.css += '\
#opc-review #checkout-step-review { \
    top: 15px; \
    border-top: 0; \
    background: transparent; \
}';

// Review table styling
exp.css += ' \
#checkout-review-table { \
    border: 2px solid #bebcb7; \
    border-collapse: separate; \
} \
#checkout-review-table.data-table tbody tr.odd, \
#checkout-review-table.data-table tbody tr.even { \
    background: transparent; \
} \
#checkout-review-table.data-table tbody tr td { \
    padding: 1em; \
} \
#checkout-review-table.data-table thead th { \
    color: black; \
    border-bottom: 1px solid #bebcb7 !important; \
} \
#checkout-review-table.data-table thead th.' + exp.vars.edit_shopping_cart_class + ' a { \
    color: #9A9A9A; \
    text-decoration: underline; \
} \
#checkout-review-table tbody td { \
    width: 50px; \
    border-bottom: 0; \
    border-right: 0; \
} \
#checkout-review-table tbody td:nth-of-type(2) { \
    width: 600px; \
} \
#checkout-review-table > tfoot > tr > td:first-of-type { \
    border-right: 0; \
} \
#checkout-review-table > tfoot > tr.first > td.a-right, \
#checkout-review-table > tfoot > tr.first > td .price { \
    font-weight: normal !important; \
} \
.AWA_review_table_image_cell img { \
    height: 128px; \
} \
#checkout-review-table > tbody > tr > td.last { \
    text-align: right; \
}';

// Style tweaks for page title padlock
exp.css += ' \
.page-title h1 img { \
    vertical-align: text-bottom; \
}';

// Style tweaks for the "Place order" button
exp.css += '\
.button.btn-checkout{ \
    float: right; \
    margin-left: 5px; \
    background: none repeat scroll 0 0 transparent; \
    border: 0 none; \
    cursor: pointer; \
    overflow: visible; \
    padding: 0; \
    width: auto; \
    text-transform:uppercase; \
   } \
\
.button.btn-checkout span{  \
     background: url("/skin/frontend/default/coxampcox/images/bg-btn-login.png") no-repeat scroll 0 0 transparent; \
    border: 0 none; \
    color: #9C5309; \
    float: left; \
    font: 10px/30px Arial,Helvetica,sans-serif; \
    height: 40px; \
    padding: 0 0 0 7px; \
    text-align: left; \
    white-space: nowrap; \
} \
\
.button.btn-checkout span img { \
    vertical-align: text-bottom; \
    margin-right: 1em; \
} \
 \
.button.btn-checkout span span { \
    background: url("/skin/frontend/default/coxampcox/images/bg-btn-login.png") no-repeat scroll 100% -38px transparent; \
    border: 0 none; \
    padding: 5px 20px 0 13px; \
    font-size: 11pt; \
    text-transform: none; \
    font-weight: bold; \
}';

// General style fixes
exp.css += '.w1 .w2 .main-container { \
    margin-bottom: 0; \
} \
.w1 .w2 { \
    padding-bottom: 0; \
} \
.checkout-seperator-bottom { \
    display: none; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

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

exp.func.addProductImages = function(){
    // Go through each row
    $(exp.vars.review_table_row_selector).each(function(i, elem){
        var $elem = $(elem);

        // Create an image cell, get product name
        var $image_cell = $('<td class="AWA_review_table_image_cell"></td>'),
            product_name = $elem.find('h3.product-name').text();

        // Add a new column for the images
        $elem.prepend($image_cell);

        // Get image
        exp.vars.mini_products.each(function(i, elem){
            if ($(elem).find('.product-name a').text() == product_name)
            {
                $image_cell.append($(
                    '<img src="' + $(elem)
                        .find('.product-image img')
                        .attr('src')
                        .replace('thumbnail/50x50', 'thumbnail/125x') + '">'
                ));
            }
        });
    });
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    exp.func.waitForElement('table#checkout-review-table', function(){

        // Hide address and T&C blocks
        $(exp.vars.billing_address_block_selector).hide();
        $(exp.vars.shipping_address_block_selector).hide();
        $(exp.vars.terms_block_selector).hide();

        // Replace product name cell with edit shopping cart line and link
        $(exp.vars.product_name_cell_selector)
            .html(exp.vars.edit_shopping_cart_html)
            .addClass(exp.vars.edit_shopping_cart_class)
            .attr('colspan', 2);

        // Change tfoot colspans to 4 cols
        $(exp.vars.review_table_tft_1stcell_selector).attr('colspan', 4);

        // Delete "Forgot an item? Edit Your Basket" line
        $(exp.vars.forgot_item_p_selector).hide();

        // Delete top "Place order" button
        $(exp.vars.top_place_order_button_selector).hide();

        // Hide nav buttons, seperators, reduce unecessary vertical space
        exp.vars.checkout_nav_buttons.hide();
        exp.vars.seperators.hide();

        // Change page title and add padlock
        exp.vars.page_title.html(exp.vars.new_page_title_html);

        // Add product images to review table
        exp.func.addProductImages();

        // Change labels of totals
        $(exp.vars.item_total_cell_selector).text(
            exp.vars.item_total_new_label);
        $(exp.vars.total_cell_selector).text(
            exp.vars.total_new_label);

        // Fix height for checkout container (its fixed height, but our product
        // images can push the content beyond the height limit)
        exp.vars.checkout_steps.height(
            $(exp.vars.review_step_selector).height());

        // Add padlock to place-order button
        $(exp.vars.place_order_button_selector).find('> span > span').prepend(
            $(exp.vars.padlock_image)
        );

        // Remove header and footer
        exp.vars.header.hide();
        exp.vars.footer.hide();

    }, 1000 * 60 * 5); // 5 minute timeout

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
