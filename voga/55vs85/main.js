/*******************************************************************************
* Main experiment.                                                             *
* Home Page banner:                                                            *
*     Replace banner with a geo-site and daily unique URL                      *
* All site yellow banner:                                                      *
*     Change copy / behaviour according to 'banners' tab in promo schedule     *
*     On product pages, replace the %-off with the actual product's %-off      *
*     Exclude from checkout pages (is yellow banner shown there?)              *
* Category page:                                                               *
*     Remove grey crossed-out price                                            *
*     Update the roundel to display the actual product's %-off                 *
*     (Note, there is AJAX infinite-scrolling)                                 *
* Product page:                                                                *
*     Remove "Normal price" for product                                        *
*     Remove "Normal price" for products in "You may also like" box            *
*     Change colour of "Price for original" to black                           *
* About-company page:                                                          *
*     Show %-off according to promo calendar (augmented %-off)                 *
*******************************************************************************/

// Manual Google Analytics integration
_gaq.push(['_setCustomVar', 2, 'Optimizely 50/85','Variation',1]);
_gaq.push(['_trackEvent','Optimizely 50/85','Variation','track','track','true']);


/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

// -----------------------------------------------------------------------------

//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var voga55vs85_augmented = (function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function (str) {
        if (typeof window.console !== 'undefined') {
            console.log('voga55vs85_augmented: ' + str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    console.log('VOGA 55vs85: Augmented variation - 0.1');


    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
        'home_page_promo_banner_url': 'http://www.voga.com/media/wysiwyg/abtest/_GEOSITE_mainbanner-_DATE_.jpg',
        'augmented_promo_data': {

            // Template groups
            'templates': {
                // 21.04
                // 22.04
                // 23.04
                'ROW4': { // Row in spreadsheet
                    'en': { // GB, SE, DK
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to 75% off the high street.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to xx% off the high street price on this product. &nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                    },
                    'nl': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Bespaar tot 75% in vergelijking met de prijs van het origineel.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"> <strong>Bespaar tot xx% op de prijs van het origineel</strong>&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                    },
                    'de': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Sparen Sie bis zu 75% gegenüber dem Original Preis. Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Sparen Sie bis zu xx% gegenüber dem Original Preis. Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                    },
                    'fr': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à 75% sur les produits des commerces traditionnels.</strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à xx% par rapport aux magasins traditionnels sur ce produit..</strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                    },
                    'no': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil 80% av butikkpris.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                        'product_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil xx% av butikkpris på dette produktet.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                    },
                    'es': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta 80% de descuento del precio en tienda, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta xx% de descuento del precio en tienda de este producto, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                    },
                    'it': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Risparmia fino al 80% sul prezzo di mercato. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                        'product_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Fino al -xx% rispetto al prezzo di mercato su questo prodotto. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                    },
                    'pl': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź 80% w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź aż do xx% na tym produkcie w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                    }
                },

                // 07.04
                // 08.04
                // 09.04
                //
                // 14.04
                // 15.04
                // 16.04
                'ROW5': { // Row in spreadsheet
                    'en': { // GB, SE, DK
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to 75% against the original price.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to xx% against the original price on this product.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                    },
                    'nl': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Bespaar tot 75% in vergelijking met de originele prijs.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"> <strong>Bespaar tot xx% op de originele prijs van dit product.</strong>&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                    },
                    'de': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Sparen Sie bis zu 75% gegenüber dem Original Preis - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Erhalten Sie dieses Produkt bis zu xx% günstiger als das Original - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                    },
                    'fr': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à 75% sur les prix originaux.</strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à xx% par rapport au prix original de ce produit. </strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                    },
                    'no': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil 80% mot originalprisen. </strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                        'product_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil xx% mot originalpris på dette produktet.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                    },
                    'es': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta un 80% del precio original, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta un xx% del precio original de este producto, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                    },
                    'it': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Risparmia fino al 80% rispetto al prezzo dell\'originale. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                        'product_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Risparmia oggi fino al xx% rispetto al prezzo di mercato su questo prodotto. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                    },
                    'pl': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź aż do 80% w stosunku do oryginalnej ceny - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź aż do xx% w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                    }
                },

                // 23.03
                // 24.03
                // 25.03
                // 26.03
                //
                // 31.03
                // 01.04
                // 02.04
                //
                // 28.04
                // 29.04
                // 30.04
                'ROW6': { // Row in spreadsheet
                    'en': { // GB, SE, DK
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Up to 75% off the original.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Up to xx% off the original price on this product.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                    },
                    'nl': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Tot 75% goedkoper dan het origineel.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Tot xx% goedkoper dan de originele prijs van dit product.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                    },
                    'de': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Bis zu 75% günstiger als das Original - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Bis zu xx% günstiger als das Original - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                    },
                    'fr': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Jusqu\'à 75% moins cher que les originaux.</strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Jusqu’à xx% de réduction sur ce produit par rapport à l’original de ce produit. </strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                    },
                    'no': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Opptil 80% av originalen.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                        'product_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Opptil xx% av originalprisen på dette produktet. </strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                    },
                    'es': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Hasta 80% de descuento del diseño original, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Hasta xx% del precio del original de este producto, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                    },
                    'it': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Fino al 80% di risparmio sull\'originale. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                        'product_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Fino al xx% in meno rispetto al prezzo dell\'originale. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                    },
                    'pl': {
                        'pct_off': 75,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Aż do 80% zniżki od ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Aż do xx% zniżki na ten produkt w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                    }
                },

                // 03.04
                // 04.04
                // 05.04
                // 06.04
                'ROW7': { // Row in spreadsheet
                    'en': { // GB, SE, DK
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to 80% off the high street.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to xx% off the high street price on this product.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                    },
                    'nl': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Bespaar tot 80% in vergelijking met de prijs van het origineel.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Bespaar tot xx% op de prijs van het origineel.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                    },
                    'de': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Sparen Sie bis zu 80% gegenüber dem Original Preis - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Sparen Sie bis zu xx% gegenüber dem Original Preis - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                    },
                    'fr': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à 80% sur les produits des commerces traditionnels.</strong> Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à xx% par rapport aux magasins traditionnels sur ce produit. </strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                    },
                    'no': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil 85% av butikkpris.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                        'product_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil xx% av butikkpris på dette produktet.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                    },
                    'es': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta 85% de descuento del precio en tienda, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta xx% de descuento del precio en tienda de este producto, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                    },
                    'it': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Risparmia fino al 85% sul prezzo di mercato. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                        'product_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Fino al -xx% rispetto al prezzo di mercato su questo prodotto. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                    },
                    'pl': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź 85% w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź aż do xx% na tym produkcie w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                    }
                },

                // 27.03
                // 28.03
                // 29.03
                // 30.03
                //
                // 24.04
                // 25.04
                // 26.04
                // 27.04
                //
                // 01.05
                // 02.05
                // 03.05
                // 04.05
                'ROW8': { // Row in spreadsheet
                    'en': { // GB, SE, DK
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to 80% against the original price.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Save up to xx% against the original price on this product.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                    },
                    'nl': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Bespaar tot 80% in vergelijking met de originele prijs.</strong>&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Bespaar tot xx% in vergelijking met de originele prijs.</strong>&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                    },
                    'de': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Sparen Sie bis zu 80% gegenüber dem Original Preis - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Erhalten Sie dieses Produkt bis zu xx% günstiger als das Original - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                    },
                    'fr': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à 80% sur les prix originaux.</strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Économisez jusqu\'à xx% par rapport au prix original de ce produit. </strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                    },
                    'no': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil 85% mot originalprisen.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                        'product_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Spar opptil xx% mot originalpris på dette produktet.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                    },
                    'es': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta un 85% del precio original, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Ahorre hasta un xx% del precio original de este producto, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                    },
                    'it': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Risparmia fino al 85% rispetto al prezzo dell\'originale. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                        'product_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Risparmia oggi fino al xx% rispetto al prezzo di mercato su questo prodotto. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                    },
                    'pl': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź aż do 85% w stosunku do oryginalnej ceny - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Zaoszczędź aż do xx% w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                    }
                },

                // 10.04
                // 11.04
                // 12.04
                // 13.04
                //
                // 17.04
                // 18.04
                // 19.04
                // 20.04
                'ROW9': { // Row in spreadsheet
                    'en': { // GB, SE, DK
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Up to 80% off the original.&nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Up to xx% off the original price on this product. &nbsp;</strong>-&nbsp;Ends in {days} days {hours} hours {minutes} minutes {seconds} seconds</span></p>',
                    },
                    'nl': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Tot 80% goedkoper dan het origineel.&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;">Tot xx% goedkoper dan de originele prijs van dit product. </strong>&nbsp;-&nbsp;Nog {hours} Uur:{minutes} Min: {seconds} Sec</span></p>',
                    },
                    'de': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Bis zu 80% günstiger als das Original - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: \'Kameron\', serif; color: #000000; line-height: 34px; text-align: center; font-size: large; background-color: #feffc4;"><strong>Bis zu xx% günstiger als das Original - Endet heute in {hours} Stunden {minutes} Minuten</strong></span></p>',
                    },
                    'fr': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Jusqu\'à 80% moins cher que les originaux.</strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: \'book antiqua\', palatino; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Jusqu’à xx% de réduction sur ce produit par rapport à l’original. </strong>Termine dans {days} jours, {hours}h:{minutes}m:{seconds}s</span></p>',
                    },
                    'no': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Opptil 85% av originalen.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                        'product_banner_template': '<p><span style="font-size: medium;"><span style="font-family: arial, helvetica, sans-serif; color: #000000; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Opptil xx%av originalprisen på dette produktet.</strong>&nbsp;-&nbsp;ender om {hours}t :{minutes}m :{seconds}s</span></span></p>',
                    },
                    'es': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Hasta 85% de descuento del diseño original, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Hasta xx% del precio del original de este producto, finaliza en {days} d&iacute;as, {hours}h:{minutes}m:{seconds}s!</strong></span></p>',
                    },
                    'it': {
                        'pct_off': 85,
                        'yellow_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Fino al 85% di risparmio sull\'originale. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                        'product_banner_template': '<p><span style="font-size: small;"><strong style="color: #000000; font-family: arial, helvetica, sans-serif; line-height: 34px; text-align: center; background-color: #feffc4;">Fino al xx% in meno rispetto al prezzo dell\'originale. Scade in {hours}h:{minutes}m:{seconds}s</strong></span></p>',
                    },
                    'pl': {
                        'pct_off': 80,
                        'yellow_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Aż do 85% zniżki od ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                        'product_banner_template': '<p><span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"><strong>Aż do xx% zniżki na ten produkt w stosunku do ceny oryginału - Promocja kończy się za&nbsp;{days}d:{hours}h:{minutes}m:{seconds}s</span></p>',
                    }
                },
            }
        }
    };

    // Some templates are shared across multiple time periods.  Here we map the templates
    // to each time period, and set the relevant countdown_to date.
    exp.vars.augmented_promo_data.time_periods = [
        // Row 4
        {
            'dates': [
                '2015-04-21',
                '2015-04-22',
                '2015-04-23',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW4,
            'countdown_to': (new Date(Date.UTC(2015, 03, 24, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },

        // Row 5
        {
            'dates': [
                '2015-04-07',
                '2015-04-08',
                '2015-04-09',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW5,
            'countdown_to': (new Date(Date.UTC(2015, 03, 10, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
        {
            'dates': [
                '2015-04-14',
                '2015-04-15',
                '2015-04-16',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW5,
            'countdown_to': (new Date(Date.UTC(2015, 03, 17, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },

        // Row 6
        {
            'dates': [
                '2015-03-23',
                '2015-03-24',
                '2015-03-25',
                '2015-03-26',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW6,
            'countdown_to': (new Date(Date.UTC(2015, 02, 27, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
        {
            'dates': [
                '2015-03-31',
                '2015-04-01',
                '2015-04-02',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW6,
            'countdown_to': (new Date(Date.UTC(2015, 03, 03, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
        {
            'dates': [
                '2015-04-28',
                '2015-04-29',
                '2015-04-30',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW6,
            'countdown_to': (new Date(Date.UTC(2015, 04, 01, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },

        // Row 7
        {
            'dates': [
                '2015-04-03',
                '2015-04-04',
                '2015-04-05',
                '2015-04-06',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW7,
            'countdown_to': (new Date(Date.UTC(2015, 03, 07, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },

        // Row 8
        {
            'dates': [
                '2015-03-27',
                '2015-03-28',
                '2015-03-29',
                '2015-03-30',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW8,
            'countdown_to': (new Date(Date.UTC(2015, 02, 31, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
        {
            'dates': [
                '2015-04-24',
                '2015-04-25',
                '2015-04-26',
                '2015-04-27',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW8,
            'countdown_to': (new Date(Date.UTC(2015, 03, 28, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
        {
            'dates': [
                '2015-05-01',
                '2015-05-02',
                '2015-05-03',
                '2015-05-04',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW8,
            'countdown_to': (new Date(Date.UTC(2015, 04, 05, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },

        // Row 9
        {
            'dates': [
                '2015-04-10',
                '2015-04-11',
                '2015-04-12',
                '2015-04-13',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW9,
            'countdown_to': (new Date(Date.UTC(2015, 03, 14, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
        {
            'dates': [
                '2015-04-17',
                '2015-04-18',
                '2015-04-19',
                '2015-04-20',
            ],
            'templates': exp.vars.augmented_promo_data.templates.ROW9,
            'countdown_to': (new Date(Date.UTC(2015, 03, 21, 0, 0, 0))).getTime() // Unix timestamp
                                                                                     // Note: Months are zero-indexed in JS
        },
    ];

    exp.func = {};

    // Get the relevant time period for the given day
    exp.func.getTimePeriodData = function(day) {
        for (var i = 0; i < exp.vars.augmented_promo_data.time_periods.length; i++) {
            if (exp.vars.augmented_promo_data.time_periods[i].dates.indexOf(day) !== -1) {
                return exp.vars.augmented_promo_data.time_periods[i];
            }
        }

        return false;
    };

    /* Checks and returns the country code for the geo site we are on. */
    exp.func.getGeoSite = function(){
        switch (window.location.pathname.substr(0,4)) {
            case "/de/": // Germany
                return 'de';

            case "/no/": // Norway
                return "no";

            case "/fr/": // France
                return "fr";

            case "/nl/": // Netherlands
                return "nl";

            case "/pl/": // Poland
                return "pl";

            case "/es/": // Spain
                return "es";

            case "/it/": // Italy
                return "it";

            case "/uk/": // United Kingdom
                return "uk";

            case "/en/": // Sweden (english strings)
                return "en";

            default:     // Denmark (english strings)
                return "dk";
        }
    };

    exp.func.getTodayDate = function(){
        var now = new Date(),
            now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

        return now_utc.format('yyyy-mm-dd');
    };

    /* Runs all the category page augmenting, is called when the page is loaded
        or udpated via infinite-scrolling. */
    exp.func.fiddleWithCategoryProducts = function(){
        // Fiddle ALL of the products
        $('.products-set li.item').each(function(){
            var $this = $(this);

            // Remove grey crossed out price
            $this.find('p.old-price span.price').hide();

            // Update roundel to note actual %-off
            var old_price = parseFloat($this.find('p.old-price span.price').text().replace(/[^\d]/g, ''), 10),
                current_price = parseFloat($this.find('p.special-price span.price').text().replace(/[^\d]/g, ''), 10),
                actual_pct_off = parseInt(100.0 - (current_price / old_price * 100.0), 10);
            $this.find('.amlabel-txt').text('-' + actual_pct_off + '%');
        });
    };

    /* Checks if we are on the about page */
    exp.func.isAboutPage = function(){
        return $('.cms-about-our-company, .cms-ueber-uns, .cms-mieux-nous-connaitre, \
            .cms-over-het-bedrijf, .cms-o-voga,.cms-sobre-nosotros, .cms-voga-azienda').length > 0;
    };

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
        var geo_site = exp.func.getGeoSite(),
            today = exp.func.getTodayDate(),
            today_data = exp.func.getTimePeriodData(today),
            banner_geo_site = geo_site;

        exp.log("On geosite: " + geo_site + ". Today is: " + today);

        // GB, DK, and en are all the same copy. All are saved as 'en' in the templates group.
        if (banner_geo_site == 'uk' || banner_geo_site == 'dk') {
            banner_geo_site = 'en';
        }

        // Is there a yellow banner? If so update it's copy
        // Are we NOT on the checkout pages?
        if (window.location.href.indexOf("/checkout/") === -1) {
            exp.log("Updating yellow banner");
            var $yellow_banner,
                new_html;

            // Is there a yellow banner? If so use it
            // If not, make our own yellow banner
            if ($('.discount_wrap').length) {
                $yellow_banner = $('.discount_wrap');
            }
            else {
                $yellow_banner = $('<div class="discount_wrap"> \
                    <div class="zblock zblock-discount-countdown"> \
                    </div> \
                    <a class="close" href="#"></a> \
                </div>');
                $('#navb').append($yellow_banner);
            }

            // Are we on a product page, if so use the product-page specific logic for the yellow banner
            if ($('body.catalog-product-view').length > 0) {
                // Calculate actual percent-off for this product
                var old_price = parseFloat($('p.old-price span.price[id$="cloned"]').first().text().replace(/[^\d]/g, ''), 10),
                    current_price = parseFloat($('p.special-price span.price[id$="cloned"]').first().text().replace(/[^\d]/g, ''), 10),
                    actual_pct_off = parseInt(100.0 - (current_price / old_price * 100.0), 10);

                // Update product page copy with actual pct
                new_html = today_data.templates[banner_geo_site].product_banner_template.replace('xx%', actual_pct_off + '%');
            }
            else {
                // Use standard yellow banner template, nothing fancy required.
                new_html = today_data.templates[banner_geo_site].yellow_banner_template;
            }

            // Swap out placeholders for time with actual content
            new_html = new_html.replace('{days}', '<span id="days"></span>');
            new_html = new_html.replace('{hours}', '<span id="hours"></span>');
            new_html = new_html.replace('{minutes}', '<span id="minutes"></span>');
            new_html = new_html.replace('{seconds}', '<span id="seconds"></span>');

            // Update banner copy
            $yellow_banner.find('.zblock').html(new_html);

            // (re)set the timer
            var daysElement = $yellow_banner.find('#days'),
                hoursElement = $yellow_banner.find('#hours'),
                minutesElement = $yellow_banner.find('#minutes'),
                secondsElement = $yellow_banner.find('#seconds'),
                tstamp = today_data.countdown_to;

            $yellow_banner.countdown({
                timestamp: tstamp,
                callback: function (days, hours, minutes, seconds) {
                    if (daysElement.length > 0) {
                        daysElement.html(days);
                    }
                    else {
                        hours += days * 24;
                    }
                    hoursElement.html(hours);
                    minutesElement.html(minutes);
                    secondsElement.html(seconds);
                }
            });
        }
        else {
            exp.log("NOT updating yellow banner (on a checkout page)");
        }

        // Are we on the home page? If so update the banner
        if ($('body.cms-home').length > 0) {
            exp.log("On a home page, updating the promo banner");
            // Update with today's banner for this geo-site.
            var promo_image = exp.vars.home_page_promo_banner_url
                .replace(/_GEOSITE_/g, geo_site)
                .replace(/_DATE_/g, today.replace(/-/g, ''));
            $('#mycarousel img').first().attr('src', promo_image);
        }

        // Are we on a category page? If so, do things to the products listed.
        // ALso handle infinite-scrolling nonsense
        else if ($('body.catalog-category-view').length > 0) {
            exp.log("On a category page, tweaking product listing");
            // Poke the things already on the page
            exp.func.fiddleWithCategoryProducts();

            // Make sure we poke the things loaded via infinite-scrolling
            $('.col-main').on('appear', exp.func.fiddleWithCategoryProducts);
        }

        // Are we on a product page? If so, do things to the product page
        else if ($('body.catalog-product-view').length > 0) {
            exp.log("On a product page, tweaking styling");
            // Remove "Normal price" if there's an "original price" available
            if ($('.product-essential .price-box .original-price').length > 0) {
                $('.product-essential .price-box .old-price').hide();
            }

            // Remove "Normal price" for items in "You may also like" box
            $('.related-products li.item').each(function(){
                var $this = $(this);

                if ($this.find('.price-box .original-price').length > 0) {
                    $this.find('.price-box .old-price').hide();
                }
            });

            // Change colour of "Price for original" to black
            $('.product-essential .price-box .original-price, .product-essential .price-box .original-price .price').css('color', '#000');
        }

        // Are we on the about-us page?
        else if (exp.func.isAboutPage()) {
            exp.log("On the about-us page, updating %-off value");

            $('.col-main table td span,h4.aboutbanners-info-big,.landingbanners-about p').each(function(){
                var $this = $(this);

                if ($this.text().indexOf('90%') !== -1) {
                    $this.text(
                        $this.text().replace('90%', today_data.templates[banner_geo_site].pct_off + '%')
                    );
                }
            });
        }
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);