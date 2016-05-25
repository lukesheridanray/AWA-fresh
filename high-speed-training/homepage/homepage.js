// jshint multistr: true

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
        exp.log('Home page 1');

        // Variables
        // Object containing variables, generally these would be strings or jQuery objects
        exp.vars = {
        };

        // Styles
        // String containing the CSS for the experiment
        exp.css = "\
    .content > .row:last-child { \
        display: none; \
    } \
    .AWA-review-img {\
        display: inline-block;\
        border-bottom: 1px solid #ccc;\
        padding-bottom: 20px;\
        margin-bottom: 10px;\
        width: 100%;\
    }\
    .star-AWA-fix{\
        clear: both;\
        padding-top: 15px;\
        position: relative;\
        left: -8px;\
    }\
    p.AWA-review-name {\
        display: inline-block;\
        position: relative;\
        top: -7px;\
    }\
    .AWA-image-review, .AWA-text-fix, .AWA-text-wrapper {\
        max-width: 100%;\
    }\
    .AWA-image-review, .AWA-review-button {\
        display: table-cell;\
        vertical-align: middle;\
    }\
    .AWA-image-review p {\
        padding-top: 0;\
        padding-bottom: 0;\
        margin: 0;\
    }\
    .AWA-we-work-img {\
        max-width: 100%;\
        margin-top: 10px;\
    }\
    .AWA-we-work-img strong{\
        padding-bottom: 0px;\
        padding-left: 30px;\
        margin: 0px;\
        color: #777;\
    }\
    .AWA-we-work-img img{\
        margin: 0px;\
    }\
    .AWA-review-button {\
        text-align: center;\
    }\
    .AWA-review-button img {\
            display: block;\
            margin: 0 auto;\
        padding-top: 4px;\
        width: 125px;\
    }\
    .AWA-review-button a{\
        color: #777;\
        text-decoration: underline;\
        padding-bottom: 5px;\
    }\
    .AWA-review-button strong{\
        text-decoration: underline;\
        padding-left: 5px;\
    }\
    .AWA-review-img p {\
        margin: 0;\
    }\
    .AWA-float-fix {\
        width: 100%;\
        display: table;\
    }\
    .AWA-text-wrapper {\
        width: 100%;\
        padding-left: 10px;\
        margin-bottom: 1px;\
    }\
    .AWA-text-fix {\
        padding-right: 0px;\
        margin-right: 0px;\
        width: 380px;\
        float: left;\
    }\
    .AWA-text-fix.Sarah {\
        padding-bottom: 20px;\
    }\
    .AWA-info-welcome{\
        padding-bottom: 40px;\
    }\
    .AWA-we-work-sprite {\
        display: none;\
    }\
    @media (max-width: 990px) {\
        .AWA-review-img {\
            width: 100%;\
        }\
        .AWA-review-img p {\
            margin: 0;\
        }\
        .AWA-float-fix {\
            display: block;\
        }\
        .AWA-image-review {\
            width: 380px;\
            margin: 0 auto;\
            display: block;\
        }\
        .AWA-text-fix.Sarah {\
            padding-bottom: 0px;\
        }\
        .AWA-text-wrapper {\
            padding-left: 0;\
            margin-bottom: 32px;\
        }\
        .AWA-review-button {\
            width: 100%;\
            margin: 0 auto;\
            display: block;\
        }\
        .AWA-review-button img {\
            display: block;\
            margin: 0 auto;\
        }\
        .AWA-float-fix {\
            display: inline-block;\
        }\
        .AWA-we-work-img img {\
            display: none;\
        }\
        .AWA-we-work-img strong {\
            display: block;\
        }\
        .AWA-we-work-sprite {\
            display: block;\
            width: 50%;\
            float: left;\
            height: 127px;\
        }\
        .AWA-we-work-sprite:after {\
            content: '';\
            display: block;\
            height: 127px;\
            margin: 0 auto;\
            background-image: url('http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/7a94ec1111ef327c8fda69a8945c0dc0_who-we-work-awa-hst.png');\
            background-repeat: no-repeat;\
        }\
        .AWA-we-work-sprite.-forest,\
        .AWA-we-work-sprite.-coop, {\
            height: 100%;\
        }\
        .AWA-we-work-sprite.-jamies {\
            float: none;\
            width: 100%;\
            clear:both;\
            height: 100px;\
        }\
        .AWA-we-work-sprite.-first:after {\
            background-position: -47px 0;\
            width: 210px;\
        }\
        .AWA-we-work-sprite.-breakfast:after {\
            background-position: -308px 0;\
            width: 130px;\
        }\
        .AWA-we-work-sprite.-forest:after {\
            background-position: -498px 0;\
            width: 200px;\
            height: 100px;\
        }\
        .AWA-we-work-sprite.-coop:after {\
            background-position: -726px 0;\
            width: 190px;\
            height: 100px;\
        }\
        .AWA-we-work-sprite.-jamies:after {\
            background-position: -942px -15px;\
            width: 210px;\
            height: 100px;\
        }\
    }\
    @media (max-width: 460px) {\
        .AWA-we-work-sprite:after {\
            background-size: 900px;\
        }\
        .AWA-we-work-sprite.-first,\
        .AWA-we-work-sprite.-breakfast {\
            height: 100px;\
        }\
        .AWA-we-work-sprite.-first:after {\
            background-position: -33px 0;\
            width: 160px;\
            height: 100px;\
        }\
        .AWA-we-work-sprite.-breakfast:after {\
            background-position: -238px 0;\
            width: 99px;\
            height: 100px;\
        }\
        .AWA-we-work-sprite.-forest,\
        .AWA-we-work-sprite.-coop {\
            height: 96px;\
        }\
        .AWA-we-work-sprite.-forest:after {\
            background-position: -385px 0;\
            width: 150px;\
            height: 96px;\
        }\
        .AWA-we-work-sprite.-coop:after {\
            background-position: -558px 0;\
            width: 146px;\
            height: 96px;\
        }\
        .AWA-we-work-sprite.-jamies {\
            height: 70px;\
        }\
        .AWA-we-work-sprite.-jamies:after {\
            background-position: -726px -15px;\
            width: 160px;\
            height: 70px;\
        }\
    }\
    @media (max-width: 360px) {\
        .AWA-we-work-sprite {\
            clear: both;\
            float: none;\
            width: 100%;\
            margin: 0 auto;\
        }\
        .AWA-we-work-sprite.-breakfast {\
            height: 120px;\
        }\
        .AWA-we-work-sprite.-coop {\
            height: 70px;\
            position: relative;\
            top: -20px;\
        }\
    }\
        ";


        // Functions
        // Object containing functions, some helpful functions are included
        exp.func = {};

        // Init function
        // Called to run the actual experiment, DOM manipulation, event listeners, etc
        exp.init = function() {
            // Append style to head
            $('head').append('<style type="text/css">'+exp.css+'</style>');

            //Remove what needs to be removed.
            jQuery('.homepage-hero').find(".col-md-6").next().remove();

            //Add what needs to be added
            $('<div class="col-md-6 AWA-info-welcome">\
                        <h1>Quick, easy and convenient training courses</h1>\
                        <p>\
                            <strong>When you need to gain an accredited certificate, there is no easier way to learn.\
                            Our highly respected online training courses cover many areas of compliance and development.</strong></p>\
                        <p>Whether you’re looking for a course on <a href="available-courses/food-hygiene.aspx">food hygiene</a>, <a href="available-courses/health-safety.aspx">workplace health and safety</a>, <a href="available-courses/business-skills.aspx">business</a> and <a href="available-courses/financial-services.aspx">finance</a>, or <a href="available-courses/safeguarding-people.aspx">safeguarding people</a>, rest assured we’ll have one suitable for you.\
                        </p>\
                        <div class="row">\
                            <div class="col-sm-7">\
                                <a href="available-courses/" class="btn btn-large btn-green btn-block" title="View full list of online courses">Choose a course »</a>\
                            </div>\
                            <div class="col-sm-5 homepage-accreditations">\
                                <img src="assets/images/CPD-logo.gif" alt="all courses accredited by CPD">\
                                <img src="assets/images/RoSPA-logo.gif" alt="selected health and safety courses accredited by RoSPA">\
                                <img src="assets/images/iatp-accreditation-custom.gif" alt=" Asbestos Awareness (Category A) accredited by IATP">\
                            </div>\
                        </div>\
                    </div>\
                    <div class="AWA-review-img">\
                    <div class="AWA-float-fix">\
                    <div class="AWA-image-review">\
                    <div class="AWA-text-wrapper">\
                    <p class="AWA-text-fix">"Have done two courses with high speed training, it is easy to acess and understand and very convenient for me."</p>\
                    <div class="star-AWA-fix">\
                    <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/91475918f4f1784c1361498dbc12ba5c_review-stars-awa.png" alt="Reviews for HST">\
                    <p class="AWA-review-name">Susan James</p>\
                    </div>\
                    </div>\
                    </div>\
                    <div class="AWA-image-review">\
                    <div class="AWA-text-wrapper">\
                    <p class="AWA-text-fix Sarah">"This online course is simple to use and is very informative."</p>\
                    <div class="star-AWA-fix">\
                    <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/91475918f4f1784c1361498dbc12ba5c_review-stars-awa.png" alt="Reviews for HST">\
                    <p class="AWA-review-name">Sarah Kelly</p>\
                    </div>\
                    </div>\
                    </div>\
                    <div class="AWA-review-button">\
                    <a href="http://www.reviews.co.uk/company-reviews/store/high-speed-training-limited"\
                    <strong>Read 2,626 reviews</strong>\
                   <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/f278291546c4bd01f0e63d9b6d3f4b5d_reviews-button-awa-hst.png" alt="Reviews for HST">\
                   </a>\
                    </div>\
                    </div>\
                    </div>\
                    <div class="AWA-we-work-img">\
                    <strong>We work with:</strong>\
                    <img class="AWA-we-work-img" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/7a94ec1111ef327c8fda69a8945c0dc0_who-we-work-awa-hst.png" alt="Who we work with for HST">\
                    <div class="AWA-we-work-sprite -first"></div>\
                    <div class="AWA-we-work-sprite -breakfast"></div>\
                    <div class="AWA-we-work-sprite -forest"></div>\
                    <div class="AWA-we-work-sprite -coop"></div>\
                    <div class="AWA-we-work-sprite -jamies"></div>\
                    </div>\
                ').appendTo('.homepage-hero');
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


        exp.waitFor(function() { return $(".footer").length; }, exp.init, 10000);

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
/* REMOVE */