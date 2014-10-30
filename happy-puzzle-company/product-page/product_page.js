//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var hp_product_page_exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Happy Puzzle Product Page experiment - 0.3');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('h1.product_title');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'sidebar'                    : $('.left_narrow_content_area'),
    'main_content_area'          : $('#main_middle_container'),
    'product_images_cell'        : $('#main_middle_container > table[summary="Product main image container"] > tbody > tr >td:first-of-type'),
    'product_info_cell'          : $('#main_middle_container > table[summary="Product main image container"] > tbody > tr > td:nth-of-type(3)'),
    'product_thumbnails'         : $('#main_middle_container > table[summary="Product main image container"] > tbody > tr > td:first-of-type > table > tbody > tr:nth-of-type(2) > td > a'),
    'product_main_image'         : $('#main_middle_container > table[summary="Product main image container"] > tbody > tr > td:first-of-type > table > tbody > tr:first-of-type > td > div'),
    'click_thumbnails_line'      : $('#main_middle_container > table[summary="Product main image container"] > tbody > tr > td:first-of-type > table > tbody > tr:last-of-type'),
    'product_title'              : $('h1.product_title'),
    'reference_row'              : $('#main_middle_container > table[summary="Product main image container"] > tbody > tr >td:nth-of-type(3) > div.main_product_details_border > table > tbody > tr:nth-of-type(2)'),
    'accessibility_symbols_table': $('#ctl00_cphInnerMaster_dlSymbols'),
    'product_details_table'      : $('.main_product_details_border > table'),
    'product_stats'              : $('.main_product_details_border > table > tbody > tr:last-of-type'),
    'cart_controls_table'        : $('<table class="AWA_cart_controls_table" width="100%" border="0" cellspacing="0" cellpadding="0" summary="Product main image container"><tbody></tbody></table>'),
    'quantity_row'               : $('#ctl00_cphInnerMaster_txtQuantity').parent().parent(),
    'add_to_card_button_cell'    : $('#ctl00_cphInnerMaster_imgbtnBuyNow').parent(),
    'reviews_row_template'       : '<tr class="AWA_reviews_row"><td> <a href="__REVIEW_LINK__"> <div class="AWA_stars">__REVIEW_STARS__</div> <p class="AWA_blurb">__REVIEW_BLURB__</p> </a> </td></tr>',
    'money_back_row'             : $('<tr class="AWA_moneyback_row"><td> <div class="AWA_well"> <p class="AWA_title">MONEY BACK GUARANTEE</p> <p>If you\'re not completely satisfied we\'ll give you your money back.</p> </div> </td></tr>'),
    'free_delivery_row'          : $('<tr class="AWA_freedelivery_row"><td> <div class="AWA_well"> <p class="AWA_title">FREE DELIVERY UK mainland</p> <p>When you spend £40 or more.</p> </div> </td></tr>'),
    'product_description_cell'   : $('#ctl00_cphInnerMaster_tdProductInformation'),
    'related_items_table'        : $('#ctl00_cphInnerMaster_tdYouMayAlsoLIkeProducts .Related_Products_table'),

    'exclusivity_line': 'Exclusively available from the Happy Puzzle Company',

    'rating_star': '<div class="AWA_star"><img alt="trustpilot stars" src="//images-static.trustpilot.com/community/shared/sprite_star.png" class="star-image"></div>',
    'review_data': {
        'SILLY STORY LABORATORY': {
            'rating': 5,
            'blurb': "Definitely a help with English language",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/53eb40e700006400029e6ab9'
        },
        'WELCOME TO PUZZLINGTON!': {
            'rating': 5,
            'blurb': "Puzzlington game a winner.",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/539a199800006400029084df'
        },
        'JIGRAPHY: UNITED KINGDOM & IRELAND': {
            'rating': 5,
            'blurb': "Geography made fun!",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/53eb529300006400029e6f03'
        },
        'THE AMAZING CLOCK KIT': {
            'rating': 5,
            'blurb': "chuffed to bits with the final results",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/53efa0ae00006400029f2a0d'
        },
        'THE AMAZING ROLLER COASTER KIT': {
            'rating': 4,
            'blurb': "Terrific",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/53257a1700006400027d7eb4'
        },
        'THE AMAZING FLOWER KIT': {
            'rating': 5,
            'blurb': "a quality toy which inspires creativity",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/537f3f9b00006400028bec18'
        },
        'WAXIDOODLES': {
            'rating': 5,
            'blurb': "For children of all ages - even Grandmas",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/52cc505c00006400026f2ee6'
        },
        'JIGRAPHY 2014/15 FOOTBALL MAP': {
            'rating': 5,
            'blurb': "Strongly recommend them",
            'link': 'https://www.trustpilot.co.uk/review/www.happypuzzle.co.uk/540c97810000640002a405d7'
        }
    },

    'related_products_extra': {
        'SILLY STORY LABORATORY': ['JIGRAPHY: UNITED KIGNDOM & IRELAND'],
        'WELCOME TO PUZZLINGTON!': ['WAXIDOODLES'],
        'JIGRAPHY: UNITED KINGDOM & IRELAND': ['JIGRAPHY 2014/15 FOOTBALL MAP', 'THE AMAZING CLOCK KIT'],
        'THE AMAZING CLOCK KIT': ['THE AMAZING ROLLER COASTER KIT'],
        'THE AMAZING ROLLER COASTER KIT': ['JIGRAPHY: UNITED KIGNDOM & IRELAND'],
        'THE AMAZING FLOWER KIT': ['JIGRAPHY: UNITED KIGNDOM & IRELAND'],
        'WAXIDOODLES': ['JIGRAPHY: UNITED KIGNDOM & IRELAND'],
        'JIGRAPHY 2014/15 FOOTBALL MAP': ['JIGRAPHY: UNITED KIGNDOM & IRELAND', 'THE AMAZING CLOCK KIT', 'SILLY STORY LABORATORY']
    },
    'related_products_HTML': {
        'JIGRAPHY: UNITED KIGNDOM & IRELAND': '<td width="33%" valign="top"> \
            <a class="feature_link" href="/products/jigraphy-united-kingdom-ireland.aspx"><div class="featured_title">JIGRAPHY: UNITED KINGDOM &amp; IRELAND</div> \
                <div class="featured_image"> \
                    <img src="/Images.ashx?Image=Jigraphy-box-600.jpg&amp;width=117&amp;type=PI" alt="JIGRAPHY: UNITED KINGDOM &amp; IRELAND" title="JIGRAPHY: UNITED KINGDOM &amp; IRELAND" border="0"> \
                        </div> \
                            <div class="new_tag"> \
                                <img src="/images/products/TOPSELLER_tag_small.gif" width="53" height="53" alt="TopSeller Product"> \
                </div> \
            </a> \
            <div class="reference_box"> \
                <div class="featured_price_container"> \
                    <div class="featured_price">£14.99</div> \
                </div> \
                <div class="featured_buy_button"><a href="/products/jigraphy-united-kingdom-ireland.aspx" target="_parent"><img src="/images/homepage/buttons/more_info.gif" width="76" height="26" alt="more information" title="more information"></a> \
                </div> \
            </div> \
        </td>',
        'WAXIDOODLES': '<td width="33%" valign="top"> \
            <a class="feature_link" href="/products/waxidoodles.aspx"><div class="featured_title">WAXIDOODLES</div> \
                <div class="featured_image"> \
                    <img src="/Images.ashx?Image=WaxiDoodles-Girls-and-box-no-shadow_1.png&amp;width=117&amp;type=PI" alt="WAXIDOODLES" title="WAXIDOODLES" border="0"> \
                        </div> \
                            <div class="new_tag"> \
                                <img src="/images/products/TOPSELLER_tag_small.gif" width="53" height="53" alt="TopSeller Product"> \
                </div> \
            </a> \
            <div class="reference_box"> \
                <div class="featured_price_container"> \
                    <div class="featured_price">£14.99</div> \
                </div> \
                <div class="featured_buy_button"><a href="/products/waxidoodles.aspx" target="_parent"><img src="/images/homepage/buttons/more_info.gif" width="76" height="26" alt="more information" title="more information"></a> \
                </div> \
            </div> \
        </td>',
        'JIGRAPHY 2014/15 FOOTBALL MAP': '<td width="33%" valign="top"> \
             <a class="feature_link" href="/products/JIGRAPHY-2014-15-FOOTBALL-MAP.aspx"> \
             <div class="featured_title">JIGRAPHY 2014/15 FOOTBALL MAP</div> \
             <div class="featured_image"> \
             <img name="JIGRAPHY 2014/15 FOOTBALL MAP" id="JIGRAPHY 2014/15 FOOTBALL MAP" src="/Images.ashx?Image=Jigraphy-Football_1.jpg&amp;width=144&amp;type=PI" width="144" height="144" alt="JIGRAPHY 2014/15 FOOTBALL MAP" title="JIGRAPHY 2014/15 FOOTBALL MAP"> \
             </div> \
             <div class="new_tag"> \
                                            <img src="/images/products/TOPSELLER_tag_small.gif" width="53" height="53" alt="TopSeller Product"> \
             </div> \
             </a> \
             <div class="reference_box"> \
             <div class="featured_price_container"> \
             <div class="featured_price">£14.99</div> \
             </div> \
             <div class="featured_buy_button"><a href="/products/JIGRAPHY-2014-15-FOOTBALL-MAP.aspx" target="_parent"> \
             <img src="/images/homepage/buttons/more_info.gif" width="76" height="26" alt="more information" title="more information"> \
             </a></div> \
             </div> \
         </td>',
        'THE AMAZING CLOCK KIT': '<td width="33%" valign="top"> \
            <a class="feature_link" href="/products/the-amazing-clock-kit.aspx"><div class="featured_title">THE AMAZING CLOCK KIT</div> \
                <div class="featured_image"> \
                    <img src="/Images.ashx?Image=PWMFC2.jpg&amp;width=117&amp;type=PI" alt="THE AMAZING CLOCK KIT" title="THE AMAZING CLOCK KIT" border="0"> \
                        </div> \
                            <div class="new_tag"> \
                                <img src="/images/products/TOPSELLER_tag_small.gif" width="53" height="53" alt="TopSeller Product"> \
                </div> \
            </a> \
            <div class="reference_box"> \
                <div class="featured_price_container"> \
                    <div class="featured_price">£14.99</div> \
                </div> \
                <div class="featured_buy_button"><a href="/products/the-amazing-clock-kit.aspx" target="_parent"><img src="/images/homepage/buttons/more_info.gif" width="76" height="26" alt="more information" title="more information"></a> \
                </div> \
            </div> \
        </td>',
        'SILLY STORY LABORATORY': '<td width="33%" valign="top"> \
            <a class="feature_link" href="/products/silly-story-laboratory.aspx"><div class="featured_title">SILLY STORY LABORATORY</div> \
                <div class="featured_image"> \
                    <img src="/Images.ashx?Image=BOOKBUSSL.jpg&amp;width=117&amp;type=PI" alt="SILLY STORY LABORATORY" title="SILLY STORY LABORATORY" border="0"> \
                        </div> \
                            <div class="new_tag"> \
                                <img src="/images/products/TOPSELLER_tag_small.gif" width="53" height="53" alt="TopSeller Product"> \
                </div> \
            </a> \
            <div class="reference_box"> \
                <div class="featured_price_container"> \
                    <div class="featured_price">£14.99</div> \
                </div> \
                <div class="featured_buy_button"><a href="/products/silly-story-laboratory.aspx" target="_parent"><img src="/images/homepage/buttons/more_info.gif" width="76" height="26" alt="more information" title="more information"></a> \
                </div> \
            </div> \
        </td>',
        'THE AMAZING ROLLER COASTER KIT': '<td width="33%" valign="top"> \
            <a class="feature_link" href="/products/THE-AMAZING-ROLLER-COASTER-KIT.aspx"> \
                <div class="featured_title">THE AMAZING ROLLER COASTER KIT</div> \
                <div class="featured_image"> \
                    <img name="THE AMAZING ROLLER COASTER KIT" id="THE AMAZING ROLLER COASTER KIT" src="/Images.ashx?Image=ROLLERCOASTER-box.png&amp;width=144&amp;type=PI" width="144" height="144" alt="THE AMAZING ROLLER COASTER KIT" title="THE AMAZING ROLLER COASTER KIT"> \
                </div> \
                <div class="new_tag"> \
                    <img src="/images/products/TOPSELLER_tag_small.gif" width="53" height="53" alt="TopSeller Product"> \
                </div> \
            </a> \
        <div class="reference_box"> \
            <div class="featured_price_container"> \
                <div class="featured_price">£24.99</div> \
            </div> \
            <div class="featured_buy_button"><a href="/products/THE-AMAZING-ROLLER-COASTER-KIT.aspx" target="_parent"> \
                <img src="/images/homepage/buttons/more_info.gif" width="76" height="26" alt="more information" title="more information"> \
            </a></div> \
        </div> \
    </td>'
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Change width of main content to be full screen (we will have removed the page sidebar)
exp.css += '#main_middle_container { width: 926px; } ';

// Float main product image to the right, so thumbnails display appropriately
exp.css += exp.vars.product_main_image.selector + ' { float: right; width: 350px; } ';
exp.css += exp.vars.product_main_image.selector + ' a { width: 350px; } ';
exp.css += exp.vars.product_main_image.selector + ' a img { width: 350px; } ';

// Remove border around the page content
exp.css += "#main_middle_container, .main_internal_full_box { border: 0; } ";

// Add some padding underneath product title
exp.css += 'h1.product_title { margin-bottom: 1em; } ';

// Remove border from main product deets
exp.css += '.main_product_details_border { border: 0; background-color: transparent; margin: 0; padding-top: 0; } ';

// Add a border to the cart-controls table
exp.css += '.AWA_cart_controls_table { border: solid 1px #8EBAD0; margin: 5px 0px 0px 0px; padding: 10px; background-color: #EAF3F7; margin-bottom: 1em; }';

// Styling tweaks to add-to-cart button
exp.css += '#ctl00_cphInnerMaster_imgbtnBuyNow { float: right; margin-bottom: 1em; } ';

// Money-back and free-delivery well styling
exp.css += '.AWA_well { \
    text-align: center; \
    border: 1px solid black; \
    border-radius: 10px; \
    padding: 1em; \
    margin-bottom: .5em; \
} \
.AWA_well .AWA_title { \
    font-weight: bold; \
    font-size: 1.1em; \
} \
.AWA_freedelivery_row .AWA_well { \
    margin-bottom: 1em; \
}';

// Reviews styling
exp.css += ' .AWA_reviews_row a { text-align: center; padding: 1em; font-size: 1.5em; } ';
exp.css += ' .AWA_reviews_row a .AWA_stars .AWA_star { \
    margin-bottom: 0.5em; \
    display: inline-block; \
    margin-right: 0.1em; \
    padding: 3px; \
    border-radius: 4px; \
    background: #007f4e; \
} ';
exp.css += ' .AWA_reviews_row a .AWA_stars .AWA_star img { height: 20px; } ';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Remove the page's sidebar and update the main-content width accordingly
    this.vars.sidebar.hide();

    // Change product images container to 50% width
    this.vars.product_images_cell.attr('width', '50%');
    this.vars.product_info_cell.attr('width', '49%');

    // Move image thumbnails to the left of the main product image
    this.vars.product_thumbnails.parents('table').attr('width', '100%');
    this.vars.product_thumbnails.each(function(i, elem){
        $(elem).insertAfter(exp.vars.product_main_image);
    });

    // Product main image: Remove 'width' CSS from style attribute, we want to control this with CSS
    this.vars.product_main_image.css('width', '');
    this.vars.product_main_image.find('> a').css('width', '');

    // Hide snippet of text, "Click the thumbnails to enlarge"
    this.vars.click_thumbnails_line.hide();

    // Move the product title to the top of the page
    $('#main_middle_container').prepend(this.vars.product_title);

    // Hide table row containing reference
    this.vars.reference_row.hide();

    // Move accessibility-icons after product details table
    this.vars.accessibility_symbols_table.insertAfter(
        this.vars.product_details_table
    );

    // Pull out cart control rows from product details table and add into a new table, before the existing table.
    this.vars.cart_controls_table.find('tbody').append(
        this.vars.product_details_table.find('tr').slice(0, 10)
    );
    this.vars.cart_controls_table.insertBefore(
        this.vars.product_details_table
    );

    // Change quantity row to be full width
    this.vars.quantity_row.find('td:first-of-type').attr({ width: '100%', colspan: 2 });

    // Change quantity input type to number
    this.vars.quantity_row.find('input.qty_field').prop({
        type: 'number',
        min: 1
    });

    // Move product stats to top of table
    this.vars.product_stats.insertBefore(
        this.vars.product_details_table.find('> tbody > tr:first-of-type')
    );

    // Move 'age' and 'skills' in product stats to top of page
    this.vars.product_stats.find('#ctl00_cphInnerMaster_trBoxsize').before(
        this.vars.product_stats.find('#ctl00_cphInnerMaster_teAgeRange'),
        this.vars.product_stats.find('#ctl00_cphInnerMaster_trSkills')
    );

    // Move "Add to cart" button below cart-controls table
    this.vars.add_to_card_button_cell.find('input').insertAfter(this.vars.cart_controls_table);
    this.vars.add_to_card_button_cell.hide();

    // Add money-back and free-deliv rows
    this.vars.click_thumbnails_line.after(
        this.vars.money_back_row,
        this.vars.free_delivery_row
    );

    // Check if we have a review for this product, if we do then add the reviews row
    var product_title_text = this.vars.product_title.text().trim();
    if (Object.keys(this.vars.review_data).indexOf(product_title_text) !== -1)
    {
        var review_html = this.vars.reviews_row_template
            .replace("__REVIEW_LINK__", this.vars.review_data[product_title_text].link)
            .replace("__REVIEW_BLURB__", this.vars.review_data[product_title_text].blurb)
            .replace("__REVIEW_STARS__", Array(1+this.vars.review_data[product_title_text].rating).join(this.vars.rating_star));

        this.vars.click_thumbnails_line.after($(review_html));
    }
    else {
        console.log("Notice:  No review found for product: " + product_title_text);
    }

    // Add product-exclusivity wording to the end of the description
    this.vars.product_description_cell.append($("<div></div>", { text: this.vars.exclusivity_line }));

    var extra_products_row = this.vars.related_items_table.find('tr');
    // Add extra recmmended products
    if (Object.keys(this.vars.related_products_extra).indexOf(product_title_text) !== -1)
    {
        $.each(this.vars.related_products_extra[product_title_text], function(i, elem){
            if (Object.keys(exp.vars.related_products_HTML).indexOf(elem) !== -1) {
                extra_products_row.append($(exp.vars.related_products_HTML[elem]));
            }
            else {
                console.log("Error adding recommended item.  HTML not found for " + elem);
            }
        });
    }
    else {
        console.log("Notice:  No extra recommended products found for " + product_title_text);
    }

    // Correct recommended product cells to be 25% width each.
    extra_products_row.find('td').each(function(i, elem){
        $(elem).prop('width', '25%');
    });


};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);