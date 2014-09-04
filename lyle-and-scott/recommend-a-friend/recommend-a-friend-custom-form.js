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

Your friend will receive the invitation once only. The email address will not be used for any other purposes without explicit permission.



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
    'recommendForm': '<form name="formDetails" id="recommendForm" action="member_get_member_submit.jsp" method="post"> \
                          <input name="gid" value="250337463" type="hidden"> \
                          <input name="action" value="register" type="hidden"> \
	                        <input name="invite_user" value="true" type="hidden"> \
	                        <input name="errorPage" value="/public/member_get_member.jsp" type="hidden"> \
	                        <input name="debug" value="" type="hidden"> \
	                        <input name="mps" value="1m5pr98ndw5yfkrkxc3kveb5icu5fg4fp6ya6vdwmsry5wyje1r2xej8awuahj7f1jyeg7w8dvpxiq1uo9x105mkzsfhucrfdkaganog5sb6cafr1urzvmonut4k73ygpxexdvyuc0tw8uit5a2buvye0aq6ft8jtcw57j96szkqk4s4s50x9b3sg8xfqu7ulk7f76s1dq996kx30hiknoaryi72jv7v28chaczczt0udilpe49b6ny5jz7mmh6ywig7c53wn1vv72h0w6y11j2oou0sas3i9l4uco4wm" type="hidden"> \
                          <table border="0" cellpadding="0" cellspacing="10" width="500"> <tbody><tr> \
			                        <td width="190"><label>Your Email</label></td> \
			                        <td width="160"><input name="namedattr_grpattr_inviter_email" value="" class="input required-input" type="text"></td> \
			                        <td width="150">&nbsp;</td> \
		                        </tr> <tr> \
			                        <td><label>Your First Name</label></td> \
			                        <td><input name="namedattr_grpattr_inviter_firstname" value="" class="input" type="text"></td> \
			                      <td>&nbsp;</td> </tr> <tr> \
			                        <td><label>Your Last Name</label></td> \
			                        <td><input name="namedattr_grpattr_inviter_lastname" value="" class="input" type="text"></td> \
			                        <td>&nbsp;</td> </tr> <tr> \
			                        <td><label>Your Friends Email</label></td> \
			                        <td><input name="uemail" value="" class="input" type="text"></td> \
			                      <td>&nbsp;</td> </tr> <tr> \
			                        <td><label>Your Friends First Name</label></td> \
			                        <td><input name="user.FirstName" value="" class="input" type="text"></td> \
			                      <td>&nbsp;</td> </tr> <tr> \
			                        <td><label>Your Friends Last Name</label></td> \
			                        <td><input name="user.LastName" value="" class="input" type="text"></td> \
			                      <td>&nbsp;</td> </tr> <tr> \
			                      <td colspan="3"><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody><tr> \
					                     <td valign="top" width="25"><input name="permission" value="true" class="required-checkbox" type="checkbox"></td> \
					                     <td width="425"><label>Please tick this box to confirm you have your friend\'s permission to email them</label></td> \
				                    </tr> </tbody></table> </td> </tr> <tr> \
			                        <td colspan="3"><input src="http://newsletter.lyleandscott.com/public/img/submit.gif" class="recommend-submit" type="image"></td> \
		                        </tr> <tr> \
			                        <td colspan="2" align="right"><label><a href="http://www.lyleandscott.com/fcp/content/recommend-a-friend-tandcs/content" target="_blank" style="text-decoration:none;color:#8f8f8f;">terms and conditions</a></label></td> \
			                      <td>&nbsp;</td> </tr> <tr> \
			                        <td colspan="3"> \
                                  <div class="err err-namedattr_grpattr_inviter_email" style="color: #ed0717;font-family: Gill Sans, Arial, Helvetica, sans-serif;font-size: 11px;padding: 0;"><span> \
                                  Your Email is a mandatory field please fill in and resubmit</span></div> \
                                  <div class="err err-permission" style="color: #ed0717;font-family: Gill Sans, Arial, Helvetica, sans-serif;font-size: 11px;padding: 0;"><span> \
                                  You must tick the box to confirm you have your friend\'s permission to email them</span></div> \
                                  <div class="err err-ajax" style="color: #ed0717;font-family: Gill Sans, Arial, Helvetica, sans-serif;font-size: 11px;padding: 0;"><span> \
                                  There seemed to be a problem submitting the form, please try again and if the problem persists please <a href="http://www.lyleandscott.com/fcp/content/contact-us/content">contact us</a>.</span></div> \
                              </td> </tr> \
                         </tbody></table> \
                      </form>'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#confirmation_BWR button.right.yellow { float: none; display: block; margin: 0 auto; } \
#confirmation_BWR div.element input.text { background: #fff; width: 220px } \
#confirmation_BWR { background: #F4F4F4; padding: 10px; width: 420px; } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function will submit a form over AJAX
exp.func.submitFormAJAX = function( formSelector ) {
    var form = $( formSelector );
    var method = form.attr('method').toUpperCase();
    var action = form.attr('action');
    form.find('input').each
    console.log();
    
    $.ajax({
        'url': action,
        'type': method,
        'data': data,
        'success': function(response) {
            if( $(response).find('img[src="img/recommend.gif"]').length ) {
                
            }
            form.replace( exp.vars.recommendAnother );
        },
        'error': function(response) {
            console.log('submission error');
        }
    });
    
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    this.vars.form.find('legend').text( this.vars.formLegend ).after( '<p class="form-intro">'+this.vars.formText+'</p> ');
    this.vars.form.find('button').text( this.vars.formButton );
    
    $('.orderSummary').replaceWith( this.vars.recommendForm );

    $('.recommend-submit').bind('click',function(e){
        
        e.preventDefault();
        var form = $( '#recommendForm' );
        var validInput = false;
        var validCheckbox = false;
        
        $('.err-ajax').hide();
        
        if( form.find('.required-checkbox').is(':checked') === false ) {
            $('.err-permission').show();
        } else {
            $('.err-permission').hide();
            validCheckbox = true;
        }
        
        if( form.find('.required-input').attr('value') === '' ) {
            $('.err-namedattr_grpattr_inviter_email').show();
        } else {
            $('.err-namedattr_grpattr_inviter_email').hide();
            validInput = true;
        }
        
        if(validInput) {
            exp.func.submitFormAJAX( '#recommendForm' );
        } else {
            console.log('not valid');
            return false;
        }
    });
    
    var data;
    $( '#recommendForm input').each(function(){
        data = data+$(this).attr('name')+'='+$(this).val();
    });
    console.log(data);
    
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);