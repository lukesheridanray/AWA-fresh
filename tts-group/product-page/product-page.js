Array.prototype.chunk = function(chunkSize) {
    var array=this;
    return [].concat.apply([],
        array.map(function(elem,i) {
            return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
        })
    );
};

//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var tts_group_product_page_experiment = (function($) {

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
exp.log('TTS Group Product Page Experiment - 0.3');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.product_header');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    '$product_code_row'  : $('#right_box .product_table tr:first-of-type'),
    'product_code'       : $('.product_table tr:first-of-type th:nth-of-type(2)').length === 1 ? $('.product_table tr:first-of-type th:nth-of-type(2)').text() : false,
    '$free_delivery_line': $("<p>", { text: 'FREE DELIVERY on all UK online orders. NO minimum order value.' }),
    '$small_description': $('#product_strapline'),
    'reviews_count_text': ' reviews - ',
    'reviews_link_text' : 'read all',
    'usually_in_stock_text' : 'Less than 10 in stock. More coming.'
};

// Styles
// Product code positioning
exp.css = 'h1#product_title { \
    display: inline-block; \
} \
.AWA_product_code { \
    font-size: 16px; \
    margin-left: 1em; \
}';

// Product prices
exp.css += '\
#product_price, \
#product_price_inc_vat { \
    display: inline-block; \
    clear: none; \
    font-size: 1em; \
    color: #2264a5; \
    margin-top: 0; \
} \
#product_price span, \
#product_price_inc_vat span{ \
    margin-left: 0.25em; \
} \
.AWA_product_price_row { \
    font-size: 1.5em; \
}';

// Quantity and "add to cart" box
exp.css += '\
.AWA_stock_cell .stock_msg, \
.AWA_qty_cell .qty_box, \
.AWA_buy_cell .buy_button { \
    position: static; \
} \
.AWA_stock_cell .stock_msg { \
    background-position-y: center; \
    min-height: 0; \
} \
.AWA_qty_cell .qty_box { \
    background: transparent url(\'http://www.tts-group.co.uk/shops/app_themes/TTS/images/qty_box-reskin.png\') no-repeat 0 0; \
    border: none; \
    font-weight: 600; \
    font-size: 16px; \
    margin: 0 0 0 10px; \
    width: 57px; \
    height: 30px; \
    line-height: 30px; \
    color: #606060; \
    text-align: center; \
    padding: 0 0 0 42px; \
    font-family: \'Source Sans Pro\', Arial, sans-serif, tahoma; \
    overflow: hidden; \
    display: block; \
    margin: 0; \
} \
.AWA_buy_cell .buy_button { \
    margin: 0; \
} \
.AWA_qty_row > * { \
    display: inline-block; \
    margin-right: 1em; \
} \
.AWA_qty_row { \
    margin-top: 1em; \
} \
.AWA_stock_cell { \
    width: 150px; \
    vertical-align: middle; \
}';

// Fiddle with the cirruculum info
exp.css += ' \
.curriculum_information { \
    float: none; \
    width: 100%; \
    padding-top: 1em; \
} \
.curriculum_information .subject_description, \
.curriculum_information .subject_areas { \
    width: 33%; \
    box-sizing: border-box; \
    float: none; \
    display: inline-block; \
    vertical-align: top; \
    padding-left: 1em; \
    padding-right: 1em; \
    border-right: 1px solid rgb(150, 153, 158); \
} \
.curriculum_information .subject_description:first-of-type { \
    padding-left: 0; \
} \
.curriculum_information .subject_areas { \
    border-right: 0; \
    padding-right: 0; \
} \
.curriculum_information .subject_areas .subject_images { \
    float: none; \
} \
.curriculum_information .subject_areas p { \
    font-size: 12px; \
    margin: 0; \
} \
.curriculum_information .subject_areas .subject_images img { \
    width: 24px; \
}';

// Restyle the reviews widget
exp.css += ' \
.curriculum_information + .customer_review { \
    float: none; \
    width: 100%; \
    margin-top: 1em; \
    box-sizing: border-box; \
} \
.customer_review .product_review_comment { \
    float: right; \
} \
.customer_review .feefo_icon { \
    float: none; \
    margin-left: 1em; \
    height: 16px; \
} \
.customer_review .review_navigation { \
    display: none; \
}';

