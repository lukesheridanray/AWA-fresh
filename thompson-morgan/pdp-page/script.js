(function($) {
    'use strict';

    $(function() {
        $('head').append('<link rel="stylesheet" href="http://localhost/awa/style2.css" type="text/css" />');
        jQuery("#additional-links").after('<div class="add-to-cart"<form><label>Qty</label><span><input class="number-product" type="text" value="1" /></span><button class="submit-basket">Add to basket </button></form>	<p class="desatch-date"></p><div class="clear"></div></div>');

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

    }); // end document ready


})(jQuery) // end JQuery namespace
