//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
window.exp = function($) {

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
exp.log('Add to basket flow - 0.3');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = window.universal_variable.basket !== undefined && $('#addBasketSuccess').val() === 'true';

// Check for a condition and return false if it has not been met
if(exp.condition === false) {
    exp.log('Add to basket flow: failed a condition');
    return false;
}

// The JSON for our experiment
exp.json = window.AWA_basket_flow_data;

// set potatoes, tomato and onions_garlic to veg plants lucky dip
exp.json.potatoes.lucky_dip =
exp.json.onions_garlic.lucky_dip =
exp.json.tomato.lucky_dip =
exp.json.vegetable_plants.lucky_dip;

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    this_product: $.trim( $('.pageTitleContent').text() ).replace(/&/gi,'&amp;').replace(/'/gi,'&#039;').replace('®','&amp;reg;').replace('™','&amp;trade;'),//window.universal_variable.product.name,
    just_added: '',
    recommendedHTML: '',
    product_type: false, // initially set to false so we can use it as a condition shortly
};

// find this product in the basket items in order to determine its url
// we then use the url to determine the top level category / product type
window.universal_variable.basket.line_items.forEach(function(obj, index){
    if(obj.product.name === exp.vars.this_product ) {
        exp.vars.just_added = obj.product.url;
    }
});

// Set the product type, used to determine recommended products to show
if( exp.vars.just_added.indexOf('potatoes') !== -1 ) {

    exp.vars.product_type = 'potatoes';

} else if( exp.vars.just_added.indexOf('onion-shallot-and-garlic-sets') !== -1 ) {

    exp.vars.product_type = 'onions_garlic';

} else if( exp.vars.just_added.indexOf('fruit-plants') !== -1 ) {

    exp.vars.product_type = 'fruit_plants';

} else if( exp.vars.just_added.indexOf('fruit-trees') !== -1 ) {

    exp.vars.product_type = 'fruit_trees';

} else if( exp.vars.just_added.indexOf('flower-seeds') !== -1 ) {

    exp.vars.product_type = 'flower_seeds';

} else if( exp.vars.just_added.indexOf('vegetable-seeds') !== -1 &&
           exp.vars.just_added.indexOf('tomato') === -1 ) {

    exp.vars.product_type = 'vegetable_seeds';

} else if( exp.vars.just_added.indexOf('flower-plants') !== -1 ) {

    exp.vars.product_type = 'flower_plants';

} else if( exp.vars.just_added.indexOf('flower-bulbs') !== -1 ) {

    exp.vars.product_type = 'flower_bulbs';

} else if( exp.vars.just_added.indexOf('vegetable-plants') !== -1 &&
           exp.vars.just_added.indexOf('tomato') === -1 ) {

    exp.vars.product_type = 'vegetable_plants';

} else if( exp.vars.just_added.indexOf('tomato') !== -1 ) {

    exp.vars.product_type = 'tomato';

}

// If no product type set, then it is not included in the experiment, return false
if( exp.vars.product_type === false ) {
    exp.log('Add to basket flow: not an included category');
    return false;
}

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#addBasketSuccessDIV { \
    width: 70%; \
    margin-left: 15%; \
    background: #fff; \
    border: 1px solid #000; \
    top: -129px; \
    -webkit-box-shadow: 0px 1px 8px 1px rgba(50, 50, 50, 0.5); \
    -moz-box-shadow:    0px 1px 5px 1px rgba(50, 50, 50, 0.5); \
    box-shadow:         0px 1px 8px 1px rgba(50, 50, 50, 0.5); \
} \
#addBasketSuccessDIV .popUpTop img { \
    display: none; \
} \
#addBasketSuccessDIV .popUpMiddle { \
    background: transparent !important; \
    padding: 5px 30px 5px 20px; \
} \
#addBasketSuccessDIV .header2Class, \
#addBasketSuccessDIV h2 { \
    display: none; \
} \
#addBasketSuccessDIV .header3Class, #addBasketSuccessDIV h3 { \
    font-weight: normal; \
    position: absolute; \
    top: 0; \
    left: 8px; \
    font-size: 22px; \
    line-height: 26px; \
    width: 600px; \
    text-align: left; \
} \
#addBasketSuccessDIV .header3Class:before, #addBasketSuccessDIV h3:before { \
    content: ""; \
    width: 20px; \
    height: 20px; \
    display: inline-block; \
    background-position: 0 0; \
    position: relative; \
    left: 0; \
    margin: 0 8px 0 0; \
    background-repeat: no-repeat; \
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wQeCSYDP/xrJwAAASpJREFUOMtj/P//PwO5gImBAkBHzYs2zzx15SiC/59oEFvlp+4nrO4nvG7vcogIExl27jmxjQRnP331ePLyTjg33i+dBM2VE3M+f/0EYQc6RZjpWBOrGdnB0mKyVSltxIb2jftXkB08tWoxLzcfsZorkBycE1mmoaiDPZ5v3L8yZUXXjftX4CLIXDMd65yIMnSzITF28vIRSBz659t/+vLx////1+9dhoio+wmbRCo+efkIM+ahNi/cNBNuv1OqwY37Vyom5sAt6MifIi0mi+kpRkiuunH/Smy1H9x7yCDON70qpRVf2tZQ1Fncugk5JOHiuZHluIKTETk/Y9q/YcIBtBDGEmBwcP3eZZNIRUg4Ldw0A39WwZKrrt+7HFvl1zq7imA+YxywYggAWyMrrtK1vMoAAAAASUVORK5CYII="); \
} \
#addBasketSuccessDIV .closeButton { \
    background: #666; \
    width: 18px; \
    height: 18px; \
    line-height: 19px; \
    color: #fff !important; \
    font-size: 12px; \
    font-weight: bold; \
    border-radius: 10px; \
    position: absolute; \
    top: 5px; \
    right: 26px; \
} \
.awa-basket-flow-buttons { \
    float: right; \
    padding: 50px 0 0 0; \
} \
.awa-basket-flow-buttons a { \
    background: #345E2E; \
    color: #fff !important; \
    font-size: 1.1em; \
    height: 30px !important; \
    display: block; \
    float: right; \
    line-height: 30px !important; \
    padding: 0 10px !important; \
    margin: 0 0 0 10px; \
    font-weight: bold; \
    border: 1px solid #345E2E; \
} \
.awa-basket-flow-buttons .awa-basket-flow-buttons__proceed { \
    background: #fff; \
    color: #345E2E !important; \
} \
.awa-basket-flow-recommended { \
    clear: both; \
    overflow: auto; \
    padding: 40px 0 10px 10px; \
} \
.awa-basket-flow-recommended h4 { \
    text-align: left; \
    color: #000; \
    font-size: 15px; \
    padding: 0 0 10px 0; \
} \
.awa-basket-flow-recommended__product { \
    float: left; \
    width: 33.3%; \
    text-align: left; \
} \
.awa-basket-flow-price { \
    font-weight: bold; \
} \
.awa-basket-flow-recommended img { \
    width: 140px; \
    height: 140px; \
} \
.awa-basket-flow-recommended__submit { \
    background: #B60718; \
    color: #fff !important; \
    font-size: 1.1em; \
    height: 24px !important; \
    width: 110px; \
    display: block; \
    line-height: 20px !important;  \
    padding: 0 6px !important;  \
    font-weight: bold; \
    margin: 6px 0 0 0; \
    border: 0; \
} \
.awa-basket-flow-recommended__submit.awa-button-loading { \
    background-image: url("data:image/gif;base64,R0lGODlhEAAQAPIAALYHGP///8dBTuu9wv///+Kepdl/iNRweSH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==") !important; \
    background-repeat: no-repeat !important; \
    background-position: center !important; \
    color: #B60718 !important; \
    font-size: 0em !important; \
} \
.awa-button-cart-success .awa-basket-flow-recommended__submit { \
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wQeCSYDP/xrJwAAASpJREFUOMtj/P//PwO5gImBAkBHzYs2zzx15SiC/59oEFvlp+4nrO4nvG7vcogIExl27jmxjQRnP331ePLyTjg33i+dBM2VE3M+f/0EYQc6RZjpWBOrGdnB0mKyVSltxIb2jftXkB08tWoxLzcfsZorkBycE1mmoaiDPZ5v3L8yZUXXjftX4CLIXDMd65yIMnSzITF28vIRSBz659t/+vLx////1+9dhoio+wmbRCo+efkIM+ahNi/cNBNuv1OqwY37Vyom5sAt6MifIi0mi+kpRkiuunH/Smy1H9x7yCDON70qpRVf2tZQ1Fncugk5JOHiuZHluIKTETk/Y9q/YcIBtBDGEmBwcP3eZZNIRUg4Ldw0A39WwZKrrt+7HFvl1zq7imA+YxywYggAWyMrrtK1vMoAAAAASUVORK5CYII="); \
    background-repeat: no-repeat; \
    background-color: #fff; \
    background-position: left; \
    color: #345E2E !important; \
    text-align: left; \
    padding-left: 25px !important; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Grab basket contents and remove any items from our recommended products list
exp.func.filterBasketContents = function( product_type ) {

    product_type = product_type || 'flower-plants';
    var filterArray = function(arr, val) {
        arr.forEach(function(prod, index) {
            if(prod.prod_url === val ) {
                arr.splice(index,1);
            }
        });
    };
    window.universal_variable.basket.line_items.forEach(function(prod){
        var val = prod.product.url;
        filterArray(exp.json[product_type].prod_1, val);
        filterArray(exp.json[product_type].prod_2, val);
        filterArray(exp.json[product_type].prod_3, val);
        filterArray(exp.json[product_type].lucky_dip, val);
    });

};

// Function to calculate the recommended products
exp.func.recommendProducts = function( product_type ) {

    var json = exp.json[product_type];
    var prod_1, prod_2, prod_3;
    var luckyDip = function() {
        var prod, index;
        if( json.lucky_dip.length !== 0 ) {
            prod = json.lucky_dip[ Math.floor(Math.random() * json.lucky_dip.length) ];
            index = json.lucky_dip.indexOf(prod);
            json.lucky_dip.splice(index, 1);
        } else {
            prod = '';
        }
        return prod;
    };
    if( json.prod_1.length !== 0 ) {
        prod_1 = json.prod_1[ Math.floor(Math.random() * json.prod_1.length) ];
    } else {
        prod_1 = luckyDip();
    }
    if( json.prod_2.length !== 0 ) {
        prod_2 = json.prod_2[ Math.floor(Math.random() * json.prod_2.length) ];
    } else {
        prod_2 = luckyDip();
    }
    if( json.prod_3.length !== 0 ) {
        prod_3 = json.prod_3[ Math.floor(Math.random() * json.prod_3.length) ];
    } else {
        prod_3 = luckyDip();
    }
    exp.func.insertProducts( [prod_1, prod_2, prod_3] );

};

// Function to insert the recommended products
// accept 3 products as objects
exp.func.insertProducts = function( products ) {

    var slots = [];
    var html;
    products.forEach(function( prod ){
        if( prod === '' ) {
            slots.push( '' );
        }
        slots.push(
            '<div class="awa-basket-flow-recommended__product" data-awa-sku="'+prod.prod_sku+'" data-awa-code="'+prod.prod_code+'"> \
                <a href="'+prod.prod_url+'"><img src="'+prod.prod_image+'" alt="" /></a> \
                <p><a href="'+prod.prod_url+'">'+prod.prod_name+'<br /><span class="awa-basket-flow-price" data-awa-id="'+prod.prod_sku+'">&nbsp;</span></a></p> \
                <form action="/public/QLOnline/product?portal:componentId=32485735&amp;portal:type=action&amp;portal:isSecure=false&amp;productCode='+prod.prod_code+'" method="post"> \
                    <input name="addToBasket" value="true" type="hidden" /><input name="quantity" value="1" type="hidden" /> \
                    <input name="skuCodes" value="'+prod.prod_sku+'" type="hidden" /> \
                    <input class="awa-basket-flow-recommended__submit" type="submit" value="Add to basket" name="submit" data-awa-sku="'+prod.prod_sku+'" data-awa-code="'+prod.prod_code+'" /> \
                </form> \
            </div>'
        );
    });

    html = slots[0] + slots[1] + slots[2];
    exp.vars.recommendedHTML = $(html);
    $('.awa-basket-flow-recommended').append( exp.vars.recommendedHTML );
    exp.func.scrapePrices(products);
    // Add to cart event listener
    $('.awa-basket-flow-recommended__submit').bind('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        exp.func.addToCart($(this));
    });

};

