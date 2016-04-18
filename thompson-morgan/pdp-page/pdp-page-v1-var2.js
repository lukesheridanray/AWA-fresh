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
    exp.log('PDP Page - v1 - var2');

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
    exp.vars = {};

    // Styles
    // String containing the CSS for the experiment
    exp.css = "\
        .productPromo li.vm023-what-this {\
            display: none;\
        }\
        .productPromo li.size {\
            position: relative;\
            padding-left: 20px;\
        }\
        .productPromo li.size:before {\
            position: absolute;\
            width: 10px;\
            height: 10px;\
            top: 5px;\
            left: 0;\
            border: solid 1px #333;\
            border-radius: 50%;\
            content:\"\";\
        }\
        .productPromo li.size::after {\
          background: #333 none repeat scroll 0 0;\
          border-radius: 50%;\
          content: \"\";\
          height: 6px;\
          left: 3px;\
          position: absolute;\
          top: 8px;\
          width: 6px;\
          display: none;\
        }\
        .stockInfo.active .productPromo li.size::after {\
            display: block;\
        }\
        .clearFloat li.prodPageDes,\
        .wishListLinkContainer {\
            display: none;\
        }\
         .basket.prodPageBask,\
        .quantity {\
            visibility: hidden;\
            height: 0px;\
            width: 0;\
        }\
        .productInfoLeft .productPromo ,\
        .productInfoLeft .clearFloat {\
            display: inline-block;\
            vertical-align: top;\
        }\
        .stockInfo strike {\
          display: inline-block;\
          margin-right: 10px;\
        }\
        .stockInfo li.price {\
          margin-top: 0;\
          width: auto;\
        }\
        .stockInfo {\
          background: #f9f9f9 none repeat scroll 0 0;\
          border-bottom: medium none;\
          margin: 0;\
          padding: 0 10px 10px 0;\
        }\
        .stockInfo.vm-023-stockInfo-margin {\
            padding-top: 10px;\
            border-radius: 5px 5px 0 0;\
            margin-top: 20px;\
        }\
        .add-to-cart {\
          background: #f9f9f9 none repeat scroll 0 0;\
          border-radius: 0 0 5px 5px;\
          margin-bottom: 30px;\
          padding: 20px 20px 0 20px;\
          text-align: right;\
          padding-bottom: 20px;\
        }\
        .add-to-cart p {\
          float: right;\
          margin: 10px 16px 0 0;\
          min-width: 210px;\
          text-align: center;\
        }\
        #additional-links {\
          margin: 0;\
          text-align: right;\
        }\
        .stockInfo li.quantity,\
        .stockInfo li.prodPageBask {\
          width: 0;\
          padding: 0 !important;\
        }\
        .add-to-cart > label {\
          display: inline-block;\
          vertical-align: middle;\
        }\
        .add-to-cart > label {\
          display: inline-block;\
          vertical-align: middle;\
          margin-right: 15px;\
        }\
        .add-to-cart .number-product {\
          display: inline-block;\
          width: 15px;\
          text-align: center;\
          font-size: 14px;\
          margin-right: 40px;\
        }\
        .add-to-cart button {\
          background: #cf2a28 none repeat scroll 0 0;\
          border: 1px solid #757575;\
          color: #fff;\
          height: 47px;\
          min-width: 210px;\
          font-size: 16px;\
          font-weight: bold;\
          margin-right: 16px;\
          cursor: pointer;\
          transition: 0.5s all;\
        }\
        .add-to-cart button:hover {\
            opacity: 0.8;\
        }\
        .clear {\
            clear: both;\
        }\
        .stockInfo .productPromo {\
            height: auto;\
        }\
        .stockInfo li.promo {\
          margin-bottom: 10px;\
        }";

    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {

        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');


        $("#additional-links").after('<div class="add-to-cart"<form><label>Qty</label><span><input class="number-product" type="text" value="1" /></span><button class="submit-basket">Add to basket </button></form>   <p class="desatch-date"></p><div class="clear"></div></div>');

        /* active item price max */
        $.fn.ignore = function(sel) {
            return this.clone().find(sel || ">*").remove().end();
        };
        var m = $(".productInfoLeft .price").size();
        m = parseInt(m);
        if (m == 1) {
            $(".stockInfo").eq(0).addClass("active");

        } else if (m < 3) {
            var num1 = $(".stockInfo:eq(" + i + ") .price").ignore("strike").text().trim();
            var k1 = num1.substr(1);

            var num2 = $(".stockInfo:eq(" + i + ") .price").ignore("strike").text().trim();
            var k2 = num2.substr(1);
            if (k1 > k2) {
                $(".stockInfo").eq(0).addClass("active");
            } else {
                $(".stockInfo").eq(1).addClass("active");
            }


        } else if (m % 2 == 1 && m > 2) {

            var j = Math.floor(m / 2);
            $(".stockInfo").eq(j).addClass("active");
        } else if (m % 2 == 0 && m > 2) {

            var max = 0;
            var n = m - 1;
            var j = 0;
            for (var i = 1; i < n; i++) {
                i = parseInt(i);
                var num = $(".stockInfo:eq(" + i + ") .price").ignore("strike").text().trim();
                var k = num.substr(1);
                k = parseFloat(k);
                if (k > max) {
                    max = k;
                    j = i;
                }

            }
            j = parseInt(j);
            $('.stockInfo').eq(j).addClass("active");

        }

        var desptch = $(".stockInfo.active .despatch").html();
        $(".desatch-date").html(desptch);

        $(".submit-basket").click(function() {
            var n = $(".number-product").val();
            $(".stockInfo.active .input-quantity").val(n);
            $(".stockInfo.active .addToBasket").click();
        });
        $(".productInfoLeft .size").click(function() {
            $(".stockInfo").removeClass("active");
            $(this).parents(".stockInfo").addClass("active");
             var desptch1 =  $(this).parents(".stockInfo").find(".despatch").html();
            $(".desatch-date").html(desptch1);
        });
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);
//}



