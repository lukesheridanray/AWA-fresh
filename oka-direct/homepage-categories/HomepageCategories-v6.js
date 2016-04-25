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
	exp.log('Homepage Categories v6');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		mainCategories: 	'<div class="row" id="AWA-main-categories">\
					            <div class="span4 first-span4">\
					                <a href="http://www.okadirect.com/accessories/soft-furnishings/scatter-cushions/">\
					                    <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/1abf29b9fa018ec34da7ef4078351836_aw-preview-cushions.jpg" alt="Cushions">\
					                </a>\
					             </div>\
					             <div class="span4">\
					                <a href="http://www.okadirect.com/accessories/lighting/table-lamps/">\
					                    <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/b07b0c7db7858439402d7c30b80aabf3_autumn-table-lamps.jpg" alt="Table Lamps">\
					                </a>\
					             </div>\
					             <div class="span4 last-span4">\
					                <a href="http://www.okadirect.com/furniture/sofas-and-chairs/sofas/">\
					                    <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/132eab946cefe7c6f757b1aae98177eb_dining-furniture-sofas.jpg" alt="Sofas">\
					                </a>\
					             </div>\
					        </div>',
		bestSellers: 	'<ul class="unstyled row">\
					        <li class="span2 text-center">\
					        <a href="http://www.okadirect.com/driftwood-wall-mirror.aspx?vid=WJ018">\
					            <img src="http://resources1.okadirect.com/assets/en/new/catalogue/170x170/WJ018_01.jpg" alt="Driftwood Wall Mirror" class="full-width">\
				                <p class="price">\
				                    Driftwood Wall Mirror<br>\
				                    <span class="muted">£179.00</span> <br>\
				                 </p>\
					        </a>\
					    	</li>\
							<li class="span2 text-center">\
						        <a href="http://www.okadirect.com/handel-vase.aspx?vid=NVS028GLS-0">\
						            <img src="http://resources1.okadirect.com/assets/en/new/catalogue/170x170/NVS028GLS-0_01.jpg" alt="Handel Vase" class="full-width">\
					                <p class="price">\
					                    Handel Vase<br>\
                                        <span class="muted">£24.00</span> <br>\
                                    </p>\
						        </a>\
						    </li>\
							<li class="span2 text-center">\
						        <a href="http://www.okadirect.com/lian-dessert-plate.aspx?vid=LWR111MLT-0">\
						            <img src="http://resources1.okadirect.com/assets/en/new/catalogue/170x170/LWR111MLT-0_01.jpg" alt="Lian Dessert Plate" class="full-width">\
					                <p class="price">\
					                    Lian Dessert Plate<br>\
                                        <span class="muted">£10.00</span> <br>\
                                    </p>\
						        </a>\
						    </li>\
							<li class="span2 text-center">\
						        <a href="http://www.okadirect.com/epirus-cushion-cover-medium.aspx?vid=QCH208BLM-0">\
						            <img src="http://resources1.okadirect.com/assets/en/new/catalogue/170x170/QCH208BLM-0_01.jpg" alt="Epirus Cushion Cover" class="full-width">\
					                <p class="price">\
					                    Epirus Cushion Cover, Medium<br>\
                                        <span class="muted">£124.00</span> <br>\
                                    </p>\
						        </a>\
						    </li>\
							<li class="span2 text-center">\
						        <a href="http://www.okadirect.com/gustavian-wooden-sofa-side-table.aspx?vid=EG200BRL-0">\
						            <img src="http://resources1.okadirect.com/assets/en/new/catalogue/170x170/EG200BRL-0_01.jpg" alt="Gustavian Wooden Sofa Side Table" class="full-width">\
					                <p class="price">\
					                    Gustavian Wooden Sofa Side Table<br>\
                                        <span class="muted">£149.00</span> <br>\
                                    </p>\
						        </a>\
						    </li>\
							<li class="span2 text-center">\
						        <a href="http://www.okadirect.com/boulevard-outdoor-dining-chair.aspx?vid=XOC034MET-0&search=autocomplete">\
						            <img src="http://resources1.okadirect.com/assets/en/new/catalogue/170x170/XOC034MET-0_01.jpg" alt="Boulevard Outdoor Dining Chair" class="full-width">\
					                <p class="price">\
					                    Boulevard Outdoor Dining Chair<br>\
                                        <span class="muted">£299.00</span> <br>\
                                    </p>\
						        </a>\
						    </li>\
   						</ul>',
   		navBar: "<div class='span12 AWA-nav-bar'>\
   					<ul>\
   						<li><a href='http://www.okadirect.com/furniture/'>Furniture</a></li>\
   						<li><a href='http://www.okadirect.com/accessories/'>Accessories</a></li>\
   						<li><a href='http://www.okadirect.com/inspirations/'>Inspirations</a></li>\
   						<li><a href='http://www.okadirect.com/new-season/'>New Season</a></li>\
   					</ul>\
   				</div><div style='clear:both'></div>",
   		popularCategoriesHeading: 	"<h3 class='heading optima upper' id='AWA-popular-categories-heading'><span>Popular Categories</span></h3>",
   		popularCategories: 	'<ul class="unstyled row">\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/accessories/soft-furnishings/rugs/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/a8ea7529d6600bbc29fae1e598657195_rugs.jpg" alt="Rugs" class="full-width">\
						                <p class="price">\
						                    Rugs<br>\
						                </p>\
							        </a>\
							    </li>\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/accessories/tableware/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/e33eda0c0ecfbb419a53f35d5fe583a6_tableware.jpg" alt="Tableware" class="full-width">\
						                <p class="price">\
						                    Tableware<br>\
						                </p>\
							        </a>\
							    </li>\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/furniture/tables/side-tables/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/420a75361b35699d3695a7c6940d77d7_sidetables.jpg" alt="Side Tables" class="full-width">\
						                <p class="price">\
						                    Side Tables<br>\
						                </p>\
							        </a>\
							    </li>\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/furniture/sofas-and-chairs/armchairs/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3aa77f5272eb2d64f51be5471489f652_armchairs.jpg" alt="Arm Chairs" class="full-width">\
						                <p class="price">\
						                    Armchairs<br>\
						                </p>\
							        </a>\
							    </li>\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/accessories/flowers-and-plants/artificial-flowers/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/bb61b138bd09c48e6822f2488374838c_artificialflowers.jpg" alt="Artificial Flowers" class="full-width">\
						                <p class="price">\
						                    Artificial Flowers<br>\
						                </p>\
							        </a>\
							    </li>\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/furniture/tables/dining-tables/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/2d4e0347c9dd647ea63c7856de0803ac_diningtables.jpg" alt="Dining Tables" class="full-width">\
						                <p class="price">\
						                    Dining Tables<br>\
						                </p>\
							        </a>\
							    </li>\
   							</ul>',
   		furnitureAccessories: 	"<div class='AWA-furniture-accessories row'>\
   									<a href='http://www.okadirect.com/furniture/' id='AWA-furniture-link' class='AWA-FA-link'>FURNITURE<em class='icon-chevron-right muted AWA-icon'>&nbsp;</em></a>\
   									<a href='http://www.okadirect.com/accessories/' id='AWA-accessories-link' class='AWA-FA-link'>ACCESSORIES<em class='icon-chevron-right muted AWA-icon'>&nbsp;</em></a>\
   								</div>",
   		mobileCategories: 	"<div class='AWA-mobile-categories row'>\
   									<div>\
   										<a href='http://www.okadirect.com/accessories/lighting/table-lamps/'>\
					                    	<img class='AWA-mobile-categories-image' src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/222487c8183cdc96a513235909bb4208_tablelampscategory_copy.jpg' alt='Table Lamps'>\
					                	</a>\
   									</div>\
   									<div>\
   										<a href='http://www.okadirect.com/accessories/soft-furnishings/scatter-cushions/'>\
					                    	<img class='AWA-mobile-categories-image' id='AWA-mobile-categories-image-right' src='//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/c81ff11cf6bdb032c2b50f440312bda9_cushionscategory_copy.jpg' alt='Cushions'>\
					                	</a>\
   									</div>\
   							</div>"
   									
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-FA-link {\
	    background-color: #E9E9E9;\
	    width: 49.5%;\
	    display: block;\
	    font-size: 17.5px;\
	    font-family: Bliss2ExtraLight;\
	    font-weight: bold;\
	    color: black;\
	    text-align: center;\
	    float: left;\
	    padding: 15px 0 15px 0;\
	}\
	#AWA-accessories-link {\
		float: right;\
	}\
	.AWA-FA-link:hover {\
		color: black;\
	}\
	.AWA-icon {\
		margin-top: 4px;\
		margin-left: 4px;\
	}\
	.AWA-mobile-categories-image {\
		max-width: 49.5%;\
		float: left;\
	}\
	#AWA-mobile-categories-image-right {\
		float: right;\
	}\
	.AWA-nav-bar ul {\
	    display: block;\
	    width: 100%;\
	    margin: 0;\
	    padding: 0;\
	    margin-bottom: 50px;\
	}\
	.AWA-nav-bar ul li {\
		display: block;\
		width: 24.5%;\
		margin: 0;\
		float: left;\
		text-align: center;\
		background-color: #E9E9E9;\
		border: solid 2px #FFFFFF;\
	}\
	.AWA-nav-bar ul li:nth-of-type(1), .AWA-nav-bar ul li:nth-of-type(2), .AWA-nav-bar ul li:nth-of-type(3) {\
		border-right: 0;\
	}\
	.AWA-nav-bar ul li:hover {\
		background-color: #F7F5F6;\
	}\
	.AWA-nav-bar ul li a {\
		padding: 5px 0 5px 0;\
		font-family: Bliss2ExtraLight;\
		color: #666;\
		text-transform: uppercase;\
		display: block;\
		font-weight: 700;\
		font-size: 14px;\
	}\
	#AWA-popular-categories .price {\
		margin-top: 8px;\
	}\
	.carousel {\
		margin-bottom: 0;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    /* --- MAIN CATEGORIES --- */
	    // Place main categories after newsletter
	    var $newsletter = $("img[src='/Global/home/new/UK/2015/11-November/Marlow.jpg']").parent().parent().parent();
	    $newsletter.after(exp.vars.mainCategories);


 		/* --- BEST SELLERS --- */
	    // Hide existing carousel products
	    //$("#bestSellerCarousel .carousel-inner").find('ul').first().hide();

	    // Insert best sellers
	    //$("#bestSellerCarousel .carousel-inner").find('.item.span12').first().html(exp.vars.bestSellers);
	   // $("#bestSellerCarousel").find(".carousel-control").hide();


	     /* --- NAV BAR --- */
	    // Insert nav bar
	    $("#carousel-press-home").before(exp.vars.navBar);


 		/* --- POPULAR CATEGORIES --- */
	    // Insert Popular Categories heading
	    $(".AWA-nav-bar").after(exp.vars.popularCategoriesHeading);

	    // Clone existing Best Sellers section and turn it into the Popular Categories section
	    var $popularCategoriesSection = $("#bestSellerCarousel").clone();
	    $popularCategoriesSection.attr('id', 'AWA-popular-categories');
	    $("#AWA-popular-categories-heading").after($popularCategoriesSection);

	    // Hide existing carousel products
	    $("#AWA-popular-categories .carousel-inner").find('ul').first().hide();
	    $("#AWA-popular-categories .carousel-inner").find('.item.span12').first().html(exp.vars.popularCategories);

	    // Hide Popular Categories slider controls
	    $("#AWA-popular-categories .carousel-control").hide();


	    /* --- MOBILE VERSION --- */
	    // Insert mobile categories after "REQUEST A CATALOGUE" banner
 		$('.visible-phone.banner-mobile').children().last().after(exp.vars.furnitureAccessories);
		$('.AWA-furniture-accessories').after(exp.vars.mobileCategories);
	    
	   
	};

	// Run the experiment
	

	$(document).ready(function() {
		var checkExist = setInterval(function() {
			if ($('h3:contains("Best-Sellers")').length) {
				exp.init();
				clearInterval(checkExist);
			}
		}, 100); 
	});


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
