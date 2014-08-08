// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

console.log('Guest checkout - dev - delivery page v0.4');

exp.condition = $('.bsryitems');

// Variables
exp.vars = {
    'viewBasketButton' : $('.chkoutviewbasketbtn').clone(),
    'processImgOn': '//cdn.optimizely.com/img/174847139/763665de7b854d1eb748898e0b6c21ff.png',
    'processImgOff': '//cdn.optimizely.com/img/174847139/9673716578b44a2e914cae8a1f390005.png',
    'custregiwrapper': $('.paymentpageholder'),
    'continueButton': $('<div class="sectbox"><ul style="float:right"> \
                          <li class="button"><a class="corebtn o-continue-button">Continue</a></li> \
                       </ul></div>'),
    'helpBlurb': $('<div class="o-help-blurb"> \
                      <p>NEED HELP?</p> \
                      <p>Phone us on 0333 240 73 06<br /> \
                      Email <a href="mailto:customerservice@dunelondon.com">customerservice@dunelondon.com</a></p> \
                  </div>')
};

exp.vars.processHeader = ' \
    <div class="paymentprocessheader"> \
        <ul> \
            <li class="o-process-details"><img src="'+exp.vars.processImgOff+'" width="166" height="22"><span class="label">Your Details</span></li> \
            <li class="o-process-address"><img src="'+exp.vars.processImgOff+'" width="166" height="22"><span class="label">Address</span></li> \
            <li class="o-process-delivery"><img src="'+exp.vars.processImgOn+'" width="166" height="22"><span class="label">Delivery</span></li> \
            <li class="o-process-review"><img src="'+exp.vars.processImgOff+'" width="166" height="22"><span class="label">Order Review</span></li> \
            <li class="o-process-payment"><img src="https://www.dunelondon.com/images/core/chk_rocess_03.png?Lo0P=6c65e36e6f362aeab81620851030a1fb244"><span class="label pymt">Payment</span></li> \
        </ul> \
   </div>';

// Styles
exp.css = ' \
.termstext, .pmytlogos { display: none; } \
.tabWrapper { float: none; margin: 0 auto; width: 376px; overflow:hidden; } \
.paymentpageholder { border: 0; width: 1062px; position: relative; left: 0; } \
.paymentpageholder.next { left: -352px !important; } \
.paymentpageholder.extra { left: -704px; } \
.paymentpageholder { \
-webkit-transition: left 0.5s ease; \
-moz-transition: left 0.5s ease; \
transition: left 0.5s ease; \
} \
.addjax h3 { text-transform: uppercase; font-weight normal !important; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #ccc; } \
.chkotRightSect { float: left !important; margin-left: 10px !important; } \
.deloptblk { padding-top: 10px !important; } \
.delmethodsbx h4 { padding-bottom: 10px !important; } \
.deloptwrapper { position: relative !important; } \
.delmethodsbx { padding-bottom: 30px !important; position: absolute !important; top: 65px !important; left: 25px !important; } \
.addblk .contcol { margin-left: 95px !important; padding-top: 10px; padding-bottom: 30px } \
.chkotRightSect { padding: 10px 10px 15px 10px !important; width: 270px !important; float: left !important; margin: 0 30px 10px 30px !important; border: 1px solid #DDD !important; } \
.chkotRightSect .bsryitems .basketSummaryContent { width: 158px !important; position: relative; left: 10px; } \
.basketSummaryContent_image { position: relative !important; left: 5px !important; } \
.chkotRightSect .bsryitems .basketSummaryTotals ul { width: 268px !important} \
.chkotRightSect .bsryitems .basketSummaryTotals ul li { left: 0 !important; } \
.delmethodsbx p { display: none; } \
.delmethodsbx h4 { text-transform: uppercase !important; } \
.addblk h4 { text-transform: uppercase !important; clear: both !important; } \
.addblk .labelcol { float: none !important; padding-bottom: 10px; } \
.addblk { position: relative; top: 75px; padding-bottom: 50px !important; } \
.addblk .addblk_addupdate { position: absolute; top: 0; right: 0; } \
.delrowbox.billopt { display: none; } \
.delrowbox.delopt { border-left: 0; } \
.chkoutviewbasketbtn { display: none !important; } \
.basketSummaryTotals { border-bottom: 1px solid #CCC !important; } \
.pmytact ul li.termstext,.pmytact .pmytlogos { display: none !important; } \
.bsktmessage { border-top: 0 !important; } \
.pmytact { padding: 10px 0 !important; } \
.bsktmessage { font-size: 1em !important; padding: 0 !important; } \
.prefdesc { font-size: 1.1em !important; } \
#div_order_now_vsp .corebtn { width: 100px !important; float: right; }  \
#holderARTICLE p.o-billing-address-note { padding-top: 0 !important; position: relative; top: -15px } \
.sectbox ul li.button a.corebtn { margin-bottom: 10px; } \
.sectbox .o-delivery-options-note { padding-left: 90px !important; position: relative; top: -10px; font-size: 0.9em; } \
.custregicol3 { padding: 20px 20px 0px; width: 290px; float: left; overflow: hidden; } \
.custregipassrow h3,.sectbox.accopentxt { display: none; } \
.o-continue-button { cursor: pointer; margin-bottom: 10px; position: absolute; bottom: 0; right: 20px; } \
.delrowbox.delopt { padding-bottom: 20px !important; } \
.label { text-align: right; position: relative; left: -10px; } \
.custregipassrow .label { left: -8px; } \
.sectbox ul li.theform input.textFieldNoWidth { width: 190px !important; } \
.selectboxit-container .selectboxit { width: 198px; } \
#holderARTICLE .o-help-blurb p { color: #666; margin: 0 0 10px 10px; } \
#holderARTICLE .o-help-blurb { margin: 20px 0 0 10px; } \
.chkotLeftSect { width: 347px; } \
.deloptwrapper { padding: 10px 20px 0 0 !important; width: 290px !important; float: left !important; overflow: visible !important; \
border: 1px solid #ddd !important; margin: 0 10px !important; min-height: 162px !important; background: #f5f5f5 !important;} \
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
    $('.paymentpageholder').addClass('next');
    $('.o-process-delivery img').attr('src', exp.vars.processImgOff);
    $('.o-process-review img').attr('src', exp.vars.processImgOn);
}
    
