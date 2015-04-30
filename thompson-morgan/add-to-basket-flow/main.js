//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*

1. tidy up CSS for modal
3. gather all required data

*/

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
exp.log('Add to basket flow - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = window.universal_variable.basket !== undefined && $('#addBasketSuccess').val() === 'true';

// Check for a condition and return false if it has not been met
if(exp.condition === false) {
    exp.log('Add to basket flow: failed a condition');
    //return false;
}

// The JSON for our experiment
exp.json = {
    'potatoes': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Potato Fertiliser',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-potato-fertiliser/zww2588TM',
                prod_image: '/static-images/tandm/qubit/recommendations/CHEM-ZWW2588-A_x.jpg',
                prod_code: 'zww2588TM',
                prod_sku: 'T14173C'
            },
            {
                prod_name: 'Potato Sacks',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/cropping-storing-and-harvesting/potato-sacks/zww2101TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/POTA-ZWW2101-A_x.jpg',
                prod_code: 'zww2101TM',
                prod_sku: 'T13888P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Potato Scrubbing Gloves',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/cropping-storing-and-harvesting/potato-scrubbing-gloves/aww2509TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/POTA-2509-A_x.jpg',
                prod_code: 'aww2509TM',
                prod_sku: 'T13495'
            }
        ],
        prod_3: [],
        lucky_dip: [
        // veg plants
        ]
    },
    'onions_garlic': {
        prod_1: [
            {
                prod_name: 'Onion Bags',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/cropping-storing-and-harvesting/onion-bags/kww2014TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/ONIO-KWW2014-A_x.jpg',
                prod_code: 'kww2014TM',
                prod_sku: 'T13880P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Chempak&reg; Onion Fertiliser',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-onion-fertiliser/zww2586TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-ZWW2586-A_x.jpg',
                prod_code: 'zww2586TM',
                prod_sku: 'T14176C'
            }
        ],
        prod_3: [
            {
                prod_name: 'Horticultural Fleece',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/horticultural-fleece/kww2007TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/HORT-KWW2007-A_x.jpg',
                prod_code: 'kww2007TM',
                prod_sku: 'T18090'
            }
        ],
        lucky_dip: [
        // veg plants
        ]
    },
    'fruit_plants': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; High Potash Feed - Formula 4',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-high-potash-feed-formula-4/kww2324TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-KWW2552-A_x.jpg',
                prod_code: 'kww2324TM',
                prod_sku: 'T13839C'
            }
        ],
        prod_2: [
            {
                prod_name: 'Crop Protection Net',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/crop-protection-net/kww2298TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CROP-KWW2298-A_x.jpg',
                prod_code: 'kww2298TM',
                prod_sku: 'T14068'
            },
            {
                prod_name: 'Birdscare Humming Line',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/birdscare-humming-line/kww2438TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/BIRD-KWW2438-A_x.jpg',
                prod_code: 'kww2438TM',
                prod_sku: 'T18107'
            }
        ],
        prod_3: [],
        lucky_dip: [
        ]
    },
    'fruit_trees': {
        prod_1: [
            {
                prod_name: 'Tree Stake &amp; Tie Pack',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/tree-stake-and-tie-pack/cww3409TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/TREE-CWW3409-A_x.jpg',
                prod_code: 'cww3409TM',
                prod_sku: 'T14281P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Chempak&reg; High Potash Feed - Formula 4',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-high-potash-feed-formula-4/kww2324TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-KWW2552-A_x.jpg',
                prod_code: 'kww2324TM',
                prod_sku: 'T13839C'
            },
            {
                prod_name: 'Pruning Saw',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/tools/spear-and-jackson-pruning-saw/kww2594TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PRUN-KWW2594-A_x.jpg',
                prod_code: 'kww2594TM',
                prod_sku: 'T11551'
            }
        ],
        prod_3: [],
        lucky_dip: [
        ]
    },
    'flower_seeds': {
        prod_1: [
            {
                prod_name: 'Plant Labels',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/plant-labels/kww2036TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PLAN-KWW2036-A_x.jpg',
                prod_code: 'kww2036TM',
                prod_sku: 'T14383'
            }
        ],
        prod_2: [
            {
                prod_name: 'Vermiculite - Fine Grade',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/vermiculite-fine-grade/kww2020TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/VERM-KWW2020-A_x.jpg',
                prod_code: 'kww2020TM',
                prod_sku: 'T13832'
            },
            {
                prod_name: 'Propagator - Electric Windowsill Propagator Super 7',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/propagator-electric-windowsill-propagator-super-7/kww2058TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PROP-KWW2058-A_x.jpg',
                prod_code: 'kww2058TM',
                prod_sku: 'T13134'
            }
        ],
        prod_3: [],
        lucky_dip: [
        ]
    },
    'vegetable_seeds': {
        prod_1: [
            {
                prod_name: 'Module Trays',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/module-trays/p89640TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/MODU-P89640-A_x.jpg',
                prod_code: 'p89640TM',
                prod_sku: 'T45103P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Plant Labels',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/seed-sowing-and-propagation/plant-labels/kww2036TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PLAN-KWW2036-A_x.jpg',
                prod_code: 'kww2036TM',
                prod_sku: 'T14383'
            },
            {
                prod_name: 'Windowsill Planter',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/windowsill-salad-herb-planter/aww2512TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/WIND-AWW2512-A_x.jpg',
                prod_code: 'aww2512TM',
                prod_sku: 'T13904'
            }
        ],
        prod_3: [],
        lucky_dip: [
        ]
    },
    'flower_plants': {
        prod_1: [
            {
                prod_name: 'Incredibloom&reg;',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-incredibloom/t47963TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/INCR-T47963-A_x.jpg',
                prod_code: 't47963TM',
                prod_sku: 'T47963P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Tower Pot',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/plant-protection-and-support/tower-pot/t47569TM',
                prod_image: 'http://search.thompson-morgan.com/thumb.php?f=http%3a%2f%2fwww.tandmpics.com%2fpictures%2ftmuk%2f_l%2ftowe-t47569-a_l.jpg&s=180',
                prod_code: 't47569TM',
                prod_sku: 'T47569P'
            },
            {
                prod_name: 'Easy Fill Hanging Basket',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/easy-fill-basket/t47549TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/EASY-T47549-A_x.jpg',
                prod_code: 't47549TM',
                prod_sku: 'T47549P'
            },
            {
                prod_name: 'Organic, Pet Friendly Super Slug Killer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/super-slug-killer/t46413TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/SUPE-T46413-A_x.jpg',
                prod_code: 't46413TM',
                prod_sku: 'T52539'
            }
        ],
        prod_3: [],
        lucky_dip: [
        ]
    },
    'flower_bulbs': {
        prod_1: [
            {
                prod_name: 'Incredibloom&reg;',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-incredibloom/t47963TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/INCR-T47963-A_x.jpg',
                prod_code: 't47963TM',
                prod_sku: 'T47963P'
            }
        ],
        prod_2: [
            {
                prod_name: 'Easy Fill Hanging Basket',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/easy-fill-basket/t47549TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/EASY-T47549-A_x.jpg',
                prod_code: 't47549TM',
                prod_sku: 'T47549P'
            },
            {
                prod_name: 'Organic, Pet Friendly Super Slug Killer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/super-slug-killer/t46413TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/SUPE-T46413-A_x.jpg',
                prod_code: 't46413TM',
                prod_sku: 'T52539'
            }
        ],
        prod_3: [],
        lucky_dip: [
        ]
    },
    'vegetable_plants': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Vegetable Fertiliser',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-vegetable-fertiliser/t11912TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-T11912-A_x.jpg',
                prod_code: 't11912TM',
                prod_sku: 'T14376C'
            }
        ],
        prod_2: [
            {
                prod_name: 'Mini Greenhouse Cloche',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/greenhouses-and-equipment/mini-greenhouse-cloche/aww2605TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/GREE-AWW2605-A_x.jpg',
                prod_code: 'aww2605TM',
                prod_sku: 'T13042P'
            },
            {
                prod_name: 'Organic, Pet Friendly Super Slug Killer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/pest-and-disease-control/super-slug-killer/t46413TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/SUPE-T46413-A_x.jpg',
                prod_code: 't46413TM',
                prod_sku: 'T52539'
            }
        ],
        prod_3: [],
        lucky_dip: [
        // veg plants
        ]
    },
    'tomato': {
        prod_1: [
            {
                prod_name: 'Chempak&reg; Soluble Tomato Food',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/fertilisers/chempak-soluble-tomato-food/kww2558TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/CHEM-KWW2558-A_x.jpg',
                prod_code: 'kww2558TM',
                prod_sku: 'T47553X'
            }
        ],
        prod_2: [
            {
                prod_name: 'Tomato Auto-Waterer',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/watering-and-irrigation/tomato-auto-waterer/p92320TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/TOMA-P92320-A_x.jpg',
                prod_code: 'p92320TM',
                prod_sku: 'T13053P'
            },
            {
                prod_name: 'Patio Vegetable Planters',
                prod_url: 'http://www.thompson-morgan.com/garden-supplies/baskets-and-containers/patio-vegetable-planters/kww2443TM',
                prod_image: 'http://www.thompson-morgan.com/static-images/tandm/qubit/recommendations/PATI-KWW2443-A_x.jpg',
                prod_code: 'kww2443TM',
                prod_sku: 'T14070'
            }
        ],
        prod_3: [],
        lucky_dip: [
        // veg plants
        ]
    }
};

