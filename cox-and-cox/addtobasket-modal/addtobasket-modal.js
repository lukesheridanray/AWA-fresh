// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

exp.condition = $('#product_addtocart_form');

exp.vars = {
    'thisURL': $('link[rel="canonical"]').attr('href'),
    'postURL': $('#product_addtocart_form').length ? $('#product_addtocart_form').attr('action') : '/checkout/cart/',
    'hasMultipleOptions': $('#super-product-table').length ? true : false
};

exp.css = ' \
/****.add-to-box { position: relative; } */ \
/****.add-to-cart-modal { display: none;  \
width: 200px; height: 300px; position: absolute; top: -300px; right: 0; background: #fff; } */ \
.addbasket-modal-title { font-size: 2em; float: left; margin: 0 0 15px 0; } \
.addbasket-modal-proddetails { clear: left; } \
.addbasket-modal-proddetails img { float: left; margin: 0 10px 0 0; } \
.addbasket-modal-proddetails p { margin: 0; padding: 10px 0 0 0; } \
.addbasket-modal-proddetails p span { display: block; padding: 0 0 9px 0; } \
.addbasket-modal-utility { clear: both; border-top: 1px dashed #ccc; position: relative; top: 10px; padding: 10px 0 0 0; } \
.addbasket-modal-close { position: absolute; top: 5px; right: 5px; width: 20px; height: 20px; \
    background: url("//cdn.optimizely.com/img/174847139/169921110dad41ffac775bc65ee97c6d.gif") 0 0 no-repeat transparent; \
    cursor: pointer; z-index: 1103; display: block; } \
.addbasket-modal-close:hover, .addbasket-modal-close:focus { text-decoration: none; } \
.addbasket-modal-content { background: #fff; position: relative; padding: 15px; margin: 0 auto; width: 360px; height: 272px; } \
#sb-player { overflow: visible !important;} \
.addbasket-modal-utility p { text-align: right; line-height: 19px; } \
.addbasket-modal-button:hover, .addbasket-modal-button-grey:hover { text-decoration: none !important; } \
.addbasket-modal-button, .addbasket-modal-button-grey { \
font-size: 1.2em; width: 174px; height: 38px; line-height: 38px; display: font-weight: bold !important; block; float: right; text-align: center; color: #333 !important; \
    background: url("//cdn.optimizely.com/img/174847139/e6d24c17d5664e548b962237a5877eac.png") 0 0 no-repeat transparent; } \
.addbasket-modal-button-grey { \
    float: left; background: url("//cdn.optimizely.com/img/174847139/405cf12b6d9e46759b300ca931dcf64e.png") 0 0 no-repeat transparent; } \
.addbasket-modal-utility p { display: block; padding-bottom: 15px; } \
.add-to-cart .btn-cart { position: relative; } \
.addtobasket-spinner { \
    background: url("/skin/frontend/default/coxampcox/images/ajax-loader.gif") 0 0 no-repeat transparent; \
height: 28px; position: absolute; top: 11px; right: -42px; width: 28px; display: none; } \
.addbasket-modal-utility p strong { display: block; } ';

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
    
exp.func.buildModalContent = function() {
    var contentString;
    var prodPlural = '';
    var prodThumb = $('.MagicZoomPlus img:eq(0)').attr('src').replace('375x500','182x242');
    var prodTitle = $('.box-description h2:eq(0)').text();
    var prodQty = 0;
    var prodDetails = '';
    var prodTotal = 0;
    var multOptions = $('#super-product-table tbody tr');
    if(exp.vars.hasMultipleOptions === true) {
        multOptions.each(function(){
            var _this = $(this);
            var qty = parseInt(_this.find('.qty').attr('value'));
            var price = _this.find('.special-price').length ? _this.find('.special-price .price').html() : _this.find('.price').html();
            var title = _this.find('td:first-child').html();
            if( qty > 0 ) {
                prodTotal += qty * parseFloat(price.replace('£',''));
                if(qty > 1) {
                    prodDetails += '<span>' + qty.toString() + 'x ' + title + '</span>'; 
                } else {
                    prodDetails += '<span>' + title + '</span>'; 
                }
            }
            prodQty += qty;
        });
        prodTotal = prodTotal.toFixed(2);
        if(prodQty > 1 ) {
            prodPlural = 's';
        }
    } else {
        if($('.special-price .price').length) {
            prodTotal = $('.special-price .price').html().replace('£','');
        } else {
            prodTotal = $('.regular-price .price').html().replace('£','');
        }
        prodQty = parseInt( $('input.qty').attr('value') );
        if(prodQty > 1 ) {
            prodPlural = 's';
            prodTotal = parseFloat( (prodTotal * prodQty) ).toFixed(2);
        }
        prodDetails = prodTitle;
    }
    contentString = ' \
<div class="addbasket-modal-content"> \
<a href="#" onclick="Shadowbox.close();return false;" class="addbasket-modal-close">&nbsp;</a> \
    <p class="addbasket-modal-title">'+prodQty+' item'+prodPlural+' added to basket</p> \
    <div class="addbasket-modal-proddetails"> \
        <img src="'+prodThumb+'" width="100" height="133" alt="" /> \
        <p>'+prodDetails+'</p> \
    </div> \
    <div class="addbasket-modal-utility"> \
        <p><strong>Subtotal:&nbsp;&nbsp;&nbsp;&nbsp;£'+prodTotal+'</strong> \
        (excluding delivery)</p> \
        <a href="#" onclick="Shadowbox.close();return false;" class="addbasket-modal-button-grey">CONTINUE SHOPPING</a> \
        <a href="/checkout/cart/" class="addbasket-modal-button">CHECKOUT</a> \
    </div> \
</div> ';
    return contentString;
};
    
