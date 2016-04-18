var lyleScottProductPage = {

    // The condition to check we are on the correct page
    'condition':  $('.ProductDetails'),

    // vars object
    'vars': {
        'review_count': $('[itemprop=reviewCount]'),
        'review_plural': ( ($('[itemprop=aggregateRating]').length) ? ( (parseInt($('[itemprop=reviewCount]').html()) > 1) ? ' reviews' : ' review') : ''),
        'feefo_link': $('#feefo_logo'),
        'desc': $('#product_desc'),
        'sizing_message': '<p class="exp-sizing-message">Buy your normal size for a slim, contemporary fit.<br />Model is 6ft/183cm and wears a medium</p>',
        'size_select': $('#select_size option'),
        'size_guide': $('#product_size_guide'),
        'size_values_tops': {
            'XS'  : 'XS: 34-36" (86-91cm)',
            'S'   : 'S: 36-38" (91-96cm)',
            'M'   : 'M: 38-40" (96-101cm)',
            'L'   : 'L: 40-42" (101-106cm)',
            'XL'  : 'XL: 42-44" (106-111cm)',
            'XXL' : 'XXL: 44.5-46.5" (112-118cm)',
            'XXXL': 'XXXL: 46.5-48.5" (118-123cm)'
        },
        'size_values_bottoms': {
            'XS'  : 'XS: Waist 28"',
            '28'  : 'XS: Waist 28"',
            'S'   : 'S: Waist 30"',
            '30'  : 'S: Waist 30"',
            'M'   : 'M: Waist 32"',
            '32'  : 'M: Waist 32"',
            'L'   : 'L: Waist 34"',
            '34'  : 'L: Waist 34"',
            'XL'  : 'XL: Waist 36"',
            '36'  : 'XL: Waist 36"',
            'XXL' : 'XXL: Waist 38"',
            '38'  : 'XXL: Waist 38"',
            'XXXL': 'XXXL: Waist 40"',
            '40'  : 'XXXL: Waist 40"'
        },
        'product_url': window.universal_variable.product.url,
        'free_returns_content': '<div id="delivery_returns"><div id="delivery"> \
<p class="title">Free UK Returns</p> \
<p>Returns from UK mainland are free via Collect+ outside sales periods. Simply return the parcel to your most convenient Collect+ outlet, where you\'ll receive proof of postage and a tracking code.</p> \
<p>The Collect+ network is made up of over 5,500 newsagents, convenience stores, supermarkets and petrol stations nationwide. Because the outlets are open from early until late, you can return your parcel outside of normal 9-5 operating hours.</p> \
</div></div>',
         'delivery_content': '<div id="delivery_returns"><div id="delivery"> \
<p class="title">UK Delivery</p> \
<p><strong>Get FREE delivery when you spend over &pound;100.</strong> This is automatically applied in the checkout.</p> \
<table><tbody><tr><th>Country</th><th>Type</th><th>Cost</th><th>Delivery time</th></tr><tr class="alt"><td>UK</td>                 <td>Standard</td>               <td>&pound;3.95</td>                <td>4-6 working days after receipt of order</td>            </tr>           <tr>                <td>UK</td>                 <td>Premium</td>                <td>&pound;6.95</td>                <td>2-3 working days after receipt of order. UK premium deliveries are sent via courier and require a signature upon delivery. Delivery will be between 9am and 5pm Monday to Friday excluding Public Holidays.</td>            </tr>           <tr class="alt">                <td>UK</td>                 <td>Next working day</td>               <td>&pound;9.95</td>                <td>Order before 2pm for delivery the next working day to anywhere in mainland UK (Excludes Highlands, Islands and weekends and both Scottish and English bank holidays).</td>          </tr>       <tr><td>&nbsp;UK</td><td>&nbsp;Deliver to store<br /></td><td>&nbsp;Free</td><td>&nbsp;1-2 working days after receipt of order, we will email you when it&#39;s ready for collection. </td></tr></tbody></table> \
<p class="title">UK Returns</p> \
<p>Returns from UK mainland are free via Collect+ outside sales periods. Simply return the parcel to your most convenient Collect+ outlet, where you\'ll receive proof of postage and a tracking code.</p> \
<p>The Collect+ network is made up of over 5,500 newsagents, convenience stores, supermarkets and petrol stations nationwide. Because the outlets are open from early until late, you can return your parcel outside of normal 9-5 operating hours.</p> \
<ul class="exp-bullet-list"><li>Fill out your reason(s) for returning on the returns note, included in your parcel.</li> \
<li>Peel off the Collect+ label from your returns note and stick it onto your parcel. Enclose the returns note with the product, and package up securely.</li> \
<li>Take your parcel to your most convenient Collect+ store, where you\'ll receive proof of postage and a code to track your return online. (Find your nearest Collect+ store at <a href="https://www.collectplus.co.uk/returns/new/lyleandscott">www.collectplus.co.uk/lyleandscott</a>). Please retain this proof of postage.</li> \
<li>Sale items can be returned at £4.29 no matter how many items you need to return.</li></ul> \
<p class="title">International Delivery</p> \
<table>             <tbody><tr>                 <th>Country</th>                <th>Type</th>               <th>Cost</th>               <th>Delivery time</th>          </tr>           <tr class="alt">                <td>Europe</td>                 <td>Standard</td>               <td>&euro;5.00</td>                 <td>4-6 working days after receipt of order. Standard deliveries are sent via courier and require a signature upon delivery. Delivery will be between 9am and 5pm Monday to Friday excluding Public Holidays.</td>          </tr>           <tr>                <td>Europe</td>                 <td>Premium</td>                <td>&euro;15.00</td>                <td>3-4 working days after receipt of order. European premium deliveries are sent via courier and require a signature upon delivery. Delivery will be between 9am and 5pm Monday to Friday excluding Public Holidays.</td>          </tr>           <tr class="alt">                <td>USA &amp; Canada</td>               <td>Standard</td>               <td>US$7.00</td>                <td>6-11 working days after receipt of order. USA &amp; Canada standard deliveries are sent via courier and require a signature upon delivery. Delivery will be between 9am and 5pm Monday to Friday excluding Public Holidays.</td>            </tr>           <tr>                <td>USA &amp; Canada</td>               <td>Premium</td>                <td>US$15.00</td>               <td>4-6 working days after receipt of order. USA &amp; Canada premium deliveries are sent via courier and require a signature upon delivery. Delivery will be between 9am and 5pm Monday to Friday excluding Public Holidays.</td>          </tr>           <tr class="alt">                <td>Rest of World</td>              <td>Standard</td>               <td>&pound;10.00</td>               <td>6-11 working days after receipt of order. Rest of World standard and standard deliveries are sent via courier and require a signature upon delivery. Delivery will be between 9am and 5pm Monday to Friday excluding Public Holidays.</td>          </tr>       </tbody></table> \
<p class="sub-heading">International Customs &amp; Import Charges</p> \
<p>Any customs or import duties are charged once the order reaches its destination country and must be paid by the recipient of the order. We have no control over these charges and cannot predict what they may be. Customs policies vary widely from country to country. You may want to contact your local customs office for further information.</p> \
<p class="title">International Returns</p> \
<ul class="exp-bullet-list"><li>Fill out your reason(s) for returning on the returns note included in your parcel.</li> \
<li>Peel off our returns address label from your returns note and stick it onto your parcel. Enclose the returns note with the product, and package up securely.</li> \
<li>Return your parcel using any postal service. Please retain proof of postage.</li></ul></div> </div> \
         '
    },
     
    // styles string
    'styles':
        ' \
#add_to_saved_items { \
    text-align: left; \
} \
.exp-dashed-under { \
    border-bottom: 1px dashed #4D4D4D !important; \
} \
.selected .exp-dashed-under { \
    border-bottom: 1px dashed transparent !important; \
} \
.exp-dashed-under:hover, .exp-dashed-under:focus, \
a:hover .exp-dashed-under, a:focus .exp-dashed-under, \
li:hover .exp-dashed-under, li:focus .exp-dashed-under { \
    border-bottom: 1px dashed transparent !important; \
} \
.exp-review-count { \
    position: absolute; left: 110px; top: 4px; width: 100px; \
} \
.details_content #feefo_logo { \
    position: relative; \
} \
#social_media_tab_headers img { \
    width: 40px; height: 32px; \
} \
#social_media_tab_headers { \
    width: 300px; \
    position: absolute; top: 0; left: 90px; \
} \
#social_media_tab_headers li { \
    border: 0 !important; \
} \
#social_media_tabs { \
    position: relative; \
} \
.social-media-tab-label { \
    position: absolute; top: 14px; left: 0; \
    display: block !important; \
} \
#social_media_tabs { \
     padding-top: 50px !important; \
} \
.zoom_button { \
    float: left !important; \
    margin: 0px 0 0px 95px !important; \
    width: auto !important; \
    padding: 3px 10px 3px 0 !important; \
    border-left: 0 !important; \
    border-right: 1px solid #ccc; \
} \
.zoom_button:hover { \
    color: #000 !important; \
} \
.zoom_button img { \
    display: none !important; \
} \
#image_zoom_enlarge .enlarge { \
    float: left !important; \
    margin: 0px 95px 0px 10px !important; \
    padding: 3px 30px 3px 0 !important; \
    background: url("http://media.lyleandscott.com/pws/client/images/zoomButton.png") right no-repeat transparent; \
} \
#image_zoom_enlarge .enlarge:hover { \
    border-color: transparent !important; \
} \
#productInfo #select_size { \
    padding: 7px; \
    font-size: 1.1em; \
    width: 282px !important; \
    margin: 0 !important; \
} \
#product_size_guide { \
    margin: 6px 0 0px 10px; \
font-size: 1em; \
     color: #4D4D4D; \
} \
.exp-sizing-message { \
    clear: both; \
    font-size: 0.8em; \
    padding: 6px 0 0 0; \
} \
.exp-free-uk-returns { \
     margin-left: 10px; \
} \
.exp-bullet-list li{ \
list-style-type: disc; \
padding: 0 0 6px 0; \
margin: 0 0 0 20px; \
} \
#productInfo #select_colour_label, \
#productInfo #select_colour_list { \
    background: #f4f4f4 !important; \
    padding-left: 19px !important; \
    width: 96% !important; \
    margin-bottom: 0 !important; \
} \
#productInfo #select_colour_label { \
    padding-top: 10px !important; \
} \
#productInfo #select_colour_list { \
    padding-top: 15px; \
    padding-bottom: 15px; \
} \
#productInfo #select_colour_list li { \
     margin-right: 4px; \
     border: 2px solid #eee; \
} \
#productInfo #select_colour_list .selected_colour { \
    border: 2px dashed #CCC; \
} \
#productInfo #add_to_bag { \
    background: #f4f4f4; \
    padding: 0 0 9px 0; \
} \
#productInfo #add_to_bag .element, \
#productInfo #add_to_bag_actions { \
    width: 96%; \
    margin-left: 4%; \
} \
    ',

    // function to run the actual experiment
    'run': function() {
        
        // check for a condition and check it has been met
        if(this.condition) {
            if(!this.condition.length) {
                return false;
            }
        }
        
        // append styles
        $('head').append('<style type="text/css">'+this.styles+'</style>');
        
        if(this.vars.review_count.length && this.vars.feefo_link.length) {
            $('#feefo_logo').append('<div class="exp-review-count"><span>'+this.vars.review_count.html()+this.vars.review_plural+'</span></div>');
        }
        this.vars.desc.before(this.vars.desc.html()).remove();
        $('#product_code').remove();
        $('#select_size_label').html('Choose size:');
        $('#select_colour_label').append(':');
        $('#add_to_bag_actions button').after('<a href="/modal-content/" class="exp-free-uk-returns exp-dashed-under">Free UK Returns</a>');
        var this_obj = this;
        function size_select_guidance() {
            if(this_obj.vars.size_guide.attr('href').indexOf('size-guide-men') === -1 && this_obj.vars.size_guide.attr('href').indexOf('size-guide-womens') === -1) {
                return false;
            }
            if(!$('.exp-sizing-message').length) {
                $('#product_size_guide').after(this_obj.vars.sizing_message);
            }
            if(this_obj.vars.size_guide.attr('href').indexOf('size-guide-men') === -1) {
                return false;
            }
            var is_bottoms = (
                this_obj.vars.product_url.indexOf('trousers') !== -1 ||
                this_obj.vars.product_url.indexOf('chinos') !== -1 ||
                this_obj.vars.product_url.indexOf('swimshorts') !== -1 ||
                this_obj.vars.product_url.indexOf('pants') !== -1 ||
                this_obj.vars.product_url.indexOf('shorts') !== -1
            ) ? true : false;
            if(is_bottoms) { // this is a mens bottom..
                $('#select_size option').each(function() {
                    var self = $(this),
                        self_html = self.html()
                        size_val = this_obj.vars.size_values_bottoms[self_html];
                        if( size_val ) {
                            self.html(size_val);
                        }
                });
            } else { // this is a mens top...
                $('#select_size option').each(function() {
                    var self = $(this),
                        self_html = self.html(),
                        size_val = this_obj.vars.size_values_tops[self_html];
                        if( size_val ) {
                            self.html(size_val);
                        }
                });
            }
        }
        size_select_guidance();
        function timedactions() {
            size_select_guidance();
            $('#select_size').prepend('<option value="default">Select size...</option>');
            $('#select_size')[0].selectedIndex = 0;
        }
        $('#select_colour_list a').each(function(){
            $(this).bind('click',function() {
                window.setTimeout(timedactions, 500 );
            });
        });
        $('#product_tabs [data-tab] span,#product_tabs .pop_up_link span,#feefo_logo span,#product_size_guide').addClass('exp-dashed-under');
        $('#social_media_tab_headers').before('<div class="social-media-tab-label">Share this style:</div>');

        // Free returns modal
        jQuery(".pop_up").attr("id", "quickbuy");
        var a = jQuery(".pop_up");
        jQuery.fn.popUp({$triggers: jQuery(".exp-free-uk-returns"), $popUpContainer: a, callback: function() {
            var new_top_val = parseInt(a.css('top').replace('px',''))+20;
            a
            .append(this_obj.vars.free_returns_content)
            .removeClass('loading').addClass('loaded')
            .css({'margin-left':'-400px','top':new_top_val})
            .prepend('<span class="close grey">x</span>')
            .positionInCenter(a(window));
        }});

        // Delivery modal changes
        jQuery('#deliveries_and_returns_link').attr({'href':'/modal-content/'});
        var a = jQuery(".pop_up");
        jQuery.fn.popUp({$triggers: jQuery("#deliveries_and_returns_link"), $popUpContainer: a, callback: function() {
            var new_top_val = parseInt(a.css('top').replace('px',''))+20;
            a
            .html(this_obj.vars.delivery_content)
            .removeClass('loading').addClass('loaded')
            .css({'margin-left':'-400px','top':new_top_val})
            .prepend('<span class="close grey">x</span>')
            .positionInCenter(a(window));
        }});

    }

}

// Run the experiment
lyleScottProductPage.run();