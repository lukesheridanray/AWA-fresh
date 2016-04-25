// "Customers who bought this product also bought..." and "Frequently Bought Together" get loaded in dynamically so we need to poll for the elements and remove them as soon as they are loaded into the DOM

// Define polling function
var waitFor = function(condition, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition()) {
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

// Hide "Frequently Bought Together"
var hideBoughtTogether = function() {
    jQuery(".aw-boughttogether").hide();
};
waitFor(function(){ return jQuery("#__bt_Content").length; }, hideBoughtTogether, 10000);


