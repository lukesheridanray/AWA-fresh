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
	exp.log('Category Page v1 - var1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#main_internal_full_box");

	// Check for a condition and return false if it has not been met
	// if (exp.condition && !exp.condition.length) {
	//     exp.log('Gift Guide 2 failed a condition');
	//     return false;
	// }
	// Commenting out conditions since IE is having a hard time with it

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		mainSection: 	"<div id='AWA-main-section'>\
							<a id='AWA-hero'><img src='http://images.dunelm.com/i/dm/furniture_08_bedroom_furn_wk22.jpg?qlt=70'></a>\
							<h1 id='AWA-furniture-offers'>Furniture Offers</h1>\
							<a id='AWA-save-banner' href='/category/offers/furniture-offers'><img src='//cdn.optimizely.com/img/3719724514/e59ce1dc3caa427a88bae46a1bbe7ff9.jpg'></a>\
							<h1 id='AWA-browse'>Browse by Category</h1>\
							<div id='AWA-cat-bedroom-furniture' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture'><img src='//cdn.optimizely.com/img/3719724514/b05247ff021a4c3a9ddd777ffbcc0f95.jpg'></a>\
								<div class='AWA-cat-title'>Bedroom Furniture</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/bedroom-furniture-collections'>Bedroom Furniture Collections</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/bedside-tables'>Bedside Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/chest-of-drawers'>Chest of Drawers</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/dressing-tables'>Dressing Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/wardrobes'>Wardrobes</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/beds-bedsteads-and-mattresses'>Beds, Bedsteads and Mattresses</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/childrens-furniture-collections'>Children's Furniture</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/nursery-furniture-collections'>Nursery Furniture</a>\
								</div>\
							</div>\
							<div id='AWA-cat-living-room-furniture' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture'><img src='//cdn.optimizely.com/img/3719724514/2aca5bf0c6bd466cbc97e58f6af4aa72.jpg'></a>\
								<div class='AWA-cat-title'>Living Room Furniture</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/living-room-furniture-collections'>Living Room Furniture Collections</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/coffee-tables'>Coffee Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/tv-stands'>TV Stands</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/nest-of-tables'>Nest of Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/console-tables'>Console Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/telephone-table'>Telephone Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/living-room-furniture/sideboards'>Sideboards</a> \
								</div>\
							</div>\
							<div id='AWA-cat-sofas' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs'><img src='//cdn.optimizely.com/img/3719724514/e77f3e19eefa48d082d11586fb89017f.jpg'></a>\
								<div class='AWA-cat-title'>Sofas and Chairs</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs/sofas'>Sofas</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs/armchairs'>Armchairs</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs/tub-chairs'>Tub Chairs</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs/bar-stools'>Bar Stools</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/sofas-and-chairs/footstools'>Footstools</a> \
								</div>\
							</div>\
							<div id='AWA-cat-dining-room-furniture' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture'><img src='//cdn.optimizely.com/img/3719724514/8d99abd5024d41e5b0c843aaac3cdc03.jpg'></a>\
								<div class='AWA-cat-title'>Dining Room Furniture</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture/dining-room-furniture-collections'>Dining Room Furniture Collections</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture/dining-chairs'>Dining Chairs</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture/dining-tables'>Dining Tables</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/dining-room-furniture/display-cabinets'>Display Cabinets</a> \
								</div>\
							</div>\
							<div id='AWA-cat-beds' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/beds--bedsteads-and-mattresses'><img src='//cdn.optimizely.com/img/3719724514/e4126103268249d394f9dbbd59fefaee.jpg'></a>\
								<div class='AWA-cat-title'>Beds, Bedsteads and Mattresses</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/beds-bedsteads-and-mattresses/bedsteads-and-headboards'>Bedsteads and Headboards</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/beds-bedsteads-and-mattresses/mattresses'>Mattresses</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/beds-bedsteads-and-mattresses/divan-beds'>Divan Beds</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/beds-bedsteads-and-mattresses/childrens-beds'>Children's Beds</a> \
								</div>\
							</div>\
							<div id='AWA-cat-office' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/office-furniture'><img src='//cdn.optimizely.com/img/3719724514/0fa1a40a50ab42f9a41c9781202c9424.jpg'></a>\
								<div class='AWA-cat-title'>Office Furniture</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/office-furniture/bookcases'>Bookcases</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/office-furniture/desks'>Desks</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/office-furniture/shelves-35032--1'>Shelves</a> \
								</div>\
							</div>\
							<div id='AWA-cat-storage' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/storage-furniture'><img src='//cdn.optimizely.com/img/3719724514/8b6794a86564411c8cc8b9c862a09317.jpg'></a>\
								<div class='AWA-cat-title'>Storage Furniture</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/storage-furniture/ottomans-and-storage-trunks'>Ottomans and Storage Trunks</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/storage-furniture/bathroom-storage-furniture-34268--1'>Bathroom Storage Furniture</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/furniture/storage-furniture/shelves'>Shelves</a> \
								</div>\
							</div>\
							<div id='AWA-cat-garden' class='AWA-cat-section'>\
								<a href='http://www.dunelm.com/category/home-and-furniture/furniture/garden-and-conservatory-furniture-34276--1'><img src='//cdn.optimizely.com/img/3719724514/8a44e63f641045268af6da1581745467.jpg'></a>\
								<div class='AWA-cat-title'>Garden and Conservatory Furniture</div>\
								<div class='AWA-sub'>\
									<a href='http://www.dunelm.com/category/home-and-furniture/garden-and-conservatory/garden-and-conservatory-furniture/garden-and-conservatory-furniture-sets'>Garden and Conservatory Furniture Sets</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/garden-and-conservatory/garden-and-conservatory-furniture/garden-chairs-and-loungers'>Garden Chairs and Loungers</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/garden-and-conservatory/garden-and-conservatory-furniture/garden-benches'>Garden Benches</a>, \
									<a href='http://www.dunelm.com/category/home-and-furniture/garden-and-conservatory/garden-and-conservatory-furniture/garden-arches-and-gazebos'>Garden Arches and Gazebos</a> \
								</div>\
							</div>\
						</div>"
	};


	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.AWA-hide-main {\
		display: none;\
	}\
	#AWA-main-section {\
		float: left;\
		width: 80%;\
		padding-left: .625em;\
	}\
	#AWA-save-banner {\
		clear: both;\
		display: block;\
		background-color: #ED008C;\
	}\
	#AWA-main-section h1 {\
		color: #3f9c35;\
		font-size: 1.5em;\
		font-weight: 700;\
		margin: 1em 0 .625em 0;\
	}\
	.AWA-cat-section {\
		width: 30%;\
		float: left;\
		margin-bottom: 15px;\
	}\
	.AWA-cat-title {\
		font-weight: bold;\
		padding: 5px 0 2px 0;\
	}\
	#AWA-hero {\
		display: block;\
		width: 100%;\
	}\
	#AWA-cat-living-room-furniture, #AWA-cat-beds, #AWA-cat-garden {\
		margin: 0 5% 15px 5%;\
	}\
	#AWA-cat-dining-room-furniture, #AWA-cat-storage {\
		clear: both;\
	}\
	.AWA-sub a {\
	    font-size: .8em;\
	}\
	.rr__recently-viewed--wrap {\
		display: none;\
	}\
    @media all and (max-width: 650px) {\
    	#AWA-main-section {\
    		width: 100%;\
    	}\
        .AWA-cat-section {\
        	clear: both;\
        	width: 100%;\
        	margin-bottom: 15px;\
        }\
		#AWA-cat-living-room-furniture, #AWA-cat-beds, #AWA-cat-garden {\
			margin: 0 0 15px 0;\
		}\
		.AWA-sub a {\
		    font-size: 1em;\
		}\
		#AWA-new-delivery {\
			display: none;\
		}\
    }';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// This function waits till a condition returns true
	exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
	    timeout = timeout || 20000;
	    keepAlive = keepAlive || false;
	    var intervalTime = 50,
	        maxAttempts = timeout / intervalTime,
	        attempts = 0,
	        interval = setInterval(function() {
	            if (condition()) {
	                if (!keepAlive) {
	                    clearInterval(interval);
	                }
	                callback();
	            } else if (attempts > maxAttempts) {
	                clearInterval(interval);
	            }
	            attempts ++;
	        }, intervalTime);
	};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

		// Add custom class to main wrapper so it can be hidden via CSS
		$(".category__content").addClass("AWA-hide-main");

		// Add main section
		$(".category__content").after(exp.vars.mainSection);

		// Insert banner
		$("#AWA-main-section").after(exp.vars.banner);

		// Reinsert Christmas banner
		$("#AWA-main-section").prepend($("#espot_catpg_01_10646"));

		// Swap delivery images
		$("#espot_catpg_03_10648").html("<img id='AWA-new-delivery' src='//cdn.optimizely.com/img/3719724514/1ef0f99a2e054e7892214152b6c5f866.jpg'>");

		// When "Recently view items" loads it shows the whole main content of the page again. Weed need to check for the presence of this and reapply the hidden class
		exp.func.waitFor(function(){ return $(".rr__recently-viewed--wrap").is(":visible") }, function() { $(".category__content").attr('style', 'display: none !important;'); $(".rr__recently-viewed--wrap").attr('style', 'display: none !important;'); }, 1000);

	};


	// Run the experiment
	$(document).ready(function() {
		exp.func.waitFor(function(){ return $("#espot_catpg_flexible_10651").length }, exp.init, 1000);
	});

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
