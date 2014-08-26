//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var tile_calculator_2014_08 = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Tile Calculator 2014 08 - 1.0.5');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('.product-top-container .tile-calculator-btn');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    ran_once: false,
    tile_width_mm: undefined,
    tile_length_mm: undefined,
    tile_type: undefined,

    // Some existing elements will be set when the modal loads, page-wide elements can
    // be set here.
    tile_calculator_block      : $('#tile-calculator'),
    tile_calculator_modal      : $('#tile-calculator-modal'),
    tile_calculator_button     : $('.product-top-container .tile-calculator-btn'),
    tile_calculator_form       : $('#tile-calculator-modal .modal-body > #tile-calculator'),
    technical_info_rows        : $('.tech-info-table .row'),
    product_add_to_cart_button : $('.product-top-container .add-item-btn'),

    // Content
    content: {
        modal_title: 'How many tiles do you need?',
        modal_description: 'The tile calculator will tell you exactly what you\'ll need for tiling your room: exactly how many tiles and the grout, spaces and adhesive required.',
        you_need_title: 'You need:-',
        you_need_subtitle_floor: 'For your floor',
        you_need_subtitle_wall : 'For your wall',
        you_need_desc: '(This includes 10% extra to account for wastage and cutting of tiles)',
        you_need_tiles_label: 'No of tiles',
        you_may_also_need_title: 'You may also need:-',
        you_may_also_need_adhesive_label: 'Adhesive',
        you_may_also_need_grout_label: 'Grout',
        you_may_also_need_spacers_label: 'Spacers',
        you_may_also_need_linear_border_label: 'Linear Border',
        add_to_basket_label: 'Add to Basket',
        calculate_label: 'Calculate',
        add_room_button_wall: 'Add a wall',
        add_room_button_floor: 'Add a floor',
        width_field_placeholder: 'Width',
        length_field_placeholder: 'Length',
        height_field_placeholder: 'Height'
    },

    // Images
    images: {
        wall_diagram  : '//cdn.optimizely.com/img/174847139/2c2460cd5e814347b2c86b88f51f8a06.png',
        floor_diagram : '//cdn.optimizely.com/img/174847139/d127a116d0e64f45960de354f5cd20e8.png',
    }
};
exp.vars.modal_description = $('<p>', { text: exp.vars.content.modal_description });

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#CGIT_image_col { \
    text-align: center; \
} \
#CGIT_you_need_col h4, \
#CGIT_you_may_col h4 { \
    font-size: 24px; \
    font-weight: bold; \
} \
#CGIT_you_need_col h5, \
#CGIT_you_may_col h5 { \
    font-size: 18px; \
    font-weight: bold; \
} \
#CGIT_you_need_col .tile-recipiticle h5 { \
    font-size: initial; \
    font-weight: initial; \
    color: #357ab3; \
} \
#CGIT_no_of_tiles_field { \
    color: #357ab3; \
    padding: 1em; \
    background-color: #f2f2f2; \
    border: 0; \
    width: 50%; \
} \
#CGIT_you_may_col label { \
    width: 100px; \
    float: left; \
    margin-right: 1em; \
    clear: left; \
    line-height: 34px; \
    margin-bottom: 1em; \
} \
#CGIT_you_may_col .input-group { \
    width: 200px; \
    margin-bottom: 1em; \
} \
#CGIT_you_may_col .input-group input { \
    text-align: right; \
} \
#CGIT_you_may_col .input-group .total-uom { \
    width: 90px; \
} \
.room-row td:nth-child(7), /* Equals symbol */ \
.room-row .room, \
.room-row .total { \
    display: none; \
} \
.table>tbody>tr>td, \
.table-striped>tbody>tr.room-row:nth-child(odd)>td, \
.table-striped>tbody>tr.cutting-row:nth-child(odd)>td { \
    background-color: transparent; \
    border-top: 0; \
} \
#CGIT_you_need_add_to_cart_btn, \
#CGIT_you_may_add_to_cart_btn { \
    width: 300px; \
    margin-left: 15px; \
} \
#tile-calculator .row.tab-buttons { \
    margin-top: -15px; \
} \
#tile-calculator-modal .modal-header { \
    border-bottom: 0; \
} \
#tile-calculator-modal .modal-body { \
    padding-bottom: 30px; \
} \
#tile-calculator-modal .modal-footer { \
    display: none; \
}';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
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

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
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

