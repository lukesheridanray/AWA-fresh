// jshint multistr: true
// jshint strict: true

(function($, LANG) {

    'use strict';

    /**
     * Experiment set up
     */

    var AWA = {

        /**
         * Safely log to console when console is not defined
         * @param {*} value - The value to log
         * @param {bool} table - If true will use console.table if available
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
        #addToCart {\
            margin-top: -1em;\
        }\
        .pricing-product-detail + .control-group {\
            float: left;\
            width: auto;\
            clear: none;\
            padding: 9px 0 0 9px;\
        }\
        .pricing-product-detail {\
            float: left;\
        }\
        .product-detail--info-text-block {\
            clear: both;\
            overflow: auto;\
            margin-bottom: 1em;\
        }\
        .product-detail--info-text-block p {\
            float: left;\
            clear: none;\
            margin-bottom: 7px;\
        }\
        .product-detail--info-text-block a {\
            color: #666;\
            font-weight: 400;\
            margin-right: 16px;\
        }\
        .product-detail--info-text-block p + p a {\
            margin-right: 0;\
            margin-left: 0;\
        }\
        .product-detail--info-text-block a i {\
            display: none;\
        }\
        .pricing-product-detail .awa-saving-band {\
            margin-bottom: 1em;\
        }\
        .product-detail-core {\
            background: #F2F2F2;\
            padding: 1em;\
            position: relative;\
        }\
        .awa-value {\
            background: #fff;\
            color: #0d7577;\
            border: 2px solid #0d7577;\
            padding: 0.5em 0 0.5em 1em;\
            position: relative;\
        }\
        .awa-value:before {\
            content: none;\
            position: absolute;\
            top: -15px;\
            margin: auto;\
            left: 0;\
            right: 0;\
            width: 0;\
            height: 0;\
            border-style: solid;\
            border-width: 0 15px 15px 15px;\
            border-color: transparent transparent #0d7577 transparent;\
        }\
        .awa-value h2 {\
            color: #0d7577;\
            font-size: 1.8em;\
            margin: 2px 0 0 8px;\
        }\
        .awa-value ul {\
            margin: 1em 0;\
            padding: 0;\
            list-style-type: none;\
        }\
        .awa-value li {\
            margin: 0;\
            padding: 0;\
            font-size: 1.25em;\
            list-style-type: none;\
            line-height: 60px;\
        }\
        .awa-lang-de .awa-value li {\
            font-size: 1.2em;\
        }\
        .awa-value li:before {\
            content: "";\
            display: inline-block;\
            background-position: 0 0;\
            background-repeat: no-repeat;\
            width: 60px;\
            height: 60px;\
            float: left;\
            margin: 0 8px 0 0;\
        }\
        .awa-value li.range:before {\
            background-image: url("//cdn.optimizely.com/img/2201792135/fbd2dc585d0644f6bdc30b08a8d7b41d.png");\
        }\
        .awa-value li.gaurantee:before {\
            background-image: url("//cdn.optimizely.com/img/2201792135/df8bc3273c25404e934b79d5e64a0b23.png");\
        }\
        .awa-value li.delivery:before {\
            background-image: url("//cdn.optimizely.com/img/2201792135/1bcab78039e34280bcdaa12d61e9b4e8.png");\
        }\
        .awa-value li:after {\
            content: "";\
            width: 20px;\
            height: 20px;\
            display: inline-block;\
            height: 20px;\
            margin: 0 0 0 10px;\
            top: 5px;\
            position: relative;\
            background: url("//cdn.optimizely.com/img/2201792135/e5b14ad90ff84552a67e6318f25f6417.png") 0 0 no-repeat;\
        }\
        .awa-lang-de .product-detail--info-text-block p {\
            float: none;\
        }\
        .awa-lang-de .product-detail--info-text-block p + p:before {\
            content: none;\
        }\
        .awa-lang-de .product-detail--info-text-block a {\
            margin-right: 0;\
        }\
        .awa-lang-de .product-detail--info-text-block p + p a {\
            margin-left: 0;\
        }\
        @media screen and (max-width: 1199px) {\
            .awa-lang-de .awa-value li {\
                font-size: 1.15em;\
            }\
            .awa-lang-de .awa-value li.range,\
            .awa-lang-de .awa-value li.delivery {\
                line-height: 30px;\
            }\
            .awa-lang-fr .awa-value li {\
                font-size: 1.15em;\
            }\
            .awa-lang-fr .awa-value h2 {\
                font-size: 1.6em;\
            }\
            .awa-lang-de .awa-value li:after,\
            .awa-lang-fr .awa-value li:after {\
                display: none;\
            }\
            .awa-lang-de .awa-value li:before,\
            .awa-lang-fr .awa-value li:before {\
                margin-right: 6px;\
            }\
            .awa-lang-de .awa-value,\
            .awa-lang-fr .awa-value {\
                padding-left: 0.5em;\
            }\
            .awa-lang-fr .product-detail--info-text-block p {\
                float: none;\
            }\
            .awa-lang-fr .product-detail--info-text-block p + p:before {\
                content: none;\
            }\
            .awa-lang-fr .product-detail--info-text-block a {\
                margin-right: 0;\
            }\
            .awa-lang-fr .product-detail--info-text-block p + p a {\
                margin-left: 0;\
            }\
        }\
        @media screen and (max-width: 991px) {\
            .awa-lang-de .awa-value li,\
            .awa-lang-fr .awa-value li {\
                font-size: 1.2em;\
            }\
            .awa-lang-de .awa-value li.range,\
            .awa-lang-de .awa-value li.delivery {\
                line-height: 60px;\
            }\
            .awa-lang-fr .awa-value h2 {\
                font-size: 1.8em;\
            }\
            .awa-lang-de .awa-value li:after,\
            .awa-lang-fr .awa-value li:after {\
                display: inline-block;\
            }\
            .awa-lang-de .awa-value li:before,\
            .awa-lang-fr .awa-value li:before {\
                margin-right: 8px;\
            }\
            .awa-lang-de .awa-value,\
            .awa-lang-fr .awa-value {\
                padding-left: 1em;\
            }\
        }\
        @media screen and (max-width: 600px) {\
            .awa-lang-de .awa-value li,\
            .awa-lang-fr .awa-value li,\
            .awa-value li {\
                font-size: 1.1em;\
            }\
            .awa-lang-fr value h2.\
            .awa-value h2 {\
                font-size: 1.6em;\
            }\
            .awa-lang-de .awa-value li:after,\
            .awa-lang-fr .awa-value li:after,\
            .awa-value li:after {\
                display: none;\
            }\
            .awa-lang-de .awa-value li:before,\
            .awa-lang-fr .awa-value li:before,\
            .awa-value li:before {\
                margin-right: 0;\
            }\
            .awa-lang-de .awa-value,\
            .awa-lang-fr .awa-value,\
            .awa-value {\
                padding-left: 0.5em;\
            }\
        }\
        ',

        copy: {

            en: {
                title: 'Why buy direct from Canon?',
                range: 'Extensive range of genuine Canon products',
                gaurantee: 'Minimum 2 year guarantee',
                delivery: 'Free delivery - easy returns'
            },

            de: {
                title: 'Warum direkt von Canon kaufen?',
                range: 'Ein umfangreiches Sortiment an Canon Originalprodukten',
                gaurantee: 'Mindestens zweijährige Garantie',
                delivery: 'Kostenlose Liefering - Umstandslose Warenrücksendung'
            },

            fr: {
                title: 'Pourquoi acheter directement chez Canon?',
                range: 'Une vaste gamme de produits Canon authentiques',
                gaurantee: 'Garantie de 2 ans minimum',
                delivery: 'Livraison gratuite et retours faciles'
            }

        },

        // Move quantity next to price
        // we actually move the price here...
        moveQuantity: function() {

            $('.pricing-product-detail').insertBefore(
                $('#frm-quantity').parents('.control-group')
            );

        },

        // Update gaurantee and delivery links text and swap them round
        updateLinks: function() {
            
            var $delivery = $('.product-detail--info-text-block p:eq(0)');
            var $gaurantee = $('.product-detail--info-text-block p:eq(1)');

            $delivery.find('a').text(AWA.copy[LANG].delivery);
            $gaurantee.find('a').text(AWA.copy[LANG].gaurantee);

            $delivery.insertAfter($gaurantee);

        },

        // Add the value propostion box
        addValueBox: function() {

            $('.product-detail-core').after(
                '<div class="awa-value col-lg-6 col-md-6 col-sm-12 col-xs-12">\
                    <h2>'+AWA.copy[LANG].title+'</h2>\
                    <ul>\
                        <li class="range">'+AWA.copy[LANG].range+'</li>\
                        <li class="gaurantee">'+AWA.copy[LANG].gaurantee+'</li>\
                        <li class="delivery">'+AWA.copy[LANG].delivery+'</li>\
                    </ul>\
                </div>'
            );

        },

        // wait for a condition
        waitFor: function(condition, callback, timeout, keepAlive) {
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
        },

        // Move saving band
        moveSavingBand: function() {

            $('.pricing-product-detail .awa-saving-band')
                .insertBefore('.pricing-product-detail')
                .css(
                    {
                        position: 'relative',
                        top: '-3px'
                    }
                );

        }

    };

    /**
     * Run the experiment
     */

    // Conditions

    // product is toner or ink
    if(
        window.location.pathname.indexOf('-toner') !== -1 ||
        window.location.pathname.indexOf('-encre') !== -1 ||
        window.location.pathname.indexOf('-tinte') !== -1 ||
        window.location.pathname.indexOf('-ink') !== -1
    ) {
        AWA.log('AWA 8 - Why buy from Canon? - Not running: Product is ink or toner');
        return;
    }

    // not a product page
    if($('.product-detail-core').length === 0) {
        AWA.log('AWA 8 - Why buy from Canon? - Not running: Not a product page');
        return;
    }

    // Log it
    AWA.log('AWA 8 - Why buy from Canon?');

    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Add lang attribute to body
    $('body').addClass('awa-lang-'+LANG);

    AWA.moveQuantity();
    AWA.updateLinks();
    AWA.addValueBox();

    AWA.waitFor(
        function() {
            return $('.pricing-product-detail .awa-saving-band').length > 0;
        },
        AWA.moveSavingBand
    );

})(jQuery, 'en'); // vwo_$ || optimizely.$