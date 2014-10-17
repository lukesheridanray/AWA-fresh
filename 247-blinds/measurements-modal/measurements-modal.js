//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*

www.247blinds.co.uk/checkout/onepage/success
rev per visitor

all URLs ending in blind$*/

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Measurements modal - 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('[data-identifier="recess-exact"]');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'exactImage': '//cdn.optimizely.com/img/174847139/718032f0bfeb4f6aa96150f4b67c143d.png',
    'recessImage': '//cdn.optimizely.com/img/174847139/f16621fa13aa40f78bc616690f137e96.png',
    'modalTrigger': $('[data-identifier="recess-exact"]'),
    'modalContent': ' \
<div class="modal fade" id="modal-help-guide" tabindex="-1" role="dialog" aria-labelledby="modalHelp" aria-hidden="true"> \
  <div class="modal-dialog"> \
    <div class="modal-content modal-content-here"> \
        <div class="modal-header"> \
            <button type="button" class="btn btn-danger btn-xs btn-border pull-right" data-dismiss="modal" aria-hidden="true"> \
                <span>Close</span> \
                <span class="glyphicon glyphicon-remove"></span> \
            </button> \
            <h4 class="modal-title">BLINDS MEASURING GUIDE</h4> \
        </div> \
        <div class="modal-body std"> \
            <h5>How to measure your blinds</h5> \
            <div class="opt-modal-content-block"> \
                <div class="opt-modal-content-main"> \
                    <p>It\'s easy to order 247 made-to-measure blinds, as you only need two measurements - the width and the drop. Use a metal tape \
                    measure as cloth and plastic tape measures can bend and stretch.</p> \
                </div> \
                <div class="opt-modal-content-aside"> \
                    <h6>MEASURING TIP</h6> \
                    <p>Please double check all your measurements before you place your order as your blind is made to the exact size you request.</p> \
                    <p>If you have any other questions about measuring, please call us on 0845 4744 247</p> \
                </div> \
            </div><!-- .opt-modal-content-block --> \
            <div class="opt-modal-content-block"> \
                <div class="opt-modal-content-main"> \
                    <h5>STEP 1 - DECIDE ON THE TYPE OF BLIND YOU WANT</h5> \
                    <p>First, decide if you want your blind to sit inside your window (Recess) or be mounted outside the window recess (Exact).</p> \
                    <p>Before ordering, please check that your window opens outwards and that there are no obstructions such as tiling or a dado rail \
                    that could prevent the blind from being opened or closed easily.</p> \
                    <p>If there are, or if your window has a shallow recess (less than 6cm deep), please order an Outside Mounted Blind (Exact).</p> \
                </div> \
                <div class="opt-modal-content-aside"> \
                    <h6>DESIGNER\'S TIP</h6> \
                    <p>Choose inside mounted blinds if you prefer a finished, contemporary look for your home.</p> \
                    <p>Choose outside mounted blinds if you like a more traditional style. They are also ideal if your windows are not exactly square and straight.</p> \
                </div> \
            </div><!-- .opt-modal-content-block --> \
            <div class="opt-modal-content-block"> \
                <h5>STEP 2 - TAKE THE MEASUREMENTS FOR YOUR BLIND</h5> \
                <div class="opt-modal-content-col-left"> \
                    <h5>INSIDE MOUNTED BLINDS (RECESS)</h5> \
                </div> \
                <div class="opt-modal-content-center-float"> \
                    <strong>OR</strong> \
                </div> \
                <div class="opt-modal-content-col-left"> \
                    <h5>OUTSIDE MOUNTED BLINDS (EXACT)</h5> \
                </div> \
            </div><!-- .opt-modal-content-block --> \
            <div class="opt-modal-content-block"> \
                <h5>PLEASE REMEMBER TO CHECK YOUR MEASURMENTS BECAUSE THESE ARE CUSTOM MADE BLINDS. THE MAKERS ACCEPT NO RESPONSABILITY FOR ERRORS IN ORDERING.</h5> \
            </div><!-- .opt-modal-content-block --> \
        </div><!-- .modal-body --> \
    </div> \
  </div> \
</div>'
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

    // append new modal content to body
    $('body').append( this.vars.modalContent );

    this.vars.modalTrigger.attr('data-target', '#modal-help-guide');

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);