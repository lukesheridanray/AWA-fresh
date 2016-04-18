// jshint multistr: true

var ccPromoBoxes = {
     
    'vars': {
        'variation': [1,2,3][Math.floor(Math.random() * 3)],
        'URL': document.location
    },
     
    'styles': ' \
.header-holder-left_custom, .header-holder-right_custom { width: 455px; height: 77px; border: 1px solid #cbcbcb; text-transform: none; \
    -webkit-border-radius: 10px; -mox-border-radius: 10px; border-radius: 10px; } \
.header-holder-left_custom { float: left; margin: 0 0 0 14px; } \
.header-holder-right_custom { float: right; margin: 0 14px 0 0; } \
.promo-box-image { float: left; width: 157px; height: 64px; padding: 6px 0 0 0; text-align: center; } \
.promo-box-text { float: left; width: 298px; font-size: 1.4em; line-height: 1.4em; padding: 15px 0 0 0; } \
.header-holder-left_custom .promo-box-text { text-align: left; } \
.header-holder-left_custom .promo-box-text span { font-weight: bold; font-size: 1em; } \
.header-holder-right_custom .promo-box-text { position: relative; left: -35px; } \
.header-holder-right_custom .promo-box-text .elle-text-wrap { position: relative; left: 30px; font-size:1em; } \
.header-holder-right_custom .promo-box-text span { font-size: 1.1em; font-style: italic; } \
.header-holder-right_custom a { color: #666; } \
.exp-modal-close { position: absolute; top: 5px; right: 5px; width: 20px; height: 20px; \
    background: url("http://www.awa-digital.com/optimizely/cox-cox/close.gif") 0 0 no-repeat transparent; \
    cursor: pointer; z-index: 1103; display: block; } \
.exp-modal-close:hover, .exp-modal-close:focus { text-decoration: none; } \
.exp-modal-content { background: #fff; position: relative; padding: 30px; margin: 0 auto; width: 560px; height: 277px; } \
.exp-modal-content img { float: right; margin: 0 0 0 20px; } \
.modal-content-text { height: 277px; float: left; width: 335px; font-size: 1.2em; line-height: 1.5em; } \
.modal-content-text strong { font-size: 1em; } \
.modal-quote-credit { font-size: 1.1em; } \
#sb-player { overflow: hidden !important;} \
    ',
    
    'expOpenModal': function(content) {
        Shadowbox.open({
            content: content,
            player: 'html',
            title: '',
            height: 480,
            width: 960
        });
    },
        
    'run': function(){
        
        // if this is a checkout page remove the header boxes and return fasle
        if(this.vars.URL.toString().indexOf('/checkout/') !== -1) {
            jQuery('.header-holder').remove();
            return false;
        }
        
        // append styles to head
        jQuery('head').append('<style type="text/css">'+this.styles+'</style>');

        var $promo_left = jQuery(' \
<div class="header-holder-left_custom"> \
<div class="promo-box-image"> <img src="http://www.awa-digital.com/optimizely/cox-cox/promo-9-10.png" alt="" width="64" height="64" /> </div> \
    <div class="promo-box-text">9 out of 10 customers recommend<br />Cox &amp; Cox for <span>great quality</span></div> \
</div> \
');

       // right promo box default content 
       var promo_right_image = ' <img src="http://www.awa-digital.com/optimizely/cox-cox/promo-red.png" alt="" width="64" height="64" /> ';
       var promo_right_text = ' <span>&ldquo;A classic look to love for years&rdquo;</span><br />Sarah Keady, Red Magazine Living Editor';
       var promo_right_modal = '<div class="exp-modal-content"> \
<a href="#" onclick="Shadowbox.close();return false;" class="exp-modal-close">&nbsp;</a> \
<img src="http://www.awa-digital.com/optimizely/cox-cox/promo-keady.jpg" alt="" width="185" height="277" /> \
<div class="modal-content-text">I love Cox & Cox as a brand as a whole; you feel that <strong>you are buying into a classic look that you will go on to love for years to come</strong>. \
Their photography is also incredibly beautiful; during the Winter months I love scouring the catalogue to see their magical Christmas decorations and \
<strong>during Spring I stock up on their elegant kitchenwear</strong>. Professionally they have always been incredibly helpful and I have gone on to use \
them on a number of styled shoots and shopping pages. \
<br /><br /><span class="modal-quote-credit">Sarah Keady<br />Interiors Editor, Red Magazine</span></div> \
        </div>';


       if (this.vars.variation === 1) { // var 1
           promo_right_image = promo_right_image;
           promo_right_text = promo_right_text;
           promo_right_modal = promo_right_modal;
       } else if (this.vars.variation === 2) { // var 2
           promo_right_image = ' <img src="http://www.awa-digital.com/optimizely/cox-cox/promo-slade-thumb.jpg" alt="" width="64" height="64" /> ';
           promo_right_text = ' <span>&ldquo;Unique, stylish &amp; practical&rdquo;</span><br />Sarah Slade, Elle Decoration UK';
       } else if (this.vars.variation === 3) { // var 3
           promo_right_image = ' <img src="http://www.awa-digital.com/optimizely/cox-cox/promo-elle.png" alt="" width="138" height="64" /> ';
           promo_right_text = ' <div class="elle-text-wrap"><span>&ldquo;Unique, stylish &amp; practical&rdquo;</span><br />Sarah Slade, Elle Decoration UK</div>';
       }
       if(this.vars.variation === 2 || this.vars.variation === 3) {
       var promo_right_modal = '<div class="exp-modal-content"> \
<a href="#" onclick="Shadowbox.close();return false;" class="exp-modal-close">&nbsp;</a> \
<img src="http://www.awa-digital.com/optimizely/cox-cox/promo-slade.jpg" alt="" width="185" height="277" /> \
<div class="modal-content-text">Whether I\'m researching interior features or looking for something special for my own living space, <strong>Cox&amp;Cox is somewhere \
I instantly think of time and again</strong>. From its unique edit of <strong>stylish, practical things</strong> to the catalogue\'s beautiful product imagery, which gives vital \
inspiration on using pieces at home, I look forward to seeing the new collections every season. \
<br /><br /><span class="modal-quote-credit">Sarah Slade<br />Associate Editor, ELLE Decoration UK</span></div> \
        </div>';     
       }

        var $promo_right = jQuery(' \
<div class="header-holder-right_custom"> \
    <div class="promo-box-image"><a href="#"> '+promo_right_image+' </a></div> \
    <div class="promo-box-text"><a href="#"> '+promo_right_text+' </a></div> \
</div> \
');

        jQuery('.header-holder .header-holder-left').replaceWith($promo_left);

        jQuery('.header-holder .header-holder-right').replaceWith($promo_right);
        
        jQuery('.header-holder-right_custom a').each(function(){
            jQuery(this).bind('click',function(e){
                ccPromoBoxes.expOpenModal( promo_right_modal );
                e.preventDefault();
                /*function appendClose() {
                    jQuery('#sb-title-inner').append('<a href="#" onclick="Shadowbox.close();return false;" class="exp-modal-close">&nbsp;</a>');
                    var wrapleft = jQuery('#sb-wrapper').css('left');
                    var wrapwidth = jQuery('#sb-wrapper').css('width');
                    jQuery('#sb-wrapper').css({'width':'960px','left':(document.body.clientWidth - 960) / 2});
                }
                window.setTimeout(appendClose, 500 );*/
            });
        });
        
    }

}

// Run the experiment
ccPromoBoxes.run();