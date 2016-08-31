// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    /**
     * Experiment set up
     */

    var AWA = {

        identifier: 'AWA_TM_PDP-AUG16_RJ',

        /**
         * Safely log to console when console is not defined
         * @param {*} value - The value to log
         * @param {bool} table - Flag to use console.table if available
         */
        log: function(value, table) {
            table = table || false;
            if(typeof console === 'undefined') {
                return;
            }

            if(table && typeof console.table === 'function') {
                console.table(value);
            } else {
                console.log(value);
            }
        }

    };

    // -------------------------------------------------------------------------

    // Functions here will be general utilities or side-effects of things
    // happening on the page.
    AWA.func = {};

    // -------------------------------------------------------------------------

    /* We have a single "Add to cart" form. When a user selects another variant,
       we need to modify that form with the updated SKU and add-to-wishlist link */
    AWA.func.onVariantChanged = function($form, e){
        e.stopPropagation();

        var $checkbox = $(this),
            $variant = $checkbox.parents('.awa-variant');

        var sku = $variant.data('skuCodes');
        var wishlist_link = $variant.data('wishlist_link');

        $form.find('input[name="skuCodes"]').val(sku);
        $form.find('.addWishlistLink').attr('href', wishlist_link);
    };

    // -------------------------------------------------------------------------


    /* Build a variant styled for the info box, and stick it in the given
       $container */
    AWA.func.addVariantInfoBox = function($container, i, elem){
        var $existingVariant = $(elem),
            $variant = $('\
                <div class="awa-variant">\
                    <div class="awa-variant_check">\
                        <input name="awa-variant" value="" type="radio">\
                    </div>\
                    <div class="awa-variant_meta">\
                        <div class="awa-variant_title"></div>\
                        <div class="awa-variant_prices">\
                            <div class="awa-variant_price_row awa-variant_price_row--was">\
                                <span class="awa-variant_price_label">Was:</span>\
                                <span class="awa-variant_price"></span>\
                            </div>\
                            <div class="awa-variant_price_row awa-variant_price_row--now">\
                                <span class="awa-variant_price_label">Now:</span>\
                                <span class="awa-variant_price"></span>\
                            </div>\
                            <div class="awa-variant_price_row awa-variant_price_row--save">\
                                <span class="awa-variant_price_label">Save:</span>\
                                <span class="awa-variant_price"></span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            ');

        // When this variant is selected, we'll swap out the add-to-cart form's
        // data to these values.
        var sku = $existingVariant.find('input[name="skuCodes"]').val();
        $variant.data('skuCodes', sku);

        var wishlistLink = $existingVariant
            .find('.wishListLinkContainer a')
            .attr('href');
        $variant.data('wishlist_link', wishlistLink);

        // Add meta
        var title = $existingVariant.find('.productPromo .size').text();
        $variant
            .find('.awa-variant_title')
            .text(title);

        var price = $existingVariant
                .find('.price')
                .clone()
                .children()
                .remove()
                .end()
                .text(),
            old_price = $existingVariant.find('.price strike').text();

        $variant
            .find('.awa-variant_price_row--now .awa-variant_price')
            .text(price);

        if (old_price) {
            $variant
                .find('.awa-variant_price_row--was .awa-variant_price')
                .text(old_price);

            var save_price = (
                parseFloat(old_price.replace('£', ''))
                - parseFloat(price.replace('£', ''))
                ).toFixed(2);

            $variant
                .find('.awa-variant_price_row--save .awa-variant_price')
                .text('£' + save_price);
        } else {
            $variant
                .find('.awa-variant_prices')
                .addClass('awa-variant_prices--no-sale');
        }

        var $input = $variant.find('input'),
            $form = $container
                .siblings('.awa-product_info_box__cart')
                .find('form');

        $input.bind('click', AWA.func.onVariantChanged.bind($input, $form));

        // Proxy clicks on the variant to its checkbox
        $variant.bind('click', function(e){
            $input.trigger(e);
        });

        $container.append($variant);
    };

    // -------------------------------------------------------------------------

    /* Detect how this product will be shipped and return an appropriate product
       details cell */
    AWA.func.createPlugCell = function(){
        var $detailsCell = $('<div class="awa-details_cell">\
            <img class="awa-details_cell__asset" src="http://www.thompson-morgan.com/static-images/tandm/static-articles/potted-plant.jpg" alt=""/>\
            <h3>Placeholder plants</h3>\
            <p>Our potted plants have a well developed root system giving them the best of starts. Many of our perennial plants are supplied as potted plants.</p>\
        </div>');

        return $detailsCell;
    };

    // -------------------------------------------------------------------------

    AWA.func.moveTabbedContentToSection = function($section){

        // Go through the tabbed content. Add all but "Reviews" to the left column.
        // (The titles and tabs are separate.)
        var tab_headings = $('.product-additional-info .new-tabs-small')
            .find('> a')
            .map(function(i, tab){
                return $(tab).text().trim();
            })
            .toArray();

        $('.tabbed-panel').each(function(i){
            var $this = $(this),
                heading = tab_headings[i];

            // We want to ignore reviews here. They'll be added separately.
            if (heading == 'Reviews') {
                return;
            }

            var $detailsCell = $('<div class="awa-details_cell">\
                <h3>' + heading + '</h3>\
            </div>');

            // Slap the tab contents in the details cell
            $detailsCell.append($this);

            // Slap the details cell in to the section. Wahoo.
            $section.append(
                $detailsCell
            );
        });

    }

    // -------------------------------------------------------------------------

    AWA.func.moveReviewsToSection = function($section){
        var $reviews = $('.reviews'),
            $reviewsCell = $('<div class="awa-details_cell">\
                <h3>Customer Reviews</h3>\
            </div>');

        $reviewsCell.append($reviews);

        // Change "Read all reviews" to "See all reviews"
        var $last_review_line = $reviews.find('> li:last');
        if ($last_review_line.find('a:first b').text().trim() == 'Read all reviews') {
            $last_review_line.find('a:first b').text('See more reviews');
        }

        $section.append($reviewsCell);
    };

    // -------------------------------------------------------------------------

    AWA.func.moveDescriptionToSection = function($section) {

        // Stick the page description in the right col.
        var $descriptionCell = $('<div class="awa-details_cell"></div>');
        $descriptionCell.append($('#productCont'));

        // Remove product additional info section. We just dealt with it all.
        $descriptionCell.find('.product-additional-info').remove();

        // Remove the ID for this section. We no longer need to access it, and
        // don't want its stylng.
        $descriptionCell.find('#productCont').attr('id', '');

        // Move the product features to the top of the description
        $descriptionCell.prepend($descriptionCell.find('#prodFeatures'));

        // Descriptions appear to have a p.prodDesc that is always blank.
        // Double check that and destoy the blank description
        var $prodDesc = $descriptionCell.find('.prodDesc');
        if ($prodDesc.text().trim() === '') {
            $prodDesc.remove();
        }

        // Add "Height" and "Spread" to product features list.
        var height = '',
            spread = '';

        // Surely there's a better way of pulling out the first description paragraph?
        var description = $descriptionCell.text();
        var $productFeatures = $descriptionCell.find('#prodFeatures');

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

        $section.prepend($descriptionCell);
    }

    // -------------------------------------------------------------------------

    // Augmentations will be direct modifications to the page in line with the
    // test's requirements.
    AWA.augmentations = {};

    // -------------------------------------------------------------------------

    /* Copied directly from old test. */
    AWA.augmentations.increaseProductImageSize = function(){
          if ($(".t011").length) {
            AWA.log('Large image tweak already applied, bumping size up a little but...');

            $('head').append('<style>\
                .t011 .main, \
                .t011 .main img {\
                    width: 600px; \
                    height: 600px; \
                }\
            </style>');

            return;
          }


        // TODO: This REALLY does not work. Drop the code in here to see:
        // http://www.thompson-morgan.com/public/QLOnline/product?portal:componentId=32485735&portal:type=action&portal:isSecure=false&productCode=p85110TM
        return;

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

    };

    // -------------------------------------------------------------------------

    AWA.augmentations.addProductInfoBox = function(){
        var $productInfoBox = $('\
            <div class="awa-product_info_box">\
                <div class="awa-product_info_box__title">\
                </div>\
                <div class="awa-product_info_box__reviews">\
                </div>\
                <div class="awa-product_info_box__variants">\
                </div>\
                <div class="awa-product_info_box__cart">\
                </div>\
            </div>');

        var $existingProductInfoContainer = $('#productCont');

        // Move titles to $productInfoBox
        $productInfoBox
            .find('.awa-product_info_box__title')
            .append(
                $existingProductInfoContainer.find('h1,h2,.facetValueClass')
            );

        // Move reviews
        $productInfoBox
            .find('.awa-product_info_box__reviews')
            .append(
                $existingProductInfoContainer.find('.prodDesc').children()
            );

        // Add the "Add to cart" button. We'll copy one of the variant's forms,
        // and when SKUs are changed we'll modify the hidden fields accordingly.
        var $form = $existingProductInfoContainer
                .find('.stockInfo:first form')
                .clone(),
            $hiddenInputs = $form.find('> input[type="hidden"]').clone(),
            $qty = $form.find('.quantity').children().clone(),
            $button = $form.find('.basket').children().clone(),
            $wishlist = $existingProductInfoContainer
                .find('.wishListLinkContainer:first a')
                .clone();

        $form
            .children()
            .remove()
            .end()
            .append(
                $hiddenInputs,
                $qty,
                $button,
                $wishlist
            );

        $qty.wrapAll('<div class="awa-variant_form_qty"></div>');

        $productInfoBox
            .find('.awa-product_info_box__cart')
            .append($form);

        // Move product variants to new info box
        $existingProductInfoContainer
            .find('.stockInfo')
            .each(
                AWA.func.addVariantInfoBox
                    .bind(
                        null,
                        $productInfoBox.find('.awa-product_info_box__variants')
                    )
                );

        // Check the first product variant.
        $productInfoBox.find('.awa-variant:first').trigger('click');

        // Add new info box to page
        $existingProductInfoContainer.before($productInfoBox);

        // Slap some styling on it, eh
        $('head').append('<style>\
            .awa-product_info_box {\
                float: right;\
                width: 300px;\
                margin-right: 20px;\
                background: #dddddd; \
                padding: 1em;\
                box-sizing: border-box;\
            }\
            .awa-product_info_box > * {\
                margin-bottom: 1em;\
            }\
            .awa-product_info_box > *:last-of-type {\
                margin-bottom: 0;\
            }\
            .awa-product_info_box__title h1,\
            .awa-product_info_box__title h2 {\
                margin-bottom: 0.5em;\
            }\
            .awa-variant {\
                white-space: nowrap;\
            }\
            .awa-variant > * { \
                white-space: initial; \
                display: inline-block;\
                vertical-align: middle; \
                margin-bottom: 2em; \
            } \
            .awa-variant_check {\
                width: 2em;\
            }\
            .awa-variant_meta {\
                width: calc(100% - 2em);\
            }\
            .awa-variant_title {\
                font-weight: bold;\
            }\
            .awa-variant_prices { \
                white-space: nowrap; \
            } \
            .awa-variant_prices > * { \
                white-space: initial; \
            } \
            .awa-variant_price_row { \
                display: inline-block; \
                padding-right: 1em; \
            } \
            .awa-variant_price_row.awa-variant_price_row--was { \
                display: block; \
            } \
            .awa-variant_price_row.awa-variant_price_row--was .awa-variant_price { \
                text-decoration: line-through; \
            } \
            .awa-variant_price_row.awa-variant_price_row--save { \
                text-transform: uppercase; \
                color: #d72e1a; \
            } \
            .awa-variant_prices--no-sale .awa-variant_price_row.awa-variant_price_row--was, \
            .awa-variant_prices--no-sale .awa-variant_price_row.awa-variant_price_row--save, \
            .awa-variant_prices--no-sale .awa-variant_price_row.awa-variant_price_row--now .awa-variant_price_label { \
                display: none; \
            } \
            .awa-product_info_box__cart form { \
                white-space: nowrap; \
            } \
            .awa-product_info_box__cart form > * { \
                white-space: initial; \
                display: inline-block; \
                box-sizing: border-box; \
            } \
            .awa-product_info_box__cart .awa-variant_form_qty { \
                width: 4em; \
                text-align: center; \
            } \
            .awa-product_info_box__cart .addtoBasket { \
                width: calc(100% - 4em); \
            } \
        </style>');

        // We're done with product variants. Nuke em.
        $existingProductInfoContainer.find('.stockInfo').remove();

        // TODO: Add to cart styling. Customer review count & review star
        // styling. Out-of-stock states.

        return $productInfoBox;
    };

    // -------------------------------------------------------------------------

    AWA.augmentations.moveThumbnails = function(){
        var $thumbs = $('.t011 .thumbs');
        $('.awa-product_info_box').after($thumbs);

        $thumbs.addClass('awa-product_thumbs');

       /*

        // Can't do this because the coexistant image size test is nuking the
        // only on-page resource for the high-quality URLs. The URLs are now
        // in-memory, b ut in-accessible to this scope.

        // Swap out the thumbnails with higher quality images
        var hq_images = {}; // Map of low-qual URLs to high qual URLs

        debugger;

        $('.productDetailsThumbs ol li').each(function(i, elem){
            var $elem = $(elem),
                hq_url = $elem.find('a').attr('href'),
                lq_url = $elem.find('img').attr('src');

        debugger;

            hq_images[lq_url] = hq_url;
        });

        console.log(hq_images);

        $thumbs.find('img').each(function(i, elem){
            var $elem = $(elem),
                lq_url = $elem.attr('src');

            $elem.attr(
                'src',
                hq_images[lq_url]
            );
        });*/


        $('head').append('<style>\
            .awa-product_thumbs { \
                float: right; \
                padding-top: 1em; \
                box-sizing: border-box; \
                clear: right; \
                margin-right: 20px; \
            } \
            .awa-product_thumbs img { \
                cursor: pointer; \
                padding-right: 1em; \
                padding-bottom: 1em; \
                float: left; \
                box-sizing: border-box; \
                height: 104px; \
            } \
            .awa-product_thumbs img:nth-of-type(3n) { \
                padding-right: 0; \
            } \
            .awa-product_thumbs img:nth-of-type(3n+1) { \
                clear: left; \
            }\
        </style>');
    };

    // -------------------------------------------------------------------------

    // This is the messiest part of this test. :(

    AWA.augmentations.addProductDetailSection = function(){
        var $productDetails = $('<div class="awa-product-detail">\
            <div class="awa-product-detail_column"></div>\
            <div class="awa-product-detail_column"></div>\
        </div>'),
            $leftDetailsColumn = $productDetails.children().first(),
            $rightDetailsColumn = $productDetails.children().last();

        $leftDetailsColumn.append(
            AWA.func.createPlugCell()
        );

        // Go through the tabbed content. Add all but "Reviews" to the left column.
        // (The titles and tabs are separate.)
        AWA.func.moveTabbedContentToSection($leftDetailsColumn);

        // Stick reviews on the right col
        AWA.func.moveReviewsToSection($rightDetailsColumn);

        // Move the description to the right column, and clean it up! It's messy!
        AWA.func.moveDescriptionToSection($rightDetailsColumn);

        // TODO: Add "How your plants arrive" and "100% Satisfaction Guarantee"?

        $('head').append('<style>\
            .awa-product-detail {\
                clear: both;\
                white-space: nowrap;\
                margin-top: 1em; \
                padding-top: 1em; \
                border-top: 1px solid #c5c5c5; \
            }\
            .awa-product-detail_column {\
                box-sizing: border-box;\
                width: 50%;\
                display: inline-block;\
                white-space: initial;\
                vertical-align: top; \
                padding-right: 1em; \
            }\
            .awa-product-detail-column:last-of-type { \
                padding-right: 0; \
            } \
            .awa-details_cell { \
                padding-bottom: 1em; \
                border-bottom: 1px solid #c5c5c5; \
                margin-bottom: 1em; \
            } \
            .awa-details_cell:after { \
                content: " "; \
                display: block; \
                clear: both; \
            } \
            .awa-details_cell__asset { \
                float: right; \
            } \
            #prodFeatures {\
                margin: 0;\
                padding: 0px 0;\
                margin-bottom: 1em; \
            }\
            #prodFeatures dd {\
                display: block;\
                float: none;\
                position: relative;\
            }\
        </style>');

        // Own site's styling for reviews, modified to fit in this spot
        $('head').append('<style>\
            /** reviews */\
            \
            .awa-product-detail_column .reviews .rating {\
                border: 0 none;\
                padding: 0;\
                position: absolute;\
                margin-top: 4px\
            }\
            \
            .awa-product-detail_column .reviews .rating h5 {\
                left: -1000em;\
                position: absolute\
            }\
            \
            .awa-product-detail_column .reviews p {\
                font-size: 0.95em !important\
            }\
            \
            .awa-product-detail_column .reviews h4 {\
                padding-top:20px;\
                margin:0\
            }\
            \
            .awa-product-detail_column .reviews dl {\
                color:#00572d;\
                font-size:12px;\
                padding-bottom:5px;\
                font-weight: bold;  \
                padding-top:20px;\
                margin:0\
            }\
            \
            \
            .awa-product-detail_column .reviews .rating p {\
                margin-top: 0 !important\
            }\
            \
            .awa-product-detail_column .reviews .rating ul {\
                height:10px;\
                width:56px;\
                margin: 0 5px 0 0 !important\
            }\
            \
            .awa-product-detail_column .reviews .rating li {\
                border:0 none;\
                float:left;\
                padding:0\
            }\
            \
            .awa-product-detail_column .reviews li {\
                padding-bottom:10px\
            }\
            \
            .awa-product-detail_column .reviews .rating a.star-1 {\
                width:11px;\
                z-index:5\
            }\
            \
            .awa-product-detail_column .reviews .rating a.star-2 {\
                width:22px;\
                z-index:4\
            }\
            \
            .awa-product-detail_column .reviews .rating a.star-3 {\
                width:33px;\
                z-index:3\
            }\
            \
            .awa-product-detail_column .reviews .rating a.star-4 {\
                width:44px;\
                z-index:2\
            }\
            \
            .awa-product-detail_column .reviews .rating a.star-5 {\
                width:55px;\
                z-index:1\
            }\
            \
            .awa-product-detail_column .reviews .rating a {\
                display:block;\
                height:10px;\
                left:0;\
                position:absolute;\
                text-align:left;\
                text-indent:-1000em;\
                top:0;\
                width:14px;\
                line-height: 0px\
            }\
        </style>');

        var $detailsCell = $('<div class="awa-details_cell">\
            <img class="awa-details_cell__asset" src="http://www.thompson-morgan.com/static-images/tandm/static-articles/potted-plant.jpg" alt=""/>\
            <h3>Placeholder plants</h3>\
            <p>Our potted plants have a well developed root system giving them the best of starts. Many of our perennial plants are supplied as potted plants.</p>\
        </div>');
        $('#product-portlet').append($productDetails);
    };

    // -------------------------------------------------------------------------

    /**
     * Run the experiment
     */

    if (typeof console.group === 'function') {
        console.group(AWA.identifier);
    }


    // Log it
    AWA.log(AWA.identifier + ' test running');

    // This should get us to the same state regardless of whether the other
    // image-size test is running or not
    AWA.augmentations.increaseProductImageSize();

    // Replace the jumbled
    AWA.augmentations.addProductInfoBox();

    // We want the product thumbnails under the product info box.
    AWA.augmentations.moveThumbnails();

    // The 2-col layout at the bottom of the page.
    // LOTS going on here.
    AWA.augmentations.addProductDetailSection();


    if (typeof console.groupEnd === 'function') {
        console.groupEnd(AWA.identifier);
    }

})(jQuery); // vwo_$ || optimizely.$