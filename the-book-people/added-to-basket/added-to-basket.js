/*

AWA SPEC
--------

qs_addedToBasket

This test will do two key things:

1. Indicate how close the user is to qualifying for free shipping (very straight forward: just subtract the order total from £25)

2. Display the users total savings. This one is more complex. I suggest:

Scrape RRP from product page when item is added to basket. Also scrape the quantity being added. Use this to keep a running total of what the basket should cost and subtract it from the actual basket value to get the total savings. This way we will capture any type of offer that is applied e.g:

 - General saving compared to RRP
 - Further discounts such as buy 2 get one free
 - Discount codes applied in the checkout

There are three scenarios where this becomes more complex:

 - The user returns with a saved basket, before we started recording savings
 - The user returns and logs in to a saved basket
 - The user returns (or shops past midnight) and discounts have changed

We could recognise when any of these have happened by keeping a record of what we expect the user's basket value to be and flagging up if it is not as expected. In that scenario we could scrape the basket page to see what they have in their basket. For items we expected them to have, we can assume the RRP hasn't changed and compare that with the price listed on the basket page to calculate their savings. For any products that we didn't know the user had, we could theoretically scrape their product pages for an RRP, but I suspect this would put too much load on the client's server (they're very sensitive to page speed issues).

Assuming we don't scrape the product pages, we'd be left knowing their savings for some or none of their basket items. In this scanrio we can keep track of what we do know and only display when savings reach £50 thresholds "You save: Over £50!", "You save: Over £100!" etc...

If the user completes their purchase we'd need to note that and delete our stored info. I've seen Optimizely mess with Google Analytics ecommerce data, so I'd rather not run the experiment on the purchase confirmation page. Could we instead note if basket suddenly becomes "0" and mark their existing data as probably to be wiped. Then when it next changes value, if it suddenly becomes the value we had stored, keep going with their existing data, but if it's anything else, wipe the old data and start from scratch.

FYI We're likely to use this same mechanism to display total savings in other tests too (e.g. on the basket icon at the top left of every page)

(Feel free to suggest a better mechanism for any of this - this is just my suggestion to make sure we don't miss anything)

The display of these two values is pretty straight forward. I'll email designs to show this.

VERSIONS

There are two different designs.

Within these designs there will be three versions: one where the figure they need to spend to reach free delivery is always shown, one where it is only shown if they are within £10 of the target and one where it is only shown when the user reaches free delivery

This makes 6 versions + the control.

*/


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
exp.log('AWA - Added to basket - 0.1');

/*\
|*|  :: cookies.js ::
|*|  A complete cookies reader/writer framework with full unicode support.
|*|  Revision #1 - September 4, 2014
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|  Syntaxes:
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
\*/

var docCookies = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

// END DOC-COOKIE //

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    variation: '1', // 1 or 2
    subVariation: 'a', // a, b or c
    cookies: {
        total: 'optimizelyCartTotal',
        rrpTotal: 'optimizelyRRPTotal',
//        discounts: 'optimizelyDiscounts',
        cartContents: 'optimizelyCartContents'
    },
    threshold: 25.00, // float
//    threshold: {
//        amount: 25.00,
//        reached: false
//    },
    page: (window.location.toString().indexOf('qs_addedToBasket') !== -1) ? 'added' : 'cart',
    siteTotal: '0.00', // str
    currentTotal: '0.00', // str
    currentRRPTotal: '0.00', // str
    currentDiscounts: '0.00', // str
    currentCartContents: '{}' //obj as str
};


// Styles
// String containing the CSS for the experiment
exp.css = ' \
.exp-added-basket-1 .exp-free-delivery-message { \
    clear: left; \
} \
.exp-added-basket-2 .exp-free-delivery-message { \
    width: 100%; \
    text-align: right; \
    padding-top: 4px; \
} \
.exp-added-basket-2 .exp-free-delivery-message i { \
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

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
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

// Rounds 'up' to 2 decimal places
exp.func.roundUp = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.ceil(number*factor) / factor).toFixed(2);
};

// Gets the discounts if any from the cart / checkout pages
exp.func.getDiscounts = function(){
    var discount = 0;
    $('#basketRight .hidden-phone dd.subTotal.discount').each(function(){
        var value = $(this).text().trim().replace('£','');
        if( !isNaN( parseFloat(value) ) ) {
            discount += parseFloat(value);
        }
    });
    return exp.func.roundUp( discount, 2 );
};


// Update the cookie and local vars
exp.func.updateValue = function( cookie, varr, value ) {
    docCookies.setItem( exp.vars.cookies[cookie], value, null, '/' );
    exp.vars[varr] = value;
    exp.log('Cookie updated to value: '+ value);
};

// Update cookies and vars and init DOM changes
exp.func.addItems = function() {
    // rrp vars
    var rrp = $('.hidden-phone .hidden-phone .rrp.muted').text().replace('RRP','').replace('£','').trim();
    var qty = ( !$('.lead.pull-left.hidden-phone').text().match(/[0-9+]/) ) ? 1 : $('.lead.pull-left.hidden-phone').text().match(/[0-9+]/)[0];
    var rrpCost = exp.func.roundUp( parseFloat( rrp ) * parseInt( qty ), 2 );
    var rrpSavings = exp.func.roundUp( parseFloat( exp.vars.currentTotal ) - parseFloat( rrpCost ), 2 );
    // free shpping vars
    var freeShippingDiff = parseFloat( exp.func.roundUp( exp.vars.threshold - parseFloat( exp.vars.currentTotal ), 2 ) );
    // cart contents vars
    var productId = $('.productTitles a').attr('href').match(/(productId=)(.+)(&store)/)[2];
    var contentsObj = JSON.parse(exp.vars.currentCartContents);
    var contentsStr;
    
    contentsObj[productId] = qty;
    contentsStr = JSON.stringify(contentsObj);

    // Update cart contents
    exp.func.updateValue('cartContents', 'currentCartContents', contentsStr);

    // Update rrp total
    exp.func.updateValue('rrpTotal', 'currentRRPTotal', rrpCost);

    // Update site total
    exp.func.updateValue('total', 'currentTotal', exp.vars.siteTotal);

    // Display savings message
    exp.func.savingsMessage( rrpSavings );

    // Display free shipping message
    exp.func.freeShippingMessage( freeShippingDiff );

};

