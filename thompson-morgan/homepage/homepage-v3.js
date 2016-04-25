//function() {
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
	var exp = {
	};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Homepage - v3');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	// exp.condition = $("#268917436");

	// // Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('PLP Condensed failed a condition');
	// }
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		firstRow: 	"<div id='AWA-first-box'>\
						<img src='http://www.thompson-morgan.com/static-images/tandm/awa-homepage-test/best-price-promise.jpg'>\
					</div>\
					<div id='AWA-plantfinder'>\
							<h1>Find your perfect plant</h1>\
							<form id='AWA-plantfinder-form'>\
								<select id='AWA-plant-type' class='AWA-pf-option'>\
									<option value='' disabled selected hidden>Flowers, Veg, or Fruit</option>\
									<option value='plant_type:flowers'>Flowers</option>\
									<option value='plant_type:vegetables'>Vegetables</option>\
									<option value='plant_type:fruit'>Fruit</option>\
								</select>\
								<select id='AWA-hardiness' class='AWA-pf-option'>\
									<option value='' disabled selected hidden>Hardiness</option>\
									<option value>No Preference</option>\
									<option value='halfhardy'>Half-hardy</option>\
									<option value='hardy'>Hardy</option>\
									<option value='tender'>Tender</option>\
								</select>\
								<select id='AWA-position' class='AWA-pf-option'>\
									<option value='' disabled selected hidden>Sun Exposure</option>\
									<option value>No Preference</option>\
									<option value='dappledshade'>Dappled Shade</option>\
									<option value='fullsun'>Full Sun</option>\
									<option value='shade'>Shade</option>\
									<option value='sunorsemishade'>Sun Or Semi Shade</option>\
								</select>\
								<select id='AWA-sowing-month' class='AWA-pf-option'>\
									<option value='' disabled selected hidden>Sowing Month</option>\
									<option value>No Preference</option>\
									<option value='[1,1]'>January</option>\
									<option value='[2,2]'>February</option>\
									<option value='[3,3]'>March</option>\
									<option value='[4,4]'>April</option>\
									<option value='[5,5]'>May</option>\
									<option value='[6,6]'>Jun</option>\
									<option value='[7,7]'>July</option>\
									<option value='[8,8]'>August</option>\
									<option value='[9,9]'>September</option>\
									<option value='[10,10]'>October</option>\
									<option value='[11,11]'>November</option>\
									<option value='[12,12]'>December</option>\
								</select>\
								<a id='AWA-more' href='http://search.thompson-morgan.com/gardenplantfinder'>\
									<img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/08a35a9afa1db35c7b0ae93995fc76d6_47_47.png'>\
									<p id='AWA-show-more-options'>\
										Show more search options\
									</p>\
								</a>\
								<a href='#' id='AWA-search-plants'>Search Plants</a>\
							</form>\
						</div>",
		secondRow: '<div class="grid_12 alpha omega">\
						<a href="http://www.thompson-morgan.com/special-offers">\
                		<img src="/static-images/tandm/awa-homepage-test/best-deals-banner.jpg" alt="Get the best deals for your garden" height="30px" width="940px"></a>\
					</div>\
					<div class="grid_6 alpha">\
						<div class="imgWithTxt">\
							<a href="http://www.thompson-morgan.com/value-seeds-offer">\
								<img class="highlight" src="/static-images/tandm/awa-homepage-test/seed-offer.jpg" alt="Limited seeds offer" height="97px" width="460px">\
							</a>\
						</div>\
						<div class="imgWithTxt">\
							<a href="http://www.thompson-morgan.com/garden-ready-plants-summer">\
							<img class="highlight" src="/static-images/tandm/awa-homepage-test/garden-ready-offer.jpg" alt="Garden ready plants only £14.99" height="97px" width="460px">\
							</a>\
						</div>\
						<div class="imgWithTxt">\
								<a href="http://www.thompson-morgan.com/instant-gardening-range">\
								<img class="highlight" src="/static-images/tandm/awa-homepage-test/instant-gardening.jpg" alt="Instant gardening range" height="97px" width="460px">\
								</a>\
						</div>\
					</div>\
					<div class="grid_6 omega">\
						<div class="imgWithTxt">\
							<a href="http://www.thompson-morgan.com/flower-bulb-sale">\
								<img class="highlight" src="/static-images/tandm/awa-homepage-test/best-selling-offers-2.jpg" alt="This week\'s bestselling offers" height="300px" width="460px">\
							</a>\
						</div>\
					</div>',
		thirdRow: 	"<div id='AWA-third-row'>\
						<div id='AWA-newsletter'>\
							<h3>Be the first to know about special offers</h3>\
							<form action='/mailinglist' name='small_mailinglist' method='post' class='form-mailing-list-small'>\
								<div id='AWA-n-center'>\
									<a id='AWA-newsletter-button' href='https://www.thompson-morgan.com/mailinglist'>Sign up to our newsletters</a>\
								</div>\
							</form>\
							<p>We will never pass your email address to any third parties</p>\
						</div>\
						<div id='AWA-fb'>\
							<span id='AWA-fb-container'></span>\
							<div id='AWA-fb-image'>\
								<img src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/635c9677536bda910fedac8ae7f63907_215_49.jpeg'>\
							</div>\
						</div>\
						<div id='AWA-cat-promo'>\
							<a href='http://www.thompson-morgan.com/ecatalogue'>\
								<img class='highlight' src='//dd6zx4ibq538k.cloudfront.net/static/images/2841/304250e78bfd736080874092e7ac76d8_300_196.jpeg' alt='Get your free colour catalogue or view online now'>\
							</a>\
							<p id='AWA-cat-links'>\
								<span id='AWA-cat-link1'>Get your <a href='https://www.thompson-morgan.com/catalogue'>free colour catalogue</a></span>\
								<span id='AWA-cat-link2'>or <a href='http://www.thompson-morgan.com/ecatalogue'>view online</a> now</span>\
							</p>\
						</div>\
					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#AWA-first-box {\
			width: 623px;\
			float: left;\
		}\
		#AWA-plantfinder {\
			float: right;\
			background-color: #00552C;\
			width: 301px;\
			margin-bottom: 20px;\
		}\
		#AWA-plantfinder h1 {\
			text-align: center;\
			margin: 28px 0;\
			color: white !important;\
			font-size: 23px;\
			font-weight: bold;\
		}\
		#AWA-plantfinder select {\
			display: block;\
			width: 200px;\
			margin: 0 auto;\
			margin-bottom: 3px;\
			height: 29px;\
			font-size: 14px;\
		}\
		#AWA-search-plants {\
			display: block;\
			width: 197px;\
			background-color: #EAEAEA;\
			margin: 8px auto 15px auto;\
			border: solid 1px black;\
			text-align: center;\
			padding: 8px 0;\
			font-size: 15px;\
		}\
		#AWA-search-plants:hover {\
			background-color: #DCDADA;\
		}\
		#AWA-more {\
			width: 200px;\
			margin: 0 auto;\
			overflow: auto;\
			display: block;\
			margin-top: 15px;\
		}\
		#AWA-more p {\
			color: white !important;\
		}\
		#AWA-more img {\
			width: 15px;\
		    margin-top: 7px;\
		    margin-left: 4px;\
		}\
		#AWA-show-more-options {\
			width: 175px;\
			font-size: 14px;\
			margin-top: 0px;\
			float: right;\
		}\
		#AWA-newsletter {\
			width: 300px;\
			border: solid 1px #BFB6AD;\
			float: left;\
			margin-top: 20px;\
			background-color: #ADC114;\
			color: white !important;\
		}\
		#AWA-newsletter h3 {\
			font-size: 16px;\
			margin: 20px 0;\
			text-align: center;\
			color: white !important;\
			font-weight: normal;\
		}\
		#AWA-newsletter label {\
			font-size: 14px;\
		}\
		#AWA-newsletter .text {\
			width: 167px;\
			height: 17px;\
			font-size: 14px;\
		}\
		#AWA-n-center {\
			margin-left: 10px;\
		}\
		#AWA-newsletter input[type=\'submit\'] {\
			background-color: #B60718;\
			float: right;\
			margin-right: 63px;\
			width: 80px;\
			color: white;\
			border: 0;\
			padding: 5px 0;\
			margin-top: 15px;\
		}\
		#AWA-newsletter p {\
			clear: both;\
			padding: 25px 10px 20px 10px;\
			color: white !important;\
		}\
		#AWA-fb {\
		    margin-top: 21px;\
		    margin-left: 22px;\
		    display: block;\
		    float: left;\
		    width: 302px;\
		}\
		#AWA-cat-promo {\
			float: right;\
			margin-top: 7px;\
		}\
		#AWA-cat-link1, #AWA-cat-link2 {\
			display: block;\
			text-align: center;\
		}\
		#AWA-cat-link1 a:hover, #AWA-cat-link2 a:hover {\
			text-decoration: none;\
		}\
		#AWA-cat-link1 a {\
			font-weight: bold;\
			text-decoration: underline;\
			color: #00552B !important;\
		}\
		#AWA-cat-link2 a {\
			font-weight: bold;\
			text-decoration: underline;\
			color: #B60718 !important;\
		}\
		#AWA-fb-image {\
			text-align: center;\
			margin-top: 10px;\
		}\
		#AWA-third-row {\
			overflow: auto;\
			margin-bottom: 28px;\
		}\
		#AWA-newsletter-button {\
		    display: block;\
		    background-color: #B60718;\
		    width: 59%;\
		    margin: 0 auto;\
		    text-align: center;\
		    color: white !important;\
		    font-size: 18px;\
		    padding: 10px 0;\
		    line-height: 23px;\
		}\
	';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Prepend existing plantfinder iframe to page
		//$("#598452847").prepend("<iframe id='TM-pf' src='http://search.thompson-morgan.com/search?w=*&ts=plantfinderiframe&af=' width='982px' height='607'></iframe>");

		// Prepend plantfinder interface
		$("#598452847").prepend(exp.vars.firstRow);


		$("#AWA-search-plants").click(function(e) {
			e.preventDefault();

			var plantType = $("#AWA-plant-type").val();
			var hardiness = $("#AWA-hardiness").val();
			var position = $("#AWA-position").val();
			var sowingMonth = $("#AWA-sowing-month").val();

			var destination = "http://search.thompson-morgan.com/search?w=*&ts=plantfinder&af=tab:products";
			if (plantType) {
				destination += "%20" + plantType
			}
			if (position) {
				destination += "%20position:" + position;
			}
			if (hardiness) {
				destination += "%20hardiness:" + hardiness;
			}
			if (sowingMonth) {
				destination += "%20sowingmonth:" + sowingMonth;
			}

			exp.log(destination);
			window.location.href = destination;
		});


		// Add second row
		$('#AWA-plantfinder').after(exp.vars.secondRow);


		// Hide unneeded content
		$(".container_12.clearfix").hide();


		// Insert thrid row after carousel
		$("#1163942665").after(exp.vars.thirdRow);

		// Hide leftover content
		$("#1186688809").hide();

		// Insert Facebook plugin
		$("body").append('<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>');

		$("#AWA-fb-container").html('<div class="fb-page" data-href="https://www.facebook.com/thompsonmorgan/" data-width="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/thompsonmorgan/"><a href="https://www.facebook.com/thompsonmorgan/">Thompson &amp; Morgan UK</a></blockquote></div></div>');

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

