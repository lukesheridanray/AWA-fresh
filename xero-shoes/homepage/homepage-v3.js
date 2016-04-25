//* NOTE - Add href to Umara Z-Trail More Information Link

//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
//
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('Homepage - v3');

    /*
    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    exp.condition = $('.unique-selector');
    */
    //exp.condition = $("#main_internal_full_box");

    // Check for a condition and return false if it has not been met
    // if (exp.condition && !exp.condition.length) {
    //     exp.log('Gift Guide 2 failed a condition');
    //     return false;
    // }
    // Commenting out conditions since IE is having a hard time with it

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
        newTopSection:  "<div id='AWA-new-top' class='col-sm-12 col-md-12 col-lg-12'>\
                            <h1 id='AWA-title'>\"Everything you love about being barefoot\"</h1>\
                            <h2>plus just the right amount of protection and comfort</h2>\
                        </div>",
        newMiddleSection:   "<div id='AWA-new-middle' class='row'>\
                                <div id='AWA-hero' class='col-sm-6 col-md-6 col-lg-6'>\
                                    <div id='AWA-video'>\
                                        <img src='http://xeroshoes.com/wp-content/themes/commercegurus/images/home-features/xero-right-for-you.jpg'>\
                                    </div>\
                                    <p>Over 100,072 people in 94 countries enjoy Xero Shoes for walking, hiking, yoga, working out, paddling, biking... even running 100-mile ultramarathons.</p>\
                                </div>\
                                <div id='AWA-new-middle-right' class='col-sm-6 col-md-6 col-lg-6'>\
                                    <p id='AWA-comfort'>\"The most comfortable, versatile sandals you'll ever own...\"</p>\
                                    <a id='AWA-see-all' href='http://xeroshoes.com/shop/'>See all Shoes</a>\
                                    <p id='AWA-small'>The only shoes with a 5,000 mile warranty</p>\
                                </div>\
                            </div>",
        newBottomSection:   "<div id='AWA-new-bottom' class='row'>\
                                <div id='AWA-new-bottom-left' class='col-sm-6 col-md-6 col-lg-6'>\
                                    <img id='AWA-umara-shoe' src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/05df47dbc35bf85c441c3e158df99f87_ztrail_copy.jpg'>\
                                </div>\
                                <div id='AWA-new-bottom-right' class='col-sm-6 col-md-6 col-lg-6'>\
                                    <h1>ULTIMATE SANDAL 2.0</h1>\
                                    <img id='AWA-umara-text' src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/0616deaf81622547d18f0e69f81e6834_ztrailtext.jpg'>\
                                    <ul>\
                                        <li>More protection. Lighter weight. Extra comfort.</li>\
                                        <li>The new ultra-light sport sandal gives your feet a super “smooth ride” whether you’re tackling mountain trails or strolling through the urban jungle.</li>\
                                        <li>20% lighter than our Amuri Z-Trek, only 5.4 ounces (Men’s 9).</li>\
                                    </ul>\
                                    <a id='AWA-more-information' href='#'>view more information</a>\
                                </div>\
                            </div>",
        shoeSection:    "<div id='AWA-best-sellers' class='row'>\
                            <div class='AWA-shoe col-sm-12 col-md-12 col-lg-12'>\
                                <h1>Current best sellers</h1>\
                            </div>\
                        </div>\
                        <div id='AWA-shoe-section' class='row'>\
                            <div class='AWA-shoe col-sm-3 col-md-3 col-lg-3'>\
                                <h5>Amuri Z-Trek</h5>\
                                <img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/264b1bf35ca907db9992fa5ded2b52c0_ztrek.jpg'>\
                                <ul class='AWA-shoe-ul'>\
                                    <li class='AWA-shoe-bullet'>Barefoot flexibility, greater ground feel</li>\
                                    <li class='AWA-shoe-bullet'>5.5mm FeelTrue<sup>&reg;</sup> sole</li>\
                                </ul>\
                                <div class='AWA-shoe-buttons AWA-sb1'>\
                                    <a class='AWA-shoe-button-link AWA-sbl-left' href='http://xeroshoes.com/shop/feeltrue-products/ztrek-men/'>View <br class='AWA-br'>Men\'s</a>\
                                    <a class='AWA-shoe-button-link AWA-sbl-right' href='http://xeroshoes.com/shop/feeltrue-products/ztrek-women/'>View <br class='AWA-br'>Women\'s</a>\
                                </div>\
                            </div>\
                            <div class='AWA-shoe col-sm-3 col-md-3 col-lg-3'>\
                                <h5>Amuri Venture</h5>\
                                <img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/8daee65cc9fd1c1763508bc7e35086b9_venture.jpg'>\
                                <ul class='AWA-shoe-ul'>\
                                    <li class='AWA-shoe-bullet'>Performance-ready recreation sandals</li>\
                                    <li class='AWA-shoe-bullet'>5.5mm FeelTrue<sup>&reg;</sup> sole</li>\
                                </ul>\
                                <div class='AWA-shoe-buttons AWA-sb2'>\
                                    <a class='AWA-shoe-button-link AWA-sbl-left' href='http://xeroshoes.com/shop/feeltrue-products/sensori-venture-mens-barefoot-sandals/'>View <br class='AWA-br'>Men\'s</a>\
                                    <a class='AWA-shoe-button-link AWA-sbl-right' href='http://xeroshoes.com/shop/feeltrue-products/sensori-venture-womens-barefoot-sandals/'>View <br class='AWA-br'>Women\'s</a>\
                                </div>\
                            </div>\
                            <div class='AWA-shoe col-sm-3 col-md-3 col-lg-3'>\
                                <h5>Amuri Cloud</h5>\
                                <img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/e99018b30e7c9f3ab53fb49ffcafa3ee_cloud.jpg'>\
                                <ul class='AWA-shoe-ul'>\
                                    <li class='AWA-shoe-bullet'>Super light weight with touch of extra comfort</li>\
                                    <li class='AWA-shoe-bullet'>5.5mm FeelTrue<sup>&reg;</sup> sole with 3mm BareFoam&trade; forefoot</li>\
                                </ul>\
                                <div class='AWA-shoe-buttons AWA-sb3'>\
                                    <a class='AWA-shoe-button-link AWA-sbl-left' href='http://xeroshoes.com/shop/feeltrue-products/amuri-cloud-mens-barefoot-sandal/'>View <br class='AWA-br'>Men\'s</a>\
                                    <a class='AWA-shoe-button-link AWA-sbl-right' href='http://xeroshoes.com/shop/amuri/amuri-cloud-womens-barefoot-sandal/'>View <br class='AWA-br'>Women\'s</a>\
                                </div>\
                            </div>\
                            <div class='AWA-shoe col-sm-3 col-md-3 col-lg-3'>\
                                <h5 id='AWA-diy-title'>DIY Xero Shoes Kits</h5>\
                                <img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/e03b6d535f7fd4048f2686ca247552ed_all-laces-2rows-withsoles-1124x1124_(1).png'>\
                                <p>Make your own barefoot sandals in just minutes!</p>\
                                <div class='AWA-shoe-buttons AWA-sb4'>\
                                    <a class='AWA-shoe-button-link' href='http://xeroshoes.com/shop/product-category/diy-kits/'>View DIY Kits</a>\
                                </div>\
                            </div>\
                        </div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
        #AWA-new-top {\
            text-align: center;\
        }\
        #AWA-title {\
            line-height: 120%;\
            margin-bottom: 20px;\
            margin-top: 5px;\
            font-family: \"Open Sans Condensed\",Arial, Helvetica, sans-serif;\
            font-weight: 700;\
            margin-bottom: 4px;\
        }\
        #AWA-new-middle {\
            margin-top: 40px;\
        }\
        #AWA-hero img {\
            display: block;\
            margin: 0 auto;\
        }\
        #AWA-comfort {\
            font-weight: bold;\
            text-align: center;\
            font-size: 16px;\
        }\
        #AWA-see-all {\
            display: block;\
            background: #fdc900;\
            border: none;\
            font-family: \"Open Sans Condensed\";\
            font-size: 17px;\
            font-weight: 700;\
            color: #8a6e25;\
            padding: 9px 9px;\
            margin: 0 auto;\
            text-shadow: none;\
            box-shadow: none;\
            margin-bottom: 20px;\
            text-align: center;\
            width: 32%;\
        }\
        #AWA-small {\
            clear: both;\
            text-align: center;\
        }\
        #AWA-new-top h2 {\
            font-weight: normal;\
        }\
        #AWA-new-bottom {\
            background-color: #ECECEC;\
            padding: 20px;\
            margin: 0 auto;\
            text-align: center;\
        }\
        #AWA-new-bottom-inner {\
            background-color: lightgrey;\
            padding: 30px;\
        }\
        #AWA-umara-shoe {\
            width: 350px;\
            display: inline-block;\
            height: 100%;\
            vertical-align: middle;\
        }\
        #AWA-new-bottom-right {\
            text-align: center;\
        }\
        #AWA-new-bottom-right h1 {\
            margin-top: 15px;\
            font-weight: 700;\
        }\
        #AWA-umara-text {\
            width: 200px;\
            display: block;\
            margin: 20px auto;\
        }\
        #AWA-new-bottom-right li {\
            text-align: left;\
            font-size: 14px;\
        }\
        #AWA-more-information {\
            text-decoration: underline;\
            color: gray;\
        }\
        #AWA-shoe-section {\
            text-align: center;\
            margin-top: 40px;\
            overflow: hidden;\
            margin-bottom: 40px;\
        }\
        #AWA-shoe-section h5 {\
            margin-bottom: 30px;\
        }\
        .AWA-shoe-ul {\
            margin-top: 20px;\
        }\
        .AWA-shoe {\
            overflow: auto;\
        }\
        .AWA-shoe h1 {\
            font-weight: 700;\
        }\
        .AWA-shoe:not(:last-child) {\
            border-right: solid 1px #D0D0D0;\
        }\
        .AWA-shoe-bullet {\
            text-align: left;\
        }\
        .customize-xero {\
            margin-bottom: 40px;\
        }\
        .AWA-sbl-left {\
            float: left;\
        }\
        .AWA-sbl-right {\
            float: right;\
        }\
        .AWA-shoe-button-link {\
            background: #fdc900;\
            border: none;\
            font-family: \"Open Sans Condensed\";\
            font-size: 14px;\
            font-weight: 700;\
            color: #8a6e25 !important;\
            padding: 5px 0;\
            margin: 0 auto;\
            text-shadow: none;\
            box-shadow: none;\
            text-align: center;\
            display: block;\
            width: 38%;\
        }\
        .primary-features #AWA-video .item .overlay {\
            height: 247px;\
        }\
        #AWA-best-sellers {\
            text-align: center;\
            margin-top: 40px;\
        }\
        #AWA-best-sellers h1, #AWA-new-bottom-right h1 {\
            font-family: \"Open Sans Condensed\",Arial, Helvetica, sans-serif;\
            height: 33px;\
        }\
        #AWA-best-sellers h1 {\
            margin-top: 2px;\
            text-align: left;\
        }\
        #AWA-new-bottom-right h1 {\
            margin-top: 20;\
        }\
        #AWA-diy-title {\
            margin-bottom: 10px;\
        }\
        .AWA-shoe-button-link:hover, #AWA-see-all:hover {\
            color: #111 !important;\
            box-shadow: none;\
        }\
        @media (max-width: 767px) {\
            .AWA-shoe:not(:last-child) {\
                border-right: 0;\
            }\
            #AWA-shoe-section h5 {\
                margin-bottom: 0;\
            }\
            .AWA-shoe {\
                padding-bottom: 0;\
                margin-bottom: 50px;\
            }\
            .AWA-shoe img {\
                width: 50%;\
            }\
            .AWA-shoe-ul {\
                list-style-type: none;\
            }\
            .AWA-shoe-ul li {\
                text-align: center;\
            }\
            .AWA-sbl-left {\
                margin-left: 5%;\
            }\
            .AWA-sbl-right {\
                margin-right: 5%;\
            }\
            .AWA-br {\
                display: none;\
            }\
            .AWA-shoe-button-link {\
                padding: 10px 0;\
            }\
            #AWA-best-sellers h1 {\
                text-align: center;\
            }\
        }\
        @media (min-width: 768px) {\
            .AWA-sb1, .AWA-sb2 {\
                margin-top: 58px;\
            }\
            .AWA-sb4 {\
                margin-top: 81px;\
            }\
            #AWA-new-middle-right {\
                padding-right: 5%;\
            }\
            #AWA-hero {\
                padding-left: 5%;\
            }\
            #AWA-new-bottom-right h1 {\
                margin-top: 0;\
            }\
        }\
        @media (min-width: 990px) {\
            .AWA-sb1, .AWA-sb2 {\
                margin-top: 41px;\
            }\
            .AWA-sb4 {\
                margin-top: 0;\
            }\
            #AWA-comfort {\
                margin-top: 51px;\
            }\
        }\
        ';


	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
        // Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

        // Clone video image
        var $videoImage = $(".item:contains('Find out...')").clone();

        // Add in new sections
        $(".bg").closest(".row").html(exp.vars.newTopSection);
        $("#AWA-new-top").closest(".row").after(exp.vars.newMiddleSection);
        $("#AWA-new-middle").closest(".row").after(exp.vars.newBottomSection);
        $("#AWA-new-bottom").after(exp.vars.shoeSection);

        // Hide unneeded sections
        $(".primary-features").hide();

        // Insert video image
        $("#AWA-video").html($videoImage);

        // Wrap video in primary-features class (needed for overlay effect)
        $("#AWA-video").wrap("<div class='primary-features'></div>");

        // Event handler to load in video
        $('#AWA-video a[href$="http://xeroshoes.com/xero-shoes-right/"]').click(function(e){
            e.preventDefault();
            $("#AWA-video").html('<p><script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_h8b1r4gmnk videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div><p>');
        });
	};


    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
    };



    exp.waitFor(function() { return $(".popup-vimeo").length }, exp.init, 10000);

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);