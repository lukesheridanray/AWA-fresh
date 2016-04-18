// segment the visitor
window['optimizely'].push(['addToSegment', 'cox_and_cox_seen_product_page', 'true']);

function ProductPageExperiment() {

    // Log version for reference
    console.log('ProductPageExperiment - 1.5');

    // If we are not on a product page return false
    if( jQuery('.catalog-product-view').length === 0 ) {
        return false;
    }

    // Add days helper function
    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    // Function to work out the potential delivery date
    function get_delivery_date() {
        var monthNames = [
            "January", "February", "March", "April", "May", "June", "July", 
            "August", "September", "October", "November", "December"
        ],
        today = new Date(),
        this_day = today.getDate(),
        this_day_of_week = today.getUTCDay(),
        this_month = today.getMonth(),
        this_year = today.getFullYear(),
        target_date = new Date(monthNames[this_month]+""+this_day+", "+this_year+", 14:00").getTime();
        var days, hours, minutes, del_date, post_date,
            current_date = today.getTime(),
            seconds_left = (target_date - current_date) / 1000;
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            minutes = parseInt(seconds_left / 60);
        var before_2pm;
        if( hours < 0 || minutes < 0 ) {
            before_2pm = false;
        } else {
            before_2pm = true;
        }
        if( this_day_of_week == 7 ) {
          post_date = today.addDays(1); // If it is sunday it will be posted on monday
        } else if( before_2pm === false ) {
          post_date = today.addDays(1); // If it is after 2pm it will be posted next day
        } else {
            post_date = today;
        }
        del_date = post_date.addDays(5);
        if(del_date.getUTCDay() === 0) {
            del_date = del_date.addDays(1);
        }
        return del_date.getDate()+' '+monthNames[del_date.getMonth()];
    }

    // Create variables for use in DOM changes
    var product_ID = CRITEO_CONF[0][0]['Product ID'];
    var review_test = jQuery('.product-review h3');
        if( review_test.html() !== null ) {
            var review_count = jQuery('.product-review h3 span').html()
              , review_stars = jQuery('<div />').append(jQuery('.add-to-box .feefo-rating-stars-bkg').clone()).html()
              , review_link = jQuery('.add-to-box .read a:first-child').attr('href')
              ;
        }
    var prod_stock = jQuery('.availability span')
      , prod_featured = jQuery('.downloads-links-block')
      , prod_price = jQuery('.special-price .price' );
    if( prod_price.length ) {
        if(jQuery('.grouped-items-table').length ) {
            prod_price = '';
        } else {
            prod_price = jQuery('.price-box');
        }
    }
    if (prod_price.length === 0) {
        prod_price = jQuery('h2 + .price-box .price');
    }
    if (prod_price.length === 0) {
        prod_price = jQuery('h3.availabledate + .price-box .price');
    }
    if (prod_price.length === 0) {
        prod_price = '';
    } else {
        prod_price = prod_price.html();
    }
    var prod_orderinfo = '<div class="exp-order-info"> \
          <h4>'+((prod_stock.html() == 'In stock') ? 'In Stock, ready to ship' : 'Currently out of stock')+'</h4> \
          <div class="exp-order-info-left"> \
            '+((prod_stock.length) ? ((prod_stock.html() == 'In stock') ? '<p>Order now to receive by '+get_delivery_date()+' or sooner</p>' : '<p>'+prod_stock.html()+'</p>') : '')+' \
            <p class="exp-delivery-note"> </p> \
            <p><a href="#" class="exp-dash-under exp-modal-del">Delivery Info</a></p> \
          </div> \
          <div class="exp-order-info-right"> \
            <p>RETURNS ARE EASY</p> \
            <p>Immediate no-quibble refund</p> \
            <p><a href="#" class="exp-dash-under exp-modal-returns">Returns Info</a></p> \
          </div> \
        </div>'
      ;
    var exp_modal_del_content = '<div class="exp-modal-content"> \
<div class="deldrop"> \
<table style="width: 510px;" border="1"><tbody><tr> \
<td style="width: 114px;"><strong>DELIVERY TO UK MAINLAND</strong></td> \
<td style="width: 114px;"><strong>PRICE</strong></td> \
<td><strong>DELIVERY TIME</strong></td> \
</tr><tr> \
<td>Standard Delivery</td> \
<td>£5.95</td> \
<td>2-5 working days</td> \
</tr><tr> \
<td>Next Day</td> \
<td>£8.50</td> \
<td>Order before 2pm for Next Working Day (Mon-Fri excluding Bank Holidays)</td> \
</tr><tr> \
<td>Next Day before 12 noon</td> \
<td>£10.00</td> \
<td>Order before 2pm for Next Working Day before 12pm.</td> \
</tr><tr> \
<td>Saturday</td> \
<td>£15.00</td> \
<td>Arrives between 8am and 5pm</td> \
</tr><tr> \
<td class="exp-lorry-symbol">Heavy items showing this lorry symbol<br /><br /><img style="opacity:0.7" src="http://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/two-man-delivery.png" alt="Lorry" /></td> \
<td>£60.00</td> \
<td>2-hour delivery slot on a day of your choice.<br /> \
Our customer service team will call you to arrange delivery by our dedicated two-man team who will place the item in the room of your choice, unwrap and remove the packaging.</td> \
</tr></tbody></table> \
<p>Please note that occasionally an item is out of stock, so Saturday and Next Day options may not be available.</p> \
 \
<table style="width: 510px;" border="1"><tbody><tr> \
<td style="width: 114px;"><strong>DELIVERY TO UK HIGHLANDS AND ISLANDS</strong></td> \
<td style="width: 114px;"><strong>PRICE</strong></td> \
<td><strong>DELIVERY TIME</strong></td> \
</tr><tr> \
<td>Standard Delivery</td> \
<td>£5.95</td> \
<td>2-5 working days</td> \
</tr><tr><td colspan="3"> \
The Isle of Wight, Isles of Scilly, Northern Ireland and Postcodes, AB31 - AB38, AB40 - AB56, IV1 - 28, IV30 - 32, IV36 - 40, IV52 - 54, IV63, KW1 - 14, PA21 - PA38, PH4 - PH41, PH49 - PH50, , IV41 - IV49, IV51, 55, 56, KA27 & 28, KW15 - 17, PA20, PA41 - 49, PA60 - 78, PH42 - 44, Z cannot have a next day delivery. \
</td></tr></tbody></table> \
 \
<table style="width: 510px;" border="1"><tbody><tr> \
<td style="width: 114px;"><strong>DELIVERY TO EUROPE, ISLE OF MAN GUERNSEY & JERSEY</strong></td> \
<td style="width: 114px;"><strong>PRICE</strong></td> \
<td><strong>DELIVERY TIME</strong></td> \
</tr><tr> \
<td rowspan="3">Standard Delivery</td> \
<td>£10&nbsp; 0 - 2kgs</td> \
<td>2-5 working days</td> \
</tr><tr> \
<td>£24&nbsp; 2.001 - 10kgs</td> \
<td>2-5 working days</td> \
</tr><tr> \
<td>£50&nbsp; 10.001 - 25kg</td> \
<td>2-5 working days</td> \
</tr></tbody></table> \
 \
<table style="width: 510px;" border="1"><tbody><tr> \
<td style="width: 114px;"><strong>DELIVERY TO REST OF THE WORLD</strong></td> \
<td style="width: 114px;"><strong>PRICE</strong></td> \
<td><strong>DELIVERY TIME</strong></td> \
</tr><tr><td colspan="3"> \
We currently deliver to: Australia, Austria, Belgium, Brazil, Canada, China, Cyprus, Czech Republic, Denmark, Finland, France, Germany, Greece, Guernsey, Hong Kong, Ireland, Isle of Man, Italy, Japan, Jersey, Luxembourg, Malaysia, Malta, Monaco, Netherlands, New Zealand, Norway, Poland, Portugal, Singapore, South Africa, Spain, Sweden, Switzerland, United Arab Emirates; and the United States of America. \
</td></tr></tbody></table> \
</div> \
        </div>';

    var exp_modal_returns_content = '<div class="exp-modal-content"> \
<div class="deldrop"> \
<table style="width: 510px;" border="1"><tbody><tr> \
<td><strong>Returns are easy</strong></td> \
</tr><tr><td> \
To get a refund or an exchange, simply send the item back to us, to be received within 28 days of receipt. \
<br /><br /> \
Please retain all packaging until you are sure you wish to keep your items. Items must be repacked in the original packaging or a suitable alternative. \
<br /><br /> \
You may also cancel your whole order and return it to us. Simply let us know within 8 working days of receiving your parcel. Once we receive the whole order back we will issue a full refund including the original delivery charge. \
<br /><br /> \
We regret that personalised products are not eligible for returns, unless faulty or damaged.\
</td></tr> \
<tr><td><strong>Refunds</strong></td></tr><tr><td> \
Should you wish to receive a full refund, the items must be returned to us in a resalable condition in all the original packaging. The item needs to be received back within twenty eight days from the day the parcel was delivered. \
<br /><br /> \
Please note that refunds for items bought as gifts can only be issued to the original purchaser. If you decide to exchange an item or items we cannot stop the original purchaser from knowing. \
</td></tr> \
<tr><td><strong>Exchanges and Credit Notes</strong></td></tr><tr><td> \
If an item is outside of the twenty eight day time frame, or is in a non resalable condition, a credit note may be issued at the discretion of Cox and Cox and will be valid for one year from the date of issue. \
<br /><br /> \
If you wish to return an item for an exchange, and the original item is not damaged or faulty you will be responsible for the return postage. Please use the returns slip on the bottom of the invoice to state which item(s) your are returning and what you would like to receive in exchange. \
<br /><br /> \
If the exchanged item is of a lower value then a refund will be issued for the difference, providing the return is made within the twenty eight day returns period. If the exchanged item is of a higher value then a member of our Customer Service Team will be in touch to take the additional payment required. \
</td></tr></tbody></table> \
</div> \
        </div>';

        var social_tab_links = '<div class="exp-social-tab-links"> \
            <a href="#" class="exp-fb-open"><img src="http://www.awa-digital.com/optimizely/cox-cox/fb.png" alt="Facebook" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \
            <a href="#" class="exp-pin-open"><img src="http://www.awa-digital.com/optimizely/cox-cox/pin.png" alt="Pinterest" /></a> \
        </div>';

    // Add styles
    jQuery('<style type="text/css"> \
        .catalog-product-view {} \
        .exp-review-widget { padding-bottom: 22px; } \
        .exp-prod-price { float: left; padding-left: 17px; height: 49px; line-height: 49px; font-weight: bold; font-size: 1.7em; } \
        .exp-modal-content { background: #fff; position: relative;padding: 20px; margin: 0 auto; width: 510px; } \
        #social { width: 379px; float: right; height: 20px; padding-left: 22px; } \
        .exp-social-tab-links { width: 379px; height: 21px; position: relative; top: -2px; } \
        .exp-social-tab-links a:hover { opacity: 0.8; } \
        /*#social .facebook-block,#social .pinterest { display: none; } */ \
        .catalog-product-view form .download-holder { width: 100%; height: 90px; float: none; padding-top: 16px; } \
        .catalog-product-view form .downloads-links-block { margin-top: -30px; margin-bottom: 0; overflow: auto; height: auto; padding: 0; } \
        .exp-order-info { height: 100px; border-top: 1px solid #DFDFDF; padding-top: 16px; } \
        .exp-order-info h4 { font-size: 1.3em; } \
        .exp-order-info p { margin: 10px 0 0 0; } \
        .exp-order-info-left { float: left; width: 50%; } \
        .exp-order-info-right { float: left; width: 40%; padding-left: 10%; } \
        .exp-order-info a img { position: relative; top: 1px; } \
        .exp-order-info a:hover { opacity: 0.8; } \
        .whishlist_wrap { float: none; } \
        .whishlist_wrap p { display: none; } \
        .product-view .product-shop .whishlist_wrap .add-to-links { margin: 14px 0 0 0; } \
        #sb-body-inner { background: #fff; } \
        .exp-dash-under { border-bottom: 1px dashed #9E9E9E; } \
        .exp-dash-under:hover { border-bottom: 0; text-decoration: none; } \
        .product-shop .add-to-box .notify-block { margin-top: 15px; margin-left: 30px; } \
        .product-shop .add-to-box .notify-block input { width: 200px; } \
        .product-shop .add-to-box .notify-block .spinner { width: 28px; } \
        .product-shop .add-to-box { clear: both; } \
        .product-shop .notify-block.exp-grey-button { height: 30px; overflow: auto; clear: both; margin: 0; padding: 25px 0 10px 0; } \
        .product-shop .notify-block.exp-grey-button .submit_notification {  filter: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="grayscale"><feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/></filter></svg>#grayscale\'); filter: gray; -webkit-filter: grayscale(100%); } \
        .product-shop .add-to-cart.exp-add-button-notify { float: left; margin-left: 30px; } \
        .grouped-items-table { margin-top: 20px; } \
        .exp-modal-close { position: absolute; top: -2px; right: -2px; width: 30px; height: 30px; \
         background: url("/js/rocketweb/jquery/fancybox/fancybox.png") repeat scroll -40px 0px transparent; \
         cursor: pointer; z-index: 1103; display: block; } \
        .exp-modal-close:hover, .exp-modal-close:focus { text-decoration: none; } \
        .exp-sku-code { float: right; color: #999; margin-top: 6px; margin-bottom: 10px; font-size: 9px; line-height: 16px; } \
    </style>').appendTo('head');

    // Make DOM changes
    jQuery('h2 + .price-box, h3.availabledate + .price-box, p.availability,form .slide-block').remove();
    if( review_test.html() !== null ) {
        if(jQuery('h3.availabledate').length !== 0) {
            jQuery('h3.availabledate').after('<div class="exp-review-widget">'+review_stars+' &nbsp;<a href="#feefo-ratings" class="exp-dash-under">'+review_count+'</a></div>');
        } else {
            jQuery('.product-shop h2').after('<div class="exp-review-widget">'+review_stars+' &nbsp;<a href="#feefo-ratings" class="exp-dash-under">'+review_count+'</a></div>');
        }
    }
    if( prod_featured ) {
        prod_featured.find('h4').html('As featured in');
        jQuery('.product-collateral .std').append( prod_featured );
    }
    if( jQuery('.add-to-box .read').length ) { jQuery('.add-to-box .read').remove(); };
    jQuery('.add-to-box').prepend( jQuery('<div class="exp-prod-price">'+prod_price+'</div>') );
    jQuery('.product-collateral .std').append( prod_orderinfo );
    if( jQuery('.exp-order-info h4').html() === 'Currently out of stock' && jQuery('.grouped-items-table .price')) {
        jQuery('.exp-order-info h4').remove();
    }
    jQuery('.whishlist_wrap').before( jQuery('#social') );
    jQuery('#social').prepend( social_tab_links );

    if(!jQuery('.grouped-items-table').length) {
        if(jQuery('.product-collateral .downloads-links-block').length) {
            jQuery('.downloads-links-block').before('<p style="margin-top:-22px;">Product code: '+product_ID+'</p><p>&nbsp;</p>');
        } else {
            jQuery('.exp-order-info').before('<p style="margin-top:-22px;">Product code: '+product_ID+'</p>');
        }
    }

    jQuery('#social .pinterest').hide(0);
    setTimeout(function () {
        jQuery('#social .facebook-block').hide(0);
    } , 2000);
    // Social tab event listeners
    jQuery('.exp-pin-open').on('click',function(e){
        e.preventDefault();
        jQuery('#social .facebook-block').hide(0);
        jQuery('#social .pinterest').show(200);
    });
    jQuery('.exp-fb-open').on('click',function(e){
        e.preventDefault();
        jQuery('#social .pinterest').hide(0);
        jQuery('#social .facebook-block').show(200);
    });

    // Function to open Modal
    function expOpenModal(content) {
        Shadowbox.open({
            content: content,
            player: 'html',
            title: '',
            height: 500,
            width: 960
        });
    }

    // Shadowbox event listeners
    jQuery('.exp-modal-del').each(function(){
        jQuery(this).bind('click',function(e){
            expOpenModal( exp_modal_del_content );
            e.preventDefault();
            function appendClose() {
                jQuery('#sb-title-inner').append('<a href="#" onclick="Shadowbox.close();return false;" class="exp-modal-close">&nbsp;</a>');
            }
            window.setTimeout(appendClose, 1500 );
        });
    });
    jQuery('.exp-modal-returns').each(function(){
        jQuery(this).bind('click',function(e){
            expOpenModal( exp_modal_returns_content );
            e.preventDefault();
            function appendClose() {
                jQuery('#sb-title-inner').append('<a href="#" onclick="Shadowbox.close();return false;" class="exp-modal-close">&nbsp;</a>');
            }
            window.setTimeout(appendClose, 1500 );
        });
    });

    // stock notifier
    if ( jQuery('form .notify-block').length ) {
        if( jQuery('.add-to-cart').length ) {
            /*jQuery('.add-to-cart').addClass('exp-add-button-notify').before( jQuery('form .notify-block') );*/
            jQuery('form .notify-block').addClass('exp-grey-button');
            jQuery('.add-to-box').before( jQuery('form .notify-block') );
        } else {
            if(jQuery('.add-to-box .exp-prod-price').length === 0) {
                jQuery('.add-to-box').prepend( jQuery('<div class="exp-prod-price">'+prod_price+'</div>') );
            }
            jQuery('.add-to-box').append( jQuery('form .notify-block') );
        }
        jQuery('.submit_notification').unbind('click');
        jQuery('.submit_notification').click(function(event){  
            event.preventDefault();
            var product_id = jQuery(this).attr('id');
            var request = jQuery.ajax({
                url: '/stocknotifier/index/addemailtolist',
                type: "POST",
                dataType: 'json',
                data: { email: jQuery('#notify_block_'+product_id+' .notification_email').val(),
                        id: product_id,
                      },
                success: function(data){ 
                     if(data.msg == 'true'){
                        openShadowbox('We will send you an email as soon as the product is in stock');
                        jQuery('#notify_block_'+product_id+' .notification_email').val('email address');
                     }
                     else{                        
                        openShadowbox(data.msg);
                        jQuery('#notify_block_'+product_id+' .notification_email').val('email address');
                     }
                },
                beforeSend: function (thisXHR) {
                    jQuery('#notify_block_'+product_id+' .spinner').show();
                },
                complete: function() {
                    jQuery('#notify_block_'+product_id+' .spinner').hide();
                }                     
            });
        });
}

    // Check for location and create delivery note
    var delivery_note;
    jQuery.get('http://freegeoip.net/json/', function (response) {
        if( response.country_code === 'GB' ) {
            delivery_note = 'Next day delivery available';
        } else {
            delivery_note = 'International delivery available';
        }
        jQuery('.exp-delivery-note').html(delivery_note+' <!--<a href="#" class="exp-modal-delivery"><img src="http://www.awa-digital.com/optimizely/cox-cox/help-icon.png" alt="?" /></a>-->');
        jQuery('.exp-modal-delivery').bind('click',function(e){ expOpenModal( exp_modal_del_content ); e.preventDefault(); });
    }, 'json').fail(function(){

        jQuery.get('http://ipinfo.io/json/', function (response) {
        if( response.country === 'GB' ) {
            delivery_note = 'Next day delivery available';
        } else {
            delivery_note = 'International delivery available';
        }
        jQuery('.exp-delivery-note').html(delivery_note+' <!--<a href="#" class="exp-modal-delivery"><img src="http://www.awa-digital.com/optimizely/cox-cox/help-icon.png" alt="?" /></a>-->');
        jQuery('.exp-modal-delivery').bind('click',function(e){ expOpenModal( exp_modal_del_content ); e.preventDefault(); });
    }, 'json').fail(function(){

        delivery_note = 'Next day delivery available';
        jQuery('.exp-delivery-note').html(delivery_note+' <!--<a href="#" class="exp-modal-delivery"><img src="http://www.awa-digital.com/optimizely/cox-cox/help-icon.png" alt="?" /></a>-->');
        jQuery('.exp-modal-delivery').bind('click',function(e){ expOpenModal( exp_modal_del_content ); e.preventDefault(); });
    
    });

    });

}

// Run the experiment
ProductPageExperiment();