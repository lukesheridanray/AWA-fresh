// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var exp = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Product page accordion tabs - 1.0.2');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('#holder_PRODUCT');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
    'prodSpecs': $('#prodaccordion .prodSpecs'),
    'is_footwear': (dataLayer[0]['product']['category'] === 'Bags' || dataLayer[0]['product']['category'] === 'Accessories') ? false : true
};
    
exp.vars.specItems = {
    'heelHeight': exp.vars.prodSpecs.find('li:contains("Heel Height:")'),
    'heelShape': exp.vars.prodSpecs.find('li:contains("Heel Shape:")'),
    'heel': exp.vars.prodSpecs.find('li:contains("Heel:")'),
    'colour': exp.vars.prodSpecs.find('li:contains("Colour:")'),
    'material': exp.vars.prodSpecs.find('li:contains("Material:")').filter(function() {
        return $(this).text() == 'Material:';
    }),
    'liningMaterial': exp.vars.prodSpecs.find('li:contains("Lining Material:")'),
    'soleMaterial': exp.vars.prodSpecs.find('li:contains("Sole Material:")'),
    'bootHeight': exp.vars.prodSpecs.find('li:contains("Boot Height:")'),
    'brand': exp.vars.prodSpecs.find('li:contains("Brand:")'),
    'code': exp.vars.prodSpecs.find('li:contains("Code:")')
}

// Styles
// String containing the CSS for the experiment
exp.css = '.customaccordion{margin:0;padding:0;border-bottom:1px solid #ccc} \
.customaccordion h3{font-size:11px!important;padding:7px 0;border-top:1px solid #ccc;display:block;overflow:hidden;position:relative;cursor:pointer;text-transform:uppercase;color:#666;background: url(/images/core/acc_arrow-r.gif?Lo0P=3e2205fa4d88488a4fce09f030d21f02167)  no-repeat 365px 9px} \
.customaccordion h3.collapsed{background: url(/images/core/acc_arrow-d.gif?Lo0P=eb7e1cead03f43df2886498c4cec361c105)  no-repeat 365px 11px} \
.customaccordion h3:focus{outline:0} \
.customaccordion>div{padding:5px 0 10px 0;font-size:12px;color:#666;font-size:12px;display:none}';

// Functions
// Object containing functions for use in the experiment
// Some helpful functions are included below
exp.func = exp.func || {};

// This function waits till a DOM element is available, then runs a callback
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

// This function waits till a function is available, then runs a callback
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

// Init function
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // DOM manipulation...

if(exp.vars.is_footwear) {

    // append into new divs in the order required, checking for existence each time
    
    var newLeftCol = $('<div class="gl2"></div>'),
        newRightCol = $('<div class="prodSpecCol gr1" /></div>');
    
    if( exp.vars.specItems.heelHeight.length ) { exp.vars.specItems.heelHeight.parent('ul').appendTo( newLeftCol); }
    
    if( exp.vars.specItems.heelShape.length ) { exp.vars.specItems.heelShape.parent('ul').appendTo( newLeftCol ); }
    
    if( exp.vars.specItems.heel.length ) { exp.vars.specItems.heel.parent('ul').appendTo( newLeftCol); }
    
    if( exp.vars.specItems.colour.length ) { exp.vars.specItems.colour.parent('ul').appendTo( newLeftCol ); }
    
    if( exp.vars.specItems.bootHeight.length ) { exp.vars.specItems.bootHeight.parent('ul').appendTo( newLeftCol ); }
    
    if( exp.vars.specItems.material.length ) { exp.vars.specItems.material.parent('ul').appendTo( newRightCol ); }
    
    if( exp.vars.specItems.liningMaterial.length ) { exp.vars.specItems.liningMaterial.parent('ul').appendTo( newRightCol ); }
    
    if( exp.vars.specItems.soleMaterial.length ) { exp.vars.specItems.soleMaterial.parent('ul').appendTo( newRightCol ); }
    
    if( exp.vars.specItems.brand.length ) { exp.vars.specItems.brand.parent('ul').appendTo( newRightCol ); }
    
    if( exp.vars.specItems.code.length ) { exp.vars.specItems.code.parent('ul').appendTo( newRightCol ); }
    
    this.vars.prodSpecs.find('.prodSpecCol:eq(0)').prepend( newLeftCol );
    this.vars.prodSpecs.find('.prodSpecCol:eq(1)').prepend( newRightCol );

}
    // show product info tab
    this.vars.prodSpecs.parent('div').show(0).prev('h3').addClass('collapsed');

    // copy accordion and create new accordion
    
    var customAccordion = $('<div class="customaccordion" /></div>');
    customAccordion.html( $('.prodaccordion').html() );
    
    $('.prodaccordion').replaceWith(customAccordion);
    
    // Event listener for custom accordions
    $('.customaccordion > h3').bind('click', function(e) {
        $(this).toggleClass('collapsed').next('div').slideToggle('slow');
        return false;
    });
    
};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
exp.init();