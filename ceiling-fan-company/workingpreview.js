//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// 
  //'use strict';
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
	exp.log('Test1 v16 - Desktop');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#Menu');

	// Check for a condition and return false if it has not been met
  //if (exp.condition && !exp.condition.length) {
  //exp.log('Test1 failed a condition');
  //return false;
  //}

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
				<a href='http://www.theceilingfancompany.co.uk/'><img src='//cdn.optimizely.com/img/174847139/404ed3e544bf43228f8cc8039ae3ec7f.png' width='462'></a>\
				<div class='value-prop'>\
					<p>Official retailer for Fantasia Fans</p>\
					<img id='fantasia-logo' src='//cdn.optimizely.com/img/174847139/15dea4ea84384fe0ba7d3b23b0dd8049.png' style='float: left;'>\
					<p id='AWA-p2'>You can't buy cheaper - GUARANTEED</p><div style='clear: both'></div>\
				</div>",
		phone: "<div class='AWA-phone-side'>\
					<h1 style='font-size: 25px; font-family: \"Open Sans\", sans-serif; text-align: right; margin-top: 10px;'>Freephone: 08081684535</h1>\
				</div>",
		nav: "<nav id='AWA-primary_nav_wrap'>\
				<ul>\
				  <li><a id='AWA-home' href='http://www.theceilingfancompany.co.uk/'>Home</a></li>\
				  <li><a id='AWA-fwl' href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'>Fans with lights</a></li>\
				  <li><a id='AWA-fwol' href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'>Fans without lights</a></li>\
				  <li><a id='AWA-tfr' href='http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/'>Fantasia Ranges</a>\
				    <ul id='fantasia-range'>\
				      <li><a href='http://www.theceilingfancompany.co.uk/retro-desk-fans/'>Pedestal Fans & Retro Desk Fans</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/elite-range-of-ceiling-fans/'>Fantasia Elite Range of Ceiling Fans</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/'>Fantasia Ceiling Fan <br>Range</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/commercial-ceiling-fans/'>Commercial Ceiling Fans</a></li>\
				    </ul>\
				  </li>\
				  <li><a id='AWA-esf' href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'>Energy Saving Fans<a>\
				  <li><a id='AWA-fbc' href='http://www.theceilingfancompany.co.uk/brands/'>Fans by colour</a>\
				    <ul>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/White.html'>White</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Stainless-Steel.html'>Stainless Steel</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Brushed-Nickel.html'>Brushed Nickel</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Polished-Brass.html'>Polished Brass</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Black-%7B47%7D-Pewter.html'>Black / Pewter</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Chrome.html'>Chrome</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Chocolate-Brown.html'>Chocolate Brown</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Antique-Brass.html'>Antique Brass</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/brands/Brushed-Aluminium.html'>Brushed Aluminium</a></li>\
				    </ul>\
				  </li>\
				  <li><a  id='AWA-fa' href='http://www.theceilingfancompany.co.uk/ceiling-fan-accessories/'>Fan Accessories</a>\
				    <ul>\
				      <li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-controllers/'>Ceiling Fan Controllers</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-lighting/'>Ceiling Fan Lighting</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/drop-rods/'>Drop Rods</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/conversion-kits/'>Conversion Kits</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/other-accessories/'>Other Accessories</a></li>\
				      <li><a href='http://www.theceilingfancompany.co.uk/led-bulbs/'>LED Bulbs</a></li>\
				    </ul>\
				  </li>\
				</ul>\
			</nav>",
		topBoxes: 	"<div class='AWA-sub-menu'>\
						<a id='top-box-1' class='AWA-top-box-link' href='#'><div class='AWA-top-box'>\
							FREE next day UK Delivery<br> <span class='AWA-small'>With 1 hour deilvery slot</span>\
						</div></a>\
						<a id='top-box-2' class='AWA-top-box-link' href='#'><div class='AWA-top-box'>\
							Ultra low running costs for all fans\
						</div></a>\
						<a id='top-box-3' class='AWA-top-box-link' href='#'><div class='AWA-top-box'>\
							Price Match Promise<br> <span class='AWA-small'>You can't buy cheaper</span>\
						</div></a>\
					</div>",
		tagLineBox: "<div style='clear: both'></div><div class='AWA-tagline-box'>\
						<h2 id='AWA-tagline-1'>The Ceiling Fan Company - Exclusive supplies of Fantasia Fans and Accessories</h2>\
						<h2 id='AWA-title-holder'>Choose your fan</h2>\
						<div class='shh'>\
							<img src='//cdn.optimizely.com/img/174847139/ed049a55db5443238381562049f5c078.png'>\
						</div>\
					</div>",
		homeCategories: "<div class='AWA-home-categories'>\
							<div class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'>Ceiling Fans</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/68/images/297/amalfi_ss__43453__75527__47187.1405450691.320.320.jpg?c=2g'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-cfwl' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'>Ceiling Fans without lights</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/177/images/560/Belaire_WH__51981.1405451066.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-wcf' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/brands/White.html'>White Ceiling Fans</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/brands/White.html'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/195/images/606/commercial_fan__45129__51479__17582.1405450776.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-esf' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'>Energy Saving Fans</a>\
								</div>\
								<div class='AWA-home-category-pic'>\
									<a href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'><img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/201/images/618/Delta_BN_Aries_Drop_Light_off__14924.1405451268.320.320.jpg?c=2'></a>\
								</div>\
							</div>\
							<div id='AWA-cat-acc' class='AWA-home-category'>\
								<div class='AWA-home-category-title'>\
									<a href='http://www.theceilingfancompany.co.uk/conversion-kits/'>Accessories</a>\
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
							Quite simply, no other fans on the market are better quality or more beautifully designed.  We have been official suppliers of Fantasia Fans for over 15 years, so we know a lot about what makes a great ceiling fan. Here's just some of the reasons why Fantasia Fans are unsurpassed by any others:\
						</p>\
					</div>",
			icons: "<div class='AWA-icons'>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Up to 15 year warranty\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/db5ca3b596cf48edb6ae6c8a23a6d830.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/4ef682f4d44f425d827218438c494baf.png'>\
								<span class='AWA-icon-title-text'>Extended Warranties</span>\
								<p>Our fans are maintenance free and built to last, with all-metal motor housings and double-lacquered surfaces to keep them in pristine condition for many years to come. Each fan comes with up to a 15 year warranty – longer than any other ceiling fans on the market.  If you have any motor problems within ten years of buying your fan, just let us know and we'll repair or replace it free of charge.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Unbeatably quiet\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/8d7aa26cc05540edadec16479d8f0b78.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/e7dfd12f81604f1c92eac8bf18e9b296.png'>\
								<span class='AWA-icon-title-text'>The most silent on the market</span>\
								<p>All our ceiling fans are virtually silent because they are precision-engineered with large silicon steel motors, permanently sealed bearings and aerodynamically shaped blades. When the fan is on in your home, the loudest sounds you’ll hear are the birds in your garden and the ticking of your clock.\
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
								<span class='AWA-icon-title-text'>Remote control options</span>\
								<p>A number of fan models are operated by remote control as standard but those with pull cords can stil be fitted with a remote controller as an added option. We also supply single wall controls to operate fan speeds and to operate both the speeds and the fan light.\
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
								<span class='AWA-icon-title-text'>Uses existing light circuit</span>\
								<p>Your fan can be installed on a high ceiling, sloping ceiling or low ceiling as well as conservatory buildings – simply purchase the appropriate mounting. The fan runs from your existing light circuit using the same wiring, so it’s very easy to install. Using it is easy too. To switch your fan on and off and control the speed you have a choice of traditional pull cord, remote control, or wall control.\
								</p>\
							</div>\
						</div>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Easy to install and use\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/e7f9b25d69a7400c8db70d835b9512d4.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/48a19a974045466dbd84d0c97930c88c.png'>\
								<span class='AWA-icon-title-text'>Versatile Installation</span>\
								<p>Our range consists of drop mount, dual mount and flush mount fans to fit varying ceiling heights, with a selection of longer drop rods. Conversion kits and special fixings for conservatories are also available. Whatever your installation requirements there will be a Fantasia fan to suit your needs.\
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
						<h3>Save on Energy Costs</h3>\
						<p>\
							Our fans cost very little to run, as they need very little energy, similar to a standard light fitting. In fact you use more on energy when you switch on a 100 watt light bulb.\
						</p>\
							All our fans have precision engineered, silicon steel motors which are highly efficient to run. Some models come with ultra-low energy LED lights (instead of halogen bulbs) and others have a DC motor which uses 60% less power than a standard fan.\
						</p>\
						<p>\
							What's more, our ceiling fans can actually save you money on your fuel bills. The winter setting re-circulates warm air trapped at ceiling level, which distributes heat evenly throughout the room eliminating cold spots and draughts. Tests have shown that, used correctly, our ceiling fans give you savings of up to 10% on energy bills through the winter months.\
						</p>\
					</div>",
			popup3: "<div id='AWA-popup-3'>\
						<img id='AWA-close-3' src='http://dd6zx4ibq538k.cloudfront.net/static/images/2841/741b85a31acf39c429531efa37ef0ca2_100_100.png' width='16' height='16px' style='float: right'>\
						<h3>Price Match Promise</h3>\
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
						<div class='AWA-filter-1'>\
							<span class='AWA-filter-title'>Shop by feature:</span>\
							<ul>\
								<li><label><input type='checkbox' name='filter-1' value='white'> White,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='energy saving'> Low Energy,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='LED Option'> LED Option,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='remote-complete'> Complete with Remote Control,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='remote-compatible'> Compatible with Remote Control</label></li>\
							</ul>\
						</div>\
						<div class='AWA-filter-2'>\
							<span class='AWA-filter-title'>Shop by price:</span>\
							<ul>\
								<li><label><input type='checkbox' name='filter-1' value='0-136'>&pound;0 - &pound;136,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='137-205'>&pound;137 - &pound;205,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='206-273'>&pound;206 - &pound;273,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='274-342'>&pound;274 - &pound;342,</label></li>\
								<li><label><input type='checkbox' name='filter-1' value='343-410'>&pound;343 - &pound;410</label></li>\
							</ul>\
						</div>\
						<div style='clear:both'></div>\
					</div>",
			installation: 	"<div id='AWA-installation'>\
								<img src='//cdn.optimizely.com/img/174847139/7d94767b383b4d999e3d1bf94cd9270d.jpg' width='892'>\
								<p>\
									Your fan comes with all the fixings required as well as an easy-to-follow installation guide.\
								</p>\
								<p>\
									Installing a fan is similar to installing a light fitting. Simply wire into your existing lighting circuit (two core and earth). Connect the coloured wires of the fan to the matching coloured wires of your household electricity supply, following the coloured diagrams supplied in your guide.\
								</p>\
								<p>\
									For peace of mind, many people prefer to have their ceiling fans installed by a qualified electrician. Should you decide to do this, then rest assured, it should be a simple and quick job for them to do. For technical advice please call 01959 564440 or email <a href='mailto:technical@fantasiaceilingfans.com'>technical@fantasiaceilingfans.com</a>.\
								</p>\
								<p>\
									NOTE:  Your ceiling should be at least 7ft 6\"  (2.3m) from the floor and the tips of the fan need to be at least 8\" (20cm) away from any objects such as a beam or sloping walls. Please check your ceiling is solidly constructed (eg: standard joists and plaster, not plasterboard) as the fixing point needs to be capable of supporting ten times the weight of the fan due to the thrust generated by the movement of the blades. \
								</p>\
								<p>\
									Everything you need to install the fan is included in the box. However, if you have a sloping ceiling you may need to purchase an additional mounting.  If you have a very high ceiling you or a conservatory, you may need to purchase a drop rod and conversion kit.\
								</p>\
							</div>",
			footerPlate: "<img width='115' height='150' style='float: right' src='//cdn.optimizely.com/img/174847139/a76452b6ffc94005ab01edf5093bf776.jpg'>",
			deliveryTab: "<div>\
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
			valueProposition: 	"<div style='clear: both;'></div><div class='AWA-value-proposition'>\
									<h2>Why Choose Fantasia Ceiling Fans?</h2>\
									<div class='AWA-vp-left'>\
										<div class='AWA-vp-item'>\
											<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/30150efab042410887d21cd41df36f25.png'> BUILT TO LAST - Up to 15 year warranty\
										</div>\
										<div class='AWA-vp-item'>\
											<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/30150efab042410887d21cd41df36f25.png'> ULTRA QUIET - the most silent on the market\
										</div>\
										<div class='AWA-vp-item'>\
											<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/30150efab042410887d21cd41df36f25.png'> SAVE ENERGY - cut 10% off winter fuel bills\
										</div>\
									</div>\
									<div class='AWA-vp-right'>\
										<div class='AWA-vp-item'>\
											<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/30150efab042410887d21cd41df36f25.png'> REMOTE CONTROL OPTIONS\
										</div>\
										<div class='AWA-vp-item'>\
											<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/30150efab042410887d21cd41df36f25.png'> EASY TO INSTALL - uses existing light circuit\
										</div>\
										<div class='AWA-vp-item'>\
											<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/30150efab042410887d21cd41df36f25.png'> GREAT CHOICE - huge range of colours and sizes\
										</div>\
									</div>\
								</div>",
			eliteTicks: "<div style='clear: both;'></div><div class='AWA-elite-ticks'>\
							<div class='AWA-elite-item'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> FANS WITH A DIFFERENCE - to create that wow factor when you walk in the room\
							</div>\
							<div class='AWA-elite-item'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> EXCEPTIONAL STYLING - giving you elegant air-movement, without compromise\
							</div>\
							<div class='AWA-elite-item'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> CUTTING-EDGE TECHNOLOGY - such as low energy motors, LED lighting and patented designs\
							</div>\
						</div>",
			commercialTicks: "<div style='clear: both;'></div><div class='AWA-commercial-ticks'>\
							<div class='AWA-commercial-item'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> VERSATILE INSTALLATION - Suitable for all industrial installations such as offices, warehouses and other public places\
							</div>\
							<div class='AWA-commercial-item'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> CONTROLLERS - Commercial fan controllers are available but must be purchased separately depending on installation	\
							</div>\
							<div class='AWA-commercial-item'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> DROP RODS - The larger 48\" and 56\" commercial fans come with two different length drop rods - 12\" and 24\"\
							</div>\
						</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	body {\
		background-image: url(//cdn.optimizely.com/img/174847139/8ed1084a0ab2467e86d528a5f93aa640.png);\
	}\
	#Container {\
		background-color: white;\
		padding: 18px;\
	}\
	.AWA-bold {\
		font-weight: bold;\
	}\
	#Footer {\
		border: solid 1px black;\
		font-size: 13px;\
		height: 150px;\
		padding-top: 0;\
		margin-top: 50px;\
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
		width: 413px;\
  		margin-left: 44px;\
  		border: solid 1px lightgrey;\
	}\
	.AWA-logo-side .value-prop #AWA-p2 {\
		width: 138px;\
	}\
	.AWA-logo-side .value-prop p {\
		width: 110px;\
		padding-left: 15px;\
		padding-right: 15px;\
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
		font-family: "Open Sans", sans-serif;\
		margin-top:15px;\
		margin-bottom: 11px;\
		border: solid 1px lightgray;\
		height: 50px;\
		border-left: none;\
  		border-right: none;\
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
		font-size:14px;\
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
		background-color: #C2CDD7;\
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
		font-size: 12px;\
		padding: 10px 5px 10px 10px;\
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
		border: solid 1px lightgray;\
		margin-left: -1px;\
		margin-top: 0px !important;\
		-webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.45);\
		-moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.45);\
		box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.45);\
	}\
	#AWA-primary_nav_wrap #AWA-home {\
		margin-left: 15px;\
		width: 53px;\
	}\
	#AWA-primary_nav_wrap #AWA-fwl {\
		width: 126px;\
	}\
	#AWA-primary_nav_wrap #AWA-fwol {\
		width: 147px;\
	}\
	#AWA-primary_nav_wrap #AWA-tfr {\
		width: 130px;\
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
		float: right;\
		font-style: italic;\
		padding-bottom: 10px;\
	}\
	.AWA-home-category {\
		width: 300px;\
		background-color:#C2CDD7;\
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
		margin-bottom: 15px;\
	}\
	.AWA-why-us h2 {\
		font-size: 15px;\
		padding-bottom: 10px;\
		display: inline-block;\
	}\
	.AWA-why-us p {\
		margin-bottom: 0px;\
	}\
	.AWA-checkmark {\
		vertical-align: middle;\
	}\
	.AWA-icon {\
		width: 290px;\
		float: left;\
		margin-left: 15px;\
		margin-right: 15px;\
		margin-top: 30px;\
	}\
	.AWA-icon-title {\
		font-weight: bold;\
		font-size: 14px;\
		padding-bottom: 3px;\
	}\
	.AWA-icon-box {\
		background-color: #a6a6a6;\
		height: 202px;\
		color: white;\
		padding: 10px;\
	}\
	.AWA-icons div:nth-child(8) .AWA-icon-box, .AWA-icons div:nth-child(7) .AWA-icon-box {\
		height: 196px;\
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
		background-color: #5a7488;\
		color: white;\
		text-decoration: none;\
		-moz-box-shadow: 0 0 5px #ccc;\
		-webkit-box-shadow: 0 0 5px #ccc;\
		box-shadow: 0 0 5px #8E8E8E;\
		border: solid 1px rgba(255, 255, 255, 0.71);\
	}\
	.AWA-top-box-link:hover {\
		color: #C2CDD7;\
	}\
	#top-box-2 {\
		margin-left: 23px;\
		margin-right: 23px;\
	}\
	#top-box-2 > div {\
		margin-top: 7px;\
	}\
	.AWA-home-category:hover {\
		background-color: rgb(231, 231, 231);\
	}\
	#AWA-popup-2 > p:nth-child(2) {\
		margin-top: 20px;\
	}\
	#QuickSearch {\
		z-index: 1000 !important;\
	}\
	.AWA-value-proposition {\
		font-family: "Open Sans", sans-serif;\
		font-size: 14px;\
		background-color: #C2CDD7;\
		height: 145px;\
	}\
	.AWA-value-proposition h2 {\
		padding-top: 8px;\
		text-align: center;\
		margin-bottom: 15px;\
		margin-top: 20px;\
		font-size: 18px;\
	}\
	.AWA-vp-left {\
		width: 450px;\
		float: left;\
		margin-left: 86px;\
	}\
	.AWA-vp-right {\
		float: left;\
	}\
	.AWA-elite-ticks {\
		width: 673px;\
		margin: 0 auto;\
		padding: 15px;\
	}\
	.AWA-commercial-ticks {\
		padding: 15px;\
	}\
	#SearchForm input.Textbox {\
		height: 25px;\
		font-size: 16px;\
	}\
	.Content .ProductList li:hover, .Content .ProductList li.Over, .fastCartContent .ProductList li:hover, .fastCartContent .ProductList li.Over {\
		background-color: rgba(90, 116, 136, 0.26);\
	}\
	.shh img {\
		float: right;\
		width: 278px;\
	}\
	#AWA-title-holder {\
		float: left;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');
	    $('head').append("<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>");

			// Load fan data
			var fandata = {
			  "Tau": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"Y", "Speeds":6, "Size":"50\"/1270CM", "Warranty":"15 YEARS", "Bulb Type":"1 x 10w GX53", "Notes":""},
			  "Zeta": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"Y", "Speeds":6, "Size":"52\"/1320CM", "Warranty":"15 YEARS", "Bulb Type":"1 x 60w G9", "Notes":""},
			  "Delta": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"Y", "Speeds":6, "Size":"52\"/1320cm or 44\"/1120cm", "Warranty":"15 YEARS", "Bulb Type":"2 x G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
			  "Blade": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Included", "Light":"NO", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070CM", "Warranty":"15 YEARS", "Bulb Type":"", "Notes":""},
			  "Omega": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"Y", "Speeds":6, "Size":"52\"/1320cm or 44\"/1120cm", "Warranty":"", "Bulb Type":"2 X G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
			  "Viper Plus": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm or 44\"/1120cm", "Warranty":"15 YEARS", "Bulb Type":"2 X G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
			  "Splash": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"36\"/914cm", "Warranty":"15 YEARS", "Bulb Type":"7 x 1w LED", "Notes":""},
			  "Viper": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm or 44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"2 X G9", "Notes":"can be fitted flush if a flush mount kit is purchased"},
			  "Sigma": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"2 x 502 G9", "Notes":""},
			  "Propeller": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm or 44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"1 x 60w G9", "Notes":""},
			  "Orion": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"1 x 100w J-Type 78mm Halogen", "Notes":""},
			  "Phoenix": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"2 x G9", "Notes":""},
			  "Spinnaker": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320cm or 40\"/1020cm", "Warranty":"10 YEARS", "Bulb Type":"3 x G9", "Notes":""},
			  "Gemini": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"3 x GU10", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
			  "Medina": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320cm", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":"this fan is IP rated which means it can be fitted outdoors"},
			  "Palm": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320cm", "Warranty":"10 YEARS", "Bulb Type":"2 60w ES", "Notes":"this fan is IP rated which means it can be fitted outdoors"},
			  "Wicker": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"48\"/1220cm", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":"this fan is IP rated which means it can be fitted outdoors"},
			  "Trinity": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"44\"/1120cm", "Warranty":"10 YEARS", "Bulb Type":"1 x 100w J-Type 78mm Halogen", "Notes":""},
			  "Amalfi": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"36\"/914cm", "Warranty":"10 YEARS", "Bulb Type":"3 x 60w G9", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
			  "Riviera": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320CM", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":""},
			  "Classic": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Compatible", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/1320CM", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":""},
			  "Vienna": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"3 x 60w BC or 3 x G9", "Notes":"comes with an 18\" drop rod but can be fitted with shorter/longer rods"},
			  "Mayfair": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"Y", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"10 YEARS", "Bulb Type":"3 x G9", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
			  "Capri": { "Flush Mount":"Y", "Drop Mount":"", "Dual Mount":"", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"36\"/914cm", "Warranty":"10 YEARS", "Bulb Type":"3 x 60w BC  ", "Notes":"can be fitted with a drop rod if a conversion kit is purchased"},
			  "Vento Hurricane": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"Included", "Light":"NO", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"54\"/1370cm", "Warranty":"10 YEARS", "Bulb Type":"", "Notes":""},
			  "Neptune": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Included", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"52\"/ 1320cm or44”/1120cm", "Warranty":"5 YEARS", "Bulb Type":"2 x G9", "Notes":""},
			  "Genoa": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x G9", "Notes":""},
			  "Belaire": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x 60w BC  ", "Notes":""},
			  "Bali": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x GU10", "Notes":""},
			  "Scorpion": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm", "Warranty":"5 YEARS", "Bulb Type":"3 x 60w E14", "Notes":""},
			  "Rio": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm or 36\"/914cm", "Warranty":"5 YEARS", "Bulb Type":"3 x 60w E14", "Notes":""},
			  "Atlanta": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"30\"/762cm", "Warranty":"5 YEARS", "Bulb Type":"1 x E14", "Notes":""},
			  "Rimini": { "Flush Mount":"", "Drop Mount":"", "Dual Mount":"Y", "Remote Control":"Compatible", "Light":"Included", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"42\"/1070cm or 36\"/914cm", "Warranty":"5 YEARS", "Bulb Type":"1 x B22 Golf", "Notes":""},
			  "Commercial": { "Flush Mount":"", "Drop Mount":"Y", "Dual Mount":"", "Remote Control":"No remote control", "Light":"NO", "LED Option":"", "Low Energy Motor":"", "Speeds":3, "Size":"", "Warranty":"2 YEARS", "Bulb Type":"", "Notes":""}
			};

		var dropRods = {
			"Tau": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "",
				"kit": ""
			},
			"Zeta": {
				"twelve": "",
				"eighteen": "",
				"thrity": "",
				"fourtyEight": "",
				"seventyTwo": "",
				"kit": ""
			},
			"Delta": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/elite-flush-mount-kit/"
			},
			"Blade": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/conversion-kit/"
			},
			"Omega": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/elite-flush-mount-kit/"
			},
			"Viper Plus": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/elite-flush-mount-kit/"
			},
			"Splash": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "",
				"kit": ""
			},
			"Viper": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/elite-flush-mount-kit/"
			},
			"Sigma": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Propeller": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Orion": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "",
				"kit": ""
			},
			"Phoenix": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Spinnaker": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Gemini": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/conversion-kit/"
			},
			"Medina": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Palm": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Wicker": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Trinity": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Amalfi": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/conversion-kit/"
			},
			"Riviera": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Classic": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Vienna": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Mayfair": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/conversion-kit/"
			},
			"Capri": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": "http://www.theceilingfancompany.co.uk/conversion-kit/"
			},
			"Vento Hurricane": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Neptune": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Genoa": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Belaire": {
				"twelve": "http://www.theceilingfancompany.co.uk/12-30cm-27mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-27mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-27mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-27mm-drop-rod/",
				"kit": ""
			},
			"Bali": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Scorpion": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Rio": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Atlanta": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Rimini": {
				"twelve": "http://www.theceilingfancompany.co.uk/fantasia-12-30cm-22mm-drop-rod/",
				"eighteen": "http://www.theceilingfancompany.co.uk/fantasia-18-46cm-22mm-drop-rod/",
				"thrity": "http://www.theceilingfancompany.co.uk/30-76cm-22mm-drop-rod/",
				"fourtyEight": "http://www.theceilingfancompany.co.uk/48-122cm-22mm-drop-rod/",
				"seventyTwo": "http://www.theceilingfancompany.co.uk/72-183cm-22mm-drop-rod/",
				"kit": ""
			},
			"Commercial": {
				"twelve": "",
				"eighteen": "",
				"thrity": "",
				"fourtyEight": "",
				"seventyTwo": "",
				"kit": ""
			}
		};

	    var url = [location.protocol, '//', location.host, location.pathname].join('');


    	/* --- FOOTER --- */
		$('#Footer').html(exp.vars.footer).append(exp.vars.footerPlate);


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

    	$('.AWA-phone-side').append(topMenu).append(search);

    	// Remove search button
    	$('#SearchForm input[type=image]').remove();

    	// Add placeholder text to search bar
    	$('#SearchForm #search_query').attr('placeholder', 'search');

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


			$('#Wrapper').before(exp.vars.valueProposition);

		} else if (window.location.pathname == "/search.php") {
			$('#LayoutColumn1').remove();
			// Do nothing-Don't enter else block
		} else if (window.location.pathname == "/checkout.php") {
			// Do nothing-Don't enter else block
		} else if (window.location.pathname.substring(0, 8) == "/compare") {
			// Do nothing-Don't enter else block
		} else {
			var sortBox = $('.SortBox');
			$('#LayoutColumn1').remove();
			$('#LayoutColumn3').remove();
			$('#CategoryHeading').remove();
			$('#CategoryPagingTop').remove();

			$('#LayoutColumn2').attr('style', 'width: inherit');
			var listingCSS = '\
				.Content .ProductList li {\
					border: solid 1px lightgray;\
					width: 300px !important;\
					height: 329px !important;\
					background-color: #C2CDD7;\
				}\
				.ProductList .ProductImage:not(.QuickView) img {\
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
					background-color: white;\
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
					background-color: white;\
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
					background-color: #147E1E;\
					color: white !important;\
					clear: both;\
					float: right;\
				}\
				.AWA-buy:hover {\
					background-color: gray;\
				}\
				.Content a:hover {\
					text-decoration: none;\
				}\
				.ProductCompareButton {\
					border: solid 1px lightgray;\
					width: 90px;\
					clear: left;\
					padding: 4px;\
					margin-top: 10px;\
					background-color: white;\
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
					width: 110px;\
					text-align: left;\
					float: left;\
					margin-bottom: 5px;\
				}\
				.AWA-filter {\
					border: solid 1px lightgray;\
					padding: 10px;\
					width: 379px;\
					height: 105px;\
					float: left;\
					margin-top: 10px;\
  					margin-bottom: 10px;\
  					margin-left: 29px;\
				}\
				.AWA-filter p {\
					float: left;\
					height: 105px;\
					font-weight: bold;\
				}\
				.AWA-filter-1, .AWA-filter-2 {\
					float: left;\
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
				}\
				#AWA-breadcrumb {\
					margin-bottom: 5px;\
					width: 366px;\
					float: left;\
				}\
				#fancy_outer {\
					z-index: 6000 !important;\
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


			var classifications = ["Tau", "Zeta", "Delta", "Blade", "Omega", "Viper Plus", "Splash", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento Hurricane", "Neptune", "Genoa", "Belaire", "Bali", "Scorpion", "Rio", "Atlanta", "Rimini", "Commercial"];

			$('.ProductImage').each(function() {
				var productLink = $(this).find('a').attr('href');
				$(this).find('a').wrap("<div class='AWA-image-wrap'></div>");
				var currentImage = $(this).find('img').first();

				
				var strikePrice = $.trim($(this).next().next().find('.RetailPriceValue').text()).slice(1);
				

				var strike = $(this).next().next().find('.RetailPriceValue').text();
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
					$(this).next().prepend("<div class='AWA-savings'><div>£" + moneyOff + " Off</div></div>");
				}

				$(this).next().find('.AWA-savings').prepend("<div><strike>" + strike + "</strike></div>");

				$(this).parent().prepend("<div class='AWA-almafi-title'></div>");
				var title = $(this).next().find('a').text();

				for (var i = 0; i < classifications.length; i++) {
					if (title.indexOf(classifications[i]) != -1) {
						$(this).parent().find('.AWA-almafi-title').text(classifications[i]);
					}
				}
				if ($(this).parent().find('.AWA-almafi-title').text() == "" && title.indexOf("Viper") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Viper");
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

			$('.AWA-image-wrap img').attr('style', 'width: 283px');

			// Hide 0 ratings but keep positioning
			$('.Rating0').css('visibility','hidden');

			$('.ProductPriceRating').remove();
			$('.ProductActionAdd').remove();

			$('#CategoryBreadcrumb').after(exp.vars.filter);
			$('.AWA-filter').before(sortBox);


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

			$('.AWA-filter').on('change', 'input:checkbox[value="remote-complete"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var category = $(this).find('.AWA-almafi-title').text();
						if (fandata[category] != undefined && fandata[category]["Remote Control"] == "Included") {
							$(this).addClass('remote-complete');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.remote-complete').hide();
				} else {
					uncheck("remote-complete");
				}
			});

			$('.AWA-filter').on('change', 'input:checkbox[value="LED Option"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var category = $(this).find('.AWA-almafi-title').text();
						if (fandata[category] != undefined && fandata[category]["LED Option"] == "Y") {
							if ($(this).find('strong').text().toLowerCase().indexOf("with light") != -1) {
								$(this).addClass('led-option');
								$(this).addClass('filtered');
							}
						}
					});
					$('.ProductList').find('li:visible').not('.led-option').hide();
				} else {
					uncheck("led-option");
				}
			});

			$('.AWA-filter').on('change', 'input:checkbox[value="remote-compatible"]', function() {
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var category = $(this).find('.AWA-almafi-title').text();
						if (fandata[category] != undefined && fandata[category]["Remote Control"] == "Compatible") {
							$(this).addClass('remote-compatible');
							$(this).addClass('filtered');
						}
					});
					$('.ProductList').find('li:visible').not('.remote-compatible').hide();
				} else {
					uncheck("remote-compatible");
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
				if ($('.remote-complete').length > 0) {
					$('input:checkbox[value="remote-complete"]').trigger('click');
					$('input:checkbox[value="remote-complete"]').trigger('click');
				}
				if ($('.led-option').length > 0) {
					$('input:checkbox[value="LED Option"]').trigger('click');
					$('input:checkbox[value="LED Option"]').trigger('click');
				}
				if ($('.remote-compatible').length > 0) {
					$('input:checkbox[value="remote-compatible"]').trigger('click');
					$('input:checkbox[value="remote-compatible"]').trigger('click');
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
				if ($('.remote-complete').length > 0) {
					$('input:checkbox[value="remote-complete"]').trigger('click');
					$('input:checkbox[value="remote-complete"]').trigger('click');
				}
				if ($('.led-option').length > 0) {
					$('input:checkbox[value="LED Option"]').trigger('click');
					$('input:checkbox[value="LED Option"]').trigger('click');
				}
				if ($('.remote-compatible').length > 0) {
					$('input:checkbox[value="remote-compatible"]').trigger('click');
					$('input:checkbox[value="remote-compatible"]').trigger('click');
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
				if ($(this).is(':checked')) {
					$('.ProductList').find('li').each(function() {
						var price = $(this).find('.AWA-price').text().slice(1);
						if (price <= 136) {
							$(this).addClass('0-136');
							$(this).addClass('price-f');
						}
					});
					if ($('.filtered').length > 0) {
						$('.ProductList').find('li:visible').not('.price-f').hide();
						$('.ProductList').find('li').find('.0-136').show();
						retainFilters();
					} else {
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





		/* --- UNIVERSAL STUFF --- */


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


		switch(url) {
		    case "http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/":
		    case "http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/":
		    case "http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/":
		    case "http://www.theceilingfancompany.co.uk/retro-desk-fans/":
		    case "http://www.theceilingfancompany.co.uk/elite-range-of-ceiling-fans/":
		    case "http://www.theceilingfancompany.co.uk/commercial-ceiling-fans/":
		    case "http://www.theceilingfancompany.co.uk/fantasia-viper-fans/":
		    case "http://www.theceilingfancompany.co.uk/remote-control-ceiling-fans/":
		    case "http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/":
		    case "http://www.theceilingfancompany.co.uk/conversion-kits/":
		    case "http://www.theceilingfancompany.co.uk/drop-rods/":
		    case "http://www.theceilingfancompany.co.uk/other-accessories/":
		    case "http://www.theceilingfancompany.co.uk/ceiling-fan-lighting/":
		    case "http://www.theceilingfancompany.co.uk/ceiling-fan-controllers/":
		    case "http://www.theceilingfancompany.co.uk/led-bulbs/":
		        insertCategoryTitle();
		        break;
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
		    	insertCategoryTitle();
		    	removeDuplicateCategoryTitle();
		        break;
		    default:
		        //default code block
		}

		function insertCategoryTitle() {
			var categoryTitle = $('.Breadcrumb').find('li:not(:has(a))').text();
			$('#AWA-title-holder').text(categoryTitle);
			$('#AWA-title-holder').attr('style', 'margin-left: 2px;');

			// Remove fan titles
			$('.ProductDetails').find('strong').attr('style', 'display: none');
		}

		function removeDuplicateCategoryTitle() {
			$('#BrandContent').find('h2').css('visibility', 'hidden');
		}


		getBreadCrumb();
		function getBreadCrumb() {
			//console.warn("CURRENT BREADCRUMB: " + sessionStorage.getItem('lastPage'));
			// Insert link to last page
			if (sessionStorage.getItem('lastPage') != "null") {
				$('#AWA-tagline-1').after("<div id='AWA-breadcrumb'>Previous Page: <a id='AWA-last-page' href='" + sessionStorage.getItem('url') + "'>" + sessionStorage.getItem('lastPage') + "</a></div>");
			}

			var breadCrumbLength = $('.Breadcrumb').find('li:not(:has(a))').length;

			if (breadCrumbLength == 1) {
				sessionStorage.setItem('lastPage', $('.Breadcrumb').find('li:not(:has(a))').text());
				sessionStorage.setItem('url', window.location.href);
				//console.info('Last page set to: ' + $('.Breadcrumb').find('li:not(:has(a))').text());
			} else if (breadCrumbLength > 1) {
				sessionStorage.setItem('lastPage', $('.BlockContent').find('h2').text());
				sessionStorage.setItem('url', window.location.href);
				//console.info('Last page set to: ' + $('.Breadcrumb').find('li:not(:has(a))').text());
			} else if (window.location.href == "http://www.theceilingfancompany.co.uk/") {
				sessionStorage.setItem('lastPage', "Home");
				sessionStorage.setItem('url', window.location.href);
				//console.info('Last page set to HOME');
			} else {
				sessionStorage.setItem('lastPage', null);
				sessionStorage.setItem('url', window.location.href);
				//console.info('Set to null');
			}

			$('.Block.Moveable.Panel.Breadcrumb').remove();
			if ($('#AWA-last-page').text() == "null") {
				$('#AWA-breadcrumb').remove();
				//console.log("Removed null breadcrumb");
			}
			if (url != "http://www.theceilingfancompany.co.uk/") {
				$('#AWA-tagline-1').remove();
			} 
		}

		if (url == "http://www.theceilingfancompany.co.uk/") {
			//console.log('removing breadcrumb')
			$('#AWA-breadcrumb').remove();
		}

		if (url == "https://www.theceilingfancompany.co.uk/login.php?from=account.php%3Faction%3Dorder_status") {
			$('.CreateAccount').remove();
		}

		switch(url) {
		    case "http://www.theceilingfancompany.co.uk/about-fantasia-fans":
		    case "http://www.theceilingfancompany.co.uk/ceiling-fan-information":
		    case "http://www.theceilingfancompany.co.uk/faqs":
		    case "http://www.theceilingfancompany.co.uk/8-reasons-to-buy":
		    case "http://www.theceilingfancompany.co.uk/specifications":
		    case "http://www.theceilingfancompany.co.uk/wiring":
		    case "http://www.theceilingfancompany.co.uk/the-definitive-guide-to-using-ceiling-fans-in-winter":
		    case "http://www.theceilingfancompany.co.uk/delivery":
		    case "http://www.theceilingfancompany.co.uk/contact-us":
		    case "http://www.theceilingfancompany.co.uk/terms-conditions":
		    	$(".Content .ProductList li").attr('style', 'height: 349px !important');
		        break;
		}


		/* --- Product Page --- */
		if ($('.ProductMain').length > 0) {

			var tabs = 	"<section id='AWA-product-tabs'>\
									<div class='AWA-tab' tabindex='1'>\
										Description\
									</div>\
									<div class='AWA-tab' tabindex='2'>\
										Specification\
									</div>\
									<div class='AWA-tab' tabindex='3'>\
										Reviews\
								    </div>\
									<div class='AWA-tab' tabindex='4'>\
										Delivery & Returns\
								    </div>\
									<div class='AWA-tab' tabindex='5' id='install-tab'>\
										Installation\
								    </div>\
								</section>";
			var tabContent = 	"<div id='AWA-tab-content'>\
									<div id='AWA-tab-1' class='AWA-panel'>\
										description\
									</div>\
									<div id='AWA-tab-2' class='AWA-panel'>\
										specification\
									</div>\
									<div id='AWA-tab-3' class='AWA-panel'>\
										reviews\
									</div>\
									<div id='AWA-tab-4' class='AWA-panel'>\
										delivery\
									</div>\
									<div id='AWA-tab-5' class='AWA-panel'>\
										installation\
									</div>\
								</div>";

			var productPageCSS = '\
			.AWA-tab {\
			    display: inline-block;\
			    border: solid 1px lightgray;\
			    padding: 10px;\
			    border-bottom: 0;\
			}\
			.AWA-tab:hover {\
				cursor: pointer;\
				cursor: hand;\
			}\
			.AWA-panel {\
				border: solid 1px lightgray;\
				padding: 15px;\
			}\
			.AWA-active {\
				background-color: green;\
				color: white;\
			}\
			#AWA-tab-content {\
				margin-bottom: 20px;\
				width: 924px;\
			}\
			#AWA-tab-2 .Label {\
				float: left;\
				font-weight: bold;\
				margin-right: 6px;\
				margin-bottom: 10px;\
			}\
			#AWA-product-code {\
				float: left;\
				border: solid 0px black;\
				clear: both;\
			}\
			.ProductThumbImage {\
				border: solid 12px #C2CDD7;\
				padding: 10px;\
				padding-left: 50px;\
 				padding-right: 50px;\
			}\
			.ProductTinyImageList {\
				width: 363px !important;\
			}\
			.ProductTinyImageList ul {\
				width: 363px !important;\
			}\
			.ImageCarouselBox {\
				padding-left: 0 !important;\
			}\
			.ProductThumb {\
				width: 454px !important;\
				border: solid 0px black;\
			}\
			#AWA-product-section {\
				float: right;\
  				width: 324px;\
			}\
			.AWA-product-info {\
				margin-top: 10px;\
			}\
			.AWA-product-info label {\
				float: right;\
				padding: 5px;\
				width: 98px;\
  				padding-right: 0;\
  				font-size: 14px;\
  				margin-right: 15px;\
			}\
			.AWA-product-info-value {\
				float: right;\
				padding: 5px;\
				width: 76px;\
				font-size: 14px;\
			}\
			.productAttributeList {\
				margin-left: 25px;\
				margin-top: 15px;\
			}\
			.productAttributeList .productAttributeLabel {\
				margin: 0 0 6px -156px !important;\
			}\
			.PrimaryProductDetails .ProductThumb {\
				margin-left: 35px;\
			}\
			.ProductDetailsGrid .DetailRow {\
				float: left;\
				margin-left: 87px;\
				width: 243px;\
				margin-top: 15px;\
			}\
			.ProductDetailsGrid .DetailRow {\
				padding-left: 0;\
			}\
			.ProductDetailsGrid .Label {\
				margin-left: 0px;\
				text-align: left;\
				width: 72px;\
			}\
			.BulkDiscount input[type=image] {\
				margin-left: 50px;\
				margin-top: -13px;\
			}\
			#AWA-warranty {\
				float: left;\
				margin-top: 3px;\
				text-align: center;\
				margin-left: 25px;\
				padding: 10px;\
				width: 305px;\
			}\
			#AWA-control-options {\
				position: absolute;\
				margin-top: -42px;\
				margin-left: -121px;\
			}\
			.AWA-pop-image {\
				display: none;\
				position: absolute;\
				z-index: 25;\
			}\
			.AWA-newList {\
				display: block;\
				text-align: center;\
				padding-top: 10px;\
				margin-left: 0;\
				margin-bottom: 20px;\
			}\
			.AWA-newList li {\
				display: inline-block;\
				margin-right: 39px;\
			}\
			#AWA-product-tabs {\
				margin-top: 30px;\
			}\
			#AWA-product-section img {\
				float: right;\
				margin-bottom: 10px;\
				margin-right: 22px;\
			}\
			.AWA-spec-item {\
				margin-top: 10px;\
			}\
			#AWA-prod-right {\
				border: solid 1px lightgray;\
				float: left;\
				width: 415px;\
				margin-left: 15px;\
				padding-bottom: 10px;\
				padding-top: 15px;\
			}\
			.AWA-product-info .AWA-large, .AWA-product-info #AWA-our-price {\
				font-size: 18px;\
			}\
			#add-dr, #add-ck {\
				font-weight: bold;\
			}\
			#show-dr {\
				margin-top: 18px;\
				margin-left: 15px;\
			}\
			#show-ck {\
				margin-left: 15px;\
			}\
			.AWA-drop-list {\
				list-style-type: none;\
			}';


			$('head').append('<style type="text/css">'+productPageCSS+'</style>');

			$('.PinterestButtonContainer').remove();
			$('.Clear.AddThisButtonBox').remove();




			$('.name:contains("Choose Blade Size")').attr('style', 'color: green;');
			$('.name:contains("Control Options")').attr('style', 'color: green;');
			$('.name:contains("Colour")').attr('style', 'color: green;');
			$('.name:contains("Choose Controller")').attr('style', 'color: green;');
			$('.name:contains("Pull Cord Operation")').text("Pull Cord Operation (free)");
			$('.name:contains("Bulb Options")').attr('style', 'color: green;');
			$('.name:contains("Choose Blade Shape")').attr('style', 'color: green;');
			$('.Label.QuantityInput').attr('style', 'color: green');

			// Enlarge thumbnail images if there are less than 4 so we can not mess with the carousel
			if ($('.ProductTinyImageList li').length < 4) {
				$('.ProductTinyImageList li').attr('style', 'height: 113px; width: 113px;');
				$('.ProductTinyImageList li').find('div:not(".TinyOuterDiv")').attr('style', 'height: 109px;');
				$('.ProductTinyImageList li').find('img').attr('style', 'width: 109px !important;');
			}


			$('.Block.Moveable.Panel.PrimaryProductDetails').find('hr').remove();




			$('#ProductDetails').after(tabs);
			$('#AWA-product-tabs').after(tabContent);

			$('.AWA-panel').hide();
			$('#AWA-tab-1').show();
			$('.AWA-tab').first().addClass('AWA-active');

			$('#AWA-product-tabs').on('click', '.AWA-tab', function() {
				$('.AWA-tab').removeClass('AWA-active');

				// Show associated panel
				var tabNum = $(this).attr('tabindex');
				$('.AWA-panel').hide();
				$('#AWA-tab-' + tabNum).show();

				// Highlight tab
				$(this).addClass('AWA-active');
			});

			$('#ProductDescription').find('h3').remove();
			$('#ProductReviews').find('h3').remove();

			$('#AWA-tab-1').html($('.ProductDescriptionContainer'));
			$('#AWA-tab-3').html($('.ProductReviewList'));
			$('#AWA-tab-3').prepend($('#ProductReviews'));
			$('#AWA-tab-4').html(exp.vars.deliveryTab);
			$('#AWA-tab-5').html(exp.vars.installation);


			var productCode = $('.DetailRow:contains("Product Code")');
			var brand = $('.DetailRow:contains("Brand")');
			var weight = $('.DetailRow:contains("Weight")');
			var delivery = $('.DetailRow:contains("Free Delivery")');

			$('#AWA-tab-2').html(productCode).append("<div style='clear: both'></div>").append(brand).append("<div style='clear: both'></div>").append(weight).append("<div style='clear: both'></div>").append(delivery);

			// Remove Brand and Free Deliver as per John
			$('.DetailRow:contains("Brand")').remove();
			$('.DetailRow:contains("Free Delivery")').remove();
			


			var productPageTitle = $('.BlockContent').find('h2').text();

			$('#AWA-title-holder').text(productPageTitle);
			$('#AWA-title-holder').attr('style', 'margin-left: 0; width: 392px;');
			$('.shh').attr('style', 'float: right');

			// Remove exiting title
			$('.BlockContent').find('h2').remove();
			$('.shh').after("<div id='AWA-product-code'>Product Code: " + $('.VariationProductSKU').text() + "</div>");

			


			// Remove guarantee
			$('.BlockContent p:contains("Lowest prices guaranteed")').remove();

			// Remove 0 star review
			$("img[src$='http://cdn2.bigcommerce.com/server5200/ego6j0ia/templates/__custom/images/IcoRating0.gif?t=1430214374']").remove();

			var youSaveAmount = $('.YouSaveAmount').text().substring(1);
			var ourPrice = $('.VariationProductPrice').text().substring(1);
			var RRPPrice = $('.Value').find('strike').text().substring(1);

			var priceSection = "<div id='AWA-product-section'>\
									<div class='AWA-product-info'><div style='clear: both'><div class='AWA-product-info-value'><strike>&pound;" + RRPPrice + "</strike></div><label>RRP Price</label><div style='clear:both'></div>\
									<div class='AWA-product-info'></div><div class='AWA-product-info-value'>&pound;" + youSaveAmount + "</div><label>You Save</label><div style='clear:both'></div>\
									<div class='AWA-product-info'><div class='AWA-product-info-value' id='AWA-our-price'>&pound;" + ourPrice + "</div><label class='AWA-large'>Our Price</label><div style='clear:both'></div>\
								<div>";
			$('.VariationProductPrice').bind("DOMSubtreeModified",function(){
				var newPrice = $('.VariationProductPrice').text();
				$('#AWA-our-price').text(newPrice);

				// Update Vienna thumbnail selection
				if (window.location.pathname == "/vienna-white/" || window.location.pathname == "/vienna-stainless-steel/" || window.location.pathname == "/fantasia-vienna-ceiling-fan-polished-brass-42/") {
					$('.productOptionViewRadio').on('change', 'input:radio[value=105]', function(e) {
				        if ($(this).is(':checked')) {
				        	setTimeout(function() {
				        		$('.ProductTinyImageList li:nth-child(1)').trigger('mouseover');
				        	}, 1300);
				        }
				    });

					$('.productOptionViewRadio').on('change', 'input:radio[value=120]', function(e) {
				        if ($(this).is(':checked')) {
				        	setTimeout(function() {
				        		$('.ProductTinyImageList li:nth-child(2)').trigger('mouseover');
				        	}, 1300);
				        }
				    });
				}

			});

			$('.ProductMain').before(priceSection);

			$('.Label:contains("Rating:")').next().find('span').remove();
			var starRating = $('.Label:contains("Rating:")').next();
			$('#AWA-product-section').prepend(starRating);

			// Remove old product info
			$('.ProductDetailsGrid').first().hide();

			// Remove catalog
			$('.ProductMain').find('span').last().remove();


			$('.BulkDiscount').find('input').attr('src', '//cdn.optimizely.com/img/174847139/a93de83e2ab842388e0cadbb178b3925.png');

			$('.Label:contains("Quantity")').parent().attr('style', 'width: 292px; padding: 16px;');


			// Add warranty info
			$('.ProductDetailsGrid .DetailRow').last().after("<div id='AWA-warranty'><strong>Warranty: <span></span></strong><br>\"[Our Fantasia Ceiling fan] has served us well for about 20 years!\" -Anne S.</div>");
			var warrantyLength = $.trim($('#ProductWarranty .ProductWarrantyContainer').text());
			$('#AWA-warranty span').text(warrantyLength);

			// Remove leftover junk
			$('#ProductDescription').remove();
			$('#ProductWarranty').remove();
	
			//setTimeout(function() {
				$('#Footer').html(exp.vars.footer);
				$('.SideRecentlyViewed').remove();
				$('.SideRelatedProducts').remove();
			//}, 1500)


			// Insert "Help me decide" links
			var controlImage = "<img class='AWA-pop-image' src='//cdn.optimizely.com/img/174847139/e44417e8bde649d8897bbc66f70ccf1d.jpg' width='290'>";
			var measuringUp = "<img src='//cdn.optimizely.com/img/174847139/09fd788469d94aa297cdc438d73cb607.jpg'>";
			var roomSize = "<img src='//cdn.optimizely.com/img/174847139/7d02870e407f40d2b2232f92beaa81ad.jpg'>";

			$('.productAttributeConfigurablePickListSet').find('span:contains("Control Options")').parent().parent().parent().append('<div class="AWA-options" id="AWA-control-options"><a href="#">Help me decide</a>' + controlImage + '</div>');


			$('.productAttributeConfigurablePickListSet').on('click', '.AWA-options a', function(e) {
				e.stopPropagation();
				e.preventDefault();
				var image = $(this).next();
				image.show();
			});

			$(window).click(function() {
			    $('.AWA-pop-image').hide();
			});



			var fanCategory;
			var newFanData = {};
			var light;
			var speeds;
			var size;
			var energySaving;
			var warranty;
			

			var classifications = ["Tau", "Zeta", "Delta", "Blade", "Omega", "Viper Plus", "Splash", "Viper", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento Hurricane", "Neptune", "Genoa", "Belaire", "Bali", "Scorpion", "Rio", "Atlanta", "Rimini", "Commercial"];


			var fanTitle = $('#AWA-title-holder').text();
			for (var i = 0; i < classifications.length; i++) {
				if (fanTitle.indexOf(classifications[i]) != -1) {
					fanCategory = classifications[i];
					populateFeatures();
				}
			}

			function populateFeatures() {
				newFanData.energySaving = fandata[fanCategory]["Low Energy Motor"];
				newFanData.speeds = fandata[fanCategory]["Speeds"];
				newFanData.size = fandata[fanCategory]["Size"];
				newFanData.warranty = fandata[fanCategory]["Warranty"];
				newFanData.remote = fandata[fanCategory]["Remote Control"];
				newFanData.LED = fandata[fanCategory]["LED Option"];
				newFanData.flush = fandata[fanCategory]["Flush Mount"];
				newFanData.drop = fandata[fanCategory]["Drop Mount"];
				newFanData.dual = fandata[fanCategory]["Dual Mount"];
				newFanData.bulb = fandata[fanCategory]["Bulb Type"];



				if (fanTitle.toLowerCase().indexOf("with light") != -1) {
					newFanData.light = "With light";
				} else {
					newFanData.light = "Light Compatible";
				}

				var newList = "<ul class='AWA-newList'>";


		    	if (newFanData.light) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>" + newFanData.light + "</span></li>";
		    	}
		    	if (newFanData.remote) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Remote " + newFanData.remote + "</span></li>";
		    	}
		    	if (newFanData.energySaving) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Low Energy</span></li>";
		    	}
		    	if (newFanData.speeds) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>" + newFanData.speeds + " Speeds</span></li>";
		    	}
		    	if (newFanData.size) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Size: " + newFanData.size + "</span></li>";
		    	}
		    	if (newFanData.warranty) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Warranty: " + newFanData.warranty.toLowerCase() + "</span></li>";
		    	}
		    	if (newFanData.light && newFanData.light == "With light") {
		    		if (newFanData.LED && newFanData.LED == "Y") {
		    			newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>LED Option</span></li>";
		    		}
		    	}
		    	if (fanCategory == "Medina" || fanCategory == "Palm" || fanCategory == "Wicker") {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>IP Rated for Outdoor Use</span></li>";
		     	}

				newList += "</ul>";
				$('#Wrapper').prepend(newList);

				if ($('.AWA-newList li').length == 5) {
					$('.AWA-newList li').attr('style', 'margin-right: 33px; font-size: .95em;');
				} else if ($('.AWA-newList li').length >= 6) {
					$('.AWA-newList li').attr('style', 'margin-right: 11px; font-size: .84em;');
				}

				var roomSizeMessage = "Ideal for room size up to ";
				var adjustedFanSize = newFanData.size.substring(0,2);
				if (adjustedFanSize < 42) {
					roomSizeMessage += "12ft x 12ft (3.65m x 3.65m).";
				} else if (adjustedFanSize < 52) {
					roomSizeMessage += "12ft x 12ft (3.65m x 3.65m) or 15ft x 12ft (4.57m x 3.65m). Two fans would nicely fit a 25ft x 12ft room (7.62m x 3.65m).";
				} else if (adjustedFanSize >= 52) {
					roomSizeMessage += "20ft x 14ft (6.10cm x 4.27m) or 25ft x 12ft (7.62m x 3.65m).";
				}

				$('#AWA-tab-2').append("<div style='clear: both;'></div><div id='AWA-room-size'>" + roomSizeMessage + "</div>");

				var mountType = "";
				if (newFanData.flush == "Y") {
					mountType = "-Flush Mount";
				} else if (newFanData.drop == "Y") {
					mountType = "-Drop Mount";
				} else if (newFanData.dual == "Y") {
					mountType = "-Dual Mount";
				}

				//console.info("MOUNT TYPE: " + mountType);


				$('#AWA-tab-2').append("<div style='clear: both;'></div><div class='AWA-spec-item'>" + mountType + "</div>");

				$('#AWA-tab-2').append("<div style='clear: both;'></div><div class='AWA-spec-item'>-Remote " + newFanData.remote + "</div>");

		    	if (newFanData.energySaving) {
		    		$('#AWA-tab-2').append("<div style='clear: both;'></div><div class='AWA-spec-item'>-Low Energy</div>");
		    	}

		    	if (newFanData.light && newFanData.light == "With light") {
			    	if (newFanData.bulb) {
			    		$('#AWA-tab-2').append("<div style='clear: both;'></div><div class='AWA-spec-item'>-" + newFanData.bulb +  " bulb</div>");
			    	}
			    }

			    $('#ProductDetails').prepend($('.ProductThumb'));
			    $('#ProductDetails .BlockContent').attr('style', 'border: solid 1px lightgray; float: right; width: 371px; margin-right: 6px;');
			    $('#ProductDetails .BlockContent').after("<div style='clear:both'></div>");

			}


			// Drop Rod Stuff
			// Add only if the product is a ceiling fan as indicated by the first 2 digits of the product code
			if ($.trim($('.VariationProductSKU').text()).substring(0, 2) == "11") {
				$('.ProductAddToCart .DetailRow').after("<div style='clear:bother'></div><div id='show-dr'><a id='add-dr' href='#'>Add drop rod?</a><br><div id='AWA-dr-help'><a id='AWA-dr-help-link' href='#install-tab'>Help me decide</a></div><br></div>");

				// Remove link if it's a pedestal or desktop fan
				var desktopFans = ["119302", "119319", "119074", "119081", "119067", "119029", "119005", "119012"];
				for (var i = 0; i < desktopFans.length; i++) {
					if ($.trim($('.VariationProductSKU').text()) == desktopFans[i]) {
						$('#add-dr').remove();
					}
				}
				// Remove link if it's a Zeta fan
				if (fanCategory == "Zeta" || fanCategory == "Commercial") {
					$('#add-dr').remove();
				}


				if (dropRods[fanCategory]) {
					var dropList = "<ul class='AWA-drop-list'>";
					if (dropRods[fanCategory]["twelve"]) {
						dropList += "<li><a class='AWA-drop' href='" + dropRods[fanCategory]["twelve"] + "'>Add 12\" drop rod (&pound;11.25)</a></li>";
					}
					if (dropRods[fanCategory]["eighteen"]) {
						dropList += "<li><a class='AWA-drop' href='" + dropRods[fanCategory]["eighteen"] + "'>Add 18\" drop rod (&pound;13.95)</a></li>";
					}
					if (dropRods[fanCategory]["thrity"]) {
						dropList += "<li><a class='AWA-drop' href='" + dropRods[fanCategory]["thrity"] + "'>Add 30\" drop rod (&pound;22.05)</a></li>";
					}
					if (dropRods[fanCategory]["fourtyEight"]) {
						dropList += "<li><a class='AWA-drop' href='" + dropRods[fanCategory]["fourtyEight"] + "'>Add 48\" drop rod (&pound;30.60)</a></li>";
					}
					if (dropRods[fanCategory]["seventyTwo"]) {
						dropList += "<li><a class='AWA-drop' href='" + dropRods[fanCategory]["seventyTwo"] + "'>Add 72\" drop rod (&pound;37.80)</a></li>";
					}
					if (dropRods[fanCategory]["kit"]) {
						if (dropRods[fanCategory]["kit"] == "http://www.theceilingfancompany.co.uk/conversion-kit/") {
							$('#show-dr').after("<div id='show-ck'><div style='clear:both'></div><a id='add-ck' href='" + dropRods[fanCategory]["kit"] +  "'>Add conversion kit?</a></div>");
						} else {
							$('#show-dr').after("<div id='show-ck'><div style='clear:both'></div><a id='add-ck' href='" + dropRods[fanCategory]["kit"] +  "'>Add flush mount kit?</a></div>");
						}

					}

					dropList += "</ul>";
					$('#show-dr').after(dropList);
					$('.AWA-drop-list').hide();
				}


				$('#add-dr').click(function(e) {
					e.preventDefault();
					$('.AWA-drop-list').show();
				});

				$('#AWA-dr-help-link').click(function(e) {
					$('#install-tab').trigger('click');
				});

			}
			
			$('.AWA-drop').click(function(e) {
				e.preventDefault();
				$('#add-dr').remove();
				$('.AWA-drop-list').remove();
				$('#AWA-dr-help').hide();
				var dropRodUrl = $(this).attr('href');

				var currentForm = $('#ProductDetails form').last();
				$.ajax({
				    type: "GET",
				    url: dropRodUrl,
				    success: function(data) {
				    	var response = $(data);
				    	var dropRodForm = response.find('#productDetailsAddToCartForm').attr("id", "productDetailsAddToCartForm2");
				    	$(currentForm).after(dropRodForm);
				    	// Move kit link down if available
				    	$(dropRodForm).after($('#show-ck'));
				    	$('#show-ck').attr('style', 'margin-left: 25px;');


				    	$('#productDetailsAddToCartForm2').before("<div style='clear: both'></div>");

				    	$('#productDetailsAddToCartForm2').find('select').val('80');
				    	$('#productDetailsAddToCartForm2 .BulkDiscount').first().find('input').hide();
				    	$('#productDetailsAddToCartForm2 .name:contains("Colour")').attr('style', 'color: green;').text("Drop Rod Colour:");
				    	$('#productDetailsAddToCartForm2 .Label.QuantityInput').attr('style', 'color: green; width: 138px').text("Drop Rod Quantity:");
				    	$('#productDetailsAddToCartForm .Label.QuantityInput').attr('style', 'color: green').text("Fan Quantity:");

				    	$('#productDetailsAddToCartForm2 .Label.QuantityInput').parent().attr('style', 'margin-left: 11px;');

				    	$('.productAddToCartRight').append($('#AWA-warranty'));
				    	$('#productDetailsAddToCartForm2 .BulkDiscount').find('input').attr('src', '//cdn.optimizely.com/img/174847139/a93de83e2ab842388e0cadbb178b3925.png');

				    	// var buyButton = $('.AddCartButton').first().find("input[type=image]");
				    	// $('#AWA-warranty').before(buyButton);
				    	// buyButton.attr('style', 'margin-left: 151px; margin-top: 15px;');

				    	if ($('.dummy-buy').length < 1) {
					    	var buyButton = $('.AddCartButton').first().find("input[type=image]").clone();
							$('.AddCartButton').first().find("input[type=image]").hide();
							buyButton.addClass('dummy-buy');
					    	$('#AWA-warranty').before(buyButton);
					    	$('.dummy-buy').attr('style', 'margin-left: 151px; margin-top: 15px;');

					    	$('.dummy-buy').click(function(e) {
					    		e.preventDefault();
					    		console.log('submitting other form');

								var x = $('#AjaxLoading').clone();
								$('body').prepend(x)
								x.show();
					    		setTimeout(function() {
									$('.AddCartButton').first().find("input[type=image]").trigger('click');
					    		}, 200);
					    	});
				    	}

				    }
				});
			});




			$('#add-ck').click(function(e) {
				e.preventDefault();
				var dropRodUrl = $(this).attr('href');
				$('#show-ck').remove();

				var currentForm = $('#ProductDetails form').last();
				$.ajax({
				    type: "GET",
				    url: dropRodUrl,
				    success: function(data) {
				    	var response = $(data);
				    	var dropRodForm = response.find('#productDetailsAddToCartForm').attr("id", "productDetailsAddToCartForm3");
				    	$(currentForm).after(dropRodForm);
				    	$('#productDetailsAddToCartForm3').before("<div style='clear: both'></div>");
				    	$('#productDetailsAddToCartForm3').find('select').val('80');
				    	$('#productDetailsAddToCartForm3 .BulkDiscount').first().find('input').hide();
				    	$('#productDetailsAddToCartForm3 .name:contains("Colour")').attr('style', 'color: green;').text("Kit Colour:");
				    	$('#productDetailsAddToCartForm3 .Label.QuantityInput').attr('style', 'color: green; width: 93px').text("Kit Quantity:");
				    	$('#productDetailsAddToCartForm .Label.QuantityInput').attr('style', 'color: green').text("Fan Quantity:");
				    	$('.productAddToCartRight').append($('#AWA-warranty'));
				    	$('#productDetailsAddToCartForm3 .BulkDiscount').find('input').attr('src', '//cdn.optimizely.com/img/174847139/a93de83e2ab842388e0cadbb178b3925.png');

				    	$('#productDetailsAddToCartForm3 .Label.QuantityInput').parent().attr('style', 'margin-left: 11px;');

				    	// Formatting
				    	 $('#productDetailsAddToCartForm3 .Label.QuantityInput').attr('style', 'width: 93px; color: green');
				    	 $('#productDetailsAddToCartForm3 .productAttributeConfigurablePickListSet').attr('style', 'padding-left: 96px;');

				    	// var buyButton = $('.AddCartButton').first().find("input[type=image]");
				    	// $('#AWA-warranty').before(buyButton);
				    	// buyButton.attr('style', 'margin-left: 151px; margin-top: 15px;');

				    	if ($('.dummy-buy').length < 1) {
					    	var buyButton = $('.AddCartButton').first().find("input[type=image]").clone();
							$('.AddCartButton').first().find("input[type=image]").hide();
							buyButton.addClass('dummy-buy');
					    	$('#AWA-warranty').before(buyButton);
					    	$('.dummy-buy').attr('style', 'margin-left: 151px; margin-top: 15px;');

					    	$('.dummy-buy').click(function(e) {
					    		e.preventDefault();
					    		console.log('submitting other form');

								var x = $('#AjaxLoading').clone();
								$('body').prepend(x)
								x.show();
					    		setTimeout(function() {
									$('.AddCartButton').first().find("input[type=image]").trigger('click');
					    		}, 200);
					    	});
				    	}

				    }
				});
			});

			
			$('#ProductDetails form').submit(function (e) {
				e.preventDefault();
				var x = $('#AjaxLoading').clone();
				x.attr('id', 'new-loading');
				$('body').prepend(x);
				x.show();


				$.ajax({
					type: "POST",
					url: "http://www.theceilingfancompany.co.uk/cart.php",
					//data: $(this).serialize(), // serializes the form's elements.
					success: function(data) {
						console.info('submtted form 1');
						$(this).remove();
						$('#new-loading').hide();
					}
				});
				if ($('#productDetailsAddToCartForm2').length) {
					$.ajax({
						type: "POST",
						async: false,
						url: "http://www.theceilingfancompany.co.uk/cart.php",
						data: $('#productDetailsAddToCartForm2').serialize(), // serializes the form's elements.
						success: function(data) {
							console.info('submtted form 2');
							$('#productDetailsAddToCartForm2').remove();
						}
					});
				}
				if ($('#productDetailsAddToCartForm3').length) {
					$.ajax({
						type: "POST",
						async: false,
						url: "http://www.theceilingfancompany.co.uk/cart.php",
						data: $('#productDetailsAddToCartForm3').serialize(), // serializes the form's elements.
						success: function(data) {
							console.info('submtted form 3');
							$('#productDetailsAddToCartForm3').remove();
						}
					});
				}
			});
		

		}

		// Remove "Choose your fan" and testimonial if it hasn't changed
		if ($('#AWA-title-holder').text() == "Choose your fan") {
			$('.AWA-tagline-box').remove();
		}

		if ($.trim($('#AWA-product-code').text()).length == 13) {
			$('#AWA-product-code').remove();
		}

		if ($('#AWA-title-holder').text() == "Fantasia Elite Range of Ceiling Fans") {
			$('#Wrapper').prepend(exp.vars.eliteTicks);
		} else if ($('#AWA-title-holder').text() == "Commercial Ceiling Fans") {
			$('#Wrapper').prepend(exp.vars.commercialTicks);
			$('.AWA-filter').remove();
		} else if ($('#AWA-title-holder').text() == "Fantasia Ceiling Fan Range") {
			//Remove non-10 year warranty fans 
			var quickFansArray = ["Viper", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento"];
			$('.ProductImage').each(function() {
				var tempTitle = $(this).parent().find('.AWA-almafi-title').text();
				for (var i = 0; i < quickFansArray.length; i++) {
					if (tempTitle == quickFansArray[i]) {
						$(this).parent().addClass("temp-keep");
					}
				}
			});
			$('.ProductList').find('li:not(".temp-keep")').remove();
		}


		$('#AWA-breadcrumb').after($('.shh'));
		if (window.location.pathname == "/brands/White.html") {
			removeNonFans();
			$('.CategoryPagination').remove();
		} else if (window.location.pathname == "/brands/Stainless-Steel.html") {
			removeNonFans();
		} else if (window.location.pathname == "/brands/Brushed-Nickel.html") {
			removeNonFans();
		} else if (window.location.pathname == "/brands/Polished-Brass.html") {
			removeNonFans();
		} else if (window.location.pathname == "/brands/Black-%7B47%7D-Pewter.html") {
			removeNonFans();
		} else if (window.location.pathname == "/brands/Chrome.html") {
			removeNonFans();
		} else if (window.location.pathname == "/brands/Chocolate-Brown.html") {
			removeNonFans();
		} else if (window.location.pathname == "/conversion-kits/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fan-accessories/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/drop-rods/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/other-accessories/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fan-lighting/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fan-controllers/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/led-bulbs/") {
			$('.ProductDetails').find('strong').show();
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fans-without-lights/") {
			// Remove stray fan with light
			$('.ProductImage[data-product="229"]').parent().remove();
		} else if (window.location.pathname == "/ceiling-fans-with-lights/") {
			var misCategorizedBali = $('.ProductImage[data-product="208"]').parent();
			var beforeBali = $('.ProductImage[data-product="209"]').parent();
			beforeBali.after(misCategorizedBali);
			// Remove Vento Dragonfly fan
			$('.ProductImage[data-product="219"]').parent().remove();
		} else if (window.location.pathname == "/retro-desk-fans/") {
			$('.shh').text('"Quiet, reliable and probably the only make of fan you would ever purchase."');
			$('#AWA-title-holder').before("<div style='clear:both'></div>");
		}

		if ($('#AWA-title-holder').text() == "Ceiling Fans With Lights") {
			$('#AWA-title-holder').text("Ceiling Fans with Lights");
		} else if ($('#AWA-title-holder').text() == "Ceiling Fans Without Lights") {
			$('#AWA-title-holder').text("Ceiling Fans without Lights");
		}
		
		if ($('.AWA-filter').length) {
			$('.AWA-filter').after($('.shh'));
			$('#AWA-title-holder').attr('style', 'float: none; margin-left: 0px;');
		}

		function removeNonFans() {
			var nonFans = ["Fantasia Amorie Gloss White", "Fantasia Aries White", "Fantasia Commercial Fan Control", "Fantasia Dome Gloss White", "Fantasia Etched Gloss White", "Fantasia G9 LED Bulbs - Cool (pack of 3)", "Fantasia G9 LED Bulbs - Warm (pack of 3)", "Fantasia G9 LED Low Energy Bulb - Cool", "Fantasia G9 LED Low Energy Bulb - Warm", "Fantasia GU10 LED Low Energy Bulb", "Fantasia Patio Outdoor Fan Light White", "Fantasia Remote Control", "Fantasia Remote control for Viper", "Fantasia Retro Desk Fan Cream", "Fantasia Round Gloss White", "Fantasia Round Stainless Steel", "Fantasia Schoolhouse Gloss White", "Fantasia Schoolhouse Stainless Steel", "Fantasia Single Commercial Fan Control with reverse", "Fantasia Sorrento Gloss White", "Fantasia Sorrento Swirl Gloss White", "Fantasia Tulip Gloss White", "Fantasia Venice Gloss White", "Fantasia Wall Speed Control White", "Fantasia Retro Desk Fan Gloss White", "Fantasia Wall Mounted Lighting Dimmer White", "Fantasia Multiple Commercial Fan Control with reverse", "Fantasia Amorie Stainless Steel", "Fantasia Dome Stainless Steel", "Fantasia Galaxy Curve Stainless Steel", "Fantasia Galaxy Stainless Steel", "Fantasia Retro Desk Fan Blue", "Fantasia Retro Desk Fan Red", "Fantasia Sorrento Swirl Stainless Steel", "Fantasia Aries Brushed Nickel", "Fantasia Sorrento Brushed Nickel", "Fantasia Retro Desk Fan Brushed Nickel", "Fantasia Amorie Polished Brass", "Fantasia Big Strip Fastener", "Fantasia Dome Polished Brass", "Fantasia Etched Polished Brass", "Fantasia Round Polished Brass", "Fantasia Saturn Polished Brass", "Fantasia Saturn Stainless Steel", "Fantasia Schoolhouse Polished Brass", "Fantasia Tulip Polished Brass", "Fantasia Wall Speed Control Polished Brass", "Fantasia Wall Mounted Lighting Dimmer Polished Brass", 'Fantasia 16" Pedestal Fan Matt Black', "Fantasia Venice Pewter", "Fantasia Retro Desk Fan Matt Black", "Fantasia Sorrento Chrome", "Fantasia Wall Speed Control Black Nickel", "Fantasia Wall Speed Control Stainless Steel", "Fantasia Wall Mounted Lighting Dimmer Black Nickel", "Fantasia Wall Mounted Lighting Dimmer Stainless Steel", "Fantasia Florence Polished Brass", "Fantasia Patio Outdoor Fan Light"];

			$('.ProductImage').each(function() {
				var tempTitle = $(this).parent().find('strong').text();
				for (var i = 0; i < nonFans.length; i++) {
					if (tempTitle == nonFans[i]) {
						$(this).parent().addClass("AWA-remove");
					}
				}
			});

			$('.AWA-remove').remove();
		}

		// COMPARISON FEATURE
		if (window.location.pathname.substring(0, 8) == "/compare") {

			generateTable();


			function generateTable() {
				$('table tbody').append('<tr id="AWA-mount"><td class="AWA-td CompareFieldName">Mount</td></tr>');
				$('table tbody').append('<tr id="AWA-remote"><td class="AWA-td CompareFieldName">Remote Control</td></tr>');
				$('table tbody').append('<tr id="AWA-light"><td class="AWA-td CompareFieldName">Light</td></tr>');
				$('table tbody').append('<tr id="AWA-led"><td class="AWA-td CompareFieldName">LED Option</td></tr>');
				$('table tbody').append('<tr id="AWA-motor"><td class="AWA-td CompareFieldName">Low Energy Motor</td></tr>');
				$('table tbody').append('<tr id="AWA-speeds"><td class="AWA-td CompareFieldName">Speeds</td></tr>');
				$('table tbody').append('<tr id="AWA-size"><td class="AWA-td CompareFieldName">Size</td></tr>');
				$('table tbody').append('<tr id="AWA-w"><td class="AWA-td CompareFieldName">Warranty</td></tr>');
				$('table tbody').append('<tr id="AWA-bulb"><td class="AWA-td CompareFieldName">Bulb Type</td></tr>');

				var classifications2 = ["Tau", "Zeta", "Delta", "Blade", "Omega", "Viper Plus", "Splash", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento Hurricane", "Neptune", "Genoa", "Belaire", "Bali", "Scorpion", "Rio", "Atlanta", "Rimini", "Commercial"];

				$("[id^='compare_2']").each(function() {
					var compareTitle = $(this).text();
					for (var i = 0; i < classifications2.length; i++) {
						if (compareTitle.indexOf(classifications2[i]) != -1) {
							var compareCategory = classifications2[i];
						}
					}

					if (compareCategory == undefined) {
						$('#AWA-mount, #AWA-remote, #AWA-light, #AWA-led, #AWA-motor, #AWA-speeds, #AWA-size, #AWA-w, #AWA-bulb').remove();
						return;
					}

					// Mount
					var mountC = "";
					if (fandata[compareCategory]["Flush Mount"] == "Y") {
						mountC = "Flush Mount";
					} else if (fandata[compareCategory]["Drop Mount"] == "Y") {
						mountC = "Drop Mount";
					} else if (fandata[compareCategory]["Dual Mount"] == "Y") {
						mountC = "Dual Mount";
					}
					if (mountC != "") {
						$(this).parent().parent().find('#AWA-mount').append("<td class='CompareLeft'>" + mountC + "</td>");
					} else {
						$(this).parent().parent().find('#AWA-mount').append("<td class='CompareLeft'>N/A</td>");
					}

					// Remote Control
					if (fandata[compareCategory]["Remote Control"]) {
						$(this).parent().parent().find('#AWA-remote').append("<td class='CompareLeft'>" + fandata[compareCategory]["Remote Control"] + "</td>");
					} else {
						$(this).parent().parent().find('#AWA-remote').append("<td class='CompareLeft'>N/A</td>");
					}

					// Light
					var hasLight = false;
					if (compareTitle.toLowerCase().indexOf("with light") != -1) {
						hasLight = true;
					}
					if (hasLight) {
						$(this).parent().parent().find('#AWA-light').append("<td class='CompareLeft'>" + fandata[compareCategory]["Light"] + "</td>");
					} else {
						$(this).parent().parent().find('#AWA-light').append("<td class='CompareLeft'>N/A</td>");
					}

					// LED Option
					if (hasLight) {
						if (fandata[compareCategory]["LED Option"] == "Y") {
							$(this).parent().parent().find('#AWA-led').append("<td class='CompareLeft'>Yes</td>");
						} else {
							$(this).parent().parent().find('#AWA-led').append("<td class='CompareLeft'>No</td>");
						}
					} else {
						$(this).parent().parent().find('#AWA-led').append("<td class='CompareLeft'>N/A</td>");
					}

					// Low Energy Motor
					if (fandata[compareCategory]["Low Energy Motor"] == "Y") {
						$(this).parent().parent().find('#AWA-motor').append("<td class='CompareLeft'>Yes</td>");
					} else {
						$(this).parent().parent().find('#AWA-motor').append("<td class='CompareLeft'>No</td>");
					}

					// Speeds
					if (fandata[compareCategory]["Speeds"]) {
						$(this).parent().parent().find('#AWA-speeds').append("<td class='CompareLeft'>" + fandata[compareCategory]["Speeds"] + "</td>");
					} else {
						$(this).parent().parent().find('#AWA-speeds').append("<td class='CompareLeft'>N/A</td>");
					}

					// Size
					if (fandata[compareCategory]["Size"]) {
						$(this).parent().parent().find('#AWA-size').append("<td class='CompareLeft'>" + fandata[compareCategory]["Size"] + "</td>");
					} else {
						$(this).parent().parent().find('#AWA-size').append("<td class='CompareLeft'>N/A</td>");
					}

					// Warranty
					if (fandata[compareCategory]["Warranty"]) {
						$(this).parent().parent().find('#AWA-w').append("<td class='CompareLeft'>" + fandata[compareCategory]["Warranty"].toLowerCase() + "</td>");
					} else {
						$(this).parent().parent().find('#AWA-w').append("<td class='CompareLeft'>N/A</td>");
					}

					// Bulb Type
					if (hasLight) {
						if (fandata[compareCategory]["Bulb Type"]) {
							$(this).parent().parent().find('#AWA-bulb').append("<td class='CompareLeft'>" + fandata[compareCategory]["Bulb Type"].toLowerCase() + "</td>");
						} else {
							$(this).parent().parent().find('#AWA-bulb').append("<td class='CompareLeft'>N/A</td>");
						}
					} else {
						$(this).parent().parent().find('#AWA-bulb').append("<td class='CompareLeft'>N/A</td>");
					}
				});
			}


		}



	};

	// Run the experiment
	setTimeout(function() {
		exp.init();
	}, 1000);

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);