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
	exp.log('Test1 v2 - Desktop');

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
				<img src='//cdn.optimizely.com/img/174847139/ca47df914f1142388f7b79e453e425e6.png'>\
				<div class='value-prop'>\
					<p>Fantasia Fans Official Retailer. You can't buy cheaper - guaranteed.</p>\
					<img id='fantasia-logo' src='//cdn.optimizely.com/img/174847139/15dea4ea84384fe0ba7d3b23b0dd8049.png'>\
				</div>",
		phone: "<div class='AWA-phone-side'>\
					<img src='//cdn.optimizely.com/img/174847139/f6a8571c7c354f0183278dd102123da0.png'>\
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
						<a id='top-box-1' class='AWA-top-box-link' href='#'><div class='AWA-top-box'>\
							FREE next day UK Delivery<br> <span class='AWA-small'>With 1 hour deilvery slot for all orders</span>\
						</div></a>\
						<a id='top-box-2' class='AWA-top-box-link' href='#'><div class='AWA-top-box'>\
							Extremely low running costs for all fans\
						</div></a>\
						<a id='top-box-3' class='AWA-top-box-link' href='#'><div class='AWA-top-box'>\
							Price Match Promise<br> <span class='AWA-small'>You can't buy cheaper</span>\
						</div></a>\
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
						<h3>Why Fantasia Fans from the Ceiling Fan Company?</h3>\
						<p>\
							Quite simply, no other fans on the market are better quality or more beautifully designed.  We have been official suppliers of Fantasia Fans for over 15 years, so we know a lot about what makes a great ceiling fan. Here’s just some of the reasons why Fantasia Fans are unsurpassed by any others: \
						</p>\
						<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><h2>10 year warranty</h2>\
						<p>\
							Our fans are maintenance free and built to last, with all-metal motor housings and double-lacquered surfaces to keep them in pristine condition for many years to come. Each fan comes with a 10 year warranty – longer than any other ceiling fans on the market.  If you have any motor problems within ten years of buying your fan, just let us know and we’ll repair or replace it free of charge. \
						</p>\
						<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><h2>Unbeatably quiet</h2>\
						<p>\
							All our ceiling fans are virtually silent because they are precision-engineered with large silicon steel motors, permanently sealed bearings and aerodynamically shaped blades. When the fan is on in your home, the loudest sounds you’ll hear are the birds in your garden and the ticking of your clock.\
						<p>\
						<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><h2>Huge choice</h2>\
						<p>\
							You have a huge range of ceiling fan designs to choose from, some with lights and others without, in styles ranging from contemporary to classic. Many fans are available in a choice of two sizes with several blade options, and you can also change the blade colours within each range.\
						<p>\
						<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><h2>Easy to install and use</h2>\
						<p>\
							Your fan can be installed on a high ceiling, sloping ceiling or low ceiling as well as conservatory buildings – simply purchase the appropriate mounting. The fan runs from your existing light circuit using the same wiring, so it’s very easy to install.  Using it is easy too. To switch your fan on and off and control the speed you have a choice of traditional pull cord or a remote control.\
						<p>\
						<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><h2>Great after sales service</h2>\
						<p>\
							Free next day delivery (UK mainland) comes as standard, so your fan will be with you in no time. But our commitment to you doesn’t end there. Our award-winning customer service team is here to help with any questions you may have.  Just phone 01959 564440. We’re based in the UK so you’ll always speak to a friendly, helpful person to deal with who has the skills and knowledge to help you.\
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
								Ultra quiet\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/8d7aa26cc05540edadec16479d8f0b78.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/e7dfd12f81604f1c92eac8bf18e9b296.png'>\
								<span class='AWA-icon-title-text'>The most silent on the market</span>\
								<p>Fantasia fans combine larger motors with a steeper blade pitch to maximise the circulation of air whilst ensuring whisper quiet, economical and well balanced operation.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Save energy\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/d7cc30834ef649f6be2bd338d1abd382.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/98c640a9a12746d1afea103714e163b0.png'>\
								<span class='AWA-icon-title-text'>Cut 10% off winter fuel bills</span>\
								<p>All Fantasia fans have a built in reverse function so they can be operated in summer for a cooling effect and then reverse in Winter to re-circulate warm air trapped at ceiling level, eliminating cold spots and draughts.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Remote control\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/4174c300e0444e619507c14d27676255.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/76009765163f4a6086dee734ece295d3.png'>\
								<span class='AWA-icon-title-text'>Lots of options</span>\
								<p>A number of fan models are operated by remote control as standard but those with pull cords can stil be fitted with a remote controller as an added option. We also supply single wall controls to operate fan speeds and double wall controls to operate both the speeds and the fan light.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Easy to install\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/240e5d297aed4ea092682cf6b239e5d5.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/f49ca975f69c4f0b8b32333de6794278.png'>\
								<span class='AWA-icon-title-text'>Uses existing light circuit</span>\
								<p>Many fan models come complete with lights buy almost all are light adaptable giving a wide variety of options to suit individual tastes. We offer a selection of halogen and traditional lighting. Our Fan Lighting range starts on Page 35.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Great choice\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/448f11f1662043259d62d5670517e4fa.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/48a19a974045466dbd84d0c97930c88c.png'>\
								<span class='AWA-icon-title-text'>Huge range of colours and sizes</span>\
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
					</div>",
			popup1: "<div id='AWA-popup-1'>\
						<img id='AWA-close-1' src='http://dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='16' height='16px' style='float: right'>\
						<h3>Delivery is FREE on all orders to a UK mainland address</h3>\
						<p>\
							Order by 2pm for FREE NEXT DAY delivery Monday-Friday – with free text message on the day to let you know what time your delivery will arrive (1 hour time slot).\
						</p>\
						<h3>Other Delivery Options</h3>\
						<p>\
							Saturday delivery (UK mainland) £18\
						</p>\
						<h3>Delivery to a non-UK mainland address</h3>\
						<p>\
							Please call us on 0808 168 4535 or email sales@theceilingfancompany.co.uk for delivery charges. Please note that UK mainland excludes the Channel Islands and postcodes FK17-99, G83, IV1-63, KW1-14, PA21-33, PA34-40, PH18-26, PH30-41, PH49-50\
						<p>\
					</div>",
			popup2: "<div id='AWA-popup-2'>\
						<img id='AWA-close-2' src='http://dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='16' height='16px' style='float: right'>\
						<p>\
							Our fans cost very little to run, as they need very little energy, similar to a standard light fitting. In fact you use more on energy when you switch on a 100 watt light bulb.\
						</p>\
							All our fans have precision engineered, silicon steel motors which are highly efficient to run. Some models come with ultra-low energy LED lights or low energy halogen bulbs and others have a DC motor which uses 60% less power than a standard fan.\
						</p>\
						<p>\
							What's more, our ceiling fans can actually save you money on your fuel bills. The winter setting re-circulates warm air trapped at ceiling level, which distributes heat evenly throughout the room eliminating cold spots and draughts. Tests have shown that, used correctly, our ceiling fans give you savings of up to 10% on energy bills through the winter months.\
						</p>\
					</div>",
			popup3: "<div id='AWA-popup-3'>\
						<img id='AWA-close-3' src='http://dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='16' height='16px' style='float: right'>\
						<p>\
							As the official UK supplier of Fantasia Ceiling fans, we are confident that you can’t buy Fantasia fans for a lower price anywhere else.\
						</p>\
						<p>\
							You also have peace of mind that you are buying a genuine Fantasia when you buy from us.\
						</p>\
						<p>\
							If you find the same ceiling fan anywhere else for less, we would really like to hear about it. If it is a genuine Fantasia ceiling fan (not an inferior imitation), we’ll refund your entire cost.\
						</p>\
					</div>",
			filter: "<div class='AWA-filter'>\
						<p>Filter your products:</p>\
						<div class='AWA-filter-1'>\
							<span class='AWA-filter-title'>By fan feature:</span>\
							<ul>\
								<li><label><input type='checkbox' name='filter-1' value='white'>white,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='stainless steel'>stainless steel,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='pewter'>pewter,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='compatible remote'>compatible with a remote,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='energy saving'>energy saving (DC motor)</label></li>\
							</ul>\
						</div>\
						<div class='AWA-filter-2'>\
							<span class='AWA-filter-title'>By price:</span>\
							<ul>\
								<li><label><input type='checkbox' name='filter-1' value='0-136'>&pound;0 - &pound;136,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='137-205'>&pound;137 - &pound;205,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='206-273'>&pound;206 - &pound;273,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='274-342'>&pound;274 - &pound;342,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='343-410'>&pound;343 - &pound;410</label></li>\
							</ul>\
						</div>\
						<div style='clear:both'></div>\
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
		margin-top: 30px;\
	}\
	#Footer li a {\
		border-left: 0;\
		padding-left: 0;\
		text-decoration: underline;\
	}\
	#Footer li a:hover {\
		color: #981f30;\
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
		margin-top: 20px;\
		width: 229px;\
		font-size: 12px;\
		font-style: italic;\
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
	.AWA-phone-side img {\
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
		margin-top:15px;\
		margin-bottom: 11px;\
		border: solid 1px lightgray;\
		height: 50px;\
		background-color: rgb(244, 243, 243);\
	}\
	#AWA-primary_nav_wrap ul\
	{\
		margin-top: 11px !important;\
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
		z-index: 100;\
		position:relative;\
		float:left;\
		margin:0;\
		padding:0\
	}\
	#AWA-primary_nav_wrap > ul > li {\
		border-right: solid 1px black;\
		background-color: rgb(244, 243, 243);\
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
		background: rgba(244, 243, 243, 0.32);\
	}\
	#AWA-primary_nav_wrap ul ul\
	{\
		display:none;\
		position:absolute;\
		top:100%;\
		left:0;\
		background: white;\
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
		margin-top: 0px !important;\
		border-top: 0;\
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
		font-weight: normal;\
	}\
	#AWA-primary_nav_wrap > ul > li:nth-child(5) > ul a {\
		width: 147px;\
	}\
	#AWA-primary_nav_wrap > ul > li:nth-child(6) > ul a {\
		width: 158px;\
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
		width: 67%;\
		margin-left: auto;\
		margin-right: auto;\
		padding-left: 25px;\
		padding-right: 25px;\
	}\
	.AWA-why-us img {\
		float: left;\
	}\
	.AWA-why-us h3 {\
		font-size: 18px;\
		text-align: center;\
	}\
	.AWA-why-us h2 {\
		font-size: 15px;\
		padding-bottom: 10px;\
		display: inline-block;\
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
		font-size: 14px;\
		padding-bottom: 6px;\
		padding-top: 3px;\
		display: block;\
	}\
	#Wrapper {\
		height: auto;\
	}\
	body {\
		background-color: white;\
	}\
	#AWA-popup-1, #AWA-popup-2, #AWA-popup-3 {\
		display: none;\
		border: solid 1px black;\
		position: fixed;\
		width: 440px;\
		top: 25%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 200;\
		background-color: white;\
		padding: 15px;\
	}\
	.AWA-top-box-link {\
		width: 296px;\
		float: left;\
		padding: 2px 5px 2px 5px;\
		text-align: center;\
		height: 32px;\
		margin-top: 5px;\
		background-color: rgb(166, 166, 166);\
		color: white;\
		text-decoration: none;\
	}\
	#top-box-2 {\
		margin-left: 27px;\
		margin-right: 27px;\
	}\
	#top-box-2 > div {\
		margin-top: 7px;\
	}\
	.AWA-home-category:hover {\
		background-color: rgb(231, 231, 231);\
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



		if (window.location.pathname == "/") {
			// Remove sidebar
			$('#LayoutColumn1').remove();
			$('#LayoutColumn2').remove();
			$('#LayoutColumn3').remove();

			$('#Wrapper').append(exp.vars.homeCategories);
			$('#Wrapper').append(exp.vars.whyUs);
			$('#Wrapper').append(exp.vars.icons);
		} else {
			var sortBox = $('.SortBox');
			console.log(sortBox)
			$('#LayoutColumn1').remove();
			$('#LayoutColumn3').remove();
			$('#CategoryHeading').remove();
			$('#CategoryPagingTop').remove();

			$('#LayoutColumn2').attr('style', 'width: inherit');
			var listingCSS = '\
				.Content .ProductList li {\
					border: solid 1px lightgray;\
					width: 300px !important;\
					height: 355px !important;\
					background-color: rgb(244, 243, 243);\
				}\
				.ProductList .ProductImage img {\
					width: 269px;\
				}\
				.AWA-image-wrap {\
					width: 297px;\
					height: 219px;\
				}\
				.AWA-price {\
					border: solid 1px rgb(159, 155, 155);\
					width: 70px;\
					font-size: 14px;\
					margin-top: 9px;\
					padding: 4px;\
					float: left;\
					margin-bottom: 10px;\
					background-color: rgba(31, 225, 51, 0.45);\
				}\
				.ProductDetails strong {\
					display: block;\
				}\
				.Content .ProductList .ProductDetails {\
					margin-top: 6px;\
				}\
				.AWA-more-info {\
					border: solid 1px rgb(159, 155, 155);\
					width: 70px;\
					font-size: 14px;\
					margin-top: 9px;\
					padding: 4px;\
					padding-right: 10px;\
					padding-left: 10px;\
					float: right;\
				}\
				.AWA-more-info:hover {\
					background-color: rgb(166, 166, 166);\
					color: white;\
				}\
				.AWA-savings {\
					border: solid 1px rgb(215, 215, 215);\
					width: 94px;\
					font-size: 14px;\
					position: absolute;\
					z-index: 50;\
					background-color: white;\
					margin-top: -224px;\
					margin-left: -9px;\
					float: left;\
					padding: 4px;\
					color: gray;\
				}\
				.AWA-buy {\
					border: solid 1px rgb(159, 155, 155);\
					width: 52px;\
					padding: 3px;\
					background-color: rgb(166, 166, 166);\
					color: white !important;\
					clear: both;\
					float: right;\
				}\
				.ProductCompareButton {\
					border: solid 1px lightgray;\
					width: 90px;\
					clear: left;\
					padding: 4px;\
					margin-top: 10px;\
				}\
				.CompareButton {\
					position: fixed;\
					top: 50%;\
					margin-left: 959px;\
				}\
				.Rating {\
					display: block;\
					width: 68px;\
					margin-bottom: 2px;\
					float: right;\
				}\
				.AWA-almafi-title {\
					width: 75px;\
					text-align: left;\
					float: left;\
					margin-bottom: 5px;\
				}\
				.AWA-filter {\
					border: solid 1px lightgray;\
					padding: 10px;\
					width: 545px;\
					height: 105px;\
					float: left;\
					margin-top: 10px;\
  					margin-bottom: 10px;\
				}\
				.AWA-filter p {\
					float: left;\
					height: 105px;\
					font-weight: bold;\
				}\
				.AWA-filter-1, .AWA-filter-2 {\
					float: left;\
					margin-left: 25px;\
				}\
				.AWA-filter ul {\
					list-style-type: none;\
					padding-top: 8px;\
				}\
				span.AWA-filter-title {\
					font-weight: bold;\
				}\
				.SortBox {\
					float: left;\
					margin-top: 13px;\
					margin-left: 15px;\
				}';
			$('head').append('<style type="text/css">'+listingCSS+'</style>');

			

			// Replace image on compare button
			$('input[value="Compare Selected"]').attr('src', '//cdn.optimizely.com/img/174847139/a329a458ca7047e3b3ebf6f0eed924cc.png');
			$('input[value="Compare Selected"]').attr('style', 'width: 113px');


			$(".CompareButton").hide();
			$(".ProductCompareButton").on('change', function() {
				if ($( "input[name='compare_product_ids']:checked" ).size() > 1) {
					$(".CompareButton").show();
				} else {
					$(".CompareButton").hide();
				}
			});


			var classifications = ["Tau", "Zeta", "Delta", "Blade", "Omega", "Viper Plus", "Splash", "Viper", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento Hurricane", "Neptune", "Genoa", "Belaire", "Bali", "Scorpion", "Rio", "Atlanta", "Rimini", "Commercial"];

			$('.ProductImage').each(function() {
				var productLink = $(this).find('a').attr('href');
				$(this).find('a').wrap("<div class='AWA-image-wrap'></div>")
				var currentImage = $(this).find('img').first();

				var strikePrice = $.trim($(this).next().next().find('.RetailPriceValue').text()).slice(1);
				$(this).next().next().find('.RetailPriceValue').remove();
				var price = $.trim($(this).next().next().text());
				
				$(this).next().append("<div class='AWA-price'>" + price + "</div>");
				$(this).next().append("<a href='" + productLink + "'><div class='AWA-more-info'>More Info</div></a>");

				// Some products don't let you buy directly from the listing page
				var buyLink = $(this).parent().find('.ProductActionAdd').find('a').attr('href');
				$(this).next().append("<a href='" + buyLink + "' class='AWA-buy'><div>Buy</div></a>");


				var compare = $(this).parent().find('.ProductCompareButton');
				$(this).next().append(compare);


				var rating = $(this).parent().find('.Rating');
				$(this).parent().prepend(rating);


				price = price.slice(1);
				var moneyOff = (strikePrice - price).toFixed(2);

				if (moneyOff > 0) {
					$(this).next().prepend("<div class='AWA-savings'>£" + moneyOff + " Off</div>");
				}

				$(this).parent().prepend("<div class='AWA-almafi-title'></div>");
				var title = $(this).next().find('a').text();

				for (var i = 0; i < classifications.length; i++) {
					if (title.indexOf(classifications[i]) != -1) {
						$(this).parent().find('.AWA-almafi-title').text(classifications[i]);
					}
				}


				$.ajax({
				    type: "GET",
				    url: productLink,
				    success: function(data) {
				    	var response = $(data);
				    	var largeImage = response.find('.ProductThumbImage img').first().attr('src');
				    	currentImage.attr('src', largeImage);
				    }
				});
			});

			// Hide 0 ratings but keep positioning
			$('.Rating0').css('visibility','hidden');

			$('.ProductPriceRating').remove();
			$('.ProductActionAdd').remove();

			$('#CategoryBreadcrumb').after(exp.vars.filter);
			$('.AWA-filter').after(sortBox);


			$('.AWA-filter').on('change', 'input:checkbox[value="white"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var title = $(this).find('strong').text();
						if (title.toLowerCase().indexOf("white") != -1) {
							$(this).addClass('white');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.white').hide();
				} else {
					uncheck('white');
				}
			});

			$('.AWA-filter').on('change', 'input:checkbox[value="pewter"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var title = $(this).find('strong').text();
						if (title.toLowerCase().indexOf("pewter") != -1) {
							$(this).addClass('pewter');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.pewter').hide();
				} else {
					uncheck("pewter");
				}
			});

			$('.AWA-filter').on('change', 'input:checkbox[value="stainless steel"]', function() {
				if ($(this).is(':checked')) {
					console.log('ss active yo')
					$('.ProductList').find('li').each(function() {
						var title = $(this).find('strong').text();
						if (title.toLowerCase().indexOf("stainless steel") != -1) {
							$(this).addClass('stainless-steel');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.stainless-steel').hide();
				} else {
					uncheck("stainless-steel");
				}
			});

			$('.AWA-filter').on('change', 'input:checkbox[value="compatible remote"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var title = $(this).find('strong').text();
						// Only commercial fans don't have a remote
						if (title.toLowerCase().indexOf("commercial") == -1) {
							$(this).addClass('compatible-remote');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.compatible-remote').hide();
				} else {
					uncheck("compatible-remote");
				}
			});

			$('.AWA-filter').on('change', 'input:checkbox[value="energy saving"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var category = $(this).find('.AWA-almafi-title').text();
						if (category == "Tau" || category == "Zeta" || category == "Delta" || category == "Omega") {
							$(this).addClass('energy-saving');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.energy-saving').hide();
				} else {
					uncheck("energy-saving");
				}
			});

			function uncheck(className) {
				$('.ProductList').find("." + className).removeClass('filtered');
				$('.ProductList').find('li').not('.' + className).show();
				$('.ProductList').find('li').removeClass(className);
				if ($('.white').length > 0) {
					$('input:checkbox[value="white"]').trigger('click');
					$('input:checkbox[value="white"]').trigger('click');
				}
				if ($('.pewter').length > 0) {
					$('input:checkbox[value="pewter"]').trigger('click');
					$('input:checkbox[value="pewter"]').trigger('click');
				}
				if ($('.stainless-steel').length > 0) {
					$('input:checkbox[value="stainless steel"]').trigger('click');
					$('input:checkbox[value="stainless steel"]').trigger('click');
				}
				if ($('.compatible-remote').length > 0) {
					$('input:checkbox[value="compatible remote"]').trigger('click');
					$('input:checkbox[value="compatible remote"]').trigger('click');
				}
				if ($('.energy-saving').length > 0) {
					$('input:checkbox[value="energy saving"]').trigger('click');
					$('input:checkbox[value="energy saving"]').trigger('click');
				}
				if ($('.price-f').length > 0) {
					retainPrice();
				}
			}

			function retainFilters() {
				if ($('.white').length > 0) {
					$('input:checkbox[value="white"]').trigger('click');
					$('input:checkbox[value="white"]').trigger('click');
				}
				if ($('.pewter').length > 0) {
					$('input:checkbox[value="pewter"]').trigger('click');
					$('input:checkbox[value="pewter"]').trigger('click');
				}
				if ($('.stainless-steel').length > 0) {
					$('input:checkbox[value="stainless steel"]').trigger('click');
					$('input:checkbox[value="stainless steel"]').trigger('click');
				}
				if ($('.compatible-remote').length > 0) {
					$('input:checkbox[value="compatible remote"]').trigger('click');
					$('input:checkbox[value="compatible remote"]').trigger('click');
				}
				if ($('.energy-saving').length > 0) {
					$('input:checkbox[value="energy saving"]').trigger('click');
					$('input:checkbox[value="energy saving"]').trigger('click');
				}
			}

			function retainPrice() {
				if ($('.0-136').length > 0) {
					$('input:checkbox[value="0-136"]').trigger('click');
					$('input:checkbox[value="0-136"]').trigger('click');
				}
				if ($('.137-205').length > 0) {
					$('input:checkbox[value="137-205"]').trigger('click');
					$('input:checkbox[value="137-205"]').trigger('click');
				}
				if ($('.206-273').length > 0) {
					$('input:checkbox[value="206-273"]').trigger('click');
					$('input:checkbox[value="206-273"]').trigger('click');
				}
				if ($('.274-342').length > 0) {
					$('input:checkbox[value="274-342"]').trigger('click');
					$('input:checkbox[value="274-342"]').trigger('click');
				}
				if ($('.343-410').length > 0) {
					$('input:checkbox[value="343-410"]').trigger('click');
					$('input:checkbox[value="343-410"]').trigger('click');
				}
			}

			$('.AWA-filter').on('change', 'input:checkbox[value="0-136"]', function() {
				console.log("0-136 click");
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var price = $(this).find('.AWA-price').text().slice(1);
						if (price <= 136) {
							$(this).addClass('0-136');
							$(this).addClass('price-f');
						}
					});
					if ($('.filtered').length > 0) {
						console.log("0-136 filter length > 0");
						$('.ProductList').find('li:visible').not('.price-f').hide();
						$('.ProductList').find('li').find('.0-136').show();
						retainFilters();
					} else {
						console.log("0-136 no filters");
						$('.ProductList').find('li').not('.price-f').hide();
						$('.ProductList').find('.0-136').show();
					}
				} else {
					removePriceFilter("0-136");
				}
			});
			$('.AWA-filter').on('change', 'input:checkbox[value="137-205"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var price = $(this).find('.AWA-price').text().slice(1);
						if (price >= 137 && price <= 205) {
							$(this).addClass('137-205');
							$(this).addClass('price-f');
						}
					});
					if ($('.filtered').length > 0) {
						$('.ProductList').find('li:visible').not('.price-f').hide();
						$('.ProductList').find('li').find('.137-205').show();
						retainFilters();
					} else {
						$('.ProductList').find('li').not('.price-f').hide();
						$('.ProductList').find('.137-205').show();
					}
				} else {
					removePriceFilter("137-205");
				}
			});
			$('.AWA-filter').on('change', 'input:checkbox[value="206-273"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var price = $(this).find('.AWA-price').text().slice(1);
						if (price >= 206 && price <= 273) {
							$(this).addClass('206-273');
							$(this).addClass('price-f');
						}
					});
					if ($('.filtered').length > 0) {
						$('.ProductList').find('li:visible').not('.price-f').hide();
						$('.ProductList').find('li').find('.206-273').show();
						retainFilters();
					} else {
						$('.ProductList').find('li').not('.price-f').hide();
						$('.ProductList').find('.206-273').show();
					}
				} else {
					removePriceFilter("206-273");
				}
			});
			$('.AWA-filter').on('change', 'input:checkbox[value="274-342"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var price = $(this).find('.AWA-price').text().slice(1);
						if (price >= 274 && price <= 342) {
							$(this).addClass('274-342');
							$(this).addClass('price-f');
						}
					});
					if ($('.filtered').length > 0) {
						$('.ProductList').find('li:visible').not('.price-f').hide();
						$('.ProductList').find('li').find('.274-342').show();
						retainFilters();
					} else {
						$('.ProductList').find('li').not('.price-f').hide();
						$('.ProductList').find('.274-342').show();
					}
				} else {
					removePriceFilter("274-342");
				}
			});
			$('.AWA-filter').on('change', 'input:checkbox[value="343-410"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var price = $(this).find('.AWA-price').text().slice(1);
						if (price >= 343 && price <= 410) {
							$(this).addClass('343-410');
							$(this).addClass('price-f');
						}
					});
					if ($('.filtered').length > 0) {
						$('.ProductList').find('li:visible').not('.price-f').hide();
						$('.ProductList').find('li').find('.343-410').show();
						retainFilters();
					} else {
						$('.ProductList').find('li').not('.price-f').hide();
						$('.ProductList').find('.343-410').show();
					}
				} else {
					removePriceFilter("343-410");
				}
			});
			

			function removePriceFilter(value) {
				$('.ProductList').find("." + value).removeClass('price-f');
				if ($('.price-f').length > 0) {
					$('.ProductList').find('.price-f').show();
					$('.ProductList').find('li').not('.price-f').hide();
				}
				else {
					$('.ProductList').find('li').show();
				}
				if ($('.filtered').length > 0) {
					retainFilters();
				}
			}


		}







		// Attach popups
		$('<div id="__msg_overlay">').css({
		      "width" : "100%"
		    , "height" : "100%"
		    , "background" : "#000"
		    , "position" : "fixed"
		    , "top" : "0"
		    , "left" : "0"
		    , "zIndex" : "150"
		    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
		    , "filter" : "alpha(opacity=60)"
		    , "MozOpacity" : 0.6
		    , "KhtmlOpacity" : 0.6
		    , "opacity" : 0.6
		}).appendTo(document.body);

		// Attach popup2 on top of overlay
		$('body').append(exp.vars.popup1);
		$('body').append(exp.vars.popup2);
		$('body').append(exp.vars.popup3);

		$('#__msg_overlay').hide();


		$('#top-box-1').click(function(e) {
			e.preventDefault();
			$('#AWA-popup-1').show();
			$('#__msg_overlay').show();

		});
		$('#AWA-close-1').click(function(e) {
			$('#AWA-popup-1').hide();
			$('#__msg_overlay').hide();
		});

		$('#top-box-2').click(function(e) {
			e.preventDefault();
			$('#AWA-popup-2').show();
			$('#__msg_overlay').show();

		});
		$('#AWA-close-2').click(function(e) {
			$('#AWA-popup-2').hide();
			$('#__msg_overlay').hide();
		});

		$('#top-box-3').click(function(e) {
			e.preventDefault();
			$('#AWA-popup-3').show();
			$('#__msg_overlay').show();

		});
		$('#AWA-close-3').click(function(e) {
			$('#AWA-popup-3').hide();
			$('#__msg_overlay').hide();
		});



		
		getBreadCrumb();

		function getBreadCrumb() {
			console.warn("CURRENT BREADCRUMB: " + sessionStorage.getItem('lastPage'));
			// Insert link to last page
			if (sessionStorage.getItem('lastPage') != "null") {
				$('#Wrapper').prepend("<div id='AWA-breadcrumb'>Previous Page: <a id='AWA-last-page' href='" + sessionStorage.getItem('url') + "'>" + sessionStorage.getItem('lastPage') + "</a></div>");
			}

			var breadCrumbLength = $('.Breadcrumb').find('li:not(:has(a))').length;

			if (breadCrumbLength == 1) {
				sessionStorage.setItem('lastPage', $('.Breadcrumb').find('li:not(:has(a))').text());
				sessionStorage.setItem('url', window.location.href);
				console.info('Last page set to: ' + $('.Breadcrumb').find('li:not(:has(a))').text());
			} else if (breadCrumbLength > 1) {
				sessionStorage.setItem('lastPage', $('.BlockContent').find('h2').text());
				sessionStorage.setItem('url', window.location.href);
				console.info('Last page set to: ' + $('.Breadcrumb').find('li:not(:has(a))').text());
			} else if (window.location.href == "http://www.theceilingfancompany.co.uk/") {
				sessionStorage.setItem('lastPage', "Home");
				sessionStorage.setItem('url', window.location.href);
				console.info('Last page set to HOME');
			} else {
				sessionStorage.setItem('lastPage', null);
				sessionStorage.setItem('url', window.location.href);
				console.info('Set to null');
			}

			$('.Block.Moveable.Panel.Breadcrumb').remove();
			if ($('#AWA-last-page').text() == "null") {
				$('#AWA-last-page').remove();
				console.log("Removed null breadcrumb");
			}
		}

		insertCategoryTitle();
		function insertCategoryTitle() {
			var pageURL = window.location.href;
			switch(pageURL) {
			    case "http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/":
			    case "http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/":
			    case "http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/":
			    case "http://www.theceilingfancompany.co.uk/retro-desk-fans/":
			    case "http://www.theceilingfancompany.co.uk/elite-range-of-ceiling-fans/":
			    case "http://www.theceilingfancompany.co.uk/commercial-ceiling-fans/":
			    case "http://www.theceilingfancompany.co.uk/fantasia-viper-fans/":
			    case "http://www.theceilingfancompany.co.uk/remote-control-ceiling-fans/":
			    case "http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/":
			    case "http://www.theceilingfancompany.co.uk/brands/White.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Stainless-Steel.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Brushed-Nickel.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Polished-Brass.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Multiple-Colours.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Black-%7B47%7D-Pewter.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Chrome.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Chocolate-Brown.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Antique-Brass.html":
			    case "http://www.theceilingfancompany.co.uk/brands/Brushed-Aluminium.html":
			    case "http://www.theceilingfancompany.co.uk/conversion-kits/":
			    case "http://www.theceilingfancompany.co.uk/drop-rods/":
			    case "http://www.theceilingfancompany.co.uk/other-accessories/":
			    case "http://www.theceilingfancompany.co.uk/ceiling-fan-lighting/":
			    case "http://www.theceilingfancompany.co.uk/ceiling-fan-controllers/":
			    case "http://www.theceilingfancompany.co.uk/led-bulbs/":
			        //code block
			        break;
			    default:
			        //default code block
			}
		}

	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);