// Function to scrape the prices for our recommended products
exp.func.scrapePrices = function(products) {
    products.forEach(function(prod) {
        if( prod === '' ) { return false; }
        $.ajax({
            async: false,
            type: 'GET',
            contentType: 'text/plain',
            url: prod.prod_url,
            success: function( resp ) {
                var $resp = $(resp);
                var price = $.trim( $resp.find('.productInfoLeft .price:eq(0)').html() );
                if( price ) {
                    exp.vars.recommendedHTML.find('[data-awa-id="'+prod.prod_sku+'"]').html( price );
                }
            }
        });
    });
    exp.func.requestSelf();
};

// Function to add product to the cart
exp.func.addToCart = function($this) {

    var code = $this.attr('data-awa-code');
    var sku = $this.attr('data-awa-sku');

    $this.addClass('awa-button-loading');

    $.ajax({
        url: 'http://www.thompson-morgan.com/public/QLOnline/product?portal:componentId=32485735&portal:type=action&portal:isSecure=false&productCode='+code,
        type: 'POST',
        async: false,
        data: {
            addToBasket: true,
            quantity: 1,
            skuCodes: sku
        },
        error: function() {
            exp.func.cartResultMessage($this,'error');
        },
        success: function(resp) {
            exp.func.cartResultMessage($this,'success');
            var widget = $(resp).find('#basket').html();
            $('#basket').html( widget );
        }
    });
    exp.func.requestSelf();

};

