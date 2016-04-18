function() {
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

  // Initialise the experiment object
  var exp = {};

  // Wrapper for console.log, to prevent the exp breaking on browsers which don't
  // (always) have 'console' set (e.g. IE9)
  exp.log = function (str) {
      if (typeof window.console !== 'undefined') {
          console.log(str);
      }
  };

  // Log the experiment, useful when multiple experiments are running
  exp.log('Product Page Tips - v2 - var1');

  /*
  // Condition
  // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
  exp.condition = $('.unique-selector');
  */
  exp.condition = $('#32485735');

  // Check for a condition and return false if it has not been met
  if (exp.condition && !exp.condition.length) {
      exp.log('Product Page Tips failed a condition');
      return false;
  }
  if ($('.no-background-image').text() != "Flowers" && $('.no-background-image').text() != "Vegetables" && $('.no-background-image').text() != "Fruit" && $('.no-background-image').text() != "Large plants" && $('.no-background-image').text() != "Garden Supplies"){
    exp.log('Product Page Tips not running on Fruit, Large Plants, Vegetables, or Garden supplies, exiting');
    return false;
  }

  // Variables
  // Object containing variables, generally these would be strings or jQuery objects
  exp.vars = {};

  // Styles
  // String containing the CSS for the experiment
  exp.css = "\
  #vm023-popup-circle {\
    background: url('//d1m54pdnjzjnhe.cloudfront.net/vanmeuwen/vm023/vm023-popup-circle.png') no-repeat;\
    display: inline-block;\
    height: 13px;\
    width: 14px;\
    margin-left: 2px;\
    margin-bottom: -3px;\
    cursor: pointer;\
  }\
  #vm023-hardines-popup {\
    z-index: 10;\
    position: absolute;\
    visibility: hidden;\
    opacity: 0;\
    background: url('//dd6zx4ibq538k.cloudfront.net/static/images/2841/2e535be6c789a5da4ff8a4ebd49f8364_488_162.png') no-repeat;\
    width: 488px;\
    height: 162px;\
    margin-top: -163px;\
    margin-left: -239px;\
    -webkit-transition: all 0.5s ease-in-out;\
    -moz-transition: all 0.5s ease-in-out;\
    -o-transition: all 0.5s ease-in-out;\
    transition: all 0.5s ease-in-out;\
  }\
  #vm-023-header-text, .vm-023-what-this-header, .vm-023-why-not-sooner-header {\
    position: relative;\
    z-index: 1;\
    color: white;\
    margin-left: 20px;\
    margin-top: 13px;\
    font-size: 1.4em;\
  }\
  #vm-023-main-text ul {\
    margin-top: 30px;\
    margin-left: 20px;\
    color: #636363;\
  }\
  #vm-023-main-text ul li {\
    margin-bottom: 7px;\
  }\
  #vm-023-main-text ul li span {\
    color: #0F9031;\
    font-weight: bold;\
  }\
  #vm023-popup-circle:hover #vm023-hardines-popup {\
    visibility: visible;\
    opacity: 1;\
    transition-delay: 0s;\
  }\
  .vm023-what-this {\
    position: relative;\
    clear: both;\
    text-decoration: underline;\
    cursor: pointer;\
  }\
  .vm023-what-this-popup {\
    position: absolute;\
    visibility: hidden;\
    opacity: 0;\
    background: url('//dd6zx4ibq538k.cloudfront.net/static/images/2841/261d55c83314f1b18a34b0b48e373e0e_488_238.png') no-repeat;\
    width: 488px;\
    height: 250px;\
    bottom: 31px;\
    margin-left: -210px;\
    cursor: default;\
    z-index: 10;\
    -webkit-transition: all 0.5s ease-in-out;\
    -moz-transition: all 0.5s ease-in-out;\
    -o-transition: all 0.5s ease-in-out;\
    transition: all 0.5s ease-in-out;\
  }\
  .vm023-what-this-popup a {\
    cursor: pointer;\
    text-decoration: underline;\
  }\
  .vm023-what-this:hover .vm023-what-this-popup {\
    visibility: visible;\
    opacity: 1;\
    transition-delay: 0s;\
  }\
  .vm-023-what-this-main-text {\
    margin-left: 110px;\
    margin-top: 28px;\
    width: 350px;\
  }\
  .vm-023-what-this-main-text .vm023-what-this-image {\
    position: absolute;\
    width: 160px;\
    height: 173px;\
    margin-left: -95px;\
    margin-top: -9px;\
  }\
  .vm-023-what-this-main-text ul {\
    margin-left: 74px;\
  }\
  .vm-023-what-this-main-text ul li {\
    margin-bottom: 15px;\
  }\
  .vm023-why-not-sooner {\
    width: 115px;\
    text-decoration: underline;\
    cursor: pointer;\
  }\
  .vm023-why-not-sooner-popup {\
    position: absolute;\
    visibility: hidden;\
    opacity: 0;\
    background: url('//dd6zx4ibq538k.cloudfront.net/static/images/2841/9a1d40082f81fdcf392cb26268393015_488_245.png') no-repeat;\
    width: 488px;\
    height: 245px;\
    margin-top: -260px;\
    margin-left: -202px;\
    cursor: default;\
    z-index: 10;\
    -webkit-transition: all 0.5s ease-in-out;\
    -moz-transition: all 0.5s ease-in-out;\
    -o-transition: all 0.5s ease-in-out;\
    transition: all 0.5s ease-in-out;\
  }\
  .vm-023-why-not-sooner-main-text {\
    margin-left: 15px;\
    margin-top: 20px;\
  }\
  .vm-023-why-not-sooner-main-text ul {\
    width: 460px;\
  }\
  .vm-023-why-not-sooner-main-text ul li {\
    margin-bottom: 10px;\
  }\
  .vm023-why-not-sooner:hover .vm023-why-not-sooner-popup {\
    visibility: visible;\
    opacity: 1;\
    transition-delay: 0s;\
  }\
  .vm023-why-not-sooner-popup:hover {\
    visibility: hidden !important;\
    opacity: 0 !important;\
  }\
  .new-tabs-small a {\
    padding: 0 10px;\
  }\
  #vm023-arrive-image {\
    position: relative;\
    background: url('//dd6zx4ibq538k.cloudfront.net/static/images/2841/e90a2e3257754c6188edb0dc7bb56473_175_264.jpeg') no-repeat;\
    width: 175px;\
    height: 264px;\
  }\
  #vm023-arrive-image span {\
    position: relative;\
    top: 263px;\
  }\
  #vm-023-arrive {\
    margin-left: 187px;\
    margin-top: -268px;\
  }\
  #vm-023-arrive li {\
    margin-bottom: 7px;\
  }\
  #vm-023-arrive #vm023-checked-for li {\
    margin-bottom: 0px;\
  }\
  #tabbed-panel-23 {\
    display: none;\
  }\
  #vm023-reviews {\
    color: #009530;\
    text-decoration: underline;\
  }\
  .promo {\
    position: absolute;\
    text-align: center;\
    right: 179px;\
    margin-top: 46px;\
  }\
  .vm-023-stockInfo-margin {\
    margin-top: 10px !important;\
  }\
  .stockInfo li.size {\
    margin-top: 0px;\
  }\
  #AWA-p1 {\
    float: left;\
    margin-top: 27px;\
    margin-bottom: 15px;\
  }\
  #AWA-p2 {\
    clear: both;\
  }\
  #vm-023-arrive {\
    margin-left: 0;\
    margin-top: 0;\
    width: 246px;\
    float: left;\
  }\
  #vm023-arrive-image {\
    float: right;\
  }";

  // Functions
  // Object containing functions, some helpful functions are included
  exp.func = {};

  // Init function
  // Called to run the actual experiment, DOM manipulation, event listeners, etc
  exp.init = function() {
      var $ = require('jquery');
      var poller = require('@qubit/poller');

    // Append style to head
    $('head').append('<style type="text/css">'+exp.css+'</style>');

    var $stockInfo = $('.stockInfo');
    var $despatch = $stockInfo.find('.despatch.prodPageDes');
    var $prodFeatures = $('#prodFeatures');
    var $size = $('.size');
    var $newTabsSmall = $('.new-tabs-small a');


    var $hardiness = $([
      '<dl class="vm023 clearFloat">',
        '<dt>Hardiness:</dt>',
        '<dd>',
          '<span id="vm023-hardiness"></span>',
          '<div id="vm023-popup-circle">',
            '<div id="vm023-hardines-popup">',
              '<div id="vm-023-header-text">Hardiness</div>',
              '<div id="vm-023-main-text">',
                '<ul>',
                  '<li><span>Hardy</span> - Tolerates temperatures down to -15°C (5°F)</li>',
                  '<li><span>Half-hardy</span> - Tolerates temperatures down to 0°C (32°F)</li>',
                  '<li><span>Tender</span> - Plant liable to damage or may not survive at temperatures below 5°C (41°F)</li>',
                '</ul>',
              '</div>',
            '</div>',
          '</div>',
        '</dd>',
      '</dl>'
      ].join(''));


    var whatThis = [
      '<li class="vm023-what-this">',
        'what\'s this?',
        '<div class="vm023-what-this-popup">',
          '<div class="vm-023-what-this-header"></div>',
          '<div class="vm-023-what-this-main-text">',
            '<div class="vm023-what-this-image"></div>',
            '<ul>',
              '<li class="vm023-what-this-text"></li>',
              '<li class="vm023-what-this-more-info"></li>',
            '</ul>',
          '</div>',
        '</div>',
      '</li>'
      ].join('');


    var whyNotSooner = [
      '<div class="vm023-why-not-sooner">',
        'why not sooner?',
        '<div class="vm023-why-not-sooner-popup">',
          '<div class="vm-023-why-not-sooner-header">Why can I not receive this plant sooner?</div>',
          '<div class="vm-023-why-not-sooner-main-text">',
            '<ul>',
              '<li>We will deliver your plant direct to your door at the perfect time for planting.</li>',
              '<li>Your plants are being grown by our professional growers to ensure that you receive good quality, healthy plants.</li>',
              '<li>',
                'Many plants sold in traditional outlets (such as garden centres and DIY outlets) are grown ',
                'to look good whilst they are on display. We grow your plants to provide you with ',
                'long-lasting healthy plants with great garden performance.',
              '</li>',
            '</ul>',
          '</div>',
        '</div>',
      '</div>'
      ].join('');



    var howPlantsArriveTab = [
      '<a class="" style="background-image: url(/medias/sys_master/8796096331806.gif);" id="tab-23" onclick="showTab(23);">',
        '<h3><span class="priceColour">How Your Plants Arrive</span></h3>',
      '</a>'
    ].join('');



    var howPlantsArriveMain = [
      '<div id="tabbed-panel-23" class="tabbed-panel">',
        '<div>',
          '<div id="vm023-arrive-image">',
            '<span>Your plants being checked</span>',
          '</div>',
          '<ul id="vm-023-arrive">',
            '<li>',
              'After checking the quality of your plants before ',
              'despatch, we use specially designed containers to ',
              'ensure that your plants will arrive with you in great ',
              'condition.',
            '</li>',
            '<li>',
              'On despatch each plant is care checked by one of ',
              'our team to ensure that they are in perfect condition ',
              'before they leave us. As part of this process we ',
              'check for:',
            '</li>',
            '<li>',
              '<ul id="vm023-checked-for">',
                '<li>- Size</li>',
                '<li>- Healthy foliage</li>',
                '<li>- Strong root system</li>',
                '<li>- Adequate moisture levels</li>',
              '</ul>',
            '</li>',
          '</ul>',
          '<p id="AWA-p1">',
            'We clearly label our packaging so that delivery ',
            'couriers know they are carrying live plants so that ',
            'they take extra care with your packages. Please ',
            'open your package asap upon arrival. You will find ',
            'growing advice for your plants within your package ',
            'or you can view this information against every ',
            'product page online.',
          '</p>',
          '<p id="AWA-p2">We offer a 100% satisfaction guarantee or your money back if for any reason you are not happy with your plants.</p>',
        '</div>',
      '</div>'
      ].join('');


    var whatThisMatch = [
      { regexCheck: /garden(-| )ready/i, header: "Garden ready plug plants",
        text: "Our large garden-ready plug plants are more developed and you can plant them straight into the garden - no need to pot up or grow on! Generally 10-12cm in height.",
        moreInfo: "For more information on how to grow plug plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/plug-plants-video",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/garden-ready.jpg"},

      { regexCheck: /tuber/i, header: "Tubers",
        text: "The bulb size relates to the circumference measured in centimetres. All are supplied in a dormant state and in the largest size possible.",
        moreInfo: "For more information on how to grow tubers plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/how-to-grow-bulbs",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/bulb.jpg"},

      { regexCheck: /plug plant/i, header: "Plug plants",
        text: "These healthy baby plants have a strong root system and are ready to plant straight into hanging baskets and containers, or can be grown on for garden planting too, once all risk of frost has passed. Generally 8-12cm in height.",
        moreInfo: "For more information on how to grow plug plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/plug-plants-video",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/plug-plant.jpg"},

      { regexCheck: /bulb/i, header: "Bulbs",
        text: "The bulb size relates to the circumference measured in centimetres. All are supplied in a dormant state and in the largest size possible.",
        moreInfo: "For more information on how to grow bulbs please <a>click here.</a>", link: "http://www.thompson-morgan.com/how-to-grow-bulbs",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/bulb.jpg"},

      { regexCheck: /tray/i, header: "Plug tray plants",
        text: "Plug trays are the best way to get lots of plants for your money. Generally 6-8cm high from base to tip, these healthy plugs will require potting on into larger trays or pots and growing on until ready to plant out.",
        moreInfo: "For more information on how to grow plug plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/plug-plants-video",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/plug-plant.jpg"},

      { regexCheck: /potted/i, header: "Potted plants",
        text: "Our potted plants have a well developed root system giving them the best of starts. Many of our perennial plants are supplied as potted plants.",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/potted-plant.jpg"
      }
    ];


    // insert whatThis pop up
    var whatThisCheck = function($match) {
      for ( var i = 0; i < whatThisMatch.length; i++ ) {
        if ( whatThisMatch[i].regexCheck.test($match.text()) ) {
          insertWhatThis(whatThisMatch[i].header, $match, i);
          return;
        }
      }
    };

    var insertWhatThis = function(header, $match, i) {
      $match.after(whatThis);
      var $whatThisHeader = $match.parent().find('.vm-023-what-this-header');
      var $whatThisText = $match.parent().find('.vm023-what-this-text');
      var $whatThisMoreInfo = $match.parent().find('.vm023-what-this-more-info');
      var $whatThisImage = $match.parent().find('.vm023-what-this-image');

      if ( header !== "Potted plants" ) {
        $whatThisMoreInfo[0].innerHTML = whatThisMatch[i].moreInfo;
        $whatThisMoreInfo.find('a').attr('href', whatThisMatch[i].link);
        $whatThisMoreInfo.find('a').attr('target', '_blank');
      }

      $whatThisHeader.text(whatThisMatch[i].header);
      $whatThisText.text(whatThisMatch[i].text);
      $whatThisImage.css('background', 'url("' + whatThisMatch[i].imageLink + '") no-repeat');
    };



    for ( var i = 0; i < $size.length; i++ ) {
      whatThisCheck($size.eq(i));
    }


    // insert whyNotSooner pop up
    var thisMonth = new Date().getUTCMonth();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var nextMonth;
    if (thisMonth == 11) {
      nextMonth = 0;
    } else {
      nextMonth = thisMonth + 1;
    }


    $despatch.each(function(e) {
      var despatchText = $(this).text().split(" ");
      // If month in despatchText != this month && month in despatch text is found
      var despatchMonth = despatchText[despatchText.length-2];
      if (despatchMonth !== months[thisMonth] && months.indexOf(despatchMonth) > -1) {
        // If despatchText is 2 months or more in the future
        if (months.indexOf(despatchMonth) !== nextMonth) {
          $($stockInfo[e]).find('.wishListLinkContainer').before(whyNotSooner);
        }
      }
    });


    // insert hardiness row
    poller('#productCont .facetValueClass dd', function() {
      var hardinessText = $('#productCont .facetValueClass dd').text();

      if (hardinessText.match(/\w+\-\w+/i)) {
        $hardiness.find('#vm023-hardiness').text(hardinessText.match(/\w+\-\w+/i)[0]);
        $prodFeatures.append($hardiness);
      }

      else if (hardinessText.match(/\w+/i)) {
        $hardiness.find('#vm023-hardiness').text(hardinessText.match(/\w+/i)[0]);
        $prodFeatures.append($hardiness);
      }

    });


    // populate customer reviews with number of reviews
    poller(['#productCont b', 'li.border-bottom-grey', function() {
      return $('#productCont b:first').text() === "Customer Review Rating";
    }], function() {
      var reviewsQuantity = $('li.border-bottom-grey').length;
      var pluralize = reviewsQuantity === 1 ? '' : 's';
      var $reviewsLink = $('<a href="#" id="vm023-reviews">(' + reviewsQuantity + ' review' + pluralize + ')</a>');
      $('#productCont b:first').html($reviewsLink);

      $reviewsLink.click(function() {
        $newTabsSmall.last().click();
        $("html, body").animate({ scrollTop: $newTabsSmall.position().top }, 300, 'linear');
      });

    });


    // insert product features after the header
    poller('.facetValueClass', function() {

      $('.facetValueClass').after($prodFeatures);

    });


    $($stockInfo).first().addClass('vm-023-stockInfo-margin');
    $newTabsSmall.last().before(howPlantsArriveTab);
    $('.product-additional-info-middle').append(howPlantsArriveMain);
    $('#tab-23').click();

  };

  // Run the experiment
  exp.init();

  // Return the experiment object so we can access it later if required
  return exp;

  // Close the IIFE, passing in jQuery and any other global variables as required
  // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
}