/**
 * Real Madrid Mens Shirts Experiment
 * @version 0.2
 * @lang Chinese
 */

// Content variables

    var
    ksp_printing_title = '添加姓名和号码',
    ksp_badge_title = '添加徽章',
    ksp_badge_select = '选择徽章',
    top_select_option = '选择球员号码',
    ksp_players_name = '选择球员姓名和号码',
    ksp_your_name = '或输入您自己的姓名和号码',
    ksp_popup_title = '如何在球衣上添加姓名和号码';
    ksp_popup_content = '<p>1. 如您想在球衣上添加姓名和号码，请从“选择球员”下拉框中选择一位皇马球员姓名，或在相应文字框中输入您自己的姓名和号码。</p> \
                        <p class=\"printing_disc\">重要印刷免责声明</p> \
                        <ul> \
                          <li>除非商品本身有质量问题，个性定制商品恕不退款。</li> \
                          <li>若球衣或球裤已印刷， 球员离开球队/球员号码改变，或徽章改变，本公司恕不负责。</li> \
                          <li>请注音，我们的印刷服务只包括拉丁字母，不提供任何特殊字符印刷，如重音符, ç ，ñ 或中文汉字。</li> \
                          <li>所有印刷服务需额外三天发货。</li> \
                          <li>温馨提示：球员号码用于季前赛未必在下季西甲使用。</li> \
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