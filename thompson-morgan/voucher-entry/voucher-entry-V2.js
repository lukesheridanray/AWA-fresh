function (options) {

// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {};

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.log('T&M - Voucher entry');

    // Variables

    AWA.var = {
        $promoVoucher: $('#promovoucherContainer .voucherField'),
        $giftVoucher: $('#vouchercodeContent .voucherField'),
        inputsTemplate: '<div class="awa-proxy-fields">\
                            <input type="text" value="" data-awa-limit="4" class="tb0" />\
                            <span class="awa-proxy-dash">-</span>\
                            <input type="text" value="" data-awa-limit="4" class="tb1" />\
                            <span class="awa-proxy-dash">-</span>\
                            <input type="text" value="" data-awa-limit="4" class="tb2" />\
                            <span class="awa-proxy-dash">-</span>\
                            <input type="text" value="" data-awa-limit="4" data-awa-last="1" class="tb3" />\
                            <a href="#" class="button awa-proxy-button">Apply voucher</a>\
                        </div>'
    };

    // Functions

    AWA.func = {};

    // Adds the proxy fields for voucher entry
    // @param {object} jQuery object referring to group of input fields
    AWA.func.addFields = function($inputGroup) {

        var $input = $inputGroup.find('input:eq(0)');
        var $submit = $inputGroup.find('.button');
        var $addedVoucher = $inputGroup.find('.addedVoucher');

        if($addedVoucher.length !== 0 && $inputGroup.parent('#vouchercodeContent').length === 0) {
            // dont add field if a promo code has been added
            return;
        }

        // add HTML
        $inputGroup.find('input').eq(0).before(AWA.var.inputsTemplate);

        // Add data to parent div
        $inputGroup.find('.awa-proxy-fields').data('awa-proxy-target', $input);

        // Add event listeners to input fields
        $inputGroup.find('.awa-proxy-fields input')
            .bind('change keyup', AWA.func.syncFields)
            .bind('keyup', AWA.func.limitFields);

        // Add event listener to button
        $inputGroup.find('.awa-proxy-button')
            .data('awa-proxy-target', $submit)
            .bind('click', AWA.func.submitFields);

    };

    // Binds the proxy fields to the real field
    AWA.func.syncFields = function() {

        var $parent = $(this).parent('.awa-proxy-fields');
        var code = '';

        $parent.find('input').each(function(){
            code += $(this).val();
        });

        $parent.data('awa-proxy-target').val(code);

    };

    // Submits the input by triggering a click on the real button
    // @param {object} e DOM event object
    AWA.func.submitFields = function(e) {

        e.preventDefault();
        $(this).data('awa-proxy-target').trigger('click');

    };

    // Function to limit the fields
    AWA.func.limitFields = function() {

        var $self = $(this);
        var currentVal = $self.val();

        if(currentVal.length < 4) {
            return;
        }

        if(currentVal.length > 4) {
            $self.val( currentVal.slice(0,4) );
        }

        $self.nextAll('input').eq(0).focus();

    };








    // CSS

    AWA.css = ' \
    #promovoucherContainer .voucherField > input,\
    #vouchercodeContent .voucherField > div > input {\
        display: none;\
    }\
    #promovoucherContainer .voucherField > .addedVoucher,\
    #vouchercodeContent .voucherField > div > .addedVoucher {\
        display: block;\
    }\
    .voucherActionMessage .error {\
        display: block;\
        clear: both;\
    }\
    .awa-proxy-button {\
        background: #B70719;\
        padding: 0.5em;\
        color: #fff !important;\
        font-weight: bold;\
        position: relative;\
        top: 10px;\
    }\
    .awa-proxy-button:after {\
        content: "";\
        width: 8px;\
        height: 11px;\
        margin: 0 0 0 10px;\
        position: relative;\
        top: 1px;\
        display: inline-block;\
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAIAAADN+VtyAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AYUDwgZLUXhvwAAALpJREFUGNNjvJpX+eXG7XeHjjH8/8+ABJjEA7wMFk8T83ZlYmdDkfjz4SObmKjh8tnKlYXs4mIICQjFyMqqXJGvM7OX39QQKvNq667/SOD746dXcsr3KxszvNlz8D8GuJJZwvLv929kO3+9eft41qL3x06x/PvxEy764dTZe12TX23ZxcDAwPL/3z+I6ON5Sx/0T/96+x6Ey8ImJvL32/cbZQ3PV2348+kzXDfjzbr27/cePF+9iQEVAAAD8G0hc4dj/QAAAABJRU5ErkJggg==");\
        background-position: 0 0;\
        background-repeat: no-repeat;\
    }\
    .awa-proxy-fields {\
        padding-bottom: 20px;\
    }\
    .awa-proxy-fields input {\
        width: 20%;\
        box-sizing: border-box;\
        margin: 0;\
        font-size: 1.1em;\
    }\
    .awa-proxy-dash {\
        width: 3.5%;\
        text-align: center;\
        display: inline-block;\
    }\
    ';

    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Main experiment code


    //////******hopeful fix for the voucher


    jQuery('#promovoucherContainer').find('.tb1').attr('id', 'mypaste1');
    jQuery('#promovoucherContainer').find('.tb2').attr('id', 'mypaste2');
    jQuery('#promovoucherContainer').find('.tb3').attr('id', 'mypaste3');






    // Add the fields
    AWA.func.addFields(AWA.var.$promoVoucher);
    AWA.func.addFields(AWA.var.$giftVoucher);
//Fix for first voucher being able to paste in!

})(jQuery); // vwo_$ || optimizely.$










    // give the promovoucherContainer intpus an Id
    function pasteIn() {
      jQuery('#promovoucherContainer').find('.tb0').attr('id', 'mypaste0');
         jQuery('#promovoucherContainer').find('.tb1').attr('id', 'mypaste1');
    jQuery('#promovoucherContainer').find('.tb2').attr('id', 'mypaste2');
    jQuery('#promovoucherContainer').find('.tb3').attr('id', 'mypaste3');

    jQuery("#mypaste0").bind("paste",function(){
 var element = this;
  setTimeout(function () {
    var splittedString = $("#mypaste0").val().match(/.{1,4}/g);
    for(var i=0; i<splittedString.length; i++){
        $("#mypaste" + i).val(splittedString[i]);
    }
    // do something with text
    }, 0);
    })





  ////////////fixed the voucher problem. Should all work now. Tested on Friday september 16
      console.log('two-paste-work');
      jQuery('#vouchercodeContent').find('.tb0').attr('id', 'tb0');
         jQuery('#vouchercodeContent').find('.tb1').attr('id', 'tb1');
    jQuery('#vouchercodeContent').find('.tb2').attr('id', 'tb2');
    jQuery('#vouchercodeContent').find('.tb3').attr('id', 'tb3');

    jQuery("#tb0").bind("paste",function(){
 var element = this;
  setTimeout(function () {
    var splittedString = $("#tb0").val().match(/.{1,4}/g);
    for(var i=0; i<splittedString.length; i++){
        $("#tb" + i).val(splittedString[i]);
    }
    // do something with text
    }, 0);
    })


  }

   return pasteIn();



}
