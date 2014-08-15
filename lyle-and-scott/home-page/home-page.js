//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var home_page_exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Lyle and Scott home page experiment - 1.4.0');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('body.Home');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'has_run': false,

    'masonry_section': $('#home_content'),
    'video_block': $('#home_content > div:nth-of-type(1)'),
    'history_block': $('#home_content > div:nth-of-type(2)'),
    'email_capture_block': $('#home_content > div:nth-of-type(3)'),
    'scottish_creatives_block': $('#home_content > div:nth-of-type(4)'),

    'jackets_and_coats_block': $('<div class="content_block CGIT_HP_CATBLOCK"> \
    <a href="http://www.lyleandscott.com/jackets-coats/men/fcp-category/list?resetFilters=true"> \
        <img style="padding-bottom:20px" src="//cdn.optimizely.com/img/174847139/3d0839791ab84e589ee362764f93b083.jpg" alt="Jackets &amp; Coats"> \
        <h2 class="block_title">Jackets &amp; Coats</h2> \
    </a> \
</div>'),
    'shirts_block': $('<div class="content_block CGIT_HP_CATBLOCK"> \
    <a href="http://www.lyleandscott.com/shirts/men/fcp-category/list?resetFilters=true"> \
        <img style="padding-bottom:20px" src="//cdn.optimizely.com/img/174847139/f86d4051317f42cb922c22ca905e8363.jpg" alt="Shirts"> \
        <h2 class="block_title">Shirts</h2> \
    </a> \
</div>')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.CGIT_HP_CATBLOCK h2 { \
    text-align: center; \
    font-size: 2em; \
} \
 \
.email_capture_block { \
    text-align: center; \
} \
.email_capture_block img { \
    display: none; \
} \
.email_capture_block h2 { \
    font-size: 3.5em; \
} \
.email_capture_block form { \
    margin: 15px auto 0px auto; \
    width: 520px; \
} \
.email_capture_block form#quickProspectRegistrationForm label { \
    padding-top: 10px; \
} \
.email_capture_block form#quickProspectRegistrationForm input#emailID { \
    width: 385px !important; \
    padding: 1em 0em 1em 1em; \
    margin-right: 0; \
} \
.email_capture_block form#quickProspectRegistrationForm button { \
    padding: 1em; \
    font-family: \'gill_sans_mt_condensedregular\'; \
    text-transform: uppercase; \
    font-size: 1.5em; \
    line-height: 15px; \
    float: right; \
} \
#home_content h2 { \
    font-family: \'gill_sans_mt_condensedregular\'; \
    text-transform: uppercase; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Remove video block
    this.vars.video_block.remove();

    // Remove history block
    this.vars.history_block.remove();

    // Remove scottish creatives block
    this.vars.scottish_creatives_block.remove();

    // Add jackets-and-coats and shirts block
    var elems_to_prepend = [
        this.vars.jackets_and_coats_block,
        this.vars.shirts_block
    ];
    this.vars.masonry_section.prepend(elems_to_prepend);

    // Rework email block
    this.vars.email_capture_block
        .removeClass('small')
        .addClass('large')
        .addClass('email_capture_block');

    this.vars.email_capture_block.find('h2').removeAttr('style');
    this.vars.email_capture_block.find('button').removeAttr('style').text("SUBSCRIBE");

    // Re-load masonry
    // This may error if masonry hasn't initialized (in which case it doesn't need to run)
    this.vars.masonry_section.masonry("reload");

};

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);

// Run the experiment
$(document).ready(function() {
    console.log("MAKING DO");
    home_page_exp.init();
});