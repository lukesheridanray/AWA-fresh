//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*

1. make css and dom changes to our modal

2. recommend 3 products, based on product type, insert into a placeholder

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
    //exp.log('Add to basket flow: failed a condition');
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
                prod_meta: {
                    price: ''
                }
            }
        ],
        prod_2: []
        prod_3: [],
        lucky_dip: [
            {
                prod_name: 'name',
                prod_url: 'url',
                prod_image: 'img',
                prod_meta: {
                    price: ''
                }
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
        prod_2: [],
        prod_3: [],
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
    },
    'onions-garlic': {
    },
    'fruit-plants': {
    },
    'fruit-trees': {
    },
    'flower-seeds': {
    },
    'vegetable-seeds': {
    },
    'flower-plants': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Potato Fertiliser',
                prod_url: '/garden-supplies/fertilisers/chempak-potato-fertiliser/zww2588TM',
                prod_image: '/static-images/tandm/qubit/recommendations/CHEM-ZWW2588-A_x.jpg',
                prod_meta: {}
            }
        ],
        prod_2: [],
        prod_3: [],
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
    },
    'flower-bulbs': {
    },
    'vegetable-plants': {
    },
    'tomato': {
    }
};

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    this_url: window.location.pathname,
    product_type: false, // initially set to false so we can use it as a condition shortly
    basket_ajax: { in_use: false, ready: true } // these will change if AJAX is required to filter basket items
};

// Set the product type, used to determine recommended products to show
if( exp.vars.this_url.indexOf('potatoes') !== -1 ) {

    exp.vars.product_type = 'potatoes';

} else if( exp.vars.this_url.indexOf('onion-shallot-and-garlic-sets') !== -1 ) {

    exp.vars.product_type = 'onions-garlic';

} else if( exp.vars.this_url.indexOf('fruit-plants') !== -1 ) {

    exp.vars.product_type = 'fruit-plants';

} else if( exp.vars.this_url.indexOf('fruit-trees') !== -1 ) {

    exp.vars.product_type = 'fruit-trees';

} else if( exp.vars.this_url.indexOf('flower-seeds') !== -1 ) {

    exp.vars.product_type = 'flower-seeds';

} else if( exp.vars.this_url.indexOf('vegetable-seeds') !== -1 &&
           exp.vars.this_url.indexOf('tomato') === -1 ) {

    exp.vars.product_type = 'vegetable-seeds';

} else if( exp.vars.this_url.indexOf('flower-plants') !== -1 ) {

    exp.vars.product_type = 'flower-plants';

} else if( exp.vars.this_url.indexOf('flower-bulbs') !== -1 ) {

    exp.vars.product_type = 'flower-bulbs';

} else if( exp.vars.this_url.indexOf('vegetable-plants') !== -1 &&
           exp.vars.this_url.indexOf('tomato') === -1 ) {

    exp.vars.product_type = 'vegetable-plants';

} else if( exp.vars.this_url.indexOf('tomato') !== -1 ) {

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
#addBasketSuccessDIV .header2Class, \
#addBasketSuccessDIV h2 { \
    display: none; \
} \
#addBasketSuccessDIV .header3Class, #addBasketSuccessDIV h3 { \
} \
#addBasketSuccessDIV .closeButton { \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Grab basket contents and remove any items from our recommended products list
exp.func.filterBasketContents = function( product_type ) {
    product_type = product_type || 'flower-plants';
    var basketOverflow = $('#cart-content').text().indexOf('You have additional items');
    var AJAX = basketOverflow === -1 ? false : true;
    var items = [];
    var filterArray = function(arr, val) {
        arr.forEach(function(prod, index) {
            if(prod.prod_url === val ) {
                arr.splice(index,1);
            }
        });
    };
    var compare = function(items) {
        items.forEach(function(val){
            filterArray(exp.json[product_type].prod_1, val);
            filterArray(exp.json[product_type].prod_2, val);
            filterArray(exp.json[product_type].prod_3, val);
            filterArray(exp.json[product_type].lucky_dip, val);
/*
            if( exp.json[product_type].prod_1 !== null ) {
                exp.json[product_type].prod_1.forEach(function(prod,index) {
                    if(prod.prod_url === value ) {
                        exp.json[product_type].prod_1.splice(index,1);
                    }
                });   
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
            }
            exp.json[product_type].lucky_dip.forEach( function(prod, index ) {
                if(prod.prod_url === value) {
                    exp.json[product_type].lucky_dip.splice(index,1);
                }
            });
*/
        });
    };
    // gather our basket items, either via AJAX (too many to display in widget), or plain old DOM
    // them make a comparison to filter any items that are in the basket from our master list
    if(AJAX) {
        exp.vars.basket_ajax.in_use = true;
        exp.vars.basket_ajax.ready = false;
        $.ajax({
            url: '/basket',
            success: function( resp ) {
                var $items = $(resp).find('.basket-items .details .price');
                if($items.length !== 0) {
                    $items.each(function(){
                        items.push( $(this).attr('href') );
                    });
                }
                compare(items);
                exp.vars.basket_ajax.ready = true;
            },
            error: function() {
                exp.vars.basket_ajax.ready = true;
                // we tell the experiment it is ready even on error, as filtering these products
                // is not absolutely vital
            }
        });
    } else {
        $('#cart-content .miniBasketDescription a').each(function(){
            items.push( $(this).attr('href') );
        });
        compare(items);
    }
};

// Function to calculate the recommended products
exp.vars.recommendProducts = function() {
    var prod_1, prod_2, prod_3;
    exp.func.insertProducts( prod_1, prod_2, prod_3 );
};

// Function to insert the recommended products
// accept 3 products as objects
exp.vars.insertProducts = function( prod_1, prod_2, prod_3 ) {
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Filter our master list by basket contents
    exp.func.filterBasketContents( exp.vars.product_type );

    // Make initial adjustments to our modal

    $('#addBasketSuccessDIV .header3Class, #addBasketSuccessDIV h3').append(
        ' was added to your basket'
    );

    $('#addBasketSuccessDIV .closeButton').text('X');

    // Recommend the poducts
    // if AJAX is being used for the basket filtering, wait till it is ready
    exp.func.waitFor(
        function() {
            return exp.vars.basket_ajax.ready === true;
        },
        function() {
            exp.func.recommendProducts( exp.vars.product_type );
        }
    );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);