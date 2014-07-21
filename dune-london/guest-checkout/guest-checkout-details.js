// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

console.log('Guest checkout - dev - details page v0.1');

exp.condition = $('.bsryitems');

// Variables
exp.vars = {
    'viewBasketButton' : $('.chkoutviewbasketbtn').clone(),
    'processImgOn': '//cdn.optimizely.com/img/174847139/763665de7b854d1eb748898e0b6c21ff.png',
    'processImgOff': '//cdn.optimizely.com/img/174847139/9673716578b44a2e914cae8a1f390005.png',
    'custregiwrapper': $('.custregiwrapper'),
    'continueButton': $('<div class="sectbox"><ul style="float:right"> \
	                      <li class="button"><a class="corebtn o-continue-button">Continue</a></li> \
                       </ul></div>'),
    'helpBlurb': $('<div class="o-help-blurb"> \
                      <p>NEED HELP?</p> \
                      <p>Phone us on 0116 284 7800<br /> \
                      Email <a href="mailto:customerservice@dunelondon.com">customerservice@dunelondon.com</a></p> \
                  </div>')
};

exp.vars.processHeader = ' \
    <div class="paymentprocessheader"> \
        <ul> \
            <li class="o-process-details"><img src="'+exp.vars.processImgOn+'" width="166" height="22"><span class="label">Your Details</span></li> \
            <li class="o-process-address"><img src="'+exp.vars.processImgOff+'" width="166" height="22"><span class="label">Address</span></li> \
            <li class="o-process-delivery"><img src="'+exp.vars.processImgOff+'" width="166" height="22"><span class="label">Delivery</span></li> \
            <li class="o-process-review"><img src="'+exp.vars.processImgOff+'" width="166" height="22"><span class="label">Order Review</span></li> \
            <li class="o-process-payment"><img src="https://www.dunelondon.com/images/core/chk_rocess_03.png?Lo0P=6c65e36e6f362aeab81620851030a1fb244"><span class="label pymt">Payment</span></li> \
        </ul> \
   </div>';

// Styles
exp.css = ' \
.chkotLeftSect { float: none; margin: 0 auto; width: 352px; overflow:hidden; } \
.custregiwrapper { border: 0; width: 1062px; position: relative; left: 0; \
-webkit-transition: left 0.5s ease; \
-moz-transition: left 0.5s ease; \
transition: left 0.5s ease; \
} \
.prefdesc { font-size: 1.1em !important; } \
#holderARTICLE p.o-billing-address-note { padding-top: 0 !important; position: relative; top: -15px } \
.sectbox ul li.button a.corebtn { margin-bottom: 10px; } \
.sectbox .o-delivery-options-note { padding-left: 90px !important; position: relative; top: -10px; font-size: 0.9em; } \
.custregicol3 { padding: 20px 20px 0px; width: 290px; float: left; overflow: hidden; } \
.custregipassrow h3,.sectbox.accopentxt { display: none; } \
.o-continue-button { cursor: pointer; margin-bottom: 10px; } \
.label { text-align: right; position: relative; left: -10px; } \
.custregipassrow .label { left: -8px; } \
.sectbox ul li.theform input.textFieldNoWidth { width: 190px !important; } \
.selectboxit-container .selectboxit { width: 198px; } \
#holderARTICLE .o-help-blurb p { color: #666; margin: 0 0 10px 10px; } \
#holderARTICLE .o-help-blurb { margin: 20px 0 0 0; } \
.custregiwrapper.next { left: -352px; } \
.custregiwrapper.extra { left: -704px; } \
.custregicol1, .custregicol2, .custregicol3 { border: 1px solid #ddd; margin: 0 10px !important; min-height: 162px; padding-top: 10px !important; background: #f5f5f5; } \
.logform ul li.button { width: 167px; } \
.forgotPasslink { float: left; } \
#bill_add_holder.o-display-block { display: block !important; } \
.o-float-right { float: right; clear: none !important; } \
#holderARTICLE .forgotPasslink ul li { line-height: 28px; } \
.custregiwrapper h3 { border-bottom: 0; } \
.o-login-note { float: right; width: 167px; padding: 5px 0 0 0; display: inline-block; } \
.chkoutviewbasketbtn { position: static; margin-right: 10px; } \
.paymentprocessheader { width: 100%; position: relative; left: 75px; } \
.paymentprocessheader li:first-child { position: relative; } \
.paymentprocessheader .label { left: 0 !important; } \
.sectbox ul li.chkbx { width: 90px; } \
.sectbox ul li.chkbx input { float: right; margin-right: 10px; } \
.sectbox ul li.prefdesc { width: 190px; } \
.paymentprocessheader li:first-child:before { content: ""; position: absolute; top: 0; left: 0; background: #fff; width: 74px; height: 23px; display: block; } \
/* #holderARTICLE .errormessageinline { width: 710px !important; text-align: center; padding: 0 10px 10px 10px !important; } */ ';

    
// Functions
exp.func = exp.func || {};
    
exp.func.tabNext = function() {
    exp.vars.custregiwrapper.addClass('next');
    $('.o-process-details img').attr('src', exp.vars.processImgOff);
    $('.o-process-address img').attr('src', exp.vars.processImgOn);
}
    
exp.func.tabPrev = function() {
    exp.vars.custregiwrapper.removeClass('next extra');
    $('.o-process-details img').attr('src', exp.vars.processImgOn);
    $('.o-process-address img').attr('src', exp.vars.processImgOff);
}
    
exp.func.tabExtra = function() {
    exp.vars.custregiwrapper.addClass('extra');
    $('.custregicol2 li.button').parent('ul').parent('div').appendTo('.custregicol3');
}

