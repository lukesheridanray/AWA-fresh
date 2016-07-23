

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
    ";

      // Functions
      // Object containing functions, some helpful functions are included
      exp.func = {};

      // Init function
      // Called to run the actual experiment, DOM manipulation, event listeners, etc
      exp.init = function() {
          // Append style to head
          $('head').append('<style type="text/css">'+exp.css+'</style>');


          jQuery('.container').find('.col-md-6').html('\
              <img src="https://youcandoit.freestylediabetes.co.uk/wp-content/uploads/2016/02/generic_text.png" alt="" class="img-responsive">\
              <p>The days of routine glucose testing with lancets, test strips and blood are over.<sup>1</sup></p>\
              <div class="button-area col-md-6">\
                  <a href="http://www.freestylelibre.co.uk/products.html?utm_source=freestylediabetes&amp;utm_medium=referral&amp;utm_term=buy-now&amp;utm_content=button-1&amp;utm_campaign=libre" target="_blank" class="cta-button btn pull-left" data-track="send", "event", "cta - Default", "Buy Now", "Hero - Stories"">Buy Now</a>\
                  <div class="price pull-left">Get your Starter Pack today\
                      <br><span class="big">for £159.95</span><span class="small">Incl. VAT</span></div>\
              </div>\
          ')
        $('.nav-menu').find('li').first().remove();

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
