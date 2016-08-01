/**
 * Include this snippet in each variation (including original), in order to pass the 
 * event to Google Analytics. It is an immediately invoked function, which takes 2 parameters.
 *
 * The code has been wrapped in a polling function as in practice we have found that ga is not 
 * always available at the time the variation code runs.
 *
 * @param {string} dimensionValue - The unique value for this variation, e.g. ExperimentName-CountryCode-ExperimentId-Variation
 * @param {string} type - Type of GA event, usually 'user'
 */

(function(dimensionValue, type) {

    var types = {
        'hit': '9',
        'session': '10',
        'user': '11',
    };

    var maxAttempts = 400, attempts = 0;

    var interval = setInterval(function() {

        if(typeof ga === 'function') {

            ga('tealium_0.set', 'dimension'+types[type], dimensionValue);
            ga('tealium_0.send', 'event', 'E-Commerce', 'Optimizely', dimensionValue, 0, {nonInteraction: true});
        
            clearInterval(interval);

        } else if(attempts > maxAttempts) {

            clearInterval(interval);

        }

        attempts++;

    }, 50);

})('ExperimentName-CountryCode-ExperimentId-Variation', 'user');