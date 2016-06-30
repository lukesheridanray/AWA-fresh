// jshint multistr: true
// Homes antique image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/07d2884f402c6c5fe4e2dbebc555aa2d_home-antique-cox-awa.png
// Red Image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/567354712fe8309d7c19a9bd9212c61a_red-awa-cox.png
// House Beautiful https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/c49d72ef3f30c180d713d2c444aad857_house-beaut-awa-cox.png
// Home and Garden https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/49d1e71d1636c7e7631426f85edc5680_home-garden-awa-cox.png
// Elle Deco https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/665cd7db323632d49d245bb746ef1b91_elle-cox-awa.png
// Good Homes https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/472d653737c55ae7c67925342add82f1_goodhomes-cox-awa.png
var exp = function($) {

    // Get an instance of the Validation object for our own use
    var validator = new Validation('co-billing-form');

    var exp = {};
    var exptwo= {};
    var firstName= {};

    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

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

//links for navigation bar images.
// hamburger- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/d4e44a2588c287e49bbc3ec6394c15a3_menu-btn-cox.png
// back button- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/76c82ea570a80ffa9778f311be3c32c5_icon-sprite-arrow.png
// background- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/d76ba6698238b6b49bfaba24ccb82dba_coxhead-background.png
// search- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/fe4f841970a258d72b6b6af0b2c4340a_icon-sprite-search.png
// shop- https://useruploads.visualwebsiteoptimizer.com/useruploads/232844/images/af3edcacaab9d9de8666b48ed7e93a55_icon-sprite-shop.png

// Homes antique image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/07d2884f402c6c5fe4e2dbebc555aa2d_home-antique-cox-awa.png
// Red Image https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/567354712fe8309d7c19a9bd9212c61a_red-awa-cox.png
// House Beautiful https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/c49d72ef3f30c180d713d2c444aad857_house-beaut-awa-cox.png
// Home and Garden https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/49d1e71d1636c7e7631426f85edc5680_home-garden-awa-cox.png
// Elle Deco https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/665cd7db323632d49d245bb746ef1b91_elle-cox-awa.png
// Good Homes https://useruploads.visualwebsiteoptimizer.com/useruploads/230591/images/472d653737c55ae7c67925342add82f1_goodhomes-cox-awa.png

    exp.func = {};

//     2. Mobile checkout
// NOTE this is one multi-page experiment
// a) On the first screen, remove the "register with us..." line at the top and remove "with us" in the line below
// b) - Use progressive disclosure so that the user sees only that which is relevant at the time, i.e. up until the 'find address' button
// - Remove 'Company' field
// c) On some phones, the address selector functionality gets cut off on the right.
// - Place it in the centre of the screen, on top of an overlay
// d) Currently, after interacting with the address selector, these error messages pop up default
// - Suppress error messages if the field already contains content
// - Remove 'County' field. If you have to submit something to the db to satisfy the checks, submit "AWA test" in that field to the db
// - Below the 'Phone' field, place the small print: "Only to be used for delivery, if required"
// e) Apply the same rules to the Deliver to Different Address section.


    exp.init = function() {

        if (window.location.pathname === "/") {

            homePage();
            exp.log("On homepage");

        } else if ($("#checkout-step-login").length){

            exp.log("On first checkout page");
            checkoutPageOne();

        } else if ($(".button.btn-cart").length) {

            exp.log("On product page");
            productPage();

        } else {

            exp.log("No changes needed");

        }


        //task a
        function checkoutPageOne() {

            $('.a-item').find('p').first().remove();
            $('.a-item').find('p').first('').html('Register for future convenience:');

        }

        //task b


        //hide company
        $('#billing-new-address-form > fieldset > ul > li:nth-child(2) > div:nth-child(1)').css({'position':'absolute','top':'-1000px'});

        //center find adress.
        document.getElementById("meanbee:billing_address_selector").style.margin = '0px';
        //center find shipping adress.
        document.getElementById("meanbee:shipping_address_selector").style.margin = '0px';


        // Hide County

        $('#billing-new-address-form > fieldset > ul > li:nth-child(8) > div:nth-child(2)').find('.input-box').find('input').val('AWA-digital');
        $('#billing-new-address-form > fieldset > ul > li:nth-child(8) > div:nth-child(2)').hide();
        $('#shipping-new-address-form > fieldset > ul > li:nth-child(8) > div.field.address-detail').find('.input-box').find('input').val('AWA-digital');
        $('#shipping-new-address-form > fieldset > ul > li:nth-child(8) > div.field.address-detail').hide();
        // $('#shipping-new-address-form > fieldset > ul > li:nth-child(8) > div.field.address-detail').remove()
        // $('#billing-new-address-form > fieldset > ul > li:nth-child(3) > div.field.meanbee-postcode-element').hide();
        // $('#billing-new-address-form > fieldset > ul > li.wide.meanbee-postcode-element').hide();
        // $('#billing-new-address-form > fieldset > ul > li:nth-child(8) > div:nth-child(2) > label').removeClass();

        // shipping to different adress

        // hide company
        $('#shipping-new-address-form > fieldset > ul > li:nth-child(2) > div').hide();

        $(".name-lastname, #shipping-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1),\
        #shipping-new-address-form > fieldset > ul > li:nth-child(10) > div").hide();

        var firstNameShip =
        $('#shipping-new-address-form > fieldset > ul > li:nth-child(1) > div > div.field.name-firstname');

        firstNameShip.click(function(e) {
           $(".name-lastname").show();
        });
        firstNameShip.find('input').focus(function(e) {
           $(".name-lastname").show();
        });

        $('.name-lastname').click(function(e) {
            $("#shipping-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)").show();
        });
        $('.name-lastname').find('input').focus(function(e) {
            $("#shipping-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)").show();
        });

        $('#shipping-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)').click(function(e) {
            $("#shipping-new-address-form > fieldset > ul > li:nth-child(10) > div").show();
        });
        $('#shipping-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)').find('input').focus(function(e) {
            $("#shipping-new-address-form > fieldset > ul > li:nth-child(10) > div").show();
        });


        /* these divs are hidden by javascript rather than css so that they remain visible if javascript is disabled  */
        $(".name-lastname, #billing-new-address-form > fieldset > ul > li:nth-child(2) > div,\
        #billing-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1),\
        #billing-new-address-form > fieldset > ul > li:nth-child(10) > div,\
        #register-customer-password > div:nth-child(1),\
        #register-customer-password > div:nth-child(2),\
        #billing-new-address-form > fieldset > ul > li:nth-child(8), #billing-new-address-form > fieldset > ul > li.wide.meanbee-postcode-element, #billing-new-address-form > fieldset > ul > li:nth-child(8) > div:nth-child(2), #continue-btn, #billing-new-address-form > fieldset > ul > li:nth-child(3) > div.field.meanbee-postcode-element").hide();

        var firstName =
            $("#billing-new-address-form > fieldset > ul > li:nth-child(1) > div > div.field.name-firstname > div");
        var lastName =
            $(".name-lastname");
        var emailAddress =
            $("#billing-new-address-form > fieldset > ul > li:nth-child(2)");
        var postalCode = $('#billing-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)');
        var telephone = $('#billing-new-address-form > fieldset > ul > li:nth-child(10) > div');
        var password = $('#register-customer-password > div:nth-child(1)');
        var confirmPassword = $('#register-customer-password > div:nth-child(2)');
        var addressLine1 = $('#billing-new-address-form > fieldset > ul > li:nth-child(6)');
        var detailaddress = $('#billing-new-address-form > fieldset > ul > li:nth-child(7)');
        var townCity = $('#billing-new-address-form > fieldset > ul > li:nth-child(8)');
        var country = $('#billing-new-address-form > fieldset > ul > li:nth-child(9)');
        var address = $('#billing-new-address-form > fieldset > ul > li:nth-child(6)');
        var selectAddress = $('#billing-new-address-form > fieldset > ul > li:nth-child(3) > div.field.meanbee-postcode-element button');
        var county = $('#billing-new-address-form > fieldset > ul > li:nth-child(8) > div:nth-child(2)');
        var continueBtn = $('#continue-btn');

        $('#billing-new-address-form > fieldset > ul > li:nth-child(6)').hide();
        $('#billing-new-address-form > fieldset > ul > li:nth-child(7)').hide();

        // fix the address pop up box.
        // $('ul li:nth-child(5)').click(function(e) {
        //     $('#billing-new-address-form > fieldset > ul > li:nth-child(6), #billing-new-address-form > fieldset > ul > li:nth-child(7)').show();
        // });
        // $('ul li:nth-child(5)').find('input').focus(function(e) {
        //     $('#billing-new-address-form > fieldset > ul > li:nth-child(6), #billing-new-address-form > fieldset > ul > li:nth-child(7)').show();
        // });



        //$('.input-box').find('.validation-advice').remove();

        firstName.click(function(e) {
           $(".name-lastname").show();
        });
        firstName.find('input').focus(function(e) {
           $(".name-lastname").show();
        });

        lastName.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(2) > div").show();
        });
        lastName.find('input').focus(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(2) > div").show();
        });
        emailAddress.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)").show();
        });
        emailAddress.find('input').focus(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(3) > div:nth-child(1)").show();
        });
        postalCode.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(3) > div.field.meanbee-postcode-element, #billing-new-address-form > fieldset > ul > li.wide.meanbee-postcode-element").show();
        });
        postalCode.find('input').focus(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(3) > div.field.meanbee-postcode-element, #billing-new-address-form > fieldset > ul > li.wide.meanbee-postcode-element").show();
        });
