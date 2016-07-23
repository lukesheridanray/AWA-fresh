/* CUSTOM CODE */
//* NOTE - Add href to Umara Z-Trail More Information Link
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
    exp.log('Mobile - v1');

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
        #AWA-m-wrapper {\
            width: 100%;\
        }\
      .cart #shopping-cart-table .first {\
        width: 0px;\
        padding: 0px;\
        padding-top: 32px;\
        padding-right: 17px;\
      }\
        body {\
            background: white;\
            min-width: 0px;\
        }\
        #AWA-images {\
            text-align: center;\
        }\
        .MagicZoomPlus {\
            border: solid 1px #E4E4E6;\
            line-height: 0;\
        }\
        #AWA-qty {\
            border: solid 1px #E4E4E6;\
          width: 100%;\
            overflow: auto;\
            text-align: center;\
            margin: 0 auto;\
        }\
        .AWA-qty{\
            border: solid 1px #E4E4E6;\
            width: 100%;\
            overflow: auto;\
            text-align: center;\
            margin: 0 auto;\
            max-width: 300px; \
            float: left;\
        }\
        .AWA-qty-input {\
            height: 64px;\
            font-size: 24px;\
            line-height: 64px;\
            color: #576773;\
            box-sizing: border-box;\
        }\
        .AWA-qty-middle span {\
            font-size: 22px !important;\
            line-height: 64px !important;\
            color: #576773 !important;\
        }\
        .AWA-minus {\
            border-right: solid 1px #E4E4E6;\
            float: left;\
            width: 33%;\
            cursor: pointer;\
        }\
        .AWA-qty-middle {\
            width: 33%;\
            float: left;\
            font-size: 22px;\
        }\
        .AWA-plus {\
            border-left: solid 1px #E4E4E6;\
            float: left;\
            width: 33%;\
            cursor: pointer;\
        }\
        #block-related {\
            width: 100%;\
            columns: 2;\
            -webkit-columns: 2;\
            -moz-columns: 2;\
            text-align: center;\
            padding: 0;\
        }\
        #block-related li {\
            margin-bottom: 0;\
            -webkit-column-break-inside: avoid;\
            page-break-inside: avoid;\
            break-inside: avoid;\
        }\
        #block-related .product-image {\
            width: auto;\
            height: auto;\
            margin-bottom: 20px;\
            display: inline-block;\
        }\
        #block-related .product-name a {\
            color: #5D6870;\
            font-size: 16px;\
            font-weight: bold;\
        }\
        #block-related .regular-price .price, #block-related .old-price .price, #block-related .special-price .price, #block-related .special-price .price-label, #block-related .old-price .price-label, #block-related .price-box .price, #block-related .minimal-price .price-label, #block-related .special-price, #block-related .old-price {\
            font-size: 16px !important;\
            float: none;\
        }\
        #block-related .price-box {\
            padding-bottom: 40px;\
        }\
        #block-related .product-name {\
            margin-bottom: 8px;\
        }\
        #wrapper {\
            display: none;\
        }\
        .cart .data-table .button {\
            width: 100%;\
                background: #8699B7;\
                display: block;\
                height: 68px;\
                color: white;\
                line-height: 68px;\
                text-align: center;\
                font-size: 20px;\
                text-decoration: none;\
                margin: 18px auto;\
            }\
        #AWA-m-wrapper {\
          width: 100%;\
            }\
        body {\
          background: white;\
          min-width: 0px;\
        }\
    @media only screen and (max-width: 330px) {\
  #AWA-qty .AWA-qty {\
    border: solid 1px #E4E4E6;\
    overflow: auto;\
    text-align: center;\
    margin: 0 auto;\
    display: flex;\
  }\
}\
\
  .cart .data-table .btn-remove2 {\
      width: 25px;\
      height: 25px;\
      float: right;\
      margin-left: 1em;\
      padding: 0;\
  }';


    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
  exp.init = function() {
        // Append style to head
        $('head').append('<style type="text/css">'+exp.css+'</style>');




        // Hide any promo images
        $(".promo-image").hide();


        // Product price
        var price = $(".product-collateral span.price").first().text();
        $("#AWA-price").text(price);

        // Availability
        var availability = $(".product-collateral .availability").html();
        $("#AWA-availability").html(availability);
        $("#AWA-availability").find("span").text($("#AWA-availability").find("span").text() + " - ");


          //Change color and size of the origional button for updated basket.
          var updateBtn = '#shopping-cart-table > tfoot > tr > td > button.button.form-button-alt > span';
          $(updateBtn).css("color",  "#fff");
          $(updateBtn).css("font-size",  "20px");
          $('#shopping-cart-table > tbody > tr > td.first > a > img').css("height", "100px")
          $('#shopping-cart-table > tbody > tr > td.first > a > img').css("width", "83px")

          //Hide input box for cart.
          $('#shopping-cart-table > tbody > tr > td:nth-child(2) > div > input').css("display", "none");

          //make the button fit within div.
          $('#shopping-cart-table > tbody > tr > td:nth-child(2) > div > button').attr("style", "none");
          //move continue shopping button to bottom of page.
          // $("#page > div.cart > div.cart-collaterals > div").after($('#shopping-cart-table > tfoot > tr > td'));
          $('#shopping-cart-table > tfoot > tr > td > button.button.btn-continue').hide();

          // Move the remove item to rop right of page.
          $("#shopping-cart-table > tbody > tr > td:nth-child(2)").each(function(i, elem){
            var $this = $(this),
                $title = $this.find('> h2'),
                $remove_button = $this.find('> a');

                $title.prepend($remove_button);
                $remove_button.text('');
          });

          //Hide when the multiple x appear.
          // jQuery('#shopping-cart-table > tbody > tr:nth-child(1) > td:nth-child(2) > h2 > a:nth-child(3)').hide();


        // Puppet control add to cart form with mobile controls

      //   function setValue(){
      //
      //   myVariable= document.input["qty"].value
      //
      //   alert("myVariable = "+myVariable)
      //


        // Custom quantity dropdowns
        $("#shopping-cart-table > tbody > tr > td:nth-child(2) > input").each(function(i, elem){
            var $existing_qty_input = $(this);
            var $awa_qty_container = $("\
                    <div class='AWA-m-wrapper'>\
                        <div class='AWA-product-section'>\
                            <div class='AWA-qty'>\
                                <div class='AWA-minus AWA-qty-input' type='submit'>&ndash;</div>\
                                <div class='AWA-qty-middle AWA-qty-input'><span class='AWA-qty-num'></span></div>\
                                <div class='AWA-plus AWA-qty-input' type='submit'>+</div>\
                            </div>\
                        </div>\
                    </div>");

            var $awa_minus_button = $awa_qty_container.find('.AWA-minus'),
                $awa_qty_num      = $awa_qty_container.find('.AWA-qty-num'),
                $awa_plus_button  = $awa_qty_container.find('.AWA-plus');


            // Pre-populate with existing qty
            $awa_qty_num.text($existing_qty_input.val());

            // Attach event handlers to the custom quantity box we just created. Because we're defining the
            // event handlers here, they will only update the $existing_qty_input as it's defined right now.
            // So the $awa_plus_button that was just added will only update the value of the quantity input it
            // is being added for.

            $awa_plus_button.on('click', function(){
                var new_qty = parseInt($existing_qty_input.val(), 10) + 1;

                $existing_qty_input.val(new_qty);
                $awa_qty_num.text(new_qty);
            });

            $awa_minus_button.on('click', function(){
                var new_qty = parseInt($existing_qty_input.val(), 10) - 1;

                // Don't let quantity drop below 0
                if (new_qty < 0) {
                    new_qty = 0;
                }

                $existing_qty_input.val(new_qty);
                $awa_qty_num.text(new_qty);
            });

            $existing_qty_input.after($awa_qty_container);
            $existing_qty_input.hide();
        });

        // Update quantities in the background
        var update_cart_timeout;

        function update_cart_in_bg() {
            // Debounce this for user happiness: Wait .75s after last quantity
            // change before updating the page.
            clearTimeout(update_cart_timeout);

            var $form = jQuery('button.form-button-alt').parents('form');

            update_cart_timeout = setTimeout(function(){
                $form.submit();
            }, 750);
        }

        $('.AWA-plus,.AWA-minus').on('click', update_cart_in_bg);

        // Hide "Update cart" button
        $('button.form-button-alt').hide();
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


    exp.waitFor(function() { return $(".cart").length }, exp.init, 10000);


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
