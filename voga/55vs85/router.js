/*******************************************************************************
* Proxy experiment; will bucket visitors according to certain conditions:      *
* - If the visitor has come from an ad/email referring to 55% off, they should *
* see the control variation.                                                   *
* - If the visitor has come from an ad/email referring to 85% off, they should *
* see the augmented variation.                                                 *
* - If the visitor has come from neither source, Optimizely will bucket them.  *
*******************************************************************************/

//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var voga55vs85_router = (function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function (str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    console.log('VOGA 55vs85: Visitor routing script - 0.1');


    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
        'main_experiment_id'    : 'TODO', // TODO
        'control_variation_id'  : 'TODO', // TODO
        'augmented_variation_id': 'TODO', // TODO
    };

    exp.func = {};

    /* Pulls out data from the browser's query arguments */
    exp.func.queryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

    /* Whether the current visitor is bucketed into the given experiment and variation.
       Only checks if they're in the experiment if variation_id is omitted. */
    exp.func.isVisitorBucketed = function(experiment_id, variation_id){
        if (variation_id === undefined) {
            return window.optimizely.data.state.variationMap[experiment_id] !== undefined;
        }

        return window.optimizely.data.state.variationMap[experiment_id] === variation_id;
    };

    /* Checks the relevant query args and pulls out the mentioned value in the args */
    exp.func.getDiscountValueFromUrl = function(){
        // Is ?dscnt=123 in URL
        if (exp.func.queryString['dscnt'] !== undefined) {
            return exp.func.queryString['dscnt'];
        }
        // Is ?utm_campaign=dscnt123 in URL?
        else if (exp.func.queryString['utm_campaign'] !== undefined &&
            exp.func.queryString['utm_campaign'].indexOf('dscnt') === 0) {
            return exp.func.queryString['utm_campaign'].substr('dscnt'.length);
        }

        return false;
    };

    /* Does this URL contain the relevant query args to qualify for the control variation? */
    exp.func.hasControlUrl = function(){
        if (exp.func.getDiscountValueFromUrl() == '55') {
            return true;
        }
        return false;
    };

    /* Does this URL contain the relevant query args to qualify for the augmented variation? */
    exp.func.hasAugmentedUrl = function(){
        if (exp.func.getDiscountValueFromUrl() == '85') {
            return true;
        }
        return false;
    };

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {

        window.optimizely = window.optimizely || [];

        // Is this visitor already bucketed into the experiment?
        if (exp.func.isVisitorBucketed(exp.vars.main_experiment_id)) {

            // Is visitor following link for CONTROL, but bucketed into AUGMENTED?
            if (exp.func.isVisitorBucketed(exp.vars.main_experiment_id, exp.vars.augmented_variation_id) && exp.func.hasControlUrl()) {
                // Re-bucket visitor into CONTROL
                exp.log("Re-bucketing visitor into CONTROL from AUGMENTED");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.control_variation_id]);
            }
            // Is visitor following link for AUGMENTED, but bucketed into CONTROL?
            else if (exp.func.isVisitorBucketed(exp.vars.main_experiment_id, exp.vars.control_variation_id) && exp.func.hasAugmentedUrl()) {
                // Re-bucket visitor into AUGMENTED
                exp.log("Re-bucketing visitor into AUGMENTED from CONTROL");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.augmented_variation_id]);
            }
            else {
                // No need to re-bucket visitor
                exp.log("No need to re-bucket visitor");
            }
        }
        else {
            // Visitor is not bucketed into experiment

            // Is visitor following link for CONTROL?
            if (exp.func.hasControlUrl()) {
                // Bucket visitor into CONTROL
                exp.log("New visitor, bucketing into CONTROL");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.control_variation_id]);
            }
            // Is visitor following link for AUGMENTED?
            else if (exp.func.hasAugmentedUrl()) {
                // Bucket visitor into AUGMENTED
                exp.log("New visitor, bucketing into AUGMENTED");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.augmented_variation_id]);
            }
            else {
                // No need to bucket, let Optimizely handle it
                exp.log("New visitor, no need to bucket into a variation; Optimizely will handle the bucketing.");
            }
        }

        // Activate experiment.  If user hasn't been bucketed, Optimizely will bucket them.
        exp.log("Activating experiment");
        window.optimizely.push(['activate', exp.vars.main_experiment_id]);
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);