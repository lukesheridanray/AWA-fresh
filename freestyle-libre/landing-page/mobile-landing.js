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
    header {\
        height: 100%;\
        background: #ffd100;\
        padding: 18px 0;\
        -webkit-box-shadow: 0 5px 10px 0 rgba(50,50,50,.3);\
        -moz-box-shadow: 0 5px 10px 0 rgba(50,50,50,.3);\
        box-shadow: 0 5px 10px 0 rgba(50,50,50,.3);\
        position: relative;\
        z-index: 1001;\
    }\
    \
    .AWA-mobile-top-header-container{\
      text-align: center;\
      margin: 0;\
      padding: 10px;\
    }\
    .AWA-mobile-header {\
        color: black;\
        font-size: 2.5rem;\
    }\
    .AWA-mobile-sub-header {\
        font-size: 21px;\
        color: #5D5C5C;\
    }\
    .AWA-mobile-reader {\
        display: inline-block;\
      }\
      .AWA-mobile-right-words {\
        padding-top: 28px;\
        float: right;\
    }\
    .AWA-reader-list {\
        list-style: none;\
    }\
    \
    \
    .AWA-info-box {\
      position: absolute;\
      margin-bottom: 50%;\
      padding-bottom: 0px;\
      margin-top: 0px;\
      border: 2px solid gray;\
      background-color: white;\
      z-index: 100000000;\
      width: 264px;\
      max-width: 100%;\
      border-radius: 12px;\
      display: none;\
      margin-right: 30px;\
      margin: auto;\
      padding-bottom: 61px;\
      top: -123px;\
      overflow: hidden;\
      left: 20px;\
      right: 56px;\
    }\