// Change the image carousel to be vertical
exp.css += ' \
.product_header #left_box { \
    width: 370px; \
} \
.product_header #right_box { \
    width: 380px; \
} \
.product_main_image, \
.carousel_container { \
    display: inline-block; \
} \
.carousel_container { \
    width: 64px; \
    position: relative; \
    overflow: hidden; \
    vertical-align: top; \
    margin-top: 55px; \
} \
 \
.carousel_images { \
    position: relative; \
    width: 9999px; \
    margin: 0; padding: 0; \
    margin-top: 24px; \
    margin-bottom: 24px; \
} \
 \
.carousel_images li, \
.carousel_images li a, \
.carousel_images li a img { \
    display: block; \
    position: relative; \
    width: 58px; \
    height: 58px; \
    margin: 0; padding: 0; \
} \
.carousel_images li { \
    display: block; \
    float: none; \
    margin: 0 3px 4px 0; \
} \
 \
.carousel_nav { \
    position: absolute; \
    width: 58px; \
    height: 20px; \
    z-index: 5; \
    opacity: 1!important; \
} \
.carousel_nav span { \
    top: 0!important; \
    display: block; \
    width: 100%; \
    color: white; \
    font-size: 18pt; \
    line-height: 20px; \
    padding: 0 3px; \
    cursor: pointer; \
    text-align: center; \
}';

// Reformat "People who looked at also looked at ..." box to fit vertically
exp.css += '\
#rr_placement_0 { \
    float: right; \
    width: 200px; \
} \
#rr_placement_0 h4 { \
    font-size: 12pt; \
} \
#rr_placement_0 ul li { \
    display: block; \
    float: none; \
    margin-bottom: 2em; \
} \
#productTabs { \
    clear: left; \
} \
#rich_relevance_item_page_recs_1 { \
    clear: none; \
} \
#rich_relevance_item_page_recs_2 { \
    clear: left; \
} \
.tab_container .product_tabs ul li a { \
    padding-left: 10px; \
    padding-right: 10px; \
}';

// Check if this is a single-variant or multi-variant page.
if ($('#right_box .add_to_basket .buy_button').length === 0) {
    // For multi-variation tests
    exp.css += '\
    .tab_container #description .tab_left_holder { \
        float: none; \
        width: 100%; \
    } \
    .AWA_variants .part_content h1 { \
        display: none; \
    } \
    .AWA_choose_your { \
        margin-left: 1em; \
        float: right; \
        display: block; \
        line-height: 19px; \
        margin-top: 5px; \
    } \
    .AWA_choose_your_newline { \
        margin-top: 1em; \
        float: none; \
        margin-left: 0; \
    }';
}

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Reinitalize image thumbnail sliding.  Adapted from site's own code.
exp.func.reInitImageThumbs = function(){
    var carouselImages = $("ul.carousel_images li").length;
    if ($("ul.carousel_images li").length > 3) {
        // Set up the side pods! :)
        var top = $(".carousel_nav:first-of-type");
        var bottom = $(".carousel_nav:last-of-type");
        var minTop = (carouselImages * 118 - 18) * (-1) + $(".carousel_container").height();
        top.hide();

        // Now set up the events...
        top.click(function() {
            var carousel = $(this).parent().find("ul");
            var currentTop = carousel.position().top;
            var newTop = (currentTop + 95) > 0 ? 0 : (currentTop + 95);
            $(this).parent().find("ul").animate({ top: newTop + "px" }, function() {
                bottom.css({ display: "block" }).animate({ opacity: 0.5 });
            });
            if (newTop === 0) {
                $(this).fadeOut();
            }
        });
        bottom.click(function() {
            var carousel = $(this).parent().find("ul");
            var currentTop = carousel.position().top;
            var newTop = (currentTop - 95) < minTop ? minTop : (currentTop - 95);
            $(this).parent().find("ul").animate({ top: newTop + "px" }, function() {
                top.css({ display: "block" }).animate({ opacity: 0.5 });
            });
            if (newTop === minTop) {
                $(this).fadeOut();
            }
        });

    }
};

