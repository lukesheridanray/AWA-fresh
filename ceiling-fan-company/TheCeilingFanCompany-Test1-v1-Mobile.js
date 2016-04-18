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
	exp.log('Test1 v1 - Mobile');

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
							<p>With 1 hour delivery slot for all orders</p>\
						</div>\
					</div>",
		search: "<div class='AWA-search'>\
					<img src='//cdn.optimizely.com/img/174847139/8e8cc99184c342678cdbf2c68d74b998.png' width='20' height='20'>\
				</div>",
		logos: "<div style='clear: both'></div><div class='AWA-logos'>\
					<img src='//cdn.optimizely.com/img/174847139/84c665abbaf74e499fd3b66dc15d7918.png'>\
					<img src='//cdn.optimizely.com/img/174847139/7f602ac73648438481f163369ac9ea37.png'>\
				</div>",
		fantasia: 	"<div class='AWA-fantasia'>\
						<p>Fantasia Fans Official Retailer. You can't buy cheaper - guaranteed.</p>\
						<img id='fantasia-logo' src='//cdn.optimizely.com/img/174847139/15dea4ea84384fe0ba7d3b23b0dd8049.png'>\
					</div>",
		menu: 	"<div class='AWA-menu'>\
					<ul class='AWA-menu-1'>\
						<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fans-with-lights/'>Fans with lights</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'>Fans without lights</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/fantasia-ceiling-fan-range/'>The Fantasia Range</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/energy-saving-ceiling-fans/'>Energy Saving Fans</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/brands/'>Fans by colour</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/other-accessories/'>Fan Accessories</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/contact-us/'>Contact Us</a></li>\
						<li><a href='http://www.theceilingfancompany.co.uk/about-fantasia-fans/'>About Us & Our fans</a></li>\
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
												Ceiling Fans with lights - See all\
											</div>\
										</div>\
									</div></a>\
									<div id='AWA-blurb-1' class='AWA-value-blurb'>\
										Whisper quiet fans with up to 15 years warranty\
									</div>\
									<a href='http://www.theceilingfancompany.co.uk/ceiling-fans-without-lights/'><div id='AWA-cat-cfwl' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												Ceiling Fans without lights - See all\
											</div>\
										</div>\
									</div></a>\
									<div id='AWA-blurb-2' class='AWA-value-blurb'>\
										We price match all products\
									</div>\
									<a href='http://www.theceilingfancompany.co.uk/brands/White.html'><div id='AWA-cat-wcf' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												White Ceiling Fans - See all\
											</div>\
										</div>\
									</div></a>\
									<div id='AWA-blurb-3' class='AWA-value-blurb'>\
										Extremely low running costs for all\
									</div>\
									<a href='http://www.theceilingfancompany.co.uk/conversion-kits/'><div id='AWA-cat-acc' class='AWA-home-category'>\
										<div class='AWA-home-category-pic'>\
											<div class='AWA-home-category-title'>\
												Accessories - See all\
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
					</div>\
					<a id='AWA-why-buy-link2' href='#'><div class='AWA-why-buy-2'>\
						Why buy Fantasia Fans?\
					</div></a>\
					<div class='AWA-why-buy-2-dropdown'>\
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
					<img src='http://cdn1.bigcommerce.com/server5200/ego6j0ia/product_images/uploaded_images/theceilingfancompany-approved.jpg' width='110'>\
				</div>"
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
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');

	    // Change header
	    $('#Container').prepend(exp.vars.mobileTop);
	    //$('.AWA-mobile-top').prepend($('.showMenu'));
	   // $('.AWA-mobile-top').prepend($('#cart-amount'));

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
	    // Remove current main menu
	    $('#LayoutColumn1').remove();


	    $('#Wrapper').append(exp.vars.menu);

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

	    $('#Footer').html(exp.vars.footer);
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);