//
// CGIT Optimizely Boilerplate - version 0.1.3
//

/*

Order complete / revenue per visitor

"The intention is to show a VAT qualifier to all visitors within the experiment that enter on the site regardless of which page they enter on.

The qualifier will be in the form of an overlay screen with two buttons asking the users to select if they would like to see VAT included or excluded from the prices on the site.

After selecting one of the options all pricing on all page of the site should thereafter be displayed to the visitors according to the selection that was made."

"""Welcome to TTS-Group.co.uk""

""Please show me prices including VAT""

""Please show me prices excluding VAT"""

1% (50/50)

*/

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('VAT experiment trigger - dev 0.1');


// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'modalContent': '<div id="vat-qualifier" class="vat-qualifier--hidden"> \
                         <img src="//cdn.optimizely.com/img/174847139/125b0dffb73c49b1be76e5b83a01927e.png" width="94" height="75" alt="TTS-Group" /> \
                         <p class="vat-qualifier--title">Welcome to TTS-Group.co.uk</p> \
                         <div class="vat-qualifier--buttons"> \
                            <a tabindex="0" class="vat-option button green" data-vat="inc" href="#">Please show me prices<br /> \
                            including VAT</a> \
                            <a tabindex="1" class="vat-option button green" data-vat="ex" href="#">Please show me prices<br /> \
                            excluding VAT</a> \
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
#vat-qualifier .vat-qualifier--buttons .button { width: 187px; height: 47px; padding-top: 5px; float: left; line-height: 20px; font-size: 17px; } \
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
    // add visitor to segment so that they will see the actual experiment
    // once segmented they will no longer see this experiment
    alert('segment');
    if(vat === 'ex') {
        // the visitor chooses to display ex vat, so bucket them to variation 1
        alert('bucket into ex');
    } else {
        // the visitor chooses to display inc vat, so bucket them to variation 2
        alert('bucket into inc');
    }
    // refresh the page so that user can start seeing the relevant experiment
    window.location = window.location;
};


// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
        
    // append modal content to head
    $('body').append( this.vars.modalContent );

    // add event listener to buttons
    $('.vat-option').bind('click',function(){
        var vatOption = $(this).attr('[data-vat]');
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