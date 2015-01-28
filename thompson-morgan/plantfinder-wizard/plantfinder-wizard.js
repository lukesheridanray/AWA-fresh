/*

need to preselect options

For checkboxes and radio buttons add prefix to input value

idealfor:
hardiness:
longevity:
soilmoisture:
acidity:
brand:
otherfeatures:
awards:


*/
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

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
exp.log('Plantfinder wizard - 0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    page: $('.VIEW-PORTAL').length ? 'site' : 'frame',
    view: ' \
<h1 class="pad_b_10">Find your perfect plant</h1> \
<p class="exp-pf-intro">Add one or more filters below to find your perfect plant<p> \
<div class="exp-pf-accordion exp-pf-accordion__garden"> \
    <div class="exp-pf-accordion__title"> \
        <strong>Add garden characteristics</strong> \
        <em>Position or place in the garden, sun exposure, soil characteristics</em> \
    </div> \
    <div class="exp-pf-accordion__content"> \
        <fieldset class="exp-pf__fieldset"> \
            <legend>About your garden</legend> \
            <div class="exp-pf-radio"> \
                <h2 class="pad_b_10">Position <a class="more_info" name="Position" href="#">&nbsp;</a></h2> \
                <div class="pad_b_20 exp-pf-radio__wrapper"> \
                    <span> \
                        <input type="radio" name="gps_po" value="" id="gps_po_1" /> \
                        <label for="gps_po_1">No Preference</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_po" value="position:dappledshade" id="gps_po_2" /> \
                        <label for="gps_po_2">Dappled Shade</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_po" value="position:fullsun" id="gps_po_3" /> \
                        <label for="gps_po_3">Full Sun</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_po" value="position:shade" id="gps_po_4" /> \
                        <label for="gps_po_4">Shade</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_po" value="position:sunorsemishade" id="gps_po_5" /> \
                        <label for="gps_po_5">Sun Or Semi Shade</label> \
                    </span> \
                </div> \
            </div> \
            <div class="exp-pf-radio"> \
                <h2 class="pad_b_10">Soil Type <a class="more_info" name="Soil Type" href="#">&nbsp;</a></h2> \
                <div class="pad_b_20 exp-pf-radio__wrapper"> \
                    <span> \
                        <input name="gps_st" value="soiltype:anygardensoil" type="radio" id="gps_st_1"> \
                        <label for="gps_st_1">Any Garden Soil</label> \
                    </span> \
                    <span> \
                        <input name="gps_st" value="soiltype:clay" type="radio" id="gps_st_2"> \
                        <label for="gps_st_2">Clay</label> \
                    </span> \
                    <span> \
                        <input name="gps_st" value="soiltype:heavyclay" type="radio" id="gps_st_3"> \
                        <label for="gps_st_3">Heavy Clay</label> \
                    </span> \
                    <span> \
                        <input name="gps_st" value="soiltype:lightsandy" type="radio" id="gps_st_4"> \
                        <label for="gps_st_4">Light Sandy</label> \
                    </span> \
                    <span> \
                        <input name="gps_st" value="soiltype:richfertile" type="radio" id="gps_st_5"> \
                        <label for="gps_st_5">Rich Fertile</label> \
                    </span> \
                </div> \
            </div> \
            <div class="exp-pf-radio"> \
                <h2 class="pad_b_10">Soil Moisture</h2> \
                <div class="pad_b_20 exp-pf-radio__wrapper"> \
                    <span> \
                        <input name="gps_sm" value="" type="radio" id="gps_sm_1"> \
                        <label for="gps_sm_1">No Preference</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:welldrained" type="radio" id="gps_sm_2"> \
                        <label for="gps_sm_2">Well Drained</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:reliablymoist" type="radio" id="gps_sm_3"> \
                        <label for="gps_sm_3">Well DrainedReliably Moist</label> \
                    </span> \                            

<option value="dry">Dry</option>                                    

<option value="boggy">Boggy</option>                                    

<option value="submergedinwater">Submerged In Water</option>                                    

                                    </select>
                                
                    </span> \
                </div> \
            </div> \
        </fieldset> \
    </div> \
</div> \
<div class="exp-pf-accordion exp-pf-accordion__plant"> \
    <div class="exp-pf-accordion__title"> \
        <strong>Add plant preferences</strong> \
        <em>Hardiness, longevity, flower colour, flowering month and more</em> \
    </div> \
    <div class="exp-pf-accordion__content"> \
    fields \
    </div> \
</div> \
<a href="#" class="exp-pf-button">Find Plants</a>'
};