exp.func.initNewElements = function(){
    exp.vars.new_elements = {
        'image_and_rooms_row'                          : $('<div id="CGIT_images_and_rooms_row" class="row">'),
            'image_col'                                : $('<div id="CGIT_image_col" class="col-sm-6">'),
                'image'                                : $('<img id="CGIT_image" src="'+ exp.vars.images.wall_diagram +'">'),
            'rooms_col'                                : $('<div id="CGIT_rooms_col" class="col-sm-6">'),
        'you_need_row'                                 : $('<div id="CGIT_you_need_row" class="row">'),
            'you_need_col'                             : $('<div id="CGIT_you_need_col" class="col-sm-6"><h4>'+ exp.vars.content.you_need_title +'</h4><div class="row"><div class="col-sm-6"><h5>'+ exp.vars.content.you_need_subtitle_wall +'</h5><p>'+ exp.vars.content.you_need_desc +'</p></div><div class="col-sm-6 tile-recipiticle"><h5>No of tiles</h5></div></div></div>'),
                'no_of_tiles_field'                    : $('<input type="text" id="CGIT_no_of_tiles_field" disabled="disabled" />'),
            'you_may_col'                              : $('<div id="CGIT_you_may_col" class="col-sm-6"><h4>'+ exp.vars.content.you_may_also_need_title +'</h4></div>'),
                'you_may_also_need_adhesive_label'     : $('<label>'+ exp.vars.content.you_may_also_need_adhesive_label +'</label>'),
                'you_may_also_need_grout_label'        : $('<label>'+ exp.vars.content.you_may_also_need_grout_label +'</label>'),
                'you_may_also_need_spacers_label'      : $('<label>'+ exp.vars.content.you_may_also_need_spacers_label +'</label>'),
                'you_may_also_need_linear_border_label': $('<label>'+ exp.vars.content.you_may_also_need_linear_border_label +'</label>'),
        'add_to_cart_row'                              : $('<div id="CGIT_add_to_cart_row" class="row">'),
            'you_need_add_to_cart_col'                 : $('<div id="CGIT_you_need_add_to_cart_col" class="col-sm-6">'),
                'you_need_add_to_cart_btn'             : $('<a id="CGIT_you_need_add_to_cart_btn" class="btn btn-primary" data-loading-text="Added to cart.">Add to Basket</a>'),
            'you_may_add_to_cart_col'                  : $('<div id="CGIT_you_may_add_to_cart_col" class="col-sm-6">'),
                'you_may_add_to_cart_btn'              : $('<a id="CGIT_you_may_add_to_cart_btn" class="btn btn-primary" data-loading-text="Added to cart.">Add to Basket</a>'),
    };
};

