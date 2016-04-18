/*

any product page with URL ending in blind$
excluding any vertical blind product pages (where URL ends in vertical-blind$)



"10% of audience

50/50 split."

Using UA so this may not work unless we have it updated - Jamie knows the score.

"exclude client IP addresses - already supplied

ensure that test is mutually exclusive of two tests that are currently running."

Revenue per visitor

"Refer to mockups which have been supplied already.

MOCKUP SHOWING MEASUREMENT MODULE AFTER PRICE HAS BEEN SELECTED
- I have added a heading sentence for the module to clarify what is expected of the potential customer as they come to interact with this module.
- Recess and exact have been moved above the measurement input boxes
- I have removed the '*' next to the ""fitting type"" text because it doesn't correspond with an asterisk anywhere else as would normally be expected.
- I have moved the text ""fitting type"" to sit above the radio boxes so it acts as a clear introduction to these two radio boxes.
- I have removed the '*' next to the test ""width"" and ""drop"" because it doesn't correspond with a asterisk anywhere else as would normally be expected.
- For the sake of brevity and clarity I have shortened the text above the width and drop box input fields. I have also added the word ""drop"" into the sentence so it clearly indicates that 'drop', which is also used as a label for the corresponding input field, relates to height.
- added text to indicate steps 1 and 2.

MOCKUP SHOWING MEASUREMENT MODULE BEFORE PRICE HAS BEEN SELECTED
- I have added a heading sentence for the module to clarify what is expected of the potential customer as they come to interact with this module.
- Recess and exact have been moved above the measurement input boxes
- I have removed the '*' next to the ""fitting type"" text because it doesn't correspond with an asterisk anywhere else as would normally be expected.
- I have moved the text ""fitting type"" to sit above the radio boxes so it acts as a clear introduction to these two radio boxes.
- I have removed the '*' next to the test ""width"" and ""drop"" because it doesn't correspond with a asterisk anywhere else as would normally be expected.
- For the sake of brevity and clarity I have shortened the text above the width and drop box input fields. I have also added the word ""drop"" into the sentence so it clearly indicates that 'drop', which is also used as a label for the corresponding input field, relates to height.
- added text to indicate steps 1 and 2.
- added a tick symbol (would be green in the final version) to indicate that the step has been completed
- Removed the '*' next to the following text: 'control position' and  'Bunch'. I did this for the same reason I have removed asterisks elsewhere.

NB
For blinds that also require a slat width to be selected (i.e. venetian blinds) a slat width selector has been added to step 2 for both the pre and post price modules."

"Refer to mockups already supplied.

BEFORE A PRICE HAS BEEN REQUESTED

Recess (inside window frame)
Exact (outside window frame)

Not sure about the difference between recess and exact or need any advice on how to take exact measurements? Click [here]

STEP 2 - INPUT MEASUREMENTS
Enter slat width. (NB this is only for venetian-blind$)

Enter width and drop height in the boxes below.
Width (cm)
Drop (cm)

NB: Min and Max width and drop height should reflect whatever is the min and max for each blind. This will already be displayed.

AFTER A PRICE HAS BEEN REQUESTED
Same as above +.....

STEP 3
Control position
Bunch"

"There are two states of the module in question, both versions have a associated mockups.

State 1
The module as displayed BEFORE a price has been requested

State 2
The module as displayed AFTER a price has been selected.

Additionally step 2 in both modules may also include an extra piece of functionality in the form of a slat width selector which is shown in relation to venetian blinds. 




*/

