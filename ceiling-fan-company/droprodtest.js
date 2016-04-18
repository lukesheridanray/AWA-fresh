var currentForm = $('#productDetailsAddToCartForm');
$.ajax({
    type: "GET",
    url: "http://www.theceilingfancompany.co.uk/18-46cm-27mm-drop-rod/",
    success: function(data) {
    	var response = $(data);
    	var dropRodForm = response.find('#productDetailsAddToCartForm').attr("id", "productDetailsAddToCartForm2")
    	$(currentForm).after(dropRodForm);
    	$('#productDetailsAddToCartForm2').prepend("<div class='AWA-dr'>Drop Rod</div>");
    	$('#productDetailsAddToCartForm2').find('select').val('80');
    	$('#productDetailsAddToCartForm .BulkDiscount').first().find('input').css('visibility', 'hidden');
    }
});

var checkVisible = setInterval(function(){
    // if element doesn't exist or isn't visible then end
    if ($('#fastCartWrapper').length || $('#fastCartWrapper').is(':visible')) {
    	clearInterval(checkVisible);
    	console.log('fastCartWrapper is now visible');
    	$('#productDetailsAddToCartForm').remove();
    	$('#productDetailsAddToCartForm2 .BulkDiscount').first().find('input').trigger('click');

    	// Modify popup content

    	$('.fastCartSummaryBox').remove();
    	$('.fastCartContent').find('h2').text('Great! Item has been added to your cart...');
    	$('.fastCartBottom').remove();
    	$('.fastCartContent').find('hr').remove();
    	$('.fastCartThumb').attr('style', 'margin-left: 120px');
    	$('.fastCartTop').attr('style', 'margin-top: 20px');
    	return;
    }
}, 500);



