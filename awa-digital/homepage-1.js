//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

/*

"100% of the traffic should be included in the experiment.
This should be split so that 80% see the variation and 20% see the original"

"(Numbers as per above & wireframe)
1. To be emailed to you - file: AWA Digital logo.pdf
2. Please take from file AWA_Words_1500x500.jpg emailed to you
5(b). Image of Will to be taken from http://www.zoominfo.com/p/Will-Dymott/1488842853 (will we request better quality one once he approves the use of his image). Lyle & Scott logo as per http://www.awa-digital.com/results/
5(c). Image of Claudia to be taken from http://www.zoominfo.com/p/Claudia-Vernon/391225873 (will we request better quality one once she approves the use of her image). Richer Sounds logo as per http://www.awa-digital.com/results/
6(b). Images to be taken from http://www.awa-digital.com/about/#team and designed in a way to get as many people in the space as possible
8-10. Design to be similar to file design example.png emailed to you"

GA slot 2
Crazy Egg

"Engagement
Email sign up (GA event action ""SignUp"")
Contact us form submitted (GA event action ""ContactUsFormSubmit"")
Free resources downloaded (GA event action ""DownloadResources"")"
*/

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var exp = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Home page - dev 0.1');

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.main-wrap-blue-background-wrapper { width: 100%; background: #4378D3; margin-bottom: -19px; } \
.main-wrap { padding-top: 50px; background: #fff; } \
.ServiceTickHidden { position: absolute; top: 0; left: 0; } \
.header { z-index: 2; } \
.header-quote p { font-size: 25px; left: -13px; text-align: center; position: relative; top: 45px; } \
.header-quote span { color: #F8972B;} \
.search-box { position: relative; } \
.search-box p { font-size: 25px; } \
.video-section { margin-bottom: 0; } \
.video-l { height: 248px; } \
.video-l p { font-size: 28px; } \
.video-r { top: -30px; } \
.video-left-top, .video-left-bottom { text-align: center; } \
.video-left-top { width: 420px; margin: 5px auto 10px auto !important; padding-bottom: 10px !important; border-bottom: 2px solid #333; } \
.video-left-bottom { color: #4C9ED9; } \
.team-member-wrap { width: 459px; padding-top: 10px; } \
.team-member-wrap .caption { margin-bottom: 30px; } \
.team-member-wrap img { width: 100%; } \
.team-l, .team-r { width: 152px; } \
.team-l { margin-left: 37px; } \
.team-r { margin-right: 37px; } \
.methodology-wrap p { padding: 2px 10px 0px 10px; } \
.methodology-wrap:hover, .services-wrap:hover { background: #fff; } \
.quicklink { width: 313px; height: 349px; border-right: 5px solid #fff; position: relative; left: 5px; background: #2F64C0; color: #fff; } \
.quicklink p, .quicklink h2 a { color: #fff; } \
.quicklink:hover { background: #4378D3; } \
.quicklink img { float: right; } \
.quicklink p { margin-top: 0; } \
.quicklink .text-wrap { padding-top: 10px; padding-right: 10px; } \
.quicklink h2.h2-double-row { font-size: 20px; line-height: 19px; margin-bottom: -5px; } \
.mini-ajax-form { padding: 0 20px 20px 20px; overflow: auto; } \
.mini-ajax-form label { float: left; width: 70px; font-size: 15px; color: #fff; line-height: 23px; font-weight: normal; } \
.mini-ajax-form input[type="text"] { float: left; width: 193px; font-size: 14px; margin: 0 0 9px 0; padding: 4px; font-weight: normal; } \
.mini-ajax-form input[type="submit"] { margin-top: 8px; float: left; text-transform: uppercase; } \
.ajax-success, .ajax-error, .form-error, .ajax-loading { -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; font-size: 0.8em; \
float: right; line-height: 19px !important; width: 155px; text-align: left !important; padding: 0 5px; height: 39px !important; position: relative; top: 8px !important; margin: 0 !important; } \
.quicklink .ajax-loading { color: #fff !important; text-align: right !important; } \
.quicklink .ajax-success { background: #4a4 !important; } \
.quicklink .ajax-error, .form-error { background: #e44 !important; } \
.client-testimonial-strapline { display: none; } \
.client-comments { padding: 30px 0 0 0; margin-bottom: 30px; overflow: auto; width: 100%; margin-top: -80px; border-top: 1px solid #d4d9e2; cursor: pointer; } \
.client-comments p { padding-bottom: 0; } \
.client-comments--col-left,.client-comments--col-right { float: left; width: 480px; } \
.client-comments--client-images { width: 180px; float: left; position: relative; left: 15px; } \
.client-comments--client-text { width: 280px; padding-right: 20px; float: right; } \
.cta-button:hover { text-decoration: none; color: #333 !important; background-color: #E07C0E; } \
.cta-button { border-radius: 28px; border: 0px none; clear: left; float: left; text-transform: uppercase; padding: 10px 20px; margin: 10px 0 20px 0; background: none repeat scroll 0% 0% #F89C36; color: #333; font-size: 14px; font-weight: bold; letter-spacing: 1px; transition: all 0.5s ease 0s; } \
.client-testimonial-header p { width: 580px; padding: 0 5px; margin-left: auto; margin-right: auto; position: relative; top: -47px; background: #fff; \
color: #f8972b; font-size: 20px; text-align: center; } \
.client-testimonials p { background: none; width: auto; } \ ';

exp.emailValid = function(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
    
exp.formSubmit = function(e){
      e.preventDefault();
      var nameVal = $('#afullname').val();
      var emailVal = $('#aemail').val();
      var queryString = 'afullname='+nameVal+'&aemail='+emailVal+'&aemail-result=&submit1=Send+it+now';
        console.log(queryString);
      if ( nameVal === '' || emailVal === '' || !exp.emailValid(emailVal)) {
           $('.form-error').show(0);
      } else {
        $.ajax( {
            'url': '/helpful-cro-tips.php',
            'type': 'POST',
            'data': queryString,
            'success': function(response) {
                $('.ajax-loading').hide(0);
                var resp = $(response);
                console.log(response);
                var success = resp.find('.submit-success-message');
                if (success.length) {
                    $('.ajax-success').show(0);
                } else {
                    $('.ajax-error').show(0);
                }
            },
            'error': function(response) {
                $('.ajax-loading').hide(0);
                $('.ajax-error').show(0);
            },
            'beforeSend': function() {
                $('.ajax-success, .ajax-error, .form-error').hide(0);
                $('.ajax-loading').show(0);
            } 
        });
      }
    };
    
// Init function
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Some example DOM manipulation...
    
    $('.main-wrap').wrap('<div class="main-wrap-blue-background-wrapper" />');

    $('.header a img').attr('src','/images/header-logo--split-test.png');
    
    $('.header-quote').html('<p><img src="/images/split-test/strapline.png" /></p>');
    
    $('.video-l').html('<p class="video-left-top">AWA digital is a full service web optimisation agency</p><p class="video-left-bottom">Watch this 2 minute video to find out why we guarantee to uplift your web sales by 20% or more in 6 months</p>');

    $('.client-testimonial-heading p').html('Some of our B2C and B2B multichannel clients - click to see more');
    $('.client-testimonial-heading').addClass('client-testimonial-header').removeClass('client-testimonial-heading');
    
    $('.services-wrap').html(' \
				<div class="ms-header"> \
					<img src="/images/home-icon-services.png" alt="services"> \
					<h2><a href="/what-we-do.php">A full range of services</a></h2> \
				</div> \
				<h4>As a full service CRO agency we offer:</h4> \
				<ul> \
          <li>Complete web optimisation</li> \
          <li>International (multilingual) CRO</li> \
          <li>Analytics (GA, UA & paid-for)</li> \
          <li>Research and usability</li> \
          <li>Training & Mentoring</li> \
        </ul> \
				  <a href="/what-we-do.php" class="panel-link"></a></p>');
    
    $('.client-testimonial-strapline').html('');
    
    $('.methodology-wrap').html(' \
				<div class="ms-header"> \
					<img src="/images/home-icon-methodology.png" alt="methodology"> \
					<h2><a href="/about/#team">Meet the AWA Team</a></h2> \
				</div> \
						<div class="team-member-wrap"> \
							<img src="/images/team-optimisation-update-3.jpg" alt="AWA digital team"> \
							<div class="caption"> \
								<p>AWA Optimisation Team</p> \
							</div> \
							<div class="team-bottom-wrap clearfix"> \
								<div class="team-l"> \
									<img src="/images/team-creative.png" alt="AWA digital team"> \
									<div class="caption"> \
										<p>AWA Creative Team</p> \
									</div> \
								</div> \
								<div class="team-r"> \
									<img src="/images/team-technical.png" alt="AWA digital team"> \
									<div class="caption"> \
										<p>AWA Technical Team</p> \
									</div> \
								</div> \
							</div> \
						</div> \
				<a href="/how-we-do-it.php" class="panel-link"></a>');
    
    $('.client-testimonials').html(' \
        <div class="client-comments"> \
          <div class="client-comments--col-left"> \
              <div class="client-comments--client-images"> \
                  <img src="/images/split-test/client-richer-sounds-photo.jpg" alt="" width="160" height="172" /> \
                   <img src="/images/split-test/client-lyle-scott-logo.jpg" style="margin-left: 30px;" width="80" height="77" alt="" /> \
              </div> \
              <div class="client-comments--client-text"> \
                  <p style="font-size:18px"><em>With a 48% increase in just 6 months, Lyle &amp; Scott is delighted with &ldquo;the huge impact this has had on our business&rdquo;</em></p> \
                  <p><strong>Will Dymott,<br />Head of Ecommerce,<br />Lyle &amp; Scott</strong></p> \
              </div> \
          </div> \
          <div class="client-comments--col-right"> \
              <div class="client-comments--client-images"> \
                  <img src="/images/split-test/client-richer-sounds-photo.jpg" alt="" width="160" height="172" /> \
                  <img src="/images/split-test/client-richer-sounds-logo.jpg" alt="" /> \
              </div> \
              <div class="client-comments--client-text"> \
                  <p style="font-size:18px"><em>It was so successful it has paid<br />for itself many times over.</em></p> \
                  <p><strong>Claudia Vernon,<br />Marketing Director,<br />Richer Sounds</strong></p> \
              </div> \
          </div> \
        </div> \
    ');
    
    $('.further-links .panel-link').remove();
    
    $('.further-links .quicklink:eq(0)').html('<div class="text-wrap"> \
					<img src="/images/home-icon-resources.png" alt="free resources"> \
					<h2><a href="/conversion-rate-optimisation-tips/">Free resources</a></h2> \
					<p><strong>Get free access to a wealth<br />of conversion resources here</strong></p><p>From articles to white papers<br />- all targeted to e-commerce,<br />and all <strong>totally free!</strong>.</p> \
<a href="/conversion-rate-optimisation-tips/" style="position: absolute;bottom: 0;left:20px;" class="cta-button">Get your free resources</a></div>');
    
    $('.further-links .quicklink:eq(2)').html(' \
				<div class="text-wrap"> \
					<img src="/images/guarantee-grey-small.png" alt="free resources"> \
					<h2 class="h2-double-row"><a href="/guarantee.php">AWA Conversion System™</a></h2> \
					<p>Achieving exceptional results comes from our unique, systematic approach to Conversion Rate Optimisation – the AWA Conversion System™. No-one else uses this technique, but it has been proven to multiply the profits of most e-commerce businesses.</p> \
				  <a href="/guarantee.php" class="cta-button">Our 20% uplift Guarantee</a> \
       </div>');

    $('.further-links .quicklink:eq(1)').append('<div class="mini-ajax-form"><form id="mini-ajax-form"> \
<label for="afullname">Name</label> \
<input value="" name="afullname" id="afullname" type="text"> \
<label for="aemail">Email</label> \
<input value="" name="aemail" id="aemail" type="text"> \
<input style="display:none;" id="aemail-result" name="aemail-result"> \
<p style="display: none;" class="ajax-success">Thank you for signing up for Helpful CRO Tips.</p> \
<p style="display: none;" class="ajax-error">There was a problem, please try again, if the problem persists please <a href="/contact/">contact us</a>.</p> \
<p style="display: none;" class="form-error">You must enter both a valid email address and a name.</p> \
<p style="display: none;" class="ajax-loading">... sending ...</p> \
<input name="submit1" class="cro-tips-submit" id="submit" value="Send" type="submit"> \
</form></div>');
    
    $('.further-links .quicklink:eq(1) p:eq(0)').html('It\'s our most popular free resource.<br />11 little-known nuggets of knowledge to help optimise your site for instant extra web sales. Get yours now.');
    
    $('.cro-tips-submit').bind('click',exp.formSubmit);
    $('#mini-ajax-form').bind('submit',exp.formSubmit);
    
    $('.client-comments').bind('click',function(){ window.location = 'http://www.awa-digital.com/results/';})
    
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);