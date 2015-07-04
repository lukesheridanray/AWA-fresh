//function () {
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
    exp.log('Left Navigaion - 1.0 (var 1)');

    /*
    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    exp.condition = $('.unique-selector');
    */
    exp.condition = $('#page-browse-landingHome');

    // Check for a condition and return false if it has not been met
    if(exp.condition && !exp.condition.length) {
        exp.log('Left Navigaion Experiment failed a condition');
        return false;
    }

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
      #left-nav {\
        display: block; list-style-type: none; font-weight: 600; font-size: 13px; line-height: 25px; border: solid 1px rgb(226, 226, 226); width: 17%; float: left; padding-left: 12px; padding-bottom: 10px; border-radius: 5px;\
      }\
      #browse-books {\
        color: rgb(57, 78, 84); font-weight: bold; border-bottom: solid 1px rgb(226, 226, 226); padding: 5px 0 5px 0; width: 84%;\
      }\
      #first-category {\
        padding-top: 5px\
      }\
      #main-content {\
        width: 83%; float: right;\
      }\
      @media (max-width: 767px) {\
        #left-nav {\
          display: none;\
        }\
        #main-content {\
          width: 100%; clear: both;\
        }\
      }';

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
      // Append style to head
      $('head').append('<style type="text/css">'+this.css+'</style>');

      // Create navigation menu
      var list = "<ul id='left-nav'>\
      <li id='browse-books'>Browse Books</li>\
      <li id='first-category'><a href=''>New Arrivals</a></li>\
      <li><a href=''>Bestsellers</a></li>\
      <li><a href=''>Children's Books</a></li>\
      <li><a href=''>Biographies</a></li>\
      <li><a href=''>Fiction</a></li>\
      <li><a href=''>TV, Film & Music</a></li>\
      <li><a href=''>Food & Drink</a></li>\
      <li><a href=''>Lifestyle</a></li>\
      <li><a href=''>Hobbies & Interests</a></li>\
      <li><a href=''>Reference</a></li>\
      <li><a href=''>Collections</a></li>\
      <li><a href=''>Special Offers</a></li>\
      <li><a href=''>Travel Shop</a></li>\
      <li><a href=''>Action & Adventure</a></li>\
      <li><a href=''>Crime Thriller</a></li>\
      <li><a href=''>Fantasy & Science Fiction</a></li>\
      <li><a href=''>Historical Fiction</a></li>\
      <li><a href=''>Horror & Paranormal</a></li>\
      <li><a href=''>Romance</a></li>\
      <li><a href=''>Home & Garden</a></li>\
      <li><a href=''>DVDs</a></li>\
      </ul>";

      // Add navigation menu to page
      $('#primaryContainer').prepend(list);

      // Add an id to the main content since one does not exist
      var content = $('.row')[3];
      $(content).attr('id', 'main-content');
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
  })(jQuery);
//}


// For Mobile if needed
/*@media (max-width: 767px) {\
  #left-nav + .row {\
    width: 80%; float: right;\
  }\
  #left-nav {\
    display: block; list-style-type: none; font-weight: 600; font-size: 78%; line-height: 160%; border: solid 1px rgb(226, 226, 226); width: 20%; float: left; padding-left: 1%; padding-bottom: 1%;\
  }\
  #left-nav li {\
    padding-bottom: 5px; padding-right: 2%;\
  }\
}';*/