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
         */
        log: function(value, table) {
            table = table || false;
            console.log(table);
            if(typeof console === 'undefined') {
                return;
            }
            if(table && typeof console.table === 'function') {
                console.log('doin a table');
                console.table(value);
            } else {
                console.log(value);
            }
        },

        css: '\
        .awa-mobile {\
            display: none;\
        }\
        .product .icon-van {\
            font-size: 50px !important;\
        }\
        .awa-five-checks .icon-van {\
            position: relative;\
        }\
        .awa-five-checks .icon-van:after {\
            content: "\\e802";\
            position: absolute;\
            bottom: -38px;\
            left: -36px;\
        }\
        .awa-five-checks .icon-van.product__icon__top:after {\
            content: "";\
        }\
        .awa-five-checks .icon-van + .icon-van:after {\
            left: auto;\
            right: -36px;\
        }\
        .product .icon-motorcycle {\
            font-size: 56px;\
        }\
        .awa-five-checks .icon-motorcycle {\
            position: relative;\
        }\
        .awa-five-checks .icon-motorcycle:after {\
            content: "\\e801";\
            position: absolute;\
            bottom: -26px;\
            left: -34px;\
        }\
        .awa-five-checks .icon-motorcycle.product__icon__top:after {\
            content: "";\
        }\
        .product .icon-motorcycle.product__icon__top:before {\
            position: relative;\
            top: 6px;\
        }\
        .awa-five-checks .icon-motorcycle + .icon-motorcycle:after {\
            left: auto;\
            right: -34px;\
        }\
        .product .icon-car {\
            font-size: 44px;\
        }\
        .awa-five-checks .icon-car {\
            position: relative;\
        }\
        .awa-five-checks .icon-car:after {\
            content: "\\61";\
            position: absolute;\
            bottom: -27px;\
            left: -29px;\
            padding-top: 5px;\
            background: #fff;\
            border-radius: 15px;\
        }\
        .awa-five-checks .icon-car.product__icon__top:after {\
            content: "";\
            display: none;\
        }\
        .product .icon-car.product__icon__top {\
            top: 26px !important;\
        }\
        .awa-five-checks .icon-car + .icon-car:after {\
            left: auto;\
            right: -29px;\
        }\
        @media screen and (min-width: 1199px) {\
            .select-product .product-selection .product__icon {\
                margin-bottom: 30px;\
            }\
        }\
        @media screen and (max-width: 1199px) {\
            .select-product .product-selection .product .panel {\
                padding-left: 30px;\
                padding-right: 30px;\
            }\
            .product .icon-van {\
                font-size: 35px !important;\
            }\
            .awa-five-checks .icon-van:after {\
                left: -25px;\
                bottom: -24px;\
            }\
            .awa-five-checks .icon-van + .icon-van:after {\
                right: -25px;\
                bottom: -24px;\
            }\
            .product .icon-motorcycle {\
                font-size: 40px !important;\
            }\
            .awa-five-checks .icon-motorcycle:after {\
                left: -24px;\
                bottom: -18px;\
            }\
            .awa-five-checks .icon-motorcycle + .icon-motorcycle:after {\
                right: -24px;\
                bottom: -18px;\
            }\
            .product .icon-car {\
                font-size: 35px !important;\
            }\
            .awa-five-checks .icon-car:after {\
                left: -25px;\
                padding: 5px 6px 0 6px;\
            }\
            .awa-five-checks .icon-car + .icon-car:after {\
                right: -25px;\
            }\
            .product .icon-car.product__icon__top {\
                top: 36px !important;\
                height: 43px !important;\
            }\
        }\
        @media screen and (max-width: 991px) {\
            .select-product .product-selection .product .panel {\
                padding-top: 32px;\
                padding-left: 30px;\
                padding-right: 30px;\
            }\
        }\
        @media screen and (max-width: 767px) {\
            .awa-mobile {\
                display: block;\
            }\
            .select-product .product-selection .product__icon,\
            .select-product .product-selection .button--product__price {\
                display: none;\
            }\
            .select-product .product-selection .product__heading,\
            .select-product .product-selection .product__subheading {\
                float: left;\
                line-height: 42px;\
            }\
            .product--multi-check .product__heading,\
            .product--single-check .product__subheading {\
                display: none;\
            }\
            .select-product .product-selection .product__select {\
                float: right;\
            }\
            .select-product .product-selection .button--product {\
                width: 70px;\
            }\
            .select-product .product-selection .button--product .row {\
                margin-left: 0;\
                margin-right: 0;\
            }\
            .select-product .product-selection .button--product__buy {\
                width: 100%;\
                padding-left: 0;\
                text-align: center;\
            }\
            .select-product .product-selection .product--multi-check__ribbon,\
            .select-product .product-selection .product--single-check__stamp {\
                display: none;\
            }\
            .select-product .product-selection .product .panel {\
                margin-bottom: -10px;\
            }\
            .select-product .product-selection .product:last-child .panel {\
                margin-bottom: 0;\
            }\
            .select-product .product-selection .product--multi-check,\
            .select-product .product-selection .product--single-check {\
                padding-left: 0;\
                padding-right: 0;\
            }\
            .awa-select-label {\
                margin-top: -1em;\
                margin-bottom: 2em;\
            }\
            .product__singleprice {\
                display: none;\
            }\
            .select-product .product-selection .product__select {\
                margin: 0;\
            }\
            .select-product .product-selection .product .overview {\
                float: left;\
            }\
            .select-product .product-selection .product__singleprice--bottom {\
                display: none;\
            }\
            .awa-price-summary {\
                float: left;\
                margin: 0 0 0 2em;\
                font-weight: normal;\
                line-height: 42px;\
            }\
            .awa-five-checks button {\
                padding-bottom: 2em;\
            }\
            .select-product .product-selection .product button:focus,\
            .select-product .product-selection .product button:hover {\
                box-shadow: none;\
            }\
        @media screen and (max-width: 479px) {\
            .select-product .product-selection .product .panel {\
                border-radius: 0;\
            }\
        }\
        @media screen and (max-width: 329px) {\
            .awa-price-summary {\
                clear: left;\
                margin: 0;\
            }\
        }\
        ',

        vars: {
        },

        // Make layout changes to HTML
        adjustLayout: function() {

            var $productRow = $('.select-product__heading').next('.row');
            var $buttons = $('.product--single-check, .product--multi-check');

            // change container classes

            $productRow.find('.col-sm-4')
                .removeClass('col-sm-4')
                .addClass('col-sm-12 col-md-3');

            $productRow.find('.col-sm-8')
                .removeClass('col-sm-8')
                .addClass('col-sm-12 col-md-9');

            // change button classes

            $buttons.removeClass('col-xs-6').addClass('col-xs-12 col-sm-4');

        },

        // Clones the 3 checks button and converts to a 5 check button
        cloneButton: function() {

            var $button = $('.product--multi-check');
            var $clone = $button.clone(true, true);
            var buttonType = $button.find('button').val().split('.')[1];
            
            // change button val
            $clone.find('button').val('multilg.' + buttonType);

            // change accompanying text
            $clone.find('.product__subheading').text('5 checks');
            $clone.find('.product__singleprice .highlight').text('£7.99');
            $clone.find('.js-recall-expandable-caller-value').text('39.95');
            $clone.find('.js-recall-expandable-caller-label').text('HPI Multicheck - 5 Vehicle History Checks');

            // remove best value ribbon from the old button
            $button.find('.product--multi-check__ribbon').remove();

            // add custom class to cloned button
            $clone.addClass('awa-five-checks --' + buttonType);

            // insert new button
            $clone.insertAfter($button);

        },

        // Updates the number of checks purchased if the price matches a 5 check
        updateMultiCount: function() {

            var $placeholders = $('.report__summary').nextAll('.box').find('.box__body p:first-child strong');

            if($placeholders.length === 2) {

                if($placeholders.eq(0).text() === '£39.95') {

                    // This is a 5 check purchase
                    $placeholders.eq(1).text('5');

                }

            }

        },

        // Adds some elements into the buttons that are used for the modified mobile / tablet view
        addMobileElements: function() {

            var $single = $('.product--single-check button');
            var $multis = $('.product--multi-check button');
            var type = $multis.eq(0).val().split('.')[1];

            $single
                .prepend(
                    '<p class="awa-mobile awa-select-label">How many '+ type +'s are you likely to check?</p>'
                )
                .find('.product__heading').after(
                    '<p class="awa-mobile awa-price-summary"><span class="highlight">' +
                        $single.find('.button--product__price').text() +
                    '</span></p>'
                );

            $multis.each(function() {

                var $multi = $(this);

                $multi.find('.product__subheading').after(
                    '<p class="awa-mobile awa-price-summary">' +
                        $multi.find('.product__singleprice').html() +
                    '</p>'
                );

            });

        },

    };

    /**
     * Run the experiment
     */

    if(window.location.pathname.indexOf('product-selection') !== -1) {
    
        // Product selection page

        // Append CSS
        $('head').append('<style type="text/css">'+AWA.css+'</style>');

        // Do things
        AWA.adjustLayout();
        AWA.cloneButton();
        AWA.addMobileElements();

        // Log
        AWA.log('AWA - Add third price point: Product selection');


    } else if(window.location.pathname.indexOf('reports') !== -1) {

        // Reports page
        AWA.updateMultiCount();

        // Log
        AWA.log('AWA - Add third price point: Reports page');

    }
    
})(jQuery); // vwo_$ || optimizely.$