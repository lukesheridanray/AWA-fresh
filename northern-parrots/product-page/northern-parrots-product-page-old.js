/**
 * Helper functions
 */

// wait for an elements existence

function wait_for_element(elem, _func, timeout, keepAlive) {
    var intervalTime = 50;
    var timeout = timeout || 30000;
    var keepAlive = keepAlive || false;
    var maxAttempts = timeout / intervalTime;
    var attempts = 0;

    var interval = setInterval(function() {
        if (jQuery(elem).length) {
            if (!keepAlive) {
                clearInterval(interval);
            }
            _func();
        } else  if (attempts > maxAttempts) {
            clearInterval(interval);
        }
        attempts ++;
    }, intervalTime);
}

var countdown_string;

    // target date
    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"
    ],
    today = new Date(),
    this_day = today.getDate(),
    this_month = today.getMonth(),
    this_year = today.getFullYear(),
    target_date = new Date(monthNames[this_month]+""+this_day+", "+this_year+", 14:00").getTime();
    
    // vars for time calculations
    var days, hours, minutes, seconds,
        current_date = today.getTime(),
        seconds_left = (target_date - current_date) / 1000;
 
    // time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // output formatting
    var hours_plural = (hours === 1) ? '' : 's';
    if( hours < 0 || minutes < 0 ) {
        countdown_string = 'Order by 2pm tomorrow for same day shipping<br />';
    } else if( hours === 0) {
        countdown_string = 'Order within '+minutes+'min for items to ship today';
    }else {
        countdown_string = 'Order within '+hours+'hr'+hours_plural+' '+minutes+'min for items to ship today';
    }

/**
 * Set product details as properties of prod_details
 */

var prod_details = prod_details || {};

prod_details.prod_title = jQuery('.productTITLE span').html();
prod_details.desc = jQuery('.prodDESC_main .description').html();
prod_details.related_links = jQuery('.relatedLinks ul:first-child').html();
prod_details.more_links_string = '';
jQuery('.prodDESC_tabs li').each(function(){
    var the_tab = jQuery(this).children('a'),
        the_tab_title = the_tab.html(),
        the_tab_href = jQuery(this).children('a').attr('href');
    if( (the_tab_title !== 'Description') && (the_tab_title !== 'Delivery Information') )  {
        if(the_tab_title == 'Details') { the_tab_title = 'Product Details'; };
        if(the_tab_title == 'Video') { the_tab_title = 'Watch Video'; };
        prod_details.more_links_string = prod_details.more_links_string+'<span><a href="'+the_tab_href+';location.hash="#holder_PRODUCT"">'+the_tab_title+'</a></span>';
    }
});
prod_details.more_info_links = '<p class="split-test-moreinfolinks"><strong>More Information: '+prod_details.more_links_string+'</strong></p>';
prod_details.in_stock = jQuery('#variantListingStock').html().replace(/[^0-9]/g,'');
prod_details.ship_countdown = countdown_string;
if(document.referrer.indexOf("optimizely.com") != -1) {
    prod_details.cont_shopping = '<a href="'+document.referrer+'" class="split-test-cont-shopping">&lt;&lt; continue shopping</a>';
} else {
    prod_details.cont_shopping = '';
}
prod_details.large_image = jQuery('#lightboxLink').attr('href');
prod_details.related_otherpeople = '<div class="split-test-related-prods other-people-bought"><p class="related-title">Other people also bought:</p>'+$("#holder_CENTRE_tabcontent #btabBox1").html()+'</div>';
prod_details.related_moreincat = '<div class="split-test-related-prods more-in-cat"><p class="related-title">'+$("#btab1 > a").html()+'</p>'+$("#holder_CENTRE_tabcontent #btabBox3").html()+'</div>';



/**
 * DOM changes
 */

