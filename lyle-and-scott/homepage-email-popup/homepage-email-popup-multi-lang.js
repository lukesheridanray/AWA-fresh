// jshint multistr: true

// Modified popup.js, to not rely on AJAX
(function(a) {
    a.fn.popUpNoAjax = function(b) {
        var c;
        a.fn.popUpNoAjax.initialise = function() {
            c = a.extend({}, a.fn.popUpNoAjax.defaults, b);
            a("body").on("click", ".close", function() {
                c.$popUpContainer.hide().empty().addClass("loading");
                a("body").unblock();
            });
            return c.$triggers.each(function() {
                a(this).click(function(d) {
                    d.preventDefault();
                    a("body").block();
                    a.fn.popUpNoAjax.loadContent(c.callback);
                });
            });
        };
        a.fn.popUpNoAjax.loadContent = function(f) {
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

var homePageEmailPopup = {

    /**
     * Condition
     * ---------
     * We cannot always rely on URL's to target experiments to pages, in these cases we can 
     * use a unique CSS selector to check we are on the correct page.
     */
    'condition' :  jQuery('section#home_content'),

    'email_popup_html': function() {
        var host = window.location.hostname;
        var heading, para, list, placeholder;
        if( host === 'www.lyleandscott.fr') {
            heading = 'Restez branchés';
            para = 'Abonnez-vous à notre newsletter et soyez parmi les premiers informés de :';
            list = '<li>Nos soldes de saison</li> \
                    <li>Nos offres et jeux-concours exclusifs</li> \
                    <li>Toute l\'actualité de nos nouvelles collections</li>';
            placeholder = '';
            submit = 'Subscribe';
        } else if( host === 'www.lyleandscott.se') {
            heading = 'Håll dig uppdaterad!';
            para = 'Prenumerera på vårt nyhetsbrev och bli först med att informeras om:';
            list = '<li>Våra säsongsreor</li> \
                    <li>Exklusiva erbjudanden och tävlingar</li> \
                    <li>Nyheter om våra senaste kollektioner</li>';
            placeholder = '';
            submit = 'Subscribe';
        } else if( host === 'www.lyleandscott.de') {
            heading = 'Bleiben Sie auf dem Laufenden';
            para = 'Abonnieren Sie unseren Newsletter und erhalten Sie als erstes Informationen zu';
            list = '<li>unseren saisonalen Schlussverkäufen</li> \
                    <li>exklusiven Angeboten und Gewinnspielen</li> \
                    <li>Neuigkeiten über unsere aktuellen Kollektionen</li>';
            placeholder = '';
            submit = 'Subscribe';
        } else {
            heading = 'Keep up to date';
            para = 'Sign up for our newsletter and be the first to know about:';
            list = '<li>Our seasonal sales</li> \
            <li>Exclusive offers and competitions</li> \
            <li>News of our latest collections</li> ';
            placeholder = 'Enter Email';
            submit = 'Sign Up';
        }
        var markup = ' \
          <h1>'+heading+'</h1> \
          <p>'+para+'</p> \
          <ul>'+list+'</ul> \
          <form action="/fcp/content/sign-up/content" id="quickProspectRegistrationForm" method="get"> \
            <input placeholder="'+placeholder+'" class="text clear_value" id="email" name="uemail" style="background-color: rgb(244, 244, 244);" type="text"> \
            <button type="submit" class="yellow" id="btn_register_prospect" style="padding: 7px;">'+submit+'</button> \
            </fieldset> \
          </form>';
        return markup;
    },

    /**
     * Variables
     * ---------
     * An object containing variables for use in the experiment, generally these would be
     * strings or DOM elements. Logic could be used in the assignments.
     */
    'vars': {
        'localstorage_key_name': 'LYLE_HOME_EMAIL_POPUP_SEEN',
        'email_popup_html': ' \
          <h1>Keep up to date</h1> \
          <p>Sign up for our newsletter and be the first to know about:</p> \
          <ul> \
            <li>Our seasonal sales</li> \
            <li>Exclusive offers and competitions</li> \
            <li>News of our latest collections</li> \
          </ul> \
          <form action="/fcp/content/sign-up/content" id="quickProspectRegistrationForm" method="get"> \
            <input placeholder="Enter email" class="text clear_value" id="email" name="uemail" style="background-color: rgb(244, 244, 244);" type="text"> \
            <button type="submit" class="yellow" id="btn_register_prospect" style="padding: 7px 12px;">Sign Up</button> \
            </fieldset> \
          </form>'
    },

    /**
     * Styles
     * ------
     * A multiline string containing the CSS for the experiment.
     */
    'styles': ' \
        .pop_up { \
          width: 400px; \
          padding: 2em; \
        } \
        .pop_up h1 { \
          font-weight: bold; \
          margin-bottom: 0.5em; \
        } \
        .pop_up form { \
          padding-top: 1em; \
        } \
        .pop_up input#email { \
          width: 285px; \
          font-size: 1.2em; \
          line-height: 23px; \
          height: 23px; \
          padding: 5px 10px; \
          border: 0; \
          color: #4d4d4d; \
          background: #fff; \
        } \
        .pop_up li { \
          list-style: disc; \
          margin-left: 1.5em; \
        } \
    ',

    /**
     * Functions
     * ---------
     * An object containing all the functions that will be used in the experiment.
     * Some helpful functions are given below.
     */
    'functions': {
        // If relying on dynamic content, we may have to wait for the element to be added to the DOM.
        'waitForElement': function(_func, callback, timeout, keepAlive) {
            var intervalTime = 50;
            timeout = timeout || 20000;
            keepAlive = keepAlive || false;
            var maxAttempts = timeout / intervalTime;
            var attempts = 0;
            var interval = setInterval(function() {
                if (jQuery.isFunction(_func)) {
                    if (!keepAlive) {
                        clearInterval(interval);
                    }
                    callback();
                } else if (attempts > maxAttempts) {
                    clearInterval(interval);
                }
                attempts ++;
                }, intervalTime);
        },
        // If relying on native functionality e.g. modals, we may have to wait for the function to be available.
        'waitForFunction': function() {
        },

        'showEmailPopup': function(){}
    },

    /**
     * Run function
     * ------------
     * This function will be called to run the actual experiment, this will be mostly
     * DOM manipulation and logic.
     */
    'run': function(){        
        // check for a condition and check it has been met
        if(this.condition && !this.condition.length) {
            return false;
        }
        
        // append styles to head
        $('head').append('<style type="text/css">'+this.styles+'</style>');

        // do some example DOM stuff
        
        // Construct the popup
        var a = jQuery(".pop_up");
        var $emailPopupTrigger = $('<div>');
        jQuery('body').append($emailPopupTrigger);

        jQuery.fn.popUpNoAjax({$triggers: $emailPopupTrigger, $popUpContainer: a, callback: function() {
            var new_top_val = parseInt(a.css('top').replace('px',''), 10)+20;
            a.append(homePageEmailPopup.email_popup_html())
              .removeClass('loading').addClass('loaded')
              .prepend('<span class="close grey">x</span>');
        }});

        // Check cookies, see if we've given this user the form before.
        console.log('Checking if flag is set');
        if (!window.localStorage.getItem(homePageEmailPopup.vars.localstorage_key_name)) {
            console.log('Checking IS NOT set, opening popup');
            // Send click event to open the pop-up.
            $emailPopupTrigger.click();
            
            // Set cookie so user won't see this again
            console.log("Setting flag so we don't see popup again.");
            window.localStorage.setItem(homePageEmailPopup.vars.localstorage_key_name, true);
        }
        else {
          console.log("Flag IS set");
        }
    }
};

// Log the experiment version (can handy for debugging on the live site)
console.log('Home page email popup - 1.2.2');

// Optimizely has an API for logging various things, look into this for helpful logging


jQuery(document).ready(function(){
  // Run the experiment. Require localStorage support to do so.
  if (window.localStorage) {
    homePageEmailPopup.run();
  }
});