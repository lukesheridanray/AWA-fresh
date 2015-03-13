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
exp.log('Seeds Despatch Date - dev 0.1');

/*
// Condition
// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
exp.condition = $('.unique-selector');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    exp.log('Experiment failed a condition');
    return false;
}*/

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

    var url = window.location.href;

    var d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        day = d.getDay(),
        by = '';

    //1) From 00:00:01 Sunday to 11:00:00 on Friday despatch window = next day i.e. "by tomorrow".
    //2) From 11:00:01 Friday to 00:00:00 Sunday despatch window = Monday i.e. "by Monday".

    if (
            (day === 0 && // On Sunday
                (
                    h > 0 ||
                    m > 0 ||
                    s >= 1
                )
            ) ||
            (day > 0 && day < 5) || // Monday to Thursday
            (day === 5 && // On Friday
                (
                    h < 11 ||
                    h === 11 && m === 0 && s === 0
                )
            )
        ) {
        
        by = ' Within 24 hours';
    } else {
        by = ' by Monday';
    }

    // Product page, listing page
    if (url.indexOf('orderConfirmation') === -1 && $('.despatch').length) {
        $('.despatch').each(function () {
            if ($(this).contents().last()[0].textContent.trim() == 'Within 1 days') {
                $(this).contents().last()[0].textContent = by;
            }
        });
    }

    // Order confirmation page
    if (url.indexOf('orderConfirmation') !== -1) {
        $('.despatch div').each(function () {
            if ($(this).text().trim() === 'Within 1 days') {
                $(this).text(by);
            }
        });
    }

    // Basket
    if ($('.dispatch .price').length) {
        $('.dispatch .price').each(function () {
            var url = $(this).attr('href');
            if (url.indexOf('seeds') !== -1 && url.indexOf('potato') === -1) {
                $(this).text(by);
            }
        });
    }
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
