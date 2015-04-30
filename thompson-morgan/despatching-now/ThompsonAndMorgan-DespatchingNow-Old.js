/* --------------------------- Change search section --------------------------- */

// Remove "Popular Searches" text
$('.popularSearches').remove();

// Create and insert new search links
var advancedSearch = "<div id='newSearchOptions'><a id='advancedSearch' href='/garden-plant-finder'>Advanced Search</a><a id='findPlant' href='/atoz'>Find Plant By Name</a></div>";
$('.search-portlet').append(advancedSearch);

// Style new search links
$('.search-portlet a').attr('style', 'color: #636363 !important; text-decoration: underline;');
$('#findPlant').attr('style', 'color: #636363 !important; text-decoration: underline; margin-left: 38px');
$('#newSearchOptions').attr('style', 'margin-top: 9px');
$('#findPlant').mouseenter(function() {
	$('this').attr('style', 'text-decoration: none;');
});


/* --------------------------- Change nav bar --------------------------- */

// Rearrange nav order
var plantFinderBox = $('.toplevel:eq(5)');
var specialOffersBox = $('.toplevel:eq(0)');
plantFinderBox.insertAfter(specialOffersBox);

// Remove dropdown content
$('#sub6').remove();
plantFinderBox.find('.sub').remove();

// Rename nav button and insert clock
$('#nav-5').html('Despatching <br> Now');
var clock = "<img id='clock' src='http://i.imgur.com/a6AGcjt.png'>";
var clock2 = "<img id='clock2' src='http://imgur.com/E4HeZu4.png'>";
$('#nav-5').after(clock);
$('#nav-5').after(clock2);

// Position nav text and clock icon
$('#nav-5').css({
	float: 'left',
	marginLeft: '15px',
	backgroundPosition: '55px 19px'
});
$('#clock').css({
	textAlign: 'right',
	height: '22px',
	width: '22px',
	float: 'right',
	marginTop: '4px',
	marginRight: '10px'
});
$('#clock2').css({
	textAlign: 'right',
	height: '22px',
	width: '22px',
	float: 'right',
	marginTop: '4px',
	marginRight: '10px',
	display: 'none'
});

// Change link href
var despatchingNowLink = plantFinderBox.find('a')[0];
$(despatchingNowLink).attr('href', '/despatch');

// Swap clock images on hover
var despatchingNowButton = $('.toplevel')[1];
$(despatchingNowButton).hover(function() {
	if ($('#clock').is(":visible")) {
		$('#clock').hide();
		$('#clock2').show();
	} else {
		$('#clock').show();
		$('#clock2').hide();
	}
});