exp.func.loadExistingElements = function(){
    exp.vars.elements = {
        'tile_calculator_modal_title'            : $('#tile-calculator-modal .modal-content .modal-header .modal-title'),
        'floor_wall_buttons_row'                 : $('#tile-calculator-modal div.row.tab-buttons'),
        'floor_calculator_button'                : $('.floor-calc-btn'),
        'wall_calculator_button'                 : $('.wall-calc-btn'),
        'le_grande_table'                        : $('#tile-calculator-modal .modal-content table'),
            'le_grande_table_header'             : $('#tile-calculator-modal .modal-content table thead'),
            'le_grande_table_cutting_row'        : $('#tile-calculator-modal .modal-content table tbody .cutting-row'),
            'le_grande_table_cutting_label'      : $('#tile-calculator-modal .modal-content table tbody .cutting-row .field'),
            'le_grande_table_cutting_field'      : $('#tile-calculator-modal .modal-content table tbody .cutting-row .value .input-group'),
            'le_grande_table_adhesive_row'       : $('#tile-calculator-modal .modal-content table tbody .adhesive-row'),
            'le_grande_table_adhesive_label'     : $('#tile-calculator-modal .modal-content table tbody .adhesive-row .field'),
            'le_grande_table_adhesive_field'     : $('#tile-calculator-modal .modal-content table tbody .adhesive-row .value .input-group'),
            'le_grande_table_grout_row'          : $('#tile-calculator-modal .modal-content table tbody .grout-row'),
            'le_grande_table_grout_label'        : $('#tile-calculator-modal .modal-content table tbody .grout-row .field'),
            'le_grande_table_grout_field'        : $('#tile-calculator-modal .modal-content table tbody .grout-row .value .input-group'),
            'le_grande_table_spacers_row'        : $('#tile-calculator-modal .modal-content table tbody .spacers-row'),
            'le_grande_table_spacers_label'      : $('#tile-calculator-modal .modal-content table tbody .spacers-row .field'),
            'le_grande_table_spacers_field'      : $('#tile-calculator-modal .modal-content table tbody .spacers-row .value .input-group'),
            'le_grande_table_linear_border_row'  : $('#tile-calculator-modal .modal-content table tbody .linear-border-row'),
            'le_grande_table_linear_border_label': $('#tile-calculator-modal .modal-content table tbody .linear-border-row .field'),
            'le_grande_table_linear_border_field': $('#tile-calculator-modal .modal-content table tbody .linear-border-row .value .input-group'),
            'le_grande_table_tiles_row'          : $('#tile-calculator-modal .modal-content table tbody .total-row'),
            'le_grande_table_tiles_label'        : $('#tile-calculator-modal .modal-content table tbody .total-row .field'),
            'le_grande_table_tiles_field'        : $('#tile-calculator-modal .modal-content table tbody .total-row .value .input-group'),
            'add_room_button'                    : $('#tile-calculator-modal .modal-content table tbody .room-add-btn'),
        'modal_footer'                           : $('#tile-calculator-modal .modal-footer'),
            'modal_apply_button'                 : $('#tile-calculator-modal .modal-footer .apply-btn')
    };
};

