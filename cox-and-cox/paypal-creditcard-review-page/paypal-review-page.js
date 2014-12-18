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
exp.log('Paypal/Credit Card Review Page experiment PAGE: PP - 0.3.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('body.paypal-express-review');

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

    'terms_block'      : $('ol.checkout-agreements'),
    'newsletter_block' : $('div#checkout-newsletter'),
    'thirdparty_block' : $('div#checkout-thirdparty'),

    'review_table_selector' : '#details-table',
    'product_name_cell_replacement' : $('#details-table').parents('.info-set').find('h2.legend'),
    'product_name_cell_selector' : '#details-table thead tr th:first-of-type',
    'edit_shopping_cart_class'       : 'AWA_EditShoppingCartCell',

    'page_title'          : $('.page-title'),
    'new_page_title_html' : '<h1> \
                                <img src="//cdn.optimizely.com/img/174847139/d9318f7641174e0391002bddf33f7386.png" alt="" /> \
                                Review and Confirm Your Order \
                                <img class="AWA_pp_logo" src="//www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon5.gif" alt="" /> \
                            </h1>',

    'review_table_rows_selector'        : '#details-table tbody tr',
    'mini_products'            : $('.mini-products-list li'),
    'review_table_tft_1stcell_selector' : '#details-table > tfoot > tr > td:first-of-type',

    'item_total_cell_selector'      : '#details-table > tfoot > tr.first > td.a-right:first-of-type',
    'item_total_new_label' : 'Cart Total',
    'total_cell_selector'           : '#details-table > tfoot > tr.last > td.a-right:first-of-type',
    'total_new_label'      : '<strong>Grand Total</strong>',

    'summary_prices_selector' : '#details-table > tfoot > tr> td.a-right:nth-of-type(2)',

    'place_order_button' : $('.button.btn-checkout:nth-child(2)'),
    'padlock_image'      : '<img src="//cdn.optimizely.com/img/174847139/97a250a00240473fb3eaeb11303abe38.png" alt="" />',

    'shipping_method_dropdown': $('.paypal-shipping-method'),

    'update_deets_row'   : $('#billing-address').parent(),
    'update_order_button': $('#update_order'),

    'email_address_box': $('#customer\\:email').parents('.form-list'),
    'review_billing'   : $('.review_billing'),
    'review_shipping'  : $('.review_shipping'),
    'billing_edit_li'  : $('<li class="AWA_edit_deets">edit</li>'),
    'shipping_edit_li' : $('<li class="AWA_edit_deets">edit</li>'),

    'place_order_button_selector' : '#review_button',

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
.info-set { \
    background-color: transparent; \
    background-image: none; \
    padding: 0; \
    border-color: transparent; \
} \
.info-set h2.legend { \
    display: none; \
    background: transparent; \
    border-bottom: transparent; \
}';

// Review table styling
exp.css += ' \
#details-table { \
    border: 2px solid #bebcb7; \
    border-collapse: separate; \
    padding-bottom: .5em; \
} \
#details-table.data-table tbody tr.odd, \
#details-table.data-table tbody tr.even { \
    background: transparent; \
} \
#details-table.data-table tbody tr td { \
    padding: 1em; \
} \
#details-table.data-table thead th { \
    color: black; \
    border-bottom: 1px solid #bebcb7 !important; \
} \
#details-table.data-table thead th.' + exp.vars.edit_shopping_cart_class + ' a { \
    color: #9A9A9A; \
    text-decoration: underline; \
} \
#details-table tbody td { \
    width: 50px; \
    border-bottom: 0; \
    border-right: 0; \
} \
#details-table tbody td:nth-of-type(2) { \
    width: 600px; \
} \
#details-table > tfoot > tr > td:first-of-type { \
    border-right: 0; \
} \
#details-table > tfoot > tr.first > td.a-right, \
#details-table > tfoot > tr.first > td .price { \
    font-weight: normal !important; \
} \
.AWA_review_table_image_cell img { \
    height: 128px; \
} \
.paypal-shipping-method .box-title { \
    display: none; \
} \
.info-set .box.AWA_shipping_dropdown { \
    margin: 0; \
} \
#details-table > tbody > tr > td.last { \
    text-align: right; \
}';

// Style tweaks for page title
exp.css += ' \
.page-title h1 img { \
    vertical-align: text-bottom; \
} \
h2.sub-title { \
    display: none; \
} \
.page-title h1 img.AWA_pp_logo { \
    float: right; \
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
    padding: 0 0 0 6px; \
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
} \
button.btn-checkout.no-checkout span { \
    background-position: initial; \
} \
button.btn-checkout.no-checkout span span { \
    background-position: 100% -38px; \
}';

