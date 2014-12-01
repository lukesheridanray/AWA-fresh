






//Need to factor in countries that can't be delivered too - produces a sorry message in delivery section
//Need to factor in "What's this?" message popup
//Sign in link doesn't work at the moment
//When cllosing poopup, sometimes window auto scrolls down a bit
//Summary title and styling can disappear or title can be applie twice...
//If already logged in, sign in button should be hidden if $(".links .last a").text() contains "Log Out"
//REload page after a break, on a country with no delivery - delivery optyions doesn;t expand - prtobably fix by adding that loop earlier too...
//2nd Perfection guarantee link doesn't work
//include something for really massive baskets
//Changing the date just didn't work!!
//cover lower right margin just after compression - perhaps put an extra blank div there or something?
// on pad make fields higher so they're easier to click on
// on pad it's slightly to wide - only just 
// Pressing enter on gift message form triggers the login link!


//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Define safe console log function
exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Bettys vertical checkout - dev 0.1');


// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'NCcontentRImage': '//cdn.optimizely.com/img/14847832/b5ad0505be384613b7faa794bc1717bf.png'
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
.NC-row { \
    width: 100%; \
    position: relative; \
    min-width: 700px \
} \
.NC-row-5 { \
    overflow: visible; \
} \
.NC-heading, .topheading { \
    color: #98002E; \
    font-size: 16px; \
    width: 200px; \
    padding-right: 10px; \
    float: left; \
    padding-bottom: 20px \
} \
.NC-content { \
    width: 400px; \
    float: left; \
    margin-right: 300px; \
    padding-bottom: 25px \
} \
.NC-content-L { \
    float: left \
} \
.NC-content-R { \
    position: absolute; \
    right: 0px; \
    width: 300px \
} \
.NC-sumadjust { \
    position: relative; \
    padding-bottom: 15px \
} \
.newSummary { \
    right: -470px; \
    width: 450px; \
    bottom: 10px; \
    border-left: 50px white solid; \
    border-right: solid white 170px; \
    background-color: white \
} \
.NC-row-1 .NC-content-R { \
    top: 0px; \
    padding-top: 20px; \
    padding-left: 35px; \
    background-image: url('+exp.vars.NCcontentRImage+'); \
    background-repeat: no-repeat; \
    height: 212px; \
} \
.newOptions { \
    width: 700px; \
    font-size: 14px; \
    margin-right: 0px; \
    line-height: 20px; \
    padding-bottom: 0; \
} \
.onestepcheckout-threecolumns { \
    visibility: hidden; \
    position: absolute; \
    top: 0; \
} \
#shipping_address { \
    display: none; \
} \
#shipping_address_list .name-prefix { \
    padding-bottom: 0; \
} \
#shipping_address_list .input-box { \
    padding-bottom: 7px; \
} \
.perfect_close, .perfect_close2 { \
    width: 20px; \
    height: 20px; \
    position: absolute; \
    background: #98002e; \
    top: -10px; \
    right: -10px; \
    border-radius:10px; \
    -moz-border-radius:10px; \
    -webkit-border-radius:10px; \
    color: #fff; \
    line-height: 20px; \
    text-align: center; \
    font-size: 11px; \
    text-indent: 3px; \
} \
.perfect_popup, .perfect_popup2 { \
    border: 2px solid #98002e; \
    border-radius: 5px; \
    background: #fff; \
    position: fixed; \
    z-index: 999; \
    top: 40%; \
    left: 35%; \
    margin-left: -12px; \
    width: 30%; \
    padding:15px; \
    text-align:center; \
    font-size:18px \
} \
.newButton { \
  width: 700px; \
  margin-right: 0; \
} \
.newButton button { \
  float: left; \
  margin-right: 200px; \
} \
.onestepcheckout-place-order-message { \
  width: 400px; \
  float: left; \
} \
.bettys-footer-secure { \
  margin-left: 220px; \
  margin-top: 55px; \
  float: left; \
  position: static; \
  overflow: visible; \
} \
#shipping_address_list .name-prefix { \
  padding-bottom: 0; \
} \
#shipping_address_list .input-box { \
  padding-bottom: 7px; \
} \
.onestepcheckout-comments { \
    display: none; \
} \
/* css end */ ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
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

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
  