jQuery("#headerticker,.leftNAVIGATION,.navtopround,.navbottomround,.prodSHORTdesc > a,.prodSHORTdesc > img,.productTITLE,#crumb").remove();
jQuery("body > div:eq(2) > div:eq(1) > div:eq(0)").prepend("<div class=\"split-test-container\"><div class=\"split-test-header\">"+prod_details.prod_title+"</div><div class=\"split-test-product\">"+prod_details.cont_shopping+"</div></div>");
jQuery("#prodIMAGES,#prodDETAILS").appendTo(".split-test-product");
jQuery("#prodIMAGES").wrap("<div class='prod-images-wrap'></div>" );
jQuery("#holder_NAVIGATION").before("<div class=\"split-test-more-like\"><ul>"+prod_details.related_links+"</ul></div>");
jQuery(".prodSHORTdesc").after("<p><br />"+prod_details.desc+"<br /><br /></p>"+prod_details.more_info_links+"<br />");
jQuery("#Form1 > table > tbody:eq(0) > tr:eq(0) > td:eq(0)").addClass("split-test-option-select");
jQuery(".wishlist a").appendTo(".prodMessage > ul > li:eq(2)");
jQuery(".prodMessage > ul > li:eq(0)").replaceWith("<li class=\"split-text-delivery-info\"><a href=\"javascript:showPopupA('cs_delivery_summary');\">Delivery info</a></li><li class=\"split-test-ship-timer\">"+prod_details.ship_countdown+"<br />Free delivery for all orders over &pound;49</li>");
if(parseInt(prod_details.in_stock) === 6) {
    jQuery("#variantListingStock").remove();
    jQuery("#Form1 > table > tbody:eq(0) > tr:eq(1) > td:eq(0)").replaceWith("<td class=\"label\" colspan=\"2\" valign=\"middle\"><span class=\"stock-message\">In stock, ready to ship</span></td>");
}
//jQuery('#Form1 #Table2').replaceWith(jQuery(".AddBasket"));
jQuery('#Form1 tbody > tr:eq(2) > td:eq(2)').replaceWith(jQuery(".AddBasket"));
jQuery(".AddBasket").prepend("<span class=\"split-test-qty\">Qty:</span>");
jQuery(".prodMessage > ul > li:eq(2)").replaceWith("<li class=\"wishlist-link\"></li>");
jQuery(".wishlist a").appendTo(".prodMessage > ul > li:eq(2)");
jQuery("#prodLINKS > ul").remove();
jQuery("#productImage").attr({"src":prod_details.large_image});
jQuery("#Form1 > table > tbody:eq(0) > tr:eq(3)").remove();
//jQuery("#Form1 tbody > tr:eq(3) > td:eq(0)").replaceWith("<td class=\"label\" valign=\"middle\"></td>");

function split_test_ratings() {
    var ratings_wrap = jQuery('<div class="split-test-ratings"></div>');
    jQuery(".prodREVIEWSSummary .BVRRRatingNormalImage").appendTo(ratings_wrap);
    jQuery(".prodREVIEWSSummary .BVRRRatingSummaryLinkRead").appendTo(ratings_wrap);
    var new_string = ratings_wrap.html().replace('Read all ','(', 'gi');
    ratings_wrap.html(new_string);
    var new_string = ratings_wrap.html().replace('reviews','reviews)', 'gi');
    ratings_wrap.html(new_string);
    jQuery("#prodDETAILS").prepend(ratings_wrap);
}
wait_for_element('.BVRRCount', split_test_ratings);

function split_test_qa() {
    var qa_wrap = jQuery('<div class="split-test-qa"><a href="#BVQAWidgetID">Q&amp;A</a>:&nbsp;&nbsp;&nbsp;</div>');
    jQuery(".prodREVIEWSSummary .BVQASummaryBoxQuestionAndAnswerCount").appendTo(qa_wrap);
    jQuery("#prodDETAILS").prepend(qa_wrap);
}
wait_for_element('.BVQACount', split_test_qa);
jQuery(".prodREVIEWSSummary").css({'display':'none'});

jQuery('#holder_PRODUCT').after(prod_details.related_otherpeople);
jQuery('#holder_PRODUCT').after(prod_details.related_moreincat);
jQuery("#holder_CENTRE_tabbedarea").remove();



// __ Dev

console.log('v15');

// Get GMT time from a trusted source (castlegateit.co.uk)
/*function getTime(zone, success) {
    var url = 'http://www.castlegateit.co.uk/get-time.php?tz=' + zone,
        ud = 'json' + (+new Date());
    window[ud]= function(o){
        success && success(new Date(o.datetime));
    };
    document.getElementsByTagName('head')[0].appendChild((function(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = url + '&amp;callback=' + ud;
        return s;
    })());
};*/