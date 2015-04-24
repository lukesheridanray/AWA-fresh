//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*

0. determine product type, set a variable

1. make css and dom changes to our modal

2. recommend 3 products, based on product type, using the object

3. if neccessary, pull a price through for some products

4. add to basket button, using meta data as required i.e. product id


*/


// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var addToBasketFlow = (function($) {

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
exp.log('Add to basket flow - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#addBasketSuccess').val() === 'true' ? true : false;

// Check for a condition and return false if it has not been met
if(exp.condition === false) {
    //exp.log('Experiment failed a condition');
    //return false;
}

// The JSON for our experiment
exp.json = {
/*
Example
    product_type: {
        prod_1: [
            {
                prod_name: 'name',
                prod_url: 'url',
                prod_image: 'img',
                prod_meta: {}
            }
        ],
        prod_2: [ .. ]
        prod_3: null,
        lucky_dip: [
            {
                prod_name: 'name',
                prod_url: 'url',
                prod_image: 'img',
                prod_meta: {}
            }
        ]
    }
*/  
    'potatoes': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Potato Fertiliser',
                prod_url: '/garden-supplies/fertilisers/chempak-potato-fertiliser/zww2588TM',
                prod_image: '/static-images/tandm/qubit/recommendations/CHEM-ZWW2588-A_x.jpg',
                prod_meta: {}
            }
        ],
        prod_2: null,
        prod_3: null,
        lucky_dip: [
            {
                prod_name: 'rand1 Chempak&reg; Potato Fertiliser',
                prod_url: '/flowers/flower-plants/petunia-plants/petunia-tidal-wave/p83717TM',
                prod_image: '/static-images/tandm/qubit/recommendations/CHEM-ZWW2588-A_x.jpg',
                prod_meta: {}
            },
            {
                prod_name: 'rand2 Chempak&reg; Potato Fertiliser',
                prod_url: '/garden-supplies/fertilisers/chempak-potato-fertiliser/zww2588TM',
                prod_image: '/static-images/tandm/qubit/recommendations/CHEM-ZWW2588-A_x.jpg',
                prod_meta: {}
            }
        ]
    }
};

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    product_type: 'potatoes'
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Grab basket contents and remove any items from our recommended products list
exp.func.filterBasketContents = function( product_type ) {
    product_type = product_type || 'flower-plants';
    var basketOverflow = $('#cart-content').text().indexOf('You have additional items');
    var AJAX = basketOverflow === -1 ? false : true;
    var items = [];
    var compare = function(items) {
        console.log(items);
        // Check whether our items exist in our product list, if so remove them
        items.forEach(function(value){
            if( exp.json[product_type].prod_1 !== null ) {
                exp.json[product_type].prod_1.forEach(function(prod,index) {
                    if(prod.prod_url === value ) {
                        exp.json[product_type].prod_1.splice(index,1);
                    }
                });
                if(exp.json[product_type].prod_1.length === 0) {
                    delete exp.json[product_type].prod1;
                }        
            }
            if( exp.json[product_type].prod_2 !== null ) {
                exp.json[product_type].prod_2.forEach(function(prod,index) {
                    if(prod.prod_url === value ) {
                        exp.json[product_type].prod_2.splice(index,1);
                    }
                });
                if(exp.json[product_type].prod_2.length === 0) {
                    delete exp.json[product_type].prod_2;
                }
            }
            if( exp.json[product_type].prod_3 !== null ) {
                exp.json[product_type].prod_3.forEach(function(prod,index) {
                    if(prod.prod_url === value ) {
                        exp.json[product_type].prod_3.splice(index,1);
                    }
                });
                if(exp.json[product_type].prod_3.length === 0) {
                    delete exp.json[product_type].prod_3;
                }
            }
            exp.json[product_type].lucky_dip.forEach( function(prod, index ) {
                if(prod.prod_url === value) {
                    exp.json[product_type].lucky_dip.splice(index,1);
                }
            });
        });
    };
    // gather our basket items, either via AJAX (too many to display in widget), or plain old DOM
    // them make a comparison to filter any items that are in the basket from our master list
    if(AJAX) {
        $.ajax({
            url: '/basket',
            success: function( resp ) {
                var $items = $(resp).find('.basket-items .details .price');
                if($items.length !== 0) {
                    $items.each(function(){
                        items.push( $(this).attr('href') );
                    });
                }
            }
        });
    } else {
        $('#cart-content .miniBasketDescription a').each(function(){
            items.push( $(this).attr('href') );
        });
        compare(items);
    }
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

    // Filter our master list by basket contents
    exp.func.filterBasketContents( exp.vars.product_type );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);