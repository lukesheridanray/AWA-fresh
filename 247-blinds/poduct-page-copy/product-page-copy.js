//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*

www.247blinds.co.uk/checkout/onepage/success
rev per visitor

GA 1

100%
equal split

http://www.247blinds.co.uk/origin-basic-white-venetian-blind
http://www.247blinds.co.uk/ecowood-cream-venetian-blind
http://www.247blinds.co.uk/havana-stripe-white-vertical-blind

Copy update for these three pages. See mockups

*/

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'variation' : '2',
    'pathname': window.location.pathname.toString(),
    'page': '0',
    'qualityWrap': $('.quality-wrap'),
    'accordionPanels': $('#accordion .panel-info'),
    'accordionPanelsWrap': $('#accordion'),
    'colourCheck': {
        'title': 'How to check blind colours on screen',
        'desc': 'Computer, tablet and phone screens all have different settings which may change the way a colour looks on screen. To find out how yours may be affected, simply hold up a sheet of plain white paper next to your screen (ensure you have a piece of card behind it to prevent light seeping through) and compare it with the background of this web page. Both should be the same colour. If you see a difference – for example, if your screen is a little more blue, or yellow than the paper - this will also apply to the colour of the blind material you can see on screen. If you\'re still not sure, please get in touch for a free sample.'
    },
    'copy': {
        '1': { // origin-basic-white-venetian-blind
            '1': { // Var 1
                'description': 'A Venetian blind is a timeless look that suits most rooms and gives you excellent privacy as well as total control over outside light. This Origin Venetian Blind in Basic White, a classic pure white colour, is made to order to fit your window perfectly and is normally ready in around a week.<br /><br /> \
                                All our Origin Venetian blinds are made with top quality fittings to ensure your blind opens and closes smoothly, and comes ready to fit with all fixings included. Not sure about colour or style? Order a free sample before you buy.',
                'feature1': {
                    'title': 'Beautifully straight slats',
                    'desc': 'Flimsy, thin slats can sag in the middle, so we make ours thicker than most. It gives them extra strength so they always line up perfectly straight.'
                },
                'feature2': {
                    'title': 'Smooth operation',
                    'desc': 'We use precision-engineered, metal fittings and high quality, tangle-resistant cord to make sure your blinds open and close smoothly every day while holding fast when raised.'
                },
                'feature3': {
                    'title': 'Matching Rails',
                    'desc': 'Many blind companies supply venetian blinds with a white headrail and bottom rail to save costs. Ours always have matching rails for a perfectly co-ordinated look.'
                }
            }
        },
        '2': { // ecowood-cream-venetian-blind
            '1': { // Var 1
                'description': 'Bring a touch of New England chic into your home, with a solid Ecowood Venetian blind in Cream, a soft neutral colourway. This sophisticated blind is made to order to fit your window perfectly and is normally ready in around a week.<br /><br /> \
                                All our Ecowood Venetian blinds come ready to fit with a robust, coordinating headrail, woven control cords and all the fixings included. Not sure about colour or style? Order for a free sample before you buy.',
                'feature1': {
                    'title': 'Moisture-resistant Ecowood',
                    'desc': 'Ecowood looks and feels just like real wood, but is resistant to damp, so it doesn’t crack, warp or rot. It lasts for years and is perfect for moist conditions such as a bathroom or kitchen.'
                },
                'feature2': {
                    'title': 'High quality headrails',
                    'desc': 'Our headrails are solidly built to take the extra weight of ecowood slats, and your blind comes with a matching pelmet and bottom rail for a totally co-ordinated look.'
                },
                'feature3': {
                    'title': 'Smooth operation',
                    'desc': 'Your blind is fitted with a precision-engineered mechanism to ensure smooth closing and opening for years to come. Slats are tilted with woven control cords, rather than a rod, which not only looks cheap but is harder to operate and easy to break.'
                }
            }
        },
        '3': { // havana-stripe-white-vertical-blind
            '1': { // Var 1
                'description': 'Add height and elegance to your room with this vertical blind in Havana Stripe, which features stylish textured louvers woven with diagonal stripes. White is a classic neutral colour that suits all decors, louvers turn easily with a control wand and can be left open for maximum daylight, or closed to give you total privacy whilst still allowing light to gently suffuse the room.<br /><br /> \
                                This contemporary style blind is made to order to fit your window perfectly and is normally ready in around a week. All our Vertical Blinds come ready to fit with a slimline, Easyglide headrail, child safe wand controls and all the fixings included. If you’re not sure about colour, texture or pattern, why not order for a free sample before you buy?',
                'feature1': {
                    'title': 'Stitched and welded hems',
                    'desc': 'Cheaper blinds are often hemmed using glue which can melt and come apart in the sun. To ensure your blind looks good for longer, we always machine-stitch or weld the hems on our vertical blinds.'
                },
                'feature2': {
                    'title': 'Slim, elegant headrails',
                    'desc': 'Large, bulky headrails spoil the look of a vertical blind. We only use high quality, sllimline headrails so you see more of the louvers, which creates extra height and gives your room an elegant, designer style.'
                },
                'feature3': {
                    'title': 'Smooth-Glide Operation',
                    'desc': 'Drawing and closing your vertical blind and turning the louvers is effortlessly easy, thanks to our high quality Easy Glide system, precision-engineered components and child safe wand controls.'
                }
            }
        }
    }
};

