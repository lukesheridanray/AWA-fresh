var NorthernParrotsBasketPage = {

    // The condition to check we are on the correct page
    'condition':  '',

    // vars object
    'vars': {
        'voucher_section': $('.basket_payment .voucherSection'),
        'favourites': $('.holderBasketSectionRight .basketUPSELLS_products'),
        'returns_modal': ' \
            Return any item within 30 days for a full refund, no questions asked. \
            You may also cancel your order within 7 working days without any reason. \
         '
    },
     
    // styles string
    'styles': ' \
.blue-underline, .delivery_changelink a { color: #0255A5 !important; text-decoration: underline; } \
.blue-underline:hover, .delivery_changelink a:hover { color: #0255A5 !important; text-decoration: none; } \
.tp_-_box { display: none; } \
.basket_logos { float: left; clear: left; } \
.deliveryBold { width: 185px; padding-right: 20px; } \
.delivery_changelink { float: right; } \
.deliverSmalltxt { margin-top: 10px; display: block; } \
.delivery-note { margin-top: 20px; } \
.bskt_prceedHolder { overflow: visible; } \
.proceed-shopping-button { color: #fff !important; font-size: 22px; padding: 10px 15px; background: #c00; border: 2px solid #a00; position: relative; top: -50px; right: -6px; } \
.proceed-shopping-button:hover { text-decoration: none; background: #d00; border: 2px solid #b00; } \
.return-note { position: relative; top: -30px; float: right; clear: right; } \
.dashed-under { border-bottom: 1px dashed #333; } \
.dashed-under:hover { text-decoration: none; border-bottom: 0px dashed #333; } \
.top-continue { position: relative; top: -10px; left: 5px; } \
.basket_payment { margin-top: 15px; } \
.basket-header-div { padding-top: 10px; clear: both; } \
.no-bottom-line td { border-bottom: 0 !important; } \
.voucher-show-hide { padding: 0 0 20px 0;vertical-align:top; } \
.orlabel, .paypal-wrapper { position: relative; top: -40px; right: -6px; } \
.basket-header-div { border: 1px solid #DDE7F1; overflow: auto; position: relative; left: 85px; width: 520px; } \
.cross-sell-product { float: left;  width: 33%; margin-top: 15px; text-align: center; } \
.cross-sell-title { padding: 10px 0 10px 0; } \
.cross-sell-price { font-weight: bold; } \
.cross-sell-products-wrap { position: relative; width: 520px; height: 185px;  } \
.cross-sell-products-wrap .blue-underline { position: absolute; bottom: 6px; right: 6px; } \
.cross-sell-product img { width: 75px; height: 75px; } \
    ',
     
     // helper functions
     'func': {
        'waitForElement': function(elem, _func, timeout, keepAlive) {
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
        },
        'waitForFunction': function(_func, experiment, timeout, keepAlive) {
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
        },
        'ajaxScrape': function() {
            var LIMIT = 3;  // How many products to fetch and display.

            var associated_products = [];

            // First get the URL of the 'other people also bought' items from the first product in the basket
            var $prodInBasket = jQuery('.basketLineItem:eq(0) img').parent('a').attr('href'),
                otherPeopleURL,
                urlPromise = [];
            urlPromise.push(jQuery.ajax({
                type: 'GET',
                url: $prodInBasket,
                success: function(product_data) {
                  var $product_data = jQuery(product_data),
                    $relatedProductRows = $product_data.find('#btab3 a').attr('href');
                    otherPeopleURL = 'http://www.northernparrots.com/page/ajx_predictions/?'+$relatedProductRows.match(/(pf_id=)(.*)(','b)/g).toString().slice(0, -4);
                }
            }));

            // When we have a URL to scrape for products...
            jQuery.when.apply(jQuery, urlPromise).then(function() {
                var productPromises = [];
                productPromises.push(jQuery.ajax({
                    type: 'GET',
                    url: otherPeopleURL,
                    success: function(associated_product_data) {
                        var $associated_product_data = jQuery(associated_product_data);
                        var iterator = 1;
                        $associated_product_data.find('ul').each( function() {
                          var _this = jQuery(this);
                          var sku = _this.attr('id').match(/(_)(.*)(_)/g).toString().replace('_','').replace('_','');
                            associated_products.push({
                              sku: sku,
                              image_url: 'http://www.northernparrots.com/images/products/thumbnail/'+sku+'.jpg',
                              price: _this.find('.prodPRICE').html().match(/(£)(.*)/g),
                              title: _this.find('.prodNamedesc').html(),
                              url: _this.find('.prodNamedesc a').attr('href')
                            });
                          iterator = iterator + 1;
                          if(iterator === 4) { return false;}
                      });
                    }
                }));

                jQuery.when.apply(jQuery, productPromises).then(function(){
                    for(var i = 0; i < associated_products.length; i++) {
                        $('.cross-sell-products-wrap').append(' \
                          <div class="cross-sell-product"> \
                            <a href="'+associated_products[i].url+'"><img src="'+associated_products[i].image_url+'" alt="" /></a> \
                            <p class="cross-sell-title"><a href="'+associated_products[i].url+'">'+associated_products[i].title+'</a></p> \
                            <p class="cross-sell-price">'+associated_products[i].price+'</p> \
                          </div>');
                    }
                });

            });
        }
     },

    // function to run the actual experiment
    'run': function() {
        
        // check for a condition and check it has been met
        if(this.condition && !this.condition.length) {
            return false;
        }

        // save having to type 'this' all the time
        // create reference to 'this' for use within closures
        var vars = this.vars,
            self = this;
        
        // force recently viewed to display
        function getRecentlyViewed() {
            if (getMyHTMLElement('holder_RECENTLYVIEWED').innerHTML == ''){
               ajaxGET('http://www.northernparrots.com/page/ajx_recent/','holder_RECENTLYVIEWED',false);
            }
        }
        this.func.waitForFunction(ajaxGET, getRecentlyViewed);
        
        // append styles
        $('head').append('<style type="text/css">'+this.styles+'</style>');
      
      console.log('variation 0.0.1');
        
        // show/hide voucher section
        if(vars.voucher_section.length) {
            vars.voucher_section.css({'display':'none'});
            vars.voucher_section.parent('tr').before('<tr class="voucher-show-hide-wrap"><td>&nbsp;</td><td class="voucher-show-hide" colspan="5"><a href="#" class="blue-underline voucher-show-link">Have a source code or discount voucher?</a></td></tr>');
                 $('.voucher-show-hide-wrap').prev('tr').addClass('no-bottom-line');
        }
        var vouchers_hidden = true;
        $('.voucher-show-hide a').bind('click',function(e){
            if ( vouchers_hidden === true ) {
                vars.voucher_section.css({'display':'table-cell'});
                $(this).parent('td').css({'padding-bottom':'5px'});
            }
            e.preventDefault();
            vouchers_hidden = false;
        });

        // DOM changes
        $('#holderBASKET_LOCATION + div > p, .bskt_prceedHolder:eq(0), .tp_-_box').remove();
        $('img[src="/images/buttons/continueshopping.gif"]').each(function(){
            $(this).parent('a').addClass('blue-underline').addClass('top-continue');
            $(this).replaceWith('&lt;&lt; continue shopping');
        });
        $('#holderBASKET_LOCATION').next('div').addClass('basket-header-div');
        $('img[src="/images/buttons/proceed_checkout.gif"]').parent('a').addClass('proceed-shopping-button');
        $('img[src="/images/buttons/proceed_checkout.gif"]').replaceWith('Proceed to Checkout');
        $('.bakDelmethods').after('<p class="delivery-note"><em>96.3% of Standard UK orders<br />are delivered next day</em></p>');
        $('.proceed_checkout').append('<p class="return-note"><a href="#" class="dashed-under returns-modal-trigger">Return items</a> within 30 days for a full refund</p>');
        $('.orlabel').next('li').addClass('paypal-wrapper');
        if( $('.deliveryBold').html().indexOf('Delivery to UK Mainland') !== -1 ) {
            $('.deliveryBold').html('Delivery to UK Mainland <div class="delivery_changelink"><a class="blue-underline" onclick="javascript:document.getElementById(\'basket_countrychange_DIV\').style.display = \'\';">Change</a></div><br /><span class="deliverSmalltxt">(Includes England, Wales and Southern Scotland)</span>');
        } else {
            $('.proceed-shopping-button').css({'top':'-10px'});
            $('.return-note').css({'top':'0px'});
            $('.delivery_changelink').css({'position':'relative','top':'0px'});
            $('.delivery-note').remove();
            $('.orlabel, .paypal-wrapper').css({'top':'0px'});
        }
        $('.holderBasketSectionRight a:contains(View all my Favourites)').addClass('blue-underline');
        $('.holderBasketSection').append( $('.BasketLinkLocType1') );
        $('.BasketLinkLocType1').replaceWith(' \
          <a href="javascript:if(window.open(\'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=SC5&amp;v_search=http://www.northernparrots.com/page/basket/&amp;x=6&amp;y=5\',\'tl_wnd_credentials\'+(new Date()).getTime(),\'toolbar=0,scrollbars=1,location=1,status=1,menubar=1,resizable=1,width=374,height=660,left=60,top=120\')){};tLlB(tLTB);" onmouseover="tLeB(event,\'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=C&amp;v_shortname=SC5&amp;v_search=http://www.northernparrots.com/page/basket/&amp;x=6&amp;y=5\',\'tl_popupSC5\')" onmousemove="tLXB(event)" onmouseout="tLTC(\'tl_popupSC5\')" ondragstart="return false;"><img src="http://www.northernparrots.com/images/core/Comodo_Secure.gif" onmousedown="return tLKB(event,\'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=SC5&amp;v_search=http://www.northernparrots.com/page/basket/&amp;x=6&amp;y=5\');" oncontextmenu="return tLLB(event);" border="0"></a><!----><div id="tl_popupSC5" name="tl_popupSC5" style="position: absolute; z-index: 0; visibility: hidden; background-color: transparent; overflow: hidden; left: 565px; top: 1107.5px; width: 356px; height: 259px; border-width: 0px;" onmouseover="tLoB(\'tl_popupSC5\')" onmousemove="tLpC(\'tl_popupSC5\')" onmouseout="tLpB(\'tl_popupSC5\')"></div> \
          <img src="/images/banners/basket_paypal_verified.jpg" alt="Paypal Verified"> \
          <img src="http://www.awa-digital.com/optimizely/northern-parrots/images/custom/basket-cards.jpg" alt=""> \
       ' );

        $('.returns-modal-trigger').bind('click',function(e){
            e.preventDefault();
            var returns_modal_callback = function(){
                $('#ajaxEditorial').html(' \
                    <div class="ajaxArticleHEADER"><div style="float:right"><a href="javascript:hidePopup();"><img src="/images/core/close.gif" alt="x"></a></div> \
                    Returns & Refunds</div> \
                  <div class="ajaxArticleTEXT"> \
                    ' + vars.returns_modal + ' \
                    </div> \
                ' );
                $('#ajaxEditorial').css({'display':'block','left':'50%','top':(jQuery(document).scrollTop() + 200 + 'px'),'margin': '0 0 0 -300px'});
            }
            showOverlayBoxdesign(returns_modal_callback);
        });
        
        // add recently viewed as fallback to favourites
       if(!vars.favourites.length) {
           
           function appendRecents() {
               $('.holderBasketSectionRight').append('<div class="basketUPSELLS">Recently Viewed Products</div><div class="basketUPSELLS_products recent_right">&nbsp;</div>');
               // grab each viewed items details and add to an object
               var recents = $('.recent_right');
               $('#holder_RECENTLYVIEWED ul').each(function(){
                   var _this = $(this),
                       image = _this.find('img').attr('src'),
                       title = _this.find('.title a').html(),
                       url = _this.find('.title a').attr('href'),
                       onclick = _this.find('.title a').attr('onclick'),
                       price = _this.find('.price').html(),
                       sku = url.match(/(prod)(.*)(\/)/g);
                   recents.append(' \
                       <ul> \
                           <li> \
                               <div class="leftImg"> \
                                   <a href="'+url+'" onclick="'+onclick+'"> \
                           <img src="'+image+'" style="border: 1px #DDE7F1 solid; margin-right:5px;margin-bottom:10px;" alt="" align="left" height="50" width="50"> \
                         </a> \
                       </div> \
                       <div class="rightContents"> \
                                   <a href="'+url+'" onclick="'+onclick+'" alt="'+title+'"> '+title+'</a> \
                                   <br> \
                                   <div class="itemPrice"> \
                                       '+price+' \
                       </div> \
                                     <div class="saveForOptions"> \
                                       <a href="'+url+'" onclick="'+onclick+'"><strong>View details</strong></a> \
                                   </div> \
                  </div> \
                      <div class="clear"></div> \
                           </li> \
                 </ul> \
                   ');
               });
           }
           this.func.waitForElement('#holder_RECENTLYVIEWED ul .price',appendRecents);
       }

       $('.basket-header-div').append('<div class="cross-sell-products-wrap"></div>');
       // Run the function to get the 'other people also bought' products from the first item in the cart
       this.func.ajaxScrape();

    }

}

// Run the experiment
NorthernParrotsBasketPage.run();