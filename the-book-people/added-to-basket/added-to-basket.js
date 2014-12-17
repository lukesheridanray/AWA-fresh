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
    cookies: {
        total: 'optimizelyCartTotal',
        fromThreshold: 'optimizelyAmountTillThreshold',
        cartContents: 'optimizelyCartContents'
    },
    threshold: {
        amount: 25.00,
        reached: false
    },
    page: (window.location.toString().indexOf('qs_addedToBasket') !== -1) ? 'added' : 'cart',
    siteTotal: '0.00',
    currentTotal: '0.00',
    currentCartContents: '{}',
    currentDiscounts: 0
};

// Styles
// String containing the CSS for the experiment
exp.css = ' ';

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

exp.func.roundUp = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.ceil(number*factor) / factor).toFixed(2);
};

exp.func.getDiscounts = function(){
    var discount = 0;
    $('#basketRight .hidden-phone dd.subTotal.discount').each(function(){
        var value = $(this).text().trim().replace('£','');
        if( !isNaN( parseFloat(value) ) ) {
            discount += parseFloat(value);
        }
    });
    return exp.func.roundUp( discount );
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    /*
        Cookies, initialisation and validation
    */

    // Get basket total as shown on the site
    this.vars.siteTotal = $('.mini-basket-value .JS_basketTotal').text().trim().replace('£','');

    exp.log(this.vars.siteTotal);

    // Get the current value of the cookies
    this.vars.currentTotal = docCookies.getItem( this.vars.cookies.total );
    this.vars.currentCartContents = docCookies.getItem( this.vars.cookies.cartContents );

    // If our cookie values are null, initialise them
    if(
        this.vars.currentTotal === null &&
        this.vars.currentCartContents === null
    ) {
        docCookies.setItem( this.vars.cookies.total, '0.00', null, '/' );
        docCookies.setItem( this.vars.cookies.cartContents, '{}', null, '/' );
    }

    // If either total or fromThreshold is not a number there has been a problem, so abort the experiment
    if( typeof parseFloat(this.vars.currentTotal) !== 'number' || typeof parseFloat(this.vars.currentFromThreshold) !== 'number' ) {
        exp.log( 'AWA added to basket experiment encountered a problem. Cookie value invalid.');
        return false;
    }

    // If our total and the site total do not match, abort the experiment
    if( this.vars.currentTotal !== this.vars.siteTotal ) {
        exp.log( 'AWA added to basket experiment encountered a problem. Cart total mismatch.');
        return false;
    }

    // If we have a total but no cart contents there has been a problem, so abort the experiment
    if( parseFloat( this.vars.currentTotal ) > 0 && this.vars.currentFromThreshold === '{}' ) {
        exp.log( 'AWA added to basket experiment encountered a problem. Total does not match contents.');
        return false;
    }

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

    }

    /*
        General
    */

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

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