//Create new layout framework
$("<div class='newcheckout'><div class='NC-row NC-row-1'><div class='NC-heading'><div class='topheading'>1. Billing Address</div><div class='introText' style='padding-top:20px; font-size:14px;'>Please enter your details. Required information is indicated with a <span style='color:#98002E;'>*</span></div></div><div class='NC-content'><div class='NC-content-L newBilling'></div><div class='NC-content-R' style='font-size:16px; color:#98002E;display;none'>ALREADY HAVE AN ACCOUNT?<a id='onestepcheckout-login-link' href='javascript:void(0); return: false;'> <button class='button'><span><span>SIGN IN HERE</span></span></button></a></div></div></div><div class='NC-row NC-row-2'><div class='NC-heading'>2. Delivery Address</div><div class='NC-content newDelivery'></div></div><div class='NC-row NC-row-3'><div class='NC-heading'>3. Delivery Options</div><div class='NC-content newOptions'></div></div><div class='NC-row NC-row-4'><div class='NC-heading'>4. Secure Payment</div><div class='NC-content NC-sumadjust'><div class='NC-content-L newPayment'></div><div class='NC-content-R newSummary'></div></div><div class='NC-row NC-row-5'><div class='NC-heading'> &nbsp; </div><div class='NC-content newButton'><button type='button' title='Place Order' id='onestepcheckout-place-order' class='button large onestepcheckout-button onestepcheckout-place-order' onclick='javascript:void(0);'><span><span>PLACE ORDER</span></span></button></div></div></div></div><Br>").insertAfter("#onestepcheckout-form .group-select h2");

//Moving things
$("#billing_address").appendTo(".newBilling");
$(".onestepcheckout-column-left").appendTo(".newDelivery");
$(".payment-methods").appendTo(".newPayment");
$("div.onestepcheckout-summary").appendTo(".newSummary");
$(".onestepcheckout-place-order-message").appendTo(".newButton");

/**
 * Delivery address checkboxes
 */

$(".input-box.input-different-shipping").insertBefore("#shipping_address");
//$('.input-box.input-different-shipping input').attr('checked', true);
$("<div class='input-box number2'><input type='checkbox' name='number2' id='number2' value='1' class='radiobutton'/><label for='number2' style='padding-left:3px;'> Deliver to a different address</label></div>").insertAfter(".input-box.input-different-shipping");
$(".input-box.input-different-shipping input").addClass("radiobutton");
$(".input-box.input-different-shipping label").text("Deliver to my billing address");

$('.radiobutton').bind('click', function() {
    exp.log('clicked');
    $('.radiobutton').prop("checked", false);
    $(this).prop("checked", true);
    if( $("#number2").is(":checked") ) {
        $("#shipping_address").show(200);
//        $("#billing:use_for_shipping_yes").trigger( 'click' );
    }
});

//Delivery options - 1st open
  
$(".newOptions").html("Please complete steps 1 & 2 above, dates, prices and gift options will then be shown here. Thank you.<br><br>(As always your order will be beautifully packaged and delivered with our <a class='change_style' href='javascript:;'>Perfection Guarantee</a>)<br><br><div class='perfect_popup' style='display:none;'><div class='perfect_popup_in'><a class='perfect_close' href='javascript:;'>X</a><h4>PERFECTION GUARANTEE</h4><p>Your Bettys parcel is carefully packed by hand here in Yorkshire, to ensure it stays perfect. In the unlikely event that your goods are not fresh and perfect on arrival, we GUARANTEE to replace or refund at your convenience.</p></div></div>");    

$('.change_style').click(function(){
    $('.perfect_popup').css("display","block");
});

$('.perfect_close').click(function(){
    $('.perfect_popup').css("display","none");
});


  
/*******
//NEW INTERVENE IF LOGIN TAKES A LONG TIME - REFRESH PAGE
$("#onestepcheckout-login-button").click(function() {
  
  setTimeout(
  function() 
  {
    if ($("#onestepcheckout-login-error").attr("style") == "display: none;") 
    
    {setTimeout(
    function() 
    {
    if ($("#onestepcheckout-login-error").attr("style") == "display: none;") 
    
    {setTimeout(
    function() 
    {
    if ($("#onestepcheckout-login-error").attr("style") == "display: none;") 
    
    {location.reload();}
    
    }, 3000);}
    
    }, 3000);}
    
    }, 1000);
  
  
  });
  **/

  
// var expandBilling = setInterval(function(){expandCheck();}, 50);

$(".remember-label").html("Remember my card details so I can check out more quickly next time");
/*
$(".newButton").css({"width":"700px","margin-right":"0"});
$(".newButton button").css({"float":"left","margin-right":"200px"});
$(".onestepcheckout-place-order-message").css({"width":"400px","float":"left"});
$(".bettys-footer-secure").css({"margin-left":"220px","margin-top":"55px","float":"left","position":"static","overflow":"visible"});
$("#shipping_address_list .name-prefix").css("padding-bottom","0");
$("#shipping_address_list .input-box").css("padding-bottom","7px");
*/