exp.func.openModal = function(content) {
   /* $('#sb-container').css({'display':'block','height':'389px','width':'1349px';'visibility':'visible'});
    $('#sb-overlay').css({'background-color':'#000','opacity':'0.5'});
    $('.add-to-cart-modal')
        .html(content)
        .show(200);*/
    //var addtocartPos = $('.add-to-cart .btn-cart').offset();
    //var posTop = addtocartPos.top;
    //var posLeft = addtocartPos.left;
    Shadowbox.open({
        content: content,
        player: 'html',
        title: '',
        height: 600,
        width: 960,
        options: {
            onFinish: function() {
                //$('#sb-wrapper').offset({'top':posTop,'left':posLeft});
            }
        }
    });
    
};

    /*
exp.func.closeModal = function() {
    $('#sb-container').css({'visibility':'hidden'});
    $('#sb-overlay').css({'opacity':0});
    $('.add-to-cart-modal')
        .hide(200)
        .html('');
    return false;
};
    */
    
exp.func.updateCartWidget = function() {
    $.ajax({
        type: 'GET',
        url: exp.vars.thisURL,
        success: function(response) {
            var widget = $('.top-cart-block .block-cart:eq(0)');
            var updatedCart = $(response).find('.top-cart-block .block-cart:eq(0)');
            widget.replaceWith(updatedCart);
        }
    });
};

exp.func.addToCart = function(postURL) {
    
    var validateQty = 0;
    $('input.qty').each(function() {
        var val = $(this).attr('value');
        if (val === '') { val = '0' };
        validateQty += parseInt( val );
    });
    if(validateQty < 1) {
        alert('You have not selected any products to add to your basket');
        return false;
    }
    
    // process data and create data string
    var dataString = '';
    if(exp.vars.hasMultipleOptions === true) {
        $('#product_addtocart_form input[type="hidden"]').each(function(){
            var _this = $(this);
            dataString += _this.attr('name') + '=' + _this.attr('value') + '&';
        });
        $('input.qty').each(function(){
            var _this = $(this);
            dataString += _this.attr('name') + '=' + _this.attr('value') + '&';
        });
        dataString = dataString.slice(0,-1);
    } else {
        $('#product_addtocart_form input[type="hidden"]').each(function(){
            var _this = $(this);
            dataString += _this.attr('name') + '=' + _this.attr('value') + '&';
        });
        dataString += 'qty=' + $('input.qty').attr('value');
    }
    
    // do the request
    var request = jQuery.ajax({
        url: postURL,
        type: "POST",
        data: dataString,
        success: function(resp) {
            var msg = $(resp).find('ul.messages .notice-msg').text();
            if(msg !== '') {
                alert(msg);
                return false;
            }
            exp.func.openModal( exp.func.buildModalContent() );
            exp.func.updateCartWidget();
        },
        error: function() {
            alert("There seems to be a problem adding this item to the cart, please try and again.\nIf the problem persists, please let us know, referencing this product.");
        },
        beforeSend: function () {
            $('.addtobasket-spinner').show(0);
        },
        complete: function() {
            $('.addtobasket-spinner').hide(0);
        }                     
    });
    
};

exp.run = function() {
     
    // check for a condition and check it has been met
    if(this.condition && !this.condition.length) {
        return false;
    }
    
    console.log('Add to cart modal experiment - dev 0.0.4');

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
    
    // if nothing in cart, add css to prevent jumping when we add an item
    if( !$('.block-cart .amount a').length ) {
        $('head').append('<style type="text/css">.block-cart { margin-left: 12px; } .account-header-block { margin-left: 0; }</style>');
    }
    
    // Add modal container
    //$('.add-to-box').prepend('<div class="add-to-cart-modal" />');

    // Remove addtocart onclick
    $('.btn-cart').attr('onclick', '');
    
    // Add spinner to addtocart button
    $('.add-to-cart .btn-cart').prepend('<div class="addtobasket-spinner" />');
    
    // add custom listener to addtocart button
    $('.btn-cart').bind('click',function(e) {
        exp.func.addToCart( exp.vars.postURL );
        e.preventDefault();
    });
    
    // add listener to form submission
    $('#product_addtocart_form').on('submit',function(e) {
        exp.func.addToCart( exp.vars.postURL );
        e.preventDefault();
    });

};

exp.run();

return exp;

})(jQuery);