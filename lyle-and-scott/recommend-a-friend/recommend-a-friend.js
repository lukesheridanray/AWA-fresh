//
// CGIT Optimizely Boilerplate - version 0.1.3
//

/*

"https://www.lyleandscott.com/pws/secure/ProcessPayment.ice?step2
- the transaction confirmation page"

UK only
100% (50/50)

"Engagement
Clicks on Submit button
Clicks on Register Password button
Visits to https://www.lyleandscott.com/pws/secure/ManageAccount.ice  
Revenue per Visitor"

"See wireframe

Remove the order review on the right hand side of the page (see screenshot of original page that I send along with the wireframe) + add two new components:

1. On the right, in place of the order review element, introduce the Recommend A Friend block. To a large extent this is a copy of this page: http://www.lyleandscott.com/fcp/content/recommend-a-friend/content

Copy is as below.
"Recommend a friend to join our email newsletter and if they subscribe you’ll both be in with a chance to win £100 each. You can recommend up to six friends per month – the more, the better your chances of winning!

Please tick to confirm you have your friend's permission to email them





The ""See the email your friend will receive"" link points to an overlay that shows the text of the email.

2. On the left, replace the two address fields with a Lazy Registration box. This enables a user who has checked out as guest to simply enter a password, thus completing account registration. The functionality is already there as you'll see from the screen shot.

"


---

*/

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Example experiment - dev 0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = '';

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'form': $('#confirmation_BWR'),
    'formLegend': 'Enjoy faster checkout',
    'formButton': 'Register Password',
    'formText': 'You checked out as a guest. Create a password below to avoid having to enter your personal and address details next time.',
    'recommendForm': '<div class="iframe-wrapper"> \
                          <h2>Recommend a Friend<br />and win &pound;100</h2> \
                          <p>Recommend a friend to join our email newsletter and if they subscribe you\'ll both be in with a chance to win &pound;100 each. You can recommend up to six friends per month – the more, the better your chances of winning!</p> \
                          <p><a href="#" class="email-exampl-modal">See the email your friend will receive</a></p> \
                          <iframe style="border: none" src="http://newsletter.lyleandscott.com/public/member_get_member.jsp" height="600px" width="510px"></iframe> \
                          <p class="iframe-smallprint">Your friend will receive the invitation once only. The email address will not be used for any other purposes without explicit permission.</p> \
                      </div>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#content_left { position: relative; left: -66px; } \
#content_right { overflow: visible; position: relative; left: -106px; } \
.iframe-wrapper { position: absolute; border: 3px dashed #ccc; width: 500px; } \
#confirmation_BWR div.element label { width: 124px; } \
#confirmation_BWR button.right.yellow { float: none; display: block; margin: 0 auto; } \
#confirmation_BWR div.element input.text { background: #fff; width: 220px } \
#confirmation_BWR { background: #F4F4F4; padding: 10px; width: 380px; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    this.vars.form.find('legend').text( this.vars.formLegend ).after( '<p class="form-intro">'+this.vars.formText+'</p> ');
    this.vars.form.find('button').text( this.vars.formButton );
    
    $('.orderSummary').replaceWith( this.vars.recommendForm );
    
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);