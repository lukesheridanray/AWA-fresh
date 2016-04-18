//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

console.log('Free Delivery Threshold - 0.7');

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
exp.vars = {
    promoCode: 'BM9KG3',
    cookieName: 'optimizelyCartTotal',
    cookieVal: null,
    voucherApplied: (window.location.search.indexOf('msgID=5') !== -1) ? true : false,
    cookieVoucherName: 'optimizelyVoucherApplied',
    threshold: {
        amount: 45.00,
        reached: false
    },
    qualify: {
        amount: 60.00,
        reached: false,
        leftToGo: 0.00
    },
    placeholders: {
        mainBanner: {},
        cartMainBanner: {},
        cartSubBanner: {},
        addedBoxNotice: {}
    }
};

exp.vars.banner = {
    initial: '<div class="del-banner--initial"><strong>FREE UK DELIVERY</strong> when you spend £60 or more - use promo code <strong>'+exp.vars.promoCode+'</strong></div>',
    nudge: '<div class="del-banner--nudge">Spend just £<span></span> more to get <strong>FREE UK DELIVERY</strong></div>',
    qualified: '<div class="del-banner--qualified">GREAT! You Qualify for <strong>FREE UK DELIVERY</strong> - remember to enter promo code <strong>'+exp.vars.promoCode+'</strong> when you check out</div>',
    codeHint: 'FREE (enter code below)'
};

// Styles
exp.css = ' \
.del-banner-wrap--main { \
  text-align: center; \
  width: 920px; \
  padding: 10px; \
  margin: 5px 0 10px 20px; \
  background: #FED10F; \
  color: #064C96; \
  font-size: 1.3em; \
  position: relative; \
} \
.del-banner-wrap--nudged .del-banner-wrap--main { \
  text-align: left; \
} \
.del-banner-wrap--main .del-banner--nudge { \
  position: absolute; \
  top: 0; \
  right: 0; \
  text-align: right; \
  padding: 10px; \
  background: #E5007E; \
  color: #fff; \
  width: 356px; \
} \
.del-banner-wrap--main .del-banner--qualified { \
  color: #E5007E; \
} \
.del-banner-wrap--cart-main { \
  text-align: center; \
  width: 600px; \
  padding: 10px; \
  margin: 0; \
  line-height: 20px; \
  background: #FED10F; \
  color: #064C96; \
  font-size: 0.5em; \
  float: right; \
  font-weight: normal; \
} \
.del-banner-wrap--nudged .del-banner-wrap--cart-main { \
  background: #E5007E; \
  color: #fff; \
} \
.del-banner-wrap--cart-main .del-banner--qualified { \
  color: #E5007E; \
} \
.del-banner-wrap--qualified .del-banner-wrap--cart-main { \
  margin-top: -10px; \
} \
.del-banner-wrap--qualified .del-banner-wrap--cart-main .del-banner--qualified { \
  width: 360px; \
  margin: 0 auto; \
} \
#promotions_basket { \
  overflow: visible; \
  min-height: 90px; \
} \
.del-banner-wrap--cart-sub .del-banner--initial, \
.del-banner-wrap--cart-sub .del-banner--nudge { \
  text-align: left; \
  width: 470px; \
  padding: 10px; \
  margin: 0; \
  line-height: 20px; \
  color: #064C96; \
  float: left; \
  font-weight: normal; \
  position: relative; \
  top: -68px; \
  left: 0; \
  background: #FED10F; \
  position: relative; \
} \
.del-banner-wrap--cart-sub .del-banner--nudge { \
  background: #E5007E; \
  color: #fff; \
  clear: left; \
  top: -66px; \
} \
.del-banner-wrap--cart-sub .del-banner--qualified { \
  text-align: left; \
  width: 334px; \
  padding: 10px; \
  margin: 0; \
  line-height: 20px; \
  color: #E5007E; \
  position: relative; \
  top: -5px; \
  left: 585px; \
  position: relative; \
} \
.del-opts-delivery-message { \
  color: #064C96; \
  font-style: normal; \
  font-size: 0.8em; \
  position: relative; \
  left: -24px; \
  top: -4px; \
} \
.del-popup-free-note { \
  font-size: 0.9em; \
  font-style: italic; \
  color: #333; \
} \
.del-addbox-notice { \
  background: #fff; \
  text-align: center; \
} \
.del-addbox-notice div { \
  padding: 10px; \
} \
.del-addbox-notice .del-banner--initial { color: #064C96; background: #FED10F; } \
.del-addbox-notice .del-banner--nudge { color: #fff; background: #E5007E; } \
.del-addbox-notice .del-banner--qualified { color: #E5007E; background: #FED10F; } ';

