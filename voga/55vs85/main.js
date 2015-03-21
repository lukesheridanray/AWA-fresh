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

            // Great Britain
            'UK1': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Save up to 75% off the high street. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Save up to xx% off the high street price on this product. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'UK2': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Save up to 75% against the original price. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Save up to xx% against the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'UK3': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Up to 75% off the original. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Up to xx% off the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'UK4': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Save up to 80% off the high street. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Save up to xx% off the high street price on this product. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'UK5': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Save up to 80% against the original price. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Save up to xx% against the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'UK6': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Up to 80% off the original. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Up to xx% off the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Denmark
            'DK1': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Save up to 75% off the high street. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Save up to xx% off the high street price on this product. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DK2': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Save up to 75% against the original price. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Save up to xx% against the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DK3': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Up to 75% off the original. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Up to xx% off the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DK4': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Save up to 80% off the high street. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Save up to xx% off the high street price on this product. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DK5': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Save up to 80% against the original price. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Save up to xx% against the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DK6': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Up to 80% off the original. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Up to xx% off the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Sweden
            'EN1': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Save up to 75% off the high street. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Save up to xx% off the high street price on this product. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'EN2': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Save up to 75% against the original price. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Save up to xx% against the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'EN3': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Up to 75% off the original. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Up to xx% off the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'EN4': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Save up to 80% off the high street. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Save up to xx% off the high street price on this product. Ends in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'EN5': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Save up to 80% against the original price. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Save up to xx% against the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'EN6': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Up to 80% off the original. Valid for <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'Up to xx% off the original price on this product. Valid for <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // German
            'DE1': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Sparen Sie bis zu 75% gegenüber dem Original Preis. Endet in <span id="days">xx</span> Tagen <span id="hours">xx</span> Stunden',
                'yellow_banner_template_product': 'Sparen Sie bis zu xx% gegenüber dem Original Preis. Endet in <span id="days">xx</span> Tagen <span id="hours">xx</span> Stunden',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DE2': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Sparen Sie bis zu 75% gegenüber dem Original Preis. Endet in <span id="days">xx</span> Tagen <span id="hours">xx</span> Stunden',
                'yellow_banner_template_product': 'Erhalten Sie dieses Produkt bis zu xx% günstiger als das Original. Gültig für <span id="hours">xx</span> Stunden',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DE3': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Bis zu 75% günstiger als das Original. Gültig für <span id="hours">xx</span> Stunden',
                'yellow_banner_template_product': 'Bis zu xx% günstiger als das Original. Gültig für <span id="hours">xx</span> Stunden',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DE4': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Sparen Sie bis zu 80% gegenüber dem Original Preis. Endet in <span id="days">xx</span> Tagen <span id="hours">xx</span> Stunden',
                'yellow_banner_template_product': 'Sparen Sie bis zu xx% gegenüber dem Original Preis. Endet in <span id="days">xx</span> Tagen <span id="hours">xx</span> Stunden',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DE5': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Sparen Sie bis zu 80% gegenüber dem Original Preis. Endet in <span id="days">xx</span> Tagen <span id="hours">xx</span> Stunden',
                'yellow_banner_template_product': 'Erhalten Sie dieses Produkt bis zu xx% günstiger als das Original. Gültig für <span id="hours">xx</span> Stunden',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'DE6': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Bis zu 80% günstiger als das Original. Gültig für <span id="hours">xx</span> Stunden',
                'yellow_banner_template_product': 'Bis zu xx% günstiger als das Original. Gültig für <span id="hours">xx</span> Stunden',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // France
            'FR1': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Économisez jusqu\'à 75% sur les produits des commerces traditionnels. Termine dans <span id="days">xx</span>j <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Économisez jusqu\'à xx% par rapport aux magasins traditionnels sur ce produit  Termine dans <span id="days">xx</span>j <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'FR2': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Économisez jusqu\'à 75% sur les prix originaux. Valable <span id="hours">xx</span> heures',
                'yellow_banner_template_product': 'Économisez jusqu\'à xx% par rapport au prix original de ce produit. Valable pendant <span id="hours">xx</span> heures.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'FR3': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'Jusqu\'à 75% moins cher que les originaux. Valable pour <span id="hours">xx</span> heures',
                'yellow_banner_template_product': 'Jusqu’à xx% de réduction sur ce produit par rapport à l’original. Valable pendant <span id="hours">xx</span> heures',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'FR4': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Économisez jusqu\'à 80% sur les produits des commerces traditionnels. Termine dans <span id="days">xx</span>j <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Économisez jusqu\'à xx% par rapport aux magasins traditionnels sur ce produit  Termine dans <span id="days">xx</span>j <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'FR5': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Économisez jusqu\'à 80% sur les prix originaux. Valable <span id="hours">xx</span> heures',
                'yellow_banner_template_product': 'Économisez jusqu\'à xx% par rapport au prix original de ce produit. Valable pendant <span id="hours">xx</span> heures.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'FR6': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'Jusqu\'à 80% moins cher que les originaux. Valable pour <span id="hours">xx</span> heures',
                'yellow_banner_template_product': 'Jusqu’à xx% de réduction sur ce produit par rapport à l’original. Valable pendant <span id="hours">xx</span> heures',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Norway
            'NO1': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Spar opptil 80% av butikkpris. Ender om <span id="days">xx</span>d <span id="hours">xx</span>t <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Spar opptil xx% av butikkpris på dette produktet. Ender om <span id="days">xx</span>d <span id="hours">xx</span>t <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NO2': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Spar opptil 80% mot originalprisen. Gyldig i <span id="hours">xx</span> timer.',
                'yellow_banner_template_product': 'Spar opptil xx% mot originalpris på dette produktet. Gyldig i <span id="hours">xx</span> timer.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NO3': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Opptil 80% av originalen. Gyldig i <span id="hours">xx</span> timer.',
                'yellow_banner_template_product': 'Opptil xx%av originalprisen på dette produktet. Gyldig i <span id="hours">xx</span> timer.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NO4': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Spar opptil 85% av butikkpris. Ender om <span id="days">xx</span>d <span id="hours">xx</span>t <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Spar opptil xx% av butikkpris på dette produktet. Ender om <span id="days">xx</span>d <span id="hours">xx</span>t <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NO5': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Spar opptil 85% mot originalprisen. Gyldig i <span id="hours">xx</span> timer.',
                'yellow_banner_template_product': 'Spar opptil xx% mot originalpris på dette produktet. Gyldig i <span id="hours">xx</span> timer.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NO6': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Opptil 85% av originalen. Gyldig i <span id="hours">xx</span> timer.',
                'yellow_banner_template_product': 'Opptil xx%av originalprisen på dette produktet. Gyldig i <span id="hours">xx</span> timer.',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Spain
            'ES1': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Ahorre hasta 80% de descuento del precio en tienda. Finaliza en <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Ahorre hasta xx% de descuento del precio en tienda de este producto. Finaliza en <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'ES2': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Ahorre hasta un 80% del precio original. Oferta válida durante <span id="hours">xx</span> horas',
                'yellow_banner_template_product': 'Ahorre hasta un xx% del precio original de este producto. Oferta válida durante <span id="hours">xx</span> horas',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'ES3': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Hasta 80% de descuento del diseño original. Oferta válida durante <span id="hours">xx</span> horas',
                'yellow_banner_template_product': 'Hasta xx% del precio del original de este producto. Oferta válida durante <span id="hours">xx</span> horas',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'ES4': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Ahorre hasta 85% de descuento del precio en tienda. Finaliza en <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Ahorre hasta xx% de descuento del precio en tienda de este producto. Finaliza <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'ES5': { // Weekends
                'pct_off': 85, // TODO
                'yellow_banner_template': 'Ahorre hasta un 85% del precio original. Oferta válida durante <span id="hours">xx</span> horas',
                'yellow_banner_template_product': 'Ahorre hasta un xx% del precio original de este producto. Oferta válida durante <span id="hours">xx</span> horas',
                'countdown_to': 1434672000 * 1000
            },
            'ES6': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Hasta 85% de descuento del diseño original. Oferta válida durante <span id="hours">xx</span> horas',
                'yellow_banner_template_product': 'Hasta xx% del precio del original de este producto. Oferta válida durante <span id="hours">xx</span> horas',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Italy
            'IT1': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Risparmia fino al 80% sul prezzo di mercato. Scade in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Fino al -xx% rispetto al prezzo di mercato su questo prodotto. Scade in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'IT2': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Risparmia fino al 80% rispetto al prezzo dell\'originale. Scade in <span id="hours">xx</span>h',
                'yellow_banner_template_product': 'Risparmia oggi fino al xx% rispetto al prezzo di mercato su questo prodotto. Scade in <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'IT3': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Fino al 80% di risparmio sull\'originale. Scade in <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Fino al xx% in meno rispetto al prezzo dell\'originale. Solo oggi. Scade in <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'IT4': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Risparmia fino al 85% sul prezzo di mercato. Scade in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Fino al -xx% rispetto al prezzo di mercato su questo prodotto. Scade in <span id="days">xx</span>d <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'IT5': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Risparmia fino al 85% rispetto al prezzo dell\'originale. Scade in <span id="hours">xx</span>h',
                'yellow_banner_template_product': 'Risparmia oggi fino al xx% rispetto al prezzo di mercato su questo prodotto. Scade in <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000
            },
            'IT6': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Fino al 85% di risparmio sull\'originale. Scade in <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'Fino al xx% in meno rispetto al prezzo dell\'originale. Solo oggi. Scade in <span id="hours">xx</span>h <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Polish
            'PL1': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Zaoszczędź 80% w stosunku do ceny oryginału. Promocja kończy się za <span id="days">xx</span> dni <span id="hours">xx</span> godziny',
                'yellow_banner_template_product': 'Zaoszczędź aż do xx% na tym produkcie w stosunku do ceny oryginału. Promocja kończy się za <span id="days">xx</span> dni <span id="hours">xx</span> godziny',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'PL2': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Zaoszczędź aż do 80% w stosunku do oryginalnej ceny. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'yellow_banner_template_product': 'Zaoszczędź aż do xx% w stosunku do ceny oryginału. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'PL3': { // Weekdays
                'pct_off': 80,
                'yellow_banner_template': 'Aż do 80% zniżki od ceny oryginału. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'yellow_banner_template_product': 'Aż do xx% zniżki na ten produkt w stosunku do ceny oryginału. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'PL4': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Zaoszczędź 85% w stosunku do ceny oryginału. Promocja kończy się za <span id="days">xx</span> dni <span id="hours">xx</span> godziny',
                'yellow_banner_template_product': 'Zaoszczędź aż do xx% na tym produkcie w stosunku do ceny oryginału. Promocja kończy się za <span id="days">xx</span> dni <span id="hours">xx</span> godziny',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'PL5': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Zaoszczędź aż do 85% w stosunku do oryginalnej ceny. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'yellow_banner_template_product': 'Zaoszczędź aż do xx% w stosunku do ceny oryginału. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'countdown_to': 1434672000 * 1000
            },
            'PL6': { // Weekends
                'pct_off': 85,
                'yellow_banner_template': 'Aż do 85% zniżki od ceny oryginału. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'yellow_banner_template_product': 'Aż do xx% zniżki na ten produkt w stosunku do ceny oryginału. Promocja ważna przez <span id="hours">xx</span> godzin.',
                'countdown_to': 1434672000 * 1000 // TODO
            },

            // Netherlands TODO
            'NL1': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'TODO <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'TODO <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NL2': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'TODO <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'TODO <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NL3': { // Weekdays
                'pct_off': 75,
                'yellow_banner_template': 'TODO <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'TODO <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NL4': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'TODO <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'yellow_banner_template_product': 'TODO <span id="days">xx</span>d <span id="hours">xx</span>h <span id="minutes">xx</span>m <span id="seconds">xx</span>s',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NL5': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'TODO <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'TODO <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
            'NL6': { // Weekends
                'pct_off': 80,
                'yellow_banner_template': 'TODO <span id="hours">xx</span> hours',
                'yellow_banner_template_product': 'TODO <span id="hours">xx</span> hours',
                'countdown_to': 1434672000 * 1000 // TODO
            },
        },
    };
    exp.vars.augmented_promo_data_map = {
        'dk': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.DK1,
            '2015-03-21': exp.vars.augmented_promo_data.DK1,
            '2015-03-22': exp.vars.augmented_promo_data.DK1,
            '2015-03-23': exp.vars.augmented_promo_data.DK1,
            '2015-03-24': exp.vars.augmented_promo_data.DK1,
            '2015-03-25': exp.vars.augmented_promo_data.DK1,
            '2015-03-26': exp.vars.augmented_promo_data.DK1,
            '2015-03-27': exp.vars.augmented_promo_data.DK1,
            '2015-03-28': exp.vars.augmented_promo_data.DK1,
            '2015-03-29': exp.vars.augmented_promo_data.DK1,
            '2015-03-30': exp.vars.augmented_promo_data.DK1,
            '2015-03-31': exp.vars.augmented_promo_data.DK1,
            '2015-04-01': exp.vars.augmented_promo_data.DK1,
            '2015-04-02': exp.vars.augmented_promo_data.DK1,
            '2015-04-03': exp.vars.augmented_promo_data.DK1,
            '2015-04-04': exp.vars.augmented_promo_data.DK1,
            '2015-04-05': exp.vars.augmented_promo_data.DK1,
            '2015-04-06': exp.vars.augmented_promo_data.DK1,
            '2015-04-07': exp.vars.augmented_promo_data.DK1,
            '2015-04-08': exp.vars.augmented_promo_data.DK1,
            '2015-04-09': exp.vars.augmented_promo_data.DK1,
            '2015-04-10': exp.vars.augmented_promo_data.DK1,
            '2015-04-11': exp.vars.augmented_promo_data.DK1,
            '2015-04-12': exp.vars.augmented_promo_data.DK1,
            '2015-04-13': exp.vars.augmented_promo_data.DK1,
            '2015-04-14': exp.vars.augmented_promo_data.DK1,
            '2015-04-15': exp.vars.augmented_promo_data.DK1,
            '2015-04-16': exp.vars.augmented_promo_data.DK1,
            '2015-04-17': exp.vars.augmented_promo_data.DK1,
            '2015-04-18': exp.vars.augmented_promo_data.DK1,
            '2015-04-19': exp.vars.augmented_promo_data.DK1,
            '2015-04-20': exp.vars.augmented_promo_data.DK1,
            '2015-04-21': exp.vars.augmented_promo_data.DK1,
            '2015-04-22': exp.vars.augmented_promo_data.DK1,
            '2015-04-23': exp.vars.augmented_promo_data.DK1,
            '2015-04-24': exp.vars.augmented_promo_data.DK1,
            '2015-04-25': exp.vars.augmented_promo_data.DK1,
            '2015-04-26': exp.vars.augmented_promo_data.DK1,
            '2015-04-27': exp.vars.augmented_promo_data.DK1,
        },
        'fr': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.FR1,
            '2015-03-21': exp.vars.augmented_promo_data.FR1,
            '2015-03-22': exp.vars.augmented_promo_data.FR1,
            '2015-03-23': exp.vars.augmented_promo_data.FR1,
            '2015-03-24': exp.vars.augmented_promo_data.FR1,
            '2015-03-25': exp.vars.augmented_promo_data.FR1,
            '2015-03-26': exp.vars.augmented_promo_data.FR1,
            '2015-03-27': exp.vars.augmented_promo_data.FR1,
            '2015-03-28': exp.vars.augmented_promo_data.FR1,
            '2015-03-29': exp.vars.augmented_promo_data.FR1,
            '2015-03-30': exp.vars.augmented_promo_data.FR1,
            '2015-03-31': exp.vars.augmented_promo_data.FR1,
            '2015-04-01': exp.vars.augmented_promo_data.FR1,
            '2015-04-02': exp.vars.augmented_promo_data.FR1,
            '2015-04-03': exp.vars.augmented_promo_data.FR1,
            '2015-04-04': exp.vars.augmented_promo_data.FR1,
            '2015-04-05': exp.vars.augmented_promo_data.FR1,
            '2015-04-06': exp.vars.augmented_promo_data.FR1,
            '2015-04-07': exp.vars.augmented_promo_data.FR1,
            '2015-04-08': exp.vars.augmented_promo_data.FR1,
            '2015-04-09': exp.vars.augmented_promo_data.FR1,
            '2015-04-10': exp.vars.augmented_promo_data.FR1,
            '2015-04-11': exp.vars.augmented_promo_data.FR1,
            '2015-04-12': exp.vars.augmented_promo_data.FR1,
            '2015-04-13': exp.vars.augmented_promo_data.FR1,
            '2015-04-14': exp.vars.augmented_promo_data.FR1,
            '2015-04-15': exp.vars.augmented_promo_data.FR1,
            '2015-04-16': exp.vars.augmented_promo_data.FR1,
            '2015-04-17': exp.vars.augmented_promo_data.FR1,
            '2015-04-18': exp.vars.augmented_promo_data.FR1,
            '2015-04-19': exp.vars.augmented_promo_data.FR1,
            '2015-04-20': exp.vars.augmented_promo_data.FR1,
            '2015-04-21': exp.vars.augmented_promo_data.FR1,
            '2015-04-22': exp.vars.augmented_promo_data.FR1,
            '2015-04-23': exp.vars.augmented_promo_data.FR1,
            '2015-04-24': exp.vars.augmented_promo_data.FR1,
            '2015-04-25': exp.vars.augmented_promo_data.FR1,
            '2015-04-26': exp.vars.augmented_promo_data.FR1,
            '2015-04-27': exp.vars.augmented_promo_data.FR1,
        },
        'no': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.NO1,
            '2015-03-21': exp.vars.augmented_promo_data.NO1,
            '2015-03-22': exp.vars.augmented_promo_data.NO1,
            '2015-03-23': exp.vars.augmented_promo_data.NO1,
            '2015-03-24': exp.vars.augmented_promo_data.NO1,
            '2015-03-25': exp.vars.augmented_promo_data.NO1,
            '2015-03-26': exp.vars.augmented_promo_data.NO1,
            '2015-03-27': exp.vars.augmented_promo_data.NO1,
            '2015-03-28': exp.vars.augmented_promo_data.NO1,
            '2015-03-29': exp.vars.augmented_promo_data.NO1,
            '2015-03-30': exp.vars.augmented_promo_data.NO1,
            '2015-03-31': exp.vars.augmented_promo_data.NO1,
            '2015-04-01': exp.vars.augmented_promo_data.NO1,
            '2015-04-02': exp.vars.augmented_promo_data.NO1,
            '2015-04-03': exp.vars.augmented_promo_data.NO1,
            '2015-04-04': exp.vars.augmented_promo_data.NO1,
            '2015-04-05': exp.vars.augmented_promo_data.NO1,
            '2015-04-06': exp.vars.augmented_promo_data.NO1,
            '2015-04-07': exp.vars.augmented_promo_data.NO1,
            '2015-04-08': exp.vars.augmented_promo_data.NO1,
            '2015-04-09': exp.vars.augmented_promo_data.NO1,
            '2015-04-10': exp.vars.augmented_promo_data.NO1,
            '2015-04-11': exp.vars.augmented_promo_data.NO1,
            '2015-04-12': exp.vars.augmented_promo_data.NO1,
            '2015-04-13': exp.vars.augmented_promo_data.NO1,
            '2015-04-14': exp.vars.augmented_promo_data.NO1,
            '2015-04-15': exp.vars.augmented_promo_data.NO1,
            '2015-04-16': exp.vars.augmented_promo_data.NO1,
            '2015-04-17': exp.vars.augmented_promo_data.NO1,
            '2015-04-18': exp.vars.augmented_promo_data.NO1,
            '2015-04-19': exp.vars.augmented_promo_data.NO1,
            '2015-04-20': exp.vars.augmented_promo_data.NO1,
            '2015-04-21': exp.vars.augmented_promo_data.NO1,
            '2015-04-22': exp.vars.augmented_promo_data.NO1,
            '2015-04-23': exp.vars.augmented_promo_data.NO1,
            '2015-04-24': exp.vars.augmented_promo_data.NO1,
            '2015-04-25': exp.vars.augmented_promo_data.NO1,
            '2015-04-26': exp.vars.augmented_promo_data.NO1,
            '2015-04-27': exp.vars.augmented_promo_data.NO1,
        },
        'de': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.DE1,
            '2015-03-21': exp.vars.augmented_promo_data.DE1,
            '2015-03-22': exp.vars.augmented_promo_data.DE1,
            '2015-03-23': exp.vars.augmented_promo_data.DE1,
            '2015-03-24': exp.vars.augmented_promo_data.DE1,
            '2015-03-25': exp.vars.augmented_promo_data.DE1,
            '2015-03-26': exp.vars.augmented_promo_data.DE1,
            '2015-03-27': exp.vars.augmented_promo_data.DE1,
            '2015-03-28': exp.vars.augmented_promo_data.DE1,
            '2015-03-29': exp.vars.augmented_promo_data.DE1,
            '2015-03-30': exp.vars.augmented_promo_data.DE1,
            '2015-03-31': exp.vars.augmented_promo_data.DE1,
            '2015-04-01': exp.vars.augmented_promo_data.DE1,
            '2015-04-02': exp.vars.augmented_promo_data.DE1,
            '2015-04-03': exp.vars.augmented_promo_data.DE1,
            '2015-04-04': exp.vars.augmented_promo_data.DE1,
            '2015-04-05': exp.vars.augmented_promo_data.DE1,
            '2015-04-06': exp.vars.augmented_promo_data.DE1,
            '2015-04-07': exp.vars.augmented_promo_data.DE1,
            '2015-04-08': exp.vars.augmented_promo_data.DE1,
            '2015-04-09': exp.vars.augmented_promo_data.DE1,
            '2015-04-10': exp.vars.augmented_promo_data.DE1,
            '2015-04-11': exp.vars.augmented_promo_data.DE1,
            '2015-04-12': exp.vars.augmented_promo_data.DE1,
            '2015-04-13': exp.vars.augmented_promo_data.DE1,
            '2015-04-14': exp.vars.augmented_promo_data.DE1,
            '2015-04-15': exp.vars.augmented_promo_data.DE1,
            '2015-04-16': exp.vars.augmented_promo_data.DE1,
            '2015-04-17': exp.vars.augmented_promo_data.DE1,
            '2015-04-18': exp.vars.augmented_promo_data.DE1,
            '2015-04-19': exp.vars.augmented_promo_data.DE1,
            '2015-04-20': exp.vars.augmented_promo_data.DE1,
            '2015-04-21': exp.vars.augmented_promo_data.DE1,
            '2015-04-22': exp.vars.augmented_promo_data.DE1,
            '2015-04-23': exp.vars.augmented_promo_data.DE1,
            '2015-04-24': exp.vars.augmented_promo_data.DE1,
            '2015-04-25': exp.vars.augmented_promo_data.DE1,
            '2015-04-26': exp.vars.augmented_promo_data.DE1,
            '2015-04-27': exp.vars.augmented_promo_data.DE1,
        },
        'se': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.EN1,
            '2015-03-21': exp.vars.augmented_promo_data.EN1,
            '2015-03-22': exp.vars.augmented_promo_data.EN1,
            '2015-03-23': exp.vars.augmented_promo_data.EN1,
            '2015-03-24': exp.vars.augmented_promo_data.EN1,
            '2015-03-25': exp.vars.augmented_promo_data.EN1,
            '2015-03-26': exp.vars.augmented_promo_data.EN1,
            '2015-03-27': exp.vars.augmented_promo_data.EN1,
            '2015-03-28': exp.vars.augmented_promo_data.EN1,
            '2015-03-29': exp.vars.augmented_promo_data.EN1,
            '2015-03-30': exp.vars.augmented_promo_data.EN1,
            '2015-03-31': exp.vars.augmented_promo_data.EN1,
            '2015-04-01': exp.vars.augmented_promo_data.EN1,
            '2015-04-02': exp.vars.augmented_promo_data.EN1,
            '2015-04-03': exp.vars.augmented_promo_data.EN1,
            '2015-04-04': exp.vars.augmented_promo_data.EN1,
            '2015-04-05': exp.vars.augmented_promo_data.EN1,
            '2015-04-06': exp.vars.augmented_promo_data.EN1,
            '2015-04-07': exp.vars.augmented_promo_data.EN1,
            '2015-04-08': exp.vars.augmented_promo_data.EN1,
            '2015-04-09': exp.vars.augmented_promo_data.EN1,
            '2015-04-10': exp.vars.augmented_promo_data.EN1,
            '2015-04-11': exp.vars.augmented_promo_data.EN1,
            '2015-04-12': exp.vars.augmented_promo_data.EN1,
            '2015-04-13': exp.vars.augmented_promo_data.EN1,
            '2015-04-14': exp.vars.augmented_promo_data.EN1,
            '2015-04-15': exp.vars.augmented_promo_data.EN1,
            '2015-04-16': exp.vars.augmented_promo_data.EN1,
            '2015-04-17': exp.vars.augmented_promo_data.EN1,
            '2015-04-18': exp.vars.augmented_promo_data.EN1,
            '2015-04-19': exp.vars.augmented_promo_data.EN1,
            '2015-04-20': exp.vars.augmented_promo_data.EN1,
            '2015-04-21': exp.vars.augmented_promo_data.EN1,
            '2015-04-22': exp.vars.augmented_promo_data.EN1,
            '2015-04-23': exp.vars.augmented_promo_data.EN1,
            '2015-04-24': exp.vars.augmented_promo_data.EN1,
            '2015-04-25': exp.vars.augmented_promo_data.EN1,
            '2015-04-26': exp.vars.augmented_promo_data.EN1,
            '2015-04-27': exp.vars.augmented_promo_data.EN1,
        },
        'pl': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.PL1,
            '2015-03-21': exp.vars.augmented_promo_data.PL1,
            '2015-03-22': exp.vars.augmented_promo_data.PL1,
            '2015-03-23': exp.vars.augmented_promo_data.PL1,
            '2015-03-24': exp.vars.augmented_promo_data.PL1,
            '2015-03-25': exp.vars.augmented_promo_data.PL1,
            '2015-03-26': exp.vars.augmented_promo_data.PL1,
            '2015-03-27': exp.vars.augmented_promo_data.PL1,
            '2015-03-28': exp.vars.augmented_promo_data.PL1,
            '2015-03-29': exp.vars.augmented_promo_data.PL1,
            '2015-03-30': exp.vars.augmented_promo_data.PL1,
            '2015-03-31': exp.vars.augmented_promo_data.PL1,
            '2015-04-01': exp.vars.augmented_promo_data.PL1,
            '2015-04-02': exp.vars.augmented_promo_data.PL1,
            '2015-04-03': exp.vars.augmented_promo_data.PL1,
            '2015-04-04': exp.vars.augmented_promo_data.PL1,
            '2015-04-05': exp.vars.augmented_promo_data.PL1,
            '2015-04-06': exp.vars.augmented_promo_data.PL1,
            '2015-04-07': exp.vars.augmented_promo_data.PL1,
            '2015-04-08': exp.vars.augmented_promo_data.PL1,
            '2015-04-09': exp.vars.augmented_promo_data.PL1,
            '2015-04-10': exp.vars.augmented_promo_data.PL1,
            '2015-04-11': exp.vars.augmented_promo_data.PL1,
            '2015-04-12': exp.vars.augmented_promo_data.PL1,
            '2015-04-13': exp.vars.augmented_promo_data.PL1,
            '2015-04-14': exp.vars.augmented_promo_data.PL1,
            '2015-04-15': exp.vars.augmented_promo_data.PL1,
            '2015-04-16': exp.vars.augmented_promo_data.PL1,
            '2015-04-17': exp.vars.augmented_promo_data.PL1,
            '2015-04-18': exp.vars.augmented_promo_data.PL1,
            '2015-04-19': exp.vars.augmented_promo_data.PL1,
            '2015-04-20': exp.vars.augmented_promo_data.PL1,
            '2015-04-21': exp.vars.augmented_promo_data.PL1,
            '2015-04-22': exp.vars.augmented_promo_data.PL1,
            '2015-04-23': exp.vars.augmented_promo_data.PL1,
            '2015-04-24': exp.vars.augmented_promo_data.PL1,
            '2015-04-25': exp.vars.augmented_promo_data.PL1,
            '2015-04-26': exp.vars.augmented_promo_data.PL1,
            '2015-04-27': exp.vars.augmented_promo_data.PL1,
        },
        'it': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.IT1,
            '2015-03-21': exp.vars.augmented_promo_data.IT1,
            '2015-03-22': exp.vars.augmented_promo_data.IT1,
            '2015-03-23': exp.vars.augmented_promo_data.IT1,
            '2015-03-24': exp.vars.augmented_promo_data.IT1,
            '2015-03-25': exp.vars.augmented_promo_data.IT1,
            '2015-03-26': exp.vars.augmented_promo_data.IT1,
            '2015-03-27': exp.vars.augmented_promo_data.IT1,
            '2015-03-28': exp.vars.augmented_promo_data.IT1,
            '2015-03-29': exp.vars.augmented_promo_data.IT1,
            '2015-03-30': exp.vars.augmented_promo_data.IT1,
            '2015-03-31': exp.vars.augmented_promo_data.IT1,
            '2015-04-01': exp.vars.augmented_promo_data.IT1,
            '2015-04-02': exp.vars.augmented_promo_data.IT1,
            '2015-04-03': exp.vars.augmented_promo_data.IT1,
            '2015-04-04': exp.vars.augmented_promo_data.IT1,
            '2015-04-05': exp.vars.augmented_promo_data.IT1,
            '2015-04-06': exp.vars.augmented_promo_data.IT1,
            '2015-04-07': exp.vars.augmented_promo_data.IT1,
            '2015-04-08': exp.vars.augmented_promo_data.IT1,
            '2015-04-09': exp.vars.augmented_promo_data.IT1,
            '2015-04-10': exp.vars.augmented_promo_data.IT1,
            '2015-04-11': exp.vars.augmented_promo_data.IT1,
            '2015-04-12': exp.vars.augmented_promo_data.IT1,
            '2015-04-13': exp.vars.augmented_promo_data.IT1,
            '2015-04-14': exp.vars.augmented_promo_data.IT1,
            '2015-04-15': exp.vars.augmented_promo_data.IT1,
            '2015-04-16': exp.vars.augmented_promo_data.IT1,
            '2015-04-17': exp.vars.augmented_promo_data.IT1,
            '2015-04-18': exp.vars.augmented_promo_data.IT1,
            '2015-04-19': exp.vars.augmented_promo_data.IT1,
            '2015-04-20': exp.vars.augmented_promo_data.IT1,
            '2015-04-21': exp.vars.augmented_promo_data.IT1,
            '2015-04-22': exp.vars.augmented_promo_data.IT1,
            '2015-04-23': exp.vars.augmented_promo_data.IT1,
            '2015-04-24': exp.vars.augmented_promo_data.IT1,
            '2015-04-25': exp.vars.augmented_promo_data.IT1,
            '2015-04-26': exp.vars.augmented_promo_data.IT1,
            '2015-04-27': exp.vars.augmented_promo_data.IT1,
        },
        'es': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.ES1,
            '2015-03-21': exp.vars.augmented_promo_data.ES1,
            '2015-03-22': exp.vars.augmented_promo_data.ES1,
            '2015-03-23': exp.vars.augmented_promo_data.ES1,
            '2015-03-24': exp.vars.augmented_promo_data.ES1,
            '2015-03-25': exp.vars.augmented_promo_data.ES1,
            '2015-03-26': exp.vars.augmented_promo_data.ES1,
            '2015-03-27': exp.vars.augmented_promo_data.ES1,
            '2015-03-28': exp.vars.augmented_promo_data.ES1,
            '2015-03-29': exp.vars.augmented_promo_data.ES1,
            '2015-03-30': exp.vars.augmented_promo_data.ES1,
            '2015-03-31': exp.vars.augmented_promo_data.ES1,
            '2015-04-01': exp.vars.augmented_promo_data.ES1,
            '2015-04-02': exp.vars.augmented_promo_data.ES1,
            '2015-04-03': exp.vars.augmented_promo_data.ES1,
            '2015-04-04': exp.vars.augmented_promo_data.ES1,
            '2015-04-05': exp.vars.augmented_promo_data.ES1,
            '2015-04-06': exp.vars.augmented_promo_data.ES1,
            '2015-04-07': exp.vars.augmented_promo_data.ES1,
            '2015-04-08': exp.vars.augmented_promo_data.ES1,
            '2015-04-09': exp.vars.augmented_promo_data.ES1,
            '2015-04-10': exp.vars.augmented_promo_data.ES1,
            '2015-04-11': exp.vars.augmented_promo_data.ES1,
            '2015-04-12': exp.vars.augmented_promo_data.ES1,
            '2015-04-13': exp.vars.augmented_promo_data.ES1,
            '2015-04-14': exp.vars.augmented_promo_data.ES1,
            '2015-04-15': exp.vars.augmented_promo_data.ES1,
            '2015-04-16': exp.vars.augmented_promo_data.ES1,
            '2015-04-17': exp.vars.augmented_promo_data.ES1,
            '2015-04-18': exp.vars.augmented_promo_data.ES1,
            '2015-04-19': exp.vars.augmented_promo_data.ES1,
            '2015-04-20': exp.vars.augmented_promo_data.ES1,
            '2015-04-21': exp.vars.augmented_promo_data.ES1,
            '2015-04-22': exp.vars.augmented_promo_data.ES1,
            '2015-04-23': exp.vars.augmented_promo_data.ES1,
            '2015-04-24': exp.vars.augmented_promo_data.ES1,
            '2015-04-25': exp.vars.augmented_promo_data.ES1,
            '2015-04-26': exp.vars.augmented_promo_data.ES1,
            '2015-04-27': exp.vars.augmented_promo_data.ES1,
        },
        'gb': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.UK1,
            '2015-03-21': exp.vars.augmented_promo_data.UK1,
            '2015-03-22': exp.vars.augmented_promo_data.UK1,
            '2015-03-23': exp.vars.augmented_promo_data.UK1,
            '2015-03-24': exp.vars.augmented_promo_data.UK1,
            '2015-03-25': exp.vars.augmented_promo_data.UK1,
            '2015-03-26': exp.vars.augmented_promo_data.UK1,
            '2015-03-27': exp.vars.augmented_promo_data.UK1,
            '2015-03-28': exp.vars.augmented_promo_data.UK1,
            '2015-03-29': exp.vars.augmented_promo_data.UK1,
            '2015-03-30': exp.vars.augmented_promo_data.UK1,
            '2015-03-31': exp.vars.augmented_promo_data.UK1,
            '2015-04-01': exp.vars.augmented_promo_data.UK1,
            '2015-04-02': exp.vars.augmented_promo_data.UK1,
            '2015-04-03': exp.vars.augmented_promo_data.UK1,
            '2015-04-04': exp.vars.augmented_promo_data.UK1,
            '2015-04-05': exp.vars.augmented_promo_data.UK1,
            '2015-04-06': exp.vars.augmented_promo_data.UK1,
            '2015-04-07': exp.vars.augmented_promo_data.UK1,
            '2015-04-08': exp.vars.augmented_promo_data.UK1,
            '2015-04-09': exp.vars.augmented_promo_data.UK1,
            '2015-04-10': exp.vars.augmented_promo_data.UK1,
            '2015-04-11': exp.vars.augmented_promo_data.UK1,
            '2015-04-12': exp.vars.augmented_promo_data.UK1,
            '2015-04-13': exp.vars.augmented_promo_data.UK1,
            '2015-04-14': exp.vars.augmented_promo_data.UK1,
            '2015-04-15': exp.vars.augmented_promo_data.UK1,
            '2015-04-16': exp.vars.augmented_promo_data.UK1,
            '2015-04-17': exp.vars.augmented_promo_data.UK1,
            '2015-04-18': exp.vars.augmented_promo_data.UK1,
            '2015-04-19': exp.vars.augmented_promo_data.UK1,
            '2015-04-20': exp.vars.augmented_promo_data.UK1,
            '2015-04-21': exp.vars.augmented_promo_data.UK1,
            '2015-04-22': exp.vars.augmented_promo_data.UK1,
            '2015-04-23': exp.vars.augmented_promo_data.UK1,
            '2015-04-24': exp.vars.augmented_promo_data.UK1,
            '2015-04-25': exp.vars.augmented_promo_data.UK1,
            '2015-04-26': exp.vars.augmented_promo_data.UK1,
            '2015-04-27': exp.vars.augmented_promo_data.UK1,
        },
        'nl': { // TODO
            '2015-03-20': exp.vars.augmented_promo_data.NL1,
            '2015-03-21': exp.vars.augmented_promo_data.NL1,
            '2015-03-22': exp.vars.augmented_promo_data.NL1,
            '2015-03-23': exp.vars.augmented_promo_data.NL1,
            '2015-03-24': exp.vars.augmented_promo_data.NL1,
            '2015-03-25': exp.vars.augmented_promo_data.NL1,
            '2015-03-26': exp.vars.augmented_promo_data.NL1,
            '2015-03-27': exp.vars.augmented_promo_data.NL1,
            '2015-03-28': exp.vars.augmented_promo_data.NL1,
            '2015-03-29': exp.vars.augmented_promo_data.NL1,
            '2015-03-30': exp.vars.augmented_promo_data.NL1,
            '2015-03-31': exp.vars.augmented_promo_data.NL1,
            '2015-04-01': exp.vars.augmented_promo_data.NL1,
            '2015-04-02': exp.vars.augmented_promo_data.NL1,
            '2015-04-03': exp.vars.augmented_promo_data.NL1,
            '2015-04-04': exp.vars.augmented_promo_data.NL1,
            '2015-04-05': exp.vars.augmented_promo_data.NL1,
            '2015-04-06': exp.vars.augmented_promo_data.NL1,
            '2015-04-07': exp.vars.augmented_promo_data.NL1,
            '2015-04-08': exp.vars.augmented_promo_data.NL1,
            '2015-04-09': exp.vars.augmented_promo_data.NL1,
            '2015-04-10': exp.vars.augmented_promo_data.NL1,
            '2015-04-11': exp.vars.augmented_promo_data.NL1,
            '2015-04-12': exp.vars.augmented_promo_data.NL1,
            '2015-04-13': exp.vars.augmented_promo_data.NL1,
            '2015-04-14': exp.vars.augmented_promo_data.NL1,
            '2015-04-15': exp.vars.augmented_promo_data.NL1,
            '2015-04-16': exp.vars.augmented_promo_data.NL1,
            '2015-04-17': exp.vars.augmented_promo_data.NL1,
            '2015-04-18': exp.vars.augmented_promo_data.NL1,
            '2015-04-19': exp.vars.augmented_promo_data.NL1,
            '2015-04-20': exp.vars.augmented_promo_data.NL1,
            '2015-04-21': exp.vars.augmented_promo_data.NL1,
            '2015-04-22': exp.vars.augmented_promo_data.NL1,
            '2015-04-23': exp.vars.augmented_promo_data.NL1,
            '2015-04-24': exp.vars.augmented_promo_data.NL1,
            '2015-04-25': exp.vars.augmented_promo_data.NL1,
            '2015-04-26': exp.vars.augmented_promo_data.NL1,
            '2015-04-27': exp.vars.augmented_promo_data.NL1,
        }
    };

    exp.func = {};

    /* Checks and returns the country code for the geo site we are on. */
    exp.func.getGeoSite = function(){
        switch (window.location.pathname.substr(0,4)) {
            case "/de/": // Germany
                return 'de';

            case "/se/": // Sweden
                return "se";

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
                return "gb";

            case "/en/": // Sweden (english strings)
                return "se";

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

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {
        var geo_site = exp.func.getGeoSite(),
            today = exp.func.getTodayDate(),
            today_data = exp.vars.augmented_promo_data_map[geo_site][today];

        exp.log("On geosite: " + geo_site + ". Today is: " + today);

        // Is there a yellow banner? If so update it's copy
        // Are we NOT on the checkout pages?
        if (window.location.href.indexOf("/checkout/") === -1) {
            exp.log("Updating yellow banner");
            var $yellow_banner;

            // Is there a yellow banner? If so use it
            // If not, make our own yellow banner
            if ($('.discount_wrap').length) {
                $yellow_banner = $('.discount_wrap');
            }
            else {
                $yellow_banner = $('<div class="discount_wrap"> \
                    <div class="zblock zblock-discount-countdown"> \
                        <p> \
                            <span style="font-family: arial, helvetica, sans-serif; color: #000000; font-size: medium; line-height: 34px; text-align: center; background-color: #feffc4;"> \
                            </span> \
                        </p> \
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

                // Update with today's copy for this geo-site
                $yellow_banner.find('.zblock > p > span').html(today_data.yellow_banner_template_product.replace('xx%', actual_pct_off + '%'));

                // (re)set the timer
                var daysElement = $yellow_banner.find('#days'),
                    hoursElement = $yellow_banner.find('#hours'),
                    minutesElement = $yellow_banner.find('#minutes'),
                    secondsElement = $yellow_banner.find('#seconds'),
                    tstamp = today_data.countdown_to;

                $yellow_banner.countdown({
                    timestamp: tstamp,
                    callback: function (days, hours, minutes, seconds) {
                        daysElement.html(days);
                        hoursElement.html(hours);
                        minutesElement.html(minutes);
                        secondsElement.html(seconds);
                    }
                });
            }
            else {
                // Update with today's copy for this geo-site
                $yellow_banner.find('.zblock > p > span').html(today_data.yellow_banner_template);

                // (re)set the timer
                var daysElement = $yellow_banner.find('#days'),
                    hoursElement = $yellow_banner.find('#hours'),
                    minutesElement = $yellow_banner.find('#minutes'),
                    secondsElement = $yellow_banner.find('#seconds'),
                    tstamp = today_data.countdown_to;

                $yellow_banner.countdown({
                    timestamp: tstamp,
                    callback: function (days, hours, minutes, seconds) {
                        daysElement.html(days);
                        hoursElement.html(hours);
                        minutesElement.html(minutes);
                        secondsElement.html(seconds);
                    }
                });
            }
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
        else if (false) { // TODO
            exp.log("On the about-us page, updating %-off value");
            // Show % off for this geo-site today.
        }
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);