//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Measurements panel - 0.2');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    isVenetian: ( window.location.pathname.indexOf('venetian-blind') !== -1 ) ? true : false,
    step1: $('#configure .initial-step'),
    step2: $('#configure #step2'),
    greenTick: '//cdn.optimizely.com/img/174847139/791fbbec404a4c4b9752b3d21f901426.png',
    copy: {
        introduction: 'Enter your blind measurement details to get an exact made to measure price.',
        step1heading: 'STEP 1 - SELECT FITTING TYPE',
        step2heading: 'STEP 2 - INPUT MEASUREMENTS',
        step3heading: 'STEP 3',
        enterWidthHeight: 'Enter width and drop height in the boxes below.',
        recessExactNote: 'Not sure about the difference between recess and exact or need any advice on how to take exact measurements? Click <a href="#" class="m-module-modal-trigger">here</a>.'
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#advice-required-recess-exact-before { \
    display: none; \
    clear: both; \
} \
.option-label.required em, .option-label .required em { \
    display:none; \
} \
.product-shop .price-msg .price-pay, \
.product-shop .price-msg .man-price { \
    color: #50595E !important; \
} \
.m-module-heading { \
    font-weight: bold; \
    position: relative; \
} \
.m-module-heading, p.help-block { \
    clear: both; \
    margin-left: 6px; \
} \
.drop_down-0 .m-module-heading { \
    margin-top: 15px; \
    margin-bottom: 0; \
    margin-left: 0; \
} \
.label-title, .label-content { \
    color: #737373 !important; \
} \
.note.text-danger { \
    color: #737373; \
    font-style: italic; \
    font-size: 0.9em; \
} \
.product-option.field-1 .label-title, \
.product-option.field-2 .label-title { \
    color: #333; \
} \
.drop_down-0 p.help-block { \
    margin-left: 0; \
} \
.recess-exact-field-wrapper { \
    width: 100% !important; \
} \
.recess-exact-field-wrapper a { \
    color: #7292CB; \
    text-decoration: underline; \
} \
.valid-green-ticks .m-module-step1:after, \
.valid-green-ticks .m-module-step2:after, \
.valid-green-ticks--step3 .m-module-step3:after { \
    content: ""; \
    display: block; \
    float: right; \
    background: url("'+exp.vars.greenTick+'") no-repeat 0 0 transparent; \
    height: 16px; \
    width: 16px; \
    position: relative; \
} \
.valid-green-ticks .m-module-step2:after { \
    right: 5px; \
} \
.recess-exact-field-wrapper .more-info.pull-right, \
.recess-exact-field-wrapper .label-title { \
    display: none; \
} \
.radio-select-left { \
    width: 50%; \
    height: 20px; \
    float: left; \
    position: relative; \
    top: -10px; \
} \
.radio-select-right { \
    width: 50%; \
    height: 20px; \
    float: left; \
    position: relative; \
    left: 5px; \
    top: -10px; \
} \
.radio-select-left input,.radio-select-right input { \
    float: left; \
} \
.radio-select-left label,.radio-select-right label { \
    float: left; \
    font-size: 0.7em; \
    color: #737373; \
    padding: 4px 0 0 3px; \
    font-weight: normal !important; \
} \
.radio-select-left label strong,.radio-select-right label strong { \
    font-size: 1.3em; \
    color: #737373; \
    font-weight: normal; \
} \
@media screen and (max-width: 1000px) { \
    .radio-select-left label span,.radio-select-right label span { \
        display: none; \
    } \
} ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

exp.func.modifyRecessExact = function() {
    var $wrapper = exp.vars.step2.find('.drop_down-0');
    var $fields = $wrapper.find('.input-box');
    var fieldName = $fields.find('select').attr('name');
    var recessVal = $fields.find('option[data-name="Recess"]').attr('value');
    var exactVal = $fields.find('option[data-name="Exact"]').attr('value');
    
    $wrapper.addClass('recess-exact-field-wrapper');
    var newMarkup = ' \
        <div class="radio-select-left"> \
            <input type="radio" name="'+fieldName+'" value="'+recessVal+'" price="0" data-name="Recess" id="'+recessVal+'" /> \
            <label for="'+recessVal+'"><strong>Recess</strong> (inside <span>window</span> frame)</label> \
        </div> \
        <div class="radio-select-right"> \
            <input type="radio" name="'+fieldName+'" value="'+exactVal+'" price="0" data-name="Exact" id="'+exactVal+'" /> \
            <label for="'+exactVal+'"><strong>Exact</strong> (outside <span>window</span> frame)</label> \
        </div> \
        <p class="help-block">'+exp.vars.copy.recessExactNote+'</p> \
    ';
    $wrapper.prependTo( exp.vars.step1 );
    $fields.html( newMarkup );
    $('.m-module-modal-trigger').replaceWith( $('[data-target="#modal-help"]') );
    $('[data-target="#modal-help"]').removeClass('more-info pull-right').html('here');
};

