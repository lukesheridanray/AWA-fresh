//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var ctm_basket_page_experiment = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('CTM Basket Page - 0.3');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('body.quote-quote-view');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'elementsToRemove': [
        $('ul#quote-nav li.li-email'),      // "Email" button at the top of the page
        $('ul#quote-nav li.li-remove-all')  // "Remove all items" button at the top of the page
    ],
    'quoteNav': $('ul#quote-nav'),

    'buyButtonContainer': $('div#order-buy-now'),
    'buyButton': $('div#order-buy-now a.btn-block.buy-now-btn'),
    'newBuyButtonLabelHTML': '<i class="fa fa-lock"></i> Secure Checkout',

    'quoteView_table': $('#quote-viewer .column-left'),
    'quoteView_orderSummary': $('#quote-viewer .column-right'),

    'quoteRef': $('.quote-ref-container #quote-ref-well'),

    'cartThumbnails': $('body #cart tbody td.cart-image img'),

    'emailAsQuoteLink': $('.customEmailQuoteButton'),
    'emailAsQuoteText': 'Email this quote',

    'linksColumn': $('<div class="col-md-8"></div>'),
    'linksList': $('<ul id="AWA_linksList" class="list-unstyled print-hide"></ul>'),
    'deliveryListItem': $('<li><a data-toggle="modal" data-target="#AWA_DeliveryCostsModal" href="#">Delivery costs</a></li>'),
    'deliveryListModal': $('<div class="modal fade" id="AWA_DeliveryCostsModal" tabindex="-1"> \
            <div class="modal-dialog"> \
                <div class="modal-content"> \
                    <div class="modal-header"> \
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> \
                        <h4 class="modal-title">Delivery costs</h4> \
                    </div> \
                    <div class="modal-body"> \
                        <p>Your delivery cost will be added when you check out.</p> \
                        <p>There is a flat rate of R399 per ton for delivery to addresses within Gauteng, Cape Town, and Durban. </p> \
                        <p>Delivery to outlying areas is calculated individually, and varies depending on where you live and the weight of the order. You will have a chance to view your delivery costs before you pay. </p> \
                        <p>If you have any queries, just call us on  <a href="tel:0861433337">0861 433  337</a></p> \
                        <h4>Fast, secure delivery</h4> \
                        <p>All delivery costs include tracking, insurance and unloading your goods at ground floor level on arrival, and we normally deliver your online orders within two working days. You may also collect from your local store if you prefer.</p> \
                        <h4>Easy returns</h4> \
                        <p>Should you change your mind, or have bought too much, you have 30 days to return goods in their original condition & packaging to your local CTM branch for a full refund.</p> \
                    </div> \
                </div> \
            </div> \
        </div>'),

    'backToShoppingButton': $('#quote-nav .li-back a.btn'),

    'cartQuantityHeader': $('th.cart-quantity'),
    'cartQuantityHeaderText': 'Price',

    'cartTable': $('table#cart'),
    'tableRows': $('table#cart > tbody > tr'),
    'changeQuantityModalTemplate': '<div class="modal AWA_ChangeQtyModal fade" id="AWA_ChangeQuantityModal___PRODUCT_ID__" tabindex="-1"> \
        <div class="modal-dialog"> \
            <div class="modal-content"> \
                <div class="modal-header"> \
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> \
                    <h4 class="modal-title">Change quantity: __PRODUCT_NAME__</h4> \
                </div> \
                <div class="modal-body"> \
                </div> \
            </div> \
        </div> \
    </div>',
    'changeQuantityModalLinkTemplate': '<a class="modalLink print-hide" data-toggle="modal" data-target="#AWA_ChangeQuantityModal___PRODUCT_ID__" href="#" >Change quantity</a>',

	'orderSummaryBox': $('div#order-summary'),
    'needHelpBox': $('div#need-help')
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#AWA_linksList li { \
    margin-bottom: 1em; \
} \
@media (max-width: 991px) { \
    #AWA_linksList { \
        padding-left: 1em; \
    } \
    #AWA_linksList li { \
        display: inline-block; \
        margin-bottom: 0em; \
        margin-right: 1em; \
    } \
} \
.AWA_ChangeQtyModal  { \
    z-index: 1100; \
} \
.AWA_ChangeQtyModal .picker-view-cart a.btn { \
    display: none !important; \
} \
.modalLink { \
    font-size: 14px; \
} \
/* Override the positions for these attributes so that the "Change quantity" modal displays correctly. */ \
body div#sb-site, \
.col-md-12 { \
    position: initial; \
} \
@media print \
{ \
  table { page-break-after:auto } \
  tr    { page-break-inside:avoid; page-break-after:always } \
  td    { page-break-inside:avoid; page-break-after:auto } \
  thead { display:table-header-group } \
  tfoot { display:table-footer-group } \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Remove various elements from the page
    $.each(this.vars.elementsToRemove, function(i, $elem){
        $elem.hide();
    });

    // Move "Reference" to left of screen and remove 'well' styling
    this.vars.quoteRef.removeClass('well well-white');
    this.vars.quoteRef.parent().insertBefore(this.vars.quoteNav.parent());

    // Change label on "BUY NOW" button
    this.vars.buyButton.html(this.vars.newBuyButtonLabelHTML);

    // Add a new buy-now button to list at top of page.
    var $buy_button_li = $('<li class="li-buy-now">');
    this.vars.buyButton.clone().appendTo($buy_button_li);
    this.vars.quoteNav.prepend(
        $buy_button_li
    );

    // Change table to be full width on medium-screen devices
    this.vars.quoteView_table.removeClass('col-md-9').addClass('col-md-12');
    this.vars.quoteView_orderSummary.removeClass('col-md-3').addClass('col-md-4');

    // Increase size of cart thumbnails (from 100px to max size: 122px)
    $.each(this.vars.cartThumbnails, function(i, elem){
        elem.style['max-height'] = '122px';
        elem.style['max-width'] = '122px';
    });

    // Add links column and move links into it
    this.vars.linksList.appendTo(
        this.vars.linksColumn
    );
    this.vars.linksColumn.insertBefore(
        this.vars.quoteView_orderSummary
    );

    this.vars.emailAsQuoteLink.text(this.vars.emailAsQuoteText);
    var $emailListItem = $('<li>');
    $emailListItem.append(
        this.vars.emailAsQuoteLink
    );
    this.vars.linksList.append($emailListItem);
    this.vars.emailAsQuoteLink.attr('style', '');

    // Insert delivery-costs link and modal
    this.vars.linksList.append(this.vars.deliveryListItem);
    $('body').append(this.vars.deliveryListModal);

    // Insert "back to shopping" button
    var $backToShoppingListItem = $('<li>');

    $backToShoppingListItem.append(
        this.vars.backToShoppingButton
    );

    this.vars.linksList.append(
        $backToShoppingListItem
    );

    // Change "Change Quantity" cart header to "Price"
    this.vars.cartQuantityHeader.text(
        this.vars.cartQuantityHeaderText
    );


    // Add modals for each row's quantity column
    var self = this;
    $.each(this.vars.tableRows, function(i, elem) {
        var product_id = elem.id,
            $elem = $(elem),
            product_name = $elem.find('.item-name').text();

        // Create modal
        var changeQtyModal = $(self.vars.changeQuantityModalTemplate.replace('__PRODUCT_ID__', product_id).replace('__PRODUCT_NAME__', product_name));
        changeQtyModal.find('.modal-body').append($elem.find('.cart-quantity-picker'));  // Move quantity stuff to modal here
        $elem.find('td.cart-quantity').append(changeQtyModal);
        $elem.find('td.cart-quantity').append($(self.vars.changeQuantityModalLinkTemplate.replace('__PRODUCT_ID__', product_id)));
        $('#AWA_ChangeQuantityModal___PRODUCT_ID__ form .cancel-changes-btn'.replace('__PRODUCT_ID__', product_id)).on('click', function() { changeQtyModal.modal('hide'); });
        $('#AWA_ChangeQuantityModal___PRODUCT_ID__ form .update-item-btn'.replace('__PRODUCT_ID__', product_id)).on('click', function() { changeQtyModal.modal('hide'); });
    });

	// Remove 'well' classes from order summary box, add it to the nearest parent row
	this.vars.orderSummaryBox.removeClass("well well-white");
	this.vars.orderSummaryBox.parents('.row').addClass('well well-white');
	this.vars.cartTable.attr('style', '-webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;');

	// Behead order summary box
	this.vars.orderSummaryBox.find('#order-summary-heading').hide();

	// Hide "Need Help" box
	this.vars.needHelpBox.hide();

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);