exp.func.focusOnErrors = function() {
    $('.errormessageinline').each(function() {
        var _this = $(this);
        var _match = _this.text().match(/(The)(.*?)(should be)/);
        if( _match ) {
            _this.text( 'Please enter '+_match[2]+' to continue.' );;
        }
    });
    
    if( $('.custregicol1 .errormessageinline').length) {
        return false;
    } else if( $('.custregicol2 .errormessageinline').text() != '' || $('.memberresigerederror').length ) {
        exp.func.tabNext();
    }
    return false;
}

// Init function
exp.init = function() {
    
    // check condition
    if(!this.condition.length) {
        return false;
    }
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // DOM manipulation...
    
    $('.chkotRightSect').remove();
    
    $('.paymentprocessheader').replaceWith( this.vars.processHeader );
    
    $('.custregiwrapper').after( this.vars.helpBlurb );
    
    $('.custregiwrapper').append( '<div class="custregicol3"><h3>Delivery address</h3></div>' );
    
    $('.prefdesc:eq(0)').html( '<label for="email_list">Please keep me informed about offers, sales and events</label>' );
    
    $('.custregicol1 h3:eq(1), .custregicol1 .sectbox:eq(1)').prependTo( '.custregicol2' );
    
    //$('#titleSelectBoxItText').text( 'Select...' ).attr('data-val', '' );
    
    $('.custregipassrow').appendTo( $('.custregicol1') );
    
    $('.custregipassrow .prefdesc').html( '<label for="chkRegister">Create an account for faster checkout next time</label>' );
    
    $('.custregicol2 h3:first-child').after( '<p class="o-billing-address-note">This must match your card statement address.</p>' );
    
    $('.sectbox.nomb').replaceWith( '<div class="sectbox"><ul> \
                                      <li class="chkbx"><input name="delopt" id="delopt" value="Y" checked="checked" type="checkbox"></li> \
                                      <li class="prefdesc">Deliver to this address</li> \
                                     </ul></div>' );
    
    $('.custregicol2 li.button').parent('ul').before('<ul class="o-delivery-options-note"><li>(Delivery options available in the following step)</li></ul>')
    
    $('#delopt').bind('change',function(){
        if($(this).is(':checked') ) {
        } else {
            exp.func.tabExtra();
            $(this).before('<input name="delopt" id="delopt" value="N" type="hidden">');
            $(this).attr('name','deloptDummy');
        }
    });
    
    $('#bill_add_holder').appendTo( $('.custregicol3') );
    $('#bill_add_holder').addClass('o-display-block');
    $('#bill_add_holder').after( '<div class="sectbox"><ul> \
                                      <li class="chkbx"><input name="prepopFields" id="prepopFields" value="1" type="checkbox"></li> \
                                      <li class="prefdesc">Deliver to billing address</li> \
                                     </ul></div>' );
    
    $('#prepopFields').bind('change',function(){
        if($(this).is(':checked') ) {
            $('select#del_Country').data('selectBox-selectBoxIt').selectOption( $('select#Country').val() );
            $('select#del_title').data('selectBox-selectBoxIt').selectOption( $('select#title').val() );
            $('#del_firstname').val($('#reg_firstname').val());
            $('#del_surname').val($('#reg_surname').val());
            $('#del_email').val($('#reg_email').val());
            $('#del_phone').val($('#reg_phone').val());
            $('#del_ajax_postcode').val($('#ajax_postcode').val());
            $('#del_address1').val($('#address1').val());
            $('#del_address2').val($('#address2').val());
            $('#del_address3').val($('#address3').val());
            $('#del_address4').val($('#address4').val());
            $('#del_address5').val($('#address5').val());
        } else {
            $('#bill_add_holder input').each(function(){
                $(this).val('');
            });
        }
    });
    
    $('.sectbox.accopen ul:eq(1) .label label').text( 'Create password' );
    
    $('.sectbox.accopentxt').replaceWith( '<div class="sectbox"><ul class="o-chkbx-wrap"><li class="chkbx"> \
                                            <input name="chkPrivacyDummy" id="chkPrivacyDummy" value="1" type="checkbox"></li> \
                                            <li class="prefdesc"><label for="mail_list">I agree to the <u><a href="javascript:showPopupA(\'dune_privatepolicy\');">privacy policy</a></u>.</label></li> \
                                           </ul></div>');
    
    $('.sectbox.accopen ul:eq(1),.sectbox.accopen ul:eq(2),.custregipassrow ul:last-child').hide(0);
    
    $('#chkRegister').bind('change',function(){
        if($(this).is(':checked') ) {
            $('.sectbox.accopen ul:eq(1),.sectbox.accopen ul:eq(2),.custregipassrow ul:last-child').show(0);
        } else {
            $('.sectbox.accopen ul:eq(1),.sectbox.accopen ul:eq(2),.custregipassrow ul:last-child').hide(0);
        }
    });
    
    this.vars.continueButton.appendTo( '.custregicol1' );
    
    this.vars.continueButton.bind('click',function(e){
        e.preventDefault();
        if ( $('#chkRegister').is(':checked') && $('#chkPrivacyDummy').prop('checked') === false ) {
            $('.o-chkbx-wrap').after( '<ul><li><div class="errormessageinline"> \
                                     If you are creating an account you must agree to the privacy policy. \
                                     </div></li></ul>' );
        } else {
           exp.func.tabNext();
        }
    });
    
    this.func.focusOnErrors();

};

return exp;

})(jQuery);

exp.init();