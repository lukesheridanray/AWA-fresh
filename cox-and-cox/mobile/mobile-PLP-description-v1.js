/* CUSTOM CODE */
(function($){

    // Go through each product row
    $('.item').each(function(){
        var $product_row = $(this);

        var url = $product_row
            .find('a:first-of-type')
            .attr('href');

        // Scrape info from the product page. Once we have it, insert it after the title
        var $title = $product_row.find('.product-name');

        $.get(url, function(data){
            var $data = $(data);

            // First paragraph under "Size & Info" tab
            var $size_info = $data.find('#tab2 > .box-description > div.std > p:first-of-type');

            // Insert after title
            $title.after($size_info);
        });

    });

})(jQuery);
