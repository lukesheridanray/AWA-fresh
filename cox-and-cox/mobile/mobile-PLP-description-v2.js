/* CUSTOM CODE */
(function($){




    // Go through each product row
    $('.item').each(function(){
        var $product_row = $(this);

        var url = $product_row
            .find('a:first-of-type')
            .attr('href');

        // Scrape info from the product page. Once we have it, insert it after the title
        var $title = $product_row.find('.price-box');

        $.get(url, function(data){
            var $data = $(data);

            // First paragraph under "Size & Info" tab
            var $size_info = $data.find('#tab2 > .box-description > div.std > p:first-of-type');
            // $($size_info).css('font-weight', "bold");
            // Insert after title
            $title.after($size_info);
        });

        // make font bold and Add a class to the paragraph.
        function descriptonProduct(){
        $('.holder').find('p').find('span').addClass('description-product').delay(900);
        // $('.description-product').css("font-weight", "bold");

    };

    //center product

    $('.product-name').css({"display": "block", "margin-left": "auto", "margin-right": "auto"});
    // jQuery('#list > div:nth-child(1) > div').css('margin-left', '40px');
    $('.holder').css({'max-width': '50%', 'width': '100%', 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto'});






        //Shape the PLP boxes
        var plpBox = $('.item');

        plpBox.css({"background": "none", "width": "100%", "display": "flex", "flex-direction": "row"});

        //give padding to the price.
        $('.price-box').css({'padding': '10px', 'padding-bottom': '40px'});

        //space everthing
        $('.product-name').css('padding-bottom', '20px');
        $('.product-box').find('.holder').css('margin-top', '15px');




    });

})(jQuery);
