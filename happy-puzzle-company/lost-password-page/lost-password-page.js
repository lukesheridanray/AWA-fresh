//
// Happy Puzzle Company - Lost Password Page
// Based on CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Lost password page experiment - 1.0');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $("#ctl00_cphMaster_stEmail");

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Some example DOM manipulation...

    var email = $("#ctl00_cphMaster_stEmail").text();
    var text = "We have sent a new password to " + email + ".<br />\n"
        + "Please check your email and enter the new password here.";

    $(".main_title_box h1").text("Check your e-mail");

    $("#ctl00_cphMaster_txtEmail").val(email);

    $(".internal_middle_column tr:first > td:first").removeClass("existing_titles");
    $(".internal_middle_column tr:first > td:first").html(text);
    $(".internal_middle_column tr:first > td:first").css('font-size', '1.3em');
    $(".internal_middle_column tr:first > td:first").css('text-align', 'center');
    $(".internal_middle_column td").removeAttr("width");
    $(".box_border > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)").remove();
    $(".new_customer_titles").remove();
    $(".box_border > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3)").remove();
    $(".box_border > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)").remove();
    $(".forgotten_password_link").remove();
    $(".box_border > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1)").css('visibility', 'hidden');
    $("#ctl00_cphMaster_divMessage").remove();
    $(".header, .footer, .internal_left_column, .internal_right_column").remove();
    $(".internal_middle_column").css('position','static');
    $(".internal_middle_column").css('float','none');
    $(".internal_middle_column").css('margin','2em auto');
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);