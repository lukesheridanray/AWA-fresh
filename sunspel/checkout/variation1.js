// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    /**
     * Experiment set up
     */

    var AWA = {

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
        },

        css: '\
            /*--addQualityMessagingFromQualityPublications-------------------*/\
            .awa-quality-messaging { \
                padding-top: 1em; \
            } \
            \
            .awa-quality-messaging:after { \
                display: block; \
                clear: both; \
                content: " "; \
            } \
            .awa-quality-messaging li { \
                list-style: none; \
                display: inline-block; \
                width: 100%; \
                vertical-align: top; \
                box-sizing: border-box; \
                margin-bottom: 1em; \
            } \
            \
            .awa-quality-messaging li > * { \
                margin: 0 auto; \
                text-align: center; \
                box-sizing: border-box; \
            } \
            \
            .awa-quality-messaging li > div { \
                max-width: 100px; \
                height: 50px; \
                line-height: 50px; \
                vertical-align: bottom; \
            } \
            \
            .awa-quality-messaging li > div > img { \
                vertical-align: bottom; \
            } \
            \
            .awa-quality-messaging li > p { \
                vertical-align: top; \
                width: calc(100% - 110px); \
                padding: 0 1em; \
                margin-top: 1em; \
            } \
            \
            @media screen and (min-width: 900px) { \
                .awa-quality-messaging li { \
                    width: 33%; \
                    margin-bottom: 0; \
                } \
                \
                /* Get out of my face, silly button. */\
                .cart-actions.cart-actions--header { \
                    margin-top: 0px; \
                } \
            } \
            /*--increaseProductImageSize-------------------------------------*/\
            @media only screen and (min-width: 600px) {\
                .cart-item__image { \
                    width: 100%; \
                    max-width: 265px; \
                } \
            } \
            /*--moveDiscountMessaging----------------------------------------*/\
            @media only screen and (min-width: 900px) { \
                .cart-footer__options { \
                    float: left; \
                    border-bottom: 0; \
                } \
                [data-toggle="#cart-forms"] { \
                    text-align: left; \
                } \
            } \
            /*--crossSellMeBro-----------------------------------------------*/\
            .awa-cross-sell .item { \
                float: left; \
                width: 50%; \
                padding: 0 15px; \
            } \
            @media only screen and (min-width: 900px) {\
                .awa-cross-sell .item { \
                    float: left; \
                    width: 25%; \
                    padding: 0 15px; \
                } \
            } \
            /*---------------------------------------------------------------*/\
        ',

        vars: {
            messaging: [
                {
                    logo: '//useruploads.visualwebsiteoptimizer.com/useruploads/236841/images/3e76ab3dd3d2596328d0232fc5e683f8_gq.png',
                    message: 'Pieces that will last for years',
                },
                {
                    logo: '//useruploads.visualwebsiteoptimizer.com/useruploads/236841/images/18ec6abcd95ce6a74d1c3cf09a7fa780_the-times-logo.png',
                    message: 'Some of the best T-shirts and boxer shorts around',
                },
                {
                    logo: '//useruploads.visualwebsiteoptimizer.com/useruploads/236841/images/ce3fa39cc00033e848d0339b4c9b41be_esquire.jpg',
                    message: 'Great quality wardrobe essentials',
                },
            ],
            cross_sell: {
                header: 'You might also like...',
                items: [
                    {
                        img: 'http://www.sunspel.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/p/mpol1004-buaa.jpg',
                        name: 'Men\'s Cotton Riviera Polo Shirt in Navy',
                        price: '80.00',
                        extra: '',
                        url: 'http://www.sunspel.com/uk/mens-combed-cotton-riviera-polo-shirt-in-navy-mpol1004-buaa.html'
                    },
                    {
                        img: 'http://www.sunspel.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/0/0007s-234-_1.jpg',
                        name: 'Men\'s Cotton Riviera T-shirt in White',
                        price: '65.00',
                        extra: 'UPDATED DESIGN',
                        url: 'http://www.sunspel.com/uk/mens-riviera-crew-neck-t-shirt-white.html'
                    },
                    {
                        img: 'http://www.sunspel.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/s/mswe1500-gyaa.jpg',
                        name: 'Men\'s Cotton Loopback Sweatshirt in Grey Melange',
                        price: '95.00',
                        extra: '',
                        url: 'http://www.sunspel.com/uk/men-s-loopback-cotton-sweatshirt-in-grey-melange.html'
                    },
                    {
                        img: 'http://www.sunspel.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/e/new-classic-boxer-set_1ss16.jpg',
                        name: 'The Men\'s Classic Boxer Set',
                        price: '130.00',
                        extra: 'Save £20',
                        url: 'http://www.sunspel.com/uk/mens/underwear/the-boxer-short-set.html'
                    },
                ]
            }
        }

    };

    // -------------------------------------------------------------------------

    AWA.func = {};

    AWA.func.addQualityMessagingFromQualityPublications = function(){
        var $page_title = $('.page-title');

        var $qualityMessagingRow = $('<ul class="awa-quality-messaging"></ul>');

        $.each(AWA.vars.messaging, function(i, entry) {
            $qualityMessagingRow.append('<li>\
                <div><img src="'+ entry.logo +'" alt=""/></div>\
                <p>&ldquo;'+ entry.message +'&rdquo;</p>\
            </li>');
        });


        $page_title.after($qualityMessagingRow);
    };

    AWA.func.increaseProductImageSize = function(){
        var $cart_items = $('.cart-item');

        $cart_items.each(function(i, elem) {
            var probably_the_right_data = digitalData.cart.items[i];

            var $img = $(this).find('.cart-item__image img');

            $img.attr('src', probably_the_right_data.productInfo.productImage);
        });
    };

    AWA.func.moveDiscountMessaging = function(){
        // Done entire via CSS on .cart-footer__options
    };

    AWA.func.crossSellMeBro = function(){

        // Only cross sell if there are mens products in the cart.
        var thar_be_male_products = false;

        $.each(window.digitalData.cart.items, function(i, item){
            $.each(item.category, function(i, category) {
                if (category && category.indexOf('Men\'s') !== -1) {
                    thar_be_male_products = true;
                }
            });
        });

        if (thar_be_male_products === false) {
            AWA.log('No male products, not exposing cross-sell');
            return;
        }


        var $cart_footer = $('.cart-footer');
        var $cross_sell_title = $('<p>', { text: AWA.vars.cross_sell.header });
        var $cross_sell_listing = $('<ul class="listing"></ul>');

        $cross_sell_listing.addClass('awa-cross-sell');

        $.each(AWA.vars.cross_sell.items, function(i, item) {
            var my_html_tho = '<li class="item" itemscope="" itemtype="http://schema.org/Product"> \
                    <a class="item__image" href="__URL__"> \
                        <img class="item__image-src" src="__IMG__" alt="__NAME__" itemprop="image"> \
                    </a> \
                    <div class="item__content"> \
                        <h3 class="item__title"> \
                            <a href="__URL__" itemprop="url"> \
                                <span itemprop="name">__NAME__</span> \
                            </a> \
                        </h3> \
                 \
                        <div class="price-box"> \
                 \
                            <span class="regular-price"> \
                                <span itemprop="price" class="price">£__PRICE__</span> \
                            </span> \
                 \
                        </div> \
                 \
                 \
                        <p class="item__note">__EXTRA__</p> \
                    </div> \
                </li>'
                .replace(/__IMG__/g, item.img)
                .replace(/__NAME__/g, item.name)
                .replace(/__PRICE__/g, item.price)
                .replace(/__EXTRA__/g, item.extra)
                .replace(/__URL__/g, item.url);

            $cross_sell_listing.append($(my_html_tho));
        });

        $cart_footer.after($cross_sell_title, $cross_sell_listing);
    };

    // -------------------------------------------------------------------------

    /**
     * Run the experiment
     */

    // Log it
    AWA.log('Sunspel Checkout Test');

    // Append CSS
    $('body').append('<style type="text/css">'+AWA.css+'</style>');

    AWA.func.addQualityMessagingFromQualityPublications();
    AWA.func.increaseProductImageSize();
    AWA.func.moveDiscountMessaging();
    AWA.func.crossSellMeBro();


})(jQuery); // vwo_$ || optimizely.$