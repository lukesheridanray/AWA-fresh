// jshint multistr: true
// jshint strict: true


// @param {object} $ - Namespaced jQuery  
// @param {string} LANG - Country code
// @param {integer} VARIATION - Experiment variation: 
//                              1 - cat and listings || 2 - cat only
(function($, LANG, VARIATION) {

    'use strict';

    var AWA = {};

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.log('AWA 5 - Ink Finder');

    // Variables

    AWA.var = {

        copy: {

            en: {

                title: 'Can we help you choose your Ink & Paper?',

                intro: {
                    cat: 'Give us the range and model for your printer and w&acute;ll,\
                        find you the compatible ink & paper for your printer',
                    listings: 'Find ink for my printer'
                },

                button: {
                    cat: 'Find ink for my printer',
                    listings: 'Find my ink now'
                },

                range: 'My printer range',

                model: 'My printer model'

            }

        }

    };

    // Data
    AWA.data = {
        'PIXMA iP series': {
            iP110: '/pixma-ip110-ink-cartridges',
            iP1900: '/pixma-ip1900-ink-cartridges',
            iP2700: '/pixma-ip2700-ink-cartridges',
            iP2702: '/pixma-ip2702-ink-cartridges',
            iP2850: '/pixma-ip2850-ink-cartridges',
            iP3600: '/pixma-ip3600-ink-cartridges',
            iP4600: '/pixma-ip4600-ink-cartridges',
            iP4700: '/pixma-ip4700-ink-cartridges',
            iP4850: '/pixma-ip4850-ink-cartridges',
            iP4950: '/pixma-ip4950-ink-cartridges',
            iP7250: '/pixma-ip7250-ink-cartridges',
            iP8750: '/pixma-ip8750-ink-cartridges',
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA iX series': {
            iX6550: '/pixma-ix6550-ink-cartridges',
            iX6850: '/pixma-ix6850-ink-cartridges',
            iX7000: '/pixma-ix7000-ink-cartridges',
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA MG series': {
/*
MG2100 series   PIXMA MG2150    /pixma-mg2150-ink-cartridges
MG2200 series   PIXMA MG2250    /pixma-mg2250-ink-cartridges
MG2400 series   PIXMA MG2450    /pixma-mg2450-ink-cartridges
MG2500 series   PIXMA MG2550    /pixma-mg2550-ink-cartridges
MG2900 series   PIXMA MG2950    /pixma-mg2950-ink-cartridges
MG3100 series   PIXMA MG3150    /pixma-mg3150-ink-cartridges
MG3200 series   PIXMA MG3250    /pixma-mg3250-ink-cartridges
MG3500 series   PIXMA MG3550    /pixma-mg3550-ink-cartridges
MG3600 series   PIXMA MG3650    /pixma-mg3650-ink-cartridges
MG4100 series   PIXMA MG4150    /pixma-mg4150-ink-cartridges
MG4200 series   PIXMA MG4250    /pixma-mg4250-ink-cartridges
MG5100 series   PIXMA MG5150    /pixma-mg5150-ink-cartridges
MG5200 series   PIXMA MG5250    /pixma-mg5250-ink-cartridges
MG5300 series   PIXMA MG5350    /pixma-mg5350-ink-cartridges
MG5400 series   PIXMA MG5450    /pixma-mg5450-ink-cartridges
MG5500 series   PIXMA MG5550    /pixma-mg5550-ink-cartridges
    MG5650  /pixma-mg5650-ink-cartridges
MG5700 series   PIXMA MG5750    /pixma-mg5750-ink-cartridges
    PIXMA MG5751    /pixma-mg5751-ink-cartridges
    PIXMA MG5752    /pixma-mg5752-ink-cartridges
    PIXMA MG5753    /pixma-mg5753-ink-cartridges
MG6100 series   PIXMA MG6150    /pixma-mg6150-ink-cartridges
MG6200 series   PIXMA MG6250    /pixma-mg6250-ink-cartridges
MG6300 series   PIXMA MG6350    /pixma-mg6350-ink-cartridges
MG6400 series   PIXMA MG6450    /pixma-mg6450-ink-cartridges
MG6600 series   PIXMA MG6650    /pixma-mg6650-ink-cartridges
MG6800 series   PIXMA MG6850    /pixma-mg6850-ink-cartridges
    PIXMA MG6851    /pixma-mg6851-ink-cartridges
    PIXMA MG6852    /pixma-mg6852-ink-cartridges
    PIXMA MG6853    /pixma-mg6853-ink-cartridges
MG7100 series   PIXMA MG7150    /pixma-mg7150-ink-cartridges
MG7500 series   PIXMA MG7550    /pixma-mg7550-ink-cartridges
MG7700 series   PIXMA MG7750    /pixma-mg7750-ink-cartridges
                PIXMA MG7751    /pixma-mg7751-ink-cartridges
                PIXMA MG7752    /pixma-mg7752-ink-cartridges
                PIXMA MG7753    /pixma-mg7753-ink-cartridges
MG8100 series   PIXMA MG8150    /pixma-mg8150-ink-cartridges
MG8200 series   PIXMA MG8250    /pixma-mg8250-ink-cartridges
*/
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA MP series': {
/*
            MP190 /pixma-mp190-ink-cartridges
            MP210    /pixma-mp210-ink-cartridges
            MP220    /pixma-mp220-ink-cartridges
            MP230     /pixma-mp230-ink-cartridges
            MP240 /pixma-mp240-ink-cartridges
            MP250 /pixma-mp250-ink-cartridges
            MP252 /pixma-mp252-ink-cartridges
            MP260 /pixma-mp260-ink-cartridges
            MP270 /pixma-mp270-ink-cartridges
            MP272 /pixma-mp272-ink-cartridges
            MP280     /pixma-mp280-ink-cartridges
            MP282 /pixma-mp282-ink-cartridges
            MP480 /pixma-mp480-ink-cartridges
            MP482 /pixma-mp482-ink-cartridges
            MP490 /pixma-mp490-ink-cartridges
            MP492 /pixma-mp492-ink-cartridges
            MP495     /pixma-mp495-ink-cartridges
            MP499     /pixma-mp499-ink-cartridges
            MP520    /pixma-mp520-ink-cartridges
            MP540 /pixma-mp540-ink-cartridges
            MP550 /pixma-mp550-ink-cartridges
            MP560 /pixma-mp560-ink-cartridges
            MP610    /pixma-mp610-ink-cartridges
            MP620 /pixma-mp620-ink-cartridges
            MP630 /pixma-mp630-ink-cartridges
            MP640 /pixma-mp640-ink-cartridges
            MP980 /pixma-mp980-ink-cartridges
            MP990 /pixma-mp990-ink-cartridges
*/
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA MX series': {
/*
PIXMA MX300 PIXMA MX300 /pixma-mx300-ink-cartridges
MX320 series    PIXMA MX320     /pixma-mx320-ink-cartridges
MX330 series    PIXMA MX330     /pixma-mx330-ink-cartridges
MX340 series    PIXMA MX340     /pixma-mx340-ink-cartridges
MX350 series    PIXMA MX350     /pixma-mx350-ink-cartridges
MX360 series    PIXMA MX360     /pixma-mx360-ink-cartridges
MX370 series    PIXMA MX375 /pixma-mx375-ink-cartridges
MX390 series    PIXMA MX395 /pixma-mx395-ink-cartridges
MX410 series    PIXMA MX410     /pixma-mx410-ink-cartridges
MX420 series    PIXMA MX420     /pixma-mx420-ink-cartridges
MX430 series    PIXMA MX435 /pixma-mx435-ink-cartridges
MX450 series    PIXMA MX455 /pixma-mx455-ink-cartridges
MX470 series    PIXMA MX475 /pixma-mx475-ink-cartridges
MX490 series    PIXMA MX495 /pixma-mx495-ink-cartridges
MX510 series    PIXMA MX515 /pixma-mx515-ink-cartridges
MX520 series    PIXMA MX525 /pixma-mx525-ink-cartridges
MX530 series    PIXMA MX535 /pixma-mx535-ink-cartridges
PIXMA MX700 PIXMA MX700 /pixma-mx700-ink-cartridges
MX710 series    PIXMA MX715 /pixma-mx715-ink-cartridges
MX720 series    PIXMA MX725 /pixma-mx725-ink-cartridges
MX860 series    PIXMA MX860     /pixma-mx860-ink-cartridges
MX870 series    PIXMA MX870     /pixma-mx870-ink-cartridges
MX880 series    PIXMA MX885 /pixma-mx885-ink-cartridges
MX890 series    PIXMA MX895 /pixma-mx895-ink-cartridges
MX920 series    PIXMA MX925 /pixma-mx925-ink-cartridges
*/
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA Pro series': {
            'PRO-1': '/pixma-pro-1-ink-cartridges',
            'PRO-10': '/pixma-pro-10-ink-cartridges',
            'PRO-10S': '/pixma-pro-10s-ink-cartridges',
            'PRO-100': '/pixma-pro-100-ink-cartridges',
            'PRO-100S': '/pixma-pro-100s-ink-cartridges',
            'PRO-9000 Mark II': '/pixma-pro9000-mark-ii-ink-cartridges',
            'PRO-9500 Mark II': '/pixma-pro9500-mark-ii-ink-cartridges',
            'Other': '/ink-toner/f/3349056800/'
        },
        'PIXMA other': {
            Other: '/ink-toner/f/3349056800/'
        },
        'MAXIFY MB series': {
            MB2050: '/maxify-mb2050-ink-cartridges',
            MB2350: '/maxify-mb2350-ink-cartridges',
            MB5050: '/maxify-mb5050-ink-cartridges',
            MB5350: '/maxify-mb5350-ink-cartridges',
            Other: '/ink-toner/f/3036661443/'
        },
        'MAXIFY iB series': {
            iB4050: '/maxify-ib4050-ink-cartridges',
            Other: '/ink-toner/f/3036661443/'
        },
        'MAXIFY other': {
            Other: '/ink-toner/f/3036661443/'
        },
        'imagePROGRAF': {
            'PRO-1000': '/imageprograf-pro-1000-ink-cartridges',
            Other: '/ink-toner/'
        },
        'Other': {
            Other: '/ink-toner/'
        }
    };

    // Functions

    AWA.func = {};

    // Function to output the form on the listings page
    AWA.func.listingsForm = function() {
        return '';
    };

    // Function to output the form on the category page
    AWA.func.categoryForm = function() {

        return '\
<div class="awa-ink-finder -cat-form">\
    <h2 class="header-9">'+AWA.var.copy[LANG].title+'</h2>\
    <p>'+AWA.var.copy[LANG].intro.cat+'</p>\
    <form>\
        <select class="awa-ink-finder-range">\
            <option value="'+AWA.var.copy[LANG].range+'">'+AWA.var.copy[LANG].range+'</option>\
            '+AWA.func.getOptions(AWA.data)+'\
        </select>\
        <select class="awa-ink-finder-model">\
            <option value="'+AWA.var.copy[LANG].model+'">'+AWA.var.copy[LANG].model+'</option>\
        </select>\
        <input type="submit" class="awa-ink-finder-submit" value="'+AWA.var.copy[LANG].button.cat+'">\
    </form>\
    <div class="awa-ink-link">\
        <p>Or browse all inks:</p>\
        <a href="/search/s/priceDesc/f/3010492700/" class="catagory-stamp-img--anchor">\
            <img src="//i1.adis.ws/i/canon/ink&amp;paper_all_nav_image.png?w=95" pagespeed_url_hash="1376854407" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">\
            All Ink, Toner &amp; Paper\
        </a>\
    </div>\
</div>\
 ';

    };

    // Function to find the Ink URL and direct the user
    AWA.func.findInk = function() {

        var range, model;

        $('.awa-ink-finder-submit').addClass('-loading');

        range = AWA.data[ AWA.var.rangeSelect.val() ];

        if(range) {

            model = range[ AWA.var.modelSelect.val() ];

            if(model) {
                alert('go to ink page: ' + model);
                //document.location = model;
                return false;
            }

        }

        $('.awa-ink-finder-submit').removeClass('-loading');

        AWA.log('Printer not found');

        // return false rather than e.preventDefault because Canon code has 
        // delegated a handler also
        return false;

    };

    // Function to update the models in the model dropdown
    AWA.func.updateModels = function() {

        var models = AWA.data[ AWA.var.rangeSelect.val() ];

        AWA.var.modelSelect.html( AWA.func.getOptions(models) );

        // return false rather than e.preventDefault because Canon code has 
        // delegated a handler also
        return false;

    };

    // Function to get the HTML for a dropdowns options
    // @param {object} opts - Object containing the options as keys
    // @return {string} HTML for the options elements
    AWA.func.getOptions = function(opts) {

        var output = '';

        $.each(opts, function(index, val) {
            output += '<option value="'+index+'">'+index+'</option>';
        });

        return output;

    };

    // CSS

    AWA.css = ' \
.awa-ink-finder h2 {\
    text-align: left;\
}\
.awa-ink-finder h2 + p {\
    text-align: left;\
}\
.awa-ink-finder form,\
.awa-ink-finder h2,\
.awa-ink-finder h2 + p {\
    width: 70%;\
    float: left;\
}\
.awa-ink-link {\
    float: left;\
    width: 20%;\
}\
.awa-ink-finder select,\
.awa-ink-finder input {\
    width: 33%;\
}\
 ';

    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Main experiment code

    // Add form to category
    $('.gallery-category-stamp .layout-primary-header .header-9')
        .before( AWA.func.categoryForm() );

    if(VARIATION === 1) {
        // Add form to listings if included in variation
        $('.search-options').before( AWA.func.listingsForm() );
    }

    // Cache jQuery objects
    AWA.var.rangeSelect = $('.awa-ink-finder-range');
    AWA.var.modelSelect = $('.awa-ink-finder-model');

    // Add event listeners

    $('.awa-ink-finder form').on('submit', AWA.func.findInk);

    AWA.var.rangeSelect.on('change', AWA.func.updateModels);

})(jQuery, 'en', 1);