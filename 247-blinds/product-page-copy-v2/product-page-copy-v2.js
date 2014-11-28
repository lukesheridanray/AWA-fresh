//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// 'console' is undefined in IE9 when dev tools are not open, so any calls to
// console.log() stop execution of Javascript.  Let's thus define an empty
// function for console.log when 'console' is undefined.
var console=console||{"log":function(){}};

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Product Page Copy 2 - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#ac-description > .panel-body');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'copy': {
        'http://www.247blinds.co.uk/ecowood-pure-white-venetian-blind':
        '<p>Bring a touch of New England chic into your home, with a solid Ecowood Venetian blind in Pure White, a matt white colour. This sophisticated blind is made to order to fit your window perfectly and normally arrives in around a week.</p> \
        <p><p>All our Ecowood Venetian blinds come ready to fit with a robust, co-ordinating headrail, woven control cords and all fixings. Not sure about colour or style? Ask for a free sample before you order</p>',

        'http://www.247blinds.co.uk/ecowood-barley-venetian-blind':
        '<p>Bring a touch of New England chic into your home, with a solid Ecowood Venetian blind in Barley, a rich, natural wood colour. This sophisticated blind is made to order to fit your window perfectly and normally arrives in around a week. </p> \
        <p>All our Ecowood Venetian blinds come ready to fit with a robust, co-ordinating headrail, woven control cords and all fixings. Not sure about colour or style? Ask for a free sample before you order</p>',

        'http://www.247blinds.co.uk/ecowood-deluxe-pure-white-venetian-blind':
        '<p>Bring a touch of New England chic into your home, with a solid Ecowood Deluxe Venetian blind in Pure White, a matt white colour. The deluxe version of this blind features vertical ladder tapes for a designer look. It is made to order to fit your window perfectly and normally arrives in around a week. </p> \
        <p>All our deluxe Ecowood Venetian blinds come ready to fit with a robust, co-ordinating headrail, woven control cords and all fixings. Not sure about colour or style? Ask for a free sample before you order</p>',

        'http://www.247blinds.co.uk/ecowood-cotton-venetian-blind':
        '<p>Bring a touch of New England chic into your home, with a solid Ecowood Venetian blind in Cotton, a gentle, off-white colour with a matt finish.This sophisticated blind is made to order to fit your window perfectly and normally arrives in around a week. </p> \
        <p>All our Ecowood Venetian blinds come ready to fit with a robust, co-ordinating headrail, woven control cords and all fixings. Not sure about colour or style? Ask for a free sample before you order</p>',

        'http://www.247blinds.co.uk/ecowood-cream-venetian-blind':
        '<p>Bring a touch of New England chic into your home, with a solid Ecowood Venetian blind in Cream, a pale, off-white colour with a matt finish. This sophisticated blind is made to order to fit your window perfectly and normally arrives in around a week. </p> \
        <p>All our Ecowood Venetian blinds come ready to fit with a robust, co-ordinating headrail, woven control cords and all fixings. Not sure about colour or style? Ask for a free sample before you order</p>',

        'http://www.247blinds.co.uk/origin-basic-white-venetian-blind':
        '<p>Venetian blinds are a timeless look that suits most rooms and give you excellent privacy as well as total control of light. This Venetian Blind in Basic White is from our Origin collection. It is made to order to fit your window perfectly and normally arrives in around a week. </p> \
        <p>All our Origin Venetian blinds have high quality fittings to ensure your blind opens and closes smoothly and come ready to fit with all fixings included. Not sure about colour or style? Ask for a free sample before you order</p>',

        'http://www.247blinds.co.uk/origin-brushed-silver-venetian-blind':
        '<p>Venetian blinds are a timeless look that suits most rooms and give you excellent privacy as well as total control of light. This Venetian Blind in a cool brushed silver finish is from our Origin collection. It is made to order to fit your window perfectly and normally arrives in around a week. </p> \
        <p>All our Origin Venetian blinds have high quality fittings to ensure your blind opens and closes smoothly and come ready to fit with all fixings included. Not sure about colour or style? Ask for a free sample before you order.</p>',

        'http://www.247blinds.co.uk/rimini-white-roller-blind':
        '<p>Smart, neat, and practical, the clean lines of a roller blind suit any room. Made from a high quality plain fabric in a white colour, this roller blind from our Rimini collection is made to order for your window and normally arrives in around a week. </p> \
        <p>When ordering, please note that the roller mechanism means that the cloth of your blind is always 3-4cm narrower than the overall width. See measuring guide below for more details. Not sure about colour, texture or pattern? Ask for a free sample before you order.  </p>',

        'http://www.247blinds.co.uk/ajanta-raven-roller-blind':
        '<p>Smart, neat, and practical, the clean lines of a roller blind suit any room. Made from a striking ‘crackle-effect’ fabric, this blackout roller blind from our Carmela collection is made to order for your window and normally arrives in around a week. </p> \
        <p>When ordering, please note that the roller mechanism means that the cloth of your blind is always 3-4cm narrower than the overall width. See measuring guide below for more details. Not sure about colour, texture or pattern? Ask for a free sample before you order.  </p>',

        'http://www.247blinds.co.uk/rimini-white-vertical-blind':
        '<p>Add height and elegance to your room with a Vertical Blind. Louvres are made high quality fabric in a plain white colour, and have weighted hems. This contemporary style blind from our Rimini collection is made to order to fit your window perfectly and normally arrives in less than a week.</p> \
        <p>All our Vertical Blinds come ready to fit with a slimline, Easyglide headrail, matching draw rod to tilt and open the vanes and all the fixings you need. Not sure about colour, texture or pattern? Ask for a free sample before you order.  </p>'
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    #someSelector { color: #f00; } \
    #header .tag-line { color: #f00; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
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

// This function waits till a function is available, then runs a callback function
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
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Some example DOM manipulation...

    // Update copy
    var page_url = window.location.href.match(/[^?]+/)[0];
    var copy = exp.vars.copy[page_url];
    if (copy) {
        $('#ac-description > .panel-body').html(copy);
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);