/*--- Add Sort by label --- */

// Insert "Sort by:" label
var sortBar = $('.sortBy');
var sortByLabel = "<span style='float: left'>Sort by: </span>";
sortBar.prepend(sortByLabel);

// Style label
$('.sortBy fieldset').attr('style', 'float: left; margin-left: 5px');


/* --- Add despatch date variable --- */

// Add "Date of despatch" option
var despatchOption = "<option value='despatchDate' selected='selected'>Date of despatch</option>";
$('#orderResults').prepend(despatchOption);

// Remove currently selected attribute on the default option
var $priceHighLow = $('#orderResults').children()[3];
$priceHighLow.removeAttribute('selected');


/* --- Add "what's this?" and "why not sooner" mouseovers --- */
var exp = {};
exp.vars = {
    variation: 1,
    notsoonerModal: '<h3>Why can I not receive this plant sooner?</h3> \
        <p>Now is not the most suitable planting time for this plant. It will be \
        delivered direct to your door at just the right time for planting.</p> \
        <p>At the moment, your plants are being raised by our professional growers \
        so that you will receive the healthiest specimens possible.</p> \
        <p><strong>Why does this give you better quality plants?</strong></p> \
        <p>Plants sold in traditional outlets (such as garden centres and DIY \
        stores) are selected to look good whilst they are on display. Instead \
        we aim to give you healthy, long-lasting plants for continuous garden performance.</p> \
        <p>That’s why we confidently offer a unique Money Back “Triple” Guarantee \
        on every plant you buy.</p>',
    month: ["January","February","March","April","May","June","July",
            "August","September","October","November","December"],
	plant_types: {
	    plug:   'Plug', // will be overriden in the loop, if a more specific variation is found (e.g. Mini plug)
	    mini:   'Mini-plug',
	    jumbo:  'Jumbo',
	    posti:  'Postiplugs®',
	    garden: 'Garden Ready Plants',
	    potted: 'Potted plants',
	    bare:   'Bare roots',
	    large:  'Mature, Large Plants',
	    bulb:   'Bulbs',
	    seed:   'Seeds'
	    //No tubers!?
	},
    packagingModal: 'Loading...', // Loaded by AJAX
}

$('.despatch.prodPageDes').each(function () {
	var despatchText = $.trim( $(this).text().split(' ').splice(0,2).join('') );
	console.info(despatchText);
	switch(despatchText) {
	    case "Despatch:":
	        break;
	    case "Despatch:Within":
	        break;
	    default:
		    var month = $.trim( $(this).text().split(' ').splice(-2,1).join('') );
		    var date = new Date();
		    //date.setMonth(0); // Manually set month to test
		    var thisMonth = date.getMonth();
		    if (thisMonth == 11) {
		    	nextMonth = 0;
		    } else {
		    	nextMonth = thisMonth + 1;
		    }
			if (month && exp.vars.month.indexOf(month) != -1 && month == exp.vars.month[ date.getMonth() ]) {
		        console.warn('This listing is for this Month');
		    } else if (month && exp.vars.month.indexOf(month) != -1 && month == exp.vars.month[nextMonth]) {
		    	console.warn('This listing is for next month');
		    } else {
		    	console.warn('no');
		        $(this).append('<a href="#" class="hasTooltip' +
		        ' modal-link not-sooner-link">why not sooner?</a>' +
		        '<div class="hidden tooltip">' + exp.vars.notsoonerModal + '</div>');
			}
	}
});

$('.not-sooner-link').attr('style', 'color: #999 !important; font-size: .9em; text-decoration: underline; font-weight: normal; display: inline-block; position: relative; top: -5px; padding-left: 30px;');

$('.tooltip').attr('style', 'display: none; border: solid 1px #e2e2e2; width: 552px; height: 275px; border-radius: 6px; position: absolute; background-color: white; z-index: 10; margin-top: -300px;');

$('.tooltip h3').attr('style', 'padding: 15px; font-size: 1.2em');

$('.tooltip p').attr('style', 'font-weight: normal; padding: 0px 15px 10px 15px;');

$('.not-sooner-link').mouseenter(function() {
	//console.log($(this).next())
	var toolTop = $(this).next();
	if (toolTop.is(":hidden")) {
		toolTop.show();
	}
});