// Apply CSS to options based on whether we are logged in or not
if ($(".links .last a").text() == "Log Out") {
  $(".newOptions").css({"width":"400px","font-size":"14px","margin-right":"0px"});
} else {
  $(".newOptions").css("width","700px");
}
  
  /*
function expandCheck () {

if ($(".onestepcheckout-shipping-method-block").html().length > 5000 || $("#billing\\:country_id").val() !== "GB" || $(".onestepcheckout-shipping-method-block:contains('Please enter a delivery address')").length != 1) {
    $("#billing_address_list li:nth-child(7), #billing_address_list li:nth-child(8), #billing_address_list li:nth-child(9), #billing_address_list li:nth-child(10), #billing_address_list li:nth-child(11), #billing_address_list li:nth-child(12), .onestepcheckout-enable-newsletter").css("display","block");
  
    clearInterval(expandBilling);
    var expandOptions = setInterval(function(){expandCheck2();}, 50);
  
    function expandCheck2 () {
  
      if ($(".radiobutton").attr("checked") =="checked" || $("#number2").attr("checked") =="checked") {
          clearInterval(expandOptions);
      }

    }
}
}
*/

/**
  //Start of stuff to do once billing address and Options is expanded
  var delMess = $(".full-atp .message").text() + $(".onestepcheckout-totals tbody tr:nth-last-child(3) .value .price").html();
  
  $(".newOptions").html(" ");
  
    $("<div class='warningText' style='display:none;'>Message warning text goes here</div><div class='showOptions'><div id='newDelivery'><span style='color:#98002E'>Your order will be delivered by <b><span id='newDate' style='color:#98002E'></span></b><br> via <b><span id='newMethod' style='color:#98002E'></span><span style='color:#98002E'> Delivery</span></b> (<span id='newPrice' style='color:#98002E'></span>)</span><br><br><a href='#join_form'><button disabled style='cursor:pointer;border-width:2px;' class='v2button'><span style='color:inherit;overflow:hidden; padding:10px;'><span style='background-image:none;0:none;color:inherit;padding-left:0;padding-right:0;font-size:13px;'><div style='float:left;margin-right:7px; height:18px; width:27px;' class='vanIcon'></div><div style='float:left; padding-top:3px;color:inherit;font-family:inherit;'>VIEW MORE DATES & OPTIONS<div></span></span></button></a><br><br><div class='awatick'> Beautifully packaged</div><div class='awatick'>Delivered with our <a class='change_styleB' href='javascript:;'>Perfection Guarantee</a></div></div><div class='perfect_popup2' style='display:none;'><div class='perfect_popup_in'><a class='perfect_close2' href='javascript:;'>X</a><h4>PERFECTION GUARANTEE</h4><p>Your Bettys parcel is carefully packed by hand here in Yorkshire, to ensure it stays perfect. In the unlikely event that your goods are not fresh and perfect on arrival, we GUARANTEE to replace or refund at your convenience.</p></div></div>").appendTo(".newOptions");
    
  if ($(".links .last a").text() == "Log Out") {$("#billing\\:use_for_shipping_yes").click();$("#billing\\:use_for_shipping_yes").attr("checked","checked");}
      
    
  //ON ie11 I NEED TO DISABLE DROP DOWN
  function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;
  else
    return 0; //It is not IE
    }
    if (GetIEVersion() > 0)
    {$("#dropDown select").attr('disabled', 'disabled');}
    
  
  $('.change_styleB').click(function(){$('.perfect_popup2').css("display","block");});$('.perfect_close2').click(function(){$('.perfect_popup2').css("display","none");});

  $(".awatick").css({"padding":"0px 0px 17px 30px","font-size":"13px","background-image":"url('//cdn.optimizely.com/img/14847832/f2f9b8bda86c404a81ea8252d09baa56.png')","background-repeat":"no-repeat","line-height":"25px"});
  
  $("#onestepcheckout-giftmessages, .onestepcheckout-comments").insertAfter("#newDelivery");
  
  $("<div class='input-box delComments' style='padding-bottom:15px;'><input type='checkbox' name='delComments' id='delComments' value='1' style='margin:0 12px 0 2px;'/><label for='delComments' style='padding-left:3px;'> Add extra delivery instructions for the courier</label></div>").insertBefore(".onestepcheckout-comments");
  
$(".newDelivery").hover(function(){
    $("a").css("text-decoration","none");
    },function(){
    $("a").css("text-decoration","none");
  });
  

*/

