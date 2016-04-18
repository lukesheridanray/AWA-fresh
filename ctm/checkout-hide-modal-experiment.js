function waitForModal(callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ( typeof jQuery('#email-modal').modal() ) {
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


function hideModalExperiment() {
    
    console.log('Running CTM flow and buttons - hideModalinCheckout experiment - v 0.14');

    jQuery('#email-modal').addClass('expForceHideModal');
    jQuery('.modal-backdrop').addClass('expForceHideModal');
    
    waitForModal(function hideModal() {
        console.log('force hide');
        jQuery('#email-modal').modal('hide');
        jQuery('#email-modal').removeClass('expForceHideModal');
        jQuery('.modal-backdrop').removeClass('expForceHideModal');
    });
    
    jQuery('<a class="customEmailQuoteButton" style="float: left; font-size: 1.2em; cursor: pointer; position: relative; left: -30px;">Email as quote</a>').prependTo( jQuery('.cart-valid-frame') );
    
    jQuery('.customEmailQuoteButton').bind('click',function(e){
        e.preventDefault();
        jQuery('.email-quote-btn').trigger('click');
    });
    
    jQuery('.contact-btn.add-btn[data-action="detailAdd"]').remove();
    
}

hideModalExperiment();