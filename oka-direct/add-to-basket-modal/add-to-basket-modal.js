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
exp.log('Add to basket modal - 0.1');


// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#basket-nav');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    global: {
        basketURL: $('#basket-nav .basket-icon').attr('href'),
        page: ( $('.btnaddtobasket,#product-info').length !== 0 ) ? 'product' : 'other'
    },
    desktop: {
        checkoutButton: '<button class="btn btn-primary pull-right upper awa-checkout-button-desktop" data-action="awaVisitCheckout">Checkout</button>',
        miniBasket: '<div class="awa-mini-basket"> \
                     <div class="awa-mini-basket__title">Your bag contains</div> \
                     <a href="#" class="awa-mini-basket__close">X</a> \
                    <div class="awa-mini-basket__inner"></div></div>'
    },
    mobile: {

    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#div-add-button .row { \
    color: #c00; text-align: right; \
} \
.awa-checkout-button-desktop { \
    padding: 3px 10px !important; \
    background-image: url("https://resources1.okadirect.com/assets/img/icons/arrow.png"); \
    background-position: right 2px; \
    background-repeat: no-repeat; \
    border-right: 5px solid #12a6a4; \
    width: 144px; \
    height: 24px; \
    position: absolute; \
    top: 27px; \
    right: 0; \
    z-index: 20; \
} \
.awa-checkout-button-desktop:hover, .awa-checkout-button-desktop:active { \
    border-right: 5px solid #15bcba; \
    background-position: right 2px !important; \
} \
#product-details .awa-checkout-button-desktop { \
    top: 26px; \
} \
.header #basket-nav { \
    z-index: 21; \
} \
.header { \
    height: 195px; \
} \
#header-div { \
    background-position: 0 182px; \
} \
#mobile-banner { \
    margin-top: -12px; \
} \
#cat-nav { \
  margin-top: 24px !important; \
} \
.header .navbar { \
    position: relative; \
    top: 5px; \
} \
.header #basket-nav { \
  top: 69px !important; \
} \
.basket-icon { \
    position: relative; \
    left: -7px; \
} \
.header #mini-basket { \
  margin-top: 4px; \
} \
.awa-mini-basket { \
  position: absolute; \
  top: 56px; \
  right: 0; \
  width: 208px; \
  border: 1px solid #ccc; \
  background: #fff; \
  text-align: left; \
  display: none; \
/*  -webkit-transition: border-color 0.3s ease-in; \
     -moz-transition: border-color 0.3s ease-in; \
          transition: border-color 0.3s ease-in; */ \
} \
/* .awa-mini-basket.awa-mini-basket__highlight { \
   border: #12a6a4; \
} */ \
#product-details .awa-mini-basket { \
    top: 55px; \
} \
.awa-mini-basket ul { \
    background: #fff; \
    display: block; \
    padding: 10px 5px 5px; \
    margin: 0; \
} \
.awa-mini-basket ul li { \
    margin-bottom: 10px; \
    padding-left: 0; \
    list-style-type: none; \
    display: inline-table; \
} \
.awa-mini-basket ul li.subtotal { \
    display: block; \
    background: #ccc; \
    padding: 5px 10px; \
    margin-bottom: 0; \
} \
.awa-mini-basket ul li.button { \
    margin-bottom: 0; \
    display: block; \
} \
.awa-mini-basket ul li.button .btn { \
    margin-top: 0 !important; \
} \
.awa-mini-basket a { \
    color: #666; \
} \
.awa-mini-basket img { \
    margin-right: 5px !important; \
} \
.awa-mini-basket__title { \
    font-size: 18px; \
    font-weight: 600; \
    margin: 5px; \
    border-bottom: 1px solid #ccc; \
    padding-bottom: 6px; \
} \
.awa-mini-basket__close { \
    font-size: 11px; \
    font-weight: 600; \
    position: absolute; \
    top: 2px; \
    right: 5px; \
} \
.awa-mini-basket__close { \
    text-decoration: none; \
} \
@media screen and (max-width: 979px) { \
  .header #basket-nav { \
    top: -45px !important; \
  } \
  .awa-checkout-button-desktop { \
    padding: 0 !important; \
    display: inline !important; \
    background-image: none !important; \
    background-color: transparent !important; \
    color: #666 !important; \
    border-top: #f00; \
    border-right: 0 !important; \
    width: auto !important; \
    height: auto !important; \
    top: -93px !important; \
  } \
  .awa-checkout-button-desktop:hover { \
      text-decoration: underline !important; \
  } \
  .awa-checkout-button-desktop:after { \
    content: " >"; \
    font-size: 0.9em; \
  } \
  .awa-mini-basket { \
    top: -65px !important; \
    z-index: 99; \
  } \
  .basket-icon { \
      left: 0; \
  } \
} \
@media screen and (max-width: 767px) { \
    .awa-checkout-button-desktop { \
      top: -16px !important; \
      font-size: 11px; \
      right: 8px; \
    } \
    .awa-checkout-button-desktop:after { \
        content:""; \
    } \
    .header { \
        height: 76px !important; \
    } \
    .header .icons .basket { \
        background: url("https://resources1.okadirect.com/assets/img/icons/basket.png") 0 0 no-repeat transparent !important; \
        width: 40px; \
    } \
} \
@media screen and (max-width: 345px) { \
    .awa-checkout-button-desktop { \
      top: 50px; \
      display: none ; \
    } \
} \
/**/';

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

