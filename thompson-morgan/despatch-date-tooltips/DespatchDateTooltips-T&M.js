function () {
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
exp.log('Despatch Date Tooltips - v1');

/*
// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.unique-selector');
*/
//exp.condition = $('.toplevel');

// Check for a condition and return false if it has not been met
/*if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
// }*/
// if (exp.condition && !exp.condition.length) {
//     exp.log('Despatching Now Experiment failed a condition');
//     return false;
// }

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
};

// Styles
// String containing the CSS for the experiment
exp.css = '';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
  var css = "\
  #removeTable tbody .dispatch {\
    position: relative;\
  }\
  .vm020 {\
    display: none;\
    position: absolute;\
    background: url('https://d1m54pdnjzjnhe.cloudfront.net/pngineer/5ebe0fd0-15bb-11e5-a13c-cb6c389c2e42.png');\
    width: 369px;\
    height: 206px;\
    top: -177px;\
    left: -132px;\
    z-index: 100;\
    box-sizing: border-box;\
    padding: 13px;\
    font-weight: normal;\
    font-size: .95em;\
  }\
  .title {\
    font-size: 15px;\
    color: #00572d;\
  }\
  p {\
    line-height: 14px;\
    margin: 8px 0;\
  }";


  $('head').append('<style type="text/css">'+css+'</style>');
  var vm020 = {
    months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    blacklist : [
      "Half Hardy Annual Seeds",
      "Hardy Annual Seeds",
      "Perennial &amp; Biennial Seeds",
      "All Vegetable Seeds",
      "Tomato Seeds"
    ],

    isProductAllowed : function(index, $item) {
      var category = window.universal_variable.basket.line_items[index].product.category;
      var matched = false;

      var date = $item.text().match(/By end of ([^\s]+) (\d+)/);
      if (!date) {
        return;
      }

      var currentMonth = vm020.months[new Date().getMonth()];
      var currentYear = new Date().getFullYear();
      var dispatchYear = parseInt(date[2], 10);
      var dispatchMonth = date[1];
      var isSameMonth = dispatchMonth === currentMonth && dispatchYear === currentYear;


      $.map(vm020.blacklist, function (val) {
        if (val.toLowerCase() === category.toLowerCase()) {
          matched = true;
        }
      });

      return !matched && !isSameMonth;
    }

  };

  var template = [
    '<div class="vm020">',
      '<div class="title">Why can I not receive this plant sooner?</div>',
      '<p>Now is not the most suitable planting time for this plant. It will be delivered direct to your door at just the right time for planting.</p>',
      '<p>At the moment, your plants are being raised by our professional growers so that you will receive the healthiest specimens possible.</p>',
      '<p>Plants sold in traditional outlets (such as garden centres and DIY stores) are selected to look good whilst they are on display. Instead we aim to give you healthy, long-lasting plants for continuous garden performance.</p>',
    '</div>'
  ];

  
  $("#removeTable tbody .dispatch").each(function (i) {
    var $item = $(this);
    if (!vm020.isProductAllowed(i, $item)) {
      return;
    }

    var $banner = $(template.join(""));
    $item
      .append($banner)
      .find(".price")
      .mouseover(function () {
        $banner.fadeIn();
      })
      .mouseout(function () {
        $banner.stop(true, true).fadeOut();
      })
      .css("text-decoration", "underline");
  });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

}