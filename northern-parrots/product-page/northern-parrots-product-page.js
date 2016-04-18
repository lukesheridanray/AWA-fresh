jQuery('body').addClass('split-test-ON');

/** 
 * Helper functions
 */

function waitForFunction(_func, experiment, timeout, keepAlive) {
var intervalTime = 50;
var timeout = timeout || 20000;
var keepAlive = keepAlive || false;
var maxAttempts = timeout / intervalTime;
var attempts = 0;
 
var interval = setInterval(function() {
    if (jQuery.isFunction(_func)) {
        if (!keepAlive) {
            clearInterval(interval);
        }
        experiment();
    } else if (attempts > maxAttempts) {
        clearInterval(interval);
    }
    attempts ++;
    }, intervalTime);
}

// NP style popup

function splitTest_showPopupA() { 
    var overlayCallback = function(){
        $('#ajaxEditorial').append( jQuery('.new-price-match-content') );
        $('#ajaxEditorial').css({top:($(document).scrollTop() + 200 + 'px'), left:50 +'%', margin: '0 0 0 -' + ($('#ajaxEditorial').width() / 2) + 'px', display:'block'}); 
    }
    showOverlayBoxdesign(overlayCallback);
}

// wait for an elements existence

function wait_for_element(elem, _func, timeout, keepAlive) {
    var intervalTime = 50;
    var timeout = timeout || 40000;
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


// Time countdown

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
    countdown_string = 'Order by 2pm tomorrow for same day shipping';
} else if( hours === 0) {
    countdown_string = 'Order within '+minutes+'min for items to ship today';
} else {
    countdown_string = 'Order within '+hours+'hr'+hours_plural+' '+minutes+'min for items to ship today';
}

/**
 * Set product details as properties of prod_details
 */

var prod_details = prod_details || {};

var str = large_image_file_name,
    result = str.match(/large\/.*?\./);
 var newresult = result[0].slice(6);
 newresult = newresult.slice(0,-1);

prod_details.prod_id = newresult;

if( jQuery('.dropdownselectitlet').length ) {
    prod_details.has_select = true;
} else {
    prod_details.has_select = false;
}

if(jQuery('.prmatch').length) {
    prod_details.p_match_logo = jQuery('.prmatch');
} else {
    prod_details.p_match_logo = false;
}
prod_details.prod_title = jQuery('.productTITLE span').html();
var desc_string = jQuery('.prodDESC_main .description').html().replace('We would recommend a veterinary health check prior to changing your birds diet.','If you are concerned about the health of your bird, please consult a vet for advice before changing your bird\'s diet.', 'gi');
prod_details.desc = desc_string;
prod_details.related_links = jQuery('.relatedLinks ul:first-child').html();
prod_details.more_links_string = '';
jQuery('.prodDESC_tabs li').each(function(){
    var the_tab = jQuery(this).children('a'),
        the_tab_title = the_tab.html(),
        the_tab_href = jQuery(this).children('a').attr('href');
    if( (the_tab_title !== 'Description') && (the_tab_title !== 'Delivery Information') )  {
        if(the_tab_title == 'Details') { the_tab_title = 'Product Details'; }
        if(the_tab_title == 'Video') { the_tab_title = 'Watch Video'; }
        prod_details.more_links_string = prod_details.more_links_string+'<span><a href="'+the_tab_href+';location.hash=\'htdeopl\';location.hash=\'#holder_PRODUCT\';e.preventDefault();">'+the_tab_title+'</a></span>';
    }
});
prod_details.more_info_links = '<p class="split-test-moreinfolinks"><strong>More Information: '+prod_details.more_links_string+'</strong></p>';

prod_details.ship_countdown = countdown_string;
if(document.referrer.indexOf("northernparrots.com") != -1) {
    prod_details.cont_shopping = '<a href="'+document.referrer+'" class="split-test-cont-shopping">&lt;&lt; continue shopping</a>';
} else {
    prod_details.cont_shopping = '';
}
prod_details.large_image = jQuery('#lightboxLink').attr('href');
prod_details.related_moreincat = '<div class="split-test-related-prods more-in-cat"><p class="related-title">'+$("#btab1 > a").html()+'</p>'+$("#holder_CENTRE_tabcontent #btabBox1").html()+'</div>';


/**
 * DOM changes
 */

// populate btabBox 3 if exists otherwise btabBox 2
waitForFunction(ajaxGET, function(){
    if ( jQuery('#btabBox3').length ) {
        ajaxGET('http://www.northernparrots.com/page/ajx_predictions/?pf_id='+prod_details.prod_id,'btabBox3',false);
    } else {
        ajaxGET('http://www.northernparrots.com/page/ajx_predictions/?pf_id='+prod_details.prod_id,'btabBox2',false);
    }
});

