//
// CGIT Optimizely Boilerplate - version 0.1.3
//


// JSHint flags
// jshint multistr: true
// jshint jquery: true

/* Third party libs */

/*!
    Zoom 1.7.13
    license: MIT
    http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,m,l,r,s,f=o(t).css("position"),h=o(n);return t.style.position=/(absolute|fixed)/.test(f)?f:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=o(t).outerWidth(),u=o(t).outerHeight(),n===t?(m=c,a=u):(m=h.outerWidth(),a=h.outerHeight()),l=(e.width-c)/m,r=(e.height-u)/a,s=h.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,m),0),e.style.left=t*-l+"px",e.style.top=n*-r+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e,i=o.extend({},t,n||{}),u=i.target||this,c=this,a=o(c),m=document.createElement("img"),l=o(m),r="mousemove.zoom",s=!1,f=!1;(i.url||(e=a.find("img"),e[0]&&(i.url=e.data("src")||e.attr("src")),i.url))&&(function(){var o=u.style.position,t=u.style.overflow;a.one("zoom.destroy",function(){a.off(".zoom"),u.style.position=o,u.style.overflow=t,l.remove()})}(),m.onload=function(){function t(t){e.init(),e.move(t),l.stop().fadeTo(o.support.opacity?i.duration:0,1,o.isFunction(i.onZoomIn)?i.onZoomIn.call(m):!1)}function n(){l.stop().fadeTo(i.duration,0,o.isFunction(i.onZoomOut)?i.onZoomOut.call(m):!1)}var e=o.zoom(u,c,m,i.magnify);"grab"===i.on?a.on("mousedown.zoom",function(i){1===i.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(r,e.move)}),t(i),o(document).on(r,e.move),i.preventDefault())}):"click"===i.on?a.on("click.zoom",function(i){return s?void 0:(s=!0,t(i),o(document).on(r,e.move),o(document).one("click.zoom",function(){n(),s=!1,o(document).off(r,e.move)}),!1)}):"toggle"===i.on?a.on("click.zoom",function(o){s?n():t(o),s=!s}):"mouseover"===i.on&&(e.init(),a.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(r,e.move)),i.touch&&a.on("touchstart.zoom",function(o){o.preventDefault(),f?(f=!1,n()):(f=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),o.isFunction(i.callback)&&i.callback.call(m)},m.src=i.url)})},o.fn.zoom.defaults=t})(window.jQuery);


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
console.log('Look inside experiment - 0.10');

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
//    'productId': dataLayer[0]['product_id'],
    'viewportWidth': $(window).width(),
    'productTitle': $('#product-description-title').html(),
    'buyBlock': $('.priceWrapper').clone(),
    'wishlistLink': $('#add-to-wishlist-link').clone(),
    'colorOrange': '#F8932B',
    'colorBlue': '#45BE9D',
    'imageThumbsTitle': '//cdn.optimizely.com/img/579743489/212f033604254484a602bcb2583bb02d.png',
    'imageMiniArrow': '//cdn.optimizely.com/img/579743489/08007039f0744e0a8cf7f358badafeee.png',
    'imageModalTitle': '//cdn.optimizely.com/img/579743489/6f69bc067a1b40989029c0b9dfbf2799.png',
    'imageZoomNavUp': '//cdn.optimizely.com/img/579743489/96edba11ec5c4bce80f1601243764e06.png',
    'imageZoomNavDown': '//cdn.optimizely.com/img/579743489/f4421c49c82b464fb89185bcbfb9d7dd.png',
    'imageZoomIcon': '//cdn.optimizely.com/img/579743489/56069e92745b4d44854a5454137108b7.png',
    'imageSpinner': '//cdn.optimizely.com/img/579743489/d1d5466f2fd04bfbb7a2f6ff53b7cfd2.gif',
    'zoomThumbs': {},
    'positionArray': [],
    'modalTemplate': ' \
        <div class="modal fade" id="lookInsideModal" tabindex="-1" role="dialog" aria-labelledby="lookInsideModal" aria-hidden="true"> \
        <div class="modal-dialog"> <div class="modal-content"> \
        <div class="modal-header"> <button type="button" class="close" data-behaviour="hideModal">&times;</button> <p class="see-inside-header">See inside</p> </div> \
        <div class="modal-body"> </div> </div> </div> </div>',
    'productId': $('input[name="productId"]:eq(0)').val(),
    'imagesExtension': '.jpg',
    'imagesBase': '//storage.googleapis.com/tbpawa/',
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

(function(){
    var thisProduct = exp.vars.productName[ exp.vars.productId ];
    var newScrollPos;
    var currentPosition = 0;
    $.each( exp.vars.images[ thisProduct ], function( key, value ) {
        exp.vars.positionArray.push( currentPosition );
        currentPosition = currentPosition + 220;
    });
})();

// Styles
// String containing the CSS for the experiment
exp.css = ' \
/* Thumbs sidebar */ \
.look-inside-thumbs { margin-bottom: 20px; } \
.look-inside-thumbs--title a { color: '+exp.vars.colorOrange+'; background: url('+exp.vars.imageThumbsTitle+') left no-repeat transparent; \
  line-height: 19px; padding: 0 0 0 25px; font-family: "Open Sans","sans-serif"; font-size: 1.6em; } \
