// jshint multistr: true
// jshint strict: true

(function() {

    'use strict';

    /**
     * Wait for a condition to return true then run a callback function
     *
     * @param {function} condition - The condition to run
     * @param {function} callback - The function to run once condition returns true
     * @param {integer} [timeout=2000] - Time in milliseconds to keep trying the condition
     * @param {boolean} [keepAlive=false] - Whether to keep running condition once it returns true
     */
    var waitFor = function waitFor(condition, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
            maxAttempts = timeout / intervalTime,
            attempts = 0,
            interval = setInterval(function() {
                if(condition()) {
                    if (!keepAlive) {
                        clearInterval(interval);
                    }
                    callback();
                } else if(attempts > maxAttempts) {
                    clearInterval(interval);
                }
                attempts ++;
            }, intervalTime);
    };

    var helpMe = function helpMe($) {

        /**
         * Experiment set up
         */

        var AWA = {

            /**
             * Safely log to console when console is not defined
             * @param {*} value - The value to log
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

            /**
             * Use these settings to control what is included in the variation
             * v1: true, false, false
             * v2: false, true, false
             * v3: false, true, true
             * v4: true, true, false
             * v5: true, true, true
             */

            // Should we show the prompt on the cart?
            showOnCart: true,

            // Should we show the prompt on the category?
            showOnCategory: true,

            // Should we delay showing the prompt on the category?
            delayPrompt: true,

            /**
             * Experiment CSS
             */

            css: '\
            #NestedMaster_PageContent_Basket_panFreeDeliveryDelta > strong {\
                display: inline-block;\
                text-align: left;\
            }\
            .awa-cart-message {\
                padding-top: 17px;\
                width: auto;\
                float: none;\
                display: block;\
                text-align: left;\
            }\
            .awa-cart-message a {\
                color: #d01d23;\
                text-decoration: underline;\
            }\
            .awa-button {\
                background: #d2282b;\
                width: 100%;\
                padding-left: 0;\
                padding-right: 0;\
                opacity: 1;\
                -webkit-transition: opacity 0.2s linear;\
                   -moz-transition: opacity 0.2s linear;\
                        transition: opacity 0.2s linear;\
            }\
            .awa-single, .awa-double, .awa-triple {\
                display: none;\
            }\
            @media screen and (min-width: 979px) {\
                .category-filters .awa-fixed {\
                    position: fixed;\
                    top: 20px;\
                }\
            }\
            .show-all-products .awa-button {\
                -webkit-border-radius: 0;\
                -moz-border-radius: 0;\
                -ms-border-radius: 0;\
                -o-border-radius: 0;\
                border-radius: 0;\
                width: auto;\
                display: none;\
                clear: both;\
                margin-left: 0.3em;\
                margin-right: 0.3em;\
            }\
            .awa-button-hidden {\
                visibility: hidden;\
                opacity: 0;\
            }\
            @media screen and (max-width: 978px) {\
                .category-filters .awa-button {\
                    display: none;\
                }\
                .show-all-products .awa-triple {\
                    display: block;\
                }\
            }\
            @media screen and (max-width: 648px) {\
                .show-all-products .awa-triple {\
                    display: none;\
                }\
                .show-all-products .awa-double {\
                    display: block;\
                }\
            }\
            @media screen and (max-width: 518px) {\
                .show-all-products .awa-double {\
                    display: none;\
                }\
                .show-all-products .awa-single {\
                    display: block;\
                }\
            }\
            .awa-modal-overlay,\
            .awa-modal-container {\
                display: none;\
                opacity: 0;\
                -webkit-transition: opacity 0.2s linear;\
                   -moz-transition: opacity 0.2s linear;\
                        transition: opacity 0.2s linear;\
            }\
            .awa-modal-active .awa-modal-overlay,\
            .awa-modal-active .awa-modal-container {\
                display: block;\
                opacity: 1;\
            }\
            .awa-modal-overlay {\
                width: 100%;\
                height: 100%;\
                z-index: 20;\
                background: rgba(0,0,0,0.2);\
                position: fixed;\
                top: 0;\
                left: 0;\
            }\
            .awa-modal-container {\
                position:absolute;\
                top: 20px;\
                left: 0;\
                right: 0;\
                margin: auto;\
                width: 700px;\
                z-index: 21;\
                background: #fff;\
                border-radius: 6px;\
            }\
            .awa-modal-close {\
                width: 100%;\
                padding: 0 2.5%;\
                line-height: 2.6em;\
                background: #eee;\
                cursor: pointer;\
                text-align: right;\
                font-size: 0.9em;\
                color: #444;\
                border-top-left-radius: 6px;\
                border-top-right-radius: 6px;\
            }\
            .awa-modal-container h2 {\
                font-size: 1.5em;\
                font-weight: normal;\
                color: #000;\
            }\
            .awa-modal-container h2 strong {\
                color: #214232;\
            }\
            .awa-modal-close:hover {\
                text-decoration: underline;\
                background: #ededed;\
            }\
            .awa-modal-mobile-header {\
                display: none;\
            }\
            .awa-modal-inner {\
                width: 95%;\
                margin: 0 auto;\
                overflow: auto;\
            }\
            .awa-modal-cta {\
                width: 48.5%;\
                height: 215px;\
                display: block;\
                float: left;\
                position: relative;\
                background-color: #eee;\
                background-position: center;\
                background-repeat: no-repeat;\
                color: #000;\
                text-align: center;\
                margin-bottom: 1.25em;\
                font-size: 1.1em;\
            }\
            .awa-modal-cta:hover,\
            .awa-modal-cta:focus {\
                color: #000;\
            }\
            .awa-modal-cta-right {\
                float: right;\
            }\
            .awa-modal-cta span {\
                position: absolute;\
                left: 0;\
                bottom: 0;\
                padding: 5px 10%;\
                background: rgba(255,255,255,0.7);\
            }\
            .awa-modal-cta:hover span,\
            .awa-modal-cta:focus span {\
                background: rgba(255,255,255,0.8);\
            }\
            .awa-help-mens {\
                background-image: url("//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/9c4ad17189eb22011b14362a27d62166_mens.jpg");\
            }\
            .awa-help-womens {\
                background-image: url("//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/16aa8051f686d0d1d1805b85987d73ae_womens.jpg");\
            }\
            .awa-help-kids {\
                background-image: url("//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/2ec32c5a02abc114de87deccb94aa707_kids.jpg");\
            }\
            .awa-help-outdoors {\
                background-image: url("//useruploads.visualwebsiteoptimizer.com/useruploads/27849/images/e4e6d37956a745ae350f01f036a0e42e_outdoors.jpg");\
            }\
            @media screen and (max-width: 699px) {\
                .awa-modal-container {\
                    width: 100%;\
                }\
                .awa-modal-container h2 {\
                    font-size: 1.4em;\
                }\
                .awa-modal-cta {\
                    font-size: 1em;\
                }\
            }\
            @media screen and (max-width: 499px) {\
                .awa-modal-cta {\
                    font-size: 1em;\
                    background-size: 230px;\
                    height: 153px;\
                }\
                .awa-modal-container h2 {\
                    font-size: 1.1em;\
                }\
                .awa-modal-mobile-header {\
                    color: #214232;\
                    padding-left: 2%;\
                    position: relative;\
                    top: -26px;\
                    font-weight: bold;\
                }\
            }\
            @media screen and (max-width: 339px) {\
                .awa-modal-cta {\
                    width: 100%;\
                    font-size: 1.1em;\
                    background-size: initial;\
                    height: 215px;\
                }\
            }\
            ',

            // Basket value from the DOM
            basketValue: $('#hdnBasketValue').val().slice(1),

            // modal ready state, saves us recreating elements or lots of DOM logic
            modalReady: false,

            // returns HTML string for the modal, including the minimum spend value
            getModalContent: function() {

                return '\
                    <span class="awa-modal-mobile-header">How you get great value</span>\
                    <div class="awa-modal-inner">\
                        <h2>Spend just <strong>£'+AWA.getMinSpend(AWA.basketValue).toString()+'</strong>\
                        more to get <strong>FREE Delivery</strong> on your whole basket!</h2>\
                        <a class="awa-modal-cta awa-modal-cta-left awa-help-mens" href="http://www.mountainwarehouse.com/mens/?aw=help">\
                            <span>Men&rsquo;s products selected to get you FREE Delivery</span>\
                        </a>\
                        <a class="awa-modal-cta awa-modal-cta-right awa-help-womens" href="http://www.mountainwarehouse.com/womens/?aw=help">\
                            <span>Women&rsquo;s products selected to get you FREE Delivery</span>\
                        </a>\
                        <a class="awa-modal-cta awa-modal-cta-left awa-help-kids" href="http://www.mountainwarehouse.com/kids/?aw=help">\
                            <span>Kid&rsquo;s products selected to get you FREE Delivery</span>\
                        </a>\
                        <a class="awa-modal-cta awa-modal-cta-right awa-help-outdoors" href="http://www.mountainwarehouse.com/equipment/?aw=help">\
                            <span>Outdoor equipment selected to get you FREE Delivery</span>\
                        </a>\
                    </div>\
                ';

            },

            /**
             * Should we show the prompt?
             * @param {string|number} basketValue - The value in the basket
             * @return {boolean}
             */
            shouldShowPrompt: function(basketValue) {

                return basketValue > 0 && basketValue < 50;

            },

            /**
             * Add the cart button
             * we don't need to check the page we are on as if the element we are
             * targetting doesn't exist then jQuery just does nothing
             */
            doCartButton: function() {

                if(AWA.showOnCart === false) {
                    return;
                }

                var $button = $(
                    '<span class="awa-cart-message delivery-alert-strip col-12 red-text center">\
                        <strong>\
                            <a href="#">Help me to get FREE Delivery</a>\
                        </strong>\
                    </span>'
                );

                $button
                    .appendTo('#NestedMaster_PageContent_Basket_panFreeDeliveryDelta strong')
                    .find('a').on('click', {content: AWA.getModalContent()}, AWA.openModal);

            },

            /**
             * Add the category buttons
             */
            doCategoryButtons: function() {

                if(AWA.showOnCategory === false) {
                    return;
                }

                var $buttonSidebar = $('<a href="#" class="awa-button button">Help me to get FREE Delivery</a>');
                var $buttonInline = $('<a href="#" class="awa-button button">Help me to get FREE Delivery</a>');

                var $sidebar = $('#NestedMaster_PageContent_CategoryProductList_Refinables');

                if($sidebar.length !== 0) {

                    if(AWA.delayPrompt === true) {
                        $buttonSidebar.addClass('awa-button-hidden');
                    } 

                    // Add button to sidebar
                    $buttonSidebar
                        .appendTo($sidebar)
                        .on('click', {content: AWA.getModalContent()}, AWA.openModal);

                    // Listen for scroll events to attach button after a threshold
                    // or unhide if hidden after 10 rows
                    AWA.scrollListener($buttonSidebar);

                }

                // Add button within product rows
                AWA.insertIntoProductRows($buttonInline);

            },

            /**
             * Insert element into product rows
             *
             * Because there will be a different number of products in each row
             * depending on screen size, we insert 3 copies of the button so that it will
             * always be after the 8th row, we could detect screen size and insert a single
             * button, and even move it on browser resize, however this adds both a development
             * overhead and a performance overhead
             *
             * @param {object} $elem - jQuery object representing the element to insert
             */
            insertIntoProductRows: function($elem) {

                $elem = $elem || $('<a href="#" class="awa-button button">Help me to get FREE Delivery</a>');

                var $productList;

                if($('.show-all-products #NestedMaster_PageContent_CategoryProductList_CategoryProductResults_productControls').length) {
                    $productList = $('.show-all-products #NestedMaster_PageContent_CategoryProductList_CategoryProductResults_productControls');
                } else {
                    $productList = $('.show-all-products');
                }

                var $products = $productList.find('> div');
                var count = $products.length;
                var $single, $double, $triple;

                if(count === 0 || $productList.find('.awa-button').length > 0) {
                    // no products
                    return;
                }

                // buttons
                $single = $elem.clone().addClass('awa-single').on('click', {content: AWA.getModalContent()}, AWA.openModal);
                $double = $elem.clone().addClass('awa-double').on('click', {content: AWA.getModalContent()}, AWA.openModal);
                $triple = $elem.clone().addClass('awa-triple').on('click', {content: AWA.getModalContent()}, AWA.openModal);

                if(AWA.delayPrompt === true) {

                    // single column
                    if(count < 12) {
                        $single.appendTo($productList);
                    } else {
                        $single.insertAfter($products.eq(11));
                    }

                    // double column
                    if(count < 24) {
                        $double.appendTo($productList);
                    } else {
                        $double.insertAfter($products.eq(23));
                    }

                    // triple column
                    if(count < 36) {
                        $triple.appendTo($productList);
                    } else {
                        $triple.insertAfter($products.eq(35));
                    }

                } else {

                    // single column
                    if(count < 8) {
                        $single.appendTo($productList);
                    } else {
                        $single.insertAfter($products.eq(7));
                    }

                    // double column
                    if(count < 16) {
                        $double.appendTo($productList);
                    } else {
                        $double.insertAfter($products.eq(15));
                    }

                    // triple column
                    if(count < 24) {
                        $triple.appendTo($productList);
                    } else {
                        $triple.insertAfter($products.eq(23));
                    }

                }

            },

            /**
             * Opens the modal
             * @param {object} e - DOM event object
             */
            openModal: function(e) {

                var $container;
                var $overlay;

                e.preventDefault();

                if(AWA.modalReady) {
                
                    // if modal has been opened once we don't need to set it all up again
                    $container = $('.awa-modal-container');
                    $overlay = $('.awa-modal-overlay');

                } else {

                    // first time so set up the modal
                    $container = $('<div class="awa-modal-container">\
                                        <div class="awa-modal-close">Close</div>\
                                        <div class="awa-modal-content"></div>\
                                    </div>');

                    $overlay = $('<div class="awa-modal-overlay"></div>');

                    $('body').append($overlay).append($container);

                    AWA.modalReady = true;
                
                    $container.find('.awa-modal-close').on('click', AWA.closeModal);
                    $overlay.on('click', AWA.closeModal);

                }

                // add content, position and activate

                $container.find('.awa-modal-content').html(e.data.content);

                $container.css({top: $(window).scrollTop() + (($(window).height() - $container.height()) / 2) });

                $('body').addClass('awa-modal-active');

            },

            /**
             * Closes the modal
             * @param {object} e - DOM event object
             */
            closeModal: function(e) {

                e.preventDefault();

                $('body').removeClass('awa-modal-active');

            },

            /**
             * Listens for scroll events and attaches an element to the top of the page
             * once past its initial position on the page
             * @param {object} $elem - jQuery object representing the element to attach
             */
            scrollListener: function($elem) {

                var initialPos = $elem.position();
                var reCalculatePos = false;

                var $window = $(window);
                var fixed = false;

                var $products;
                var buttonDelayed = true; // var only relevent if delayPrompt is set to true
                var threshold;

                if($('.show-all-products #NestedMaster_PageContent_CategoryProductList_CategoryProductResults_productControls').length) {
                    $products = $('.show-all-products #NestedMaster_PageContent_CategoryProductList_CategoryProductResults_productControls > div');
                } else {
                    $products = $('.show-all-products > div');
                }

                // function to set class depending on scroll position
                function fixOrNot(e, initialPos) {

                    if($window.scrollTop() >= initialPos.top - 20) {

                        if($window.width() > 978) {

                            $elem.css({width: $elem.parent('div').width() + 'px'});
                            $elem.addClass('awa-fixed');
                            fixed = true;
                        }

                    } else {

                        $elem.css({width: '100%'});
                        $elem.removeClass('awa-fixed');
                        fixed = false;

                    }

                }

                // function to find our threshold for unhiding
                function getThreshold() {

                    var threshold;

                    if($window.width > 1098 && $products.length > 40) {

                        // 4 products to a row
                        threshold = $products.eq(40).position().top;

                    } else if($products.length > 30) {

                        // 3 products to a row
                        threshold = $products.eq(30).position().top;

                    } else if($products.length > 3) {

                        threshold =  $products.eq($products.length - 4).position().top;

                    } else {

                        threshold =  $products.eq($products.length - 1).position().top;

                    }

                    return threshold;

                }

                // function to unhide the button after a threshold
                function unHideAfterThreshold(e) {

                    if(!buttonDelayed) {
                        return;
                    }

                    if($(window).scrollTop() >= e.data.threshold) {
                        $('.awa-button-hidden').removeClass('awa-button-hidden');
                    }

                }

                // function to return the initial position, 
                // it recalculates if it if the screen is below a certain width
                function getInitialPos() {

                    if(!fixed) {
                        initialPos = $elem.position();
                    }

                    return initialPos;

                }

                // scroll event handlers
                $window.on('scroll resize orientationchange', function(e) {
                    fixOrNot(e, getInitialPos());
                });

                // run it once incase we are already past the threshold
                fixOrNot({type: null}, getInitialPos());

                // if we have delayed the buttons display, add a listener
                if(AWA.delayPrompt === true) {

                    threshold = getThreshold();

                    $window.on('scroll resize', {threshold: threshold}, unHideAfterThreshold);

                    unHideAfterThreshold({data: {threshold: threshold}});

                }


            },

            /**
             * Get the minimum the user has to spend to get free delivery
             * @param {string|number} basketValue - The value in the basket
             * @return {number}
             */
            getMinSpend: function(basketValue) {

                return parseFloat((50 - basketValue).toFixed(2));

            },

            /**
             * Mutation listener
             * Poll for changes within a parent element then run a callback
             * @param {string} selector - CSS selector for parent element
             * @param {function} callback - The callback to run
             */
            mutationListener: function(selector, callback) {

                var $parent = $(selector);

                var state = {
                    html: $parent.html(),
                    changing: false
                };

                var interval = setInterval(function() {

                    if(state.changing !== false) {

                        if(state.changing < (new Date().getTime()) - 500) {

                            if(state.html === $parent.html()) {
                                state.changing = false;
                                state.html = $parent.html();
                                callback();
                            } else {
                                state.changing = new Date().getTime();
                                state.html = $parent.html();
                            }

                        }

                        return;

                    } else {

                        if($parent.html() !== state.html) {

                            state.changing = new Date().getTime();
                            state.html = $parent.html();

                        }

                    }

                }, 50);
            },

            /**
             * Initialise the experiment
             */
            init: function() {

                var minSpend = AWA.getMinSpend(AWA.basketValue);
                var $sorter;

                // Log it
                AWA.log('AWA - Help me test');

                if(window.location.search.indexOf('aw=help') !== -1) {

                    // Set slider lowest point
                    waitFor(
                        function() {
                            return typeof GenerateResults === 'function';
                        },
                        function() {
                            $('.noUiSlider').val([minSpend]);
                            GenerateResults();
                        }
                    );

                    // sort by lowest price
                    waitFor(
                        function() {
                            $sorter = $('#NestedMaster_PageContent_CategoryProductList_CategoryProductResults_SortResults');
                            return $sorter.length;
                        },
                        function() {
                            $sorter.find('option[value="price-up"]').prop('selected', true);
                            $sorter.trigger('change');
                        }
                    );
                    
                }

                if(AWA.shouldShowPrompt(AWA.basketValue)) {

                    // Append CSS
                    $('head').append('<style type="text/css">'+AWA.css+'</style>');

                    // Do things
                    AWA.doCartButton();
                    AWA.doCategoryButtons();
                    AWA.mutationListener('.show-all-products', AWA.insertIntoProductRows);

                }

            }

        };

        /**
         * Run the experiment
         */

        AWA.init();

    }; // helpMe()

    /**
     * Wait for the things we need to run the experiment
     */
    waitFor(
        function() {
            return typeof jQuery === 'function' && document.getElementById('hdnBasketValue') !== null;
        },
        function() {
            helpMe(jQuery);
        },
    4000);

})();