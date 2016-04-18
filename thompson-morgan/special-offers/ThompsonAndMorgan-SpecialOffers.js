
/* --------------------------- Insert special orders form --------------------------- */

// Remove "Special Offers" text
$('#breadcrumbs').remove();

var orderCodeForm = "<div id='orderCodeForm'><h1 id='yourOrderCode'>Your order code:</h1><form id='gift-code-form2' name='promotionForm' ><div><input size='14' class='full' name='promotionCode' type='text' value=''></div></form><div id='stagingArea'></div></div>";
//<form id="gift-code-form" method="post" name="promotionForm" action="/public/QLOnline/basket?portal:componentId=1407945131&amp;portal:type=action&amp;portal:isSecure=false">

$(".breadcrumb-portlet").append(orderCodeForm);

$('.breadcrumb-portlet').css({
	width: '951px',
	border: 'solid 1px black',
	height: '550px'
});


$('#gift-code-form2').submit(function(e) {
	e.preventDefault();

	$.ajax({
	    type: "POST",
	    url: "/public/QLOnline/basket?portal:componentId=1407945131&portal:type=action&portal:isSecure=false",
	    data: $('#gift-code-form2').serialize(),
	    success: function(data) {
	    	//console.log(data);
	    	var response = $(data);
	    	var promotions = response.find(".basketPromotions");
	    	console.log(promotions.html());
	    	$('#stagingArea').html(promotions);
	    }
	});
});

//document.cookie = 'PROMO_MEDIA_COOKIE' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
//document.cookie="PROMO_MEDIA_COOKIE=DM306; expires=Thu, 18 Dec 2016 12:00:00 UTC;";
