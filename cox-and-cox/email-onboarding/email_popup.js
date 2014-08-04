// EXTERNAL DEPENDENCIES
/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function($){$("a[data-reveal-id]").live("click",function(e){e.preventDefault();var modalLocation=$(this).attr("data-reveal-id");$("#"+modalLocation).reveal($(this).data())});$.fn.reveal=function(options){var defaults={animation:"fadeAndPop",animationspeed:300,closeonbackgroundclick:true,dismissmodalclass:"close-reveal-modal"};var options=$.extend({},defaults,options);return this.each(function(){var modal=$(this),topMeasure=parseInt(modal.css("top")),topOffset=modal.height()+topMeasure,locked=false,
modalBG=$(".reveal-modal-bg");if(modalBG.length==0)modalBG=$('<div class="reveal-modal-bg" />').insertAfter(modal);modal.bind("reveal:open",function(){modalBG.unbind("click.modalEvent");$("."+options.dismissmodalclass).unbind("click.modalEvent");if(!locked){lockModal();if(options.animation=="fadeAndPop"){modal.css({"top":$(document).scrollTop()-topOffset,"opacity":0,"visibility":"visible"});modalBG.fadeIn(options.animationspeed/2);modal.delay(options.animationspeed/2).animate({"top":$(document).scrollTop()+
topMeasure+"px","opacity":1},options.animationspeed,unlockModal())}if(options.animation=="fade"){modal.css({"opacity":0,"visibility":"visible","top":$(document).scrollTop()+topMeasure});modalBG.fadeIn(options.animationspeed/2);modal.delay(options.animationspeed/2).animate({"opacity":1},options.animationspeed,unlockModal())}if(options.animation=="none"){modal.css({"visibility":"visible","top":$(document).scrollTop()+topMeasure});modalBG.css({"display":"block"});unlockModal()}}modal.unbind("reveal:open")});
modal.bind("reveal:close",function(){if(!locked){lockModal();if(options.animation=="fadeAndPop"){modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);modal.animate({"top":$(document).scrollTop()-topOffset+"px","opacity":0},options.animationspeed/2,function(){modal.css({"top":topMeasure,"opacity":1,"visibility":"hidden"});unlockModal()})}if(options.animation=="fade"){modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);modal.animate({"opacity":0},options.animationspeed,
function(){modal.css({"opacity":1,"visibility":"hidden","top":topMeasure});unlockModal()})}if(options.animation=="none"){modal.css({"visibility":"hidden","top":topMeasure});modalBG.css({"display":"none"})}}modal.unbind("reveal:close")});modal.trigger("reveal:open");var closeButton=$("."+options.dismissmodalclass).bind("click.modalEvent",function(){modal.trigger("reveal:close")});if(options.closeonbackgroundclick){modalBG.css({"cursor":"pointer"});modalBG.bind("click.modalEvent",function(){modal.trigger("reveal:close")})}$("body").keyup(function(e){if(e.which===
27)modal.trigger("reveal:close")});function unlockModal(){locked=false}function lockModal(){locked=true}})}})(jQuery);



// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var coxandcoxHomepageEmailPopup = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Homepage Email Popup - dev 0.0.4');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('body.cms-index-index.cms-home');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
    'popup_shown_key_name': 'COXANDCOX_EMAILPOPUP_SHOWN',
    'email_modal': $('<div id="email_popup_modal" class="reveal-modal"> \
            <a class="close-reveal-modal">&#215;</a> \
            <h1>Be first to know about \
            <br/> \
            Cox &amp; Cox special offers</h1> \
            <p class="fullwidth">Sign up for the Cox &amp; Cox email newsletter to get exclusive updates:</p> \
            <ul class="tick-bullet"> \
                <li>Don\'t miss another sale</li> \
                <li>Get exclusive subscriber discounts</li> \
                <li>See our latest collections and products</li> \
            </ul> \
            <form method="POST" action="http://www.elabs12.com/functions/mailing_list.html"> \
                <input type="hidden" name="submitaction" value="3"> \
                <input type="hidden" name="mlid" value="3458"> \
                <input type="hidden" name="siteid" value="2012000798"> \
                <input type="hidden" name="tagtype" value="q2"> \
                <input type="hidden" name="demographics" value="40465,1,2,-1,9,41872,40464,43440,40922"> \
                <input type="hidden" name="redirection" value="http://www.coxandcox.co.uk/thank-you"> \
                <input type="hidden" name="uredirection" value=""> \
                <input type="hidden" name="append" value="on"> \
                <input type="hidden" name="update" value="on"> \
                <input type="hidden" name="activity" value="submit"> \
                <input type="hidden" name="val_40464[]" value="website_emailform"> \
                <input type="hidden" name="val_40922" value="101"> <input type="hidden" name="val_43314" value="04/08/2014"> \
                <input \
                    type="text" \
                    name="email" \
                    value="" \
                    size="35" \
                    placeholder="enter your email address"> \
                <input type="submit" value="Continue"> \
            </form> \
            <p class="footnote"> \
                Privacy Policy: We respect your privacy and will not share your email address with any 3rd party. \
            </p> \
            </div>')
};