exp.func.getHighestRatedReviewWithText = function(cb) {
    var review_elements = $('.feefo_product_review_table_cell_review, \
                           .feefo_product_review_table_cell_rating, \
                           .feefo_product_review_table_cell_date');
    var reviews = review_elements.toArray().chunk(3);

    // Sort reviews
    var sortedReviews = reviews.sort(function(a, b){
        var a_rating = parseInt($(a[1]).find('img').attr('alt').replace(' Star', ''), 10),
            b_rating = parseInt($(b[1]).find('img').attr('alt').replace(' Star', ''), 10);
        if (a_rating < b_rating) return 1;
        if (a_rating == b_rating) return 0;
        if (a_rating > b_rating) return -1;
    });

    // Filter out results w/o text
    var filteredReviews = $.grep(sortedReviews, function(review){
        return $(review[0]).text().trim().length > 0;
    });

    if (filteredReviews.length) {
        cb({
            text: $(filteredReviews[0][0]).text().trim(),
            rating: parseInt($(filteredReviews[0][1]).find('img').attr('alt').replace(' Star', ''), 10),
            date: $(filteredReviews[0][2]).text().trim()
        });
    }
    else {
        cb();
    }
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');


    // Move product code to the right of product header
    this.vars.$product_code_row.hide();
    var $product_code_span = $('<span>', {
        'text': this.vars.product_code !== false ? "Product Code: " + this.vars.product_code : '',
        'class': 'AWA_product_code'
    });
    $('h1#product_title').after(
        $product_code_span
    );

    // Move prices to new ow
    var $product_price_row = $('<div>', { 'class': 'AWA_product_price_row' });
    $product_price_row.append(
        $('#product_price'),
        ' (',
        $('#product_price_inc_vat'),
        ')'
    );
    $product_code_span.after($product_price_row);

    // Add line about free delivery
    $product_price_row.after(
        this.vars.$free_delivery_line
    );

    // Check if this is a single-variant or multi-variant page.
    if ($('#right_box .add_to_basket .buy_button').length !== 0) {
        // Single variant

        // Move stuff out of table into proper row
        var $qty_row = $('<div class="AWA_qty_row"> \
            <div class="AWA_qty_cell"></div> \
            <div class="AWA_buy_cell"></div> \
            <div class="AWA_stock_cell"></div> \
        </div>'),
            $availability = $('#right_box .product_table .stock_msg'),
            $qty_box      = $('#right_box .product_table .qty_box').parent(),
            $buy_button   = $('#right_box .product_table .buy_button');

        if ($availability.text().trim() == "Usually in stock") {
            $availability.text(this.vars.usually_in_stock_text);
        }

        $qty_row.find('.AWA_qty_cell').append($qty_box.find('> *'));
        $qty_row.find('.AWA_buy_cell').append($buy_button);
        $qty_row.find('.AWA_stock_cell').append($availability);

        $('#right_box .product_table').before($qty_row);
        $('#right_box .product_table').remove();
    }
    else {
        // Multi variant
        var variantsAvailable = {}, // Map of variant IDs to variant elem and metadata
            $variantDropdown = $('<select class="AWA_variant_dropdown">'),
            $variantsDiv = $('<div class="AWA_variants">');
        this.vars.$free_delivery_line.after($variantDropdown);

        // Iterate through variant entries
        $('#description .tab_right_holder .part_content').each(function(i, elem){
            var $elem = $(elem),
            product_code = $elem.find('.product_table tr:first-of-type th:nth-of-type(2)').text().trim(),
            product_title = $elem.find('h1').text().trim(),
            price_ex_vat = $elem.find('.product_table tr:nth-of-type(3) td:first-of-type h2').text().trim().replace('ex', ' ex'),
            price_inc_vat = $elem.find('.product_table tr:nth-of-type(3) td:first-of-type h3').text().trim().replace('inc', ' inc');

            // Add entry to variantsAvaialble map for this variant
            variantsAvailable[product_code] = {
                code: product_code,
                title: product_title,
                price_inc_vat: price_inc_vat,
                price_ex_vat: price_ex_vat,
                elem: $elem
            };

            // Move elem's stuff of table into proper row
            var $qty_row = $('<div class="AWA_qty_row"> \
                <div class="AWA_qty_cell"></div> \
                <div class="AWA_buy_cell"></div> \
                <div class="AWA_stock_cell"></div> \
            </div>'),
                $availability = $elem.find('.product_table .stock_msg'),
                $qty_box      = $elem.find('.product_table .qty_box').parent(),
                $buy_button   = $elem.find('.product_table .buy_button');

            if ($availability.text().trim() == "Usually in stock") {
                $availability.text(exp.vars.usually_in_stock_text);
            }

            $qty_row.find('.AWA_qty_cell').append($qty_box.find('> *'));
            $qty_row.find('.AWA_buy_cell').append($buy_button);
            $qty_row.find('.AWA_stock_cell').append($availability);

            $elem.find('.product_table').before($qty_row);
            $elem.find('.product_table').remove();

            $elem.hide();

            // Move variant below dropdown
            $variantsDiv.append($elem);

            // Add option to variant dropdown for this variant
            var $option = $('<option>', {
                value: product_code,
                text: product_title
            });
            $variantDropdown.append($option);
        });

        this.vars.$free_delivery_line.after($variantDropdown);
        $variantDropdown.after($variantsDiv);
        var $chooseYourToy = $('<span>', { 'class': 'AWA_choose_your', text: 'Choose your ' + $('.breadcrumbing').contents().last().text().trim() });
        $variantDropdown.before($chooseYourToy);

        // Move the "Choose your..." on to a new line _before_ the dropdown IF we can't fit it inline
        if ($variantDropdown.width() + $chooseYourToy.width() > $variantDropdown.parent().width()) {
            $chooseYourToy.addClass('AWA_choose_your_newline');
        }


        // Set up change handler for variatnDropdown
        $variantDropdown.bind('change', function(e){
            var selectedProductId = $variantDropdown.find('option:selected').val();
            for (var k in variantsAvailable) {
                variantsAvailable[k].elem.hide();
            }
            variantsAvailable[selectedProductId].elem.show();

            $('#product_price').text(variantsAvailable[selectedProductId].price_ex_vat);
            $('#product_price_inc_vat').text(variantsAvailable[selectedProductId].price_inc_vat);
        });
        $variantDropdown.trigger('change');
    }

    // Murderize the small description
    this.vars.$small_description.hide();

    // Re-arrange the "English curriculum" / "Scottish curriculum" DOM
    var $subj_desc = $('.subject_description'),
        $subj_desc_clone = $subj_desc.clone();
    $subj_desc.addClass('AWA_english_curriculum').after($subj_desc_clone);
    $subj_desc_clone.addClass('AWA_scottish_curriculum');
    $subj_desc.find('> *').slice(3).remove();
    $subj_desc_clone.find('> *').slice(0, 2).remove();
    $subj_desc_clone.after($('.subject_areas '));

    // Jiggle around the reviews box TODO
    if ($('.customer_review .product_review_comment').length) {
        $('.customer_review .product_review_comment').after(
            $('.customer_review .product_review_strapline')
        );
        $('.customer_review .feefo_icon').insertAfter(
            $('.customer_review #product_review_rating')
        );
        exp.func.getHighestRatedReviewWithText(function(review){
            if (review !== undefined && review.text.length) {
                $('.customer_review .product_review_strapline').text(
                    review.text
                );
            }
            else {
                $('.customer_review .product_review_strapline').hide();
            }
        });
        $('.product_review_comment').contents().last()[0].textContent = exp.vars.reviews_count_text;
        $('.product_review_comment').append(
            $('.customer_review .view_review_link')
        );
        $('.customer_review .view_review_link').text(exp.vars.reviews_link_text);
        $('.customer_review .product_review_comment') // Parenthesis please.
            .prepend("(")
            .append(")");
    }

    // Move main image to the left of the image nav
    $('.carousel_container').after(
        $('.product_main_image')
    );

    // Reset top,left on image thumbs nav, remove event handlers
    $('.carousel_nav')
        .attr('style', '')
        .unbind('click')
        .show();
    $('.carousel_nav:first-of-type').css({ left: 0, top: 0 });
    $('.carousel_nav:last-of-type').css({ left: 0, bottom: 0 });

    // Re-init the nav, coded to work vertically
    exp.func.reInitImageThumbs();

    // Give quantity box up-down arrows (browser-support permitting)
    $('.qty_box')[0].type = "number";

    // Move "People who looked at also looked at ..." to the right of the page
    $('#rr_placement_0').insertAfter('#right_box');

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);