exp.func.tabPrev = function() {
    $('.paymentpageholder').removeClass('next extra');
    $('.o-process-delivery img').attr('src', exp.vars.processImgOn);
    $('.o-process-review img').attr('src', exp.vars.processImgOff);
}
    /*
exp.func.tabExtra = function() {
    exp.vars.custregiwrapper.addClass('extra');
    $('.custregicol2 li.button').parent('ul').parent('div').appendTo('.custregicol3');
}
*/
exp.func.focusOnErrors = function() {
    $('.errormessageinline').each(function(){
        var _this = $(this);
        var _match = _this.text().match(/(The)(.*?)(should be)/);
        if( _match ) {
            _this.text( 'Please enter '+_match[2]+' to continue.' );;
        }
    });
    
    if( $('.custregicol1 .errormessageinline').length ) {
        return false;
    } else if( $('.custregicol2 .errormessageinline').text() != '' ) {
        exp.func.tabNext();
    }
    return false;
}

// Init function
exp.init = function() {
  
    // unhide content area
    $('#holder_CENTREFULL').show(0);
    
    // check condition
    if(!this.condition.length) {
        return false;
    }
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');
    
    $( '#ajaxaddresswindow' ).appendTo( 'body' );

    // DOM manipulation...
    
    $('.paymentprocessheader').replaceWith( this.vars.processHeader );
    
    $('.delopt .addblk .addblk_addupdate a').text('change address');
    
    $('.delmethodsbx h4, .addblk h4').append(':');
    
    $('.bsrytitle').text('Review your order');
    
    $('.bsktmessage').html( 'Return any item for a full refund.<br />Returns are FREE via Collect+ and Royal Mail' );
    
    $('.bsktmessage').before( $('.pmytact') );
    
    $('.paymentpageholder').wrap('<div class="tabWrapper" />');
    
    $('.paymentpageholder').after( this.vars.helpBlurb );
    
    $('.delrowbox.delopt').append( this.vars.continueButton );
    
    this.vars.continueButton.bind('click',function(e) {
        e.preventDefault();
        exp.func.tabNext();
    });
    
    $('.chkotLeftSect .outlinedbtn').parent('div').remove();
    
    //$('.itemremove a').appendTo( $('.basketSummaryContent_image') );
    
    $('#div_order_now_vsp a').text('Continue');
    
    $('.delmethodsbx select').html( $('.delmethodsbx select').html().replace('UK Standard Delivery (2 - 5 working days) (£3.50)','UK Standard Delivery (2 - 5 working days : £3.50)') );
    
    $('.delmethodsbx select').data('selectBox-selectBoxIt').refresh();

};

return exp;

})(jQuery);

exp.init();