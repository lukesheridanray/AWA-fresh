/*******************************************************************************
* Proxy experiment; will bucket visitors according to certain conditions:      *
* - If the visitor has come from an ad/email referring to 55% off, they should *
* see the control variation.                                                   *
* - If the visitor has come from an ad/email referring to 85% off, they should *
* see the augmented variation.                                                 *
* - If the visitor has come from neither source, Optimizely will bucket them.  *
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
var voga55vs85_router = (function($) {

    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function (str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    console.log('VOGA 55vs85: Visitor routing script - 0.1');


    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    exp.vars = {
        'main_experiment_id'    : 'TODO', // TODO
        'control_variation_id'  : 'TODO', // TODO
        'augmented_variation_id': 'TODO', // TODO
        'control_promo_values': {
            'dk': {
                '2015-03-16': 55,
                '2015-03-17': 60,
                '2015-03-18': 60,
                '2015-03-19': 60,
                '2015-03-20': 55,
                '2015-03-21': 55,
                '2015-03-22': 55,
                '2015-03-23': 55,
                '2015-03-24': 60,
                '2015-03-25': 60,
                '2015-03-26': 60,
                '2015-03-27': 60,
                '2015-03-28': 60,
                '2015-03-29': 60,
                '2015-03-30': 60,
                '2015-03-31': 70,
                '2015-04-01': 70,
                '2015-04-02': 70,
                '2015-04-03': 70,
                '2015-04-04': 70,
                '2015-04-05': 70,
                '2015-04-06': 70,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'fr': {
                '2015-03-16': 50,
                '2015-03-17': 50,
                '2015-03-18': 50,
                '2015-03-19': 50,
                '2015-03-20': 55,
                '2015-03-21': 55,
                '2015-03-22': 55,
                '2015-03-23': 55,
                '2015-03-24': 50,
                '2015-03-25': 50,
                '2015-03-26': 50,
                '2015-03-27': undefined,
                '2015-03-28': undefined,
                '2015-03-29': undefined,
                '2015-03-30': undefined,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'no': {
                '2015-03-16': 75,
                '2015-03-17': 75,
                '2015-03-18': 75,
                '2015-03-19': 75,
                '2015-03-20': 75,
                '2015-03-21': 75,
                '2015-03-22': 75,
                '2015-03-23': 75,
                '2015-03-24': 75,
                '2015-03-25': 75,
                '2015-03-26': 75,
                '2015-03-27': undefined,
                '2015-03-28': undefined,
                '2015-03-29': undefined,
                '2015-03-30': undefined,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'de': {
                '2015-03-16': 55,
                '2015-03-17': 50,
                '2015-03-18': 50,
                '2015-03-19': 50,
                '2015-03-20': 55,
                '2015-03-21': 55,
                '2015-03-22': 55,
                '2015-03-23': 55,
                '2015-03-24': 50,
                '2015-03-25': 50,
                '2015-03-26': 50,
                '2015-03-27': undefined,
                '2015-03-28': undefined,
                '2015-03-29': undefined,
                '2015-03-30': undefined,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'se': {
                '2015-03-16': 55,
                '2015-03-17': 60,
                '2015-03-18': 60,
                '2015-03-19': 60,
                '2015-03-20': 55,
                '2015-03-21': 55,
                '2015-03-22': 55,
                '2015-03-23': 55,
                '2015-03-24': 60,
                '2015-03-25': 60,
                '2015-03-26': 60,
                '2015-03-27': 60,
                '2015-03-28': 60,
                '2015-03-29': 60,
                '2015-03-30': 60,
                '2015-03-31': 70,
                '2015-04-01': 70,
                '2015-04-02': 70,
                '2015-04-03': 70,
                '2015-04-04': 70,
                '2015-04-05': 70,
                '2015-04-06': 70,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'pl': {
                '2015-03-16': 70,
                '2015-03-17': 70,
                '2015-03-18': 70,
                '2015-03-19': 70,
                '2015-03-20': 75,
                '2015-03-21': 75,
                '2015-03-22': 75,
                '2015-03-23': 75,
                '2015-03-24': 70,
                '2015-03-25': 70,
                '2015-03-26': 70,
                '2015-03-27': 75,
                '2015-03-28': 75,
                '2015-03-29': 75,
                '2015-03-30': 75,
                '2015-03-31': 85,
                '2015-04-01': 85,
                '2015-04-02': 85,
                '2015-04-03': 85,
                '2015-04-04': 85,
                '2015-04-05': 85,
                '2015-04-06': 85,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'it': {
                '2015-03-16': 70,
                '2015-03-17': 60,
                '2015-03-18': 60,
                '2015-03-19': 60,
                '2015-03-20': 70,
                '2015-03-21': 70,
                '2015-03-22': 70,
                '2015-03-23': 70,
                '2015-03-24': 60,
                '2015-03-25': 60,
                '2015-03-26': 60,
                '2015-03-27': 70,
                '2015-03-28': 70,
                '2015-03-29': 70,
                '2015-03-30': 70,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'es': {
                '2015-03-16': 70,
                '2015-03-17': 60,
                '2015-03-18': 60,
                '2015-03-19': 60,
                '2015-03-20': 70,
                '2015-03-21': 70,
                '2015-03-22': 70,
                '2015-03-23': 70,
                '2015-03-24': 60,
                '2015-03-25': 60,
                '2015-03-26': 60,
                '2015-03-27': 70,
                '2015-03-28': 70,
                '2015-03-29': 70,
                '2015-03-30': 70,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'gb': {
                '2015-03-16': 55,
                '2015-03-17': 50,
                '2015-03-18': 50,
                '2015-03-19': 50,
                '2015-03-20': 55,
                '2015-03-21': 55,
                '2015-03-22': 55,
                '2015-03-23': 55,
                '2015-03-24': undefined,
                '2015-03-25': undefined,
                '2015-03-26': undefined,
                '2015-03-27': undefined,
                '2015-03-28': undefined,
                '2015-03-29': undefined,
                '2015-03-30': undefined,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
            'nl': {
                '2015-03-16': 55,
                '2015-03-17': 55,
                '2015-03-18': 55,
                '2015-03-19': 55,
                '2015-03-20': 55,
                '2015-03-21': 55,
                '2015-03-22': 55,
                '2015-03-23': 55,
                '2015-03-24': undefined,
                '2015-03-25': undefined,
                '2015-03-26': undefined,
                '2015-03-27': undefined,
                '2015-03-28': undefined,
                '2015-03-29': undefined,
                '2015-03-30': undefined,
                '2015-03-31': undefined,
                '2015-04-01': undefined,
                '2015-04-02': undefined,
                '2015-04-03': undefined,
                '2015-04-04': undefined,
                '2015-04-05': undefined,
                '2015-04-06': undefined,
                '2015-04-07': undefined,
                '2015-04-08': undefined,
                '2015-04-09': undefined,
                '2015-04-10': undefined,
                '2015-04-11': undefined,
                '2015-04-12': undefined,
                '2015-04-13': undefined,
                '2015-04-14': undefined,
                '2015-04-15': undefined,
                '2015-04-16': undefined,
                '2015-04-17': undefined,
                '2015-04-18': undefined,
                '2015-04-19': undefined,
                '2015-04-20': undefined,
                '2015-04-21': undefined,
                '2015-04-22': undefined,
                '2015-04-23': undefined,
                '2015-04-24': undefined,
                '2015-04-25': undefined,
                '2015-04-26': undefined,
                '2015-04-27': undefined,
            },
        },
        'augmented_promo_values': {
            'dk': {
                '2015-03-16': 80,
                '2015-03-17': 80,
                '2015-03-18': 80,
                '2015-03-19': 80,
                '2015-03-20': 80,
                '2015-03-21': 80,
                '2015-03-22': 80,
                '2015-03-23': 80,
                '2015-03-24': 80,
                '2015-03-25': 80,
                '2015-03-26': 80,
                '2015-03-27': 80,
                '2015-03-28': 80,
                '2015-03-29': 80,
                '2015-03-30': 80,
                '2015-03-31': 80,
                '2015-04-01': 80,
                '2015-04-02': 80,
                '2015-04-03': 80,
                '2015-04-04': 80,
                '2015-04-05': 80,
                '2015-04-06': 80,
                '2015-04-07': 80,
                '2015-04-08': 80,
                '2015-04-09': 80,
                '2015-04-10': 80,
                '2015-04-11': 80,
                '2015-04-12': 80,
                '2015-04-13': 80,
                '2015-04-14': 80,
                '2015-04-15': 80,
                '2015-04-16': 80,
                '2015-04-17': 80,
                '2015-04-18': 80,
                '2015-04-19': 80,
                '2015-04-20': 80,
                '2015-04-21': 80,
                '2015-04-22': 80,
                '2015-04-23': 80,
                '2015-04-24': 80,
                '2015-04-25': 80,
                '2015-04-26': 80,
                '2015-04-27': 80,
            },
            'fr': {
                '2015-03-16': 80,
                '2015-03-17': 80,
                '2015-03-18': 80,
                '2015-03-19': 80,
                '2015-03-20': 80,
                '2015-03-21': 80,
                '2015-03-22': 80,
                '2015-03-23': 80,
                '2015-03-24': 80,
                '2015-03-25': 80,
                '2015-03-26': 80,
                '2015-03-27': 80,
                '2015-03-28': 80,
                '2015-03-29': 80,
                '2015-03-30': 80,
                '2015-03-31': 80,
                '2015-04-01': 80,
                '2015-04-02': 80,
                '2015-04-03': 80,
                '2015-04-04': 80,
                '2015-04-05': 80,
                '2015-04-06': 80,
                '2015-04-07': 80,
                '2015-04-08': 80,
                '2015-04-09': 80,
                '2015-04-10': 80,
                '2015-04-11': 80,
                '2015-04-12': 80,
                '2015-04-13': 80,
                '2015-04-14': 80,
                '2015-04-15': 80,
                '2015-04-16': 80,
                '2015-04-17': 80,
                '2015-04-18': 80,
                '2015-04-19': 80,
                '2015-04-20': 80,
                '2015-04-21': 80,
                '2015-04-22': 80,
                '2015-04-23': 80,
                '2015-04-24': 80,
                '2015-04-25': 80,
                '2015-04-26': 80,
                '2015-04-27': 80,
            },
            'no': {
                '2015-03-16': 85,
                '2015-03-17': 85,
                '2015-03-18': 85,
                '2015-03-19': 85,
                '2015-03-20': 85,
                '2015-03-21': 85,
                '2015-03-22': 85,
                '2015-03-23': 85,
                '2015-03-24': 85,
                '2015-03-25': 85,
                '2015-03-26': 85,
                '2015-03-27': 85,
                '2015-03-28': 85,
                '2015-03-29': 85,
                '2015-03-30': 85,
                '2015-03-31': 85,
                '2015-04-01': 85,
                '2015-04-02': 85,
                '2015-04-03': 85,
                '2015-04-04': 85,
                '2015-04-05': 85,
                '2015-04-06': 85,
                '2015-04-07': 85,
                '2015-04-08': 85,
                '2015-04-09': 85,
                '2015-04-10': 85,
                '2015-04-11': 85,
                '2015-04-12': 85,
                '2015-04-13': 85,
                '2015-04-14': 85,
                '2015-04-15': 85,
                '2015-04-16': 85,
                '2015-04-17': 85,
                '2015-04-18': 85,
                '2015-04-19': 85,
                '2015-04-20': 85,
                '2015-04-21': 85,
                '2015-04-22': 85,
                '2015-04-23': 85,
                '2015-04-24': 85,
                '2015-04-25': 85,
                '2015-04-26': 85,
                '2015-04-27': 85,
            },
            'de': {
                '2015-03-16': 80,
                '2015-03-17': 80,
                '2015-03-18': 80,
                '2015-03-19': 80,
                '2015-03-20': 80,
                '2015-03-21': 80,
                '2015-03-22': 80,
                '2015-03-23': 80,
                '2015-03-24': 80,
                '2015-03-25': 80,
                '2015-03-26': 80,
                '2015-03-27': 80,
                '2015-03-28': 80,
                '2015-03-29': 80,
                '2015-03-30': 80,
                '2015-03-31': 80,
                '2015-04-01': 80,
                '2015-04-02': 80,
                '2015-04-03': 80,
                '2015-04-04': 80,
                '2015-04-05': 80,
                '2015-04-06': 80,
                '2015-04-07': 80,
                '2015-04-08': 80,
                '2015-04-09': 80,
                '2015-04-10': 80,
                '2015-04-11': 80,
                '2015-04-12': 80,
                '2015-04-13': 80,
                '2015-04-14': 80,
                '2015-04-15': 80,
                '2015-04-16': 80,
                '2015-04-17': 80,
                '2015-04-18': 80,
                '2015-04-19': 80,
                '2015-04-20': 80,
                '2015-04-21': 80,
                '2015-04-22': 80,
                '2015-04-23': 80,
                '2015-04-24': 80,
                '2015-04-25': 80,
                '2015-04-26': 80,
                '2015-04-27': 80,
            },
            'se': {
                '2015-03-16': 80,
                '2015-03-17': 80,
                '2015-03-18': 80,
                '2015-03-19': 80,
                '2015-03-20': 80,
                '2015-03-21': 80,
                '2015-03-22': 80,
                '2015-03-23': 80,
                '2015-03-24': 80,
                '2015-03-25': 80,
                '2015-03-26': 80,
                '2015-03-27': 80,
                '2015-03-28': 80,
                '2015-03-29': 80,
                '2015-03-30': 80,
                '2015-03-31': 80,
                '2015-04-01': 80,
                '2015-04-02': 80,
                '2015-04-03': 80,
                '2015-04-04': 80,
                '2015-04-05': 80,
                '2015-04-06': 80,
                '2015-04-07': 80,
                '2015-04-08': 80,
                '2015-04-09': 80,
                '2015-04-10': 85,
                '2015-04-11': 85,
                '2015-04-12': 85,
                '2015-04-13': 85,
                '2015-04-14': 80,
                '2015-04-15': 80,
                '2015-04-16': 80,
                '2015-04-17': 80,
                '2015-04-18': 80,
                '2015-04-19': 80,
                '2015-04-20': 80,
                '2015-04-21': 80,
                '2015-04-22': 80,
                '2015-04-23': 80,
                '2015-04-24': 80,
                '2015-04-25': 80,
                '2015-04-26': 80,
                '2015-04-27': 80,
            },
            'pl': {
                '2015-03-16': 85,
                '2015-03-17': 85,
                '2015-03-18': 85,
                '2015-03-19': 85,
                '2015-03-20': 85,
                '2015-03-21': 85,
                '2015-03-22': 85,
                '2015-03-23': 85,
                '2015-03-24': 85,
                '2015-03-25': 85,
                '2015-03-26': 85,
                '2015-03-27': 85,
                '2015-03-28': 85,
                '2015-03-29': 85,
                '2015-03-30': 85,
                '2015-03-31': 85,
                '2015-04-01': 85,
                '2015-04-02': 85,
                '2015-04-03': 85,
                '2015-04-04': 85,
                '2015-04-05': 85,
                '2015-04-06': 85,
                '2015-04-07': 85,
                '2015-04-08': 85,
                '2015-04-09': 85,
                '2015-04-10': 85,
                '2015-04-11': 85,
                '2015-04-12': 85,
                '2015-04-13': 85,
                '2015-04-14': 85,
                '2015-04-15': 85,
                '2015-04-16': 85,
                '2015-04-17': 85,
                '2015-04-18': 85,
                '2015-04-19': 85,
                '2015-04-20': 85,
                '2015-04-21': 85,
                '2015-04-22': 85,
                '2015-04-23': 85,
                '2015-04-24': 85,
                '2015-04-25': 85,
                '2015-04-26': 85,
                '2015-04-27': 85,
            },
            'it': {
                '2015-03-16': 85,
                '2015-03-17': 85,
                '2015-03-18': 85,
                '2015-03-19': 85,
                '2015-03-20': 85,
                '2015-03-21': 85,
                '2015-03-22': 85,
                '2015-03-23': 85,
                '2015-03-24': 85,
                '2015-03-25': 85,
                '2015-03-26': 85,
                '2015-03-27': 85,
                '2015-03-28': 85,
                '2015-03-29': 85,
                '2015-03-30': 85,
                '2015-03-31': 85,
                '2015-04-01': 85,
                '2015-04-02': 85,
                '2015-04-03': 85,
                '2015-04-04': 85,
                '2015-04-05': 85,
                '2015-04-06': 85,
                '2015-04-07': 85,
                '2015-04-08': 85,
                '2015-04-09': 85,
                '2015-04-10': 85,
                '2015-04-11': 85,
                '2015-04-12': 85,
                '2015-04-13': 85,
                '2015-04-14': 85,
                '2015-04-15': 85,
                '2015-04-16': 85,
                '2015-04-17': 85,
                '2015-04-18': 85,
                '2015-04-19': 85,
                '2015-04-20': 85,
                '2015-04-21': 85,
                '2015-04-22': 85,
                '2015-04-23': 85,
                '2015-04-24': 85,
                '2015-04-25': 85,
                '2015-04-26': 85,
                '2015-04-27': 85,
            },
            'es': {
                '2015-03-16': 85,
                '2015-03-17': 85,
                '2015-03-18': 85,
                '2015-03-19': 85,
                '2015-03-20': 85,
                '2015-03-21': 85,
                '2015-03-22': 85,
                '2015-03-23': 85,
                '2015-03-24': 85,
                '2015-03-25': 85,
                '2015-03-26': 85,
                '2015-03-27': 85,
                '2015-03-28': 85,
                '2015-03-29': 85,
                '2015-03-30': 85,
                '2015-03-31': 85,
                '2015-04-01': 85,
                '2015-04-02': 85,
                '2015-04-03': 85,
                '2015-04-04': 85,
                '2015-04-05': 85,
                '2015-04-06': 85,
                '2015-04-07': 85,
                '2015-04-08': 85,
                '2015-04-09': 85,
                '2015-04-10': 85,
                '2015-04-11': 85,
                '2015-04-12': 85,
                '2015-04-13': 85,
                '2015-04-14': 85,
                '2015-04-15': 85,
                '2015-04-16': 85,
                '2015-04-17': 85,
                '2015-04-18': 85,
                '2015-04-19': 85,
                '2015-04-20': 85,
                '2015-04-21': 85,
                '2015-04-22': 85,
                '2015-04-23': 85,
                '2015-04-24': 85,
                '2015-04-25': 85,
                '2015-04-26': 85,
                '2015-04-27': 85,
            },
            'gb': {
                '2015-03-16': 80,
                '2015-03-17': 80,
                '2015-03-18': 80,
                '2015-03-19': 80,
                '2015-03-20': 80,
                '2015-03-21': 80,
                '2015-03-22': 80,
                '2015-03-23': 80,
                '2015-03-24': 80,
                '2015-03-25': 80,
                '2015-03-26': 80,
                '2015-03-27': 80,
                '2015-03-28': 80,
                '2015-03-29': 80,
                '2015-03-30': 80,
                '2015-03-31': 80,
                '2015-04-01': 80,
                '2015-04-02': 80,
                '2015-04-03': 80,
                '2015-04-04': 80,
                '2015-04-05': 80,
                '2015-04-06': 80,
                '2015-04-07': 80,
                '2015-04-08': 80,
                '2015-04-09': 80,
                '2015-04-10': 80,
                '2015-04-11': 80,
                '2015-04-12': 80,
                '2015-04-13': 80,
                '2015-04-14': 80,
                '2015-04-15': 80,
                '2015-04-16': 80,
                '2015-04-17': 80,
                '2015-04-18': 80,
                '2015-04-19': 80,
                '2015-04-20': 80,
                '2015-04-21': 80,
                '2015-04-22': 80,
                '2015-04-23': 80,
                '2015-04-24': 80,
                '2015-04-25': 80,
                '2015-04-26': 80,
                '2015-04-27': 80,
            },
            'nl': {
                '2015-03-16': 80,
                '2015-03-17': 80,
                '2015-03-18': 80,
                '2015-03-19': 80,
                '2015-03-20': 80,
                '2015-03-21': 80,
                '2015-03-22': 80,
                '2015-03-23': 80,
                '2015-03-24': 80,
                '2015-03-25': 80,
                '2015-03-26': 80,
                '2015-03-27': 80,
                '2015-03-28': 80,
                '2015-03-29': 80,
                '2015-03-30': 80,
                '2015-03-31': 80,
                '2015-04-01': 80,
                '2015-04-02': 80,
                '2015-04-03': 80,
                '2015-04-04': 80,
                '2015-04-05': 80,
                '2015-04-06': 80,
                '2015-04-07': 80,
                '2015-04-08': 80,
                '2015-04-09': 80,
                '2015-04-10': 80,
                '2015-04-11': 80,
                '2015-04-12': 80,
                '2015-04-13': 80,
                '2015-04-14': 80,
                '2015-04-15': 80,
                '2015-04-16': 80,
                '2015-04-17': 80,
                '2015-04-18': 80,
                '2015-04-19': 80,
                '2015-04-20': 80,
                '2015-04-21': 80,
                '2015-04-22': 80,
                '2015-04-23': 80,
                '2015-04-24': 80,
                '2015-04-25': 80,
                '2015-04-26': 80,
                '2015-04-27': 80,
            },
        }
    };

    exp.func = {};

    /* Pulls out data from the browser's query arguments */
    exp.func.queryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

    /* Whether the current visitor is bucketed into the given experiment and variation.
       Only checks if they're in the experiment if variation_id is omitted. */
    exp.func.isVisitorBucketed = function(experiment_id, variation_id){
        if (variation_id === undefined) {
            return window.optimizely.data.state.variationMap[experiment_id] !== undefined;
        }

        return window.optimizely.data.state.variationMap[experiment_id] === variation_id;
    };

    /* Checks the relevant query args and pulls out the mentioned value in the args */
    exp.func.getDiscountValueFromUrl = function(){
        // Is ?dscnt=123 in URL
        if (exp.func.queryString['dscnt'] !== undefined) {
            return exp.func.queryString['dscnt'];
        }
        // Is ?utm_campaign=dscnt123 in URL?
        else if (exp.func.queryString['utm_campaign'] !== undefined &&
            exp.func.queryString['utm_campaign'].indexOf('dscnt') === 0) {
            return exp.func.queryString['utm_campaign']; // .substr('dscnt'.length); // If the value here is dynamic we can substr this prefix away; assuming it's static for now (dscnt55 or dscnt85)
        }

        return false;
    };

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

    /* Does this URL contain the relevant query args to qualify for the control variation? */
    exp.func.hasControlUrl = function(){
        var geo_site = exp.func.getGeoSite(),
            today = exp.func.getTodayDate();

        if (exp.func.getDiscountValueFromUrl() == exp.vars.control_promo_values[geo_site][today] || // Got to match with today's geosites discoutn value, because dscnt=XX is dynamic.
            exp.func.getDiscountValueFromUrl() == 'dscnt55') {  // TODO: Is dscnt55 static or dynamic?  Assuming static for now, if dynamic we can just strip 'dscnt' from URL and use the query above.
            return true;
        }
        return false;
    };

    /* Does this URL contain the relevant query args to qualify for the augmented variation? */
    exp.func.hasAugmentedUrl = function(){
        var geo_site = exp.func.getGeoSite(),
            today = exp.func.getTodayDate();

        if (exp.func.getDiscountValueFromUrl() == exp.vars.augmented_promo_values[geo_site][today] || // Got to match with today's geosites discoutn value, because dscnt=XX is dynamic.
            exp.func.getDiscountValueFromUrl() == 'dscnt85') {  // TODO: Is dscnt55 static or dynamic?  Assuming static for now, if dynamic we can just strip 'dscnt' from URL and use the query above.
            return true;
        }
        return false;
    };

    // Init function
    // Called to run the actual experiment, DOM manipulation, event listeners, etc
    exp.init = function() {

        window.optimizely = window.optimizely || [];

        // Is this visitor already bucketed into the experiment?
        if (exp.func.isVisitorBucketed(exp.vars.main_experiment_id)) {

            // Is visitor following link for CONTROL, but bucketed into AUGMENTED?
            if (exp.func.isVisitorBucketed(exp.vars.main_experiment_id, exp.vars.augmented_variation_id) && exp.func.hasControlUrl()) {
                // Re-bucket visitor into CONTROL
                exp.log("Re-bucketing visitor into CONTROL from AUGMENTED");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.control_variation_id]);
            }
            // Is visitor following link for AUGMENTED, but bucketed into CONTROL?
            else if (exp.func.isVisitorBucketed(exp.vars.main_experiment_id, exp.vars.control_variation_id) && exp.func.hasAugmentedUrl()) {
                // Re-bucket visitor into AUGMENTED
                exp.log("Re-bucketing visitor into AUGMENTED from CONTROL");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.augmented_variation_id]);
            }
            else {
                // No need to re-bucket visitor
                exp.log("No need to re-bucket visitor");
            }
        }
        else {
            // Visitor is not bucketed into experiment

            // Is visitor following link for CONTROL?
            if (exp.func.hasControlUrl()) {
                // Bucket visitor into CONTROL
                exp.log("New visitor, bucketing into CONTROL");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.control_variation_id]);
            }
            // Is visitor following link for AUGMENTED?
            else if (exp.func.hasAugmentedUrl()) {
                // Bucket visitor into AUGMENTED
                exp.log("New visitor, bucketing into AUGMENTED");
                window.optimizely.push(['bucketVisitor', exp.vars.main_experiment_id, exp.vars.augmented_variation_id]);
            }
            else {
                // No need to bucket, let Optimizely handle it
                exp.log("New visitor, no need to bucket into a variation; Optimizely will handle the bucketing.");
            }
        }

        // Activate experiment.  If user hasn't been bucketed, Optimizely will bucket them.
        exp.log("Activating experiment");
        window.optimizely.push(['activate', exp.vars.main_experiment_id]);
    };

    // Run the experiment
    exp.init();

    // Return the experiment object so we can access it later if required
    return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);