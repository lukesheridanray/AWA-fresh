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
	exp.log('Navigation v2');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $('#dropdown_menu');

	// Check for a condition and return false if it has not been met
	if(exp.condition && !exp.condition.length) {
	    exp.log('Navigation Experiment failed a condition');
	    return false;
	}

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#top_nav {\
		background-color: rgb(37, 125, 171);\
	}\
	#dropdown_menu .link-style1 {\
		border-left: 1px solid #fff;\
		width: 141px;\
	}\
	#dropdown_menu .link-style2 {\
		width: 109px;\
	}\
	#dropdown_menu .link-style3 {\
		width: 122px;\
	}\
	#dropdown_menu .link-style4 {\
		width: 103px;\
	}\
	#dropdown_menu .link-style5 {\
		width: 106px;\
	}\
	#dropdown_menu .link-style8 {\
		width: 110px;\
	}\
	#dropdown_menu {\
		font-size: 12px;\
	}\
	#dropdown_menu #menu {\
		margin-left: 144px !important;\
	}\
	#dropdown_menu .dropdown-style1 {\
		left: 1px;\
	}\
	#dropdown_menu .dropdown-style2 {\
		left: 143px;\
	}\
	#dropdown_menu .dropdown-style3 {\
		left: 253px;\
	}\
	#dropdown_menu .dropdown-style4 {\
		left: 235px;\
	}\
	#dropdown_menu .dropdown-style5 {\
		left: 342px;\
	}\
	#dropdown_menu .dropdown-style8 {\
		left: 453px;\
	}';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
	    // Append style to head
	    $('head').append('<style type="text/css">'+this.css+'</style>');


	    // Remove undeed menu items
	    $('.link-style6').remove();
	    $('.link-style7').remove();
	    $('.link-style9').remove();
	    $('.link-style10').remove();
	    $('.link-style11').remove();
	    $('.link-style12').remove();


	    //Force a break on several buttons to make it look nicer
	    $('.link-style1 .level1-a').html("Family Puzzles <br> & Games <!--[if gte IE 7]><!-->");
	    $('.link-style2 .level1-a').html("Creative <br> Thinking <!--[if gte IE 7]><!-->");
	    $('.link-style3 .level1-a').html("3D Puzzle <br> Model Kits <!--[if gte IE 7]><!-->");
	    $('.link-style4 .level1-a').html("Map <br> Jigsaws <!--[if gte IE 7]><!-->");
	    $('.link-style5 .level1-a').html("Maths <br> Games <!--[if gte IE 7]><!-->");
	    $('.link-style8 .level1-a').html("Younger <br> Puzzlers <!--[if gte IE 7]><!-->");
	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
