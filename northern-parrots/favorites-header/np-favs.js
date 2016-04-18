function NorthernParrotsFavoritesExperiment() {

    // log the version for reference
    console.log( 'live 0.10' );
  
    // segment the visitor
    window['optimizely'].push(['addToSegment', 'northern_parrots__seen_favourites_experiment', 'true']);

    // get URL and check for a sessionID
    var the_url = document.location.href;

    // if the visitor is not a full logged in member return false
    if ( (the_url.match(/(sessionID=)/) === null) && (the_url.match(/(sessionid=)/) === null ) ) {
        return false;
    }

    // make DOM changes
    $("#holder_BASKETHEADER > ul > li:eq(0) > span:eq(0),#holder_BASKETHEADER > ul > li:eq(0) > a:eq(0)").remove();
    $("#holder_BASKETHEADER .seperator:eq(1)").replaceWith("<span class=\"seperator\">|</span> <a class=\"split-test-fav-link\" href=\"http://www.northernparrots.com/page/myfavourites/?sessionID="+qSVariables.slice(10)+"\">My Favourites</a> <span class=\"seperator\">|</span>");

}

// Run the experiment
NorthernParrotsFavoritesExperiment();