if( exp.vars.pathname.indexOf('origin-basic-white-venetian-blind') !== -1 ) {
    exp.vars.page = '1';
} else if( exp.vars.pathname.indexOf('ecowood-cream-venetian-blind') !== -1 ) {
    exp.vars.page = '2';
} else if( exp.vars.pathname.indexOf('havana-stripe-white-vertical-blind') !== -1 ) {
    exp.vars.page = '3';
}

// Styles
// String containing the CSS for the experiment
exp.css = '#accordion { margin-bottom: 0; } \
           .product-view { padding-bottom: 20px; } \
           .block-viewed { padding-top: 0; }';

if( exp.vars.variation === '1' ) {
    exp.css +=  '.main-desc-wrap { padding-bottom: 15px; } \
                 .colour-check-wrap { clear: both; padding-top: 20px; padding-bottom: 30px; ';
} else {
    exp.css +=  '.quality-wrap { position: relative; overflow: visible; margin-top: 0; } \
                 .main-desc-wrap { position: absolute; top: 0; left: 0; width: 976px; margin-top: 0; } \
                 .colour-check-wrap { clear: both; width: 976px; padding-top: 10px; padding-bottom: 30px; } \
                 .product-view:first-child { padding-bottom: 0; } \
                 #accordionOpt { margin-bottom: 20px; } \
@media screen and (max-width: 1024px) { \
  .main-desc-wrap, .colour-check-wrap { width: 757px !important; } \
  .main-desc-wrap { padding-bottom: 30px !important; } \
  #accordion, #accordionOpt, .quality-wrap .block-title { border-top: 15px solid #fff; } \
/*  #product_addtocart_form { height: 570px; } */  \
} \
@media screen and (max-width: 870px) { \
  .main-desc-wrap, .colour-check-wrap { width: auto !important; position: relative !important; padding-bottom: 10px !important; padding-left: 5px !important; padding-right: 5px !important; } \
  .quality-wrap, #accordion, #accordionOpt { padding-top: 0 !important; padding-bottom: 10px !important; } \
  #product_addtocart_form { height: auto; }  \
}';
}

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

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    if( exp.vars.page === 0 ) {
        return false;
    }

    console.log('Product Page Copy - variation '+ exp.vars.variation +' - 0.4');
        
    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // Quality copy

    exp.vars.qualityWrap.find('.block-title').html( '<span>YOU CAN\'T BUY BETTER QUALITY</span>' );

    exp.vars.qualityWrap.find('h3[align="justify"]:eq(0) span').html(
        exp.vars.copy[ exp.vars.page ][ 1 ].feature1.title
    );
    exp.vars.qualityWrap.find('p[align="justify"]:eq(0) span').html(
        exp.vars.copy[ exp.vars.page ][ 1 ].feature1.desc
    );

    exp.vars.qualityWrap.find('h3[align="justify"]:eq(1) span').html(
        exp.vars.copy[ exp.vars.page ][ 1 ].feature2.title
    );
    exp.vars.qualityWrap.find('p[align="justify"]:eq(1) span').html(
        exp.vars.copy[ exp.vars.page ][ 1 ].feature2.desc
    );

    exp.vars.qualityWrap.find('h3[align="justify"]:eq(2) span').html(
        exp.vars.copy[ exp.vars.page ][ 1 ].feature3.title
    );
    exp.vars.qualityWrap.find('p[align="justify"]:eq(2) span').html(
        exp.vars.copy[ exp.vars.page ][ 1 ].feature3.desc
    );

    // Add New description and Colour check text

    (function(){

        var mainDesc = '<div class="main-desc-wrap"> \
                            <h3>Product description</h3> \
                            <p>'+exp.vars.copy[ exp.vars.page ][ 1 ].description+'</p> \
                        </div>';
        var colourCheck = '<div class="colour-check-wrap"> \
                               <h3>'+exp.vars.colourCheck.title+'</h3> \
                               <p>'+exp.vars.colourCheck.desc+'</p> \
                           </div>';
        var topPadding;

        // Product Desc
        if( exp.vars.variation === '1' ) {

            exp.vars.qualityWrap.prepend( mainDesc );

        } else {

            $('.product-view').after('<div class="product-view clearfix product-view-bottom"> \
                <div class="product-essential col-sm-10 col-sm-push-14 col-md-9 col-md-push-15"></div> \
                <div class="product-aside col-sm-14 col-sm-pull-10 col-md-15 col-md-pull-9"></div> \
            </div>');

            $('.product-view-bottom .product-essential').append( exp.vars.accordionPanelsWrap );
            $('.product-view-bottom .product-aside').append( exp.vars.qualityWrap );
            exp.vars.accordionPanelsWrap.attr('id','accordionOpt');

            exp.vars.qualityWrap.prepend( mainDesc );

            topPadding = ($('.main-desc-wrap').height() + 20) + 'px';
            exp.vars.qualityWrap.add(exp.vars.accordionPanelsWrap).css({ 'padding-top': topPadding });

        }

        // Colour Check
        if( exp.vars.variation === '1' ) {

            exp.vars.qualityWrap.after( colourCheck );

        } else {

            $('.product-view-bottom').append( colourCheck );

        }

    })();


    // Reorder accordion

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Offer Information' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Child Safety' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Specification' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( '3 Year Guarantee' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Inches to CM Converter' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Delivery' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'What\'s included in the price' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Measuring Information' ) !== -1);
    }).prependTo( exp.vars.accordionPanelsWrap )
    .find('a.panel-toggle').text( 'How to measure' );

    exp.vars.accordionPanels.filter(function() {
        return ($(this).find('h4').text().indexOf( 'Description' ) !== -1);
    }).remove();


};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);