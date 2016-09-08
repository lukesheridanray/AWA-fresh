function (options) {

// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {

        log: function(str) {
            if(typeof window.console !== 'undefined') {
                console.log(str);
            }
        },

        /**
         * @param {string} code - The product code
         * @return {object|null}
         */
        getByCode: function(code) {

            var results = [];

            $.each(window.AWAPriceData, function(index, value) {
                if(value.c === code) {
                    results.push(value);
                }
            });

            if(results.length > 1) {

                return AWA.filterBestPrice(results);

            } else if(results.length === 1) {

                return results[0];
            }

            return null;

        },

        /**
         * @param {string} code - The product code
         * @return {object|null}
         */
        getPriceByCode: function(code) {

            var result = AWA.getByCode(code);

            if(result === null) {
                return null;
            }

            return result.p;

        },

        /**
         * @param {array} results - An array of entries to filter
         * @return {object}
         */
        filterBestPrice: function(results) {

            var pointer = results[0];

            $.each(results, function(index, value) {
                if(value.u > pointer.u) {
                    pointer = value;
                }
            });

            return pointer;

        },

        /**
         * Function to process the item in the results, checks whether the
         * price is a range, then extracts the product code and uses that
         * to get the new price.
         */
        processItem: function() {

            var $self = $(this),
                $price = $self.find('.sli_grid_price'),
                url = $self.find('h2 a').attr('title'),
                code,
                newPrice;

            if($price.text().indexOf(' - ') === -1) {
                return;
            }

            if(url === undefined) {
                return;
            }

            code = url.match(/\/[A-Za-z0-9]+$/);

            if(code === null) {
                return;
            }

            newPrice = AWA.getPriceByCode(code[0].slice(1).replace('TM',''));

            if(newPrice !== null) {
                $price.text('From ' + newPrice);
            }

        }

    };

    $.ajax({
        type: 'GET',
        url: 'https://s3-eu-west-1.amazonaws.com/qubit-etc/thompsonmorgan/awa/search-results-price-data.js',
        dataType: 'script',
        success: function() {
            AWA.log('AWA - Search results price');
            $('.sli_grid_result').each(AWA.processItem);
            $('.sli_grid_price').css({display: 'block'});
        },
        error: function(response) {
            AWA.log('AWA - Search results price - Could Not Load');
            $('.sli_grid_price').css({display: 'block'});
        }
    });

    // Be sure to remove any existing "Variation CSS", otherwise prices will be permanently hidden.

    var onPricesLoad = function() {
        AWA.log('AWA - Search results price 2 ');


        // When we have price data, modify the site's "jQuery.finishedCall" to
        // augment the displayed prices as per test requirements
        var originalFinishedCall = jQuery.finishedCall;
        jQuery.finishedCall = function(){
            $('.sli_grid_result').each(AWA.processItem);

            originalFinishedCall;
        };

        // Call jQuery.finishedCall, just in case our prices loaded after the
        // search results did -- we want to make sure our augmentations still run
        jQuery.finishedCall();
    };

    $.ajax({
        type: 'GET',
        url: 'https://s3-eu-west-1.amazonaws.com/qubit-etc/thompsonmorgan/awa/search-results-price-data.js',
        dataType: 'script',
        success: onPricesLoad,
        error: function(response) {
            AWA.log('AWA - Search results price - Could Not Load');
        }
    });

})(jQuery);

}
