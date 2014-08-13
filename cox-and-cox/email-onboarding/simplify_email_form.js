/* Snippet to extend jQuery to parse the page's GET params */
(function($){
    $.urlParam = function(name){
        var results = new RegExp('([\?&]' + name + ')(=([^&#]*))?').exec(window.location.href);
        if (results === null){
           return false;
        }
        else{
           return results[3] || true || 0;
        }
    };
})(jQuery);

// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var simplify_email_form = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Simplify email form - dev 0.0.3');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('body.cms-page-view.cms-email-sign-up');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
    list_of_grate_benefits: $('\
    <div class="extra_right_col"> \
        <ul class="tick-bullet"> \
            <li>Don\'t miss another sale</li> \
            <li>Get exclusive subscriber discounts</li> \
            <li>See our latest collections and products first</li> \
        </ul> \
    </div> \
    ')
};

exp.vars.email_form = {
    container: $('.compform'),
    header: $('.compform h2 span'),
    header_text: 'Sign up for emails from Cox & Cox',
    table: $('.compform table'),
    title_row: $('.compform table > tbody > tr:nth-of-type(1)'),
    first_name_row: $('.compform table > tbody > tr:nth-of-type(2)'),
    last_name_row: $('.compform table > tbody > tr:nth-of-type(3)'),
    email_row: $('.compform table > tbody > tr:nth-of-type(4)'),
    telephone_row: $('.compform table > tbody > tr:nth-of-type(5)'),
    dob_row: $('.compform table > tbody > tr:nth-of-type(6)'),
    submit_button: $('.compform table > tbody > tr:last-of-type input[type="submit"]'),

    privacy_line: $('.compform > p:first-of-type')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
    .col-main .page-title { display: none; } \
    .compbg > img { display: none; } \
    .compform { \
        position: initial; \
        top: 0; \
        left: 0; \
        background-color: #eee; \
        border: 1px solid #ddd; \
        width: 60%; \
        padding: 4em; \
        display: inline-block; \
        vertical-align: top; \
    } \
\
    .compform h2 { \
        margin-top: 0; \
    } \
\
    .compform table { \
        width: 100%; \
    } \
\
    .compform table tr td:first-of-type div[align=right] { \
        padding-right: 2em; \
    } \
\
    .compform table > tbody > tr:last-of-type input[type=submit] { \
            background: #ffcc38; /* Old browsers */ \
            /* IE9 SVG, needs conditional override of \'filter\' to \'none\' */ \
            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmY2MzOCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjg2MDkiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+); \
            background: -moz-linear-gradient(top, #ffcc38 0%, #ff8609 100%); /* FF3.6+ */ \
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffcc38), color-stop(100%,#ff8609)); /* Chrome,Safari4+ */ \
            background: -webkit-linear-gradient(top, #ffcc38 0%,#ff8609 100%); /* Chrome10+,Safari5.1+ */ \
            background: -o-linear-gradient(top, #ffcc38 0%,#ff8609 100%); /* Opera 11.10+ */ \
            background: -ms-linear-gradient(top, #ffcc38 0%,#ff8609 100%); /* IE10+ */ \
            background: linear-gradient(to bottom, #ffcc38 0%,#ff8609 100%); /* W3C */ \
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffcc38\', endColorstr=\'#ff8609\',GradientType=0 ); /* IE6-8 */ \
         \
            width: 243px; \
            border-radius: 3px; \
            border: 0; \
            height: 42px; \
            font: bold 14px Arial,Helvetica,sans-serif; \
            color: #9c5309; \
    } \
\
    .compform > form > p { \
        width: 300px; \
        margin: 1em auto; \
    } \
\
    .extra_right_col { \
        display: inline-block; \
        margin-top: 8em; \
    } \
\
    ul.tick-bullet { \
        /* Tick box */ \
        list-style-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC\'); \
        margin-left: 3em; \
    } \
 \
    ul.tick-bullet li { \
        margin-bottom: 0.5em; \
    } \
    ';

// Functions
// Object containing functions for use in the experiment
// Some helpful functions are included below
exp.func = exp.func || {};

// This function waits till a DOM element is available, then runs a callback
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

// This function waits till a function is available, then runs a callback
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
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // DOM manipulation.

    // Add right column explaining how GRATE it is to be on their newsletter
    this.vars.email_form.container.after(
        this.vars.list_of_grate_benefits
    );

    // Change header text
    this.vars.email_form.header.text(
        this.vars.email_form.header_text
    );

    // Remove unnecessary form elements
    this.vars.email_form.title_row.remove();
    this.vars.email_form.telephone_row.remove();
    this.vars.email_form.dob_row.remove();

    // Change submit button's container to not be a colspan2 - instead add an empty cell to the left.
    this.vars.email_form.submit_button.parent().attr('colspan', 1);
    this.vars.email_form.submit_button.parent().before($('<td>&nbsp;</td>'));

    this.vars.email_form.submit_button.parent().html(
        this.vars.email_form.submit_button.parent().html().replace(/&nbsp;/g, '')
    );

    // Move privacy line below the form
    this.vars.email_form.table.after(
        this.vars.email_form.privacy_line
    );

    // If there's an e-mail GET parameter, populate the email input with that value.
    if ($.urlParam('email') !== false && $.urlParam !== true) {
        console.log('Prepopulating email field with ' + $.urlParam('email'));
        this.vars.email_form.email_row.find('input').val(
            decodeURIComponent($.urlParam('email'))
        );
    }

};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
simplify_email_form.init();