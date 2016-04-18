function (cb) {
  
  require("@qubit/remember-preview")(15);
  var waitForjQuery = function (time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
      $.getJSON('https://d1m54pdnjzjnhe.cloudfront.net/thompsonmorgan/awa/productJSONJan2016_01.js.gz', function(data){
        if(data && data.productJSON) {
          productJSON = data.productJSON;
          $(cb);
        }
      });
    } else {
      setTimeout(function () {
        waitForjQuery(time * 2);
      }, time);
    }
  };
  
  waitForjQuery();
  
}