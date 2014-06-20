/**
 * Real Madrid Mens Shirts Experiment
 * @version 0.2
 * @lang English
 */

// Content variables

    var
    ksp_printing_title = 'ADD a NAME AND NUMBER',
    ksp_badge_title = 'ADD a BADGE',
    ksp_badge_select = 'Select a badge',
    top_select_option = 'Select Squad Member',
    ksp_players_name = 'Choose a PLAYER\'S name &amp; number',
    ksp_your_name = 'OR enter YOUR OWN name &amp; number',
    ksp_popup_title = 'How to add a name and number to your shirt';
    ksp_popup_content = '<p>To add a name and number to your shirt, either select a \
                        Real Madrid player name from the &lsquo;Select Squad Member&rsquo; drop down box or \
                        enter your own name and number in the relevant fields.</p> \
                        <p class=\"printing_disc\">IMPORTANT Printing Disclaimer</p> \
                        <ul> \
                          <li>Items with custom printing cannot be exchanged or refunded unless the product is faulty.</li> \
                          <li>We accept no responsibility once a replica shirt or short has been printed, in the event that \
                          a player leaves the squad and/or his squad number changes, or if the badge changes in the future.</li> \
                          <li>Please be aware that our supplier for lettering does not supply any special characters, such \
                          as accents, ç or ñ.</li> \
                          <li>Please allow an extra 3/5 days for delivery.</li> \
                          <li>Reminder: The squad numbers that will be used on tour are not necessarily the final \
                          squad numbers for the upcoming season.</li> \
                        </ul>';


// Function to reorder the players list alphabetically

function reorderPlayers() {
    var options = $('.heroShirts option');
    var arr = options.map(function(_, o) {
        return {
            t: $(o).text(),
            v: o.value
        };
    }).get();
    arr.sort(function(o1, o2) {
        return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
    });
    options.each(function(i, o) {
        o.value = arr[i].v;
        $(o).text(arr[i].t);
    });
    var top_option = $('option:contains('+top_select_option+')');
    top_option.prependTo( $('.heroShirts') );
    options.each(function() {
        $(this).prop('selected', false);
        $(this).removeAttr('selected');
    });
    top_option.attr('selected','selected');
    top_option.prop('selected', true);
}

// Function to add printing info popup container

function printingInfoContainer() {
    jQuery('<div id="ksp_printing_info" class="popupinfo"> \
                <a class="viewerClose" style="float: right; z-index: 100" href="#" onclick="shadowViewer.hide();return false;"><img alt="close" title="close" src="/stores/realmadrid/artwork/english/interface/close_v1.jpg"></a> \
                <div class="content"> \
                  <p class="printing_popup_title">'+ ksp_popup_title +'</p> \
                  '+ ksp_popup_content +' \
                </div> \
            </div>').appendTo('body');
}

// Function to update printing only elements

function updatePrintingOnly() {
    $(".ksp_printing_title").remove()
    $(".ksp_printing").prepend('<div class="ksp_printing_title">' + ksp_printing_title + ' <a href="#" onclick="shadowViewer.highlight({ \'elementToHighlight\': \'#ksp_printing_info\' });return false;" class="help_icon_viewer">&nbsp;</a></div><p class="ksp_printing_subtitle">' + ksp_players_name + '</p>');
    $("tbody > tr:eq(1)").before("<tr><td colspan=\"2\"><p class=\"ksp_printing_subtitle\">" + ksp_your_name + "</p></td></tr>");
    $(".disclaimerlink").remove();
    $(".ksp_printing").after($(".ksp_printing > div:eq(3)"));
}

// Function to update printing and badge elements

function updatePrintingAndBadges() {
    $(".ksp_printing_title").remove();
    $(".ksp_printing").prepend('<div class="ksp_printing_title">' + ksp_badge_title + '</div><p class="ksp_printing_subtitle">' + ksp_badge_select + '</p>');
    $(".ksp_printing_options").before("<div class=\"ksp_printing_title printing_title_sub\">" + ksp_printing_title + " <a href=\"#\" onclick=\"shadowViewer.highlight({ 'elementToHighlight': '#ksp_printing_info' });return false;\" class=\"help_icon_viewer\">&nbsp;</a></div><p class=\"ksp_printing_subtitle\">" + ksp_players_name + "</p>");
    $(".ksp_printing_options > tbody > tr:eq(1)").before("<tr><td colspan=\"2\"><p class=\"ksp_printing_subtitle\">" + ksp_your_name + "</p></td></tr>");
    $(".disclaimerlink").remove();
    $(".ksp_printing").after($(".ksp_printing > div:eq(5)"));
}

// Init changes

reorderPlayers();

printingInfoContainer()

if( jQuery('.badges').length ) {
    updatePrintingAndBadges();
} else {
    updatePrintingOnly();
}

// Dev

console.log('v18');