/**
 * Include this snippet in each variation (including original), in order to pass the 
 * event to Google Analytics. It is an immediately invoked function, which takes 2 parameters.
 *
 * The code has been wrapped in a polling function as in practice we have found that ga is not 
 * always available at the time the variation code runs.
 *
 * @param {string} value - The unique value for this variation
                           e.g. ExperimentName-CountryCode-ExperimentId-Variation
 * @param {string} slot - The dimension slot number, can be '11', '27', '28', '29' or '30',
                          should be unique to any other currently running experiment.
 */

(function(value, slot) {

    var maxAttempts = 400, attempts = 0;

    var interval = setInterval(function() {

        if(typeof ga === 'function') {

            ga('tealium_0.set', 'dimension'+slot, value);
            ga('tealium_0.send', 'event', 'E-Commerce', 'Optimizely', value, 0, {nonInteraction: true});
        
            clearInterval(interval);

        } else if(attempts > maxAttempts) {

            clearInterval(interval);

        }

        attempts++;

    }, 50);

})('ExperimentName-CountryCode-ExperimentId-Variation', '27');