jQuery(".leftNAVIGATION,.navtopround,.navbottomround,.prodSHORTdesc > a,.prodSHORTdesc > img,.productTITLE,#crumb").remove();
jQuery("body > div:eq(2) > div:eq(1) > div:eq(0)").prepend("<div class=\"split-test-container\"><div class=\"split-test-hidden\"></div><div class=\"split-test-header\">"+prod_details.prod_title+"</div><div class=\"split-test-product\">"+prod_details.cont_shopping+"<div class=\"split-test-clear\"></div></div><div class=\"split-test-clear\"></div></div>");
jQuery("#prodIMAGES,#prodDETAILS").appendTo(".split-test-product");
jQuery("#prodIMAGES").wrap("<div class='prod-images-wrap'></div>" );
jQuery("#prodIMAGES").append("<div class=\"split-test-more-like\"><ul>"+prod_details.related_links+"</ul></div>");
jQuery(".prodSHORTdesc").after("<p><br />"+prod_details.desc+"<br /><br /></p>"+prod_details.more_info_links+"<br />");

jQuery("#Form1 tbody > tr:eq(0) > td:eq(0)").addClass("split-test-option-select");

jQuery(".wishlist a").appendTo(".prodMessage > ul > li:eq(2)");
jQuery(".prodMessage > ul > li:eq(0)").replaceWith("<li class=\"split-text-delivery-info\"><a href=\"javascript:showPopupA('cs_delivery_summary');\">Delivery info</a></li><li class=\"split-test-ship-timer\"><br />"+prod_details.ship_countdown+"<br />Free delivery for all orders over &pound;49</li>");
if ( prod_details.has_select === true ) {
    jQuery('#Form1 tbody > tr:eq(2) > td:eq(2)').replaceWith(jQuery(".AddBasket"));
} else {
    jQuery('.prodOPTIONS tbody > tr:eq(2) > td:eq(2)').replaceWith(jQuery(".AddBasket"));
}

jQuery(".AddBasket").prepend("<span class=\"split-test-qty\">Qty:</span>");
jQuery(".prodMessage > ul > li:eq(2)").replaceWith("<li class=\"wishlist-link\"></li>");
jQuery(".wishlist a").appendTo(".prodMessage > ul > li:eq(2)");
jQuery("#prodLINKS > ul").remove();

if( prod_details.p_match_logo !== false ) {
    prod_details.p_match_logo.prependTo( jQuery('#prodDETAILS') );
}

// variant changes stock message
function variant_changes() {
    var sp_instock;
    if ( jQuery('.stockInfo').length ){
        if ( jQuery('.stockInfo').html() == 'More than 6&nbsp;') {
            sp_instock = 'In stock, ready to ship';
        } else {
            sp_instock = 'Fewer than 6 in stock,<br />order soon';
        }
        jQuery(".stockInfo").appendTo('.split-test-hidden');
        jQuery(".prodOPTIONS table > tbody:eq(0) > tr:eq(1) > td:eq(0)").replaceWith("<td class=\"label stock-message-label\" colspan=\"3\" valign=\"middle\"><span class=\"stock-message\">"+sp_instock+"</span></td>");
    }
}
variant_changes();
jQuery('#Form1 select').removeAttr('onchange');
jQuery('#Form1 select').on('change',function(){
    changeListingDetails(this.selectedIndex);
    variant_changes();
});

// make sure images in lightbox are large versions
function make_images_large() {
    oldImage = '/images/products/large/'+prod_details.prod_id+'.jpg';
    jQuery("#productImage").attr({"src": jQuery('#lightboxLink').attr('href') });
    jQuery('#prodALTERNATIVES li a').each(function(){
        var new_href_string = jQuery(this).attr('href').replace('/products/medium/','/products/large/', 'gi');
        jQuery(this).attr({'href':new_href_string});
        var new_mo_string = jQuery(this).attr('onmouseover').replace('/products/medium/','/products/large/', 'gi');
        jQuery(this).attr({'onmouseover':new_mo_string});
    });
}
wait_for_element('#prodALTERNATIVES ul', make_images_large);

jQuery(".prodOPTIONS table > tbody:eq(0) > tr:eq(3)").remove();

