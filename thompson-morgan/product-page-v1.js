//
// Thompson & Morgan - Product page v1
// Based on CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
// Fixing IE - http://stackoverflow.com/questions/2308134/trim-in-javascript-not-working-in-ie
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

// Image experiment merged
(function ($) {

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
    var match = $("#productDetailsThumbs .videos a").attr("onclick").toString().match(/\/medias\/sys_tandm\/\d+.video.x-flv/);
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
    
    if (!image) {
      return;
    }
    
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
}(jQuery));

// Our experiment
// 
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Thompson & Morgan - Product Page v1 - 1.0');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = false;

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    packedModal:    ' \
        <p>Your plants are guaranteed to arrive in perfect condition, thanks to \
        <strong>specially designed containers which prevent dehydration and protect</strong> from \
        knocks and bruises.</p> \
        <p>Before your plants leave, a member of staff checks each one to ensure \
        optimal levels of moisture for the journey.</p> \
        <p>Delivery staff know they are carrying live plants and take extra care \
        to ensure they arrive safely.</p> \
        <p>Changes were recently introduced to reduce the amount of time plants \
        spend in transit.</p> \
        <p>Plus every order comes with a Growing Guide with easy-to-follow care \
        instructions for your plants.</p> \
        <p>That’s why we confidently offer a unique Money Back “Triple” Guarantee \
        on every plant you buy.',

    pickedModal:    ' \
        <p>Before your plants leave us, <strong>each one is individually examined by 3 \
        different quality inspectors.</strong></p> \
        <p>Each plant is checked by hand for:</p> \
        <ul> \
            <li>Size</li> \
            <li>Healthy foliage</li> \
            <li>Strong root system</li> \
            <li>Moisture levels</li> \
        </ul> \
        <p>Above all, we ask the question ‘Would I be happy to receive this \
        plant?’ If the answer is no, the plant is rejected.</p> \
        <p>That’s why we confidently offer a unique Money Back “Triple” Guarantee \
        on every plant you buy.</p>',

    notsoonerModal: '<h3>Why can I not receive this plant sooner?</h3> \
        <p>Now is not the most suitable planting time for this plant. It will be \
        delivered direct to your door at just the right time for planting.</p> \
        <p>At the moment, your plants are being raised by our professional growers \
        so that you will receive the healthiest specimens possible.</p> \
        <p><strong>Why does this give you better quality plants?</strong></p> \
        <p>Plants sold in traditional outlets (such as garden centres and DIY \
        stores) are selected to look good whilst they are on display. Instead \
        we aim to give you healthy, long-lasting plants for continuous garden performance.</p> \
        <p>That’s why we confidently offer a unique Money Back “Triple” Guarantee \
        on every plant you buy.</p>',
    
    packagingModal: 'Loading...', // Loaded by AJAX

    hardinessModal: '<h3>Hardiness</h3> \
    <p><b style="color: #00572D;">Hardy</b> - Tolerates temperatures down to -15°C (5°F)</p> \
    <p><b style="color: #00572D;">Half-hardy</b> - Tolerates temperatures to 0°C (32°F)</p> \
    <p><b style="color: #00572D;">Tender</b> - Plant liable to damage or may not survive at \
    temperatures below 5°C (41F).</p></div>',

    plant_types: {
        plug:   'Plug', // will be overriden in the loop, if a more specific variation is found (e.g. Mini plug)
        mini:   'Mini-plug',
        jumbo:  'Jumbo',
        posti:  'Postiplugs®',
        garden: 'Garden Ready Plants',
        potted: 'Potted plants',
        bulb:   'Bulbs',
        bare:   'Bareroots',
        large:  'Mature, Large Plants'
    },

    month: ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"],

    packPlantImg: 'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/b41b625c32b5367a2d2c26bb8ed8617a_213_320.jpeg',
    packPlugImg:  'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/3448c8dfe2877f76d53cd1d18e8b70e8_213_320.jpeg', //'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/89e991d1fc4cb643ed98e0ae777eadaf_320_213.jpeg',
    pickPlantImg: 'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/76cb2b9d0ef7eaae82253a3ba4229e25_213_320.jpeg',

    deliveryTable: '<table class="delivery-table"> \
            <tbody> \
                <tr> \
                    <td colspan="4"> \
                            <strong>UK MAINLAND DELIVERY CHARGES </strong> \
                            <strong class="delivery-except-text" style="display:none;"><em>(except postcodes below)</em></strong> \
                    </td> \
                </tr> \
                <tr> \
                    <td> \
                            <strong>Product </strong> \
                    </td> \
                    <td colspan="2"> \
                            <strong>Orders &pound;60 or more</strong> \
                    </td> \
                    <td> \
                        <strong>Orders under &pound;60</strong><br /> \
                        <strong>(regardless of quantity)</strong> \
                    </td> \
                </tr> \
                <tr> \
                    <td> \
                            Seeds \
                    </td> \
                    <td colspan="2"> \
                            <strong>FREE</strong> \
                    </td> \
                    <td> \
                            &pound;1.95 \
                    </td> \
                </tr> \
                <tr> \
                    <td> \
                            All other products apart from seeds \
                    </td> \
                    <td colspan="2"> \
                            <strong>FREE</strong> \
                    </td> \
                    <td> \
                            &pound;4.95 \
                    </td> \
                </tr> \
                <tr> \
                    <td> \
                            Combined seeds and other products \
                    </td> \
                    <td colspan="2"> \
                            <strong>FREE</strong> \
                    </td> \
                    <td> \
                            &pound;6.90 \
                    </td> \
                </tr> \
            </tbody> \
        </table>',

    surchargeTable: '<tr> \
                <td colspan="4"> \
                        <strong>The following surcharge may apply to UK postcodes</strong> \
                        BT, GY, HS, IM, JE, ZE, TR21, TR22, TR23, TR24, TR25, KW, IV, PA20-38, PA41-49, PA60-78, AB31-38, AB40-56, PH4-44, PH49-50 \
                </td> \
            </tr> \
            <tr> \
                <td colspan="2"> \
                        <strong>Product</strong> \
                </td> \
                <td> \
                        <strong>Orders &pound;60 or more</strong> \
                </td> \
                <td> \
                        <strong>Orders under &pound;60</strong> \
                </td> \
            </tr> \
            <tr> \
                <td colspan="2"> \
                        Seeds \
                </td> \
                <td> \
                        <strong>FREE</strong> \
                </td> \
                <td> \
                        &pound;1.95 \
                </td> \
            </tr> \
            <tr> \
                <td colspan="2"> \
                        Potatoes, fruit, bulbs, fertiliser and selected plants, vegetables and garden supplies \
                </td> \
                <td> \
                        &pound;9.99 \
                </td> \
                <td> \
                        &pound;9.99 \
                </td> \
            </tr>',

    deliverySeeds: '<p>Your seeds will be despatched at the time stated above. \
                    As soon as they are sent, we will send you an email to let you know.</p> \
                    <p>If you are also ordering plants, please note that they are only \
                    despatched when they are ready for planting, so could arrive on different \
                    days. However, you will only be charged once for delivery.</p>',

    deliveryGarden: '<p>Your goods will be despatched at the time stated above. As soon as \
                    they are sent, we will send you an email to let you know.</p> \
                    <p>If you are also ordering plants, please note that they are \
                    only despatched when they are ready for planting, so could arrive \
                    on different days. However, you will only be charged once for delivery.</p>',

    deliveryPlants: '<p>Your plants will be delivered at the time stated above, which \
                    is the perfect time for planting. As soon as they are despatched, we \
                    will send you an email to let you know.</p> \
                    <p>Please note that each variety of plant is packed separately, \
                    so if you order several plant varieties or products, they could arrive \
                    on different days. However, you will only be charged once for delivery.</p>',

    surchargeSkus: ['T13904','T15090','T14281P','T18091','T18092','T13859','T13111','T13840','T13134','T18102','T18104','T13889','T40114','T14370C','T14369C','T14373C','T14581C','T14579C','T14580C','T14374','T14591C','T14589C','T14590C','T14584C','T14585C','T14586C','T18108','T15996','T14170','T14175C','T14173C','T14244','T17068','T15065','T15066','T17072','T17073','T15059','T15060','T17042','T17041','T14641','T14644','T15088','T13618','T12385','T14201','T14035','T14101','T11294','T11321','T11614','T11615','T13843','T14235','T14246','T14317','T14322','T14247','T14305','T14306','T14272','T14251','T14232','T13867','T13868','T14292','T14277','T14302','T14336','T14334','T14273','T14267P','T14239P','T14240P','T14236','T14321','T14331','T14335','T14330','T14255P','T14310','T14238','T14237','T14283','T14256','T14257P','T14303','T14296P','T14230P','T14231P','T44608','T14243','T14278','T14248','T14290','T13891P','T14308P','T14309P','T14288','T14341','T14294P','T14316P','T14261P','T14262P','T14313P','T14314P','T14260P','T14249P','T14241P','T14259P','T14279','T14280','T14333P','T14332','T14304','T14274','T14301','T14286','T14229','T14285','T14282','T14291','T14225','T14226','T14289','T14298','T14318','T14287','T14227','T14275','T14324','T14228','T14329','T15072P','T15073P','T14014','T14016','T14015','T14017','T14018','T14019','T14010','T14008','T14033','T14092','T14034','T14116','T14031','T14026','T14025','T14021','T14012','T14029','T14013','T14072','T14081','T14642','T14027','T14051','T14054','T14052','T14057','T14067','T14023','T14113','T14111','T14020','T14028','T14039','T14064','T14009','T14643','T14032','T14086','T14030','T15076P','T15079P','T13023','T14219','T13061P','T14110','T14213P','T13024','T14245','T15063','T15062','T14108','T14159','T14127','T14151','T14134','T14154','T14055','T14216P','T14217P','T14218','T14338','T14319','T14220','T14221','T14088','T15056','T15057','T13042P','T13839C','T18109','T17065','T14320','T15094','T10328','T10488C','T14140','T14376C','T14371C','T14562','T14131','T14135','T14137','T14138','T14167','T14136','T14143','T55300','T14144','T14145','T14146','T14147','T14148','T14169','T14150','T14152','T14916','T14636','T14634','T14638','T14631','T14640','T14633','T14625','T14162P','T14153','T14155P','T14149','T14651','T14652','T14653','T15067','T15068','T15316','TZ14625','T14233','T13638','T17925','T17927','T17901','T17913','T17920','T14193','T17026','T16813P','T11910','T17024','T17022T','T14374C','T10829','T17027','TZ12385','T17884','T17886','T17887','T17888','T17889','T17890','T17891','T17892','T17894','T17895','T17896','T17898','T17900','T17882','T17908','T17909','T17902','T17904','T17907','T17912','T17916','T17914','T17918','T17921','T17922','T17924','T17926','T17928','T17929','T17091','T17092','T17093','T44590B','T17094','T44282P','TJ17057','T14194','T45299','TCH14193','TCH14194','T44266C','T41838','T41836','TJ10488','T45514B','T11846B','T46413','T44506','T45799','T45800','T14339','TZ14064','T46890','TZ14281','TZ13904','T47959P','T46953','T15077P','TZ47959','T45473P','TZ13042P','T52539','T57416','T53146','T53147','T53148']

};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    var plant_type = '',
        hardiness = '',
        plant_size = {},
        modals_created = false,
        p_type_tmp,
        delivery_blurb = '',
        make_review_link,
        read_reviews,
        anySize,
        height_and_spread;

    if ($('.stockInfo:eq(0)').hasClass('stockInfo-first')) {
      console.log('Product page v1 experiment already run, exiting...');
      return;
    }

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
    // QTip2 tooltip styles
    $('head').append('<link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/qtip2/2.0.1/jquery.qtip.min.css" />');

    // Load QTip2 for tooltips
    $.getScript('http://cdn.jsdelivr.net/qtip2/2.0.1/jquery.qtip.min.js', tooltips_loaded);

    // Rejig prices
    $(".stockInfo .quantity label").html('&nbsp;');
    $(".stockInfo").each(function () {
        $(this).find(".basket").append('<span class="promo">'
            + $(this).find(".promo").detach().text() + '</span>');

        if ( ! $(this).find('.price strike').text()) {
            $(this).find('.price strike').remove();
        }
    });

    // Fetch hardiness
    hardiness = $(".facetValueClass dd").text().split(/\s/m)[0];

    // Get dimensions
    height_and_spread = $("#productCont").text().match(/(?:H|h)eight\s*(?:and|&amp;|&)\s*(?:s|S)pread:\s*((?:(?:U|u)p to )?[0-9.]+(?:cm)?\s*\(.*?\))/m);
    if (height_and_spread === null) {
        plant_size.Spread = $("#productCont").text().match(/(?:S|s)pread:\s*((?:(?:U|u)p to )?[0-9.]+(?:cm)?\s*\(.*?\))/m);
        plant_size.Height = $("#productCont").text().match(/(?:H|h)eight:\s*((?:(?:U|u)p to )?[0-9.]+(?:cm)?\s*\(.*?\))/m);
    }
    else {
        plant_size.Spread = plant_size.Height = height_and_spread;
    }
    plant_size.Bulbs  = $("#productCont").text().match(/(?:B|b)ulb (S|s)ize:\s*((?:(?:U|u)p to )?[0-9.]+(?:cm)?\s*\(.*?\))/m);
    plant_size.Diameter = $("#productCont").text().match(/(?:D|d)iameter:\s*((?:(?:U|u)p to )?[0-9.]+(?:cm)?\s*\(.*?\))/m);
    // Dimensions: 22cm x 14cm x 31.5cm
    plant_size.Dimensions = $("#productCont").text().match(/(?:D|d)imensions:\s*((?:(?:(?:U|u)p to )?[0-9.]+(?:cm)?\s*(?:\(.*?\))?\s?x?\s?){2,3})/m);
    
    for (i in plant_size) {
        if (plant_size.hasOwnProperty(i)) {
            if (plant_size[i] instanceof Array && plant_size[i].length > 1) {
                plant_size[i] = plant_size[i][1];
            }
        }
    }

    // Move up product features and display size beneath description
    $('#prodFeatures').after('<div id="prodSizeList"></div>'); // prepare container for sizes

    $('#productCont .prodDesc').before($('#prodFeatures').detach());
    if (hardiness) {
        $('#prodFeatures').append('<dl class="clearFloat"><dt>Hardiness:</dt>'
                + '<dd>' + hardiness
                + '<img src="http://search.thompson-morgan.com/includes/images/info.png" class="info-icon hasTooltip" alt="" title="More info" />'
                + '<div class="hidden tooltip">' + exp.vars.hardinessModal + '</div>'
                + '</dd></dl>');
    }

    // Size
    //
    anySize = false;
    for (i in plant_size) {
        if (plant_size.hasOwnProperty(i) && plant_size[i] !== null) {
            $("#prodSizeList").append('<dl class="clearFloat"><dt>'
                + i.replace(/_/g," ") + ':</dt>' + '<dd>' + plant_size[i] + '</dd></dl>');
            anySize = true;
        }
    }

    // If there are no sizes, we don't need a size list
    if (!anySize) {
        $("#prodSizeList").remove();
    }

    // are there review stars?
    if ($('img[src*="/reviews/"]').length) {

        make_review_link = function (data) {
            var no_reviews = $(data).find("ol.reviews li.border-bottom-grey").length;

            $('img[src*="/reviews/"] + b').html('(<a href="#tab-3" id="review-links">' + no_reviews
                + ' review' + (no_reviews == 1 ? '' : 's') + '</a>)');

            $('#review-links').click(function() {
                showTab(4);
            });
        };

        read_reviews = $("a[href*='readAllReviews=true']");

        if (read_reviews.length) {
            setTimeout(function() {
                    $.get(read_reviews.attr('href').trim(), make_review_link);
                },
                100);
        }
        else {
        }
    }

    // Set up tooltips
    // 
    $('.stockInfo:eq(0)').addClass('stockInfo-first');

    // Why not sooner modal
    $("#productCont .despatch.prodPageDes").each(function () {
        var month = $(this).text().split(' ').splice(-2,1).join('').trim();
        var date = new Date();
        if (month && exp.vars.month.indexOf(month) != -1 && month != exp.vars.month[ date.getMonth() ]) {
            $(this).append('<a href="#" class="hasTooltip'
                    + ' modal-link not-sooner-link">why not sooner?</a>'
                    + '<div class="hidden tooltip">' + exp.vars.notsoonerModal + '</div>');
        }

    });

    // Packaging modal
    // Preload packaging modal based on the type of the current plant
    // 
    // Determine plant_type
      p_type_tmp = $("#addToBasket .size:eq(0)").text();

      for (i in exp.vars.plant_types) {
          if (exp.vars.plant_types.hasOwnProperty(i)) {
              if (p_type_tmp.search(i) !== -1) {
                  plant_type = exp.vars.plant_types[i]; // determine plant type
              }
          }
      }

      if (window.location.href.indexOf('large-plant') !== -1
        || $(".productClass").text().indexOf('Large Plant') !== -1)
      {
          plant_type = exp.vars.plant_types.large;
      }

    $.ajax({
        url: 'http://www.thompson-morgan.com/how-we-grow-and-send-your-plants',
        success: function (data) {
            var html = $(data);

            $("#addToBasket .size").each(function () {

              // Determine plant type again for this item
              p_type_tmp = $(this).text();

              for (i in exp.vars.plant_types) {
                  if (exp.vars.plant_types.hasOwnProperty(i)) {
                      if (p_type_tmp.search(i) !== -1) {
                          plant_type = exp.vars.plant_types[i]; // determine plant type
                      }
                  }
              }

              if (window.location.href.indexOf('large-plant') !== -1
                || $(".productClass").text().indexOf('Large Plant') !== -1)
              {
                  plant_type = exp.vars.plant_types.large;
              }

              html.find(".grid2, .footerPanel100").each(function () {
                  var image;

                  if ($(this).children('h2').text() == plant_type) {
                      image = $(this).find('img');
                      image.removeAttr('width');
                      image.removeAttr('height');
                      exp.vars.packagingModal = $(this).html();
                  }
              });

              // Set up packaging modal, if applicable
              $(this).append('<a href="#" class="hasTooltip'
                  + ' modal-link packaging-info-link">what\'s this?</a>'
                  + '<div class="hidden tooltip more-vertical-space pkg-modal">'
                  + exp.vars.packagingModal + '</div>');

            });

            // Green light for tooltips
            modals_created = true;
        },

        error: function() {
            // Green light for tooltips
            modals_created = true;
        }
    });

    // How packed and picked, plants only
    if ( ! window.location.href.match(/\/garden-supplies\//) && ! window.location.href.match(/-seeds\//)) {
        
        $('.stockInfo:eq(0)').before('<div class="how-box">'
            + '<span class="hasTooltip how-packed how-link">How plants are packed</span>' 
            + '<div class="hidden tooltip"><h3>Unique packaging to protect your plants</h3>'
            + '<div class="image-box"><img alt="How plants are packed" src="'
            + (plant_type == 'Plug' || plant_type == 'Mini-plug' || plant_type == 'Jumbo' || plant_type == 'Postiplugs&reg;'
                ? exp.vars.packPlugImg : exp.vars.packPlantImg) + '" /><span class="caption">Packed for protection</span></div>' // Image
            + exp.vars.packedModal + '</div>'
            + '<span class="hasTooltip how-picked how-link">How plants are picked</span>'
            + '<div class="hidden tooltip"><h3>Every plant is TRIPLE-INSPECTED for quality</h3>'
            + '<div class="image-box"><img alt="How plants are packed" src="'
            + exp.vars.pickPlantImg + '" /><span class="caption">Every plant is triple-inspected</span></div>' // Image
            + exp.vars.pickedModal + '</div>'
            + '</div>');
    }

    // Initialise tooltips (gets hoisted)
    function tooltips_loaded() {

        if (modals_created === false) {
            setTimeout(tooltips_loaded, 100);
            return;
        }

        // Set up tooltips
        // Grab all elements with the class "hasTooltip"
        $('.hasTooltip').each(function() { // Notice the .each() loop, discussed below
            var is_picked_modal = $(this).hasClass('how-picked');

            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
                style: {
                    classes: 'qtip-rounded qtip-light'
                },
                position: {
                    at: is_picked_modal ? 'top right' : 'top center',
                    my: is_picked_modal ? 'bottom right' : 'bottom center'
                }//, // DEBUG
                //hide: {
                //    event: false
                //}
            });
        });
    };

    // Update delivery blurb
    if (window.location.href.match(/\/garden-supplies\//)) {
        // Garden supply
        delivery_blurb = exp.vars.deliveryGarden + exp.vars.deliveryTable;
    }
    else if (window.location.href.match(/-seeds\//)) {
        // Seed
        delivery_blurb = exp.vars.deliverySeeds + exp.vars.deliveryTable;
    }
    else {
        // Plant, bulb, plugs, whatever...
        delivery_blurb = exp.vars.deliveryPlants + exp.vars.deliveryTable;
    }

    for (i = 0; i < 5; i++) {

        if ($("#tab-" + i).length &&  $("#tab-" + i).text().trim() == 'Delivery') {
            $("#tabbed-panel-" + i).html(delivery_blurb);
        }

    }

    // Update surcharge
    if (exp.vars.surchargeSkus.indexOf(universal_variable.product.sku_code) !== -1) {
        // Delivery surcharge - remove that section as it is
        
        $(".delivery-except-text").show();
        $(".delivery-table > tbody").append(exp.vars.surchargeTable);
    }
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);