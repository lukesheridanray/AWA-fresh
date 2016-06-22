// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {
        log: function(str) {
            if(typeof window.console !== 'undefined') {
                console.log(str);
            }
        },

        // Variables
        vars: {
            elements: {
                search_box_menu_item: $('.skip.skip--search:not(.not-desk)'),
                search_box_container: $('.site-search'),
                search_box_form: $('.site-search form'),
                search_icon: $('.skip.skip--search:not(.not-desk) svg').clone(),
                site_nav: $('.site-nav__sections'),
            }
        },

        // Functions
        func: {}
    };

    // Make do
    AWA.log('Sunspel: Search bar fiddlin\'');

    if (0 === AWA.vars.elements.search_box_menu_item.length) {
        AWA.log('Terminating experiment: No search bar found.');
        return;
    }

    // Custom CSS
    $('head').append('\
        <style type="text/css">\
            html:not(.is-scrolled) button {\
                background: none;\
                border: none;\
            }\
            html:not(.is-scrolled) input[type="text"]#search {\
                height: 30px; \
            }\
            html:not(.is-scrolled) #search_mini_form input[type="submit"] {\
                display: none;\
            }\
            \
            html.is-scrolled .site-nav__sections li:nth-of-type(5),\
            html.is-scrolled .site-nav__sections li:nth-of-type(6) {\
                display: none;\
            }\
            \
            html.is-scrolled .awa-search-box button {\
                display: none;\
            }\
            .awa-search-box #search_mini_form {\
                padding-top: 0.5em;\
            }\
        </style>\
    ');

    // Move search box form to header.
    AWA.vars.elements.search_box_menu_item.on('click', function(e){ e.preventDefault(); });
    AWA.vars.elements.search_box_menu_item.children().remove();
    AWA.vars.elements.search_box_menu_item.append(
        AWA.vars.elements.search_box_form
    );
    AWA.vars.elements.search_box_container.remove();

    // Swap submit button with a search icon
    var $search_button = $('<button></button>'),
        $search_submit = AWA.vars.elements.search_box_form.find('input[type="submit"]');

    $search_button.append(AWA.vars.elements.search_icon);

    $search_button.on('click', function(){
        AWA.vars.elements.search_box_form.submit();
    });

    $search_submit
        .after($search_button);


    // Have another search form that only shows up in the "is-scrolled" reduced nav bar
    var $below_fold_search_form = AWA.vars.elements.search_box_form.clone(),
        $an_li = $('<li class="awa-search-box"></li>');

        $an_li.append($below_fold_search_form);
    AWA.vars.elements.site_nav.append($an_li);


    // Change placeholder in first search form
    AWA.vars.elements.search_box_form.find('input[type="text"]').attr('placeholder', 'Search');

})(jQuery); // vwo_$ || optimizely.$