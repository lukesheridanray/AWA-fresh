var FlyingFlowersBasketPage = {

    /**
     * An object containing variables for use within the experiment
     */
    'vars': {
        'variation': 1, // select experiment variation
        'add_ons': (($('.addAddonsTxt').length === 1) ? $('.addAddonsTxt').next('div') : '' ), // only grab addons if we have a single set
        'p_codes': $('.pCode div')
    },
     
    /**
     * String containing CSS for the experiment
     */
    'styles': ' \
.productInCart .exp-add-on-container td, .productInCart td.addon { display: none; } \
.exp-add-on-container .addon.first-add-on, td.addon:first-child { display:table-cell; } \
.dialogue td:first-child .addonImg { margin-left: 0 !important; } \
.exp-add-on-container .addon { color:#fff;font-size:0px } \
.add-on-caption { position:relative;top: -24px;left: 40px } \
.basketContent img[src="/static/images/checkoutSecurely.jpg"] { display: none; } \
#loading { z-index: 99999999; } \
.modal-title { font-size: 24px; padding: 15px 0; } \
.modal-checkout-button { padding: 30px 0 0 0; } \
.modal-checkout-button img { position: relative; top: -15px; } \
.checkout-button { clear: right; display: block; margin-left: 759px; } \
.checkout-button-top { margin-top: 10px; } \
.single-addon { font-size: 12px; } \
.single-addon .addonImg { float: left; margin-top: 10px; margin-bottom: 20px; margin-right: 10px; } \
.dialogue .addon { width: 168px !important; } \
.dialogue-content { width: 921px !important; position: relative; overflow:hidden; } \
.dialogue .addonImg { border: 1px solid #EE2C71; padding: 10px 30px; margin: 0 10px; } \
.modal-nothanks-button a { width: 100px; height: 33px; line-height: 33px; text-align: center; display: block; color: #EE2C71; border: 1px solid #EE2C71 !important; font-size: 12px; text-decoration: none; margin-top: 15px; } \
.modal-cross-button a { position: absolute; top: -8px; right: 10px; text-align: center; color: #EE2C71; font-size: 15px; text-decoration: none; margin-top: 15px; } \
.dialogue-header,.dialogue-footer { display: none; } \
.dialogue .addonImg, .dialogue .addonImg img { width: 217px; height: 145px; padding: 0; } \
.dialogue .addonImg { text-align: center; line-height: 144px; } \
.dialogue .addon { width: 214px; } \
.addAddonIcon { cursor: pointer; } \
.dialogue .addonImg img { border: 0 !important; } \
.addon .moreinfo { display: none; } \
.addItem { background-color: transparent; height: 19px; width: 18px; } \
',

    /**
     * The run function is called to run the experiment
     */
    'run': function() {
     
        // Create reference to vars object
        var vars = this.vars;

        // If we have add ons carry on, otherwise return false
        if(!vars.add_ons) {
            return false;
        }

       // If we match any particular products return false
       var blocked_product;
       this.vars.p_codes.each( function(){
           var p_code = $(this).html();
           if(
               p_code === 'C00281PS' ||
               p_code === 'C00281BS' ||
               p_code === 'C04872VS' ||
               p_code === 'C04872PS'
           ) {
               blocked_product = true;
               return false;
           }
       });
       if(blocked_product) {
           return false;
       }
     
        // Append styles to head
        $('head').append('<style type="text/css">'+this.styles+'</style>');

       
// create custom checkout buttons
       $('.basketContent').before($('img[src="/static/images/checkoutSecurely.jpg"]').parent('a')[0]);
       $('.basketContent').after($('img[src="/static/images/checkoutSecurely.jpg"]').parent('a')[1]);
       $('img[src="/static/images/checkoutSecurely.jpg"]').removeClass('fright').parent('a').addClass('checkout-button');
       $('img[src="/static/images/checkoutSecurely.jpg"]:eq(0)').addClass('checkout-button-top');

function customDeleteLink() {
$('.deleteAddon').each( function() {
    $(this).unbind('click');
    $(this).bind('click',function() {
         var currentRef = jQuery(this), params = ["action=removeAddon"], mainContainer = $(".productInCart");
         params.push("order_item_id="+mainContainer.find("input[name='order_item_id']").val());
         params.push("add_on_id="+currentRef.closest("td").find("input[name='addonId']").val());
         FlyingFlowers.Ajax.deleteAddon({
           data: params.join("&"),
           success: function(resp){
             $(".basketContent").html(resp);
                			   var productInCarts = $(".productInCart");
                               function timedout_listeners() {
                                   customAddOnListener();
                                   customCheckoutListener();
                                   customDeleteLink();
                                   customUpgradeOption();
                               }
                               window.setTimeout(timedout_listeners,100);
           },
           error: function(){
              alert("Seems to be some problem please try again later");
           }
          
         });
    
    return false;
});
});
}
customDeleteLink();

function customUpgradeOption() {
    $('.upgradeOption').unbind('click');
    $('.upgradeOption').bind("change",function(){
       if(!jQuery('.upgradeOption').val()){
           return;
       }
	   var params = ["action=updateItem"], mainContainer = jQuery(".productInCart");
	   params.push("order_item_id="+mainContainer.find("input[name='order_item_id']").val());
	   params.push("productId="+mainContainer.find("input[name='productId']").val());
				 
	   params.push("skuId="+jQuery(this).val());
	   FlyingFlowers.Ajax.upgradeOption({
           data: params.join("&"),
           success: function(resp){
               $(".basketContent").html(resp);
               var productInCarts = $(".productInCart");
               function timedout_listeners() {
                   customAddOnListener();
                   customCheckoutListener();
                   customDeleteLink();
                   customUpgradeOption();
               }
           window.setTimeout(timedout_listeners,100);
           },
           error: function(){
               alert("Seems to be some problem please try again later");
           }
       });
    });
}
customUpgradeOption();
       
        // function to add custom addon event listeners
        function customAddOnListener(checked) {
                $('.addAddonIcon').each(function(){
                    var current_addon = $(this);
                    var _this_addon_sku = current_addon.prev('input').val();
                    current_addon.html('<img src="//cdn.optimizely.com/img/174847139/506530dbdc014eacb0671faed2314062.gif" alt="">');
                    $('.addOnRow td:nth-child(even)').each(function(){
                        if($(this).html() === _this_addon_sku ) {
                            current_addon.html('<img src="//cdn.optimizely.com/img/174847139/cf65de90fbf648fea95b6ea9adecf95a.gif" alt="">');
                            return false;
                        }
                    });
                    
                    current_addon.unbind('click');
                    current_addon.bind('click',function() {
                        
                      if( $(this).html() !== '<img src="//cdn.optimizely.com/img/174847139/cf65de90fbf648fea95b6ea9adecf95a.gif" alt="">' && !$(this).hasClass('disableAddOn') ) {
  
                        var addon_sku = $(this).prev('input').val();
                		var params = ["action=addAddon"], mainContainer = $(".productInCart");
                		params.push("order_item_id="+mainContainer.find("input[name='order_item_id']").val());
                		params.push("add_on_sku="+jQuery(this).closest("td").find("input[name='addonId']").val());
                		FlyingFlowers.Ajax.addAddon({
                		    data: params.join("&"),
                			success: function(resp){
                			   $(".basketContent").html(resp);
                               function timedout_listeners() {
                                   customAddOnListener('checked');
                                   customCheckoutListener();
                                   customDeleteLink();
                                   customUpgradeOption();
                               }
                               window.setTimeout(timedout_listeners,100);
                		   },
                		   error: function(){
                               alert("Seems to be some problem please try again later");
                		   }
                       }); 
                    } else {
                        var addon_sku = $(this).prev('input').val();
                        var addon_id;
                        $('.addOnRow td:nth-child(even)').each(function(){
                            if($(this).html() === addon_sku ) {
                                addon_id = $(this).parent('tr').find('.td_addOnDel').find('input').val();
                                return false;
                            }
                        });
                        var currentRef = jQuery(this), params = ["action=removeAddon"], mainContainer = $(".productInCart");
                        params.push("order_item_id="+mainContainer.find("input[name='order_item_id']").val());
                        params.push("add_on_id="+addon_id);
                        FlyingFlowers.Ajax.deleteAddon({
                          data: params.join("&"),
                       success: function(resp){
                         $(".basketContent").html(resp);
                               function timedout_listeners() {
                                   customAddOnListener();
                                   customCheckoutListener();
                                   customDeleteLink();
                                   customUpgradeOption();
                               }
                               window.setTimeout(timedout_listeners,100);
                          },
                          error: function(){
                             alert("Seems to be some problem please try again later");
                          }
          
                        });
                   }
                        
                    });
                });

           $('.addAddonsTxt').next('div').addClass('exp-add-on-container');
            $('.exp-add-on-container .addAddonIcon').addClass('addAddonCustom');
            $('.exp-add-on-container .addAddonIcon').removeClass('addAddon').removeClass('addItem');
            $('.addAddonsTxt').html('').css({'padding-top':'0'});
           $('.exp-add-on-container td:first-child').addClass('first-add-on');
           //$('.exp-add-on-container tr:last-child').css({'display':'none'});

         if($('.add-on-caption').length === 0 ) {
               $('.exp-add-on-container').after('<p class="add-on-caption">Add a ribbon for just 99p to make my flowers extra special</p>');
           }
        }
        customAddOnListener();
        $('.exp-add-on-container .addAddonIcon').removeClass('addAddon').removeClass('addItem');

        // function to add checkout button event listeners

       var cache_addons = vars.add_ons.html();

        function customCheckoutListener() {

           $('img[src="/static/images/checkoutSecurely.jpg"]').each(function(){
               
               $(this).parent().bind('click',function(e) {
                    e.preventDefault();
                   
                 if(vars.variation === 1) {
                       
                   FlyingFlowers.Utils.dialogue(
                      '<p class="modal-title">Would you like to add an extra treat?</p>' +
                       cache_addons +
                       '<div class="modal-buttons"><p class="modal-checkout-button fright"><a href="/order/delivery/"><img src="/static/images/checkoutSecurely.jpg?v=noev"></a></p>' +
                       '<p class="modal-nothanks-button fleft"><a href="/order/delivery/">No Thanks</a></p></div>'
                   );
                     
                 } else if(vars.variation === 2) {
                   
                   FlyingFlowers.Utils.dialogue(
                      '<p class="modal-cross-button"><a href="/order/delivery/">X</a></p><p class="modal-title">Would you like to add an extra treat?</p>' +
                       cache_addons +
                       '<div class="modal-buttons"><p class="modal-checkout-button fright"><a href="/order/delivery/"><img src="/static/images/checkoutSecurely.jpg?v=noev"></a></p>' +
                       '</div>'
                   );
                     
                 }
                   
                   $('.dialogue .addon:first-child').remove();
                   $('.dialogue tr:eq(4) .addon, .dialogue tr:eq(4) .addon.first-add-on').css({'display':'none'});
                   
                   var addon_imgs = $('.dialogue .addonImg img');
                   if(addon_imgs.length > 4) {
                       $('.dialogue .addon').css({'width':'165px'});
                       $('.dialogue .addonImg, .dialogue .addonImg img').css({'width':'165px','height':'110px'});
                   }
                   addon_imgs.each(function(){
                       var _this = $(this),
                           src = _this.attr('src');
                       if(src.indexOf('Oscar_Bear') !== -1 ) {
                           _this.attr({'src':'//cdn.optimizely.com/img/174847139/b4e67fd4851845199d48ac6b22b76094.jpg'});
                       }
                       else if(src.indexOf('desert_chocs') !== -1 ) {
                           _this.attr({'src':'//cdn.optimizely.com/img/174847139/49a8ee3367e6400b8297fd5192d6aace.jpg'});
                       }
                       else if(src.indexOf('cont_chocs') !== -1 ) {
                           _this.attr({'src':'//cdn.optimizely.com/img/174847139/a98949a4a9544a30b8aab515e0301ba8.jpg'});
                       }
                       else if(src.indexOf('thorn_classics') !== -1 ) {
                           _this.attr({'src':'//cdn.optimizely.com/img/174847139/6c5770901baa4091ad6ffb31cea191ae.jpg'});
                       }
                       else if(src.indexOf('Guylian') !== -1 ) {
                           _this.attr({'src':'//cdn.optimizely.com/img/174847139/e7504cab63414b178c84edb7431830c1.jpg'});
                       }
                       else if(src.indexOf('ft_egg-1') !== -1 ) {
                           _this.attr({'src':'//cdn.optimizely.com/img/174847139/344d224d42aa455ba156cb495b3ddf9c.jpg'});
                       } else {
                           _this.css({'width':'auto','height':'auto','margin':'0 auto'});
                       }
                   });
                
                   $('#FlyingFlowersOverlay').css({'display':'none'});
                   if($('#FlyingFlowersOverlayCustom').length) {
                       $('#FlyingFlowersOverlayCustom').css({'display':'block'});
                   } else {
                       $('#FlyingFlowersOverlay').clone().appendTo('body').attr({'id':'FlyingFlowersOverlayCustom'}).css({'display':'block'});
                   }
                   $('.dialogue-close').bind('click',function(){
                       $('#FlyingFlowersOverlayCustom').css({'display':'none'});
                   });
                
                   // Addon event listeners
                   customAddOnListener();
                
               });
           });
    
        }
        customCheckoutListener();

window.setTimeout(function(){
    $('.exp-add-on-container .addAddonIcon').removeClass('addAddon').removeClass('addItem');},200);
}

};

console.log('v3.0.8');

// Run the experiment
FlyingFlowersBasketPage.run();

$("#basketContainer > a:eq(0) > img:eq(0)").css({"margin-top":"17px"});