// Delivery comments checkbox
  
$("#delComments").click(function() {
    $(".onestepcheckout-comments").toggle();
});
  
/*
  //*****************MESSAGE*****************  
  setInterval(function(){ 
   if ($(".onestepcheckout-shipping-method-block:contains('We can deliver')").length === 0 && $(".onestepcheckout-shipping-method-block:contains('will be delivered on')").length === 0 ) { 

     $(".warningText").css({"display":"block"});
     
     $(".warningText").css({"line-height":"25px","font-size":"18px","border":"5px solid #D8D2C7","padding":"10px", "margin-bottom":"10px"});
          var newText = $(".onestepcheckout-shipping-method-block").html();
          $(".warningText").html(newText);
          $(".showOptions").css("display","none");    
            } 
    else {$(".warningText").css("display","none"); $(".showOptions").css("display","block");}  
   }, 100);
  
  
  
    //New loop
     setInterval(function () {
       
     var delMessNew = $(".full-atp .message").text() + $(".onestepcheckout-totals tbody tr:nth-last-child(3) .value .price").html();
     
       if (delMessNew != delMess) {
       // Do this when delivery is updated 
         
         var op1 = $(".onestepcheckout-shipping-method-block .full-atp .message strong:nth-child(1)").html();  
         var op2 = $(".onestepcheckout-shipping-method-block .full-atp .message strong:nth-child(2)").html();
         var op3 = $(".onestepcheckout-shipping-method-block .full-atp .message strong:nth-child(3)").html();
         var pr1 = $(".onestepcheckout-totals tbody tr:nth-last-child(3) .value .price").html();
         
         if (op3 !== null) {$("#newDate").html(op2);$("#newMethod").html(op3);}
         else if (op2 === null) {$("#newDate, #newPrice").html("");$("#newMethod").html("<img src='//cdn.optimizely.com/img/14847832/770b86aee1774a0a9ecefcb56a7e2a99.gif'>");}
         else {$("#newDate").html(op1);$("#newMethod").html(op2);}
         
         $("#newPrice").html(pr1);
         
         $(".onestepcheckout-totals tr td, .onestepcheckout-summary tr td, .onestepcheckout-summary tr th").css({"border-color":"#e5e5e5","border-width":"2px"});
         $(".NC-row-4").css("overflow","visible");
         $("table.onestepcheckout-summary").css("background-color","white");
         
          
         
       // End of do this when delivery is updated
       }
       
     delMess = $(".full-atp .message").text() + $(".onestepcheckout-totals tbody tr:nth-last-child(3) .value .price").html();
       
              
     }, 50);
  
    //end of new loop
  
  //End of stuff to do once billing address is expanded

else {
   $("#billing_address_list li:nth-child(7), #billing_address_list li:nth-child(8), #billing_address_list li:nth-child(9), #billing_address_list li:nth-child(10), #billing_address_list li:nth-child(11), #billing_address_list li:nth-child(12), .onestepcheckout-enable-newsletter").css("display","none");
  }

}*/
// ** END OF LOOPs **
  
//Hide things

$(".onestepcheckout-numbers-5, .onestepcheckout-description, p.onestepcheckout-login-link #onestepcheckout-login-link, .onestepcheckout-numbers-1, #billing_address ul li small, .input-fax, .dob").css("display","none");  

//NEW BITS FOR V2
  
  if ($(".links .last a").text() == "Log Out") {$(".NC-row-1 .NC-content .NC-content-R").css("display","none");}
  else {$(".NC-row-1 .NC-content-R").css("display","block");}
  
  
  //Automatically open other delivery address if place order is clicked and neither is selected - that way error messages diplay properly
  $("#onestepcheckout-place-order").click(function(){if($("#billing\\:use_for_shipping_yes").attr("checked") != "checked") {$("#shipping_address").css({"display":"block"});$("#number2").attr("checked","checked");}});
  
  //Also added Section 3 width reduction as default if signed in
  

  
    //else
    //{}
  
  $("#shipping_address_list div ul li .field.name-prefix").css("padding-bottom","0px");

  
// 
    $("#shipping_address_list .name-prefix").css("padding-bottom","0");
    $("#shipping_address_list .input-box").css("padding-bottom","7px");
  
  
  
