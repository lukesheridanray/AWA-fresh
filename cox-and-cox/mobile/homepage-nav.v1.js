/* CUSTOM CODE */
// Homes antique image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/07d2884f402c6c5fe4e2dbebc555aa2d_home-antique-cox-awa.png
// Red Image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/567354712fe8309d7c19a9bd9212c61a_red-awa-cox.png
// House Beautiful https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/c49d72ef3f30c180d713d2c444aad857_house-beaut-awa-cox.png
//Home and Garden https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/49d1e71d1636c7e7631426f85edc5680_home-garden-awa-cox.png
// Elle Deco https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/665cd7db323632d49d245bb746ef1b91_elle-cox-awa.png
// Good Homes https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/472d653737c55ae7c67925342add82f1_goodhomes-cox-awa.png


if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {



    // Initialise the experiment object
    var exp = {};
    var exptwo= {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('Mobile - v2');

    /*
    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    exp.condition = $('.unique-selector');
    */
    //exp.condition = $("#main_internal_full_box");

    // Check for a condition and return false if it has not been met
    // if (exp.condition && !exp.condition.length) {
    //     exp.log('Gift Guide 2 failed a condition');
    //     return false;
    // }
    // Commenting out conditions since IE is having a hard time with it

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
    template:"<ul id='AWA-drop-down'>\
                            <li class='AWA-cat'><a href='#'>Indoor Living</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/home?viewAllItems=true'>View All Indoor Living </a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/home/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/home/decorative-home'>Decorative Home</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/home/bed-bath'>Bed & Bath</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/home/kids'>Kids</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/home/storage'>Storage</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Kitchen</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining?viewAllItems=true'>View All Kitchen</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-accessories'>Accessories</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/door-mats-boot-racks-boot-cleaners'>Boot Room</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-clocks'>Clocks</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/decorative-accessories'>Decorative Accessories</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-furniture'>Furniture</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-lighting'>Kitchen Lighting</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-stools-chairs'>Stools & Chairs</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-storage'>Storage & Utility</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/kitchen-tableware'>Tableware</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/kitchen-dining/get-the-look'>Get The Look</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Furniture</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture?viewAllItems=true'>View All Furniture</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/bedroom-furniture'>Bedroom Furniture</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/benches'>Benches</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/chairs'>Chairs</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/outdoor-furniture'>Outdoor Furniture</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/kitchen-stools-chairs-benches'>Stools</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/storage-solutions'>Storage</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/dining-coffee-tables'>Tables</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/furniture/collections'>Furniture Collections</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Lighting</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting?viewAllItems=true'>View All Lighting</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/all-ceiling-lights'>Ceiling Lights</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/chandeliers'>Chandeliers</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/decorative-filament-bulbs-lights'>Decorative Bulbs & Lights</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/desk-lamps'>Desk Lamps</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/floor-lamps'>Floor Lamps</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/kids-lighting'>Kids Lighting</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/outdoor-lights'>Outdoor Lighting</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/table-lamps'>Table Lamps</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/lighting/indoor-wall-lights'>Wall Lighting</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Rugs</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/rugs?viewAllItems=true'>View All Rugs</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/rugs/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/rugs/rugs'>Rugs</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/rugs/sheepskin-rugs-hides'>Sheepskin & Hides</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/rugs/runners'>Runners</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Mirrors</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/mirrors?viewAllItems=true'>View All Mirrors</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/mirrors/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/mirrors/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Outdoor Living</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living?viewAllItems=true'>View All Outdoor Living</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/birdcare'>Birdcare</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/decorations'>Outdoor Accessories</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/outdoor-furniture'>Outdoor Furniture</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/kids-outdoor'>Outdoor Kids</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/lighting'>Outdoor Lighting</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/planting'>Planters</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/outdoor-living/collections'>Furniture Collections</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a id='AWA-cat-last' href='#'>Sale Room</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/sale-room?viewAllItems=true'>View All Sale Room</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/sale-room/25-off'>25% Off</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/sale-room/35-off'>35% Off</a></li>\
                                    <li class='AWA-sub-cat'><a href='https://www.coxandcox.co.uk/sale-room/50-off'>50% Off</a></li>\
                                </ul>\
                            </li>\
                        </ul>\
                    </div>\
                "};

    // Styles
    //background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/4367d2fdcbdc8a35c1eae2b44e3ecc5f_search.jpg);\
//Movers used in VWO
//  /* MOVERESIZE */
// $(".opener").css({"height":"30px","width":"32px","top":-1,"left":-1339,"zIndex":"auto","position":"relative","display":"block"});
// /* MOVERESIZE */
// $(".btn-back").css({"height":"32px","width":"37px","top":1,"left":1373,"zIndex":"auto","position":"relative","display":"block"});
// /* MOVERESIZE */
// $("#headerIn > div:nth-child(5)").css({"height":"35px","width":"79px","top":1,"left":-52,"zIndex":"auto","position":"relative","display":"block"});




//links for navigation bar images.
// hamburger- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/d4e44a2588c287e49bbc3ec6394c15a3_menu-btn-cox.png
// back button- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/76c82ea570a80ffa9778f311be3c32c5_icon-sprite-arrow.png
// background- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/d76ba6698238b6b49bfaba24ccb82dba_coxhead-background.png
// search- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/fe4f841970a258d72b6b6af0b2c4340a_icon-sprite-search.png
// shop- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/af3edcacaab9d9de8666b48ed7e93a55_icon-sprite-shop.png


// String containing the CSS for the experiment
    exp.css = '\
    #header .btn-menu {\
        background: url(https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/26826252e23d694b6e69539e66b423e0_menu-btn-cox.png) no-repeat;\
    }\
    #header .categories-menu {\
        position: absolute;\
        top: -9999px;\
        left: 0;\
        right: 0;\
        z-index: 20;\
        background: #fff;\
        border-bottom: 1px solid #abaca9;\
        padding: 8px;\
    }\
    .AWA-cat a, .AWA-sub-cat a {\
        display: block;\
        text-align: left;\
        border-top: solid 2px #fff;\
        padding: 25px;\
        font-weight: bold;\
        color: #6D6D6D;\
        font-size: 20px;\
        padding-left: 10%;\
        background: #DEDEDE;\
    }\
    .AWA-cat-a:hover, .AWA-sub-cat a:hover {\
        text-decoration: none;\
    }\
    .AWA-sub-cat a {\
        padding-left: 15%;\
        background-color: #EFEFF1;\
    }\
    #AWA-cat-last {\
        border-bottom: solid 2px #D7D8DA;\
    }\
    .AWA-h {\
        display: none;\
    }\
    p.right-arrow-AWA {\
        float: right;\
    }\
    \
    \
    \
    .AWA-footer {\
        background-color: #EFEFF1;\
        overflow: auto;\
        padding-top: 35px;\
        padding-left: 15px;\
    }\
    .AWA-f-left {\
        width: 50%;\
        text-align: center;\
        float: left;\
        margin-bottom: 25px;\
    }\
    .AWA-f-right {\
        width: 50%;\
        text-align: center;\
        float: right;\
        margin-bottom: 25px;\
    }\
    .AWA-footer h3 {\
        color: #5D6870;\
        font-size: 16px;\
        font-weight: bold;\
        text-transform: uppercase;\
        margin-bottom: 16px;\
    }\
    .AWA-footer li a {\
        font-size: 15px;\
        line-height: 28px;\
    }\
    .AWA-footer-logos {\
        clear: both;\
    }\
    .AWA-f-logo {\
        display: block;\
    }\
    #AWA-copy {\
        margin-top: 25px;\
        font-size: 15px;\
        font-weight: bold;\
        padding-bottom: 20px;\
        color: #5D6870;\
    }\
    .AWA-footer-spacing {\
        margin-top: 25px;\
    }\
    img.AWA-img-w-fix {\
    width: 100%;\
    }\
    .boxes {\
    padding: 34px 0 0 0;\
    height: 1%;\
    overflow: hidden;\
    }\
    .box{\
    float: left;\
    width: 43%;\
    margin: 0 21px 0 0;\
    }\
    AWA-img-w-fix {\
    width: 90%;\
    }\
    .payment-list{\
        display: flex;\
    }\
';
exptwo.css = '\
#header {\
    padding: 0;\
    margin: 0 -8px;\
    min-height: 38px;\
    height: 50px;\
    position: relative;\
    border-bottom: 1px solid #5c5d5c;\
    background: #545454;\
    background: url( https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/d76ba6698238b6b49bfaba24ccb82dba_coxhead-background.png) repeat-x scroll 0 0 #555555;\
}\
\
#header .btn-back {\
    float: left;\
    width: 37px;\
    height: 42px;\
    overflow: hidden;\
    text-indent: -9999px;\
    background: url(https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/76c82ea570a80ffa9778f311be3c32c5_icon-sprite-arrow.png) no-repeat;\
    margin: 4px 4px 0 4px;\
}\
#header .btn-menu {\
    background: url(https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/d4e44a2588c287e49bbc3ec6394c15a3_menu-btn-cox.png) no-repeat;\
    height: 42px;\
}\
#header .search-box .opener {\
    display: block;\
    width: 32px;\
    height: 42px;\
    overflow: hidden;\
    text-indent: -9999px;\
    background: url(https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/fe4f841970a258d72b6b6af0b2c4340a_icon-sprite-search.png) no-repeat;\
}\
#header .block-cart .block-title strong {\
    display: block;\
    width: 32px;\
    height: 42px;\
    cursor: pointer;\
    overflow: hidden;\
    text-indent: -9999px;\
    background: url(https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/af3edcacaab9d9de8666b48ed7e93a55_icon-sprite-shop.png) no-repeat;\
}\
';



    // <div style="position: absolute; left: 50%;">
    //  <div style="position: relative; left: -50%; border: dotted red 1px;">

    // Homes antique image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/07d2884f402c6c5fe4e2dbebc555aa2d_home-antique-cox-awa.png
    // Red Image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/567354712fe8309d7c19a9bd9212c61a_red-awa-cox.png
    // House Beautiful https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/c49d72ef3f30c180d713d2c444aad857_house-beaut-awa-cox.png
    //Home and Garden https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/49d1e71d1636c7e7631426f85edc5680_home-garden-awa-cox.png
    // Elle Deco https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/665cd7db323632d49d245bb746ef1b91_elle-cox-awa.png
    // Good Homes https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/472d653737c55ae7c67925342add82f1_goodhomes-cox-awa.png


    // Functions
    // Object containing functions, some helpful functions are included
    exp.func = {};

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc


    exp.init = function() {
        if (window.location.pathname === "/") {
            homePageNav();
            exp.log("On homepage");
        } else if (jQuery(".toolbar-top").length){
            exp.log("On  product List Page");
            productPageNav();
        } else if (jQuery(".button.btn-cart").length) {
            exp.log("On product page");
            productPageNav();
            productDetailPage();
        }
         else {
            exp.log("No changes needed");
        }

        function homePageNav() {
            //Homepage Navigaiont Here.

            $('head').append('<style type="text/css">' + exp.css + '</style>');


            $('.catagories-box').remove();
            $(".std").after("<div class='categories-box'> <ul id='AWA-drop-down'>\
                                    <li class='AWA-cat'><a href='#'>Indoor Living <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home?viewAllItems=true'>View All Indoor Living</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/decorative-home'>Decorative Home</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/bed-bath'>Bed & Bath</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/kids'>Kids</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/storage'>Storage</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Kitchen <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining?viewAllItems=true'>View All Kitchen</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-accessories'>Accessories</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/door-mats-boot-racks-boot-cleaners'>Boot Room</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-clocks'>Clocks</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/decorative-accessories'>Decorative Accessories</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-furniture'>Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-lighting'>Kitchen Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-stools-chairs'>Stools & Chairs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-storage'>Storage & Utility</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-tableware'>Tableware</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/get-the-look'>Get The Look</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Furniture <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture?viewAllItems=true'>View All Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/bedroom-furniture'>Bedroom Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/benches'>Benches</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/chairs'>Chairs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/outdoor-furniture'>Outdoor Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/kitchen-stools-chairs-benches'>Stools</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/storage-solutions'>Storage</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/dining-coffee-tables'>Tables</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/collections'>Furniture Collections</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Lighting <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting?viewAllItems=true'>View All Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/all-ceiling-lights'>Ceiling Lights</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/chandeliers'>Chandeliers</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/decorative-filament-bulbs-lights'>Decorative Bulbs & Lights</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/desk-lamps'>Desk Lamps</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/floor-lamps'>Floor Lamps</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/kids-lighting'>Kids Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/outdoor-lights'>Outdoor Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/table-lamps'>Table Lamps</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/indoor-wall-lights'>Wall Lighting</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Rugs <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs?viewAllItems=true'>View All Rugs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/rugs'>Rugs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/sheepskin-rugs-hides'>Sheepskin & Hides</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/runners'>Runners</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Mirrors <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors?viewAllItems=true'>View All Mirrors</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Outdoor Living <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living?viewAllItems=true'>View All Outdoor Living</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/birdcare'>Birdcare</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/decorations'>Outdoor Accessories</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/outdoor-furniture'>Outdoor Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/kids-outdoor'>Outdoor Kids</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/lighting'>Outdoor Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/planting'>Planters</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/collections'>Furniture Collections</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a id='AWA-cat-last' href='#'>Sale Room <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room?viewAllItems=true'>View All Sale Room</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/25-off'>25% Off</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/35-off'>35% Off</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/50-off'>50% Off</a></li>\
                                        </ul>\
                                    </li>\
                                </ul>\
                                </div>")



                                // Menu
                                $(".btn-menu").click(function(e) {
                                    e.preventDefault();
                                    $("#AWA-drop-down").slideToggle();
                                });
                                $(".AWA-cat").click(function(e) {
                                    e.preventDefault();
                                    $(this).next().slideToggle();
                                });
                                $(".AWA-search").click(function(e) {
                                    e.preventDefault();
                                    $(this).next().slideToggle();
                                });


                                // //Footer change here.

                                $('#footer').remove();

                                $('body').append('<div class="AWA-footer AWA-footer-spacing">\
                                   <div class="boxes">\
                                    <div class="box">\
                                    <h3>Customers</h3>\
                                    <ul>\
                                    <li><a href="http://m.coxandcox.co.uk/customer/account/login/">Your Account</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/customer/account/login/">Create an Account</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/email-sign-up">Email Sign Up</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/catalogue-request">Request a Catalogue</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/feedback">Feedback</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/unsubscribe">Unsubscribe</a></li>\
                                    </ul>\
                                    </div>\
                                    <div class="box">\
                                    <h3>Shopping</h3>\
                                    <ul>\
                                    <li><a href="http://m.coxandcox.co.uk/frequently-asked-questions">FAQs</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/terms-and-conditions">Terms &amp; Conditions</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/security-and-privacy">Privacy Statement</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/security-and-privacy">Our Cookie Use</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/quickorder">Quick Shop</a></li>\
                                    <li><a class="select_mobile_store" href="?___store=mobile">Visit Our Mobile Site</a></li>\
                                    </ul>\
                                    </div>\
                                    </div>\
                                    <div class="boxes">\
                                    <div class="box">\
                                    <h3>cox &amp; cox</h3>\
                                    <ul>\
                                    <li><a href="http://m.coxandcox.co.uk/about-cox-and-cox">About</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/career-opportunities">Careers</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/contact-cox-and-cox">Contact</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/prezola-wedding-list/">Prezola Wedding List</a></li>\
                                    <li><a href="/sitemap/"> Sitemap</a></li>\
                                    </ul>\
                                    </div>\
                                    <div class="box">\
                                    <h3>delivery</h3>\
                                    <ul>\
                                    <li><a href="http://m.coxandcox.co.uk/delivery-and-returns">Delivery Prices</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/refunds-exchanges">Refunds &amp; Exchanges</a></li>\
                                    <li><a href="http://m.coxandcox.co.uk/returns">Returns</a></li>\
                                    </ul>\
                                    </div>\
                                    </div>\
                                    <div class="payment-box">\
                                    <h3>Safe &amp; secure payments</h3>\
                                    <ul class="payment-list">\
                                    <li><img src="http://m.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon1.gif" alt="image description" width="37" height="23"></li>\
                                    <li><img src="http://m.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon2.gif" alt="image description" width="34" height="23"></li>\
                                    <li><img src="http://m.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon3.gif" alt="image description" width="36" height="23"></li>\
                                    <li><img src="http://m.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon4.gif" alt="image description" width="35" height="23"></li>\
                                    <li><img src="http://m.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon5.gif" alt="image description" width="112" height="30"></li>\
                                    </ul>\
                                    </div>\
                                </div>\
                                //     ');
                                $("body").append("<div class='AWA-footer'>\
                                            <div id='AWA-footer-inner'></div>\
                                            <div id='AWA-footer-logos'>\
                                              <img id='AWA-f-logo' src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/b69a8670d57399546cdcb6aa6a19bc0f_logo.jpg'>\
                                              <div id='AWA-copy'>\
                                                &copy; 2016 Cox & Cox. All Rights Reserved.\
                                              </div>\
                                            </div>\
                                          </div>");

                                          // Footer
                                          var footer = $("#footer").find(".box:not('last')");
                                          $("#AWA-footer-inner").append(footer);

                                          $("#AWA-footer").find(".box").eq(0).addClass("AWA-f-left");
                                          $("#AWA-footer").find(".box").eq(2).addClass("AWA-f-left");
                                          $("#AWA-footer").find(".box").eq(1).addClass("AWA-f-right");
                                          $("#AWA-footer").find(".box").eq(3).addClass("AWA-f-right");

                                          $("#AWA-footer").find("li:contains('Visit Our Mobile')").attr("style", "visibility: hidden;");




        };

        // function productDetailPage(){
        //     var _vis_opt_url = 'http://m.coxandcox.co.uk/productDetailPage'+ location.search + location.hash;
        //
        //     
        // }

        function productPageNav() {

            $('head').append('<style type="text/css">' + exp.css + '</style>');
            $('head').append('<style type="text/css">' + exptwo.css + '</style>')

            $('.catagories-box').remove();
            $(".categories-menu").append("<div class='categories-box'> <ul id='AWA-drop-down'>\
                                    <li class='AWA-cat'><a href='#'>Indoor Living <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home?viewAllItems=true'>View All Indoor Living</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/decorative-home'>Decorative Home</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/bed-bath'>Bed & Bath</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/kids'>Kids</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/storage'>Storage</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Kitchen <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining?viewAllItems=true'>View All Kitchen</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-accessories'>Accessories</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/door-mats-boot-racks-boot-cleaners'>Boot Room</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-clocks'>Clocks</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/decorative-accessories'>Decorative Accessories</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-furniture'>Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-lighting'>Kitchen Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-stools-chairs'>Stools & Chairs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-storage'>Storage & Utility</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/kitchen-tableware'>Tableware</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/kitchen-dining/get-the-look'>Get The Look</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Furniture <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture?viewAllItems=true'>View All Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/bedroom-furniture'>Bedroom Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/benches'>Benches</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/chairs'>Chairs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/outdoor-furniture'>Outdoor Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/kitchen-stools-chairs-benches'>Stools</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/storage-solutions'>Storage</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/dining-coffee-tables'>Tables</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/furniture/collections'>Furniture Collections</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Lighting <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting?viewAllItems=true'>View All Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/all-ceiling-lights'>Ceiling Lights</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/chandeliers'>Chandeliers</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/decorative-filament-bulbs-lights'>Decorative Bulbs & Lights</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/desk-lamps'>Desk Lamps</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/floor-lamps'>Floor Lamps</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/kids-lighting'>Kids Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/outdoor-lights'>Outdoor Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/table-lamps'>Table Lamps</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/lighting/indoor-wall-lights'>Wall Lighting</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Rugs <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs?viewAllItems=true'>View All Rugs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/rugs'>Rugs</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/sheepskin-rugs-hides'>Sheepskin & Hides</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/runners'>Runners</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Mirrors <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors?viewAllItems=true'>View All Mirrors</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a href='#'>Outdoor Living <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living?viewAllItems=true'>View All Outdoor Living</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/new-this-season'>NEW THIS SEASON</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/birdcare'>Birdcare</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/decorations'>Outdoor Accessories</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/outdoor-furniture'>Outdoor Furniture</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/kids-outdoor'>Outdoor Kids</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/lighting'>Outdoor Lighting</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/planting'>Planters</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/outdoor-living/collections'>Furniture Collections</a></li>\
                                        </ul>\
                                    </li>\
                                    <li class='AWA-cat'><a id='AWA-cat-last' href='#'>Sale Room <p class='right-arrow-AWA'>&gt;</p></a></li>\
                                    <li class='AWA-h'>\
                                        <ul class='AWA-sub-cat-list'>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room?viewAllItems=true'>View All Sale Room</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/25-off'>25% Off</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/35-off'>35% Off</a></li>\
                                            <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/50-off'>50% Off</a></li>\
                                        </ul>\
                                    </li>\
                                </ul>\
                                </div>")



                                // Menu
                                $(".btn-menu").click(function(e) {
                                    e.preventDefault();
                                    $("#AWA-drop-down").slideToggle();
                                });
                                $(".AWA-cat").click(function(e) {
                                    e.preventDefault();
                                    $(this).next().slideToggle();
                                });
                                $(".AWA-search").click(function(e) {
                                    e.preventDefault();
                                    $(this).next().slideToggle();
                                });

                            }

    };

    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
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
                attempts++;
            }, intervalTime);
    };

    exp.waitFor(function() {
        return $(".top-menu").length
    }, exp.init, 10000);



    // Return the experiment object so we can access it later if required
    return exp;

    // Close the IIFE, passing in jQuery and any other global variables as required
    // if jQuery is not already used on the site use optimizely.$ instead
};
var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function() {
            waitForjQuery(time * 2);
        }, time);
    }
};
waitForjQuery(1000);
// /* CHANGECSS */
// vwo_$("#search").css({"height":"36px"});
// /* CUSTOM CODE */
// vwo_$(".button").css({"height":"36px"});
// vwo_$(".button > span > span").css({"height":"16px"});
// /* CHANGECSS */
// vwo_$(".availability > span").css({"padding-right":"65px"});