// Function to show a success or error message on adding to cart
exp.func.cartResultMessage = function($this, result) {

    var $parent = $this.parents('.awa-basket-flow-recommended__product');
    var url = $parent.find('a:eq(0)').attr('href');
    var className;

    $this.removeClass('awa-button-loading');

    if(result === 'error') {
        className = 'awa-button-cart-error';
        alert('There seems to be a problem adding this product to the cart, please try again.');
    } else if(result === 'success') {
        className = 'awa-button-cart-success';
    }
    $this.addClass(className);
    $parent.addClass(className);
    $this.val('Added');
    $this.unbind().bind('click', function(e) {
        e.preventDefault();
        window.location = url;
    });

};

// Function to request the current page (flash data breadcrumb fix)
exp.func.requestSelf = function() {
    var url = exp.vars.just_added;
    $.ajax({
        async: false,
        type: 'GET',
        contentType: 'text/plain',
        url: url
    });
};

// Make DOM changes to the modal
exp.func.modalDOMChanges = function() {

    var $heading = ($('#addBasketSuccessDIV .header3Class').length !== 0) ?
                    $('#addBasketSuccessDIV .header3Class') : $('#addBasketSuccessDIV h3');
    var dom =   '<div class="awa-basket-flow-buttons"> \
                    <a href="#" class="awa-basket-flow-buttons__continue" onmousedown="dismissAddToBasketPopup();return false;">Continue Shopping</a> \
                    <a href="/basket" class="awa-basket-flow-buttons__proceed">Proceed to Checkout</a> \
                </div> \
                <div class="awa-basket-flow-recommended"> \
                    <h4>Frequently bought with '+$heading.text()+'.</h4> \
                </div>';

    $('#addBasketSuccessDIV .closeButton').text('X');

    $('#addBasketSuccessDIV p').next('a').remove();
    $('#addBasketSuccessDIV p:eq(0)').replaceWith( dom );

    $heading.append(
        ' was added to your basket'
    );

};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Filter our master list by basket contents
    exp.func.filterBasketContents( exp.vars.product_type );

    // Make initial adjustments to our modal
    exp.func.modalDOMChanges();

    // Recommend the products
    exp.func.recommendProducts( exp.vars.product_type );

};

exp.init();

return exp;

};

// This function waits till a condition returns true
window.AWA_func_waitFor = function(condition, callback, timeout, keepAlive) {
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

// Wait for our JSON
AWA_func_waitFor(
    function(){
        return (window.AWA_basket_flow_data !== undefined);
    },
    function(){
        window.exp(jQuery);
    }
);