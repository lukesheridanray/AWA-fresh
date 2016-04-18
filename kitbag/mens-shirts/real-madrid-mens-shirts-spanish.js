/**
 * Real Madrid Mens Shirts Experiment
 * @version 0.2
 * @lang Spanish
 */

// Content variables

    var
    ksp_printing_title = 'AÑADIR un NOMBRE Y NÚMERO',
    ksp_badge_title = 'AÑADE un ESCUDO',
    ksp_badge_select = 'Selecciona un escudo',
    top_select_option = 'Seleccionar jugador de la plantilla',
    ksp_players_name = 'Elige el nombre y número de un JUGADOR',
    ksp_your_name = 'O crea TU PROPIO nombre y número',
    ksp_popup_title = 'Cómo añadir un nombre y un número a tu camiseta';
    ksp_popup_content = '<p>Para añadir un nombre y un número a tu camiseta, selecciona el nombre de un jugador en la casilla desplegable “Seleccionar jugador de la plantilla” o introduce un nombre y un número en los campos correspondientes.</p> \
                        <p class=\"printing_disc\">IMPORTANTE - Condiciones de impresión</p> \
                        <ul> \
                          <li>Los artículos con una impresión personalizada no se pueden cambiar o reembolsar excepto en caso de ser defectuosos.</li> \
                          <li>No aceptamos responsabilidad sobre las camisetas imprimidas, en caso de que un jugador deje la plantilla o que los distintivos y escudos cambien en el future.</li> \
                          <li>Por favor ten en cuenta que nuestro proveedor de letras para la impresión no nos suministra caracteres españoles, como acentos, ç o ñ.</li> \
                          <li>Por favor, prevea de 3 a 5 días extra de entrega para productos personalizados.</li> \
                          <li>Recordatorio: Los números que los jugadores usen durante las giras no necesariamente coinciden con los dorsales definitivos de la siguiente temporada del campeonato de liga.</li> \
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

console.log('v19');