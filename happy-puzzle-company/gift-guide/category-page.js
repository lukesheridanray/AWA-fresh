//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var hpc_giftguide_categorypage = (function($) {

// Initialise the experiment object
var exp = {};

// Wrapper for console.log, to prevent the exp breaking on browsers which don't
// (always) have 'console' set (e.g. IE9)
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('HPC Gift Guide Experiment. Category page. - 0.3');

// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('#ctl00_dvBreadCrumb');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'existing_guide_guide': $('.gift-finder-header,.gift-finder'),
    'new_gift_guide': $('<div class="AWA_HPC_gift_guide"><div class="AWA_HPC_gift_guide_title"><img src="//cdn.optimizely.com/img/174847139/f8a3234c304343abbda84e56d20e9802.png" alt="Santa hat"><h2>Christmas Gift Finder</h2></div><div class="AWA_HPC_gift_guide_content"><div class="AWA_HPC_gift_guide_row"><div class="AWA_HPC_gift_guide_col"><label>Age:</label><label for="ctl00_cphMaster_chkAgeAR51"><input id="ctl00_cphMaster_chkAgeAR51" type="checkbox" name="ctl00$cphMaster$chkAgeAR51">0-2 yrs</label><label for="ctl00_cphMaster_chkAgeAR52"><input id="ctl00_cphMaster_chkAgeAR52" type="checkbox" name="ctl00$cphMaster$chkAgeAR52">3-5 yrs</label><label for="ctl00_cphMaster_chkAgeAR53"><input id="ctl00_cphMaster_chkAgeAR53" type="checkbox" name="ctl00$cphMaster$chkAgeAR53">6-7 yrs</label><label for="ctl00_cphMaster_chkAgeAR54"><input id="ctl00_cphMaster_chkAgeAR54" type="checkbox" name="ctl00$cphMaster$chkAgeAR54">8-11 yrs</label><label for="ctl00_cphMaster_chkAgeAR55"><input id="ctl00_cphMaster_chkAgeAR55" type="checkbox" name="ctl00$cphMaster$chkAgeAR55">12-14 yrs</label><label for="ctl00_cphMaster_chkAgeAR56"><input id="ctl00_cphMaster_chkAgeAR56" type="checkbox" name="ctl00$cphMaster$chkAgeAR56">15-Adult</label></div><div class="AWA_HPC_gift_guide_col"><label>Skills/interests</label><label for="AWA_HPC_gift_guide_skill_1"><input id="AWA_HPC_gift_guide_skill_1" type="radio" name="ctl00$cphMaster$ddlSkills" value="0" checked="checked">All</label><label for="AWA_HPC_gift_guide_skill_2"><input id="AWA_HPC_gift_guide_skill_2" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK05">Creativity</label><label for="AWA_HPC_gift_guide_skill_3"><input id="AWA_HPC_gift_guide_skill_3" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK16">Maths</label><label for="AWA_HPC_gift_guide_skill_4"><input id="AWA_HPC_gift_guide_skill_4" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK07">General Knowledge</label><label for="AWA_HPC_gift_guide_skill_5"><input id="AWA_HPC_gift_guide_skill_5" type="radio" name="ctl00$cphMaster$ddlSkills" value="SK10">Hand-Eye coordination</label></div></div><a id="AWA_HPC_gift_guide_submit" class="AWA_HPC_gift_guide_submit" href="javascript:__doPostBack(\'ctl00$cphMaster$lnkbtnSearch\',\'\')">Find the perfect gift</a></div></div>')
};

