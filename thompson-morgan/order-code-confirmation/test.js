function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var offerCodeData = [];
$('.basketPromotions .details').each(function() {
	var productText = $(this).find('p:nth-child(2)').text();
	var productTitle = productText.slice(8);
	var i = productTitle.indexOf(' with your order');
	productTitle = productTitle.substring(0, i);

	var productInfo = {};
	productInfo.title = productTitle;
	productInfo.discountPrice = $.trim($(this).find('strong').text()).slice(4);
	productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
	productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1));

	offerCodeData.push(productInfo);
});

console.log(offerCodeData);

var currentOfferProducts = "<ul id='test'>";
for (var i = 0; i < offerCodeData.length; i++) {
	currentOfferProducts += "<li>" + offerCodeData[i].title + ", normal price " + offerCodeData[i].normalPrice + "<br>- You pay only " + offerCodeData[i].discountPrice + " Save " + offerCodeData[i].savings + "</li>";
}
currentOfferProducts += "</ul>"

var orderCodeConfirmation = "<div class='modal-bg'>\
	<div id='order-confirmation'>\
		<h2>You are about to replace your offers</h2>\
		<p><strong>Your basket contains these special offers from offer code <span id='existing-oc'></span>:</strong></p>\
		<div id='old-offers'>\
		</div>\
		<br>\
		<p><strong>If you use code <span id='new-oc'></span> you will gain the offers below but the offers above will revert to their usual price:</strong></p>\
		<div id='new-offers'>\
		</div>\
		<br>\
		<p><strong>You can only use one order code per order. Please make your choice:</strong></p>\
		<br>\
		<div id='decision'>\
			<a href='#'><div id='keep'>\
				KEEP<br>\
				my existing offers\
			</div></a>\
			<a href='#'><div id='replace'>\
				REPLACE<br>\
				my existing offers\
			</div></a>\
		</div>\
	</div>\
</div>";

$('.ordercode').after(orderCodeConfirmation);

$('.modal-bg').attr('style', 'display: none; background:rgba(0, 0, 0, 0.33); position:fixed; top:0; left:0; width:100%; height:100%; z-index:10; ');

$('#order-confirmation').attr('style', 'left: 0; margin-left: 30%; position: fixed; top: 5%; width: 500px; z-index: 200; padding: 20px; background: white; border: solid 1px black');

$('#order-confirmation h2').attr('style', 'margin-bottom: 28px;');

$('#keep').attr('style', 'border: solid 1px black; width: 145px; background: #dddddd; text-align: center; padding: 2px; float: left; margin-left: 26px;');
$('#replace').attr('style', 'border: solid 1px black; width: 145px; background: #274e13; text-align: center; padding: 2px; color: white; float: right; margin-right: 26px;');

var cookieCode = getCookie("PROMO_MEDIA_COOKIE");
console.log("cookieCode: " + cookieCode);
$('#existing-oc').text(cookieCode);

var $newModal = $('.modal-bg');
$('.useOrderCode').click(function(e) {
	e.preventDefault();
    if ($newModal.is(":visible")) {
		$newModal.hide();
	} else {
		$('.ordercode').hide();
		$newModal.show();
	}
});

$('#keep').click(function(e) {
	e.preventDefault();
    if ($newModal.is(":visible")) {
		$newModal.hide();
	}
});

$('#old-offers').html(currentOfferProducts);


var basketProducts = [];
$('#removeTable tbody tr').each(function() {
	var link = $(this).find('a').attr('href');
	var n = link.lastIndexOf('/');
	var urlCode = link.substring(n + 1);
	basketProducts.push(urlCode);
});
console.log(basketProducts);

var offerCodeData = [];
$('.promotionImage').each(function() {
	var link = $(this).find('a').attr('href');
	var n = link.lastIndexOf('/');
	var urlCode = link.substring(n + 1);
	//for (var i = 0; i < basketProducts.length; i++) {
		//if (urlCode == basketProducts[i]) {
			var productText = $(this).next().find('p:nth-child(2)').text();
			console.log(productText);
			// var productTitle = productText.slice(8);
			// var i = productTitle.indexOf(' with your order');
			// productTitle = productTitle.substring(0, i);

			// var productInfo = {};
			// productInfo.title = productTitle;
			// productInfo.discountPrice = $.trim($(this).find('strong').text()).slice(4);
			// productInfo.normalPrice = $.trim($(this).next().find('.colorBlack:nth-child(1)').text()).slice(6);
			// productInfo.savings = "£" + (productInfo.normalPrice.slice(1) - productInfo.discountPrice.slice(1));

			// offerCodeData.push(productInfo);
		//}
	//}
});

console.log(offerCodeData);