//
// Thompson & Morgan - Product page v1
// Based on CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Image experiment merged
(function ($) {
  
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
        plant?’.If the answer is no, the plant is rejected.</p> \
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

    plant_types: {
        plug:   'Plug', // will be overriden in the loop, if a more specific variation is found (e.g. Mini plug)
        mini:   'Mini-plug',
        jumbo:  'Jumbo',
        posti:  'Postiplugs&reg;',
        garden: 'Garden Ready Plants',
        potted: 'Potted plants',
        bulb:   'Bulbs',
        bare:   'Bareroots'
    },

    month: ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"],

    packPlantImg: 'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/b41b625c32b5367a2d2c26bb8ed8617a_213_320.jpeg',
    packPlugImg:  'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/89e991d1fc4cb643ed98e0ae777eadaf_320_213.jpeg',
    pickPlantImg: 'https://dd6zx4ibq538k.cloudfront.net/static/images/2841/76cb2b9d0ef7eaae82253a3ba4229e25_213_320.jpeg',

    deliveryTable: '<table class="delivery-table"> \
            <tbody> \
                <tr> \
                    <td colspan="4"> \
                            <strong>UK MAINLAND DELIVERY CHARGES </strong> \
                            <strong><em>(except postcodes below) </em></strong> \
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
                <tr> \
                    <td colspan="4"> \
                            <strong>UK DELIVERY CHARGES to postcodes</strong> \
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
                </tr> \
            </tbody> \
        </table> \
        ',

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
                    on different days. However, you will only be charged once for delivery.</p>'
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
        read_reviews;

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
    // QTip2 tooltip styles
    $('head').append('<link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/qtip2/2.0.1/jquery.qtip.min.css" />');

    // Load QTip2 for tooltips
    $.getScript('http://cdn.jsdelivr.net/qtip2/2.0.1/jquery.qtip.min.js', tooltips_loaded);

    // Rejig prices
    $(".stockInfo .quantity label").text('');
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
    plant_size.Height_and_spread = $("#productCont").text().match(/(?:H|h)eight\s*(?:and|&amp;|&)\s*(?:s|S)pread:\s*([0-9.]+(?:cm)?\s*\(.*?\))/m);
    plant_size.Height = $("#productCont").text().match(/(?:H|h)eight:\s*([0-9.]+(?:cm)?\s*\(.*?\))/m);
    if (plant_size.Height_and_spread === null) {
        plant_size.Spread = $("#productCont").text().match(/(?:S|s)pread:\s*([0-9.]+(?:cm)?\s*\(.*?\))/m);
    }
    else {
        plant_size.Spread = null;
    }
    plant_size.Bulbs  = $("#productCont").text().match(/(?:B|b)ulb (S|s)ize:\s*([0-9.]+(?:cm)?\s*\(.*?\))/m);
    plant_size.Diameter = $("#productCont").text().match(/(?:D|d)iameter:\s*([0-9.]+(?:cm)?\s*\(.*?\))/m);
    // Dimensions: 22cm x 14cm x 31.5cm
    plant_size.Dimensions = $("#productCont").text().match(/(?:D|d)imensions:\s*((?:[0-9.]+(?:cm)?\s*(?:\(.*?\))?\s?x?\s?){2,3})/m);
    
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
                + '<dd>' + hardiness + '</dd></dl>');
    }

    // Size
    // 
    for (i in plant_size) {
        if (plant_size.hasOwnProperty(i) && plant_size[i] !== null) {
            $("#prodSizeList").append('<dl class="clearFloat"><dt>'
                + i.replace(/_/g," ") + ':</dt>' + '<dd>' + plant_size[i] + '</dd></dl>');
        }
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
        if (month && isNaN(month) && month != exp.vars.month[ date.getMonth() ]) {
            $(this).append('<a href="#" class="hasTooltip'
                    + ' modal-link not-sooner-link">why not sooner?</a>'
                    + '<div class="hidden tooltip">' + exp.vars.notsoonerModal + '</div>');
        }

    });

    // Packaging modal
    // Preload packaging modal based on the type of the current plant
    p_type_tmp = $("#addToBasket .size:eq(0)").text();

    for (i in exp.vars.plant_types) {
        if (exp.vars.plant_types.hasOwnProperty(i)) {
            if (p_type_tmp.search(i) !== -1) {
                plant_type = exp.vars.plant_types[i]; // determine plant type
            }
        }
    }

    $.ajax({
        url: 'http://www.thompson-morgan.com/how-we-grow-and-send-your-plants',
        success: function (data) {
            var html = $(data);

            html.find(".grid2").each(function () {
                if ($(this).children('h2').text() == plant_type) {
                    exp.vars.packagingModal = $(this).html();
                }
            });

            // Set up packaging modal, if applicable
            if (exp.vars.packagingModal != 'Loading...') {
                $("#addToBasket .size").append('<a href="#" class="hasTooltip'
                    + ' modal-link packaging-info-link">what\'s this?</a>'
                    + '<div class="hidden tooltip more-vertical-space pkg-modal">'
                    + exp.vars.packagingModal + '</div>');
            }

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
            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
                style: {
                    classes: 'qtip-rounded qtip-light'
                },
                position: {
                    at: 'top center',
                    my: 'bottom center'
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
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);