// set potatoes, tomato and onions_garlic to veg plants lucky dip, to save repetition in the json.
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

console.log(exp.vars.just_added);
console.log(exp.vars.this_product);

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
    -webkit-box-shadow: 0px 1px 8px 1px rgba(50, 50, 50, 0.5); \
    -moz-box-shadow:    0px 1px 5px 1px rgba(50, 50, 50, 0.5); \
    box-shadow:         0px 1px 8px 1px rgba(50, 50, 50, 0.5); \
} \
#addBasketSuccessDIV .popUpTop img { \
    display: none; \
} \
#addBasketSuccessDIV .popUpMiddle { \
    background: transparent !important; \
    padding: 5px 30px; \
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
    width: 600px; \
    text-align: left; \
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
    padding: 40px 0 0 0; \
} \
.awa-basket-flow-recommended h4 { \
    text-align: left; \
    color: #000; \
    font-size: 15px; \
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
    display: block; \
    line-height: 20px !important;  \
    padding: 0 6px !important;  \
    font-weight: bold; \
    margin: 6px 0 0 0; \
    border: 0; \
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
            '<div class="awa-basket-flow-recommended__product"> \
                <a href="'+prod.prod_url+'"><img src="'+prod.prod_image+'" /></a> \
                <p><a href="'+prod.prod_url+'">'+prod.prod_name+'<br /><span class="awa-basket-flow-price" data-awa-id="'+prod.prod_sku+'">&nbsp;<span></a></p> \
                <form action="/public/QLOnline/product?portal:componentId=32485735&amp;portal:type=action&amp;portal:isSecure=false&amp;productCode='+prod.prod_code+'" method="post"> \
                    <input name="addToBasket" value="true" type="hidden"><input name="quantity" value="1" type="hidden"> \
                    <input name="skuCodes" value="'+prod.prod_sku+'" type="hidden"> \
                    <input class="awa-basket-flow-recommended__submit" type="submit" value="Add to basket" name="submit" /> \
                </form> \
                <!-- <a class="awa-basket-flow-recommended__button" data-awa-recommended-id="1">Add to basket</a>--> \
            </div>'
        );
    });

    html = slots[0] + slots[1] + slots[2];
    exp.vars.recommendedHTML = $(html);
    $('.awa-basket-flow-recommended').append( exp.vars.recommendedHTML );
    exp.func.scrapePrices(products);
    $('.awa-basket-flow-buttons,.awa-basket-flow-recommended').bind('click',function(){
        //return false;
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
                var price = $.trim( $resp.find('.productInfoLeft .price:eq(0)').text() );
                if( price ) {
                    exp.vars.recommendedHTML.find('[data-awa-id="'+prod.prod_sku+'"]').html( price );
                }
            }
        });
    });
};

