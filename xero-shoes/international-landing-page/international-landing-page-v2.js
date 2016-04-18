/* NOTE - UNCOMMENT LOCAL STORAGE SECTION BEFORE PUSHING LIVE AND USING VWO_$ */

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
    exp.log('International Landing Page - v2');

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
        modal:  "<div id='AWA-overlay-over'>\
                    <div id='AWA-overlay'>\
                    </div>\
                    <div id='AWA-international-modal'>\
                        <h1>Shipping to <span class='AWA-country'></span></h1>\
                        <div id='AWA-flag-area'></div>\
                        <i class='fa fa-times AWA-fa'></i>\
                        <div style='clear: both'>\
                        <div id='AWA-bottom-row'>\
                            <p id='AWA-yes'>Yes, we deliver to <span class='AWA-country'></span>!</p>\
                            <p id='AWA-select-delivery'>Select delivery option at checkout.</p>\
                        </div>\
                    </div>\
                </div>",
        countries: {
          "AR": { "country":"Argentina", "flag":"http://flags.fmcdn.net/data/flags/mini/ar.png"},
          "AU": { "country":"Australia", "flag":"http://flags.fmcdn.net/data/flags/mini/au.png"},
          "AT": { "country":"Austria", "flag":"http://flags.fmcdn.net/data/flags/mini/at.png"},
          "BE": { "country":"Belgium", "flag":"http://flags.fmcdn.net/data/flags/mini/be.png"},
          "BM": { "country":"Bermuda", "flag":"http://www.universitiesip.com/unisdirectory/flags/bm.gif"},
          "CL": { "country":"Chile", "flag":"http://flags.fmcdn.net/data/flags/mini/cl.png"},
          "CN": { "country":"China", "flag":"http://flags.fmcdn.net/data/flags/mini/cn.png"},
          "CO": { "country":"Colombia", "flag":"http://flags.fmcdn.net/data/flags/mini/co.png"},
          "HR": { "country":"Croatia ", "flag":"http://flags.fmcdn.net/data/flags/mini/hr.png"},
          "CZ": { "country":"Czech Republic", "flag":"http://flags.fmcdn.net/data/flags/mini/cz.png"},
          "DK": { "country":"Denmark", "flag":"http://flags.fmcdn.net/data/flags/mini/dk.png"},
          "EE": { "country":"Estonia ", "flag":"http://flags.fmcdn.net/data/flags/mini/ee.png"},
          "FI": { "country":"Finland", "flag":"http://flags.fmcdn.net/data/flags/mini/fi.png"},
          "FR": { "country":"France", "flag":"http://flags.fmcdn.net/data/flags/mini/fr.png"},
          "DE": { "country":"Germany", "flag":"http://flags.fmcdn.net/data/flags/mini/de.png"},
          "GR": { "country":"Greece", "flag":"http://flags.fmcdn.net/data/flags/mini/gr.png"},
          "GT": { "country":"Guatemala ", "flag":"http://flags.fmcdn.net/data/flags/mini/gt.png"},
          "HK": { "country":"Hong Kong", "flag":"http://www.kiteboardtour.asia/system/wp-content/uploads/2012/12/hongkong-flag.png"},
          "HU": { "country":"Hungary", "flag":"http://flags.fmcdn.net/data/flags/mini/hu.png"},
          "IS": { "country":"Iceland ", "flag":"http://flags.fmcdn.net/data/flags/mini/is.png"},
          "IE": { "country":"Ireland", "flag":"http://flags.fmcdn.net/data/flags/mini/ie.png"},
          "IE": { "country":"Israel", "flag":"http://flags.fmcdn.net/data/flags/mini/il.png"},
          "IT": { "country":"Italy", "flag":"http://flags.fmcdn.net/data/flags/mini/it.png"},
          "JM": { "country":"Jamaica", "flag":"http://flags.fmcdn.net/data/flags/mini/jm.png"},
          "JP": { "country":"Japan", "flag":"http://flags.fmcdn.net/data/flags/mini/jp.png"},
          "KW": { "country":"Kuwait ", "flag":"http://flags.fmcdn.net/data/flags/mini/kw.png"},
          "LB": { "country":"Lebanon", "flag":"http://flags.fmcdn.net/data/flags/mini/lb.png"},
          "MY": { "country":"Malaysia", "flag":"http://flags.fmcdn.net/data/flags/mini/my.png"},
          "MT": { "country":"Malta", "flag":"http://flags.fmcdn.net/data/flags/mini/mt.png"},
          "NL": { "country":"Netherlands", "flag":"http://flags.fmcdn.net/data/flags/mini/nl.png"},
          "NZ": { "country":"New Zealand", "flag":"http://flags.fmcdn.net/data/flags/mini/nz.png"},
          "NO": { "country":"Norway", "flag":"http://flags.fmcdn.net/data/flags/mini/no.png"},
          "PA": { "country":"Panama", "flag":"http://flags.fmcdn.net/data/flags/mini/pa.png"},
          "PL": { "country":"Poland", "flag":"http://flags.fmcdn.net/data/flags/mini/pl.png"},
          "PT": { "country":"Portugal", "flag":"http://flags.fmcdn.net/data/flags/mini/pt.png"},
          "PR": { "country":"Puerto Rico", "flag":"http://www.findaport.com/images/flags/small/PRflag.jpg?1347359654"},
          "RU": { "country":"Russia", "flag":"http://flags.fmcdn.net/data/flags/mini/ru.png"},
          "SG": { "country":"Singapore", "flag":"http://flags.fmcdn.net/data/flags/mini/sg.png"},
          "SK": { "country":"Slovakia", "flag":"http://flags.fmcdn.net/data/flags/mini/sk.png"},
          "SI": { "country":"Slovenia", "flag":"http://flags.fmcdn.net/data/flags/mini/si.png"},
          "ZA": { "country":"South Africa", "flag":"http://flags.fmcdn.net/data/flags/mini/za.png"},
          "KR": { "country":"South Korea", "flag":"http://flags.fmcdn.net/data/flags/mini/kr.png"},
          "ES": { "country":"Spain", "flag":"http://flags.fmcdn.net/data/flags/mini/es.png"},
          "SE": { "country":"Sweden", "flag":"http://flags.fmcdn.net/data/flags/mini/se.png"},
          "CH": { "country":"Switzerland", "flag":"http://flags.fmcdn.net/data/flags/mini/ch.png"},
          "TW": { "country":"Taiwan", "flag":"http://www.kiteboardtour.asia/system/wp-content/uploads/2012/12/taiwan-flag.png"},
          "TH": { "country":"Thailand", "flag":"http://flags.fmcdn.net/data/flags/mini/th.png"},
          "UA": { "country":"Ukraine", "flag":"http://flags.fmcdn.net/data/flags/mini/ua.png"},
          "AE": { "country":"United Arab Emirates", "flag":"http://flags.fmcdn.net/data/flags/mini/ae.png"},
          "GB": { "country":"United Kingdom", "flag":"http://flags.fmcdn.net/data/flags/mini/gb.png"}//,
          //"US": { "country":"the United States", "flag":"http://flags.fmcdn.net/data/flags/mini/us.png"}
        }
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
    #AWA-overlay-over {\
        position: fixed;\
        top: 0;\
        left: 0;\
        width: 100%;\
        height: 100%;\
        z-index: 15000;\
        display: block;\
        visibility: visible;\
    }\
    #AWA-overlay {\
        width: 100%;\
        height: 100%;\
        position: absolute;\
        top: 0;\
        left: 0;\
        background-color: #000;\
        opacity: .8;\
    }\
    #AWA-international-modal {\
        width: 100%;\
        height: 119px;\
        max-height: 100%;\
        z-index: 30000;\
        position: absolute;\
        margin: auto;\
        bottom: 0;\
        border-radius: 3px;\
        color: #fff;\
        font-family: \'Open Sans\', sans-serif;\
        font-size: 18px;\
        text-align: center;\
        background-color: #fdc900;\
        padding: 0 40px;\
    }\
    #AWA-international-modal h1 {\
        text-align: left;\
        font-size: 1.5em;\
        line-height: 1.2em;\
        float: left;\
        margin-bottom: 15px;\
    }\
    #AWA-flag {\
        margin-top: 32px;\
        margin-left: 15px;\
        float: left;\
    }\
    .AWA-fa {\
        float: right;\
        margin-top: 14px;\
        font-size: 1.5em;\
        cursor: pointer;\
    }\
    #AWA-international-modal {\
        color: black;\
    }\
    #AWA-yes {\
        float: left;\
    }\
    #AWA-select-delivery {\
        float: right;\
    }\
    #AWA-flag {\
        max-width: 45px;\
    }\
    .AWA-hide-g {\
        display: none !important;\
    }\
    @media all and (max-width: 900px) {\
        #AWA-international-modal {\
            font-size: .8em;\
        }\
        #AWA-international-modal h1 {\
            margin-top: 10px;\
            margin-bottom: 10px;\
            text-align: center;\
            float: none;\
        }\
        .AWA-fa {\
            display: none;\
        }\
        #AWA-flag-area {\
            clear: both;\
            text-align: center;\
        }\
        #AWA-flag {\
            margin: 0;\
            float: none;\
        }\
        #AWA-select-delivery, #AWA-yes {\
            float: none;\
            text-align: center;\
            margin-bottom: 5px;\
        }\
    }';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
        // Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

        function openModal() {
            // Attach modal overlay
            $("body").append(exp.vars.modal);
            $("#SnapABug_Button").hide();
            $("#_GUARANTEE_SealSpan").addClass('AWA-hide-g');

            // Close modal after 5 seconds
            setTimeout(function() {
                $("#AWA-overlay-over, #AWA-overlay").hide();
                $("#SnapABug_Button").show();
                $("#_GUARANTEE_SealSpan").removeClass('AWA-hide-g');
            }, 7000);

            // Close event handler
            $("#AWA-overlay-over").click(function() {
                $("#AWA-overlay-over, #AWA-overlay").hide();
                $("#SnapABug_Button").show();
                $("#_GUARANTEE_SealSpan").removeClass('AWA-hide-g');
            });
        }


       if (!localStorage.seenModal) {
            $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
                var countryCode = data.countryCode;
                exp.log(data);

                // If country code is found in the JSON
                if (exp.vars.countries[countryCode]) {
                    openModal();
                    $(".AWA-country").text(exp.vars.countries[countryCode]["country"]);
                    $("#AWA-flag-area").append("<img id='AWA-flag' src='" + exp.vars.countries[countryCode]["flag"] + "'>");
                    localStorage.seenModal = true;
                } else {
                    exp.log('Not a supported country');
                }            
            });
        } else {
           exp.log('International modal already shown');
        }


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

    var condition = function() {
        return $("#SnapABug_Button").length;
    }

    var callback = function() {
        // Run the experiment
        exp.init();
    }

     exp.waitFor(condition, callback, 10000);

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);