exp.func.executeDomChanges = function() {
    // Change modal title
    exp.vars.elements.tile_calculator_modal_title.text(
        exp.vars.content.modal_title
    );

    // Add description of tile calculator
    exp.vars.elements.tile_calculator_modal_title.after(
        exp.vars.modal_description
    );

    // Hide the mode-switch buttons
    exp.vars.elements.floor_wall_buttons_row.hide();

    // Assemble and insert rows/cols to DOM
    exp.vars.new_elements.image_col.append(
        exp.vars.new_elements.image
    );
    exp.vars.new_elements.image_and_rooms_row.append(
        exp.vars.new_elements.image_col,
        exp.vars.new_elements.rooms_col
    );
    exp.vars.new_elements.you_need_row.append(
        exp.vars.new_elements.you_need_col,
        exp.vars.new_elements.you_may_col
    );
    exp.vars.new_elements.you_need_add_to_cart_col.append(
        exp.vars.new_elements.you_need_add_to_cart_btn
    );
    exp.vars.new_elements.you_may_add_to_cart_col.append(
        exp.vars.new_elements.you_may_add_to_cart_btn
    );

    exp.vars.new_elements.add_to_cart_row.append(
        exp.vars.new_elements.you_need_add_to_cart_col,
        exp.vars.new_elements.you_may_add_to_cart_col
    );
    exp.vars.elements.floor_wall_buttons_row.after(
        exp.vars.new_elements.image_and_rooms_row,
        exp.vars.new_elements.you_need_row,
        exp.vars.new_elements.add_to_cart_row
    );

    // Add subtitle to you_need col (switches text based upon calculator mode)
    exp.vars.new_elements.you_need_col.append(
        exp.vars.new_elements.you_need_subtitle
    );

    // MOVE LE GRANDE TABLE
    exp.vars.new_elements.rooms_col.append(
        exp.vars.elements.le_grande_table
    );

    // Hide LE GRANDE TABLE's header
    exp.vars.elements.le_grande_table_header.hide();

    // Move various rows out of LE GRANDE TABLE into their position in the new layout
    exp.vars.elements.le_grande_table_cutting_label.hide();
    exp.vars.elements.le_grande_table_cutting_field.parent().hide(); // Hide 'td'

    // Assemble "You may also need..." column
    exp.vars.new_elements.you_may_col.append(
        exp.vars.elements.le_grande_table_adhesive_field,
        exp.vars.elements.le_grande_table_grout_field,
        exp.vars.elements.le_grande_table_spacers_field,
        exp.vars.elements.le_grande_table_linear_border_field
    );

    // Hide rows whih previously held the fields we've moevd elsewhere - these
    // rows are now empty.
    exp.vars.elements.le_grande_table_adhesive_row.hide();
    exp.vars.elements.le_grande_table_grout_row.hide();
    exp.vars.elements.le_grande_table_spacers_row.hide();
    exp.vars.elements.le_grande_table_linear_border_row.hide();

    // Add tiles field to "You need" column
    exp.vars.new_elements.you_need_col.find('.tile-recipiticle').append(
        exp.vars.elements.le_grande_table_tiles_field,
        exp.vars.new_elements.no_of_tiles_field
    );
    // Hide tiles row (now empty) and tiles field (we'll use it's data in a
    // another field, but not display it directly.)
    exp.vars.elements.le_grande_table_tiles_row.hide();
    exp.vars.elements.le_grande_table_tiles_field.hide();

    // Add labels to moved elements in "You may also need" column
    exp.vars.elements.le_grande_table_adhesive_field.before(
        exp.vars.new_elements.you_may_also_need_adhesive_label
    );
    exp.vars.elements.le_grande_table_grout_field.before(
        exp.vars.new_elements.you_may_also_need_grout_label
    );
    exp.vars.elements.le_grande_table_spacers_field.before(
        exp.vars.new_elements.you_may_also_need_spacers_label
    );
    exp.vars.elements.le_grande_table_linear_border_field.before(
        exp.vars.new_elements.you_may_also_need_linear_border_label
    );

    // Add "wall-attr" class to linear border field and label - it should only show when we're messing with walls.
    exp.vars.elements.le_grande_table_linear_border_field.addClass('wall-attr');
    exp.vars.new_elements.you_may_also_need_linear_border_label.addClass('wall-attr');
};

exp.func.onTilesCalculated = function($tiles_input){
    console.log("Tiles changed!");
    var tile_area_m = (exp.vars.tile_width_mm / 1000) * (exp.vars.tile_length_mm / 1000), // Convert Millimeter values to Meter
        area_to_fill = parseInt($tiles_input.val(), 10),
        tiles_required = area_to_fill / tile_area_m;

    // Populate "No of tiles" field with amount of tiles required
    exp.vars.new_elements.no_of_tiles_field.val(tiles_required);

    // Reset add-to-cart buttons
    exp.vars.new_elements.you_need_add_to_cart_btn.button('reset');
    exp.vars.new_elements.you_may_add_to_cart_btn.button('reset');
};