.look-inside-thumbs img { width: 60px; height: 60px; margin-left: 10px; margin-bottom: 10px; } \
.look-inside-thumbs a:hover { opacity: 0.9; } \
.look-inside-thumbs .look-inside-thumbs--first { margin-left: 0; } \
/* Central panel list */ \
.see-inside-hover { display: none; color: '+exp.vars.colorOrange+'; background: url('+exp.vars.imageMiniArrow+') left no-repeat transparent; \
  padding: 0 0 0 15px; font-family: "Open Sans","sans-serif"; font-size: 1.1em; line-height: 13px; } \
#setTitles .setTitle a:hover { color: #08C !important; text-decoration: none !important; } \
#setTitles .setTitle a:hover .see-inside-titlelink { text-decoration: underline !important; } \
#setTitles .setTitle a:hover .see-inside-hover { display: inline; text-decoration: none !important; } \
#setTitles ul { display: none; } \
#setTitles ul.setTitlesLinks { display: block; } \
/* Look inside modal */ \
#lookInsideModal { height: 700px; width: 1207px; margin-left: -603px; display: none; } \
#lookInsideModal .modal-content { position: relative; } \
#lookInsideModal .modal-body { max-height: 900px; overflow: hidden; padding-bottom: 35px; } \
#lookInsideModal .modal-header { padding: 0; border-bottom: 0; } \
#lookInsideModal .modal-header button { z-index: 99; color: '+exp.vars.colorBlue+'; opacity: 1 !important; position: absolute; top: 5px; right: 5px; font-size: 2em; } \
#lookInsideModal .modal-header button:hover { opacity: 0.4 !important; } \
.see-inside-header { color: '+exp.vars.colorOrange+'; position: absolute; top: 10px; left: 10px; background: url('+exp.vars.imageModalTitle+') left no-repeat transparent; \
  padding: 0 0 0 27px; line-height: 24px; font-size: 2.2em; font-family: "Open Sans","sans-serif"; } \
