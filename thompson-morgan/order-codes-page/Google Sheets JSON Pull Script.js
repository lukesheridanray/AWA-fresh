var url = "https://spreadsheets.google.com/feeds/list/1y5KdfG3NTUNCCo89WRwNJ-dEatDQ_HB-s5qWntvaR6Q/od6/public/values?alt=json";

$.getJSON(url, function(data) {
	console.log(data);
	console.log(data.feed.entry[0].gsx$offerhtml.$t)
	$(".basketPromotions").append(data.feed.entry[0].gsx$offerhtml.$t);
});