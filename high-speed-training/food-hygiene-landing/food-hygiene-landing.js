// jshint multistr: true
// jshint strict: true

(function($) {

    'use strict';

    var AWA = {};

    // Simple cookie framework by Mozilla
    var docCookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,n,o,t,c,r){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(o)switch(o.constructor){case Number:s=o===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+o;break;case String:s="; expires="+o;break;case Date:s="; expires="+o.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+s+(c?"; domain="+c:"")+(t?"; path="+t:"")+(r?"; secure":""),!0},removeItem:function(e,n,o){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:"")+(n?"; path="+n:""),!0):!1},hasItem:function(e){return e?new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie):!1},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=e.length,o=0;n>o;o++)e[o]=decodeURIComponent(e[o]);return e}};
    var cookieName = 'awa_user_temp';

    // Logging

    AWA.log = function(str) {
        if(typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    AWA.log('AWA - Food Hygiene Landing Page - 0.3');

    // This is the register demo form, just prefill our email address
    if(document.location.pathname === '/registerdemo.aspx') {

        var email = docCookies.getItem(cookieName);

/*
        var email = window.location.search.slice(12);
            email = email.slice(0, email.indexOf('&qw='));
*/

        var field = document.getElementById('tb_Email');

        if(email && field) {
            field.value = decodeURIComponent(email);
            docCookies.removeItem(cookieName,'/');
        }

        return;

    }

    // Variables

    AWA.var = {
        level1: {
            url: '/food-hygiene/choose-level-1.aspx',
            price: '£15 +VAT'
        },
        level2: {
            url: '/food-hygiene/choose-level-2-version.aspx',
            price: '£20 +VAT'
        },
        level3: {
            url: '/food-hygiene/choose-level-3-version.aspx',
            price: '£125 +VAT'
        },
        demoLinks: {
            level1 : '/registerdemo.aspx?qw=EngxVM%2fsYuK%2fMTj7l9imMdbFi5xtVJvKXOH4Nb015UITNAud3tCx9LEJuBVwuea7ZBoUXZiEaYo%3d',
            level2catering : '/registerdemo.aspx?qw=EngxVM%2fsYuLiQZCQKCWlOa2SiksRoKpLQ2Lqng%2bZP4GGpaOzLupXwM0CQSzy5iXjJ6%2fzNLTnbNg%3d',
            level2retail : '/registerdemo.aspx?qw=EngxVM%2fsYuI4nu2Qjd7KisW%2bhk5rjN8a%2bO%2fG4SqPz7xoxS0oa1aMHd6GzaZt0m8ClVfCR5n3ezA%3d',
            level2manufacturing : '/registerdemo.aspx?qw=EngxVM%2fsYuJ20Xd%2bH1VnP07%2bcehXVwB8DGTNYjnXnZ0iADKWVT%2b%2fAgr%2f0eLqqlzHE%2fLoan0vQXo%3d',
            level3catering : '/registerdemo.aspx?qw=EngxVM%2fsYuIeCCq1ZG0xSB0%2bL%2bE9gCPozk4a7gUicf6QaWWgvXhvm4myI5pDpvZMZz%2buzD8V1aA%3d',
            level3retail : '/registerdemo.aspx?qw=EngxVM%2fsYuIigZndxrGzrUc0etO2UJ6aeGWX4vgWVUzOiD0PL2S6FUwxO6T3krpY8J0I%2b8r3M4M%3d',
            level3manufacturing : '/registerdemo.aspx?qw=EngxVM%2fsYuIiFCZQfZntuWvMO3oUo7iPIHvGuu7rSMoHEmIb%2biESTOPaGaql%2bpaPTlYM%2bn82g5E%3d'
        },
        images: {
            mostPopular: '//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/62dd50942ab9ad4ee1ee843cefd06c32_awa-most-popular.png',
            stars: '//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/55427417a6ecd7c2da6e16035d12dca7_awa-stars.png',
            reviewWidget: '//useruploads.visualwebsiteoptimizer.com/useruploads/177734/images/f3c8ae77604aa9a61ea9fa437bed4660_awa-review-widget.png'
        }
    };

    // Functions

    AWA.func = {};

    // Polyfill the placeholder attribute
    // based on Jamie's 5 year old jQuery polyfill
    AWA.func.polyfillPlaceholder = function() {

        if('placeholder' in document.createElement('input')) {
            //return;
        }

        $('[placeholder]').each(function() {
            
            var $self = $(this);
            var placeholderVal = $self.attr('placeholder');
                
            // If input value is empty insert placeholder text and add placeholder class
            if( !this.value ) {
                $self
                    .attr('value', placeholderVal)
                    .addClass('placeholder');
            }
            
            $self.focus(function() {
                if( this.value == placeholderVal ) {
                    $self
                        .attr('value', '')
                        .removeClass('placeholder');
                }
            }).blur(function() {
                if( !this.value ) {
                    $self
                        .attr('value', placeholderVal)
                        .addClass('placeholder');
                }
            });
                
            $self.parent('form').submit(function() {
                $self.find('[placeholder]').each(function() {
                    if( this.value == placeholderVal ) {
                        $self.attr('value', '');
                    }
                });
            });
            
        });

    };

    // Go to demo
    AWA.func.goToDemo = function() {

        var course = AWA.var.demoLinks[ $('#awa-course').val() ];
        var email = encodeURIComponent($('#awa-email').val());

        docCookies.setItem(cookieName, email, null, '/');

        document.location = course;
        //document.location = course.replace('?qw=', '?user_email='+email+'&qw=');

    };

    // CSS

    AWA.fancyboxCSS = '.fancybox-wrap,.fancybox-skin,.fancybox-outer,.fancybox-inner,.fancybox-image,.fancybox-wrap iframe,.fancybox-wrap object,.fancybox-nav,.fancybox-nav span,.fancybox-tmp{padding:0;margin:0;border:0;outline:none;vertical-align:top}.fancybox-wrap{position:absolute;top:0;left:0;z-index:8020}.fancybox-skin{position:relative;background:#f9f9f9;color:#444;text-shadow:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.fancybox-opened{z-index:8030}.fancybox-opened .fancybox-skin{-webkit-box-shadow:0 10px 25px rgba(0,0,0,.5);-moz-box-shadow:0 10px 25px rgba(0,0,0,.5);box-shadow:0 10px 25px rgba(0,0,0,.5)}.fancybox-outer,.fancybox-inner{position:relative}.fancybox-inner{overflow:hidden}.fancybox-type-iframe .fancybox-inner{-webkit-overflow-scrolling:touch}.fancybox-error{color:#444;font:14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;margin:0;padding:15px;white-space:nowrap}.fancybox-image,.fancybox-iframe{display:block;width:100%;height:100%}.fancybox-image{max-width:100%;max-height:100%}#fancybox-loading,.fancybox-close,.fancybox-prev span,.fancybox-next span{background-image:url(/assets/images/fancybox_sprite.png)}#fancybox-loading{position:fixed;top:50%;left:50%;margin-top:-22px;margin-left:-22px;background-position:0 -108px;opacity:.8;cursor:pointer;z-index:8060}#fancybox-loading div{width:44px;height:44px;background:url(/assets/images/fancybox_loading.gif) center center no-repeat}.fancybox-close{position:absolute;top:-18px;right:-18px;width:36px;height:36px;cursor:pointer;z-index:8040}.fancybox-nav{position:absolute;top:0;width:40%;height:100%;cursor:pointer;text-decoration:none;background:transparent url(/assets/images/blank.gif);-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:8040}.fancybox-prev{left:0}.fancybox-next{right:0}.fancybox-nav span{position:absolute;top:50%;width:36px;height:34px;margin-top:-18px;cursor:pointer;z-index:8040;visibility:hidden}.fancybox-prev span{left:10px;background-position:0 -36px}.fancybox-next span{right:10px;background-position:0 -72px}.fancybox-nav:hover span{visibility:visible}.fancybox-tmp{position:absolute;top:-99999px;left:-99999px;visibility:hidden;max-width:99999px;max-height:99999px;overflow:visible!important}.fancybox-lock{overflow:hidden!important;width:auto}.fancybox-lock body{overflow:hidden!important}.fancybox-lock-test{overflow-y:hidden!important}.fancybox-overlay{position:absolute;top:0;left:0;overflow:hidden;display:none;z-index:8010;background:url(/assets/images/fancybox_overlay.png)}.fancybox-overlay-fixed{position:fixed;bottom:0;right:0}.fancybox-lock .fancybox-overlay{overflow:auto;overflow-y:scroll}.fancybox-title{visibility:hidden;font:normal 13px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;position:relative;text-shadow:none;z-index:8050}.fancybox-opened .fancybox-title{visibility:visible}.fancybox-title-float-wrap{position:absolute;bottom:0;right:50%;margin-bottom:-35px;z-index:8050;text-align:center}.fancybox-title-float-wrap .child{display:inline-block;margin-right:-100%;padding:2px 20px;background:transparent;background:rgba(0,0,0,.8);-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;text-shadow:0 1px 2px #222;color:#fff;font-weight:700;line-height:24px;white-space:nowrap}.fancybox-title-outside-wrap{position:relative;margin-top:10px;color:#fff}.fancybox-title-inside-wrap{padding-top:10px}.fancybox-title-over-wrap{position:absolute;bottom:0;left:0;color:#fff;padding:10px;background:#000;background:rgba(0,0,0,.8)}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-device-pixel-ratio:1.5){#fancybox-loading,.fancybox-close,.fancybox-prev span,.fancybox-next span{background-image:url(/assets/images/fancybox_sprite@2x.png);background-size:44px 152px}#fancybox-loading div{background-image:url(/assets/images/fancybox_loading@2x.gif);background-size:24px 24px}}';

    AWA.css = ' \
        .placeholder {\
            color: #aaa;\
        }\
        .content .row + .row,\
        .content .clearfix + .row {\
            display: none;\
        }\
        .food-hygiene-hero {\
            position: relative;\
        }\
        .content .awa-row {\
            display: block !important;\
        }\
        .awa-why-train {\
            padding-bottom: 20px;\
        }\
        .awa-hero-reviews {\
            position: absolute;\
            bottom: 0;\
            margin: auto;\
            left: 0;\
            right: 0;\
            width: 420px;\
            padding: 10px;\
            background: url("'+AWA.var.images.reviewWidget+'") 10px 10px no-repeat #fff;\
        }\
        .awa-hero-reviews p {\
            font-size: 0.9em;\
            text-align: right;\
            padding: 0;\
            margin: 0;\
            line-height: 1.4em;\
        }\
        @media screen and (max-width: 767px) {\
            .awa-hero-reviews {\
                position: relative;\
                top: 20px;\
            }\
        }\
        @media screen and (max-width: 456px) {\
            .awa-hero-reviews {\
                width: auto;\
                max-width: 395px;\
                height: 50px;\
            }\
            .awa-hero-reviews p {\
                display: none;\
            }\
        }\
        @media screen and (max-width: 390px) {\
            .awa-hero-reviews {\
                display: none;\
            }\
        }\
        .awa-hero-reviews p strong {\
            color: #222;\
        }\
        .food-hygiene-reasons h3 {\
            text-align: left;\
        }\
        .food-hygiene-reasons {\
            padding-top: 2em;\
        }\
        .food-hygiene-reasons .icons-ul {\
            margin-left: 0 !important;\
            padding-left: 1.5em;\
        }\
        .food-hygiene-reasons .col-md-3 {\
            padding-top: 4em;\
        }\
        .awa-row > h3 {\
            color: #777;\
            padding: 2em 0 1em 0;\
            font-size: 1.4em;\
            text-align: center;\
        }\
        .awa-demo-chooser img {\
            max-width: 80%;\
            margin: 0 auto;\
            text-align: center;\
        }\
        .awa-course-ctas h3 {\
            padding-bottom: 45px;\
        }\
        .awa-course-box {\
            padding: 0 5px;\
        }\
        .awa-most-popular .col-highlighted:before {\
            content: "";\
            background: url("'+AWA.var.images.mostPopular+'") 0 0 no-repeat transparent;\
            width: 75px;\
            height: 85px;\
            display: block;\
            position: absolute;\
            top: -11px;\
            left: 10px;\
        }\
        .awa-most-popular .col-highlighted h4 {\
            position: relative;\
            padding-top: 15px;\
            left: 54px;\
        }\
        .awa-most-popular {\
            position: relative;\
            top: -15px;\
        }\
        @media screen and (max-width: 404px) {\
            .awa-most-popular .col-highlighted h4 {\
                padding-top: 0;\
                width: 80%;\
            }\
        }\
        @media screen and (max-width: 991px) {\
            .awa-course-ctas h3 {\
                padding-bottom: 1em;\
            }\
            .awa-course-box {\
                margin-bottom: 30px;\
            }\
            .food-hygiene-reasons .col-md-3 {\
                padding-top: 2em;\
            }\
            .awa-most-popular {\
                position: relative;\
                top: 0;\
            }\
        }\
        .awa-course-box h4 {\
            color: #777;\
            font-size: 1.3em;\
        }\
        .awa-course-box .icons-ul {\
            margin-left: 0px;\
            padding-left: 20px;\
            line-height: 1.6em;\
        }\
        .awa-course-box .btn {\
            font-size: 1.3em;\
            padding: 0.5em 2em;\
        }\
        .awa-course-bottom {\
            text-align: center;\
        }\
        .awa-course-price {\
            font-size: 1.9em;\
            color: #555;\
            margin-bottom: 10px;\
        }\
        .awa-course-intro {\
            border-bottom: 1px solid #ccc;\
            min-height: 60px;\
            margin-bottom: 20px;\
        }\
        @media screen and (max-width: 991px) {\
            .awa-course-intro {\
                padding-bottom: 1em;\
            }\
        }\
        .awa-demo-chooser {\
            padding-bottom: 30px;\
        }\
        .awa-demo-chooser .btn {\
            text-decoration: none;\
            line-height: 13px;\
            position: relative;\
            top: -1px;\
        }\
        .awa-demo-chooser .btn:hover,\
        .awa-demo-chooser .btn:focus {\
            text-decoration: underline;\
        }\
        .awa-demo-chooser .col-xs-4 {\
            text-align: center;\
            padding: 1em 0 2em 0;\
        }\
        .awa-demo-chooser label {\
            display: block;\
            padding-bottom: 0.5em;\
        }\
        .awa-demo-chooser form {\
            width: 660px;\
            margin: 10px auto 0 auto;\
        }\
        #awa-email {\
            line-height: 21px;\
            width: 210px;\
            padding: 4px;\
            border-radius: 4px;\
            border: 1px solid #999;\
            background: #eee;\
        }\
        #awa-course {\
            line-height: 21px;\
            padding: 5px 5px 6px 5px;\
            width: 282px;\
            border-radius: 4px;\
            border: 1px solid #999;\
            background: #eee;\
        }\
        @media screen and (max-width: 680px) {\
            #awa-course {\
                margin: 0 0 10px;\
                width: 100%;\
                box-sizing: border-box;\
            }\
            #awa-email {\
                margin: 0 0 10px;\
                width: 100%;\
                box-sizing: border-box;\
            }\
            .awa-demo-chooser form {\
                width: 355px;\
            }\
            .awa-demo-chooser form .btn {\
                width: 100%;\
                box-sizing: border-box;\
            }\
            .awa-demo-chooser img {\
                max-width: 95%;\
            }\
        }\
        @media screen and (max-width: 375px) {\
            .awa-demo-chooser form {\
                width: auto;\
            }\
        }\
        .awa-reviews {\
            max-width: 720px;\
            margin: 0 auto;\
            padding-bottom: 20px;\
        }\
        .awa-reviews h4 {\
            text-align: center;\
        }\
        .awa-review {\
            margin: 2em 0;\
        }\
        .awa-review-name {\
            font-weight: bold;\
            display: block;\
            margin: 0px 0px 0.5em;\
            position: relative;\
        }\
        .awa-review-name:after {\
            content: "";\
            background: url("'+AWA.var.images.stars+'") 0 0 no-repeat transparent;\
            width: 104px;\
            height: 20px;\
            display: inline-block;\
            position: relative;\
            top: 4px;\
            left: 10px;\
        }\
        .awa-reviews-more-link {\
            text-decoration: underline;\
        }\
    ';

    $('head').append('<style type="text/css">'+AWA.css+AWA.fancyboxCSS+'</style>');

    /**
     * Main experiment code
     */

    // Modify banner

    $('h1').text('Online Food Hygiene and Safety Courses');

    $('.hero-header h2')
        .text('Get your Level 1, 2 or 3 Food Hygiene certificate from as little as £15 + VAT')
        .after('<div class="awa-hero-reviews">\
                    <p><strong>4.7</strong> Average</p>\
                    <p><strong>1685</strong> Reviews</p>\
                </div>')
        .after('<h2>Take one of our accredited UK &amp; EU courses to complete your food safety training</h2>');

    $('.food-hygiene-hero .col-lg-12, .food-hygiene-hero .col-sm-12').remove();

    // Why train band
    $('.content .row:eq(0)').after(
        '<div class="row awa-row awa-why-train">\
            <div class="col-md-12">\
                <div class="row food-hygiene-reasons no-margin">\
                    <div class="txt-left col-md-6 col-sm-12">\
                        <h3>Why Train With Us?</h3>\
                        <ul class="icons-ul">\
                            <li><i class="icon-li icon-ok-sign"></i>Get your certificate in as little as 2 hours by taking the online exam</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Study and take the exam in your own time without having to take time off or travel to a college</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Simply enroll and pay today to get instant access</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Environmental Health Officer approved certification</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Course matches RSPH/CIEH syllabus</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Get an instant digital certificate when you pass, so you can use it straightaway</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Your printed certificate is sent within 1 working day of you passing the exam</li>\
                            <li><i class="icon-li icon-ok-sign"></i>Need help? Chat to one of our experts</li>\
                        </ul>\
                    </div>\
                    <div class="col-sm-6 col-md-3 col-xs-6">\
                        <a href="../food-safety/eho-approved-training.aspx" id="A3" title="Find out more about our EHO approval">\
                            <img src="../assets/images/eho-approved.gif" class="img-responsive eho" alt="EHO Approved courses"></a>\
                    </div>\
                    <div class="col-sm-6 col-md-3 col-xs-6">\
                        <div class="row">\
                            <div class="col-xs-6">\
                                <img src="../assets/images/RoSPA-logo.gif" alt="RoSPA Accreditation Logo" class="img-responsive" width="100">\
                            </div>\
                            <div class="col-xs-6 txt-rgt">\
                                <img src="../assets/images/CPD-logo.gif" class="img-responsive" alt="CPD Accreditation Logo" height="100">\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    ');

    // Course call to actions
    $('.awa-why-train').after(
        '<hr />\
        <div class="row awa-row awa-course-ctas">\
            <h3>Choose the course that\'s right for you:</h3>\
            <div class="col-md-4 awa-course-box">\
                <div class="col-highlighted">\
                    <h4>Level 1 Food Safety Awareness</h4>\
                    <p class="awa-course-intro">Introductory course for people handling low-risk food.</p>\
                    <ul class="icons-ul">\
                        <li><i class="icon-li icon-ok-sign"></i>6 Module Online course</li>\
                        <li><i class="icon-li icon-ok-sign"></i>No time limits to complete the training</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Approximate duration- 2 hours</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Matches RSPH and CIEH syllabus</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Meets UK & EU legal training requirements for food handlers</li>\
                        <li><i class="icon-li icon-ok-sign"></i>CPD & RoSPA accredited certificate</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Environmental Health Officer approved</li>\
                        <li><i class="icon-li icon-ok-sign"></i>On successful completion get a digital certificate that you can use straightaway</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Hard-copy of your certificate is posted to you the next working day</li>\
                    </ul>\
                    <div class="awa-course-bottom">\
                        <p class="awa-course-price">'+AWA.var.level1.price+'</p>\
                        <p><a href="'+AWA.var.level1.url+'" class="btn btn-green">See Details &raquo;</a></p>\
                        <p><a href="#" class="bulk-discount-fancybox">Bulk discounts available</a></p>\
                    </div>\
                </div>\
            </div>\
            <div class="col-md-4 awa-course-box awa-most-popular">\
                <div class="col-highlighted">\
                    <h4>Level 2 Food Safety Awareness</h4>\
                    <p class="awa-course-intro">Best for anyone who works where food is cooked, prepared or handled.</p>\
                    <ul class="icons-ul">\
                        <li><i class="icon-li icon-ok-sign"></i>5 Module Online course</li>\
                        <li><i class="icon-li icon-ok-sign"></i>No time limits to complete the training</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Approximate duration- 2 hours</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Matches RSPH and CIEH syllabus</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Meets UK & EU legal training requirements for food handlers</li>\
                        <li><i class="icon-li icon-ok-sign"></i>CPD & RoSPA accredited certificate</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Environmental Health Officer approved</li>\
                        <li><i class="icon-li icon-ok-sign"></i>On successful completion get a digital certificate that you can use straightaway</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Hard-copy of your certificate is posted to you the next working day</li>\
                    </ul>\
                    <div class="awa-course-bottom">\
                        <p class="awa-course-price">'+AWA.var.level2.price+'</p>\
                        <p><a href="'+AWA.var.level2.url+'" class="btn btn-green">See Details &raquo;</a></p>\
                        <p><a href="#" class="bulk-discount-fancybox">Bulk discounts available</a></p>\
                    </div>\
                </div>\
            </div>\
            <div class="col-md-4 awa-course-box">\
                <div class="col-highlighted">\
                    <h4>Level 3 Food Safety Awareness</h4>\
                    <p class="awa-course-intro">Intermediate certificate for supervisors and managers.</p>\
                    <ul class="icons-ul">\
                        <li><i class="icon-li icon-ok-sign"></i>16 Module Online course</li>\
                        <li><i class="icon-li icon-ok-sign"></i>No time limits to complete the training</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Approximate duration- 2 hours</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Matches RSPH and CIEH syllabus</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Meets UK & EU legal training requirements for food handlers</li>\
                        <li><i class="icon-li icon-ok-sign"></i>CPD & RoSPA accredited certificate</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Environmental Health Officer approved</li>\
                        <li><i class="icon-li icon-ok-sign"></i>On successful completion get a digital certificate that you can use straightaway</li>\
                        <li><i class="icon-li icon-ok-sign"></i>Hard-copy of your certificate is posted to you the next working day</li>\
                    </ul>\
                    <div class="awa-course-bottom">\
                        <p class="awa-course-price">'+AWA.var.level3.price+'</p>\
                        <p><a href="'+AWA.var.level3.url+'" class="btn btn-green">See Details &raquo;</a></p>\
                        <p><a href="#" class="bulk-discount-fancybox">Bulk discounts available</a></p>\
                    </div>\
                </div>\
            </div>\
        </div><!-- .awa-course-ctas -->'
    );

    // Demos
    $('.awa-course-ctas').after(
        '<div class="row awa-row awa-demo-chooser">\
            <h3>Still not sure? Get free access to the first 3 modules</h3>\
            <div class="col-xs-4">\
                <a href="/assets/products/level-2-food-catering/level-2-food-catering1-800.jpg" class="fancybox" rel="gallery" data-fancybox-group="gallery">\
                    <img alt="" src="/assets/products/level-2-food-catering/level-2-food-catering1-800.jpg" />\
                </a>\
            </div>\
            <div class="col-xs-4">\
                <a href="/assets/products/level-2-food-catering/level-2-food-catering2-800.jpg" class="fancybox" rel="gallery" data-fancybox-group="gallery">\
                    <img alt="" src="/assets/products/level-2-food-catering/level-2-food-catering2-800.jpg" />\
                </a>\
            </div>\
            <div class="col-xs-4">\
                <a href="/assets/products/level-2-food-catering/level-2-food-catering3-800.jpg" class="fancybox" rel="gallery" data-fancybox-group="gallery">\
                    <img alt="" src="/assets/products/level-2-food-catering/level-2-food-catering3-800.jpg" />\
                </a>\
            </div>\
            <form>\
                <label for="awa-course">Choose your course:</label>\
                <select id="awa-course" name="awa-course">\
                    <option value="level1">Level 1 Food Safety Awareness</option>\
                    <option value="level2catering">Level 2 Food Hygiene for Catering</option>\
                    <option value="level2retail" selected="selected">Level 2 Food Hygiene for Retail</option>\
                    <option value="level2manufacturing">Level 2 Food Hygiene for Manufacturing</option>\
                    <option value="level3catering">Level 3 Food Hygiene for Catering</option>\
                    <option value="level3retail">Level 3 Food Hygiene for Retail</option>\
                    <option value="level3manufacturing">Level 3 Food Hygiene for Manufacturing</option>\
                </select>\
                <input type="email" placeholder="Enter your email address" name="awa-email" id="awa-email" />\
                <input type="submit" class="btn btn-green" name="submit" value="Get 3 free modules &raquo;" />\
            </form>\
        </div><!-- .awa-demo-chooser -->'
    );

    // Reviews listing
    $('.awa-demo-chooser').after(
        '<hr />\
        <div class="row awa-row awa-reviews">\
            <h3>Here&acute;s what people are saying about our training...</h3>\
            <h4>Thousands of customers rely on High Speed Training every month to \
            fulfil their training requirements. Can we help you with yours? Don’t just \
            take it from us, let our customers explain how we helped.</h4>\
            <div class="awa-review">\
                <span class="awa-review-name">Michael Bedwell</span>\
                I would recommend your Company to anybody wanting to take a food hygiene \
                course. I had my reservations as to how an online course would work, as \
                I had previously taken them with a tutor in class. However, your service \
                was brilliant. The course subject really made me think about the \
                principles behind the rules and procedures in food hygiene. Thank you.\
            </div>\
            <div class="awa-review">\
                <span class="awa-review-name">Sandra Wardle</span>\
                A very helpful course with audio included so one can go back and read a \
                module again.\
                very easy to use and very interesting and helpful.\
                would recommend anyone to use this course...it was excellent..\
            </div>\
            <div class="awa-review">\
                <span class="awa-review-name">Stephanie Bright</span>\
                excellent training, I found the voice over very helpful and easy to \
                follow. I think this training is very good for your money and I am very \
                happy to recommend you to others. I will be asking my staff members to \
                also participate.\
            </div>\
            <div class="awa-review">\
                <span class="awa-review-name">William Budge</span>\
                Very informative and thorough, with a simple structure. Highly impressed \
                with this training.\
            </div>\
            <div class="awa-review">\
                <span class="awa-review-name">Rohan Perera</span>\
                I found the course extremely informative and useful. In my opinion it \
                covered all aspects of food hygiene to a very high standard. \
                I particularly enjoyed the exercises I was asked to complete during \
                learning the modules. \
                Thank you for the most valuable experience.\
            </div>\
            <p><a class="awa-reviews-more-link" href="/reviews/">Read 2,833 more reviews</a></p>\
        </div>'
    );

    // Course summary call to actions
    $('.awa-reviews').after(
        '<hr />\
        <div class="row awa-row awa-course-ctas awa-course-ctas-summary">\
            <h3>Ready to get started? Choose the course that\'s right for you:</h3>\
            <div class="col-md-4 awa-course-box">\
                <div class="col-highlighted">\
                    <h4>Level 1 Food Safety Awareness</h4>\
                    <p class="awa-course-intro">Introductory course for people handling low-risk food.</p>\
                    <div class="awa-course-bottom">\
                        <p class="awa-course-price">'+AWA.var.level1.price+'</p>\
                        <p><a href="'+AWA.var.level1.url+'" class="btn btn-green">See Details &raquo;</a></p>\
                        <p><a href="#" class="bulk-discount-fancybox">Bulk discounts available</a></p>\
                    </div>\
                </div>\
            </div>\
            <div class="col-md-4 awa-course-box awa-most-popular">\
                <div class="col-highlighted">\
                    <h4>Level 2 Food Safety Awareness</h4>\
                    <p class="awa-course-intro">Best for anyone who works where food is cooked, prepared or handled.</p>\
                    <div class="awa-course-bottom">\
                        <p class="awa-course-price">'+AWA.var.level2.price+'</p>\
                        <p><a href="'+AWA.var.level2.url+'" class="btn btn-green">See Details &raquo;</a></p>\
                        <p><a href="#" class="bulk-discount-fancybox">Bulk discounts available</a></p>\
                    </div>\
                </div>\
            </div>\
            <div class="col-md-4 awa-course-box">\
                <div class="col-highlighted">\
                    <h4>Level 3 Food Safety Awareness</h4>\
                    <p class="awa-course-intro">Intermediate certificate for supervisors and managers.</p>\
                    <div class="awa-course-bottom">\
                        <p class="awa-course-price">'+AWA.var.level3.price+'</p>\
                        <p><a href="'+AWA.var.level3.url+'" class="btn btn-green">See Details &raquo;</a></p>\
                        <p><a href="#" class="bulk-discount-fancybox">Bulk discounts available</a></p>\
                    </div>\
                </div>\
            </div>\
        </div><!-- .awa-course-ctas -->'
    );

    // Run placeholder polyfill
    AWA.func.polyfillPlaceholder();

    // Add event handler to demo chooser
    $('.awa-demo-chooser form').on('submit', function(e){
        e.preventDefault();
        AWA.func.goToDemo();
    });

    // Get Fancybox and initialise
    $.getScript('/assets/js/fancybox-bundle.min.js', function() {

        // setup an interval incase fancybox script has not been executed yet
        var interval = setInterval(function(){

            if(typeof $().fancybox === 'function') {

                $(".fancybox")
                .fancybox({
                    helpers: {
                        title: null
                    }
                });

                $(".bulk-discount-fancybox")
                .fancybox({
                    helpers: {
                        title: null
                    },
                    content: '<h2 style="text-align:center">Discounts for bulk purchases:</h2>\
                              <p style="text-align:center">10% discount on 10+ courses<br />\
                              20% discount on 50+ courses</p>'
                });

                clearInterval(interval);
            }

        }, 100);

    });

})(jQuery); // vwo_$ || optimizely.$