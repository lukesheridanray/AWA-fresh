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

// Define safe console log function
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Bright Minds: Product Page Test 3 v0.1');

// Condition
//
// The experiment should run on all product pages. Every product page
// contains a div with id "product".
exp.condition = $('#product');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {

    // Complete benefit box and copy
    benefitContent: '<div class="exp-box exp-box-benefit"> \
        <img src="http://www.brightminds.co.uk/rte_img_standard_8.jpg" alt="" /> \
        <h3>Alison Quill, ex-teacher and founder of BrightMinds says &hellip;</h3> \
        <blockquote> <p>I personally handpick and test each innovative product. \
        They all must:</p> </blockquote> <ul><li>Stimulate learning through play \
        &ndash; the best learning environment.</li><li>Encourage a child&rsquo;s \
        (or adult&rsquo;s) individual interests.</li><li>Feed creativity, \
        imagination and curiosity.</li><li>Hold interest longer than generic high \
        street toys.</li><li>Be more personal and individual than the latest toy \
        craze.</li><li>BE FUN!</li></ul> </div>',

};

// Styles
// String containing the CSS for the experiment
exp.css = '\
#centre { width: 940px; } \
.exp-box:after, \
.exp-inner:after { clear: both; content: ""; display: block; } \
.exp-column { float: left; width: 460px; } \
.exp-column + .exp-column { float: right; } \
.exp-box { padding: 15px; position: relative; } \
.exp-box + .exp-box { margin-top: 20px; } \
.exp-box > h2 { border-bottom: 3px solid #f0f1f2; padding-bottom: 0.5em; text-align: center; } \
.exp-box-returns > h2 { padding-right: 240px; text-align: right; } \
.exp-box > #desc_6.exp-overflow-scroll { max-height: 400px; overflow-y: scroll; padding-right: 15px; } \
.exp-box-benefit img { border-radius: 50%; float: left; margin: 0 20px 20px 0; width: 150px; } \
.exp-box-benefit h3 { margin: 20px 0; } \
.exp-box-benefit blockquote { background: transparent; font-style: italic; font-size: 14px; margin: 1.5em 0; padding: 0; } \
.exp-box-benefit blockquote + ul { clear: both; font-style: italic; margin: 0; } \
.exp-box-benefit blockquote + ul li { margin: 0.5em 0; } \
.exp-model { color: #A7A7A7; display: block; margin-bottom: 15px; font-size: 14px; } \
#product .pageheading { border: 0; padding: 0; text-align: right; } \
#product #summary { float: none; margin: 0; text-align: right; width: auto; } \
#product #summary #details dd.rating { position: static; } \
#product #summary #print-page, \
#product #summary #details dd.refer, \
#product #summary #details dd#prodModel, \
#product #summary #details dt.model { display: none; } \
#product #summary #addtowishlist { display: none; } \
#product #summary #addthis { display: none; } \
#product #summary #attriblist { display: none; } \
#product #summary .restrictions { display: none; } \
#product #summary .message { position: absolute; left: 0; bottom: -22px; width: 100px; height: 100px; text-align: center; display: block; } \
#product #summary .message .exp-message-inner { display: block; position: relative; top: 50%; transform: translateY(-50%); transform: -ms-translateY(-50%); -webkit-transform: translateY(-50%); } \
#product #summary #reviews_link { text-decoration: underline; } \
#product #summary #deliveryprompt { float: right; } \
#product #eimgHoverscontainer { padding-top: 0; } \
.has-extra-images #product #imagewrapper, \
#product #imagewrapper { float: none; width: 400px; min-height: 320px; } \
#product #imagewrapper #eimgHovers { height: auto; } \
#product #imagewrapper #eimgHoverswrapper { width: 90px; } \
#product #imagewrapper #eimgHoverswrapper.exp-overflow-scroll { max-height: 320px; overflow-y: scroll; } \
#product #imagewrapper #eimgHoverscontrols { display: none; } \
.has-extra-images #product #imagewrapper #prod_img, \
#product #imagewrapper #prod_img { margin-left: 95px; width: 340px; } \
.has-extra-images #product #imagewrapper #prod_img a, \
#product #imagewrapper #prod_img a { width: 340px !important; } \
#product #eimgHoverscontainer #eimgHovers dd a { display: inline-block; margin: 0 0 10px 0; width: 60px; } \
#product #reviews { padding-top: 30px; } \
#product #reviews .hreview-aggregate { border: 0; margin: 0; padding: 0 5px 0 0; position: absolute; left: 215px; top: 21px; white-space: nowrap; width: auto; } \
#product #reviews .hreview-aggregate .smaller { display: inline; position: relative; left: 5px; top: 0; } \
#product #reviews .hreview-aggregate .col { display: inline; } \
#product #reviews .hreview-aggregate .rating { display: none; } \
#product #questions .prompt h3, #product #reviews .prompt h3 { height: auto; } \
#product #questions .prompt h3, #product #reviews .prompt h3 a { display: inline-block; margin-top: 0.5em; } \
#product .prodlist.galleryview { float: none; margin: 0 auto; } \
#p_page .rtecontent h3 { margin-top: 24px; } \
#product .prodlist.offerlist { float: none; } \
#product #tabwrapper { margin-top: 20px; width: 460px; } \
#product .hlist.tabs { bottom: -3px; } \
#product .hlist.tabs dd a { border-width: 3px; } \
#product #tabcontent { border: 3px solid #F0F1F2; } \
#product #tabcontent h2 { font-size: 1.5em; } \
@media only screen and (max-width : 950px) { \
    .exp-column { width: 100%; } \
    #product #summary .message { position: static; width: 100%; } \
} \
';

