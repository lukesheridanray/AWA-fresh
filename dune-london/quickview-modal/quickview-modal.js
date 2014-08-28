//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*
Notes
-----

"Quick View Modal for listed categories - don't know URL of QV
All Boots, Shoes and Sandals categories for both Mens and Ladies departments."

"See wireframe.

1. The main change is to scrape additional details from Product Information tabs on the product pages, then to expose this on the QV modal.

This should be presented as on the wireframe in two columns, using the existing QV font style.

The wireframe shows the following configuration:
Heel (Type)
Heel Height
Heel Shape
Material
Lining Material
Sole Material

See for example www.dunelondon.com/alina-pointed-toe-reptile-print-mid-heel-court-shoe-0085503940156311/

In some cases, Heel Height is not available but Boot Height is e.g. www.dunelondon.com/tina-strap-and-buckle-trim-knee-high-leather-boot-0089501020018484/



target - UK-EN

100% (50/50)
GA 4
"Revenue Per Visitor
Number of Transactions
Number of Views on Product Pages (Regex to identify product pages in GA : .*[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9].*)"

"

*/

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Quick view modal experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.ajxProductHolder');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'viewProdLink': $('.viewproductdetaillink'),
    'prodURL': $('.viewproductdetaillink a').attr('href')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.product-summary-info { width: 325px; list-style: none; overflow: auto; } \
.product-summary-info div { width: 50%; float: left;  } \
.product-summary-info ul { width: 100%; clear: both; margin: 0; padding: 0; } \
.product-summary-info li { list-style: none; display: block; float: left; padding: 2px 0; } \
.product-summary-info .label { width: 60%; } \
.product-summary-info .value { width: 40%; } \
.product-summary-info { color: #666; margin: 10px 0 0 0; } \
#prodLINKS { padding: 0 !important; margin: 0 !important; } \
.viewproductdetaillink a { padding: 0 !important; border: 0 !important; text-decoration: underline !important; } \
.viewproductdetaillink a:hover { text-decoration: none !important; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

exp.func.buildSummaryDOM = function( prodData ) {
    var markup;
    var heelType = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Heel:';
    });
    var material = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Material:';
    });;
    var heelHeight = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Heel Height:';
    });;
    var bootHeight = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Boot Height:';
    });;
    var lining = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Lining Material:';
    });;
    var heelShape = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Heel Shape:';
    });;
    var sole = prodData.find('ul').filter(function(){
        return $(this).find('.label').text() === 'Sole Material:';
    });
    markup = '<div>'+
             (heelType.length ? '<ul><li class="label">Heel Type:</li><li class="value">'+heelType.find('li:eq(1)').text()+'</li></ul>' : '')+
             (heelHeight.length ? '<ul><li class="label">Heel Height:</li><li class="value">'+heelHeight.find('li:eq(1)').text()+'</li></ul>' : '')+
             (bootHeight.length ? '<ul><li class="label">Boot Height:</li><li class="value">'+bootHeight.find('li:eq(1)').text()+'</li></ul>' : '')+
             (heelShape.length ? '<ul><li class="label">Heel Shape:</li><li class="value">'+heelShape.find('li:eq(1)').text()+'</li></ul>' : '')+
             '</div><div>'+
             (material.length ? '<ul><li class="label">Material:</li><li class="value">'+material.find('li:eq(1)').text()+'</li></ul>' : '')+
             (lining.length ? '<ul><li class="label">Lining Material:</li><li class="value">'+lining.find('li:eq(1)').text()+'</li></ul>' : '')+
             (sole.length ? '<ul><li class="label">Sole Material:</li><li class="value">'+sole.find('li:eq(1)').text()+'</li></ul>' : '')+
             '</div>';
    return '<div class="product-summary-info">'+markup+'</div>';
};

exp.func.scrapeProduct = function( url ) {
    var prodData;
    var scrapePromise = $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(response) {
            prodData = $(response).find('.prodaccordion .prodSpecs');
            $('#prodLINKS').before(
                exp.func.buildSummaryDOM( prodData )
            );
        },
        'error': function(response) {
            console.log('silently failed the AJAX request:');
            console.log(response);
            prodData = false;
        }
    });
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    $('#prodLINKS').html( this.vars.viewProdLink );
    
    exp.func.scrapeProduct( this.vars.prodURL );
    
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);