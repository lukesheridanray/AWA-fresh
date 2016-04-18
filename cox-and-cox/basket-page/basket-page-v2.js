// jshint multistr: true
// jshint jquery: true

/*

100% (50/50)

GA 3

"Revenue per Visitor
Number of Transactions
Clicks on ""Proceed to Checkout"" or ""Paypal"""



*/

var exp = (function($) {

var exp = {};

console.log('Basket page experiment - dev 0.1');

// Condition
exp.condition = $('.cart');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
exp.vars = {
    'continueShoppingURL': $('.continueshopping').length ? $('.continueshopping').attr('onclick').replace("setLocation('","").replace("')","") : '',
    'cardText': 'Credit and debit cards are not charged until the item<br />is shipped from our warehouse',
    'quantityCells': $('.cart-table .cart-quantity'),
    'removeButtonIterator': 0,
    'recalculateButton': $('.cart-table-footer .btn-update').clone(),
    'discountForm': $('#discount-coupon-form'),
    'cartTableFooter': $('.cart-table-footer td')
};

// Styles
exp.css = ' \
.page-title h1 { background: url(\'//cdn.optimizely.com/img/174847139/fdffa56e307f4e2e8723dbdcbbeec3a1.png\') left no-repeat transparent; line-height: 28px; padding-left: 30px; } \
.product-image img { width: 150px !important; height: auto !important; } \
.o-cont-shopping { clear: both; text-align: left; padding: 16px 0 0 0; } \
.o-cont-shopping a span { border-bottom: 1px dashed #9E9E9E; } \
.o-cont-shopping a:hover span, .o-cont-shopping a:focus span { border-bottom: 1px solid #9E9E9E; } \
.o-cont-shopping a:hover, .o-cont-shopping a:focus { text-decoration: none; } \
.cart-quantity { height: 114px !important; padding: 8px 0 0 0; } \
.o-remove-link { position: relative; top: 6px; } \
.cart-price { position: relative; left: 6px; } \
td:last-child .cart-price { left: 0; width: 70px; text-align: center; display: block; } \
.cart .discount { background: none !important; padding: 0 !important; width: 470px; height: 50px !important; margin: 0 !important; position: relative !important; float: right; } \
.discount-form .coupon-label { float: left; color: #7C7C7C; font-size: 1.1em !important; line-height: 50px !important; padding: 0 10px 0 0 !important; } \
.cart .discount .input-box { margin: 11px 0 0 0 !important; float: left !important; width: 130px !important; } \
.cart .discount input.input-text { font-size: 1.4em !important; width: 120px !important; } \
.cart .discount .buttons-set { position: absolute; top: 0; right: 0; } \
.cart .discount .buttons-set button.button { \
filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); \
filter: gray; -webkit-filter: grayscale(100%); } \
.o-cart-footer { width: 100%; padding: 0 0 20px 0; } \
.o-cart-footer p { float: right; text-align: left; } \
.cart-table-footer .btn-update { float: left; !important; position: relative; top: 8px; } \
.o-cart-footer .btn-continue span { background: none !important; } \
.cart .totals { height: auto !important; min-height: 100px; } \
.o-cart-footer .btn-continue { background: url("/skin/frontend/default/coxampcox/images/continue-shopping.png") no-repeat scroll 0% 0% transparent; width: 160px; } ';

// Init function
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    $('.title-buttons:eq(0) .checkout-types, #footer .container:eq(0), .cart p:eq(0)').remove();
    
    $('.page-title.title-buttons:eq(0)').append('<div class="o-cont-shopping"><a href="'+this.vars.continueShoppingURL+'">&laquo; <span>Continue Shopping</span></a></div>');
    
    $('.cart-collaterals').append('<div class="o-cart-footer"><p>'+this.vars.cardText+'</p></div>');
    
    $('.cart-table-footer .btn-continue').appendTo( $('.o-cart-footer') );
    
    $('th:last-child').remove();
    
    $('.cart-collaterals .col-1').remove();
    
    $('.btn-remove.btn-remove2').each(function(){
        var self = $(this);
        var href = self.attr('href');
        var quantityCell = $( exp.vars.quantityCells[exp.vars.removeButtonIterator] );
        quantityCell.append('<span class="o-remove-link"><a href="'+href+'">Remove</a></span>');
        exp.vars.removeButtonIterator++;
    });
    
    $('td.a-center.last').remove();
    
    this.vars.cartTableFooter.attr('colspan','5').html('');
    //this.vars.cartTableFooter.prepend( this.vars.recalculateButton );
    
    this.vars.discountForm.appendTo( this.vars.cartTableFooter );
    this.vars.discountForm.find('h2').remove();
    this.vars.discountForm.find('p.coupon-label').remove();
    
    this.vars.discountForm.find('label.coupon-label').text('Enter Media Code / Discount Voucher:');
    
    $('.product-description').each(function(){
        var self = $(this);
        var desc = self.html();
        var match = desc.match('(<p>)(.*)(</p>)');
        self.html( match[0] );
    });
    
    $('.cart-head th').has('span').each(function(){
        var self = $(this);
        var text = self.text();
        self.find('span').remove();
        self.append(text);        
    });
    
    $('.page-title h1').html('Secure Shopping Basket');

};

// Run the experiment
exp.init();

return exp;

})(jQuery);