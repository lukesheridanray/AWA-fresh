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
exp.log('Delivery page - 0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    footer_link: $('.footer_bottom_link').filter( function(){
                     return $(this).attr('href').indexOf('Delivery-Returns') !== -1;
                 }),
    footer_link_text: 'Delivery & Returns',
    delivery: ' \
<h1 align="center">Delivery and Returns</h1> \
<br /> \
<table class="awa-del-table"> \
    <tr><th colspan="2">DELIVERY CHARGES (UK MAINLAND)</th></tr> \
    <tr><td>STANDARD DELIVERY - Orders &pound;40 or more</td> \
        <td>FREE</td></tr> \
    <tr><td>STANDARD DELIVERY - Orders under &pound;40</td> \
        <td>&pound;3.95 per parcel</td></tr> \
    <tr><td>EXPRESS DELIVERY - All orders</td> \
        <td>&pound;5.95 per parcel</td></tr> \
</table> \
<br /> \
<p> \
    Personal orders usually arrive within 3-5 days, although please allow up to 10 days. <br /> \
    Schools orders usually arrive within 21 days.<br /> \
    Express orders are dispatched within 2 working days. \
</p> \
<p> \
    Orders are despatched by Royal Mail or a guaranteed courier service such as DHL/Yodel. \
</p> \
<br /><h3>Out of stock items</h3> \
<p> \
    If your item is not in stock, we will hold your order until it arrives. You will \
    always be emailed with the option to cancel your order if you would rather not wait. \
    Please note that you will not be charged for items until they are ready for dispatch. \
</p> \
<br /><h3>Returns</h3> \
<p> \
    You have 14 days to return any unused item for a full refund or exchange. \
    Please obtain proof of posting, as it is your responsibility to return the goods \
    to us in their original, undamaged condition, with cellophane intact and seals \
    unbroken. You are responsible for paying for return delivery, unless the goods are \
    faulty or not as described, in which case we will pay the return costs.  Please \
    state whether you would like an exchange or refund, and allow up to 14 days for us \
    to process it for you. \
</p> \
<p> \
    <strong>Please note:</strong> Safety for our children is of paramount importance. For their \
    protection we only sell products in tamper-proof packaging with unbroken seals. \
    We therefore regret that we cannot give a refund if your goods are returned with \
    damaged packaging or with the seals broken. All products have a detailed \
    description on the box, which should be sufficient information to decide if you \
    wish to keep the product. \
</p> ',
    faq: ' \
<h1 align="center">FAQ\'s</h1> \
<p> \
    <br /> \
    There are lots of questions which our customers ask regularly. To help you, here are some of them, with the answers! \
    <br /><br /> \
    <strong>Q: How will my order be delivered?</strong> \
    <br /><br /> \
    <strong>A:</strong> That depends on the weight of the package. \
    <br /><br /> \
    For lighter packages we normally use the Royal Mail, who will deliver \
    the package either with the rest of your daily post, or when the parcel \
    van comes around. With standard delivery Royal Mail packages, no signature \
    will be required. If you are not at home when the package arrives, the postman \
    should leave you a card with the details of how to collect the parcel from your \
    local delivery office. In our experience however, the card does not always get \
    left for you, especially at peak times. If you are concerned that a smaller order \
    has not arrived, please contact your local Royal Mail delivery office to see if \
    they are holding the parcel for you. \
    <br /><br /> \
    Larger packages will be delivered by a courier, normally DHL / Yodel. A signature \
    will be required for these packages. If you are not in to sign for the package, \
    you will be left a card with contact details so that you can arrange for an \
    alternative delivery time. \
    <br /><br /> \
    <strong>Q: How long will it take for Express Delivery items to arrive?</strong> \
    <br /><br /> \
    <strong>A:</strong> Express delivery packages are normally sent out the same day, \
    either by Royal Mail first class or a 24 hour courier service. If you need your \
    order by a particular date please let us know and we’ll do our best to make sure \
    it reaches you on time. \
    <br /><br /> \
    <strong>Q: When will I be charged for my goods?</strong> \
    <br /><br /> \
    <strong>A:</strong> We will not charge your Credit or Debit card until your goods \
    are ready for dispatch. If one or more items are placed on back order because they \
    are out of stock, these items will only be charged once they are ready to send to you. \
    <br /><br /> \
    <strong>Q: I have received my order but one or more items say \'To Follow\'. What does this mean?</strong> \
    <br /><br /> \
    <strong>A:</strong> Sometimes, especially at peak periods, there can be a delay in \
    stock reaching us from our supplier. We don’t want to delay your order if at all \
    possible, so we often send the items that are available at the time and send on the \
    other items afterwards. If the delay is significantly longer than expected, we will \
    contact you to let you know. \
    <br /><br /> \
    <strong>Q: My Postcode Map Jigsaw was not included with the rest of my package. When will it arrive?</strong> \
    <br /><br /> \
    <strong>A:</strong> Each Postcode Map Jigsaw is made to order and sent to you \
    separately. As these are bespoke, we have to take payment at the time your order \
    is placed. Your package will be sent directly from the makers, not with the rest of \
    your order. \
    <br /><br /> \
    <strong>Q: I need to contact Customer Services urgently outside of normal opening hours. What should I do?</strong> \
    <br /><br /> \
    <strong>A:</strong> Our  Customer Service telephone lines are open from 9am to \
    5.30pm (Monday to Thursday) and from 8am to 2.30pm (Friday). If you need to contact \
    us outside these times it\'s best to send an email to \
    <a href="mailto:info@happypuzzle.co.uk">info@happypuzzle.co.uk</a>. \
    <br /><br /> \
    Emails are monitored at all times apart from 2.30pm on Friday until 9am on Sunday. \
    <br /><br /> \
    <strong>Q: Why can I not place my order online?</strong> \
    <br /><br /> \
    <strong>A:</strong> Very occasionally, all websites experience technical problems. \
    In almost every case, a difficulty that you are having will be rectified \
    automatically with a few minutes. Our website is monitored around the clock, but \
    if you are having a problem, please call us on 020 8953 4484. \
    <br /><br /> \
    <strong>Q: Do you store my personal details securely?</strong> \
    <br /><br /> \
    <strong>A:</strong> Our website uses advanced security measures to protect your \
    personal details. Your credit card numbers are encrypted, and not held in clear \
    text on our website. \
</p>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#ctl00_cphInnerMaster_tdPageContent { \
    line-height: 1.5em; \
} \
.awa-del-table { \
    border-collapse: collapse; \
    width: 70%; \
    line-height: 1.3em; \
} \
.awa-del-table th,.awa-del-table td { \
    padding: 4px; \
    border-bottom: 2px solid #fff; \
} \
.awa-del-table th { \
    text-align: left; \
    font-weight: bold; \
    background: #ccc; \
} \
.awa-del-table td { \
    background: #eee; \
}';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    var this_page;

    if( window.location.pathname.indexOf('Delivery-Returns') !== -1 ) {
        this_page = 'delivery';
    } else if( window.location.pathname.indexOf('FAQ') !== -1 ) {
        this_page = 'faq';
    } else {
        exp.log('Experiment failed a condition, not on correct page.');
        return false;
    }

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // change wording of link in footer
    exp.vars.footer_link.text( exp.vars.footer_link_text );

    // set new copy depending on current page
    $('#ctl00_cphInnerMaster_tdPageContent').html( exp.vars[this_page] );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);