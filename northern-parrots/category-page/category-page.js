// Initial changes
$(".stackedlinks").css({"display":"none"});
$("#holder_CENTRE > div:eq(2) > div:eq(0)").css({"display":"none"});
$("#holder_CATEGORY").css({"display":"none"});
$("#crumb").replaceWith("<style type=\"text/css\">#productDataHeader a[href*='NEW ITEMS'],#productDataHeader a[href*='NAME ASCENDING'],#productDataHeader a[href*='NAME DESCENDING'],#productDataFooter a[href*='NEW ITEMS'],#productDataFooter a[href*='NAME ASCENDING'],#productDataFooter a[href*='NAME DESCENDING'] {display: none;}#productDataHeader li a,#productDataFooter li a,#productDataHeader li strong,#productDataFooter li strong{ margin-left: 10px;}#productDataFooter li label strong,#productDataHeader li label strong{ margin-left: 0px !important;}#productDataHeader li.right a,#productDataFooter li.right a{ margin-left: 0;}#BVQASummaryContainer{display:none}</style><p style=\"font-size:2.2em;font-weight:bold;padding:15px 0 20px 0;margin:0;color:#0053A8;\">Quality Parrot toys, chosen with your bird's safety in mind</p><div id=\"crumb\">\n\t\t\t\n<a href=\"http://www.northernparrots.com/page/default/\">Home</a><img src=\"/images/core/breadcrub_arrow.gif\" alt=\"\"><span id=\"firstHighlightedBreadcrumb\"><a href=\"http://www.northernparrots.com/parrot-toys-dept195_pg1/\">Toys</a></span>\n\t\t<span id=\"facetResultsForBreadCrumbs\"></span><span id=\"filterPrice\"></span>\n\n\t\t</div>");

// Function to make further changes, to be reused when sort bar DOM changes
function make_changes() {
    $("#productDataHeader a[href*='NEW ITEMS'],#productDataHeader a[href*='NAME ASCENDING'],#productDataHeader a[href*='NAME DESCENDING'],#productDataFooter a[href*='NEW ITEMS'],#productDataFooter a[href*='NAME ASCENDING'],#productDataFooter a[href*='NAME DESCENDING']").remove();
}
make_changes();

// Function to check for an elements existence 
function wait_for_element(elem, _func, timeout, keepAlive) {
    var intervalTime = 50;
    var timeout = timeout || 8000;
    var keepAlive = keepAlive || false;
    var maxAttempts = timeout / intervalTime;
    var attempts = 0;

    var interval = setInterval(function() {
        if (jQuery(elem).length) {
            if (!keepAlive) {
                clearInterval(interval);
            }
            _func();
        } else  if (attempts > maxAttempts) {
            clearInterval(interval);
        }
        attempts ++;
    }, intervalTime);
}

function update_faq_stats(){
    $("#facetResultsOnListingsPage .header").append("<span style=\"float:right\"><a style=\"text-decoration:underline\" data-bvtrack=\"eventTarget:Question,eName:ReadAll\" onclick=\"if (bvShowContent('QA','9521-en_gb','195','BVQAWidgetID')) {$bv.Event(event).preventDefault()};\" href=\"http://www.northernparrots.com/parrot-toys-dept195_pg1/?test=show#BVQAWidgetID\">Read Toy FAQs</a> <span class=\"faq-stats\"></span></span>");
    $('.faq-stats').html($('.BVQAQuestionAndAnswerCount').html());
    //console.log('update');
}

wait_for_element('.BVQAQuestionAndAnswerCount',update_faq_stats);

// Function to bind to event and trigger changes
function trigger_changes(e) {
    make_changes();
    update_faq_stats();
}

// Event listener to trigger changes again

$("#productDataHeader").click(function(e){
    if( $(e.target).is("a") ) {
        wait_for_element("#productDataHeader a[href*='NEW ITEMS']",trigger_changes);
    }
});

$("#productDataFooter").click(function(e){
    if( $(e.target).is("a") ) {
        wait_for_element("#productDataHeader a[href*='NEW ITEMS']",trigger_changes);
    }
});

console.log('v11');