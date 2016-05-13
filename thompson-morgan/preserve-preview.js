function (options, cb) {

  require("@qubit/remember-preview")(15);
  
  var waitForjQuery = function (time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
          $(cb);
    } else {
      setTimeout(function () {
        waitForjQuery(time * 2);
      }, time);
    }
  };
  
  waitForjQuery();
  
}