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
                    cat: 'Give us the range and model for your printer and we\'ll, \
                        find you the compatible ink & paper for your printer.',
                    listings: 'Find ink for my printer'
                },

                button: {
                    cat: 'Find ink for my printer',
                    listings: 'Find my ink now &raquo;'
                },

                range: 'My printer range',

                model: 'My printer model'

            }

        }

    };

    // Data
    AWA.data = {
        'PIXMA iP series': {
            iP100: '/pixma-ip100-ink-cartridges',
            iP110: '/pixma-ip110-ink-cartridges',
            iP1200: '/pixma-ip1200-ink-cartridges',
            iP1300: '/pixma-ip1300-ink-cartridges',
            iP1600: '/pixma-ip1600-ink-cartridges',
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
            MG2150: '/pixma-mg2150-ink-cartridges',
            MG2250: '/pixma-mg2250-ink-cartridges',
            MG2450: '/pixma-mg2450-ink-cartridges',
            MG2550: '/pixma-mg2550-ink-cartridges',
            MG2950: '/pixma-mg2950-ink-cartridges',
            MG3150: '/pixma-mg3150-ink-cartridges',
            MG3250: '/pixma-mg3250-ink-cartridges',
            MG3550: '/pixma-mg3550-ink-cartridges',
            MG3650: '/pixma-mg3650-ink-cartridges',
            MG4150: '/pixma-mg4150-ink-cartridges',
            MG4250: '/pixma-mg4250-ink-cartridges',
            MG5150: '/pixma-mg5150-ink-cartridges',
            MG5250: '/pixma-mg5250-ink-cartridges',
            MG5350: '/pixma-mg5350-ink-cartridges',
            MG5450: '/pixma-mg5450-ink-cartridges',
            MG5550: '/pixma-mg5550-ink-cartridges',
            MG5650: '/pixma-mg5650-ink-cartridges',
            MG5750: '/pixma-mg5750-ink-cartridges',
            MG5751: '/pixma-mg5751-ink-cartridges',
            MG5752: '/pixma-mg5752-ink-cartridges',
            MG5753: '/pixma-mg5753-ink-cartridges',
            MG6150: '/pixma-mg6150-ink-cartridges',
            MG6250: '/pixma-mg6250-ink-cartridges',
            MG6350: '/pixma-mg6350-ink-cartridges',
            MG6450: '/pixma-mg6450-ink-cartridges',
            MG6650: '/pixma-mg6650-ink-cartridges',
            MG6850: '/pixma-mg6850-ink-cartridges',
            MG6851: '/pixma-mg6851-ink-cartridges',
            MG6852: '/pixma-mg6852-ink-cartridges',
            MG6853: '/pixma-mg6853-ink-cartridges',
            MG7150: '/pixma-mg7150-ink-cartridges',
            MG7550: '/pixma-mg7550-ink-cartridges',
            MG7750: '/pixma-mg7750-ink-cartridges',
            MG7751: '/pixma-mg7751-ink-cartridges',
            MG7752: '/pixma-mg7752-ink-cartridges',
            MG7753: '/pixma-mg7753-ink-cartridges',
            MG8150: '/pixma-mg8150-ink-cartridges',
            MG8250: '/pixma-mg8250-ink-cartridges',
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA MP series': {
            MP190: '/pixma-mp190-ink-cartridges',
            MP210: '/pixma-mp210-ink-cartridges',
            MP220: '/pixma-mp220-ink-cartridges',
            MP230: '/pixma-mp230-ink-cartridges',
            MP240: '/pixma-mp240-ink-cartridges',
            MP250: '/pixma-mp250-ink-cartridges',
            MP252: '/pixma-mp252-ink-cartridges',
            MP260: '/pixma-mp260-ink-cartridges',
            MP270: '/pixma-mp270-ink-cartridges',
            MP272: '/pixma-mp272-ink-cartridges',
            MP280: '/pixma-mp280-ink-cartridges',
            MP282: '/pixma-mp282-ink-cartridges',
            MP480: '/pixma-mp480-ink-cartridges',
            MP482: '/pixma-mp482-ink-cartridges',
            MP490: '/pixma-mp490-ink-cartridges',
            MP492: '/pixma-mp492-ink-cartridges',
            MP495: '/pixma-mp495-ink-cartridges',
            MP499: '/pixma-mp499-ink-cartridges',
            MP520: '/pixma-mp520-ink-cartridges',
            MP540: '/pixma-mp540-ink-cartridges',
            MP550: '/pixma-mp550-ink-cartridges',
            MP560: '/pixma-mp560-ink-cartridges',
            MP610: '/pixma-mp610-ink-cartridges',
            MP620: '/pixma-mp620-ink-cartridges',
            MP630: '/pixma-mp630-ink-cartridges',
            MP640: '/pixma-mp640-ink-cartridges',
            MP980: '/pixma-mp980-ink-cartridges',
            MP990: '/pixma-mp990-ink-cartridges',
            Other: '/ink-toner/f/3349056800/'
        },
        'PIXMA MX series': {
            MX300: '/pixma-mx300-ink-cartridges',
            MX320: '/pixma-mx320-ink-cartridges',
            MX330: '/pixma-mx330-ink-cartridges',
            MX340: '/pixma-mx340-ink-cartridges',
            MX350: '/pixma-mx350-ink-cartridges',
            MX360: '/pixma-mx360-ink-cartridges',
            MX375: '/pixma-mx375-ink-cartridges',
            MX395: '/pixma-mx395-ink-cartridges',
            MX410: '/pixma-mx410-ink-cartridges',
            MX420: '/pixma-mx420-ink-cartridges',
            MX435: '/pixma-mx435-ink-cartridges',
            MX455: '/pixma-mx455-ink-cartridges',
            MX475: '/pixma-mx475-ink-cartridges',
            MX495: '/pixma-mx495-ink-cartridges',
            MX515: '/pixma-mx515-ink-cartridges',
            MX525: '/pixma-mx525-ink-cartridges',
            MX535: '/pixma-mx535-ink-cartridges',
            MX700: '/pixma-mx700-ink-cartridges',
            MX715: '/pixma-mx715-ink-cartridges',
            MX725: '/pixma-mx725-ink-cartridges',
            MX860: '/pixma-mx860-ink-cartridges',
            MX870: '/pixma-mx870-ink-cartridges',
            MX885: '/pixma-mx885-ink-cartridges',
            MX895: '/pixma-mx895-ink-cartridges',
            MX925: '/pixma-mx925-ink-cartridges',
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
            MB2150: '/maxify-mb2150-ink-cartridges',
            MB2155: '/maxify-mb2155-ink-cartridges',
            MB2350: '/maxify-mb2350-ink-cartridges',
            MB2750: '/maxify-mb2750-ink-cartridges',
            MB2755: '/maxify-mb2755-ink-cartridges',
            MB5050: '/maxify-mb5050-ink-cartridges',
            MB5150: '/maxify-mb5150-ink-cartridges',
            MB5155: '/maxify-mb5155-ink-cartridges',
            MB5350: '/maxify-mb5350-ink-cartridges',
            MB5450: '/maxify-mb5450-ink-cartridges',
            MB5455: '/maxify-mb5455-ink-cartridges',
            Other: '/ink-toner/f/3036661443/'
        },
        'MAXIFY iB series': {
            iB4050: '/maxify-ib4050-ink-cartridges',
            iB4150: '/maxify-ib4150-ink-cartridges',
            Other: '/ink-toner/f/3036661443/'
        },
        'MAXIFY other': {
            Other: '/ink-toner/f/3036661443/'
        },
        'imagePROGRAF': {
            'PRO-1000': '/imageprograf-pro-1000-ink-cartridges',
            Other: '/ink-toner/'
        },
        'i-SENSYS LB series': {
            LBP251dw: '/toner-cartridge-719/',
            LBP252dw: '/toner-cartridge-719/',
            LBP253x: '/toner-cartridge-719/',
            LBP351x: '/toner-cartridge-crg039',
            LBP352x: '/toner-cartridge-crg039',
            LBP710Cx: '/toner-cartridge-crg040',
            LBP712Cx: '/toner-cartridge-crg040',
            LBP5000: '/toner-cartridge-707/',
            LBP5050: '/toner-cartridge-716/',
            LBP5050n: '/toner-cartridge-716/',
            LBP5100: '/toner-cartridge-707/',
            LBP5300: '/toner-cartridge-711/',
            LBP5360: '/toner-cartridge-711/',
            LBP6300dn: '/toner-cartridge-719/',
            LBP6310dn: '/toner-cartridge-719/',
            LBP6650dn: '/toner-cartridge-719/',
            LBP6670dn: '/toner-cartridge-719/',
            LBP6680x: '/toner-cartridge-719/',
            LBP6750dn: '/toner-cartridge-724/',
            LBP6780x: '/toner-cartridge-724/',
            LBP7010C: '/toner-cartridge-729/',
            LBP7018C: '/toner-cartridge-729/',
            LBP7100Cn: '/toner-cartridge-731/',
            LBP7110Cw: '/toner-cartridge-731/',
            LBP7200Cdn: '/toner-cartridge-718/',
            LBP7210Cdn: '/toner-cartridge-718/',
            LBP7660Cdn: '/toner-cartridge-718/',
            LBP7680Cx: '/toner-cartridge-718/',
            LBP7750Cdn: '/toner-cartridge-723/',
            LBP7780Cx: '/toner-cartridge-732/',
            Other: '/ink-toner/f/2269284995/'
        },
        'i-SENSYS MF series': {
            MF411dw: '/toner-cartridge-719/',
            MF416dw: '/toner-cartridge-719/',
            MF418x: '/toner-cartridge-719/',
            MF419x: '/toner-cartridge-719/',
            MF512x: '/toner-cartridge-724/',
            MF515x: '/toner-cartridge-724/',
            MF623Cn: '/toner-cartridge-731/',
            MF628Cw: '/toner-cartridge-731/',
            MF724Cdw: '/toner-cartridge-718/',
            MF728Cdw: '/toner-cartridge-718/',
            MF729Cx: '/toner-cartridge-718/',
            MF5840dn: '/toner-cartridge-719/',
            MF5880dn: '/toner-cartridge-719/',
            MF5940dn: '/toner-cartridge-719/',
            MF5980dw: '/toner-cartridge-719/',
            MF6140dn: '/toner-cartridge-719/',
            MF6180dw: '/toner-cartridge-719/',
            MF8030Cn: '/toner-cartridge-716/',
            MF8040Cn: '/toner-cartridge-716/',
            MF8050Cn: '/toner-cartridge-716/',
            MF8080Cw: '/toner-cartridge-716/',
            MF8230Cn: '/toner-cartridge-731/',
            MF8280Cw: '/toner-cartridge-731/',
            MF8330Cdn: '/toner-cartridge-718/',
            MF8340Cdn: '/toner-cartridge-718/',
            MF8350Cdn: '/toner-cartridge-718/',
            MF8360Cdn: '/toner-cartridge-718/',
            MF8380Cdw: '/toner-cartridge-718/',
            MF8540Cdn: '/toner-cartridge-718/',
            MF8550Cdn: '/toner-cartridge-718/',
            MF8580Cdw: '/toner-cartridge-718/',
            MF9130: '/toner-cartridge-711/',
            MF9170: '/toner-cartridge-711/',
            MF9220Cdn: '/toner-cartridge-711/',
            MF9280Cdn: '/toner-cartridge-711/',
            Other: '/ink-toner/f/2269284995/'
        },
        'i-SENSYS other': {
            Other: '/ink-toner/f/2269284995/'
        },
        'Other': {
            Other: '/ink-toner/'
        }
    };

    // Functions

    AWA.func = {};

    // Function to output the form on the listings page
    AWA.func.listingsForm = function() {

        return '\
<div class="awa-ink-finder -listings-form">\
    <h2 class="header-9">'+AWA.var.copy[LANG].title+'</h2>\
    <div class="awa-ink-finder-listings-wrap">\
        <p>'+AWA.var.copy[LANG].intro.listings+'</p>\
        <form>\
            <select class="awa-ink-finder-range">\
                <option value="0">'+AWA.var.copy[LANG].range+'</option>\
                '+AWA.func.getOptions(AWA.data)+'\
            </select>\
            <select class="awa-ink-finder-model">\
                <option value="0">'+AWA.var.copy[LANG].model+'</option>\
            </select>\
            <input type="submit" class="awa-ink-finder-submit" value="'+AWA.var.copy[LANG].button.listings+'">\
        </form>\
    </div>\
</div>\
 ';

    };

    // Function to output the form on the category page
    AWA.func.categoryForm = function() {

        return '\
<div class="awa-ink-finder -cat-form">\
    <h2 class="header-9">'+AWA.var.copy[LANG].title+'</h2>\
    <p>'+AWA.var.copy[LANG].intro.cat+'</p>\
    <form>\
        <select class="awa-ink-finder-range">\
            <option value="0">'+AWA.var.copy[LANG].range+'</option>\
            '+AWA.func.getOptions(AWA.data)+'\
        </select>\
        <select class="awa-ink-finder-model">\
            <option value="0">'+AWA.var.copy[LANG].model+'</option>\
        </select>\
        <input type="submit" class="awa-ink-finder-submit" value="'+AWA.var.copy[LANG].button.cat+'">\
    </form>\
    <div class="awa-ink-link">\
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
                document.location = model;
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

        if(models) {

            AWA.var.modelSelect.html(
                '<option value="0">'+AWA.var.copy[LANG].model+'</option>' + 
                AWA.func.getOptions(models)
            );

            // select the first model so the user can see this dropdown is now populated
            AWA.var.modelSelect.find('option:eq(1)').prop('selected', 'selected');

        } else {

            AWA.var.modelSelect.html('<option value="0">'+AWA.var.copy[LANG].model+'</option>');

        }

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
.awa-ink-finder + h2,\
.gallery-category-stamp .layout-items-container {\
    display: none;\
}\
.awa-ink-finder {\
    position: relative;\
    overflow: auto;\
    padding-bottom: 2em;\
}\
.awa-ink-finder h2 {\
    color: #c00;\
    text-align: left;\
}\
.awa-ink-finder.-listings-form h2 {\
    font-size: 1.7em;\
    padding-bottom: 10px;\
}\
.awa-ink-finder h2 + p, \
.awa-ink-finder .awa-ink-finder-listings-wrap p {\
    text-align: left;\
    color: #444;\
}\
.awa-ink-finder form,\
.awa-ink-finder h2,\
.awa-ink-finder h2 + p,\
.awa-ink-finder .awa-ink-finder-listings-wrap p {\
    width: 75%;\
    float: left;\
}\
.awa-ink-finder.-listings-form h2 {\
    width: 100%;\
    float: none;\
}\
.awa-ink-finder.-listings-form .awa-ink-finder-listings-wrap p {\
    width: 25%;\
    float: left;\
    font-size: 1.2em;\
    line-height: 40px;\
    text-align: center;\
    margin: 0;\
}\
.awa-ink-finder.-listings-form form {\
    width: 75%;\
    float: left;\
}\
.awa-ink-finder select,\
.awa-ink-finder input {\
    width: 31.5%;\
    margin: 0 3.5% 4px 0;\
    font-size: 1.1em;\
    float: left;\
}\
.awa-ink-finder.-listings-form select,\
.awa-ink-finder.-listings-form input {\
    width: 32%;\
    margin: 0 1% 0 0;\
}\
.awa-ink-finder-listings-wrap {\
    border: 1px solid #d9dbdc;\
    overflow: auto;\
    padding: 10px 0;\
}\
.awa-ink-link {\
    position: absolute;\
    top: 2em;\
    right: 0;\
    width: 25%;\
}\
.awa-ink-link p {\
    color: #444;\
    font-size: 1.4em;\
}\
.awa-ink-link img {\
    display: block;\
    margin: 0 auto 10px auto;\
}\
.awa-ink-link a {\
    text-align: center;\
    font-size: 1.1em;\
    font-weight: bold;\
    color: #333;\
    display: block;\
    width: 100%;\
}\
.awa-ink-finder .awa-ink-finder-submit {\
    color: #fff;\
    font-weight: bold;\
    background: #077;\
    border: 0;\
    width: auto;\
    padding-left: 40px;\
    padding-right: 40px;\
    margin-right: 0;\
}\
.awa-ink-finder.-listings-form .awa-ink-finder-submit {\
    width: 32%;\
    margin: 0 1% 0 0;\
    padding-left: 0;\
    padding-right: 0;\
}\
.awa-ink-finder-submit.-loading {\
    background-image: url("//cdn.optimizely.com/img/2201792135/b9518b7121c3431c96b70cf84d35d96c.gif");\
    background-position: 5px 5px;\
    background-repeat: no-repeat;\
}\
.awa-ink-finder.-cat-form:after {\
    position: absolute;\
    top: 0;\
    right: 22.5%;\
    content: "";\
    height: 90%;\
    width: 1px;\
    background: #D0D3D4;\
}\
@media screen and (max-width: 1199px) {\
    .awa-ink-finder.-listings-form .awa-ink-finder-listings-wrap p {\
        display: none;\
    }\
    .awa-ink-finder.-listings-form form {\
        width: 100%;\
        float: none;\
    }\
    .awa-ink-finder select {\
        width: 31%;\
        margin: 0 3% 4px 0;\
    }\
    .awa-ink-finder.-listings-form select,\
    .awa-ink-finder.-listings-form input {\
        margin: 0 0 0 1%;\
        width: 32%;\
    }\
    .awa-ink-finder .awa-ink-finder-submit {\
        width: 31%;\
        margin: 0 0 4px 0;\
        padding-left: 0;\
        padding-right: 0;\
    }\
    .awa-ink-finder.-listings-form .awa-ink-finder-submit {\
        width: 32%;\
        margin: 0 0 0 1%;\
    }\
    .awa-ink-finder.-cat-form:after {\
        right: 22.7%;\
    }\
}\
@media screen and (max-width: 991px) {\
    .awa-ink-finder select,\
    .awa-ink-finder input {\
        font-size: 1em;\
    }\
    .awa-ink-finder h2 {\
        font-size: 1.7em;\
    }\
    .awa-ink-finder.-listings-form {\
        clear: both;\
    }\
    .awa-ink-finder.-listings-form h2 {\
        padding: 10px 0;\
    }\
    .awa-ink-finder.-cat-form:after {\
        display: none;\
    }\
}\
@media screen and (max-width: 750px) {\
    .awa-ink-link {\
        display: none;\
    }\
    .awa-ink-finder form,\
    .awa-ink-finder h2,\
    .awa-ink-finder h2 + p {\
        width: 100%;\
        float: none;\
    }\
    .awa-ink-finder {\
        width: 95%;\
        margin: 0 auto;\
        padding-bottom: 0;\
    }\
    .awa-ink-finder.-listings-form {\
        width: 100%;\
        padding-bottom: 3em;\
    }\
}\
@media screen and (max-width: 540px) {\
    .awa-ink-finder select,\
    .awa-ink-finder .awa-ink-finder-submit {\
        width: 100%;\
        margin-right: 0;\
    }\
    .awa-ink-finder-listings-wrap {\
        border: 0;\
        padding: 0;\
    }\
    .awa-ink-finder.-listings-form select,\
    .awa-ink-finder.-listings-form input,\
    .awa-ink-finder.-listings-form .awa-ink-finder-submit {\
        width: 100%;\
        margin: 0 0 4px 0;\
    }\
}\
 ';

    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Main experiment code

    // Add form to category
    $('.gallery-category-stamp .layout-primary-header .header-9')
        .before( AWA.func.categoryForm() );

    if(VARIATION === 1) {
        // Add form to listings if included in variation
        $('.search-options:eq(0)').before( AWA.func.listingsForm() );
    }

    // Cache jQuery objects
    AWA.var.rangeSelect = $('.awa-ink-finder-range');
    AWA.var.modelSelect = $('.awa-ink-finder-model');

    // Add event listeners

    $('.awa-ink-finder form').on('submit', AWA.func.findInk);

    AWA.var.rangeSelect.on('change', AWA.func.updateModels);

})(jQuery, 'en', 1);