\
\
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
    .AWA-info-container {\
      max-width: 100%;\
      display: block;\
      width: 100%;\
      position: relative;\
    }\
    .buy-here-btn {\
      background-color: #909;\
      color: white;\
    }\
    .buy-here-AWA {\
      text-align: center;\
      max-width: 100%;\
      border: 1px black dashed;\
      width: 92%;\
      height: 260px;\
      margin-left: 6px;\
      margin-top: 35px;\
      border-radius: 20px;\
    }\
    .header-buy-here-AWA {\
        margin-bottom: 15px;\
        max-width: 100%;\
        white-space: nowrap;\
        color: black;\
        font-size: 1.3em;\
        padding-top: 20px;\
    }\
    .header-buy-here-AWA b {\
        font-size: 15px;\
    }\
    .buy-here-AWA a p {\
        font-size: 13px;\
    }\
    .buy-here-btn {\
        border: 0;\
        height: auto !important; \
        padding: 0.5em 2em;\
        background: #909;\
        border: 2px solid #c633c6;\
        margin-top: 10px;\
        margin-bottom: 13px;\
    }\
    .buy-here-btn:hover {\
        background: #c633c6;\
    }\
    .click-info-here-AWA sup img {\
        cursor: pointer;\
    }\
    .AWA-info-container-two .AWA-haåçnd-image-libre-two {\
        width: 286px;\
    }\
    .AWA-info-container-two .AWA-pull-fix {\
        width: 34%;\
    }\
    .AWA-info-container-two .AWA-pull-fix .AWA-list-sugar {\
        clear: left;\
    }\
    .AWA-info-container-two .AWA-info-fix-two {\
        width: auto;\
    }\
    small {\
        font-size: 123%;\
    }\
    /*AS SEEN ON LIST STYLE*/\
        .AWA-as-seen-in {\
            margin-top: 10px;\
            text-align: center;\
            max-width: 100%;\
            background: #E8E8E8;\
            padding-bottom: 120px;\
        }\
        .AWA-left-icon {\
            float: left;\
            width: 40%;\
        }\
        .AWA-right-icon {\
            float: right;\
            width: 170px;\
        }\
    \
    /*Testimony section style*/\
    \
    \
    .AWA-testimony-img {\
        padding-top: 20px;\
        }\
    .AWA-testimony-container{\
          text-align: center;\
          margin-top: 20px;\
        }\
        \
    .AWA-see-more{\
          padding-top: 32px;\
          padding-left: 80px;\
          text-decoration: underline;\
          color: #5E5953;\
          padding-left: 46%;\
            }\
    .AWA-testimony-img p {\
           margin: 0px;\
           text-align: left;\
            }\
            \
    .AWA-testimony-img img {\
            margin-bottom: 10px;\
            }\
            \
    p.AWA-see-more {\
            margin: 0;\
            padding: 0;\
            }\
            \
            \
    /*What you will recive Style*/\
    \
    \
    .AWA-list-sugar {\
        text-align: left;\
    }\
    .AWA-info-container-two-title h1 {\
        color: black;\
        font-size: 2em;\
        }\
        \
        \
    section.section.small-padding.yellow-bottom-light {\
        background: #FEECA8;\
        background: -webkit-linear-gradient(#fff, #FEECA8);\
        background: -o-linear-gradient(white, #FEECA8);\
        background: -moz-linear-gradient(#fff, #FEECA8);\
        background: linear-gradient(#fff 70%, #FEECA8);\
        }\
        \
        \
    .AWA-product-kit img {\
            width: 100%;\
        }\
        \
        \
    h2.header-buy-here-AWA {\
        margin-bottom: 15px;\
        max-width: 100%;\
        white-space: nowrap;\
        color: black;\
        font-size: 1.3em;\
        padding-top: 20px;\
        }\
    h2.header-buy-here-AWA b {\
        font-size: 15px;\
        }\
        \
        \
    .yellow-bottom-light {\
        background: none;\
        }\
    #AWA-info-box-two {\
        position: absolute;\
        left: -4px;\
        text-align: left\
        }\
        #buy-here-two {\
            border: none\
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


        //Remove Divs Needed
        $('.hero').remove();
        $('.AWA-hero').remove();
        $('.nav-menu').remove();
        $('\
        <section class"AWA-mobile-section">\
        <div class="AWA-container">\
        <div class="row">\
                \
            <div class="AWA-mobile-top-header-container">\
            	<h1 class="AWA-mobile-header">See your glucose level anytime</h1>\
              <p class="AWA-mobile-sub-header">No Lancets.<sup>*</sup> No routine finger pricking.<sup>†</sup> Just a 1 second scan. </p>\
            </div>\
                \
        <div class="AWA-mobile-reader col-md-6">\
          <img style=" max-width: 100%; width: 100%;" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/4c131d22fda5cc9ac2e78bc8a814395c_reader-complete-awa.jpg">\
          </div>\
          </div>\
          </div>\
          <div class="AWA-info-container">\
          <div class="AWA-info-box">\
          <img src="https://icons.iconarchive.com/icons/iconsmind/outline/24/Close-Window-icon.png">\
            <h1 style="font-size: 16px; text-align: left; text-decoration: underline; font-weight: bold;">VAT exempt</h1>\
            <p style="padding-top: 38px; padding-left: 15px;"">No VAT payable if you have Diabetes Mellitus, or buying on behalf of someone aged 4+ with diabetes Mellitus</p>\
          </div>\
          <div class="buy-here-AWA">\
          <h2 class="header-buy-here-AWA">Get your Starter Pack today</b></h2>\
          <p style="padding: 10px; color: black;">Price VAT incl: <small>£159.95</small></p>\
          <p class="click-info-here-AWA" style="color: black;">With VAT RELIEF:<small> £133.29<sup style="width: 1px;">\
          <img src="http://vignette2.wikia.nocookie.net/gravityfalls/images/5/55/More_info_icon.png/revision/latest?cb=20140601022437" style="width: 15px;"></sup></small></p>\
          <a href="http://www.freestylelibre.co.uk/freestyle-libre-starter-pack-english.html"><button class="buy-here-btn">Add to basket</button></a>\
          <a href="https://youcandoit.freestylediabetes.co.uk/product-overview/"><p style="\
              text-decoration: unerline;\
              text-decoration: underline;\
              color: grey;\
          ">More information</p></a>\
          </h2>\
          </div>\
          </div>\
        </section>\
').insertAfter('header');


$( "section" ).first().append('\
<div class="AWA-as-seen-in">\
  <p>AS SEEN ON:</p>\
  <div class="AWA-left-icon">\
  <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/388602fdbd759d0a705b6229010ed2f3_300px-bbc.svg.png" alt="BBC" style="height: 32px;\
    margin-top: 11px;\
    margin-left: 23px;\
    margin-bottom: 15px;">\
    \
    \
  <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/a756557f4f8440f0b896229f95a6c737_express-awa-libre.png" alt="Express" style="width: 165px;\
    margin-top: 7px;\
    margin-left: 6px;">\
    \
    \
  </div>\
  <div class="AWA-right-icon">\
  <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/de113386cfc4c28247bda7b26218e860_daily_mail_main.png" alt="Daily Mail" style="height: 40px;\
    width: 130px;\
    margin-top: 12px;">\
    \
    \
  <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/beffb25d09f3c741fe63e03f54357742_the_guardian.svg.png" alt="The Guardian" style="height: 42px;\
    width: 130px;\
    margin-top: 9px;">\
    \
    \
  </div>\
</div>\
');



$('.margin-top').before('\
<div class="AWA-mobile-tesimony-wrapper">\
<div class="AWA-testimony-img">\
<p>"Within seconds I know my glucose levels. I know which direction they are heading in. This means I can eat somethings small before I have a serious hypo and I no longer run my glucose levels high."</p>\
<p style="text-align: center;">- Amy B.</p>\
<img class="AWA-phto-fix" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/1b1e82936e6ca5b37e7dfe201053da47_awa-amy-img.png"> \
</div>\
<div class="AWA-testimony-img">\
<p>"Now, things were different and I actually enjoyed looking at my levels throughout the day. I could make comparisons with other days, new foods, and times in which I may go particularly high and low."</p>\
<p style="text-align: center;">- Ian W.</p>\
<img class="AWA-phto-fix" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/e7d0fa8f6a1ac8a7968963c040969174_awa-ian-img.png"> \
</div>\
<a href="#story-list"><p class="AWA-see-more">See More Stories</p></a>\
</div>\
</div>\
')


$('.margin-top').remove();

$('.AWA-mobile-tesimony-wrapper').after('\
            <div class="AWA-info-container-two-title">\
            <h1>\
            Take control of your diabetes now\
            </h1>\
            </div>\
            <div class="AWA-hand-image-libre-two">\
            <div class="AWA-button-box-two col-md-6">\
            <div class="button-area">\
            <div class="price AWA-pull">\
            <div class="AWA-pull-fix" style="width: 100%;">\
            <strong>What you will receive in your FreeStyle Libre Starter Kit:</strong>\
            <p style="margin-top: 20px;">1x FreeStyle Libre Reader Kit,<br>which incudes:<br>\
            </p>\
            <ul class="AWA-list-sugar">\
            <li>Reader</li>\
            <li>Power Adapter</li>\
            <li>USBCable</li>\
            <li>User Manual and other additional labelling</li>\
            </ul>\
            <p>2x FreeStyle Libre Sensor Kits,<br>each of which incudes:<br>\
            </p>\
            <ul class="AWA-list-sugar">\
            <li>Sensor Pack</li>\
            <li>Sensor Applicator</li>\
            <li>Alcohol wipe</li>\
            <li>Product insert</li>\
            </ul>\
            </div>\
            \
            <div class="AWA-product-kit">\
          <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/c671f3ca596a34dd2713ef3d8c73dbe4_new-awa-kit-libre.jpg">\
          </div>\
            \
            <div class="AWA-info-container">\
            <div id="AWA-info-box-two" class="AWA-info-box">\
            <img src="https://icons.iconarchive.com/icons/iconsmind/outline/24/Close-Window-icon.png">\
              <h1 style="font-size: 16px; text-align: left; text-decoration: underline; font-weight: bold;">VAT exempt</h1>\
              <p style="padding-top: 38px; padding-left: 15px;"">No VAT payable if you have Diabetes Mellitus, or buying on behalf of someone aged 4+ with diabetes Mellitus</p>\
            </div>\
            <div id="buy-here-two" class="buy-here-AWA">\
            <p style="padding: 10px; color: black;">Price VAT incl: <small>£159.95</small></p>\
            <p class="click-info-here-AWA" style="color: black;">With VAT RELIEF:<small> £133.29<sup style="width: 1px;">\
            <img src="http://vignette2.wikia.nocookie.net/gravityfalls/images/5/55/More_info_icon.png/revision/latest?cb=20140601022437" style="width: 15px;"></sup></small></p>\
            <a href="http://www.freestylelibre.co.uk/freestyle-libre-starter-pack-english.html"><button class="buy-here-btn" style="width: 100%;">Add to Basket</button></a>\
            <a href="https://youcandoit.freestylediabetes.co.uk/product-overview/"><p style="\
                text-decoration: unerline;\
                text-decoration: underline;\
                color: grey;\
            ">More information</p></a>\
            </h2>\
            </div>\
            </div>\
            \
            </div>\
            </div>\
            </div>\
            </section>\
        ');

        $('footer').remove();
        $('<footer class="yellow-bottom">\
      <p>The views, opinions and positions expressed by the authors are theirs alone, and do not necessarily reflect the views,\
      opinions or positions of Abbott Diabetes Care or any employee thereof</p>\
        <div class="container">\
        <div class="footer-final-AWA">\
          <p><a href="https://youcandoit.freestylediabetes.co.uk/privacy-policy/">Privacy Policy</a>  |  <a href="https://youcandoit.freestylediabetes.co.uk/cookie-policy/">Cookie Policy</a></p>\
           <p class="small text-left">*&nbsp;\
† Scanning the sensor to obtain glucose values does not require lancets\
1. The reader can capture data from the sensor when it is within 1cm to 4cm of the sensor.\
2. Each scan of the reader over the sensor gives a current glucose reading, the last 8-hours of glucose history, and a trend arrow showing if glucose is going up, down, or changing slowly. The reader can even scan through clothing with a thickness of up to 4 mm.\
3. The Guardian, 14 November 2014, Digital, Data on File; Daily Mail, 10 February 2016, Digital, Data on File; Express, 19 April 2016, Digital, Data on File\
4. The FreeStyle Libre Flash Glucose Monitoring System is indicated for measuring interstitial fluid glucose levels in people (age 4 and older) with diabetes mellitus. The indication for children (age 4 - 17) is limited to those who are supervised by a caregiver who is at least 18 years of age. A caregiver at least 18 years old is responsible for supervising, managing, and assisting the child in using the FreeStyle Libre system and interpreting its readings.</p>\
            <p class="small">FreeStyle and related brand marks are trademarks of Abbott Diabetes Care Inc. in various jurisdictions. Other trademarks are the property of their respective owners. No use of any Abbott trademark, trade name, or trade dress in this site may be made without the prior written authorisation of Abbott Laboratories, except to identify the product or services of the company. This website and the information contained herein is intended for use by residents of the UK. The product images are for illustrative purposes only.</p>\
            <p class="small">©2004 - 2016 Abbott Laboratories Limited. All rights reserved. Registered Number: 329102 England<br>\
            Registered Office: Abbott House, Vanwall Business Park, Vanwall Road, Maidenhead, Berkshire SL6 4XE</p>\
          </div>\
        </div>\
      </footer>').insertAfter('.landing-page')



//POP Up box
jQuery('.click-info-here-AWA').click(function(){
jQuery('.AWA-info-box').slideToggle();
console.log('I like a click');
});

jQuery('#AWA-info-fix-two').click(function(){
jQuery('#AWA-info-box-two').slideToggle();
console.log('I like a click');
});

//Close Pop up box
jQuery('#AWA-info-box-two').click(function(){
jQuery('#AWA-info-box-two').hide();
console.log('I like to hide');
});

jQuery('.AWA-info-box').click(function(){
jQuery('.AWA-info-box').hide();
console.log('I like to hide');
});



    //Hide Header for Thumb Image and such

    $( ".landing-page" ).find( "p" ).first().remove();
    $( ".landing-page" ).find( "h1" ).first().remove();


    // testimonial section tweaks
  var $testimonial_section = jQuery('.section.stories'),
    $testimonial_section_title = $testimonial_section.find(' > .container > h3');

  $testimonial_section_title.text('What others are saying about the FreeStyle Libre System');

  // Hide the next 2 paragraphs
  $testimonial_section_title
  .nextAll('p')
  .remove();

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
