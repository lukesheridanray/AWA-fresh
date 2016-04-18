//function() {
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
	exp.log('Catalogue v1');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	exp.condition = $("body");

	// Check for a condition and return false if it has not been met
	if (exp.condition && !exp.condition.length) {
	    exp.log('Catalogue failed a condition');
	}
	
	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = "http://static.pubhtml5.com/book/js/jquery-1.9.1.min.js";
		$("head").append( script );

		setTimeout(function() {
			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://online.pubhtml5.com/xljx/dsym/javascript/config.js";
			$("head").append( script );
		}, 1000);
		setTimeout(function() {
			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://static.pubhtml5.com/book/js/LoadingJS.js";
			$("head").append( script );
		}, 1000);
		setTimeout(function() {
			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://static.pubhtml5.com/book/template/Handy/javascript/main.js";
			$("head").append( script );
		}, 1000);

			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://online.pubhtml5.com/xljx/dsym/files/search/book_config.js";
			$("head").append( script );

			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://static.pubhtml5.com/book/js/flipHtml5.hiSlider2.min.js";
			$("head").append( script );

			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://static.pubhtml5.com/book/js/MovingBackgrounds.min.js";
			$("head").append( script );

			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.src = "http://online.pubhtml5.com/xljx/dsym/slide_javascript/slideJS.js";
			$("head").append( script );


	};

	// Run the experiment
	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}

