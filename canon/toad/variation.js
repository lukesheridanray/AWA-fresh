// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    // -------------------------------------------------------------------------


    /**
     * Experiment set up
     */

    var AWA = {
        /**
         * Safely log to console when console is not defined
         * @param {*} value - The value to log
         * @param {bool} table - Flag to use console.table if available
         */
        log: function(value, table) {
            table = table || false;
            if(typeof console === 'undefined') {
                return;
            }
            if(table && typeof console.table === 'function') {
                console.table(value);
            } else {
                console.log(value);
            }
        }
    };

    // -------------------------------------------------------------------------

    // Bunch of constants, to avoid simple typos (I'd prefer to get a "Oi you're
    // using a non-existant variable" versus a string silently failing).
    var MATCH_SIMPLE     = 'simple',
        MATCH_STARTSWITH = 'startswith',
        MATCH_REGEX      = 'regex';

    var BANNER_FULLBLEED = 'full-bleed-banner',
        BANNER_SEARCH    = 'search-results-banner',
        BANNER_PDP       = 'pdp-banner';

    var EN = 'en',
        FR = 'fr',
        DE = 'de',
        IT = 'it',
        NL = 'nl';

    // The landing pages for the various banners.
    // TODO: URL assumed. Confirm with John (though what else is it gonna be?)
    var toad_pages = [
        {
            language: DE,
            url: 'https://store.canon.de/canon-eos-5d-mark-iv-gehaeuse/1483C026/'
        },
        {
            language: EN,
            url: 'https://store.canon.co.uk/canon-eos-5d-mark-iv-body/1483C026/'
        },
        {
            language: FR,
            url: 'https://store.canon.fr/canon-boitier-canon-eos-5d-mark-iv/1483C026/'
        },
        {
            language: IT,
            url: 'https://store.canon.it/canon-corpo-canon-eos-5d-mark-iv/1483C026/'
        },
        {
            language: NL,
            url: 'https://store.canon.nl/canon-eos-5d-mark-iv-body/1483C026/'
        },
    ];

    var image_definitions = [
        {
            language: DE,
            banner_type: BANNER_FULLBLEED,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-de-1680-01.png?w=1680'
        },
        {
            language: EN,
            banner_type: BANNER_FULLBLEED,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-en-1680-01.png?w=1680'
        },
        {
            language: FR,
            banner_type: BANNER_FULLBLEED,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-fr-1680-01.png?w=1680'
        },
        {
            language: IT,
            banner_type: BANNER_FULLBLEED,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-it-1680-01.png?w=1680'
        },
        {
            language: NL,
            banner_type: BANNER_FULLBLEED,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-nl-1680-01.png?w=1680'
        },

        {
            language: DE,
            banner_type: BANNER_PDP,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-de-550-01.png?w=550'
        },
        {
            language: EN,
            banner_type: BANNER_PDP,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-en-550-01.png?w=550'
        },
        {
            language: FR,
            banner_type: BANNER_PDP,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-fr-550-01.png?w=550'
        },
        {
            language: IT,
            banner_type: BANNER_PDP,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-it-550-01.png?w=550'
        },
        {
            language: NL,
            banner_type: BANNER_PDP,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-nl-550-01.png?w=550'
        },

        {
            language: DE,
            banner_type: BANNER_SEARCH,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-de-1120-01.png?w=1120'
        },
        {
            language: EN,
            banner_type: BANNER_SEARCH,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-en-1120-01.png?w=1120'
        },
        {
            language: FR,
            banner_type: BANNER_SEARCH,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-fr-1120-01.png?w=1120'
        },
        {
            language: IT,
            banner_type: BANNER_SEARCH,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-it-1120-01.png?w=1120'
        },
        {
            language: NL,
            banner_type: BANNER_SEARCH,
            image: 'https://i1.adis.ws/i/canon/1483C026AA-cro-signpost-nl-1120-01.png?w=1120'
        },
    ];

    // Definition of all the pages we'll be testing.
    // Images will be inferred from 'language' and 'banner_type'.
    var page_definitions = [
        {
            host:        'store.canon.co.uk',
            path:        '/cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/dslr-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/professional-dslr-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/advanced-dslr-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/search/s/priceDesc/f/697997688/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/canon-eos-',
            match_type:  MATCH_STARTSWITH,
            language:    EN,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/canon-pixma-pro-',
            match_type:  MATCH_STARTSWITH,
            language:    EN,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/canon-ef-',
            match_type:  MATCH_STARTSWITH,
            language:    EN,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/ef-lenses/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/wifi-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/safari-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/low-light-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/travel-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    EN,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/canon-pgi',
            match_type:  MATCH_STARTSWITH,
            language:    EN,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.co.uk',
            path:        '/canon-cli-',
            match_type:  MATCH_STARTSWITH,
            language:    EN,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photo/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.fr',
            path:        '/reflex-numeriques/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photos-reflex-professionnels/category/cat30016/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photo-reflex-pour-experts/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/search/s/priceDesc/f/356523478/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/canon-eos-',
            match_type:  MATCH_STARTSWITH,
            language:    FR,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/canon-boitier-nu-canon-eos-5d-mark-iii/5260B019/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/canon-boitier-canon-eos-5d-mark-iv/1483C026/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/canon-pixma-pro-',
            match_type:  MATCH_STARTSWITH,
            language:    FR,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/canon-objectif-canon-ef',
            match_type:  MATCH_STARTSWITH,
            language:    FR,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/objectifs-ef/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photo-wifi/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photo-pour-safari/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photo-basse-lumiere/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/appareils-photo-pour-voyager/',
            match_type:  MATCH_SIMPLE,
            language:    FR,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.fr',
            path:        '/.*canon-pgi-.*',
            match_type:  MATCH_REGEX,
            language:    FR,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.fr',
            path:        '/.*canon-cli-.*',
            match_type:  MATCH_REGEX,
            language:    FR,
            banner_type: BANNER_PDP,
        },
                {
            host:        'store.canon.de',
            path:        '/kameras/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.de',
            path:        '/digitale-slrs/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.de',
            path:        '/professionelle-spiegelreflexkameras/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/spiegelreflexkameras-fuer-foto-begeisterte/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/search/s/priceDesc/f/356523478/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/canon-eos-',
            match_type:  MATCH_STARTSWITH,
            language:    DE,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.de',
            path:        '/canon-pixma-pro-',
            match_type:  MATCH_STARTSWITH,
            language:    DE,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.de',
            path:        '/canon-ef',
            match_type:  MATCH_STARTSWITH,
            language:    DE,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.de',
            path:        '/ef-objektive/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/wlan-kameras/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/safari-kameras/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/low-light-kameras/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/reisekameras/',
            match_type:  MATCH_SIMPLE,
            language:    DE,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.de',
            path:        '/canon-pgi-',
            match_type:  MATCH_STARTSWITH,
            language:    DE,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.de',
            path:        '/canon-cli-',
            match_type:  MATCH_STARTSWITH,
            language:    DE,
            banner_type: BANNER_PDP,
        },
                {
            host:        'store.canon.it',
            path:        '/fotocamere/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-digitali-reflex/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-reflex-digitali-per-professionist/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-digitali-reflex-per-appassionati/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/search/s/priceDesc/f/356523478/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/canon-eos-',
            match_type:  MATCH_STARTSWITH,
            language:    IT,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.it',
            path:        '/canon-pixma-pro-',
            match_type:  MATCH_STARTSWITH,
            language:    IT,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.it',
            path:        '/canon-ef',
            match_type:  MATCH_STARTSWITH,
            language:    IT,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.it',
            path:        '/obiettivi-ef/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-wifi/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-per-safari/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-per-condizioni-di-scarsa-illuminazione/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/fotocamere-da-viaggio/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.it',
            path:        '/canon.*cartuccia.*\-pgi\-.*',
            match_type:  MATCH_REGEX,
            language:    IT,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.it',
            path:        '/canon.*cartuccia.*\-cli\-.*',
            match_type:  MATCH_REGEX,
            language:    IT,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.it',
            path:        '/canon-corpo-canon-eos-5d-mark-iv/1483C026/',
            match_type:  MATCH_SIMPLE,
            language:    IT,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.nl',
            path:        '/cameras/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.nl',
            path:        '/digitale-spiegelreflexcameras/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_FULLBLEED,
        },
        {
            host:        'store.canon.nl',
            path:        '/spiegelreflexcamera-voor-professionals/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/spiegelreflexcameras-voor-gevorderden/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/search/s/priceDesc/f/356523478/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/canon-eos-',
            match_type:  MATCH_STARTSWITH,
            language:    NL,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.nl',
            path:        '/canon-pixma-pro-',
            match_type:  MATCH_STARTSWITH,
            language:    NL,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.nl',
            path:        '/canon-ef',
            match_type:  MATCH_STARTSWITH,
            language:    NL,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.nl',
            path:        '/ef-lenzen/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/cameras-met-wi-fi/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/outdoor-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/low-light-cameras/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/reiscameras/',
            match_type:  MATCH_SIMPLE,
            language:    NL,
            banner_type: BANNER_SEARCH,
        },
        {
            host:        'store.canon.nl',
            path:        '/canon-pgi-',
            match_type:  MATCH_STARTSWITH,
            language:    NL,
            banner_type: BANNER_PDP,
        },
        {
            host:        'store.canon.nl',
            path:        '/canon-cli-',
            match_type:  MATCH_STARTSWITH,
            language:    NL,
            banner_type: BANNER_PDP,
        },
    ];

    function resolveToadPage(language) {
        for(var i = 0; i < toad_pages.length; i++) {
            if (toad_pages[i].language != language) {
                continue;
            }

            return toad_pages[i].url;
        }

        AWA.log(
            "Something that should never happening is happening: Cannae resolve a toad page for __LANGUAGE__"
            .replace('__LANGUAGE__', language)
        );
        return undefined;
    }

    function resolveImage(language, banner_type) {
        for(var i = 0; i < image_definitions.length; i++) {
            if (image_definitions[i].language == language &&
                image_definitions[i].banner_type == banner_type) {

                return image_definitions[i].image;
            }
        }

        AWA.log(
            "Something that should never happening is happening: Cannae resolve an image for __LANGUAGE__ and __BANNER_TYPE__"
            .replace('__LANGUAGE__', language)
            .replace('__BANNER_TYPE__', banner_type)
        );
        return undefined;
    }

    function resolvePage() {
        var host = window.location.hostname;
        var path = window.location.pathname;

        var current_definition;

        for(var i = 0; i < page_definitions.length; i++) {
            if (host !== page_definitions[i].host) {
                AWA.log(
                    'Definition host (__DEFINITION_HOST__) does not match current host (__CURRENT_HOST__)'
                        .replace('__DEFINITION_HOST__', page_definitions[i].host)
                        .replace('__CURRENT_HOST__', host)
                );
                continue;
            }

            switch (page_definitions[i].match_type) {
                case MATCH_SIMPLE:
                    if (path == page_definitions[i].path) {
                        current_definition = page_definitions[i];
                    }
                    break;

                case MATCH_STARTSWITH:
                    if (path.indexOf(page_definitions[i].path) === 0) {
                        current_definition = page_definitions[i];
                    }
                    break;

                case MATCH_REGEX:
                    var match = path.match(new RegExp(page_definitions[i].path));
                    if (match !== null) {
                        current_definition = page_definitions[i];
                    }
                    break;
            }
        }

        return current_definition;
    }

    // -------------------------------------------------------------------------

    /**
     * Run the experiment
     */

    // Log it
    AWA.log('Canon TOAD Sign-posting: 1.0');

    // Append CSS
    $('head').append('<style type="text/css"> \
        .row--awa-toad--search { \
            margin-bottom: 1em; \
        } \
        .row--awa-toad--search img { \
            max-width: 100%; \
        } \
        @media screen and (max-width: 559px) {\
            .row--awa-toad--search img { \
                max-width: 160%; \
                margin-left: -50%;\
            } \
        }\
        .row--awa-toad--pdp > div { \
            margin-top: 1em; \
        } \
        .row--awa-toad--pdp img { \
            max-width: 100%; \
        } \
        @media screen and (max-width: 768px) {\
            .row--awa-toad--pdp img { \
                max-width: 95%; \
                margin: 0 auto; \
                display: block; \
            } \
        }\
        .live-text-banner .awa-toad-link img {\
            margin-left: 0;\
            margin-right: -20%;\
            left: auto;\
            right: 0;\
        }\
        @media screen and (max-width: 768px) {\
            .live-text-banner .awa-toad-link img {\
                margin-right: 0;\
            } \
        }\
        @media screen and (max-width: 640px) {\
            .live-text-banner .awa-toad-link img {\
                margin-right: -19%;\
            } \
        }\
        @media screen and (max-width: 388px) {\
            .live-text-banner .awa-toad-link img {\
                margin-right: -30%;\
            } \
        }\
    </style>');

    var current_page = resolvePage();

    if (current_page === undefined) {
        AWA.log('Failed to resolve current page. Aborting experiment');
        return;
    }

    var current_language = current_page.language,
        current_banner_type = current_page.banner_type,
        current_image = resolveImage(current_language, current_banner_type),
        current_toad_page = resolveToadPage(current_language);

    if (current_image === undefined) {
        AWA.log('Failed to resolve image for current page. Very strange. Aborting experiment');
        return;
    }

    var $banner_row;
    switch (current_banner_type) {
        case BANNER_FULLBLEED:
            // Swap the existing FULLBLEED banner with the new one.
            var $existing_banner = $('.live-text-banner:first'),
                $existing_link = $existing_banner.find('a'),
                $existing_picture = $existing_banner.find('picture');

            // Update the link
            $existing_link
                .attr('href', current_toad_page)
                .addClass('awa-toad-link');

            // Remove source-set for picture element (warning: heavier page impact)
            $existing_picture.children('source').remove();

            // Leave just the normal image, but pointing to the new URL.
            $existing_picture.children('img').attr('srcset', current_image);

            // Remove any overlayed copy.
            $existing_banner.find('.live-text-banner--text-block').remove();
            break;

        case BANNER_SEARCH:
            // Two page styles to cater for here. Some pages have a graphic title, some just a straight text title.
            // This doesn't affect the test however. We just need to slap a new row containing an image at the very top
            // of the page.
            $banner_row = $('<div class="row row--awa-toad row--awa-toad--search">\
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                    <a href="__TOAD_LINK__" class="awa-toad-link">\
                        <img src="__TOAD_IMAGE__" />\
                    </a>\
                </div>\
            </div>'
                .replace('__TOAD_LINK__', current_toad_page)
                .replace('__TOAD_IMAGE__', current_image)
            );
            $('.container[role="main"]').prepend($banner_row);
            break;

        case BANNER_PDP:
            // Add a new row underneath "product-detail-core".  Will mean wrapping the existing contents?? maybe? Need to test
            $banner_row = $('<div class="row row--awa-toad row--awa-toad--pdp">\
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                    <a href="__TOAD_LINK__" class="awa-toad-link">\
                        <img src="__TOAD_IMAGE__" />\
                    </a>\
                </div>\
            </div>'
                .replace('__TOAD_LINK__', current_toad_page)
                .replace('__TOAD_IMAGE__', current_image)
            );
            $('.product-detail-core').append($banner_row);
            break;
    }

})(optimizely.$); // vwo_$ || optimizely.$