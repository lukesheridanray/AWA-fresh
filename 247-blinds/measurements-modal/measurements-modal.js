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
console.log('Measurements modal - 0.7');

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
    'modalTrigger': $('[data-identifier="recess-exact"]')
};
exp.vars.modalContent = ' \
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
            <div class="opt-modal-content-block"> \
                <h5>How to measure your blinds for exact or recess fittings</h5> \
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
                <h5>STEP 1 - DECIDE ON THE TYPE OF BLIND YOU WANT - EXACT OR RECESS</h5> \
                <div class="opt-modal-content-main"> \
                    <p>First, decide if you want your blind to sit inside your window (Recess) or be mounted outside the window recess (Exact).</p> \
                    <p>Before ordering, please check that your window opens outwards and that there are no obstructions such as tiling or a dado rail \
                    that could prevent the blind from being opened or closed easily.</p> \
                    <p>If there are obstructions, if the widow opens inwards or if your window has a shallow recess (less than 6cm deep), please order an Outside Mounted Blind (Exact) or call us on 0845 4744 247..</p> \
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
                    <h5>INSIDE MOUNTED BLINDS</h5> \
                    <div class="opt-modal-content-caption" style="width:218px"> \
                        <img src="'+exp.vars.recessImage+'" alt="" width="218" height="226" /> \
                        <p>(RECESS)</p> \
                    </div> \
                    <div class="opt-modal-main-info-wrap"> \
                        <p>Measure the width <strong>inside</strong> your window frame from side to \
                        side and top to bottom.</p> \
                        <p><strong>(Note: If the recess is less than 6cm (2.5") deep, the window \
                        opens inwards or there are other obstructions the blind may have to be fitted \
                        outside the recess, please call us first on 0845 4744 247 if this is the case)</strong></p> \
                        <p>It is important to give us the precise measurements, as we make your \
                        blind very slightly smaller to fit inside the recess.</p> \
                    </div> \
                    <div class="opt-modal-content-tip"> \
                        <p><strong>TIP</strong><br /> \
                        <p>Take measurements in several places, as windows are often not exactly \
                        straight and square. When you order Inside Mounted Blinds type in the \
                        <strong>smallest</strong> measurement (except Roller Blinds - see below).</p> \
                    </div> \
                    <p><strong>Additional information</strong></p> \
                    <p><a href="/roller-blinds" target="_blank">Roller blinds</a></p> \
                    <p>Please note that the width of the cloth on a roller blind is 3.5-4cm \
                    narrower than the overall width of the blind. This is because the roller \
                    mechanism is wider than the cloth.</p> \
                    <p>If you are ordering a roller blind to fit inside a recess with a \
                    side mounting please state the exact measurement at the top of the window, \
                    as this is where the header will be fitted.</p> \
                </div> \
                <div class="opt-modal-content-center-float"> \
                    <strong>OR</strong> \
                </div> \
                <div class="opt-modal-content-col-right"> \
                    <h5>OUTSIDE MOUNTED BLINDS</h5> \
                    <div class="opt-modal-content-caption" style="width:215px"> \
                        <img src="'+exp.vars.exactImage+'" alt="" width="215" height="226" /> \
                        <p>(EXACT)</p> \
                    </div> \
                    <div class="opt-modal-main-info-wrap"> \
                        <p>Decide how much you want your blind to overlap the wall or window frame on each side. \
                        We usually suggest an overlap of 6cm (2.5") on all sides.</p> \
                        <p>Measure the outside of your window frame from side to side <strong>plus</strong> the \
                        overlap on both sides, and top to bottom <strong>plus</strong> the overlap at the top and \
                        bottom. Ideally the blind should not obscure the window when it\'s raised.</p> \
                    </div> \
                    <div class="opt-modal-content-tip"> \
                        <p><strong>TIP</strong><br /> \
                        <p>Take measurements in several places, as windows are often not exactly \
                        straight and square. When you order Outside Mounted Blinds, type in the \
                        <strong>largest</strong> measurement.</p> \
                    </div> \
                    <p><strong>Additional information</strong></p> \
                    <p><a href="/roller-blinds" target="_blank">Roller blinds</a></p> \
                    <p>Please note that the width of the cloth on a roller blind is 3.5-4cm \
                    narrower than the overall width of the blind. This is because the roller \
                    mechanism is wider than the cloth.</p> \
                    <p>You may wish to adjust your measurements if you want the cloth to cover \
                    more of the window.</p> \
                </div> \
            </div><!-- .opt-modal-content-block --> \
            <div class="opt-modal-content-block opt-modal-content-block--bottom"> \
                <h5>PLEASE REMEMBER TO CHECK YOUR MEASURMENTS BECAUSE THESE ARE CUSTOM MADE BLINDS. THE MAKERS ACCEPT NO RESPONSABILITY FOR ERRORS IN ORDERING.</h5> \
            </div><!-- .opt-modal-content-block --> \
        </div><!-- .modal-body --> \
    </div> \
  </div> \
</div>';

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.modal-body { padding-bottom: 0 !important; } \
.modal-dialog { width: auto !important; max-width: 900px; } \
#modal-help-guide h5, #modal-help-guide h6 { color: #333; font-weight: bold; text-align: center; } \
#modal-help-guide h5 { font-size: 1.15em; } \
.opt-modal-content-aside h6 { font-size: 1em; } \
.opt-modal-content-block { padding-bottom: 40px; overflow: auto; } \
.opt-modal-content-block--bottom { padding-bottom: 20px; } \
.opt-modal-content-main { width: 58%; float: left; } \
.opt-modal-content-aside { width: 40%; float: right; font-size: 0.8em; border: 2px solid #E1E6E7; padding: 8px 8px 0 8px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; } \
.opt-modal-content-aside h6 { text-align: left !important; font-size: 1.1em !important; } \
.opt-modal-content-tip { font-size: 0.8em; border: 2px solid #E1E6E7; margin: 20px 0; padding: 8px 8px 0 8px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; } \
.opt-modal-content-col-left { float: left; width: 46%; padding-top: 10px; } \
.opt-modal-content-col-right { float: right; width: 46%; padding-top: 10px; } \
.opt-modal-main-info-wrap { min-height: 150px; } \
.opt-modal-content-col-right .opt-modal-content-caption img { position: relative; top: -5px; } \
#modal-help-guide .opt-modal-content-col-right h5, #modal-help-guide .opt-modal-content-col-left h5 { font-size: 1em; } \
.opt-modal-content-center-float { width: 8%; float: left; text-align: center; padding: 0; font-size: 1.6em; } \
.opt-modal-content-caption { text-align: center; font-weight: bold; font-size: 1.1em; padding: 10px 0 10px 0; } \
.opt-modal-content-block > h5 { padding: 0 0 15px 0; } \
.opt-modal-content-caption { margin: 0 auto; position: relative; } \
.opt-modal-content-col-left .opt-modal-content-caption { left: -6px; } \
.opt-modal-content-col-right .opt-modal-content-caption { left: -1px; } \
.modal-title { text-align: center; margin: 0 0 0 70px; } \
@media screen and (max-width: 580px) { \
    .opt-modal-content-main, .opt-modal-content-aside, \
    .opt-modal-content-tip, .opt-modal-content-col-left, \
    .opt-modal-content-col-right, .opt-modal-main-info-wrap { \
        width: 100%; \
        float: none; \
    } \
    .opt-modal-main-info-wrap { min-height: 0px; } \
    .opt-modal-content-center-float { display: none; } \
} ';

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