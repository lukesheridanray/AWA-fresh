//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true


/* _optimizely_evaluate=force */
    $('.video-section,.main-wrap').css({'visibility':'hidden'});
    $('.header').css({'visibility':'hidden'});

var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Home page - dev 1.6');

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

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

/* _optimizely_evaluate=safe */
        
    // append styles to head
    $('head').append('<style type="text/css"> \
body { position: relative; top: -12px; } \
.header a img { position: relative; top: -6px; } \
.search-box p { position: relative; top: -44px; } \
.search-box div,.search-box form { position: relative; top: 35px; } \
.main-wrap-blue-background-wrapper { width: 100%; background: #4378D3; margin-bottom: -19px; } \
.main-wrap { padding-top: 50px; background: #fff; } \
.ServiceTickHidden { position: absolute; top: 0; left: 0; } \
.header { z-index: 2; } \
.header-quote p { font-size: 25px; left: -13px; text-align: center; position: relative; top: 49px; } \
.header-quote span { color: #F8972B;} \
.search-box { position: relative; } \
.search-box p { font-size: 25px; } \
.video-section { margin-bottom: 0; } \
.video-l { height: 248px; } \
.video-l p { font-size: 28px; } \
.video-r { top: -30px; } \
.video-left-top, .video-left-bottom { text-align: center; } \
.video-left-top { width: 420px; margin: 15px auto 25px auto !important; padding-bottom: 25px !important; border-bottom: 2px solid #333; } \
.video-left-bottom { color: #4378D3; font-size: 18px !important; } \
.team-member-wrap { width: 459px; padding-top: 25px; } \
.team-member-wrap .caption { margin-bottom: 30px; } \
.team-member-wrap img { width: 100%; } \
.team-l, .team-r { width: 152px; } \
.team-l { margin-left: 37px; } \
.team-r { margin-right: 37px; } \
.methodology-wrap, .services-wrap { height: 410px !important; } \
.methodology-wrap p { padding: 2px 10px 0px 10px; } \
.methodology-wrap:hover, .services-wrap:hover { background: #fff; } \
.panel-link { width: 120px !important; color: #333; line-height: 27px; background-position: 92px 0 !important; background-repeat: no-repeat !important; font-size: 14px; } \
.panel-link:hover { background-position: 92px -29px !important; } \
.quicklink { width: 313px; height: 349px; border-right: 5px solid #fff; position: relative; left: 5px; background: #4378D3; color: #fff; } \
.quicklink p, .quicklink h2 a { color: #fff; } \
.quicklink:hover { background: #4378D3; } \
.quicklink img { float: right; } \
.quicklink p img { margin-top: 30px; } \
.quicklink p { margin-top: 0; } \
.quicklink .text-wrap { padding-top: 10px; padding-right: 10px; } \
.quicklink h2.h2-double-row { font-size: 20px; line-height: 19px; margin-bottom: -5px; } \
.mini-ajax-form { padding: 0 20px 20px 20px; overflow: auto; } \
.mini-ajax-form label { float: left; width: 70px; font-size: 15px; color: #fff; line-height: 23px; font-weight: normal; } \
.mini-ajax-form input[type="text"] { float: left; width: 193px; font-size: 14px; margin: 0 0 9px 0; padding: 4px; font-weight: normal; } \
.mini-ajax-form input[type="submit"] { width: 274px; margin-top: 8px; float: left; } \
.ajax-success, .ajax-error, .form-error, .ajax-loading { -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; font-size: 0.8em; \
float: right; line-height: 19px !important; width: 264px; text-align: center !important; padding: 0 5px; height: 39px !important; position: absolute; left: 20px !important; bottom: -25px !important; margin: 0 !important; } \
.quicklink .ajax-loading { color: #fff !important; text-align: right !important; } \
.quicklink .ajax-success { background: #4a4 !important; } \
.quicklink .ajax-error, .form-error { background: #e44 !important; } \
.client-testimonial-strapline { display: none; } \
.client-comments { padding: 0; margin-bottom: 30px; overflow: auto; width: 100%; margin-top: -80px; border-top: 0; cursor: pointer; } \
.client-comments p { padding-bottom: 0; } \
.client-comments--col-left,.client-comments--col-right { background: #F1F5FD; float: left; width: 460px; overflow: hidden; margin-left: 13px; position: relative; } \
.client-comments--col-left:hover,.client-comments--col-right:hover { background: #E2E8F6; } \
.client-comments--col-right { float: right; margin-left: 0; margin-right: 13px; } \
.client-comments--client-images { width: 160px; float: left; margin: 10px 0 0 10px; } \
.client-comments--client-text { width: 260px; padding-top: 35px; padding-right: 20px; float: right; } \
.client-comments--client-text a { color: #666; } \
.client-comments--client-text a:hover,.client-comments--col-left:hover a,.client-comments--col-right:hover a { color: #F8982A; } \
.client-comments--client-credit { overflow: auto; padding-top: 5px; padding-bottom: 10px; margin: 5px 0 0 0; clear:both; } \
.client-comments--client-credit p { float: left; padding: 0 0 0 10px; } \
.client-comments--client-credit img { position: absolute; bottom: 17px; right: 10px; } \
.cta-button:hover { text-decoration: none; color: #333 !important; background-color: #E07C0E; } \
.cta-button { width: 253px; border-radius: 28px; border: 0px none; clear: left; float: left; text-align: center; padding: 10px; margin: 10px 0 20px 0; background: none repeat scroll 0% 0% #F89C36; color: #333; font-size: 14px; font-weight: bold; letter-spacing: 1px; transition: all 0.5s ease 0s; } \
.client-testimonial-header p { width: 580px; padding: 0 5px; margin-left: auto; margin-right: auto; position: relative; top: -47px; background: transparent; \
color: #f8972b; font-size: 20px; text-align: center; } \
.client-testimonials p { background: none; width: auto; } </style>');


    // un-hide the page
    $('.video-section,.main-wrap').css({'visibility':'visible'});
    $('.header').css({'visibility':'visible'});

    // Some example DOM manipulation...
    
    $('.main-wrap').wrap('<div class="main-wrap-blue-background-wrapper" />');

    $('.header a img').attr('src','/images/header-logo--split-test.png');
    
    $('.header-quote').html('<p><img src="/images/split-test/strapline.png" /></p>');
    
    $('.video-l').html('<p class="video-left-top">AWA digital is a full service<br />web optimisation agency</p><p class="video-left-bottom">Find out how we\'ll uplift your sales by 20%<br />in just six months. Guaranteed.<br />Watch this 2 minute video now >></p>');

    $('.client-testimonial-heading p').html('&nbsp;');
    $('.client-testimonial-heading').addClass('client-testimonial-header').removeClass('client-testimonial-heading');
    
    $('.services-wrap').html(' \
				<div class="ms-header"> \
					<img src="/images/home-icon-services.png" alt="services"> \
          <h2><a href="/what-we-do.php">A full range of services</a></h2> \
				</div> \
				<h4>Let us help you with:</h4> \
				<ul> \
          <li>Website optimisation, including mobile</li> \
          <li>Multi-lingual CRO</li> \
          <li>Google & Universal Analytics and paid-for tools</li> \
          <li>Usability and visitor experience testing</li> \
          <li>Customer research and insight</li> \
          <li>Training &amp; mentoring</li> \
        </ul> \
				  <a href="/what-we-do.php" class="panel-link">Find out more</a></p>');
    
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
				<a href="/about/#team" class="panel-link">Find out more</a>');
    
    $('.client-testimonials').html(' \
        <div class="client-comments"> \
          <div class="client-comments--col-left"> \
              <div class="client-comments--client-images"> \
                  <img src="/images/split-test/client-lyle-scott-photo.png" alt="" width="160" height="160" /> \
              </div> \
              <div class="client-comments--client-text"> \
                  <p style="font-size:17px">A 48% increase in just 6 months, a &ldquo;huge impact on our business&rdquo;</p> \
                  <p><a href="/results/">Read more case studies &gt;</a></p> \
              </div> \
              <div class="client-comments--client-credit"> \
                  <p>Will Dymott,<br />Head of Ecommerce, Lyle &amp; Scott</p> \
                   <img src="/images/split-test/client-lyle-scott-logo.png" alt="" width="84" height="72" /> \
              </div> \
          </div> \
          <div class="client-comments--col-right"> \
              <div class="client-comments--client-images"> \
                  <img src="/images/split-test/client-richer-sounds-photo.png" alt="" width="160" height="160" /> \
              </div> \
              <div class="client-comments--client-text"> \
                  <p style="font-size:17px">&ldquo;It was so successful it has paid<br />for itself many times over.&rdquo;</p> \
                  <p><a href="/results/">Read more testimonials &gt;</a></p> \
              </div> \
              <div class="client-comments--client-credit"> \
                  <p>Claudia Vernon,<br />Marketing Director, Richer Sounds</p> \
                  <img src="/images/split-test/client-richer-sounds-logo.png" alt="" width="117" height="19" /> \
              </div> \
          </div> \
        </div> \
    ');
    
    $('.further-links .panel-link').remove();
    
    $('.further-links .quicklink:eq(0)').html('<div class="text-wrap"> \
					<img src="/images/home-icon-resources.png" alt="free resources"> \
					<h2><a href="/conversion-rate-optimisation-tips/">Free resources</a></h2> \
					<p><img src="/blog/wp-content/plugins/pippity/themes/awa/images/document-stack.png" alt="" />Valuable e-books and guides about Conversion Rate Optimisation, AB Split Testing and more - ready to download now. </p> \
<a href="/conversion-rate-optimisation-tips/" style="position: absolute; bottom: 0; left:20px;" class="cta-button">Get Your Free Resources</a></div>');
    
    $('.further-links .quicklink:eq(2)').html(' \
				<div class="text-wrap"> \
					<img src="/images/guarantee-grey-small.png" alt="free resources"> \
					<h2 class="___h2-double-row"><a href="/guarantee.php">Guaranteed Results</a></h2> \
					<p>When you ask us to carry out your web optimisation, we follow a 5-step process. This systematic approach uses research, analysis, creativity and testing and is proven to get results. That\'s why we guarantee you\'ll see a sales uplift of 20% or more within 6 months.</p> \
				  <a href="/guarantee.php" class="cta-button">Find out more</a> \
       </div>');

    $('.further-links .quicklink:eq(1)').append('<div class="mini-ajax-form"><form id="mini-ajax-form"> \
<label for="afullname">Name</label> \
<input value="" name="afullname" id="afullname" type="text"> \
<label for="aemail">Email</label> \
<input value="" name="aemail" id="aemail" type="text"> \
<input style="display:none;" id="aemail-result" name="aemail-result"> \
<p style="display: none;" class="ajax-success">Thank you for signing up for<br />Helpful CRO Tips.</p> \
<p style="display: none;" class="ajax-error">There was a problem, please try again, if the problem persists please <a href="/contact/">contact us</a>.</p> \
<p style="display: none;" class="form-error">You must enter both a valid email<br />address and a name.</p> \
<p style="display: none;" class="ajax-loading">... sending ...</p> \
<input name="submit1" class="cro-tips-submit" id="submit" value="Send Me Now" type="submit"> \
</form></div>');
    
    $('.further-links .quicklink:eq(1) p:eq(0)').html('It\'s our most popular free resource.<br />11 little-known nuggets of knowledge to help optimise your site for instant extra web sales. Get yours now.');
    
    $('.cro-tips-submit').bind('click',exp.formSubmit);
    $('#mini-ajax-form').bind('submit',exp.formSubmit);
    
    $('.client-comments').bind('click',function(e){ e.preventDefault(); window.location = 'http://www.awa-digital.com/results/'; });