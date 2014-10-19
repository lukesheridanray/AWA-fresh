//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*
I have given the use full access to the bucket gs://tbpawa

See how you get on, if you are uploading many files/folders then best to use the gsutil utility  with perhaps –m

Something like

gsutil -h "Cache-Control:public,max-age=259200" cp -m -a public-read -R /images/* gs://tbpawa/


Optimizely

User name: bookpeople.awadigital@gmail.com

Password: testhero1

They're not used to sharing access, so for any experiments that you build, please start the name with AWA_TEST. 

"Product pages for the following products:
Ladybird Read It Yourself Collection - 50 Books
Roald Dahl Collection - 15 Books
Julia Donaldson Story Collection - 10 Books
Songbirds Phonics Collection - 36 Books
Read with Biff, Chip & Kipper (Levels 1-3) Collection - 25 Books
The Early Reader Collection - 30 Books
Ladybird Tales Collection - 24 Books
Wimpy Kid Collection - 7 Books
New Roald Dahl Collection - 15 Books
Best ever fiction collection 10 books
The Scarecrows' Wedding
Guy Martin: My Autobiography
Disney's Frozen: The essential Guide
The 1000 Dot-to-Dot Book: Animals 
The Battlefields of the First World War
Recipes from a Normal Mum
Rubber Band Loom Bracelets 
The Beekeeper's Daughter

There are two types:
Collections e.g. http://www.thebookpeople.co.uk/webapp/wcs/stores/servlet/qs_product_tbp?productId=484168&storeId=10001&catalogId=10051&langId=100

Single books e.g.:
http://www.thebookpeople.co.uk/webapp/wcs/stores/servlet/qs_product_tbp?productId=502498&storeId=10001&catalogId=10051&langId=100
"

"Thumbnails will be added below the main product image, for inside pages. Clicking on the thumbnails will bring up a ""look inside"" overlay for that tumbnail (very similar to Amazon). The Look inside overlay will allow users to view each thumbnail and also feature an add to basket.

On collections the add to basket will also include a Price-per-book figure. The number of books is always at the end of the product title and the price is always above the add to basket. We will need to calculate the price per book from these two figures (always rounding up to the nearest penny)

Furthermore for collections the list of books contained with the main product copy in the centre of the pages, will include links that open up the same look inside overlay.

There will only be 1 or two pages per book, however as collections can contain up to 50 books, this can can still be a lot of pages. Ideally we don;t want to have to manually add each page, so it would be great if there was a way of simplifying this e.g. Could we save the pages within a specific folder structure and from that structure generate the look inside feature for the relevant pages? That's just an example - I'm very open to your suggestions of how we could make this workable, especially as we may repeat the test with even more books and pages."

"There are two types:
Collections e.g. http://www.thebookpeople.co.uk/webapp/wcs/stores/servlet/qs_product_tbp?productId=484168&storeId=10001&catalogId=10051&langId=100

Single books e.g.:
http://www.thebookpeople.co.uk/webapp/wcs/stores/servlet/qs_product_tbp?productId=502498&storeId=10001&catalogId=10051&langId=100

I'll provide all URL targeting details once we've worked out how the test will work."

*/

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Look inside experiment - 0.1');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
//    'productId': dataLayer[0]['product_id'],
    'colorOrange': '#F8932B',
    'imageThumbsTitle': '//cdn.optimizely.com/img/579743489/212f033604254484a602bcb2583bb02d.png',
    'imageMiniArrow': '//cdn.optimizely.com/img/579743489/08007039f0744e0a8cf7f358badafeee.png',
    'productId': $('input[name="productId"]:eq(0)').val(),
    'imagesExtension': '.jpg',
    'imagesBase': 'http://www.awa-digital.com/optimizely/the-book-people/',
    'imagesTypeFolders': {
        'thumbs': '/product-page-thumbnails/',
        'viewerThumbs': '/viewer-thumbnails/',
        'viewerMainSmall': '/main-image-568-wide/',
        'viewerMainLarge': '/main-image-827-wide/',
        'zoomed': '/fullsize-for-zoom/'
    },
    'productName': {
        '439365': 'julia-donaldson'
    },
    'images': {
        'julia-donaldson': {
            '0': [ 'TheGruffalosChild', 'The Gruffalo\'s Child', ''  ],
            '1': [ 'WakeUpDoLydiaLou', 'Wake Up Do, Lydia Lou!', '' ],
            '2': [ 'CharlieCooksFavouriteBook', 'Charlie Cook\'s Favourite Book', '' ],
            '3': [ 'FreddieAndtheFairy', 'Freddie and the Fairy', '' ],
            '4': [ 'MonkeyPuzzle', 'Monkey Puzzle', '' ],
            '5': [ 'WiggleAndRoar', 'Wriggle and Roar!', '', true ],
            '6': [ 'TheSnailAndTheWhale', 'The Snail and the Whale', '' ],
            '7': [ 'RoomOnTheBroom', 'Room on the Broom', '' ],
            '8': [ 'GoatGoesToPlaygroup', 'Goat Goes To Playgroup', '', true ],
            '9': [ 'ToddleWaddle', 'Toddle Waddle', '' ]
        }
    }
};