exp.func.freeShippingMessage = function( amount ) {
    if( amount < 0 ) {
        amount = 0;
    } else if( amount < 1 ) {
        amount = amount.match(/([0-9]*)(.)([0-9]*)/)[3] + 'p';
    } else {
       amount = '£' + amount.toString().replace('.00', '');
    }
    if( amount === 0 ) {
        $('.lead.pull-left.hidden-phone').parent('div').append(
            '<p class="lead pull-left hidden-phone exp-free-delivery-message"><i class="icon-ok"></i>&nbsp;You now qualify for FREE Delivery</p>'
        );
        exp.func.deliveryMessage();
    } else if(
        (exp.vars.subVariation === 'a') ||
        (exp.vars.subVariation === 'b' && amount <= 10.00)
    ) {
        alert('Spend just '+amount+' more to get FREE Delivery');
        $('.lead.pull-left.hidden-phone').parent('div').append(
            '<p class="lead pull-left hidden-phone exp-free-delivery-message"><i class="icon-exclamation-sign"></i>&nbsp;Spend just '+amount+' more to get FREE Delivery</p>'
        );
    }
};

exp.func.savingsMessage = function(amount) {
    $('.well h3 .JS_basketTotal.text-success').parent('h3').before(
        '<h3 class="exp-savings-note">You save: <span>-£'+amount.replace('-','')+'</span></h3>'
    );
};

exp.func.deliveryMessage = function() {
    $('.exp-savings-note').after(
        '<h3 class="exp-delivery-note">Delivery: <span>FREE</span></h3>'
    );
};


// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    /*
        Cookies, initialisation and validation
    */

    // Get basket total as shown on the site
    this.vars.siteTotal = $('.mini-basket-value .JS_basketTotal').text().trim().replace('£','');

    // Get the current value of the cookies
    this.vars.currentTotal = docCookies.getItem( this.vars.cookies.total );
    this.vars.currentRRPTotal = docCookies.getItem( this.vars.cookies.rrpTotal );
//    this.vars.currentDiscounts = docCookies.getItem( this.vars.cookies.discounts );
    this.vars.currentCartContents = docCookies.getItem( this.vars.cookies.cartContents );

    // If our cookie values are null, initialise them
    if(
        this.vars.currentTotal === null &&
        this.vars.currentRRPTotal === null &&
//        this.vars.currentDiscounts === null &&
        this.vars.currentCartContents === null
    ) {
        docCookies.setItem( this.vars.cookies.total, '0.00', null, '/' );
        docCookies.setItem( this.vars.cookies.rrpTotal, '0.00', null, '/' );
//        docCookies.setItem( this.vars.cookies.discounts, '0.00', null, '/' );
        docCookies.setItem( this.vars.cookies.cartContents, '{}', null, '/' );
        this.vars.currentTotal = '0.00';
        this.vars.currentRRPTotal = '0.00';
//        this.vars.currentDiscounts = '0.00';
        this.vars.currentCartContents = '{}';
    }

    // If either total or rrp total is not a number there has been a problem, so abort the experiment
    if( typeof parseFloat(this.vars.currentTotal) !== 'number' || typeof parseFloat(this.vars.currentRRPTotal) !== 'number' ) {
        exp.log( 'AWA added to basket experiment encountered a problem. Cookie value invalid.');
        return false;
    }

    // If our total and the site total do not match, abort the experiment, unless we are on the cart page, in which case we need to calculate the new total first
    if( (this.vars.currentTotal !== this.vars.siteTotal) && this.vars.page !== 'added') {
        exp.log( 'AWA added to basket experiment encountered a problem. Cart total mismatch.');
        return false;
    }

    // If we have a total but no cart contents there has been a problem, so abort the experiment
    if( parseFloat( this.vars.currentTotal ) > 0 && this.vars.currentCartContents === '{}' ) {
        //exp.log( 'AWA added to basket experiment encountered a problem. Total does not match contents.');
        //return false;
    }

    /*
        General
    */

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Add Class to body depending on variation

    $('body').addClass( 'exp-added-basket-' + this.vars.variation ); 

    /*
        Cart pages
    */

    if( this.vars.page === 'cart') {

        // Get the value of any discounts (vouchers) that have been applied
        this.vars.currentDiscounts = this.func.getDiscounts();

        // Bind event listeners to listen for removing items or updating quantity

    }

    /*
        Added to basket page
    */

    if( this.vars.page === 'added') {

        // Calculate what we have just added and update our cookies and local vars
        exp.func.addItems();

        // Validate the cookie against actual site total

    }

};

exp.init();

/*
!!!!
// We can't do any of our checks until we have a basket value we can check against
// so we wait for this element to load before running the experiment
exp.func.waitForElement('.mini-basket-value .JS_basketTotal', exp.init );
*/

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);