function () {
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var tm_basketpage = (function($) {

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
exp.log('Basket Page v2 - var1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.basket-portlet .basket-items');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Basket Page failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    variation: 2,
    text: {
        savings_box_title: 'Your savings:',
        special_offers_title: 'You qualify for the special offers below',
        you_pay: 'You pay only',
        total_savings_label: 'Product Savings:',
        plant_friendly_label: 'Plant-friendly P&P',
        whats_this_label: 'details',
        discount_label: 'Voucher Discounts'
    },
    html: {
        special_offers_subtitle: '<a href="">Have an ORDER CODE?  Click here to see more offers <img src="//cdn.optimizely.com/img/174847139/22958340217743f187234b2ea6f2130e.png" alt=""/></a>',

        whats_this_modal: '<div class="awa-whats-this-modal"> \
        <div class="popUpTop"><img src="http://media.thompson-morgan.com/static-images/tandm/addBasketSuccessDIV_top.png" alt=""></div> \
        <div class="popUpMiddle"> \
 \
        <a class="close">X Close</a> \
 \
        <h2>Thompson & Morgan Delivery / P&P</h2> \
 \
        <div class="modalContent"> \
 \
        <p class="awa_plants_only">Your <strong>plants are guaranteed to arrive in perfect condition</strong>, thanks to <strong>specially designed containers</strong> which prevent dehydration and protect from knocks and bruises.</p> \
 \
        <table> \
        <thead> \
            <tr> \
                <th colspan="3"> \
                    <h3>UK MAINLAND DELIVERY CHARGES</h3> \
                    <p>(except postcodes below)</p> \
                </th> \
            </tr> \
            <tr> \
                <th>Product</th> \
                <th>Orders &pound;60 or more</th> \
                <th>Orders under &pound;60 (regardless of quantity)</th> \
            </tr> \
        </thead> \
        <tbody> \
            <tr> \
                <td>Seeds</td> \
                <td><strong>FREE</strong></td> \
                <td>&pound;1.95</td> \
            </tr> \
            <tr> \
                <td>All other products apart from seeds</td> \
                <td><strong>FREE</strong></td> \
                <td>&pound;4.95</td> \
            </tr> \
            <tr> \
                <td>Combined seeds and other products</td> \
                <td><strong>FREE</strong></td> \
                <td>&pound;6.90</td> \
            </tr> \
        </tbody> \
        <thead> \
            <tr> \
                <th colspan="3"> \
                    <h3>UK DELIVERY CHARGES to postcodes</h3> \
                    <p>BT, GY, HS, IM, JE, ZE, TR21, TR22, TR23, TR24, TR25, KW, IV, PA20-38, PA41-49, PA60-78, AB31-38, AB40-56, PH4-44, PH49-50</p> \
                </th> \
            </tr> \
            <tr> \
                <th>Product</th> \
                <th>Orders &pound;60 or more</th> \
                <th>Orders under &pound;60</th> \
            </tr> \
        </thead> \
        <tbody> \
            <tr> \
                <td>Seeds</td> \
                <td><strong>FREE</strong></td> \
                <td>&pound;1.95</td> \
            </tr> \
            <tr> \
                <td>Potatoes, fruit, bulbs, fertiliser and selected plants, vegetables and garden supplies</td> \
                <td>&pound;9.99</td> \
                <td>&pound;9.99</td> \
            </tr> \
        </tbody> \
        </table> \
 \
        </div> \
 \
        </div> \
        <div class="popUpTop"><img src="http://media.thompson-morgan.com/static-images/tandm/addBasketSuccessDIV_bottom.png" alt=""></div> \
 \
        </div>'
    },
    padlock: "<img id='AWA-padlock' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/4c9ee38c14844fb8aa3f178032173978_27_32.jpeg'>",
    stockText:  "<div id='AWA-stock-text'>\
                    <img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/952aa6f4faf94ac5342bb24128fd8c19_276_211.png'>\
                    <span><strong>All items in stock:</strong> Your items have been reserved and will be held for 4 hours.</span>\
                </div>",
    secureCheckout: "<img id='AWA-white-padlock' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/ede2e098e36e0f21ca93d70512e0b885_27_32.png'><p id='AWA-checkout'>Secure Checkout</p>",
    popup:  "<div id='AWA-popup'>\
                <div id='AWA-new-image'>\
                    <img src='https://upload.wikimedia.org/wikipedia/en/b/b8/Faun_eden_230_230.jpg'>\
                </div>\
                <div id='AWA-right'>\
                    <h1 id='AWA-title'></h1>\
                    <h1 id='AWA-latin'></h1>\
                    <h3 id='AWA-category'></h3>\
                    <ul id='AWA-features'>\
                    </ul>\
                    <p id='AWA-description'>\
                    </p>\
                    <div id='AWA-link'><a href=''>view full product details</a><div>\
                </div>\
            </div>"
};

// Styles
// String containing the CSS for the experiment
exp.css = '#awa-savings-box { \
    padding: 0.5em; \
    border: 1px solid #2b4e0d; \
    background-color: #eef5ea; \
    width: 60%; \
    margin: 1em 0; \
} \
#awa-savings-box-contents { \
    list-style-image: url(\'//cdn.optimizely.com/img/174847139/db2fde95ef21436283a9ebcd3d991418.png\'); \
    list-style-position: inside; \
} \
#awa-super-important-urgency-message { \
    font-size: 1.25em; \
} \
.basket-items h2.pageTitleContent { \
    font-size: 1.8em; \
} \
.basket-items h2.pageTitleContent a { \
    padding-left: 1em; \
} \
.basket-items h2.pageTitleContent a img { \
    vertical-align: middle; \
} \
.awa-augmented-promoted-price-section { \
    text-align: center; \
} \
.awa-green { \
    color: #3f9e0f !important; \
    text-align: center; \
} \
.awa-red { \
    color: #cf2a27 !important; \
} \
.awa-whats-this-modal { \
    display: none; \
    left: 0; \
    margin-left: 30%; \
    position: fixed; \
    top: 5%; \
    width: 500px; \
    z-index: 100; \
} \
.awa-whats-this-modal .popUpMiddle { \
    padding: 0px 22px; \
    background: url("/static-images/tandm/addBasketSuccessDIV_middle.png") repeat-y scroll center center transparent; \
} \
.awa-whats-this-modal .modalContent { \
    margin-top: 15px; \
    text-align: left; \
} \
.awa-whats-this-modal a.close { \
    display: block; \
    text-align: right; \
    font-size: 11px; \
    color: #00572d !important; \
    text-decoration: underline; \
    cursor: pointer; \
} \
.awa-pnp-whatsthis { \
    color: #626161 !important; \
    font-size: 11px; \
    display: block; \
    text-decoration: underline; \
} \
.modalContent table th, .modalContent table { \
    margin-top: 1em; \
} \
.modalContent table th, .modalContent table thead th { \
    font-weight: bold; \
} \
.modalContent table th, .modalContent table td { \
    padding: 0.5em; \
    border: 1px solid black; \
    width: 33%; \
    text-align: center; \
} \
.modalContent table th, .modalContent table tr td:first-of-type { \
    text-align: left; \
} \
.modalContent table th, .modalContent table tbody { \
    margin-bottom: 1em; \
}\
#AWA-padlock {\
    float: left;\
    width: 18px;\
    margin-right: 10px;\
}\
#AWA-stock-text {\
    margin-top: 15px;\
    margin-bottom: 15px;\
}\
#AWA-stock-text img {\
    width: 22px;\
}\
#AWA-stock-text span {\
    font-size: 15px;\
}\
.checkoutButton {\
    height: 56px;\
    width: 244px;\
}\
#AWA-white-padlock {\
    float: left;\
    margin-left: 31px;\
    margin-right: 17px;\
    margin-top: 15px;\
    width: 19px;\
}\
#AWA-checkout {\
    color: white !important;\
    float: left;\
    margin-top: 9px;\
}\
#AWA-popup {\
    display: none;\
    border: solid 1px black;\
    position: fixed;\
    width: 600px;\
    top: 25%;\
    left: 0;\
    right: 0;\
    margin-left: auto;\
    margin-right: auto;\
    padding: 10px;\
    z-index: 200;\
    background-color: white;\
    padding: 15px;\
}\
#AWA-new-image {\
    float: left;\
    width: 250px;\
}\
#AWA-right {\
    float: right;\
    width: 340px;\
}\
#AWA-title {\
    font-size: 18px;\
}\
#AWA-latin {\
    font-size: 18px;\
    font-style: italic;\
}\
#AWA-title, #AWA-latin {\
    line-height: 23px;\
}\
#AWA-category {\
    color: black;\
}\
#AWA-features {\
    color: #00572D;\
    list-style: square outside none;\
    margin: 10px 0 10px 13px;\
    font-weight: bold;\
}\
#AWA-link {\
    text-align: center;\
    margin-top: 10px;\
}\
#AWA-link a {\
    color: black !important;\
    text-decoration: underline;\
}\
#AWA-link a:hover {\
    text-decoration: none;\
}';

// CSS for button style overrides
exp.css += '\
.addToBasket, \
.continueButton,\
.checkoutButton, \
.useOrderCode, \
#showOrderCode, \
#showVoucherCode { \
    text-indent: 0; \
    color: #fff !important; \
    text-align: center; \
    line-height: inherit; \
} \
\
.addToBasket, \
.continueButton, \
.checkoutButton, \
.useOrderCode { \
    background: #B60718; \
} \
.addToBasket:hover, \
.continueButton:hover, \
.checkoutButton:hover, \
.useOrderCode:hover { \
    background: #00562C; \
} \
\
#showOrderCode, \
#showVoucherCode { \
    background: #00562C; \
} \
#showOrderCode:hover, \
#showVoucherCode:hover { \
    background: #B60718; \
} \
\
.checkoutButton { \
    line-height: 38px; \
    font-size: 1.5em; \
} \
\
.useOrderCode { \
    text-align: left; \
    line-height: 14px; \
    height: auto; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Determine if the basket contains plants or not by iterating through each row
// and checking
exp.func.shouldUseplantFriendlyWording = function() {
    var plant_friendly_wording = false;

    $('.basket-items .details .price').each(function(){
        var $this = $(this);
        if ($this.text().toLowerCase().indexOf("plant") !== -1 ||
            $this.text().toLowerCase().indexOf("tree") !== -1 ||
            $this.text().toLowerCase().indexOf("bulb") !== -1 ||
            $this.text().toLowerCase().indexOf("tuber") !== -1) {
            plant_friendly_wording = true;
        }
    });

    return plant_friendly_wording;
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // 1. Highlight savings with the box top left. I will get a list of all
    // promotions planned so that we can cater for every scenario. This data
    // should however already be present on the basket page; we're just
    // highlighting it.
    var $savings_box = $('<div id="awa-savings-box"></div>'),
        $savings_box_title = $('<h3 id="awa-savings-box-heading"></h3>').text(
            exp.vars.text.savings_box_title
        ),
        $savings_box_contents = $('<ul id="awa-savings-box-contents"></ul>');

    // Hide any existing savings, otherwise we might get duplicate savings highlights
    // in the savings box.
    $('.basket-items > h3').hide();

    // Construct savings list (loop through basket items looking for ".promo" contents)
    $('#removeTable tr').each(function(){
        var $this = $(this),
            promo_text = $.trim($this.find('.promo').text()),
            product_title = $.trim($this.find('.details .price').text()),
            savings_text = '';

        // Trim product title down, only keep contents prior to the newline char
        if (product_title.indexOf('\n') !== -1) {
            product_title = $.trim(product_title.substring(0, product_title.indexOf('\n')));
        }

        if (promo_text.indexOf('SAVE') === 0 && promo_text.match(/(?:£[0-9]+?.[0-9]{2}|£[0-9]+?)/)) {
            savings_text = product_title + ' - you have saved ' + promo_text.match(/(?:£[0-9]+?.[0-9]{2}|£[0-9]+?)/);
        }
        else if ($this.find('.price strike').length) {
            // Price we're paying is different!
            var was_price = parseFloat($.trim($this.find('.price strike').text()).replace('£', '')),
                current_price = parseFloat($.trim($this.find('.price .basket-price').text()).replace('£', '')),
                saving = (was_price - current_price).toFixed(2);

            savings_text = product_title + ' - you have saved £' + saving;
        }

        // Add to savings list
        if (savings_text) {
            $savings_box_contents.append(
                $('<li></li>').text(savings_text)
            );
        }
    });

    if ($savings_box_contents.find('li').length > 0) {
        $savings_box.append($savings_box_title, $savings_box_contents);
        $('.heading-basket').append($savings_box);
    }

    // 2. Line added for urgency: "All items in stock: The items below have been
    // reserved for you and will be held for 4 hours. Check out now to avoid
    // disappointment." We'll test a version with different wording here - point 10.
    // ------
    // Requirement no longer necessary, email from Johann 2015-04-23 17:50:
    // "You can remove the "Offers may end soon" line at the top altogether."

    // 3. Heading changes to "You have qualified for special offers - see below".
    // Next to this appears in smaller font: "If you have an ORDER CODE, click
    // here to see more offers" where the triangle behaves exactly like the
    // "use order code" functionality on this page.
    var $offers_title = $('.basket-items h2.pageTitleContent'),
        $offers_subtitle = $(exp.vars.html.special_offers_subtitle);
    $offers_title.text(exp.vars.text.special_offers_title);

    $offers_subtitle.click(function(e) {
        e.preventDefault();
        $('.ordercode').fadeIn("fast");

    });

    $offers_title.append($offers_subtitle);

    // 4. Special offers titles change to "SPECIAL OFFER:" followed by the item
    // name. Below "Worth x" we are including the savings "You pay only ..." and
    // repeat the saving in green below the ATB button by displaying the
    // difference between original price and sale price.
    $('.basketPromotions tr').each(function(){
        var $this = $(this);

        // Prepend "SPECIAL OFFER" to promo name
        // Can't reliably pull out item name here, so let's just prefix with "Special offer:" instead
        $this.find('.promotionMessage').text(
            'SPECIAL OFFER: ' + $.trim($this.find('.promotionMessage').text())
        );

        // Note price difference below "Worth X" and ATB button
        var offer_info = $this.find('.details > p:first').text().match(/for (?:just |)((?:£[0-9]+?.[0-9]{2}|[0-9]{1,2}p))/i),
            worth_info = $this.find('.promotionPriceSection').text().match(/(£[0-9]+?.[0-9]{2})/);

        if (offer_info && offer_info.length >= 2 && worth_info && worth_info.length >= 2) {
            var price = offer_info[1],
                worth = worth_info[1],
                priceVal,
                worthVal = parseFloat(worth.replace('£', ''));

            // Price could be £00.00 or 00p. Need to convert into the relevant float
            if (price.indexOf('p') !== -1) {
                priceVal = 0.01 * parseInt(price.replace('p', ''), 10);
            }
            else {
                priceVal = parseFloat(price.replace('£', ''));
            }

            // Calc savings
            var savings =  (worthVal - priceVal).toFixed(2);

            // Add "You pay..." line under 'Worth' col
            $this.find('.promotionPriceSection')
                .addClass('awa-augmented-promoted-price-section')
                .append('<p class="colorBlack">'+ exp.vars.text.you_pay +' '+ price +'</p>');

            // Strike out the 'worth' val
            $this.find('.promotionPriceSection').html(
                $this.find('.promotionPriceSection').html().replace(/(£[0-9]+?.[0-9]{2})/, '<strike>$1</strike>')
            );

            // Add savings amount under 'Add to basket' button
            var $das_green_savings = $('<p>SAVE £'+ savings +'</p>');
            $das_green_savings.addClass('awa-green');
            $this.find('.promotionButton').last().append($das_green_savings);
        }

    });

    // 5. Savings again repeated below subtotal in red.
    var total_savings = 0.00;

    // Calculmagic total savings.  (orig_price * qty) - total
    $('#removeTable tr').each(function(){
        var $this = $(this),
            original_price_match = $this.find('.price strike').text().match(/£([0-9]+?.[0-9]{2})/),
            total_price_match = $this.find('.total').text().match(/£([0-9]+?.[0-9]{2})/);

        if (!original_price_match || original_price_match.length < 2 ||
            !total_price_match || total_price_match.length < 2) {
            return;
        }

        var original_price = parseFloat(original_price_match[1]),
            qty = parseInt($this.find('.quantity select').val(), 10),
            total = parseFloat(total_price_match[1]);

        total_savings += (original_price * qty) - total;
    });

    // Add to DOM
    var $savings_dt = $('<dt class="awa-red">'+ exp.vars.text.total_savings_label +'</dt>'),
        $savings_dd = $('<dd class="awa-red">£'+ total_savings.toFixed(2) +'</dd>'),
        $pnp_label = $('dt.delivery-option').next(),
        price_match = $pnp_label.next('dd').text().match(/£([0-9]+?.[0-9]{2})/),
        pnp_value = 0.0;

    if (price_match && price_match.length >= 2) {
        pnp_value = parseFloat(price_match[1]);
    }

    if (total_savings > 0.00) {
        $('dt.delivery-option').before($savings_dt, $savings_dd);

        // Reduce unecessary whitespace between total savings and p&p row
        $pnp_label.css({ 'margin-top': '-10px' });
        $pnp_label.next().css('margin-top', '-10px');
    }

    // 6. P&P changes to "Plant-friendly P&P"
    if (exp.vars.variation == 1 && exp.func.shouldUseplantFriendlyWording()){
        $pnp_label.text(exp.vars.text.plant_friendly_label);
    }
    // Give more width for the P&P label (no need for a tiny width, only causes beef with other augmentations we're doing)
    $pnp_label.css({
        'margin-left': '-120px',
        'width': '120px'
    });

    // 7. "what's this?" link opens a modal. See copy tab for copy.
    // We'll run a variation without this - point 10.
    if (exp.vars.variation == 1 && pnp_value !== 0.0) {
        var $whats_this_link = $('<a href="#" class="awa-pnp-whatsthis">' + exp.vars.text.whats_this_label + '</a>'),
            $whats_this_modal = $(exp.vars.html.whats_this_modal),
            $plant_paragraph = $whats_this_modal.find('.awa_plants_only');

        if (!exp.func.shouldUseplantFriendlyWording()) {
            $plant_paragraph.remove();
        }

        $('body').append($whats_this_modal);
        $pnp_label.append($whats_this_link);

        $whats_this_link.click(function(e) {
            e.preventDefault();
            $whats_this_modal.fadeIn("fast");
        });

        $whats_this_modal.find('.close').click(function(){
            $whats_this_modal.fadeOut("fast");
        });
    }

    // 8. The two "click here" links in the voucher code box should open in a
    // new tab.
    $('#codesAndVouchersHints').find('li a').attr('target', '_blank');

    // 9. Please ensure that all buttons are text links to overcome a CDN-issue
    // they have where buttons sometimes disappear (the styling is dropped).
    $('.addToBasket'     ).css('background-image', 'none');
    $('.continueButton'  ).css('background-image', 'none').text('Continue shopping');
    $('.checkoutButton'  ).css('background-image', 'none').text('Checkout');
    $('#showOrderCode'   ).css('background-image', 'none').text('Use order code');
    $('.useOrderCode'    ).css('background-image', 'none');
    $('#showVoucherCode' ).css('background-image', 'none').text('Use voucher');

    // Can't easily fix up the buttons on vouchers modal - due to them being
    // input[type=submit] and their "value" is being shown over any text we set.


    // 10. Clone a second variation where the "what's this" link (7) is removed
    // and the urgency line (2) copy reads: "Offers may end soon. Check out now
    // to avoid disappointment."

    // Done via exp.vars.variation and if statements :-)

    // If there's a delivery surcharge element when position it sensibly
    var $delivery_surcharge = $('.deliverySurcharge');
    if ($delivery_surcharge.length > 0) {
        $delivery_surcharge.css({
            'margin-right': '-100px',
            'width': '250px'
        });

        // Push PNP down a bit so we can fit this in.
        $pnp_label.css({ 'margin-top': '20px' });
        $pnp_label.next().css('margin-top', '20px');

        // If there are total savings then we need to reduce the space we're taking vertically
        if (total_savings > 0.00) {
            $delivery_surcharge.parent().css({
                'margin-top': '-10px'
            });
        }
    }



    // Clarify in the totals that the "Discount" field is referring to voucher discounts
    $('#basket-total').find('dl').each(function(){
        var $this = $(this),
        $label = $this.find('dt');

        if ($.trim($label.text()) == 'Discount') {
            $label.text(exp.vars.text.discount_label);
        }
    });


    /* --- END OF CG CODE --- */

    // Add padlock to "Your Basket" heading
    $("h2:contains('Your Basket')").closest(".heading-basket").prepend(exp.vars.padlock);

    // Add "All items in stock..."
    $(".basket-result").first().after(exp.vars.stockText);

    // Modify Checkout button
    var $checkoutButton = $(".basket-options .checkoutButton");
    $checkoutButton.html(exp.vars.secureCheckout);

    // Hide footer
    $("#footer ul:first").nextUntil("#callandcopy").andSelf().hide();



    // Attach modal
    $('<div id="__msg_overlay">').css({
        "width" : "100%"
        , "height" : "100%"
        , "background" : "#000"
        , "position" : "fixed"
        , "top" : "0"
        , "left" : "0"
        , "zIndex" : "150"
        , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
        , "filter" : "alpha(opacity=60)"
        , "MozOpacity" : 0.6
        , "KhtmlOpacity" : 0.6
        , "opacity" : 0.6
    }).appendTo(document.body);

    // Attach modal on top of overlay
    $('body').append(exp.vars.popup);
    $('#__msg_overlay').hide();

    // If user clicks off modal then close it
    $("#__msg_overlay").click(function() {
        if ($("#AWA-popup").is(":visible")) {
            $('#AWA-popup').hide();
            $('#__msg_overlay').hide();

            // Clear data
            $("#AWA-title").text("");
            $("#AWA-latin").text("");
            $("#AWA-features").find("li").remove();
            $("#AWA-description").text("");
        }
    });

    // Activate modal on product image click
    function openModal() {
        $(".basket-items table:first tr td img").closest("a").click(function(e) {
            e.preventDefault();

            // Get product code
            var productCode = $(this).attr("href");
            productCode = productCode.substr(productCode.lastIndexOf('/') + 1);
            

            if (basketProductData[productCode]) {
                exp.log("Product found!");
                console.log(basketProductData[productCode]);

                // Show modal
                $('#AWA-popup').show();
                $('#__msg_overlay').show();


                // Get product title
                if (basketProductData[productCode]["product_name_common"]) {
                    $("#AWA-title").html(basketProductData[productCode]["product_name_common"]);
                }

                // Get latin name
                if (basketProductData[productCode]["product_name_latin"]) {
                    $("#AWA-latin").text(basketProductData[productCode]["product_name_latin"]);
                } else {
                    $("#AWA-latin").text("");
                }

                // Get bullet
                if (basketProductData[productCode]["other_accolades"]) {
                    var bullets = basketProductData[productCode]["other_accolades"].split(",");
                    for (var i = 0; i < bullets.length; i++) {
                        $("#AWA-features").append("<li>" + bullets[i] + "</li>");
                    }
                    $("#AWA-features").find("li").show();
                }

                // Get description
                if (basketProductData[productCode]["completed_copy"]) {
                    var productDescription = basketProductData[productCode]["completed_copy"];

                    if (productDescription.indexOf("Useful links") != -1) {
                        productDescription = productDescription.substr(0, productDescription.indexOf("Useful links"));
                    }

                    if (productDescription.indexOf("Customer Rating") != -1) {
                        productDescription = productDescription.substr(productDescription.indexOf("Customer Rating") + 15);
                    }

                    if (productDescription.indexOf("New in 2015") != -1) {
                        productDescription = productDescription.substr(productDescription.indexOf("New in 2015") + 11);
                    }

                    $("#AWA-description").text($.trim(productDescription));
                }

                $("#AWA-link a").attr("href", $(this).attr("href"));
            } else {
                exp.log("Product not found - not opening modal");
            }

        });
    }


    /* --------------------------- Get Product Data --------------------------- */
    // WaitFor JSON hander
    function waitFor(condition, callback, timeout, keepAlive) {
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
    }

    // Grab productData JSON when it loads
    var conditionProduct = function() {
        basketProductData = bProductData || undefined;
        if (basketProductData != undefined) {
          return basketProductData;
        }
    };


    // Find each image and replace with larger one
    var productDataCallback = function() {
        openModal();
    };

    waitFor(conditionProduct, productDataCallback);





    function getImage() {
        $(".basket-items table:first tr td img").closest("a").click(function(e) {
            e.preventDefault();

            // Get product code
            var productCode = $(this).attr("href");
            productCode = productCode.substr(productCode.lastIndexOf('/') + 1);

            if (basketProductData[productCode]) {
                $("#AWA-new-image").html("<img src='http://www.tandmpics.com/pictures/tmuk/_230/" + basketImageData[productCode] + "'>");
            } else {
                exp.log("Product image not found");
                $("#AWA-new-image").html("<img src='http://www.tandmpics.com/e404/180.jpg' width='230'>");
            }

        });
    }
    
    
    /* --------------------------- Get Image Data --------------------------- */
    // Grab productData JSON when it loads
    var conditionImage = function() {
        basketImageData = bImageData || undefined;
        if (basketImageData != undefined) {
          return basketImageData;
        }
    };


    // Find each image and replace with larger one
    var imageDataCallback = function() {
        getImage();
    };

    waitFor(conditionImage, imageDataCallback);



};

// Run the experiment
$(document).ready(function(){
    exp.init();
});

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
}