var helpers = {

/**
 * Wait for a condition to return true then run a callback function
 *
 * @param {function} condition - The condition to run
 * @param {function} callback - The function to run once condition returns true
 * @param {integer} [timeout=2000] - Time in milliseconds to keep trying the condition
 * @param {boolean} [keepAlive=false] - Whether to keep running condition once it returns true
 */
waitFor: function(condition, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if(condition()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if(attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
},

/**
 * Always round a number up, down, or as standard
 *
 * @param {number} number - The number to round
 * @param {integer} [decimals=0] - Number of decimals to round number to
 * @param {string} [direction=null] - Direction to round [up|down] omit to round as standard
 * @returns {string} - Rounded number
 */
roundNum: function(number, decimals, direction) {
    decimals = decimals || 0;
    direction = direction || false;
    var factor = Math.pow(10,decimals),
        base;
    if(direction === 'up') {
        base = Math.ceil(number*factor);
    } else if(direction === 'down') {
        base = Math.floor(number*factor);
    }
    return direction ? (base/factor).toFixed(decimals) : number.toFixed(decimals);
}

};