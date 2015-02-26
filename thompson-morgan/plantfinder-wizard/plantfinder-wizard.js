var AWA_PF = (window.location.toString().indexOf('plantfinder') !== -1) ? true : false;
  
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
  
  if( !AWA_PF ) {
    return false;
  }

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
exp.log('Plantfinder wizard - 0.41');

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
                        <input name="gps_st" value="" type="radio" id="gps_st_0"> \
                        <label for="gps_st_0">No Preference</label> \
                    </span> \
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
                            <input type="checkbox" name="gps_gi" value="growin:borders" id="gps_gi_0"/><label for="gps_gi_0">Borders</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:containers" id="gps_gi_1" /><label for="gps_gi_1">Containers</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:baskets" id="gps_gi_2" /><label for="gps_gi_2">Baskets</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:beds" id="gps_gi_3" /><label for="gps_gi_3">Beds</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:raisedbed" id="gps_gi_4" /><label for="gps_gi_4">Raised Bed</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:windowboxes" id="gps_gi_5" /><label for="gps_gi_5">Window Boxes</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:vegetableplot" id="gps_gi_6" /><label for="gps_gi_6">Vegetable Plot</label></div> \
                    </div> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:indoorplant" id="gps_gi_7" /><label for="gps_gi_7">Indoor Plant</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:patiobag" id="gps_gi_8" /><label for="gps_gi_8">Patio Bag</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:flowerpouches" id="gps_gi_9" /><label for="gps_gi_9">Flower Pouches</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:wallsfences" id="gps_gi_10" /><label for="gps_gi_10">Walls & Fences</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:patioclimber" id="gps_gi_11" /><label for="gps_gi_11">Patio Climber</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:potatobags" id="gps_gi_12" /><label for="gps_gi_12">Potato Bags</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_gi" value="growin:ponds" id="gps_gi_13" /><label for="gps_gi_13">Ponds</label></div> \
                    </div> \
                </div> \
                <div class="exp-pf-checkbox__wrapper__middle"> \
                    <span>OR</span> \
                </div> \
                <div class="pad_b_20 exp-pf-checkbox__wrapper" id="ideal_for"> \
                    <h2 class="pad_b_10">Ideal For <em class="exp-optional">(optional)</em></h2> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:alpinerockery" id="gps_if_0" /><label for="gps_if_0">Alpine &amp; Rockery</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:coastalgarden" id="gps_if_1" /><label for="gps_if_1">Coastal Garden</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:conservatory" id="gps_if_2" /><label for="gps_if_2">Conservatory</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:cottagegardens" id="gps_if_3" /><label for="gps_if_3">Cottage Gardens</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:cutflowergarden" id="gps_if_4" /><label for="gps_if_4">Cut Flower Garden</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:exoticgarden" id="gps_if_5" /><label for="gps_if_5">Exotic Garden</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:greenhouse" id="gps_if_6" /><label for="gps_if_6">Greenhouse</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:groundcover" id="gps_if_7" /><label for="gps_if_7">Ground Cover</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:hedges" id="gps_if_8" /><label for="gps_if_8">Hedges</label></div> \
                    </div> \
                    <div class="exp-cb-column"> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:kitchengarden" id="gps_if_9" /><label for="gps_if_9">Kitchen Garden</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:lowmaintenancegarden" id="gps_if_10" /><label for="gps_if_10">Low Maintenance Garden</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:patio" id="gps_if_11" /><label for="gps_if_11">Patio</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:scentedgardens" id="gps_if_12" /><label for="gps_if_12">Scented Gardens</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:specimenplant" id="gps_if_13" /><label for="gps_if_13">Specimen Plant</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:wallsandfences" id="gps_if_14" /><label for="gps_if_14">Walls And Fences</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:watergarden" id="gps_if_15" /><label for="gps_if_15">Water Garden</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:wildlifegardens" id="gps_if_16" /><label for="gps_if_16">Wildlife Gardens</label></div> \
                        <div class="cb"> \
                            <input type="checkbox" name="gps_if" value="idealfor:woodlandgarden" id="gps_if_17" /><label for="gps_if_17">Woodland Garden</label></div> \
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
                <h2 class="pad_b_10">Longevity  <a class="more_info" name="Longevity" href="#">&nbsp;</a></h2> \
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
                    <span title="Apricot" class="apricot fcp1 " value="flowercolour:apricot"></span> \
                    <span title="Brown" class="brown fcp1 " value="flowercolour:brown"></span> \
                    <span title="Grey" class="grey fcp1 " value="flowercolour:grey"></span> \
                    <span title="Mixed" class="mixed fcp1 " value="flowercolour:mixed"></span> \
                    <span title="Red" class="red fcp1 " value="flowercolour:red"></span> \
                    <span title="Pink" class="pink fcp1 " value="flowercolour:pink"></span> \
                    <span title="Orange" class="orange fcp1 " value="flowercolour:orange"></span> \
                    <span title="Yellow" class="yellow fcp1 " value="flowercolour:yellow"></span> \
                    <span title="Green" class="green fcp1 " value="flowercolour:green"></span> \
                    <span title="Blue" class="blue fcp1 " value="flowercolour:blue"></span> \
                    <span title="Purple" class="purple fcp1 " value="flowercolour:purple"></span> \
                    <span title="Mauve" class="mauve fcp1 " value="flowercolour:mauve"></span> \
                    <span title="Lilac" class="lilac fcp1 " value="flowercolour:lilac"></span> \
                    <span title="Silver" class="silver fcp1 " value="flowercolour:silver"></span> \
                    <span title="Black" class="black fcp1 " value="flowercolour:black"></span> \
                    <span title="Cream" class="cream fcp1 " value="flowercolour:cream"></span> \
                    <span title="White" class="white fcp1 " value="flowercolour:white"></span> \
                </div> \
                <div class="exp-pf-checkbox__wrapper__middle exp-pf-checkbox__wrapper__middle__colour"> \
                    <span>OR</span> \
                </div> \
                <div class="pad_b_20 exp-pf-checkbox__wrapper exp-pf-checkbox__wrapper__colour"> \
                    <h2 class="pad_b_10">Foliage Colour <em class="exp-optional">(optional)</em></h2> \
                    <input id="gps_folc_nopref" name="gps_folc_nopref" type="checkbox"> \
                    <span title="Brown" class="brown fcp2 " value="foliagecolour:brown"></span> \
                    <span title="Variegated" class="variegated fcp2 " value="foliagecolour:variegated"></span> \
                    <span title="Mixed" class="mixed fcp2 " value="foliagecolour:mixed"></span> \
                    <span title="Red" class="red fcp2 " value="foliagecolour:red"></span> \
                    <span title="Pink" class="pink fcp2 " value="foliagecolour:pink"></span> \
                    <span title="Orange" class="orange fcp2 " value="foliagecolour:orange"></span> \
                    <span title="Yellow" class="yellow fcp2 " value="foliagecolour:yellow"></span> \
                    <span title="Green" class="green fcp2 " value="foliagecolour:green"></span> \
                    <span title="Blue" class="blue fcp2 " value="foliagecolour:blue"></span> \
                    <span title="Purple" class="purple fcp2 " value="foliagecolour:purple"></span> \
                    <span title="Silver" class="silver fcp2 " value="foliagecolour:silver"></span> \
                    <span title="Black" class="black fcp2 " value="foliagecolour:black"></span> \
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
<a href="#" class="exp-pf-button">Find Plants</a> \
<a href="#" class="exp-pf-clear-all">Clear all</a> \
<span class="exp-pf-search-lookahead">&nbsp;</span>'
};