// wait for and populate waitings widget
function split_test_ratings() {
    var ratings_wrap = jQuery('<div class="split-test-ratings"></div>');
    jQuery(".prodREVIEWSSummary .BVRRRatingNormalImage").appendTo(ratings_wrap);
    jQuery(".prodREVIEWSSummary .BVRRRatingSummaryLinkRead").appendTo(ratings_wrap);
    var new_string = ratings_wrap.html().replace('Read all ','(', 'gi');
    ratings_wrap.html(new_string);
    var new_string_new = ratings_wrap.html().replace('reviews','reviews)', 'gi');
    ratings_wrap.html(new_string_new);
    jQuery("#prodDETAILS").prepend(ratings_wrap);
}
wait_for_element('.BVRRReviewText', split_test_ratings);

// wait for and populate faq widget
function split_test_qa() {
    var qa_wrap = jQuery('<div class="split-test-qa"><span class="qa-link"><a href="http://www.northernparrots.com/harrisons-high-potency-coarse-complete-organic-parrot-food-prod5801a/?test=on#BVQAHeaderID">Q&amp;A</a></span>:</div>');
    jQuery(".prodREVIEWSSummary .BVQASummaryBoxQuestionAndAnswerCount").prependTo(qa_wrap);
    jQuery("#prodDETAILS").prepend(qa_wrap);
}
wait_for_element('.BVQAQuestionHeader', split_test_qa);

jQuery(".prodREVIEWSSummary").css({'display':'none'});


// Once loaded take content of btabBox3 and add to other people bought section
function other_people_prods() {
    prod_details.related_otherpeople = '<div class="split-test-related-prods other-people-bought"><p class="related-title">Other people also bought:</p>'+$("#holder_CENTRE_tabcontent #btabBox3").html()+'</div>';
    jQuery('#holder_PRODUCT').after(prod_details.related_otherpeople);
    jQuery("#holder_CENTRE_tabbedarea").remove();
    jQuery('#holder_PRODUCT').after(prod_details.related_moreincat);
    jQuery('.split-test-related-prods.other-people-bought .quickLooklink a').each(function(){
        var self = jQuery(this);
        var href = self.attr('href');
        self.attr({'href':'#'});
        self.attr({'onclick':href+';return false;'});
    });
}
wait_for_element('#btabBox3 #productDataHeader', other_people_prods);

// remove unneccessary related links
jQuery('.relatedLinks').remove();

$(".prodOPTIONS tbody > tr:eq(3) > td:eq(2)").remove();
$(".prodOPTIONS tbody > tr:eq(3) > td:eq(1)").attr('colspan','2');

jQuery('.split-test-hidden').append("<div class=\"new-price-match-content\">\n    <div class=\"ajaxArticleHEADER\"><div style=\"float:right\"><a href=\"javascript:hidePopup();\"><img src=\"/images/core/close.gif\" alt=\"x\" /></a>  </div>BEST PRICE PROMISE</div>\n    <div class=\"ajaxArticleTEXT\">\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 522px; height: 139px;\">\n    <tbody>\n        <tr>\n            <td>\n                We guarantee that this product is cheaper than on any other website. If this is found not to be the case - even after your purchase - we'll refund the difference, plus an extra 10%.<br /><br />\n            \n<h3 style=\"text-align: justify;\">\n    <strong>How do I claim?</strong></h3><td>\n                <img alt=\"\" src=\"/images/banners/best_price_promise_large.gif\" style=\"width: 194px; height: 135px;\" /></td>\n        </tr>\n    </tbody>\n</table>\n<p style=\"text-align: justify;\">\n    Place your order as normal. If you become aware of a cheaper price on a different website within 7 days of receiving it, contact us for a refund.<br />\n    Just email <a href=\"mailto:info@northernparrots.com\">info@northernparrots.com</a> with the following details</p>\n<ul>\n    <li style=\"text-align: justify;\">\n        The order number and product code(s) from your invoice</li>\n    <li style=\"text-align: justify;\">\n        The website where you&#39;ve seen the product - please include a link to the exact page</li>\n    <li style=\"text-align: justify;\">\n        The price you&#39;ve seen, including delivery</li>\n</ul>\n<p style=\"text-align: justify;\">\n    Once we&#39;ve verified it&nbsp;we&#39;ll issue a refund, by the same method you paid, within 7 days. It&#39;s that simple!</p>\n<h3 style=\"text-align: justify;\">\n    <br />\n    <strong>Example</strong></h3>\n<p style=\"text-align: justify;\">\n    Our total price is &pound;49.99<br />\n    You&#39;ve seen the same product at &pound;44.99 in total.<br />\n    We&#39;ll refund the difference of &pound;5 plus an extra 10% making a total refund of &pound;5.50.</p>\n<h3 style=\"text-align: justify;\">\n    <br />\n    <strong>The Small Print</strong></h3>\n<ul>\n    <li style=\"text-align: justify;\">\n        Email claims must be received within 7 days starting the date of delivery</li>\n    <li style=\"text-align: justify;\">\n        The other product must be identical (i.e. same model / size / colour as well as new and undamaged) and in stock for delivery within 48 hours at a UK based website.</li>\n    <li style=\"text-align: justify;\">\n        Comparison will be based on the total standard selling price including the delivery cost and excluding temporary promotions.</li>\n    <li style=\"text-align: justify;\">\n        Private sellers, price comparison, marketplace and auction sites are excluded.</li>\n    <li style=\"text-align: justify;\">\n        Best Price Guarantee is for personal use only and cannot be used in conjunction with other promotions. We reserve the right to limit or exclude refunds in case of misuse.</li>\n</ul>\n</div>\n\n</div>");