// Styles
// String containing the CSS for the experiment
exp.css = ' \
/* Thumbs sidebar */ \
.look-inside-thumbs { margin-bottom: 20px; } \
.look-inside-thumbs--title a { color: '+exp.vars.colorOrange+'; background: url('+exp.vars.imageThumbsTitle+') left no-repeat transparent; \
  line-height: 19px; padding: 0 0 0 25px; font-family: "Open Sans","sans-serif"; font-size: 1.6em; } \
.look-inside-thumbs img { width: 60px; height: 60px; margin-left: 10px; margin-bottom: 10px; } \
.look-inside-thumbs .look-inside-thumbs--first { margin-left: 0; } \
/* Central panel list */ \
.see-inside-hover { display: none; color: '+exp.vars.colorOrange+'; background: url('+exp.vars.imageMiniArrow+') left no-repeat transparent; \
  padding: 0 0 0 15px; font-family: "Open Sans","sans-serif"; font-size: 1.1em; } \
#setTitles .setTitle a:hover .see-inside-hover { display: inline; text-decoration: none !important; } \
/* */ ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Function to output the 8 product thumbnails
exp.func.productThumbs = function(_vars) {
    _vars = _vars || exp.vars;
    var thumbs = '<div class="look-inside-thumbs"> <p class="look-inside-thumbs--title"><a href="#" data-behaviour="lookInsideModal">See inside</a></p>';
    var thisProduct = _vars.productName[ _vars.productId ];
    var i = 1;
    $.each( _vars.images[ thisProduct ], function( key, value ) {
        if( !value[3] ) {
            thumbs += '<a href="#" data-behaviour="lookInsideModal" data-thumb-id="' + key + '">'
                    + '<img '+((i===1 || i===5 || i===9 ) ? 'class="look-inside-thumbs--first" ' : '')+'src="' + _vars.imagesBase + thisProduct + _vars.imagesTypeFolders['thumbs'] + value[0] + _vars.imagesExtension + '" alt="'+value[1]+'" /></a>';
        }
        i++;
    });
    thumbs += '</div>';
    return thumbs;
};

// Function to add links to the central item list
exp.func.centralList = function(_vars) {
    _vars = _vars || exp.vars;
    var list = '';
    var thisProduct = _vars.productName[ _vars.productId ];
    $.each( _vars.images[ thisProduct ], function( key, value ) {
        if( !value[4] ) {
            list += '<li class="setTitle"><a href="#" data-behaviour="lookInsideModal" data-thumb-id="' + key + '">'
                    + value[1] + ((value[2] !== '') ? value[2] : '' ) + ' <span class="see-inside-hover">See inside</span></a></li>';
        }
        i++;
    });
    return list;
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

    // Add thumbs underneath product image

    $('.productImage:eq(0)').after( this.func.productThumbs(exp.vars) );

    if( $('#setTitles ul li').length ) {
        $('#setTitles ul').html( this.func.centralList(exp.vars) );
    }

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);