// Styles

exp.siteCSS = ' \
#sli_plant_finder { \
    height: 2000px; \
    padding: 0 !important; \
} \
#sli_plant_finder__wrapper { \
    height: 310px; \
    overflow: hidden; \
    clear: both; \
    border: 1px solid #BCC366; \
    width: 976px; \
    position: relative; \
    left: 12px; \
    visibility: hidden; \
} \
.exp-modal-error__bg { \
    position: absolute; \
    top: 0; \
    left: 0; \
    width: 100%; \
    z-index: 50; \
    background: rgba(50,50,50,0.5); \
} \
.exp-modal-error { \
    z-index: 99; \
    width: 40%; \
    position: absolute; \
    top: 300px; \
    left: 30%; \
    background: #fff; \
    border-radius: 8px; \
    padding: 15px 0; \
} \
.exp-modal-error p { \
    padding: 10px 80px 0 40px; \
} \
.exp-modal-error__button { \
    display: block; \
    width: 160px; \
    text-align: center; \
    margin: 15px auto 0 auto; \
    background: #ddd; \
    border-radius: 8px; \
    padding: 5px 0; \
    border: 1px solid #ccc; \
} \
.exp-modal-error__button:hover { \
    background: #eee; \
} \
.exp-modal-error__cross { \
    position: absolute; \
    top: 5px; \
    right: 5px; \
    background: #bbb; \
    width: 19px; \
    height: 19px; \
    line-height: 16px; \
    border-radius: 19px; \
    text-align: center; \
    font-weight: bold; \
    color: #fff !important; \
    font-size: 16px; \
} ';

