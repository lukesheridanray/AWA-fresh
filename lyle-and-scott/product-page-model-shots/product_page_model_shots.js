//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var product_page_model_shots = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Product page model shots - 0.5');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.ProductDetails');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'thumbnails_selector': 'ul#alternativeViews > li > img',
    'thumbnails': undefined,  // Will be set later
    'size_tab': $('div#size_fit'),
    'size_guide': $('div#size_fit a[title="Size guide"]')
};

// Styles
// String containing the CSS for the experiment
exp.css = '#CGIT_LS_PRODUCT_MODEL_SHOTS_model_image { \
    width: 50%; \
    float: right; \
} \
#CGIT_LS_PRODUCT_MODEL_SHOTS_model_label { \
    float: right; \
    width: 50%; \
    clear: right; \
    margin-top: 1em; \
    text-align: center; \
} \
#CGIT_LS_PRODUCT_MODEL_SHOTS_model_label img { \
    vertical-align: middle; \
} \
#CGIT_LS_PRODUCT_MODEL_SHOTS_model_link { \
} \
div#size_fit > p.size_fit { \
    width: 50%; \
    margin-bottom: 1em; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
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

exp.func.get_large_image = function(image_path) {
    return image_path.replace('small', 'xxlarge');
};
exp.func.get_zoom_image = function(image_path) {
    return image_path.replace('small', 'zoom');
};

exp.func.get_model_shot_image = function() {
    // The only observable way to determine whether an image is a model shot is whether or not it is at the end of the
    // thumbnails list.  The ones at the end seem to always be images of models.
    exp.vars.thumbnails = jQuery(exp.vars.thumbnails_selector);
    if (exp.vars.thumbnails.length > 0) {
        return exp.vars.thumbnails[exp.vars.thumbnails.length-1].src;
    }
    else {
        return false;
    }

};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    if (exp.vars.size_tab.length === 0) {
        console.log("Size tab not found. Terminating experiment.");
        return;
    }

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    exp.func.waitForElement('ul#alternativeViews > li > img', function(){

        // Get modal image
        var model_shot_url = exp.func.get_model_shot_image();

        if (model_shot_url === false) {
            console.log("No modal shots found. Abandoning experiment.");
            return;
        }

        // Add modal image to size tab
        var $model_image = $('<img>', {
                src: exp.func.get_large_image(model_shot_url),
                id: 'CGIT_LS_PRODUCT_MODEL_SHOTS_model_image'
            }),
            $model_label = $('<p id="CGIT_LS_PRODUCT_MODEL_SHOTS_model_label">Click here for full size image <img src="http://media.lyleandscott.com/pws/client/images/zoomButton.png"/></p>')
            $model_link = $('<a>', {
                href: exp.func.get_zoom_image(model_shot_url),
                id: 'CGIT_LS_PRODUCT_MODEL_SHOTS_model_link'
            });

        $model_link.append($model_image);
        $model_link.append($model_label);

        exp.vars.size_tab.prepend($model_link);

        // Make size guide button yellow
        exp.vars.size_guide.addClass('yellow');

        // Show large image in lightbox when model link is clicked
        var a = jQuery(".pop_up");
        jQuery.fn.popUp({$triggers: jQuery("#CGIT_LS_PRODUCT_MODEL_SHOTS_model_link"), $popUpContainer: a, callback: function() {
            var new_top_val = parseInt(a.css('top').replace('px',''))+20;
            a
            .append(this_obj.vars.free_returns_content)
            .removeClass('loading').addClass('loaded')
            .css({'margin-left':'-400px','top':new_top_val})
            .prepend('<span class="close grey">x</span>')
            .positionInCenter(a(window));
        }});
    });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);