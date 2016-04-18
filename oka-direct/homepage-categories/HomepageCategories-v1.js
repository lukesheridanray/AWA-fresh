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
	exp.log('Homepage Categories v1');

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
					        <a href="http://www.okadirect.com/florya-mugs-set-of-4.aspx?nosto=frontpage-nosto-2">\
					            <img src="//d2d9p2t5jvcryy.cloudfront.net/ekaiby5f/1/LWR099" alt="Florya Mugs, Set of 4" class="full-width">\
				                <p class="price">\
				                    Florya Mugs, Set of 4<br>\
				                    <span class="muted">£36.00</span> <br>\
				                 </p>\
					        </a>\
					    	</li>\
							<li class="span2 text-center">\
						        <a href="http://www.okadirect.com/pleated-linen-lampshade-30cm.aspx?nosto=frontpage-nosto-2">\
						            <img src="//d2d9p2t5jvcryy.cloudfront.net/ekaiby5f/1/JJS039" alt="30cm Pleated Linen Lampshade" class="full-width">\
					                <p class="price">\
					                    30cm Pleated Linen Lampshade<br>\
                                        <span class="muted">£29.00</span> <br>\
                                    </p>\
						        </a>\
						    </li>\
   						</ul>',
   		navBar: "<div class='span12 AWA-nav-bar'>\
   					<ul>\
   						<li><a href='http://www.okadirect.com/furniture/'>Furniture</a></li>\
   						<li><a href='http://www.okadirect.com/accessories/'>Accessories</a></li>\
   						<li><a href='http://www.okadirect.com/inspirations/'>Inspiration</a></li>\
   						<li><a href='http://www.okadirect.com/new-season/'>New Season</a></li>\
   					</ul>\
   				</div><div style='clear:both'></div>",
   		popularCategoriesHeading: 	"<h3 class='heading optima upper' id='AWA-popular-categories-heading'><span>Popular Categories</span></h3>",
   		popularCategories: 	'<ul class="unstyled row">\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/faux-christmas-berry-bunch.aspx?nosto=frontpage-nosto-2">\
							            <img src="//d2d9p2t5jvcryy.cloudfront.net/ekaiby5f/1/NPX174" alt="Faux Christmas Berry Bunch" class="full-width">\
						                <p class="price">\
						                    Faux Christmas Berry Bunch<br>\
						                    <span class="muted">£24.00</span> <br>\
						                </p>\
							        </a>\
							    </li>\
								<li class="span2 text-center">\
							        <a href="http://www.okadirect.com/accessories/tableware/">\
							            <img src="//useruploads.visualwebsiteoptimizer.com/useruploads/192905/images/3116b60379e58363395439d898f5aab8_living-room-tableware.jpg" alt="Tableware" class="full-width">\
							        </a>\
							    </li>\
   							</ul>'
   									
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-nav-bar ul {\
	    display: block;\
	    width: 100%;\
	    margin: 0;\
	    padding: 0;\
	    margin-bottom: 50px;\
	}\
	.AWA-nav-bar ul li {\
		display: block;\
		width: 24.7%;\
		margin: 0;\
		float: left;\
		text-align: center;\
		padding: 5px 0 5px 0;\
		background-color: #F7F5F6;\
		border: solid 1px #CCCCCC;\
	}\
	.AWA-nav-bar ul li:nth-of-type(1), .AWA-nav-bar ul li:nth-of-type(2), .AWA-nav-bar ul li:nth-of-type(3) {\
		border-right: 0;\
	}\
	.AWA-nav-bar ul li:hover {\
		background-color: #E9E9E9;\
	}\
	.AWA-nav-bar ul li a {\
		color: black;\
		display: block;\
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
	    var $newsletter = $("img[src='/Global/home/new/UK/2015/10-October/Newsletter.jpg']").parent().parent().parent();
	    $newsletter.after(exp.vars.mainCategories);


 		/* --- BEST SELLERS --- */
	    // Hide existing carousel products
	    $("#bestSellerCarousel .carousel-inner").find('ul').first().hide();

	    // Insert best sellers
	    $("#bestSellerCarousel .carousel-inner").find('.item.span12').first().html(exp.vars.bestSellers);
	    $("#bestSellerCarousel").find(".carousel-control").hide();


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