// Functions
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

/*
exp.func.calcCartUpdate = function(_this) {
    var operation;
    var unitPrice = _this.parents('dd').find('.col.unit').text().replace('£','').trim();
    var totalPrice = _this.parents('dd').find('.col.price b').text().replace('£','').trim();
    var qty = _this.parents('dd').find('input.qty').val();
    var newTotal = parseInt(qty) * parseFloat(unitPrice);
    var diff = (totalPrice - newTotal).toFixed(2).replace('-','');
    if( newTotal < totalPrice ){
        operation = 'remove';
    } else if( newTotal > totalPrice ) {
        operation = 'add';
    }
    return {
        'diff': diff,
        'operation': operation
    };
};
*/

exp.func.addPlaceholders = function() {
    if( $('.custom-three-ways').length ) {
        $('.custom-three-ways').replaceWith( '<div class="del-banner-wrap--main" />' );
    }
    exp.vars.placeholders.mainBanner = $('.del-banner-wrap--main');

    if( $('#p_checkout #cart .pageheading').length ) {
        $('#p_checkout #cart .pageheading').append( '<div class="del-banner-wrap--cart-main" />' );
    }
    exp.vars.placeholders.cartMainBanner = $('.del-banner-wrap--cart-main');

    if( $('#cart #promotions_basket').length ) {
        $('#cart #promotions_basket').prepend( '<div class="del-banner-wrap--cart-sub" />' );
    }
    exp.vars.placeholders.cartSubBanner = $('.del-banner-wrap--cart-sub');

    if( $('#added_item_box').length ) {
        $('#added_item_box .subheading').after( '<div class="del-addbox-notice" />' );
    }
    exp.vars.placeholders.addedBoxNotice = $('.del-addbox-notice');
};

exp.func.updateCookie = function( newValue ) {
    docCookies.setItem( exp.vars.cookieName, newValue, null, '/' );
    exp.vars.cookieVal = newValue;
    exp.func.setState();
    exp.func.mutateDOM();
    console.log('Cookie updated to value: '+ newValue);
};

exp.func.calculateTotal = function( currentTotal, priceString, operation ) {
    var newTotal;
    var currentFloat = parseFloat(currentTotal);
    var priceFloat = parseFloat(priceString);
    if(operation === 'add') {
        newTotal = currentFloat + priceFloat;
    } else if(operation === 'remove') {
        newTotal = currentFloat - priceFloat;
    }
    if( newTotal < 0 ) {
        newTotal = 0;
    }
    return newTotal.toFixed(2);
};

exp.func.setState = function() {
    if( exp.vars.cookieVal >= exp.vars.threshold.amount ) {
        // Threshold reached, will display nudge
        exp.vars.threshold.reached = true;
    } else {
        exp.vars.threshold.reached = false;
    }
    if( exp.vars.cookieVal >= exp.vars.qualify.amount ) {
        // Qualified for free delivery
        exp.vars.qualify.reached = true;
        exp.vars.qualify.leftToGo = 0;
    } else {
        if ( exp.vars.voucherApplied ) {
            exp.vars.voucherApplied = false;
            docCookies.removeItem( exp.vars.cookieVoucherName, '/' );
            exp.func.addPlaceholders();
        }
        exp.vars.qualify.reached = false;
        // Calculate how much more to spend till we qualify
        exp.vars.qualify.leftToGo = (exp.vars.qualify.amount - exp.vars.cookieVal).toFixed(2);
    }
};

