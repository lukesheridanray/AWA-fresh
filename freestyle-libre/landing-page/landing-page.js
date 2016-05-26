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
  .AWA-text-wrapper img {\
    margin-left: 25%;\
}\
  .AWA-hero strong {\
    font-size: 1.7em;\
}\
p.AWA-review-name {\
    font-size: 15px;\
}\
  .AWA-header-container h1 {\
    margin: 0;\
    padding: 0;\
    color: black;\
    font-size: 4.5em;\
}\
.AWA-sensor-style p {\
    display: inline-block\
    max-width: 100%;\
    width: 55%;\
    margin-top: 7%;\
    float: left;\
    text-align: left;\
    float: bottom;\
    font-size: 16px;\
    padding-left: 20px;\
}\
  .AWA-hero {\
      height: 925px;\
      display: inline-block;\
      background: url('http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/6c13687f22ba3f30792117ce6fce59d2_awa-final-picture-hand-libre.png') no-repeat right;\
      text-align: center;\
      background-position: 69% 59%;\
      background-size: 35%;\
      padding: 30px 0;\
    }\
    .AWA-instruction-libre {\
     max-width: 85%\
     margin-top: 100px;\
    }\
    .hero p {\
      line-height: none;\
    }\
    .AWA-image-review {\
      display: inline-block;\
    }\
    .AWA-button-box.col-md-6 {\
        border: dashed 2px rgba(6, 4, 4, 0.58);\
        // position: absolute;\
        // right: 230px;\
        // width: 50%;\
        width: 350px;\
        float: right;\
        height: 300px;\
        border-radius: 40px;\
        margin-right: 35px;\
    }\
    .AWA-sensor-style {\
    }\
    .AWA-sensor-style p {\
      display: inline-block;\
      max-width: 55%;\
    }\
    .AWA-instruction-libre{\
      margin-top: 100px;\
    }\
    .AWA-header-container{\
      text-align: center;\
    }\
    .AWA-we-work-img{\
    margin-right: 20px;\
    }\
    .AWA-header-container h1 {\
    margin: 0;\
    padding: 0;\
  }\
  .button-area{\
    padding-left: 30px;\
  }\
  .btn{\
    width: 90%;\
    border-radius: 0px;\
  }\
  .AWA-pull p{\
  line-height: 0px;\
}\
  .pull-left p{\
    text-align: left;\
    padding: 10px;\
    font-weight: bold;\
    float: left;\
    line-height: 29px;\
    margin-top: 29px;\
  }\
  .pull-left p span sup img {\
    width: 20px;\
  }\
  .AWA-info-fix {\
    display: inline-block;\
    max-width: 100%;\
    width: 1000px;\
  }\
  .AWA-info-box {\
    margin-bottom: 50%;\
padding-bottom: 0px;\
margin-top: 0px;\
top: 414px;\
    border: 2px solid gray;\
    background-color: white;\
    z-index: 100000000;\
    position: absolute;\
    height: 214px;\
    width: 235px;\
    max-width: 100%;\
    border-radius: 12px;\
     display: none;\
    position: absolute;\
    right: 176px;\
    margin: auto;\
    padding-bottom: 61px;\
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
  .AWA-info-container {\
    display: inline-flex;\
float: right;\
flex-direction: row-reverse;\
}\
.buy-here-btn {\
  background-color: #909;\
      color: white;\
}\
.AWA-testimony-container h1 {\
    color: #5e5953;\
    padding-bottom: 20px;\
    padding-top: 10px;\
    color: #5e5953;\
    line-height: 42px;\
    font-size: 2.6em;\
    padding-left: 13%;\
}\
  .AWA-testimony-img img{\
    float: left;\
    margin-right: 20px;\
    margin-bottom: 10px;\
  }\
  p.small {\
    padding-left:1px;\
  }\
  .AWA-testimony-img p{\
    font-size: 1em;\
    color: #5e5953;\
    padding: 15px 0 15px 15px;\
    margin-bottom: 0;\
    width: 75%;\
    margin-left: 38px;\
  }\
  .AWA-testimony-img {\
    display: inline-block;\
max-width: 100%;\
margin-left: 149px;\
padding-left: 21%;\
}\
.AWA-phto-fix{\
  width: 107px;\
  margin-right: 10px;\
  height: 157;\
}\
.AWA-see-more{\
  padding-top: 32px;\
  padding-left: 80px;\
  text-decoration: underline;\
  color: #5E5953;\
  padding-left: 46%;\
}\
.AWA-info-fix p {\
padding-bottom: 44px;\
margin-left: 40px;\
}\
.AWA-info-fix-two {\
  display: inline-block;\
  max-width: 100%;\
  width: 1000px;\
}\
.AWA-info-container-two .AWA-pull-fix {\
    width: 100%;\
}\
.AWA-info-box-two {\
  margin-bottom: 50%;\
padding-bottom: 0px;\
margin-top: 0px;\
top: 364px;\
  border: 2px solid gray;\
  background-color: white;\
  z-index: 100000000;\
  position: absolute;\
  height: 214px;\
  width: 235px;\
  max-width: 100%;\
  border-radius: 12px;\
   display: none;\
  position: absolute;\
  margin: auto;\
  padding-bottom: 61px;\
}\
.AWA-info-box-two h1{\
  color: #5e5953;\
  font-size: 2.0rem;\
  padding: 7px;\
  margin-left: 10px;\
margin-bottom: 0px;\
padding-bottom: 0px;\
margin-top: 0px;\
bottom: 392px;\
}\
.AWA-info-box-two p{\
  width: 90%;\
  align-content:center;\
  display: inline-block;\
}\
.AWA-info-box-two img{\
  float: right;\
  position: relative;\
  right: 5px;\
  top: 5px;\
}\
.AWA-info-container-two {\
  background: url(/wp-content/themes/youcandoit/assets/img/bg-top.png) top center repeat-x;\
     height: 1000px;\
     width: 100%;\
     margin: 13px 0;\
     border-bottom: 1px solid black;\
}\
.AWA-info-container-two h1{\
  padding-top: 35px;\
  color: #5e5953;\
  padding-left: 22%;\
}\
.AWA-info-container-two .AWA-pull-fix {\
    padding-top: 0 !important;\
}\
  .AWA-button-box-two.col-md-6 {\
      /* position: absolute; */\
      /* right: 230px; */\
      /* bottom: 130px; */\
      /* width: 50%; */\
      width: 350px;\
      /*float: right; */\
      height: 300px;\
      border-radius: 40px;\
      margin-right: 95px;\
  }\
  .AWA-hand-image-libre-two {\
    display: flex;\
    margin-right: 186px;\
    flex-direction: column;\
  }\
  .AWA-product-kit {\
    float: left;\
    margin-top: 40px;\
    padding-left: 108px;\
    display: flex;\
    flex-direction: column;\
  }\
  .AWA-product-kit img {\
    width: 500px;\
    padding-bottom: 10px;\
  }\
  .AWA-button-box-two.price.pull-left {\
    margin-top: 21px;\
  }\
  .AWA-pull {\
    margin-top: 30px;\
  }\
.AWA-pull-fix {\
  padding-top: 56px;\
  max-width: 100%;\
  float: left;\
  width: 22%;\
  }\
  .text-left {\
    text-align: left;\
    padding-left: 25px;\
  }\
  .container {\
  max-width:100%;\
}\
  .AWA-list-sugar {\
    list-style: none;\
  padding-top: 12px;\
  display: inline-block;\
    float: left;\
    margin-left: 10px;\
    text-align: left;\
    padding-left: 0;\
  }\
  .AWA-doubt {\
    float: right;\
    text-align: center;\
    margin-left: 0;\
    text-align: left;\
    padding: 0px;\
    display: inline-flex;\
    flex-direction: column;\
  }\
  .AWA-doubt p strong {\
    font-weight: normal;\
  }\
  .footer-final-AWA {\
    text-align: center;\
  }\
  .AWA-doubt p {\
    padding: 0px;\
    margin: 12px;\
  }\
  .yellow-bottom {\
    display: inline-block;\
  }\
  .yellow-bottom p {\
    max-width: 56%;\
    text-align: center;\
    display: inline-block;\
    margin-left: 90px;\
\
  }\
  footer .container {\
    max-width: 100%;\
    margin-left: 0;\
    width: 60%;\
    margin-left: 255px;\
    text-align: left;\
}\
    \
    .AWA-we-work-img sup {\
        font-size: 65%;\
    }\
    .AWA-header-container sup {\
        font-size: 55%;\
        top: -1em;\
    }\
    .AWA-header-container p {\
        color: #5e5953;\
    }\
    .buy-here-AWA {\
        width: 320px;\
        float: right;\
        border: 1px black dashed;\
        height: 260px;\
        border-radius: 20px;\
        margin-bottom: 105px;\
        margin-right: 7%;\
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
    }\
    .buy-here-btn:hover {\
        background: #c633c6;\
    }\
    .click-info-here-AWA sup img {\
        cursor: pointer;\
    }\
    .AWA-info-container-two .AWA-hand-image-libre-two {\
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
    \
  ";

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');


      jQuery('.hero').remove();
      $('footer').remove();
      //Append AWA hero image to header
      $('<section class="AWA-hero Dark">\
        <div class="container">\
        <div class="AWA-header-container">\
        <h1>See your glucose level anytime</h1>\
        <p>\
        <strong>No lancets. No<sup>†</sup> finger pricking. Just a 1 second scan.</strong></p>\
          </div>\
    <div class="AWA-review-img">\
    <div class="AWA-instruction-libre">\
    <div class="AWA-float-fix row text-left">\
    <div class="AWA-image-review col-lg-3">\
    <div class="AWA-text-wrapper">\
    <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/cf3ede473b690e6393936e9c6946865a_icons-sensors-final-libre.png" alt="Reviews for HST" style="height: 101px;">\
    <p class="AWA-review-name">Apply the small sensor to the back of your upper arm</p>\
    </div>\
    </div>\
    <div class="AWA-image-review col-lg-3">\
    <div class="AWA-text-wrapper">\
    <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/5fbfeac12d55e08cb7f8f27d99621d41_final-img-for-l-ibre.png" alt="Reviews for HST">\
    <p class="AWA-review-name">Scan the sensor with the reader for an instant glucose reading.<sup>1</sup></p>\
    </div>\
    </div>\
    <div class="AWA-image-review" style="\
    /* padding-right: 23px; */\
    padding-left: 160px;\
    float: right;\
"><ul style="\
padding-left: 81px;\
float: right;\
padding-top: 22px;\
list-style: none;\
"><li style="\
    padding-top: 23px;\
">See the direction your glucose is heading</li><li style="\
    padding-top: 1px;\
">Your current glucose reading</li><li style="\
    padding-top: 24px;\
">Your levels over the last 8 hours</li></ul></div>\
    </div>\
    <div class="AWA-info-container">\
    <div class="AWA-info-box">\
    <img src="https://icons.iconarchive.com/icons/iconsmind/outline/24/Close-Window-icon.png">\
      <h1 style="font-size: 16px; text-align: left; text-decoration: underline; font-weight: bold;">VAT exempt</h1>\
      <p style="padding-top: 38px;"">No VAT payable if you have Diabetes Mellitus, or buying on behalf of someone aged 4+ with diabetes Mellitus</p>\
    </div>\
    <div class="buy-here-AWA">\
    <h2 class="header-buy-here-AWA">Get your Starter Pack today</b></h2>\
    <p style="padding: 10px; color: black;">Price VAT incl: <small>£159.95</small></p>\
    <p class="click-info-here-AWA" style="color: black;">With VAT RELIEF:<small> £133.29<sup style="width: 1px;">\
    <img src="http://vignette2.wikia.nocookie.net/gravityfalls/images/5/55/More_info_icon.png/revision/latest?cb=20140601022437" style="width: 15px;"></sup></small></p>\
    <a href="http://www.freestylelibre.co.uk/freestyle-libre-starter-pack-english.html"><button class="buy-here-btn" style="height: 30px;">Add to Basket</button></a>\
    <a href="https://youcandoit.freestylediabetes.co.uk/product-overview/"><p style="\
        text-decoration: unerline;\
        text-decoration: underline;\
        color: grey;\
    ">More information</p></a>\
    </h2>\
    </div>\
    </div>\
    <div class="AWA-sensor-style">\
    <p>Sensor can be worn 24/7 while bathing, showering, swimming<sup>2</sup> and exercising for glucose readings anywhere, any time. Wear discreetly on the back of the upper arm for up to 14 days.</p>\
    </div>\
    </div>\
    <div class="AWA-we-work-img" style="\
  display: inline-block;\
    width: 100%;\
    padding-left: 6%;\
    display: inline-grid;\
    flex-direction: row;\
    background: #ddd;\
    height: 65px;\
    margin-top: 8px;\
    padding-top: 5px;">\
    <p style="float: left; padding-right: 31px;\
        font-size: 1.5em;\
        padding-bottom: 0px;\
        margin-bottom: 0px;\
        margin-top: 8px;">As Seen ON</p>\
    <div class="AWA-on-me-libre" style="display: flex; flex-direction: row;">\
    <img class="AWA-we-work-img" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/c3e8666a11e16fce9b0a8f8db9dae2b7_bbc-awa.png" alt="Who we work with for HST" style="width: 57px; height: 53px;">\
    <img class="AWA-we-work-img" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/a756557f4f8440f0b896229f95a6c737_express-awa-libre.png" alt="Who we work with for HST" style="height: 55px;"> \
    <img class="AWA-we-work-img" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/879a3c5dcf4b4065f71b0d652b4ca391_awa-daily-mail-libre.jpg" alt="Who we work with for HST" style="height: 55px;">\
    <img class="AWA-we-work-img" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/4d4f73e7c0747dd6730c037c26f213f8_the-guardian-logo1-awa-libre.jpg" alt="Who we work with for HST" style="width: 175px; height: 55px;">\
    </div>\
    </div>\
    </section>\
    <section>\
    <div class="AWA-testimony-container">\
    <h1>"Seeing your glucose trend up or down is invaluable"<p style="font-size: 12px;">-Niali M</p></h1>\
    <div class="AWA-testimony-img">\
      <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/4fc365a3682b4f8ac2af2c20981fc900_awa-sara-img.png"> \
      <p>I feel in complete control, which in turn has made me so much happier and confident as a person.</p>\
      <p>- Sara B.</p>\
    </div>\
    <div class="AWA-testimony-img">\
      <img class="AWA-phto-fix" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/105bb4a45da32073269c6cef0374ba5f_awa-martin-img.jpg"> \
      <p>The impact on my control has been revolutionary. I can see my levels quickly and whenever I choose to take a look at them.</p>\
      <p>- Martin A.</p>\
    </div>\
    <div class="AWA-testimony-img">\
      <img class="AWA-phto-fix" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/e7d0fa8f6a1ac8a7968963c040969174_awa-ian-img.png"> \
      <p>Now, things were different and I actually enjoyed looking at my levels throughout the day. I could make comparisons with other days, new foods, and times in which I may go particularly high and low.</p>\
      <p>- Ian W.</p>\
    </div>\
    <div class="AWA-testimony-img">\
      <img class="AWA-phto-fix" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/1b1e82936e6ca5b37e7dfe201053da47_awa-amy-img.png"> \
      <p>Within seconds I know my glucose levels. I know which direction they are heading in. This means I can eat somethings small before I have a serious hypo and I no longer run my glucose levels high.</p>\
      <p>- Amy B.</p>\
    </div>\
    <a href="#story-list"><p class="AWA-see-more">See More Stories</p></a>\
    </div>\
    \
    <div class="AWA-info-container-two">\
    <h1 style="padding-top: 35px;padding-left: 25%;">\
    Take control of your diabetes now\
    </h1>\
    <div class="AWA-product-kit">\
    <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/c671f3ca596a34dd2713ef3d8c73dbe4_new-awa-kit-libre.jpg">\
    <img src="http://www.freestylelibre.co.uk/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/e/sensor3_2_1_1.jpg">\
    </div>\
    <div class="AWA-hand-image-libre-two">\
    <div class="AWA-button-box-two col-md-6">\
    <div class="button-area">\
    <div class="price AWA-pull pull-left">\
    <div class="AWA-pull-fix" style="width: 100%;">\
  <strong style="/* float: left; */white-space: nowrap;">What you will recEIve in your FreeStyle Libre Starter Kit:</strong>\
  <p>1x FreeStyle Libre Reader Kit,<br>which incudes:<br>\
  </p>\
  <ul class="AWA-list-sugar">\
  <li>Reader</li>\
    <li>Power Adapter</li>\
  <li>USBCable</li>\
  <li>User Manual and other</li>\
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
<div class="AWA-doubt">\
  <div class="AWA-info-box-two" style="display: none;">\
    <img src="https://icons.iconarchive.com/icons/iconsmind/outline/24/Close-Window-icon.png">\
    <h1 style="padding: 0;">VAT exempt</h1><p style="margin: 0;">No VAT payable if you have Diabetes Mellitus, or buying on behalf of someone aged 4+ with diabetes Mellitus</p>\
  </div>\
  <p style="\
    font-size: 15px;\
    padding: 0;\
    margin: 0;\
    padding-right: 80px;\
">\
    <strong>Price VAT incl:</strong>\
    <span> £159.95</span>\
  </p>\
  <p class="AWA-info-fix-two" style="\
    font-size: 14px;\
    padding: 0;\
    margin: 0;\
">\
    <strong>With VAT RELIEF:</strong>\
    <span> £133.29<sup>\
    <img src="http://vignette2.wikia.nocookie.net/gravityfalls/images/5/55/More_info_icon.png/revision/latest?cb=20140601022437"></sup>\
    </span>\
  </p>\
  <a href="http://www.freestylelibre.co.uk/products.html?utm_source=freestylediabetes&amp;utm_medium=referral&amp;utm_term=buy-now&amp;utm_content=button-1&amp;utm_campaign=libre" target="_blank" class="cta-button btn pull-left" style="">Buy Now</a>\
  <a href="https://youcandoit.freestylediabetes.co.uk/product-overview/"><p style="text-decoration: underline;color: grey;/* width:210px; */padding-left: 41px;font-size: 14px;font-weight: 500;/* text-align:center */padding-top: 0;/* padding-left: 140px; */">More information</p>\
  </a>\
</div>\
    </div>\
    </div>\
    </div>\
    </section>\
      ').insertAfter("header")

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

      // add id to story list
      $('.stories').attr('id', 'story-list');


      //Hide nav bar as requested
      $('.nav-menu').remove();
      $('.section.small-padding.yellow-bottom-light').remove();

      //POP Up box
      jQuery('.click-info-here-AWA').click(function(){
      jQuery('.AWA-info-box').slideToggle();
      console.log('I like a click');
      });

      jQuery('.AWA-info-fix-two').click(function(){
      jQuery('.AWA-info-box-two').slideToggle();
      console.log('I like a click');
      });

      //Close Pop up box
      jQuery('.AWA-info-box-two').click(function(){
      jQuery('.AWA-info-box-two').hide();
      console.log('I like to hide');
      });
      jQuery('.AWA-info-box').click(function(){
      jQuery('.AWA-info-box').hide();
      console.log('I like to hide');
      });

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
