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
exp.condition = $('.btnaddtobasket,#product-info');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    global: {
        basketURL: $('.minibasket-btn').attr('onclick').replace("location.href='","").replace("';","")
    },
    desktop: {
        checkoutButton: '<button class="btn btn-primary pull-right upper hidden-phone-potrait hidden-tablet-potrait awa-checkout-button-desktop" data-action="awaVisitCheckout">Checkout</button>'
    },
    mobile: {

    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#div-add-button .row { color: #c00; text-align: right; } ';

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

exp.func.quickViewAdd = function() {
  e.preventDefault();
  var e = $(this).prev("input").val();
  var t = "#" + $(this).attr("id");
  var n = $(this).attr("rel").replace("?vid=", "");
  if (n == "") {
    n = e
  }
  var r = "#qty_" + e;
  if (t.indexOf("direct") != -1) {
    r = "#qty_direct_" + e
  }
  var i = $(r).val();
  if (i.indexOf("m") != -1) {
    i = i.replace("m", "")
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
        exp.func.addToBasketModal();
        $(s).show();
      } else {
        $(t).parent().before('<div class="row">' + n + "</div>")
      }
    },
    error: function() {
      $(t).parent().before('<div class="row">Error adding item to basket!<br />Please try again later.</div>')
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
            exp.func.addToBasketModal();
        } else {
            $('#div-add-button .btn').parent().before('<div class="row">' + n + "</div>")
        }
    },
    error: function() {
      $('#div-add-button .btn').parent().before('<div class="row">Error adding item to basket!<br />Please try again later.</div>')
    }
  });
};

exp.func.addToBasketModal = function() {
    console.log('custom basket');
    //ShowOverlayContentBasket("#basket-modal", "list");
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Add DOM elements
    $('.navbar.bliss').append( exp.vars.desktop.checkoutButton );

    // Attach event listeners
    $('[data-action="awaVisitCheckout"]').on('click', exp.func.awaVisitCheckout );
    $('.btnaddtobasket').die().on('click', exp.func.quickViewAdd );
    $('#div-add-button .btn').on('click', exp.func.productAdd );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);