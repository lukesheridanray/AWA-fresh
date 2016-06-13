// jshint multistr: true
// jshint jquery: true


(function($) {

    var AWA = {};

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.log('SERP experiment');

    // CSS

    AWA.css = ' \
        #LIKEfacetResults {\
            float: none;\
            width: 100%;\
            border-left: 0;\
        }\
        #sli_resultsSection_wrapper {\
            width: 100%;\
        }\
        #sli_slideController {\
            height: auto !important;\
        }\
        #LIKEfacetResults .sli_grid_result + div[style="clear:both"] {\
            display: none !important;\
        }\
        #LIKEfacetResults .sli_grid_result + div {\
            clear: none !important;\
        }\
        #LIKEfacetResults .sli_grid_result + .awa-grid-clear {\
            clear: both !important;\
        }\
        .awa-grid-next a {\
            width: 180px;\
            height: 180px;\
            display: block;\
            text-align: center;\
            line-height: 180px;\
            border: 1px solid #ccc;\
            background: #eee;\
            font-size: 1.2em;\
            color: #B60718 !important;\
        }\
        .awa-grid-next a:hover,\
        .awa-grid-next a:focus {\
            background: #ececec;\
            text-decoration: underline;\
        }\
        #merchBottomResults,\
        #sli_search_suggestions_footer {\
            clear: both;\
        }\
    ';

    $('head').append('<style type="text/css">'+AWA.css+'</style>');

    // Functions

    // Add more button to end of row, if the row has only 4 items or less
    AWA.addNextButton = function() {

        var $lastRow = $('.awa-grid-clear:last').nextAll('.sli_grid_result');
        var $nextLink = $('.pageselectorlink:contains(Next):eq(0)');

        if($lastRow.length < 5 && $lastRow.length > 0 && $nextLink.length !== 0) {

            $('.awa-grid-clear:last').nextAll('.sli_grid_result').last().after(
                '<div class="sli_grid_result awa-grid-next">\
                    <a href="#">More results &raquo;</a>\
                </div>'
            );

        }

    };

    // Arrange results in 5 columns
    AWA.makeFiveColumns = function() {

        // remove clearing divs
        $('#LIKEfacetResults .sli_grid_result + div[style="clear:both"]').remove();

        // add our own clearing divs after every 5th
        var i = 1;
        $('#LIKEfacetResults .sli_grid_result').each(function() {

            if(i === 5) {
                i = 1;
                $(this).after('<div class="awa-grid-clear"></div>');
            } else {
                i++;
            }

        });

    };

    AWA.waitFor = function(condition, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
            maxAttempts = timeout / intervalTime,
            attempts = 0,
            interval = setInterval(function() {
                if (condition()) {
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

    // DOM stuff

    // remove left column
    $('.QLTwoColumnLeftContent').remove();

    // Arrange results in 5 columns
    AWA.makeFiveColumns();

    // Add next button
    AWA.addNextButton();

    // event listener (delegated) to trigger next link
    $('body').on('click', '.awa-grid-next', function(e) {
        e.preventDefault();
        var nextLink = $('.pageselectorlink:contains(Next):eq(0)').attr('href');
        var nextString = nextLink.slice(42);
        if(typeof $.sliSearch === 'function') {
            $.sliSearch(nextString);
        } else {
            window.location = nextLink;
        }
    });

    // event listener (delegated) to check for new results and do our DOM stuff
    $('body').on('click', '.awa-grid-next,.pageselectorlink', function(e) {

        setTimeout(function() {
            AWA.waitFor(
                function() {
                    return ($.sliSearchingCur === false && $('#LIKEfacetResults .awa-grid-next').length === 0);
                },
                function() {
                    AWA.makeFiveColumns();
                    AWA.addNextButton();
                }
            );
        }, 4000);

    });

})(jQuery); // vwo_$ || optimizely.$
