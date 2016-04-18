// We use multiline strings, the following prevents jshint giving us warnings against using them
// jshint multistr: true

// Initiate experiment object
var exp = exp || {};

/**
 * Condition
 * ---------
 * We cannot always rely on URL's to target experiments to pages, in these cases we can 
 * use a unique CSS selector to check we are on the correct page. While this could affect the 
 * statistical data, the effects should be negligable and will be mirrored in the unaltered control page.
 */
exp.condition = jQuery('.paymentDetails');

/**
 * Variables
 * ---------
 * An object containing variables for use in the experiment,
 * generally these would be strings or DOM elements.
 */
exp.vars = {
    'freeReturnsModal': '<p class="title"><strong>Free UK Returns</strong></p> \
                        <p>Returns from UK mainland are free via Collect+. Simply complete the Returns Note that is shipped with your items and return the parcel to your most convenient Collect+ outlet, where you\'ll receive proof of postage and a tracking code.</p> \
                        <p>The Collect+ network is made up of over 5,500 newsagents, convenience stores, supermarkets and petrol stations nationwide. These outlets are open from early until late, so you can return your parcel when it\'s convenient for you, even outside of normal 9-5 operating hours.</p> \
                      ',
    'privacyModal': '<p><strong>Free UK Returns</strong></p> \
                        <p>Returns from UK mainland are free via Collect+. Simply complete the Returns Note that is shipped with your items and return the parcel to your most convenient Collect+ outlet, where you\'ll receive proof of postage and a tracking code.</p> \
                        <p>The Collect+ network is made up of over 5,500 newsagents, convenience stores, supermarkets and petrol stations nationwide. These outlets are open from early until late, so you can return your parcel when it\'s convenient for you, even outside of normal 9-5 operating hours.</p> \
                      ',
    'termsModal': '<p><strong>Free UK Returns</strong></p> \
                        <p>Returns from UK mainland are free via Collect+. Simply complete the Returns Note that is shipped with your items and return the parcel to your most convenient Collect+ outlet, where you\'ll receive proof of postage and a tracking code.</p> \
                        <p>The Collect+ network is made up of over 5,500 newsagents, convenience stores, supermarkets and petrol stations nationwide. These outlets are open from early until late, so you can return your parcel when it\'s convenient for you, even outside of normal 9-5 operating hours.</p> \
                      '
};

/**
 * Styles
 * ------
 * A multiline string containing the CSS for the experiment.
 */
exp.css = ' \
#payment_fields { border: 1px solid #ddd; padding: 10px; width: 480px; } \
#billing_select_existing_address { border-top: 1px solid #ddd; padding: 10px; width: 480px; } \
#billing_create_new_address { border-bottom: 1px solid #ddd; padding: 10px; width: 480px; } \
#billing_select_existing_address, #billing_create_new_address { border-left: 1px solid #ddd; border-right: 1px solid #ddd; } \
#payment_fields legend, #billing_select_existing_address legend { padding: 3px; background: #fff; position: relative; top: 2px; } \
#payment_fields legend img { position: relative; top: 2px; } \
#comodo_logo { margin-right: 318px; margin-top: 29px; } \
.legend-sub-heading { text-align: center; font-style: italic; display: block;  } \
.help-message { float: left; margin: 4px 0; } \
#terms_element { font-size: 1.1em; } \
.returns-modal-link { float: right; position: relative; top: 10px; left: 10px; } \
';

/**
 * Functions
 * ---------
 * An object containing all the functions that will be used in the experiment.
 * Some helpful functions are given below.
 */
exp.func = exp.func || {};

// Modified popup.js, to not rely on AJAX
(function(a) {
    a.fn.popUpNoAjax = function(b) {
        var c;
        a.fn.popUpNoAjax.initialise = function() {
          console.log("Initialising popup");
            c = a.extend({}, a.fn.popUpNoAjax.defaults, b);
            a("body").on("click", ".close", function() {
                c.$popUpContainer.hide().empty().addClass("loading");
                a("body").unblock();
            });
            return c.$triggers.each(function() {
                a(this).click(function(d) {
                  console.log('Help I was clicked');
                    d.preventDefault();
                    a("body").block();
                    a.fn.popUpNoAjax.loadContent(c.callback);
                });
            });
        };
        a.fn.popUpNoAjax.loadContent = function(f) {
            console.log('Loading popup content');
            var d = a(".pop_up");
            d.empty();
            c.$popUpContainer.positionInCenter(a(window));
            d.fadeIn();
            c.$popUpContainer.removeClass("loading").addClass("loaded").positionInCenter(a(window));
            c.$popUpContainer.prepend('<span class="close grey">x</span>');
            f();
        };
        a.fn.popUpNoAjax.defaults = {$triggers: a(this),$popUpContainer: a(".pop_up"),callback: function() {
                return true;
            }};
        a.fn.popUpNoAjax.initialise();
    };
}(jQuery));

exp.func.triggerPopup = function(trigger, modal_content) {
        // Construct the popup
        console.log("Constructing popup.");
var a = jQuery(".pop_up");
    jQuery.fn.popUpNoAjax({$triggers: trigger, $popUpContainer: a, callback: function() {
            var new_top_val = parseInt(a.css('top').replace('px',''), 10)+20;
            a.append(modal_content)
              .removeClass('loading').addClass('loaded')
              .prepend('<span class="close grey">x</span>')
              .positionInCenter(a(window));
        }});
};

/**
 * Run function
 * ------------
 * This function will be called to run the actual experiment, this will be mostly
 * DOM manipulation and conditional logic.
 */
exp.run = function() {
        
    // check for a condition and check it has been met
    if(this.condition && !this.condition.length) {
        return false;
    }
        
    // append styles to head
    jQuery('head').append('<style type="text/css">'+this.css+'</style>');

    // do some example DOM stuff
    
    jQuery('.checkoutStepHeader h1').html('Secure Payment');
    
    jQuery('#billing_select_existing_address legend').html('Enter your billing address').after('<span class="legend-sub-heading">The address where your credit card statements are sent</span>');

    jQuery('#payment_fields legend').html('Choose your payment method <img src="//cdn.optimizely.com/img/174847139/04fbb6a0ec2f44abb633ab364ae015f0.gif" alt="" />');
    
    jQuery('#footer_copyright_content').prepend('<p class="help-message">Need help? <strong>0844 244 7000</strong> 8.30am-5pm GMT Mon - Fri</p>');
    
    jQuery('#payment_fields').after('<a href="#" class="returns-modal-link js-returns-modal-trigger">Returns are FREE</a>');
    
    jQuery('#header_cms a:eq(1)').addClass('js-returns-modal-trigger');
    
    exp.func.triggerPopup(jQuery('.js-returns-modal-trigger'), exp.vars.freeReturnsModal);
    
};

/**
 * Run the experiment
 */
exp.run();