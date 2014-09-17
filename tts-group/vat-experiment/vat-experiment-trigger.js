//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('VAT experiment trigger - 0.5');


// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'modalContent': '<div id="vat-qualifier" class="vat-qualifier--hidden"> \
                         <img src="//cdn.optimizely.com/img/174847139/125b0dffb73c49b1be76e5b83a01927e.png" width="94" height="75" alt="TTS-Group" /> \
                         <p class="vat-qualifier--title">Welcome to the TTS website</p> \
                         <div class="vat-qualifier--buttons"> \
                            <a tabindex="0" class="vat-option button green" data-vat="inc" href="#">Please show me prices<br /> \
                            <strong>including</strong> VAT</a> \
                            <a tabindex="1" class="vat-option button green" data-vat="ex" href="#">Please show me prices<br /> \
                            <strong>excluding</strong> VAT</a> \
                         </div> \
                     </div>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#vat-qualifier { padding: 10px; } \
#vat-qualifier img { float: left; } \
#vat-qualifier .vat-qualifier--title { float: left; line-height: 70px; font-weight: bold; font-size: 20px; color: #3854B8; margin: 0 0 0 22px; padding: 0; } \
#vat-qualifier .vat-qualifier--buttons { clear: both; overflow: auto; padding: 15px 0 0 0; } \
#vat-qualifier .vat-qualifier--buttons .button { background-image: url("//cdn.optimizely.com/img/174847139/989d5a7f9b7e4509bc028a1504ff26bc.png"); text-align: center; width: 187px; height: 47px; padding-top: 5px; float: left; line-height: 20px; font-size: 17px; } \
#vat-qualifier .vat-qualifier--buttons .button + .button { margin: 0 0 0 15px; } \
#vat-qualifier.vat-qualifier--hidden { display: none; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

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

exp.func.openModal = function() {
    $('#vat-qualifier').removeClass('vat-qualifier--hidden');
    $.fancybox({
        'autoScale': true,
        'speedIn': 500,
        'speedOut': 300,
        'width': 429,
        'height': 186,
        'autoDimensions': true,
        'centerOnScroll': true,
        'hideOnOverlayClick': false,
        'href': '#vat-qualifier',
        'showCloseButton': false
    });
};

exp.func.chooseVatOption = function( vat ) {
    // add visitor to dimension
    window.optimizely.push(['setDimensionValue', 1915070542, 'seen']);
    if(vat === 'ex') {
        // bucket the user to the ex VAT variation
        window.optimizely.push(['bucketVisitor', 1931610162, 1901990023]);
    } else {
        // bucket the user to the inc VAT variation
        window.optimizely.push(['bucketVisitor', 1931610162, 1891010497]);
    }
    // activate experiment
    window.optimizely.push(['activate', 1931610162]);
    // close fancybox
    $.fancybox.close();
};


// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    window.optimizely = window.optimizely || [];

    // if user has already been bucketed then we simply activate the experiment and return false
    if ( window.optimizely.data.visitor.dimensions[1915070542] === 'seen' ) {
        window.optimizely.push(['activate', 1931610162]);
        console.log('user already bucketed');
        return false;
    }
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
        
    // append modal content to head
    $('body').append( this.vars.modalContent );

    // add event listener to buttons
    $('.vat-option').bind('click',function(){
        var vatOption = $(this).attr('data-vat');
        exp.func.chooseVatOption( vatOption );
    });
    
    // load modal once fancybox is available
    this.func.waitForFunction($.fancybox, this.func.openModal);

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);