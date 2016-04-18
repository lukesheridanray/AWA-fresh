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

User name: [Ask Jamie or Rob]

Password: [Ask Jamie or Rob]

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



/* Third party libs */

/*!
    Zoom 1.7.13
    license: MIT
    http://www.jacklmoore.com/zoom

    MODIFIED FOR AWA EXPERIMENT: Defering loading of images.
*/
(function ($) {
    var defaults = {
        url: false,
        callback: false,
        target: false,
        duration: 120,
        on: 'mouseover', // other options: grab, click, toggle
        touch: true, // enables a touch fallback
        onZoomIn: false,
        onZoomOut: false,
        magnify: 1
    };

    // Core Zoom Logic, independent of event listeners.
    $.zoom = function(target, source, img, magnify) {
        var targetHeight,
            targetWidth,
            sourceHeight,
            sourceWidth,
            xRatio,
            yRatio,
            offset,
            position = $(target).css('position'),
            $source = $(source);

        // The parent element needs positioning so that the zoomed element can be correctly positioned within.
        target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
        target.style.overflow = 'hidden';

        img.style.width = img.style.height = '';

        $(img)
            .addClass('zoomImg')
            .css({
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0,
                width: img.width * magnify,
                height: img.height * magnify,
                border: 'none',
                maxWidth: 'none',
                maxHeight: 'none'
            })
            .appendTo(target);

        return {
            init: function() {
                targetWidth = $(target).outerWidth();
                targetHeight = $(target).outerHeight();

                if (source === target) {
                    sourceWidth = targetWidth;
                    sourceHeight = targetHeight;
                } else {
                    sourceWidth = $source.outerWidth();
                    sourceHeight = $source.outerHeight();
                }

                xRatio = (img.width - targetWidth) / sourceWidth;
                yRatio = (img.height - targetHeight) / sourceHeight;

                offset = $source.offset();
            },
            move: function (e) {
                var left = (e.pageX - offset.left),
                    top = (e.pageY - offset.top);

                top = Math.max(Math.min(top, sourceHeight), 0);
                left = Math.max(Math.min(left, sourceWidth), 0);

                img.style.left = (left * -xRatio) + 'px';
                img.style.top = (top * -yRatio) + 'px';
            }
        };
    };

    $.fn.zoom = function (options) {
        return this.each(function () {
            var
            settings = $.extend({}, defaults, options || {}),
            //target will display the zoomed image
            target = settings.target || this,
            //source will provide zoom location info (thumbnail)
            source = this,
            $source = $(source),
            img = document.createElement('img'),
            $img = $(img),
            mousemove = 'mousemove.zoom',
            clicked = false,
            touched = false,
            $urlElement;

            // If a url wasn't specified, look for an image element.
            if (!settings.url) {
                $urlElement = $source.find('img');
                if ($urlElement[0]) {
                    settings.url = $urlElement.data('src') || $urlElement.attr('src');
                }
                if (!settings.url) {
                    return;
                }
            }

            (function(){
                var position = target.style.position;
                var overflow = target.style.overflow;

                $source.one('zoom.destroy', function(){
                    $source.off(".zoom");
                    target.style.position = position;
                    target.style.overflow = overflow;
                    $img.remove();
                });

            }());

            img.onload = function () {
                var zoom = $.zoom(target, source, img, settings.magnify);

                function start(e) {
                    zoom.init();
                    zoom.move(e);

                    // Skip the fade-in for IE8 and lower since it chokes on fading-in
                    // and changing position based on mousemovement at the same time.
                    $img.stop()
                    .fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
                }

                function stop() {
                    $img.stop()
                    .fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
                }

                // Quickly start-stop to reset zoom level
                start({ pageX: 0, pageY: 0 });
                stop();

                // Mouse events
                if (settings.on === 'grab') {
                    $source
                        .on('mousedown.zoom',
                            function (e) {
                                if (e.which === 1) {
                                    $(document).one('mouseup.zoom',
                                        function () {
                                            stop();

                                            $(document).off(mousemove, zoom.move);
                                        }
                                    );

                                    start(e);

                                    $(document).on(mousemove, zoom.move);

                                    e.preventDefault();
                                }
                            }
                        );
                } else if (settings.on === 'click') {
                    $source.on('click.zoom',
                        function (e) {
                            if (clicked) {
                                // bubble the event up to the document to trigger the unbind.
                                return;
                            } else {
                                clicked = true;
                                start(e);
                                $(document).on(mousemove, zoom.move);
                                $(document).one('click.zoom',
                                    function () {
                                        stop();
                                        clicked = false;
                                        $(document).off(mousemove, zoom.move);
                                    }
                                );
                                return false;
                            }
                        }
                    );
                } else if (settings.on === 'toggle') {
                    $source.on('click.zoom',
                        function (e) {
                            if (clicked) {
                                stop();
                            } else {
                                start(e);
                            }
                            clicked = !clicked;
                        }
                    );
                } else if (settings.on === 'mouseover') {
                    zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

                    $source
                        .on('mouseenter.zoom', start)
                        .on('mouseleave.zoom', stop)
                        .on(mousemove, zoom.move);
                }

                // Touch fallback
                if (settings.touch) {
                    $source
                        .on('touchstart.zoom', function (e) {
                            e.preventDefault();
                            if (touched) {
                                touched = false;
                                stop();
                            } else {
                                touched = true;
                                start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
                            }
                        })
                        .on('touchmove.zoom', function (e) {
                            e.preventDefault();
                            zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
                        });
                }

                if ($.isFunction(settings.callback)) {
                    settings.callback.call(img);
                }
            };

            // MODIFICATIONS FOR AWA EXPERIMENT: Defering loading of images
            img.setAttribute('data-src', settings.url);
            img.className = "AWA_unveil_img AWA_zoom_img";
            exp.vars.zoomImageNodes[settings.zoom_id] = img;

        });
    };

    $.fn.zoom.defaults = defaults;
}(window.jQuery));


