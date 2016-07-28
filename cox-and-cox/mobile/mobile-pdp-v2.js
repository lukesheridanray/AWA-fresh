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
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home?viewAllItems=true'>View All Indoor Living </a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/decorative-home'>Decorative Home</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/bed-bath'>Bed & Bath</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/kids'>Kids</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/storage'>Storage</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Kitchen</a></li>\
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
                            <li class='AWA-cat'><a href='#'>Furniture</a></li>\
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
                            <li class='AWA-cat'><a href='#'>Lighting</a></li>\
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
                            <li class='AWA-cat'><a href='#'>Rugs</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs?viewAllItems=true'>View All Rugs</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/rugs'>Rugs</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/sheepskin-rugs-hides'>Sheepskin & Hides</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/runners'>Runners</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Mirrors</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors?viewAllItems=true'>View All Mirrors</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/new-this-season'>NEW THIS SEASON</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                </ul>\
                            </li>\
                            <li class='AWA-cat'><a href='#'>Outdoor Living</a></li>\
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
                            <li class='AWA-cat'><a id='AWA-cat-last' href='#'>Sale Room</a></li>\
                            <li class='AWA-h'>\
                                <ul class='AWA-sub-cat-list'>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room?viewAllItems=true'>View All Sale Room</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/25-off'>25% Off</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/35-off'>35% Off</a></li>\
                                    <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/sale-room/50-off'>50% Off</a></li>\
                                </ul>\
                            </li>\
                        </ul>\
                        </div>"};

    // Styles
    //background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/4367d2fdcbdc8a35c1eae2b44e3ecc5f_search.jpg);\
//Movers used in VWO
//  /* MOVERESIZE */
// $(".opener").css({"height":"30px","width":"32px","top":-1,"left":-1339,"zIndex":"auto","position":"relative","display":"block"});
// /* MOVERESIZE */
// $(".btn-back").css({"height":"32px","width":"37px","top":1,"left":1373,"zIndex":"auto","position":"relative","display":"block"});
// /* MOVERESIZE */
// $("#headerIn > div:nth-child(5)").css({"height":"35px","width":"79px","top":1,"left":-52,"zIndex":"auto","position":"relative","display":"block"});

