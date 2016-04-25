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
    var exp = {
    };

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function (str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('PDP Page - v1 - var1');

    /*
    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    exp.condition = $('.unique-selector');
    */
    // exp.condition = $("#268917436");

    // // Check for a condition and return false if it has not been met
    // if (exp.condition && !exp.condition.length) {
    //     exp.log('PLP Condensed failed a condition');
    // }
    
    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
        circle: "<div id='AWA-circle'>\
                    <div id='AWA-circle-inner'>\
                        Save<br>up to<br><span id='AWA-circle-savings-amount'>0</span>%\
                    </div>\
                </div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = "\
        .t011 {\
            position: relative;\
        }\
        #AWA-circle {\
            width: 90px;\
            height: 90px;\
            border-radius: 50%;\
            background-color: red;\
            position: absolute;\
            z-index: 2;\
            color: white;\
            top: 5px;\
            right: 5px;\
        }\
        #AWA-circle-inner {\
            text-align: center;\
            padding-top: 15px;\
            font-size: 17px;\
            font-weight: bold;\
            line-height: 20px;\
        }\
        #AWA-circle-savings-amount {\
            line-height: 25px;\
        }\
    ";

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {
        waitFor: function(condition, callback, timeout, keepAlive) {
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
        }
    };

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');

        // Ignore function
        $.fn.ignore = function(sel) {
            return this.clone().find(sel || ">*").remove().end();
        };

        // Enter all discounted products into an array and calculate their discount
        var discounts = [];
        $(".stockInfo").find(".price").each(function() {
            var self = $(this);

            // Exit loop if there's no markdown price
            if (self.find("strike").text() == "") {
                return;
            }

            var product = {
                newPrice: parseFloat(self.ignore("strike").text().trim().substr(1)),
                oldPrice: parseFloat(self.find("strike").text().trim().substr(1)),
            };

            product.discount = product.oldPrice - product.newPrice;
            product.savingsPercentage = (product.discount / product.oldPrice) * 100;
            discounts.push(product.savingsPercentage);
        });

        // If there is a largest discount add the red circle
        if (discounts.length) {
            // Get largest discount number
            var largestDiscount = Math.round(Math.max.apply(Math, discounts));

            // Add circle with text
            $(".t011").prepend(exp.vars.circle);
            $("#AWA-circle-savings-amount").text(largestDiscount);
        }




    };

    // Run the experiment
    exp.func.waitFor(function() { return $(".t011").length }, exp.init);

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}