exp.func.getMoreOptions = function() {
    var widthMin = $('.product-option.width').text().toString().match(/(Min )([0-9]*)(cm)/i)[2];
    var widthMax = $('.product-option.width').text().toString().match(/(Max )([0-9]*)(cm)/i)[2];
    var heightMin = $('.product-option.drop').text().toString().match(/(Min )([0-9]*)(cm)/i)[2];
    var heightMax = $('.product-option.drop').text().toString().match(/(Max )([0-9]*)(cm)/i)[2];
    var widthVal = $('.field-label-width').val();
    var heightVal = $('.field-label-drop').val();
    var widthError = true;
    var heightError = true;
    var typeError = true;
    $('.recess-exact-field-wrapper input').each(function(){
        if( $(this).prop('checked') === true ) {
            typeError = false;
        }
    });
    if ( ( parseFloat(widthVal) >= parseFloat(widthMin) ) && ( parseFloat(widthVal) <= parseFloat(widthMax) ) ) {
        widthError = false;
    }
    if ( ( parseFloat(heightVal) >= parseFloat(heightMin) ) && ( parseFloat(heightVal) <= parseFloat(heightMax) ) ) {
        heightError = false;
    }
    if( typeError ) {
        exp.func.ticks( 'remove' );
        $('#advice-required-recess-exact-before').show(200);
    } else {
        $('#advice-required-recess-exact-before').hide(200);
        if( widthError || heightError ) {
            exp.func.ticks( 'remove' );
        }
        if( !widthError && !heightError ) {
            exp.func.ticks( 'add' );
        }
        showMoreOptions();
    }
};

exp.func.addToCart = function( gaPage ) {
    var valid = true;
    $('#step2 select').each(function(){
        if( $(this).val() === '' ) {
            valid = false;
        }
    })
    if( valid ) {
        exp.func.ticks( 'step3' );
    }
    productAddToCartForm.submit(this);
    ga('send', 'event', 'Navigation_buttons', 'add_to_basket', gaPage);
};

exp.func.ticks = function( operation ) {
    if ( operation === 'add' ) {
        $('.product-options-wrapper').addClass('valid-green-ticks');
    } else if ( operation === 'remove' ) {
        $('.product-options-wrapper').removeClass('valid-green-ticks');
    } else if ( operation === 'step3' ) {
        $('.product-options-wrapper').addClass('valid-green-ticks--step3');
    }
};

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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // intro text

    $('.help-block.measurement-help-two').html( this.vars.copy.introduction );

    // move and modify reccess/exact fields

    this.func.modifyRecessExact();

    // add headings and copy

    $('.recess-exact-field-wrapper').prepend( '<p class="m-module-heading help-block m-module-step1">'+this.vars.copy.step1heading+'</p>' );
    $('.drop_down-0:eq(1) .label-title:eq(0)').html( 'Enter slat width.' );

    $('.product-option.width').before(
        '<p class="help-block">'+this.vars.copy.enterWidthHeight+'</p>'
    );

    $('.recess-exact-field-wrapper').after(
        '<p class="m-module-heading help-block m-module-step2">'+this.vars.copy.step2heading+'</p>'
    );

    this.vars.step2.prepend( '<p class="m-module-heading help-block m-module-step3">'+this.vars.copy.step3heading+'</p>' );

    $('.radio-select-right').after( ' \
        <div class="validation-advice" id="advice-required-recess-exact-before">You must select Recess or exact.</div> \
    ' );

    // behaviour

    $('.get-price-row .btn-get-price').attr('onclick', '');
    $('.get-price-row .btn-get-price').bind('click', this.func.getMoreOptions );

    (function(){
        var cartButton = $('.add-to-cart .btn-cart');
        var gaPage = cartButton.attr('onclick').match(/(basket', ')(.*)('\))/i)[2];
        cartButton.attr('onclick', '');
        cartButton.bind('click', function() {
            exp.func.addToCart( gaPage );
        } );
    })();

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
// if jQuery is not already used on the site use optimizely.$ instead
})(jQuery);