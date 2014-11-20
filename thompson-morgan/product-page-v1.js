function () {
    //
    // Thomson & Morgan - Product page v1
    // Based on CGIT Optimizely Boilerplate - version 0.1.3
    //

    // JSHint flags
    // jshint multistr: true
    // jshint jquery: true

    // Wrap the experiment code in an IIFE, this creates a local scope and allows us to
    // pass in jQuery to use as $. Other globals could be passed in if required.
    var exp = (function($) {

    // Initialise the experiment object
    var exp = {};

    // Log the experiment, useful when multiple experiments are running
    console.log('Thomson & Morgan - Product Page v1 - 1.0');

    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    exp.condition = $('html');

    // Check for a condition and return false if it has not been met
    if(exp.condition && !exp.condition.length) {
        console.log('Experiment failed a condition');
        return false;
    }

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = ' \
        #review-links { \
            font-weight: normal; \
            text-decoration: underline; \
        } \
   ';

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // This function waits till a DOM element is available, then runs a callback function
    exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
            maxAttempts = timeout / intervalTime,
            attempts = 0,
            interval = setInterval(function() {
                if ($(selector).length) {
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

    // This function waits till a function is available, then runs a callback function
    exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
            maxAttempts = timeout / intervalTime,
            attempts = 0,
            interval = setInterval(function() {
                if ($.isFunction(func)) {
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
            
        // append styles to head
        $('head').append('<style type="text/css">'+this.css+'</style>');

        // DOM manipulation...
        // Fetch hardiness
        // TODO: move up properties, add hardiness
        var hardiness = $(".facetValueClass dd").text().split(/\s/m)[0];

        // Get dimensions
        var p_height_and_spread = $("#productCont").text().match(/(?:H|h)eight\s*(?:and|&amp;|&)\s*(?:s|S)pread:\s*([0-9.]+cm\s*\(.*?\))/m);
        var p_height = $("#productCont").text().match(/(?:H|h)eight:\s*([0-9.]+cm\s*\(.*?\))/m);
        var p_spread = $("#productCont").text().match(/(?:S|s)pread:\s*([0-9.]+cm\s*\(.*?\))/m);
        var p_bulbs  = $("#productCont").text().match(/(?:B|b)ulb (S|s)ize:\s*([0-9.]+cm\s*\(.*?\))/m);
        var p_diameter = $("#productCont").text().match(/(?:D|d)iameter:\s*([0-9.]+cm\s*\(.*?\))/m);
        // Dimensions: 22cm x 14cm x 31.5cm
        var p_dimensions = $("#productCont").text().match(/(?:D|d)imensions:\s*((?:[0-9.]+cm\s*(?:\(.*?\))?\s?x?\s?){2,3})/m);
        console.log(p_height_and_spread);
        console.log(p_height);
        console.log(p_spread);
        console.log(p_bulbs);
        console.log(p_diameter);
        console.log(p_dimensions);

        // are there review stars?
        if ($('img[src*="/reviews/"]').length) {

            $.get($("a[href*='readAllReviews=true']").attr('href').trim(), function(data) {
                var no_reviews = $(data).find("ol.reviews > li").length;
                $('img[src*="/reviews/"] + b').html('(<a href="#tab-3" id="review-links">' + no_reviews + ' reviews</a>)');

                $('#review-links').click(function() {
                    showTab(4);
                });
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
}