exp.func.attachAddToCartLogic = function() {
    // Proxy for the modal's "Apply" button.
    exp.vars.new_elements.you_need_add_to_cart_btn.on('click', function(e){
        // Set button o loading state (shows "Added to cart.")
        $(this).button('loading');

        // Code extracted from the existing site (de-minified)

        // Load values from modal
        var _tiles_val    = parseFloat($("input.total-tiles",    this.form).val());

        // Defaults values to 0 if they're NaN
        if (isNaN(_tiles_val))    _tiles_val    = 0;

        var add_to_cart_form = exp.vars.tile_calculator_button.closest("form");

        // Populate the product page quantity input and trigger any event listeners
        $(".base-input", add_to_cart_form).val(_tiles_val);
        $(".base-input", add_to_cart_form).trigger("blur");

        // Add to cart!
        exp.vars.product_add_to_cart_button.click();
    });


    exp.vars.new_elements.you_may_add_to_cart_btn.on('click', function(e){
        // Set button o loading state (shows "Added to cart.")
        $(this).button('loading');

        // Code extracted from the existing site (de-minified)

        // Load values from modal
        var _border_val   = parseFloat($("input.total-border",   this.form).val()),
            _grout_val    = parseFloat($("input.total-grout",    this.form).val()),
            _adhesive_val = parseFloat($("input.total-adhesive", this.form).val()),
            _spacers_val  = parseFloat($("input.total-spacers",  this.form).val());

        // Defaults values to 0 if they're NaN
        if (isNaN(_border_val))   _border_val   = 0;
        if (isNaN(_grout_val))    _grout_val    = 0;
        if (isNaN(_adhesive_val)) _adhesive_val = 0;
        if (isNaN(_spacers_val))  _spacers_val  = 0;

        $(".cross-sell-list .adhesive").each(function (i, elem) {
            var $elem = $(elem);

            var _weight = parseFloat($elem.data("weight"));
            if (isNaN(_weight)) _weight = 0;

            var _qty = Math.ceil(20 / _weight * _adhesive_val);
            $(".recommended-uom", $elem).text("x " + Math.ceil(_weight) + "kg bag(s)");
            $(".recommended-quantity", $elem).text(_qty);
            $(".sale-input", $elem).val(_qty);
            // $(".sale-input", $elem).trigger("blur");
            $elem.addClass("recommended");

            // Add to cart
            $(".update-item-btn", $elem).click();
        });

        $(".cross-sell-list .grout").each(function (i, elem) {
            var $elem = $(elem);

            var _weight = parseFloat($elem.data("weight"));
            if (isNaN(_weight)) _weight = 0;

            var _qty = Math.ceil(5 / _weight * _grout_val);
            $(".recommended-uom", $elem).text("x " + Math.ceil(_weight) + "kg bag(s)");
            $(".recommended-quantity", $elem).text(_qty);
            $(".sale-input", $elem).val(_qty);
            // $(".sale-input", $elem).trigger("blur");
            $elem.addClass("recommended");

            // Add to cart
            $(".update-item-btn", $elem).click();

        });

        $(".cross-sell-list .spacers").each(function (i, elem) {
            var $elem = $(elem);

            $(".recommended-uom", $elem).text("pack(s)");
            $(".recommended-quantity", $elem).text(_spacers_val);
            $(".sale-input", $elem).val(_spacers_val);
            $(".sale-input", $elem).trigger("blur");
            $elem.addClass("recommended");

            // Add to cart
            $(".update-item-btn", $elem).click();

        });

        $(".cross-sell-list .linear-border").each(
            exp.vars.tile_calculator_form.hasClass("floor") ?
                function (i, elem) {
                    $(elem).removeClass("recommended");
                }
            :
                function (i, elem) {
                    var $elem = $(elem);
                    $(".recommended-uom", $elem).text("m");
                    $(".recommended-quantity", $elem).text(_border_val);
                    $(".sale-input", $elem).val(_border_val);
                    $(".sale-input", $elem).trigger("blur");
                    $elem.addClass("recommended");

                    // Add to cart (Delay slightly to wait for any event listeners on 'blur' to parse.)
                    $(".update-item-btn", $elem).click();

                });
    });
};

