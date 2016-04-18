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
var exp = function($) {

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
    exp.log('Homepage - v6 - var1');

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
        newMiddleSection:   "<div id='AWA-new-middle' class='row'>\
                                <div id='AWA-hero' class='col-sm-6 col-md-6 col-lg-6'>\
                                    <div id='AWA-video'>\
                                        <img src='http://xeroshoes.com/wp-content/themes/commercegurus/images/home-features/xero-right-for-you.jpg'>\
                                    </div>\
                                </div>\
                                <div id='AWA-new-middle-right' class='col-sm-6 col-md-6 col-lg-6'>\
                                    <p id='AWA-comfort'>\"Everything you love about being barefoot</p>\
                                    <p id='AWA-comfort2'>\
                                    	with just the right amount of protection and comfort\"\
                                    </p>\
                                    <a id='AWA-see-all' href='http://xeroshoes.com/shop/'>See all Shoes</a>\
                                    <p id='AWA-small'>The only shoes with a 5,000 mile warranty</p>\
                                </div>\
                            </div>",
        newHeadline:  "<div id='AWA-new-headline' class='col-sm-12 col-md-12 col-lg-12'>\
                            <div id='AWA-hr1'></div>\
                            <h1 id='AWA-title'>Get the most comfortable, versatile pair of sandals you'll ever own</h1>\
                        </div>",
        newBottomSection:   "<div id='AWA-new-bottom' class='row'>\
                                <div id='AWA-new-bottom-left' class='col-sm-4 col-md-4 col-lg-4'>\
                                    <img id='AWA-umara-shoe' src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/98aaea16943811158fecacf26ae7522b_ztrail2_copy.jpg'>\
                                    <p id='AWA-perfect'>\"Perfect for hiking, running, walking, water sports, working out… everything.\"</p>\
                                </div>\
                                <div id='AWA-new-bottom-right' class='col-sm-4 col-md-4 col-lg-4'>\
                                	<h5 id='AWA-amara-z-trail'>Umara Z-Trail Sport Sandal</h5>\
                                    <ul>\
                                        <li>More protection. Lighter weight. Extra comfort.</li>\
                                        <li>20% lighter than our Amuri Z-Trek</li>\
                                    </ul>\
                                    <a id='AWA-more-information' href='#'>Win a Pair!</a>\
                                </div>\
                                <div id='AWA-new-bottom-right-2' class='col-sm-4 col-md-4 col-lg-4'>\
                                	<img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/8177c04fd23aa55b72f0b972d171e307_danny_copy.jpg' id='AWA-danny'>\
                                	<p id='AWA-danny-italic'>\"These are, by far, my favorite sandals for recovery, trail runs, or just walking around town.\"</p>\
                                	<p id='AWA-danny-credit'>Danny Dreyer, Co-founder of ChiRunning</p>\
                                </div>\
                                <div id='AWA-hr'></div>\
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
                                    <a class='AWA-shoe-button-link AWA-sbl-left' href='http://xeroshoes.com/shop/feeltrue-products/ztrek-men/'>Men\'s</a>\
                                    <a class='AWA-shoe-button-link AWA-sbl-right' href='http://xeroshoes.com/shop/feeltrue-products/ztrek-women/'>Women\'s</a>\
                                </div>\
                            </div>\
                            <div class='AWA-shoe col-sm-3 col-md-3 col-lg-3'>\
                                <h5>Amuri Venture</h5>\
                                <img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/0cd5779e66963c2de3c50bd19f9df69a_pastedgraphic-8_(1).png'>\
                                <ul class='AWA-shoe-ul'>\
                                    <li class='AWA-shoe-bullet'>Performance-ready recreation sandals</li>\
                                    <li class='AWA-shoe-bullet'>5.5mm FeelTrue<sup>&reg;</sup> sole</li>\
                                </ul>\
                                <div class='AWA-shoe-buttons AWA-sb2'>\
                                    <a class='AWA-shoe-button-link AWA-sbl-left' href='http://xeroshoes.com/shop/feeltrue-products/sensori-venture-mens-barefoot-sandals/'>Men\'s</a>\
                                    <a class='AWA-shoe-button-link AWA-sbl-right' href='http://xeroshoes.com/shop/feeltrue-products/sensori-venture-womens-barefoot-sandals/'>Women\'s</a>\
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
                                    <a class='AWA-shoe-button-link AWA-sbl-left' href='http://xeroshoes.com/shop/feeltrue-products/amuri-cloud-mens-barefoot-sandal/'>Men\'s</a>\
                                    <a class='AWA-shoe-button-link AWA-sbl-right' href='http://xeroshoes.com/shop/amuri/amuri-cloud-womens-barefoot-sandal/'>Women\'s</a>\
                                </div>\
                            </div>\
                            <div class='AWA-shoe col-sm-3 col-md-3 col-lg-3'>\
                                <h5 id='AWA-diy-title'>DIY Xero Shoes Kits</h5>\
                                <img src='//useruploads.visualwebsiteoptimizer.com/useruploads/197399/images/e03b6d535f7fd4048f2686ca247552ed_all-laces-2rows-withsoles-1124x1124_(1).png'>\
                                <p>Make your own barefoot sandals in just minutes!</p>\
                                <div class='AWA-shoe-buttons AWA-sb4'>\
                                    <a class='AWA-shoe-button-link' href='http://xeroshoes.com/shop/product-category/diy-kits/'>DIY Kits</a>\
                                </div>\
                            </div>\
                        </div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
        #AWA-title {\
            line-height: 120%;\
            margin-bottom: 40px;\
            margin-top: 20px;\
            font-family: \"Open Sans Condensed\",Arial, Helvetica, sans-serif;\
            font-weight: 700;\
            text-align: center;\
        }\
        #AWA-new-middle {\
            margin-top: 20px;\
        }\
        #AWA-hero img {\
            display: block;\
            margin: 0 auto;\
        }\
        #AWA-comfort {\
            font-weight: bold;\
            text-align: center;\
            font-size: 20px;\
            margin-bottom: 0;\
        }\
        #AWA-comfort2 {\
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
        	clear: both;\
            padding: 20px;\
            margin: 0 auto;\
            text-align: center;\
        }\
        #AWA-new-bottom-inner {\
            background-color: lightgrey;\
            padding: 30px;\
        }\
        #AWA-amara-z-trail {\
			margin-left: 42px;\
			text-align: left;\
			font-weight: bold;\
            margin-bottom: 16px;\
        }\
        #AWA-umara-shoe {\
            width: 350px;\
            display: inline-block;\
        }\
        #AWA-new-bottom-right {\
            text-align: center;\
        }\
        #AWA-new-bottom-right h1 {\
            margin-top: 15px;\
            font-weight: 700;\
        }\
        #AWA-new-bottom-right ul {\
            margin-bottom: 30px;\
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
			display: block;\
			background: #fdc900;\
			border: none;\
			font-family: "Open Sans Condensed";\
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
        #AWA-more-information:hover {\
			color: #111 !important;\
			box-shadow: none;\
        }\
        #AWA-hr1 {\
            background: url("http://xeroshoes.com/wp-content/themes/commercegurus/images/thin-divider.gif") no-repeat top center;\
            padding-top: 9px;\
            margin-top: 25px;\
            clear: both;\
        }\
        #AWA-hr {\
            background: url("http://xeroshoes.com/wp-content/themes/commercegurus/images/thin-divider.gif") no-repeat top center;\
            padding-top: 9px;\
            clear: both;\
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
            margin-top: 10px;\
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
        .AWA-shoe-button-link:hover, #AWA-see-all:hover {\
            color: #111 !important;\
            box-shadow: none;\
        }\
        #AWA-danny-italic {\
        	font-style: italic;\
        	font-size: 13.5px;\
        	margin-bottom: 5px;\
        	text-align: left;\
        }\
        #AWA-danny-credit {\
        	text-align: left;\
        }\
        #AWA-perfect {\
            margin-top: 10px;\
            font-style: italic;\
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
            #AWA-amara-z-trail {\
            	margin-top: 30px;\
            }\
            #AWA-new-bottom-left, #AWA-new-bottom-right, #AWA-new-bottom-right-2 {\
                margin-top: 60px;\
            }\
            #AWA-danny {\
            	width: 50%\
            }\
            #AWA-title {\
            	margin-bottom: 10px;\
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
            #AWA-danny {\
                width: 133px;\
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
	        #AWA-shoe-section #AWA-diy-title {\
	            margin-bottom: 10px;\
	        }\
            #AWA-new-bottom-left {\
                margin-bottom: 40px;\
                margin-top: 15px;\
            }\
            #AWA-new-bottom-right {\
            	margin-top: 60px;\
            }\
            #AWA-title {\
            	margin-bottom: 10px;\
            }\
            #AWA-danny {\
            	width: 180px;\
            }\
            #AWA-hero {\
                padding-left: 7%;\
                padding-right: 0;\
            }\
            #AWA-new-middle-right {\
                padding-right: 7%;\
                padding-left: 0;\
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
        $(".bg").closest(".row").hide();
        $(".bg").closest(".row").after(exp.vars.newMiddleSection);
		$("#AWA-new-middle").closest(".row").after(exp.vars.newHeadline);


        $("#AWA-new-headline").after(exp.vars.newBottomSection);
        $("#AWA-new-bottom").after(exp.vars.shoeSection);

        // Hide unneeded sections
        $(".primary-features").hide();

        // Insert video image
        $("#AWA-video").html($videoImage);

        // Wrap video in primary-features class (needed for overlay effect)
        $("#AWA-video").wrap("<div class='primary-features'></div>");

        // Load in video
        $("#AWA-video").html('<p><script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_eegsrl8vh7 videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div><p>');
        

        // Swap Customize and Hear My Story
        $(".stories").after($(".customize-xero"));
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
};


var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function () {
            waitForjQuery(time * 2);
        }, time);
    }
};

waitForjQuery(1000);