// jshint multistr: true
// jshint jquery: true

var exp = (function($) {

var exp = {};

console.log('Guest checkout - dev - login page v0.2');
    
exp.condition = location.search.indexOf('target=payment_PAGE');

// Variables
exp.vars = {
    'viewBasketButton' : $('.chkoutviewbasketbtn').clone(),
    'errorMessages' : $('.errormessageinline')
};

// Styles
exp.css = ' \
.chkotLeftSect { float: none; margin: 0 auto; width: 710px; } \
.loginCONTAINER { border: 0; } \
.label { text-align: right; position: relative; left: 5px; } \
.exsitingcs, .newcs { border: 1px solid #ddd; margin: 0 10px !important; min-height: 162px; padding-top: 10px !important; background: #f5f5f5; } \
.logform ul li.button { width: 167px; } \
.forgotPasslink { float: left; } \
.o-float-right { float: right; clear: none !important; } \
#holderARTICLE .forgotPasslink ul li { line-height: 28px; } \
.loginCONTAINER h2 { border-bottom: 0; } \
.o-login-note { float: right; width: 167px; padding: 5px 0 0 0; display: inline-block; } \
.chkoutviewbasketbtn { display: none !important; position: static; margin-right: 10px; } \
.loginCONTAINER { background-color: #fff !important; } \
/* #holderARTICLE .errormessageinline { width: 710px !important; text-align: center; padding: 0 10px 10px 10px !important; } */ ';

// Functions
exp.func = exp.func || {};

// Init function
exp.init = function() {
    
    // check condition
    if(this.condition === -1) {
        return false;
    }
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // DOM manipulation...
    
    $('.chkotRightSect').remove();
    
    $('.exsitingcs h2').html( 'Returning Customers' );
    
    $('.newcs h2').html( 'Guest Checkout' );
    
    $('.logform ul:first-child .label label').html( 'Email: ' );
    
    $('.exsitingcs ul:first-child .label img').clone().appendTo( $('.newcs ul:first-child .label') );
    
    $('.newcs').append( '<span class="o-login-note">(You will have the option to create an account)</span>' );
    
    $('.forgotPasslink li:first-child a').text( 'Forgot Password?' );
    
    $('.forgotPasslink li:last-child').remove();
    
    $('.exsitingcs ul:eq(2)').addClass( 'o-float-right' ).before( $('.forgotPasslink') );
    
    $('.loginCONTAINER').append( this.vars.viewBasketButton );
    /*
    if(this.vars.errorMessages) {
        this.vars.errorMessages.each(function(){
            $(this).parent('ul').prependTo('.loginCONTAINER');
        });
    }
    */

};

return exp;

})(jQuery);

exp.init();