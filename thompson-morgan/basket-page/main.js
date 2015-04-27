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
exp.log('T&M Basket page - dev 0.4');

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
    variation: 1,
    text: {
        savings_box_title: 'Your savings:',
        special_offers_title: 'You qualify for the special offers below',
        you_pay: 'You pay only',
        total_savings_label: 'Total Savings:',
        plant_friendly_label: 'Plant-friendly P&P',
        whats_this_label: 'what\'s this?'
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