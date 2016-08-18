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
                width: 100%;\
                padding: 10px; \
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
                padding-top: 0;\
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
                margin-top: 1em;\
                margin-bottom: 1.5em;\
            }\
            .product__singleprice {\
                display: none;\
            }\
            .select-product .product-selection .product__select {\
                margin: 0;\
                width: 34%;\
                min-width: 60px;\
            }\
            .select-product .product-selection .product .overview {\
                float: left;\
            }\
            .select-product .product-selection .product__singleprice--bottom {\
                display: none;\
            }\
            .awa-price-summary {\
                float: left;\
                margin: 0 0 0 1em;\
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
        }\
        @media screen and (max-width: 479px) {\
            .select-product .product-selection .product .panel {\
                border-radius: 0;\
            }\
        }\
        @media screen and (max-width: 380px) {\
            .select-product .product-selection .product__select {\
                width: 34%;\
            }\
        }\
        @media screen and (max-width: 380px) {\
            .select-product .product-selection .product .panel {\
                padding-left: 15px;\
                padding-right: 15px;\
            }\
            .select-product .product-selection .product__select {\
                width: 26%;\
            }\
        }\
        @media screen and (max-width: 329px) {\
            .select-product .product-selection .product .panel {\
                padding-bottom: 20px;\
            }\
            .select-product .product-selection .product__select {\
                width: 24.5%;\
            }\
        }\
        @media screen and (max-width: 309px) {\
            .awa-price-summary {\
                clear: left;\
                margin: -15px 0 0 0;\
            }\
            .select-product .product-selection .product__select {\
                margin-top: 12px;\
                width: 40%;\
            }\
        }\
        ',

        orangeTriangle: 'data:image/png;base64,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',
// data:image/png;base64,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

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

            // remove best value ribbon from the new button
            $clone.find('.product--multi-check__ribbon').remove();
            
            // change ribbon on the old button
            $button.find('.product--multi-check__ribbon')
                .attr('src', AWA.orangeTriangle)
                .css({top:'-3px',right:'-3px'});

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