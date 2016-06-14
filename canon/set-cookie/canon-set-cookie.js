(function() {

    var name = 'canon_personalisation';
    var maxAge = 31536000000; // milliseconds till expiry

    var value = {
        printer: digitalData.page.pageInfo.pageName.slice(20)
    };

    var cookie = name + '=' + encodeURIComponent(JSON.stringify(value)) +
                ';expires=' + new Date(new Date().getTime() + maxAge).toUTCString() +
                ';path=/;domain=.canon.co.uk'

    document.cookie = cookie;

})();
