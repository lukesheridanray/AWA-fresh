var vm020 = {
  months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

  blacklist : [
    "Half Hardy Annual Seeds",
    "Hardy Annual Seeds",
    "Perennial &amp; Biennial Seeds",
    "All Vegetable Seeds",
    "Tomato Seeds"
  ],

  isProductAllowed : function(index, $item) {
    var category = window.universal_variable.basket.line_items[index].product.category;
    var matched = false;

    var date = $item.text().match(/By end of ([^\s]+) (\d+)/);
    if (!date) {
      return;
    }

    var currentMonth = vm020.months[new Date().getMonth()];
    var currentYear = new Date().getFullYear();
    var dispatchYear = parseInt(date[2], 10);
    var dispatchMonth = date[1];
    var isSameMonth = dispatchMonth === currentMonth && dispatchYear === currentYear;


    $.map(vm020.blacklist, function (val) {
      if (val.toLowerCase() === category.toLowerCase()) {
        matched = true;
      }
    });

    return !matched && !isSameMonth;
  }

};