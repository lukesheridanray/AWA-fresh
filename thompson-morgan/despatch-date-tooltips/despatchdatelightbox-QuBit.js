function () {
  var $ = require('jquery');
  var template = [
    '<div class="vm020">',
      '<div class="title">Why can I not receive this plant sooner?</div>',
      '<p>Now is not the most suitable planting time for this plant. It will be delivered direct to your door at just the right time for planting.</p>',
      '<p>At the moment, your plants are being raised by our professional growers so that you will receive the healthiest specimens possible.</p>',
      '<p>Plants sold in traditional outlets (such as garden centres and DIY stores) are selected to look good whilst they are on display. Instead we aim to give you healthy, long-lasting plants for continuous garden performance.</p>',
    '</div>'
  ];

  
  $("#removeTable tbody .dispatch").each(function (i) {
    var $item = $(this);
    if (!vm020.isProductAllowed(i, $item)) {
      return;
    }

    var $banner = $(template.join(""));
    $item
      .append($banner)
      .find(".price")
      .mouseover(function () {
        $banner.fadeIn();
      })
      .mouseout(function () {
        $banner.stop(true, true).fadeOut();
      })
      .css("text-decoration", "underline");
  });
}