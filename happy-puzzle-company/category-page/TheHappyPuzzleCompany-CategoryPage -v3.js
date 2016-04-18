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
	exp.log('Category Page v3 - Desktop');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#main_middle_container'); // Very inclusive

	// Check for a condition and return false if it has not been met
	/*
	if (exp.condition && !exp.condition.length) {
		exp.log('Category Page failed a condition');
		return false;
	}
	*/
	// IE does not play nice with this conditioning in VWO, removing it for now

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		creativeThinking: 	"<div id='AWA-category'>\
								<h2>Creative Thinking</h2>\
								<p>\
									Enhance your child’s thinking skills with puzzles and games that are tons of fun to play. See their confidence soar, as well as their communication and concentration skills.\
								</p>\
							</div>",
		threeDPuzzleModelKits: 	"<div id='AWA-category'>\
									<h2>3D Puzzle Model Kits</h2>\
									<p>\
										Children gain a huge sense of pride from building their own 3D models. Our kits also help them develop fine motor skills, hand-eye co-ordination and spatial awareness.\
									</p>\
								</div>",
		mapJigsaws: "<div id='AWA-category'>\
						<h2>Map Jigsaws</h2>\
						<p>\
							Creating a map, piece by piece, not only helps children learn geographic facts, it’s also a great way to help their visual and sequencing skills and discover strategic planning.\
						</p>\
					</div>",
		mathsGames: "<div id='AWA-category'>\
						<h2>Maths Games</h2>\
						<p>\
							Confidence with numbers is one of the most valuable skills you can give a child. These games make numeracy fun, and help lateral thinking, problem solving and memory.\
						</p>\
					</div>",
		wordGames: 	"<div id='AWA-category'>\
						<h2>Word Games</h2>\
						<p>\
							Help your child learn to read faster, and enjoy it. Playing word games not only improves literacy, but also builds their confidence and develops communication skills.\
						</p>\
					</div>",
		puzzleBooks: 	"<div id='AWA-category'>\
							<h2>Puzzle Books</h2>\
							<p>\
								Expect to see your child absorbed for hours by these brain-teasers and challenges. They are an excellent way to develop logic, literacy, numeracy and concentration.\
							</p>\
						</div>",
		youngerPuzzlers: "<div id='AWA-category'>\
							<h2>Younger Puzzlers</h2>\
							<p>\
								It’s never too early to stimulate a young brain. Specially designed for pre-schoolers, these puzzles help get your child set up for life with a host of valuable general skills.\
							</p>\
						</div>",
		pocketMoneyPuzzles: "<div id='AWA-category'>\
								<h2>Pocket Money Puzzles</h2>\
								<p>\
									Perfect as stocking fillers or little treats, these pint-sized puzzles are big on building important skills, including lateral thinking, strategic planning and visual perception.\
								</p>\
							</div>"
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.featured_price_container {\
		float: none;\
	}\
	.AWA-modified {\
		top: 15px;\
	}\
	.featured_price {\
		font-size: 19px;\
	}\
	.AWA-suitable-text {\
		font-weight: bold;\
		font-size: 15px;\
		margin-left: 5px;\
	}\
	#AWA-favorites {\
		margin-bottom: 20px;\
		padding-left: 20px;\
		height: 37px;\
		font-weight: bold;\
		font-size: 18px;\
		color: purple;\
		border-top: solid 1px black;\
		border-left: solid 1px black;\
		border-right: solid 1px black;\
	}\
	#AWA-spacer {\
		border-top: solid 1px black;\
		padding-top: 40px;\
	}\
	#AWA-category {\
		padding-top: 10px;\
		padding-bottom: 10px;\
		border: solid 1px purple;\
		float: right;\
		width: 730px;\
		margin-bottom: 10px;\
	}\
	#AWA-category h2 {\
		color: #831775;\
		text-align: center;\
		margin-bottom: 5px;\
		font-size: 19px;\
	}\
	#AWA-category p {\
		width: 700px;\
		margin: 0 auto;\
		font-size: 14px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    function mainPage() {
		    // Insert relevant category copy at the top
		    var currentCategory = $(".special_title_link").text();
			switch(currentCategory) {
			    case "Creative Thinking":
			        insertCopy(exp.vars.creativeThinking);
			        break;
			    case "3D Puzzle Model Kits":
			        insertCopy(exp.vars.threeDPuzzleModelKits);
			        break;
			    case "Map Jigsaws":
			        insertCopy(exp.vars.mapJigsaws);
			        break;
			    case "Maths Games":
			        insertCopy(exp.vars.mathsGames);
			        break;
			    case "Word Games":
			        insertCopy(exp.vars.wordGames);
			        break;
			    case "Puzzle Books":
			        insertCopy(exp.vars.puzzleBooks);
			        break;
			    case "Younger Puzzlers":
			        insertCopy(exp.vars.youngerPuzzlers);
			        break;
			    case "Pocket Money Puzzles":
			        insertCopy(exp.vars.pocketMoneyPuzzles);
			        break;
			}

			function insertCopy(copy) {
				$("#main_middle_container").before(copy);
			}


		    // Add "Top Seller" tags on first 3 products in category
		    // Initially remove all tags
		    var tag = $(".new_tag").detach();

		    // Only add tags to first 3 products
		    $(".feature_link:eq(0), .feature_link:eq(1), .feature_link:eq(2)").each(function() {
		    	var hasTag = $(this).find(".new_tag").length;
		    	//exp.log(hasTag);
		    	if (!hasTag) {
		    		$(this).append(tag.clone());
		    	}
		    });


		    // Break out customer favorites
		    var firstRow =  $('.Category_Products_table tbody tr').first();
		    $('.Category_Products_table tbody').prepend("<tr><td colspan='3' id='AWA-favorites'>Customer Favorites:</td></tr>");
		    firstRow.after("<tr><td colspan='3' id='AWA-spacer'></td></tr>");
		    $('.reference_box').first().attr('style', 'margin-bottom: 26px;');

		    $(".feature_link").parent().first().attr('style', 'border-left: solid 1px black;');

		    if ($(".feature_link").parent().length == 1) {
		    	$(".feature_link").parent().first().attr('style', 'border-left: solid 1px black; border-right: solid 1px black;');
		    } else if ($(".feature_link").parent().length == 2) {
		    	$(".feature_link").parent(":eq(1)").attr('style', 'border-right: solid 1px black;');
		    } else {
		    	$(".feature_link").parent(":eq(2)").attr('style', 'border-right: solid 1px black;');
		    }
		}

		// Only run mainPage function if the category page is not filtered, as indicated by the presence of any checked checboxes
		if (!$("input[type=checkbox]:checked").length) {
			mainPage();
		}
		

	    // Change order of filtering options
	    var priceFilter = $('.left_nav_list_ul').first();
	    var ageFilter = $('.left_nav_list_ul:eq(1)');
	    ageFilter.after(priceFilter);
	    priceFilter.before($("#ctl00_cphInnerMaster_spanPrice"));


	    // Change order of skills
	    var creativity = $('.left_nav_list_ul:last li:contains("Creativity")');
	    var numeracy = $('.left_nav_list_ul:last li:contains("Numeracy")');
	    var generalKnowledge = $('.left_nav_list_ul:last li:contains("General Knowledge")');
	    var grossMotorSkills = $('.left_nav_list_ul:last li:contains("Gross Motor Skills")');
	    var creativeThinking = $('.left_nav_list_ul:last li:contains("Creative Thinking")');
	    var problemSolving = $('.left_nav_list_ul:last li:contains("Problem Solving")');
	    var fineMotorSkills = $('.left_nav_list_ul:last li:contains("Fine Motor Skills")');
	    var concentration = $('.left_nav_list_ul:last li:contains("Concentration")');
	    var lateralThinking = $('.left_nav_list_ul:last li:contains("Lateral Thinking")');;

	    $(".left_nav_list_ul").last().prepend(creativity, numeracy, generalKnowledge, grossMotorSkills, creativeThinking, problemSolving, fineMotorSkills, concentration, lateralThinking);


	    // Change height on price div if ".was_now_reference" exists
	    if ($(".was_now_reference").length) {
	    	$(".reference_box").attr('style', 'height: 65px;');
	    }

	    // Add in "Suitable for" text
	    $('.Category_Products_table .feature_link').each(function() {
	    	var url = $(this).attr('href');
	    	var currentProduct = $(this);

			$.ajax({
			type: "GET",
			url: url,
			success: function(data) {
					var response = $(data);

					var suitableText = response.find("#ctl00_cphInnerMaster_lblAgeRange");

					if (suitableText.text().length) {
						suitableText.removeAttr("id");
						suitableText.addClass("AWA-suitable-text");
						suitableText.prepend("Suitable for: ");
						currentProduct.next().prepend(suitableText);

						currentProduct.parent().find('.featured_buy_button').addClass('AWA-modified');

					}

				}
			});
			
	    });

	};

	// Run the experiment
	setTimeout(function() {
		var cat = $(".special_title_link").text();
		if (cat != "Creative Thinking" && cat != "3D Puzzle Model Kits" && cat != "Map Jigsaws" && cat != "Maths Games" && cat != "Word Games" && cat != "Puzzle Books" && cat != "Younger Puzzlers" && cat != "Pocket Money Puzzles") {
			exp.log("Exp not running on predefined category - exiting");
			return false;
		}
		exp.init();
	}, 1000);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);