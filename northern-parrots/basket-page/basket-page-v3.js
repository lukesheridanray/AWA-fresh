var NorthernParrotsBasketPage = {
    
    /*
    - Delivery Selector is dropdown, not radio buttons
- note that the grid layout has changed since the original wireframe, but I don't think this should affect you because it's in line with the live site. Just check that the headings above the grid match this wireframe.
    */

    // The condition to check we are on the correct page
    'condition':  '',

    // vars object
    'vars': {
        'voucher_section': $('.basket_payment .voucherSection'),
        'delivery_methods': $('.bakDelmethods ul'),
        //'favourites': $('.holderBasketSectionRight .basketUPSELLS_products'),
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
.deliverSmalltxt { margin-top: 10px; display: block; color: #666; } \
.next-day-small-print { color: #666; font-style: italic; position: relative; top: 6px; } \
.delivery-note { margin-top: 20px; position: relative; top: 41px; } \
.bskt_prceedHolder { overflow: visible; } \
.proceed-shopping-button { color: #fff !important; font-size: 22px; padding: 10px 15px; background: #c00; border: 2px solid #a00; position: relative; top: -20px; right: -6px; } \
.proceed-shopping-button:hover { text-decoration: none; background: #d00; border: 2px solid #b00; } \
.return-note { position: relative; top: 0px; float: right; clear: right; } \
.dashed-under { border-bottom: 1px dashed #333; } \
.dashed-under:hover { text-decoration: none; border-bottom: 0px dashed #333; } \
.top-continue { position: absolute; top: -30px; left: 10px; } \
.basket_payment { margin-top: 15px; } \
.basket-header-div { padding-top: 10px; clear: both; } \
.no-bottom-line td { border-bottom: 0 !important; } \
.voucher-show-hide { padding: 0 0 20px 0;vertical-align:top; } \
.orlabel, .paypal-wrapper { position: relative; top: -10px; right: -6px; } \
/* ****.basket-header-div { border: 1px solid #DDE7F1; overflow: auto; position: relative; left: 85px; width: 520px; } */ \
.cross-sell-product { float: left;  width: 33%; margin-top: 15px; text-align: center; } \
.cross-sell-title { padding: 10px 0 10px 0; } \
.cross-sell-price { font-weight: bold; } \
.cross-sell-products-wrap { position: relative; width: 520px; height: 185px;  } \
.cross-sell-products-wrap .blue-underline { position: absolute; bottom: 6px; right: 6px; } \
.cross-sell-product img { width: 75px; height: 75px; } \
.holderBasketSection, .holderBasketUpsell, .basket-header-div { position: relative; top: 0; left: 109px; } \
.basket-header-div { width: 700px; text-align: center; } \
.holderBasketSection {  top: 40px; margin-bottom: 50px; } \
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
        
        // append styles
        $('head').append('<style type="text/css">'+this.styles+'</style>');
        
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
        $('.bakDelmethods').after('<p class="delivery-note"><em>&ldquo;delivery is always on time&rdquo;</em><br />-- Clive Milson, regular customer</p>');
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
        
        // Change delivery methods into select box
        
        var delivery_dropdown = $('<select name="method_id"></select>');
        
        vars.delivery_methods.each(function(){
            var _this = $(this);
            var label = _this.find('.label').html().replace('<strong>','').replace('</strong>','&nbsp;&nbsp;&nbsp;&nbsp;');
            var value = _this.find('input').attr('value');
            var checked = _this.find('input').attr('checked');
            var html = '<option value="'+value+'"'+((checked === 'checked') ? 'selected="selected"' : '')+'>'+label+'</option>';
            delivery_dropdown.append(html);
        });
        
        vars.delivery_methods.parent('div').replaceWith(delivery_dropdown);
        
        delivery_dropdown.after('<br /><span class="next-day-small-print">(Next Day Delivery Available)</span>');
        delivery_dropdown.bind('change',function(){
            var value = $(this).find(':selected').attr('value');
            document.method_id_form.basket_Country.value = document.basketform.basket_Country.value;
            document.method_id_form.method_id.value = value;
            document.method_id_form.submit();
        });
        
        $('.basket_payment:eq(0)').remove();

    }

}

// Run the experiment
NorthernParrotsBasketPage.run();