/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this)}});function unveil(){var inview=images.filter(function(){var $e=$(this);if($e.is(":hidden"))return;var wt=$w.scrollTop(),
wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th});loaded=inview.trigger("unveil");images=images.not(loaded)}$w.on("scroll.unveil resize.unveil lookup.unveil",unveil);unveil();return this}})(window.jQuery||window.Zepto);


// Initialise the experiment object
var exp = {};

exp.log = function (str) {
    if (typeof window.console !== 'undefined') {
        console.log(str);
    }
};

// Log the experiment, useful when multiple experiments are running
exp.log('Look inside experiment - 0.13');

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
    'zoomImageNodes': {},  // Nodes added by the zoom library.  Will be used to lazy-load them when a page is selected.
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
        '439365': 'julia-donaldson',
        '484168': 'ladybird-collection',
        '218821': 'songbirds-phonics',
        '458336': 'early-reader',
        '396465': 'wimpy-kid',
        '393572': 'bestever-fiction',
        '503162': 'scarecrows',
        '494738': 'frozen',
        '529219': '1000-dot-to-dot-book-animals',
        '496918': 'loombands',
        '502488': 'beekeepers-daughter',
        '519189': 'tom-gates',
        '519185': 'marvel-readers-collection',
        '519665': '1411-facts-to-knock-you-sideways',
        '509816': 'awful-auntie',
        '255845': 'winter-wonderland',
        '518158': 'official-strictly-come-dancing-annual-2015',
        '519175': 'peppa-pig',
        '527220': 'oxford-childrens-classic'
    },
    'images': {
        // product_name: {
        //     index: [image_name, alt_text, no_idea, hide_from_thumbnails]
        // }
        'julia-donaldson': {
            '0': [ 'TheGruffalosChild',         'The Gruffalo\'s Child',          '', false],
            '1': [ 'WakeUpDoLydiaLou',          'Wake Up Do, Lydia Lou!',         '', false],
            '2': [ 'CharlieCooksFavouriteBook', 'Charlie Cook\'s Favourite Book', '', false],
            '3': [ 'FreddieAndtheFairy',        'Freddie and the Fairy',          '', false],
            '4': [ 'MonkeyPuzzle',              'Monkey Puzzle',                  '', false],
            '5': [ 'WiggleAndRoar',             'Wriggle and Roar!',              '', true ],
            '6': [ 'TheSnailAndTheWhale',       'The Snail and the Whale',        '', false],
            '7': [ 'RoomOnTheBroom',            'Room on the Broom',              '', false],
            '8': [ 'GoatGoesToPlaygroup',       'Goat Goes To Playgroup',         '', true ],
            '9': [ 'ToddleWaddle',              'Toddle Waddle',                  '', false]
        },
        'ladybird-collection': {
            '0':  ['BeautyAndTheBeast',                              'Beauty and the Beast',                          '', false],
            '1':  ['ChalieAndLolaYouWontLikeThisPresentAsMuchASIDo', 'You Won\'t Like this Present as Much as I do!', '', true ],
            '2':  ['CharlieAndLolaIAmInventingAnInvention',          'I am Inventing An Invention',                   '', true ],
            '3':  ['ChickenLicken',                                  'Chicken Licken',                                '', true ],
            '4':  ['Cinderella',                                     'Cinderella',                                    '', true ],
            '5':  ['DomsGragon',                                     'Dom\'s Dragon',                                 '', true ],
            '6':  ['FairyFriends',                                   'Fairy Friends',                                 '', true ],
            '7':  ['FuriONMusicIsland',                              'Moshi Monsters - Furi On Music Island',         '', true ],
            '8':  ['GoldilocksAndTheThreeBears',                     'Goldilocks and the Three Bears',                '', true ],
            '9':  ['HanselAndGretel',                                'Hansel and Gretel',                             '', true ],
            '10': ['HarryAndTheBucketfulOfDinosaurs',                'Harry and the Bucketful of Dinosaurs',          '', false],
            '11': ['HarryAndTheDinosaursUnited',                     'Harry and the Dinosaurs United',                '', true ],
            '12': ['Heidi',                                          'Heidi',                                         '', true ],
            '13': ['JackAndTheBeanstalk',                            'Jack and the Beanstalk',                        '', true ],
            '14': ['KatsumaAndTheThief',                             'Moshi Monsters - Katsuma and the Art Thief',    '', true ],
            '15': ['LittleCreatures',                                'Peppa Pig - Little Creatures',                  '', true ],
            '16': ['LittleRedHen',                                   'Little Red Hen',                                '', true ],
            '17': ['LittleRedRidingHood',                            'Little Red Riding Hood',                        '', true ],
            '18': ['LuvliAndTheGlumpatron',                          'Moshi Monsters - Luvli and the Glump-A-Tron',   '', true ],
            '19': ['PeppaPigNatureTrail',                            'Peppa Pig - Nature Trail',                      '', true ],
            '20': ['PeppaPigRecyclingFun',                           'Peppa Pig - Recycling Fun!',                    '', true ],
            '21': ['PeppaPigSportsDay',                              'Peppa Pig - Sports Day',                        '', true ],
            '22': ['PirateSchool',                                   'Pirate School',                                 '', false],
            '23': ['PoppetStowsAway',                                'Moshi Monsters - Poppet Stows Away',            '', true ],
            '24': ['Rapunzel',                                       'Rapunzel',                                      '', true ],
            '25': ['RexTheBigDinosaur',                              'Rex the Big Dinosaur',                          '', true ],
            '26': ['Rumpelstiltskin',                                'Rumpelstiltskin',                               '', true ],
            '27': ['SamAndTheRobots',                                'Sam and the Robots',                            '', true ],
            '28': ['SleepingBeauty',                                 'Sleeping Beauty',                               '', true ],
            '29': ['SlyFoxAndRedHen',                                'Sly Fox and Red Hen',                           '', true ],
            '30': ['SnowWhiteAndTheSeven-Dwarfs',                    'Snow White and the Seven Dwarfs',               '', true ],
            '31': ['TheElvesAndTheShoemaker',                        'The Elves and the Shoemaker',                   '', true ],
            '32': ['TheEmperorsNewClothes',                          'The Emperor\'s New Clothes',                    '', true ],
            '33': ['TheEnormousTurnip',                              'The Enormous Turnip',                           '', true ],
            '34': ['THeGingerbreadMan',                              'The Gingerbread Man',                           '', true ],
            '35': ['TheMagicPorridgePot',                            'The Magic Porridge Pot',                        '', true ],
            '36': ['ThePiedPiperOfHamelin',                          'The Pied Piper of Hamelin',                     '', true ],
            '37': ['ThePrincessAndThePea',                           'The Princess and the Pea',                      '', false],
            '38': ['TheRedKnight',                                   'The Red Knight',                                '', true ],
            '39': ['TheTaleOfJemimaPuddleDuck',                      'The Tale of Jemina Puddle-Duck',                '', false],
            '40': ['TheTaleOfPeterRabbit',                           'The Tale of Peter Rabbit',                      '', false],
            '41': ['TheThreeBillyGoatsGruff',                        'The Three Billy Goats Gruff',                   '', true ],
            '42': ['TheThreeLittlePigs',                             'The Three Little Pigs',                         '', true ],
            '43': ['TheUglyDuckling',                                'The Ugly Duckling',                             '', true ],
            '44': ['TheWizardOfOz',                                  'The Wizard of Oz',                              '', true ],
            '45': ['TopsyAndTimGoToTheZoo',                          'Topsy and Tim - Go to the Zoo',                 '', false],
            '46': ['TopsyandTimTheBigRace',                          'Topsy and Tim - the Big Race',                  '', false],
            '47': ['TownMouseAndCountryMouse',                       'Town Mouse and Country Mouse',                  '', true ],
            '48': ['WhyGiraffeHasALongNeck',                         'Why Giraffe Has A Long Neck',                   '', true ],
            '49': ['WhyLionRoarrrs',                                 'Why Lion Roars!',                               '', true ]
        },
        'songbirds-phonics': {
            '0':  ['BobBug',               'Bob Bug',                  '', true ],
            '1':  ['ClareAndTheFair',      'Clare and the Fair',       '', true ],
            '2':  ['DigDigDig',            'Dig, Dig, Dig',            '', true ],
            '3':  ['DoctorDuck',           'Doctor Duck',              '', false],
            '4':  ['FishAndChips',         'Fish and Chips',           '', true ],
            '5':  ['GranIsCross',          'Gran is Cross',            '', true ],
            '6':  ['JackAndTheGiants',     'Jack and the Giants',      '', true ],
            '7':  ['Leroy',                'Leroy',                    '', true ],
            '8':  ['MissMiss',             'Miss! Miss!',              '', true ],
            '9':  ['MoanMoanMoan',         'Moan, Moan, Moan!',        '', false],
            '10': ['MumBugsBag',           'Mum Bug\'s Bag',           '', true ],
            '11': ['NoMilkToday',          'No Milk Today',            '', false],
            '12': ['PaulaTheVet',          'Paula the Vet',            '', true ],
            '13': ['QueenAnneenasFeast',   'Queen Anneena\'s Feast',   '', true ],
            '14': ['SamsPot',              'Sam\'s Pot',               '', true ],
            '15': ['SingingDad',           'Singing Dad',              '', true ],
            '16': ['SpikeSays',            'Spike Says',               '', true ],
            '17': ['SplashAndSquelch',     'Splash and Squelch',       '', true ],
            '18': ['SueKangaroo',          'Sue Kangaroo',             '', true ],
            '19': ['Tadpoles',             'Tadpoles',                 '', true ],
            '20': ['TarasParty',           'Tara\'s Party',            '', true ],
            '21': ['TheBigMatch',          'The Big Match',            '', true ],
            '22': ['TheCinderella',        'The Cinderella Play',      '', true ],
            '23': ['TheDeerAndTheEarwig',  'The Deer and the Earwig',  '', true ],
            '24': ['TheOldPet',            'The Odd Pet',              '', false],
            '25': ['TheScrapRocket',       'The Scrap Rocket',         '', false],
            '26': ['TheShoppingList',      'The Shopping List',        '', false],
            '27': ['TheSnakeAndTheDrake',  'The Snake and the Drake',  '', false],
            '28': ['theTrunkAndTheSkunk',  'The Trunk and the Skunk',  '', false],
            '29': ['TheUpsideDownBrowns',  'The Upside-down Browns',   '', true ],
            '30': ['TheWrongKindOfKnight', 'The Wrong Kind of Knight', '', true ],
            '31': ['ThisAndThat',          'This and That',            '', true ],
            '32': ['TopCat',               'Top Cat',                  '', true ],
            '33': ['UsmansBooks',          'Usman\'s Books',           '', true ],
            '34': ['WhereWereYouBert',     'Where Were You Bert?',     '', true ],
            '35': ['ZakAndTheVet',         'Zak and the Vet',          '', true ]
        },
        'early-reader': {
            '0':  ['AlgysAmazingAdventuresInTheArtic', 'Algy\'s Amazing Adventures In The Arctic', '', false],
            '1':  ['ALionInTheMeadow',                 'A Lion in the Meadow',                     '', false],
            '2':  ['BloodAndGutsAndRatsTailPizza',     'Blood And Guts and Rats\' Tail Pizza',     '', true ],
            '3':  ['DownInTheJungle',                  'Down In The Jungle',                       '', false],
            '4':  ['HorridHenryAndTheBogeyBabysitter', 'Horrid Henry and the Bogey Babysitter',    '', false],
            '5':  ['HorridHenryAndTheDemonDinnerLady', 'Horrid Henry and the Demon Dinner Lady',   '', true ],
            '6':  ['HorridHenryGetsRichQuick',         'Horrid Henry Gets Rich Quick',             '', false],
            '7':  ['HorridHenryMeetsTheQueen',         'Horrid Henry Meets the Queen',             '', true ],
            '8':  ['HorridHenrysHomework',             'Horrid Henry\'s Homework',                 '', true ],
            '9':  ['Horrid-HenrysSportsDay',           'Horrid Henry\'s Sports Day',               '', true ],
            '10': ['HorridHenryTricksAndTreats',       'Horrid Henry Tricks and Treats',           '', true ],
            '11': ['HorridHenryTricksTheToothFairy',   'Horrid Henry Tricks the Tooth Fairy',      '', true ],
            '12': ['JoggersBigAdventure',              'Jogger\'s Big Adventure',                  '', true ],
            '13': ['LookAtMe',                         'Look at Me',                               '', true ],
            '14': ['MirandaTheExplorer',               'Miranda the Explorer',                     '', true ],
            '15': ['MondaysAtMonsterSchool',           'Mondays At Monster School',                '', true ],
            '16': ['MoodyMargaretsMakeover',           'Moody Margaret\'s Makeover',               '', true ],
            '17': ['MoodyMargretCastssASpell',         'Moody Margaret Casts a Spell',             '', true ],
            '18': ['MurdochMolesBigIdea',              'Murdoch Mole\'s Big Idea',                 '', false],
            '19': ['PoppyThePirateDog',                'Poppy the Pirate Dog',                     '', true ],
            '20': ['PoppyThePirateDogsNewShipmate',    'Poppy the Pirate Dog\'s New Shipmate',     '', true ],
            '21': ['RampageInPrincesGarden',           'Rampage in Prince\'s Garden',              '', false],
            '22': ['ShumbasBigAdventure',              'Shumba\'s Big Adventure',                  '', false],
            '23': ['SophiesDanceClass',                'Sophie\'s Dance Class',                    '', true ],
            '24': ['TheBigStickyBun',                  'The Big Sticky Bun',                       '', true ],
            '25': ['TheHauntedHouseOfBuffinStreet',    'The Haunted House of Buffin Street',       '', true ],
            '26': ['TheManWhoseMotherWasAPirate',      'The Man Whose Mother Was A Pirate',        '', true ],
            '27': ['ThePerfectPetShop',                'The Perfect Pet Shop',                     '', true ],
            '28': ['TheTopsyTurvies',                  'The Topsy Turvies',                        '', true ],
            '29': ['TwitTheOwlWhoWasntWise',           'Twit The owl who wasn\'t wise',            '', true ]
        },
        'wimpy-kid': {
            '0': ['CabinFever',       'Cabin Fever',          '', false],
            '1': ['DiaryOfAWimpyKid', 'Diary of a Wimpy Kid', '', false],
            '2': ['DogDays',          'Dog Days',             '', false],
            '3': ['DoItYourselfBook', 'Do-It-Yourself Book',  '', false],
            '4': ['KidRodrickRules',  'Roderick Rules',       '', false],
            '5': ['TheLastStraw',     'The Last Straw',       '', false],
            '6': ['TheUglyTruth',     'The Ugly Truth',       '', false]
        },
        'bestever-fiction': {
            '0': ['AliceBliss',               'Alice Bliss',                  '', true ],
            '1': ['MateshipWithBirds',        'Mateship with Birds',          '', false],
            '2': ['OneMomentOneMorning',      'One Moment, One Morning',      '', false],
            '3': ['OneSummer',                'One Summer',                   '', false],
            '4': ['TheHouseofEliott',         'The House of Eliott',          '', false],
            '5': ['TheSilverLiningsPlayBook', 'The Silver Linings Play Book', '', false],
            '6': ['TheSummerOfTheBear',       'The Summer of the Bear',       '', false],
            '7': ['ThisPerfectWorld',         'This Perfect World',           '', false],
            '8': ['TimesEcho',                'Time\'s Echo',                 '', false],
            '9': ['WhenWeWereBad',            'When We Were Bad',             '', true ]
        },
        'scarecrows': {
            '0': ['scarecrows', 'The Scarecrows\' Wedding', '', false]
        },
        'frozen': {
            '0': ['frozen', 'Disney\'s Frozen: The Essential Guide', '', false]
        },
        '1000-dot-to-dot-book-animals': {
            '0': ['1000DotToToBookAnimals', 'The 1000 Dot-to-Dot Book: Animals', '', false]
        },
        'loombands': {
            '0': ['loombands', 'Rubber Band Loom Bracelets', '', false]
        },
        'beekeepers-daughter': {
            '0': ['BeekeepersDaughter', 'The Beekeeper\'s Daughter', '', false]
        },
        'tom-gates': {
            '0': ['thebrilliantworldoftomgates',   'The Brilliant World of Tom Gates', '', false],
            '1': ['tomgateseverythingsamazing',    'Tom Gates Everything\'s Amazing',  '', false],
            '2': ['tomgatesexcellentexcuses',      'Tom Gates Excellent Excuses',      '', false],
            '3': ['tomgatesgeniusideas',           'Tom Gates Genius Ideas',           '', false],
            '4': ['tomgatesisabsolutelyfantastic', 'Tom Gates Absolutely Fantastic',   '', false]
        },
        'marvel-readers-collection': {
            '0':   ['AmazingPowers',                        'Amazing Powers - Catherine Saunders',                         '', true ],
            '1':   ['AvengersAssemble',                     'Avengers Assemble - Victoria Taylor::',                       '', false],
            '2':   ['FantasticFourEvilAdversaries',         'Fantastic Four Evil Adversaries - Simon Beecroft',            '', false ],
            '3':   ['FantasticFourWorldsGreatestSuperteam', 'Fantastic Four The World\'s Greatest Superteam - Neil Kelly', '', true ],
            '4':   ['GreatestBattles',                      'Greatest Battles - Matthew K Manning',                        '', false],
            '5':   ['IronManFriendsAndEnemies',             'Iron Man Friends and Enemies - Michael Teitelbaum',           '', false],
            '6':   ['MeetTheXMen',                          'Meet the X-Men - Clare Hibbert',                              '', true ],
            '7':   ['SpiderMansAmazingPowers',              'Spider-Man Amazing Powers - James Buckley, Jr.',              '', true ],
            '8':   ['SpidermanTheamazingStory',             'Spider-Man The Amazing Story - Catherine Saunders',           '', false],
            '9':   ['SpidermanTheStoryofSpiderman',         'The Story of Spider-Man - Michael Teitelbaum',                '', true ],
            '10':  ['SpidermanWorstEnemies',                'Spider-Man Worst Enemies - Catherine Saunders',               '', true ],
            '11':  ['TheRiseOfIronMan',                     'The Rise of Iron Man - Michael Teitelbaum',                   '', false],
            '12':  ['TheWorldsMightiestSuperHeroTeam',      'The World\'s Mightiest Super Hero Team - Julia March',        '', false],
            '13':  ['TheXmenSchool',                        'The X-Men School - Michael Teitelbaum',                       '', false],
            '14':  ['XMenHowItAllBegan',                    'X-Men How It All Began - Michae Teitelbaum',                 '', true ]
        },
        '1411-facts-to-knock-you-sideways': {
            '0': ['1411FactsToKnockYouSideways', '1,411 QI Facts to Knock You Sideways', '', false]
        },
        'awful-auntie': {
            '0': ['AwfulAuntie', 'Awful Auntie', '', false]
        },
        'winter-wonderland': {
            '0': ['BellaGetsHerSkatesOn',      'Bella Gets Her Skates On',        '', false ],
            '1': ['BettyAndTheYeti',           'Betty and the Yeti',              '', false ],
            '2': ['BIgBearLittleBrother',      'Big Bear Little Brother',         '', false ],
            '3': ['CharlieCrowInTheSnow',      'Charlie Crow in the Snow',        '', false ],
            '4': ['FoxesInTheSnow',            'Foxes in the Snow',               '', false ],
            '5': ['JackFrost',                 'Jack Frost',                      '', false ],
            '6': ['RabbitsInTheSnow',          'Rabbits in the Snow',             '', true ],
            '7': ['SamsSnowflake',             'Sam\'s Snowflake',                '', false ],
            '8': ['SayHelloToTheSnowyAnimals', 'Say Hello to the Snowy Animals!', '', false ],
            '9': ['TheGruffalosChild',         'The Gruffalo\'s Child',           '', true ],
        },
        'official-strictly-come-dancing-annual-2015': {
            '0': ['OfficialStrictlyComeDancingAnnual2015', '', '', false]
        },
        'peppa-pig': {
            '0': ['DaddyPigsLostKeys',          'Daddy Pig\'s Lost Keys',           '', false ],
            '1': ['FunAtTheFair',               'Fun at the Fair',                  '', false ],
            '2': ['GeorgesFirstDayAtPlaygroup', 'George\'s First Day at Playgroup', '', false ],
            '3': ['MissRabbitsDayOff',          'Miss Rabbit\'s Day Off',           '', false ],
            '4': ['PeppaGoesBoating',           'Peppa Goes Boating',               '', false ],
            '5': ['PeppaGoesCamping',           'Peppa Goes Camping',               '', false ],
            '6': ['PeppaPigsFamilyComputer',    'Peppa Pig\'s Family Computer',     '', false ],
            '7': ['PeppaPlaysFootball',         'Peppa Plays Football',             '', false ],
            '8': ['PeppasFirstSleepover',       'Peppa\'s First Sleepover',         '', true ],
            '9': ['PeppasNewNeighbours',        'Peppa\'s New Neighbours',          '', true ],
        },
        'oxford-childrens-classic': {
            '0': ['AdventuresOfTomSawyer', 'The Adventures of Tom Sawyer', '', false ],
            '1': ['AliceInWonderland',     'Alice in Wonderland',          '', true ],
            '2': ['AnneOfGreenGables',     'Anne of Green Gables',         '', false ],
            '3': ['BlackBeauty',           'Black Beauty',                 '', false ],
            '4': ['LittleWomen',           'Little Women',                 '', true ],
            '5': ['TheJungleBook',         'The Jungle Book',              '', false ],
            '6': ['TheSecretGarden',       'The Secret Garden',            '', false ],
            '7': ['TreasureIsland',        'Treasure Island',              '', false ],
            '8': ['WindInTheWillows',      'The Wind in the Willows',      '', false ],
            '9': ['WizardOfOz',            'The Wonderful Wizard of Oz',   '', false ],
        },
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
.see-inside--header .add-to-basket-button { height: 40px !important; margin: 0 !important; position: absolute !important; top: 0 !important; right: 0 !important; font-size: 13px !important; font-weight: normal !important; width: 130px !important; float: right !important; line-height: 20px; } \
.see-inside--header .addToBasketForm { margin: 0; } \
.see-inside--zoom { height: 542px; } \
.see-inside--scroller { width: 300px; float: left; margin: 35px 0px 0px; height: 644px; overflow: auto; } \
.see-inside--scroller p { margin: 0; height: 37px; } \
.see-inside--scroller p a { font-size: 1.1em; color: #333; } \
.see-inside--scroller a { text-decoration: none; } \
.see-inside--scroller p a span { font-size: 0.8em; display: block; position: relative; top: -4px; font-style: italic; } \
.see-inside--scroller img { border: 2px solid #fff; width: 260px; height: auto; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; } \
.see-inside--zoom-container { width: 831px; height: 550px; background: #fff; } \
.see-inside--zoom-container--inner { position: relative; width: 827px; height: auto; max-height:535px; border: 2px solid '+exp.vars.colorOrange+'; cursor: zoom-in; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; } \
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
*/.zoom-item { padding: 0 0 20px 0; height: auto; } \
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
    .see-inside--zoom-container--inner { max-height: 410px; } \
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
            i++;
        }
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
    $('.see-inside--zoom-container[data-zoom-id="'+pageId+'"]').find('.AWA_viewer_img').trigger('unveil');

    if (exp.vars.zoomImageNodes[pageId].getAttribute('src') === null) {
        exp.vars.zoomImageNodes[pageId].setAttribute('src', exp.vars.zoomImageNodes[pageId].getAttribute('data-src'));
    }
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

        // Load in thumbs
        $('.AWA_viewerThumb_img').trigger('unveil');
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
                       <a href="#" data-behaviour="thumbSelectZoom" data-thumb-id="' + key + '"><img class="AWA_unveil_img AWA_viewerThumb_img" data-src="'+ _vars.imagesBase + thisProduct + _vars.imagesTypeFolders['viewerThumbs'] + value[0] + _vars.imagesExtension + '" alt="'+value[1]+'" /></a> \
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
        <img class="AWA_unveil_img AWA_viewer_img" data-src="'+ _vars.imagesBase + thisProduct + _vars.imagesTypeFolders[ viewerSize ] + value[0] + _vars.imagesExtension + '" alt="'+value[1]+'" /> \
        </div></div> \
        <script type="text/javascript"> \
            $(".see-inside--zoom-container--inner.zoom'+i+'").zoom({zoom_id: "'+key+'", touch: true, url: "'+_vars.imagesBase + thisProduct + _vars.imagesTypeFolders['zoomed'] + value[0] + _vars.imagesExtension+'", callback: function(){  } }); \
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
    _vars.buyBlock.wrap('<div />').parent('div').html().toString().replace('<br>','').replace('<span class="hidden-phone">Quantity</span>','') +
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

    // Apply lazy-loading of images
    $('.AWA_unveil_img').unveil();

};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);