// Code should be ran through JSHint: http://www.jshint.com/ the settings below prevent unnecessary warnings
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE (Immediately Invoked Function Expression)
// pass in jQuery so we can safely use $. Other global variables could be passed in as needed
var cat_page_move_facets_exp = (function($) {

// Initialise the experiment object, this will be returned by the IIFE
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Category page move facets experiment - 1.0.1');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.catBGHolder');

// check for a condition and check it has been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables for use in the experiment, generally these would be strings or jQuery objects
exp.vars = {
    // We're replacing ajaxGET with a wrapper, so save the original func!
    'originalAjaxGET': undefined,

    'facetedNav': $('div#facetedNAV'),
    'categoryHolder': $('div#holder_CENTRE'),
    'closedLabel': 'Narrow by Size, Colour, Price',
    'openLabel': 'Hide options',
    'selectedOptionsNone': 'Select one or more options to narrow your choice',
    'selectedOptionsMany': '<strong>Selected options</strong>: ',

    'img_downArrow': '//cdn.optimizely.com/img/174847139/0a5eba47624149fa8fe3d5ebceabce2c.png',
    'img_rightArrow': '//cdn.optimizely.com/img/174847139/d210b5eb3d594f238267a2db229fcdbd.png',

    // New elems
    'selectedOptionsClearAllLink': $('<a class="CGIT_newFacetsClearAllLink" href="#">Clear all</a>'),
    'newFacetsWrapper': $('<div class="CGIT_newFacetsWrapper"></div>'),
    'newFacetsContainer': $('<div class="CGIT_newFacetsContainer"></div>'),
    'newFacetsLabel': $('<a href="#" class="CGIT_newFacetsLabel">Beep boop I\'m a label.</a>'),
    'newFacetsImg': $('<img src="//cdn.optimizely.com/img/174847139/0a5eba47624149fa8fe3d5ebceabce2c.png">'),
    'newFacetsSupplementaryLabel': $('<label href="#" class="CGIT_newFacetsSupplementaryLabel">Beep boop I\'m a supplementary label.</label>'),
};

exp.styles = '\
.CGIT_newFacetsWrapper { \
    border: 1px solid #666; \
    border-top: 0; \
    border-left: 0; \
    border-right: 0; \
    float: right; \
    width: 765px; \
    padding-bottom: 10px; \
    box-sizing: border-box; \
    padding: 1em; \
    margin-top: 40px; \
} \
a.CGIT_newFacetsLabel { \
    display: block; \
    width: 100%; \
    color: #000; \
    font-weight: bold; \
    font-size: 14px; \
    margin-bottom: 1em; \
} \
a.CGIT_newFacetsLabel img { \
    margin-right: 0.5em; \
    margin-bottom: -3px; \
} \
label.CGIT_newFacetsSupplementaryLabel { \
    margin-right: 2em; \
} \
label.CGIT_newFacetsSupplementaryLabel.empty { \
    font-style: italic; \
} \
a.CGIT_newFacetsClearAllLink { \
    color: #999; \
    text-decoration: underline; \
} \
.CGIT_newFacetsContainer { \
    display: none; \
    padding-top: 1em; \
    padding-bottom: 1em; \
} \
.CGIT_newFacetsContainer > ul { \
    width: 33%; \
    box-sizing: border-box; \
    display: inline-block; \
    vertical-align: top; \
} \
.CGIT_newFacetsContainer ul#facet_size > li > ul > li, \
.CGIT_newFacetsContainer ul#facet_colour > li > ul > li { \
    display: inline-block; \
    width: 50%; \
} \
.CGIT_newFacetsContainer ul#facet_size > li > ul > li.clearfacet, \
.CGIT_newFacetsContainer ul#facet_colour > li > ul > li.clearfacet, \
.CGIT_newFacetsContainer ul#facet_price > li > ul > li.clearfacet { \
    display:none; \
} \
.CGIT_newFacetsContainer ul#facet_size, \
.CGIT_newFacetsContainer ul#facet_colour, \
.CGIT_newFacetsContainer ul#facet_price { \
    display: table-cell; \
} \
.CGIT_newFacetsContainer ul#facet_size { \
    border-right: 1px; \
    border-style: solid; \
    border-color: #666; \
    width: 30%; \
} \
.CGIT_newFacetsContainer ul#facet_colour { \
    border-right: 1px; \
    border-style: solid; \
    border-color: #666; \
    padding-left: 1em; \
    width: 40%; \
} \
.CGIT_newFacetsContainer ul#facet_price { \
    padding-left: 1em; \
    width: 30%; \
} \
.CGIT_newFacetsContainer ul{border:0;margin:0;padding:0} \
.CGIT_newFacetsContainer ul li{margin:0;padding:0;line-height: 22px;} \
.CGIT_newFacetsContainer ul li.header_sub{ \
    font-size:14px; \
    font-weight:normal; \
    text-transform:none; \
    padding: 0 0 0.5em 1.25em; \
} \
.CGIT_newFacetsContainer ul#facet_size > li, \
.CGIT_newFacetsContainer ul#facet_colour > li, \
.CGIT_newFacetsContainer ul#facet_price > li{ \
    width: 80%; \
    margin: 0 auto; \
} \
.CGIT_newFacetsContainer ul#facet_colour > li > ul > li { \
    text-transform: capitalize; \
} \
.CGIT_newFacetsContainer ul li.header_sub a{background:0;margin:0;padding:0;} \
.CGIT_newFacetsContainer ul li{text-transform:inherit} \
.CGIT_newFacetsContainer ul li a{background: url(http://www.dunelondon.com/images/core/facetselected_bg_b.gif?Lo0P=05f54031b69961b260fd244708c14d7d124)  no-repeat 10px 4px;text-transform:none;display:inline-block;cursor:pointer;padding-right:0;padding-left:34px;text-transform:capitalize} \
.CGIT_newFacetsContainer ul.contracted{border-top:1px solid #949494;height:20px;overflow:hidden} \
.CGIT_newFacetsContainer ul li.notselected.innertitle{padding-left:10px} \
.CGIT_newFacetsContainer ul li.notselected a{background: url(http://www.dunelondon.com/images/core/facet_bg.gif?Lo0P=e143557e6f55b3c5696e28596227c0b274)  no-repeat 10px 4px;padding-right:10px} \
.CGIT_newFacetsContainer ul li.notavailable{color:#aaa;cursor:default;padding-left:34px; box-sizing: border-box;} \
.CGIT_newFacetsContainer ul li .count{font-size:11px}';

exp.func = {};

// Wrapper for the site's own ajaxGET.  We need to hook onto certain conditions here!
exp.func.ajaxGET = function(f, b, a){
    // Just run the original behaviour if two args aren't what we are hooking into.
    if (b !== 'filterOptionsOnLeft' || a !== false)
    {
        return exp.vars.originalAjaxGET(f, b, a);
    }

    // b == filterOptionsOnleft && a == false
    // so let's do our customm functionality.

    currentHeight = 0;
    var g = false;
    try {
        g = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (c) {
        try {
            g = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (d) {
            g = false;
        }
    }
    if (!g && typeof XMLHttpRequest != "undefined") {
        try {
            g = new XMLHttpRequest();
        } catch (c) {
            g = false;
        }
    }
    if (!g && window.createRequest) {
        try {
            g = window.createRequest();
        } catch (c) {
            g = false;
        }
    }
    g.open("GET", f, true);
    g.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2005 00:00:00 GMT");
    g.onreadystatechange = function() {
        if (g.readyState == 4 && b == "filterOptionsOnLeft") {

            getMyHTMLElement(b).innerHTML = g.responseText;
            showDisplayTable(b);

            if (getMyHTMLElement("infiniteMaxPagesViaAjax") !== null) {
                infiniteMaxPages = getMyHTMLElement("infiniteMaxPagesViaAjax").innerHTML;
            }

            if (ajaxDirection == "infinite") {
                getMyHTMLElement("infiniteScrollingTagSpan").style.display = "none";
                getMyHTMLElement("productDataOnPage").innerHTML = getMyHTMLElement("productDataOnPage").innerHTML + getMyHTMLElement("productDataOnPageViaAjax").innerHTML;
                getMyHTMLElement("productDataOnPageViaAjax").innerHTML = "";
                $(document).ready(function() {
                    hovertrigger();
                });
                infiniteReadyForPaging = true;
                ajaxDirection = "";
            } else if (ajaxDirection == "right") {
                getMyHTMLElement("productDataOnPageLeft").innerHTML = getMyHTMLElement("productDataOnPageViaAjax").innerHTML;
                getMyHTMLElement("productDataOnPageViaAjax").innerHTML = "";
                slideListingsGo("left", 50);
                ajaxDirection = "";
            } else if (ajaxDirection == "left") {
                getMyHTMLElement("productDataOnPageRight").innerHTML = getMyHTMLElement("productDataOnPageViaAjax").innerHTML;
                getMyHTMLElement("productDataOnPageViaAjax").innerHTML = "";
                slideListingsGo("right", 50);
                ajaxDirection = "";
            } else if (ajaxDirection === "") {
                if (getMyHTMLElement("productDataOnPageViaAjax") === null) {
                    hideDisplayTable("productDataOnPageOverlay");
                    getMyHTMLElement("productDataOnPageOverlayMessage").innerHTML = getMyHTMLElement("ajaxNoResultsMessage").innerHTML;
                    showPopupForFacets("productDataOnPageOverlayMessage", 300, 150);
                    facetChoice(prev_facetName, prev_facetValue, prev_executeFacet);
                } else {
                    getMyHTMLElement("productDataOnPage").innerHTML = getMyHTMLElement("productDataOnPageViaAjax").innerHTML;
                    getMyHTMLElement("productDataOnPageViaAjax").innerHTML = "";
                    hideDisplayTable("productDataOnPageOverlay");
                    getMyHTMLElement("productDataHeader").innerHTML = getMyHTMLElement("productDataHeaderAjax").innerHTML;
                    getMyHTMLElement("productDataFooter").innerHTML = getMyHTMLElement("productDataFooterAjax").innerHTML;
                    getMyHTMLElement("facetResultsOnListingsPage").innerHTML = getMyHTMLElement("facetResultsOnListingsPageAjax").innerHTML;
                    $(document).ready(function() {
                        hovertrigger();
                    });
                }
            }
            if (scrolltotop === true) {
                scrolltotop = false;
                $("html, body").animate({scrollTop: 0}, "fast");
            }

            // MOVE THE CHOSEN ONES!
            exp.func.moveChosenOnes();
        }
    };
    g.send(null);
};

exp.func.toggleChosenOnes = function(e){
    e.preventDefault();

    if (exp.vars.newFacetsContainer.is(":visible")) {
        exp.vars.newFacetsContainer.slideUp();
        exp.vars.newFacetsLabel.contents().last()[0].textContent=exp.vars.closedLabel;
        exp.vars.newFacetsImg.attr('src', exp.vars.img_downArrow);
    }
    else {
        exp.vars.newFacetsContainer.slideDown();
        exp.vars.newFacetsLabel.contents().last()[0].textContent=exp.vars.openLabel;
        exp.vars.newFacetsImg.attr('src', exp.vars.img_rightArrow);
    }
};

exp.func.moveChosenOnes = function(){
    var $sizes = exp.vars.facetedNav.find('ul#facet_size'),
        $colours = exp.vars.facetedNav.find('ul#facet_colour'),
        $prices = exp.vars.facetedNav.find('ul#facet_price');

    // Add or replace facets
    if (exp.vars.newFacetsContainer.find('ul#facet_size').length === 0) {
        exp.vars.newFacetsContainer.append($sizes, $colours, $prices);
    }
    else {
        exp.vars.newFacetsContainer.find('ul#facet_size').replaceWith($sizes);
        exp.vars.newFacetsContainer.find('ul#facet_colour').replaceWith($colours);
        exp.vars.newFacetsContainer.find('ul#facet_price').replaceWith($prices);
    }

    // Hide nav arrows
    $.each([$sizes, $colours, $prices], function(i, $elem){
        $elem.find('ul.navarrow').hide();
    });


    // Shorten the size labels to just the UK size.
    $.each($sizes.find('li > ul > li > a'), function(i, elem){
        var $elem = $(elem);

        // Grab UK size and no. of products from current item name
        var matches = $elem.text().match(/([0-9\.]+?)\/[0-9\.]+?\/US[0-9\.]+?(\s\([0-9]+?\))/);

        if (matches !== null) {
            $elem.text(matches[1] + matches[2]);
        }
    });

    // Set supplementary text to note selected options
    var $selected_items = exp.vars.newFacetsContainer.find('ul li ul:not(.navarrow) li:not(.notselected,.notavailable,.clearfacet)');
    if ($selected_items.length === 0)
    {
        exp.vars.newFacetsSupplementaryLabel.text(exp.vars.selectedOptionsNone);
        exp.vars.newFacetsSupplementaryLabel.addClass('empty');
        exp.vars.selectedOptionsClearAllLink.hide();
    }
    else {
        var label_text = exp.vars.selectedOptionsMany;

        for(var i = 0; i < $selected_items.length; i++) {
            var item_name = $($selected_items[i]).text();

            // Strip out the (n) from item name
            item_name = /^(.+?)\s\([0-9]+?\)$/.exec(item_name)[1];

            // Make first letter uppercase
            item_name = item_name.charAt(0).toUpperCase() + item_name.slice(1);

            // Add to le bills!
            label_text += item_name;

            // If this is not the last item, add a comma to seperate the values.
            if (i + 1 !== $selected_items.length) {
                label_text += ', ';
            }
        }

        exp.vars.newFacetsSupplementaryLabel.html(label_text, false);
        exp.vars.newFacetsSupplementaryLabel.removeClass('empty');
        exp.vars.selectedOptionsClearAllLink.show();
    }

};

exp.func.clearAllFacets = function(e){
    e.preventDefault();

    // Clear out the facets we have been playing with.
    var f = document.getElementById("facetedSearch");
    f.elements['filter_size'].value = "";
    f.elements['filter_colour'].value = "";
    f.elements['filter_price'].value = "";

    // Execute the search to empty these facets.
    executeFacetAjax();
};

// Init function
// Called to run the actual experiment, will be mostly DOM manipulation, event listeners, etc
exp.init = function() {
    // DOM manipulation...

    // append styles to head
    $('head').append('<style type="text/css">'+this.styles+'</style>');

    // Replace ajaxGET with our own wrapped ajaxGET
    exp.vars.originalAjaxGET = ajaxGET;
    ajaxGET = exp.func.ajaxGET;

    // Add newFacetsContainer before categoryHolder
    this.vars.categoryHolder.before(
        this.vars.newFacetsWrapper
    );

    // Add label to newFacetsContainer
    this.vars.newFacetsWrapper.append(
        this.vars.newFacetsImg,
        this.vars.newFacetsLabel,
        this.vars.newFacetsSupplementaryLabel,
        this.vars.selectedOptionsClearAllLink,
        this.vars.newFacetsContainer
    );

this.vars.newFacetsLabel.prepend(
    this.vars.newFacetsImg
    );

    this.vars.selectedOptionsClearAllLink.hide();
    this.vars.selectedOptionsClearAllLink.on('click', this.func.clearAllFacets);

    // MOVE THE CHOSEN ONES
    this.func.moveChosenOnes();

    // toggle visibility of the chosen ones when label is clicked
    this.vars.newFacetsImg.attr('src', this.vars.img_downArrow);
    this.vars.newFacetsLabel.contents().last()[0].textContent = this.vars.closedLabel;
    this.vars.newFacetsLabel.on('click', this.func.toggleChosenOnes);
};

// Return the experiment object so we can access it later
return exp;

// Close the IIFE, passing in jQuery and any other global variables as needed
})(jQuery);

// Run the experiment
cat_page_move_facets_exp.init();