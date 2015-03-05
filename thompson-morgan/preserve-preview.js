function(cb) {

    if( window.location.hash.indexOf('dev=true') !== -1 ) {
        return false;
    }

    var rememberPreview = function(minutes) {
        var i;
        minutes = minutes || 15;
        if (document.location.href.indexOf("etcForceCreative=") !== -1) {
            var creative = document.location.href.match(/etcForceCreative=([^\&]+)(?=&|$)/g);
            for(i = 0; i < creative.length; i++) {
                creative[i] = creative[i].split('=')[1];
            }
            var date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            document.cookie = "smartserve_preview=true; expires=" + date.toGMTString() + "; path=/";
            document.cookie = "etcForceCreative=[" + creative + "]; expires=" + date.toUTCString() + "; path=/";
        }
    };
    rememberPreview();
  
    var waitForjQuery = function(time) {
        time = time || 50;
        var $ = window.jQuery;
        if($ && $("#product-media").length && $(".product-alternative-images a").length) {
            cb();
        } else {
            setTimeout(function () {
                waitForjQuery(time * 2);
            }, time);
        }
    };
    waitForjQuery();

}