exp.func.onModalLoaded = function(e){
    // Create brand new elements. Doing it here instead of at script-load time
    // because the modal is loaded fresh each tiem it's clicked, so we need
    // fresh elements.
    exp.func.initNewElements();

    // Now the modal has loaded we can now populate vars with the relevant
    // existing elements in the modla.
    exp.func.loadExistingElements();

    // We've got everything we need to change the DOM now
    exp.func.executeDomChanges();

    // Add placeholders to room fields
    exp.func.addRoomRowPlaceholders();

    // Add event listener to "Add room" button, when it is clicked we need to
    // re-add the room placeholders, after a minor delay (to make sure thi is ran last)
    exp.vars.elements.add_room_button.on('click', function(){
        setTimeout(exp.func.addRoomRowPlaceholders, 100);
    });

    // Get the new "No of tiles" input hooked up with the tiles-required input.
    // We have to poll for this because the input is populated by Javascript,
    // and many browsers will not trigger a 'change' event for that.
    var $tiles_input = exp.vars.elements.le_grande_table_tiles_field.find('input'),
        old_value;

    setInterval(function(){
        if ($tiles_input.val() !== old_value)  // This is NaN ??
        {
            old_value = $tiles_input.val();
            exp.func.onTilesCalculated($tiles_input);
        }
    }, 500);

    // Hook up the "Add to cart" tab-buttons
    exp.func.attachAddToCartLogic();

    // Hook up the aesthetic changes between floor/wall tile to the floor/wall buttons
    exp.vars.elements.floor_calculator_button.on('click', function(e){
        exp.vars.new_elements.image.attr('src', exp.vars.images.floor_diagram);
        exp.vars.new_elements.you_need_col.find('.col-sm-6:not(.tile-recipiticle) h5').text(
            exp.vars.content.you_need_subtitle_floor
        );
        exp.vars.elements.add_room_button.text(
            exp.vars.content.add_room_button_floor
        );
    });
    exp.vars.elements.wall_calculator_button.on('click', function(e){
        exp.vars.new_elements.image.attr('src', exp.vars.images.wall_diagram);
        exp.vars.new_elements.you_need_col.find('.col-sm-6:not(.tile-recipiticle) h5').text(
            exp.vars.content.you_need_subtitle_wall
        );
        exp.vars.elements.add_room_button.text(
            exp.vars.content.add_room_button_wall
        );
    });

    // Switch to the relevant variant of the form (floor or wall tiles)
    switch(exp.vars.tile_type)
    {
        case "floor":
            exp.vars.elements.floor_calculator_button.click();
            break;

        case "wall":
            exp.vars.elements.wall_calculator_button.click();
            break;

        case "floor_wall":
            // Show the selection buttons, default to floor.
            exp.vars.elements.floor_wall_buttons_row.show();
            exp.vars.elements.floor_calculator_button.click();
            break;
    }
};

exp.func.addRoomRowPlaceholders = function(){
    $('#tile-calculator-modal .modal-content table tbody .room-row .length input').each(function(i, elem){
        $(elem).attr('placeholder', exp.vars.content.length_field_placeholder);
    });
    $('#tile-calculator-modal .modal-content table tbody .room-row .width input').each(function(i, elem){
        $(elem).attr('placeholder', exp.vars.content.width_field_placeholder);
    });
    $('#tile-calculator-modal .modal-content table tbody .room-row .height input').each(function(i, elem){
        $(elem).attr('placeholder', exp.vars.content.height_field_placeholder);
    });
};

exp.func.loadTechnicalInfo = function(){
    exp.vars.technical_info_rows.each(function(i, elem){
        var $elem = $(elem),
            label = $elem.find('.tech-label').text().trim(),
            value = $elem.find('.tech-value').text().trim();

        switch (label) {
            case "Width":
                exp.vars.tile_width_mm = parseInt(value.replace( /^\D+/g, ''), 10);
                break;
            case "Length":
                exp.vars.tile_length_mm = parseInt(value.replace( /^\D+/g, ''), 10);
                break;
            case "Tile Type":
                switch (value) {
                    case "Floor Tile":
                        exp.vars.tile_type = "floor";
                        break;
                    case "Wall Tile":
                        exp.vars.tile_type = "wall";
                        break;
                    case "Floor & Wall tile":
                        exp.vars.tile_type = "floor_wall";
                        break;
                }
        }
    });
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // Get tile width and height from page
    exp.func.loadTechnicalInfo();

    // Check if we've been able to extract the relevant information to run the experiment.
    if (exp.vars.technical_info_rows.length === 0 ||
        exp.vars.tile_width_mm === undefined ||
        exp.vars.tile_length_mm === undefined ||
        exp.vars.tile_type === undefined
        )
    {
        console.log("Required information cannot be extracted from technical information table.  Aborting experiment.");
        return false;
    }

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Hook onto tile calc being shown
    this.vars.tile_calculator_modal.on('shown.bs.modal', function(){
        exp.func.waitForElement('#tile-calculator-modal .modal-content .modal-body #tile-calculator', function(){
            // Slight timeout to account for site JS.
            setTimeout(exp.func.onModalLoaded, 1000);
        });
    });

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);