// New gift guide styling
exp.css = ' \
.AWA_HPC_gift_guide { \
    width: 100%; \
    clear: both; \
    margin-bottom: 1em; \
} \
.AWA_HPC_gift_guide_title { \
    width: 100%; \
    background-color: #9B4488; \
    box-sizing: border-box; \
    padding: 0.5em; \
} \
.AWA_HPC_gift_guide_title > * { \
    display: inline-block; \
    color: white; \
    vertical-align: middle; \
} \
.AWA_HPC_gift_guide_title img { \
    height: 40px; \
    margin-right: 1em; \
} \
.AWA_HPC_gift_guide_content { \
    width: 100%; \
    box-sizing: border-box; \
    border: 1px solid #C2D6E2; \
    border-top: 0; \
    font-size: 1.25em; \
} \
.AWA_HPC_gift_guide_row { \
    width: 100%; \
    box-sizing: border-box; \
} \
.AWA_HPC_gift_guide_col { \
    width: 50%; \
    box-sizing: border-box; \
    display: inline-block; \
    padding: 1em; \
    padding-bottom: 0; \
} \
.AWA_HPC_gift_guide_col label:first-of-type { \
    display: block; \
    width: 100%; \
    font-weight: bold; \
    font-size: 1.2em; \
    margin-bottom: 1em; \
} \
.AWA_HPC_gift_guide_col label { \
    display: inline-block; \
    width: 33%; \
    box-sizing: border-box; \
    padding-right: 1em; \
    white-space: nowrap; \
    margin-bottom: 1em; \
} \
.AWA_HPC_gift_guide_submit, \
.AWA_HPC_gift_guide_submit:link, \
.AWA_HPC_gift_guide_submit:visited, \
.AWA_HPC_gift_guide_submit:active { \
    font-family: Verdana, Geneva, sans-serif; \
    font-size: 11px; \
    font-weight: bold; \
    width: 155px; \
    height: 37px; \
    color: #FFF; \
    line-height: 37px; \
    display: block; \
    text-decoration: none; \
    background: url(\'//cdn.optimizely.com/img/174847139/639f6c4b180749ce95371d0aee83e55e.jpg\'); \
    background-position-x: right; \
    border-left: 1px solid #882776; \
    padding-left: 1em; \
    margin: 1em auto; \
} \
.AWA_HPC_gift_guide_col input[type=checkbox], \
.AWA_HPC_gift_guide_col input[type=radio] { \
    margin-right: 1em; \
} \
.AWA_HPC_gift_guide_col label[for=AWA_HPC_gift_guide_skill_4], \
.AWA_HPC_gift_guide_col label[for=AWA_HPC_gift_guide_skill_5] { \
    width: 40%; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
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

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');


    // Some example DOM manipulation...

    // Remove existing gift guide
    this.vars.existing_guide_guide.remove();

    // Add new gift guide
    $('#ctl00_dvBreadCrumb').before(this.vars.new_gift_guide);

    // When the gift guide button is pressed, we need to change the form's target
    // before submitting it. Turns out this isn't simple because ASP.Net reasons.
    // First thing to do is to get a bunch of data from the home page, and set up
    // a custom form submit function which changes the form data before submitting.
    $.get('/default.aspx', function(home_page_data){
        var gg_viewstate          = /<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(.+?)" \/>/.exec(home_page_data)[1],
            gg_viewstategenerator = /<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="(.+?)" \/>/.exec(home_page_data)[1],
            gg_eventvalidation    = /<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="(.+?)" \/>/.exec(home_page_data)[1];

        theForm.submitGiftGuide = function(){
            theForm.action = '/default.aspx';
            theForm.__VIEWSTATE.value          = gg_viewstate;
            theForm.__VIEWSTATEGENERATOR.value = gg_viewstategenerator;
            theForm.__EVENTVALIDATION.value    = gg_eventvalidation;
            theForm.__EVENTTARGET.value        = 'ctl00$cphMaster$lnkbtnSearch';
            theForm.__EVENTARGUMENT.value      = '';
            theForm.submit();
        };
    });

    // When the gift guide button is pressed, submit the form's custom submit
    // function - to make the POST actually work.
    $('#AWA_HPC_gift_guide_submit').on('click', function(e){
        e.preventDefault();
        exp.func.waitForFunction(theForm.submitGiftGuide, function(){
            theForm.submitGiftGuide();
        });
    });
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);