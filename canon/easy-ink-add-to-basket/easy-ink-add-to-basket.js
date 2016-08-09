// jshint multistr: true
// jshint strict: true

/**

TO DOS: we need to say we have seen the modal is seen a paper

is form too long for cookie?

 */

(function($, LANG) {

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
        .easyink-modal,\
        .easyink-modal-overlay {\
            display: none;\
            opacity: 0;\
            -wekbit-transition: 0.2s ease-in opacity;\
               -moz-transition: 0.2s ease-in opacity;\
                 -o-transition: 0.2s ease-in opacity;\
                    transition: 0.2s ease-in opacity;\
        }\
        .easyink-modal-visible .easyink-modal,\
        .easyink-modal-visible .easyink-modal-overlay {\
            display: block;\
            opacity: 1;\
        }\
        .easyink-modal-overlay {\
            width: 100%;\
            height: 100%;\
            position: fixed;\
            top: 0;\
            left: 0;\
            z-index: 90;\
            background: rgba(0,0,0,0.3);\
        }\
        .easyink-modal {\
            width: 40%;\
            left: 30%;\
            height: 300px;\
            margin: auto;\
            z-index: 100;\
            position: fixed;\
            background: #fff;\
            top: 50%;\
            -webkit-transform: translate(0,-50%);\
               -moz-transform: translate(0,-50%);\
                 -o-transform: translate(0,-50%);\
                    transform: translate(0,-50%);\
            margin-top: 0;\
        }\
        .easyink-modal-form {\
            display: none;\
        }\
        ',

        // Is the modal ready?
        modalReady: false,

        // Has the user seen the modal once this session?
        seenModal: (document.cookie.indexOf('AwaSeenEasyInkModal=true') !== -1) ? true : false,

        // What page are we on?
        currentPage: (window.location.pathname.match(/\/(pixma|maxify|imageprograf)\-.*\-ink\-cartridges.*/g) !== null) ? 'easyink' : 'product',

        // This will hold our product data
        productData: {},

        // Text copy
        copy: {
            en: {
                title: 'Keep stocked up',
                delMsg: '<a href="/delivery-information/">Free standard delivery</a>',
                submit: 'Add paper',
                dismiss: 'No thanks'
            }
        },

        /**
         * Get the product data we need for the modal
         * @return {mixed} An object with the data we need, or null if there is an issue
         */
        getProductData: function() {

            // We are looking for a paper option
            var $papers = $('.layout--header:contains("Paper for")').parents('.row').first().find('.product-tile');
            var $product;

            // Go through all our paper options and get the first suitable one
            $papers.each(function() {

                var $self = $(this);

                if($self.find('.product-tile--add-to-basket-btn-disabled').length !== 0) {
                    // product is disabled, continue to next
                    return true;
                }

                // Insert other conditions here?

                // Everything is fine so assign product and break loop
                $product = $(this);
                return false;

            });

            if($product === undefined) {
                return null;
            }

            return {
                url: $product.find('h3 a').attr('href'),
                name: $.trim( $product.find('h3').text() ),
                img: $product.find('img').attr('srcset').split(',')[0],
                desc: $product.find('.product-tile-desc--para').text(),
                price: $.trim( $product.find('.price-now').text() ),
                sku: $product.find('[name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.catalogRefIds"]').val()
            };

        },

        /**
         * Get the HTML for an add to basket form
         * @param {string} sku - Product SKU
         * @param {string} name - Product name / title
         * @param {string} price - Price (including currency symbol)
         */
        getForm: function(sku, name, price) {

            // slice currency symbol off
            price = price.slice(1);

            return '<form data-redirect="" id="addToCart" data-qtylimit="5" name="addToCart" action="'+window.location.pathname+'?_DARGS=/tile/gallery/product/include/add-to-basket-wishlist.jsp.addToCart" class="form-inline add-to-basket js-require" method="POST">\
                <input name="_dyncharset" value="utf-8" type="hidden">\
                <input name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.catalogRefIds" value="'+ sku +'" type="hidden">\
                <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.catalogRefIds" value=" " type="hidden">\
                <input name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.productId" value="'+ sku +'" type="hidden">\
                <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.productId" value=" " type="hidden">\
                <input id="frm-quantity" name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.quantity" value="1" class="input-mini" type="hidden">\
                <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.quantity" value=" " type="hidden">\
                <label class="button-wrapper btn btn-success button-gutter-right product-tile--add-to-basket-btn">\
                <input id="add-to-basket" title="Add to basket" data-analytics-method="utag.link" data-js-require="app/analytics" data-analytics-custom-props="{&quot;customProps&quot;:[{&quot;propName&quot;:&quot;product.productInfo.quantity&quot;,&quot;getValueID&quot;:&quot;frm-quantity&quot;},{&quot;propName&quot;:&quot;event.eventInfo.eventAction&quot;,&quot;value&quot;:&quot;addToBasket&quot;}]}" name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.addItemToOrder" value="Add to basket" class="add-to-basket--submit js-analytics-click" type="submit" data-analytics="{&quot;product&quot;:[{&quot;productInfo&quot;:{&quot;productID&quot;:&quot;'+ sku +'&quot;,&quot;productName&quot;:&quot;' + name + '&quot;,&quot;sku&quot;:&quot;'+ sku +'&quot;,&quot;quantity&quot;:&quot;1&quot;},&quot;category&quot;:{&quot;primaryCategory&quot;:&quot;Ink, Toner &amp; Paper&quot;,&quot;subCategory&quot;:&quot;Paper&quot;,&quot;parentCategory&quot;:&quot;Paper&quot;},&quot;price&quot;:{&quot;priceWithTax&quot;:&quot;' + price + '&quot;,&quot;voucherCode&quot;:&quot;&quot;,&quot;voucherDiscount&quot;:&quot;&quot;}}],&quot;cart&quot;:{&quot;cartID&quot;:&quot;o25933474&quot;},&quot;event&quot;:[{&quot;eventInfo&quot;:{&quot;eventAction&quot;:&quot;captureEvent&quot;}}],&quot;version&quot;:&quot;1.0&quot;}">\
                <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.addItemToOrder" value=" " type="hidden"></label>\
                <input name="_DARGS" value="/tile/gallery/product/include/add-to-basket-wishlist.jsp.addToCart" type="hidden">\
                </form>';

        },

        /**
         * HTML template for the modal
         * @param {object} data - The product data we need
         */
        modalTemplate: function(data) {

            return '<div class="easyink-modal">\
                        \
                        <a href="#" class="easyink-modal-close">X</a>\
                        \
                        <h3>'+AWA.copy[LANG].title+'</h3>\
                        \
                        <h4><a href="'+data.url+'">'+data.name+'</a></h4>\
                        \
                        <div class="easyink-modal-product">\
                        \
                            <img src="'+data.img+'" alt="" />\
                            \
                            <div class="easyink-modal-product-info">\
                            \
                                <p>'+data.desc+'</p>\
                                \
                                <p>'+AWA.copy[LANG].delMsg+'</p>\
                                \
                                <p class="easyink-modal-price"><strong>'+data.price+'</strong></p>\
                                \
                                <a class="easyink-modal-dismiss" href="#">No thanks</a>\
                                \
                                <a class="easyink-modal-submit">'+AWA.copy[LANG].submit+'</a>\
                                \
                                <div class="easyink-modal-form">'+data.form+'</div>\
                                <div class="easyink-modal-form">'+AWA.getForm(data.sku, data.title, data.price)+'</div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>';

        },

        /**
         * Initialise the modal (append modal elements to body)
         */
        initModal: function() {

            if(AWA.productData === null) {
                return;
            }
            
            $('body')
                .append(
                    '<div class="easyink-modal-overlay"></div>'
                )
                .append(
                    AWA.modalTemplate(AWA.productData)
                );

            AWA.modalReady = true;

        },

        /**
         * Show the modal
         */
        showModal: function() {

            if(!AWA.seenModal) {

                $('body').addClass('easyink-modal-visible');

            }
            
        },

        /**
         * Hide the modal
         */
        hideModal: function() {

            $('body').removeClass('easyink-modal-visible');

            AWA.saveState('AwaSeenEasyInkModal', true);
            AWA.seenModal = true;
            
        },

        /**
         * Add product to the cart
         * @param {object} jQuery event object
         */
        addToCart: function(e) {

            e.preventDefault();

            var $submit = $(this).next('.easyink-modal-form').find('.btn-success');

AWA.log($submit);

            $submit.trigger('click');

        },

        /**
         * Save something to a cookie
         * This saves something to a session cookie
         * @param {string} key
         * @param {mixed} val
         */
        saveState: function(key, val) {

            if(val === null) {
                return;
            }

            var cookie = key + '=' + encodeURIComponent(JSON.stringify(val)) +
                        ';path=/;domain=.canon.co.uk';

            document.cookie = cookie;

        },

        /**
         * Get some data from the cookie
         * This saves something to a session cookie
         * @param {string} key
         * @return {mixed} value of the cookie
         */
        getSavedState: function(key) {

            var regex = new RegExp('(?:(?:^|.*;\\s*)'+key+'\\s*\\=\\s*([^;]*).*$)|^.*$');
            var val = document.cookie.replace(regex, "$1");

            if(val) {
                return JSON.parse(decodeURIComponent(val));
            } else {
                return null;
            }

        },

        /**
         * Mutation listener
         * Poll for changes within a parent element then run a callback
         * @param {string} selector - CSS selector for parent element
         * @param {function} callback - The callback to run
         * @param {bool} keepAlive - Do we keep polling after the callback has run?
         * @param {delay} delay - How many miliseconds to wait till running callback (to ensure DOM changes have finished)
         */
        mutationListener: function(selector, callback, keepAlive, delay) {

            keepAlive = keepAlive || false;
            delay = delay || 500;

            var $parent = $(selector);

            var state = {
                html: $parent.html(),
                changing: false
            };

            var interval = setInterval(function() {

                if(state.changing !== false) {

                    if(state.changing < (new Date().getTime()) - delay) {

                        if(state.html === $parent.html()) {
                            state.changing = false;
                            state.html = $parent.html();
                            callback();
                            if(!keepAlive) {
                                clearInterval(interval);
                            }
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
         * Go to show the modal... wait for the added to basket UX to finsish
         */
        goToShowModal: function() {

            AWA.mutationListener('.mini-basket', AWA.showModal, false, 100);

        }

    };

    /**
     * Run the experiment
     */


    // Do some page specific stuff

    if(AWA.currentPage === 'easyink') {

        // We are on an easy ink page
        AWA.log('AWA 9 - Easy Ink add to basket - easy ink page');

        // Grab product data and save as local var
        AWA.productData = AWA.getProductData();

        // Add product data to cookie so we can use it on the product page
        AWA.saveState('AwaEasyInkPaper', AWA.productData);

    } else if(window.location.search.indexOf('awaref=easyink') !== -1) {

        // We are on a product page and we have come via the easy ink page
        AWA.log('AWA 9 - Easy Ink add to basket - product page');

        // Grab product data from cookie
        AWA.productData = AWA.getSavedState('AwaEasyInkPaper');

    } else {

        // We should not be here
        return;

    }

    // Check if we have already seen the modal

    if(AWA.seenModal) {

        AWA.log('AWA 9 - Easy Ink add to basket - already seen modal');
//        return;
    }


    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');


    // Init modal
    AWA.initModal();


    // If modal is ready attach event handlers, otherwise log as an error
    if(AWA.modalReady) {

        // Add event handler to add to basket buttons, filtering out paper products
        $('.product-tile .btn-success').filter(function() {
            var $parent = $(this).parents('.row:eq(0)');
            return !$parent.find('.layout--header:contains("Paper for")').length && !$parent.find('.layout--header:contains("Papers for")').length;
        }).on('click', AWA.goToShowModal);

        $('body')
            .on('click', '.easyink-modal-close, .easyink-modal-dismiss, .easyink-modal-overlay, .easyink-modal-submit', AWA.hideModal)
            .on('click', '.easyink-modal-submit', AWA.addToCart);

    } else {

        AWA.log('AWA 9 - Easy Ink add to basket - Product info failed to populate the modal');

    }

})(jQuery, 'en'); // vwo_$ || optimizely.$