// Make DOM changes to the modal
exp.func.modalDOMChanges = function() {
    var $heading = ($('#addBasketSuccessDIV .header3Class').length !== 0) ?
                    $('#addBasketSuccessDIV .header3Class') : $('#addBasketSuccessDIV h3');

    $('#addBasketSuccessDIV .closeButton').text('X');

    $('#addBasketSuccessDIV p').next('a').remove();
    $('#addBasketSuccessDIV p').replaceWith(
        '<div class="awa-basket-flow-buttons"> \
            <a href="#" class="awa-basket-flow-buttons__continue" onmousedown="dismissAddToBasketPopup();return false;">Continue Shopping</a> \
            <a href="/basket" class="awa-basket-flow-buttons__proceed">Proceed to Checkout</a> \
        </div> \
        <div class="awa-basket-flow-recommended"> \
            <h4>Frequently bought with '+$heading.text()+'. \
        </div>'
    );

    $heading.append(
        ' was added to your basket'
    );

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
    exp.func.modalDOMChanges();

    // Recommend the poducts
    // if AJAX is being used for the basket filtering, wait till it is ready
    exp.func.recommendProducts( exp.vars.product_type );

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

/*
Use this to grab the meta data
var str = '';
for(var prod in exp.json ) {
    exp.json[prod]['prod_3'].forEach(function(prod){
        //console.log(prod['prod_url']);
        $.ajax( {
            async: false,
            url: prod.prod_url,
            success: function(resp) {
                var $resp = $(resp);
                var sku = $resp.find('[name="skuCodes"]:eq(0)').val();
                var code = $resp.find('#addToBasket').attr('action').match(/(productCode=)([a-zA-Z0-9]+)/)[2];
                str += prod.prod_name + ' ' + code + ' ' + sku + '\n';
            }
        });
    });
}
console.log(str);

*/