// String containing the mobile CSS for the experiment
exp.cssMobile = ' \
.has-extra-images #product #imagewrapper #prod_img { margin-left: 65px; } \
#product #summary { position: relative; text-align: right; } \
#product #summary .cost { text-align: right; } \
#product #summary .message { position: absolute; bottom: 5px; right: 280px; } \
#product #summary #details { text-align: right; } \
#product #summary #details dt { float: none; } \
#product #summary #cmform #details dt.model { position: absolute; left: 0; top: 0; } \
#product #summary #cmform #details dd#prodModel { position: absolute; left: 40px; top: 0; } \
#product #summary #addtobasket { background: transparent; border: 0; padding: 0; } \
#product #summary #qtybox { position: absolute; bottom: 12px; right: 200px; } \
#product #summary #qtybox label { display: inline; } \
#product #summary #addtobasket #action_button { padding: 0.25em 0.5em; width: auto; } \
#product #reviews .prompt h3 { height: auto; } \
.exp-accordion { border-bottom: 1px solid #ccc; } \
.exp-accordion-heading { font-size: 16px; font-weight: bold; margin: 0; } \
.exp-accordion-heading a { background: #ECEFF0; border: 1px solid #ccc; border-bottom: 0; color: inherit; display: block; padding: 10px; } \
.exp-accordion-heading a:hover { text-decoration: none; } \
.exp-accordion-content { border: 1px solid #ccc; border-bottom: 0; padding: 10px; } \
.exp-box-benefit img { border-radius: 50%; float: left; margin: 0 1em 1em 0; width: 35%; } \
.exp-box-benefit blockquote { background: transparent; margin: 1em 0; padding: 0; } \
';

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

