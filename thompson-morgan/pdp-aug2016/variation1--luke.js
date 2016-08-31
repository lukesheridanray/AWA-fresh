/*

This is Luke's attempt at this test.  There are some bugs relating to the unique
quirks of each specific product page.

In the interests of time, due to a tight deadline, the test was passed over and
began from scratch.
*/


function () {

  //
  // CGIT Optimizely Boilerplate - version 0.1.4
  //

  // JSHint flags
  // jshint multistr: true
  // jshint jquery: true
  // //
  // 'use strict';
  // if (typeof String.prototype.trim !== 'function') {
  //   String.prototype.trim = function() {
  //     return this.replace(/^\s+|\s+$/g, '');
  //   };
  // }

  // // Wrap the experiment code in an IIFE, this creates a local scope and allows us to
  // // pass in jQuery to use as $. Other globals could be passed in if required.
  // var exp = (function($) {

  //    // Initialise the experiment object
  //    var exp = {};

  //    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
  //    // (always) have 'console' set (e.g. IE9)
  //    exp.log = function (str) {
  //        if (typeof window.console !== 'undefined') {
  //            console.log(str);
  //        }
  //    };

  //    // Log the experiment, useful when multiple experiments are running
  //    exp.log('Product Page v3.0 - var2 - Desktop');

  //    /*
  //    // Condition
  //    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
  //    exp.condition = $('.unique-selector');
  //    */
  //    exp.condition = $('#32485735');

  //    // Check for a condition and return false if it has not been met
  //    if(exp.condition && !exp.condition.length) {
  //        exp.log('Product Page Experiment failed a condition');
  //        return false;
  //    }

  //    // Variables
  //    // Object containing variables, generally these would be strings or jQuery objects
  //    exp.vars = {
  //    };

  //    // Styles
  //    // String containing the CSS for the experiment


  //    // Functions
  //    // Object containing functions, some helpful functions are included
  //    exp.func = {};

  //    // Init function
  //    // Called to run the actual experiment, DOM manipulation, event listeners, etc
  //    exp.init = function() {
  //        // Run only on Flower, Vegetable, or Fruit categories
  //        if ($('.no-background-image').text() == "Flowers" || $('.no-background-image').text() == "Vegetables" || $('.no-background-image').text() == "Fruit" || $('.no-background-image').text() == "Large plants") {
  //            exp.log('Exp running on correct category')
  //        } else {
  //            exp.log('Exp not running of flower, vegetable, or fruit page - exiting.');
  //            return false;
  //        }

  //        // Append style to head


  //        // Get product description
  //        var classification = $('.facetValueClass').html();
  //        var y = classification.length;
  //        var prodText = $('#productCont').html();
  //        var n = prodText.indexOf(classification);
  //        var yn = y + n + 1;
  //        if (classification.substring(0, 3) == "<DL") {
  //            exp.log('IE is messing with tags');
  //            prodText = prodText.substring(yn, prodText.indexOf('<DIV id=prodFeatures'));
  //        } else {
  //            exp.log('Normal HTML');
  //            prodText = prodText.substring(yn, prodText.indexOf('<div id="prodFeatures"'));
  //        }
  //        prodText = prodText.substring(6);

  //        // Replace original main text without product description
  //        var productContHTML = $('#productCont').html();
  //        var newProductContHTML = productContHTML.replace(prodText,'');

  //        $('#productCont').html(newProductContHTML);

  //        // Add Description Tab
  //        var tab2Clone = $('#tab-2').clone();
  //        $(tab2Clone).attr('id', 'AWA-descr');
  //        $(tab2Clone).removeAttr('onclick');
  //        $('.new-tabs-small').append(tab2Clone);

  //        // Add Description Panel
  //        var descPanel = $('#tabbed-panel-1').clone();
  //        $(descPanel).attr('id', 'AWA-desc-panel');
  //        $('.product-additional-info-middle').append(descPanel);
  //        $('#AWA-desc-panel').text('No description.'); // Placeholder
  //        $('#AWA-descr').find('span').text('Description');

  //        $('#AWA-descr').click(function() {
  //            $('.product-additional-info #AWA-desc-panel').show();
  //            $(this).addClass('active');

  //            $('.product-additional-info #tabbed-panel-1').hide();
  //            $('.product-additional-info #tabbed-panel-2').hide();
  //            $('.product-additional-info #tabbed-panel-3').hide();
  //            $('.product-additional-info #tabbed-panel-4').hide();

  //            $('#tab-1').removeClass('active');
  //            $('#tab-2').removeClass('active');
  //            $('#tab-3').removeClass('active');
  //            $('#tab-4').removeClass('active');
  //        });

  //        $('#tab-1').click(function() {
  //            $('#AWA-desc-panel').hide();
  //            $('#AWA-descr').removeClass('active');
  //            $('.product-additional-info #tabbed-panel-1').show();
  //        });
  //        $('#tab-2').click(function() {
  //            $('#AWA-desc-panel').hide();
  //            $('#AWA-descr').removeClass('active');
  //            $('.product-additional-info #tabbed-panel-2').show();
  //        });
  //        $('#tab-3').click(function() {
  //            $('#AWA-desc-panel').hide();
  //            $('#AWA-descr').removeClass('active');
  //            $('.product-additional-info #tabbed-panel-3').show();
  //        });
  //        $('#tab-4').click(function() {
  //            $('#tab-4').addClass('active');
  //            $('#AWA-desc-panel').hide();
  //            $('#AWA-descr').removeClass('active');
  //            $('.product-additional-info #tabbed-panel-4').show();
  //        });

  //        // Place product description in Description tab
  //        $('#AWA-desc-panel').html(prodText);

  //        // Remove extras from product description panel
  //        $('#AWA-desc-panel .producticon').remove();
  //        $('#AWA-desc-panel img[src*="reviews"]').remove();
  //        $('#AWA-desc-panel b:contains("Customer Reviews")').remove();
  //        $('#AWA-desc-panel b:contains("Customer Rating")').remove();
  //        $('#AWA-desc-panel .productBullet').remove();
  //        $('#AWA-desc-panel').hide();



  //        $('#AWA-show-reviews').click(function() {
  //            $('#tab-4').trigger("click");
  //        });


  //        // Add 'Read More' link and first sentence of description
  //        var newDescriptionText = $('#AWA-desc-panel').text();

  //        var firstSentence = $.trim(newDescriptionText.substring(0, newDescriptionText.indexOf('.')));
  //        firstSentence += ".";
  //        var descriptionLink = "<p>" + firstSentence + " <a id='read-more' href='#additional-links'>Read more</a></p>";
  //        $('#prodFeatures').before(descriptionLink);

  //        $('#read-more').click(function(e) {
  //            $('#AWA-descr').trigger("click");
  //        });


  //        // Calculate Unit Price
  //        $('.stockInfo').each(function() {
  //            var quantityText = $(this).find('.size').text();
  //            var quantity = quantityText.substring(0, quantityText.indexOf(' '));
  //            var price = $(this).find('.price').clone().children().remove().end().text();
  //            price = $.trim(price).substring(1);
  //            var unitPrice = (price / quantity).toFixed(2);

  //            // This Petunia cannot have its unit price calculated normally
  //            if ($('.productClass').text() == "Petunia 'Frills & Spills'™ Mixed' (Garden Ready)") {
  //                $(this).find('.wishListLinkContainer').append("<span class='AWA-unit-price'>(£14.99 each)</span>");
  //            } else if (quantity != 1) {
  //                $(this).find('.wishListLinkContainer').append("<span class='AWA-unit-price'>(£" + unitPrice + " each)</span>");
  //            }
  //        });


  //        // Find product code
  //        var code = $('#additional-links .additional-links input[name="productCode"]').val();

  //        // Sometimes the code found has the first letter capitalized so it won't be found in the JSON!
  //        code = code.substr(0, 1).toLowerCase() + code.substr(1);

  //        // WaitFor JSON hander
  //        function waitFor(condition, callback, timeout, keepAlive) {
  //            timeout = timeout || 20000;
  //            keepAlive = keepAlive || false;
  //            var intervalTime = 50,
  //                maxAttempts = timeout / intervalTime,
  //                attempts = 0,
  //                interval = setInterval(function() {
  //                    if (condition()) {
  //                        if (!keepAlive) {
  //                            clearInterval(interval);
  //                        }
  //                        callback();
  //                    } else if (attempts > maxAttempts) {
  //                        clearInterval(interval);
  //                    }
  //                    attempts ++;
  //                }, intervalTime);
  //        }


  //        // Grab productData JSON when it loads
  //        var conditionProductData = function() {
  //          var  productData = productData || undefined;
  //            if (productData !== undefined) {
  //              return productData;
  //            }
  //        };

  //        // Get new product data and add it to the page
  //        var productDataCallback = function() {
  //            var newData = {};
  //            if (productData[code]) {
  //                exp.log('Found product');
  //                exp.log(productData[code]);
  //                newData.sunShade = productData[code]["sun_shade"].split(',').join(', ');
  //                newData.soil = productData[code]["soil_type"].split(',').join(', ');
  //                newData.idealFor = productData[code]["ideal_for"].split(',').join(', ');
  //                newData.floweringMonths = productData[code]["flowering_months"].split(',').join(', ');
  //                newData.hardiness = productData[code]["hardiness"];
  //                newData.sowingMonths = productData[code]["sowing_months"].split(',').join(', ');
  //                newData.harvestMonths = productData[code]["harvest_period"].split(',').join(', ');
  //                newData.height = productData[code]["height"];
  //                newData.spread = productData[code]["spread"];

  //                var newList = "<ul class='AWA-newList'>";

  //                if (newData.sunShade) {
  //                    newList += "<li><span class='AWA-feature'>Position:</span> <span class='AWA-data-item'>" + newData.sunShade + "</span></li>";
  //                }
  //                if (newData.soil) {
  //                    newList += "<li><span class='AWA-feature'>Soil:</span> <span class='AWA-data-item'>" + newData.soil + "</span></li>";
  //                }
  //                if (newData.idealFor) {
  //                    newList += "<li><span class='AWA-feature AWA-ideal-label'>Ideal For:</span> <span class='AWA-data-item AWA-ideal-data'>" + newData.idealFor + "</span></li>";
  //                }
  //                if (newData.floweringMonths) {
  //                    newList += "<li><span class='AWA-feature AWA-flowering-label'>Flowering Period:</span> <span class='AWA-data-item AWA-flowering-data'>" + newData.floweringMonths + "</span></li>";
  //                }
  //                if (newData.hardiness) {
  //                    newList += "<li><span class='AWA-feature'>Hardiness:</span> <span class='AWA-data-item'>" + newData.hardiness + "</span></li>";
  //                }
  //                if (newData.sowingMonths) {
  //                    newList += "<li><span class='AWA-feature AWA-sowing-label'>Sowing Months:</span> <span class='AWA-data-item AWA-sowing-data'>" + newData.sowingMonths + "</span></li>";
  //                }
  //                if (newData.harvestMonths) {
  //                    newList += "<li><span class='AWA-feature AWA-harvest-label'>Harvest Months:</span> <span class='AWA-data-item AWA-harvest-data'>" + newData.harvestMonths + "</span></li>";
  //                }
  //                if (newData.height) {
  //                    newList += "<li><span class='AWA-feature'>Height:</span> <span class='AWA-data-item'>" + newData.height + "</span></li>";
  //                }
  //                if (newData.spread) {
  //                    newList += "<li><span class='AWA-feature'>Spread:</span> <span class='AWA-data-item'>" + newData.spread + "</span></li>";
  //                }

  //                newList += "</ul>";

  //                $('#prodFeatures').html(newList);
  //            } else {
  //                exp.log('Product not found in spreadsheet');
  //            }
  //        };

  //        waitFor(conditionProductData, productDataCallback);

  //    };

  //    // Run the experiment
  //    exp.init();

  //    // Return the experiment object so we can access it later if required
  //    return exp;

  //    // Close the IIFE, passing in jQuery and any other global variables as required
  //    // if jQuery is not already used on the site use optimizely.$ instead
  // })(jQuery);



  //function() {
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
  exp.log('Product Page Tips - v8 - var2 - new');

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

  // Return experiment if URL contains "seeds" or "garden-supplies" as per Johann email (9/22/15): "It might be worth excluding that tab from the test where URL’s contain ‘seed’ or ‘garden-supplies’"
  if (window.location.href.indexOf("garden-supplies") > -1 || window.location.href.indexOf("seed") > -1 || window.location.href.indexOf("christmas-gift") > -1) {
      exp.log('Product Page Tips should not run on seeds, garden supplies, or christmas gifts - existing');
      return false;
  }

  // Return experiment if URL contains "seeds" or "garden-supplies" as per Johann email (9/22/15): "It might be worth excluding that tab from the test where URL’s contain ‘seed’ or ‘garden-supplies’"
  if ($(".productClass").text().indexOf("Christmas Gift") > -1) {
      exp.log('Product Page Tips should not run on christmas gifts - exiting');
      return false;
  }

  // if ($('.no-background-image').text() != "Flowers" && $('.no-background-image').text() != "Vegetables" && $('.no-background-image').text() != "Fruit" && $('.no-background-image').text() != "Large plants" && $('.no-background-image').text() != "Garden Supplies"){
  //   exp.log('Product Page Tips not running on Fruit, Large Plants, Vegetables, or Garden supplies, exiting');
  //   return false;
  // }

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
  .vm-023-what-this-main-text {\
    margin-left: 110px;\
    margin-top: 28px;\
    width: 350px;\
  }\
  .AWA-main-text-plug .AWA-what-this-image {\
    width: 160px;\
    height: 173px;\
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
    background: url('//dd6zx4ibq538k.cloudfront.net/static/images/2841/e90a2e3257754c6188edb0dc7bb56473_175_264.jpeg') no-repeat;\
    width: 175px;\
    height: 300px;\
    border: 1px solid black;\
  }\
  #vm023-arrive-image span {\
    position: relative;\
    top: 263px;\
    left: 9px;\
  }\
  p#AWA-p2 {\
      float: left;\
      width: 49%;\
      margin-top: -105px;\
      max-width: 50%;\
      border-top: 1px solid black;\
      padding-top: 20px;\
      border-bottom: 1px solid black;\
      padding-bottom: 23px;\
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
  .vm-023-stockInfo-margin {\
    margin-top: 10px !important;\
  }\
  .stockInfo li.size {\
    margin-top: 0px;\
  }\
  #AWA-p1 {\
    float: left;\
    padding-bottom: 12px;\
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
  }\
  .stockInfo li.promo {\
    text-align: center;\
    padding-left: 10px !important;\
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
        '<div class="vm023-what-this-popup">',
          '<div class="AWA-header-plug"></div>',
          '<div class="AWA-main-text-plug">',
            '<div class="AWA-what-this-image"></div>',
            '<ul>',
              '<li class="AWA-plug-text"></li>',
              '<li class="AWA-plug-text-info"></li>',
            '</ul>',
          '</div>',
        '</div>',
      '</li>'
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
            '<span>A team member checks every plant before despatch</span>',
          '</div>',
          '<ul id="vm-023-arrive">',
            '<li>',
            'We use specially designed containers to ensure that your plants will arrive with you in great condition. ',
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
            'We clearly label packaging and delivery staff know they are carrying live plants so that they take extra care with your packages. ',
            'You will find growing advice for your plants within your package.',
          '</p>',
          '<p id="AWA-p2">Our aim is to provide gardeners with the best quality plants that money can buy. If for any reason you are not happy with your plants, we\'ll offer a refund.</p>',
        '</div>',
      '</div>'
      ].join('');


    var whatThisMatch = [
      { regexCheck: /postiplug/i, header: "Postiplug plants",
        text: "We've also redesigned our larger plug size so that these parcels will also fit through most letter boxes, so they're fresher and will arrive sooner just like our smaller plugs. Postiplugs are versatile, superb value and can be planted straight into baskets and other containers.",
        moreInfo: "For more information on how to grow Postiplug plants please <a>click here.</a>",
        link: "http://www.thompson-morgan.com/plug-plants-video",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/postie-plug.jpg"},

      { regexCheck: /garden(-| )ready/i, header: "Garden ready plug plants",
        text: "Our large garden-ready plug plants are more developed and you can plant them straight into the garden - no need to pot up or grow on! Generally 10-12cm in height.",
        moreInfo: "For more information on how to grow plug plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/plug-plants-video",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/garden-ready.jpg"},

      { regexCheck: /tuber/i, header: "Tubers",
        text: "The bulb size relates to the circumference measured in centimetres. All are supplied in a dormant state and in the largest size possible.",
        moreInfo: "For more information on how to grow tubers plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/how-to-grow-bulbs",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/bulb.jpg"},

      { regexCheck: /jumbo plug plant/i, header: "Jumbo plug plants",
        text: "Jumbo plugs can be planted straight into baskets or other containers. Plants are usually 8-12cm in height from base to tip, and the plug module could be 3-4cm in diameter, depending on the variety.",
        moreInfo: "For more information on how to grow plug plants please <a>click here.</a>", link: "http://www.thompson-morgan.com/plug-plants-video",
        imageLink: "http://www.thompson-morgan.com/static-images/tandm/static-articles/jumbo-plug.jpg"},

      { regexCheck: /plug plant/i, header: "Plug plants",
        text: "Supplied in our exclusive cartridge plug system \xAEPAP, the majority of plug plant deliveries will fit through your letterbox, so your plants are delivered as fresh and healthy as the day they left the nursery.",
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
      var $whatThisHeader = $match.parent().find('.AWA-header-plug');
      var $whatThisText = $match.parent().find('.AWA-plug-text');
      var $whatThisMoreInfo = $match.parent().find('.AWA-plug-text-info');
      var $whatThisImage = $match.parent().find('.AWA-what-this-image');

      if ( header !== "Potted plants" ) {
        $whatThisMoreInfo[0].innerHTML = whatThisMatch[i].moreInfo;
        $whatThisMoreInfo.find('a').attr('href', whatThisMatch[i].link);
        $whatThisMoreInfo.find('a').attr('target', '_blank');
      }

      $whatThisHeader.text(whatThisMatch[i].header);
      $whatThisText.text(whatThisMatch[i].text);
      // $whatThisImage.html( '<img>' whatThisMatch[i].imageLink + '")');
      $('.AWA-what-this-image').append('<img class="AWA-plug-img"></img>');
      $(".AWA-plug-img").attr("src", whatThisMatch[i].imageLink);
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

    /* --- Var 2: No "Why Not Sooner Link" --- */
    // $despatch.each(function(e) {
    //   var despatchText = $(this).text().split(" ");
    //   // If month in despatchText != this month && month in despatch text is found
    //   var despatchMonth = despatchText[despatchText.length-2];
    //   if (despatchMonth !== months[thisMonth] && months.indexOf(despatchMonth) > -1) {
    //     // If despatchText is 2 months or more in the future
    //     if (months.indexOf(despatchMonth) !== nextMonth) {
    //       $($stockInfo[e]).find('.wishListLinkContainer').before(whyNotSooner);
    //     }
    //   }
    // });


    // // insert hardiness row
    // poller('#productCont .facetValueClass dd', function() {
    //   var hardinessText = $('#productCont .facetValueClass dd').text();

    //   if (hardinessText.match(/\w+\-\w+/i)) {
    //     $hardiness.find('#vm023-hardiness').text(hardinessText.match(/\w+\-\w+/i)[0]);
    //     $prodFeatures.append($hardiness);
    //   }

    //   else if (hardinessText.match(/\w+/i)) {
    //     $hardiness.find('#vm023-hardiness').text(hardinessText.match(/\w+/i)[0]);
    //     $prodFeatures.append($hardiness);
    //   }

    // });


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
    // poller('.facetValueClass', function() {

    //   $('.facetValueClass').after($prodFeatures);

    // });


    $($stockInfo).first().addClass('vm-023-stockInfo-margin');

    // Remove the 'how your plants will arrive' tab from pages related to potatoes, onions, garlic and mushrooms. (Johann email 11/25/15)
    var forbiddenPages = ["potato", "onion", "garlic", "mushroom"];
    var breadcrumbText = $("#breadcrumbs").text().toLowerCase();
    var forbidden = false;
    for (var i = 0; i < forbiddenPages.length; i++) {
        if (breadcrumbText.indexOf(forbiddenPages[i]) > -1) {
            forbidden = true;
        }
    }

    if (!forbidden) {
        $newTabsSmall.last().before(howPlantsArriveTab);
        $('.product-additional-info-middle').append(howPlantsArriveMain);
        $('#tab-23').click();
    }

      // 11/15 padding fix
     $(".quantity").attr('style', 'padding: 0 5px 0 5px;');

      $('#tabbed-panel-4').prepend($('#prodFeatures'));

  };

  // Run the experiment
  exp.init();

  // Return the experiment object so we can access it later if required
  return exp;

  // Close the IIFE, passing in jQuery and any other global variables as required
  // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}



  if ($(".t011").length) {
    console.log('Large image tweak already applied, skipping...');
    return;
  }

  //Extract image data
  var images = [];
  $(".product-alternative-images a").each(function() {
    images.push({
      thumb: $(this).find("img").attr("src"),
      full: $(this).attr("href")
    });
  });

  //Extract video
  if ($("#productDetailsThumbs .videos a").length) {
    var match = $("#productDetailsThumbs .videos a").attr("onclick").toString().match(/\/medias\/sys_tandm\/\d+.flv/);
    images.push({
      thumb: "//media.thompson-morgan.com/thompsonandmorgan/site-theme/images/btns_showVideo.png",
      video: match[0]
    });
  }

  var html = [
    "<div class='t011'>",
      "<div class='main'>",
        "<img />",
        "<div class='control left'>&laquo;</div><div class='control right'>&raquo;</div>",
        "<div id='tm011video' class='video'></div>",
      "</div>",
      "<div class='thumbs'></div>",
    "</div>"
  ].join("");
  var htmlForBottom = [
    "<div class='t011'>",
      "<div class='main'>",
        "<img />",
        "<div class='control left'>&laquo;</div><div class='control right'>&raquo;</div>",
        "<div id='tm011video' class='video'></div>",
      "</div>",
      "<div class='thumbs-for-bottom'></div>",
    "</div>"
  ].join("");

  var $el = $(html).insertAfter("#product-media");

  if ($('#calendar-display').length) {
    $('.t011').append($('#calendar-display'));
  }

  var showImage = function (index) {
    index = parseInt(index, 10);
    var image = images[index];
    $el.data("active", index);
    $el.find(".thumbs img").removeClass("active");
    $el.find(".thumbs img:eq(" + index + ")").addClass("active");

    //Video type
    if (image.video) {
      $el.find(".main .video").addClass("show");
      $el.find(".main img").addClass("hide");
      flashembed("tm011video", {
        src: "/quicklivecore/swf/QuickLivePlayerDark.swf",
        width: 300,
        height: 300
      }, {
        config: {
          loop: true,
          autoPlay: true,
          controlBarBackgroundColor: '-1',
          initialScale: 'fit',
          videoFile: image.video,
          controlBarGloss: 'none',
          showStopButton: false,
          showMuteVolumeButton: false,
          showFullScreenButton: false,
          showVolumeSlider: false,
          showMenu: false,
          controlsOverVideo: 'ease'
        }
      });
    }

    //normal image type
    else {
      $el.find(".main .video").removeClass("show");
      $el.find(".main img").attr("src", image.full).removeClass("hide");
    }
  };

  //Build thumbs
  for (var i = 0; i < images.length; i++) {
    $el.find(".thumbs").append("<img src='" + images[i].thumb + "' data-index='" + i + "' />");
  }

  //If there is only one image
  if (images.length === 1) {
    $el.find(".thumbs").hide();
  }

  //Thumb click
  $el.find(".thumbs img").click(function () {
    showImage($(this).attr("data-index"));
  });

  //Controls click
  if ($el.find(".thumbs img").length > 1) {
    $el.find("div.control").show();
    $el.find(".control.right").click(function () {
      var current = $el.data("active");
      if (current === images.length - 1) {
        showImage(0);
      } else {
        showImage(current + 1);
      }
    });
    $el.find(".control.left").click(function () {
      var current = $el.data("active");
      if (current === 0) {
        showImage(images.length - 1);
      } else {
        showImage(current - 1);
      }
    });
  }

  //Show first image
  showImage(0);



  console.log('test');

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
    var exp = {
    };

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function (str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('PDP Page - v1 - var2');

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {};

    // Styles
    // String containing the CSS for the experiment
    exp.css = "\
        .stockInfo.out-of-stock .price:after {\
            content: 'Out of stock';\
            position: absolute;\
            bottom: -14px;\
            right: 0;\
            font-size: 12px;\
            color: #cf2a28;\
        }\
        .product-additional-info{\
        width: 100%;\
        }\
        div.tabbed-panel {\
         display: block !important;\
         border-bottom: 1px black solid;\
    padding-bottom: 20px;\
    padding-top: 10px;\
        }\
        .product-additional-info-top-center{\
        display: none;\
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


        $("#additional-links").after('<div class="add-to-cart"<form><label>Qty</label><span><input class="number-product" type="text" value="1" /></span><button class="submit-basket">Add to basket</button></form>   <p class="desatch-date"></p><div class="clear"></div></div>');

        /* active item price max */
        $.fn.ignore = function(sel) {
            return this.clone().find(sel || ">*").remove().end();
        };

        // function to modify the add to basket button
        // @param $button jQuery button object
        // @param action string the action to take
        function mutateBasketButton($button, action) {

            if(action === 'sold') {

                $button.addClass('out-of-stock').html('<strong>Sold out</strong><br />Email me when back in stock');
                $('.add-to-cart label, .add-to-cart .number-product').css({
                    'position': 'relative',
                    'top': '-8px'
                });

            } else if(action === 'available') {

                $button.removeClass('out-of-stock').html('Add to basket');
                $('.add-to-cart label, .add-to-cart .number-product').css({
                    'top': '0'
                });

            }

        }

        // function to set active class and modify add to basket button if out of stock
        $.fn.activateOption = function(sel) {

            if(this.find(".addToBasket").length === 0 && this.find(".emailMe").length !== 0) {
                mutateBasketButton($('button.submit-basket'), 'sold');
            } else {
                mutateBasketButton($('button.submit-basket'), 'available');
            }
            return this.addClass('active');

        };

        // Jamies method for highlighting second highest price option
        (function() {

            var $options = $(".stockInfo");
            var prices = [];
            var secondHighest;

            if($options.length === 1) {
                // just the one, so highlight it
                $options.addClass('single-radio').activateOption();
                return;
            }

            // loop through the options
            $options.each(function() {

                var $self = $(this);

                // get price, assign to DOM attribute
                var price = parseFloat($self.find(".price").ignore("strike").text().trim().replace('£',''));
                $self.data('awa-price', price);

                // if out of stock, add CSS class and don't add to prices array
                if($self.find(".addToBasket").length === 0) {

                    $self.addClass('out-of-stock');

                } else {

                    prices.push(price);

                }

            });

            // no prices, make it so...
            if(prices.length === 0) {
                mutateBasketButton($('button.submit-basket'), 'sold');
                return;
            }

            // only do our sorting if we have more than 1 item
            if(prices.length > 1) {

                // Sort array
                prices.sort(function(a,b) { return a - b; });

                // pop off the highest
                prices.pop();

            }

            // grab what is now the highest
            secondHighest = prices.pop();

            // find the element and apply the active class
            var justOne = false;
            $(".stockInfo").filter(function() {
                if(!justOne) {
                    justOne = $(this).data('awa-price') === secondHighest;
                    return justOne;
                } else {
                    return false;
                }
            }).activateOption();

        })();

        var desptch = $(".stockInfo.active .despatch").html();

        if(desptch === '<span>Despatch:</span> ') {
            $(".desatch-date").html('');
        } else {
            $(".desatch-date").html(desptch);
        }

        $(".submit-basket").click(function() {

            var n = $(".number-product").val();
            var $active = $('.stockInfo.active');

            var $add = $active.find(".addToBasket");
            var $email = $active.find(".emailMe a");

            if($email.length === 0) {
                $email = $('.stockInfo:eq(0) .emailMe a');
            }

            if($add.length === 1) {

                $active.find(".input-quantity").val(n);
                $add.click();

            } else if($email.length === 1)  {

                window.location = window.location.protocol +
                                  '//' +
                                  window.location.host +
                                  $email.attr('href');

            }

        });

        $(".productInfoLeft .size").click(function() {
            $(".stockInfo").removeClass("active");
            $(this).parents(".stockInfo").activateOption();
            var desptch1 =  $(this).parents(".stockInfo").find(".despatch").html();
            if(desptch1 === '<span>Despatch:</span> ') {
                $(".desatch-date").html('');
            } else {
                $(".desatch-date").html(desptch1);
            }
        });
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);








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
    var exp = {
    };

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function (str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('PDP Page - v1 - var2');

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {};

    // Styles
    // String containing the CSS for the experiment
    exp.css = "\
        .productPromo li.vm023-what-this {\
            display: none;\
        }\
        .productPromo li.size {\
            position: relative;\
            padding-left: 20px;\
        }\
        .productPromo li.size:before {\
            position: absolute;\
            width: 10px;\
            height: 10px;\
            top: 5px;\
            left: 0;\
            border: solid 1px #333;\
            border-radius: 50%;\
            content:\"\";\
        }\
        .productPromo li.size::after {\
          background: #333 none repeat scroll 0 0;\
          border-radius: 50%;\
          content: \"\";\
          height: 6px;\
          left: 3px;\
          position: absolute;\
          top: 8px;\
          width: 6px;\
          display: none;\
        }\
        .stockInfo.active .productPromo li.size::after {\
            display: block;\
        }\
        .stockInfo.active.single-radio .productPromo li.size::before,\
        .stockInfo.active.single-radio .productPromo li.size::after {\
            content: none;\
        }\
        .stockInfo.active.single-radio .productPromo li.size {\
            padding-left: 0;\
        }\
        .stockInfo.active .productPromo li.size::after {\
            display: block;\
        }\
        .clearFloat li.prodPageDes,\
        .wishListLinkContainer {\
            display: none;\
        }\
         .basket.prodPageBask,\
        .quantity {\
            visibility: hidden;\
            height: 0px;\
            width: 0;\
        }\
        .productInfoLeft .productPromo ,\
        .productInfoLeft .clearFloat {\
            display: inline-block;\
            vertical-align: top;\
        }\
        .stockInfo strike {\
          display: inline-block;\
          margin-right: 10px;\
        }\
        .stockInfo li.price {\
          margin-top: 0;\
          width: auto;\
        }\
        .stockInfo {\
          background: #f9f9f9 none repeat scroll 0 0;\
          border-bottom: medium none;\
          margin: 0;\
          padding: 10px 10px 0 10px;\
        }\
        .stockInfo.vm-023-stockInfo-margin {\
            padding-top: 10px;\
            border-radius: 5px 5px 0 0;\
            margin-top: 20px;\
        }\
        .add-to-cart {\
          background: #f9f9f9 none repeat scroll 0 0;\
          border-radius: 0 0 5px 5px;\
          margin-bottom: 30px;\
          padding: 20px 20px 0 20px;\
          text-align: right;\
        }\
        .add-to-cart p {\
          float: right;\
          margin: 10px 16px 0 0;\
          min-width: 240px;\
          text-align: center;\
        }\
        .add-to-cart > label {\
          display: inline-block;\
          vertical-align: middle;\
          margin-right: 15px;\
        }\
        .add-to-cart .number-product {\
          display: inline-block;\
          width: 15px;\
          text-align: center;\
          font-size: 14px;\
          margin-right: 40px;\
        }\
        .add-to-cart button {\
          background: #cf2a28 none repeat scroll 0 0;\
          border: 1px solid #757575;\
          color: #fff;\
          height: 54px;\
          min-width: 200px;\
          font-size: 16px;\
          font-weight: bold;\
          margin-right: 16px;\
          cursor: pointer;\
          transition: 0.5s opacity;\
        }\
        .add-to-cart button:hover {\
            opacity: 0.8;\
        }\
        .add-to-cart button.out-of-stock { \
            border: 1px solid rgb(207, 42, 40);\
            color: #cf2a28;\
            background: #fff;\
            font-size: 12px;\
        } \
        .add-to-cart button.out-of-stock strong { \
            font-size: 16px;\
        } \
        #additional-links {\
          margin: 0;\
          text-align: right;\
        }\
        .stockInfo li.quantity,\
        .stockInfo li.prodPageBask {\
          width: 0;\
          padding: 0 !important;\
        }\
        .clear {\
            clear: both;\
        }\
        .stockInfo .productPromo {\
            height: auto;\
        }\
        .stockInfo li.promo {\
          margin-bottom: 10px;\
        }\
        .stockInfo.out-of-stock .price {\
            position: relative;\
        }\
        .stockInfo.out-of-stock .price:after {\
            content: 'Out of stock';\
            position: absolute;\
            bottom: -14px;\
            right: 0;\
            font-size: 12px;\
            color: #cf2a28;\
        }\
        .inner-wrapper-AWA {\
            background: #f9f9f9;\
            width: 97%;\
            margin-left: 48px;\
            padding-bottom: 12px;\
            margin-bottom: 10px;\
        }\
        .center-AWA-product {\
          margin-left: 21px;\
          margin-right: auto;\
          padding-top: 26px;\
          display: block;\
        }\
        p.prodDesc {\
          margin-top: 30px;\
          font-size: 14px;\
        }\
        .size {\
          max-width: 100%;\
          width: 65% !important;\
          font-size: 13px;\
          margin-left: 14px;\
          padding-bottom: 31px;\
        }\
        li.price {\
          margin-right: 45px;\
        }\
        .stockInfo li.price {\
          margin-top: 0;\
          width: auto;\
          display: flex;\
          margin-left: 15px;\
          flex-direction: column;\
           display: -ms-flexbox;\
           -ms-flex-direction: column;\
        }\
        .stockInfo strike {\
          display: inline-block;\
          font-size: 14px;\
          color: black;\
          position: relative;\
          left: 11px;\
        }\
        .now-AWA-price {\
          float: left;\
          margin-right: 61px;\
          position: relative;\
          top: 19px;\
        }\
        .stockInfo.single-radio.active {\
          margin-top: -30px;\
        }\
        .stockInfo li.promo {\
          margin-bottom: 10px;\
          margin-top: 39px;\
        }\
        .add-to-cart {\
          display: flex;\
        }\
        .my-img-AWA {\
          margin-right: 10px;\
          width: 65px;\
        }\
        .thumbs {\
          margin-left: 23px;\
        }\
        .AWA-fav {\
        display: block;\
        margin-left: 50%;\
        margin-top: -27px;\
        margin-bottom: 10px;\
        }\
        div#productCont {\
          width: 34%;\
        }\
        .t011 .main img {\
          width: 640px;\
          height: 550px;\
        }\
        .thumbs {\
          width: 100% !important;\
          margin-left: 60px;\
        }\
        .add-to-cart .number-product {\
          display: inline-block;\
          width: 15px;\
          text-align: center;\
          font-size: 14px;\
          margin-right: 18px;\
        }\
        .bottom-wrapper-AWA {\
    margin-top: 114px;\
    padding-top: 30px;\
        }\
        .wrapper-description {\
    margin-bottom: 20px;\
}\
section {\
    height: 100%;\
}\
        div#tabbed-panel-2  {\
    float: left;\
    width: 50%;\
    max-width: 50%;\
        }\
         div#tabbed-panel-4 {\
    float: right;\
    width: 46%;\
    max-width: 50%;\
    margin-left 90%;\
        }\
        p.my-para-AWA {\
    border-bottom: 1px solid black;\
    padding-bottom: 22px;\
}\
        div#tabbed-panel-3, #tabbed-panel-1 {\
    float: left;\
    width: 50%;\
    max-width: 50%;\
    margin-right: 10px;\
        }\
       .AWA-plug-box {\
    float: left;\
    width: 50%;\
    max-width: 50%;\
    margin-right: 10px;\
        }\
        div#tabbed-panel-23 {\
    width: 47%;\
        height: 50%;\
        }\
         div#tabbed-panel-3 {\
    margin-bottom: 15px;\
        }\
        .product-additional-info-middle {\
     border: none;\
         }\
         a.more-info-AWA {\
    text-decoration: underline;\
}\
 a.more-info-AWA {\
    margin-top: 15px !important;\
    color: #7f7f7f !important;\
}\
.t011 .control.right {\
    right: -191px;\
}\
  a.more-review-AWA {\
    text-decoration: underline;\
}\
 a.more-review-AWA {\
    margin-top: 15px !important;\
    color: black !important;\
}\
#prodFeatures {\
    margin: 0;\
    padding: 0px 0;\
}\
.bottom-wrapper-AWA {\
    border-top: 1px solid #ccc;\
}\
li.despatch.prodPageDes {\
    list-style: none;\
}\
.AWA-despatch {\
    padding: 10px 0px;\
}\
#prodFeatures dd {\
    display: block;\
     float: none;\
    position: relative;\
    right: 58px;\
    white-space: nowrap;\
}\
#prodFeatures > dl:nth-child(3) > dd {\
  right: 10px;\
}\
.AWA-what-this-image {\
    float: right;\
}\
li.AWA-plug-text {\
    padding-top: 16px;\
}\
img.AWA-plug-img {\
    position: relative;\
    bottom: 31px;\
}\
.AWA-plug-box.tabbed-panel {\
    padding-bottom: 2px !important;\
    margin-bottom: 0px !important;\
        height: 142px;\
}\
.AWA-thumbnails li img {\
            height: 84px;\
            width: 75px;\
            border: solid 1px #E4E4E6;\
        }\
        #tabbed-panel-4 > ol > li:nth-child(2){\
          padding-top: 30px;\
            border-bottom: none;\
        }\
        #tabbed-panel-4 > ol > li:nth-child(1){\
          padding-bottom: 45px;\
        }\
        #tabbed-panel-4 > ol > li:nth-child(3) {\
    padding: 0px !important;\
}\
a.more-review-AWA {\
    margin-top: 15px !important;\
    color: black !important;\
    display: block;\
    margin-left: 39%;\
    text-decoration: none;\
}\
div#tabbed-panel-23 {\
    border-bottom: none;\
}\
.review-button-AWA{\
 display: block;\
 margin-left: 10%;\
 margin-right: 10%;\
 border-radius: 20px;\
 background: #f6f6f6;\
 border: 2px solid #ccc !important;\
 color: rgba(0, 0, 0, 0.55);\
 text-align: center;\
}\
a.button:hover {\
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


        // $("#additional-links").after('<div class="add-to-cart"<form><label>Qty</label><span><input class="number-product" type="text" value="1" /></span><button class="submit-basket">Add to basket</button></form>   <p class="desatch-date"></p><div class="clear"></div></div>');



        //Move thumbnails to the right.

        //Wrap descripton in a class and move class somewhere else.
        // jQuery('.wrapper-description').hide();
        // move submit-basket to a new div
        $('.addToBasket-wrapper').append($('.stockInfo', '#additional-links', '.add-to-cart'));
        jQuery('#productCont').wrapInner('<div class= "inner-wrapper-AWA"></div>');
        $('.inner-wrapper-AWA').after($('.thumbs, .product-additional-info'));
        //Wrap more of the items in a div to center it
        jQuery('.inner-wrapper-AWA').find('h1, h2, .facetValueClass, .prodDesc').wrapAll('<div class="center-AWA-product"></div>');

        $('.thumbs').after($('#prodFeatures'));

        //move promo
        $('.price').after($('.promo'));

        //wrap description

        $('.center-AWA-product').after('<div class="wrapper-description"></div>');
        $('.inner-wrapper-AWA').children('p').addClass('my-para-AWA');
        $('.wrapper-description').append($('.my-para-AWA'));
        $('.my-para-AWA').append($('.inner-wrapper-AWA').children('ul'))
        // $('.wrapper-description').hide();


        //fixing text issues.
        jQuery('.price').prepend('<p class="now-AWA-price">Now</p>');
        jQuery('.price').prepend('<p class="was-AWA-price">Was</p>');
        $('.was-AWA-price').append($('strike'));

        //fix add to basket style
        $('.add-to-cart').find('lable').wrap('<div class="lable-AWA"></div>');
        $('.desatch-date').hide();
        //add add to favorites.

        $('.add-to-cart').after('<div class="AWA-fav"><a href="#">Add to wishlist</a></div>')

        //fix thumbnails.
        jQuery('.thumbs').find('img').addClass('my-img-AWA');

        jQuery('#prodFeatures, .product-additional-info, .wrapper-description').wrap('<div class="bottom-wrapper-AWA"></div>');
        jQuery('.bottom-wrapper-AWA').wrapAll('<section></section>');
        $('#product-portlet').append($('section'));



        //fixing the bottom details
        jQuery('#tabbed-panel-3').text('Orders for packets of seed incur a P&P charge of £1.95.\
Orders which include any other products will incur a P&P charge of £4.95.\
Where an order includes both packets of seeds and other products a maximum P&P charge of £6.90 will apply - regardless of the number of items ordered.');

        jQuery('.header3Class').text('Customer Reviews');
        jQuery('#tabbed-panel-23').prepend('<div class="header3Class">How Your Plants Arrive</div>');
        jQuery('#tabbed-panel-3').prepend('<div class="header3Class">Delivery</div>');
        jQuery('#tabbed-panel-1').prepend('<div class="header3Class">How to Grow</div>');
        jQuery('#tabbed-panel-2').prepend('<div class="header3Class">After Care</div>');
        jQuery('#prodFeatures').prepend('<div class="header3Class">Description</div>');
        jQuery('#AWA-p2').prepend('<div class="header3Class">100% Satisfaction Guarantee</div>');

     jQuery('#tabbed-panel-4').prepend(jQuery('.wrapper-description'));

        jQuery('#tabbed-panel-4').prepend(jQuery('#prodFeatures'));


        // $('.my-para-AWA:first').find('.new').prepend('<div class="more-info-AWA"><a class="more-info-AWA">Read More</a></div>');

        $('.my-para-AWA:not(:first)').hide();
         $('#tabbed-panel-4 > div.wrapper-description > p:nth-child(1) > ul').hide();
        jQuery('.my-para-AWA:first').contents().eq(0).wrap('<p class="new"/>');


         $('.my-para-AWA:first').find('.new').after('<div class="more-info-AWA"><a class="more-info-AWA">Read More</a></div>');



        $('#tabbed-panel-2 > div.wrapper-description > p:nth-child(1) > ul').hide();
        $('.more-info-AWA').click(function() {
            $(".my-para-AWA, #tabbed-panel-2 > div.wrapper-description > p:nth-child(1) > ul ").show();
        });
        $('#tabbed-panel-4 > span:nth-child(5)').hide();
        $('#product-portlet > section > div:nth-child(1), #product-portlet > section > div:nth-child(2)').hide();



        //Move the despatch date to the Delivery

        $('.despatch').wrap('<div class="AWA-despatch"></div>');
        $('#tabbed-panel-3').find('.header3Class').after($('.AWA-despatch'));





        // $('.border-bottom-grey:last').hide();
                // $('.border-bottom-grey:first').find('.revReply').after('<div class="more-info-AWA"><a class="more-info-AWA">Read More Reviews</a></div>');



                 $('#tabbed-panel-4 > ol > li:nth-child(3)').after('<div class="more-review-AWA"><a class="more-review-AWA">Submit a Review</a></div>');


$('#postFormReview').hide();
$('.more-review-AWA').click(function() {
            $("#postFormReview").show();
        });


        //fixing minor text issues.
        // jQuery('#vm-023-arrive > li:nth-child(1)').text('We use specially designed containers to ensure that your plants will arrive with you in great condition.');
        // jQuery('#AWA-p1').text('We clearly label our packaging so that delivery couriers know they are carrying live plants so that they take extra care with your packages. You will find growing advice for your plants within your package or you can view this information against every product page online.');

        //Moving the Thumbs to bottom for Now
        // jQuery( ".thumbs" ).clone().appendTo( ".bottom-wrapper-AWA:last" );
        //   // give it an ID
        //   jQuery('#product-portlet > section > div:nth-child(3) > div.thumbs').attr('id', 'myImagesAWA');
        //   // Make it stretch bottom of page.

        //Finally figured out how to make the plug appear.
        jQuery('.vm023-what-this').unwrap();

        jQuery('.vm023-what-this').wrapInner("<div class='AWA-plug-box'></div>")
        $('.AWA-plug-box').unwrap();
        $('.vm023-what-this-popup').removeClass().addClass('AWA-plug-box-inner');
        $('#tabbed-panel-1').before(jQuery('.AWA-plug-box'));
        $('.AWA-plug-box').addClass('tabbed-panel');
        //Make reviews to the top
        $('.AWA-plug-box').after(jQuery('#tabbed-panel-4'));
        //Remove some of the text
        $('.AWA-plug-text-info').hide();
        //give plug the heading it needs
        $('.AWA-header-plug').addClass('header3Class');


        //Remove the text below the submit reviews
         jQuery(jQuery('#postFormReview')[0].nextSibling).wrap('<span style="display:none"></style>');
        jQuery('#tabbed-panel-4 > br').remove()
         jQuery(jQuery('#tabbed-panel-4 > span:nth-child(7)')[0].nextSibling).wrap('<span style="display:none"></style>');


        //move the paragraph
        jQuery('#vm-023-arrive').append(jQuery('#AWA-p1'));
  //       $('').after('<dl class="clearFloat">\
        //      <dt>Height:</dt>\
        //      <dd></dd>\
        //  </dl>');


        //Move this panel when it needs it.
        jQuery('#tabbed-panel-4').append(jQuery('#AWA-desc-panel'));

    //give the review button a class
    jQuery('#tabbed-panel-4 > ol > li:nth-child(3) > div').addClass('review-button-AWA');
    jQuery('#tabbed-panel-23').after(jQuery('#AWA-p2'));



}





    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

jQuery('#tabbed-panel-4').prepend(jQuery('#prodFeatures'));
        jQuery('.new').after(jQuery('#AWA-desc-panel'));



// var height = '',
//     spread = '';

//         // Surely there's a better way of pulling out the first description paragraph?
//         var description = $('.new').text();

//         var heightMatch = description.match(/Height: (.+?)\./);
//         var spreadMatch = description.match(/Spread: (.+?)\./);

//         if (heightMatch !== null) {
//           height = heightMatch[1];
//         }
//         if (spreadMatch !== null) {
//           spread = spreadMatch[1];
//         }


var height = '',
    spread = '';

// Surely there's a better way of pulling out the first description paragraph?
var description = $('.wrapper-description').find('p:visible').last().text();
var $productFeatures = $('#prodFeatures');

var heightMatch = description.match(/Height: (.+?)\./);
var spreadMatch = description.match(/Spread: (.+?)\./);

if (heightMatch !== null) {
  $productFeatures.append('<dl class="clearFloat">\
        <dt>Height:</dt>\
        <dd>'+ heightMatch[1] +'</dd>\
    </dl>');
}
if (spreadMatch !== null) {
  $productFeatures.append('<dl class="clearFloat">\
        <dt>Spread:</dt>\
        <dd>'+ spreadMatch[1] +'</dd>\
    </dl>');
}

var heightOther = '',
    spreadOther = '';

// Surely there's a better way of pulling out the first description paragraph?
var descriptionOther = $('#AWA-desc-panel').find('p:visible').last().text();
var $productFeaturesOther = $('#prodFeatures');

var heightMatchOther = descriptionOther.match(/Height: (.+?)\./);
var spreadMatchOther = descriptionOther.match(/Spread: (.+?)\./);

if (heightMatchOther !== null) {
  $productFeaturesOther.append('<dl class="clearFloat">\
        <dt>Height:</dt>\
        <dd>'+ heightMatchOther[1] +'</dd>\
    </dl>');
}
if (spreadMatchOther !== null) {
  $productFeaturesOther.append('<dl class="clearFloat">\
        <dt>Spread:</dt>\
        <dd>'+ spreadMatchOther[1] +'</dd>\
    </dl>');
}



$.fn.myText = function() {
    var str = '';

    this.contents().each(function() {
        if (this.nodeType == 3) {
            str += this.textContent || this.innerText || '';
        }
    });

    return str;
}; jQuery('.inner-wrapper-AWA').myText()







}