// Styles
// String containing the CSS for the experiment
// Reveal CSS
exp.css = '.reveal-modal-bg { z-index: 9998; position: fixed; height: 100%;width: 100%;background: #000;background: rgba(0,0,0,.8);display: none;top: 0;left: 0; }.reveal-modal {visibility: hidden;top: 100px; left: 50%;margin-left: -300px;width: 520px;background: #eee no-repeat -200px -80px;position: absolute;z-index: 101;padding: 30px 40px 34px;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;-moz-box-shadow: 0 0 10px rgba(0,0,0,.4);-webkit-box-shadow: 0 0 10px rgba(0,0,0,.4);-box-shadow: 0 0 10px rgba(0,0,0,.4);}.reveal-modal.small         { width: 200px; margin-left: -140px;}.reveal-modal.medium        { width: 400px; margin-left: -240px;}.reveal-modal.large         { width: 600px; margin-left: -340px;}.reveal-modal.xlarge        { width: 800px; margin-left: -440px;}.reveal-modal .close-reveal-modal {font-size: 22px;line-height: .5;position: absolute;top: 8px;right: 11px;color: #aaa;text-shadow: 0 -1px 1px rbga(0,0,0,.6);font-weight: bold;cursor: pointer;}'

exp.css += '#email_popup_modal { \
            background-color: #fff; \
            z-index: 9999; \
        } \
        #email_popup_modal h1 { \
            text-align: center; \
            font-size: 24pt; \
            margin-bottom: 0.75em; \
        } \
     \
        #email_popup_modal p.fullwidth { \
            background-color: #eee; \
            margin: 1em -40px; \
            padding: 1em 4em; \
            border-top: 1px solid #ddd; \
            border-bottom: 1px solid #ddd; \
        } \
     \
        #email_popup_modal ul.tick-bullet { \
            /* Tick box */ \
            list-style-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC\'); \
            margin-left: 10px; \
        } \
     \
        #email_popup_modal ul.tick-bullet li { \
            margin-bottom: 0.5em; \
        } \
     \
        #email_popup_modal form { \
            margin-top: 1.5em; \
            margin-bottom: 1.5em; \
            display: block; \
        } \
     \
        #email_popup_modal form input { \
            box-sizing: border-box; \
            padding: 1em; \
            width: 380px; \
        } \
     \
        #email_popup_modal form input[type=text] { \
            margin-left: 10px; \
        } \
     \
        #email_popup_modal form input[type=submit] { \
            background: #ffcc38; /* Old browsers */ \
            /* IE9 SVG, needs conditional override of \'filter\' to \'none\' */ \
            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmY2MzOCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjg2MDkiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+); \
            background: -moz-linear-gradient(top, #ffcc38 0%, #ff8609 100%); /* FF3.6+ */ \
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffcc38), color-stop(100%,#ff8609)); /* Chrome,Safari4+ */ \
            background: -webkit-linear-gradient(top, #ffcc38 0%,#ff8609 100%); /* Chrome10+,Safari5.1+ */ \
            background: -o-linear-gradient(top, #ffcc38 0%,#ff8609 100%); /* Opera 11.10+ */ \
            background: -ms-linear-gradient(top, #ffcc38 0%,#ff8609 100%); /* IE10+ */ \
            background: linear-gradient(to bottom, #ffcc38 0%,#ff8609 100%); /* W3C */ \
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffcc38\', endColorstr=\'#ff8609\',GradientType=0 ); /* IE6-8 */ \
         \
            width: 120px; \
            border-radius: 3px; \
            border: 0; \
            height: 42px; \
            font: bold 14px Arial,Helvetica,sans-serif; \
            color: #9c5309; \
        } \
     \
        #email_popup_modal p.footnote { \
            font-size: small; \
            width: 60%; \
            margin-top: 1em; \
        }';


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

exp.func.setEmailPopupShownFlag = function(){
    console.log("Email popup: Setting shown flag.");
    window.localStorage.setItem(exp.vars.popup_shown_key_name, true);
};

exp.func.clearEmailPopupShownFlag = function(){
    console.log("Email popup: Clearing shown flag.");
    window.localStorage.removeItem(exp.vars.popup_shown_key_name);
};

exp.func.showModal = function(){
    // Show modal
    exp.vars.email_modal.reveal({
        animation: "fade"
    });
};

// Init function
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
    $('head').append('<!--[if gte IE 9]> \
  <style type="text/css"> \
    .gradient { \
       filter: none; \
    } \
  </style> \
<![endif]-->');
    // DOM manipulation...

    // Add email modal DOM to page
    $('body').append(this.vars.email_modal);

    // If modal form is submitted, set flag as shown
    this.vars.email_modal.find('input[type=submit]').click(this.func.setEmailPopupShownFlag);

    // If modal is dismissed, set flag as shown
    this.vars.email_modal.on('reveal:close', this.func.setEmailPopupShownFlag);

    // TODO: Remove reset and showModal buttons when going live.

    // Add a hidden reset link, to reset the shown flag state
    $reset_link = $('<a>Reset</a>');
    $reset_link.css({
        display: 'block',
        position: 'absolute',
        top: '24px',
        left: 0,
        height: '24px',
        color: 'black',
        cursor: 'pointer'
    });
    $reset_link.click(this.func.clearEmailPopupShownFlag);

    $('body').append($reset_link);

    // Add a hidden "Show modal" link
    $show_modal = $('<a>Show popup</a>');
    $show_modal.css({
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '24px',
        color: 'black',
        cursor: 'pointer'
    });
    $show_modal.click(this.func.showModal);

    $('body').append($show_modal);

    // Check whether this visitor has interacted with the popup previously
    console.log("Email popup: Checking whether or not to pop up.");
    if (!window.localStorage.getItem(this.vars.popup_shown_key_name))
    {
        console.log("Email popup: Flag not set, opening popup.");

        // Show popup
        this.func.showModal();
        
    }
    else {
        console.log("Email popup: Flag is set, not opening popup.");
    }

};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
coxandcoxHomepageEmailPopup.init();