// String containing the CSS for the experiment
    exp.css = '\
    .availability.in-stock span {\
    padding-right: 65px;\
}\
    #header .search-box .form-search input.input-text {\
        float: left;\
        background: #fff;\
        padding: 6px 4px 5px;\
        height: 36px;\
        margin: 0;\
        width: 100%;\
        border: solid #ccc;\
        border-width: 1px 0 1px 1px;\
        border-radius: 3px 0 0 3px;\
        -moz-box-sizing: border-box;\
        -webkit-box-sizing: border-box;\
        box-sizing: border-box;\
        font-size: 10px;\
        color: #9E9B9B;\
    }\
        #header {\
            background: none;\
            border-bottom: none;\
        }\
#header .search-box .form-search {\
    z-index: 1;\
}\
        #header .search-box .opener {\
            background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/4367d2fdcbdc8a35c1eae2b44e3ecc5f_search.jpg) no-repeat;\
        }\
        .availability.in-stock span {\
            padding-right: 95px;\
        }\
        #header .block-cart .block-title strong{\
        background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/982ececcaa21da96ab5e45db7c96facb_cart.jpg) no-repeat;\
        margin-bottom: 3px;\
        }\
        #header .btn-menu{\
        background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/c2d873a3d935296ecfc0af2f5dc61bf5_burger.jpg) no-repeat;\
        }\
        #header .btn-back{\
        background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/2896db0647028d98227c63b48e1117e1_account.jpg) no-repeat;\
        margin: 0;\
        margin: 4px 0 0 0;\
        }\
        .opener {\
        margin-right: 4px;\
        }\
        .search-box{\
        display: inline-flex;\
        justify-content: space-around;\
        align-items: flex-end;\
        width: 100%;\
        margin-left: 0px;\
        }\
        #header .search-box {\
        float: none;\
        margin: 5px 0 0;\
        height: 0;\
        width: 100%;\
        }\
        .coxandlogo {\
            max-width: 45%;\
            padding-top: 15px;\
    }\
    #header .search-box.active .form-search, #header .top-menu.active .categories-menu {\
        top: 54px;\
        background: none;\
        border-bottom: noen;\
    }\
    #headerIn{\
    height: none;\
    padding-bottom: 20px;\
    }\
    .image-box.gallery-js-ready {\
margin-top: 32px;\
}\
#header .search-box .form-search input.input-text {\
    float: left;\
    background: #fff;\
    padding: 6px 4px 5px;\
    height: 36px;\
    margin: 0;\
    width: 100%;\
    border: solid #ccc;\
    border-width: 1px 0 1px 1px;\
    border-radius: 3px 0 0 3px;\
    -moz-box-sizing: border-box;\
    -webkit-box-sizing: border-box;\
    box-sizing: border-box;\
    font-size: 10px;\
    color: #9E9B9B;\
}\
#header .search-box .form-search .button {\
    position: absolute;\
    top: 8px;\
    right: 8px;\
    min-width: 73px;\
    height: 36px;\
    overflow: hidden;\
    padding: 0 13px;\
    text-transform: uppercase;\
    border: 1px solid #ccc;\
    background: none;\
    background-color: #59677E;\
}\
#header .search-box .form-search input.input-text {\
    float: left;\
    background: #fff;\
    padding: 6px 4px 5px;\
    height: 35px;\
    margin: 0;\
    width: 100%;\
    border: solid #ccc;\
    border-width: 1px 0 1px 1px;\
    border-radius: 3px 0 0 3px;\
    -moz-box-sizing: border-box;\
    -webkit-box-sizing: border-box;\
    box-sizing: border-box;\
    font-size: 10px;\
    color: #9E9B9B;\
}\
#header .block-cart.active .block-content {\
    top: 65px;\
    border: #ccc;\
}\
    /******** NON NAVIGATION STYLE********/\
                \
                 \
    	#AWA-m-wrapper {\
    		width: 100%;\
    	}\
    	body {\
    		background: white;\
    		min-width: 0px;\
    	}\
    	#AWA-top-row {\
			text-align: justify;\
			margin-bottom: 30px;\
			margin-top: 20px;\
			height: 29px;\
			padding: 0 10px;\
    	}\
    	#AWA-top-row:after {\
			content: \'\';\
			width: 100%;\
			display: inline-block;\
			box-sizing: content-box !important;\
			-webkit-box-sizing: content-box !important;\
    	}\
    	#AWA-top-row li {\
    		display: inline-block;\
    	}\
    	#AWA-nav {\
            display: none;\
    		margin-bottom: 35px;\
    	}\
    	.AWA-cat a, .AWA-sub-cat a {\
    		display: block;\
    		border-top: solid 2px #D7D8DA;\
    		padding: 25px;\
    		font-weight: bold;\
    		color: #5d6870;\
    		font-size: 20px;\
    		padding-left: 10%;\
            background: white;\
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
    	#AWA-images {\
    		text-align: center;\
    	}\
    	.MagicZoomPlus {\
    		border: solid 1px #E4E4E6;\
    		line-height: 0;\
    	}\
    	.AWA-thumbnails {\
		    position: absolute;\
		    right: 0;\
		    left: 0;\
		    margin-top: -46px;\
		    z-index: 1000000;\
    	}\
    	.AWA-thumbnails li {\
    		display: inline-block;\
    		padding: 0 5px;\
    	}\
    	.AWA-thumbnails li img {\
    		height: 84px;\
    		width: 75px;\
    		border: solid 1px #E4E4E6;\
    	}\
    	#AWA-breadcrumb {\
    		font-size: 15px;\
    		text-align: center;\
    		color: #9EA2A5;\
    		text-transform: uppercase;\
            line-height: 20px;\
            padding: 0 10px;\
    	}\
    	.AWA-breadcrumb-arrow {\
    		vertical-align: middle;\
    	}\
        #AWA-product-title {\
            text-transform: uppercase;\
            font-size: 30px;\
            font-weight: 100;\
            text-align: center;\
            margin-top: 20px;\
            line-height: 40px;\
            padding: 0 10px;\
        }\
        #AWA-price {\
            text-align: center;\
            font-size: 30px;\
            margin-top: 20px;\
        }\
        #AWA-availability, #AWA-availability span {\
            padding: 0 10px !important;\
            text-align: center;\
            margin-top: 20px;\
            color: #9EA2A5 !important;\
            text-transform: uppercase;\
            line-height: 20px;\
            font-size: 15px !important;\
            margin-bottom: 42px;\
        }\
        #AWA-availability span {\
            padding: 0 !important;\
        }\
        #AWA-qty, .AWA-container {\
        	border: solid 1px #E4E4E6;\
        	overflow: auto;\
        	width: 90%;\
        	text-align: center;\
        	margin: 0 auto;\
        }\
        .AWA-qty-input {\
        	height: 64px;\
        	font-size: 28px;\
        	line-height: 64px;\
        	color: #576773;\
        }\
        #AWA-qty-middle span, .AWA-qty-num {\
        	font-size: 22px !important;\
        	line-height: 64px !important;\
        	color: #576773 !important;\
        }\
        #AWA-minus, .AWA-minus-multi {\
        	border-right: solid 1px #E4E4E6;\
        	float: left;\
        	width: 14.8%;\
        	cursor: pointer;\
        }\
        #AWA-qty-middle, .AWA-qty-middle-multi {\
        	width: 69.5%;\
        	float: left;\
        	font-size: 22px;\
        }\
        #AWA-plus, .AWA-plus-multi {\
        	border-left: solid 1px #E4E4E6;\
        	float: left;\
        	width: 14.8%;\
        	cursor: pointer;\
        }\
        .AWA-container {\
        	clear: both;\
        }\
        #AWA-add {\
			width: 90%;\
			background: #8699B7;\
			display: block;\
			height: 68px;\
			color: white;\
			line-height: 68px;\
			text-align: center;\
			font-size: 20px;\
			text-decoration: none;\
			margin: 18px auto;\
        }\
        .AWA-container {\
        	clear: both;\
        }\
        #AWA-add {\
			width: 90%;\
			background: #8699B7;\
			display: block;\
			height: 68px;\
			color: white;\
			line-height: 68px;\
			text-align: center;\
			font-size: 20px;\
			text-decoration: none;\
			margin: 18px auto;\
        }\
        #AWA-fav {\
			width: 90%;\
        	color: #576773;\
			display: block;\
			height: 68px;\
			line-height: 68px;\
			text-align: center;\
			font-size: 20px;\
			text-decoration: none;\
			margin: 18px auto;\
			border: solid 1px #E4E4E6;\
        }\
        #AWA-fav img {\
        	vertical-align: middle;\
        }\
        #AWA-desc-section {\
        	background-color: #EFEFF1;\
        }\
        .AWA-desc-section-header {\
        	color: #5D6870;\
        	font-size: 16px;\
        	font-weight: bold;\
        	cursor: pointer;\
        	padding: 20px 0;\
			background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/8bd2d8b906c7e0cc086db91a8e8a438c_toggle.jpg);\
			background-size: 13px;\
			background-repeat: no-repeat;\
			background-position: 95%;\
        }\
        .AWA-desc-section-inner {\
        	margin-top: 20px;\
        	font-family: serif;\
        	display: none;\
        }\
        .AWA-desc-section-inner p, .AWA-desc-section-inner a, .AWA-desc-section-inner strong {\
        	color: #5D6870;\
        	font-size: 18px;\
        	line-height: 28px;\
        	font-weight: 100;\
        }\
        .AWA-desc-section-inner p {\
        	margin-bottom: 10px;\
        }\
        .AWA-desc-section-inner a {\
        	text-decoration: underline;\
        }\
        .AWA-desc-section-inner strong {\
        	font-weight: bold;\
        }\
        #AWA-delivery-returns-inner table th {\
        	color: #5D6870;\
        	font-size: 18px;\
        	line-height: 28px;\
        	font-weight: 100;\
        	padding-left: 5px;\
        	padding-right: 5px;\
        	background-color: #c3c3c3;\
        }\
        #AWA-delivery-returns-inner table td {\
        	color: #5D6870;\
        	font-size: 18px;\
        	line-height: 28px;\
        	font-weight: 100;\
        	padding-left: 5px;\
        	padding-right: 5px;\
        	border: solid 1px #E4E4E6;\
        }\
        #AWA-buyers-notes .AWA-desc-section-header {\
          padding-top: 25px;\
        }\
        .product-detail .price-box .special-price .price {\
         color: #cd5033;\
       }\
        #AWA-buyers-notes-inner {\
        	display: block;\
        }\
        #AWA-buyers-notes, #AWA-size-information, #AWA-delivery-returns {\
        	border-bottom: solid 2px #D7D8DA;\
        }\
        #AWA-best-sellers .best_sellers_sidebar {\
        	float: none;\
        	width: 100%;\
        }\
        #AWA-best-sellers .best_sellers_sidebar > div {\
        	border: 0;\
        }\
        #AWA-best-sellers .best_sellers_sidebar > div > h4 {\
        	color: #5D6870;\
        	font-size: 16px;\
        	font-weight: bold;\
        	margin-top: 35px;\
        	margin-bottom: 40px;\
        }\
        .AWA-best-sellers-list {\
		    columns: 2;\
		    -webkit-columns: 2;\
		    -moz-columns: 2;\
        }\
        .AWA-best-sellers-list li {\
        	margin-bottom: 0;\
			-webkit-column-break-inside: avoid;\
			page-break-inside: avoid;\
			break-inside: avoid;\
        }\
        .AWA-best-sellers-list .price-box {\
        	padding-bottom: 40px;\
        }\
        #AWA-best-sellers .best_sellers_sidebar h4 a {\
        	color: #5D6870;\
        	font-size: 16px;\
        	font-weight: bold;\
        }\
        .AWA-best-sellers-list h4 {\
        	margin: 16px 15px 5px;\
        }\
        .AWA-best-sellers-list .regular-price .price, .AWA-best-sellers-list .old-price .price, .AWA-best-sellers-list .special-price .price, .AWA-best-sellers-list .old-price .price-label, .AWA-best-sellers-list .special-price .price-label {\
        	font-size: 16px !important;\
        }\
        #AWA-ymal .product-image img {\
        	width: 95px;\
        	height: 125px;\
        	display: inline-block;\
        }\
        #block-related {\
        	width: 100%;\
		    columns: 2;\
		    -webkit-columns: 2;\
		    -moz-columns: 2;\
		    text-align: center;\
		    padding: 0;\
        }\
        #block-related li {\
        	margin-bottom: 0;\
			-webkit-column-break-inside: avoid;\
			page-break-inside: avoid;\
			break-inside: avoid;\
        }\
        #block-related .product-image {\
        	width: auto;\
        	height: auto;\
        	margin-bottom: 20px;\
        	display: inline-block;\
        }\
        #block-related .product-name a {\
			color: #5D6870;\
			font-size: 16px;\
			font-weight: bold;\
        }\
        #AWA-ymal-header {\
		    color: #5D6870;\
		    font-size: 16px;\
		    font-weight: bold;\
		    margin-top: 35px;\
		    margin-bottom: 40px;\
		    text-align: center;\
        }\
        #block-related .regular-price .price, #block-related .old-price .price, #block-related .special-price .price, #block-related .special-price .price-label, #block-related .old-price .price-label, #block-related .price-box .price, #block-related .minimal-price .price-label, #block-related .special-price, #block-related .old-price {\
        	font-size: 16px !important;\
        	float: none;\
        }\
        #block-related .price-box {\
        	padding-bottom: 40px;\
        }\
        #block-related .product-name {\
        	margin-bottom: 8px;\
        }\
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
        img#pinchHolder {\
            position: absolute;\
            z-index: 19090;\
            top: 30%;\
            width: 50%;\
            left: 25%;\
            background: white;\
            filter: alpha(opacity=50);\
        }\
      .grey-box {\
            width: 100%;\
            height: 92.5%;\
            position: absolute;\
            z-index: 98483824383483434384347;\
            opacity:0.7;\
            background: #999;\
            filter: alpha(opacity=50);\
        }\
        p.pinchZoom {\
            position: absolute;\
            top: 65%;\
            left: 37%;\
            text-align: center;\
            font-size: 15px;\
            color: white;\
            font-weight: bolder;\
        }\
          #AWA-copy {\
        	margin-top: 25px;\
        	font-size: 15px;\
        	font-weight: bold;\
        	padding-bottom: 20px;\
        	color: #5D6870;\
        }\
        #wrapper {\
        	display: none;\
        }\
        .AWA-price-multi {\
            font-weight: bold;\
        }\
        .AWA-multi-container, .AWA-price-multi, .AWA-title-multi {\
        	text-align: center;\
		    color: #5D6870;\
		    font-size: 20px;\
		    line-height: 40px;\
        }\
        .AWA-multi-container {\
        	margin-top: 32px;\
        }\
        }\
        .form-search {\
        	margin: 0 auto;\
        	width: 95%;\
        	margin-bottom: 30px;\
        }\
        .form-search .input-text {\
        	font-size: 16px;\
        	width: 85%;\
        }\
        .image-box  {\
        border: 1px solid #ccc;\
      }\
      .AWA-thumbnail img {\
            border: solid 1px #ccc;\
            width: 100px;\
        }\
        #AWA-images {\
          position: absolute;\
          left: 0;\
          right: 0;\
          margin-left: auto;\
          margin-right: auto;\
          display: inline-flex;\
          justify-content: space-around;\
          align-items: center;\
          padding-top: 10px;\
          padding-bottom: 0px;\
          margin-top: -50px;\
          margin-bottom: 0px;\
          padding-left: 0px;\
      }\
          .info-box {\
           text-align: center;\
           background: none\
         }\
         .product-detail .info-box {\
          background: none; \
          border: none;\
          margin-top: 140px;\
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
    .AWA-seen-image img {\
        width 80%;\
    }\
    .AWA-seen-container{\
        max-width: 100%;\
        display: inline-flex;\
    }\
    .breadcrumbs {\
        background: none;\
        font-weight: 100;\
        display: flex;\
        justify-content: space-around;\
    }\
    .payment-box {\
    text-align: center;\
    margin-top: 20px;\
    }\
    .payment-list {\
    display: flex;\
    margin-left: 13%;\
    padding-bottom: 15px;\
    }\
    img#AWA-f-logo {\
    width: 50%;\
    margin-left: 25%;\
    }\
    div#AWA-footer-logos {\
    background: #efeff1;\
    }\
    .breadcrumbs span {\
    background: none;\
    font-size: 12px;\
    }\
    .breadcrumbs a span {\
    background: none;\
    }\
    .breadcrumbs li {\
    border:none\
    }\
    .breadcrumbs ul {\
    display: inline-flex;\
    }\
    .home span {\
        background: none;\
    }\
    .product-detail .product-name{\
        font-size: 21px;\
        padding-bottom: 21px;\
    }\
    .product-detail .price-box .price {\
    font-weight: lighter;\
    color: #333;\
    font-size: 23px;\
    }\
    .price-box {\
    display: block;\
    margin-right: auto;\
    margin-left: auto;\
    padding-left: 23px;\
  }\
  .product-detail .price-box{\
  font-weight: lighter;\
  color: #333;\
  font-size: 23px;\
  }\
    .product-detail p {\
    margin: 0 0 7px;\
    margin-top: 17px;\
  }\
    p.old-price {\
    float: left;\
    }\
    .availability {\
        color: grey;\
    }\
    .AWA-desc-section-inner p {\
    margin-bottom: 10px;\
    padding-left: 7px;\
    padding-right: 7px;\
    text-align: left;\
}\
    @media screen and (max-width: 375px) {\
        .search-box {\
        display: flex;\
        flex-direction: row;\
        align-items: center;\
        justify-content: center;\
    }\
    };\
      ';