exp.func.mutateDOM = function() {
    if( $('#p_checkout #cart').length && exp.vars.voucherApplied ) {
        return false;
    }
    var bannerType = 'initial';
    var body = $('body');
    if( exp.vars.qualify.reached ) {
        bannerType = 'qualified';
    }
    // Add or remove nudged or qualified class on body
    if( exp.vars.qualify.reached ) {
        // qualified
        body
            .addClass('del-banner-wrap--qualified')
            .removeClass('del-banner-wrap--nudged');
    } else if( exp.vars.threshold.reached ) {
        // reached nudge threshold, not yet qualified
        body
            .removeClass('del-banner-wrap--qualified')
            .addClass('del-banner-wrap--nudged');
    } else {
        // neither reached nudge threshold or qualified
        body
            .removeClass('del-banner-wrap--qualified')
            .removeClass('del-banner-wrap--nudged');
    }
    // If available append banners to their relevant placeholders
    if( exp.vars.placeholders.mainBanner.length ) {
        exp.vars.placeholders.mainBanner.html(
            exp.vars.banner[ bannerType ] + (exp.vars.threshold.reached && !exp.vars.qualify.reached ? exp.vars.banner.nudge : '')
        );
    }
    if( exp.vars.placeholders.cartMainBanner.length ) {
        exp.vars.placeholders.cartMainBanner.html(
            (exp.vars.threshold.reached && !exp.vars.qualify.reached ? exp.vars.banner.nudge : exp.vars.banner[ bannerType ])
        );
    }
    if( exp.vars.placeholders.cartSubBanner.length ) {
        exp.vars.placeholders.cartSubBanner.html(
            exp.vars.banner[ bannerType ] + (exp.vars.threshold.reached && !exp.vars.qualify.reached ? exp.vars.banner.nudge : '')
        );
    }
    if( exp.vars.placeholders.addedBoxNotice.length ) {
        exp.vars.placeholders.addedBoxNotice.html(
            (exp.vars.threshold.reached && !exp.vars.qualify.reached ? exp.vars.banner.nudge : exp.vars.banner[ bannerType ])
        );
    }
    // If we are on the cart page and have qualified, add a hint next to the code box
    if ( exp.vars.qualify.reached && $('dd.totals.delivery .total').length ) {
        $('.textlist.basket .totals .blabel').css({ 'width': '220px' } );
        $('.textlist.basket .totals .total').css({ 'width': '132px' } );
        $('dd.totals.delivery .total').html( exp.vars.banner.codeHint );
    }
    // If we have a nudge, append the left to go amount
    if( $('.del-banner--nudge').length ) {
        $('.del-banner--nudge span').html( exp.vars.qualify.leftToGo );
    }
    // Add our custom val to cart widget
    $('#total').html( '<span>Total</span> £'+exp.vars.cookieVal );
};

