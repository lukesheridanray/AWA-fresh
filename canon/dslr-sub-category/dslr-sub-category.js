// jshint multistr: true
// jshint strict: true

(function($, LANG) {

    'use strict';

    /**
     * Experiment set up
     */

    var AWA = {

        /**
         * Safely log to console in browsers where console is not always defined
         * @param {*} value - The value to log
         */
        log: function(value) {
            if(typeof console === 'undefined') {
                return;
            }
            if(typeof value === 'object' && value !== null && typeof console.table === 'function') {
                console.table(value);
                return;
            }
            console.log(value);
        },

        css: '\
        .awa-hidden {\
            display: none;\
        }\
        .awa-list-more-info {\
            margin-top: 1em;\
        }\
        .awa-list-more-info a {\
            color: #323232;\
            text-decoration: underline;\
        }\
        .awa-list-more-info a:hover,\
        .awa-list-more-info a:focus, {\
            text-decoration: none;\
        }\
        .awa-list-extras,\
        .awa-grid-extras {\
            font-size: 14px;\
        }\
        .awa-list-extras li,\
        .awa-grid-extras li {\
            line-height: 2em;\
        }\
        .awa-list-price,\
        .awa-grid-price {\
            color: #000;\
            font-weight: 500;\
            font-size: 16px;\
            margin-top: 1em;\
        }\
        .awa-list-extras .button-gutter-right,\
        .awa-grid-extras .button-gutter-right {\
            margin-right: 0;\
        }\
        .awa-grid-extras .button-gutter-right {\
            padding-left: 0;\
            padding-right: 0;\
            display: block;\
        }\
        .product-tile-list-view .button-gutter-right {\
            padding-left: 20px;\
            padding-right: 20px;\
            width: 100%;\
        }\
        .awa-reverse-image {\
            z-index: -1;\
        }\
        .awa-reverse-image.-active {\
            z-index: 0;\
        }\
        .awa-front-image {\
            z-index: 0;\
        }\
        .awa-front-image.-hidden {\
            z-index: -1;\
        }\
        .awa-image-small {\
            display: none;\
        }\
        @media screen and (min-width: 768px) {\
            .awa-list-extras {\
                margin-left: 30%;\
            }\
            .awa-image-large {\
                display: none;\
            }\
            .awa-image-small {\
                display: block;\
            }\
            .awa-lang-de .awa-list-extras li {\
                font-size: 0.9em;\
            }\
        }\
        @media screen and (min-width: 1200px) {\
            .awa-list-extras {\
                margin-left: 0;\
                position: absolute;\
                bottom: 70px;\
                right: 0;\
                width: 215px;\
            }\
            .awa-list-extras li, .awa-list-price {\
                text-align: right;\
            }\
            .product-tile-list--desc {\
                padding-right: 215px;\
            }\
        }\
        ',

        data: {
            en: {
                "Canon EOS 5D Mark III Body": { "megapixels":22.3, "lens":"EF (excludes EF-S lenses)", "iso":"Auto (100-12800), 100-25600 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/5260B019_EOS-5D-MARK-III_2/5260b019_eos-5d-mark-iii_2.png?w=420"},
                "Canon EOS 6D + EF 24-105mm IS STM Lens": { "megapixels":20.2, "lens":"EF (excludes EF-S lenses)", "iso":"Auto (100-25600), 100-25600 (in 1/3-stop or whole stop increments)", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8035B126_EOS_6D_+_EF_24-105_STM_6/8035b126_eos_6d_-_ef_24-105_stm_6.png?w=550"},
                "Canon EOS 80D + 18-135mm IS USM Lens": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-16000), 100-16000  (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/1263C047_EOS-80D-EF-S-18-135mm-f_3.5-5.6-IS-USM_2/1263c047_eos-80d-ef-s-18-135mm-f_3-5-5-6-is-usm_2.png?w=550"},
                "Canon EOS 7D Mark II Body": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-16000), 100-16000 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec ", "img":"https://i1.adis.ws/i/canon/9128B043_EOS-7D-Mark-II_2/eos-7d-mark-ii_2.png?w=550"},
                "Canon EOS 6D Body": { "megapixels":20.2 , "lens":"EF (excludes EF-S lenses)", "iso":"Auto (100-25600), 100-25600  (in 1/3-stop or whole stop increments)", "speed":"30-1/4000 sec", "img":"https://i1.adis.ws/i/canon/8035B022_EOS-6D_4/eos-6d_4.png?w=550"},
                "Canon EOS 70D + 18-200mm IS Lens": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-12800), 100-12800 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/8469B048_EOS_70D_+_EFS_18-200_IS_2/8469b048_eos_70d_-_efs_18-200_is_2.png?w=550"},
                "Canon EOS 80D + 18-55mm IS STM Lens": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-16000), 100-16000 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/1263C044_EOS-80D-18-55-IS-STM_2/1263c044_eos-80d-18-55-is-stm_2.png?w=550"},
                "Canon EOS 70D + 18-135mm IS STM Lens": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-12800), 100-12800 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/8469B038_EOS_70D_+_EFS_18-135_IS_STM_3/8469b038_eos_70d_-_efs_18-135_is_stm_3.png?w=550"},
                "Canon EOS 80D Body": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-16000), 100-16000 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/1263C036_EOS-80D_2/1263c036_eos-80d_2.png?w=550"},
                "Canon EOS 70D + 18-55mm IS STM Lens": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-12800), 100-12800 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/8469B031-EOS-70D+18-55-IS-STM-4/8469b031-eos-70d-18-55-is-stm-4.png?w=550"},
                "Canon EOS 700D + 18-135mm IS STM + EF 40mm STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 (in 1/3-stop or whole stop increments)", "speed":"30-1/4000 sec", "img":"https://i1.adis.ws/i/canon/8596B051_EOS_700D_18-135_IS_STM_+_40_STM_3/8596b051_eos_700d_18-135_is_stm_-_40_stm_3.png?w=550"},
                "Canon EOS 70D Body": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-12800), 100-12800 (in 1/3-stop or whole stop increments)", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/8469B024_EOS-70D_2/eos-70d_2.png?w=420"},
                "Canon EOS 750D + 18-135mm IS STM Lens": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 (in 1/3-stop or whole stop increments)", "speed":"30-1/4000 sec", "img":"https://i1.adis.ws/i/canon/image_0592C028_EOS_750D_18-135_IS_7/image_0592c028_eos_750d_18-135_is_7.png?w=420"},
                "Canon EOS 700D + 18-55mm IS STM + 55-250mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec", "img":"https://i1.adis.ws/i/canon/image_8596B080_EOS_700D_18-55_STM+55-250_STM_3/image_8596b080_eos_700d_18-55_stm-55-250_stm_3.png?w=420"},
                "Canon EOS 700D + 18-135mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8596B034_EOS-700D-18-135mm-IS-STM-3/8596b034_eos-700d-18-135mm-is-stm-3.png?w=420"},
                "Canon EOS 100D white + 18-55mm STM lens + Stella McCartney 'Linda' bag": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/9124B029_EOS_100D_+_EF-S_18-55mm_IS_STM_WHITE_STELLA_DONE_3/9124b029_eos_100d_-_ef-s_18-55mm_is_stm_white_stella_done_3.png?w=550"},
                "Canon EOS 750D + 18-55mm IS STM Lens": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/0592C005_EOS_750D_18-55_IS_7/0592c005_eos_750d_18-55_is_7.png?w=550"},
                "Canon EOS 760D Body": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/image_0021C016_EOS-760D_2/image_0021c016_eos-760d_2.png?w=550"},
                "Canon EOS 100D + 18-55mm IS STM + 55-250mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8576B082_EOS_100D_18-55IS_STM+55-250_IS_STM_3/8576b082_eos_100d_18-55is_stm-55-250_is_stm_3.png?w=550"},
                "Canon EOS 100D + 18-135mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec (1/2 or 1/3 stop increments)", "img":"https://i1.adis.ws/i/canon/8576B109_100D_18-135_IS_STM_3/8576b109_100d_18-135_is_stm_3.png?w=550"},
                "Canon EOS 100D + 18-55mm IS STM + 10-18mm IS STM Lens": { "megapixels": 18.0, "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8576B113_EOS_100D_+_EF-S_18-55IS_STM_+_10-18IS_STM_3/8576b113_eos_100d_-_ef-s_18-55is_stm_-_10-18is_stm_3.png?w=550"},
                "Canon EOS 750D Body": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/image_0592C014_EOS-750D_2/image_0592c014_eos-750d_2.png?w=420"},
                "Canon EOS 100D + 18-55mm IS STM + 40mm STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8576B050_EOS_100D_+_EF-S_18-55IS_STM_+_40_STM_3/8576b050_eos_100d_-_ef-s_18-55is_stm_-_40_stm_3.png?w=550"},
                "Canon EOS 700D + 18-55mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8596B027_EOS-700D-18-55mm-IS-STM-3/8596b027_eos-700d-18-55mm-is-stm-3.png?w=550"},
                "Canon EOS 700D Body": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8596B014_EOS-700D_2/eos-700d_2.png?w=550"},
                "Canon EOS 1300D + 18-55mm IS II Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO (100-6400), 100-6400 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/1160C029_EOS-1300D-18-55-IS_2/canon-eos-1300d-18-55mm-is-ii-lens.png?w=420"},
                "Canon EOS 100D + 18-55mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/8576B021_EOS_100D_+_EF-S_18-55mm_IS_STM_3/8576b021_eos_100d_-_ef-s_18-55mm_is_stm_3.png?w=550"},
                "Canon EOS 100D White + 18-55mm IS STM White Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec", "img":"https://i1.adis.ws/i/canon/9124B013_EOS_100D_+_EF-S_18-55mm_IS_STM_WHITE_2/9124b013_eos_100d_-_ef-s_18-55mm_is_stm_white_2.png?w=550"},
                "Canon EOS 1300D + 18-55mm III Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO (100-6400), 100-6400 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/1160C034_EOS-1300D-18-55_2/canon-eos-1300d-18-55mm-iii-lens.png?w=550"},
                "Canon EOS 1300D Body": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO (100-6400), 100-6400 in 1-stop increments", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/1160C017_EOS-1300D_2/canon-eos-1300d-body.png?w=550"},
                "Canon EOS 100D Body": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"AUTO(100-6400), 100-12800 in 1-stop increments", "speed":"30-1/4000 sec", "img":"https://i1.adis.ws/i/canon/8576B014_EOS-100D_2/eos-100d_2.png?w=550"}
            },
            fr: {
                "Boîtier nu Canon EOS 5D Mark III": { "megapixels":22.3, "lens":"EF (excludes EF-S lenses)", "iso":"100-25600", "speed":"30-1/8000 sec", "img":"https://i1.adis.ws/i/canon/5260B019_EOS-5D-MARK-III_2/5260b019_eos-5d-mark-iii_2.png?w=420"},
                "Canon EOS 7D Mark II  Boîtier Nu": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"100-16000", "speed":"30-1/8000 sec ", "img":"https://i1.adis.ws/i/canon/9128B043_EOS-7D-Mark-II_2/eos-7d-mark-ii_2.png?w=550"},
                "Canon EOS 6D + objectif EF 24-105mm IS STM": { "megapixels":20.2, "lens":"EF (sauf modèles EF-S)", "iso":"100 à 25.600", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/8035B126_EOS_6D_+_EF_24-105_STM_6/8035b126_eos_6d_-_ef_24-105_stm_6.png?w=550"},
                "Canon EOS 80D + objectif 18-135mm IS USM": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 16.000", "speed":"30 à 1/8000 s", "img":"https://i1.adis.ws/i/canon/1263C047_EOS-80D-EF-S-18-135mm-f_3.5-5.6-IS-USM_2/1263c047_eos-80d-ef-s-18-135mm-f_3-5-5-6-is-usm_2.png?w=550"},
                "Canon EOS 6D Boîtier Nu": { "megapixels":20.2 , "lens":"EF (sauf modèles EF-S)", "iso":"100 à 25.600", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/8035B022_EOS-6D_4/eos-6d_4.png?w=550"},
                "Canon EOS 80D + objectif 18-55mm IS STM": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 16.000", "speed":"30 à 1/8000 s", "img":"https://i1.adis.ws/i/canon/1263C044_EOS-80D-18-55-IS-STM_2/1263c044_eos-80d-18-55-is-stm_2.png?w=550"},
                "Canon EOS 80D Boîtier nu": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 16.000", "speed":"30 à 1/8000 s", "img":"https://i1.adis.ws/i/canon/1263C036_EOS-80D_2/1263c036_eos-80d_2.png?w=420"},
                "Canon EOS 70D + objectif 18-55mm IS STM": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/8000 s", "img":"https://i1.adis.ws/i/canon/8469B031-EOS-70D+18-55-IS-STM-4/8469b031-eos-70d-18-55-is-stm-4.png?w=420"},
                "Canon EOS 70D Boîtier Nu": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/8000 s", "img":"https://i1.adis.ws/i/canon/8469B024_EOS-70D_2/eos-70d_2.png?w=420"},
                "Canon EOS 750D + Objectif 18-135mm IS STM": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/image_0592C028_EOS_750D_18-135_IS_7/image_0592c028_eos_750d_18-135_is_7.png?w=420"},
                "Canon EOS 100D blanc + objectif 18-55mm STM + étui « Linda » de Stella McCartney": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/9124B029_EOS_100D_+_EF-S_18-55mm_IS_STM_WHITE_STELLA_DONE_3/9124b029_eos_100d_-_ef-s_18-55mm_is_stm_white_stella_done_3.png?w=420"},
                "Canon EOS 700D + Objectif 18-55mm IS STM": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/8596B027_EOS-700D-18-55mm-IS-STM-3/8596b027_eos-700d-18-55mm-is-stm-3.png?w=420"},
                "Canon EOS 750D Boîtier Nu": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/image_0592C014_EOS-750D_2/image_0592c014_eos-750d_2.png?w=420"},
                "Canon EOS 750D + Objectif 18-55mm IS STM": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s ", "img":"https://i1.adis.ws/i/canon/0592C005_EOS_750D_18-55_IS_7/0592c005_eos_750d_18-55_is_7.png?w=420"},
                "Canon EOS 700D Boîtier Nu": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/8596B014_EOS-700D_2/eos-700d_2.png?w=420"},
                "Canon EOS 1300D + objectif 18-55mm IS II": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 6.400", "speed":"30 à 1/4000 s ", "img":"https://i1.adis.ws/i/canon/1160C029_EOS-1300D-18-55-IS_2/canon-eos-1300d-18-55mm-is-ii-lens.png?w=420"},
                "Canon EOS 100D + Objectif 18-55mm IS STM": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/8576B021_EOS_100D_+_EF-S_18-55mm_IS_STM_3/8576b021_eos_100d_-_ef-s_18-55mm_is_stm_3.png?w=420"},
                "Canon EOS 100D + Objectif 18-55mm IS STM Blanc": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/9124B013_EOS_100D_+_EF-S_18-55mm_IS_STM_WHITE_2/9124b013_eos_100d_-_ef-s_18-55mm_is_stm_white_2.png?w=420"},
                "Boîtier du Canon EOS 1300D": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 6.400", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/1160C017_EOS-1300D_2/canon-eos-1300d-body.png?w=420"},
                "Boîtier nu Canon EOS 760D": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"100-12800", "speed":"30-1/4000 sec ", "img":"https://i1.adis.ws/i/canon/image_0021C016_EOS-760D_2/image_0021c016_eos-760d_2.png?w=550"},
                "Canon EOS 100D Boîtier Nu": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"100 à 12.800", "speed":"30 à 1/4000 s", "img":"https://i1.adis.ws/i/canon/8576B014_EOS-100D_2/eos-100d_2.png?w=420"}
            },
            de: {
                "Canon EOS 5D Mark III Gehäuse": { "megapixels":22.3, "lens":"EF Objektive (ausgenommen EF-S Objektive)", "iso":"Auto (100-12.800), 100-25.600 (in ganzen oder Drittelstufen)", "speed":"30-1/8000 s", "img":"https://i1.adis.ws/i/canon/5260B019_EOS-5D-MARK-III_2/5260b019_eos-5d-mark-iii_2.png?w=420"},
                "Canon EOS 6D + EF 24-105mm IS STM Objektiv": { "megapixels":20.2, "lens":"EF (ausgenommen EF-S Objektive)", "iso":"Auto (100-25.600), 100-25.600 (in Drittel- oder ganzen Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/8035B126_EOS_6D_+_EF_24-105_STM_6/8035b126_eos_6d_-_ef_24-105_stm_6.png?w=420"},
                "Canon EOS 80D + 18-135mm IS USM Objektiv": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-16.000), 100-16.000 (in Drittel- oder ganzen Stufen)", "speed":"30-1/8000 s", "img":"https://store.canon.de/canon-eos-80d-18-135mm-is-usm-objektiv/1263C047/"},
                "Canon EOS 7D Mark II Gehäuse": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-16.000), 100-16.000 (in Drittelstufen oder ganzen Stufen)", "speed":"30-1/8000 s ", "img":"https://i1.adis.ws/i/canon/9128B043_EOS-7D-Mark-II_2/eos-7d-mark-ii_2.png?w=420"},
                "Canon EOS 6D Gehäuse": { "megapixels":20.2 , "lens":"EF (ausgenommen EF-S Objektive)", "iso":"Auto (100-25.600), 100-25.600 in Drittel- oder ganzen Stufen)", "speed":"30-1/4000 s", "img":"https://i1.adis.ws/i/canon/8035B022_EOS-6D_1/eos-6d_1.png?w=420"},
                "Canon EOS 80D + 18-55mm IS STM Objektiv": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-16.000), 100-16.000 (in Drittel- oder ganzen Stufen)", "speed":"30-1/8000 s", "img":"https://i1.adis.ws/i/canon/1263C044_EOS-80D-18-55-IS-STM_2/1263c044_eos-80d-18-55-is-stm_2.png?w=420"},
                "Canon EOS 70D + 18-135mm IS STM Objektiv": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-12.800), 100-12.800 (in Drittel- oder ganzen Stufen)", "speed":"30-1/8000 s", "img":"https://i1.adis.ws/i/canon/8469B038_EOS_70D_+_EFS_18-135_IS_STM_3/8469b038_eos_70d_-_efs_18-135_is_stm_3.png?w=420"},
                "Canon EOS 80D Gehäuse": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-16.000), 100-16.000 (in Drittel- oder ganzen Stufen)", "speed":"30-1/8000 s", "img":"https://i1.adis.ws/i/canon/1263C036_EOS-80D_7/1263c036_eos-80d_7.png?w=420"},
                "Canon EOS 70D Gehäuse": { "megapixels":20.2, "lens":"EF/EF-S", "iso":"Auto (100-12.800), 100-12.800 (in Drittel- oder ganzen Stufen)", "speed":"30-1/8000 s", "img":"https://i1.adis.ws/i/canon/8469B024_EOS-70D_2/eos-70d_2.png?w=420"},
                "Canon EOS 70D + 18-55mm IS STM Lens": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-12.800), 100-12.800 (in Drittel- oder ganzen Stufen)", "speed":"30-1/4000 s", "img":"https://i1.adis.ws/i/canon/8469B031-EOS-70D+18-55-IS-STM-3/8469b031-eos-70d-18-55-is-stm-3.png?w=420"},
                "Canon EOS 700D + 18-135mm IS STM Objektiv": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/8596B034_EOS-700D-18-135mm-IS-STM-3/8596b034_eos-700d-18-135mm-is-stm-3.png?w=420"},
                "Canon EOS 100D Weiß + 18-55mm STM Objektiv + Stella McCartney Kameratasche „Linda“": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/9124B029_EOS_100D_+_EF-S_18-55mm_IS_STM_WHITE_STELLA_DONE_3/9124b029_eos_100d_-_ef-s_18-55mm_is_stm_white_stella_done_3.png?w=550"},
                "Canon EOS 750D + 18-135mm IS STM Objektiv": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/image_0592C028_EOS_750D_18-135_IS_7/image_0592c028_eos_750d_18-135_is_7.png?w=420"},
                "Canon EOS 750D + 18-55mm IS STM Objektiv": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4.000 s", "img":"https://i1.adis.ws/i/canon/0592C005_EOS_750D_18-55_IS_7/0592c005_eos_750d_18-55_is_7.png?w=420"},
                "Canon EOS 760D Gehäuse": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/image_0021C016_EOS-760D_2/image_0021c016_eos-760d_2.png?w=550"},
                "Canon EOS 100D + 18-55mm IS STM Objektiv": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/8576B021_EOS_100D_+_EF-S_18-55mm_IS_STM_3/8576b021_eos_100d_-_ef-s_18-55mm_is_stm_3.png?w=420"},
                "Canon EOS 750D Gehäuse": { "megapixels":24.2, "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/image_0592C014_EOS-750D_2/image_0592c014_eos-750d_2.png?w=420"},
                "Canon EOS 700D + 18-55mm IS STM Objektiv": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/8596B027_EOS-700D-18-55mm-IS-STM-3/8596b027_eos-700d-18-55mm-is-stm-3.png?w=420"},
                "Canon EOS 700D Gehäuse": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/8596B014_EOS-700D_2/eos-700d_2.png?w=420"},
                "Canon EOS 1300D + 18-55mm IS II Objektiv": { "megapixels":18, "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-6.400 in ganzen Stufen", "speed":"30-1/4.000 s", "img":"https://i1.adis.ws/i/canon/1160C029_EOS-1300D-18-55-IS_2/canon-eos-1300d-18-55mm-is-ii-lens.png?w=420"},
                "Canon EOS 1300D + 18-55mm III Objektiv": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/1160C034_EOS-1300D-18-55_2/canon-eos-1300d-18-55mm-iii-lens.png?w=420"},
                "Canon EOS 1300D Gehäuse": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s ", "img":"https://i1.adis.ws/i/canon/1160C017_EOS-1300D_2/canon-eos-1300d-body.png?w=420"},
                "Canon EOS 100D Gehäuse": { "megapixels":18.0 , "lens":"EF/EF-S", "iso":"Auto (100-6.400), 100-12.800 (in Drittel-Stufen)", "speed":"30-1/4000 s", "img":"https://i1.adis.ws/i/canon/8576B014_EOS-100D_2/eos-100d_2.png?w=420"}
            }
        },

        vars: {
            // how are products laid out?
            currentView: (window.location.search.indexOf('view=list') !== -1) ? 'list' : 'grid',
            // has grid view been specified by the user?
            isGrid: (window.location.search.indexOf('view=grid') !== -1) ? true : false
        },

        copy: {
            en: {
                delLink: 'Free standard delivery',
                gauranteeLink: 'Min. 2 year guarantee',
                cartSubmit: 'Add to basket',
                more: 'More info'
            },
            fr: {
                delLink: 'Livraison standard gratuite',
                gauranteeLink: 'Garantie de 2 ans incluse',
                cartSubmit: 'Ajouter au panier',
                more: 'Plus d’infos'
            },
            de: {
                delLink: 'Kostenloser Standardversand',
                gauranteeLink: 'Einschließlich mind. 2 Jahre Garantie',
                cartSubmit: 'In den Warenkorb',
                more: 'Weitere Informationen'
            }
        },

        /**
         * Sort the filters in the left hand side
         * category->price->sensor->connectivity->features->framerate
         */
        sortFilters: function() {

            var filters = {};
            var $container = $('.sub-nav--items');

            // Add each filter to an object, using the title as the key
            $('.product-filter').each(function() {

                var $self = $(this),
                    title = $.trim( $self.find('h3').text() ).slice(0,-5);

                filters[title] = $self;

            });

            // Move filters to bottom of container in order...

            switch(LANG) {

                case 'en':

                    if(filters['Price Range']) {
                        filters['Price Range'].appendTo($container);
                    }
                    if(filters['Sensor Size']) {
                        filters['Sensor Size'].appendTo($container);
                    }
                    if(filters.Connectivity) {
                        filters.Connectivity.appendTo($container);
                    }
                    if(filters.Features) {
                        filters.Features.appendTo($container);
                    }
                    if(filters['Frame Rate']) {
                        filters['Frame Rate'].appendTo($container);
                    }

                break;

                case 'de':

                    if(filters.PreisspanneLö) {
                        filters.PreisspanneLö.appendTo($container);
                    }
                    if(filters.SensorgrößeLö) {
                        filters.SensorgrößeLö.appendTo($container);
                    }
                    if(filters.KonnektivitätLö) {
                        filters.KonnektivitätLö.appendTo($container);
                    }
                    if(filters.FunktionenLö) {
                        filters.FunktionenLö.appendTo($container);
                    }
                    if(filters.BildrateLö) {
                        filters.BildrateLö.appendTo($container);
                    }

                break;

                case 'fr':
                
                    if(filters['Gamme de prixEf']) {
                        filters['Gamme de prixEf'].appendTo($container);
                    }
                    if(filters['Taille du capteurEf']) {
                        filters['Taille du capteurEf'].appendTo($container);
                    }
                    if(filters.ConnectivitéEf) {
                        filters.ConnectivitéEf.appendTo($container);
                    }
                    if(filters.FonctionnalitésEf) {
                        filters.FonctionnalitésEf.appendTo($container);
                    }
                    if(filters["Fréquence d'imageEf"]) {
                        filters["Fréquence d'imageEf"].appendTo($container);
                    }
                    if(filters["VidéoEf"]) {
                        filters["VidéoEf"].appendTo($container);
                    }


                break;

            }

        },

        /**
         * Process each product in the listing, this rearranges the layout and 
         * adds extra features
         * @param {string} view - The current view [grid|list] which we are processing
         * @param {boolean} isGrid - Has grid view been specified by the user?
         */
        processProducts: function(view, isGrid) {

            // Loop through the products

            $('.product-tile, .product-tile-list-view').each(function() {

                var $self = $(this);

                // Start gathering all the data we will need

                var productData = {
                        url: $self.find('.product-tile-header--anchor, .product-tile-list-header--anchor').attr('href'),
                        title: $self.find('.product-tile-header--anchor, .product-tile-list-header--anchor').text(),
                        image: {
                            front: 'https:' + $self.find('img').attr('data-zoom-image').split(',')[0].slice(0,-4),
                            back: ''
                        },
                        price: $.trim($self.find('.price-now').text()),
                        sku: $self.find('.add-to-compare').data('product-id'),
                        desc: '',
                    };

                // Get a reference to the product from our main database

                var fromDB = AWA.data[LANG][productData.title];

                if(fromDB !== undefined) {

                    // Get what we need from the database

                    switch(LANG) {

                        case 'en':

                        productData.desc =
                            'Approx ' + fromDB.megapixels + ' Megapixels<br />' +
                            'Lens mount ' + fromDB.lens + '<br />' +
                            'ISO Sensitivity ' + fromDB.iso + '<br />' +
                            'Speed ' + fromDB.speed;

                        break;

                        case 'fr':

                        productData.desc =
                            'Environ ' + fromDB.megapixels + ' millions de pixels<br />' +
                            'Monture d’objectif ' + fromDB.lens + '<br />' +
                            'Sensibilité ISO ' + fromDB.iso + '<br />' +
                            'Vitesse d’obturateur ' + fromDB.speed;
                            
                        break;

                        case 'de':

                        productData.desc =
                            'Ungefähr ' + fromDB.megapixels + ' Megapixeln<br />' +
                            'Objetivfassung ' + fromDB.lens + '<br />' +
                            'ISO-Empfindlichkeit ' + fromDB.iso + '<br />' +
                            'Verschlusszeit ' + fromDB.speed;

                        break;

                    }

                    productData.image.back = fromDB.img.slice(0,-3);

                } else {

                    // Not in the database
                    AWA.log(productData.title + ' - Not found in database');

                }

                // Produce the HTML

                if(isGrid) {

                    // user wants a grid view so just modify the current DOM
                    AWA.modifyGridItem(productData, $self);

                } else {

                    if(view === 'grid') {

                        // view is currently grid so we have to enforce a list view
                        AWA.createListItemFromGridItem(productData, $self);

                    } else {

                        // just modify the list view
                        AWA.modifyListItem(productData, $self);

                    }

                }

            });

        },

        /**
         * Modifies a grid view item to include our new stuff
         * @param {object} productData - The data we need for this product
         * @param {object} $elem - jQuery object representing the element we are changing
         */
        modifyGridItem: function(productData, $elem) {

            // Image with reverse image to be used by js
            $elem.find('.catalog-image--img-container').html(
                '<img src="' + productData.image.front + '600" class="awa-image-large awa-front-image" alt="">'+
                '<img src="' + productData.image.back + '600" class="awa-image-large awa-reverse-image" alt="">'+
                '<img src="' + productData.image.front + '170" class="awa-image-small awa-front-image" alt="">'+
                '<img src="' + productData.image.back + '170" class="awa-image-small awa-reverse-image" alt="">'
            );

            // Add description
            $elem.find('.product-tile-desc--para a')
                .html(productData.desc + '<br /><br /><u>'+AWA.copy[LANG].more+'</u>');

            // Replace the price with the extras box
            $elem.find('.pricing').replaceWith(
                '<div class="awa-grid-extras">\
                    '/* Why buy links */+'\
                    <ul>\
                        <li><a href="/why-buy-from-us/">'+AWA.copy[LANG].delLink+' &gt;</a></li>\
                        <li><a href="/warranty/">'+AWA.copy[LANG].gauranteeLink+' &gt;</a></li>\
                    </ul>\
                    '/* Price */+'\
                    <p class="awa-grid-price">' + productData.price + '</p>' +
                    AWA.createBasketForm(productData) +
                '</div>');

        },

        /**
         * Modifies a list view item to include our new stuff
         * @param {object} productData - The data we need for this product
         * @param {object} $elem - jQuery object representing the element we are changing
         */
        modifyListItem: function(productData, $elem) {

            // Image with reverse image to be used by js
            $elem.find('.catalog-image--img-container').html(
                '<img src="' + productData.image.front + '600" class="awa-image-large awa-front-image" alt="">'+
                '<img src="' + productData.image.back + '600" class="awa-image-large awa-reverse-image" alt="">'+
                '<img src="' + productData.image.front + '170" class="awa-image-small awa-front-image" alt="">'+
                '<img src="' + productData.image.back + '170" class="awa-image-small awa-reverse-image" alt="">'
            );

            // Add description
            $elem.find('.product-tile-description--list')
                .html(productData.desc)
                .after(
                    '<ul class="product-tile-description--list awa-list-more-info">\
                        <a href="' + productData.url + '">'+AWA.copy[LANG].more+'</a>\
                    </ul>');

            // Replace the price with the extras box
            $elem.find('.product-tile-list--core').replaceWith(
                '<div class="awa-list-extras">\
                    '/* Why buy links */+'\
                    <ul>\
                        <li><a href="/why-buy-from-us/">'+AWA.copy[LANG].delLink+' &gt;</a></li>\
                        <li><a href="/warranty/">'+AWA.copy[LANG].gauranteeLink+' &gt;</a></li>\
                    </ul>\
                    '/* Price */+'\
                    <p class="awa-list-price">' + productData.price + '</p>' +
                    AWA.createBasketForm(productData) +
                '</div>');

        },

        /**
         * Modifies a grid view item to look like a list item and include our new stuff
         * @param {object} productData - The data we need for this product
         * @param {object} $elem - jQuery object representing the element we are changing
         */
        createListItemFromGridItem: function(productData, $elem) {

            // Image with reverse image to be used by js
            $elem.find('.catalog-image--img-container').html(
                '<img src="' + productData.image.front + '600" class="awa-image-large awa-front-image" alt="">'+
                '<img src="' + productData.image.back + '600" class="awa-image-large awa-reverse-image" alt="">'+
                '<img src="' + productData.image.front + '170" class="awa-image-small awa-front-image" alt="">'+
                '<img src="' + productData.image.back + '170" class="awa-image-small awa-reverse-image" alt="">'
            );

            // Product description
            $elem.find('.product-tile-list--core')
            .before('<div class="product-tile-list--desc">\
                <h4 class="header-6 product-tile-list--header">\
                <a href="' + productData.url + '" class="product-tile-list-header--anchor no-underline">' + productData.title + '</a></h4>\
                <ul class="product-tile-description--list">' + productData.desc + '</ul>\
                <ul class="product-tile-description--list awa-list-more-info">\
                    <a href="' + productData.url + '">'+AWA.copy[LANG].more+'</a>\
                </ul>\
            </div>')
            // Replace the price with the extras box
            .replaceWith(
                '<div class="awa-list-extras">\
                    '/* Why buy links */+'\
                    <ul>\
                        <li><a href="/why-buy-from-us/">'+AWA.copy[LANG].delLink+' &gt;</a></li>\
                        <li><a href="/warranty/">'+AWA.copy[LANG].gauranteeLink+' &gt;</a></li>\
                    </ul>\
                    '/* Price */+'\
                    <p class="awa-list-price">' + productData.price + '</p>' +
                    AWA.createBasketForm(productData) +
                '</div>');

        },

        /**
         * Makes the appropriate class changes to allow our products to be in list format
         * To do: see if we actually need all this
         */
        setUpListView: function() {

            $('.gallery-product-tile').removeClass('gallery-product-tile');
            $('.product-tile').attr('class', 'product-tile-list-view');

            $('.layout-items-3').removeClass('layout-items-3').addClass('layout-items-1');
            
            $('.layout-items-1 > .row > .col-lg-12').attr('class', '');
            $('.layout-items-1 > .row').removeClass('row');

            $('.product-tile--image-container').addClass('product-tile-list--image-container');
            $('.product-tile--core').attr('class', 'product-tile-list--core');

        },

        /**
         * Show the default view as list, unless grid is specified by user
         * this just highlights the correct button in the listing
         * the actual product listing is modified elsewhere
         */
        defaultToListView: function() {

            if(window.location.search.indexOf('?view=') !== -1 || window.location.search.indexOf('&view=') !== -1) {

                // user has already specified a view
                return;

            } else {

                $('.mom-icon-view-list').parents('.search-options--para').addClass('active');
                $('.mom-icon-view-grid').parents('.search-options--para').removeClass('active');

            }
        },

        /**
         * Outputs the HTML for the basket form
         * @param {object} productData - Our product data
         */
        createBasketForm: function(productData) {

            if(typeof productData === 'object') {

                return '<form id="addToCart" data-qtylimit="5" name="addToCart" action="' + productData.url + '&amp;_DARGS=/block/catalog/product/product-detail/sku-selection.jsp.addToCart" class="form-inline add-to-basket" method="POST">\
                            <input name="_dyncharset" value="utf-8" type="hidden">\
                            <input name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.addItemToOrderErrorURL" value="' + productData.url + '" type="hidden">\
                            <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.addItemToOrderErrorURL" value=" " type="hidden">\
                            <div class="product-sku-selector js-require" data-js-require="app/blocks/productSkuSelector">\
                                <div id="sku-variants" style="display:none">\
                                    <div class="control-group">\
                                    </div>\
                                </div>\
                                <div class="control-group">\
                                    <input style="display: none;" id="sku-selector" name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.catalogRefIds" value="' + productData.sku + '" type="hidden">\
                                    <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.catalogRefIds" value=" " type="hidden">\
                                </div>\
                            </div>\
                            <div class="control-group ">\
                            </div>\
                            <input name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.productId" value="' + productData.sku + '" type="hidden">\
                            <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.productId" value=" " type="hidden">\
                            <div class="control-group awa-hidden">\
                                <label class="control-label product-detail--add--control-label product-detail--label-type-1 label-type-1" for="frm-quantity">Quantity</label>\
                                <div class="controls inline-adjust">\
                                    <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.quantity" value=" " type="hidden">\
                                    <select min="1" id="frm-quantity" max="5" name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.quantity" class="product-detail--add--input">\
                                        <option value="1">1</option>\
                                    </select>\
                                </div>\
                            </div>\
                            <div class="button-block">\
                                <label class="button-wrapper btn btn-success button-gutter-right btn-success--full-width-mobile product-detail--add-to-cart-button "><i class="icon-basket btn-success--icon"></i>\
                                <input id="add-to-basket" title="'+AWA.copy[LANG].cartSubmit+'" data-analytics-method="utag.link" data-js-require="app/analytics" data-analytics-custom-props="{&quot;customProps&quot;:[{&quot;propName&quot;:&quot;product.productInfo.quantity&quot;,&quot;getValueID&quot;:&quot;frm-quantity&quot;},{&quot;propName&quot;:&quot;event.eventInfo.eventAction&quot;,&quot;value&quot;:&quot;addToBasket&quot;}]}" name="/spindrift/momentum/commerce/order/purchase/CartFormHandler.addItemToOrder" value="'+AWA.copy[LANG].cartSubmit+'" class="add-to-basket--submit js-require js-analytics-click " data-analytics="{&quot;product&quot;:[{&quot;productInfo&quot;:{&quot;productID&quot;:&quot;' + productData.sku + '&quot;,&quot;productName&quot;:&quot;' + productData.title + '&quot;,&quot;sku&quot;:&quot;' + productData.sku + '&quot;,&quot;quantity&quot;:&quot;1&quot;},&quot;category&quot;:{&quot;primaryCategory&quot;:&quot;Cameras&quot;},&quot;price&quot;:{&quot;priceWithTax&quot;:&quot; ' + productData.price.replace('£','') + '&quot;,&quot;voucherCode&quot;:&quot;&quot;,&quot;voucherDiscount&quot;:&quot;&quot;}}],&quot;cart&quot;:{&quot;cartID&quot;:&quot;o22372641&quot;},&quot;event&quot;:[{&quot;eventInfo&quot;:{&quot;eventAction&quot;:&quot;captureEvent&quot;}}],&quot;version&quot;:&quot;1.0&quot;}" type="submit">\
                                <input name="_D:/spindrift/momentum/commerce/order/purchase/CartFormHandler.addItemToOrder" value=" " type="hidden"></label>\
                            </div>\
                            <div class="product-detail-qty-ajax-alert-basket js-error-block">\
                              <div class="alert-error">\
                                <p class="alertBox--para"></p>\
                              </div>\
                            </div>\
                            <input name="_DARGS" value="/block/catalog/product/product-detail/sku-selection.jsp.addToCart" type="hidden">\
                        </form>';

            }

            return '';

        },

        /**
         * Flip the image (show reverse)
         * @param {object} e - Event object as passed in by jQuery
         */
        imageFlip: function(e) {

            var $self = $(this);

            if(e.type === 'mouseover') {

                $self.find('.awa-front-image').addClass('-hidden');
                $self.find('.awa-reverse-image').addClass('-active');

            } else {

                $self.find('.awa-front-image').removeClass('-hidden');
                $self.find('.awa-reverse-image').removeClass('-active');

            }

        }

    };

    /**
     * Run the experiment
     */

    // Log it
    AWA.log('AWA 7 - DSLR Sub category');

    // Append CSS
    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Add lang attribute to body

    $('body').addClass('awa-lang-'+LANG);

    // Do stuff

    AWA.sortFilters();

    AWA.defaultToListView();

    if(AWA.vars.currentView === 'grid' && AWA.vars.isGrid === false) {
        // We need to enforce a list view so change some classes
        AWA.setUpListView();
    }

    AWA.processProducts(AWA.vars.currentView, AWA.vars.isGrid);

    $('.catalog-image--img-container').on('mouseover mouseout', AWA.imageFlip);

})(jQuery, 'de'); // vwo_$ || optimizely.$