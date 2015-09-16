function (cb) {
  
  /* --- Advanced Trigger from QuBit --- */
  require('@qubit/remember-preview')(); // will persist preview mode for short period of time 
  var poller = require('@qubit/poller'); // our poller function
  
  // here our cookie utilities functions 
  var setCookie = function (name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };
  
  var getCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };
  
  // Depends on setCookie
  var removeCookie = function (name) {
    setCookie(name, "", -1);
  };
  
  //
  
  if ( /checkout/i.test(window.location.href) ) { // here you'd set your cookie on your Form page
    //poller(['.giftText'], function() {
      setCookie('hasFiredOnForm', 1, 10);
      cb();
    //});
  } 
  else if ( getCookie('hasFiredOnForm') ) {
    poller(['#gifting-list'], function() { // here you'd check for cookie you've set on the form page
      removeCookie('hasFiredOnForm');  
      cb();
    });
  }
  else if ( /giftoptions/i.test(window.location.href) ) { // here you'd set your cookie on your Form page
    poller(['#gifting-list'], function() {
      setCookie('hasFiredOnForm', 1, 10);
      cb();
    });
  }

}