$('.not-sooner-link').mouseout(function() {
	if ($('.tooltip').is(":visible")) {
		$('.tooltip').hide();
	}
});



// Diagnostic
// $('.productInfoLeft .size').each(function () {
// 	var plant_type = '';
// 	p_type_tmp = $.trim($(this).text().toLowerCase());
// 	console.log(p_type_tmp);

// 	for (i in exp.vars.plant_types) {
// 		if (exp.vars.plant_types.hasOwnProperty(i)) {
// 			if (p_type_tmp.search(i) !== -1) {
// 				plant_type = exp.vars.plant_types[i]; // determine plant type
// 			}
// 		}
// 	}
// 	console.info(plant_type);
// 	console.log(" ");
// });
$.ajax({
    url: 'http://www.thompson-morgan.com/how-we-grow-and-send-your-plants',
    success: function (data) {
        var html = $(data);

        $('.productInfoLeft .size').each(function () {
			var plant_type = '';
			p_type_tmp = $.trim($(this).text().toLowerCase());
			//console.log(p_type_tmp);

			for (i in exp.vars.plant_types) {
				if (exp.vars.plant_types.hasOwnProperty(i)) {
					if (p_type_tmp.search(i) !== -1) {
						plant_type = exp.vars.plant_types[i]; // determine plant type
					}
				}
			}
			//console.info(plant_type);
			//console.log(" ");

	        html.find(".grid2, .footerPanel100").each(function () {
	            var image;
	            if ($(this).children('h2').text() == plant_type) {
	                image = $(this).find('img');
	                image.removeAttr('width');
	                image.removeAttr('height');
	                exp.vars.packagingModal = $(this).html();
	                //console.log(exp.vars.packagingModal)
	            }
	        });

	        // Set up packaging modal, if applicable
			if  (plant_type == "Mature, Large Plants") {
	        	$(this).after('<a href="#" class="hasTooltip modal-link packaging-info-link" style="color: green !important">what\'s this?</a>' + '<div class="more-vertical-space pkg-modal mature">' + exp.vars.packagingModal + '</div>');
			}	       
	        else if (plant_type != "") {
	        	$(this).after('<a href="#" class="hasTooltip modal-link packaging-info-link" style="color: green !important">what\'s this?</a>' + '<div class="more-vertical-space pkg-modal">' + exp.vars.packagingModal + '</div>');
	    	}


	        $('.more-vertical-space.pkg-modal').attr('style', 'width: 550px; height: 202px; border: solid 1px #e2e2e2; border-radius: 6px; background-color: white; position: absolute; z-index: 10; display: none');
	        $('.more-vertical-space.pkg-modal img').attr('style', 'float: left; padding-left: 10px; margin-top: 26px; width: 150px; height: 150px');
	        $('.more-vertical-space.pkg-modal h2').attr('style', 'float: left; font-size: 15px; width: 372px; margin-top: 30px; margin-left: 10px;');
	        $('.more-vertical-space.pkg-modal p').attr('style', 'font-weight: normal; margin-left: 170px; padding-right: 5px');
	        $('.more-vertical-space.pkg-modal.mature').attr('style', 'width: 550px; height: 254px; border: solid 1px #e2e2e2; border-radius: 6px; background-color: white; position: absolute; z-index: 10; display: none');
	        $('.more-vertical-space.pkg-modal.mature img').attr('style', 'float: left; padding-left: 10px; margin-top: 53px; width: 150px; height: 150px');

	        $('a.hasTooltip.modal-link.packaging-info-link').attr('style', 'color: #999 !important; font-size: .9em; text-decoration: underline; font-weight: normal; display: inline-block; position: relative; padding-left: 10px;');

	       
			$('.stockInfo li.size').attr('class', 'new-li-size');
			$('.new-li-size').attr('style', 'width: max-width: 160px; font-weight: bold; color: black');

	        //$('.stockInfo li.price').attr('style', 'margin-top: -40px');

	        $('.hasTooltip').mouseenter(function() {
				var toolTip = $(this).next();
				if (toolTip.is(":hidden")) {
					toolTip.show();
				}
			});

			$('.hasTooltip').mouseout(function() {
				var toolTip = $(this).next();
				if (toolTip.is(":visible")) {
					toolTip.hide();
				}
			});
		});
    }   
});
