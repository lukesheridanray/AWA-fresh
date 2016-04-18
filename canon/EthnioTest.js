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
    exp.log('Ethnio Test');



    // The Search page naturally does not expose cart information so we can't run this script there
    // if ($("#LIKEfacetResults").length) {
    //     exp.log('Checkout Signposting failed a condition');
    //     return;
    // }
    
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

        if ($("#ethnio-screener-31580").find("div:contains('Your thoughts are important to us')").length) {

            // Add Canon logo
            $("#ethnio-screener-31580").prepend("<div style='text-align: center; padding-bottom: 10px;'><img width='120' src='//cdn.optimizely.com/img/174847139/647d7d27502a4e28879184043727a4cf.png'></div>");


            $("#ethnio-screener-31580").find("div:contains('Your thoughts are important to us')").attr("style", "font-size: 32px; color: #cb0000; text-align: center;");

            $("#ethnio-screener-31580").find("div:contains('Your thoughts are important to us')").find("div").attr("style", "display: block; font-size: 20px; color: black;");

            $("#ethnio-screener-31580").find("div:contains('powered by ethn')").hide();

            $("#ethnio-screener-31580").attr("style", "z-index: 16777271; line-height: normal; letter-spacing: -0.4px; font-family: 'Open Sans', Helvetica, Arial, sans-serif; padding: 20px 50px 28px; width: 500px; position: absolute; border: 1px solid rgb(209, 209, 209); border-radius: 14px; box-shadow: rgba(0, 0, 0, 0.14902) 0px 4px 10px; top: 100px; left: 50%; margin: 0px 0px 0px -300px; background: rgb(255, 255, 255);")

            $("#ethnio-screener-31580").find("div:contains('We are looking for')").attr("style", "font-size: 16px; color: rgb(0, 0, 0); padding-top: 28px; margin-top: 20px; border-top-width: 1px; border-top-style: solid; border-top-color: #cb0000; text-align: center;");


            function changeContinueButton() {
                $("#ethnio-screener-31580").find("a:contains('Continue')").attr("style", "font-size: 18px; max-width: 74px; margin: 0 auto; overflow: hidden; color: rgb(255, 255, 255); display: block; padding: 5px 15px 7px; text-decoration: none; margin-top: 35px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 3px 0px; background: #007777;");
            }

            changeContinueButton();
            $("#ethnio-screener-31580").find("a:contains('Continue')").hover(function(e) {
                e.preventDefault();
                changeContinueButton();
            });
        }





    };

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

    // Run the experiment
    exp.func.waitFor(function(){ return $("#ethnio-screener-31580").length }, exp.init);

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}