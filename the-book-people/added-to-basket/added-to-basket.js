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
exp.log('AWA - Added to basket - 0.2');

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
    variation: '2', // 1 or 2
    subVariation: 'c', // a, b or c
    cookies: {
        total: 'optimizelyCartTotal',
        rrpTotal: 'optimizelyRRPTotal',
        discounts: 'optimizelyDiscounts',
        cartContents: 'optimizelyCartContents'
    },
    threshold: 25.00, // float
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
.exp-added-basket-1 .exp-free-delivery-message.not-reached-threshold i { \
    background-image: url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MSA2NC4xNDA5NDksIDIwMTAvMTIvMDctMTA6NTc6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUwY2YtMGQxZi00YWJlLWEyNGMtYzc0YmZkYzQ0YmM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBRjc4MjExODZCRjExRTQ5Q0FEQ0ZCMkYzRjMwRTg4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBRjc4MjEwODZCRjExRTQ5Q0FEQ0ZCMkYzRjMwRTg4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkwNTA3ZjEtMTYxYi00NWY5LWFlNTgtMzg1NDJlMzA1MjJlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OWQ4OGE0YTctYmFjZS0xMTc3LThkODctYmM1ZmQ1N2JiMmUwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAEAAMAwERAAIRAQMRAf/EAH8AAQEBAAAAAAAAAAAAAAAAAAcGCgEBAAMAAAAAAAAAAAAAAAAABAIDBxAAAAMFBgYDAAAAAAAAAAAAAQIFBBQVBgcREgMTFhcAISIjCBgyJAkRAAADBQUFCQAAAAAAAAAAAAEREgBBAgMTMXEEFAUhUYEiMmHB0UIjQxUGFv/aAAwDAQACEQMRAD8A0d/pnOdTKceL7fO9LJuWJLXUKepQK3LKA1izqYIqoKmkNWAQAKfsmbG5mvCBeYiFo8uMlxM0YQEYd3i2P/cp2J+OlT8OEYwwxAAkZjsGwnbGW3upPo9ej7TvF6pPseiB3rcXaiIxp9tti+pO1lXPn18ErzMko/e49LQp6v8AnV81PJ1E86uhVlnZe9pzz1lOpk/UBaZNpVIiFUdeWJqQjKUtruEl4zMVET8YVQ6kQFdXR2UMbAUWFnIBSnNiYgHEQKIEEQbPlKB5NbrsWoTsBl5MtQhGfTELhB1+5kfOqf6pZuj0De/YC7oFyYYRuztfZoC5GIK462+m8vblZ3c7L6uDZf0keVR8SuZea1b8/TohVy1IkRmSU2GZd7m//9k="); \
    width: 12px; \
    height: 16px; \
    display: inline-block; \
    position: relative; \
    top: 3px; \
} \
.exp-added-basket-2 .exp-free-delivery-message { \
    width: 100%; \
    text-align: right; \
    padding-top: 4px; \
} \
.exp-added-basket-2 .exp-free-delivery-message i { \
    display: none; \
} \
#page-added-to-basket .well h3 { \
    border-bottom: 0; \
    padding-bottom: 0; \
    position: relative; \
} \
#page-added-to-basket .well h3 span { \
    display: block; \
    width: 110px; \
    position: absolute; \
    right: 0; \
    top: 0; \
} \
.exp-savings-note, .exp-delivery-note { \
    font-size: 1.25em !important; \
} \
.exp-savings-note span, .exp-delivery-note span { \
    color: #E32B1E; \
} \
@media screen and (max-width: 1199px) { \
    .well h3 span { \
        width: 70px; \
    } \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a condition returns true
exp.func.waitForCondition = function(condition, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ( condition() ) {
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

// Rounds 'up' to specified decimal places
exp.func.roundUp = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.ceil(number*factor) / factor).toFixed(2);
};

// Rounds 'down' to specified decimal places
exp.func.roundDown = function(number, digits){
    var factor = Math.pow(10,digits);
    return (Math.floor(number*factor) / factor).toFixed(2);
};

// Gets the discounts if any from the cart / checkout pages
exp.func.getDiscounts = function(){
    var discount = 0;
    var selector = ( !$('#basketRight dd.subTotal.discount').length ) ? 'dd.subTotal.discount' : '#basketRight .hidden-phone dd.subTotal.discount';
    $( selector ).each(function(){
        var value = $(this).text().trim().replace('£','');
        if( !isNaN( parseFloat(value) ) ) {
            discount += parseFloat(value);
        }
    });
    exp.log( exp.func.roundUp( discount, 2 ) );
    return exp.func.roundUp( discount, 2 );
};

// Update the cookie and local vars
exp.func.updateValue = function( cookie, varr, value ) {
    docCookies.setItem( exp.vars.cookies[cookie], value, null, '/' );
    exp.vars[varr] = value;
    exp.log('Cookie ' + cookie + ' updated to value: '+ value);
};

// Update cookies and vars and init DOM changes
exp.func.addItems = function() {
    // rrp vars
    var rrp = $('.hidden-phone .hidden-phone .rrp.muted').text().replace('RRP','').replace('£','').trim();
    var qty = ( !$('.lead.pull-left.hidden-phone').text().match(/[0-9+]/) ) ? 1 : $('.lead.pull-left.hidden-phone').text().match(/[0-9+]/)[0];
    var rrpCost = exp.func.roundUp( parseFloat( rrp ) * parseInt( qty ), 2 );
    var rrpSavings;
    // promo vars
    var promoBox = $('.productBox .promoInfo.hidden-phone');
    var promoText;
    var promo = '';
    // free shpping vars
    var freeShippingDiff;
    // cart contents vars
    var productId = $('.productTitles a').attr('href').match(/(productId=)(.+)(&store)/)[2];
    var contentsObj = JSON.parse(exp.vars.currentCartContents);
    var contentsStr;

    if( promoBox.length ) {
        promoText = promoBox.text().trim().match(/([0-9])( for )([0-9])/);
        if( promoText === null ) {
            promoText = promoBox.text().trim().match(/([0-9])( books for only £)([0-9]+)/);
        }
        if( promoText !== null ) {
            promo = [
                promoText[1],
                promoText[3]
            ];
        }
    }
    
    if( contentsObj.hasOwnProperty( productId ) ) {
        contentsObj[productId] = [ (parseInt( contentsObj[productId][0] ) + parseInt( qty ) ), rrp, promo];
    } else {
        contentsObj[productId] = [qty, rrp, promo];
    }
    contentsStr = JSON.stringify(contentsObj);

    // Update cart contents
    exp.func.updateValue('cartContents', 'currentCartContents', contentsStr);

    // Update rrp total
    exp.vars.currentRRPTotal = parseFloat( exp.vars.currentRRPTotal ) + parseFloat( rrpCost );
    exp.func.updateValue('rrpTotal', 'currentRRPTotal', exp.func.roundUp( exp.vars.currentRRPTotal, 2 ) );

    // Update site total
    exp.func.updateValue('total', 'currentTotal', exp.vars.siteTotal);

    if( !exp.func.validateTotal() ) {
        return false;
    }

    // Display savings message
    rrpSavings = parseFloat( exp.vars.currentTotal ) - parseFloat( exp.vars.currentRRPTotal );
    exp.func.savingsMessage( rrpSavings );

    // Display free shipping message
    freeShippingDiff = parseFloat( exp.func.roundUp( exp.vars.threshold - parseFloat( exp.vars.currentTotal ), 2 ) );
    exp.func.freeShippingMessage( freeShippingDiff );

};

exp.func.freeShippingMessage = function( amount ) {
    if( amount < 0 ) {
        amount = 0;
    } else if( amount < 1 && amount > 0 ) {
        amount = amount.match(/([0-9]*)(.)([0-9]*)/)[3] + 'p';
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
        amount = '£' + amount.toFixed(2).replace('.00', '');
        $('.lead.pull-left.hidden-phone').parent('div').append(
            '<p class="lead pull-left hidden-phone exp-free-delivery-message not-reached-threshold"><i></i>&nbsp;Spend just '+amount+' more to get FREE Delivery</p>'
        );
    }
};

exp.func.savingsMessage = function(amount) {
    if( amount < 0 ) {
        $('.well h3 .JS_basketTotal.text-success').parent('h3').before(
            '<h3 class="exp-savings-note">You save: <span>-£'+exp.func.roundUp(amount, 2).replace('-','')+'</span></h3>'
        );
    }
};

exp.func.deliveryMessage = function() {
    $('.exp-savings-note').after(
        '<h3 class="exp-delivery-note">Delivery: <span>FREE</span></h3>'
    );
};

 // If we have a total but no cart contents there has been a problem, so abort the experiment
exp.func.validateTotal = function() {
    if( parseFloat( exp.vars.currentTotal ) > 0 && exp.vars.currentCartContents === '{}' ) {
        exp.log( 'AWA added to basket experiment encountered a problem. Total does not match contents.');
        docCookies.setItem( exp.vars.cookies.total, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.rrpTotal, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.discounts, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.cartContents, '{}', null, '/' );
        return false;
    } else {
        return true;
    }
};

exp.func.deleteProduct = function() {
    var _this = $(this);
    var productId = _this.parents('tr').find('.basket-row-title a').attr('href').match(/(productId=)(.+)(&store)/)[2];
    var contentsObj = JSON.parse(exp.vars.currentCartContents);
    var priceTotal = _this.parents('tr').find('.basket-row-total').clone();
        if( priceTotal.find('del').length ) {
            priceTotal.find('del').remove();
        }
        priceTotal = priceTotal.text().replace('£','').trim();
    var RRPTotal = contentsObj[productId][0] * contentsObj[productId][1];
    var contentsStr;

    // Update cart contents
    delete contentsObj[productId];
    contentsStr = JSON.stringify(contentsObj);
    exp.func.updateValue('cartContents', 'currentCartContents', contentsStr);

    // Update rrp total
    exp.vars.currentRRPTotal = parseFloat( exp.vars.currentRRPTotal ) - RRPTotal;
    exp.func.updateValue('rrpTotal', 'currentRRPTotal', exp.func.roundUp( exp.vars.currentRRPTotal, 2) );

    // Update site total
    exp.vars.siteTotal = parseFloat( exp.vars.siteTotal ) - priceTotal;
    exp.func.updateValue('total', 'currentTotal', exp.func.roundUp( exp.vars.siteTotal, 2) );
};

exp.func.changeQuantity = function() {
    var _this = $(this);
//    var _this = $('.basket-row-quantity');
    var productId = _this.parents('tr').find('.basket-row-title a').attr('href').match(/(productId=)(.+)(&store)/)[2];
    var qty = _this.val();
//    var qty = testNum;
    var price = _this.parents('tr').find('.basket-row-price').text().replace('£','').trim();
    var contentsObj = JSON.parse(exp.vars.currentCartContents);
exp.log( contentsObj );
    var contentsStr;
    var promoType;
    var oldRRPTotal = contentsObj[productId][0] * contentsObj[productId][1];
    var newRRPTotal = parseFloat(qty) * contentsObj[productId][1];
//    var oldTotal = contentsObj[productId][0] * parseFloat( price );
    var oldTotal = _this.parents('tr').find('.basket-row-total').clone();
        if( oldTotal.find('del').length ) {
            oldTotal.find('del').remove();
        }
        oldTotal = oldTotal.text().replace('£','').trim();
    var newTotal;
    if( contentsObj[productId][2] !== '' ) {
        // we have to take the promo offer into account#
        if( parseFloat( contentsObj[productId][2][1] ) > parseFloat( contentsObj[productId][2][0] ) ) {
            promoType = '5for15';
        } else {
            promoType = '3for2';
        }
        newTotal = exp.func.calculatePromoCost( parseFloat(qty), contentsObj[productId], parseFloat(price), promoType );
    } else {
        newTotal = parseFloat(qty) * parseFloat( price );
    }
//    exp.log( newTotal );

    // Update cart contents
    contentsObj[productId][0] = qty;
    contentsStr = JSON.stringify(contentsObj);
    exp.func.updateValue('cartContents', 'currentCartContents', contentsStr);

    // Update rrp total
    exp.vars.currentRRPTotal = ( parseFloat( exp.vars.currentRRPTotal ) - oldRRPTotal) + newRRPTotal;
    exp.func.updateValue('rrpTotal', 'currentRRPTotal', exp.func.roundUp( exp.vars.currentRRPTotal, 2) );

    // Update site total
//    exp.log(exp.vars.siteTotal + ' ' + oldTotal + ' ' + newTotal );
    exp.vars.siteTotal = ( parseFloat( exp.vars.siteTotal ) - oldTotal) + newTotal;
    exp.func.updateValue('total', 'currentTotal', exp.func.roundUp( exp.vars.siteTotal, 2) );
};

exp.func.calculatePromoCost = function(qty, prod, price, promoType) {
    var newTotal;
    var offersGained = parseInt( qty / prod[2][0] );
    var booksLeft = qty - ( offersGained * prod[2][0] );
    if( promoType === '3for2' ) {
        newTotal = ((offersGained * prod[2][1]) * price) + (booksLeft * price);
    } else if( promoType === '5for15' ) {
        newTotal = (offersGained * parseFloat( prod[2][1] ) ) + (booksLeft * price);
    }
    return parseFloat( newTotal.toFixed(2) );
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function( _this ) {

    /*
        Cookies, initialisation and validation
    */

    // Get basket total as shown on the site
    exp.vars.siteTotal = $('.mini-basket-value .JS_basketTotal').text().trim().replace('£','');

    // Get the current value of the cookies
    exp.vars.currentTotal = docCookies.getItem( exp.vars.cookies.total );
    exp.vars.currentRRPTotal = docCookies.getItem( exp.vars.cookies.rrpTotal );
    exp.vars.currentDiscounts = docCookies.getItem( exp.vars.cookies.discounts );
    exp.vars.currentCartContents = docCookies.getItem( exp.vars.cookies.cartContents );

    // If our cookie values are null, initialise them
    if(
        exp.vars.currentTotal === null &&
        exp.vars.currentRRPTotal === null &&
        exp.vars.currentDiscounts === null &&
        exp.vars.currentCartContents === null
    ) {
        docCookies.setItem( exp.vars.cookies.total, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.rrpTotal, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.discounts, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.cartContents, '{}', null, '/' );
        exp.vars.currentTotal = '0.00';
        exp.vars.currentRRPTotal = '0.00';
        exp.vars.currentDiscounts = '0.00';
        exp.vars.currentCartContents = '{}';
    }

    // If either total or rrp total is not a number there has been a problem, so abort the experiment
    if( typeof parseFloat(exp.vars.currentTotal) !== 'number' || typeof parseFloat(exp.vars.currentRRPTotal) !== 'number' ) {
        exp.log( 'AWA added to basket experiment encountered a problem. Cookie value invalid.');
        docCookies.setItem( exp.vars.cookies.total, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.rrpTotal, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.discounts, '0.00', null, '/' );
        docCookies.setItem( exp.vars.cookies.cartContents, '{}', null, '/' );
        return false;
    }

    // If our total and the site total do not match, abort the experiment, unless we are on the cart page, in which case we need to calculate the new total first
    if( (exp.vars.currentTotal !== exp.vars.siteTotal) && exp.vars.page !== 'added') {

        // There may be a mismatch because we have added a voucher code, so check for this first
        exp.vars.currentDiscounts = exp.func.getDiscounts();
        exp.func.updateValue('discounts', 'currentDiscounts', exp.vars.currentDiscounts );
        if(
            (exp.vars.currentDiscounts === '0.00') ||
            ( exp.func.roundDown( (parseFloat(exp.vars.currentDiscounts) + parseFloat(exp.vars.currentTotal)), 2) !== exp.vars.siteTotal )
        ) {
            exp.log( 'AWA added to basket experiment encountered a problem. Cart total mismatch.');
            docCookies.setItem( exp.vars.cookies.total, '0.00', null, '/' );
            docCookies.setItem( exp.vars.cookies.rrpTotal, '0.00', null, '/' );
            docCookies.setItem( exp.vars.cookies.discounts, '0.00', null, '/' );
            docCookies.setItem( exp.vars.cookies.cartContents, '{}', null, '/' );
            //return false;
        }
    }

    /*
        General
    */

    // append styles to head
    $('head').append('<style type="text/css">'+exp.css+'</style>');

    // Add class to body depending on variation
    $('body').addClass( 'exp-added-basket-' + exp.vars.variation );


    /*
        Cart pages
    */

    if( exp.vars.page === 'cart') {

        // Get the value of any discounts (vouchers) that have been applied
        exp.vars.currentDiscounts = exp.func.getDiscounts();
        exp.func.updateValue('discounts', 'currentDiscounts', exp.vars.currentDiscounts );

        // Bind event listeners to listen for removing items or updating quantity
        $('.basket-row-delete .hidden-phone.delete-line').parents('form').bind('click', exp.func.deleteProduct );
        $('.basket-row-delete .hidden-phone.delete-line').parents('form').bind('keyup', exp.func.deleteProduct );
        $('.basket-row-qty .basket-row-quantity').bind('change', exp.func.changeQuantity );

    }

    /*
        Added to basket page
    */

    if( exp.vars.page === 'added') {

        // Alter text of subtotal display
        $('.well h3 .JS_basketTotal.text-success').parent('h3').html(
            $('.well h3 .JS_basketTotal.text-success').parent('h3').html().replace('Sub-Total', 'Total')
        );

        // Calculate what we have just added and update our cookies and local vars
        exp.func.addItems();

    }

};

// wait for basket value before we can run test
exp.func.waitForCondition( function() {
    return $('.mini-basket-value .JS_basketTotal').text().trim().replace('£','') !== '';
}, exp.init );

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);