// Styling for info review row
exp.css += '\
.AWA_update_details_row { \
    border: 2px solid #bebcb7; \
    padding: 0.5em; \
} \
div.col2-set div.col-1 ul.form-list { \
    margin: 0; \
} \
.AWA_update_details_row h2.legend { \
    display: block; \
    margin: 0; \
    padding-left: 0; \
    padding-bottom: 1em; \
} \
#update_order { \
    clear: both; \
} \
.AWA_info_review_row { \
    border: 2px solid #bebcb7; \
    padding: 0.5em; \
} \
.AWA_info_review_row h2 { \
    font-weight: bold; \
    border-bottom: 1px solid #bebcb7; \
    padding-top: .5em; \
    margin-bottom: 1em; \
} \
.AWA_info_review_col { \
    width: 33%; \
    display: inline-block; \
    box-sizing: border-box; \
    vertical-align: top; \
} \
.AWA_info_review_col .review_billing, \
.AWA_info_review_col .review_shipping { \
    float: none; \
    margin: 0; \
}';

// Styling for info details row
exp.css += '.AWA_edit_deets { \
    color: #9e9e9e; \
    text-decoration: underline; \
    cursor: pointer; \
    margin-top: 1em; \
    margin-bottom: 1em; \
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

// This function waits till a DOM element is available and is set to display:none, then runs a callback function
exp.func.waitForElementToHide = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length && $(selector).css('display') == "none") {
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


exp.func.postValidation = function(validation_successful, form) {
    if (validation_successful) {
        exp.vars.update_deets_row.slideUp();

        // Update address details (they dont update autogically)
        exp.func.updateAddressBoxes();
    }
    else {
        exp.vars.update_deets_row.slideDown();
    }
};

exp.func.updateAddressBoxes = function(){
    // Remove all existing address items
    exp.vars.review_billing.find('ul li').remove();
    exp.vars.review_shipping.find('ul li').remove();

    // Add billing and shipping addresses
    $.each(['billing', 'shipping'], function(i, address_type) {
        $.each([
            'FULL_NAME', 'company', 'street1', 'street2', 'city', 'region',
            'country_id', 'telephone'], function(j, field_name) {
            if (field_name == "FULL_NAME") {
                var first_name = $('#' + address_type + '\\:firstname').val(),
                    last_name = $('#' + address_type + '\\:lastname').val();

                exp.vars['review_' + address_type].find('ul').append(
                     $('<li>', { text: first_name + ' ' + last_name })
                );
            }
            else {
                var $field = $('#' + address_type + '\\:' + field_name);
                if ($field.val()) {
                    exp.vars['review_' + address_type].find('ul').append(
                         $('<li>', { text: $field.val() })
                    );
                }
            }
        });
    });

    // Add edit links
    exp.vars.review_billing.find('ul').append(exp.vars.billing_edit_li);
    exp.vars.review_shipping.find('ul').append(exp.vars.shipping_edit_li);
    exp.vars.billing_edit_li.off('click').on('click', function(){ exp.vars.update_deets_row.slideDown(); });
    exp.vars.shipping_edit_li.off('click').on('click', function(){ exp.vars.update_deets_row.slideDown(); });

};

exp.func.monkeypatchValidation = function(){
    // Change the validation on two hidden fields
    $('#shipping\\:region_id').removeClass('validate-select required-entry');
    $('#billing\\:region_id').removeClass('validate-select required-entry local-validation');

    // Patch validation test method to include non-visible elements, and to skip (?:shipping|billing):region_id.
    Validation.test = function(name, elm, useTitle) {
        var v = Validation.get(name);
        var prop = '__advice'+name.camelize();
        try {

        // Skip region_ids - they're never visible.
        if (['billing:region_id', 'shipping:region_id'].indexOf(elm.id) !== -1) return true;

        if(!v.test($F(elm), elm)) {
            //if(!elm[prop]) {
                var advice = Validation.getAdvice(name, elm);
                if (advice == null) {
                    advice = this.createAdvice(name, elm, useTitle);
                }
                this.showAdvice(elm, advice, name);
                this.updateCallback(elm, 'failed');
            //}
            elm[prop] = 1;
            if (!elm.advaiceContainer) {
                elm.removeClassName('validation-passed');
                elm.addClassName('validation-failed');
            }

           if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && this.allowContainerClassName(elm)) {
                    container.removeClassName('validation-passed');
                    container.addClassName('validation-error');
                }
            }
            return false;
        } else {
            var advice = Validation.getAdvice(name, elm);
            this.hideAdvice(elm, advice);
            this.updateCallback(elm, 'passed');
            elm[prop] = '';
            elm.removeClassName('validation-failed');
            elm.addClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && !container.down('.validation-failed') && this.allowContainerClassName(elm)) {
                    if (!Validation.get('IsEmpty').test(elm.value) || !this.isVisible(elm)) {
                        container.addClassName('validation-passed');
                    } else {
                        container.removeClassName('validation-passed');
                    }
                    container.removeClassName('validation-error');
                }
            }
            return true;
        }
        } catch(e) {
            throw(e);
        }
    };

    // Run our own post-validation code when validation is done
    PayPalExpressAjax.formValidator.options.onFormValidate = exp.func.postValidation;
};

