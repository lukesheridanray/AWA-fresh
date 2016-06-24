/* CUSTOM CODE */
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
.AWA-we-work-img-wrapper { \
      max-width: 1264px; \
      margin: 0 auto; \
      padding: 0 15px 15px 15px;\
} \
img.AWA-we-work-img {\
    margin-left: 15px;\
    margin-right: 15px;\
}\
.hero {\
    height: 100%;\
    background-size: cover;\
    padding: 30px 0;\
}\
section.hero.phase2.Dark {\
height: 100%;\
padding: 10px 0 0 0;\
  }\
a.cta-button.btn.pull-left {\
width:53%;\
border: 0;\
border-radius: 0;\
height: auto !important; \
padding: 0.5em 2em;\
background: #909;\
border: 2px solid #c633c6;\
margin-top: 10px;\
font-size: 1.3em;\
margin-bottom: 0.5em;\
}\
a.cta-button.btn.pull-left:hover {\
background: #c633c6;\
}\
.hero.phase2 .price {\
color: #fff;\
font-size: 1.313rem;\
margin: 0;\
line-height: 140%;\
padding-left: 25px;\
padding-top: 20px;\
}\
.hero.phase2 p {\
color: #fff;\
padding: 0;\
margin-top: 10px;\
margin-bottom: 5px;\
}\
.button-area {\
display: inline-block;\
width: 100%;\
}\
body > div.wrapper > section.hero.phase2.Dark > div > div > div:nth-child(1) {\
  margin-top: 50px;\
  margin-left: -38px;\
margin-right: 38px;\
}\
.reader-awa-libre {\
    width: 125%;\
    position: relative;\
    left: -10%;\
}\
@media screen and (max-width: 1330px) {\
    .reader-awa-libre {\
        width: 115%;\
    }\
}\
@media screen and (max-width: 1199px) {\
    .reader-awa-libre {\
        width: 120%;\
        left: -15%;\
    }\
    body > div.wrapper > section.hero.phase2.Dark > div > div > div:nth-child(1) {\
        margin-top: 30px;\
        padding-bottom: 20px;\
    }\
    .button-area .cta-button {\
        width: 40% !important;\
        padding: 0.5em !important;\
    }\
}\
@media screen and (max-width: 991px) {\
    .reader-awa-libre {\
        width: 140%;\
        top: 50px;\
    }\
    .button-area .cta-button {\
        width: 100% !important;\
    }\
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



        document.getElementsByTagName("SECTION")[0].style.background = "url('https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/a29c0f2d1ae50f7f497ad309ebff1f47_libre-reader-awa.jpg')";


          //remove/ hide what needs it. 
        jQuery('body > div.wrapper > section.hero.phase2.Dark > img').remove();
        jQuery('body > div.wrapper > section > div > div > div > img').remove();
                $('body > div.wrapper > section > div > div > div > p').hide();

            // new text for hero.
                jQuery('.container').find('.col-md-6').prepend('\
                    <p style="font-size: 45px;">No lancets.*<br> No routine finger pricking.<sup>†</sup></p>\
                    <p style="margin: 40px 0;">The days of routine glucose testing with lancets, test strips and blood are over.<sup>1</sup></p>\
                    <p style="font-size: 30px;text-align:center;">Get your Starter Pack today</p>\
                    </div>\
                ')

              //New hero img
                $('body > div.wrapper > section.hero.phase2.Dark > div > div > div:nth-child(1) > div > div').html('<span class="big">for £159.95</span><span class="small">Incl. VAT</span>');
                jQuery('body > div.wrapper > section > div > div').append('<div class="col-md-6">\
                   <img class="reader-awa-libre" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/00f3dd46aaba1ab498a62c045c77368d_reader-for-libre.png">\
                 </div>')
      $('footer').remove();

      
      //Who we work with section. 
    $('.landing-page').before('<section>\
    <div class="AWA-we-work-img" style="    width: 100%;    background: #eee;    min-height: 65px;    margin-top: 8px;    padding-top: 5px;">\
        <div class="AWA-we-work-img-wrapper">\
            <p style="float: left; padding-right: 20px;        font-size: 1.5em;        padding-bottom: 0px;        margin-bottom: 0px;        margin-top: 8px;">As Seen ON</p>\
            <div class="AWA-on-me-libre">\
              <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/388602fdbd759d0a705b6229010ed2f3_300px-bbc.svg.png" alt="Who we work with for HST" style="height: 32px;margin-top: 4px;">\
              <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/a756557f4f8440f0b896229f95a6c737_express-awa-libre.png" alt="Who we work with for HST" style="margin-top: 5px; height: 40px;">\
              <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/de113386cfc4c28247bda7b26218e860_daily_mail_main.png" alt="Who we work with for HST" style="height: 40px; margin-top: 12px;">\
              <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/beffb25d09f3c741fe63e03f54357742_the_guardian.svg.png" alt="Who we work with for HST"style="height: 42px; margin-top: 9px;">\
              <img class="AWA-we-work-img" src="//useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/49c63f468386531f15429c7092fc50a6_itv_logo_2013.svg.png" alt="Who we work with for HST" style="height: 34px; margin-top: 4px;">\
            </div>\
        </div>\
    </div>\
    </section>\
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
<br/>1. The reader can capture data from the sensor when it is within 1cm to 4cm of the sensor.\
<br/>2. Sensor is water resistant in up to 1 metre (3 feet) of water for a maximum of 30 minutes.\
<br/>3. The FreeStyle Libre Flash Glucose Monitoring System is indicated for measuring interstitial fluid glucose levels in people (age 4 and older) with diabetes mellitus. The indication for children (age 4 - 17) is limited to those who are supervised by a caregiver who is at least 18 years of age. A caregiver at least 18 years old is responsible for supervising, managing, and assisting the child in using the FreeStyle Libre system and interpreting its readings.</p>\
            <p class="small">FreeStyle and related brand marks are trademarks of Abbott Diabetes Care Inc. in various jurisdictions. Other trademarks are the property of their respective owners. No use of any Abbott trademark, trade name, or trade dress in this site may be made without the prior written authorisation of Abbott Laboratories, except to identify the product or services of the company. This website and the information contained herein is intended for use by residents of the UK. The product images are for illustrative purposes only.</p>\
            <p class="small">©2004 - 2016 Abbott Laboratories Limited. All rights reserved. Registered Number: 329102 England<br>\
            Registered Office: Abbott House, Vanwall Business Park, Vanwall Road, Maidenhead, Berkshire SL6 4XE</p>\
          </div>\
        </div>\
      </footer>').insertAfter('.landing-page')

      // add id to story list
      $('.stories').attr('id', 'story-list');


      //Hide nav bar as requested
      $('.nav-menu').find('li').first().remove();
      //$('.section.small-padding.yellow-bottom-light').remove();

      //Move down page


    };

//image for testimonials
//AMY- http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/1b1e82936e6ca5b37e7dfe201053da47_awa-amy-img.png
//IAN- http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/e7d0fa8f6a1ac8a7968963c040969174_awa-ian-img.png
//Martin- http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/e7d0fa8f6a1ac8a7968963c040969174_awa-ian-img.png
//Sarah- http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/4fc365a3682b4f8ac2af2c20981fc900_awa-sara-img.png









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
