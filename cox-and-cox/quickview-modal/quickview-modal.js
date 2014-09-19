// jshint multistr: true
// jshint jquery: true

/* Script from product page */
window.tabSwitch = function(active, number, tab_prefix, content_prefix) {
    for (var i=1; i < number+1; i++) {
      document.getElementById(content_prefix+i).style.display = 'none';
      document.getElementById(tab_prefix+i).className = '';
    }
    document.getElementById(content_prefix+active).style.display = 'block';
    document.getElementById(tab_prefix+active).className = 'active';
};

/* Experiment */

var exp = (function($) {

var exp = {};

var onlyEssentialProductInfo = true;

exp.condition = $('.category-products');

exp.vars = {
    'thisURL': $('link[rel="canonical"]').attr('href'),
    view: (onlyEssentialProductInfo ? ".product-essential" : ".product-view")
};

exp.css = ' \
.quickview-modal-close { position: absolute; top: 5px; right: 5px; width: 20px; height: 20px; \
    background: url("//cdn.optimizely.com/img/174847139/169921110dad41ffac775bc65ee97c6d.gif") 0 0 no-repeat transparent; \
    cursor: pointer; z-index: 1103; display: block; } \
.quickview-modal-close:hover, .quickview-modal-close:focus { text-decoration: none; } \
.quickview-modal-close:before { content: "CLOSE"; display: block; left: -48px; position: absolute; top: 4px; } \
\
.product-view-wrap { width: 972px; } \
.quickview-modal-content { background: #fff; position: relative; padding: 15px; margin: 0 auto; width: 970px; } \
.product-view-wrap .product-view .product-shop { width: 555px; } \
.product-details-link { text-decoration: underline; float: right; margin-right: 30px; } \
#sb-player { overflow: visible !important;} \
.quickview-modal-button:hover, .quickview-modal-button-grey:hover { text-decoration: none !important; } \
.quickview-modal-button, .quickview-modal-button-grey { \
font-size: 1.2em; width: 174px; height: 38px; line-height: 38px; display: font-weight: bold !important; block; float: right; text-align: center; color: #333 !important; \
    background: url("//cdn.optimizely.com/img/174847139/e6d24c17d5664e548b962237a5877eac.png") 0 0 no-repeat transparent; } \
.addtobasket-spinner { \
    background: url("/skin/frontend/default/coxampcox/images/ajax-loader.gif") 0 0 no-repeat transparent; \
height: 28px; position: absolute; top: 11px; right: -42px; width: 28px; display: none; } \
.product-image {    text-decoration: none !important; } \
.category-products .product-image:hover:after { \
    display: block; \
    background: url("data:image/png;base64,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") \
    no-repeat black 25px center; \
    opacity: 1.0; \
    height: 50px; \
    width: 119px; \
    color: white; \
    font-family: Arial,Helvetica,sans-serif; \
    text-decoration: none; \
    font-weight: bold; \
    line-height: 50px; \
    padding-left: 27px; \
    border-radius: 7px; \
    opacity: .8; \
    content: "Quick View"; \
    position: relative; \
    top: -70px; \
    left: 18px; \
    text-decoration: none !important; \
    font-size: 1.2em \
  } \
  ';

exp.func = exp.func || {};

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

exp.func.buildModalContent = function(stuff, productURL) {

    var realstuff = $(stuff).find(exp.vars.view);

    if (onlyEssentialProductInfo) {
        realstuff.find(".add-to-box").after('<div class="view-details"><a class="product-details-link" href="'
            + productURL
            + '">View product details</a></div>');
    }
    //realstuff.find(".availability").replaceWith("");
    
    realstuff.find("a.MagicZoomPlus").removeAttr('href');

    contentString = ' \
<div class="quickview-modal-content"> \
<a href="#" onclick="Shadowbox.close();return false;" class="quickview-modal-close">&nbsp;</a> \
<div class="product-view-wrap"> \
    <div class="product-view">' + realstuff.html() + '</div> \
</div> \
</div>';

    return contentString;
};

exp.func.openModal = function(content) {

    Shadowbox.open({
        content: content,
        player: 'html',
        title: '',
        height: 900,
        width: 1800,
        options: {
            onFinish: function() {
                $('.add-to-cart .btn-cart').prop('type','submit');
                $('.add-to-cart .btn-cart').prop("onclick", null);

                $(".more-views li > a").prop("onclick", null);
                $(".more-views li > a").click(function() {
                    $('a.MagicZoomPlus > img').prop('src', $(this).prop('rev'));
                    return false;
                });

                $.getScript('http://assets.pinterest.com/js/pinit.js');
            }
        }
    });

};

exp.func.productModal = function(productURL) {

    // do the request
    var request = jQuery.ajax({
        url:  productURL,
        type: "GET",
        success: function(resp) {
            var msg = $(resp).find('ul.messages .notice-msg').text();
            if(msg !== '') {
                alert(msg);
                return false;
            }
            exp.func.openModal( exp.func.buildModalContent(resp, productURL) );
        },
        error: function() {
            alert("There seems to be a problem with Quick View.\nIf the problem persists, please let us know.");
        },
        beforeSend: function () {
            //$('.addtobasket-spinner').show(0);
        },
        complete: function() {
            //$('.addtobasket-spinner').hide(0);
        }
    });

};

exp.run = function() {

    // check for a condition and check it has been met
    if(this.condition && !this.condition.length) {
        return false;
    }

    console.log('Quick View modal experiment - 1.0.0');

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // add custom listener to addtocart button
    $('.product-image').click(function(e) {
        e.preventDefault();
        exp.func.productModal( $(this).prop('href') );
    });
};

exp.run();

return exp;

})(jQuery);