exp.func.awaVisitCheckout = function(e) {
    e.preventDefault();
    var url;
    if( exp.vars.global.basketURL.indexOf('http') !== -1 ) {
        url = exp.vars.global.basketURL;
    } else {
        url = 'http://www.okadirect.com/en-GB/page/my-cart/';
    }
    window.location = url;
};

exp.func.quickViewAdd = function(ev) {
  ev.preventDefault();
  var e = $(this).prev("input").val();
  var t = "#" + $(this).attr("id");
  var n = $(this).attr("rel").replace("?vid=", "");
  if (n == "") {
    n = e;
  }
  var r = "#qty_" + e;
  if (t.indexOf("direct") != -1) {
    r = "#qty_direct_" + e;
  }
  var i = $(r).val();
  if (i.indexOf("m") != -1) {
    i = i.replace("m", "");
  }
  var s = "#qty_added_" + e;
  $.ajax({
    url: "/ajaxcallhandlers.aspx",
    data: {
      inp: "AddToBag",
      entryid: n,
      qty: i
    },
    success: function(n, r) {
      if (n.indexOf("basket-nav") != -1) {
        $("#mini-basket-control").html(n);
        $("#quick-buy-" + e).modal("hide");
        $("#quick-buy-" + e + "-False").modal("hide");
        exp.func.addToBasketModal(n);
        $(s).show();
      } else {
        $(t).parent().before('<div class="row">' + n + "</div>");
      }
    },
    error: function() {
      $(t).parent().before('<div class="row">Error adding item to basket!<br />Please try again later.</div>');
    }
  });
};

exp.func.productAdd = function(e) {
  e.preventDefault();
  var n = $('input.variant-id').val().toLowerCase();
  var i = $('.qty-txt_js').val();
  $.ajax({
    url: "/ajaxcallhandlers.aspx",
    data: {
      inp: "AddToBag",
      entryid: n,
      qty: i
    },
    success: function(n, r) {
        if (n.indexOf("basket-nav") != -1) {
            $("#mini-basket-control").html(n);
            exp.func.addToBasketModal(n);
        } else {
            $('#div-add-button .btn').parent().before('<div class="row">' + n + "</div>");
        }
    },
    error: function() {
      $('#div-add-button .btn').parent().before('<div class="row">Error adding item to basket!<br />Please try again later.</div>');
    }
  });
};

exp.func.addToBasketModal = function(n) {
    var basketContent = $(n).find('#mini-basket').html();
    $('.awa-mini-basket__inner').html( basketContent );
    exp.func.openAddToBasketModal();
    setTimeout(exp.func.closeAddToBasketModal,5000);
    //ShowOverlayContentBasket("#basket-modal", "list");
};

exp.func.openAddToBasketModal = function() {
    $(window).scrollTop(0);
    $('.awa-mini-basket').show(500);
/*    if( $('.modal-backdrop').length === 0 ) {
        $('body').prepend('<div class="modal-backdrop fade in"></div>');
    }
    setTimeout(function(){
        $('.awa-mini-basket').removeClass('awa-mini-basket__highlight');
    },600);
*/
};

exp.func.closeAddToBasketModal = function() {
    $('.awa-mini-basket').hide(500);
/*
    $('.modal-backdrop').removeClass('in');
    setTimeout(function(){
        $('.modal-backdrop').remove();
    },500);
  */
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Add DOM elements

    $('.navbar.bliss').append( exp.vars.desktop.checkoutButton + exp.vars.desktop.miniBasket );


    // Attach event listeners

    $('[data-action="awaVisitCheckout"]').on('click', exp.func.awaVisitCheckout );

    if( exp.vars.global.page === 'product' ) {
        $('.btnaddtobasket').die().on('click', exp.func.quickViewAdd );
        $('#product-info #controls .btn').on('click', exp.func.productAdd );
        $('.awa-mini-basket__close').on('click', exp.func.closeAddToBasketModal );
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);