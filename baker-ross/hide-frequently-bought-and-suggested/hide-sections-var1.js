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

// Define callback function to hide the divs
var callback = function() {
    vwo_$(".aw-boughttogether").hide();
    vwo_$("#basket-nosto").hide();
};

// Condition for "Frequently Bought Together"
var boughtTogether = function() {
    return vwo_$(".aw-boughttogether").length;
};

// Condition for "Customers who bought this product also bought..."
var alsoBought = function() {
    return vwo_$("#basket-nosto").length;
};

// Call polling functions
waitFor(boughtTogether, callback, 10000);
waitFor(alsoBought, callback, 10000);

