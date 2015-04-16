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
exp.log('T&M Basket page - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.basket-portlet');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    text: {
        savings_box_title: 'Your savings:',
        special_offers_title: 'You have qualified for special offers - see below',
        you_pay: 'You pay only',
        total_savings_label: 'Total Savings:',
        plant_friendly_label: 'Plant-friendly P&P',
        whats_this_label: 'what\'s this?'
    },
    html: {
        super_important_urgency_message: '<p id="awa-super-important-urgency-message"><img src="//cdn.optimizely.com/img/174847139/a306d4dd37fa41fa9a015af30c859aa2.png" alt=""/> <strong>All items in stock:</strong> The items below have been reserved for you and will be held for 4 hours. Check out now to avoid disappointment.</p>',
        special_offers_subtitle: '<a href="">If you have an ORDER CODE, click here to see more offers <img src="//cdn.optimizely.com/img/174847139/22958340217743f187234b2ea6f2130e.png" alt=""/></a>',

        // TODO: Need modal table
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
        <p>Your plants are guaranteed to arrive in perfect condition, thanks to specially designed containers which prevent dehydration and protect from knocks and bruises.</p> \
 \
        <p>DELIVERY (p&p) is FREE on orders of £60 or more to most UK mainland destinations.</p> \
 \
        <p>There is a nominal charge for p&p on orders under £60  - see below. </p> \
 \
        <p>Plants are only despatched when they are ready for planting, so could arrive on different days. However, you will only be charged once for delivery. </p> \
 \
        <h3>UK MAINLAND DELIVERY CHARGES</h3> \
        <p>(except postcodes below)</p> \
 \
        <p>TODO: Insert Table here</p> \
 \
        </div> \
 \
        </div> \
        <div class="popUpTop"><img src="http://media.thompson-morgan.com/static-images/tandm/addBasketSuccessDIV_bottom.png" alt=""></div> \
 \
        </div>'
    }
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
    font-size: 10px; \
    display: block; \
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

    // 1. Highlight savings with the box top left. I will get a list of all
    // promotions planned so that we can cater for every scenario. This data
    // should however already be present on the basket page; we're just
    // highlighting it.
    var $savings_box = $('<div id="awa-savings-box"></div>'),
        $savings_box_title = $('<h3 id="awa-savings-box-heading"></h3>').text(
            exp.vars.text.savings_box_title
        ),
        $savings_box_contents = $('<ul id="awa-savings-box-contents"></ul>');

    // Add any existing savings to savings list
    $('.basket-items > h3').each(function(){
        var $this = $(this);

        // Hide h3, we don't like it!
        $this.hide();

        // Add to savings list
        $savings_box_contents.append(
            $('<li></li>').text($this.text())
        );
    });

    // Construct savings list (loop through basket items looking for ".promo" contents)
    $('#removeTable tr').each(function(){
        var $this = $(this),
            promo_text = $this.find('.promo').text().trim(),
            product_title = $this.find('.details .price').text().trim(),
            savings_text = '';

        // Trim product title down, only keep contents prior to the newline char
        product_title = $.trim(product_title.substring(0, product_title.indexOf('\n')));

        if (promo_text.indexOf('SAVE') === 0 && promo_text.match(/£[0-9]+?.[0-9]{2}/)) {
            savings_text = product_title + ' - you have saved ' + promo_text.match(/£[0-9]+?.[0-9]{2}/);
        }

        // Add to savings list
        if (savings_text) {
            $savings_box_contents.append(
                $('<li></li>').text(savings_text)
            );
        }
    });


    // TODO: Any more promo detection? Get details from Johann


    $savings_box.append($savings_box_title, $savings_box_contents);
    $('.heading-basket').append($savings_box);

    // 2. Line added for urgency: "All items in stock: The items below have been
    // reserved for you and will be held for 4 hours. Check out now to avoid
    // disappointment." We'll test a version with different wording here - point 10.
    var $super_important_urgency_message = $(exp.vars.html.super_important_urgency_message);
    $savings_box.after($super_important_urgency_message);

    // 3. Heading changes to "You have qualified for special offers - see below".
    // Next to this appears in smaller font: "If you have an ORDER CODE, click
    // here to see more offers" where the triangle behaves exactly like the
    // "use order code" functionality on this page.
    var $offers_title = $('.basket-items h2.pageTitleContent'),
        $offers_subtitle = $(exp.vars.html.special_offers_subtitle);
    $offers_title.text(exp.vars.text.special_offers_title);

    $offers_subtitle.click(function() {
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
        // TODO: Inform Johann we can't get the item name here
        $this.find('.promotionMessage').text(
            'SPECIAL OFFER: ' + $this.find('.promotionMessage').text().trim()
        );

        // Note price difference below "Worth X" and ATB button
        var offer_info = $this.find('.details > p:first').text().match(/for (?:just |)((?:£[0-9]+?.[0-9]{2}|[0-9]{1,2}p))/i);

        if (offer_info) {
            var price = offer_info[1],
                worth = $this.find('.promotionPriceSection').text().match(/(£[0-9]+?.[0-9]{2})/)[1],
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
            var savings =  worthVal - priceVal;

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
            original_price_match = $this.find('.price strike').text().match(/£([0-9]+?.[0-9]{2})/);

        if (!original_price_match) {
            return;
        }

        var original_price = parseFloat(original_price_match[1]),
            qty = parseInt($this.find('.quantity select').val(), 10),
            total = parseFloat($this.find('.total').text().match(/£([0-9]+?.[0-9]{2})/)[1]);

        total_savings += (original_price * qty) - total;
    });

    // Add to DOM
    var $savings_dt = $('<dt class="awa-red">'+ exp.vars.text.total_savings_label +'</dt>'),
        $savings_dd = $('<dd class="awa-red">£'+ total_savings.toFixed(2) +'</dd>'),
        $pnp_label = $('dt.delivery-option').next();

    $('dt.delivery-option').before($savings_dt, $savings_dd);

    // 6. P&P changes to "Plant-friendly P&P"
    $pnp_label.text(exp.vars.text.plant_friendly_label).css({
        'margin-left': '-120px',
        'width': '120px'
    });

    // 7. "what's this?" link opens a modal. See copy tab for copy.
    // We'll run a variation without this - point 10.
    var $whats_this_link = $('<a href="#" class="awa-pnp-whatsthis">' + exp.vars.text.whats_this_label + '</a>'),
        $whats_this_modal = $(exp.vars.html.whats_this_modal);

    $('body').append($whats_this_modal);
    $pnp_label.append($whats_this_link);

    $whats_this_link.click(function(e) {
        e.preventDefault();
        $whats_this_modal.fadeIn("fast");
    });

    $whats_this_modal.find('.close').click(function(){
        $whats_this_modal.fadeOut("fast");
    });

    // 8. The two "click here" links in the voucher code box should open in a
    // new tab.
    $('#codesAndVouchersHints').find('li a').attr('target', '_blank');

    // 9. Please ensure that all buttons are text links to overcome a CDN-issue
    // they have where buttons sometimes disappear.

    // 10. Clone a second variation where the "what's this" link (7) is removed
    // and the urgency line (2) copy reads: "Offers may end soon. Check out now
    // to avoid disappointment."

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);