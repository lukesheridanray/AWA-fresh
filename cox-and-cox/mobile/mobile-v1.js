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
    	template: 	"<div id='AWA-m-wrapper'>\
		    			<div id='AWA-images'></div>\
		    			<div id='AWA-breadcrumb'></div>\
		    			<div id='AWA-product-title'></div>\
                        <div id='AWA-price'></div>\
                        <div id='AWA-availability'></div>\
                        <div id='AWA-product-section'>\
                        	<div id='AWA-qty'>\
                        		<div id='AWA-minus' class='AWA-qty-input'>&ndash;</div>\
                        		<div id='AWA-qty-middle' class='AWA-qty-input'>QTY: <span id='AWA-qty-num'>1</span></div>\
                        		<div id='AWA-plus' class='AWA-qty-input'>+</div>\
                        	</div>\
                            <a id='AWA-add' href='#'>ADD TO BASKET</a>\
                            <a id='AWA-fav' href='#'><img src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/23c77559d67367f60d08460a3351abad_heart.jpg'>&nbsp;&nbsp;&nbsp;ADD TO FAVOURITES</a>\
                        </div>\
                        <div id='AWA-desc-section'>\
                        	<div id='AWA-buyers-notes'>\
                        		<div class='AWA-desc-section-header AWA-bg-arrow-none'>BUYERS NOTES</div>\
                        		<div id='AWA-buyers-notes-inner' class='AWA-desc-section-inner'></div>\
                        	</div>\
                        	<div id='AWA-size-information'>\
                        		<div class='AWA-desc-section-header'>SIZE & INFORMATION</div>\
                        		<div id='AWA-size-information-inner' class='AWA-desc-section-inner'></div>\
                        	</div>\
                        	<div id='AWA-delivery-returns'>\
                        		<div class='AWA-desc-section-header'>DELIVERY & RETURNS</div>\
                        		<div id='AWA-delivery-returns-inner' class='AWA-desc-section-inner'></div>\
                        	</div>\
                        </div>\
                        <div id='AWA-best-sellers'></div>\
                        <div id='AWA-ymal'>\
                        	<h4 id='AWA-ymal-header'>YOU MAY ALSO LIKE</h4>\
                        	<div id='AWA-ymal-inner'></div>\
                        </div>\
                        <div id='AWA-footer'>\
                        	<div id='AWA-footer-inner'></div>\
                        	<div id='AWA-footer-logos'>\
                        		<img id='AWA-f-logo' src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/b69a8670d57399546cdcb6aa6a19bc0f_logo.jpg'>\
                        		<div id='AWA-copy'>\
                        			&copy; 2016 Cox & Cox. All Rights Reserved.\
                        		</div>\
                        	</div>\
                        </div>\
		    		</div>"
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
    	#AWA-m-wrapper {\
    		width: 100%;\
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
    	.AWA-thumbnails {\
		    position: absolute;\
		    right: 0;\
		    left: 0;\
		    margin-top: -46px;\
		    z-index: 1000000;\
    	}\
    	.AWA-thumbnails li {\
    		display: inline-block;\
    		padding: 0 5px;\
    	}\
    	.AWA-thumbnails li img {\
    		height: 84px;\
    		width: 75px;\
    		border: solid 1px #E4E4E6;\
    	}\
    	#AWA-breadcrumb {\
    		font-size: 15px;\
    		text-align: center;\
    		color: #9EA2A5;\
    		text-transform: uppercase;\
            line-height: 20px;\
            padding: 0 10px;\
    	}\
    	.AWA-breadcrumb-arrow {\
    		vertical-align: middle;\
    	}\
        #AWA-product-title {\
            text-transform: uppercase;\
            font-size: 30px;\
            font-weight: 100;\
            text-align: center;\
            margin-top: 20px;\
            line-height: 40px;\
            padding: 0 10px;\
        }\
        #AWA-price {\
            text-align: center;\
            font-size: 30px;\
            margin-top: 20px;\
        }\
        #AWA-availability, #AWA-availability span {\
            padding: 0 10px !important;\
            text-align: center;\
            margin-top: 20px;\
            color: #9EA2A5 !important;\
            text-transform: uppercase;\
            line-height: 20px;\
            font-size: 15px !important;\
            margin-bottom: 42px;\
        }\
        #AWA-availability span {\
            padding: 0 !important;\
        }\
        #AWA-qty {\
        	border: solid 1px #E4E4E6;\
        	overflow: auto;\
        	width: 90%;\
        	text-align: center;\
        	margin: 0 auto;\
        }\
        .AWA-qty-input {\
        	height: 64px;\
        	font-size: 28px;\
        	line-height: 64px;\
        	color: #576773;\
        }\
        #AWA-qty-middle span {\
        	font-size: 22px !important;\
        	line-height: 64px !important;\
        	color: #576773 !important;\
        }\
        #AWA-minus {\
        	border-right: solid 1px #E4E4E6;\
        	float: left;\
        	width: 14.8%;\
        	cursor: pointer;\
        }\
        #AWA-qty-middle {\
        	width: 69.5%;\
        	float: left;\
        	font-size: 22px;\
        }\
        #AWA-plus {\
        	border-left: solid 1px #E4E4E6;\
        	float: left;\
        	width: 14.8%;\
        	cursor: pointer;\
        }\
        #AWA-add {\
			width: 90%;\
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
        #AWA-fav {\
			width: 90%;\
        	color: #576773;\
			display: block;\
			height: 68px;\
			line-height: 68px;\
			text-align: center;\
			font-size: 20px;\
			text-decoration: none;\
			margin: 18px auto;\
			border: solid 1px #E4E4E6;\
			margin-bottom: 68px;\
        }\
        #AWA-fav img {\
        	vertical-align: middle;\
        }\
        #AWA-desc-section {\
        	background-color: #EFEFF1;\
        	padding: 15px;\
        	padding-bottom: 64px;\
        }\
        .AWA-desc-section-header {\
        	color: #5D6870;\
        	font-size: 16px;\
        	font-weight: bold;\
        	cursor: pointer;\
        	padding: 20px 0;\
			background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/8bd2d8b906c7e0cc086db91a8e8a438c_toggle.jpg);\
			background-size: 13px;\
			background-repeat: no-repeat;\
			background-position: 95%;\
        }\
        .AWA-bg-arrow-none {\
        	background: none;\
        }\
        .AWA-desc-section-inner {\
        	margin-top: 20px;\
        	font-family: serif;\
        	display: none;\
        }\
        .AWA-desc-section-inner p, .AWA-desc-section-inner a, .AWA-desc-section-inner strong {\
        	color: #5D6870;\
        	font-size: 18px;\
        	line-height: 28px;\
        	font-weight: 100;\
        }\
        .AWA-desc-section-inner p {\
        	margin-bottom: 10px;\
        }\
        .AWA-desc-section-inner a {\
        	text-decoration: underline;\
        }\
        .AWA-desc-section-inner strong {\
        	font-weight: bold;\
        }\
        #AWA-delivery-returns-inner table th {\
        	color: #5D6870;\
        	font-size: 18px;\
        	line-height: 28px;\
        	font-weight: 100;\
        	padding-left: 5px;\
        	padding-right: 5px;\
        	background-color: #c3c3c3;\
        }\
        #AWA-delivery-returns-inner table td {\
        	color: #5D6870;\
        	font-size: 18px;\
        	line-height: 28px;\
        	font-weight: 100;\
        	padding-left: 5px;\
        	padding-right: 5px;\
        	border: solid 1px #E4E4E6;\
        }\
        #AWA-buyers-notes {\
        	padding-top: 35px;\
        }\
        #AWA-buyers-notes-inner {\
        	display: block;\
        }\
        #AWA-buyers-notes .AWA-desc-section-header {\
        	padding-top: 0;\
        }\
        #AWA-buyers-notes, #AWA-size-information, #AWA-delivery-returns {\
        	border-bottom: solid 2px #D7D8DA;\
        }\
        #AWA-best-sellers .best_sellers_sidebar {\
        	float: none;\
        	width: 100%;\
        }\
        #AWA-best-sellers .best_sellers_sidebar > div {\
        	border: 0;\
        }\
        #AWA-best-sellers .best_sellers_sidebar > div > h4 {\
        	color: #5D6870;\
        	font-size: 16px;\
        	font-weight: bold;\
        	margin-top: 35px;\
        	margin-bottom: 40px;\
        }\
        .AWA-best-sellers-list {\
		    columns: 2;\
		    -webkit-columns: 2;\
		    -moz-columns: 2;\
        }\
        .AWA-best-sellers-list li {\
        	margin-bottom: 0;\
			-webkit-column-break-inside: avoid;\
			page-break-inside: avoid;\
			break-inside: avoid;\
        }\
        .AWA-best-sellers-list .price-box {\
        	padding-bottom: 40px;\
        }\
        #AWA-best-sellers .best_sellers_sidebar h4 a {\
        	color: #5D6870;\
        	font-size: 16px;\
        	font-weight: bold;\
        }\
        .AWA-best-sellers-list h4 {\
        	margin: 16px 15px 5px;\
        }\
        .AWA-best-sellers-list .regular-price .price, .AWA-best-sellers-list .old-price .price, .AWA-best-sellers-list .special-price .price, .AWA-best-sellers-list .old-price .price-label, .AWA-best-sellers-list .special-price .price-label {\
        	font-size: 16px !important;\
        }\
        #AWA-ymal .product-image img {\
        	width: 95px;\
        	height: 125px;\
        	display: inline-block;\
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
        #AWA-ymal-header {\
		    color: #5D6870;\
		    font-size: 16px;\
		    font-weight: bold;\
		    margin-top: 35px;\
		    margin-bottom: 40px;\
		    text-align: center;\
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
        #AWA-footer {\
        	background-color: #EFEFF1;\
        	overflow: auto;\
        	padding-top: 35px;\
        }\
        .AWA-f-left {\
        	width: 50%;\
        	text-align: center;\
        	float: left;\
        	margin-bottom: 25px;\
        }\
        .AWA-f-right {\
        	width: 50%;\
        	text-align: center;\
        	float: right;\
        	margin-bottom: 25px;\
        }\
        #AWA-footer h3 {\
		    color: #5D6870;\
		    font-size: 16px;\
		    font-weight: bold;\
		    text-transform: uppercase;\
		    margin-bottom: 16px;\
        }\
        #AWA-footer li a {\
        	font-size: 15px;\
        	line-height: 28px;\
        }\
        #AWA-footer-logos {\
        	clear: both;\
        }\
        #AWA-f-logo {\
        	display: block;\
        	padding-left: 10%;\
        }\
        #AWA-copy {\
        	padding-left: 10%;\
        	margin-top: 25px;\
        	font-size: 15px;\
        	font-weight: bold;\
        	padding-bottom: 20px;\
        	color: #5D6870;\
        }\
        #wrapper {\
        	display: none;\
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

		// Append new mobile wrapper
		$("body").prepend(exp.vars.template);

		// Main product image
		$("#AWA-images").append($(".product-img-box"));

		// Format image section
		$(".MagicToolboxContainer").attr('style', 'text-align: center;');
		$("h4:contains('More Views')").hide();

		// Hide MagicZoom 
		$(".MagicZoomBigImageCont.MagicBoxShadow").hide();

		// Mark thumbnails
		$("h4:contains('More Views')").parent().find("ul").addClass("AWA-thumbnails");

		// Get breadcrumb text
		var breadcrumb = $(".breadcrumbs").text();
		breadcrumb = breadcrumb.replace(/\s+/g, " ");
		$("#AWA-breadcrumb").text(breadcrumb);

		// Give breadcrumb div dynamic margin in case multiple thumbnails push down
		var breadcrumbMargin = $(".AWA-thumbnails").height();
		$("#AWA-breadcrumb").attr('style', 'margin-top: ' + breadcrumbMargin + 'px;');
		if (!breadcrumbMargin) {
			$("#AWA-breadcrumb").attr('style', 'margin-top: 40px;');
		}

		// Replace > character with image
		var arrow = "<img class='AWA-breadcrumb-arrow' src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/4dd0221c929f3bdf1ffec2d8d2cf23e8_arrow.jpg'>";
		var original = $("#AWA-breadcrumb").html();
		var withImages = original.split('&gt;').join(arrow);
		$("#AWA-breadcrumb").html(withImages);

		// Hide any promo images
		$(".promo-image").hide();

		// Product title
		var productTitle = $("#product_addtocart_form").find("h2").first().text();
		$("#AWA-product-title").text(productTitle);

        // Product price
        var price = $(".product-collateral span.price").first().text();
        $("#AWA-price").text(price);

        // Availability
        var availability = $(".product-collateral .availability").html();
        $("#AWA-availability").html(availability);
        $("#AWA-availability").find("span").text($("#AWA-availability").find("span").text() + " - ");

        // Puppet control add to cart form with mobile controls
        var quantity = 1;
        $("#qty").val(quantity);

        function changeQty() {
        	$("#AWA-qty-num").text(quantity);
        	$("#qty").val(quantity);
        }

        $("#AWA-plus").click(function() {
        	quantity++;
        	changeQty();
        });

        $("#AWA-minus").click(function() {
        	if (quantity > 1) {
	        	quantity--;
	        	changeQty();
        	}
        });

        $("#AWA-add").click(function(e) {
            e.preventDefault();
            $(".add-to-cart .btn-cart").click();
        });

        $("#AWA-fav").click(function(e) {
            e.preventDefault();
            $(".link-wishlist").click();
        });


        // Populate Buyers Notes
        var buyersNotes = $(".box.product-content").html();
        $("#AWA-buyers-notes-inner").html(buyersNotes);

        // Popualte Size & Information
        var sizeInformation = $(".box.product-sizeinfo").html();
        $("#AWA-size-information-inner").html(sizeInformation);

        // Popualte Delivery & Returns
        var deliveryReturns = $(".box.prod-del-return").html();
        $("#AWA-delivery-returns-inner").html(deliveryReturns);

        // Product toggles
        $(".AWA-desc-section-header").click(function() {
        	$(this).next().slideToggle();
        	$(this).toggleClass("AWA-bg-arrow-none");
        });

        // Move best sellers
        $("#AWA-best-sellers").append($(".best_sellers_sidebar"));
        $("#AWA-best-sellers").find("div").find("h4").first().text("BEST SELLERS");
        $("#AWA-best-sellers").find("ul").first().addClass("AWA-best-sellers-list");
        $(".AWA-best-sellers-list").find("li").find("h4").find("a").each(function() {
        	$(this).text($(this).text().replace(/^NEW\s\b/, ""));
        });

        // Move suggested products
        $("#AWA-ymal-inner").append($(".mini-products-list"));
        $("#cart-sidebar").hide();

        // Footer
        var footer = $("#footer").find(".box:not('last')");
        $("#AWA-footer-inner").append(footer);

        $("#AWA-footer").find(".box").eq(0).addClass("AWA-f-left");
        $("#AWA-footer").find(".box").eq(2).addClass("AWA-f-left");
        $("#AWA-footer").find(".box").eq(1).addClass("AWA-f-right");
        $("#AWA-footer").find(".box").eq(3).addClass("AWA-f-right");

        $("#AWA-footer").find("li:contains('Visit Our Mobile')").attr("style", "visibility: hidden;");
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


    exp.waitFor(function() { return $(".product-list-image").length }, exp.init, 10000);


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
