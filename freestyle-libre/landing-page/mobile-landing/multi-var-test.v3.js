//
// CGIT Optimizely Boilerplate - version 0.1.4
//
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('AWA - Landing page v3');

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = "\
    section.hero.phase2.Dark {\
    height: 100%;\
      }\
    .hero.phase2 .price {\
    color: #fff;\
    font-size: 1.313rem;\
    margin: 0;\
    line-height: 140%;\
  }\
    .hero.phase2 p {\
      color: #fff;\
      padding: 0;\
      margin-top: 10px;\
      margin-bottom: 5px;\
    }\
    .button-area {\
      display: inline-block;\
      margin-top: 10px;\
      padding-left: 0px;\
    }\
    .price.pull-left {\
      white-space: nowrap;\
    }\
    .AWA-quote-wrapper {\
         background: #E8E6E6;\
         background: linear-gradient(#B9B9B9, #fff);\
         height: 100px;\
         }\
         .AWA-quote-life {\
             padding-top: 15px;\
             text-align: center;\
             font-size: 18px;\
         }\
         .section.small-padding {\
    padding: 40px 0;\
    margin-top: 20px;\
}\
img.img-responsive {\
    display: none;\
}\
.hero.phase2 .btn {\
    font-size: 1.25rem;\
    width: 100%;\
}\
    img#img-guarantee-AWA {\
      display: block;\
      margin-left: auto;\
      margin-right: auto;\
    margin-top: 20px;\
}\
.hero.phase2.Dark .price, .hero.phase2.Dark p {\
    color: #5e5953;\
    margin-bottom: 20px;\
}\
    ";

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');
        $('footer').hide();

        $('.nav-menu').find('li').first().remove();


        //Remove the "You anc do it"
        jQuery('body > div.wrapper > section > div > div > div > img').remove();
        jQuery('body > div.wrapper > section > div > div > div > img').remove();


        // new text for hero.
        $('body > div.wrapper > section > div > div > div > p').hide();
            jQuery('.container').find('.col-md-6').prepend('\
                <p style="font-size: 45px;">No lancets.<sup style="font-size: 20px;">†</sup></p>\
                <p style="font-size: 24px;">No routine finger pricking.</p>\
                <p style="margin-top: 40px;">The days of routine glucose testing with lancets, test strips and blood are over.<sup>1</sup></p>\
                </div>\
            ')

            // Insert Garuntee image

            jQuery('body > div.wrapper > section > div > div > div > div > div').after('<img id="img-guarantee-AWA"\
             src="https://youcandoit.freestylediabetes.co.uk/wp-content/themes/youcandoit/assets/img/money_back_guarantee.png">\
             ');

        jQuery('.landing-page').before('<div class="AWA-quote-wrapper">\
            <p class="AWA-quote-life">"A small price for improving my long term health considering how much I spend on coffees, drinks and dinners out."**</p>\
            </div>\
            ')




        $('<footer class="yellow-bottom">\
        <p>The views, opinions and positions expressed by the authors are theirs alone, and do not necessarily reflect the views,\
        opinions or positions of Abbott Diabetes Care or any employee thereof</p>\
          <div class="container">\
          <div class="footer-final-AWA">\
            <p><a href="https://youcandoit.freestylediabetes.co.uk/privacy-policy/">Privacy Policy</a>  |  <a href="https://youcandoit.freestylediabetes.co.uk/cookie-policy/">Cookie Policy</a></p>\
             <p class="small text-left">*A finger prick test using a blood glucose meter is required during times of rapidly changing glucose levels when interstitial fluid glucose levels may not accurately reflect blood glucose levels, or if hypoglycemia or impending hypoglycemia is reported or the symptoms do not match the system readings.\
             <br/>\
             <br/>† Scanning the sensor to obtain glucose values does not require lancets\
             <br/>\
             <br/>** Online Survey response from a customer. Data on file.\
  <br/>1. The reader can capture data from the sensor when it is within 1cm to 4cm of the sensor.\
  <br/>2. Sensor is water resistant in up to 1 metre (3 feet) of water for a maximum of 30 minutes.\
  <br/>3. The FreeStyle Libre Flash Glucose Monitoring System is indicated for measuring interstitial fluid glucose levels in people (age 4 and older) with diabetes mellitus. The indication for children (age 4 - 17) is limited to those who are supervised by a caregiver who is at least 18 years of age. A caregiver at least 18 years old is responsible for supervising, managing, and assisting the child in using the FreeStyle Libre system and interpreting its readings.</p>\
              <p class="small">FreeStyle and related brand marks are trademarks of Abbott Diabetes Care Inc. in various jurisdictions. Other trademarks are the property of their respective owners. No use of any Abbott trademark, trade name, or trade dress in this site may be made without the prior written authorisation of Abbott Laboratories, except to identify the product or services of the company. This website and the information contained herein is intended for use by residents of the UK. The product images are for illustrative purposes only.</p>\
              <p class="small">©2004 - 2016 Abbott Laboratories Limited. All rights reserved. Registered Number: 329102 England<br>\
              Registered Office: Abbott House, Vanwall Business Park, Vanwall Road, Maidenhead, Berkshire SL6 4XE</p>\
            </div>\
          </div>\
        </footer>').insertAfter('.landing-page')
    };
    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
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


    exp.waitFor(function() { return $(".yellow-bottom").length; }, exp.init, 10000);

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
};
var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function () {
            waitForjQuery(time * 2);
        }, time);
    }
};
waitForjQuery(1000);