//Style smaller elements once they're in place
  $(".input-lastname, .input-firstname, .input-telephone, .input-postcode, .input-company").css({"float":"left","width":"172px","margin-right":"21px"});
  $("#billing_address ul li").css("padding","0px");
  $("#billing_address ul li li, .onestepcheckout-column-left div, #payment_form_sagepaydirectpro ul li").css("padding-bottom","15px");
  $("#payment_form_sagepaydirectpro ul li").css("padding-bottom","10px");
  $(".NC-row").css({"border-top":"1px solid #D8D2C7","padding-top":"15px","overflow":"auto"});
  $(".NC-row-4").css({"overflow":"visible"});
  $(".newDelivery").css("padding-bottom","0px");
  $(".month").css({"width":"150px","margin-right":"19px"});
  $(".year").css("width","100px");
  $(".cvv").css("width","97px");
  $(".NC-row-5, .NC-sumadjust, .payment-methods").css({"padding-top":"0","border-top":"0"});
  $(".form-list.paymentsage").css("margin-bottom","0");
  $(".onestepcheckout-place-order-message").css("margin-top","50px");
  $(".payment-methods, .onestepcheckout-totals, .NC-sumadjust").css("margin-bottom","0");
  $(":checkbox").css("margin","0 12px 0 2px");
  $(".onestepcheckout-giftmessagecontainer").css("margin-bottom","17px");
  $(".button span span").css({"background-image":"none","padding-left":"25px","font-size":"16px"});
  $("#onestepcheckout-login-link .button span span").css({"background-image":"none","padding-left":"50px","padding-right":"50px","font-size":"16px"});
  $("#onestepcheckout-login-link .button").css("margin-top","15px");
  $("footer__bar_bottom clearfix").css({"height":"0","border":"0","margin":"0","padding":"0"});
  $(".NC-row-5 .NC-heading").css("padding-bottom","0px");
  
  //Form widths
  $("input[type=text], #billing\\:country_id, #sagepaydirectpro_cc_type").css("width","400px");
  $("#billing\\:country_id, #shipping\\:country_id").css("width","247px");
  $(".input-firstname, .input-telephone, .input-postcode, .input-company").css("width","200px");
  $("#sagepaydirectpro_cc_cid").css("width","97px");
  $(".input-lastname").css({"margin-right":"0px","width":"178px"});
  
  $("#allow-gift-message-container label").css("display","none");
  $(".onestepcheckout-comments").html('<textarea id="id_comments" name="onestepcheckout_comments" maxlength="30" style="width:325px;border-color:#D8D2C7;"></textarea><small class="small">e.g. "If not in leave with neighbour." <br>30 characters including spaces; applies to Standard &amp; Premium shipping only.</small>');
  
  

  
  
  
  $("<div class='ordSum' style='color:#98002E;font-size:16px; margin-bottom:15px; background-color:white; padding-top:20px'>Order summary</div>").prependTo(".newSummary");
  $(".onestepcheckout-totals tr td, .onestepcheckout-summary tr td, .onestepcheckout-summary tr th").css({"border-color":"#e5e5e5","border-width":"2px"});
  $(".NC-row-4, .NC-row-5").css("overflow","visible");
  $("table.onestepcheckout-summary").css("background-color","white");
  $(".footer").css({"padding-left":"20px","padding-right":"20px"});
  $(".footer__bar_bottom").css("border-bottom","solid 1px #D8D2C7");
  

  //ADDED NEW BITS HERE TO INCLUDE MORE FIELDS FOR V2****************

  //Bind this keypress function to all of the input tags
  $(".input-box, .input-text").keypress(function (evt) {
  //Deterime where our character code is coming from within the event
  var charCode = evt.charCode || evt.keyCode;
  if (charCode  == 13) { //Enter key's keycode
  return false;
  }
  });
  
  
  
  $("#myModal").css("visibility","visible");
  
  var sumHeight2 = $(".newSummary").css('height');
  if (sumHeight2 !== null) {
  var sumHeight = parseInt(sumHeight2,10);
  if (sumHeight > 380) { $(".newOptions").css({"width":"400px","font-size":"14px","margin-right":"0px"});}
  }
  
  $("#shipping_address .input-telephone small").html("This is the number we use for delivery queries and notifications. If you are sending a gift as a suprise, you may wish to enter your own number here.");
  
  $(".footer_bottom_text").html('<div style="width:715px;float:left"><p>Bettys is a registered trademark, and is a trading name, of Bettys &amp; Taylors of Harrogate Ltd, Plumpton Park, Harrogate, HG2 7LD, UK.<br>You may contact us with any queries or concerns on 0800 456 1919 (or +44 1423 814 008) or by email at <a href="mailto:customer.service@bettys.co.uk">customer.service@bettys.co.uk.<br></a></div>');
  
  $(".bettys-footer-secure").appendTo(".newButton");

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);