// Styles

exp.siteCSS = '';

exp.frameCSS = ' \
.wrapper { \
    background: #DBEBD4; \
} \
.gps h1 { \
    color: #000; \
} \
.gps .exp-pf-intro { \
    font-weight: bold; \
    text-align: center; \
    font-size: 16px; \
    padding: 20px 0; \
} \
.exp-pf-accordion__title { \
    position: relative; \
    padding: 20px 0 20px 60px; \
    cursor: pointer; \
    width: 50%; \
    left: 30px; \
} \
.exp-pf-accordion__title:before { \
    content: "+"; \
    color: #00572D; \
    font-size: 52px; \
    position: absolute; \
    top: 0; \
    left: 8px; \
} \
.exp-pf-accordion__title strong { \
    color: #00572D; \
    font-size: 16px; \
    display: block; \
    padding: 0 0 10px 0; \
} \
.exp-pf-accordion__title strong:hover { \
    text-decoration: underline; \
} \
.exp-pf-accordion__title em { \
    font-size: 13px; \
} \
.exp-pf-accordion__content { \
    display: none; \
} \
.exp-pf__fieldset { \
    border: 1px solid #CDCECC; \
    border-radius: 10px; \
} \
.exp-pf__fieldset legend { \
    font-weight: bold; \
} \
.gps .exp-pf__fieldset h2 { \
    color: #000; \
} \
.exp-pf__fieldset .more_info { \
    position: relative; \
    top: -2px; \
    background-image: url("data:image/gif;base64,R0lGODlhEAAQALMAAGZmZpSakdvr1M3bx2lqacTRvpKYj3d6dtLhy3x/e56lmpmgltXkzgAAAAAAAAAAACH5BAAHAP8ALAAAAAAQABAAAARKUEgxVgIgrTH7wiC4dMIVnsn0hURwjsMJFMxxDobcyoYpyz4QAVH7yWg21LEYSuROyJMhBmWCOCvMkKEIjSRBICn7IkkqJg1nEgEAOw=="); \
    background-position: 0 0; \
    background-repeat: no-repeat; \
    background-color: #274E13; \
    text-decoration: none; \
    display: inline-block; \
    width: 16px; \
    height: 16px; \
} \
.exp-pf-button { \
    background-image: url("data:image/gif;base64,R0lGODlhEwAYANUAACdOE9DYy2qFXDFWHv///6S0m1BvP+fs5ZOmia28pbnFsoidfe/y7eHm3oCXdGF+Uz9hLc3WyPj5+CtRGJ+xlrPBrDpdJ46jhPH08OPo4FZ0Rs7ezoSaeezv6nKLZJmrj2SAVrXDrr7KuC9UG0JkMZGlh+bq41h2STJXH9bezpStjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAATABgAAAaeQE/CYQEYj8hkgXGonJLQ45LAiBCjyg6BIGkUThOssaDdEjoBzkBMNm8lJoUB23ZvMRFOMWt3NyoPYVJlfXcBCyiDhXYZCWAAdYtmGAEXFgmEkmYdBZiadpwFB5+GHyQUJqQZCgJrqJqUFxBHr4smIiBJtXaUC3tIu28NCQ8jUcEMAQizWLVdISCCzVpVsmJHHwwMChrXSCAJJb/eAEEAOw=="); \
    background-position: 0 0; \
    background-repeat: no-repeat; \
    background-color: #274E13; \
} \
.gps .exp-pf-radio__wrapper { \
    display: table; \
    width: 100% !important; \
    font-size: 12px; \
} \
.exp-pf-radio__wrapper span { \
    display: table-cell; \
} \
/* */';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// open accordion
exp.func.accordionOpen = function() {
    var _this = $(this);
    _this.hide(50);
    _this.next('.exp-pf-accordion__content').show(50);
};