exp.func.addProductImages = function(){
    // Go through each row
    $(exp.vars.review_table_rows_selector).each(function(i, elem){
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
                        .replace('thumbnail/50x50', 'thumbnail/125x') + '">' // All images have a 125x variant
                ));
            }
        });
    });
};

exp.func.pokeTable = function(){

    // Replace product name cell with edit shopping cart line and link
    $(exp.vars.product_name_cell_selector)
        .html(exp.vars.product_name_cell_replacement.html())
        .addClass(exp.vars.edit_shopping_cart_class)
        .attr('colspan', 2);

    // Change tfoot colspans to 4 cols
    $(exp.vars.review_table_tft_1stcell_selector).attr('colspan', 4);

    // Add product images to review table
    exp.func.addProductImages();

    // Change labels of totals
    $(exp.vars.item_total_cell_selector).text(
        exp.vars.item_total_new_label);
    $(exp.vars.total_cell_selector).html(
        exp.vars.total_new_label);

    // Center-align summary prices
    $(exp.vars.summary_prices)
        .removeClass('a-right')
        .addClass('a-center');

    // ------------------------------------------------------------------------

    // If we already have a shipping row, adjust that
    if (!$('#details-table tfoot tr:nth-of-type(2)').hasClass('last')) { // TODO: is shipping cell

        // Select the existing shipping row title field, strip out it's text and add our dropdown
        $('#details-table tfoot tr:nth-of-type(2) td.a-right:not(.last)')
            .text('') // blank text
            .append(exp.vars.shipping_method_dropdown); // Add dropdown

        // Give dropdown a class so we can remove some unnecessary padding
        exp.vars.shipping_method_dropdown.addClass("AWA_shipping_dropdown");

        // Re-call native function that reattaches event handlers to dropdown
        PayPalExpressAjax._updateShipping();
    }
    // Otherwise create a brand new shipping row
    else {
        // Construct new row for shipping method dropdown
        var $new_row = $('<tr class="last"> \
            <td class="a-right" colspan="4"></td> \
            <td class="last a-center"> \
                <span class="price">&ndash;</span> \
            </td> \
        </tr>');

        // Add actual dropdown to our brand new row
        $new_row.find('td.a-right').append(exp.vars.shipping_method_dropdown);

        // Give dropdown a class so we can remove some unnecessary padding
        exp.vars.shipping_method_dropdown.addClass("AWA_shipping_dropdown");

        // Add the row to table footer
        $(exp.vars.review_table_selector).find('tfoot tr.last').before($new_row);

        // Re-call native function that reattaches event handlers to dropdown
        PayPalExpressAjax._updateShipping();
    }

};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Patch validation to include hidden fields.
    exp.func.monkeypatchValidation();

    exp.func.waitForElement('table#details-table', function(){

        // Move details table's "info-set" to the top of the page
        $(exp.vars.review_table_selector).parents('.info-set').prependTo(
            $('#order_review_form')
        );

        // Hide T&C block
        exp.vars.terms_block.hide();
        exp.vars.newsletter_block.hide();
        exp.vars.thirdparty_block.hide();

        // Change page title and add padlock
        exp.vars.page_title.html(exp.vars.new_page_title_html);

        // Add padlock to place-order button
        exp.vars.place_order_button.find('> span > span').prepend(
            $(exp.vars.padlock_image)
        );

        // Identify and style update-details-row.
        exp.vars.update_deets_row.addClass('AWA_update_details_row');

        // Move "Update order data" button into this row
        exp.vars.update_deets_row.append(exp.vars.update_order_button);

        // If there are NO validation errors, hide the update_deets_row
        if (exp.vars.update_deets_row.find('.validation-advice').length === 0) {
            exp.vars.update_deets_row.hide();
        }

        // Add row for email/billing/shipping information
        var $detailsRow = $('<div class="AWA_info_review_row"><h2>Please confirm your address</h2></div>');
        $(exp.vars.review_table_selector).parents('.info-set').after($detailsRow);

        var $emailCol = $('<div class="AWA_info_review_col AWA_info_review_email">'),
            $billingCol = $('<div class="AWA_info_review_col AWA_info_review_billing">'),
            $shippingCol = $('<div class="AWA_info_review_col AWA_info_review_shipping">');
        $detailsRow.append($emailCol, $billingCol, $shippingCol);

        $emailCol.append(exp.vars.email_address_box);
        $billingCol.append(exp.vars.review_billing);
        $shippingCol.append(exp.vars.review_shipping);

        // Add "Edit" links to billing and shipping address, which opens up the update deets row.
        exp.vars.review_billing.find('ul').append(exp.vars.billing_edit_li);
        exp.vars.review_shipping.find('ul').append(exp.vars.shipping_edit_li);
        exp.vars.billing_edit_li.on('click', function(){ exp.vars.update_deets_row.slideDown(); });
        exp.vars.shipping_edit_li.on('click', function(){ exp.vars.update_deets_row.slideDown(); });

        // Add padlock to place-order button
        $(exp.vars.place_order_button_selector).find('> span > span').prepend(
            $(exp.vars.padlock_image)
        );

        // Remove header and footer
        exp.vars.header.hide();
        exp.vars.footer.hide();

        // Do changes to table
        exp.func.pokeTable();

        // Re-apply changes to the table when the table contents change.
        OrderReviewController.prototype.onSubmitShippingSuccess = function(){
            // Wait for "Please wait..." button to hide then poke table
            exp.func.waitForElementToHide('#review-please-wait', exp.func.pokeTable);
        };

    }, 1000 * 60 * 5); // 5 minute timeout

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
