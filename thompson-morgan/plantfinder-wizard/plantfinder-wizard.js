/*

need to preselect options or set default

soil type radios?

*/
//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true
// jshint laxcomma: true

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
//    floweringmonthrange: '',
//    sowingmonthrange: '',
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
                        <input type="radio" checked="checked" name="gps_po" value="" id="gps_po_1" /> \
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
                        <input name="gps_sm" value="" checked="checked" type="radio" id="gps_sm_1"> \
                        <label for="gps_sm_1">No Preference</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:welldrained" type="radio" id="gps_sm_2"> \
                        <label for="gps_sm_2">Well Drained</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:reliablymoist" type="radio" id="gps_sm_3"> \
                        <label for="gps_sm_3">Reliably Moist</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:dry" type="radio" id="gps_sm_4"> \
                        <label for="gps_sm_4">Dry</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:boggy" type="radio" id="gps_sm_5"> \
                        <label for="gps_sm_5">Boggy</label> \
                    </span> \
                    <span> \
                        <input name="gps_sm" value="soilmoisture:submergedinwater" type="radio" id="gps_sm_6"> \
                        <label for="gps_sm_6">Submerged In Water</label> \
                    </span> \
                </div> \
            </div> \
            <div class="exp-pf-checkbox"> \
                <div class="pad_b_20 exp-pf-checkbox__wrapper" id="grow_in"> \
                    <h2 class="pad_b_10">Grow In <em class="exp-optional">(optional)</em></h2> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:borders" class="styled" />Borders</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:containers" class="styled"  />Containers</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:baskets" class="styled"  />Baskets</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:beds" class="styled"  />Beds</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:raisedbed" class="styled"  />Raised Bed</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:windowboxes" class="styled"  />Window Boxes</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:vegetableplot" class="styled"  />Vegetable Plot</div> \
                    </div> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:indoorplant" class="styled"  />Indoor Plant</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:patiobag" class="styled"  />Patio Bag</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:flowerpouches" class="styled"  />Flower Pouches</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:wallsfences" class="styled"  />Walls & Fences</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:patioclimber" class="styled"  />Patio Climber</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:potatobags" class="styled"  />Potato Bags</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:ponds" class="styled"  />Ponds</div> \
                    </div> \
                </div> \
                <div class="exp-pf-checkbox__wrapper__middle"> \
                    <span>OR</span> \
                </div> \
                <div class="pad_b_20 exp-pf-checkbox__wrapper" id="ideal_for"> \
                    <h2 class="pad_b_10">Ideal For <em class="exp-optional">(optional)</em></h2> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:alpinerockery" class="styled" />Alpine &amp; Rockery</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:coastalgarden" class="styled" />Coastal Garden</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:conservatory" class="styled" />Conservatory</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:cottagegardens" class="styled" />Cottage Gardens</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:cutflowergarden" class="styled" />Cut Flower Garden</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:exoticgarden" class="styled" />Exotic Garden</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:greenhouse" class="styled" />Greenhouse</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:groundcover" class="styled" />Ground Cover</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:hedges" class="styled" />Hedges</div> \
                    </div> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:kitchengarden" class="styled" />Kitchen Garden</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:lowmaintenancegarden" class="styled" />Low Maintenance Garden</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:patio" class="styled" />Patio</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:scentedgardens" class="styled" />Scented Gardens</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:specimenplant" class="styled" />Specimen Plant</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:wallsandfences" class="styled" />Walls And Fences</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:watergarden" class="styled" />Water Garden</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:wildlifegardens" class="styled" />Wildlife Gardens</div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:woodlandgarden" class="styled" />Woodland Garden</div> \
                    </div> \
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
        <fieldset class="exp-pf__fieldset"> \
            <legend>Your plant preferences</legend> \
            <div class="exp-pf-radio"> \
                <h2 class="pad_b_10">Plant Type</h2> \
                <div class="pad_b_20 exp-pf-radio__wrapper"> \
                    <span> \
                        <input type="radio" checked="checked" name="gps_pt" value="" id="gps_pt_1" /> \
                        <label for="gps_pt_1">No Preference</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_pt" value="plant_type:flowers" id="gps_pt_2" /> \
                        <label for="gps_pt_2">Flowers</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_pt" value="plant_type:vegetables" id="gps_pt_3" /> \
                        <label for="gps_pt_3">Vegetables</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_pt" value="plant_type:fruit" id="gps_pt_4" /> \
                        <label for="gps_pt_4">Fruit</label> \
                    </span> \
                </div> \
            </div> \
            <div class="exp-pf-radio"> \
                <h2 class="pad_b_10">Hardiness <a class="more_info" name="Hardiness" href="#">&nbsp;</a></h2> \
                <div class="pad_b_20 exp-pf-radio__wrapper"> \
                    <span> \
                        <input type="radio" checked="checked" name="gps_ha" value="" id="gps_ha_1" /> \
                        <label for="gps_ha_1">No Preference</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_ha" value="hardiness:hardy" id="gps_ha_3" /> \
                        <label for="gps_ha_3">Hardy</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_ha" value="hardiness:halfhardy" id="gps_ha_2" /> \
                        <label for="gps_ha_2">Half-hardy</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_ha" value="hardiness:tender" id="gps_ha_4" /> \
                        <label for="gps_ha_4">Tender</label> \
                    </span> \
                </div> \
            </div> \
            <div class="exp-pf-radio"> \
                <h2 class="pad_b_10">Longevity  <a class="more_info" name="Longevity " href="#">&nbsp;</a></h2> \
                <div class="pad_b_20 exp-pf-radio__wrapper"> \
                    <span> \
                        <input type="radio" checked="checked" name="gps_lo" value="" id="gps_lo_1" /> \
                        <label for="gps_lo_1">No Preference</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:annual" id="gps_lo_2" /> \
                        <label for="gps_lo_2">Annual</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:biennial" id="gps_lo_3" /> \
                        <label for="gps_lo_3">Biennial</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:bulb" id="gps_lo_4" /> \
                        <label for="gps_lo_4">Bulb</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:corm" id="gps_lo_5" /> \
                        <label for="gps_lo_5">Corm</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:perennial" id="gps_lo_6" /> \
                        <label for="gps_lo_6">Perennial</label> \
                    </span> \
            <!-- \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:rhizome" id="gps_lo_7" /> \
                        <label for="gps_lo_7">Rhizome</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:shrub" id="gps_lo_8" /> \
                        <label for="gps_lo_8">Shrub</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:tree" id="gps_lo_9" /> \
                        <label for="gps_lo_9">Tree</label> \
                    </span> \
                    <span> \
                        <input type="radio" name="gps_lo" value="longevity:tuber" id="gps_lo_9" /> \
                        <label for="gps_lo_9">Tuber</label> \
                    </span> \
            --> \
                </div> \
            </div> \
            <div class="exp-pf-checkbox"> \
                <div class="pad_b_20 exp-pf-checkbox__wrapper exp-pf-checkbox__wrapper__colour"> \
                    <h2 class="pad_b_10">Flower Colour <em class="exp-optional">(optional)</em></h2> \
                    <input id="gps_floc_nopref" name="gps_floc_nopref" type="checkbox"> \
                    <img id="gps_floc" title="Apricot" class="fcp1 " value="flowercolour:apricot" src="http://search.thompson-morgan.com/includes/images/fcp_apricot.png" /> \
                    <img id="gps_floc" title="Brown" class="fcp1 " value="flowercolour:brown" src="http://search.thompson-morgan.com/includes/images/fcp_brown.png" /> \
                    <img id="gps_floc" title="Grey" class="fcp1 " value="flowercolour:grey" src="http://search.thompson-morgan.com/includes/images/fcp_grey.png" /> \
                    <img id="gps_floc" title="Mixed" class="fcp1 " value="flowercolour:mixed" src="http://search.thompson-morgan.com/includes/images/fcp_mixed.png" /> \
                    <img id="gps_floc" title="Red" class="fcp1 " value="flowercolour:red" src="http://search.thompson-morgan.com/includes/images/fcp_red.png" /> \
                    <img id="gps_floc" title="Pink" class="fcp1 " value="flowercolour:pink" src="http://search.thompson-morgan.com/includes/images/fcp_pink.png" /> \
                    <img id="gps_floc" title="Orange" class="fcp1 " value="flowercolour:orange" src="http://search.thompson-morgan.com/includes/images/fcp_orange.png" /> \
                    <img id="gps_floc" title="Yellow" class="fcp1 " value="flowercolour:yellow" src="http://search.thompson-morgan.com/includes/images/fcp_yellow.png" /> \
                    <img id="gps_floc" title="Green" class="fcp1 " value="flowercolour:green" src="http://search.thompson-morgan.com/includes/images/fcp_green.png" /> \
                    <img id="gps_floc" title="Blue" class="fcp1 " value="flowercolour:blue" src="http://search.thompson-morgan.com/includes/images/fcp_blue.png" /> \
                    <img id="gps_floc" title="Purple" class="fcp1 " value="flowercolour:purple" src="http://search.thompson-morgan.com/includes/images/fcp_purple.png" /> \
                    <img id="gps_floc" title="Mauve" class="fcp1 " value="flowercolour:mauve" src="http://search.thompson-morgan.com/includes/images/fcp_mauve.png" /> \
                    <img id="gps_floc" title="Lilac" class="fcp1 " value="flowercolour:lilac" src="http://search.thompson-morgan.com/includes/images/fcp_lilac.png" /> \
                    <img id="gps_floc" title="Silver" class="fcp1 " value="flowercolour:silver" src="http://search.thompson-morgan.com/includes/images/fcp_silver.png" /> \
                    <img id="gps_floc" title="Black" class="fcp1 " value="flowercolour:black" src="http://search.thompson-morgan.com/includes/images/fcp_black.png" /> \
                    <img id="gps_floc" title="Cream" class="fcp1 " value="flowercolour:cream" src="http://search.thompson-morgan.com/includes/images/fcp_cream.png" /> \
                    <img id="gps_floc" title="White" class="fcp1 " value="flowercolour:white" src="http://search.thompson-morgan.com/includes/images/fcp_white.png" /> \
                </div> \
                <div class="exp-pf-checkbox__wrapper__middle exp-pf-checkbox__wrapper__middle__colour"> \
                    <span>OR</span> \
                </div> \
                <div class="pad_b_20 exp-pf-checkbox__wrapper exp-pf-checkbox__wrapper__colour"> \
                    <h2 class="pad_b_10">Foliage Colour <em class="exp-optional">(optional)</em></h2> \
                    <input id="gps_folc_nopref" name="gps_folc_nopref" type="checkbox"> \
                    <img id="gps_folc" title="Brown" class="fcp2 " value="foliagecolour:brown" src="http://search.thompson-morgan.com/includes/images/fcp_brown.png"> \
                    <img id="gps_folc" title="Variegated" class="fcp2 " value="foliagecolour:variegated" src="http://search.thompson-morgan.com/includes/images/fcp_variegated.png"> \
                    <img id="gps_folc" title="Mixed" class="fcp2 " value="foliagecolour:mixed" src="http://search.thompson-morgan.com/includes/images/fcp_mixed.png"> \
                    <img id="gps_folc" title="Red" class="fcp2 " value="foliagecolour:red" src="http://search.thompson-morgan.com/includes/images/fcp_red.png"> \
                    <img id="gps_folc" title="Pink" class="fcp2 " value="foliagecolour:pink" src="http://search.thompson-morgan.com/includes/images/fcp_pink.png"> \
                    <img id="gps_folc" title="Orange" class="fcp2 " value="foliagecolour:orange" src="http://search.thompson-morgan.com/includes/images/fcp_orange.png"> \
                    <img id="gps_folc" title="Yellow" class="fcp2 " value="foliagecolour:yellow" src="http://search.thompson-morgan.com/includes/images/fcp_yellow.png"> \
                    <img id="gps_folc" title="Green" class="fcp2 " value="foliagecolour:green" src="http://search.thompson-morgan.com/includes/images/fcp_green.png"> \
                    <img id="gps_folc" title="Blue" class="fcp2 " value="foliagecolour:blue" src="http://search.thompson-morgan.com/includes/images/fcp_blue.png"> \
                    <img id="gps_folc" title="Purple" class="fcp2 " value="foliagecolour:purple" src="http://search.thompson-morgan.com/includes/images/fcp_purple.png"> \
                    <img id="gps_folc" title="Silver" class="fcp2 " value="foliagecolour:silver" src="http://search.thompson-morgan.com/includes/images/fcp_silver.png"> \
                    <img id="gps_folc" title="Black" class="fcp2 " value="foliagecolour:black" src="http://search.thompson-morgan.com/includes/images/fcp_black.png"> \
                </div> \
            </div> \
            <div class="exp-pf-range"> \
                <div class="pad_b_20 exp-pf-range__wrapper"> \
                    <h2 class="pad_b_10">Flowering Period <em class="exp-optional">(optional)</em></h2> \
                    <div id="slider-floweringmonth-low" class="sli_slider_low"></div> \
                    <div id="slider-floweringmonth" class="sli_custom_slider"></div> \
                    <div id="slider-floweringmonth-high" class="sli_slider_high"></div> \
                </div> \
                <div class="pad_b_20 exp-pf-range__wrapper"> \
                    <h2 class="pad_b_10">Sowing Period <em class="exp-optional">(optional)</em></h2> \
                    <div id="slider-sowingmonth-low" class="sli_slider_low"></div> \
                    <div id="slider-sowingmonth" class="sli_custom_slider"></div> \
                    <div id="slider-sowingmonth-high" class="sli_slider_high"></div> \
                </div> \
            </div> \
        </fieldset> \
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
.exp-pf-accordion__title:hover strong { \
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
    margin-top: 20px; \
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
    width: 100% !important; \
    font-size: 12px; \
    overflow: auto; \
    padding: 10px 0 0 0; \
} \
.exp-pf-radio__wrapper span { \
    width: 16%; \
    display: block; \
    float: left; \
} \
.exp-pf-radio__wrapper label { \
    position: relative; \
    top: -3px; \
} \
.gps .pad_b_20.exp-pf-checkbox__wrapper { \
    width: 40% !important; \
    float: left; \
    position: relative; \
    padding: 10px 0 0 0; \
} \
.gps .exp-pf-checkbox__wrapper__middle { \
    width: 185px !important; \
    float: left; \
    position: relative; \
    border-left: 1px solid #000; \
    left: 92px; \
} \
.gps .exp-pf-checkbox__wrapper__middle span { \
    position: relative; \
    left: -12px; \
    font-weight: bold; \
    font-size: 16px; \
} \
.gps .exp-pf-checkbox__wrapper__middle + .pad_b_20.exp-pf-checkbox__wrapper { \
    float: right; \
} \
.exp-pf-checkbox__wrapper h2.pad_b_10 { \
    width: 100% !important; \
} \
.exp-cb-column { \
    width: 50%; \
    float: left; \
    position: relative; \
    font-size: 13px; \
} \
.exp-optional { \
    font-size: 13px; \
    font-weight: normal; \
    position: relative; \
    left: 20px; \
} \
.exp-pf-range { \
    clear: both; \
    overflow: auto; \
} \
.exp-pf-range__wrapper { \
    width: 50%; \
    float: left; \
} \
.gps .pad_b_20.exp-pf-checkbox__wrapper__colour input { \
    display: none; \
} \
.gps .pad_b_20.exp-pf-checkbox__wrapper__colour img { \
    width: 44px; \
    height: 44px; \
} \
.gps .pad_b_20.exp-pf-checkbox__wrapper__colour { \
    width: 45% !important; \
} \
.gps .exp-pf-checkbox__wrapper__middle__colour { \
    width: 93px !important; \
    left: 46px !important; \
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

// function to set the options as last searched
exp.func.setLastSearch = function() {
    var searchStr = decodeURIComponent(window.location.search);
    var idealForSearch = searchStr.match(/(idealfor:)([a-z]+)/g);
    function checkRadios(name, val) {
        $('.exp-pf-accordion input[name="'+name+'"]').prop('checked',false);
        $('.exp-pf-accordion input[value="'+val+'"]').prop('checked',true);
    }
    function checkCheckboxes(name, val) {
        $('.exp-pf-accordion input[value="'+val+'"]').prop('checked',true);
    }
    function checkColours(elem) {
        elem.addClass('selected');
        console.log(elem);
        exp.func.selectColour( elem );
    }
    // Get radio vals
    $('table input:radio:checked').each( function(){
        checkRadios($(this).attr('name'), $(this).val());
    });
    // Get select vals
    if($("#gps_ha").val()){
        checkRadios($("#gps_ha").attr('name'), 'hardiness:'+$("#gps_ha").val());
    }
    if($("#gps_lo").val()){
        checkRadios($("#gps_lo").attr('name'), 'longevity:'+$("#gps_lo").val());
    }  
    if($("#gps_po").val()){
        checkRadios($("#gps_po").attr('name'), 'position:'+$("#gps_po").val());
    }    
    if($("#gps_sm").val()){
        checkRadios($("#gps_sm").attr('name'), 'soilmoisture:'+$("#gps_sm").val());
    }
    if($("select#gps_if").val()){
        checkCheckboxes($("select#gps_if").attr('name'), 'idealfor:'+$("select#gps_if").val());
    }
    // get checkbox vals
/*    $('table input[name=gps_gi]').each(function(){
        var $this = $(this);
        var val = $this.val();
        var name = $this.attr('name');
        if($this.attr('checked')){
            checkCheckboxes(name, val);
        }
    });
*/
    // get ideal for checkboxes
    if( idealForSearch !== null ) {
        $.each(idealForSearch, function(index, val) {
            checkCheckboxes('gps_if', val);
        });
    }
    // get colour options
    $("table .fcp1").each(function(elem) {
        var $this = $(this);
        var val = $this.attr('value');
        if($this.hasClass("selected")){
            checkColours( $('.exp-pf-accordion .fcp1[value="'+val+'"]') );
        }
    });
    $("table .fcp2").each(function(elem) {
        var $this = $(this);
        var val = $this.attr('value');
        if($this.hasClass("selected")){
            checkColours( $('.exp-pf-accordion .fcp2[value="'+val+'"]') );
        }
    });

//    if($("#gps_if").val()){options.push("idealfor:"+$("#gps_if").val())} 
    // wierd bug
    if( $('.exp-pf-accordion input[name="gps_st"]:checked').length === 0 ) {
        $('.exp-pf-accordion input[value="soiltype:anygardensoil"]').prop('checked',true);
    }
 
};

// update the range sliders positions
exp.func.updateRangePositions = function() {
    if( sowingmonthrange !== undefined ) {
        var s_pos = sowingmonthrange.match(/([0-9]+)/g);
        sowingmonth.update({ selection:[s_pos[0], s_pos[1]] });
    }
    if( floweringmonthrange !== undefined ) {
        var f_pos = floweringmonthrange.match(/([0-9]+)/g);
        floweringmonth.update({ selection:[f_pos[0], f_pos[1]] });
    }
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
    if(exp.vars.sowingmonthrange){options.push(exp.vars.sowingmonthrange);}
//    if(harvestperiodrange){options.push(harvestperiodrange);}
    if(exp.vars.floweringmonthrange){options.push(exp.vars.floweringmonthrange);}

    var new_url = "http://search.thompson-morgan.com/search?w=*&ts=plantfinder&af=tab:products";
    
    for(var i=options.length-1; i>=0; i--) {
        var value = options[i];
        new_url = new_url + "%20" +value;
    }
    console.log(new_url);
    window.parent.location.href = new_url;
    
    return false;

};

exp.func.selectColour = function( elem ) {
    var _this = elem || $(this);
    var areg = new RegExp(/fcp_([^\.]+)/i);
    var filename = _this.attr('src').match(areg);
    var file_name = filename[1];
    _this.toggleClass('selected');
    if (_this.hasClass('fcp2')) {
        $('#gps_folc_nopref').removeAttr('checked');
    }
    if (_this.hasClass('fcp1')) {
        $('#gps_floc_nopref').removeAttr('checked');
    }
    if (file_name.toLowerCase().indexOf('selected') >= 0) {
        _this.attr('src', 'http://thompson-morgan.resultspage.com/includes/images/fcp_' + file_name.replace('selected_', '') + '.png');
    } else {
        _this.attr('src', 'http://thompson-morgan.resultspage.com/includes/images/fcp_selected_' + file_name + '.png');
    }
};

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
            break;
    }
    $("#info-content-title").html(name);
    $("#info-content-text").html(info);
    $("#info-box").show("slow");
    return false;
};

