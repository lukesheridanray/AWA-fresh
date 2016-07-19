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
        }\
        .product-detail--info-text-block p + p:before {\
            content: "|";\
            color: #666;\
        }\
        .product-detail--info-text-block a {\
            color: #666;\
            font-weight: 400;\
            margin-right: 16px;\
        }\
        .product-detail--info-text-block p + p a {\
            margin-right: 0;\
            margin-left: 14px;\
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
            background: #f00;\
            color: #fff;\
            padding: 0.5em 1em;\
        }\
        .awa-value h2 {\
            color: #fff;\
            font-size: 2em;\
            margin: 0;\
        }\
        .awa-value ul {\
            margin: 1em 0 0.5em 0;\
            padding: 0;\
            list-style-type: none;\
        }\
        .awa-value li {\
            margin: 0.5em 0;\
            padding: 0;\
            font-size: 1.4em;\
            list-style-type: none;\
        }\
        .awa-value li:before {\
            content: "";\
            width: 60px;\
            height: 10px;\
            display: inline-block;\
        }\
        .awa-value li:after {\
            content: "";\
            width: 60px;\
            height: 10px;\
        }\
        ',

        copy: {

            en: {
                title: 'Why buy direct from Canon?',
                range: 'Full range of genuine Canon products',
                gaurantee: 'Minimum 2 year guarantee',
                delivery: 'Free delivery - easy returns'
            },

            de: {
                title: 'Warum direkt von Canon kaufen?',
                range: 'Vollständige Palette von originalen Canon Produkten',
                gaurantee: 'Mindestens zweijährige Garantie',
                delivery: 'Kostenlose Liefering - Umstandslose Warenrücksendung'
            },

            fr: {
                title: 'Pourquoi acheter directement chez Canon?',
                range: 'Gamme complète de produits Canon authentiques',
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

    };

    /**
     * Run the experiment
     */

    if(
        // Product is toner
        window.location.pathname.indexOf('-toner') !== -1 ||
        // Product is ink
        window.location.pathname.indexOf('-ink') !== -1
    ) {
        AWA.log('AWA 8 - Why buy from Canon? - Experiment ending');
        return;
    }

    // Log it
    AWA.log('AWA 8 - Why buy from Canon?');

    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    AWA.moveQuantity();
    AWA.updateLinks();
    AWA.addValueBox();

})(jQuery, 'en'); // vwo_$ || optimizely.$