exp.frameCSS = ' \
body { \
    background: #DBEBD4; \
} \
.wrapper { \
    background: #DBEBD4; \
} \
.gps h1 { \
    color: #000; \
} \
.gps { \
    border: 0; \
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
    background-repeat: no-repeat; \
    background-color: #274E13; \
    background-position: 15px 7px; \
    color: #fff; \
    font-weight: bold; \
    margin: 20px auto 10px auto !important; \
    width: 95px; \
    padding: 10px 10px 10px 50px; \
    text-decoration: none; \
    border-radius: 4px; \
    display: none; \
} \
.exp-pf-button.js-show { \
    display: block !important; \
} \
.exp-pf-search-lookahead { \
    text-align: center; \
    display: block; \
    font-size: 0.7em; \
    margin: 0 0 5px 0; \
    display: none; \
} \
.exp-pf-clear-all { \
    text-align: center; \
    display: block; \
    font-size: 0.8em; \
    margin: 0 0 10px 0; \
    color: #274E13; \
    display: none; \
} \
.exp-pf-search-lookahead.js-show, \
.exp-pf-clear-all.js-show { \
    display: block !important; \
} \
.gps .exp-pf-radio__wrapper { \
    width: 100% !important; \
    font-size: 12px; \
    overflow: auto; \
    padding: 10px 0 0 0; \
} \
.exp-pf-radio { \
    padding-top: 10px; \
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
.gps .pad_b_20.exp-pf-checkbox__wrapper input { \
    margin: 2px 4px 0 0; \
} \
.gps .exp-pf-checkbox__wrapper__middle { \
    /*width: 185px !important;*/ \
    height: 240px; \
    float: left; \
    position: relative; \
    border-left: 1px solid #CDCECC; \
    left: 92px; \
    top: 20px; \
} \
.gps .exp-pf-checkbox__wrapper__middle span { \
    position: relative; \
    left: -12px; \
    top: 50%; \
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
    padding: 20px 0 0 0; \
} \
.sli_custom_slider { \
    width: 300px !important; \
    margin-right: 10px !important; \
} \
.gps .pad_b_20.exp-pf-range__wrapper { \
    width: 50% !important; \
    float: left; \
    display: none; \
} \
.exp-pf-range__wrapper h2 { \
    clear: both !important; \
    display: block !important; \
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
   /* width: 93px !important; */ \
    left: 46px !important; \
    height: 310px; \
} \
.gps .fcp1, .gps .fcp2 { \
    border: 2px solid #ccc; \
    width: 55px; \
    height: 55px; \
    margin: 10px 9px 0 10px; \
    padding: 0 !important; \
    position: relative; \
} \
.gps .fcp1.selected, .gps .fcp2.selected { \
    border: 2px solid #fff; \
} \
.gps .fcp1.selected:before, .gps .fcp2.selected:before { \
    content: ""; \
    position: absolute; \
    top: 18px; \
    left: 16px; \
    display: block; \
    width: 24px; \
    height: 19px; \
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATBAMAAAB4ntAIAAAAA3NCSVQICAjb4U/gAAAAFVBMVEX///////////////////////////9nSIHRAAAAB3RSTlMAETNmzO7/EGgPJAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMi8wMi8xNUo6+wwAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3Jrc0+zH04AAABgSURBVAiZTc7BDYAwCAXQH13AOIGX3nvy3oMLkOgCbf/+I2gtLXAB8iAAjAhxlliebE0gowGZHbA6oABrGnAAZ9kMyGRAll0BLV8K/wQV+q7CIHH3FDqJ+3FCowkf3QovAbwkmQrJtmwAAAAASUVORK5CYII="); \
} \
.fcp1.apricot,.fcp2.apricot { background-color: #FFC15C; } \
.fcp1.brown,.fcp2.brown{ background-color: #7B472F; } \
.fcp1.grey,.fcp2.grey{ background-color: #ccc; } \
.fcp1.mixed,.fcp2.mixed{ background-image: url("data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA3ADcDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABgcEBQgJAgP/xAAoEAABAwQCAQMEAwAAAAAAAAABAAIDBAUREgYhMQciURMUFZEjYXH/xAAbAQACAwEBAQAAAAAAAAAAAAAFBgQHCAMJAv/EACURAAEEAgICAgMBAQAAAAAAAAABAgMEBRESIQYTBzEUIkEjUf/aAAwDAQACEQMRAD8AyfSwxhnS+JWGpKke0LBjIuihFhNB6tU5HuZsRZ15S/e6QasVQTkQqRrH1Aal5Z1GixQa1gwqWGEMa1cnzifPSRXbCOlo4SO1BksEJ8CIWMluiLQcdKJ7wfYiRDNtLXgMxlaPsVFRBYxlgsWVOfBS7agVCwKHBxI3Jz8JWvM6HCmxqEi3REzbhKNj9QrPpWjBoIXuIJCDSz6F6eNocW+hll166QmS5oBWdIE0lucI24blR0ui9beYRpnyAY7W8ZsY1zSpaGXRoQUcrsjKU8hiR3x+eRFTsKKfEjesZ+EgZTHuailk4nLNl12F1htkszwGxuKq3Ju9aqMtmyiN+x02Xi00gaTE7H+JIuXkQU7mTRP6M23cXeA3+I/pLc98XZ8iX1Tx1zImew/pQ2X9qBbN9DmxRWp72j2r1L/H2hmCLyJsf2oXUHFamYjWMoVZp7CDPO4IPtw0+M+mNdXzxbRkR5GxSZmacTI15BKp8wMgX9HGy+CejNhfTRbPjNRjtv8Aax/8j5Nakq8PosDH/K65Butjaj9LoaLqOJpAVITeSK9ewg7yVZP6Sxw0QdfSAUF2Y5HNcvyKy72ARRs9mF2rXdqR5L/I54WfiNOIw5zAvYz3sa083ch5daVelGtxzikc8rGsi9vzhAr+SZGgJr5a5ck1tR1inpLDb3BrWCXT4VL+U5lz9ohYdD/Bm3r2VfDeU1UN2c76h028ZWb/ADColpF2PPjWc4SdKa+s97ZXU8byWk4Cztk8asT1L1oX/cxF2X+1M8DbVLz4XoFWTqUV8o6SWOPGuVJqOkYpI/JOblgo/uA0HpuV66yZVUT7MEzYX2OHTbHU1spw5oGwHlKeSyTnBetjGVm9IDt7ub6lsjiTjHSrjKycjhZlciApxqoLa9wJ8uVb5eHminfA23e7RpnjHIDTlsT3HVVRl8Rz7L7weUVumqMf831kP8pRXE9/Q+xXCjvF7e1rC2QrvBiW/wDCT+VsxBZLoyKL2tXoDLZVTMrq6BP+cLm64PaB3JlU4Or7IlXXtfDjVK13sH3KO2kC1VDIakPASxah2hDxlP1y7GpR3cMDHhp6SpZoopatHpEUMKfkpcxoLSlybFpscKttdHxuHIG6N2YVHTHogTZZU//Z"); } \
.fcp1.red,.fcp2.red { background-color: #f00; } \
.fcp1.pink,.fcp2.pink{ background-color: #FF94CB; } \
.fcp1.orange,.fcp2.orange{ background-color: #FE7F0E; } \
.fcp1.yellow,.fcp2.yellow{ background-color: #FFFF2F; } \
.fcp1.green,.fcp2.green{ background-color: #009900; } \
.fcp1.blue,.fcp2.blue{ background-color: #0066ff; } \
.fcp1.purple,.fcp2.purple{ background-color: #9933CC; } \
.fcp1.mauve,.fcp2.mauve { background-color: #CFAAD5; } \
.fcp1.lilac,.fcp2.lilac{ background-color: #BDB6E0; } \
.fcp1.silver,.fcp2.silver{ background-color: #ccc; } \
.fcp1.black,.fcp2.black{ background-color: #000; } \
.fcp1.cream,.fcp2.cream{ background-color: #FCFAE3; } \
.fcp1.white,.fcp2.white{ background-color: #fff; } \
.fcp1.variegated,.fcp2.variegated{ background-image: url("data:image/gif;base64,R0lGODlhNwA3AJEAAFiBJf///8DQrQAAACH5BAAHAP8ALAAAAAA3ADcAAAKfVI6py+0OzJu0LhCt3gxnDmreF5bQKJlqMmLpqrYuvMozXdo3zuk7b/H9gBPhkNgwHpEK5ZJ5cD6Z0imxauVhs7Qtt+YlUcPiK7msPaO76jW4/WK33bn5N2i/U/KeeJ1PJwKolzRIeGF4yJKoGMXY+NgHEim5QVmJdxnYpHnXifnwCVooulk6ynlKp4rqyLr2iho7Ogtai3lbmSu521cAADs="); } \
/* */';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

exp.func.clearAll = function() {
    $('#gps_po_1,#gps_st_0,#gps_sm_1,#gps_pt_1,#gps_ha_1,#gps_lo_1').trigger('click');
    sowingmonth.update({ selection:[0, 12] });
    updatesowingmonthLabel();
    window.sowingmonthrange = '';
    floweringmonth.update({ selection:[0, 12] });
    updatefloweringmonthLabel();
    window.floweringmonthrange = '';
    $('.fcp1.selected,.fcp2.selected').trigger('click');
    $('.exp-pf-checkbox__wrapper input:checked').trigger('click');
/*    $('.exp-pf-checkbox__wrapper span.checkbox').each(function(){
        $this = $(this);
        if($this.attr('style') === 'background-position: 0px -50px;') {
            $this.trigger('mousedown').trigger('mouseup');
        }
    });
*/
    exp.func.searchLookAhead();
    return false;
};

exp.func.searchLookAhead = function(noModal) {
    noModal = noModal || false;
    var $resultHolder = $('.exp-pf-search-lookahead');
    var searchURL = exp.func.doSearch('return_url');
    $resultHolder.html('. . .');
    exp.log(searchURL);
    $.ajax({
        url: searchURL,
        type: 'GET',
        success: function(resp) {
            var $resp = $(resp);
            var $resultsDiv = $resp.find('#sli_bct div:eq(0)');
            if( $resultsDiv.length === 1 ) {
                $resultHolder.html( $resultsDiv.html().match(/(of )([0-9]+)( S)/)[2] + ' plants match your criteria');
            } else {
                $resultHolder.html( 'No plants match your criteria');
                if( !noModal ) {
                    exp.func.noResultsModal( 'frame', parent.$(window), parent.$('body'), parent.$(document) );
                }
            }
        }
    });
};

// open accordion
exp.func.accordionOpen = function() {
    var _this = $(this);
    _this.hide(0);
    _this.next('.exp-pf-accordion__content').show(0);
    $('.exp-pf-button').addClass('js-show');
    $('.exp-pf-search-lookahead').addClass('js-show');
    $('.exp-pf-clear-all').addClass('js-show');

    //adjust iframe height, we have to wait a moment or the dom isnt ready after opening the accordion
    setTimeout( 
        function(){
            exp.func.iframeHeight( parent.$('#sli_plant_finder__wrapper'), $('body').height() + 50 );
        },
        300
    );
};

// function to set the options as last searched
exp.func.setLastSearch = function() {
    var searchStr = decodeURIComponent(window.location.search);
    var idealForSearch = searchStr.match(/(idealfor:)([a-z]+)/g);
    var soilTypeSearch = searchStr.match(/(soiltype:)([a-z]+)/g);

    function checkRadios(name, val) {
        $('.exp-pf-accordion input[name="'+name+'"]').prop('checked',false);
            $('.exp-pf-accordion input[value="'+val+'"]').prop('checked',true);
    }
    function checkCheckboxes(name, val) {
        $('.exp-pf-accordion input[value="'+val+'"]').prop('checked',true);
    }
    function checkColours(elem) {
        //elem.addClass('selected');
        exp.func.selectColour( false, elem );
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
    $('table input[name=gps_gi]').each(function(){
        var $this = $(this);
        var val = $this.val();
        var name = $this.attr('name');
        if($this.attr('checked')){
            checkCheckboxes(name, val);
        }
    });

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

    // wierd bug
    if( $('.exp-pf-accordion input[name="gps_st"]:checked').length === 0 ) {
        if( soilTypeSearch !== null ) {
            $('.exp-pf-accordion input[value="'+soilTypeSearch+'"]').prop('checked',true);
        } else {
            $('.exp-pf-accordion input#gps_st_0').prop('checked',true);
        }
    }
 
};

// update the range sliders positions
exp.func.updateRangePositions = function() {
    if( sowingmonthrange !== undefined ) {
        var s_pos = sowingmonthrange.match(/([0-9]+)/g);
        sowingmonth.update({ selection:[s_pos[0], s_pos[1]] });
        updatesowingmonthLabel();
    }
    if( floweringmonthrange !== undefined ) {
        var f_pos = floweringmonthrange.match(/([0-9]+)/g);
        floweringmonth.update({ selection:[f_pos[0], f_pos[1]] });
        updatefloweringmonthLabel();
    }
};

// function to do the search
// adapted from original page
exp.func.doSearch = function(type){
    type = type || false;
    var options = [];
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

    var new_url = "http://"+window.location.hostname+"/search?w=*&ts=plantfinder&af=tab:products";
    
    for(var i=options.length-1; i>=0; i--) {
        var value = options[i];
        new_url = new_url + "%20" +value;
    }
    if( type === 'return_url' ) {
        return new_url;
    } else {
        window.parent.location.href = new_url;
        return false;
    }

};

exp.func.selectColour = function( ev, elem ) {
    var _this = elem || $(this);
//    var areg = new RegExp(/fcp_([^\.]+)/i);
//    var filename = _this.attr('src').match(areg);
//    var file_name = filename[1];
    _this.toggleClass('selected');
    if (_this.hasClass('fcp2')) {
        $('#gps_folc_nopref').removeAttr('checked');
    }
    if (_this.hasClass('fcp1')) {
        $('#gps_floc_nopref').removeAttr('checked');
    }
//    if (file_name.toLowerCase().indexOf('selected') >= 0) {
//        _this.attr('src', 'http://thompson-morgan.resultspage.com/includes/images/fcp_' + file_name.replace('selected_', '') + '.png');
//    } else {
//        _this.attr('src', 'http://thompson-morgan.resultspage.com/includes/images/fcp_selected_' + file_name + '.png');
//    }
};

// open up the more info dialog
exp.func.moreInfoPopUp = function() {
    var $this = $(this);
    var name = $this.attr("name");
    var pos = $this.position().top;
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
    // reset makeFloat params
    $('#info-box').makeFloat({
        x: 250,
        y: (pos - 100),
        speed: 'fast'
    });
    return false;
};

exp.func.initSliders = function(){
    window.updatefloweringmonthLabel = function() {    
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
                window.floweringmonthrange =  'floweringmonth:[' + data.selection[0] + ',' + data.selection[1] + ']';

            } else if (backToOriginalPositions) {
                window.floweringmonthrange = '';
            }
            if (rangeIsEmpty) {
                this.update({ selection:[1, 12] });
                updatefloweringmonthLabel();
            }
            exp.func.searchLookAhead();
      }
});
updatefloweringmonthLabel();

window.updatesowingmonthLabel = function() {   
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
            if (!rangeIsEmpty && rangeIsDifferent) {
                !!jQuery.scrollTo && jQuery.scrollTo(0,800);
                window.sowingmonthrange =  'sowingmonth:[' + data.selection[0] + ',' + data.selection[1] + ']';
            } else if (backToOriginalPositions) {
                window.sowingmonthrange = '';
            }
            if (rangeIsEmpty) {
                this.update({ selection:[1, 12] });
                updatesowingmonthLabel();
            }
            exp.func.searchLookAhead();
      }
});
updatesowingmonthLabel();

};

exp.func.iframeHeight = function( $elem, height ) {
    $elem.parent('div').css({'height':'auto'});
    $elem.css({'height':height + 'px'});
};

exp.func.closeModal = function() {
    parent.$('.exp-modal-error,.exp-modal-error__bg').hide(100);
    return false;
};

window.awaScrollTop = function() {
    $(window).scrollTop(200);
};

window.awaGetScrollTop = function() {
    return ($(window).scrollTop() + 200).toString() + 'px';
};

exp.func.noResultsModal = function(page,$window,$body,$document) {
    // scroll to search area
    var modalPos;
    if( page === 'site' ) {
        if( $('.exp-modal-error').length !== 0 ) {
            return false;
        }
        modalPos = '300px';
        $(window).scrollTop(200);
    } else {
        if( parent.$('.exp-modal-error').length !== 0 ) {
            return false;
        }
        modalPos = parent.awaGetScrollTop();
        //parent.awaScrollTop();
    }
    if( page === 'site' ) {
        $('.sli_plantfinder_noresults').remove();
    }
    $body.append('<div class="exp-modal-error" style="top:'+modalPos+' !important"> \
        <p>Sorry, this time we\'re not able to offer you any plants which \
         exactly match all your requirements. Please try again, choosing \
         different options.</p> \
         <p>For the best results, use fewer filters.</p> \
         <a href="#" class="exp-modal-error__button js-close-modal">Select another option</a> \
         <a href="#" class="exp-modal-error__cross js-close-modal">x</a> \
         </div>'
    );
    $body.append('<div class="exp-modal-error__bg js-close-modal" style="height:'+$document.height()+'px" />');
    
    if( page === 'site' ) {
        $('.js-close-modal').bind('click', exp.func.closeModal );
    } else {
        parent.$('.js-close-modal').bind('click', exp.func.closeModal );
    }
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


// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    if( this.vars.page === 'site' ) {

        // append styles to head
        $('head').append('<style type="text/css">'+this.siteCSS+'</style>');

        // wrap iframe in a div
        if( $('#sli_plant_finder__wrapper').length === 0 ) {
            $('#sli_plant_finder').parent('div').css({'height':'auto'});
            $('#sli_plant_finder').wrap('<div id="sli_plant_finder__wrapper" />');
        }

        // check for error message and customize
        if( $('.sli_plantfinder_noresults').length === 1 ) {
            exp.func.noResultsModal( 'site', $(window), $('body'), $(document) );
        }

    } else if ( this.vars.page === 'frame' ) {

        if( $('.exp-pf-accordion__title').length !== 0 ) {
            return false;
        }

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

        // init range sliders
        exp.func.waitFor(
            function() {
                return (typeof SLI === 'object');
            },
            function() {
                $('.exp-pf-range__wrapper').css({'display': 'block'});
                exp.func.initSliders();
                exp.func.updateRangePositions();
            }
        );

        // attach handlers to colour options
        $('.fcp1,.fcp2').bind('click', exp.func.selectColour );

        // attach listener for search look ahead function
        $('.exp-pf-accordion__content').bind( 'mouseup', function(){
            setTimeout(exp.func.searchLookAhead, 500);
        });

        // attach listener for clear all option
        $('.exp-pf-clear-all').bind('click',exp.func.clearAll);

        // do an initial search ahead
        exp.func.searchLookAhead( true );

        // init custom checkboxes
        //Custom.init();

        // unhide our iframe
        parent.$('#sli_plant_finder__wrapper').css({'visibility': 'visible'});

        // reset makeFloat params
        $('#info-box').makeFloat({
            x: 250,
            y: 250,
            speed: 'fast'
        });

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);

// Advanced search global banner

//
// CGIT Optimizely Boilerplate - version 0.1.4
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exppf = (function($) {
  
  if( AWA_PF ) {
    return false;
  }

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
exp.log('Thompson & Morgan - Advanced search links - 0.2');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    alreadyRunChecks: {
        variation1: $('.exp-advanced-search'),
        variation2: $('.exp-plant-finder')
    },
    variation: 2,
    browseEntire: {
        element: $('#siteSearch .popularSearches'),
        title: 'Or <strong>browse</strong> the entire <strong class="exp-green">A-Z Plant Index</strong>',
        url: 'http://search.thompson-morgan.com/genus/'
    },
    advancedSearch: {
        element: $('#siteSearch'),
        title: 'advanced search',
        url: 'http://search.thompson-morgan.com/gardenplantfinder'
    },
    banner: {
        element: $('#mainNav').parents('.navigation-portlet'),
        html: '<div class="exp-plant-finder"> \
                   <a href="http://search.thompson-morgan.com/gardenplantfinder" class="exp-plant-finder--text-link">Find plants by colour, hardiness, position, flowering month and more</a> \
                   <a href="http://search.thompson-morgan.com/gardenplantfinder" class="exp-plant-finder--button">Find Plants</a> \
               </div>'
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#siteSearch { \
    text-align: left !important; \
    position: relative; \
    left: 264px; \
} \
.exp-green { \
    color: #345E2E; \
} \
.exp-advanced-search { \
    display: block; \
    padding: 2px 0 0 0; \
    position: relative; \
    left: 184px; \
    color: #666 !important; \
    text-decoration: underline; \
    font-size: 0.95em; \
    width: 90px; \
} \
.exp-advanced-search:hover, \
.exp-advanced-search:focus { \
    text-decoration: none; \
} \
.exp-plant-finder { \
    clear: both; \
    width: 972px; \
    background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/c824b2aca37fc5e932ab58eed6ea5fc9_31_31.png") 145px 4px no-repeat #99B547; \
    position: relative; \
    top: 12px; \
    left: -10px; \
    padding: 10px 0; \
    margin: 0 0 10px 0; \
    font-size: 1.4em; \
    color: #333; \
    position: relative; \
    text-align: center; \
} \
.exp-plant-finder--text-link { \
    font-size: 1.2em !important; \
    color: #333 !important; \
} \
.exp-plant-finder--button { \
    position: absolute; \
    top: 7px; \
    right: 10px; \
    display: block; \
    color: #fff !important; \
    font-size: 0.9em; \
    background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/01a78d82e2d7d99dfec2e3fa9683d26d_9_14.png") right no-repeat #345E2E; \
    border-right: 5px solid #345E2E; \
    padding: 3px 15px 3px 10px; \
} \
.exp-plant-finder--button:hover, \
.exp-plant-finder--button:focus { \
    color: #345E2E !important; \
    border-right: 5px solid #fff; \
    background: url("//dd6zx4ibq538k.cloudfront.net/static/images/2841/c86d95977b0b4a7326724699ecf910e4_9_14.png") right no-repeat #fff !important; \
}';

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    if( this.vars.variation === 1 && !this.vars.alreadyRunChecks.variation1.length ) {

        if( this.vars.browseEntire.element.length ) {

            this.vars.browseEntire.element
            .html( this.vars.browseEntire.title )
            .attr('href', this.vars.browseEntire.url );

            this.vars.advancedSearch.element.append(
                '<a href="'+this.vars.advancedSearch.url+'" class="exp-advanced-search">'+
                this.vars.advancedSearch.title+
                '</a>'
            );

        }

    } else if( this.vars.variation === 2 && !this.vars.alreadyRunChecks.variation2.length )  {

        if( this.vars.banner.element.length ) {
            this.vars.banner.element.after( this.vars.banner.html );
        }

    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);