exptwo.css = '\
    .catagories-box li {\
float: left;\
width: 100%;\
height: 100%;\
overflow: hidden;\
position: relative;\
margin: 0 5px 5px 0;\
}\
.catagories-box ul {\
margin: 0 -10px 0 0;\
max-width: 100%;\
width: 100%;\
display: flex;\
flex-direction: column;\
padding: 0;\
}\
.catagories-box {\
margin-left: auto;\
margin-right: auto;\
max-width: 100%;\
width: 100%;\
display: flex;\
flex-direction: column;\
}\
#AWA-drop-down{\
    display: none;\
}\
.catagories-box ul li a img {\
width: 100%;\
max-width: 100%;\
height: 100%;\
}\
.std {\
padding-top: 24px;\
margin-top: 15px;\
}\
.catagories-box .title {\
position: absolute;\
bottom: 0;\
left: 0;\
right: 0;\
padding: 6px 0px 3px;\
color: #fff;\
background: rgba(197, 204, 222, 0.47);\
line-height: 16px;\
width: 100%;\
font-size: 3.87em;\
height: 100;\
height: 100%;\
text-align: center;\
top: 0;\
padding-top: 50%;\
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
.AWA-seen-image img {\
    width 80%;\
}\
.AWA-seen-container{\
    max-width: 100%;\
    display: inline-flex;\
}\
#bestseller-carousel {\
    list-style: none;\
    padding: 0;\
}\
.product-show {\
    max-width: 100%;\
    width: 100%;\
}\
.AWA-products-show-more {\
    display: inline-block;\
}\
.AWA-list-cat-product-right {\
    float: left;\
    width: 100px;\
    margin-right: 20px;\
    padding-right: 2px;\
    margin-left: 30px;\
}\
.product-show img {\
    width: 104px;\
}\
.product-name {\
    text-align: center;\
    font-weight: 900;\
    display: inline;\
}\
.see-more-more-AWA {\
    align-items: center;\
    align-content: center;\
    text-align: center;\
    margin-left: 23%;\
}\
.see-more-more-AWA{\
    margin-right: 0;\
    padding: 0;\
    border: 2px solid #606E84;\
    width: 160px;\
    margin-top: 25px;\
    margin-bottom: 50px;\
    height: 50px;\
}\
.product-bottom-box {\
    text-align: center;\
}\
.see-more-AWA-btn {\
    font: 15px Poiret One, sans-serif;\
    font-weight: 100;\
    padding-top: 12px;\
}\
.price-box .regular-price .price {\
    font-weight: 100;\
    color: black;\
}\
.AWA-product-hide-more{\
    display: none;\
}\
.AWA-products-show-more {\
    padding-top: 25px;\
}\
.AWA-footer-spacing {\
    margin-top: 25px;\
}\
#slideshow .switcher ul {\
    background: none;\
}\
#headerIn a img {\
    display: none;\
}\
\
\
@media screen and (max-width: 375px) {\
    .search-box {\
    display: flex;\
    flex-direction: row;\
    align-items: center;\
    justify-content: center;\
}\
}\
@media screen and (min-width: 345px) {\
    .AWA-list-cat-product-right {\
    float: left;\
    max-width: 100%;\
    width: 100px;\
    margin-right: 20px;\
    padding-right: 2px;\
    padding-left: 16px;\
}\
.see-more-more-AWA {\
    margin-left: 28%;\
}\
.AWA-as-seen-container-img {\
    padding-left: 17px;\
}\
.AWA-seen-container {\
    padding-left: 17px;\
    padding-right: 17px;\
}\
.AWA-seen-image {\
    padding-left: 17px;\
}\
}\
@media screen and (min-width: 400px) {\
    .AWA-list-cat-product-right {\
        padding-left: 30px;\
}\
.see-more-more-AWA {\
    margin-left: 28%;\
}\
.AWA-as-seen-container-img {\
    padding-left: 17px;\
}\
.AWA-seen-container {\
    padding-left: 17px;\
    padding-right: 17px;\
}\
.AWA-seen-image {\
    padding-left: 17px;\
}\
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
            exp.log("On homepage");
        } else if (jQuery("#super-product-table").length){
            exp.log("On rug productPage");
            rugProductPage();
            productPage();
        } else if (jQuery(".button.btn-cart").length) {
            exp.log("On product page");
            productPage();
        }
         else {
            exp.log("No changes needed");
        }



        function homePage() {

            $('head').append('<style type="text/css">' + exp.css + '</style>');
            $('head').append('<style type="text/css">' + exptwo.css + '</style>');

            function searchClick() {
                $('#search_mini_form').hide()
            };

            $(".btn-menu").on('click', searchClick);
            $(".block-cart").on('click', searchClick);

            $('.opener').on('click', function(){
                $('#search_mini_form').slideToggle();
            });


            $('#footer').remove();
            $('body').append('<div class="AWA-as-seen-container-img">\
            <div class="AWA-seen-container">\
            <div class="AWA-image-container">\
                    <div class="AWA-seen-image">\
                    <img class="AWA-img-w-fix" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/472d653737c55ae7c67925342add82f1_goodhomes-cox-awa.png\
            " alt="Good Homes">\
            </div>\
            </div>\
            <div class="AWA-image-container">\
                    <div class="AWA-seen-image">\
                    <img class="AWA-img-w-fix" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/665cd7db323632d49d245bb746ef1b91_elle-cox-awa.png\
            " alt="Good Decorations">\
                    </div>\
                    </div>\
                    </div>\
                    </div>\
                    <div class="AWA-seen-container">\
                    <div class="AWA-image-container">\
                            <div class="AWA-seen-image">\
                            <img class="AWA-img-w-fix" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/567354712fe8309d7c19a9bd9212c61a_red-awa-cox.png\
                    " alt="RED">\
                    </div>\
                    </div>\
                    <div class="AWA-image-container">\
                            <div class="AWA-seen-image">\
                            <img class="AWA-img-w-fix" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/07d2884f402c6c5fe4e2dbebc555aa2d_home-antique-cox-awa.png\
                    " alt="antique">\
                            </div>\
                            </div>\
                            </div>\
                            </div>\
                            <div class="AWA-seen-container">\
                            <div class="AWA-image-container">\
                                    <div class="AWA-seen-image">\
                                    <img class="AWA-img-w-fix" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/c49d72ef3f30c180d713d2c444aad857_house-beaut-awa-cox.png\
                            " alt="Good Homes">\
                            </div>\
                            </div>\
                            <div class="AWA-image-container">\
                                    <div class="AWA-seen-image">\
                                    <img class="AWA-img-w-fix" src="https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/49d1e71d1636c7e7631426f85edc5680_home-garden-awa-cox.png\
                            " alt="Good Homes">\
                                    </div>\
                                    </div>\
                                    </div>\
                                    </div>\
                                    </div>\
                    ');
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
                    <li><img src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon1.gif" alt="image description" width="37" height="23"></li>\
                    <li><img src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon2.gif" alt="image description" width="34" height="23"></li>\
                    <li><img src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon3.gif" alt="image description" width="36" height="23"></li>\
                    <li><img src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon4.gif" alt="image description" width="35" height="23"></li>\
                    <li><img src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/icon5.gif" alt="image description" width="112" height="30"></li>\
                    </ul>\
                    </div>\
                </div>\
                ');
            $("body").append("<div class='AWA-footer'>\
                        <div id='AWA-footer-inner'></div>\
                        <div id='AWA-footer-logos'>\
                          <img id='AWA-f-logo' src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/b69a8670d57399546cdcb6aa6a19bc0f_logo.jpg'>\
                          <div id='AWA-copy'>\
                            &copy; 2016 Cox & Cox. All Rights Reserved.\
                          </div>\
                        </div>\
                      </div>");
            $('.catagories-box').remove();
            $('<div class="catagories-box">\
            <ul>\
            <li><a href="https://m.coxandcox.co.uk/just-arrived/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2015/10/mobile_cat_ARRIVED.jpg" alt="Just Arrived" width="98" height="104"> <span class="title">Just Arrived</span></a></li>\
            <li><a href="https://m.coxandcox.co.uk/kitchen-dining/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_KITCHEN_SS16.jpg" alt="KITCHEN" width="98" height="104"> <span class="title">Kitchen</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/kitchen-dining/kitchen-tableware/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_TABLEWARE_SS16.jpg" alt="TABLEWARE" width="98" height="104"> <span class="title">Tableware</span></a></li>\
            <li><a href="https://m.coxandcox.co.uk/lighting/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_LIGHTING_SS16.jpg" alt="LIGHTING" width="98" height="104"> <span class="title">Lighting</span></a></li>\
            <li><a href="https://m.coxandcox.co.uk/rugs/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_RUGS_SS16.jpg" alt="RUGS" width="98" height="104"> <span class="title">Rugs</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/mirrors/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_MIRRORS_SS16.jpg" alt="MIRRORS" width="98" height="104"> <span class="title">Mirrors</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/home/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_INDOOR_SS16.jpg" alt="INDOOR LIVING" width="98" height="104"> <span class="title">Indoor Living</span></a></li>\
            <li><a href="https://m.coxandcox.co.uk/home/bed-bath/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_BEDBATH_SS16.jpg" alt="BED &amp; BATH" width="98" height="104"> <span class="title">Bed &amp; Bath</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/furniture/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_FURNITURE_SS16.jpg" alt="FURNITURE" width="98" height="104"> <span class="title">Furniture</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/home/kids/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_KIDS_SS16.jpg" alt="KIDS" width="98" height="104"> <span class="title">Kids Living</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/outdoor-living/"> <img src="https://m.coxandcox.co.uk/media/wysiwyg/2016/01/mobile_cats_OUTDOOR_SS16.jpg" alt="OUTDOOR LIVING" width="98" height="104"> <span class="title">Outdoor Living</span> </a></li>\
            <li><a href="https://m.coxandcox.co.uk/catalogue-request/"> <img title="Catalogue Request" src="https://m.coxandcox.co.uk/media/wysiwyg/2016/05/20160510-mobile-cat-brochure.jpg" alt="Catalogue Request" width="98" height="104"> <span class="title">Summer Book</span> </a></li>\
            </ul>\
            </div>').appendTo('.std');






                //Show more products

            $('.catagories-box').after('<div class="AWA-show-more-products">\
            <div class="product-show">\
            <div class="product-show-vertical">\
            <div class="product-show-vertical-AWA">\
            <ul id="bestseller-carousel">\
            <div class="AWA-products-show-more">\
            <li class="AWA-list-cat-product-right">\
            <a href="http://m.coxandcox.co.uk/homepage-products/white-industrial-pendant" title="NEW White Industrial Pendant" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/w/h/white-industrial-pendant-h-whtindust-cut-out.png" width="167" height="223" alt="NEW White Industrial Pendant"></a>\
      <div class="product-bottom-box">\
      <div class="product-name">NEW White Industrial Pendant</div>\
      <div class="product-price">\
      <div class="price-box">\
      <span class="regular-price" id="product-price-8636">\
          <span class="price">£95.00</span> </span>\
            </div>\
            </div>\
            </div>\
            <li class="AWA-list-cat-product-right">\
            <a href="http://m.coxandcox.co.uk/homepage-products/embossed-glass-pendant" title="NEW Embossed Glass Pendant - Grey" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/e/m/embossed-glass-pendant-h-embglass-cut-out.png" width="153" height="223" alt="NEW Embossed Glass Pendant - Grey"></a>\
            <div class="product-bottom-box">\
            <div class="product-name">NEW Embossed Glass Pendant - Grey</div>\
            <div class="product-price">\
            <div class="price-box">\
            <span class="regular-price" id="product-price-8524">\
                    <span class="price">£85.00</span> </span>\
            </div>\
            </div>\
            </div>\
            </div>\
            <div class="AWA-products-show-more">\
            <li class="AWA-list-cat-product-right">\
            <a href="http://m.coxandcox.co.uk/homepage-products/antique-white-leaves-chandelier" title="NEW Antique White Leaves Chandelier" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/a/n/antique-white-leaves-chandelier-h-leafchand-cut-out.png" width="167" height="223" alt="NEW Antique White Leaves Chandelier"></a>\
<div class="product-bottom-box">\
<div class="product-name">NEW Antique White Leaves Chandelier</div>\
<div class="product-price">\
<div class="price-box">\
    <span class="regular-price" id="product-price-8750">\
            <span class="price">£475.00</span> </span>\
            </div>\
            </div>\
            </div>\
            <li class="AWA-list-cat-product-right">\
            <a href="http://m.coxandcox.co.uk/homepage-products/alis-glass-pendant" title="NEW Alis Glass Pendant" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/a/l/alis-glass-pendant-h-glasspen-cut-out_1.png" width="167" height="223" alt="NEW Alis Glass Pendant"></a>\
<div class="product-bottom-box">\
<div class="product-name">NEW Alis Glass Pendant</div>\
<div class="product-price">\
<div class="price-box">\
    <span class="regular-price" id="product-price-8852">\
            <span class="price">£65.00</span> </span>\
            </div>\
            </div>\
            </div>\
            </div>\
            <div class="AWA-product-hide-more">\
            <div class="AWA-products-show-more">\
            <li class="AWA-list-cat-product-right">\
            <a href="http://m.coxandcox.co.uk/homepage-products/handcrafted-fluted-glass-factory-light" title="NEW Handcrafted Fluted Glass Parasol Light" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/h/a/handcrafted-fluted-glass-factory-light-h-factglass-cut-out.png" width="167" height="223" alt="NEW Handcrafted Fluted Glass Parasol Light"></a>\
<div class="product-bottom-box">\
<div class="product-name">NEW Handcrafted Fluted Glass Parasol Light</div>\
<div class="product-price">\
<div class="price-box">\
  <span class="regular-price" id="product-price-9400">\
          <span class="price">£225.00</span> </span>\
            </div>\
            </div>\
            </div>\
            <li class="AWA-list-cat-product-right">\
            <a href="http://m.coxandcox.co.uk/homepage-products/woven-stripe-runner" title="NEW Woven Stripe Runner - Blue " class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/w/o/woven-stripe-runner-h-wsrun-cut-out.png" width="167" height="223" alt="NEW Woven Stripe Runner - Blue "></a>\
<div class="product-bottom-box">\
<div class="product-name">NEW Woven Stripe Runner - Blue </div>\
<div class="product-price">\
<div class="price-box">\
  <span class="regular-price" id="product-price-9061">\
          <span class="price">£50.00</span> </span>\
            </div>\
            </div>\
            </div>\
            </div>\
        <div class="AWA-products-show-more">\
        <li class="AWA-list-cat-product-right">\
        <a href="http://m.coxandcox.co.uk/homepage-products/white-copper-pendant-lightshade" title="White &amp; Copper Pendant Lightshade" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/w/h/white-_-copper-pendant-lightshade-h-copshade-cut-out_3.png" width="167" height="223" alt="White &amp; Copper Pendant Lightshade"></a>\
<div class="product-bottom-box">\
<div class="product-name">White &amp; Copper Pendant Lightshade</div>\
<div class="product-price">\
<div class="price-box">\
<span class="regular-price" id="product-price-6335">\
      <span class="price">£100.00</span>\
</span>\
        </div>\
        </div>\
        </div>\
        <li class="AWA-list-cat-product-right">\
        <a href="http://m.coxandcox.co.uk/homepage-products/lille-hand-tuffted-rug" title="Lille Hand Tufted Rug" class="product-image"><img src="https://www.coxandcox.co.uk/media/catalog/product/cache/1/small_image/167x223/9df78eab33525d08d6e5fb8d27136e95/l/i/lille-hand-tuffted-rug-h-lille-cut-out_1.png" width="167" height="223" alt="Lille Hand Tufted Rug"></a>\
  <div class="product-bottom-box">\
  <div class="product-name">Lille Hand Tufted Rug</div>\
  <div class="product-price">\
  <div class="price-box">\
  <span class="regular-price" id="product-price-8212">\
      <span class="price">£325.00</span> </span>\
        </div>\
        </div>\
        </div>\
        </div>\
        </div>\
            <div class="see-more-more-AWA"\
            <div class="see-more-button">\
            <p class="see-more-AWA-btn" style="padding-top: 15px;">See more products</p>\
            </div>\
            </div>\
            ');


            //Toggle the see more product button.

            $('.see-more-AWA-btn').on('click', function(){
                $('.AWA-product-hide-more').slideToggle();
            });


            //NAV MENU
            $(".std").before(exp.vars.template);
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


            jQuery('.catagories-box').find(".title").last().remove();
            jQuery('.catagories-box').find(".title").first().remove();

            $('<img class="coxandlogo" src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/CoxandCox-homepagelogo.png" alt="">').appendTo('#headerIn');
            $('.coxandlogo').appendTo(".search-box");
            $( ".btn-back" ).remove();
            $('btn-back-home').remove();
            $('<a class="btn-back" href="https://m.coxandcox.co.uk/customer/account/login/">Back</a>' ).appendTo('.search-box');
            $('<div class="top-menu"><a class="btn-menu" href="#">&nbsp;</a></div>').prependTo(".search-box");
            $('.block-cart').appendTo(".search-box");

            $('.btn-menu').on('click', function(){
                $('#AWA-drop-down').slideToggle();
                console.log('click click click');
                });

                $("#headerIn").find('src="https://m.coxandcox.co.uk/skin/frontend/default/coxmobile/images/logo-site-big-hd.png"').remove();


            jQuery('.search-box')
                .prependTo(".top-menu");
            jQuery('.block-cart')


                .prependTo(".top-menu");
                $(".AWA-cat").click(function(e) {
                    $(this).next().slideToggle();
                });

        };

        function rugProductPage(){
        //
           $('#product_addtocart_form > div.info-box > div').hide();
           $('#AWA-qty').hide();



// Get all quantity inputs by getting all inputs whose name start with "super_group"
            var $existing_quantity_inputs = jQuery('input[name^="super_group"]');

// Create the container in memory as a jQuery object. We'll add it to the page later.
            var $new_controls_container = $('<div id="AWA-controls-multi"></div>');

// For each existing SKU, create a new quantity box
            $existing_quantity_inputs.each(function(){

    // We can manipulate the value of this input directly, rather than having a separate quantity field.
            var $existing_qty_input = $(this),
                $qty_row = $existing_qty_input.parents('tr'),
                title    = $qty_row.find('td:first-of-type') // This has a <p> tag containing the SKU, we don't want that in the title.
                    .clone()     // Clone the element, so we're not messing with the rendered page
                    .children()  // Get and remove the elements children
                    .remove()
                    .end()       // Get back to the element, rather than its now non-existant children
                    .text()
                    .trim(),
                price = $qty_row.find('.price').text().trim(),
                sku = $qty_row.find('td:first-of-type p').text().trim();

    // Create custom quantity box to page.
            var $awa_qty_container = $('\
                <div class="AWA-multi-container"> \
                    <div class="AWA-title-multi"></div> \
                    <div class="AWA-price-multi"></div> \
                    <div class="AWA-id" style="display: none;"></div> \
                </div> \
                <div class="AWA-container">\
                    <div class="AWA-minus-multi AWA-qty-input">&ndash;</div>\
                    <div class="AWA-qty-middle-multi AWA-qty-input">QTY: <span class="AWA-qty-num">0</span></div>\
                    <div class="AWA-plus-multi AWA-qty-input">+</div>\
                </div>');

    var $awa_title        = $awa_qty_container.find('.AWA-title-multi'),
        $awa_price        = $awa_qty_container.find('.AWA-price-multi'),
        $awa_id           = $awa_qty_container.find('.AWA-id'),
        $awa_minus_button = $awa_qty_container.find('.AWA-minus-multi'),
        $awa_qty_num      = $awa_qty_container.find('.AWA-qty-num'),
        $awa_plus_button  = $awa_qty_container.find('.AWA-plus-multi');


    // Update the title, price, and ID
    $awa_title.text(title);
    $awa_price.text(price);
    $awa_id.text(sku);

    // Attach event handlers to the custom quantity box we just created. Because we're defining the
    // event handlers here, they will only update the $existing_qty_input as it's defined right now.
    // So the $awa_plus_button that was just added will only update the value of the quantity input it
    // is being added for.

    $awa_plus_button.on('click', function(){
        var new_qty = parseInt($existing_qty_input.val(), 10) + 1;

        $existing_qty_input.val(new_qty);
        $awa_qty_num.text(new_qty);
    });

    $awa_minus_button.on('click', function(){
        var new_qty = parseInt($existing_qty_input.val(), 10) - 1;

        // Don't let quantity drop below 0
        if (new_qty < 0) {
            new_qty = 0;
        }

        $existing_qty_input.val(new_qty);
        $awa_qty_num.text(new_qty);
    });


    // Add custom quantity box to the quantity container
    $new_controls_container.append(
        $awa_qty_container
    );
});

// TODO: Hide default quantity boxes
    $('#super-product-table').hide();

// Add the new container to the page
$('.product-name').after($new_controls_container);

        // //     $('#super-product-table').remove();
        // //
        //     $('.product-name').after('<div class="QTY-AWA-wrapper">\
        //       <h3 class="many-product-names-AWA" style="padding-top: 15px;">Luna Silver Rug- Small - H-LUNASILVSML</h3>\
        //       <p class="AWA-price-rug">£175.00</p><div id="AWA-qty"> \
        //         <div id="AWA-minus" class="AWA-qty-input">–</div>\
        //         <div id="AWA-qty-middle" class="AWA-qty-input">QTY: <span id="AWA-qty-num">1</span>\
        //         </div>\
        //         <div id="AWA-plus" class="AWA-qty-input">+</div>\
        //       </div>\
        //     </div>\
        //     \
        //     <div class="QTY-AWA-wrapper">\
        //         <h3 class="many-product-names-AWA" style="padding-top: 15px;">Luna Silver Rug- Medium - H-LUNASILV</h3>\
        //         <p class="AWA-price-rug">£300.00</p>\
        //         <div id="AWA-qty">\
        //             <div id="AWA-minus" class="AWA-qty-input">–</div>\
        //             <div id="AWA-qty-middle" class="AWA-qty-input">QTY: <span id="AWA-qty-num">1</span>\
        //             </div>\
        //             <div id="AWA-plus" class="AWA-qty-input">+</div>\
        //         </div>\
        //     </div>\
        //     <div class="QTY-AWA-wrapper">\
        //         <h3 class="many-product-names-AWA" style="padding-top: 15px;">Luna Silver Rug- Large - H-LUNASILVLRG</h3>\
        //         <p class="AWA-price-rug">£450.00</p>\
        //     </div>')









         };

        function productPage() {
            // Append things to things
            $('head').append('<style type="text/css">' + exp.css + '</style>');
            $("#id").append(exp.vars.favorites);

            function searchClick() {
                $('#search_mini_form').hide()
            };

            $(".btn-menu").on('click', searchClick);
            $(".block-cart").on('click', searchClick);

            $('.opener').on('click', function(){
                $('#search_mini_form').slideToggle();
            });



            // Append new mobile wrapper
            $("#header").prepend(exp.vars.navigate);
            $('body').append('<div id="AWA-footer">\
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
                ');
            $(".info-box").prepend($('.breadcrumbs'));
            $("br").remove();
            $('.breadcrumbs ul li:first').after('<li style="padding-top: 10px; color: grey;">></li>');
            $('#product_addtocart_form > div.info-box > div.breadcrumbs').hide();
            $(".info-box").append("<div id='AWA-qty'>\
                      <div id='AWA-minus' class='AWA-qty-input'>&ndash;</div>\
                      <div id='AWA-qty-middle' class='AWA-qty-input'>QTY: <span id='AWA-qty-num'>1</span></div>\
                      <div id='AWA-plus' class='AWA-qty-input'>+</div>\
                    </div>\
                      <button id='AWA-add' type='button' title='ADD TO BASKET' onclick='productAddToCartForm.submit(this)'><span><span>ADD TO BASKET</span></span></button>\
                      <a id='AWA-fav' href='https://m.coxandcox.co.uk/wishlist/index/index/wishlist_id/'><img src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/23c77559d67367f60d08460a3351abad_heart.jpg'>&nbsp;&nbsp;&nbsp;ADD TO FAVOURITES</a>\
                  </div>\
                  <div id='AWA-desc-section'>\
                    <div id='AWA-buyers-notes'>\
                      <div class='AWA-desc-section-header'>BUYERS NOTES</div>\
                      <div id='AWA-buyers-notes-inner' class='AWA-desc-section-inner'></div>\
                    </div>\
                    <div id='AWA-size-information'>\
                      <div class='AWA-desc-section-header'>SIZE & INFORMATION</div>\
                      <div id='AWA-size-information-inner' class='AWA-desc-section-inner'></div>\
                    </div>\
                    <div id='AWA-delivery-returns'>\
                      <div class='AWA-desc-section-header'>DELIVERY & RETURNS</div>\
                      <div id='AWA-delivery-returns-inner' class='AWA-desc-section-inner'></div>\
                    </div>\
                  </div>");

                  $(".categories-menu").html("<div class='categories-box'> <ul id='AWA-drop-down'>\
                                          <li class='AWA-cat'><a href='#'>Indoor Living</a></li>\
                                          <li class='AWA-h'>\
                                              <ul class='AWA-sub-cat-list'>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home?viewAllItems=true'>View All Indoor Living </a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/new-this-season'>NEW THIS SEASON</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/decorative-home'>Decorative Home</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/bed-bath'>Bed & Bath</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/kids'>Kids</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/home/storage'>Storage</a></li>\
                                              </ul>\
                                          </li>\
                                          <li class='AWA-cat'><a href='#'>Kitchen</a></li>\
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
                                          <li class='AWA-cat'><a href='#'>Furniture</a></li>\
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
                                          <li class='AWA-cat'><a href='#'>Lighting</a></li>\
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
                                          <li class='AWA-cat'><a href='#'>Rugs</a></li>\
                                          <li class='AWA-h'>\
                                              <ul class='AWA-sub-cat-list'>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs?viewAllItems=true'>View All Rugs</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/new-this-season'>NEW THIS SEASON</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/rugs'>Rugs</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/sheepskin-rugs-hides'>Sheepskin & Hides</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/rugs/runners'>Runners</a></li>\
                                              </ul>\
                                          </li>\
                                          <li class='AWA-cat'><a href='#'>Mirrors</a></li>\
                                          <li class='AWA-h'>\
                                              <ul class='AWA-sub-cat-list'>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors?viewAllItems=true'>View All Mirrors</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/new-this-season'>NEW THIS SEASON</a></li>\
                                                  <li class='AWA-sub-cat'><a href='http://m.coxandcox.co.uk/mirrors/outdoor-mirrors'>Outdoor Mirrors</a></li>\
                                              </ul>\
                                          </li>\
                                          <li class='AWA-cat'><a href='#'>Outdoor Living</a></li>\
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
                                          <li class='AWA-cat'><a id='AWA-cat-last' href='#'>Sale Room</a></li>\
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

            $("body").append("<div id='AWA-footer'>\
                        <div id='AWA-footer-inner'></div>\
                        <div id='AWA-footer-logos'>\
                          <img id='AWA-f-logo' src='//useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/b69a8670d57399546cdcb6aa6a19bc0f_logo.jpg'>\
                          <div id='AWA-copy'>\
                            &copy; 2016 Cox & Cox. All Rights Reserved.\
                          </div>\
                        </div>\
                      </div>");

//What is needed for the Nav bar.
// Append img, search, cart, back arrow, and hamburger to top.menue
// display flex justify content space between





          //Append image for pinch zoom.
          jQuery('.image-box').prepend('<div class="grey-box"><img id="pinchHolder"src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Pinch_zoom.png" alt=""><p class="pinchZoom">Pinch to Zoom</p></div>');



            //Hide Stuff
            $('.product-collateral').hide();
            $('#footer').hide();
            // $('#header').hide();
            //remove stuff needed to be left out
            $('.switcher').remove();
            $('.action-box').remove();

            $('.clearer').remove();
            $('#social').remove();



            $('#AWA-drop-down > li:nth-child(10) > ul > li:nth-child(1) > a').click(function(e) {
                console.log('please work');
            });



            // Menu
            $(".top-menu").click(function(e) {
                $("categories-menu").slideToggle();
            });
            $(".AWA-cat").click(function(e) {
                e.preventDefault();
                $(this).next().slideToggle();
            });
            $(".AWA-search").click(function(e) {
                e.preventDefault();
                $(this).next().slideToggle();
            });


            // Search box
    		jQuery("#AWA-search-container").append(jQuery("#search_mini_form"));
            jQuery('#AWA-search').click(function() {
            jQuery('#AWA-search').slideToggle('.form-search');
            console.log('click me');
    		});




        // area for pinch to zoom reminder

        var fade_out = function() {
          $(".grey-box").fadeOut().empty();
          $("#pinchHolder").fadeOut().empty();
          }

      setTimeout(fade_out, 2250);









            // Populate Buyers Notes
            var buyersNotes = $("#tab1").html();
            $("#AWA-buyers-notes-inner").html(buyersNotes);

            // Popualte Size & Information
            var sizeInformation = $("#tab2").html();
            $("#AWA-size-information-inner").html(sizeInformation);

            // Popualte Delivery & Returns
            var deliveryReturns = $("#tab3").html();
            $("#AWA-delivery-returns-inner").html(deliveryReturns);

            $("#AWA-buyers-notes-inner").hide();
            $(".AWA-desc-section-header").click(function() {
                $(this).next().slideToggle();
                $(this).toggleClass("AWA-bg-arrow-none");
            });

            // // Get breadcrumb text
            // var breadcrumb = $(".breadcrumbs").text();
            // breadcrumb = breadcrumb.replace(/\s+/g, " ");
            // $("#AWA-breadcrumb").text(breadcrumb);
            //
            // // Give breadcrumb div dynamic margin in case multiple thumbnails push down
            // var breadcrumbMargin = $(".AWA-thumbnails").height();
            // $("#AWA-breadcrumb").attr('style', 'margin-top: ' + breadcrumbMargin + 'px;');
            // if (!breadcrumbMargin) {
            //   $("#AWA-breadcrumb").attr('style', 'margin-top: 40px;');
            // };




            // Product price
            var price = $(".product-collateral span.price").first().text();
            $("#AWA-price").text(price);

            // Availability
            var availability = $(".product-collateral .availability").html();
            $("#AWA-availability").html(availability);
            $("#AWA-availability").find("span").text($("#AWA-availability").find("span").text() + " - ");



                        // If one SKU
                        if (!$("#super-product-table").length) {

                            // Puppet control add to cart form with mobile controls
                            var quantity = 1;
                            $("#qty").val(quantity);

                            function changeQty() {
                                $("#AWA-qty-num").text(quantity);
                                $("#qty").val(quantity);
                            }

                            $("#AWA-plus").click(function() {
                                quantity++;
                                changeQty();
                            });

                            $("#AWA-minus").click(function() {
                                if (quantity > 1) {
                                    quantity--;
                                    changeQty();
                                }
                            });

                            $("#AWA-add").click(function(e) {
                                e.preventDefault();
                                $(".add-to-cart .btn-cart").click();
                            });

                            $("#AWA-fav").click(function(e) {
                                e.preventDefault();
                                $(".link-wishlist").click();
                            });

            } else {
                // Create input for the multiple SKUs
                $("#AWA-qty").hide();

                $("#AWA-add").click(function(e) {
                    e.preventDefault();
                    $(".add-to-cart .btn-cart").click();
                });
            }

            // Footer
            var footer = $("#footer").find(".box:not('last')");
            $("#AWA-footer-inner").append(footer);

            $("#AWA-footer").find(".box").eq(0).addClass("AWA-f-left");
            $("#AWA-footer").find(".box").eq(2).addClass("AWA-f-left");
            $("#AWA-footer").find(".box").eq(1).addClass("AWA-f-right");
            $("#AWA-footer").find(".box").eq(3).addClass("AWA-f-right");

            $("#AWA-footer").find("li:contains('Visit Our Mobile')").attr("style", "visibility: hidden;");


            //Make images thumbnails

            var images = [];

            jQuery(".holder").last().find("li").find("img").each(function() {
                var image = jQuery(this).attr("src");
                images.push(image);
            });

            exp.log(images);


            var imageDiv = "<div id='AWA-images'>";

            for (var i = 0; i < images.length; i++) {
                imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>";
            }

            imageDiv += "</div>";
            exp.log(imageDiv);

            jQuery(".info-box").before(imageDiv);

            jQuery(".AWA-thumbnail img").click(function(e) {
                var src = jQuery(this).attr("src");
                jQuery(".holder .active img").attr("src", src);
            });
            //nav stufff
                        $('<img class="coxandlogo"src="https://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/CoxandCox-homepagelogo.png" alt="">').appendTo('#headerIn');
                        $('.coxandlogo').appendTo(".search-box");
                        $( ".btn-back" ).remove();
                        $('<a class="btn-back" href="https://m.coxandcox.co.uk/customer/account/login/">Back</a>' ).appendTo('.search-box');
                        $('.top-menu').prependTo(".search-box");
                        $('.block-cart').appendTo(".search-box");
                        $('.holder').find('.search-box').unwrap();
                        $('.holder').find('.block').unwrap();
                        $('#search_mini_form').remove();
                        $('.opener').append('<form id="search_mini_form" action="https://m.coxandcox.co.uk/catalogsearch/result/" method="get">\
        <div class="form-search parent-active" style="display: block;">\
            <label for="search" class=" label-active">Search:</label>\
            <input id="search" type="text" name="q" value="" class="input-text vwo_loaded vwo_loaded_3 text-active" autocomplete="off" style="height: 36px;">\
            <button type="submit" title="Search" class="button" style="height: 36px;"><span><span style="height: 16px;">Search</span></span></button>\
            \
        </div>\
    </form>');



                        jQuery('.search-box')
                            .prependTo(".top-menu");
                        jQuery('.block-cart')
                            .prependTo(".top-menu");




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