.see-inside--header, .see-inside--zoom { width: 831px; float: right; clear: right; position: relative; } \
.see-inside--header { height: 94px; overflow: hidden; position: relative; } \
.see-inside--header h3 { margin-top: 0; width: 600px; font-size: 1.8em; float: left; clear: left; } \
.see-inside--wishlist { position: absolute; bottom: 0; left: 0; } \
.see-inside--header .priceWrapper { float: right; width: 210px; } \
.see-inside--header .priceWrapper #add-to-wishlist-link { display: none; } \
.see-inside--header .priceWrapper fieldset { position: relative; } \
.see-inside--header .priceWrapper fieldset div { display: none; } \
.see-inside--header .priceWrapper fieldset select { float: left; } \
.see-inside--header .priceWrapper .price-string { margin: 0px -2px 0px 0px; padding: 0px; font-size: 21px; font-weight: bold; color: #000; } \
.see-inside--header .priceWrapper .saving, .see-inside--header .priceWrapper .rrp { padding: 0px 5px 0px 0px; margin: 0px; } \
.see-inside--header .add-to-basket-button { height: auto !important; margin: 0 !important; position: absolute !important; top: 0 !important; right: 0 !important; font-size: 13px !important; font-weight: normal !important; width: 130px !important; float: right !important; } \
.see-inside--header .addToBasketForm { margin: 0; } \
.see-inside--zoom { height: 542px; } \
.see-inside--scroller { width: 300px; float: left; margin: 35px 0px 0px; height: 644px; overflow: auto; } \
.see-inside--scroller p { margin: 0; height: 37px; } \
.see-inside--scroller p a { font-size: 1.1em; color: #333; } \
.see-inside--scroller a { text-decoration: none; } \
.see-inside--scroller p a span { font-size: 0.8em; display: block; position: relative; top: -4px; font-style: italic; } \
.see-inside--scroller img { border: 2px solid #fff; width: 260px; height: auto; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; } \
.see-inside--zoom-container { width: 831px; height: 550px; background: #fff; } \
.see-inside--zoom-container--inner { position: relative; width: 827px; height: auto; border: 2px solid '+exp.vars.colorOrange+'; cursor: zoom-in; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; } \
.see-inside--zoom-container--inner:after { content:""; display: block; width: 40px; height: 40px; position: absolute; top: 0px; right: 0; background: url('+exp.vars.imageZoomIcon+') center no-repeat #F0F8FB; } \
.see-inside--zoom-container--inner:hover { height: 535px; } \
.see-inside--zoom-container--inner:hover:before { content:""; display: block; width: 64px; height: 64px; position: absolute; top: 233px; right: 385px; background: url('+exp.vars.imageSpinner+') center no-repeat #F0F8FB; } \
.see-inside--zoom-container img { width: 827px; height: auto; cursor: zoom-in; } \
.see-inside--zoom-container { position: absolute; top: 15px; left: 0; z-index: -1; } \
.see-inside--zoom-nav-up, .see-inside--zoom-nav-bottom { position: absolute; left: 400px; width: 17px; height: 16px; z-index: 99; } \
.see-inside--zoom-nav-up:hover, .see-inside--zoom-nav-bottom:hover { text-decoration: none; opacity: 0.8; } \
.see-inside--zoom-nav-up { top: -20px; background: url('+exp.vars.imageZoomNavUp+') 0 0 no-repeat transparent; } \
.see-inside--zoom-nav-bottom { bottom: -35px; background: url('+exp.vars.imageZoomNavDown+') 0 0 no-repeat transparent; } \
/*.see-inside--zoom-icon { z-index: 100; width: 40px; height: 40px; position: absolute; top: 15px; right: 0; border-top: 2px solid '+exp.vars.colorOrange+'; border-right: 2px solid '+exp.vars.colorOrange+'; background: url('+exp.vars.imageZoomIcon+') center no-repeat #F0F8FB; } \
*/.zoom-item { padding: 0 0 20px 0; height: 200px; } \
.zoom-item.current a, .zoom-item:hover a { color: '+exp.vars.colorOrange+'; } \
.zoom-item.current img, .zoom-item:hover img { border-color: '+exp.vars.colorOrange+'; } \
/* Responsive */ \
@media screen and (max-width: 1240px), screen and (max-height: 820px) { \
    #lookInsideModal { height: 565px; width: 940px; margin-left: -470px; top: 5%; } \
    .see-inside--scroller { height: 430px; margin-top: 100px; } \
    .see-inside--header, .see-inside--zoom { width: 581px; } \
    .see-inside--header h3 { width: 350px; line-height: 30px; } \
    .see-inside--zoom { height: 424px; } \
    .see-inside--zoom-nav-up { top: -6px; } \
    .see-inside--zoom-nav-bottom { bottom: -25px; } \
    .see-inside--zoom-container { width: 581px; height: 390px; } \
    .see-inside--zoom-container img, .see-inside--zoom-container--inner { width: 577px; } \
    .see-inside--zoom-container--inner:hover { height: 410px; } \
    .see-inside--zoom-container--inner:hover:before { top: 173px; right: 260px; } \
    .see-inside--zoom-nav-up, .see-inside--zoom-nav-bottom { left: 282px; } \
} \
@media screen and (max-width: 1199px) { \
    .look-inside-thumbs img { width: 50px; height: 50px; margin-left: 6px; } \
} \
@media screen and (max-width: 980px), screen and (max-height: 580px) { \
    .see-inside--scroller { display: none; } \
    #lookInsideModal { top: 3%; height: 510px; width: 610px; margin-left: -305px; } \
    .see-inside--zoom { height: 398px; } \
    .see-inside--zoom-container { height: 382px; } \
    .see-inside--zoom-container--inner { max-height: 358px; } \
    .see-inside--zoom-container--inner:hover { height: 358px; } \
    .see-inside--zoom-nav-bottom { bottom: 0px; } \
    .see-inside--zoom-container--inner:hover:before { top: 147px; right: 260px; } \
    .see-inside-header { display: none; } \
} \
@media screen and (max-width: 650px), screen and (max-height: 525px) { \
    .look-inside-thumbs { display: none; } \
    #setTitles ul { display: block; } \
    #setTitles ul.setTitlesLinks { display: none; } \
} \
/* */ ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// Function to output the 8 product thumbnails
exp.func.productThumbs = function(_vars) {
    _vars = _vars || exp.vars;
    var thumbs = '<div class="look-inside-thumbs"> <p class="look-inside-thumbs--title"><a href="#" data-behaviour="lookInsideModal" data-thumb-id="0">See inside</a></p>';
    var thisProduct = _vars.productName[ _vars.productId ];
    var i = 1;
    $.each( _vars.images[ thisProduct ], function( key, value ) {
        if( !value[3] ) {
            thumbs += '<a href="#" data-behaviour="lookInsideModal" data-thumb-id="' + key + '">' +
                      '<img '+((i===1 || i===5 || i===9 ) ? 'class="look-inside-thumbs--first" ' : '')+'src="' + _vars.imagesBase + thisProduct + _vars.imagesTypeFolders['thumbs'] + value[0] + _vars.imagesExtension + '" alt="'+value[1]+'" /></a>';
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
    var i = 1;
    $.each( _vars.images[ thisProduct ], function( key, value ) {
        if( !value[4] ) {
            list += '<li class="setTitle"><a href="#" data-behaviour="lookInsideModal" data-thumb-id="' + key + '"><span class="see-inside-titlelink">' +
                    value[1] + ((value[2] !== '') ? value[2] : '' ) + '</span> <span class="see-inside-hover">See inside</span></a></li>';
        }
        i++;
    });
    return list;
};

// Function to select the Zoom from thumbnails
exp.vars.selectZoom = function( pageId ) {
    $('script + .see-inside--zoom-container').css({'z-index':'-1'});
    $('.see-inside--zoom-container[data-zoom-id="'+pageId+'"]').css({'z-index':'99'});
};

exp.vars.zoomNav = function( _vars, direction ) {
    _vars = _vars || exp.vars;
    var current = $('.zoom-item.current');
    var pageId;
    var nextItem;
    if(direction === 'up') {
        nextItem = current.prev('div');
        if( !nextItem.length ) {
            nextItem = $('.zoom-item:last-child');
        }
    } else {
        nextItem = current.next('div');
        if( !nextItem.length ) {
            nextItem = $('.zoom-item:first-child');
        }
    }
    pageId = nextItem.attr('data-thumb-id');
    nextItem.addClass('current');
    current.removeClass('current');
    exp.vars.selectZoom( pageId );
    exp.vars.scrollThumbs(pageId);
};

exp.vars.scrollThumbs = function(pageId) {
    $('.see-inside--scroller').scrollTop( exp.vars.positionArray[ pageId ] );
};

// Function to open the modal
exp.vars.lookInsideModal = function( pageId ) {
    var theModal = $('#lookInsideModal');
    theModal.modal();
    $('.see-inside--zoom-container--inner').trigger('mouseleave');
    var thumb = $('.zoom-item[data-thumb-id="'+pageId+'"]');
    $('.zoom-item').removeClass('current');
    thumb.addClass('current');
    exp.vars.selectZoom( pageId );
    theModal.off();
    theModal.on('shown',function(){
        exp.vars.scrollThumbs(pageId);
    });
};

// Function to generate the zoom thumbs
exp.vars.generateThumbs = function(_vars) {
    _vars = _vars || exp.vars;
    var thisProduct = _vars.productName[ _vars.productId ];
    var markup = '';
    $.each( _vars.images[ thisProduct ], function( key, value ) {
        markup += '<div class="zoom-item" data-thumb-id="' + key + '"> \
                       <p><a href="#" data-behaviour="thumbSelectZoom" data-thumb-id="' + key + '">'+value[1]+'<span>'+((value[2] !== '') ? value[2] : '')+'</span></a></p> \
                       <a href="#" data-behaviour="thumbSelectZoom" data-thumb-id="' + key + '"><img src="'+ _vars.imagesBase + thisProduct + _vars.imagesTypeFolders['viewerThumbs'] + value[0] + _vars.imagesExtension + '" alt="'+value[1]+'" /></a> \
                   </div>';
    });
    return markup;
};

// Function to generate the zoom areas
exp.vars.generateZooms = function(_vars) {
    _vars = _vars || exp.vars;
    var thisProduct = _vars.productName[ _vars.productId ];
    var markup = '';
    var viewerSize = (_vars.viewportWidth > 1240) ? 'viewerMainLarge' : 'viewerMainSmall';
    var i = 1;
    $.each( _vars.images[ thisProduct ], function( key, value ) {
        markup += '<div class="see-inside--zoom-container" data-zoom-id="' + key + '"> \
                  <div class="see-inside--zoom-container--inner zoom'+i+'"> \
        <img src="'+ _vars.imagesBase + thisProduct + _vars.imagesTypeFolders[ viewerSize ] + value[0] + _vars.imagesExtension + '" alt="'+value[1]+'" /> \
        </div></div> \
        <script type="text/javascript"> \
            $(".see-inside--zoom-container--inner.zoom'+i+'").zoom({touch: true, url: "'+_vars.imagesBase + thisProduct + _vars.imagesTypeFolders['zoomed'] + value[0] + _vars.imagesExtension+'", callback: function(){ $(this).trigger(\'mouseenter\').trigger(\'mousemove\') } }); \
        </script>';
        i++;
    });
    return markup;
};

exp.vars.generateModalBody = function(_vars) {
    _vars = _vars || exp.vars;
    var thumbs = exp.vars.generateThumbs(_vars);
    var zooms = exp.vars.generateZooms(_vars);
    var markup = ' \
<div class="see-inside--scroller">' +
    thumbs +
'</div> \
<div class="see-inside--header"> \
    <h3>'+_vars.productTitle+'</h3>' +
    _vars.buyBlock.wrap('<div />').parent('div').html().toString().replace('<br>','') +
    '<div class="see-inside--wishlist">'+_vars.wishlistLink.wrap('<div />').parent('div').html()+'</div> \
</div><!-- .see-inside--header --> \
<div class="see-inside--zoom"> \
    <a href="#" class="see-inside--zoom-nav-up" data-behaviour="zoomNav" data-zoom-dir="up">&nbsp;</a>' +
    zooms +
    '<a href="#" class="see-inside--zoom-nav-bottom" data-behaviour="zoomNav" data-zoom-dir="down">&nbsp;</a> \
</div><!-- .see-inside--zoom --> \
<!-- end see inside -->';
    return markup;
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

// This function keeps trying an action, until a condition has been satisfied
// the action should be a function, and the condition a function which returns true or false
exp.func.tryUntil = function(action, condition, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            action();
            if (condition()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
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

    // turn set list into linked set list
    if( $('#setTitles li').length ) {
        $('#setTitles ul').after( '<ul class="unformatted setTitlesLinks">'+this.func.centralList(exp.vars)+'</ul>' );
    }

    // add thumbs underneath product image
    $('.productImage:eq(0)').after( this.func.productThumbs(exp.vars) );

    // append modal template to body
    $('#page-browse-product').append( this.vars.modalTemplate );

    // customise modal template
    $('#lookInsideModal .modal-body').html( this.vars.generateModalBody(exp.vars) );
//    $('.see-inside--header .priceWrapper fieldset div').remove();

    // attach event listeners

    $('[data-behaviour="lookInsideModal"]').bind('click', function(e) {
        e.preventDefault();
        var pageId = $(this).attr('data-thumb-id');
        exp.vars.lookInsideModal( pageId );
    });

    $('[data-behaviour="thumbSelectZoom"]').bind('click', function(e) {
        e.preventDefault();
        var _this = $(this);
        var pageId = _this.attr('data-thumb-id');
        exp.vars.selectZoom( pageId );
        $('.zoom-item').removeClass('current');
        _this.parent('div').addClass('current');
    });

    $('[data-behaviour="zoomNav"]').bind('click', function(e) {
        e.preventDefault();
        var direction = $(this).attr('data-zoom-dir');
        exp.vars.zoomNav( exp.vars, direction );
    });

    $('[data-behaviour="hideModal"]').bind('click', function(e) {
        e.preventDefault();
        $('#lookInsideModal').modal('hide');
    });


};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);