/*
@Luke Do we need this? - Jamie
        $( "#billing-new-address-form > fieldset > ul > li:nth-child(6)" ).hover(function() {
            exp.log('hover');
            $('#billing-new-address-form > fieldset > ul > li:nth-child(7)').show();
        });
*/
        addressLine1.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(8)").show();
        });
        addressLine1.find('input').focus(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(8)").show();
        });
        detailaddress.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(8)").show();
        });
        detailaddress.find('input').focus(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(8)").show();
        });
        /*
        This interval will check the value of the billing address fields every second
        if it finds a value it will clear the interval and revalidate the form
        it will also show the next field
        */
        var checkBillValInterval = setInterval(function(){
            if(
                $('#billing-new-address-form > fieldset > ul > li:nth-child(6) input').val() !== '' ||
                $('#billing-new-address-form > fieldset > ul > li:nth-child(7) input').val() !== ''
            ) {
                validator.validate();
                clearInterval(checkBillValInterval);
                $("#billing-new-address-form > fieldset > ul > li:nth-child(8)").show();
            }
        }, 1000);
        /*
        This interval will check the value of the billing address fields every second
        if it finds a value it will clear the interval and revalidate the form
        it will also show the next field
        */
        var checkShipValInterval = setInterval(function(){
            if(
                $('#shipping-new-address-form > fieldset > ul > li:nth-child(6) input').val() !== '' ||
                $('#shipping-new-address-form > fieldset > ul > li:nth-child(7) input').val() !== ''
            ) {
/*
We need a seperate validator instance for the shipping form
*/
                validator.validate();
                clearInterval(checkShipValInterval);
                $("#shipping-new-address-form > fieldset > ul > li:nth-child(8)").show();
            }
        }, 1000);

        selectAddress.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(6), #billing-new-address-form > fieldset > ul > li:nth-child(7) ").show();
        });

        townCity.click(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(9)").show();
            $('#billing-new-address-form > fieldset > ul > li:nth-child(10) > div').show();
        });
        townCity.find('input').focus(function(e) {
            $("#billing-new-address-form > fieldset > ul > li:nth-child(9)").show();
            $('#billing-new-address-form > fieldset > ul > li:nth-child(10) > div').show();
        });
        county.click(function(e) {
            $("").show();
        });
        county.find('input').focus(function(e) {
            $("").show();
        });
        //  country.hover(function(e) {
        //      $("#billing-new-address-form > fieldset > ul > li:nth-child(10)").show();
        //  });

        telephone.click(function(e) {
            $("#register-customer-password > div:nth-child(1), #continue-btn").show();
        });
        telephone.find('input').focus(function(e) {
            $("#register-customer-password > div:nth-child(1), #continue-btn").show();
        });

        password.click(function(e) {
            $("#register-customer-password > div:nth-child(2)").show();
        });
        password.find('input').focus(function(e) {
            $("#register-customer-password > div:nth-child(2)").show();
        });

        //$('ul li:nth-child(6)').find('.validation-advice').remove();


    // ADD phone message.

    $('#billing-new-address-form > fieldset > ul > li:nth-child(10) > div').append('<p>Only to be used for delivery, if required</p>');
    // ADD phone message for shipping.

    $('#shipping-new-address-form > fieldset > ul > li:nth-child(10) > div').append('<p>Only to be used for delivery, if required</p>');


    }; // exp.init

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
        return $(".top-menu").length;
    }, exp.init, 10000);

    return exp;

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