// function to do the search
// adapted from original page
exp.func.doSearch = function(){

    var options = new Array();
    var reg = new RegExp(/subcat:(.*?)\s/i);
    var subcat = reg.exec(current_af);
    
    if(subcat){
        options.push("subcat:"+subcat[1]);
    } 

/*
    if($("#gps_ac").val()){options.push("acidity:"+$("#gps_ac").val())}
    if($("#gps_br").val()){options.push("brand:"+$("#gps_br").val())}
    if($("#gps_of").val()){options.push("otherfeatures:"+$("#gps_of").val())}
    if($("#gps_aw").val()){options.push("awards:"+$("#gps_aw").val())}
*/

    // Radio buttons
    
    //hardiness
    if($('input:radio[name=gps_ha]:checked').val()){
        options.push($('input:radio[name=gps_ha]:checked').val());
    }

    //longevity
    if($('input:radio[name=gps_lo]:checked').val()){
        options.push($('input:radio[name=gps_lo]:checked').val());
    }

    //position
    if($('input:radio[name=gps_po]:checked').val()){
        options.push($('input:radio[name=gps_po]:checked').val());
    }  

    //soil moisture
    if($('input:radio[name=gps_sm]:checked').val()){
        options.push($('input:radio[name=gps_sm]:checked').val());
    }  

    //plant type
    if($('input:radio[name=gps_pt]:checked').val()){
        options.push($('input:radio[name=gps_pt]:checked').val());
    }

    //soil type 
    if($('input:radio[name=gps_st]:checked').val()){
        options.push($('input:radio[name=gps_st]:checked').val());
    }

    //scented flower
    if($("#gps_sf").attr('checked')){
        options.push("scentedflower:yes");
    }

    //evergreen
    if($("#gps_eg").attr('checked')){
        options.push("evergreen:yes");
    }

    // Checkboxes


    //ideal for
    $('input[name=gps_if]').each(function(){
        if($(this).attr('checked')){
            options.push($(this).attr('value'));
        }
    });

    //grow in
    $('input[name=gps_gi]').each(function(){
        if($(this).attr('checked')){
            options.push($(this).attr('value'));
        }
    });
    
    //foliage & flower colour
    $(".fcp1").each(function(elem) {
        if($(this).hasClass("selected")){
            options.push($(this).attr('value'));
        }
    });
    $(".fcp2").each(function(elem) {
        if($(this).hasClass("selected")){
            options.push($(this).attr('value'));
        }
    });

    // Ranges

//    if(heightrange && heightrange != "height:[0cm,900cm]"){options.push(heightrange);}
//    if(spreadrange){options.push(spreadrange);}
    if(sowingmonthrange){options.push(sowingmonthrange);}
//    if(harvestperiodrange){options.push(harvestperiodrange);}
    if(floweringmonthrange){options.push(floweringmonthrange);}

    var new_url = "http://search.thompson-morgan.com/search?w=*&ts=plantfinder&af=tab:products";
    
    for(var i=options.length-1; i>=0; i--) {
        var value = options[i];
        new_url = new_url + "%20" +value;
    }

    window.parent.location.href = new_url;
    
    return false;

}