// Init function
exp.init = function() {

    // Get the current value of the cookie
    this.vars.cookieVal = docCookies.getItem( this.vars.cookieName );

    // If our cookie has not yet been set, and user already has items in the
    // basket, then abort the experiment
    if(
        this.vars.cookieVal === null &&
        $('#total').text().replace('£','').replace('Total','').trim() !== '0.00'
    ) {
        console.log( 'Optimizely delivery threshold experiment encountered a problem. User has untracked items in the basket.');
        return false;
    }

    // If cookie value is null, initialise the cookie
    if( this.vars.cookieVal === null ) {
        docCookies.setItem( this.vars.cookieName, '0.00', null, '/' );
        this.vars.cookieVal = '0.00';
    }

    // If cookie value is not a number there has been a problem, so abort the experiment
    if( typeof parseFloat(this.vars.cookieVal) !== 'number' ) {
        console.log( 'Optimizely delivery threshold experiment encountered a problem. Cookie value invalid.');
        return false;
    }

    // If voucher cookie set the var to true
    // or if var is true set the voucher cookie

    if( docCookies.getItem( this.vars.cookieVoucherName ) === 'true' ) {
        exp.vars.voucherApplied = true;
    } else {
        if( exp.vars.voucherApplied ) {
            docCookies.setItem( this.vars.cookieVoucherName, 'true', null, '/' );
        }
    }

    // Append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Append banner placeholders and reference them as vars

    if( $('#p_checkout #cart').length && exp.vars.voucherApplied ) {

    } else {

        this.func.addPlaceholders();

    }

    // If we are in the cart then we have an opportunity to grab the cart total without needing to do any fancy stuff...
    if( $('#p_checkout #cart').length ) {

        (function() {
            var newValue = 0;
            // add up each total price column
            $('#cart dd .col.price b').each(function(){
                var _this = $(this);
                if( !_this.parents('dd.promotion').length ) {
                    newValue += parseFloat( _this.text().replace('£','').trim() );
                }
            });
            exp.func.updateCookie( newValue.toFixed(2) );
        })();

    // ...otherwise we need to check for an added item box and update the cookie if an item has been added
    } else {

        // As a fail safe, if total in cart widget is zero, set our cookie and our variable to zero
        if( $('#total').text().replace('£','').replace('Total','').trim() === '0.00' ) {
            exp.func.updateCookie( '0.00' ); 
        } else {

            // Initially set the current basket / threshold state
            this.func.setState();

            // Make DOM changes
            this.func.mutateDOM();
        }

        // Listen for an added to basket element
        exp.func.waitForElement('#added_item_box .fright.cost', function addProductVal() {
            var addedVal = $('#added_item_box .fright.cost').text().replace('£','').trim();
            exp.func.updateCookie(
                exp.func.calculateTotal( exp.vars.cookieVal, addedVal, 'add' )
            );
        });

    }

    // unhide basket total in header
    $('#total').css({'color': '#4E4E4E'});

    if(
        $('#p_choose_shipping').length &&
        exp.vars.cookieVal >= exp.vars.qualify.amount &&
        $('form .textlist dd:eq(0) .price').text().trim() !== 'FREE'
    ) {
        // user has qualified but not entered code
        $('label[for="opt_1"]').append('<em class="del-opts-delivery-message">You qualify for free standard delivery, return to your basket and enter the code '+exp.vars.promoCode+' to claim</em>');
    } else if(
        $('#p_choose_shipping').length &&
        $('form .textlist dd:eq(0) .price').text().trim() !== 'FREE'
    ) {
        // user has not qualified
        $('label[for="opt_1"]').append('<em class="del-opts-delivery-message">Spend £60 to get free delivery</em>');
    }

    if( $('#voucherFormBasket') ) {
        $('#voucherFormBasket label[for="voucher"]').text('Do you have a promo code?');
    }

    // Delivery terms stuff

    (function(){

        var deliveryTab = $('.desc_area').filter(function(){
            return $(this).find('h2:eq(0)').text().trim() === 'Mainland delivery';
        });

        if( deliveryTab.length ) {
            deliveryTab.find('h2:eq(0)').before(
                '<h2>Free delivery.</h2> \
                <p>Free delivery is provided on shopping baskets of £60 and over. It applies to web and \
                phone orders and is available on standard delivery only. To redeem, the free delivery \
                promotion code must be entered in the promotion box in the shopping basket or on the \
                phone. Cannot be used in conjunction with any other offer.</p>'
            );
        }

        var deliveryPopup = $('#restricted.popup').filter(function(){
            return $(this).find('.subheading span').text().trim() === 'These delivery methods are all available:';
        });

        if( deliveryPopup.length ) {
            deliveryPopup.find('.inner p:eq(0)').append(
                ' <span class="del-popup-free-note">(FREE when you spend £60 or more - use promo code '+exp.vars.promoCode+')</span>'
            );
        }

        if( window.location.toString().indexOf('/delivery-information/') !== -1 ) {
            $('.rtecontent h3:eq(0)').before(
                '<h3><span style="font-size: 1.17em; font-weight: normal;">Free delivery.</span></h3> \
                <p>Free delivery is provided on shopping baskets of £60 and over. It applies to web and \
                phone orders and is available on standard delivery only. To redeem, the free delivery \
                promotion code must be entered in the promotion box in the shopping basket or on the \
                phone. Cannot be used in conjunction with any other offer.</p>'
            );
        }
          
    })();



/*
    // Cart remove button
    $('#cart .button.remove').bind('click', function removeProductVal() {
        var _this = $(this);
        var removedVal = _this.parents('dd').find('.col.price b').text().replace('£','').trim();
        exp.func.updateCookie(
            exp.func.calculateTotal( exp.vars.cookieVal, removedVal, 'remove' )
        );
        return;
    });

    // Cart plus 1 button
    $('#cart .button.qtypos').bind('click', function plusOneProductVal() {
        var _this = $(this);
        var addedVal = _this.parents('dd').find('.col.unit').text().replace('£','').trim();
        exp.func.updateCookie(
            exp.func.calculateTotal( exp.vars.cookieVal, addedVal, 'add' )
        );
        return;
    });

    // Cart minus 1 button
    $('#cart .button.qtyneg').bind('click', function minusOneProductVal() {
        var _this = $(this);
        var removedVal = _this.parents('dd').find('.col.unit').text().replace('£','').trim();
        exp.func.updateCookie(
            exp.func.calculateTotal( exp.vars.cookieVal, removedVal, 'remove' )
        );
        return;
    });

    // Cart product update button
    $('#cart .button.update').bind('click', function updateProductVal() {
        var values = exp.func.calcCartUpdate( $(this) );
        exp.func.updateCookie(
            exp.func.calculateTotal( exp.vars.cookieVal, values.diff, values.operation )
        );
        return;
    });
*/

};

// Run the experiment
exp.init();

return exp;

})(optimizely.$);