exp.func.initSliders = function(){
    var updatefloweringmonthLabel = function() {    
    document.getElementById('slider-floweringmonth-low').innerHTML = "" + months[floweringmonth.format(floweringmonth.selection()[0])];
    document.getElementById('slider-floweringmonth-high').innerHTML = "" + months[floweringmonth.format(floweringmonth.selection()[1])];
if((1 != floweringmonth.selection()[0]) || (12 != floweringmonth.selection()[1]) ){
        floweringmonthrange =  'floweringmonth:[' + floweringmonth.format(floweringmonth.selection()[0]) + ',' + floweringmonth.format(floweringmonth.selection()[1]) + ']';
    }
};
window.floweringmonth = new SLI.Slider('slider-floweringmonth', {
        topic           :'floweringmonth'
      , topicName       :'FloweringMonth'
      , field           :'floweringmonth'
      , increment       :1
      , label           :''
      , divisor         :1
      , rangeStarts     :1
      , rangeEnds       :12
      , selection       :[1, 12]
      , positions       :[ 1,2,3,4,5,6,7,8,9,10,11,12 ]
      , counts          :[ 49,115,216,391,644,1588,1927,1744,1253,557,58,29 ]
      , boundaryCounts  :[ 115,216,391,644,1588,1927,1744,1253,557,58,29,0 ]
      , decimals: 0
      , move: function(index, value, data) {
            document.getElementById('slider-floweringmonth-low').innerHTML = "" + months[floweringmonth.format(floweringmonth.selection()[0])];
            document.getElementById('slider-floweringmonth-high').innerHTML = "" + months[floweringmonth.format(floweringmonth.selection()[1])];
      }
      , change: function(data) {
            var rangeIsEmpty = (data.counts[0] === 0);            
            var rangeIsDifferent = (data.selection[0] !== 1 || data.selection[1] !== 12);
            var backToOriginalPositions = (data.selection[0] === 1) && (data.selection[1] === 12);
            if (rangeIsDifferent && !rangeIsEmpty) {
                !!jQuery.scrollTo && jQuery.scrollTo(0,800);
                if (backToOriginalPositions) {
                //do nothing
                     window.floweringmonthrange = '';
                } else {
    
                     window.floweringmonthrange =  'floweringmonth:[' + data.selection[0] + ',' + data.selection[1] + ']';
              }
            }
            if (rangeIsEmpty) {
                this.update({ selection:[1, 12] });
                updatefloweringmonthLabel();
            }
      }
});
updatefloweringmonthLabel();

var updatesowingmonthLabel = function() {   
    document.getElementById('slider-sowingmonth-low').innerHTML = "" + months[sowingmonth.format(sowingmonth.selection()[0])];
    document.getElementById('slider-sowingmonth-high').innerHTML = "" + months[sowingmonth.format(sowingmonth.selection()[1])];
if((1 != sowingmonth.selection()[0]) || (12 != sowingmonth.selection()[1]) ){
        sowingmonthrange =  'sowingmonth:[' + sowingmonth.format(sowingmonth.selection()[0]) + ',' + sowingmonth.format(sowingmonth.selection()[1]) + ']';
    }
};
window.sowingmonth = new SLI.Slider('slider-sowingmonth', {
        topic           :'sowingmonth'
      , topicName       :'SowingMonth'
      , field           :'sowingmonth'
      , increment       :1
      , label           :''
      , divisor         :1
      , rangeStarts     :1
      , rangeEnds       :12
      , selection       :[1, 12]
      , positions       :[ 1,2,3,4,5,6,7,8,9,10,11,12 ]
      , counts          :[ 166,717,1358,1411,975,656,419,265,267,203,64,73 ]
      , boundaryCounts  :[ 717,1358,1411,975,656,419,265,267,203,64,73,0 ]
      , decimals: 0
      , move: function(index, value, data) {
            document.getElementById('slider-sowingmonth-low').innerHTML = "" + months[sowingmonth.format(sowingmonth.selection()[0])];
            document.getElementById('slider-sowingmonth-high').innerHTML = "" + months[sowingmonth.format(sowingmonth.selection()[1])];
      }
      , change: function(data) {
            var rangeIsEmpty = (data.counts[0] === 0);            
            var rangeIsDifferent = (data.selection[0] !== 1 || data.selection[1] !== 12);
            var backToOriginalPositions = (data.selection[0] === 1) && (data.selection[1] === 12);
            if (rangeIsDifferent && !rangeIsEmpty) {
                !!jQuery.scrollTo && jQuery.scrollTo(0,800);
                if (backToOriginalPositions) {
                //do nothing
                    window.sowingmonthrange = '';
                } else {
                     window.sowingmonthrange =  'sowingmonth:[' + data.selection[0] + ',' + data.selection[1] + ']';
              }
            }
            if (rangeIsEmpty) {
                this.update({ selection:[1, 12] });
                updatesowingmonthLabel();
            }
      }
});
updatesowingmonthLabel();

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
        $('.wrapper').append( exp.vars.view );

        // Set last searched options
        exp.func.setLastSearch();

        // remove old form
        $('.wrapper table, .wrapper h1.pad_b_10:eq(0), .wrapper p.pad_b_20').remove();

        // attach handlers to accordion
        $('.exp-pf-accordion__title').bind('click', exp.func.accordionOpen );

        // attach handler to button
        $('.exp-pf-button').bind('click', exp.func.doSearch );

        // attach handlers to more info icons
        $('.more_info').bind('click', exp.func.moreInfoPopUp );

        // init custom checkboxes
        Custom.init();

        // init range sliders
        exp.func.initSliders();
        exp.func.updateRangePositions();

        // attach handlers to colour options
        $('.fcp1,.fcp2').bind('click', exp.func.selectColour );

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);