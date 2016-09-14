

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
    exp.log('AWA - Landing page v1');

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
      .hero.phase2 p {\
      color: #fff;\
      padding: 0;\
      margin: 20px 0;\
        }\
        .button-area {\
          display: inline-block;\
        }\
        .click-info-here-AWA {\
          color: #5e5953\
        }\
        .AWA-info-box {\
          border: 2px solid gray;\
          background-color: #F0D56E;\
          z-index: 100000000;\
          position: absolute;\
          width: 275px;\
          border-radius: 12px;\
           display: none;\
           left: 285px;\
          margin: auto;\
        }\
        .AWA-info-box h1{\
          color: #5e5953;\
          font-size: 2.0rem;\
          padding: 7px;\
          margin-left: 10px;\
      margin-bottom: 0px;\
      padding-bottom: 0px;\
      margin-top: 0px;\
      bottom: 392px;\
        }\
        .AWA-info-box p{\
          width: 90%;\
          align-content:center;\
          display: inline-block;\
        }\
        .AWA-info-box img{\
          float: right;\
          position: relative;\
          right: 5px;\
          top: 5px;\
        }\
        p.small.text-left {\
      text-align: center;\
      }\
      .price.pull-left {\
          white-space: nowrap;\
      }\
      a.cta-button.btn.pull-left {\
      margin-bottom: 13px;\
      }\
      .container .col-md-6 p {\
        margin-bottom: 0px;\
      }\
      .AWA-quote-wrapper {\
        background: #E8E6E6;\
        background: linear-gradient(#B9B9B9, #fff);\
        height: 100px;\
        }\
        .AWA-quote-life {\
            padding-top: 33px;\
            text-align: center;\
            font-size: 18px;\
        }\
        body > div.wrapper > div.landing-page > section.section.small-padding.yellow-bottom-light > div {\
            margin-top: 50px;\
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

          $('.nav-menu').find('li').first().remove();


          jQuery('.container').find('.col-md-6').html('\
              <img src="https://youcandoit.freestylediabetes.co.uk/wp-content/uploads/2016/02/generic_text.png" alt="" class="img-responsive">\
              <p>The days of routine glucose testing with lancets, test strips and blood are over.<sup>1</sup></p>\
              <div class="button-area col-md-6">\
                  <a href="http://www.freestylelibre.co.uk/products.html?utm_source=freestylediabetes&amp;utm_medium=referral&amp;utm_term=buy-now&amp;utm_content=button-1&amp;utm_campaign=libre" target="_blank" class="cta-button btn pull-left" data-track="send", "event", "cta - Default", "Buy Now", "Hero - Stories"">Buy Now</a>\
                  <div class="price pull-left">Get your Starter Pack today\
                      <br><span class="big">for £159.95</span><span class="small">Incl. VAT</span></div>\
              </div>\
          ')

            jQuery('.landing-page').before('<div class="AWA-quote-wrapper">\
            <p class="AWA-quote-life">"A small price for improving my long term health considering how much I spend on coffees, drinks and dinners out."**</p>\
            </div>\
            ')

         jQuery('footer').find('.container').html('<p><a href="https://youcandoit.freestylediabetes.co.uk/privacy-policy/">Privacy Policy</a>  |  <a href="https://youcandoit.freestylediabetes.co.uk/cookie-policy/">Cookie Policy</a></p>\
         		<p class="small text-left">*&nbsp;The FreeStyle Libre Flash Glucose Monitoring System is indicated for measuring interstitial fluid glucose levels in people (age 4 and older) with diabetes mellitus.<br>\
                 The indication for children (age 4 – 17) is limited to those who are supervised by a caregiver who is at least 18 years of age. A caregiver at least 18 years old is responsible for supervising, managing, and assisting the child in using the FreeStyle Libre system and interpreting its readings.<br>\
               **&nbsp;Online survey response from a customer. Data on file\
         † Scanning the sensor to obtain glucose values does not require lancets<br>\
         1. A finger prick test using a blood glucose meter is required during times of rapidly changing glucose levels when interstitial fluid glucose levels may not accurately reflect blood glucose levels, or if hypoglycaemia or impending hypoglycaemia is reported or the symptoms do not match the system readings.<br>\
         2. The reader can capture data from the sensor when it is within 1cm to 4cm of the sensor.<br>\
         3. For a complete glycaemic picture, scan once every 8 hours.<br>\
         4. Data on file<br>\
         5.&nbsp;Sensor is water-resistant in up to 1 metre (3 feet) of water for a maximum of 30 minutes</p>\
         \
         		<p class="small">FreeStyle and related brand marks are trademarks of Abbott Diabetes Care Inc. in various jurisdictions. Other trademarks are the property of their respective owners. No use of any Abbott trademark, trade name, or trade dress in this site may be made without the prior written authorisation of Abbott Laboratories, except to identify the product or services of the company. This website and the information contained herein is intended for use by residents of the UK. The product images are for illustrative purposes only.</p>\
         		<p class="small">©2004 - 2016 Abbott Laboratories Limited. All rights reserved. Registered Number: 329102 England<br>\
         		Registered Office: Abbott House, Vanwall Business Park, Vanwall Road, Maidenhead, Berkshire SL6 4XE</p>\
                ')

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