jQuery('.prmatch a,.pricematch a').attr('href','#');
jQuery('.prmatch a,.pricematch a').on('click',function(){
    function prmatch_callback() {
        jQuery('#ajaxEditorial').html( "<div class=\"ajaxArticleHEADER\"><div style=\"float:right\"><a href=\"javascript:hidePopup();\"><img src=\"/images/core/close.gif\" alt=\"x\" /></a>  </div>BEST PRICE PROMISE</div>\n    <div class=\"ajaxArticleTEXT\">\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 522px; height: 139px;\">\n    <tbody>\n        <tr>\n            <td>\n                We guarantee that this product is cheaper than on any other website. If this is found not to be the case - even after your purchase - we'll refund the difference, plus an extra 10%.<br /><br />\n            \n<h3 style=\"text-align: justify;\">\n    <strong>How do I claim?</strong></h3><td>\n                <img alt=\"\" src=\"/images/banners/best_price_promise_large.gif\" style=\"width: 194px; height: 135px;\" /></td>\n        </tr>\n    </tbody>\n</table>\n<p style=\"text-align: justify;\">\n    Place your order as normal. If you become aware of a cheaper price on a different website within 7 days of receiving it, contact us for a refund.<br />\n    Just email <a href=\"mailto:info@northernparrots.com\">info@northernparrots.com</a> with the following details</p>\n<ul>\n    <li style=\"text-align: justify;\">\n        The order number and product code(s) from your invoice</li>\n    <li style=\"text-align: justify;\">\n        The website where you&#39;ve seen the product - please include a link to the exact page</li>\n    <li style=\"text-align: justify;\">\n        The price you&#39;ve seen, including delivery</li>\n</ul>\n<p style=\"text-align: justify;\">\n    Once we&#39;ve verified it&nbsp;we&#39;ll issue a refund, by the same method you paid, within 7 days. It&#39;s that simple!</p>\n<h3 style=\"text-align: justify;\">\n    <br />\n    <strong>Example</strong></h3>\n<p style=\"text-align: justify;\">\n    Our total price is &pound;49.99<br />\n    You&#39;ve seen the same product at &pound;44.99 in total.<br />\n    We&#39;ll refund the difference of &pound;5 plus an extra 10% making a total refund of &pound;5.50.</p>\n<h3 style=\"text-align: justify;\">\n    <br />\n    <strong>The Small Print</strong></h3>\n<ul>\n    <li style=\"text-align: justify;\">\n        Email claims must be received within 7 days starting the date of delivery</li>\n    <li style=\"text-align: justify;\">\n        The other product must be identical (i.e. same model / size / colour as well as new and undamaged) and in stock for delivery within 48 hours at a UK based website.</li>\n    <li style=\"text-align: justify;\">\n        Comparison will be based on the total standard selling price including the delivery cost and excluding temporary promotions.</li>\n    <li style=\"text-align: justify;\">\n        Private sellers, price comparison, marketplace and auction sites are excluded.</li>\n    <li style=\"text-align: justify;\">\n        Best Price Guarantee is for personal use only and cannot be used in conjunction with other promotions. We reserve the right to limit or exclude refunds in case of misuse.</li>\n</ul>\n</div>" );
        var sp_top = jQuery(document).scrollTop();
        sp_top = sp_top + 200;
        jQuery('#ajaxEditorial').css({top:sp_top + 'px', left:'50%', margin: '0 0 0 -300px', display:'block'});
    }
    showOverlayBoxdesign(prmatch_callback);
    return false;
});
/*
function fix_quicklooks() {

}
wait_for_element('#prodALTERNATIVES ul', fix_quicklooks);
*/
// __ Dev

console.log('v2.29');