(function(){ 
    var hostname = window.location.hostname; 
    var parts = hostname.split("."); 
    var publicSuffix = hostname; 
    var last = parts[parts.length - 1]; 
    var expireDate = new Date(); expireDate.setDate(expireDate.getDate() + 7); 
    var TOP_LEVEL_DOMAINS = ["com", "local", "net", "org", "xxx", "edu", "es", "gov", "biz", "info", "fr", "gr", "nl", "ca", "de", "kr", "it", "me", "ly", "tv", "mx", "cn", "jp", "il", "in", "iq"]; 
    var SPECIAL_DOMAINS = ["jp", "uk", "au"]; 
    if(parts.length > 2 && SPECIAL_DOMAINS.indexOf(last) != -1){ 
        publicSuffix = parts[parts.length - 3] + "."+ parts[parts.length - 2] + "."+ last; 
    } else if(parts.length > 1 && TOP_LEVEL_DOMAINS.indexOf(last) != -1) {
        publicSuffix = parts[parts.length - 2] + "."+ last; 
    }
    document.cookie = "optly_"+publicSuffix.split(".")[0]+"_test=true; domain=."+publicSuffix+"; path=/; expires="+expireDate.toGMTString()+";";
})();

//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// failing bought together without main?

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
exp.log('Add to basket flow - 0.7');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.catalog-product-view');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    dummyIframe: $('<iframe src="" class="awa-dummy" style="display: none;"></iframe'),
    loading: $('<div class="awa-loading" style="position: fixed; top: 45%; left: 45%; z-index: -1; width: 10%; height: 90px; margin: 0 auto; background-color: rgb(255,255,255); background-color: rgba(255,255,255,0.8); background-position: center; background-repeat: no-repeat; \
                background-image: url(\'data:image/gif;base64,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\');"></div>')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.awa-loading { position: fixed; top: 45%; left: 45%; z-index: -1; width: 10%; height: 90px; margin: 0 auto; background-color: rgb(255,255,255); background-color: rgba(255,255,255,0.8); background-position: center; background-repeat: no-repeat; \
background-image: url("data:image/gif;base64,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"); } \
.awa-loading--active { z-index: 9999 !important; } \
.awa-cart-dropdown { display: none; } \
.awa-cart-dropdown .inner-wrapper { padding-top: 50px; } \
.awa-cart-dropdown__title { font-size: 1.9em; color: #111; position: relative; top: 35px; left: 10px; } \
.awa-dummy { display: none; } \
@media screen and (max-width:700px) { \
  .awa-loading { width: 16%; left: 42%; } \
} \
@media screen and (max-width:450px) { \
  .awa-loading { width: 20%; left: 40%; } \
} \
@media screen and (max-width:320px) { \
  .awa-loading { width: 30%; left: 35%; } \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Function to display an error
exp.func.addToBasketError = function(msg) {
    msg = msg || 'There seems to be a problem adding items to the cart at this time, please try again and if the problem persists contact support.';
    alert(msg);
};

// Function to show the success dropdown
exp.func.successDropdown = function() {
    var cartContents = $('#topCartContent');
    var dropdown = '<div class="awa-cart-dropdown block-content" style="display: none;"> \
        <p class="awa-cart-dropdown__title" style="font-size: 1.9em; color: #111; position: relative; top: 35px; left: 10px;">Your basket contains</p>' +
        cartContents.html().toString().replace('class="inner-wrapper"', 'class="inner-wrapper" style="padding-top: 50px;"') +
    '</div>';
    exp.vars.loading.css({'z-index': '-1'}).removeClass('awa-loading--active');
    cartContents.after( dropdown );
    $('html, body').animate({scrollTop:0}, '500');
    $('.awa-cart-dropdown').slideDown();
    setTimeout(function(){
        $('.awa-cart-dropdown').slideUp().remove();
    },4000);
};

// Function to listen for changes to an element
exp.func.mutateListener = function($el, callback) {
    var dom;
    var interval;
    if($el.length === 0) {
        return false;
    }
    dom = $el.html();
    interval = setInterval( function() {
        if(dom !== $('.cartItems').html()) {
            callback();
            clearInterval(interval);
        }
    }, 50);
};

// Function to add products to the basket
exp.func.addToBasket = function(e, $this, type) {

    $this = $this || $(this);
    type = type || 'product';
    var id = $('.nosto_product .product_id').text();
    var superGroupElem;
    var superGroupQuery;
    var relatedElems;
    var relatedQuery = '';

    e.preventDefault();

    if( !id ) {
        exp.func.addToBasketError();
        return false;
    }

    exp.vars.loading.css({'z-index': '9999'}).addClass('awa-loading--active');

    if( type === 'product' ) {

        superGroupElem = $this.parents('.add-to-cart').find('.qty');
        superGroupQuery = superGroupElem.attr('name') + '=' + superGroupElem.attr('value') + '&';

    } else if( 'boughttogether' ) {

        superGroupElem = $('.related-checkbox:eq(0)');
        superGroupQuery = 'super_group[' + superGroupElem.attr('value') + ']=1&';
        relatedElems = $('.related-checkbox:checked').filter(function() {
            return ($(this).attr('value') !== superGroupElem.attr('value'));
        });
        relatedElems.each(function(){
            relatedQuery += $(this).attr('value') + '%2C';
        });
        relatedQuery = relatedQuery.slice(0,-3);

    }

    var url = 'http://www.bakerross.co.uk/quickorder/index/success/uenc/aHR0cDovL3d3dy5iYWtlcnJvc3MuY28udWsvcmVkLXdoaXRlLWFuZC1ibHVlLWFjcnlsaWMtcGFpbnQ,/product/'+id+'/form_key/ag4a8S1SFOnX4HMf/?product='+id+'&related_product='+relatedQuery+'&'+superGroupQuery+'isAjax=1';
    exp.vars.dummyIframe.attr('src', url);

    exp.func.mutateListener( $('.cartItems'), exp.func.successDropdown );

};

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

    // Hide bought together main item checkbox
    $('.checkbox-container:eq(0)').css({
        'visibility': 'hidden',
        'margin-right': '-25px'
    });

    // Append dummy iframe for loading our add to cart page
    // Append loading icon for activating as needed
    $('body')
        .append( exp.vars.dummyIframe )
        .append( exp.vars.loading );

    // Event Listeners
    $('.btn-cart')
        .off()
        .on('click', function(e) {
            var $this = $(this);
            exp.func.addToBasket(e, $this, 'product');
        });

    window.bt_addToCart_pixel = function() {};
    $('.aw-boughttogether .button')
        .on('click', function(e) {
            var $this = $(this);
            exp.func.addToBasket(e, $this, 'boughttogether');
        });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);