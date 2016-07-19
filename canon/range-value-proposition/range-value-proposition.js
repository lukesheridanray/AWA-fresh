// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {};

    var LANG = 'fr';

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.log('AWA 6 - Range Value Proposition');

    // Variable

    AWA.var = {
        en: {
            //title: 'The full Canon range - unbeatable choice',
            title: 'A bigger, better choice of Canon products',
            delivery: '//cdn.optimizely.com/img/2201792135/7b698721980f431ab57bd7eb1b34aeb1.png',
            guarantee: '//cdn.optimizely.com/img/2201792135/1f6aba218d924e89a276ddef1849a678.png',
            range: '//cdn.optimizely.com/img/2201792135/a3522f4a0a294b98a3b3ed4b64e850d5.png'
        },
        fr: {
            title: 'Un choix de produits Canon plus vaste et plus pr&#233;cis',
            delivery: '//cdn.optimizely.com/img/2201792135/7b698721980f431ab57bd7eb1b34aeb1.png',
            guarantee: '//cdn.optimizely.com/img/2201792135/1f6aba218d924e89a276ddef1849a678.png',
            range: '//cdn.optimizely.com/img/2201792135/a3522f4a0a294b98a3b3ed4b64e850d5.png'
        },
        de: {
            title: 'Mehr Produkte. Mehr Auswahl. Direkt von Canon.',
            delivery: '//cdn.optimizely.com/img/2201792135/7b698721980f431ab57bd7eb1b34aeb1.png',
            guarantee: '//cdn.optimizely.com/img/2201792135/1f6aba218d924e89a276ddef1849a678.png',
            range: '//cdn.optimizely.com/img/2201792135/a3522f4a0a294b98a3b3ed4b64e850d5.png'
        },
        banner: '<div class="awa-value-banner">\
                    <ul>'+
                        $('.live-text-banner-link-list ul').html() +
                    '</ul>\
                </div>'
    };

    // CSS

    AWA.css = ' \
    .gallery-category-stamp .layout-primary-header h2 {\
        visibility: hidden;\
        font-size: 37px;\
        margin: 5px 0 25px;\
    }\
    .live-text-banner-link-list {\
        display: none;\
    }\
    @media screen and (max-width: 1100px) {\
        .gallery-category-stamp .layout-primary-header h2 {\
            font-size: 25px;\
        }\
    }\
    .awa-value-banner {\
        background: #eceded;\
        margin: -20px auto 10px auto;\
        text-align: center;\
        padding: 1.5em 0;\
    }\
    .awa-value-banner ul {\
        text-align: center;\
        margin: 0 auto;\
        line-height: 0;\
        padding: 0;\
    }\
    .awa-value-banner li {\
        display: inline-block;\
        margin: 0 2em;\
    }\
    .awa-value-banner i {\
        background-position: 0 0;\
        background-repeat: no-repeat;\
        width: 51px;\
        height: 50px;\
        display: inline-block;\
        margin: 0 0.5em 0 0;\
    }\
    .awa-value-banner i:before {\
        content: none;\
    }\
    .awa-value-banner a {\
        color: #333;\
        line-height: 50px;\
        display: inline-block;\
        float: right;\
        font-size: 1.2em;\
    }\
    .awa-value-banner .icon-delivery {\
        background-image: url("'+AWA.var[LANG].delivery+'");\
    }\
    .awa-value-banner .icon-2-year {\
        background-image: url("'+AWA.var[LANG].guarantee+'");\
    }\
    .awa-value-banner .icon-product-range-2 {\
        background-image: url("'+AWA.var[LANG].range+'");\
    }\
    @media screen and (max-width: 899px) {\
        .awa-value-banner a {\
            font-size: 1.1em;\
        }\
        .awa-value-banner li {\
            margin: 0 1em;\
        }\
    }\
    @media screen and (max-width: 767px) {\
        .awa-value-banner a {\
            font-size: 1.1em;\
            line-height: 40px;\
        }\
        .awa-value-banner i {\
            width: 41px;\
            height: 40px;\
            float: left;\
            background-size: auto 40px;\
        }\
        .gallery-category-stamp .layout-primary-header h2 {\
            margin-bottom: 0;\
        }\
    }\
    @media screen and (max-width: 467px) {\
        .awa-value-banner ul {\
            text-align: left;\
            overflow: auto;\
        }\
        .awa-value-banner a {\
            float: left;\
        }\
        .awa-value-banner li {\
            display: block;\
            clear: both;\
        }\
        .awa-value-banner li + li {\
            padding-top: 10px;\
        }\
    }\
    ';

    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Main experiment code

    // Change title text
    $('.gallery-category-stamp .layout-primary-header h2')
        .html(AWA.var[LANG].title)
        .css({visibility: 'visible'});

    // Append new banner
    $('.gallery-category-stamp').prepend(AWA.var.banner);


})(jQuery); // vwo_$ || optimizely.$