exp.func.waitForObject = function (obj, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (typeof obj !== 'undefined') {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
}

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // Prevent script running twice by checking for existing DOM manipulation
    if ($('.exp-inner').length !== 0) {
        exp.log('Stopping: experiment has already run')
    }

    // Use the text of the desktop/mobile switch link to determine which
    // version of the site is in use. If the text contains "mobile", it is the
    // desktop version; otherwise, it is the mobile version.
    if ($('#switch').text().toLowerCase().indexOf('mobile') > -1) {

        exp.log('Running desktop experiment');

        // Append CSS to head element
        $('head').append('<style>' + this.css + '</style>');

        // Select existing elements
        var modelNo = $('#prodModel').text();
        var product = $('#product');
        var images = $('<div class="exp-box"></div>').append($('#imagewrapper'));
        var summary = $('<div class="exp-box"></div>').append($('#summary'));
        var tabs = $('#tabwrapper');
        var title = $('.pageheading');
        var stars = $('#reviews_link');
        var form = $('#cmform');
        var obsolete = $('#right, .refer, #print-page, .model, #prodModel');
        var message = summary.find('.message');

        // Add model number
        images.prepend($('<span class="exp-model">Code: ' + modelNo + '</span>'));

        // Create new elements for new layout
        var expInner = $('<div class="exp-inner"></div>');
        var expLeft = $('<div class="exp-column"></div>');
        var expRight = $('<div class="exp-column"></div>');

        // Create benefit box and include the name of the current top level
        // category in the benefit box copy
        var benefitCat = $('#crumbs dd:eq(1)').text();
        var benefit = $(exp.vars.benefitContent.replace('innovative', benefitCat));

        // Wrap message in span for CSS
        message.wrapInner('<span class="exp-message-inner"></span>');

        // Rearrange elements to create new layout
        summary.prepend(title);
        form.before(stars);
        expLeft.append(images, benefit);
        expRight.append(summary, tabs);
        expInner.append(expLeft, expRight);
        product.prepend(expInner);
        obsolete.remove();

        // Add "overflow: scroll" to image thumbnails (if too tall)
        if ( $('#eimgHovers').height() > $('#imagewrapper').height() ) {
            $('#eimgHoverswrapper').addClass('exp-overflow-scroll');
        }

        // Add "overflow: scroll" to reviews (if too tall)
        if ( $('.exp-box > #desc_6').height() > 400 ) {
            $('.exp-box > #desc_6').addClass('exp-overflow-scroll');
        }

        // Remove brackets from aggregate review stars
        this.func.waitForElement('.hreview-aggregate .smaller', function() {
            var smaller = $('.hreview-aggregate .smaller');
            smaller.text(smaller.text().replace(/[()]/g, ''));
        });

        // Restore scroll to reviews link
        // Note: can't use `on()` until jQuery v1.7
        $('#reviews_link').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#desc_6').parent().offset().top - 20
            });
        });

    } else {

        exp.log('Running mobile experiment');

        // Append CSS to head element
        $('head').append('<style>' + this.cssMobile + '</style>');

        // Remove unwanted elements
        $('#attriblist, #summary .restrictions').remove();

        // Remove AddThis widget
        this.func.waitForElement('#addthis', function() {
            $('#addthis').remove();
        });

        // Assemble data for accordion
        var accordionData = [
            {name: 'Description', content: $('#desc_1').html()},
            {name: 'Reviews', content: $('#desc_6').html()},
            {name: 'Handpicked by us', content: exp.vars.benefitContent},
            {name: 'Delivery Information', content: $('#desc_2').html()}
        ];

        // Create accordion HTML
        var accordion = $('<div class="exp-accordion"></div>');

        for (var i = 0, len = accordionData.length; i < len; i++) {

            var item = $('<h3 class="exp-accordion-heading"><a href="#">'
                         + accordionData[i].name + '</a></h3>'
                         + '<div class="exp-accordion-content">'
                         + accordionData[i].content + '</div>');

            accordion.append(item);

        }

        // Add accordion to page
        $('#summary').after(accordion);

        // Add events to accordion
        $('.exp-accordion-heading a').click(function(e) {
            e.preventDefault();
            var target = $(this).parent().next('.exp-accordion-content');
            target.slideToggle();
            $('.exp-accordion-content').not(target).slideUp();
        });

        // Hide accordion items on load
        $('.exp-accordion-content').slice(1).hide();

        // Remove tabs
        $('#tabwrapper').remove();

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(optimizely.$);
