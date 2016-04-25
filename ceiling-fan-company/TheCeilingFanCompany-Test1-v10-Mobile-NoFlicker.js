/* REMOVE */
vwo_$('BODY > DIV#Container:first-child').css({"display":"none"});
/* CUSTOM CODE */
setTimeout(function(){
  
  vwo_$('BODY > DIV#Container:first-child').css({'display':'block'});
  
},2000);
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
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('Test1 v8 - Mobile');

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
		mobileTop: "<div class='AWA-mobile-top'>\
						<div class='AWA-mobile-top-text'>\
							<h1>FREE next day UK Delivery</h1>\
							<p>With 1 hour delivery slot</p>\
						</div>\
					</div>",
		search: "<div class='AWA-search'>\
					<img src='//cdn.optimizely.com/img/174847139/8e8cc99184c342678cdbf2c68d74b998.png' width='20' height='20'>\
				</div>",
		logos: "<div style='clear: both'></div><div class='AWA-logos'>\
					<a href='http://www.theceilingfancompany.co.uk/'><img src='//cdn.optimizely.com/img/174847139/404ed3e544bf43228f8cc8039ae3ec7f.png'></a>\
					<h1 style='font-size: 22px; font-family: Arial; text-align: center; margin-top: 10px;'>Freephone: 08081684535</h1>\
				</div>",
		fantasia: 	"<div class='AWA-fantasia'>\
						<p>Fantasia Fans Official Retailer. You can't buy cheaper - guaranteed.</p>\
						<img id='fantasia-logo' src='//cdn.optimizely.com/img/174847139/15dea4ea84384fe0ba7d3b23b0dd8049.png'>\
					</div>",
		menu: 	"<div class='AWA-menu'>\
					<ul class='AWA-menu-1'>\
						<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'>Fans with lights</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'>Fans without lights</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/'>Fantasia\'s Ranges</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'>Energy Saving Fans</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/brands/'>Fans by colour</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-accessories/'>Fan Accessories</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/contact-us/'>Contact Us</a></li>\
						<li><a id='AWA-about-us-link' href='#'>About Us & Our fans</a></li>\
					</ul>\
					<ul class='AWA-menu-2'>\
						<li><a href='http://www.theceilingfancompany.co.uk/about-fantasia-fans/'>About Fantasia Ceiling Fans</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fan-information/'>Ceiling Fan Information</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/faqs/'>Ceiling Fan FAQs</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/8-reasons-to-buy/'>8 Reasons to buy</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/specifications/'>Ceiling Fan Specifications</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/wiring/'>Wiring</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/the-definitive-guide-to-using-ceiling-fans-in-winter/'>Using Ceiling Fans in Winter</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/delivery/'>Free Delivery Information</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/terms-conditions/'>Terms & Conditions</a></li>\
					</ul>\
				</div>",
		homeCategories: "<div class='AWA-home-categories'>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'><div id='AWA-cat-cwl' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												Ceiling Fans with lights\
											</div>\
										</div>\
									</div></a>\
									<div id='AWA-blurb-1' class='AWA-value-blurb'>\
										<a id='top-box-1' class='AWA-top-box-link' href='#'>Whisper quiet fans with up to 15 years warranty</a>\
									</div>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'><div id='AWA-cat-cfwl' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												Ceiling Fans without lights\
											</div>\
										</div>\
									</div></a>\
									<div id='AWA-blurb-2' class='AWA-value-blurb'>\
										<a id='top-box-2' class='AWA-top-box-link' href='#'>Price Match Promise</a>\
									</div>\
									<a href='http://www.theceilingfancompany.co.uk/brands/White.html'><div id='AWA-cat-wcf' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												White Ceiling Fans\
											</div>\
										</div>\
									</div></a>\
									<div id='AWA-blurb-3' class='AWA-value-blurb'>\
										<a id='top-box-3' class='AWA-top-box-link' href='#'>Ultra low running costs for all</a>\
									</div>\
									<a href='http://www.theceilingfancompany.co.uk/conversion-kits/'><div id='AWA-cat-acc' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												Accessories\
											</div>\
										</div>\
									</div></a>\
								</div>",
		whyBuy: "<div class='AWA-why-buy'>\
					<a id='AWA-why-buy-link1' href='#'><div class='AWA-why-buy-1'>\
						Why buy from The Ceiling Fan Company?\
					</div></a>\
					<div class='AWA-why-buy-1-dropdown'>\
					<p>\
						Quite simply, no other fans on the market are better quality or more beautifully designed.  We have been official suppliers of Fantasia Fans for over 15 years, so we know a lot about what makes a great ceiling fan. Here's just some of the reasons why Fantasia Fans are unsurpassed by any others:\
					</p>\
						<div class='AWA-icon'>\
							<div class='AWA-icon-title'>\
								<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
								Extended Warranties\
							</div>\
							<div class='AWA-icon-box'>\
								<img class='AWA-icon-image' src='//cdn.optimizely.com/img/174847139/db5ca3b596cf48edb6ae6c8a23a6d830.png'>\
								<img class='AWA-number' src='//cdn.optimizely.com/img/174847139/4ef682f4d44f425d827218438c494baf.png'>\
								<span class='AWA-icon-title-text'>Up to 15 year warranty</span>\
								<p>Our fans are maintenance free and built to last, with all-metal motor housings and double-lacquered surfaces to keep them in pristine condition for many years to come. Each fan comes with up to a 15 year warranty – longer than any other ceiling fans on the market.  If you have any motor problems within ten years of buying your fan, just let us know and we’ll repair or replace it free of charge.\
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
								<span class='AWA-icon-title-text'>Remote Control Options</span>\
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
					</div>\
					<a id='AWA-why-buy-link2' href='#'><div class='AWA-why-buy-2'>\
						Why buy Fantasia Fans?\
					</div></a>\
					<div class='AWA-why-buy-2-dropdown'>\
						<div class='AWA-vp-item'>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> BUILT TO LAST - Up to 15 year warranty\
						</div>\
						<div class='AWA-vp-item'>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> ULTRA QUIET - the most silent on the market\
						</div>\
						<div class='AWA-vp-item'>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> SAVE ENERGY - cut 10% off winter fuel bills\
						</div>\
						<div class='AWA-vp-item'>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> REMOTE CONTROL OPTIONS\
						</div>\
						<div class='AWA-vp-item'>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> EASY TO INSTALL - uses existing light circuit\
						</div>\
						<div class='AWA-vp-item'>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'> GREAT CHOICE - huge range of colours and sizes\
						</div>\
					</div>\
				</div>",
		footer: "<div class='AWA-footer'>\
					<ul id='AWA-footer-c3'>\
						<li><span class='AWA-bold'>TheCeilingFanCompany.co.uk</span></li>\
						<li>Wickham Stores</li>\
						<li>High Street</li>\
						<li>Limpsfield</li>\
						<li style='margin-bottom: 10px;'>Surrey RH8 0DR</li>\
						<li style='margin-bottom: 10px;'><span class='AWA-bold'>Freephone:</span> 0808 168 4535M</li>\
						<li><span class='AWA-bold'>Email: </span><a href='info@theceilingfancompany.co.uk'>info@theceilingfancompany.co.uk</a></li>\
					</ul>\
					<img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/product_images/uploaded_images/theceilingfancompany-approved.jpg' width='65'>\
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
						If you find the same ceiling fan anywhere else for less, we would really like to hear about it. If it is a genuine Fantasia ceiling fan (not an inferior imitation), we'll refund the difference on a like for like deal.\
					</p>\
				</div>",
		navBoxes: 	"<div id='AWA-nav-boxes'>\
						<div>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
							<span class='AWA-next'>Whisper quiet fans with up to 15 years warranty</span>\
						</div>\
						<div>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
							<span class='AWA-next'>We price match all products</span>\
						</div>\
						<div>\
							<img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'>\
							<span class='AWA-next'>Ultra low running costs for all fans</span>\
						</div>\
					</div>",
		filter: "<div style='clear:both'></div><div class='AWA-filter'>\
			<p><strong>Filter your products:</strong></p>\
			<div class='AWA-filter-1'>\
				<span class='AWA-filter-title'>By fan feature:</span>\
					<ul>\
						<li><label><input type='checkbox' name='filter-1' value='white'> White,</label></li>\
						<li><label><input type='checkbox' name='filter-1' value='energy saving'> Low Energy,</label></li>\
						<li><label><input type='checkbox' name='filter-1' value='LED Option'> LED Option,</label></li>\
						<li><label><input type='checkbox' name='filter-1' value='remote-complete'> Complete with Remote Control,</label></li>\
						<li><label><input type='checkbox' name='filter-1' value='remote-compatible'> Compatible with Remote Control</label></li>\
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
		</div>",
		deliveryTab: "<div>\
				<h4>Delivery is FREE on all orders to a UK mainland address</h4>\
				<p>\
					Order by 2pm for FREE NEXT DAY delivery Monday-Friday – with free text message on the day to let you know what time your delivery will arrive (1 hour time slot).\
				</p>\
				<h4>Other Delivery Options</h4>\
				<p>\
					Saturday delivery (UK mainland) £18\
				</p>\
				<h4>Delivery to a non-UK mainland address</h4>\
				<p>\
					Please call us on 0808 168 4535 or email sales@theceilingfancompany.co.uk for delivery charges. Please note that UK mainland excludes the Channel Islands and postcodes FK17-99, G83, IV1-63, KW1-14, PA21-33, PA34-40, PH18-26, PH30-41, PH49-50\
				<p>\
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
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.nav-area {\
		position: relative;\
		float: right;\
		width: 100px;\
		border-bottom: 0;\
	}\
	#Container {\
		padding-top: 0;\
	}\
	.AWA-mobile-top-text {\
		padding-left: 5px;\
		float: left;\
	}\
	.AWA-mobile-top h1 {\
		font-size: 17px;\
	}\
	.AWA-mobile-top p {\
		font-size: 12px;\
	}\
	.AWA-mobile-top .showMenu {\
		float: right;\
		width: 30px;\
		height: 30px;\
	}\
	#cart-amount {\
		width: 30px;\
	}\
	.AWA-search {\
		width: 30px;\
		height: 30px;\
		float: right;\
		padding-top: 14px;\
		padding-left: 7px;\
	}\
	#search_query {\
		background-image: url(//cdn.optimizely.com/img/174847139/117875289929476e9fb386d799abf356.png) !important;\
		background-repeat: no-repeat !important;\
	}\
	#SearchForm input.Textbox {\
		padding-left: 22px;\
		width: 100%;\
	}\
	.AWA-logos {\
		margin: 0 auto;\
	}\
	.AWA-logos img {\
		margin: 0 auto;\
		display: block;\
		width: 317px;\
	}\
	.AWA-logos img:nth-child(2) {\
		width: 250px;\
	}\
	.AWA-fantasia {\
		width: 326px;\
 		margin: 0 auto;\
	}\
	.AWA-fantasia p {\
		padding-top: 28px;\
		padding-left: 5px;\
		float: left;\
		width: 65%;\
		font-style: italic;\
	}\
	.AWA-fantasia img {\
		padding-top: 5px;\
		float: right;\
	}\
	.AWA-menu-1, .AWA-menu-2 {\
		list-style-type: none;\
		margin: 0 0 0 0;\
	}\
	.AWA-menu li {\
		text-align: center;\
		margin: auto;\
		width: 90%;\
		border: solid 1px lightgray;\
		padding: 5px 0 5px 0;\
		font-size: 13px;\
		border-radius: 5px;\
		margin-bottom: 2px;\
	}\
	.AWA-menu-2 li {\
		width: 80%\
	}\
	.AWA-home-category {\
		margin-top: 5px;\
	}\
	.AWA-home-category-pic {\
		border: solid 1px lightgray;\
		width: 324px;\
		margin: 0 auto;\
  		height: 200px;\
  		background-repeat: no-repeat;\
	}\
	.AWA-home-category-title {\
		margin-top: 133px;\
		border-top: solid 1px lightgray;\
		border-bottom: solid 1px lightgray;\
		padding: 3px;\
		background-color: rgba(255, 255, 255, 0.83);\
		font-weight: bold;\
		padding-left: 20px;\
	}\
	#AWA-cat-cwl {\
		padding-top: 5px;\
	}\
	#AWA-cat-cwl .AWA-home-category-pic {\
		background-image: url(http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/68/images/297/amalfi_ss__43453__75527__47187.1405450691.320.320.jpg?c=2g);\
	}\
	#AWA-cat-cfwl .AWA-home-category-pic {\
		background-image: url(http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/177/images/560/Belaire_WH__51981.1405451066.320.320.jpg?c=2);\
	}\
	#AWA-cat-wcf .AWA-home-category-pic {\
		background-image: url(http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/195/images/606/commercial_fan__45129__51479__17582.1405450776.320.320.jpg?c=2);\
		background-position-y: -25px;\
	}\
	#AWA-cat-esf .AWA-home-category-pic {\
		background-image: url(http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/201/images/618/Delta_BN_Aries_Drop_Light_off__14924.1405451268.320.320.jpg?c=2);\
	}\
	#AWA-cat-acc .AWA-home-category-pic {\
		background-image: url(http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/83/images/312/ckbig__18350__79472__04879.1405450789.320.320.jpg?c=2);\
		background-size: 104px;\
		background-position-x: 113px;\
	}\
	.AWA-value-blurb {\
		border: solid 1px lightgray;\
		padding: 5px 10px 5px 10px;\
		text-align: center;\
		width: 306px;\
		margin: 15px auto;\
		background-color: rgb(166, 166, 166);\
	}\
	.AWA-value-blurb a {\
		color: white;\
	}\
	.AWA-why-buy {\
		width: 324px;\
		margin: 0 auto;\
		margin-top: 20px;\
		border: solid 1px lightgray;\
		margin-bottom: 25px;\
	}\
	.AWA-why-buy-1, .AWA-why-buy-2 {\
		font-weight: bold;\
		text-align: center;\
		padding: 10px;\
	}\
	.AWA-why-buy-2 {\
		border-top: solid 1px lightgray;\
	}\
	.AWA-why-buy-1-dropdown {\
		padding-left: 15px;\
		padding-right: 15px;\
	}\
	.AWA-why-buy-1-dropdown h2 {\
		font-size: 12px;\
	}\
	.AWA-checkmark {\
		vertical-align: middle;\
	}\
	.AWA-icon {\
		width: 270px;\
		margin-bottom: 15px;\
		margin-left: auto;\
		margin-right: auto;\
	}\
	.AWA-icon-title {\
		font-weight: bold;\
		font-size: 13px;\
		padding-bottom: 3px;\
	}\
	.AWA-icon-box {\
		background-color: #a6a6a6;\
		height: 192px;\
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
	.AWA-footer {\
		height: 152px;\
	}\
	.AWA-footer ul {\
		float: left;\
		font-size: 12px;\
	}\
	.AWA-footer img {\
		float: right;\
	}\
	.AWA-bold {\
		font-weight: bold;\
	}\
	#AWA-popup-1, #AWA-popup-2, #AWA-popup-3 {\
		display: none;\
		border: solid 1px black;\
		position: fixed;\
		width: 70%;\
		top: 15%;\
		left: 0;\
		right: 0;\
		margin-left: auto;\
		margin-right: auto;\
		padding: 10px;\
		z-index: 100;\
		background-color: white;\
	}\
	.AWA-why-buy-2-dropdown {\
		padding-left: 10px;\
	}\
	#AWA-nav-boxes {\
		width: 306px;\
		margin: 0 auto;\
	}\
	.AWA-almafi-title {\
		border: solid 0px blue;\
		width: 33%;\
		font-weight: bold;\
		float: left;\
	}\
	.ProductList .Odd, .ProductList .Even {\
		border: solid 1px lightgray;\
	}\
	.Content .Block .ProductList li, .Right .Block .ProductList li {\
		display: block;\
		margin: 0 auto;\
		margin-bottom: 10px;\
		padding-left: 0;\
		padding: 1% !important;\
		width: 55% !important;\
	}\
	.AWA-savings {\
		border: solid 0px red;\
		width: 33%;\
		float: left;\
		text-align: center;\
	}\
	.AWA-price {\
		width: 30%;\
		border: solid 0px blue;\
		float: right;\
		text-align: right;\
		font-weight: bold;\
		margin-bottom: 5px;\
	}\
	@media screen and (orientation: landscape) .Content .Block .ProductList li, .Right .Block .ProductList li {\
			padding-right: 0;\
	}\
	.AWA-more-info {\
		border: solid 1px lightgray;\
		width: 58px;\
		padding: 3px;\
		float: left;\
	}\
	.AWA-buy {\
		border: solid 1px lightgray;\
		width: 24px;\
		padding: 4px;\
		float: right;\
		background-color: green;\
		color: white !important;\
	}\
	#AWA-refine {\
		float: right;\
		width: 120px;\
		border: solid 0px blue;\
		padding-right: 10px;\
	}\
	#AWA-refine h2 {\
		border-bottom: 0;\
	}\
	#AWA-refine img {\
		float: right;\
		margin-top: 11px;\
		width: 27px;\
	}\
	.AWA-filter input[type=checkbox] {\
		-webkit-appearance: checkbox;\
	}\
	.AWA-filter ul {\
		list-style-type: none;\
	}\
	.AWA-filter {\
		width: 50%;\
		margin: 0 auto;\
	}\
	.AWA-p-classification {\
		float: left;\
		padding-left: 2%;\
		width: 33%;\
	}\
	.AWA-p-savings {\
		float: left;\
		text-align: center;\
		width: 33%;\
	}\
	.AWA-p-price {\
		float: left;\
		width: 30%;\
		text-align: right;\
	}\
	.AWA-thumb {\
		width: 100px;\
		border: solid 1px lightgray;\
		float: left;\
		margin-left: 5px;\
		margin-bottom: 10px;\
	}\
	.active-thumb {\
		border: solid 1px green;\
	}\
	.AWA-p-classification, .AWA-p-savings, .AWA-p-price {\
		font-weight: bold;\
		margin-bottom: 10px;\
	}\
	.AWA-newList {\
		clear: both;\
		padding-top: 10px;\
		margin-left: 0;\
		margin-bottom: 20px;\
		list-style-type: none;\
		width: 224px;\
		float: left;\
	}\
	.AWA-newList li {\
		margin-right: 39px;\
	}\
	.AWA-elite-ticks {\
		width: 306px;\
		margin: 0 auto;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

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
	
		var classifications = ["Tau", "Zeta", "Delta", "Blade", "Omega", "Viper Plus", "Splash", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento Hurricane", "Neptune", "Genoa", "Belaire", "Bali", "Scorpion", "Rio", "Atlanta", "Rimini", "Commercial"];

	    var url = [location.protocol, '//', location.host, location.pathname].join('');
	    if (window.location.pathname == "/") {
	    	formatPage();
		    $('#LayoutColumn1').remove();
		    $('#Wrapper').append(exp.vars.homeCategories);
		    $('#Wrapper').append(exp.vars.whyBuy);

		    var dropDown1 = $('.AWA-why-buy-1-dropdown');
		    dropDown1.hide();
		    $('.AWA-why-buy').on('click', '#AWA-why-buy-link1', function(e) {
		    	e.preventDefault();
				if (dropDown1.is(":visible")) {
					dropDown1.slideUp();
				} else {
					dropDown1.slideDown();
				}
		    });

		    var dropDown2 = $('.AWA-why-buy-2-dropdown');
		    dropDown2.hide();

		    $('.AWA-why-buy').on('click', '#AWA-why-buy-link2', function(e) {
		    	e.preventDefault();
				if (dropDown2.is(":visible")) {
					dropDown2.slideUp();
				} else {
					dropDown2.slideDown();
				}
		    });

			// Attach popups
			$('<div id="__msg_overlay">').css({
			      "width" : "100%"
			    , "height" : "100%"
			    , "background" : "#000"
			    , "position" : "fixed"
			    , "top" : "0"
			    , "left" : "0"
			    , "zIndex" : "50"
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
		} else if ($('.SortBox').length > 0) { // Listing page
			formatPage();

			$('.AWA-menu').after(exp.vars.navBoxes);

			var sort = $('.FloatRight.SortBox');
			$('#CategoryBreadcrumb').after(sort);
			sort.attr('style', 'float: left;');



			$('.ProductImage').each(function() {
				var productLink = $(this).find('a').attr('href');
				$(this).find('a').wrap("<div class='AWA-image-wrap'></div>")
				var currentImage = $(this).find('img').first();

				var originalStrike = $(this).parent().find('.ProductPriceRating').find('strike').text();


				var strikePrice = $.trim($(this).next().next().find('.RetailPriceValue').text()).slice(1);
				$(this).next().next().find('.RetailPriceValue').remove();
				var price = $.trim($(this).next().next().text());
				
				$(this).parent().prepend("<div class='AWA-price'>" + price + "</div>");
				$(this).next().append("<a href='" + productLink + "'><div class='AWA-more-info'>More Info</div></a>");

				// Some products don't let you buy directly from the listing page
				var buyLink = $(this).parent().find('.ProductActionAdd').find('a').attr('href');
				$(this).next().append("<a href='" + buyLink + "' class='AWA-buy'><div>Buy</div></a>");


				var compare = $(this).parent().find('.ProductCompareButton');
				$(this).next().append(compare);

				$('.Rating').remove();

				price = price.slice(1);
				var moneyOff = (strikePrice - price).toFixed(2);
				if (moneyOff > 0) {
					$(this).parent().prepend("<div class='AWA-savings'>£" + moneyOff + " Off</div>");
				}


				$(this).parent().prepend("<div class='AWA-almafi-title'></div>");
				var title = $(this).next().find('a').text();

				$(this).parent().find('.AWA-savings').prepend('<strike>' + originalStrike + "</strike><br>");


				for (var i = 0; i < classifications.length; i++) {
					if (title.indexOf(classifications[i]) != -1) {
						$(this).parent().find('.AWA-almafi-title').text(classifications[i]);
					} else if (title.indexOf("Omeg...ith") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Omega");
					} else if (title.indexOf("Omeg...iling") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Delta");
					} else if (title.indexOf("Delt...ith") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Delta");
					} else if (title.indexOf("Delt...ut") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Delta");
					} else if (title.indexOf("Delt...ling") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Delta");
					} else if (title.indexOf("Zeta...g") != -1) {
						$(this).parent().find('.AWA-almafi-title').text("Zeta");
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

				var fanCategory = $(this).parent().find('.AWA-almafi-title').text();

				if (fanCategory != "") {
					var newFanData = {};
					newFanData.speeds = fandata[fanCategory]["Speeds"];
					newFanData.warranty = fandata[fanCategory]["Warranty"];
					newFanData.size = fandata[fanCategory]["Size"];

					var newList = "<div class='AWA-newList'>";


			    	if (newFanData.speeds) {
			    		newList += "<div class='AWA-newList-item'><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>" + newFanData.speeds + " Speeds</span></div>";
			    	}
			    	if (newFanData.warranty) {
			    		newList += "<div class='AWA-newList-item'><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Warranty: " + newFanData.warranty.toLowerCase() + "</span></div>";
			    	}
			    	if (newFanData.size) {
			    		newList += "<div class='AWA-newList-item'><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Size: " + newFanData.size.toLowerCase() + "</span></div>";
			    	}

					newList += "</div>";
					$(this).parent().append(newList);
				}
			});

			$('.ProductPriceRating').hide();
			//$('.product-title').find('strong').attr('style', 'display: none');


			/* --- FILTERS --- */
			var refine = "<a id='AWA-refine-button' href='#'><div id='AWA-refine'><img src='//cdn.optimizely.com/img/174847139/8a44f6b697bf4dcb8230cbae6a2ef92e.png'><h2>Refine by</h2></div></a>";
			$('.FloatRight.SortBox').after(refine);
			$('#AWA-refine-button').after(exp.vars.filter);

			$('.AWA-filter').hide();
			$('#LayoutColumn1').on('click', '#AWA-refine-button', function(e) {
				e.preventDefault();
				$('.AWA-filter').toggle();
			});

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
							$(this).addClass('led-option');
							$(this).addClass('filtered');
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

			$('.product-title').find('strong').css('display', 'none');
		} else if ($('#MobileGallery').length > 0) {
			formatPage();
			$('.AWA-menu').after(exp.vars.navBoxes);

			var pTitle = $('.BlockContent').find('h2').first().text();
			var newTitle;
			for (var i = 0; i < classifications.length; i++) {
				if (pTitle.indexOf(classifications[i]) != -1) {
			  		newTitle = classifications[i];
				}
			}

			var youSave = $('.YouSaveAmount').text();

			var pPrice = $('.PriceDetailRow .Value em').text();

			var productInfoDiv =  "<div id='AWA-product-info-div'>" +
			                      "<div class='AWA-p-classification'>" + newTitle + "</div>" +
			                      "<div class='AWA-p-savings'>" + youSave + " Off</div>" +
			                      "<div class='AWA-p-price'>" + pPrice + "</div>" +
			                    "</div>";


			$('.ProductThumbImage.MobileProductThumb').after(productInfoDiv);

			// Dynamically change prices when options are selected
			$('.DetailRow.PriceDetailRow').hide();
			var originalPrice = $('.ProductPrice.VariationProductPrice').text();
			$('.VariationProductPrice').bind("DOMSubtreeModified", function() {
				$('.VariationProductPrice').hide();
				var newPrice = $('.VariationProductPrice').text();
				$('.AWA-p-price').text(newPrice);
			});


			if ($('.AWA-p-classification').text() == "undefined") {
				$('.AWA-p-classification').text("");
			}


			var testImage = "<img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/products/32/images/728/Fan_002_grey_lighter__34504.1411995349.1280.1280.jpg?c=2'>";
		  

			$('#MobileGallery').find('img').each(function() {
				var imgSrc = $(this).attr('src');
				var newImage = "<img class='AWA-thumb' src='" + imgSrc + "' width='200'>";
			$('#AWA-product-info-div').after(newImage);
			});

			$('.BlockContent').on('click', '.AWA-thumb', function() {
			$('.AWA-thumb').removeClass('active-thumb');
			$(this).addClass('active-thumb');
			$('.mobile-thumb-link').find('img').attr('src', $(this).attr('src'));
			});

			$('.Block.SideRelatedProducts.Moveable.Panel').remove();
			$('#SideProductAddToWishList').remove();
			$('.SeeMorePicturesLink').remove();

			$('.mobile-thumb-link').attr('onclick', 'event.preventDefault()');

			$('#SideProductAddToCart .Button').text('Buy');

			// Generate features
			var productTitle = $('#ProductDetails .BlockContent').find('h2').first().text();

			var newFanData = {};
			populateFeatures();
		  	function populateFeatures() {
				newFanData.energySaving = fandata[newTitle]["Low Energy Motor"];
				newFanData.speeds = fandata[newTitle]["Speeds"];
				newFanData.size = fandata[newTitle]["Size"];
				newFanData.warranty = fandata[newTitle]["Warranty"];
				newFanData.remote = fandata[newTitle]["Remote Control"];
				newFanData.LED = fandata[newTitle]["LED Option"];
				newFanData.flush = fandata[newTitle]["Flush Mount"];
				newFanData.drop = fandata[newTitle]["Drop Mount"];
				newFanData.dual = fandata[newTitle]["Dual Mount"];
				newFanData.bulb = fandata[newTitle]["Bulb Type"];

				if (productTitle.toLowerCase().indexOf("with light") != -1) {
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
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>" + newFanData.size.toLowerCase() + "</span></li>";
		    	}
		    	if (newFanData.warranty) {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>Warranty: " + newFanData.warranty.toLowerCase() + "</span></li>";
		    	}
		    	if (newFanData.light && newFanData.light == "With light") {
		    		if (newFanData.LED && newFanData.LED == "Y") {
		    			newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>LED Option</span></li>";
		    		}
		    	}
		    	if (newTitle == "Medina" || newTitle == "Palm" || newTitle == "Wicker") {
		    		newList += "<li><img class='AWA-checkmark' src='//cdn.optimizely.com/img/174847139/3404636ed375425fb536f3e63673dd69.png'><span class='AWA-data-item'>IP Rated for Outdoor Use</span></li>";
		    	}

				newList += "</ul>";
				$('#SideProductAddToCart').before(newList);
				$('#SideProductAddToCart .Button').attr('style', 'float: right; width: 50%');
			}

			$('#ProductDescription').find('h3').text("Description");
			$('#ProductWarranty').find('h3').text("Specification");
			$('#ProductReviews').find('h3').text("Reviews");
			var reviewTab = $('#ProductReviews');
			var similarTab = $('#ProductByCategory');
			reviewTab.after(similarTab);



			var productCode = $('.DetailRow:contains("Product Code")');
			var brand = $('.DetailRow:contains("Brand")');
			var weight = $('.DetailRow:contains("Weight")');
			var delivery = $('.DetailRow:contains("Free Delivery")');
			$('#ProductByCategory').find('h3').text("Delivery & Returns");
			$('#SimilarProductsByCustomerViews').find('h3').text("Installation");

			// NOTE: Cannot get desktop version of site via AJAX to pull in specification tab info. 
			$('.ProductWarrantyContainer').text("");
			var mountType = "";
			if (newFanData.flush = "Y") {
				mountType = "-Flush Mount";
			} else if (newFanData.drop = "Y") {
				mountType = "-Drop Mount";
			} else if (newFanData.dual = "Y") {
				mountType = "-Dual Mount";
			}


			$('.ProductWarrantyContainer').append("<div style='clear: both;'></div><div class='AWA-spec-item'>" + mountType + "</div>");

			$('.ProductWarrantyContainer').append("<div style='clear: both;'></div><div class='AWA-spec-item'>-Remote " + newFanData.remote + "</div>");

	    	if (newFanData.energySaving) {
	    		$('.ProductWarrantyContainer').append("<div style='clear: both;'></div><div class='AWA-spec-item'>-Low Energy</div>")
	    	}

	    	if (newFanData.light && newFanData.light == "With light") {
		    	if (newFanData.bulb) {
		    		$('.ProductWarrantyContainer').append("<div style='clear: both;'></div><div class='AWA-spec-item'>-" + newFanData.bulb +  " bulb</div>")
		    	}
		    }


			$('#ProductByCategory .FindByCategory').html(exp.vars.deliveryTab);
			$('#SimilarProductsByCustomerViews .BlockContent').html(exp.vars.installation);
		} else {
			formatPage();
		}


		function formatPage() {
		    // Change header
		    $('#Container').prepend(exp.vars.mobileTop);

		    // Remove non-existant logo
		    $('#Logo').remove();
		    $('.AWA-mobile-top').prepend($('.nav-area'));
		    $('#mainNavi').prepend(exp.vars.search);

		    // Remove search submit button
		    $('#SearchForm').find(':submit').remove();

		    // Toggle search
		    var searchForm = $('#SearchForm');
		    searchForm.hide();
		    $('#mainNavi').on('click', '.AWA-search', function() {
				if (searchForm.is(":visible")) {
					searchForm.slideUp();
				} else {
					searchForm.slideDown();
				}
		    });


		    $('.AWA-mobile-top').append(exp.vars.logos);

		    $('#SearchForm').after(exp.vars.fantasia);

		    // Remove current side menu
		    $('.topNav').remove();


		    $('#Wrapper').prepend(exp.vars.menu);

		    var mainMenu = $('.AWA-menu');
		    mainMenu.hide();

		    // Remove current event listeners on menu button
		    $('.showMenu').unbind();
		    $('#mainNavi').on('click', '.showMenu', function() {
				if (mainMenu.is(":visible")) {
					mainMenu.slideUp();
				} else {
					mainMenu.slideDown();
				}
		    });

		    $('#Footer').html(exp.vars.footer);

		    $('.SubCategoryList').remove();

		    $('#Footer').html(exp.vars.footer);

		    // Initially hide submenu
		    var subMenu = $('.AWA-menu-2');
		    subMenu.hide();

		    $('.AWA-menu-1').on('click', '#AWA-about-us-link', function(e) {
		    	e.preventDefault();
				if (subMenu.is(":visible")) {
					subMenu.slideUp();
				} else {
					subMenu.slideDown();
				}
		    });

		    $('.icon-search').css('visibility', 'hidden');
		}

		if (window.location.pathname == "/elite-range-of-ceiling-fans/") {
			$('#AWA-nav-boxes').after(exp.vars.eliteTicks);
			$('#AWA-nav-boxes').remove();
		} else if (window.location.pathname == "/fantasia-ceiling-fan-range/") {
			//Remove non-10 year warranty fans 
			var quickFansArray = ["Viper", "Sigma", "Propeller", "Orion", "Phoenix", "Spinnaker", "Gemini", "Medina", "Palm", "Wicker", "Trinity", "Amalfi", "Riviera", "Classic", "Vienna", "Mayfair", "Capri", "Vento"];
			$('.ProductList li').each(function() {
				var tempTitle = $(this).find('.AWA-almafi-title').text();
				for (var i = 0; i < quickFansArray.length; i++) {
					if (tempTitle == quickFansArray[i]) {
						$(this).addClass("temp-keep");
					}
				}
			});
			$('.ProductList').find('li:not(".temp-keep")').remove();
		}

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
			$('#AWA-refine-button').remove();
			$('.product-title').find('strong').css('visibility', 'visible');
		} else if (window.location.pathname == "/drop-rods/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/other-accessories/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fan-lighting/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fan-controllers/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/led-bulbs/") {
			$('.AWA-filter').remove();
		} else if (window.location.pathname == "/ceiling-fans-without-lights/") {
			// Remove stray fan with light
			$('a[href="http://www.theceilingfancompany.co.uk/fantasia-low-energy-delta-maple-ceiling-fan-with-light-led-options/"]').first().parent().parent().parent().remove();
		} else if (window.location.pathname == "/ceiling-fans-with-lights/") {
			// Remove Vento Dragonfly fan
			$('a[href="http://www.theceilingfancompany.co.uk/fantasia-vento-dragonfly-ceiling-fan-54/"]').first().parent().parent().parent().remove();
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


		
	};

	// Run the experiment
	setTimeout(function() {
		exp.init();
	}, 1100);

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
// vwo_$(function(){
//_vis_opt_element_loaded('2'); // 2 is the test id
//});
