if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log("Discount Products v1");

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
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
        #AWA-new-prices span {\
            display: block;\
            padding-right: 18px;\
        }\
        #AWA-current-price {\
            font-size: 30px;\
            font-weight: 400;\
            color: #D21F1F;\
        }\
        #AWA-was-price {\
            font-size: 16px;\
        }\
        #AWA-discount-price {\
            font-size: 16px;\
            color: #D21F1F;\
        }\
        @media (min-width: 992px) {\
            #AWA-new-prices span {\
                display: inline-block;\
            }\
        }\
    ';




	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
        // Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');

        // Only run on product pages (in case Audience Targeting is modified)
        if (!$(".product-detail-media").length) {
            exp.log("Not a product page - exiting");
            return;
        }
        
        // Only run on product pages with a discount
        if (!$(".content .badge-4").length) {
            exp.log("Not a discounted product - exiting");
            return;
        }

        // Add commas to numbers
		function numberWithCommas(x) {
		    var parts = x.toString().split(".");
		    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return parts.join(".");
		}


        // Get price differential
        var discount = parseFloat($(".content:not('.mini-basket--content') .badge-4").first().text().match(/\d+/)[0].replace(/,/g, ""));

        var currentPrice = parseFloat($(".content:not('.mini-basket--content') .price-amount").first().text().substring(1).replace(/,/g, ""));
        var wasPrice = currentPrice + discount;

        discount = numberWithCommas(discount.toFixed(2));
		currentPrice = numberWithCommas(currentPrice.toFixed(2));
		wasPrice = numberWithCommas(wasPrice.toFixed(2));

        // Insert new prices
        var newPrices = "<div id='AWA-new-prices'><span id='AWA-current-price'></span><span id='AWA-was-price'></span><span id='AWA-discount-price'></span></div>";
        $(".content:not('.mini-basket--content') .pricing").first().html(newPrices);

        $("#AWA-current-price").html("&pound" + currentPrice);
        $("#AWA-was-price").html("<strike>Was &pound" + wasPrice + "</strike>");
        $("#AWA-discount-price").html("Save &pound" + discount);


	};


    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
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


    exp.waitFor(function() { return $(".primary-navigation--list").length }, exp.init, 10000);


	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
};
var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function () {
            waitForjQuery(time * 2);
        }, time);
    }
};
waitForjQuery(1000);
