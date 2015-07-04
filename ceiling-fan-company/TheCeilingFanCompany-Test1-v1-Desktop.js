//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
'use strict';
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

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
	exp.log('Test1 v1 - Desktop');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#Menu');

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Test1 failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		footer: "<ul id='AWA-footer-c1'>\
					<li><a href='http://www.theceilingfancompany.co.uk/about-fantasia-fans'>About Us</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/about-fantasia-fans'>About Fantasia Ceiling Fans</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-information'>Ceiling Fan Information</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/faqs'>Ceiling Fan FAQs</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/8-reasons-to-buy'>8 Reasons To Buy</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/specifications'>Ceiling Fan Specifications</a></li>\
				</ul>\
				<ul id='AWA-footer-c2'>\
					<li><a href='http://www.theceilingfancompany.co.uk/wiring'>Wiring</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/the-definitive-guide-to-using-ceiling-fans-in-winter'>Using Ceiling Fans in Winter</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/delivery'>Free Delivery Information</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/contact-us'>Contact Us</a></li>\
					<li><a href='http://www.theceilingfancompany.co.uk/terms-conditions'>Terms &amp; Conditions</a></li>\
				</ul>\
				<ul id='AWA-footer-c3'>\
					<li><span class='AWA-bold'>TheCeilingFanCompany.co.uk</span></li>\
					<li>Wickham Stores</li>\
					<li>High Street</li>\
					<li>Limpsfield</li>\
					<li style='margin-bottom: 10px;'>Surrey RH8 0DR</li>\
					<li style='margin-bottom: 10px;'><span class='AWA-bold'>Freephone:</span> 0808 168 4535M</li>\
					<li><span class='AWA-bold'>Email: </span><a href='info@theceilingfancompany.co.uk'>info@theceilingfancompany.co.uk</a></li>\
				</ul>",
		logo: "<div class='AWA-logo-side'>\
				<img src='//cdn.optimizely.com/img/174847139/84c665abbaf74e499fd3b66dc15d7918.png'>\
				<div class='value-prop'>\
					<p>Fantasia Fans Official Retailer. You can't buy cheaper - guaranteed.</p>\
					<img id='fantasia-logo' src='//cdn.optimizely.com/img/174847139/15dea4ea84384fe0ba7d3b23b0dd8049.png'>\
				</div>",
		phone: "<div class='AWA-phone-side'>\
					<img src='//cdn.optimizely.com/img/174847139/7f602ac73648438481f163369ac9ea37.png'>\
				</div>",
		popularSearches: "<div style='clear: both'></div><div class='AWA-searches'>\
							<span id='AWA-popular-searches-text'>Popular searches:</span>\
							<a href='http://www.theceilingfancompany.co.uk/search.php?search_query=range+1'> range 1</a>,\
							<a href='http://www.theceilingfancompany.co.uk/search.php?search_query=range+2'> range 2</a>,\
							<a href='http://www.theceilingfancompany.co.uk/search.php?search_query=range+3'> range 3</a>,\
							<a href='http://www.theceilingfancompany.co.uk/search.php?search_query=range+4'> range 4</a>,\
							<a href='http://www.theceilingfancompany.co.uk/search.php?search_query=range+5'> range 5</a>\
						</div>",
		nav: "<nav id='AWA-primary_nav_wrap'>\
				<ul>\
				  <li><a id='AWA-home' href='http://www.theceilingfancompany.co.uk/'>Home</a></li>\
				  <li><a id='AWA-fwl' href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'>Fans with lights</a></li>\
				  <li><a id='AWA-fwol' href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'>Fans without lights</a></li>\
				  <li><a id='AWA-tfr' href='http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/'>The Fantasia Range</a>\
				    <ul id='fantasia-range'>\
				      <li><a href='http://www.theceilingfancompany.co.uk/retro-desk-fans/'>Pedestal Fans & Retro Desk Fans</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/elite-range-of-ceiling-fans/'>Fantasia Elite Range of Ceiling Fans</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/commercial-ceiling-fans/'>Commercial Ceiling Fans</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/'>Fantasia Ceiling Fan <br>Range</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/fantasia-viper-fans/'>Fantasia Viper Ceiling <br>Fans</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/remote-control-ceiling-fans/'>Remote control fans</a></li>\
				    </ul>\
				  </li>\
				  <li><a id='AWA-esf' href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'>Energy Saving Fans<a>\
				  <li><a id='AWA-fbc' href='http://www.theceilingfancompany.co.uk/brands/'>Fans by colour</a>\
				    <ul>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/White.html'>White</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Stainless-Steel.html'>Stainless Steel</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Brushed-Nickel.html'>Brushed Nickel</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Polished-Brass.html'>Polished Brass</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Multiple-Colours.html'>Multiple Colours</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Black-%7B47%7D-Pewter.html'>Black / Pewter</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Chrome.html'>Chrome</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Chocolate-Brown.html'>Chocolate Brown</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Antique-Brass.html'>Antique Brass</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Brushed-Aluminium.html'>Brushed Aluminium</a></li>\
				    </ul>\
				  </li>\
				  <li><a  id='AWA-fa' href='http://www.theceilingfancompany.co.uk/conversion-kits/'>Fan Accessories</a>\
				    <ul>\
				      <li><a href='http://www.theceilingfancompany.co.uk/conversion-kits/'>Ceiling Fan Accessories</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/drop-rods/'>Drop Rods</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/conversion-kits/'>Conversion Kits</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/other-accessories/'>Other Accessories</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-lighting/'>Ceiling Fan Lighting</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-controllers/'>Ceiling Fan controllers</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/led-bulbs/'>LED Bulbs</a></li>\
				    </ul>\
				  </li>\
				</ul>\
			</nav>",
		topBoxes: 	"<div class='AWA-sub-menu'>\
						<div class='AWA-top-box'>\
							FREE next day UK Delivery<br> <span class='AWA-small'>With 1 hour deilvery slot for all orders</span>\
						</div>\
						<div class='AWA-top-box'>\
							Extremely low running costs for all fans\
						</div>\
						<div class='AWA-top-box'>\
							We price match ALL products\
						</div>\
					</div>",
		tagLineBox: "<div style='clear: both'></div><div class='AWA-tagline-box'>\
						<h2>The Ceiling Fan Company - Exclusive supplies of Fantasia Fans and Accessories</h2>\
						<h2>Choose your fan</h2>\
						<div class='shh'>\
							Shhhhh! All our fans are quiet enough for a bedroom, or as Mr. X from X says, \"Beautifully quiet.\" Our whisper-quiet fans are guaranteed for up to 15 years.\
						</div>\
					</div>",
		homeCategories: "<div class='AWA-home-categories'>\
							<div class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'>Ceiling Fans with lights - See all</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/68/images/297/amalfi_ss__43453__75527__47187.1405450691.320.320.jpg?c=2g'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-cfwl' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'>Ceiling Fans without lights - See all</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/177/images/560/Belaire_WH__51981.1405451066.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-wcf' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/brands/White.html'>White Ceiling Fans - See all</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/brands/White.html'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/195/images/606/commercial_fan__45129__51479__17582.1405450776.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-esf' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'>Energy Saving Fans - See all</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/201/images/618/Delta_BN_Aries_Drop_Light_off__14924.1405451268.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-acc' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/conversion-kits/'>Accessories - See all</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/conversion-kits/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/83/images/312/ckbig__18350__79472__04879.1405450789.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-fullrange' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/content/pdf/Fantasia2014.pdf'>Download our full range</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/content/pdf/Fantasia2014.pdf'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/product_images/uploaded_images/download_brochure.jpg'></a>\
								</div>\
							</div>\
						</div>",
			whyUs: 	"<div style='clear: both'></div><div class='AWA-why-us'>\
						<h2>Why Fantasia Fans from the Ceiling Fan Company?</h2>\
						<p>\
							We have been supplying Fantasia Fans for over 15 years so we know an awful lot about the product! Our knowledgable staff are available on our Freephone helpline or via email to answer any questions you might have prior to purchasing, during and after installation. We can help you decide which ceiling fan is best for your particular circumstances as well as advise on suitable accessories such as control options and drop rods.\
						</p>\
						<p>\
							We offer FREE next working day deilvery on all the models available for purchase on our website. Any items that are out of stock are clearly marked as such so you have all the information before ordering.\
						</p>\
						<p>\
							We continually monitor pricing across the web and guarantee to price match in the unlikely event that you find the same product available cheaper elsewhere (it hasn't happened yet but the price match promise is still there just in case!).\
						<p>\
						<p>\
							Perhaps most importantly, for an online retailer, our job doesn't stop once we have sent your order out to you. We want to be happy with your purchase so our customer service team are always at the end of the (free)phone to offer you the best possible aftersales service, should you require it. If all that fails, we still offer 14 day no questions asked money back guarantee, so you really do have complete piece of mind when shopping with us.\
						<p>\
						<p>\
							We believe in stocking only the highest quality ceiling fans and that is why we only supply Fantasia Fans. <a href='http://www.fantasiaceilingfans.com' target='_blank'>www.fantasiaceilingfans.com</a>\
						<p>\
					</div>",
			icons: "<div class='AWA-icons'>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Built to last\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/db5ca3b596cf48edb6ae6c8a23a6d830.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/4ef682f4d44f425d827218438c494baf.png'>\
								<span class='AWA-icon-title-text'>10 Year Warranty</span>\
								<p>As a sign of our confidence in our fans, we back every Fantasia motor with a 10 year warranty. If you have any motor problems within the 10 year period then we'll repair or replace it free of charge.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Quiet motor & air circulation\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/8d7aa26cc05540edadec16479d8f0b78.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/e7dfd12f81604f1c92eac8bf18e9b296.png'>\
								<span class='AWA-icon-title-text'>Quiet, efficient, low maintenance</span>\
								<p>Fantasia fans combine larger motors with a steeper blade pitch to maximise the circulation of air whilst ensuring whisper quiet, economical and well balanced operation.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Save 10% off WINTER fuel bills\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/d7cc30834ef649f6be2bd338d1abd382.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/98c640a9a12746d1afea103714e163b0.png'>\
								<span class='AWA-icon-title-text'>Air Movement</span>\
								<p>All Fantasia fans have a built in reverse function so they can be operated in summer for a cooling effect and then reverse in Winter to re-circulate warm air trapped at ceiling level, eliminating cold spots and draughts.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Remote control compatibility\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/4174c300e0444e619507c14d27676255.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/76009765163f4a6086dee734ece295d3.png'>\
								<span class='AWA-icon-title-text'>Control Options</span>\
								<p>A number of fan models are operated by remote control as standard but those with pull cords can stil be fitted with a remote controller as an added option. We also supply single wall controls to operate fan speeds and double wall controls to operate both the speeds and the fan light.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Use existing light fixtures\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/240e5d297aed4ea092682cf6b239e5d5.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/f49ca975f69c4f0b8b32333de6794278.png'>\
								<span class='AWA-icon-title-text'>Lighting Options</span>\
								<p>Many fan models come complete with lights buy almost all are light adaptable giving a wide variety of options to suit individual tastes. We offer a selection of halogen and traditional lighting. Our Fan Lighting range starts on Page 35.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Match your fan to your decor\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/448f11f1662043259d62d5670517e4fa.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/48a19a974045466dbd84d0c97930c88c.png'>\
								<span class='AWA-icon-title-text'>Blade Options</span>\
								<p>Several fans are available in a choice of two sizes. Blade colours are interchangeable within each range and many models have a variety of additional blade options, full details of which can be found on Page 45.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								A fan for every room\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/e7f9b25d69a7400c8db70d835b9512d4.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/c86496226ef245be8216353a241864f8.png'>\
								<span class='AWA-icon-title-text'>Versatile Installation</span>\
								<p>Our range consists of drop mount, dual mount and flush mount fans to fit varying ceiling heights, with a selection of longer drop rods. Conversion kits and special fixings for conservatories are also available. Whatever your installation requirements there will be a Fantasia fan to suit your needs.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Free phone support\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/5497d5cbbea44d54ba1c56e166c529a0.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/81349cb5fee24d5c88e662a6c819832c.png'>\
								<span class='AWA-icon-title-text'>Customer Service</span>\
								<p>At Fantasia we are confident that our customer service is second to none. Our friendly, helpful team is available to help with any questions you may have. Fantasia are past winners of the South East Parcelforce Worldwide Small Business Awards and have held Investors in People status since 2005.\
								</p>\
							</div>\
						</div>\
					</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-bold {\
		font-weight: bold;\
	}\
	#Footer {\
		border: solid 1px black;\
		font-size: 13px;\
		height: 150px;\
		padding-top: 0;\
	}\
	#Footer li a {\
		border-left: 0;\
		padding-left: 0;\
		text-decoration: underline;\
	}\
	#Footer li {\
		float: none;\
	}\
	#Footer ul {\
		padding-top: 15px;\
		margin: 0;\
	}\
	#Footer #AWA-footer-c1 {\
		padding-left: 15px;\
		border: solid 0px blue;\
  		text-align: left;\
  		float: left;\
  		width: 236px;\
	}\
	#Footer #AWA-footer-c2 {\
		border: solid 0px red;\
  		text-align: left;\
  		float: left;\
  		width: 301px;\
	}\
	#Footer #AWA-footer-c3 {\
		font-size: 12px;\
		border: solid 0px green;\
  		text-align: left;\
  		float: left;\
  		width: 270px;\
	}\
	#SearchForm {\
		padding: 0;\
		float: right;\
		font-size: 1em;\
		margin: 0;\
		border: solid 0px blue;\
	}\
	#SearchForm input.Textbox {\
		width: 353px;\
	}\
	#TopMenu {\
		clear: both;\
		height: 25px;\
		padding: 0;\
		border: solid 0px red;\
  		float: right;\
  		margin-top: 10px;\
	}\
	#TopMenu li a {\
		margin: 0;\
		background: none;\
	}\
	.AWA-logo-side {\
		border: solid 0px red;\
		width: 535px;\
		float: left;\
	}\
	.AWA-logo-side .value-prop {\
		margin-top: 10px;\
	}\
	.AWA-logo-side p {\
		border: solid 0px blue;\
	    width: 329px;\
  		font-size: 12px;\
  		float: left;\
	}\
	.AWA-logo-side #fantasia-logo {\
		.float: right;\
	}\
	.AWA-phone-side {\
		border: solid 0px red;\
		width: 366px;\
		float: right;\
	}\
	.AWA-searches {\
		font-size: 12px;\
		margin-top: 5px;\
	}\
	#AWA-popular-searches-text {\
		font-weight: bold;\
	}\
	.AWA-searches a {\
		color: #313EC7;\
		text-decoration: none;\
	}\
	#AWA-primary_nav_wrap\
	{\
		margin-top:15px\
	}\
	#AWA-primary_nav_wrap ul\
	{\
		border: solid 1px black;\
		list-style:none;\
		position:relative;\
		float:left;\
		margin:0;\
		padding:0\
	}\
	#AWA-primary_nav_wrap ul a\
	{\
		padding-left: 14px;\
		width: 150px;\
		display:block;\
		color:#333;\
		text-decoration:none;\
		font-weight:700;\
		font-size:12px;\
		line-height:32px;\
	}\
	#AWA-primary_nav_wrap ul li\
	{\
		position:relative;\
		float:left;\
		margin:0;\
		padding:0\
	}\
	#AWA-primary_nav_wrap > ul > li {\
		border-right: solid 1px black;\
	}\
	#AWA-primary_nav_wrap > ul > li:nth-child(7) {\
		border-right: 0;\
	}\
	#AWA-primary_nav_wrap ul li.current-menu-item\
	{\
		background:#ddd\
	}\
	#AWA-primary_nav_wrap ul li:hover\
	{\
		background:#ECFBC5\
	}\
	#AWA-primary_nav_wrap ul ul\
	{\
		display:none;\
		position:absolute;\
		top:100%;\
		left:0;\
		background: #F6FDE1;\
		padding:0\
	}\
	#AWAprimary_nav_wrap ul ul li\
	{\
		float:none;\
		width:200px\
	}\
	#AWA-primary_nav_wrap ul ul a\
	{\
		line-height:120%;\
		padding: 10px 0 10px 10px;\
		width: 140px;\
	}\
	#AWA-primary_nav_wrap ul ul ul\
	{\
		top:0;\
		left:100%\
	}\
	#AWA-primary_nav_wrap ul li:hover > ul\
	{\
		display:block;\
		border: solid 1px black;\
		margin-left: -1px;\
	}\
	#AWA-primary_nav_wrap #AWA-home {\
		width: 53px;\
	}\
	#AWA-primary_nav_wrap #AWA-fwl {\
		width: 126px;\
	}\
	#AWA-primary_nav_wrap #AWA-fwol {\
		width: 147px;\
	}\
	#AWA-primary_nav_wrap #AWA-tfr {\
		width: 147px;\
	}\
	#AWA-primary_nav_wrap #AWA-esf {\
		width: 150px;\
	}\
	#AWA-primary_nav_wrap #AWA-fbc {\
		width: 113px;\
	}\
	#AWA-primary_nav_wrap #AWA-fa {\
		width: 126px;\
	}\
	#AWA-primary_nav_wrap ul ul a {\
		width: 179px;\
	}\
	#AWA-primary_nav_wrap > ul > li:nth-child(5) > ul a {\
		width: 147px;\
	}\
	#AWA-primary_nav_wrap > ul > li:nth-child(6) > ul a {\
		width: 158px;\
	}\
	.AWA-top-box {\
		border: solid 1px black;\
		width: 296px;\
		float: left;\
		padding: 2px 5px 2px 5px;\
		text-align: center;\
		height: 32px;\
		margin-top: 5px;\
	}\
	.AWA-sub-menu > div:nth-child(2),  .AWA-sub-menu > div:nth-child(3) {\
		line-height: 32px;\
	}\
	.AWA-sub-menu > div:nth-child(2) {\
		margin-left: 23px;\
		margin-right: 23px;\
	}\
	.AWA-small {\
		font-size: 11px;\
	}\
	.AWA-tagline-box {\
		margin-top: 10px;\
	}\
	.AWA-tagline-box h2 {\
		font-size: 18px;\
		margin-left: 76px;\
	}\
	.AWA-tagline-box > h2:nth-child(2) {\
		border: solid 0px red;\
		width: 300px;\
		float: left;\
	}\
	.AWA-tagline-box .shh {\
		border: solid 0px blue;\
		width: 550px;\
		float: left;\
		font-style: italic;\
		margin-top: 11px;\
		padding-bottom: 10px;\
	}\
	.AWA-home-category {\
		width: 300px;\
		background-color:rgba(240, 239, 239, 0.67);\
		height: 256px;\
		overflow: auto;\
		float: left;\
		margin-left: 18px;\
		margin-bottom: 25px;\
	}\
	.AWA-home-category a {\
		text-decoration: none;\
	}\
	.AWA-home-category a:hover {\
		text-decoration: underline;\
	}\
	.AWA-home-category-title {\
		border: solid 1px lightgray;\
		width: 268px;\
		margin: 0 auto;\
		text-align: center;\
		margin-bottom: 3px;\
		margin-top: 10px;\
		padding-top: 4px;\
		padding-bottom: 4px;\
		background-color: white;\
		font-weight: bold;\
	}\
	.AWA-home-category img {\
		width: 252px;\
		margin-top: 25px;\
  		margin-bottom: 25px;\
	}\
	.AWA-home-category-pic {\
		border: solid 1px lightgrey;\
		background-color: white;\
		width: 268px;\
		text-align: center;\
		margin: 0 auto;\
	}\
	#AWA-cat-cfwl img {\
		margin-bottom: 31px;\
	}\
	#AWA-cat-wcf img {\
		margin-bottom: 18px;\
		margin-top: 10px;\
	}\
	#AWA-cat-esf img {\
		margin-top: 43px;\
		margin-bottom: 45px;\
	}\
	#AWA-cat-acc img {\
		width: 82px;\
	}\
	#AWA-cat-fullrange img {\
		width: 108px;\
	}\
	.AWA-why-us {\
		padding-left: 25px;\
		padding-right: 25px;\
	}\
	.AWA-why-us h2 {\
		padding-bottom: 10px;\
	}\
	.AWA-checkmark {\
		vertical-align: middle;\
	}\
	.AWA-icon {\
		width: 270px;\
		float: left;\
		margin-left: 25px;\
		margin-right: 25px;\
		margin-top: 30px;\
	}\
	.AWA-icon-title {\
		font-weight: bold;\
		font-size: 13px;\
		padding-bottom: 3px;\
	}\
	.AWA-icon-box {\
		background-color: #a6a6a6;\
		height: 155px;\
		color: white;\
		padding: 10px;\
	}\
	.AWA-icons div:nth-child(8) .AWA-icon-box, .AWA-icons div:nth-child(7) .AWA-icon-box {\
		height: 167px;\
	}\
	.AWA-icons div:nth-child(7) {\
		margin-left: 189px;\
	}\
	.AWA-icon-box p {\
		font-size: 11px;\
	}\
	.AWA-icon-image {\
		float: right;\
	}\
	.AWA-number {\
		display: block;\
	}\
	.AWA-icon-title-text {\
		font-size: 15px;\
		padding-bottom: 4px;\
		padding-top: 3px;\
		display: block;\
	}\
	#Wrapper {\
		height: 1689px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

    	/* --- FOOTER --- */
	    // Insert and adjust footer
		var footerImage = $('img[src$="http://cdn1.bigcommerce.com/server5200/ego6j0ia/product_images/uploaded_images/theceilingfancompany-approved.jpg"]');
		$('#Footer').html(exp.vars.footer).append(footerImage);
		$(footerImage).attr('width', '115');
		$(footerImage).attr('height', '150');
		$(footerImage).attr('style', 'float: right');


	    // Remove top images
	    $('#Container').attr('style', 'background-image: none');

	    var search = $('#SearchForm');
	    var ajaxLoading = $('#AjaxLoading');
	    var topMenu = $('#TopMenu');

	    // Remove Wish List from Menu
	    $('#TopMenu ul li.CartLink').prev().remove();

	    // Change order of Sign in and View Cart links
	    var signIn = $('#TopMenu ul li').last();
	    var viewCart = $('#TopMenu ul li').eq(2);
	    signIn.after(viewCart);
	    signIn.html("<a href='http://www.theceilingfancompany.co.uk/login.php'>Sign in</a>");



    	$('#Header').prepend(exp.vars.phone).prepend(exp.vars.logo);
    	$('#Logo').remove();

    	$('.AWA-phone-side').append(topMenu).append(search).append(exp.vars.popularSearches);

    	// Remove search button
    	$('#SearchForm input[type=image]').remove();

    	// Add placeholder text to search bar
    	$('#SearchForm #search_query').attr('placeholder', 'search')

    	/* --- MENU --- */
    	// Insert new menu
    	$('#Menu').before(exp.vars.nav);
    	// Remove old menu
    	$('#Menu').remove();

    	$('#Wrapper').before(exp.vars.topBoxes);

    	$('#Wrapper').before(exp.vars.tagLineBox);

    	// Remove sidebar
		$('#LayoutColumn1').remove();
		$('#LayoutColumn2').remove();
		$('#LayoutColumn3').remove();

		$('#Wrapper').append(exp.vars.homeCategories);

		$('#Wrapper').append(exp.vars.whyUs);
		$('#Wrapper').append(exp.vars.icons);


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);