// open up the more info dialog
exp.func.moreInfoPopUp = function() {
    var name = $(this).attr("name");
    var info = "Information Not Available";
    switch (name) {
        case "Hardiness":
            info = '<b style="color: #00572D;">Hardy</b> - Tolerates temperatures down to -15°C (5°F)<br /><br /><b style="color: #00572D;">Half-hardy</b> - Tolerates temperatures to 0°C (32°F)<br /><br /><b style="color: #00572D;">Tender</b> - Plant liable to damage or may not survive at temperatures below 5°C (41F). ';
            break;
        case "Longevity":
            info = '<b style="color: #00572D;">Annuals</b> complete their entire lifecycle in one growing season. They grow, flower, set seed and die all within the same summer.<br /><br /><b style="color: #00572D;">Biennials</b> complete their life cycles within two years, growing during the first year and flowering in the second year. After flowering they will set seed and die.<br /><br /><b style="color: #00572D;">Perennials</b> live for more than two years, usually flowering each year from the second season.<br /><br /><b style="color: #00572D;">Bulbs, Corms and Tubers</b> are generally perennial. Most have a period of growth followed by a dormant period. During dormancy most will die back until growth resumes the following year.';
            break;
        case "Ideal For":
            info = "Choose your theme or garden style from the list.";
            break;
        case "Grow In":
            info = "Where do you want to grow your plant? In a basket, in the vegetable plot, or maybe against a wall or fence? Tick the boxes in our list to refine the search to your requirements.";
            break;
        case "Position":
            info = '<b style="color: #00572D;">Full Sun</b> - 6 hours of strong sunlight per day.<br /><br /><b style="color: #00572D;">Sun or Semi Shade</b> - 3- 5 hours of sun per day but will tolerate both situations.<br /><br /><b style="color: #00572D;">Dappled Shade</b> - Filtered light, such as the bright shade cast by sunlight through the leaves of a tree.<br /><br /><b style="color: #00572D;">Shade</b> - Less than 2 hours of direct sunlight per day.';
            break;
        case "Soil Type":
            info = '<b style="color: #00572D;">Any Garden Soil</b> - Relatively well balanced soil that is reasonably moisture retentive and fairly fertile. Most garden soils fall into this category unless you are gardening in extreme soil conditions as listed below.<br /><br /><b style="color: #00572D;">Light Sandy</b> - Particularly free draining soil which is easy to work but may be relatively infertile.<br /><br /><b style="color: #00572D;">Rich Fertile</b> - Soil that is especially rich in organic matter and generally moisture retentive.<br /><br /><b style="color: #00572D;">Clay</b> - Slow draining soil which is harder to work but relatively fertile.<br /><br /><b style="color: #00572D;">Heavy Clay</b> - Dense, heavy soil that drains slowly with a tendency to become waterlogged and compacted.';
            break;
        case "Acidity":
            info = '<b style="color: #00572D;">Any</b> - For plants that will grow in soils of any pH value.<br /><br /><b style="color: #00572D;">Acid</b> - For plants that specifically require an acidic soil with a pH value of less than 7.<br /><br /><b style="color: #00572D;">Alkaline</b> - For plants that specifically require an alkaline soil with a pH value of more than 7.';
            break;
        case "Other Features":
            info = "Are you after autumn colour or winter berries? Select a characteristic from the drop down list to refine the search to your requirements.";
            break
    }
    $("#info-content-title").html(name);
    $("#info-content-text").html(info);
    $("#info-box").show("slow");
    return false
};

// This function waits till a condition returns true
exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
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

// This function allows you to always round a number 'up', 'down', or normally, returns a string
exp.func.roundNum = function(number, decimals, direction) {
    decimals = decimals || 0;
    var factor = Math.pow(10,decimals);
    var base;
    if( direction === 'up') {
        base = Math.ceil(number*factor);
    } else if( direction === 'down') {
        base = Math.floor(number*factor);
    }
    return direction ? (base/factor).toFixed(decimals) : number.toFixed(decimals);
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    if( this.vars.page === 'site' ) {

        // append styles to head
        $('head').append('<style type="text/css">'+this.siteCSS+'</style>');

    } else if ( this.vars.page === 'frame' ) {

        // append styles to head
        $('head').append('<style type="text/css">'+this.frameCSS+'</style>');

        // replace form with our custom form
        $('.wrapper').html( exp.vars.view );

        // attach handlers to accordion
        $('.exp-pf-accordion__title').bind('click', exp.func.accordionOpen );

        // attach handler to button
        $('.exp-pf-button').bind('click', exp.func.doSearch );

        // attach handlers to more info icons
        $('.more_info').bind('click', exp.func.moreInfoPopUp );

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);